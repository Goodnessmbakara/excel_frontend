import { IoMdMenu, IoMdClose } from "react-icons/io";

export default function MobileNav({ className, isOpen, setIsOpen }) {
  return (
    <div className={`${className}`}>
      <IoMdMenu size={24} />
    </div>
  );
}
