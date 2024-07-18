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
          <div className="absolute top-full left-0 right-0 z-30 py-8 w-screen flex flex-col items-center gap-8 bg-white text-base font-medium uppercase shadow-sm">
            <Link
              href={"/service"}
              className="push-effect"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Services
            </Link>
            <Link
              href={"/gallery"}
              className="push-effect"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              GALLERY
            </Link>
            <Link
              href={"/about"}
              className="push-effect"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About us
            </Link>
            <Link
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              href={"/contact"}
              className="w-fit border-[1px] border-black rounded-full px-4 py-3 text-base font-medium uppercase push-effect"
            >
              Contact us
            </Link>
          </div>
        </div>
      ) : (
        <IoMenuOutline size={45} />
      )}
    </div>
  );
}
