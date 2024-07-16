import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <div className="bg-black py-14 text-white">
      <div className="max-w-[1440px] w-[90%] mx-auto">
        <div className="xl:flex justify-between relative">
          <div className="relative">
            <p className="font-medium text-[64px]">
              AWARD WINNING PHOTOGRAPHER{" "}
            </p>
            <div className="flex flex-col gap-4 max-w-[320px] w-full absolute right-0">
              <p className="text-xl text-justify">
                Lorem ipsum dolor sit amet consectetur. Elementum quis aenean
                ultrices suspendisse justo nunc nullam. Quam ultrices viverra
                dui quam pretium malesuada. Risus ullamcorper sed quis aliquam
                lacus rhoncus faucibus eu.
              </p>
              <Link
                href={"/about"}
                className="p-6 border-[1px] border-white rounded-full w-fit"
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
            className="w-1/2"
          />
        </div>
      </div>
    </div>
  );
}
