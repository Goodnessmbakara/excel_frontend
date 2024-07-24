import { BsArrowRight } from "react-icons/bs";

export default function ServiceList() {
  return (
    <div id="services" className="w-[90%] max-w-[1440px] mx-auto py-10">
      <h2 className="font-medium text-4xl pb-4">A List of Our Services</h2>
      <p className="lg:text-lg text-base font-normal text-justify leading-5 pb-8">
        We offer a comprehensive range of photography services to capture
        life&apos;s most important moments. Our expert team is dedicated to
        delivering stunning visuals that tell your unique story.
      </p>
      <div>
        <div className="md:py-6 py-4 border-b-[1px] border-t-[1px] border-black">
          <div className="flex items-center justify-between cursor-pointer push-effect">
            <div>
              <p className="md:text-3xl text-xl font-medium">WEDDING BOOKING</p>
              <p className="md:text-base text-sm">
                Capture the magic of your special day with our professional
                wedding photography.
              </p>
            </div>
            <BsArrowRight className="size-10" />
          </div>
        </div>
        <div className="md:py-6 py-4 border-b-[1px] border-black">
          <div className="flex items-center justify-between cursor-pointer push-effect">
            <div>
              <p className="md:text-3xl text-xl font-medium">EVENT BOOKING</p>
              <p className="md:text-base text-sm">
                Preserve the memories of your corporate or social events with
                our expert event photography.
              </p>
            </div>
            <BsArrowRight className="size-10" />
          </div>
        </div>
        <div className="md:py-6 py-4 border-b-[1px] border-black">
          <div className="flex items-center justify-between cursor-pointer push-effect">
            <div>
              <p className="md:text-3xl text-xl font-medium">
                BIRTHDAY BOOKING
              </p>
              <p className="md:text-base text-sm">
                Celebrate life&apos;s milestones with our vibrant and fun
                birthday photography services.
              </p>
            </div>
            <BsArrowRight className="size-10" />
          </div>
        </div>
        <div className="py-8 border-b-[1px] border-black">
          <div className="flex items-center justify-between cursor-pointer push-effect">
            <div>
              <p className="md:text-3xl text-xl font-medium">
                PORTRAITS BOOKING
              </p>
              <p className="md:text-base text-sm">
                Showcase your personality with our professional portrait
                photography sessions.
              </p>
            </div>
            <BsArrowRight className="size-10" />
          </div>
        </div>
        <div className="md:py-6 py-4 border-b-[1px] border-black">
          <div className="flex items-center justify-between cursor-pointer push-effect">
            <div>
              <p className="md:text-3xl text-xl font-medium">
                MATERNITY BOOKING
              </p>
              <p className="md:text-base text-sm">
                Celebrate the beauty of motherhood with our elegant maternity
                photo shoots.
              </p>
            </div>
            <BsArrowRight className="size-10" />
          </div>
        </div>
        <div className="md:py-6 py-4 border-b-[1px] border-black">
          <div className="flex items-center justify-between cursor-pointer push-effect">
            <div>
              <p className="md:text-3xl text-xl font-medium">
                PRODUCTS BOOKING
              </p>
              <p className="md:text-base text-sm">
                Showcase your products in the best light with our professional
                product photography.
              </p>
            </div>
            <BsArrowRight className="size-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
