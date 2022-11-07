import React from "react";
import styles from './Sidebar.module.css'

import { ImExit } from "react-icons/im"
import IconCont from "../common/IconCont";
import {useDispatch} from "react-redux";
import {setIsAuth} from "../../store/slices/auth.slice";

const Sidebar = () => {
  const dispatch = useDispatch()

  return <div className={styles.Sidebar}>
    <div className={styles.Sidebar__logo}>
      TL
    </div>

    <div className={styles.Sidebar__nav}>

    </div>

    <div>
      <IconCont
        onClick={() => {
          dispatch(setIsAuth(false))
        }}
        w={25}
        h={25}
      >
        <ImExit size={'100%'}/>
      </IconCont>
    </div>
  </div>
}
export default Sidebar