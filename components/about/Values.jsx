import Image from "next/image";
import React from "react";

export default function Values() {
  return (
    <div className="text-white bg-black xl:py-20 py-10">
      <div className="w-[90%] max-w-[1440px] mx-auto flex flex-col md:flex-row items-center lg:gap-11 gap-8">
        <div className="md:w-1/2 flex flex-col lg:gap-8 gap-6">
          <h1 className="xl:text-6xl lg:text-5xl text-4xl">
            OUR COMPANY VALUES
          </h1>
          <div className="grid grid-cols-2 lg:gap-y-8 gap-y-4 gap-x-8 xl:text-2xl lg:text-lg text-base mx-auto w-fit">
            <p className="flex items-start">
              <span className="lg:text-base text-sm pr-4">01</span>PASSION
            </p>
            <p className="flex items-start">
              <span className="lg:text-base text-sm pr-4">02</span>INTEGRITY
            </p>
            <p className="flex items-start">
              <span className="lg:text-base text-sm pr-4">03</span>EXCELLENCE
            </p>
            <p className="flex items-start">
              <span className="lg:text-base text-sm pr-4">04</span>DIVERSITY
            </p>
            <p className="flex items-start">
              <span className="lg:text-base text-sm pr-4">05</span>COLLABORATION
            </p>
            <p className="flex items-start">
              <span className="lg:text-base text-sm pr-4">06</span>LEGACY
            </p>
          </div>
        </div>
        <Image
          src={"/images/about/values.png"}
          alt="value image"
          width={639}
          height={343}
          className="md:w-1/2"
        />
      </div>
    </div>
  );
}
