'use client'

import { JSX, useState } from 'react';
import Image from 'next/image';
import ButtonHandleCollapse from './buttonHandleCollapse';
import { FaPhp } from "react-icons/fa6";
import { FaSquareJs } from "react-icons/fa6";
import { SiMysql } from 'react-icons/si';
import { IoLogoCss3 } from "react-icons/io";
import style from '@/styles/projects.module.scss';

const ProjectThree = (): JSX.Element => {

  const [ isOpened, setIsOpened ] = useState<boolean>(false);

  const handleCollapse = (): void => {
    setIsOpened(!isOpened);
  };

  return (
    <div className={style.subdivproject}>
      <h2 className={style.h2}>
        Statistics (native code)
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
          <FaPhp size={34} className={style.phplogo} />
          {/* <p className={style.titlelogo}>PHP</p> */}
        </div>

        <div className={style.divlogo}>
          <FaSquareJs size={26} className={style.jslogo} />
          {/* <p className={style.titlelogo}>JS</p> */}
        </div>

        <div className={style.divlogo}>
          <SiMysql size={36} className={style.MySQLlogo} />
        </div>

        <div className={style.divlogo}>
          <IoLogoCss3 size={26} className={style.csslogo} />
          {/* <p className={style.titlelogo}>CSS</p> */}
        </div>
      </span>
      
      <ButtonHandleCollapse handleCollapse={handleCollapse} />

      <div>           
        <section className={`${isOpened === true ? style.section : style.sectionhidden}`}>
          <p className={style.paragraph}>
            La partie statistique d'une application web m'a été confié par IT4net.
            Cette expérience m'a permis de collaborer avec des web développeurs, 
            durant 3 mois.
          </p>

          <ul className={style.ul}>
            <li className={style.li}>2 ingénieurs backend dev</li>
            <li className={style.li}>2 web frontend dev</li>
            <li className={style.li}>1 web designer</li>
          </ul>

          <p>
            Les languages de programmation utilisés :
          </p>

          <ul className={style.ul}>
            <li className={style.li}>PHP</li>
            <li className={style.li}>JavaScript</li>
            <li className={style.li}>MySQL</li>
            <li className={style.li}>CSS</li>
          </ul>

          <p className={style.paragraph}>
            J'ai utilsé le PHP orienté objet pour récupérer les données depuis la data base MySQL
            et les faire passer dans du JavaScript afin de m'en servir pour faire des graphiques
            sur le nombre d'intervention effectué par mois et par année, par l'intendance
            d'IT4net. Je me suis servi de ChartJS et du CSS pour le rendu graphique.  
          </p>

          <p className={style.paragraph}>
            À l'issue de cette mission, j'ai atteint tous les objectifs qui avaient été fixés.
          </p>
        </section>
      </div>

      <span className={style.spanlinkstats}>
        {/* <a href="https://github.com/TLRKiliann/..."
          rel="noopener" target="_blank"
          className={style.a}>GitHub</a> */}
        <a href="https://www.youtube.com/watch?v=C30dF36LaZs"
          rel="noopener" target="_blank"
          className={style.a}>Youtube</a>
      </span>
    </div>
  )
};
export default ProjectThree;