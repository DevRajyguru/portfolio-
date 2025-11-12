import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Skills() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // ✅ Updated skill list: Removed Git & Laravel, replaced React with Node.js
  const skills = [
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 bg-gray-950 text-white flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            background: { color: "transparent" },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
            },
            particles: {
              number: { value: 50 },
              color: { value: "#14b8a6" },
              opacity: { value: 0.2 },
              size: { value: { min: 2, max: 4 } },
              move: { enable: true, speed: 2 },
            },
          }}
        />
      </div>

      {/* Title */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl font-bold text-teal-400 mb-3">My Skills</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          ⚡ Technical expertise blended with creativity — explore my core competencies below.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="relative z-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center max-w-6xl px-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative w-28 h-28 flex flex-col justify-center items-center bg-gray-800/40 rounded-full shadow-lg border border-gray-700 hover:scale-110 transition-all duration-300 hover:border-teal-400 skill-float"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-12 h-12 mb-2 relative z-20"
            />
            <p className="text-gray-200 text-sm font-medium relative z-20">
              {skill.name}
            </p>
            <div className="absolute inset-0 rounded-full bg-teal-500 blur-3xl opacity-10 z-10"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
