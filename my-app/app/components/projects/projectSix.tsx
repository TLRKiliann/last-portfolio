'use client'

import { JSX, useState } from 'react';
import Image from 'next/image';
import ButtonHandleCollapse from './buttonHandleCollapse';
import { SiTailwindcss, SiMongoose } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import style from '@/styles/projects.module.scss';

const ProjectSix = (): JSX.Element => {

  const [ isOpened, setIsOpened ] = useState<boolean>(false);
  
  const handleCollapse = (): void => {
    setIsOpened(!isOpened);
  }

  return (
    <div className={style.subdivproject}>
      <h2 className={style.h2}>
        Clothing store
      </h2>
      <div className={style.divimg}>
        <Image 
          src='/images/e-commerce.png'
          alt="e-commerce img"
          width={380}
          height={200}
          className={style.img}
        />
      </div>
      
      <span className={style.spanlogo}>
        <div className={style.divlogo}>
          <TbBrandNextjs size={26} className={style.logo} />
          <p className={style.titlelogo}>Next.js</p>
        </div>

        <div className={style.divlogo}>
          <SiMongoose size={24} className={style.mangooslogo} />
          <p className={style.titlelogo}>Mongoose</p>
        </div>

        <div className={style.divlogo}>
          <SiTailwindcss size={24} className={style.tailwindlogo} />
          <p className={style.titlelogo}>Tailwind</p>
        </div>
      </span>

      <ButtonHandleCollapse handleCollapse={handleCollapse} />

      <div>
        <section className={`${isOpened === true ? style.section : style.sectionhidden}`}>
          <p className={style.paragraph}>
            Dans ce projet, j'ai rendu l'UX la plus professionnelle possible. 
            
            Rendre clair les étapes du cheminement de l'achat du produit selectionné, 
            depuis le choix du produit jusqu'au paiment.
          </p>
          <p className={style.paragraph}>
            La réalisation de ce projet m'a appris à :
          </p>
          <ul className={style.ul}>
            <li className={style.li}>Combiner des hooks tel que useReducer avec useContext.</li>
            <li className={style.li}>Comprendre comment gérer les données avec MongoDB.</li>
            <li className={style.li}>Sécuriser un site web avec TypeScript et NextAuth.</li>
            <li className={style.li}>utiliser Tailwind avec le darkmode.</li>
          </ul>
        </section>
      </div>

      <span className={style.spanlink}>
        <a href="https://github.com/TLRKiliann/nextjs-tailwind-mongodb" 
          rel="noopener" target="_blank"
          className={style.a}>
          GitHub
        </a>
        <a href="https://www.youtube.com/watch?v=po74SHEI9HI"
          rel="noopener" target="_blank"
          className={style.a}>
          Youtube
        </a>
      </span>
    </div>
  )
};
export default ProjectSix;