import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // stop page reload

    const formData = new FormData(e.target);

    const response = await fetch("https://formsubmit.co/ajax/devrajyguru0@gmail.com", {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    if (result.success === "true") {
      setStatus("Message Sent Successfully! ");
      e.target.reset();
    } else {
      setStatus("Failed to send message. Try again.");
    }
  };

  return (
    <section id="contact" className="text-white px-6 py-20">
      <h2 className="text-4xl font-bold text-teal-400 text-center mb-4">
        Let’s Connect
      </h2>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white"
        />

        <textarea
          name="message"
          placeholder="Your Message..."
          required
          rows="5"
          className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white"
        ></textarea>

        {/* REQUIRED: Enable Ajax mode */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />

        <button
          type="submit"
          className="w-full bg-teal-500 hover:bg-teal-600 py-3 rounded-lg text-white font-semibold"
        >
          Send Message
        </button>

        {status && (
          <p className="text-center text-teal-400 mt-2 font-medium">{status}</p>
        )}
      </form>
    </section>
  );
}
