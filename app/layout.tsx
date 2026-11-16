import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var stored=localStorage.getItem("sabeesan-theme");var isDark=stored?(stored==="dark"):(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches);if(isDark){document.documentElement.classList.add("dark");document.documentElement.classList.remove("light");document.documentElement.setAttribute("data-theme","dark");document.documentElement.style.colorScheme="dark";}else{document.documentElement.classList.remove("dark");document.documentElement.classList.add("light");document.documentElement.setAttribute("data-theme","light");document.documentElement.style.colorScheme="light";}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full bg-[#F8FAFD] text-[#102039] dark:bg-[#030B16] dark:text-[#F5F9FF] flex flex-col selection:bg-[#00C8FF]/30 transition-colors duration-300">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
