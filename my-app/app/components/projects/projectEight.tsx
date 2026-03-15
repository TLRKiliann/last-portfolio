'use client'

import { JSX, useState } from 'react';
import Image from 'next/image';
import ButtonHandleCollapse from './buttonHandleCollapse';
import { SiTailwindcss, SiMysql } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import style from '@/styles/projects.module.scss';

const ProjectEight = (): JSX.Element => {

  const [ isOpened, setIsOpened ] = useState<boolean>(false);

  const handleCollapse = (): void => {
    setIsOpened(!isOpened);
  };

  return (
    <div className={style.subdivproject}>
      <h2 className={style.h2}>
        Skateboard-Shop
      </h2>
      <div className={style.divimg}>
        <Image 
          src='/images/skate.png'
          width={380}
          height={200}
          alt="skate img"
          className={style.img}
        />
      </div>
      
      <span className={style.spanlogo}>
        <div className={style.divlogo}>
          <TbBrandNextjs size={26} className={style.logo} />
          <p className={style.titlelogo}>Next.js</p>
        </div>
        <div className={style.divlogo}>
          <SiMysql size={36} className={style.MySQLlogo} />
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
            Ma motivation à faire ce site web, se traduit par l'envie de réaliser un site
            cool qui regroupe un peu toutes les techniques qu'un web dev est censé faire preuve.
          </p>
          <p className={style.paragraph}>
            Ce site met en vente des planches, des axes et des roues pour les skaters. Le tout réalisé
            grâce à :
          </p>
            <ul className={style.ul}>
              <li className={style.li}>Parallax - Carousel - Dropdown - Darkmode</li>
              <li className={style.li}>Une searchbar qui dirige vers l'url en fonction du produit recherché</li>
              <li className={style.li}>La gestion des erreurs par les fichiers: error.tsx - loading.tsx - not-found.tsx</li>
              <li className={style.li}>L'utilisation des params avec les fonctions async grâce aux [folderId]</li>
              <li className={style.li}>Les appels serveur MySQL qui correspondent à l'id du produit</li>
              <li className={style.li}>La gestion authentification par API et middleware</li>
              <li className={style.li}>Rendre les composants reutilisables un max</li>
              <li className={style.li}>La sécurité avec TypeScript - Zod - Bcrypt</li>
              <li className={style.li}>Le localStorage, les hooks, etc.</li>
            </ul>
          <p className={style.paragraph}>
            Beaucoup de plaisir à faire ce site et à appliquer les diverses techniques de NextJS.
          </p>
        </section>
      </div>

      <span className={style.spanlink}>
        <a href="https://github.com/TLRKiliann/nextjs14-vishwas"
          rel="noopener" target="_blank"
          className={style.a}>GitHub</a>
        <a href="https://www.youtube.com/watch?v=cUJHlCAO1qo"
          rel="noopener" target="_blank"
          className={style.a}>Youtube</a>
      </span>
    </div>
  )
};
export default ProjectEight;