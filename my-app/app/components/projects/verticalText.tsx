import { JSX } from 'react';
import style from '@/styles/projects.module.scss';

const verticalText = (): JSX.Element => {
	return (
    <div className={style.parentvertical}>
      <p className={style.verticaltext}>cedric.kuchen@protonmail.com</p>
      <div className={style.verticallongline}></div>
    </div>
	)
};
export default verticalText;