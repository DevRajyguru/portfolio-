import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <main className="flex-grow">
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
