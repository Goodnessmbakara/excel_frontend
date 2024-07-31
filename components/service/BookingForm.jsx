"use client";
import { useState } from "react";
import { MdCancel } from "react-icons/md";

export default function BookingForm({
  bookingType,
  setShowForm,
  setShowPopup,
}) {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    additional_message: "",
    selected_options: "",
    booking_type: `${bookingType}`,
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    if (type === "checkbox") {
      const options = formData.selected_options.split(", ");
      if (checked) {
        options.push(id);
      } else {
        const index = options.indexOf(id);
        if (index > -1) options.splice(index, 1);
      }
      setFormData((prevData) => ({
        ...prevData,
        selected_options: options.filter(Boolean).join(", "),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    }
  };

  const isFormValid = () => {
    return (
      formData.full_name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.phone.trim() !== ""
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!isFormValid()) {
      setError("Please fill all required fields.");
      return;
    }
    console.log("Form data", formData);

    try {
      const response = await fetch(
        "https://app-07b991a0-e1c2-444c-930e-6b13cf0600d2.cleverapps.io/api/book-session/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRFTOKEN":
              "3u6hUACwwZvgrRnydD1PnfnnRUJTWdSqDQWrMiQrE0xqXlcPelDIIeLdDbtHL41C",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        console.log("Booking request sent successfully");
        setShowPopup(true);
        setShowForm(false);
      } else {
        const errorData = await response.json();
        console.error("Failed to send the booking request", errorData);
        setError("Failed to send the booking request. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div
      onClick={() => setShowForm(false)}
      className="fixed text-black inset-0 z-30 bg-black bg-opacity-50 flex justify-center items-center"
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
                id="Full-Day Coverage"
                checked={formData.selected_options.includes(
                  "Full-Day Coverage"
                )}
                onChange={handleChange}
                className="accent-black rounded-sm size-[18px] cursor-pointer"
              />
              <label
                htmlFor="Full-Day Coverage"
                className="text-base font-normal"
              >
                Full-Day Coverage
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="Multi-Event Coverage"
                checked={formData.selected_options.includes(
                  "Multi-Event Coverage"
                )}
                onChange={handleChange}
                className="accent-black rounded-sm size-[18px] cursor-pointer"
              />
              <label
                htmlFor="Multi-Event Coverage"
                className="text-base font-normal"
              >
                Multi-Event Coverage
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="Drone services"
                checked={formData.selected_options.includes("Drone services")}
                onChange={handleChange}
                className="accent-black rounded-sm size-[18px] cursor-pointer"
              />
              <label htmlFor="Drone services" className="text-base font-normal">
                Drone services
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="Photo Booth"
                checked={formData.selected_options.includes("Photo Booth")}
                onChange={handleChange}
                className="accent-black rounded-sm size-[18px] cursor-pointer"
              />
              <label htmlFor="Photo Booth" className="text-base font-normal">
                Photo Booth
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="Videography"
                checked={formData.selected_options.includes("Videography")}
                onChange={handleChange}
                className="accent-black rounded-sm size-[18px] cursor-pointer"
              />
              <label htmlFor="Videography" className="text-base font-normal">
                Videography
              </label>
            </div>
            <p className="pt-1">
              You can still discuss other services during consultation.
            </p>
          </fieldset>
        </div>
        <div className="flex flex-col gap-8 bg-[#F4F4F4] py-9 px-8">
          <div>
            <label htmlFor="full_name" className="font-normal text-base">
              Full Name
            </label>
            <input
              type="text"
              id="full_name"
              value={formData.full_name}
              onChange={handleChange}
              className="w-full h-6 border-b-[1px] border-b-black bg-[#F4F4F4] outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="font-normal text-base">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-6 border-b-[1px] border-b-black bg-[#F4F4F4] outline-none"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="font-normal text-base">
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full h-6 border-b-[1px] border-b-black bg-[#F4F4F4] outline-none"
              required
            />
          </div>
          <div>
            <label
              htmlFor="additional_message"
              className="font-normal text-base"
            >
              Additional message
            </label>
            <textarea
              id="additional_message"
              value={formData.additional_message}
              onChange={handleChange}
              rows={5}
              className="w-full h-8 border-b-[1px] border-b-black bg-[#F4F4F4] outline-none"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            disabled={!isFormValid()}
            className={`bg-black text-white text-base font-medium py-6 rounded-full ${
              !isFormValid() ? "opacity-50 cursor-not-allowed" : ""
            }`}
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
