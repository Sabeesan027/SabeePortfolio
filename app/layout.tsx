import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sabeesan Gnanavel (Sabeesan.G) | Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer & BSc (Hons) Software Engineering Undergraduate specializing in Next.js, React, Django, Node.js, Kotlin, PostgreSQL, and scalable cloud-deployed systems.",
  keywords: [
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
    title: "Sabeesan Gnanavel (Sabeesan.G) | Full-Stack Software Engineer",
    description:
      "Building scalable web, mobile, and enterprise applications with Next.js, Django, Node.js, Kotlin, and PostgreSQL.",
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
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full bg-[#090A0F] text-slate-100 flex flex-col selection:bg-cyan-500/30">
        {children}
      </body>
    </html>
  );
}
