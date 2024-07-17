import { FaRegCirclePlay } from "react-icons/fa6";

export default function Videography() {
  return (
    <div className="py-10 w-[90%] max-w-[1440px] mx-auto">
      <h2 className="text-3xl font-medium text-center pb-8">
        We deliver quality video coverage for various events
      </h2>
      <div className="bg-gray-900 max-w-xl mx-auto h-96 flex items-center justify-center">
        <FaRegCirclePlay className="text-white text-6xl" />
      </div>
    </div>
  );
}
