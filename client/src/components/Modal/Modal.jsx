import React from "react";
import styles from "./Modal.module.css"

const Modal = ({setShowModal, children}) => {
  return <div
    className={styles.cont}
    onClick={() => {
      setShowModal(false)
    }}
  >
    <div className={styles.wrap}/>

    <div
      className={styles.modal}
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      {children}
    </div>
  </div>
}
export default Modal