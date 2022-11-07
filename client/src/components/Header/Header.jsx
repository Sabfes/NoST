import React from "react";
import styles from './Header.module.css'

const Header = ({setShowAddTaskModal}) => {
  return <div className={styles.Header}>
    <h1 className={styles.Header__title}>All Tasks</h1>
  </div>
}
export default Header