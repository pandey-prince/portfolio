import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-code",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-princepandey.vercel.app"),
  title: siteConfig.title,
  description:
    "Prince Pandey is a full-stack developer building responsive web applications, REST APIs, and database-backed products with React, TypeScript, Node.js, PostgreSQL, and MongoDB. Available for full-time roles and freelance work.",
  keywords: [
    "Prince Pandey",
    "Full-Stack Developer",
    "MERN Developer",
    "React",
    "Next.js",
    "Node.js",
    "Freelance Developer",
    "Software Engineer",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: siteConfig.title,
    description:
      "Full-stack developer building responsive web apps and reliable APIs. Open to roles and freelance projects.",
    type: "website",
    url: "https://portfolio-princepandey.vercel.app",
  },
  icons: { icon: "/favicon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#080b12",
};

const themeScript = `
(function() {
  try {
    var t = localStorage.getItem('prince-portfolio-theme');
    if (t !== 'light' && t !== 'dark') { t = 'dark'; }
    document.documentElement.setAttribute('data-theme', t);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${mono.variable} antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-black"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
