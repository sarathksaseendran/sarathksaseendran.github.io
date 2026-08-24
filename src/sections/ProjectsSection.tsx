import { projects } from '../data/portfolio';
import styles from './ProjectsSection.module.css';

const ProjectsSection = () => {
  return (
    <section id="projects" className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Selected Projects</h2>
        
        <div className={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <h3 className={styles.projectTitle}>{project.name}</h3>
              {project.role && <p className={styles.projectRole}>{project.role}</p>}
              <p className={styles.projectDescription}>
                {project.description}
              </p>
              
              {project.technologies && (
                <div className={styles.technologies}>
                  {project.technologies.map(tech => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              )}
              
              <div className={styles.projectLinks}>
                {project.playStoreUrl && (
                  <a href={project.playStoreUrl} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>Play Store &rarr;</a>
                )}
                {project.appStoreUrl && (
                  <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>App Store &rarr;</a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>View Live &rarr;</a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>GitHub &rarr;</a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
