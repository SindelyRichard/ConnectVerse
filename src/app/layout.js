import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ConnectVerse",
  description: "ConnectVerse is a robust online platform designed for engaging discussions and community interaction. Built with user experience in mind, ConnectVerse offers a variety of features to facilitate seamless communication and knowledge sharing among users.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
