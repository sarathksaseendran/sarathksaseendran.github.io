
import styles from './Footer.module.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <p className={styles.copyright}>&copy; {new Date().getFullYear()} Sarath K</p>
        <div className={styles.links}>
          <a href="https://linkedin.com/in/sarath-k-ba6655b4" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.icon} /> LinkedIn
          </a>
          <a href="https://github.com/sarathksaseendran" target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.icon} /> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
