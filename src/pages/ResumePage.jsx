export default function ResumePage() {
  return (
    <section className="pt-28 pb-20 bg-gray-900 min-h-screen text-white px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold text-teal-400 mb-6">My Resume</h1>

        <p className="text-gray-300 mb-8 text-lg">
          You can view my resume below or download it for later use.
        </p>

        {/* Download Button */}
        <a
          href="/Dev Rajyguru.pdf"
          download
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-lg transition shadow-lg"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}
