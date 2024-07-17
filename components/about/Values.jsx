import Image from "next/image";
import React from "react";

export default function Values() {
  return (
    <div className="text-white bg-black py-20">
      <div className="w-[90%] max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-11">
        <div className="md:w-1/2 flex flex-col gap-8">
          <h1 className="text-6xl">OUR COMPANY VALUES</h1>
          <div className="grid grid-cols-2 gap-y-8 gap-x-8 text-2xl mx-auto w-fit">
            <p className="flex items-start">
              <span className="text-base pr-4">01</span>PASSION
            </p>
            <p className="flex items-start">
              <span className="text-base pr-4">02</span>INTEGRITY
            </p>
            <p className="flex items-start">
              <span className="text-base pr-4">03</span>EXCELLENCE
            </p>
            <p className="flex items-start">
              <span className="text-base pr-4">04</span>DIVERSITY
            </p>
            <p className="flex items-start">
              <span className="text-base pr-4">05</span>COLLABORATION
            </p>
            <p className="flex items-start">
              <span className="text-base pr-4">06</span>LEGACY
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
