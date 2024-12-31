import styles from './HeroStyles.module.css';
import Spline from '@splinetool/react-spline';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';
import scholarLight from '../../assets/google-scholar-light.svg';
import scholarDark from '../../assets/google-scholar-dark.svg';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const scholarIcon = theme === 'light' ? scholarLight : scholarDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <div className={styles.hero}>
          <Spline scene="https://prod.spline.design/GfrCw9bBdbbvKW8Y/scene.splinecode" />
        </div>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Haowei(Alice)
          <br />
          Chen
        </h1>
        <h2>Ph.D in Math</h2>
        <span>
            <a href="https://scholar.google.com/citations?user=TLM2V2EAAAAJ&hl=en" target="_blank">
            <img src={scholarIcon} alt="Google Scholar icon" />
          </a>
          <a href="https://github.com/alicechen216" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/chenhaowei/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Self-Driven Mathematician; Single Mother; Travel Lover.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;