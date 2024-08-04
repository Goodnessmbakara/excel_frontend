import Header from "@/components/header/Header";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import { Raleway, Montserrat } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ralaway",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Excel Imagary",
  description:
    "Capturing Beautiful Moments - Professional Photography and Videography Services",
  keywords:
    "photography, videography, wedding photography, portraits, events, Excel Imagary",
  author: "Excel Imagary",
  robots: "index, follow",
  openGraph: {
    title: "Excel Imagary - Professional Photography and Videography",
    description:
      "Capture life's precious moments with our expert photography and videography services.",
    type: "website",
    url: "https://excel-frontend-seven.vercel.app/",
    image: "/gallery/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${raleway.variable} ${montserrat.variable}`}>
      <body className={`bg-white text-black font-montserrat`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
