import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "kocyol",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      
      <body className={inter.className}>
        <Header />
        {children}</body>
    </html>
  );
}
