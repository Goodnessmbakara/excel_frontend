import Image from "next/image";
import Link from "next/link";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <div className="h-[calc(100vh-83px)] flex lg:flex-row flex-col gap-11 py-10 w-[90%] max-w-[1440px] mx-auto">
      <div className="flex flex-col justify-between lg:w-[45%] w-full">
        <div>
          <h1 className="text-[#111] font-normal italic text-7xl uppercase">
            Capturing Beautiful Moments
          </h1>
          <div className="bg-black h-[5px] w-[243px] mb-10 mt-2"></div>
          <Link
            href={"/contact"}
            className="text-white bg-black py-6 px-12 rounded-full"
          >
            BOOK A SESSION TODAY!
          </Link>
        </div>
        <ul className="flex flex-col gap-2 uppercase text-base italic">
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
            <span className="pr-3">04</span>Maternity shoots
          </li>
          <li>
            <span className="pr-3">05</span>Products
          </li>
        </ul>
      </div>
      <HeroImage className={"lg:w-1/2"} />
    </div>
  );
}
