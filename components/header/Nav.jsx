import Link from "next/link";

export default function Nav({ className }) {
  return (
    <div className={`flex gap-3 text-base font-medium leading-4 ${className}`}>
      <Link href={"/service"}>Services</Link>
      <Link href={"/gallery"}>GALLERY</Link>
      <Link href={"/about"}>About us</Link>
    </div>
  );
}
