"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import fetchCollection from "../fetchCollection";

export default function Showcase() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      const data = await fetchCollection();
      const uniqueTags = Array.from(new Set(data.map((item) => item.tag)));
      const firstImagePerTag = uniqueTags.map((tag) =>
        data.find((item) => item.tag === tag)
      );
      setImages(firstImagePerTag);
      setIsLoading(false);
    }

    fetchImages();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[500px]">
        <div className="lds-ring ">
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-8 py-10 w-full`}>
      <p className="text-center xl:text-3xl text-xl font-normal lg:px-0 px-[10%] max-w-3xl mx-auto">
        With our expert Photography & Cinematography, we ensure your special
        moments are preserved specially for years to come.
      </p>
      <div className="w-full grid grid-flow-col overflow-x-auto scrollbar-hide xl:gap-4 md:gap-2 gap-1">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col xl:gap-4 gap-2">
            <Image
              src={image.photo}
              alt={`${image.tag} image`}
              width={image.photo_size[0]}
              height={image.photo_size[1]}
            />
            <div>
              <p className="xl:text-2xl text-base font-light uppercase">
                {image.tag}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
