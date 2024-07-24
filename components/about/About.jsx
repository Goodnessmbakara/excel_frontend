import React from "react";
import Story from "./Story";
import Image from "next/image";
import Values from "./Values";
import Team from "./Team";

export default function About() {
  return (
    <div>
      <div className="w-[90%] max-w-[1440px] mx-auto md:pb-20 pb-10">
        <div className="flex md:flex-row flex-col justify-between items-center gap-10 pt-10 pb-6">
          <h1 className="lg:text-7xl text-5xl font-medium text-nowrap">
            ABOUT US
          </h1>
          <p className="lg:text-lg text-base font-normal text-justify leading-5 max-w-md">
            At Excel Photography, we&apos;re passionate about capturing
            life&apos;s most precious moments. Our team of skilled photographers
            combines artistic vision with technical expertise to create stunning
            visual narratives that will be cherished for generations.
          </p>
        </div>
        <Image
          src={"/images/about/about-hero.png"}
          alt="Excel Photography Team"
          width={1440}
          height={322}
          className="md:block hidden"
        />
      </div>
      <Story />
      <Values />
      <Team />
    </div>
  );
}
