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
  title: "Automatización con IA para Empresas | Novolabs — Buenos Aires & Madrid",
  description:
    "Novolabs construye infraestructura de agentes de IA dentro de tu empresa en 12 semanas. Para CEOs y COOs que quieren escalar sin contratar. Solo 2 clientes por trimestre.",
  keywords: [
    "automatización de operaciones con IA para empresas",
    "implementar agentes de IA en empresa",
    "consultoría de automatización con IA",
    "escalar operaciones sin aumentar headcount",
    "agentes autónomos empresa",
    "Novolabs",
  ],
  openGraph: {
    title: "Automatización con IA para Empresas | Novolabs — Buenos Aires & Madrid",
    description:
      "Novolabs construye infraestructura de agentes de IA dentro de tu empresa en 12 semanas. Para CEOs y COOs que quieren escalar sin contratar. Solo 2 clientes por trimestre.",
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
