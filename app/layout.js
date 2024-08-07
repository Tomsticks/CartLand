import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/mainComponent/header";
import Nav from "./components/mainComponent/nav";
import Footer from "./components/mainComponent/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CartLand",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
