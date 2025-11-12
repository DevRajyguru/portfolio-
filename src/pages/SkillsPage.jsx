import Skills from "../components/Skills";
import Footer from "../components/Footer";

export default function SkillsPage() {
  return (
    <div className="bg-gray-900 text-white flex flex-col min-h-screen">
      <main className="flex-grow">
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
