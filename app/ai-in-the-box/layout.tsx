import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hackathon: AI in the Box | Leeds Artificial Intelligence Society",
  description:
    "The Leeds Artificial Intelligence Society presents, Hackathon: AI in the Box. Step into the future and unleash your creativity! This immersive 24h hackathon challenges you to design, build, and showcase innovative artificial intelligence applications from the ground up. Whether you are developing smart assistants, predictive models, or generative AI tools, this is your opportunity to bring your boldest ideas to life.",
  openGraph: {
    url: "https://www.leedsaisoc.co.uk/ai-in-the-box/",
    siteName: "Hackathon: AI in the Box",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="min-h-dvh w-full overflow-x-hidden">{children}</div>;
}
