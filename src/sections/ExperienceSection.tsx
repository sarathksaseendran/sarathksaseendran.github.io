import { experiences } from '../data/portfolio';
import styles from './ExperienceSection.module.css';

const ExperienceSection = () => {
  return (
    <section id="experience" className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Experience</h2>
        
        <div className={styles.timeline}>
          {experiences.map((exp) => (
            <div key={exp.id} className={styles.timelineItem}>
              <div className={styles.itemHeader}>
                <div className={styles.companyInfo}>
                  <h3 className={styles.company}>{exp.company}</h3>
                  <h4 className={styles.role}>{exp.role}</h4>
                </div>
                <div className={styles.period}>{exp.period}</div>
              </div>
              <div className={styles.content}>
                <ul className={styles.responsibilities}>
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
