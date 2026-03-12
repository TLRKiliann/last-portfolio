'use client'

import { JSX, useState } from 'react';
import Image from 'next/image';
import ButtonHandleCollapse from './buttonHandleCollapse';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiPostgresql, SiTailwindcss } from "react-icons/si";
import style from '@/styles/projects.module.scss';

const ProjectOne = (): JSX.Element => {

  const [ isOpened, setIsOpened ] = useState<boolean>(false);

  const handleCollapse = (): void => {
    setIsOpened(!isOpened);
  };

  return (
    <div className={style.subdivproject}>
      <h2 className={style.h2}>
        Dashboard
      </h2>
      <div className={style.divimg}>
        <Image 
          src='/images/dashboard.png'
          width={380}
          height={200}
          alt="axis img"
          className={style.img}
        />
      </div>
      
      <span className={style.spanlogo}>
        <div className={style.divlogo}>
          <TbBrandNextjs size={24} className={style.logo} />
          <p className={style.titlelogo}>Next.js</p>
        </div>

        <div className={style.divlogo}>
          <SiPostgresql size={24} className={style.logo} />
          <p className={style.titlelogo}>PostgreSQL</p>
        </div>

        <div className={style.divlogo}>
          <SiTailwindcss size={24} className={style.logo} />
          <p className={style.titlelogo}>Tailwind</p>
        </div>
      </span>

      <ButtonHandleCollapse handleCollapse={handleCollapse} />

      <div>
          
        <section className={`${isOpened === true ? style.section : style.sectionhidden}`}>
          <p className={style.paragraph}>
            Dans ce projet j'ai eu l'envie de tout utiliser ce que je pouvais pour une sécurité maximale.
            Que ce soit tant côté utilisateur que coté admin.
          </p>  
          <p>
            L'utilisateur peut se loger et utiliser le site comme un site e-commerce. Il peut également envoyer
            des messages aux autres membres du site et voir qui est connecté ou non.
          </p>
          <p>
            L'administrateur peut voir l'ip de qui se connecte et mapper l'ip (pour autant que ça ne soit pas
            depuis un VPN). Il peut consulter les graphiques des ventes. Ajouter des articles, les supprimer, etc.
          </p>
          <p>
            Pour ce faire j'ai utilisé :
          </p>
          <ul className={style.ul}>
            <li className={style.li}>@tanstack</li>
            <li className={style.li}>jsonwebtoken - bcrypt</li>
            <li className={style.li}>PostgreSQL avec Prisma</li>
            <li className={style.li}>Zustand - Zod - TypeScript</li>
            <li className={style.li}>server-action avec next-safe-action</li>
            <li className={style.li}>NextAuth avec Middleware</li>
          </ul>
          <p className={style.paragraph}>
            C'est un projet complexe et très riche. J'ai énormément appris
            lors de sa réalisation.
          </p>
        </section>

      </div>

      <span className={style.spanlink}>
        <a href="https://github.com/TLRKiliann/Nextjs-Dashboard" 
          rel="noopener" target="_blank"
          className={style.a}>
          GitHub
        </a>
        <a href="https://www.youtube.com/watch?v=fMMOh8GGPV0"
          rel="noopener" target="_blank"
          className={style.a}>
          Youtube
        </a>
      </span>
    </div>
  )
};
export default ProjectOne;