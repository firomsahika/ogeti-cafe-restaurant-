// app/layout.js (or .tsx)
import { Poppins, Raleway } from "next/font/google";
import "./globals.css";

import { BackgroundAnimation } from "../components/BackgroundAnimation";
import Header from "../components/Header"
import Footer from "../components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins", 
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-raleway",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}> 
      <body className="font-raleway">
         <div className="fixed inset-0 -z-10">
            <BackgroundAnimation />
          </div>
      
          <div className="relative z-10">
              <Header />
              <main className="px-10 md:px-20  lg:px-20">{children}</main>
              <Footer />
          </div>
      </body>
    </html>
  );
}