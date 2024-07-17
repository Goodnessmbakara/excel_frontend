import Header from "@/components/header/Header";
import "./globals.css";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Excel Imagary",
  description: "Capturing Beautiful Moments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
