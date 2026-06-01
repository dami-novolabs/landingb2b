import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400"],
});

const editorial = localFont({
  src: [
    { path: "./fonts/PPEditorialNew-Regular.woff2", weight: "400" },
    {
      path: "./fonts/PPEditorialNew-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Novo Labs",
  description: "Programa estratégico B2B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${mono.variable} ${editorial.variable}`}
    >
      <body className="min-h-full flex flex-col font-sans">
          <SmoothScroll>{children}</SmoothScroll>
        </body>
    </html>
  );
}
