import About from "@/components/about/About";
import BookingButton from "@/components/BookingButton";

export default function page() {
  return (
    <div className="min-h-screen">
      <About />
      <BookingButton />
    </div>
  );
}
