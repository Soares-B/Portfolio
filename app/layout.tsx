

import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import Preloader from "@/components/Preload";

import { LoadingProvider } from "@/config/context";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const Montserrat = localFont({
  src: [
    {
      path: "./fonts/Montserrat/Montserrat-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/Montserrat/Montserrat-Italic-VariableFont_wght.ttf",
      weight: "100 900",
      style: "italic",
    },
  ],
  variable: "--font-montserrat"
})

const TypeWritter = localFont({
  src: "./fonts/TypoSlab Irregular.otf",
  variable: '--font-typewritter'
})

export const metadata: Metadata = {
  title: "Bruno's Portfolio",
  description: "Bruno Soares Portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", "[scrollbar-width:none]", "[&::-webkit-scrollbar]:hidden", geist.variable)}
    >
      <body className={`${Montserrat.variable} ${TypeWritter.variable} bg-black`}>
        <LoadingProvider>
          <Preloader />
          {children}
        </LoadingProvider>
        </body>
    </html>
  );
}
