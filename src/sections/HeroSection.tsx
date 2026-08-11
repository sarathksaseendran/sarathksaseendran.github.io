import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';
import { useStore } from '../store/useStore';

const HeroSection = () => {
  const developerMode = useStore(state => state.developerMode);
  
  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {developerMode && (
          <motion.div 
            className={styles.devModeAlert}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            sudo sarath --debug<br/>
            SYSTEM DEBUG MODE ENABLED
          </motion.div>
        )}
        
        <motion.div 
          className={styles.badge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badgeDot}></span>
          v10.2 • AVAILABLE FOR OPPORTUNITIES
        </motion.div>
        
        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Develop at the speed of <br/>
          <span className={styles.accent}>kinetic architecture.</span>
        </motion.h1>
        
        <motion.p 
          className={styles.description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Senior Staff Engineer specializing in native iOS, Android, and cross-platform React Native solutions. Currently delivering enterprise-scale platforms at Insemi Technology Services for Infosys.
        </motion.p>
        
        <motion.div 
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a href="#" className={`${styles.btn} ${styles.btnPrimary}`}>Download Resume</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('scrollToPage', { detail: { page: 5 } })); }} className={`${styles.btn} ${styles.btnSecondary}`}>Initialize Contact</a>
        </motion.div>
      </motion.div>

      <motion.div 
        className={styles.sideContent}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >


        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <div className={styles.statValue}>16+ Years</div>
            <div className={styles.statLabel}>INDUSTRY EXPERIENCE</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>20+ Apps</div>
            <div className={styles.statLabel}>SHIPPED TO STORES</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>99.9%</div>
            <div className={styles.statLabel}>CRASH-FREE USERS</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
