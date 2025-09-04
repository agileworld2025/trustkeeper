import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "@/component/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "TrustKeeper",
  description: "TrustKeeper",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
