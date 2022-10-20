import React from "react";
import styles from './Header.module.css'

const Header = () => {
  return <div className={styles.Header}>
    <h1 className={styles.Header__title}>All Tasks</h1>

    <div className={styles.addBtn}><span>
      +
    </span></div>
  </div>
}
export default Header