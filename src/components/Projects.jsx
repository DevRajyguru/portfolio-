export default function Projects() {
  const projects = [
    {
      title: "COVID Vaccine Registration System",
      desc: "A PHP-based system for vaccine registration and slot management.",
      tech: "PHP • MySQL • Bootstrap",
    },
    {
      title: "Valorant Information Website",
      desc: "A fun website providing detailed information about Valorant maps, agents, and gameplay mechanics.",
      tech: "PHP • HTML • CSS • MySQL",
    },
    {
      title: "Brick Breaker Game",
      desc: "A desktop-based arcade game built using Java Swing and AWT. Features include realistic ball physics, paddle control, brick collision detection, scoring system, and increasing difficulty levels for engaging gameplay.",
      tech: "Java • Swing • AWT",
    },
    {
      title: "Expense Tracker with OCR",
      desc: "A smart expense management system that extracts and categorizes expenses from uploaded receipts using OCR. Provides analytics, visual summaries, and stores data securely in a database.",
      tech: "Python • Flask • Tesseract OCR • MySQL",
    },
    {
      title: "Interview Quiz Platform",
      desc: "An interactive quiz web app for interview preparation with real-time scoring and multiple question rounds. Built with Node.js and React for a fast, dynamic user experience.",
      tech: "Node.js • Express • React • MySQL",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gray-800 text-white"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10 text-teal-400 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-teal-400/30 transition-transform transform hover:-translate-y-2"
              data-aos="zoom-in"
            >
              <h3 className="text-xl font-semibold mb-2 text-teal-400">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-3 leading-relaxed">{project.desc}</p>
              <p className="text-sm text-gray-400">{project.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
