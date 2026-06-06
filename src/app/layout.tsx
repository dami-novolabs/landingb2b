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
  title: "Escalar sin contratar — Agentes de IA para tu empresa | Novolabs",
  description:
    "Construimos los agentes de IA que tu operación necesita para escalar. En 12 semanas, dentro de tu empresa, trabajando con tu equipo. Sin aumentar headcount.",
  keywords: [
    "agentes de IA para empresas",
    "escalar operaciones sin contratar",
    "automatización con IA empresa",
    "implementar IA en operaciones",
    "agentes autónomos empresa",
    "Novolabs",
  ],
  openGraph: {
    title: "Escalar sin contratar — Agentes de IA para tu empresa | Novolabs",
    description:
      "Construimos los agentes de IA que tu operación necesita para escalar. En 12 semanas, dentro de tu empresa, trabajando con tu equipo.",
    type: "website",
    locale: "es_AR",
  },
  alternates: {
    canonical: "https://novolabs.app",
  },
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
