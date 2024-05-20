import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Provider from "./Provider";
import NavBar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Imdb clone",
  description: "Imdb clone wed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          <NavBar />
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
