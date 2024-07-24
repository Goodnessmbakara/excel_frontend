import Image from "next/image";

export default function Showcase() {
  return (
    <div className={`flex flex-col gap-8 py-10 w-full max-w-[1440px] mx-auto`}>
      <p className="text-center xl:text-3xl text-xl font-normal lg:px-0 px-[10%] max-w-3xl mx-auto">
        With our expert Photography & Cinematography, we ensure your special
        moments are preserved specially for years to come.
      </p>
      <div className="w-full grid grid-flow-col overflow-x-auto scrollbar-hide xl:gap-4 md:gap-2 gap-1 uppercase ">
        <div className="flex flex-col xl:gap-4 gap-2">
          <Image
            src={"/images/showcase/wedding.png"}
            alt="wedding image"
            width={425}
            height={500}
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
          />
          <div>
            <p className="font-medium xl:text-2xl">WEDDING</p>
            <p className="text-[rgba(0,0,0,0.5)] text-xs font-normal">12/32</p>
          </div>
        </div>
        <div className="flex flex-col xl:gap-4 gap-2">
          <Image
            src={"/images/showcase/birthday.png"}
            alt="birthday image"
            width={319}
            height={324}
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
          />
          <div>
            <p className="font-medium xl:text-2xl">birthday</p>
            <p className="text-[rgba(0,0,0,0.5)] text-xs font-normal">12/32</p>
          </div>
        </div>
        <div className="flex flex-col xl:gap-4 gap-2">
          <Image
            src={"/images/showcase/pre-wedding.png"}
            alt="pre-wedding image"
            width={319}
            height={392}
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
          />
          <div>
            <p className="font-medium xl:text-2xl">Pre-wedding</p>
            <p className="text-[rgba(0,0,0,0.5)] text-xs font-normal">12/32</p>
          </div>
        </div>
        <div className="flex flex-col xl:gap-4 gap-2">
          <Image
            src={"/images/showcase/maternity.png"}
            alt="maternity image"
            width={425}
            height={500}
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
          />
          <div>
            <p className="font-medium xl:text-2xl">maternity</p>
            <p className="text-[rgba(0,0,0,0.5)] text-xs font-normal">12/32</p>
          </div>
        </div>
      </div>
    </div>
  );
}
