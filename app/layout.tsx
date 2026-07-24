import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALT | Diagnóstico e crescimento de empresas",
  description:
    "A ALT diagnostica, estrutura e acelera o crescimento de empresas por meio de estratégia, marca, aquisição e direção comercial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
