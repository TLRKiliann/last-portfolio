'use client'

import { JSX, useState } from 'react';
import Image from 'next/image';
import ButtonHandleCollapse from './buttonHandleCollapse';
import { SiVitest } from 'react-icons/si';
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io";
import style from '@/styles/projects.module.scss';

const ProjectFour = (): JSX.Element => {

    const [ isOpened, setIsOpened ] = useState<boolean>(false);

    const handleCollapse = (): void => {
        setIsOpened(!isOpened);
    };

    return (
        <div className={style.subdivproject}>
            <h2 className={style.h2}>
                Game (Mon Eco Pote)
            </h2>
            <div className={style.divimg}>
                <Image 
                    src='/images/game.png'
                    width={380}
                    height={200}
                    alt="game ecopote img"
                    className={style.img}
                />
            </div>

            <span className={style.spanlogo}>
                <div className={style.divlogo}>
                    <SiVitest size={24} className={style.logo} />
                    <p className={style.titlelogo}>Vite.js</p>
                </div>

                <div className={style.divlogo}>
                    <BiLogoTypescript size={28} className={style.logo} />
                    <p className={style.titlelogo}>TypeScript</p>
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
                        J'ai travaillé comme bénévole pour Mon Eco Pote. Ils m'ont demandé de leur 
                        faire un jeu. Alors, je me suis mis au travail et je l'ai fait seul. Je ne 
                        savais pas si au départ cela allait être réalisable, mais finalement le résultat
                        est concluant. 
                    </p>

                    <p className={style.paragraph}>
                        Bien évidemment, ce jeu n'est praticable que sur desktop, car la version mobile
                        pose trop de problème en terme de dimension des cases, etc.
                    </p>

                    <ul className={style.ul}>
                        <li className={style.li}>Traduit en 4 langues</li>
                        <li className={style.li}>Choix du nombre de joueur (2-6)</li>
                        <li className={style.li}>Choix du nombre de tour (1-5)</li>
                        <li className={style.li}>Choix du niveau (enfants ou adultes)</li>
                        <li className={style.li}>Test les connaissances eco-environnementales</li>
                    </ul>

                    <p className={style.paragraph}>
                        Venez jouer ! Ça vaut le détour !!!
                    </p>

                </section>
            </div>

            <span className={style.spanlink}>
                <a href="https://github.com/TLRKiliann/mono-game" 
                    rel="noopener" target="_blank"
                    className={style.a}
                >
                    GitHub
                </a>
                <a href="https://mono-game-beta.vercel.app/"
                    rel="noopener" target="_blank"
                    className={style.a}
                >
                    Vercel
                </a>
            </span>
        </div>
    )
};
export default ProjectFour;