import styles from './SkillsSection.module.css';
import { 
  SiJavascript, SiTypescript, SiKotlin, SiPython, SiSwift, SiPhp, 
  SiReact, SiNextdotjs, SiApple, SiAndroid, SiExpo, SiGraphql, 
  SiNodedotjs, SiNestjs, SiMysql, SiFirebase, 
  SiGooglecloud, SiGit, SiJenkins, SiFastlane, SiDocker, SiFlutter, SiDart 
} from 'react-icons/si';
import { 
  FaJava, FaCode, FaRoute, FaServer, FaDatabase, FaRobot, 
  FaBrain, FaMagic, FaInfinity, FaAws 
} from 'react-icons/fa';

const SkillsSection = () => {
  return (
    <section id="skills" className={styles.section}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Technical Skills</h2>
        
        <div className={styles.grid}>
          
          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>Languages</h3>
            <div className={styles.tags}>
              <span><SiJavascript className={styles.icon} /> JavaScript</span>
              <span><SiTypescript className={styles.icon} /> TypeScript</span>
              <span><SiKotlin className={styles.icon} /> Kotlin</span>
              <span><FaJava className={styles.icon} /> Java</span>
              <span><SiPython className={styles.icon} /> Python</span>
              <span><SiSwift className={styles.icon} /> Swift</span>
              <span><SiDart className={styles.icon} /> Dart</span>
              <span><SiPhp className={styles.icon} /> PHP</span>
              <span><FaCode className={styles.icon} /> VB6</span>
            </div>
          </div>

          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>Frontend</h3>
            <div className={styles.tags}>
              <span><SiReact className={styles.icon} /> React</span>
              <span><SiReact className={styles.icon} /> React Native</span>
              <span><SiNextdotjs className={styles.icon} /> Next.js</span>
            </div>
          </div>

          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>Mobile</h3>
            <div className={styles.tags}>
              <span><SiApple className={styles.icon} /> iOS</span>
              <span><SiAndroid className={styles.icon} /> Android</span>
              <span><SiFlutter className={styles.icon} /> Flutter</span>
              <span><SiKotlin className={styles.icon} /> Kotlin Multiplatform</span>
              <span><FaRoute className={styles.icon} /> React Navigation</span>
              <span><SiExpo className={styles.icon} /> Expo</span>
            </div>
          </div>

          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>Backend & APIs</h3>
            <div className={styles.tags}>
              <span><FaServer className={styles.icon} /> REST</span>
              <span><SiGraphql className={styles.icon} /> GraphQL</span>
              <span><SiNodedotjs className={styles.icon} /> Node.js</span>
              <span><SiNestjs className={styles.icon} /> NestJS</span>
              <span><FaDatabase className={styles.icon} /> SQL</span>
              <span><SiMysql className={styles.icon} /> MySQL</span>
            </div>
          </div>

          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>Cloud & Services</h3>
            <div className={styles.tags}>
              <span><FaAws className={styles.icon} /> AWS</span>
              <span><SiFirebase className={styles.icon} /> Firebase</span>
              <span><SiGooglecloud className={styles.icon} /> Google Cloud</span>
            </div>
          </div>

          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>AI / LLM</h3>
            <div className={styles.tags}>
              <span><FaRobot className={styles.icon} /> LLM Integration</span>
              <span><FaBrain className={styles.icon} /> RAG</span>
              <span><FaDatabase className={styles.icon} /> Vector Databases</span>
              <span><FaMagic className={styles.icon} /> AI Applications</span>
            </div>
          </div>

          <div className={styles.category}>
            <h3 className={styles.categoryTitle}>DevOps & Tools</h3>
            <div className={styles.tags}>
              <span><SiGit className={styles.icon} /> Git</span>
              <span><FaInfinity className={styles.icon} /> CI/CD</span>
              <span><SiJenkins className={styles.icon} /> Jenkins</span>
              <span><SiFastlane className={styles.icon} /> Fastlane</span>
              <span><SiDocker className={styles.icon} /> Docker</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
