import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Projects from "./components/Projects";
import AboutPage from "./components/aboutme";
import SkillsPage from "./components/myskills"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="bg-[#f0ece6] min-h-screen text-[#5E3023]">
      <Navbar />
      <Hero />
      <Projects />
      <AboutPage />
      <SkillsPage />
      <Footer />
    </main>
  );
}