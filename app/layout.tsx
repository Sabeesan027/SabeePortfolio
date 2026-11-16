import type { Metadata } from "next";
import { Geist, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SABEESAN | Full-Stack Software Engineer & Builder",
  description:
    "Full-Stack Software Engineer & BSc (Hons) Software Engineering undergraduate specializing in Next.js, React, Django, Node.js, Kotlin, PostgreSQL, and scalable systems.",
  keywords: [
    "Sabeesan",
    "Sabeesan Gnanavel",
    "Sabeesan.G",
    "Full-Stack Software Engineer",
    "Next.js",
    "Django",
    "Kotlin",
    "PostgreSQL",
    "Sri Lanka Software Engineer",
  ],
  authors: [{ name: "Sabeesan Gnanavel" }],
  openGraph: {
    title: "SABEESAN | Full-Stack Software Engineer & Builder",
    description:
      "I design and develop scalable web, mobile, and enterprise solutions with a focus on clean architecture, performance, and real-world impact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full bg-[#080D16] text-[#EAF3FF] flex flex-col selection:bg-[#00D5E8]/30 selection:text-white font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
