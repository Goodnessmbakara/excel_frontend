import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function Collection() {
  return (
    <div className="w-[90%] max-[1440px] mx-auto py-10">
      <h2 className="md:text-4xl text-3xl font-medium pb-8">OUR COLLECTION</h2>
      <div>
        <div className="md:py-6 py-4 border-b-[1px] border-t-[1px] border-black">
          <Link
            href={"/gallery"}
            className="flex items-center justify-between push-effect"
          >
            <div>
              <p className="md:text-3xl text-xl font-medium">WEDDING</p>
              <p className="md:text-base text-sm">
                Lorem ipsum dolor sit amet consectetur. Massa sollicitudin id.
              </p>
            </div>
            <BsArrowRight className="size-10" />
          </Link>
        </div>
        <div className="md:py-6 py-4 border-b-[1px] border-black">
          <Link
            href={"/gallery/events"}
            className="flex items-center justify-between push-effect"
          >
            <div>
              <p className="md:text-3xl text-xl font-medium">EVENTS</p>
              <p className="md:text-base text-sm">
                Lorem ipsum dolor sit amet consectetur. Massa sollicitudin id.
              </p>
            </div>
            <BsArrowRight className="size-10" />
          </Link>
        </div>
        <div className="md:py-6 py-4 border-b-[1px] border-black">
          <Link
            href={"/gallery/cinematography"}
            className="flex items-center justify-between push-effect"
          >
            <div>
              <p className="md:text-3xl text-xl font-medium">CINEMATOGRAPHY</p>
              <p className="md:text-base text-sm">
                Lorem ipsum dolor sit amet consectetur. Massa sollicitudin id.
              </p>
            </div>
            <BsArrowRight className="size-10" />
          </Link>
        </div>
        <div className="md:py-6 py-4 border-b-[1px] border-black">
          <Link
            href={"/gallery/portraits"}
            className="flex items-center justify-between push-effect"
          >
            <div>
              <p className="md:text-3xl text-xl font-medium">PORTRAITS</p>
              <p className="md:text-base text-sm">
                Lorem ipsum dolor sit amet consectetur. Massa sollicitudin id.
              </p>
            </div>
            <BsArrowRight className="size-10" />
          </Link>
        </div>
        <div className="py-8 border-b-[1px] border-black">
          <Link
            href={"/gallery/maternity"}
            className="flex items-center justify-between push-effect"
          >
            <div>
              <p className="md:text-3xl text-xl font-medium">MATERNITY</p>
              <p className="md:text-base text-sm">
                Lorem ipsum dolor sit amet consectetur. Massa sollicitudin id.
              </p>
            </div>
            <BsArrowRight className="size-10" />
          </Link>
        </div>
        <div className="md:py-6 py-4 border-b-[1px] border-black">
          <Link
            href={"/gallery/products"}
            className="flex items-center justify-between push-effect"
          >
            <div>
              <p className="md:text-3xl text-xl font-medium">PRODUCTS</p>
              <p className="md:text-base text-sm">
                Lorem ipsum dolor sit amet consectetur. Massa sollicitudin id.
              </p>
            </div>
            <BsArrowRight className="size-10" />
          </Link>
        </div>
      </div>
    </div>
  );
}
