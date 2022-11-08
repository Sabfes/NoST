import React from "react";
import styles from './IconCont.module.css'

const IconCont = ({ w = 30, h = 30, mt, mb, children, onClick }) => {
  return <div
    onClick={onClick}
    style={{
      marginTop: mt ? mt + 'px' : 0,
      marginBottom: mb ? mb + 'px' : 0,
      width: w ? w + 'px' : '30px',
      height: h ? h + 'px' : '30px'
    }}
    className={styles.IconCont}
  >
    {children}
  </div>
}
export default IconCont