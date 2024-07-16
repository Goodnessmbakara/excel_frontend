import Image from "next/image";

export default function HeroImage({ className }) {
  return (
    <div className={`relative xl:w-1/2 mx-auto ${className}`}>
      <div className="z-10 absolute xl:right-[25%] right-[50%]">
        <Image
          src={"/images/hero-2.png"}
          alt="hero-img-2"
          width={508}
          height={540}
        />
      </div>
      <p className="uppercase absolute right-0 top-[10%] rounded-full py-2 px-4 z-0 italic font-medium leading-[17.78px]">
        Award winning <br /> photographer
      </p>
      <div className="z-20 absolute top-[25%] left-[25%]">
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
  );
}
