import { motion } from 'framer-motion';
import styles from './TechSection.module.css';

const capabilities = [
  {
    title: 'React Native Core',
    desc: 'Advanced cross-platform development, Metro, Reanimated, native modules.',
    statLabel: 'PROFICIENCY',
    stat: 'ADVANCED'
  },
  {
    title: 'Android / Kotlin',
    desc: 'Kotlin, Jetpack, Coroutines, MVVM design patterns.',
    statLabel: 'EXPERIENCE',
    stat: '8+ YEARS'
  },
  {
    title: 'iOS / Swift',
    desc: 'Swift, SwiftUI, UIKit, efficient memory management.',
    statLabel: 'EXPERIENCE',
    stat: '7+ YEARS'
  },
  {
    title: 'Backend & Cloud',
    desc: 'Node.js, PHP/CodeIgniter, AWS, Firebase.',
    statLabel: 'CAPACITY',
    stat: 'FULL-STACK'
  }
];

const TechSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.label}>CAPABILITIES</span>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            One developer for <span className={styles.accent}>every mobile interaction</span> that has to land.
          </motion.h2>
        </div>

        <div className={styles.grid}>
          {capabilities.map((cap, i) => (
            <motion.div 
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className={styles.cardTitle}>{cap.title}</h3>
              <p className={styles.cardDesc}>{cap.desc}</p>
              <div className={styles.cardFooter}>
                <span>{cap.statLabel}</span>
                <span className={styles.cardStat}>{cap.stat}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechSection;
