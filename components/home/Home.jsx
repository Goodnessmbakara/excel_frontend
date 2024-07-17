import AboutSection from "./AboutSection";
import Hero from "./Hero";
import Showcase from "./Showcase";
import Collection from "./Collection";
import Videography from "./Videography";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Showcase />
      <AboutSection />
      <Collection />
      {/*
      <Videography /> */}
    </div>
  );
}
