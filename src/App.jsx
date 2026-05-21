import Navbar from './layout/Navbar.jsx';
import Footer from './layout/Footer.jsx';
import HeroSection from './sections/HeroSection.jsx';
import AboutSection from './sections/AboutSection.jsx';
import TechStackSection from './sections/TechStackSection.jsx';
import ProjectsSection from './sections/ProjectsSection.jsx';
import ServicesSection from './sections/ServicesSection.jsx';

import './sections/heroSection.css';
import './sections/aboutSection.css';
import './sections/techStackSection.css';
import './sections/projectsSection.css';
import './sections/servicesSection.css';
import './layout/layout.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="tech-stack">
          <TechStackSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;