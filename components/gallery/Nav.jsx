"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  return (
    <div className="w-full">
      <div className="flex md:justify-center gap-4 px-4 text-[#0000007F] font-medium lg:text-xl text-lg overflow-x-auto snap-mandatory">
        <Link
          href={"/gallery"}
          className={`py-2 snap-center ${
            pathname === "/gallery"
              ? "text-black border-b-[2px] border-b-black"
              : ""
          }`}
        >
          WEDDINGS
        </Link>
        <Link
          href={"/gallery/birthday"}
          className={`py-2 snap-center ${
            pathname === "/gallery/birthday"
              ? "text-black border-b-[1px] border-b-black"
              : ""
          }`}
        >
          BIRTHDAYS
        </Link>
        <Link
          href={"/gallery/events"}
          className={`py-2 snap-center ${
            pathname === "/gallery/events"
              ? "text-black  border-b-[1px] border-b-black"
              : ""
          }`}
        >
          EVENTS
        </Link>
        <Link
          href={"/gallery/maternity"}
          className={`py-2 snap-center ${
            pathname === "/gallery/maternity"
              ? "text-black border-b-[1px] border-b-black"
              : ""
          }`}
        >
          MATERNITY
        </Link>
        <Link
          href={"/gallery/products"}
          className={`py-2 snap-center ${
            pathname === "/gallery/products"
              ? "text-black border-b-[1px] border-b-black"
              : ""
          }`}
        >
          PRODUCTS
        </Link>
        <Link
          href={"/gallery/cinematography"}
          className={`py-2 snap-center ${
            pathname === "/gallery/cinematography"
              ? "text-black border-b-[1px] border-b-black"
              : ""
          }`}
        >
          CINEMATOGRAPHY
        </Link>
      </div>
    </div>
  );
}
