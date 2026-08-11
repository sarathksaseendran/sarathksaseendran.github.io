import { motion } from 'framer-motion';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          ABOUT ME
        </motion.h2>

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className={styles.text}>
            Over <strong>16+ years</strong> of morphing from Support Engineer to Senior Mobile Architecture, deploying scalable systems.
          </p>
          <p className={styles.text}>
            A distinctive vocabulary of technologies — applied evenly across native and hybrid mobile environments to ensure high-performance delivery.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
