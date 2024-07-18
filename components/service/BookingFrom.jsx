import React from "react";

export default function BookingFrom() {
  return (
    <form>
      <div>
        <h2>BOOK A SESSION TODAY!</h2>
        <div>
          <h3 className="uppercase">wedding booking</h3>
          <p>Select different options you want for your event</p>
        </div>
        <fieldset className="seleect-option">
          <p>You can still discuss so other services during consultation.</p>
        </fieldset>
      </div>
      <div>
        <div>
          <label htmlFor="fullname" className="font-normal text-base">
            Fullname
          </label>
          <input
            type="text"
            id="fullname"
            className="w-full h-6 border-b-[1px] border-b-black outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="font-normal text-base">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full h-6 border-b-[1px] border-b-black outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="font-normal text-base">
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full h-6 border-b-[1px] border-b-black outline-none"
          />
        </div>
        <div>
          <label htmlFor="message" className="font-normal text-xl">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full h-8 border-b-[1px] border-b-black outline-none"
          />
        </div>
      </div>
    </form>
  );
}
