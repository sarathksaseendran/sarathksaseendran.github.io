
import styles from './ExploringSection.module.css';

const ExploringSection = () => {
  return (
    <section id="exploring" className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Currently Exploring</h2>
        
        <div className={styles.content}>
          <div className={styles.header}>
            <span className={styles.icon}>🔬</span>
            <h3 className={styles.subtitle}>AI & LLM Engineering</h3>
          </div>
          
          <ul className={styles.list}>
            <li>RAG systems and optimization</li>
            <li>Local LLMs deployment and fine-tuning</li>
            <li>LLM application architecture</li>
            <li>Autonomous AI agents</li>
            <li>Vector databases (Pinecone, Milvus)</li>
            <li>Open-source LLMs integration</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExploringSection;
