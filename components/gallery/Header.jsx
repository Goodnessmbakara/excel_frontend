import Nav from "./Nav";

export default function Header() {
  return (
    <div className="">
      <div className="w-[90%] max-w-[1440px] mx-auto flex md:flex-row flex-col justify-between items-center gap-10 py-10">
        <h1 className="lg:text-7xl text-5xl font-medium">GALLERY</h1>
        <p className="lg:text-lg text-base font-normal text-justify leading-5 max-w-md">
          Lorem ipsum dolor sit amet consectetur. Elementum quis aenean ultrices
          suspendisse justo nunc nullam. Quam ultrices viverra dui quam pretium
          malesuada.
        </p>
      </div>
      <Nav />
    </div>
  );
}
