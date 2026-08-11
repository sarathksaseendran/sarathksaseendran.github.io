import { motion } from 'framer-motion';
import styles from './PerformanceSection.module.css';

const PerformanceSection = () => {
  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.title}>ENGINEERING & PERFORMANCE</h2>
        <div className={styles.stats}>
          <div className={styles.statBox}>
            <span className={styles.statValue}>60</span>
            <span className={styles.statLabel}>FPS TARGET</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statValue}>↓</span>
            <span className={styles.statLabel}>MEM LEAKS</span>
          </div>
          <div className={styles.statBox}>
            <span className={styles.statValue}>O(1)</span>
            <span className={styles.statLabel}>EFFICIENCY</span>
          </div>
        </div>
        <p className={styles.text}>
          A great user experience requires relentless optimization. From tracking down memory leaks to optimizing React Native bridge traffic and native rendering performance, building production apps means ensuring they run flawlessly on every device.
        </p>
      </motion.div>
    </div>
  );
};

export default PerformanceSection;
