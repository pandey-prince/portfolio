import type { CSSProperties } from "react";
import type { Metadata, Viewport } from "next";
import { Instrument_Serif, DM_Sans, DM_Mono } from "next/font/google";
import { siteConfig } from "@/lib/config";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const mono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
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
  themeColor: "#fdfaf0",
};

const themeScript = `
(function() {
  try {
    if (localStorage.getItem('prince-portfolio-dark') === 'true') {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.dataset.darkPending = '1';
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={sans.className}
        style={
          {
            "--serif": "var(--font-serif), Georgia, serif",
            "--mono": "var(--font-mono), monospace",
            "--sans": "var(--font-sans), sans-serif",
          } as CSSProperties
        }
        suppressHydrationWarning
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `if(document.documentElement.dataset.darkPending==='1'){document.body.classList.add('dark-mode');}`,
          }}
        />
        <a
          href="#main"
          className="sr-only"
          style={{
            position: "absolute",
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0,0,0,0)",
            whiteSpace: "nowrap",
            border: 0,
          }}
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
