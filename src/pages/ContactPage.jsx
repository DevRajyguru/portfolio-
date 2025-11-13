import { FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 pt-32 pb-16 flex flex-col items-center">
      
      {/* Title */}
      <h2 className="text-4xl font-bold text-teal-400 mb-4">
        Let’s Connect 
      </h2>

      <p className="text-gray-300 text-lg max-w-2xl text-center mb-10">
        I’d love to connect! Whether you want to discuss a project, collaborate, 
        or just say hi — feel free to reach out anytime.
      </p>

      {/* Contact Icons */}
      <div className="flex gap-10 text-4xl mb-10">
        <a href="https://github.com/DevRajyguru" target="_blank" className="hover:text-teal-400">
          <FaGithub />
        </a>
        <a href="mailto:devrajyguru0@gmail.com" className="hover:text-teal-400">
          <FaEnvelope />
        </a>
        <a href="https://wa.me/919499718782" target="_blank" className="hover:text-teal-400">
          <FaWhatsapp />
        </a>
      </div>

      {/* CONTACT FORM (FormSubmit) */}
      <form
        action="https://formsubmit.co/devrajyguru0@gmail.com"
        method="POST"
        className="w-full max-w-2xl bg-gray-900 p-6 rounded-2xl border border-gray-700 shadow-lg space-y-4"
      >
        {/* Hidden Fields */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="box" />
        <input type="hidden" name="_subject" value="New Message From Portfolio!" />

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-lg bg-gray-800 text-gray-300 focus:outline-none border border-gray-700"
        />

        {/* Email */}
        <input
          type="text"
          name="email"
          placeholder="Your Email or Phone"
          required
          className="w-full p-3 rounded-lg bg-gray-800 text-gray-300 focus:outline-none border border-gray-700"
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="Your Message..."
          required
          className="w-full p-3 h-36 rounded-lg bg-gray-800 text-gray-300 focus:outline-none border border-gray-700"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-teal-500 hover:bg-teal-600 p-3 rounded-lg font-semibold transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
