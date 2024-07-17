import Image from "next/image";
import React from "react";

export default function HeroImageSm({ className }) {
  return (
    <div className={`mx-auto ${className}`}>
      <Image
        src={"/images/hero-2.png"}
        alt="hero-img-2"
        width={300}
        height={300}
      />
      <p className="uppercase pt-2 text-sm"> Award winning photographer</p>
    </div>
  );
}
