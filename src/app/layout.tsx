import type {Metadata} from "next";
import {Montserrat} from "next/font/google";
import "./globals.scss";
import Header from "@/components/header/header";

const font = Montserrat({
  weight: ['300'],
  subsets: ['latin', "cyrillic"]
});

export const metadata: Metadata = {
  title: "Raffiner Design",
  description: "",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
