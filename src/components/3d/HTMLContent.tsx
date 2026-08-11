import { Scroll } from '@react-three/drei';
import HeroSection from '../../sections/HeroSection';
import ExperienceSection from '../../sections/ExperienceSection';
import TechSection from '../../sections/TechSection';
import ProjectsSection from '../../sections/ProjectsSection';
import GameSection from '../../sections/GameSection';
import ContactSection from '../../sections/ContactSection';
import styles from './HTMLContent.module.css';

const HTMLContent = () => {
  return (
    <Scroll html>
      <div className={styles.scrollContainer}>
        {/* 0. Intro */}
        <section id="hero" className={styles.section}>
          <HeroSection />
        </section>
        
        {/* 1. About / Lobby (HTML removed by request, handled by 3D) */}
        <section id="about" className={styles.section}></section>

        {/* 2. Experience Corridor */}
        <section id="experience" className={styles.section}>
          <ExperienceSection />
        </section>
        
        {/* 3. Technology Network / Workspace */}
        <section id="tech" className={styles.section}>
          <TechSection />
        </section>
        
        {/* 4. Projects Showroom */}
        <section id="projects" className={styles.section}>
          <ProjectsSection />
        </section>

        {/* 5. Architecture / Servers (HTML removed by request, handled by 3D) */}
        <section id="architecture" className={styles.section}></section>
        
        {/* 6. Mini-Game Arcade */}
        <section id="game" className={styles.section}>
          <GameSection />
        </section>
        
        {/* 7. Contact Terminal */}
        <section id="contact" className={styles.section}>
          <ContactSection />
        </section>
      </div>
    </Scroll>
  );
};

export default HTMLContent;
