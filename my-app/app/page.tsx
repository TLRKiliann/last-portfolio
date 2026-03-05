import { JSX } from 'react';
import Image  from 'next/image';
import Layout from "./components/layout";
import Navbar from './components/navbar';
import MainTitle from './components/mainTitle';
import SkillsSection from './components/skillsSection';
import ProjectsSection from './components/projectsSection';
import Footer from './components/footer';
import style from '@/styles/page.module.scss';

const Page = (): JSX.Element => {

  return (
    <>
      <Navbar />

      <div className={style.maindivimg}>
        <div className={style.divbgimg}>
          <Image 
            src='/images/green_path.jpg'
            width="500"
            height="500"
            loading="eager"
            className={style.bg_img} 
            alt="image bg"
          />
        </div>
      </div>

      <Layout>
        <section className={style.sectionMainTitle}>
          <MainTitle />
        </section>
      </Layout>

      <hr className={style.hr} />

      <Layout>
        <section className={style.sectionSkillsSection}>
          <SkillsSection /> 
        </section>
      </Layout>

      <hr className={style.hr} />

      <Layout>
        <section className={style.sectionProjectsSection}>
          <ProjectsSection />
        </section>
      </Layout>

      <Footer />
    </>
  )
};
export default Page;