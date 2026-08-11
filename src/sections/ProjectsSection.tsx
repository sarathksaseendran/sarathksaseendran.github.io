import { motion } from 'framer-motion';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import styles from './ProjectsSection.module.css';
import { projects } from '../data/portfolio';

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ y: -5, borderColor: 'rgba(6, 182, 212, 0.4)' }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.cardInner}>
        <div className={styles.cardHeader}>
          <h3 className={styles.projectName}>{project.name}</h3>
        </div>
        
        <p className={styles.projectDesc}>{project.description}</p>
        
        <div className={styles.cardFooter}>
          <div className={styles.status}>
            <span className={styles.statusLabel}>STATUS</span>
            <span className={styles.statusValue}>LIVE</span>
          </div>
          
          <div className={styles.links}>
            {project.playStoreUrl && (
              <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                <FaGooglePlay size={16} /> Play Store
              </a>
            )}
            {project.appStoreUrl && (
              <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                <FaApple size={16} /> App Store
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.label}>DEPLOYMENTS</span>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Apps, platforms, and ecosystems — composed in <span className={styles.accent}>one motion language.</span>
          </motion.h2>
        </div>
        
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
