import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import Link from "next/link";

export default function MobileNav({ className, isOpen, setIsOpen }) {
  return (
    <div className={`${className}`}>
      {isOpen ? (
        <div>
          <IoCloseOutline
            size={45}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
          <div className="absolute inset-0 top-full z-30 py-4 w-screen bg-white flex flex-col items-center gap-12 text-base font-medium leading-4 uppercase">
            <Link
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              href={"/contact"}
              className="w-fit border-[1px] border-black rounded-[60px] px-4 py-3 text-base font-medium leading-4 uppercase"
            >
              Contact us
            </Link>
            <Link
              href={"/service"}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Services
            </Link>
            <Link
              href={"/gallery"}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              GALLERY
            </Link>
            <Link
              href={"/about"}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About us
            </Link>
          </div>
        </div>
      ) : (
        <IoMenuOutline size={45} />
      )}
    </div>
  );
}
