"use client";
import { useState } from "react";
import Popup from "@/components/Popup";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        "https://app-07b991a0-e1c2-444c-930e-6b13cf0600d2.cleverapps.io/api/contact-us/",
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
        console.log("Message sent successfully");
        setShowPopup(true);
      } else {
        const errorData = await response.json();
        console.error("Failed to send the message", errorData);
        setError("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-10">
        <div>
          <label htmlFor="name" className="font-normal text-xl">
            Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full h-8 border-b-[1px] border-b-black outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="font-normal text-xl">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full h-8 border-b-[1px] border-b-black outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="font-normal text-xl">
            Phone number
          </label>
          <input
            type="tel"
            id="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full h-8 border-b-[1px] border-b-black outline-none"
          />
        </div>
        <div>
          <label htmlFor="message" className="font-normal text-xl">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full h-8 border-b-[1px] border-b-black outline-none"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className={`bg-black push-effect hover:opacity-90 text-white rounded-full max-w-64 py-6 mt-6 `}
        >
          SEND MESSAGE
        </button>
      </form>
      {showPopup && (
        <Popup
          onClose={() => setShowPopup(false)}
          setShowPopup={setShowPopup}
          headertext={"Message sent"}
          text={
            "We care about all our clients. We will get back to you as soon as possible."
          }
        />
      )}
    </div>
  );
}
