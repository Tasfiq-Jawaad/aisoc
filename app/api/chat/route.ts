import { getUpcomingEvents, getPastEvents } from "@/lib/actions/event";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/actions/blog";

export const maxDuration = 30;

const openRouterKey = process.env.OPENROUTER_API_KEY || "";


const model = process.env.MODEL || "google/gemini-2.0-flash-001";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const executeTool = async (name: string, args: any) => {
      if (name === "getUpcomingEvents") return await getUpcomingEvents();
      if (name === "getPastEvents") return await getPastEvents();
      if (name === "getAllBlogs") return await getAllBlogPosts();
      if (name === "getBlogBySlug") return await getBlogPostBySlug(args.slug);
      return { result: "No results found." };
    };

    const openRouterTools = [
      {
        type: "function",
        function: {
          name: "getUpcomingEvents",
          description: "Get a list of all upcoming and active events, including dates and location.",
          parameters: { type: "object", properties: {}, required: [] }
        }
      },
      {
        type: "function",
        function: {
          name: "getPastEvents",
          description: "Get a list of historical/past events that have already concluded.",
          parameters: { type: "object", properties: {}, required: [] }
        }
      },
      {
        type: "function",
        function: {
          name: "getAllBlogs",
          description: "Retrieve all published blog posts with their titles, slugs, excerpts, and authors.",
          parameters: { type: "object", properties: {}, required: [] }
        }
      },
      {
        type: "function",
        function: {
          name: "getBlogBySlug",
          description: "Fetch the complete content and details of a specific blog post by providing its exact url slug.",
          parameters: {
            type: "object",
            properties: {
              slug: { type: "string", description: "The url slug of the blog post to retrieve" }
            },
            required: ["slug"]
          }
        }
      }
    ];

    let conversation = [
      {
        role: "system",
        content: "You are MicroChip, a friendly mascot of the Leeds Artificial Intelligence Society. Be enthusiastic and always introduce yourself to new users. Answer queries about the society or general AI topics. Be concise and use markdown formatting where appropriate. Provide the source or reference titles if useful."
      },
      ...messages.map((m: any) => ({
        role: m.role === "user" ? "user" : "assistant",
        content: m.content
      }))
    ];

    let openrouterRes = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${openRouterKey}`,
        "HTTP-Referer": "http://localhost:3000",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: model,
        messages: conversation,
        tools: openRouterTools,
        tool_choice: "auto"
      })
    });

    let data = await openrouterRes.json();

    if (data.error) throw new Error(data.error.message || "Failed OpenRouter response");

    let messageObj = data.choices[0].message;
    let loopCount = 0;

    while (messageObj.tool_calls && messageObj.tool_calls.length > 0 && loopCount < 5) {
      loopCount++;
      conversation.push(messageObj);

      for (const call of messageObj.tool_calls) {
        try {
          const args = JSON.parse(call.function.arguments || "{}");
          const reqData = await executeTool(call.function.name, args);

          conversation.push({
            role: "tool",
            tool_call_id: call.id,
            name: call.function.name,
            content: JSON.stringify({ result: reqData })
          } as any);
        } catch (e: any) {
          conversation.push({
            role: "tool",
            tool_call_id: call.id,
            name: call.function.name,
            content: JSON.stringify({ error: e.message })
          } as any);
        }
      }

      openrouterRes = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${openRouterKey}`,
          "HTTP-Referer": "http://localhost:3000",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: model,
          messages: conversation,
          tools: openRouterTools,
          tool_choice: "auto"
        })
      });

      data = await openrouterRes.json();
      if (data.error) throw new Error(data.error.message || "Failed OpenRouter response");
      messageObj = data.choices[0].message;
    }

    return Response.json({ text: messageObj.content });

  } catch (err: any) {
    console.error(err);
    return Response.json({ error: err.message }, { status: 500 });
  }
}
