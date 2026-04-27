import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Login",
  description: "Login to Dragon News",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}  h-full antialiased`}>
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
