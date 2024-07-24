import Link from "next/link";
import HeroImage from "./HeroImage";
import HeroImageSm from "./HeroImageSm";

export default function Hero() {
  return (
    <div className="lg:h-[calc(100vh-83px)] flex lg:flex-row flex-col gap-10 justify-between md:py-10 py-5 w-[90%] max-w-[1440px] mx-auto">
      <div className="flex flex-col justify-between lg:gap-0 gap-8 lg:w-[45%] w-full">
        <div>
          <h1 className="text-[#111] font-normal lg:text-7xl  md:text-4xl text-3xl uppercase">
            Capturing Beautiful Moments
          </h1>
          <div className="bg-black md:h-[5px] h-[2px] w-[243px] mb-10 mt-2"></div>
          <Link
            href={"/service/#services"}
            className="text-white bg-black py-6 px-12 rounded-full push-effect hover:opacity-90"
          >
            BOOK A SESSION TODAY!
          </Link>
        </div>
        <ul className="flex flex-col gap-2 uppercase italic">
          <li className="flex items-start gap-3">
            <p>01</p>
            <p>Weddings</p>
          </li>
          <li className="flex items-start gap-3">
            <p>02</p>
            <p>Event Photography & Cinematography</p>
          </li>
          <li className="flex items-start gap-3">
            <p>03</p>
            <p>portraits</p>
          </li>
          <li className="flex items-start gap-3">
            <p>04</p>
            <p>Maternity shoots</p>
          </li>
          <li className="flex items-start gap-3">
            <p>05</p>
            <p>Products</p>
          </li>
        </ul>
      </div>
      <HeroImage className={"lg:w-1/2 hidden lg:block"} />
      <HeroImageSm className="block lg:hidden" />
    </div>
  );
}
