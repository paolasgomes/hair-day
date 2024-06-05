import type { Metadata } from "next";
import "@/styles/globals.css";
import { catamaran } from "@/fonts";
import { Providers } from "@/providers";

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
      <body className={`${catamaran.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
