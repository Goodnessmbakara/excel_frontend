import Header from "@/components/header/Header";
import "./globals.css";

export const metadata = {
  title: "Excel Imagary",
  description: "Capturing Memories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
