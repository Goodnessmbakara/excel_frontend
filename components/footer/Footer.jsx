import Nav from "../header/Nav";
import { FaSquareInstagram, FaFacebook, FaPinterest } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-[90%] max-w-[1440px] mx-auto py-[50px] text-base font-medium">
      <div className="flex justify-between gap-48 items-end">
        <p className="text-5xl tracking-[-0.48px] w-1/2 relative">
          Let&rsquo;s help your create visual stories that speak{" "}
          <Link
            href={"/contact"}
            className="absolute text-base border-[1px] border-black w-fit px-6 py-[6px] rounded-full inline-flex items-center ml-2 gap-2 h-12 whitespace-nowrap"
          >
            <span className="">LET&rsquo;S TALK</span>
            <GoArrowUpRight className="" />
          </Link>
        </p>
        <p className="text-[22px] font-normal tracking-[-0.22px] leading-[22.66px] w-1/4">
          31 itiam street off NEPA Line, Uyo Itam, Akwa Ibom, Nigeria 520261
        </p>
      </div>
      <div className="bg-black h-[1px] w-full mt-4 mb-8"></div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <FaSquareInstagram size={32} />
          <FaFacebook size={32} />
          <IoMail size={35} />
          <FaPinterest size={32} />
        </div>
        <Nav />
        <p className="uppercase">Copyright excel imagery 2023</p>
      </div>
    </div>
  );
}
