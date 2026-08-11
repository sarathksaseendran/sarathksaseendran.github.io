import { motion } from 'framer-motion';
import styles from './ArchitectureSection.module.css';

const ArchitectureSection = () => {
  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.title}>MOBILE ARCHITECTURE</h2>
        <p className={styles.subtitle}>
          Designing scalable systems from the user interface down to the database.
        </p>
        
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={styles.dot} style={{ background: '#3b82f6' }}></span>
            <span>Mobile Client</span>
          </div>
          <div className={styles.legendItem}>
            <span className={styles.dot} style={{ background: '#14b8a6' }}></span>
            <span>API Gateway</span>
          </div>
          <div className={styles.legendItem}>
            <span className={styles.dot} style={{ background: '#06b6d4' }}></span>
            <span>Microservices / DB</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ArchitectureSection;
