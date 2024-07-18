import Header from "@/components/gallery/Header";

export default function GalleryLayout({ children }) {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
    </div>
  );
}
