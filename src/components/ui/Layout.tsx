import { motion } from 'framer-motion';

import styles from './Layout.module.css';
import { useStore } from '../../store/useStore';

const Layout = () => {
  const activeSection = useStore((state) => state.activeSection);
  
  return (
    <div id="ui-layer" className={styles.uiLayer}>
      <header className={`${styles.header} ${activeSection > 0 ? styles.glassHeader : ''}`}>
        <a href="#hero" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('scrollToPage', { detail: { page: 0 } })); }} className={styles.logo} style={{ textDecoration: 'none' }}>
          SARATH K
        </a>
        <nav className={styles.nav}>
          <a href="#hero" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('scrollToPage', { detail: { page: 0 } })); }} className={activeSection === 0 ? styles.active : ''}>ABOUT</a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('scrollToPage', { detail: { page: 1 } })); }} className={activeSection === 1 ? styles.active : ''}>EXPERIENCE</a>
          <a href="#tech" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('scrollToPage', { detail: { page: 2 } })); }} className={activeSection === 2 ? styles.active : ''}>CAPABILITIES</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('scrollToPage', { detail: { page: 3 } })); }} className={activeSection === 3 ? styles.active : ''}>PROJECTS</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('scrollToPage', { detail: { page: 5 } })); }} className={activeSection === 5 ? styles.active : ''}>CONTACT</a>
        </nav>
      </header>


      
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <motion.div 
            className={styles.wheel}
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
