import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
// import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400"],
});

// Descomentar cuando existan los .woff2 en src/app/fonts/ (ver plan Fase 1.2)
// const editorial = localFont({
//   src: [
//     { path: "./fonts/PPEditorialNew-Regular.woff2", weight: "400" },
//     {
//       path: "./fonts/PPEditorialNew-Italic.woff2",
//       weight: "400",
//       style: "italic",
//     },
//   ],
//   variable: "--font-display",
// });

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
      className={`${inter.variable} ${mono.variable}`}
      style={
        {
          ["--font-display"]:
            '"PP Editorial New", Tiempos Headline, Georgia, serif',
        } as React.CSSProperties
      }
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
