import React from "react";
import styles from "./Button.module.css"
import classNames from "classnames";
import {useNavigate} from "react-router";

const Button = ({children, type, w, linkTo}) => {
  const navigate = useNavigate()

  return <button
    onClick={() => {
      if (linkTo) navigate(linkTo)
    }}
    style={{
      width: w ? w : '100%',
    }}
    className={classNames(`${styles.Button}`, {
      [`${styles.Button_type_outline}`]: type === 'outline',
      [`${styles.Button_type_submit}`]: type === 'submit'
    })}
  >
    <span
      className={styles.Button__text}
    >
      {children}
    </span>
  </button>
}
export default Button