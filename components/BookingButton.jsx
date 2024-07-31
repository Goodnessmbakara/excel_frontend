"use client";
import BookingForm from "./service/BookingForm";
import Popup from "./Popup";
import { useState } from "react";

export default function BookingButton() {
  const [showForm, setShowForm] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleBookingClick = () => {
    setShowForm(true);
  };

  return (
    <div className="w-[90%] max-w-[1440px] mx-auto sticky bottom-4 text-white ">
      <div className="flex justify-end">
        <button
          onClick={handleBookingClick}
          className="bg-black border-white border-[1px] text-white md:text-xl text-base rounded-full md:p-4 px-3 p-2 w-fit"
        >
          BOOK US NOW
        </button>
      </div>
      {showForm && (
        <BookingForm
          setShowForm={setShowForm}
          bookingType="General Booking"
          setShowPopup={setShowPopup}
        />
      )}
      {showPopup && (
        <Popup
          onClose={() => setShowPopup(false)}
          setShowPopup={setShowPopup}
          headertext="Successfully booked"
          text="We care about all our clients. we will get to back to you as soon as possible."
        />
      )}
    </div>
  );
}
