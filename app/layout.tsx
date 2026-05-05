import type { Metadata } from "next";
import { JetBrains_Mono, Playfair_Display, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { DottedSurface } from "@/app/components/DottedSurface";
import { LanguageProvider } from "@/app/context/LanguageProvider";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-body",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

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
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${sourceSerif.variable} ${jetBrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
      data-theme="dark"
    >
      <body className="min-h-full">
        <div className="relative flex min-h-full flex-col overflow-x-hidden">
          <DottedSurface className="opacity-90" />
          <div className="relative z-10 flex min-h-full flex-col">
            <LanguageProvider>{children}</LanguageProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
