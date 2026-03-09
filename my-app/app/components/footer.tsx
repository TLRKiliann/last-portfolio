import { JSX } from 'react';
import { FaGithub, FaYoutube, FaCodepen, FaLinkedin } from 'react-icons/fa';
import style from '@/styles/footer.module.scss';

const Footer = (): JSX.Element => {
  return (
    <footer className={style.footer}>
      <div className={style.divfooterlogo}>

        <a href="https://github.com/TLRKiliann"
            target="_blank"
            rel="noopener noreferrer"
            className={style.a}>
          <FaGithub
            size={32}
            className={style.icons}
          />
            GitHub
        </a>

        <a href="https://www.youtube.com/@estebancatanea"
            target="_blank"
            rel="noopener noreferrer"
            className={style.a}>
          <FaYoutube
            size={32}
            className={style.icons}
          />
            Youtube
        </a>

        <a href="https://codepen.io/koalatr33"
            target="_blank"
            rel="noopener noreferrer"
            className={style.a}>
          <FaCodepen
            size={32}
            className={style.icons}
          />
            codepen.io
        </a>

        <a href="https://www.linkedin.com/in/cedric-kuchen-dev"
            target="_blank"
            rel="noopener noreferrer"
            className={style.a}>
          <FaLinkedin
            size={32}
            className={style.icons}
          />
            LinkedIn
        </a>

      </div>
    </footer>
  )
};
export default Footer;
