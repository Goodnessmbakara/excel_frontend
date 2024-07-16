import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="min-h-[calc(100vh-103px)] w-[90%] max-w-[1440px] mx-auto flex gap-11">
      <div className="flex flex-col justify-between w-[45%]">
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
      <div className="relative w-1/2">
        <div className="z-10 absolute right-[25%]">
          <Image
            src={"/images/hero-2.png"}
            alt="hero-img-2"
            width={508}
            height={540}
          />
        </div>
        <p className="uppercase absolute right-0 top-[10%] rounded-full py-2 px-4 z-0">
          Award winning <br /> photographer
        </p>
        <div className="z-20 absolute top-[180px] left-[25%]">
          <div className="">
            <Image
              src={"/images/hero-1.png"}
              alt="hero-img-1"
              width={519}
              height={488}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
