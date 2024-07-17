import Image from "next/image";

export default function WorkProcess() {
  return (
    <div className="bg-black text-white py-16">
      <div className="w-[90%] max-w-[1440px] mx-auto flex flex-col gap-14 justify-center items-center">
        <h2 className="font-medium text-4xl">Our Work Process</h2>
        <div className="flex md:flex-row flex-col justify-between xl:gap-0 gap-6 items-center text-center">
          <div className="flex flex-col items-center justify-between gap-4">
            <Image
              src={"/images/icons/book.svg"}
              alt="booking icon"
              width={88}
              height={88}
              className="xl:size-[88px] md:size-16 size-20"
            />
            <p className="font-medium xl:text-base text-sm">
              Online Booking & Initial Inquiry
            </p>
          </div>
          <Image
            src={"/images/arrow.svg"}
            alt="arrow"
            width={130}
            height={0}
            className="pb-8 xl:block hidden"
          />
          <div className="flex flex-col items-center justify-between gap-4">
            <Image
              src={"/images/icons/people.svg"}
              alt="people icon"
              width={88}
              height={88}
              className="xl:size-[88px] md:size-16 size-20"
            />
            <p className="font-medium xl:text-base text-sm">
              Client Consultation & Planning
            </p>
          </div>
          <Image
            src={"/images/arrow.svg"}
            alt="arrow"
            width={130}
            height={0}
            className="pb-8 xl:block hidden"
          />
          <div className="flex flex-col items-center justify-between gap-4">
            <Image
              src={"/images/icons/setup.svg"}
              alt="setup icon"
              width={88}
              height={88}
              className="xl:size-[88px] md:size-16 size-20"
            />
            <p className="font-medium xl:text-base text-sm">
              Preparation & Setup
            </p>
          </div>
          <Image
            src={"/images/arrow.svg"}
            alt="arrow"
            width={130}
            height={0}
            className="pb-8 xl:block hidden"
          />
          <div className="flex flex-col items-center justify-between gap-4">
            <Image
              src={"/images/icons/camera.svg"}
              alt="camera icon"
              width={88}
              height={88}
              className="xl:size-[88px] md:size-16 size-20"
            />
            <p className="font-medium xl:text-base text-sm">
              Photoshoot Exection
            </p>
          </div>
          <Image
            src={"/images/arrow.svg"}
            alt="arrow"
            width={130}
            height={0}
            className="pb-8 xl:block hidden"
          />
          <div className="flex flex-col items-center justify-between gap-4">
            <Image
              src={"/images/icons/edit.svg"}
              alt="edit icon"
              width={88}
              height={88}
              className="xl:size-[88px] md:size-16 size-20"
            />
            <p className="font-medium xl:text-base text-sm">
              Editing, Delivery & Follow-up
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
