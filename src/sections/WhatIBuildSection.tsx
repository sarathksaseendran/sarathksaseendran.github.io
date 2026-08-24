
import styles from './WhatIBuildSection.module.css';

const WhatIBuildSection = () => {
  return (
    <section id="what-i-build" className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>What I Build</h2>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.icon}>📱</div>
            <h3 className={styles.cardTitle}>Mobile Applications</h3>
            <ul className={styles.list}>
              <li>React Native</li>
              <li>iOS & Android</li>
              <li>Cross-platform apps</li>
            </ul>
          </div>
          
          <div className={styles.card}>
            <div className={styles.icon}>💻</div>
            <h3 className={styles.cardTitle}>Web Applications</h3>
            <ul className={styles.list}>
              <li>React & TypeScript</li>
              <li>Modern web applications</li>
              <li>Scalable interfaces</li>
            </ul>
          </div>
          
          <div className={styles.card}>
            <div className={styles.icon}>🧠</div>
            <h3 className={styles.cardTitle}>AI & LLM Solutions</h3>
            <ul className={styles.list}>
              <li>LLM integration</li>
              <li>RAG & AI workflows</li>
              <li>Intelligent applications</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIBuildSection;
