import {
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

export default function Hero() {
  const tags = [
    "AI Enthusiast",
    "Backend Stack Developer",
    "Problem Solver",
    "java Programmer",

  ];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-white px-6 pt-24"
      data-aos="fade-up"
    >
      {/* Container */}
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
        {/* Profile Image */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-400 to-blue-500 blur-2xl opacity-30"></div>
          <img
            src="/profile.jpg" 
            alt=""
            className="relative w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-teal-500 shadow-lg"
          />
        </div>

        {/* Right Side: Text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
            Hi, I’m <span className="text-teal-400">Dev Rajyguru</span>
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Backend  Developer | java Programmer | python Programmer | Tech Explorer
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 border border-teal-400 text-teal-300 rounded-full text-sm hover:bg-teal-500 hover:text-white transition"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-800 rounded-xl p-4 text-center hover:bg-gray-700 transition">
              <p className="font-semibold text-teal-400">📍 Location</p>
              <p className="text-gray-300">Rajkot, Gujarat, India</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 text-center hover:bg-gray-700 transition">
              <p className="font-semibold text-teal-400">💼 Expertise</p>
              <p className="text-gray-300">Web Dev, java Dev, Problem Solving</p>
            </div>
            <div className="bg-gray-800 rounded-xl p-4 text-center hover:bg-gray-700 transition">
              <p className="font-semibold text-teal-400">📧 Contact</p>
              <p className="text-gray-300">devrajyguru0@gmail.com</p>
            </div>
          </div>
          <div className="flex justify-center md:justify-start gap-6 mt-4">
            <a href="https://github.com/DevRajyguru" target="_blank" className="hover:text-teal-400 text-2xl">
              <FaGithub />
            </a>
            <a href="mailto:devrajyguru0@gmail.com" className="hover:text-teal-400 text-2xl">
              <FaEnvelope />
            </a>
            <a href="https://wa.me/919499718782" target="_blank" className="hover:text-teal-400 text-2xl">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
