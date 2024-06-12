import type {Metadata, Viewport} from "next";
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

export const viewport: Viewport = {
  width: 'device-width',
  // initialScale: 0,
  // userScalable: true
}



export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={font.className}>
    <Header/>
    {/*<main>*/}
    {/*  <div className={styles.circle_big}></div>*/}
    {/*  <div className={styles.circle_small}></div>*/}
    {/*  <div className={styles.page}>*/}
    {/*    {children}*/}
    {/*  </div>*/}
    {/*</main>*/}
    <footer></footer>
    </body>
    </html>
  );
}
