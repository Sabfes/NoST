import React, {useState} from "react";
import styles from "./LoginPage.module.css"
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import {loginMe} from "../../store/actions/auth.action";
import {useDispatch} from "react-redux";

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const loginHandler = () => {
    dispatch(loginMe({email, password}))
  }

  return <div className={styles.LoginPage}>
    <div className={styles.LoginPage__modal}>
      <h1 className={styles.modal__title}>Login</h1>
      <InputField
        type={'text'}
        placeholder={'Email'}
        value={email}
        setValue={setEmail}
      />
      <InputField
        type={'text'}
        placeholder={'Password'}
        value={password}
        setValue={setPassword}
      />

      <div className={styles.LoginPage__btns}>
        <Button w={'49%'} linkTo={'/registration'} type={'outline'}>Registration</Button>
        <Button
          w={'49%'}
          type={'submit'}
          onClick={() => {
            loginHandler()
          }}
        >Sign in</Button>
      </div>
    </div>
  </div>
}
export default LoginPage