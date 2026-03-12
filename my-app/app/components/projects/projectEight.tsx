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
          <TbBrandNextjs size={24} className={style.logo} />
          <p className={style.titlelogo}>Next.js</p>
        </div>
        <div className={style.divlogo}>
          <SiMysql size={24} className={style.logo} />
          <p className={style.titlelogo}>MySQL</p>
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
            ...
            <br />
              ...
            <br/>
          </p>
            <ul className={style.ul}>
              <li className={style.li}>la page principale</li>
              <li className={style.li}>un formulaire pour commander des produits</li>
              <li className={style.li}>une page pour la présentation des produits</li>
              <li className={style.li}>une page de contact et une page pour les allergies</li>
            </ul>
          <p className={style.paragraph}>
            ...
          </p>
        </section>
      </div>

      <span className={style.spanlink}>
        <a href="https://github.com/TLRKiliann/..."
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