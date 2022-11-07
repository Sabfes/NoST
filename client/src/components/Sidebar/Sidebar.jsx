import React from "react";
import styles from './Sidebar.module.css'

import { ImExit } from "react-icons/im"
import IconCont from "../common/IconCont";

const Sidebar = () => {
  return <div className={styles.Sidebar}>
    <div className={styles.Sidebar__logo}>
      TL
    </div>

    <div className={styles.Sidebar__nav}>

    </div>

    <div>
      <IconCont w={25} h={25}>
        <ImExit size={'100%'}/>
      </IconCont>
    </div>
  </div>
}
export default Sidebar