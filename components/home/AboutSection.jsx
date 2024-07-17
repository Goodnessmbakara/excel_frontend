import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <div className="bg-black py-10 text-white">
      <div className="max-w-[1440px] w-[90%] mx-auto">
        <div className="flex lg:flex-row flex-col gap-8 justify-between">
          <div className="flex flex-col gap-4 max-w-lg">
            <p className="font-medium lg:text-6xl text-6xl break-words text-left">
              AWARD WINNING PHOTOGRAPHER{" "}
            </p>
            <div className="flex flex-col gap-4 lg:max-w-[320px] w-full ml-auto">
              <p className="lg:text-xl  text-justify">
                Lorem ipsum dolor sit amet consectetur. Elementum quis aenean
                ultrices suspendisse justo nunc nullam. Quam ultrices viverra
                dui quam pretium malesuada. Risus ullamcorper sed quis aliquam
                lacus rhoncus faucibus eu.
              </p>
              <Link
                href={"/about"}
                className="lg:p-6 p-4 border-[1px] border-white rounded-full w-fit"
              >
                ABOUT US
              </Link>
            </div>
          </div>
          <Image
            src={"/images/aboutsection.png"}
            alt="Excel picture"
            width={649}
            height={532}
            className="lg:w-1/2"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
