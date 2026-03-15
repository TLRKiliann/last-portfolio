'use client'

import { JSX, useState } from 'react';
import Image from 'next/image';
import ButtonHandleCollapse from './buttonHandleCollapse';
import { FaSass } from 'react-icons/fa';
import style from '@/styles/projects.module.scss';

const ProjectSeven = (): JSX.Element => {

  const [ isOpened, setIsOpened ] = useState<boolean>(false);

  const handleCollapse = (): void => {
    setIsOpened(!isOpened);
  };

  return (
    <div className={style.subdivproject}>
      <h2 className={style.h2}>
        Site vitrine
      </h2>
      <div className={style.divimg}>
        <Image 
          src='/images/boulangerie.png'
          width={380}
          height={200}
          alt="boulangerie img"
          className={style.img}
        />
      </div>
      
      <span className={style.spanlogo}>
        <div className={style.divlogo}>
          <Image 
              src="/images/vitejs.png"
              width={33}
              height={29}
              alt="vitjs logo"
              className={style.logo}
          />
          <p className={style.titlelogo}>Vite.js</p>
        </div>
        <div className={style.divlogo}>
          <FaSass size={28} className={style.sasslogo} />
          <p className={style.titlelogo}>Sass</p>
        </div>
      </span>
      
      <ButtonHandleCollapse handleCollapse={handleCollapse} />

      <div>           
        <section className={`${isOpened === true ? style.section : style.sectionhidden}`}>
          <p className={style.paragraph}>
            J'ai fait ce site de boulangerie, pour m'entraîner au code css, html, 
            et à la manipulation des images.
            <br />
              Ce site comprend :
            <br/>
          </p>
            <ul className={style.ul}>
              <li className={style.li}>la page principale</li>
              <li className={style.li}>un formulaire pour commander des produits</li>
              <li className={style.li}>une page pour la présentation des produits</li>
              <li className={style.li}>une page de contact et une page pour les allergies</li>
            </ul>
          <p className={style.paragraph}>
            Bien que le design présente bien et que la cohérence du site soit 
            respectée, je le trouve, dans sa vue d'ensemble, un peu old-school.
            En même temps, c'est l'un de mes plus vieux sites :)
          </p>
        </section>
      </div>

      <span className={style.spanlink}>
        <a href="https://github.com/TLRKiliann/vite-et-bien"
          rel="noopener" target="_blank"
          className={style.a}>GitHub</a>
        <a href="https://www.youtube.com/watch?v=8g789tQ2gyY"
          rel="noopener" target="_blank"
          className={style.a}>Youtube</a>
      </span>
    </div>
  )
};
export default ProjectSeven;