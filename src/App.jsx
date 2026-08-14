import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ByTheNumbers from "./components/ByTheNumbers";
import CapabilityArchitecture from "./components/CapabilityArchitecture";
import FeaturedProjects from "./components/FeaturedProjects";
import DashboardShowcase from "./components/DashboardShowcase";
import ApproachSection from "./components/ApproachSection";
import BusinessImpact from "./components/BusinessImpact";
import ExperienceTimeline from "./components/ExperienceTimeline";
import DeliveryCollaboration from "./components/DeliveryCollaboration";
import About from "./components/About";
import ResumeContact from "./components/ResumeContact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ink-900 text-mist selection:bg-teal selection:text-ink-950">
      <Nav />
      <main>
        <Hero />
        <ByTheNumbers />
        <CapabilityArchitecture />
        <FeaturedProjects />
        <DashboardShowcase />
        <ApproachSection />
        <BusinessImpact />
        <ExperienceTimeline />
        <DeliveryCollaboration />
        <About />
        <ResumeContact />
      </main>
      <Footer />
    </div>
  );
}
