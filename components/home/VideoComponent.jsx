"use client";
import { useState, useEffect } from "react";

export default function VideoComponent() {
  const [src, setSrc] = useState("");

  useEffect(() => {
    async function fetchVideo() {
      const response = await fetch(
        "https://app-07b991a0-e1c2-444c-930e-6b13cf0600d2.cleverapps.io/api/hero-video/"
      );
      const data = await response.json();
      setSrc(data.video);
    }

    fetchVideo();
  }, []);

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
