import type {Metadata} from "next";
import {Montserrat} from "next/font/google";
import "./globals.scss";
import Header from "@/components/header/header";
import styles from './layout.module.scss';

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
    <Header/>
    <main>
      <div className={styles.circle_big}></div>
      <div className={styles.circle_small}></div>
      <div className={styles.page}>
        {children}
      </div>
    </main>
    <footer></footer>
    </body>
    </html>
  );
}
