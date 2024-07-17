import { BsArrowRight } from "react-icons/bs";

export default function ServiceList() {
  return (
    <div className="w-[90%] max-w-[1440px] mx-auto py-10">
      <h2 className="font-medium text-4xl pb-4">A List of Our Services</h2>
      <p className="lg:text-lg text-base font-normal text-justify leading-5 pb-8">
        Lorem ipsum dolor sit amet consectetur. Elementum quis aenean ultrices
        suspendisse justo nunc nullam. Quam ultrices viverra dui quam pretium
        malesuada.
      </p>
      <div>
        <div className="md:py-6 py-4 border-b-[1px] border-t-[1px] border-black">
          <div className="flex items-center justify-between cursor-pointer">
            <div>
              <p className="md:text-3xl text-xl font-medium">WEDDING BOOKING</p>
              <p className="md:text-base text-sm">
                Lorem ipsum dolor sit amet consectetur. Massa sollicitudin id.
              </p>
            </div>
            <BsArrowRight className="size-10" />
          </div>
        </div>
        <div className="md:py-6 py-4 border-b-[1px] border-black">
          <div className="flex items-center justify-between cursor-pointer">
            <div>
              <p className="md:text-3xl text-xl font-medium">EVENT BOOKING</p>
              <p className="md:text-base text-sm">
                Lorem ipsum dolor sit amet consectetur. Massa sollicitudin id.
              </p>
            </div>
            <BsArrowRight className="size-10" />
          </div>
        </div>
        <div className="md:py-6 py-4 border-b-[1px] border-black">
          <div className="flex items-center justify-between cursor-pointer">
            <div>
              <p className="md:text-3xl text-xl font-medium">
                {" "}
                BIRTHDAY BOOKING
              </p>
              <p className="md:text-base text-sm">
                Lorem ipsum dolor sit amet consectetur. Massa sollicitudin id.
              </p>
            </div>
            <BsArrowRight className="size-10" />
          </div>
        </div>
        <div className="py-8 border-b-[1px] border-black">
          <div className="flex items-center justify-between cursor-pointer">
            <div>
              <p className="md:text-3xl text-xl font-medium">
                PORTRAITS BOOKING
              </p>
              <p className="md:text-base text-sm">
                Lorem ipsum dolor sit amet consectetur. Massa sollicitudin id.
              </p>
            </div>
            <BsArrowRight className="size-10" />
          </div>
        </div>
        <div className="md:py-6 py-4 border-b-[1px] border-black">
          <div className="flex items-center justify-between">
            <div>
              <p className="md:text-3xl text-xl font-medium">
                MATERNITY BOOKING
              </p>
              <p className="md:text-base text-sm">
                Lorem ipsum dolor sit amet consectetur. Massa sollicitudin id.
              </p>
            </div>
            <BsArrowRight className="size-10" />
          </div>
        </div>
        <div className="md:py-6 py-4 border-b-[1px] border-black">
          <div className="flex items-center justify-between">
            <div>
              <p className="md:text-3xl text-xl font-medium">
                PRODUCTS BOOKING
              </p>
              <p className="md:text-base text-sm">
                Lorem ipsum dolor sit amet consectetur. Massa sollicitudin id.
              </p>
            </div>
            <BsArrowRight className="size-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
