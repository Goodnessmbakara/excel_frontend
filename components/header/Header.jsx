"use client";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="sticky top-0 bg-white z-30 font-montserrat">
      <div className="relative ">
        <div className="w-[90%] mx-auto max-w-[1440px] border-b-[1px]  md:py-4 py-3 ">
          <div className="flex justify-between items-center uppercase font-raleway">
            <Link href={"/"}>
              <Image
                src={"/images/logo.png"}
                alt="logo"
                width={80}
                height={44}
              />
            </Link>
            <div className="flex gap-3 text-base font-medium">
              <Nav className="hidden md:flex" />
            </div>
            <div className="flex items-center gap-4">
              <Link
                href={"/contact"}
                className={`hidden md:inline-block border-[1px] border-black rounded-full px-4 py-3 text-base font-medium uppercase push-effect ${
                  pathname === "/contact" ? "bg-[#111] text-white" : ""
                }`}
              >
                Contact us
              </Link>
              <button
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
                className="inline-block md:hidden"
              >
                <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} className="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
