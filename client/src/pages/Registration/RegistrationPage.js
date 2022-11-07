import React, {useState} from "react";
import styles from './RegistrationPage.module.css'
import InputField from "../../components/InputField/InputField";
import Button from "../../components/Button/Button";
import {useDispatch} from "react-redux";
import {registrMe} from "../../store/actions/auth.action";

const RegistrationPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const registrationHandler = () => {
    dispatch(registrMe({email, password}))
  }

  return <div
    className={styles.RegistrationPage}
  >
    <div className={styles.RegistrationPage__container}>
      <h1 className={styles.RegistrationPage__title}>Registration</h1>
      <InputField value={email} setValue={setEmail} placeholder={'Email'}/>
      <InputField value={password} setValue={setPassword} placeholder={'Password'}/>

      <div className={styles.RegistrationPage__btns}>
        <Button w={'49%'} linkTo={'/login'} type={'outline'}>Back to login</Button>
        <Button
          w={'49%'}
          type={'submit'}
          onClick={registrationHandler}
        >
          Submit
        </Button>
      </div>
    </div>
  </div>
}
export default RegistrationPage