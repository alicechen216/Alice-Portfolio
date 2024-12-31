import styles from './ProjectsStyles.module.css';
import multiagent from '../../assets/multiagent.png';
import siam from '../../assets/siam.png';
import system from '../../assets/system.png';
import scatter from '../../assets/scatter.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={multiagent}
          link="https://github.com/alicechen216/EML6930"
          h3="Multi-Agnet"
          p="Robust Adaptive Control"
        />
        <ProjectCard
          src={siam}
          link="https://www.youtube.com/watch?v=akEbDMUDqUs&t=4s"
          h3="SIAM Testimonials Invitation "
          p="Youtube Link"
        />
        <ProjectCard
          src={system}
          link="https://github.com/alicechen216/Fractional-Order-System-Identification-With-Occupation-Kernel-Regression"
          h3="System Identification"
          p="Fracational RKHS"
        />
        <ProjectCard
          src={scatter}
          link="https://github.com/alicechen216/MAT6932"
          h3="Scattered Data Approximation"
          p="Franke Function"
        />
      </div>
    </section>
  );
}

export default Projects;
