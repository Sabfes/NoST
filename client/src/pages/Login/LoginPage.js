import React, {useState} from "react";
import styles from "./LoginPage.module.css"
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return <div className={styles.LoginPage}>
    <div className={styles.LoginPage__modal}>
      <h1 className={styles.modal__title}>Login</h1>
      <InputField
        type={'text'}
        placeholder={'email'}
        value={email}
        setValue={setEmail}
      />
      <InputField
        type={'text'}
        placeholder={'password'}
        value={password}
        setValue={setPassword}
      />

      <div className={styles.LoginPage__btns}>
        <Button w={'49%'} type={'outline'}>Registration</Button>
        <Button w={'49%'} type={'submit'}>Sign in</Button>
      </div>
    </div>
  </div>
}
export default LoginPage