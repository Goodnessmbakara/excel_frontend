import Link from "next/link";
import ContactForm from "./ContactForm";
import { FaPhoneAlt } from "react-icons/fa";
import {
  FaLocationDot,
  FaSquareInstagram,
  FaFacebook,
  FaPinterest,
} from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export default function Contact() {
  return (
    <div className="pb-20">
      <div className="w-[90%] max-w-[1440px] mx-auto flex md:flex-row flex-col justify-between items-center gap-10 pt-10 pb-20">
        <h1 className="lg:text-7xl text-5xl font-medium text-nowrap">
          CONTACT US
        </h1>
        <p className="lg:text-lg text-base font-normal text-justify leading-5 max-w-md">
          Ready to capture your special moments? We&apos;re here to bring your
          vision to life. Reach out to us for inquiries, bookings, or just to
          chat about your photography needs. Let&apos;s create something
          beautiful together.
        </p>
      </div>
      <div className="w-[90%] max-w-[1440px] mx-auto flex md:flex-row flex-col-reverse justify-between items-center gap-20">
        <div className="flex flex-col gap-10 lg:min-w-[360px]">
          <div className="flex gap-3 items-center">
            <FaPhoneAlt className="size-8" />
            <span>+234595690500</span>
          </div>
          <div className="flex gap-3 items-center">
            <FaLocationDot className="size-8" />
            <span>
              31 itiam street off NEPA Line, Uyo Itam, Akwa Ibom, Nigeria 520261
            </span>
          </div>
          <div className="flex gap-6 items-center">
            <Link href={"https://www.instagram.com/excelphotography"}>
              <FaSquareInstagram className="size-8 push-effect hover:opacity-90" />
            </Link>
            <Link href={"https://www.facebook.com/excelphotography"}>
              <FaFacebook className="size-8 push-effect hover:opacity-90" />
            </Link>
            <Link href={"mailto:info@excelphotography.com"}>
              <IoMail className="size-8 push-effect hover:opacity-90" />
            </Link>
            <Link href={"https://www.pinterest.com/excelphotography"}>
              <FaPinterest className="size-8 push-effect hover:opacity-90" />
            </Link>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
