import { QueryProvider } from "@/providers/query-provider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`bg-black antialiased`}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
