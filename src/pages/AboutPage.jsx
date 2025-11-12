import About from "../components/About";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <main className="flex-grow">
        <About />
      </main>
      <Footer />
    </div>
  );
}
