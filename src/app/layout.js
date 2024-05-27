import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <NavbarComponent />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
