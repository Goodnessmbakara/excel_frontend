"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import BookingButton from "@/components/BookingButton";
import fetchCollection from "@/components/fetchCollection";

export default function Page() {
  const [weddingImages, setWeddingImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      const data = await fetchCollection();
      const filteredImages = data.filter(
        (item) => item.tag === "cinematography"
      );
      setWeddingImages(filteredImages);
      setIsLoading(false);
    }
    fetchImages();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[500px]">
        <div className="lds-ring">
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="w-[90%] max-w-[1440px] min-h-[500px] py-8 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {weddingImages.map((image, index) => (
            <div
              key={index}
              className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg"
            >
              <Image
                src={image.photo}
                alt={`Wedding image ${index + 1}`}
                width={image.photo_size[0]}
                height={image.photo_size[1]}
                className="hover:opacity-75 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
      <BookingButton />
    </div>
  );
}
