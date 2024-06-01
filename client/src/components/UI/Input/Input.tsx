import React, {FC} from 'react';
import styles from './Input.module.scss'
import userIcon from '../../../assets/user.svg'
import lockIcon from '../../../assets/lock.svg'
import confirmIcon from '../../../assets/confirmLock.svg'
import {FieldError} from "react-hook-form";

export enum Icons {
  User = 'User',
  Lock = 'Lock',
  Confirm = 'Confirm'
}

interface InputProps {
  placeHolder: string,
  iconVersion: Icons,
  inputType?: string,
  name: string,
  register: any,
  validateOptions?: unknown,
  ariaInvalid?: FieldError | undefined
}

function getIcon(icon: Icons): string | undefined {
  if (icon === 'User') {
    return userIcon
  } else if (icon === 'Lock') {
    return lockIcon
  } else if (icon === 'Confirm') {
    return confirmIcon
  } else return undefined
}

const Input: FC<InputProps> = ({
  placeHolder,
  iconVersion,
  inputType = 'text',
  name,
  register,
  validateOptions,
  ariaInvalid
}) => {
  const icon: Icons = Icons[iconVersion]

  return (
    <div className={styles.wrap}>
      <img
        src={getIcon(icon)}
        alt={placeHolder}
        className={styles.icon}
      />
      <input
        type={inputType}
        className={styles.input}
        placeholder={placeHolder}
        name={name} {...register(name, validateOptions)}
        aria-invalid={ariaInvalid ? "true" : "false"}
      />
    </div>
  );
};

export default Input;