import { BsArrowRight } from "react-icons/bs";

export default function Collection() {
  return (
    <div className="w-[90%] max-[1440px] mx-auto py-20">
      <h2 className="text-4xl font-medium pb-8">OUR COLLECTION</h2>
      <div>
        <div className="py-8 border-b-[1px] border-t-[1px] border-black">
          <div className="flex items-center justify-between cursor-pointer">
            <div>
              <p className="text-3xl font-medium">WEDDING</p>
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur. Massa sollicitudin id.
              </p>
            </div>
            <BsArrowRight size={48} />
          </div>
        </div>
        <div className="py-8 border-b-[1px] border-black">
          <div className="flex items-center justify-between cursor-pointer">
            <div>
              <p className="text-3xl font-medium">
                EVENT PHOTOGRAPHY & CINEMATOGRAPHY{" "}
              </p>
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur. Massa sollicitudin id.
              </p>
            </div>
            <BsArrowRight size={48} />
          </div>
        </div>
        <div className="py-8 border-b-[1px] border-black">
          <div className="flex items-center justify-between cursor-pointer">
            <div>
              <p className="text-3xl font-medium">PORTRAITS</p>
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur. Massa sollicitudin id.
              </p>
            </div>
            <BsArrowRight size={48} />
          </div>
        </div>
        <div className="py-8 border-b-[1px] border-black">
          <div className="flex items-center justify-between cursor-pointer">
            <div>
              <p className="text-3xl font-medium">MATERNITY</p>
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur. Massa sollicitudin id.
              </p>
            </div>
            <BsArrowRight size={48} />
          </div>
        </div>
        <div className="py-8 border-b-[1px] border-black">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-3xl font-medium">PRODUCTS</p>
              <p className="text-base">
                Lorem ipsum dolor sit amet consectetur. Massa sollicitudin id.
              </p>
            </div>
            <BsArrowRight size={48} />
          </div>
        </div>
      </div>
    </div>
  );
}
