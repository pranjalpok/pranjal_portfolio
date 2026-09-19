import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Dashboards from "./components/Dashboards";
import Skills from "./components/Skills";
import Sdlc from "./components/Sdlc";
import Experience from "./components/Experience";
import AboutContact from "./components/AboutContact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-page text-ink">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Experience />
        <Projects />
        <Dashboards />
        <Skills />
        <Sdlc />
        <AboutContact />
      </main>
      <Footer />
    </div>
  );
}
