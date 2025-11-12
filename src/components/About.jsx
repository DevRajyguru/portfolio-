export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-gray-950 text-white flex flex-col items-center px-6"
      data-aos="fade-up"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-teal-400 mb-6">About Me</h2>

      {/* Description */}
      <p className="text-gray-300 max-w-3xl text-center mb-10 leading-relaxed">
  👋 Hi! I’m <span className="text-teal-400">Dev Rajyguru</span>, a passionate
  <span className="text-teal-300"> Backend Developer</span> who loves building
  reliable, secure, and high-performance systems that power great digital experiences.
  I focus on writing clean, efficient, and scalable code while continuously exploring
  new technologies to improve performance and simplify complex problems.
</p>

      {/* Education Section */}
      <div className="max-w-3xl w-full bg-gray-800/50 p-8 rounded-2xl shadow-lg border border-gray-700">
        <h3 className="text-2xl font-semibold text-teal-400 mb-6 text-center">
          🎓 Educational Background
        </h3>

        <ul className="space-y-5">
          <li className="bg-gray-900 p-4 rounded-xl shadow hover:shadow-lg transition">
            <p className="text-lg font-semibold text-white">Std. 10 – Rosary School</p>
            <p className="text-gray-400"> 78%</p>
          </li>

          <li className="bg-gray-900 p-4 rounded-xl shadow hover:shadow-lg transition">
            <p className="text-lg font-semibold text-white">Std. 12 – Rosary School</p>
            <p className="text-gray-400">80%</p>
          </li>

          <li className="bg-gray-900 p-4 rounded-xl shadow hover:shadow-lg transition">
            <p className="text-lg font-semibold text-white">
              Bachelor of Computer Applications (BCA)
            </p>
            <p className="text-gray-400"> Atmiya University — Distinction (8.43 CGPA)</p>
          </li>

          <li className="bg-gray-900 p-4 rounded-xl shadow hover:shadow-lg transition">
            <p className="text-lg font-semibold text-white">
              Master of Computer Applications (MCA)
            </p>
            <p className="text-gray-400"> Atmiya University — Pursuing</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
