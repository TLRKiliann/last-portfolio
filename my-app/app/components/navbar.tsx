"use client";

import { JSX } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import style from '@/styles/navbar.module.scss';

const Navbar = (): JSX.Element => {

  const pathname: string = usePathname();
  const isMainPage: boolean = pathname === "/";
  const isGamePage: boolean = pathname === "/game";

  return (
    <>
      <nav className={style.navbar}>

        <div className={style.image}>
          <Image
            src='/images/computing.png'
            width={60}
            height={60}
            alt="small photo"
            className={style.img}
          />
        </div>

        <ul className={style.ul}>
          <li className={style.li}>
            {!isMainPage && (<Link href="/">Main</Link>)}
          </li>
          {!isGamePage && (
            <>
              <li className={style.li}>
                <Link href="/game">Game</Link>
              </li>
              <li className={style.li}>
                <a href="#linkskills" className={style.link}>
                  Skills
                </a>
              </li>
              <li className={style.li}>
                <a href="#projects" className={style.link}>
                  Projects
                </a>
              </li>
            </>
          )}
        </ul>
        
      </nav>
    </>
  )
};
export default Navbar;
