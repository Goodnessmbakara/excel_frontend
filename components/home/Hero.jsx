import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex lg:flex-row flex-col gap-10 justify-between md:py-10 py-5 w-[90%] max-w-[1440px] 2xl:max-h-[750px] mx-auto">
      <div className="flex flex-col justify-between  gap-8">
        <div>
          <h1 className="text-[#111] font-normal lg:text-7xl md:text-5xl sm:text-4xl text-3xl uppercase">
            Capturing Beautiful Moments
          </h1>
          <div className="bg-black md:h-[5px] h-[2px] w-[243px] mb-10 mt-2"></div>
          <div className="flex flex-col gap-4">
            <p className="text-lg text-justify">
              We specialize in capturing life&rsquo;s most precious moments
              through stunning photography and videography. From weddings to
              portraits, our team of skilled professionals is dedicated to
              creating timeless memories that you&rsquo;ll cherish for years to
              come.
            </p>
            <Link
              href={"/service/#services"}
              className="text-white bg-black py-6 px-12 rounded-full push-effect hover:opacity-90 w-fit"
            >
              BOOK A SESSION TODAY!
            </Link>
          </div>
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
      <Image
        src={"/images/hero.png"}
        alt="hero image"
        width={750}
        height={650}
        className="lg:w-[50%] max-h-[650px] m-auto"
      />
    </div>
  );
}
