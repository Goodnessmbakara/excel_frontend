import Nav from "./Nav";

export default function Header() {
  return (
    <div className="">
      <div className="w-[90%] max-w-[1440px] mx-auto flex md:flex-row flex-col justify-between items-center gap-10 py-10">
        <h1 className="lg:text-7xl text-5xl font-medium">GALLERY</h1>
        <p className="lg:text-lg text-base font-normal text-justify leading-5 max-w-md">
          Explore our diverse collection of captivating images. From stunning
          landscapes to intimate portraits, our gallery showcases the artistry
          and emotion captured through our lens. Each photograph tells a unique
          story, inviting you to experience the world through our eyes.
        </p>
      </div>
      <Nav />
    </div>
  );
}
