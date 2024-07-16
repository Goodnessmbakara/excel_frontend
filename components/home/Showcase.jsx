import Image from "next/image";

export default function Showcase() {
  return (
    <div className={`flex flex-col gap-16 pb-20 w-full max-w-[1440px] mx-auto`}>
      <p className="text-center text-3xl font-normal tracking-[-0.32px] max-w-3xl mx-auto">
        With our expert Photography & Cinematography, we ensure your special
        moments are preserved specially for years to come.
      </p>
      <div className="w-full grid grid-flow-col overflow-x-auto scrollbar-hide gap-4">
        <div className="flex flex-col gap-4">
          <Image
            src={"/images/showcase/wedding.png"}
            alt="wedding image"
            width={425}
            height={500}
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
          />
          <div>
            <p className="font-medium text-2xl">WEDDING</p>
            <p className="text-[rgba(0,0,0,0.5)] text-xl font-normal uppercase">
              12/32
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Image
            src={"/images/showcase/birthday.png"}
            alt="birthday image"
            width={319}
            height={324}
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
          />
          <div>
            <p className="font-medium text-2xl">birthday</p>
            <p className="text-[rgba(0,0,0,0.5)] text-xl font-normal uppercase">
              12/32
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Image
            src={"/images/showcase/pre-wedding.png"}
            alt="pre-wedding image"
            width={319}
            height={392}
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
          />
          <div>
            <p className="font-medium text-2xl">Pre-wedding</p>
            <p className="text-[rgba(0,0,0,0.5)] text-xl font-normal uppercase">
              12/32
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Image
            src={"/images/showcase/maternity.png"}
            alt="maternity image"
            width={425}
            height={500}
            style={{ objectFit: "cover", width: "100%", height: "auto" }}
          />
          <div>
            <p className="font-medium text-2xl">maternity</p>
            <p className="text-[rgba(0,0,0,0.5)] text-xl font-normal uppercase">
              12/32
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
