"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Page() {
  const [weddingImages, setWeddingImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch(
          `https://app-07b991a0-e1c2-444c-930e-6b13cf0600d2.cleverapps.io/api/gallery/`
        );
        const data = await response.json();
        const filteredImages = data.filter((item) => item.tag === "birthday");
        setWeddingImages(filteredImages);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setIsLoading(false);
      }
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
    <div className="w-[90%] max-w-[1440px] py-8 mx-auto">
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
  );
}
