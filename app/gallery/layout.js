import Header from "@/components/gallery/Header";

export default function GalleryLayout({ children }) {
  return (
    <div className="min-h-screen font-montserrat">
      <Header />
      {children}
    </div>
  );
}
