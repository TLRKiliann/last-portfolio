"use client";

import { JSX } from 'react';
import Image  from 'next/image';
import Layout from "./components/layout";
import MainTitle from './components/mainTitle';
import SkillsSection from './components/skillsSection';
import ProjectsSection from './components/projectsSection';
import Footer from './components/footer';
import Galaxy from './components/galaxy';
import style from '@/styles/page.module.scss';

const Page = (): JSX.Element => {
  return (
    <>
      <div className={style.galaxy}>
        <Galaxy 
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        />
      </div>

      <div className={style.maindivimg}>
        <div className={style.divbgimg}>
          <Image 
            src='/images/green_path.jpg'
            width={500}
            height={500}
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