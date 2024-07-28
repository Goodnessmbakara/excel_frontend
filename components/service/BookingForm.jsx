import { MdCancel } from "react-icons/md";

export default function BookingForm({
  bookingType,
  setShowForm,
  setShowPopup,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setShowForm(false);
  };
  return (
    <div
      onClick={() => setShowForm(false)}
      className="fixed inset-0 z-30 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        className="overflow-auto md:py-20 py-10 lg:px-12 px-6 max-h-screen mx-auto flex md:flex-row flex-col justify-between items-center lg:gap-16 gap-10 border-[1px] border-black relative bg-white"
      >
        <div className="">
          <h2 className="text-3xl font-medium pb-6">BOOK A SESSION TODAY!</h2>
          <div className="pb-8">
            <h3 className="uppercase text-base font-medium">{bookingType}</h3>
            <p className="text-base font-normal">
              Select different options you want for your event
            </p>
          </div>
          <fieldset className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="fullDay"
                className="accent-black rounded-sm size-[18px] cursor-pointer"
              />
              <label htmlFor="fullDay" className="text-base font-normal">
                Full-Day Coverage
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="multiEvent"
                className="accent-black rounded-sm size-[18px] cursor-pointer"
              />
              <label htmlFor="multiEvent" className="text-base font-normal">
                Multi-Event Coverage
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="drone"
                className="accent-black rounded-sm size-[18px] cursor-pointer"
              />
              <label htmlFor="drone" className="text-base font-normal">
                Drone services
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="photoBooth"
                className="accent-black rounded-sm size-[18px] cursor-pointer"
              />
              <label htmlFor="photoBooth" className="text-base font-normal">
                Photo Booth
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="videography"
                className="accent-black rounded-sm size-[18px] cursor-pointer"
              />
              <label htmlFor="videography" className="text-base font-normal">
                Videography
              </label>
            </div>
            <p className="pt-1">
              You can still discuss so other services during consultation.
            </p>
          </fieldset>
        </div>
        <div className="flex flex-col gap-8 bg-[#F4F4F4] py-9 px-8">
          <div>
            <label htmlFor="fullname" className="font-normal text-base">
              Fullname
            </label>
            <input
              type="text"
              id="fullname"
              className="w-full h-6 border-b-[1px] border-b-black bg-[#F4F4F4] outline-none"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-normal text-base">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full h-6 border-b-[1px] border-b-black bg-[#F4F4F4] outline-none"
            />
          </div>
          <div>
            <label htmlFor="phone" className="font-normal text-base">
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full h-6 border-b-[1px] border-b-black bg-[#F4F4F4] outline-none"
            />
          </div>
          <div>
            <label htmlFor="message" className="font-normal text-base">
              Additional message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full h-8 border-b-[1px] border-b-black bg-[#F4F4F4] outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white text-base font-medium py-6 rounded-full"
          >
            BOOK A SESSION
          </button>
          <button className="close-button" onClick={() => setShowForm(false)}>
            <MdCancel className="md:size-8 size-5 absolute lg:top-8 top-5 lg:right-12 right-6" />
          </button>
        </div>
      </form>
    </div>
  );
}
