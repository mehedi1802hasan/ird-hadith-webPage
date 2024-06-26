import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ird",
  description: "ird foundation ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`{inter.className} bg-[#F2F4F6] `}>{children}</body>
    </html>
  );
}
