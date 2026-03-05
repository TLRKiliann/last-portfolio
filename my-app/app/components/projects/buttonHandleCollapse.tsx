import { JSX } from 'react';
import style from '@/styles/projects.module.scss';

type PropsHandle = {
	handleCollapse: () => void;
};

const ButtonHandleCollapse = (props: PropsHandle): JSX.Element => {
	return (
    <div className={style.divbtncoll}>
      <button 
        type="button" 
        onClick={props.handleCollapse} 
        className={style.btncollapse}
      >
        Read more
      </button>
    </div>
	)
};
export default ButtonHandleCollapse;