import Link from "next/link";

export default function Nav({ className }) {
  return (
    <div
      className={`flex gap-3 justify-between text-base font-medium uppercase ${className}`}
    >
      <Link href={"/service"}>Services</Link>
      <Link href={"/gallery"}>GALLERY</Link>
      <Link href={"/about"}>About us</Link>
    </div>
  );
}
