import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brasea.com.br"),
  title: "Brasea — Aprenda culinária profissional com aulas técnicas e IA 24h",
  description:
    "Aulas gravadas por chef com +20 anos e assistente de IA para tirar dúvidas culinárias a qualquer hora. Acesse pelo celular, sem instalar nada.",
  openGraph: {
    title:
      "Brasea — Aprenda culinária profissional com aulas técnicas e IA 24h",
    description:
      "Aulas gravadas por chef com +20 anos e assistente de IA para tirar dúvidas culinárias a qualquer hora. Acesse pelo celular, sem instalar nada.",
    images: [{ url: "/lp/OG-image.png", width: 1200, height: 630 }],
    url: "https://brasea.com.br",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: "index, follow",
  alternates: { canonical: "https://brasea.com.br" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
