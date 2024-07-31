"use client";
import { useState, useEffect } from "react";

export default function VideoComponent() {
  const [src, setSrc] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchVideo() {
      try {
        const response = await fetch(
          "https://app-07b991a0-e1c2-444c-930e-6b13cf0600d2.cleverapps.io/api/hero-video/"
        );
        const data = await response.json();
        setSrc(data.video);
      } catch (error) {
        console.error("Error fetching video:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchVideo();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[520px]">
        <div className="lds-ring">
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <video
      width="1280"
      height="520"
      controls
      preload="none"
      autoPlay
      loop
      muted
    >
      <source src={src} type="video/mp4" />
      <track kind="subtitles" srcLang="en" label="English" />
      Your browser does not support the video tag.
    </video>
  );
}
