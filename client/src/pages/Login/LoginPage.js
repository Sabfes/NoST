import React, {useState} from "react";
import styles from "./LoginPage.module.css"
import InputField from "../../components/InputField/InputField";

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

      {/*<button>Go</button>*/}
      {/*<button>Reg</button>*/}
    </div>
  </div>
}
export default LoginPage