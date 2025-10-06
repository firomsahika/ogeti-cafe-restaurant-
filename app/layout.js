// app/layout.js (or .tsx)
import { Poppins } from "next/font/google";
import "./globals.css";

import { BackgroundAnimation } from "@/components/BackgroundAnimation";
import Header from "../components/Header"
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins", // 1. Define the variable
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}> 
      <body className="font-poppins">
         <div className="fixed inset-0 -z-10">
            <BackgroundAnimation />
          </div>
      
          <div className="relative z-10">
              <Header />
              <main className="px-20">{children}</main>
              <Footer />
          </div>
      </body>
    </html>
  );
}