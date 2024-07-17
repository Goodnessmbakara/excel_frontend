"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav({ className }) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div
      className={`flex gap-3 justify-between text-base font-medium uppercase ${className}`}
    >
      <Link
        href={"/service"}
        className={`py-2 ${
          pathname === "/service" ? "border-b-[1px] border-black" : ""
        }`}
      >
        Services
      </Link>
      <Link
        href={"/gallery"}
        className={`py-2 ${
          pathname === "/gallery" ? "border-b-[1px] border-black" : ""
        }`}
      >
        GALLERY
      </Link>
      <Link
        href={"/about"}
        className={`py-2 ${
          pathname === "/about" ? "border-b-[1px] border-black" : ""
        }`}
      >
        About us
      </Link>
    </div>
  );
}
