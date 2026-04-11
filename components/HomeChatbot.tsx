"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, User, Bot, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

type Message = {
  id: string;
  role: "user" | "model";
  content: string;
};

export default function HomeChatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatHeight, setChatHeight] = useState("auto");
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length === 1 && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setChatHeight(`calc(100vh - ${rect.top + 160}px)`);
    }
  }, [messages.length]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) throw new Error("Failed to fetch response");

      const data = await response.json();
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "model",
        content: data.text || "Sorry, no response was generated.",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, {
        id: (Date.now() + 1).toString(),
        role: "model",
        content: "Oops! Something went wrong. Please try again.",
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="flex flex-col w-full transition-[height] duration-300 ease-out"
      style={{ height: messages.length > 0 ? chatHeight : "auto" }}
    >
      <div
        ref={scrollRef}
        className={`flex flex-col ${messages.length > 0 ? 'gap-4 overflow-y-auto mb-4 flex-1 pr-2 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[#eb5b6c]/20 hover:[&::-webkit-scrollbar-thumb]:bg-[#eb5b6c]/40 [&::-webkit-scrollbar-thumb]:rounded-full transition-colors' : 'mb-5'}`}
      >
        <div className={`animate-in fade-in duration-500 ${messages.length > 0 ? 'mb-4' : ''}`}>
          <h1 className="text-2xl xxs:text-3xl xl:text-5xl font-extrabold tracking-tight text-white">
            Welcome to Leeds Artificial Intelligence Society
          </h1>
          <div className="mt-2 h-1 w-20 rounded-full [background:#eb5b6c99]" />
          <p className="mt-5 text-lg text-gray-400">
            Your home for all things artificial intelligence at the University
            of Leeds
          </p>
        </div>

        {messages.length > 0 && messages.map((m) => (
          <div
            key={m.id}
            className={`flex gap-3 w-full min-w-0 ${m.role === "user" ? "flex-row-reverse" : "flex-row"}`}
          >
            <div
              className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center border shadow-sm ${m.role === "user"
                ? "bg-white/10 border-white/20 text-white"
                : "bg-[#eb5b6c20] border-[#eb5b6c40] text-[#eb5b6c]"
                }`}
            >
              {m.role === "user" ? <User size={14} /> : <Bot size={14} />}
            </div>
            <div
              className={`max-w-[90%] min-w-0 overflow-hidden rounded-xl px-4 py-3 text-sm ${m.role === "user"
                ? "bg-white/10 text-white rounded-tr-sm"
                : "bg-black/20 border border-white/5 text-gray-300 rounded-tl-sm"
                }`}
            >
              <div className="prose prose-invert prose-sm max-w-full min-w-0 wrap-break-word overflow-x-hidden prose-p:leading-relaxed prose-a:text-[#eb5b6c] hover:prose-a:text-[#ff6b7b] prose-pre:max-w-full prose-pre:overflow-x-auto">
                <ReactMarkdown>{m.content}</ReactMarkdown>
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3 flex-row">
            <div className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center border bg-[#eb5b6c20] border-[#eb5b6c40] text-[#eb5b6c]">
              <Bot size={14} />
            </div>
            <div className="bg-black/20 border border-white/5 rounded-xl px-4 py-3 rounded-tl-sm flex items-center gap-2 text-[#eb5b6c]/70">
              <Loader2 size={14} className="animate-spin" />
              <span className="text-xs font-mono tracking-widest uppercase">Thinking...</span>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="relative w-full">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={isLoading}
          placeholder="Ask me about the society, events or blogs..."
          aria-label="Chat input"
          className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 pr-12 text-gray-100 placeholder-gray-500 outline-none transition focus:border-[#eb5b6c99] focus:ring-2 focus:[--ring-color:#eb5b6c33] focus:[box-shadow:0_0_0_3px_var(--ring-color)] disabled:opacity-50"
        />
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/5" />

        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-2 text-gray-400 hover:text-[#eb5b6c] transition disabled:opacity-50 disabled:hover:text-gray-400 cursor-pointer disabled:cursor-not-allowed"
        >
          <Send size={18} />
        </button>
        {messages.length === 0 && (
          <div className="scan-container pointer-events-none">
            <div className="scan-line"></div>
            <div className="scan-highlight"></div>
          </div>
        )}
      </form>
      <div className="text-center mt-3">
        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-mono block">
          AI can make mistakes. Verify important information.
        </span>
      </div>
    </div>
  );
}
