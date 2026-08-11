import { motion } from 'framer-motion';
import styles from './ExperienceSection.module.css';
import { experiences } from '../data/portfolio';

const ExperienceSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.sectionHeader}>
          <span className={styles.label}>TELEMETRY</span>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            A timeline of <span className={styles.accent}>continuous delivery.</span>
          </motion.h2>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              className={styles.timelineItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.timelineNode}></div>
              <div className={styles.timelineContent}>
                <div className={styles.header}>
                  <h3 className={styles.company}>{exp.company}</h3>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                <h4 className={styles.role}>{exp.role}</h4>
                <ul className={styles.description}>
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
