import React, {FC} from 'react';
import styles from './Button.module.scss'

interface ButtonProps {
  text: string
  width: string
  handler?: () => void
}

const Button: FC<ButtonProps> = ({text, width, handler}) => {
  return (
    <button
      className={styles.wrap}
      style={{width: width}}
      onClick={handler}
    >
      {text}
    </button>
  );
};

export default Button;