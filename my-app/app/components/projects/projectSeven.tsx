'use client'

import { JSX, useState } from 'react';
import Image from 'next/image';
import ButtonHandleCollapse from './buttonHandleCollapse';

import { FaSass } from 'react-icons/fa';
import { FaPhp } from "react-icons/fa6";
import { FaSquareJs } from "react-icons/fa6";


import { SiMysql } from 'react-icons/si';

import { IoLogoCss3 } from "react-icons/io";



import style from '@/styles/projects.module.scss';

const ProjectSeven = (): JSX.Element => {

  const [ isOpened, setIsOpened ] = useState<boolean>(false);

  const handleCollapse = (): void => {
    setIsOpened(!isOpened);
  };

  return (
    <div className={style.subdivproject}>
      <h2 className={style.h2}>
        Statistics
      </h2>
      <div className={style.divimg}>
        <Image 
          src='/images/stats.png'
          width={380}
          height={200}
          alt="stats img"
          className={style.img}
        />
      </div>
      
      <span className={style.spanlogo}>
        <div className={style.divlogo}>
          <FaPhp size={24} className={style.logo} />
          <p className={style.titlelogo}>PHP</p>
        </div>

        <div className={style.divlogo}>
          <FaSquareJs size={24} className={style.logo} />
          <p className={style.titlelogo}>JS</p>
        </div>

        <div className={style.divlogo}>
          <SiMysql size={24} className={style.logo} />
          <p className={style.titlelogo}>MySQL</p>
        </div>

        <div className={style.divlogo}>
          <IoLogoCss3 size={24} className={style.logo} />
          <p className={style.titlelogo}>CSS</p>
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
        <a href="https://www.youtube.com/watch?v=C30dF36LaZs"
          rel="noopener" target="_blank"
          className={style.a}>Youtube</a>
      </span>
    </div>
  )
};
export default ProjectSeven;