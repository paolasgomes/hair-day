import type { Metadata } from "next";
import "@/styles/globals.css";
import { catamaran } from "@/fonts";

export const metadata: Metadata = {
  title: "Hair Day",
  description: "Aplicação Web de agendamento de cortes de cabelo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${catamaran.variable}`}>{children}</body>
    </html>
  );
}
