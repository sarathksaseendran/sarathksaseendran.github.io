
import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <section id="about" className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.leftCol}>
            <h2 className={styles.sectionTitle}>About Me</h2>
            <div className={styles.content}>
              <p>
                I am a Senior Software Engineer with over 10 years of experience in building high-performance, scalable applications. My journey started with native mobile development and has evolved into architecting complex cross-platform solutions and modern web applications.
              </p>
              <p>
                Currently, I'm heavily focused on integrating AI and Large Language Models (LLMs) into production environments. I believe the future of software engineering lies at the intersection of robust traditional architectures and intelligent, context-aware AI systems.
              </p>
              <p>
                Whether I'm optimizing a React Native bridge, designing a micro-frontend architecture, or building a RAG pipeline, my goal is always to deliver exceptional user experiences with clean, maintainable code.
              </p>
            </div>
          </div>
          
          <div className={styles.rightCol}>
            <h3 className={styles.snapshotTitle}>Career Snapshot</h3>
            <div className={styles.snapshotGrid}>
              
              <div className={styles.snapshotItem}>
                <span className={styles.snapshotValue}>10+ Years</span>
                <span className={styles.snapshotLabel}>Experience</span>
              </div>
              
              <div className={styles.snapshotItem}>
                <span className={styles.snapshotValue}>Mobile</span>
                <span className={styles.snapshotLabel}>iOS • Android</span>
              </div>
              
              <div className={styles.snapshotItem}>
                <span className={styles.snapshotValue}>Web</span>
                <span className={styles.snapshotLabel}>React • TypeScript</span>
              </div>
              
              <div className={styles.snapshotItem}>
                <span className={styles.snapshotValue}>AI / LLM</span>
                <span className={styles.snapshotLabel}>Modern AI Solutions</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
