import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/app/context/LanguageProvider";

export const metadata: Metadata = {
  title: "Portfolio | Santiago Valverde",
  description:
    "Professional portfolio with projects, technologies and software development experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full overflow-x-hidden">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
