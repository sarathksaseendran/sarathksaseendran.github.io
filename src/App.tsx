
import Header from './sections/Header';
import HeroSection from './sections/HeroSection';
import WhatIBuildSection from './sections/WhatIBuildSection';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ExploringSection from './sections/ExploringSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhatIBuildSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ExploringSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
