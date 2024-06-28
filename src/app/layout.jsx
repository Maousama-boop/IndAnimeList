import { Gabarito } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavigationBar";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata = {
  title: "IndAnimeList",
  description: "Indonesia Anime List Form Dwiguna School",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${gabarito.className} bg-color-dark`} suppressContentEditableWarning={true}>
        <NavBar />
        {children}
        </body>
    </html>
  )
}
