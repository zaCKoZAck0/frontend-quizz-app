import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { Navigation } from "./_components/Navigation";
import { Rings } from "./_components/Rings";
import { Providers } from "./providers";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Providers>
        <body className={rubik.className}>
          <Rings />
          <Navigation />
          {children}
        </body>
      </Providers>
    </html>
  );
}
