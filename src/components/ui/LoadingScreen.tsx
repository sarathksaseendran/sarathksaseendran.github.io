import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './LoadingScreen.module.css';

const LoadingScreen = () => {
  const [loadingText, setLoadingText] = useState('INITIALIZING PORTFOLIO...');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const sequence = [
      { text: 'LOADING THREE.JS ENGINE...', delay: 800 },
      { text: 'LOADING MOBILE SYSTEM...', delay: 1600 },
      { text: 'LOADING PROJECTS...', delay: 2400 },
      { text: 'SYSTEM READY', delay: 3200 },
    ];

    sequence.forEach(({ text, delay }) => {
      setTimeout(() => setLoadingText(text), delay);
    });

    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={styles.container}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <div className={styles.content}>
            <div className={styles.spinner}></div>
            <motion.p
              key={loadingText}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={styles.text}
            >
              {loadingText}
            </motion.p>
            <div className={styles.progressBar}>
              <motion.div 
                className={styles.progressFill}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 3.8, ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
