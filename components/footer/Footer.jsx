import Nav from "../header/Nav";
import { FaSquareInstagram, FaFacebook, FaPinterest } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-[90%] max-w-[1440px] mx-auto lg:py-10 py-5 text-base font-medium">
      <div className="flex md:flex-row flex-col justify-between items-end gap-12">
        <p className="lg:text-5xl text-3xl tracking-[-0.48px] lg:w-1/2 relative">
          Let&rsquo;s help you create visual stories that speak{" "}
          <br className="md:hidden block" />
          <Link
            href={"/contact"}
            className="absolute lg:text-base text-sm border-[1px] border-black w-fit lg:px-6 px-4 lg:py-3 py-2 leading-tight rounded-full inline-flex items-center ml-2 gap-2 whitespace-nowrap push-effect"
          >
            <span className="">LET&rsquo;S TALK</span>
            <GoArrowUpRight className="" />
          </Link>
        </p>
        <p className="text-xl lg:text-left font-normal tracking-[-0.22px] leading-[22.66px] lg:w-1/4 lg:ml-0 ml-20">
          31 itiam street off NEPA Line, Uyo Itam, Akwa Ibom, Nigeria 520261
        </p>
      </div>
      <div className="bg-black h-[1px] w-full mt-4 mb-8"></div>
      <div className="flex lg:flex-row flex-col lg:gap-8 gap-4 justify-between items-center">
        <div className="flex items-center justify-between gap-4 ">
          <Link href={""}>
            <FaSquareInstagram className="lg:size-8 size-6 push-effect hover:opacity-90" />
          </Link>
          <Link href={""}>
            <FaFacebook className="lg:size-8 size-6 push-effect hover:opacity-90" />
          </Link>
          <Link href={""}>
            <IoMail className="lg:size-8 size-6 push-effect hover:opacity-90" />
          </Link>
          <Link href={""}>
            <FaPinterest className="lg:size-8 size-6 push-effect hover:opacity-90" />
          </Link>
        </div>
        <Nav />
        <p className="uppercase">Copyright excel imagery 2023</p>
      </div>
    </div>
  );
}
