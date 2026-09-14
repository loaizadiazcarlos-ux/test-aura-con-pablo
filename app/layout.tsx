import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rest ia — Lo que se te antoje, donde estés",
  description:
    "Comida rápida multiopción en Latinoamérica. Elige tu país, arma tu pedido y disfruta.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${inter.variable} h-full antialiased`}
      style={{ colorScheme: "light" }}
    >
      <body className="min-h-full flex flex-col font-sans bg-gray-1 text-gray-12">
        {children}
      </body>
    </html>
  );
}
