import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "에코원 | 칠보세라믹",
  description: "단순한 활력을 넘어 몸속 깊은 곳의 균형까지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
