import Image from "next/image";

export default function Team() {
  return (
    <div className="w-[80%] mx-auto max-w-[1440px] py-10">
      <h2 className="text-center text-4xl font-medium pb-8">OUR TEAM</h2>
      <div className="flex md:flex-row flex-col justify-between items-center gap-8">
        <div className="flex flex-col lg:gap-4 gap-2">
          <Image
            src={"/images/team/1.png"}
            alt="team 1"
            width={320}
            height={392}
          />
          <div>
            <p className="xl:text-2xl lg:text-xl text-base font-medium">
              CAMERON WILLIAMSON
            </p>
            <p className="text-[#0000007F] xl:text-xl lg:text-lg text-sm font-normal">
              CEO
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:gap-4 gap-2">
          <Image
            src={"/images/team/2.png"}
            alt="team 1"
            width={320}
            height={392}
          />
          <div>
            <p className="xl:text-2xl lg:text-xl text-base font-medium">
              CAMERON WILLIAMSON
            </p>
            <p className="text-[#0000007F] xl:text-xl lg:text-lg text-sm font-normal">
              CEO
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:gap-4 gap-2">
          <Image
            src={"/images/team/3.png"}
            alt="team 1"
            width={320}
            height={392}
          />
          <div>
            <p className="xl:text-2xl lg:text-xl text-base font-medium">
              CAMERON WILLIAMSON
            </p>
            <p className="text-[#0000007F] xl:text-xl lg:text-lg text-sm font-normal">
              CEO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
