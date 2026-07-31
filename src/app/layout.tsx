import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import type { ReactNode } from "react";

import { MotionProvider } from "@/components/motion-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { perfil, siteUrl } from "@/content/perfil";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${perfil.nome} | ${perfil.cargo}`,
    template: `%s | ${perfil.nome}`,
  },
  description:
    "Construo aplicações web completas, do banco de dados ao deploy, com Next.js, TypeScript, Node e PostgreSQL.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: perfil.nome,
    title: `${perfil.nome} | ${perfil.cargo}`,
    description:
      "Construo aplicações web completas, do banco de dados ao deploy, com Next.js, TypeScript, Node e PostgreSQL.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${perfil.nome} | ${perfil.cargo}`,
    description:
      "Construo aplicações web completas, do banco de dados ao deploy, com Next.js, TypeScript, Node e PostgreSQL.",
  },
};

const initializeTheme = `try{if(!localStorage.getItem("theme")){localStorage.setItem("theme","system")}}catch(e){}`;

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className="dark" lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initializeTheme }} />
      </head>
      <body className={`${inter.variable} ${orbitron.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MotionProvider>{children}</MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
