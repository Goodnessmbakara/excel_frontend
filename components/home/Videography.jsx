import { FaRegCirclePlay } from "react-icons/fa6";
import VideoComponent from "./VideoComponent";

export default function Videography() {
  return (
    <div className="py-10 w-[90%] max-w-[1440px] mx-auto flex flex-col items-center">
      <h2 className="text-3xl font-medium text-center pb-8">
        We deliver quality video coverage for various events
      </h2>
      <VideoComponent />
    </div>
  );
}
