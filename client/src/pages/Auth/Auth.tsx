import React, {FC} from 'react';
import styles from './Auth.module.scss'
import Input, {Icons} from "../../components/UI/Input/Input.tsx";
import Button from "../../components/UI/Button/Button.tsx";
import {Link, Path, useLocation} from "react-router-dom";
import {SubmitHandler, useForm} from "react-hook-form";
import {JSX} from "react/jsx-runtime";

export interface IFormInput {
  email: string
  password: string
  confirmPassword: string
}

function isLoginPath(path: string): boolean {
  return path === '/login'
}

const Auth: FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()
  const {pathname}: Path = useLocation()
  console.log('err =L', errors)
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  const renderError = (): undefined | JSX.Element => {
    return isLoginPath(pathname)
      ? errors.email?.type && (
      <p className={styles.error}>Требуется ваш email: </p>
    )
      : errors.email?.type && (
      <p className={styles.error}>Некорректный email: </p>
    );
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.form}>
        <form className={styles.inputs} onSubmit={handleSubmit(onSubmit)}>
          {
            renderError()
          }
          <Input
            placeHolder='E-mail'
            iconVersion={Icons.User}
            name='email'
            register={register}
            validateOptions={{
              required: true,
              minLength: 4,
              pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            }}
            ariaInvalid={errors.email}
          />
          {
            errors.password?.type && (
              <p className={styles.error}>Некорректный пароль:</p>
            )
          }
          <Input
            placeHolder='Пароль'
            iconVersion={Icons.Lock}
            inputType='password'
            name='password'
            register={register}
            ariaInvalid={errors.password}
            validateOptions={!isLoginPath(pathname) && {
              required: true,
              minLength: 4,
              maxLength: 64
            } || {
              required: true,
            }}
          />
          {
            !isLoginPath(pathname)
              ? <Input
                  placeHolder='Подтвердите пароль'
                  iconVersion={Icons.Confirm}
                  inputType='password'
                  name='confirmPassword'
                  register={register}
                  ariaInvalid={errors.confirmPassword}
                />
              : null
          }
          <Button text='Войти' width='100%'/>
        </form>
        <div className={styles.haveAccount}>
          {
            isLoginPath(pathname)
              ? <p>Нет аккаунта - <Link to='/registration' onClick={window.location.reload}>зарегестрируйтесь!</Link></p>
              : <p>Уже есть аккаунт? - <Link to='/login' onClick={window.location.reload}>войдите в него!</Link></p>
          }
        </div>
        <div className={styles.background}>
          <span className={`${styles.shape} ${styles.shape1}`}></span>
          <span className={`${styles.shape} ${styles.shape2}`}></span>
          <span className={`${styles.shape} ${styles.shape3}`}></span>
          <span className={`${styles.shape} ${styles.shape4}`}></span>
        </div>
      </div>
    </div>
  );
};

export default Auth;