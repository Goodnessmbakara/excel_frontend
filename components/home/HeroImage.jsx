import Image from "next/image";

export default function HeroImage({ className }) {
  return (
    <div className={`relative h-screen mx-auto ${className}`}>
      <div className="z-10 absolute right-[25%]">
        <Image
          src={"/images/hero-2.png"}
          alt="hero-img-2"
          width={500}
          height={500}
        />
      </div>
      <p className="uppercase absolute right-0 top-[10%] rounded-full pl-2 z-20 italic font-medium leading-[17.78px] w-[25%]">
        Award winning <br /> photographer
      </p>
      <div className="z-20 absolute top-[25%] left-[25%]">
        <div className="">
          <Image
            src={"/images/hero-1.png"}
            alt="hero-img-1"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
