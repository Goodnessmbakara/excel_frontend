import { RiContactsBook2Line } from "react-icons/ri";
import { SlPeople } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";
import Image from "next/image";

export default function WorkProcess() {
  return (
    <div className="bg-black text-white py-20">
      <div className="w-[90%] max-w-[1440px] mx-auto flex flex-col gap-20 justify-center items-center">
        <h2 className="font-medium text-4xl">Our Work Process</h2>
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center justify-between gap-4">
            <Image
              src={"/images/icons/book.svg"}
              alt="booking icon"
              width={88}
              height={88}
            />
            <p className="font-medium text-base">
              Online Booking & Initial Inquiry
            </p>
          </div>
          <Image
            src={"/images/arrow.svg"}
            alt="arrow"
            width={130}
            height={0}
            className="pb-8"
          />
          <div className="flex flex-col items-center justify-between gap-4">
            <Image
              src={"/images/icons/setup.svg"}
              alt="setup icon"
              width={88}
              height={88}
            />
            <p className="font-medium text-base">Preparation & Setup</p>
          </div>
          <Image
            src={"/images/arrow.svg"}
            alt="arrow"
            width={130}
            height={0}
            className="pb-8"
          />
          <div className="flex flex-col items-center justify-between gap-4">
            <Image
              src={"/images/icons/camera.svg"}
              alt="camera icon"
              width={88}
              height={88}
            />
            <p className="font-medium text-base">Photoshoot Exection</p>
          </div>
          <Image
            src={"/images/arrow.svg"}
            alt="arrow"
            width={130}
            height={0}
            className="pb-8"
          />
          <div className="flex flex-col items-center justify-between gap-4">
            <Image
              src={"/images/icons/edit.svg"}
              alt="edit icon"
              width={88}
              height={88}
            />
            <p className="font-medium text-base">
              Editing, Delivery & Follow-up
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
