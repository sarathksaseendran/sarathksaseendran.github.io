
import styles from './HeroSection.module.css';
import resumePdf from '../assets/resume.pdf';
import avatarImg from '../assets/chibi_avatar.jpg';

const HeroSection = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.content}>
            <h1 className={styles.title}>SARATH K</h1>
          <h2 className={styles.subtitle}>Senior Software Engineer</h2>
          <div className={styles.tags}>
            <span>Mobile</span>
            <span className={styles.dot}>•</span>
            <span>Web</span>
            <span className={styles.dot}>•</span>
            <span>AI / LLM</span>
          </div>
          
          <p className={styles.description}>
            I build scalable mobile and web applications with a strong focus on React Native, TypeScript, and modern AI-powered solutions.
          </p>
          
          <div className={styles.actions}>
            <a href={resumePdf} className={styles.primaryBtn} download="resume.pdf">Download CV</a>
            <a href="#contact" className={styles.secondaryBtn}>Contact Me</a>
          </div>

          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>10+ Years</span>
              <span className={styles.statLabel}>Experience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>Mobile & Web</span>
              <span className={styles.statLabel}>Architecture</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>AI / LLM</span>
              <span className={styles.statLabel}>Integration</span>
            </div>
          </div>
        </div>
        
        <div className={styles.imageContainer}>
          <img src={avatarImg} alt="Sarath K Avatar" className={styles.avatar} />
        </div>
      </div>
    </div>
    </section>
  );
};

export default HeroSection;
