export default function ContactForm() {
  return (
    <form className="w-full max-w-md flex flex-col gap-10">
      <div className="">
        <label htmlFor="name" className="font-normal text-xl">
          Name
        </label>
        <input
          type="text"
          id="name"
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
          className="w-full h-8 border-b-[1px] border-b-black outline-none"
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
      <button
        type="button"
        className="bg-black push-effect hover:opacity-90 text-white rounded-full max-w-64 py-6 mt-6"
      >
        SEND MESSAGE
      </button>
    </form>
  );
}
