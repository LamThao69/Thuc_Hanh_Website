import "./globals.css";
import type { Metadata } from "next";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "Good News",
  description: "Good news of the day",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
