import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import favicon from "../assets/avatar.png";
export const metadata: Metadata = {
  title: "개발자 왕규하",
  description: "프론트엔드 개발자 포트폴리오, 왕규하 포트폴리오",
  icons: {
    icon: favicon.src,
  },
};
const noto = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--noto-sans",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="kr" className={noto.className}>
      <body>{children}</body>
    </html>
  );
}
