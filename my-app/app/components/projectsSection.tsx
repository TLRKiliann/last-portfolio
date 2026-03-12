import { JSX } from 'react';
import ProjectOne from './projects/projectOne';
import ProjectTwo from './projects/projectTwo';
import ProjectThree from './projects/projectThree';
import ProjectFour from './projects/projectFour';
import ProjectFive from './projects/projectFive';
import ProjectSix from './projects/projectSix';
import ProjectSeven from './projects/projectSeven';
import ProjectEight from './projects/projectEight';
import VerticalText from './projects/verticalText';
import style from '@/styles/projects.module.scss';

const ProjectsSection = (): JSX.Element => {
  return (
    <div id="projects" className={style.project}>
      <h1 className={style.header}>
        Projects
      </h1>

      <div className={style.divproject}>

        <ProjectOne />

        <ProjectTwo />

        <ProjectThree />

      </div>

      <div className={style.seconddivproject}>

        <ProjectFour />

        <ProjectFive />

      </div>

      <div className={style.divproject}>

        <ProjectSix />

        <ProjectSeven />

        <ProjectEight />

      </div>

      <VerticalText />

    </div>
  )
};
export default ProjectsSection;