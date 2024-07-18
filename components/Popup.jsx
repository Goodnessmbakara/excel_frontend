"use client";
import { useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdCancel } from "react-icons/md";

export default function Popup({ onClose, setShowPopup, headertext, text }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-30 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div
        className="w-[80%] max-w-3xl max-h-screen mx-auto text-center flex flex-col justify-center items-center md:py-36 py-16 md:px-44 px-1 border-[1px] border-black relative bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={() => setShowPopup(false)}>
          <MdCancel className="md:size-8 size-5 absolute md:top-8 top-1 md:right-8 right-1" />
        </button>
        <div className="pb-6">
          <AiFillCheckCircle className="md:size-32 size-20 md:p-2 p-1 bg-[rgba(17,17,17,0.12)] rounded-full" />
        </div>
        <p className="uppercase md:text-3xl text-xl pb-4">{headertext}</p>
        <p className="md:text-base text-sm">
          {text}
        </p>
      </div>
    </div>
  );
}
