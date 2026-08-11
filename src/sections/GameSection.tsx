import { motion, AnimatePresence } from 'framer-motion';
import styles from './GameSection.module.css';
import { useStore } from '../store/useStore';

const GameSection = () => {
  const { setBtsGameActive, systemHealed, bts_bricksDestroyed, bts_bugsFixed, bts_projectsDiscovered, bts_xp } = useStore();

  return (
    <div className={styles.container}>
      <div className={styles.gameTerminal}>
        <div className={styles.terminalHeader}>
          <div className={styles.dots}>
            <span></span><span></span><span></span>
          </div>
          <div className={styles.title}>SYSTEM_DEBUG.exe</div>
          <div className={styles.score}>v1.0.0</div>
        </div>

        <div className={styles.terminalBody}>
          <AnimatePresence mode="wait">
            {systemHealed ? (
              <motion.div 
                key="won"
                className={styles.winScreen}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <h3 className={styles.successText}>SYSTEM COMPLETE</h3>
                <div style={{ textAlign: 'left', margin: '2rem 0', color: '#94a3b8' }}>
                  <p>BRICKS DESTROYED: &nbsp;&nbsp;&nbsp;{bts_bricksDestroyed}</p>
                  <p>BUGS FIXED: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{bts_bugsFixed}</p>
                  <p>PROJECTS DISCOVERED: {bts_projectsDiscovered}</p>
                  <p>TOTAL XP: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{bts_xp.toLocaleString()}</p>
                </div>
                <p className={styles.rank}>DEVELOPER LEVEL: SENIOR ENGINEER</p>
                <button className={styles.optionBtn} onClick={() => setBtsGameActive(true)} style={{ textAlign: 'center' }}>
                  [ PLAY AGAIN ]
                </button>
              </motion.div>
            ) : (
              <motion.div 
                key="start"
                className={styles.winScreen}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 style={{ color: '#06b6d4', letterSpacing: '2px', marginBottom: '1rem' }}>SARATH K</h2>
                <h3 className={styles.successText} style={{ color: '#f8fafc', marginBottom: '2rem' }}>BREAK THE STACK</h3>
                
                <p style={{ color: '#94a3b8', lineHeight: 1.6, marginBottom: '2rem' }}>
                  A small arcade game <br/>
                  about a very large <br/>
                  codebase.
                </p>

                <div className={styles.options}>
                  <button className={styles.optionBtn} onClick={() => setBtsGameActive(true)} style={{ textAlign: 'center', borderColor: '#06b6d4', color: '#06b6d4' }}>
                    [ START ]
                  </button>
                  <button className={styles.optionBtn} style={{ textAlign: 'center', opacity: 0.5 }}>
                    [ SKIP GAME ]
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default GameSection;
