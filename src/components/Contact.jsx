import { FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-white flex flex-col items-center justify-center px-6"
      data-aos="fade-up"
    >
      {/* Title */}
      <h2 className="text-4xl font-bold text-teal-400 mb-4 text-center">
        Let’s Connect
      </h2>
      <p className="text-gray-300 text-center max-w-2xl mb-10 leading-relaxed">
        I’d be happy to connect! Whether you want to discuss a project,
        collaborate on something exciting, or just share ideas — feel free to
        reach out anytime.
      </p>

      {/* Social Icons */}
      <div className="flex gap-8 mb-10">
        <a
          href="https://github.com/DevRajyguru"
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-gray-400 hover:text-teal-400 transition transform hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:devrajyguru0@gmail.com"
          className="text-4xl text-gray-400 hover:text-teal-400 transition transform hover:scale-110"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://wa.me/919499718782" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-4xl text-gray-400 hover:text-teal-400 transition transform hover:scale-110"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* Contact Form */}
      <form
        action="#"
        className="w-full max-w-lg bg-gray-800/40 rounded-2xl p-8 shadow-lg border border-gray-700"
      >
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-gray-900 text-gray-200 border border-gray-700 focus:border-teal-400 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email or Phone"
            className="w-full p-3 rounded-md bg-gray-900 text-gray-200 border border-gray-700 focus:border-teal-400 focus:outline-none"
          />
          <textarea
            placeholder="Your Message..."
            rows="5"
            className="w-full p-3 rounded-md bg-gray-900 text-gray-200 border border-gray-700 focus:border-teal-400 focus:outline-none"
          ></textarea>

          <button
            type="submit"
            className="mt-2 w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-md transition flex items-center justify-center gap-2"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
