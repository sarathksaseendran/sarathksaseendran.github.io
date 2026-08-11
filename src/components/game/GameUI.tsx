import { useStore } from '../../store/useStore';
import { useGameEngine } from './useGameEngine';
import styles from './Game.module.css';

export const GameUI = () => {
  const store = useStore();
  const { gameState, setGameState } = useGameEngine();
  
  const handleExit = () => {
    store.setBtsGameActive(false);
  };
  
  const handleStart = () => {
    setGameState('playing');
  };
  
  return (
    <div className={styles.uiWrapper}>
      {/* Top Header */}
      <div className={styles.header}>
        <div>SARATH // BREAK THE STACK</div>
        <button onClick={handleExit} className={styles.exitBtn}>[ EXIT ]</button>
      </div>
      
      {/* Stats Bar */}
      <div className={styles.statsBar}>
        <div>LEVEL 0{store.bts_level}</div>
        <div>XP {store.bts_xp.toLocaleString()}</div>
        <div>LIVES {Array(store.bts_lives).fill('♥').join(' ')}</div>
        {store.bts_combo > 1 && (
          <div className={styles.combo}>COMBO x{store.bts_combo}</div>
        )}
      </div>
      
      {/* Overlays */}
      {gameState === 'start' && (
        <div className={styles.overlayCenter}>
          <h2>LEVEL {store.bts_level} READY</h2>
          <button className={styles.playBtn} onClick={handleStart}>[ CLICK TO LAUNCH ]</button>
        </div>
      )}
      
      {gameState === 'lostLife' && (
        <div className={styles.overlayCenter}>
          <h2 className={styles.errorText}>SYSTEM FAULT</h2>
          <p>Life Lost</p>
          <button className={styles.playBtn} onClick={handleStart}>[ RESUME ]</button>
        </div>
      )}
      
      {gameState === 'gameOver' && (
        <div className={styles.overlayCenter}>
          <h2 className={styles.errorText}>GAME OVER</h2>
          <button className={styles.playBtn} onClick={() => {
            store.resetBtsGame();
            setGameState('start');
          }}>
            [ REBOOT SYSTEM ]
          </button>
        </div>
      )}
      
      {gameState === 'levelComplete' && (
        <div className={styles.overlayCenter}>
          <h2 className={styles.successText}>STACK CLEARED</h2>
          <p>Proceeding to next level...</p>
        </div>
      )}
      
      {gameState === 'gameWon' && (
        <div className={styles.overlayCenter}>
          <h2 className={styles.successText}>SYSTEM COMPLETE</h2>
          <div className={styles.finalStats}>
            <p>BRICKS DESTROYED: {store.bts_bricksDestroyed}</p>
            <p>BUGS FIXED: {store.bts_bugsFixed}</p>
            <p>PROJECTS DISCOVERED: {store.bts_projectsDiscovered}</p>
            <p>TOTAL XP: {store.bts_xp.toLocaleString()}</p>
          </div>
          <h3 className={styles.rankText}>DEVELOPER LEVEL: SENIOR ENGINEER</h3>
          <button className={styles.playBtn} onClick={handleExit}>[ RETURN TO PORTFOLIO ]</button>
        </div>
      )}
    </div>
  );
};
