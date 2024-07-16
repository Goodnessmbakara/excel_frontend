import Image from "next/image";
import Link from "next/link";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <div className="min-h-[calc(100vh-103px)] h-fit flex xl:flex-row flex-col gap-11 pb-10">
      <div className="flex flex-col justify-between gap-28 xl:w-[45%] w-full">
        <div>
          <h1 className="text-[#111] font-normal italic text-[88px] uppercase tracking-[1.74px] leading-[84px]">
            Capturing <span className="font-medium">Beautiful Moments</span>
          </h1>
          <div className="bg-black h-[5px] w-[243px] mb-10 mt-2"></div>
          <Link
            href={"/contact"}
            className="text-white bg-black py-6 px-12 rounded-full"
          >
            BOOK A SESSION TODAY!
          </Link>
        </div>
        <ul className="uppercase text-base italic">
          <li>
            <span className="pr-3">01</span>Weddings
          </li>
          <li>
            <span className="pr-3">02</span>Event Photography & Cinematography{" "}
          </li>
          <li>
            <span className="pr-3">03</span>portraits
          </li>
          <li>
            <span className="pr-3">04</span>Maternity
          </li>
          <li>
            <span className="pr-3">05</span>Products
          </li>
        </ul>
      </div>
      <HeroImage className={"hidden xl:block"} />
    </div>
  );
}
