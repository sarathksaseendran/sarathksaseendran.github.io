import { motion } from 'framer-motion';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  return (
    <div className={styles.container}>
      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.header}>
          <span className={styles.label}>DISPATCH</span>
          <h2 className={styles.title}>Initialize <span className={styles.accent}>contact protocol.</span></h2>
        </div>

        <form className={styles.formPanel} action="https://formspree.io/f/xyyogrdn" method="POST">
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>OPERATOR_NAME</label>
            <input type="text" placeholder="e.g. Tony Stark" name="name" className={styles.formInput} required />
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>RETURN_ADDRESS (EMAIL)</label>
            <input type="email" placeholder="tony@starkindustries.com" name="__replyto" className={styles.formInput} required />
          </div>
          
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>PAYLOAD_MESSAGE</label>
            <textarea name="message" rows={5} className={styles.formInput} placeholder="Enter transmission data..." required></textarea>
          </div>
          
          <div className={styles.formActions}>
            <span className={styles.secureText}>SECURE_CONNECTION: TRUE</span>
            <button type="submit" className={styles.btnPrimary}>
              Transmit
            </button>
          </div>
        </form>
      </motion.div>

      <div className={styles.footer}>
        <div className={styles.footerBrand}>
          <div className={styles.footerLogo}>Sarath K</div>
        </div>
        <div className={styles.footerLinks}>
          <a href="https://linkedin.com/in/sarath-k-ba6655b4" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
          <a href="https://github.com/sarathksaseendran" target="_blank" rel="noopener noreferrer">GITHUB</a>
          <a href="mailto:sarath.k.shk@gmail.com">EMAIL</a>
        </div>
        <div className={styles.footerInfo}>
          <div>LOC: KOZHIKODE, INDIA</div>
          <div className={styles.footerCopyright}>© 2026 — Built for scale.</div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
