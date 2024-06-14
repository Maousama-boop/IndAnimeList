import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/Utilities/NavigationBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IndAnimeList",
  description: "Indonesia Anime List Form Dwiguna School",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <NavBar />
        {children}
        </body>
    </html>
  )
}
