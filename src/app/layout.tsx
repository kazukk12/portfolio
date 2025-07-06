import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "welcome to my portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="pt-16">
        {/* 共通ヘッダー */}
        <Header />

        {/* ページの中身 */}
        <main>{children}</main>

        {/* 共通フッター */}
        <Footer />
      </body>
    </html>
  );
}
