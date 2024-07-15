"use client";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-[90%] mx-auto max-w-[1440px] py-6">
      <div className="flex justify-between items-center uppercase">
        <Image src={"/images/logo.png"} alt="logo" width={80} height={44} />
        <div className="flex gap-3 text-base font-medium leading-4">
          <Nav className="hidden md:flex" />
        </div>
        <div className="flex items-center gap-4">
          <Link
            href={"/contact"}
            className="hidden md:inline-block border-[1px] border-black rounded-[60px] px-4 py-3 text-base font-medium leading-4 uppercase"
          >
            Contact us
          </Link>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <MobileNav className="inline-block md:hidden" />
          </button>
        </div>
      </div>
    </div>
  );
}
