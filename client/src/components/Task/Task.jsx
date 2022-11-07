import React, {useState} from "react";
import styles from './Task.module.css'
import moment from "moment";
import axios from "axios";
import IconCont from "../common/IconCont";
import {RiDeleteBin5Fill} from "react-icons/ri";
import {useDispatch} from "react-redux";
import {deleteTaskById} from "../../store/actions/tasks.actions";

const Task = ({el}) => {
  const dispatch = useDispatch()
  //TODO
  // const markAsReadToggle = (id) => {
  //   axios.put(`http://localhost:8000/api/tasks/${id}`)
  //   .then(res => {
  //     console.log(res)
  //   })
  // }

  const deleteTask = (id) => {
    dispatch(deleteTaskById(id))
  }

  return <div
    className={styles.Task}
    // onClick={() => markAsReadToggle(el._id)}
  >
    <div>
      <div className={`${styles.checkIcon} ${el.isActive && styles.checkIconActive}`}>
        v
      </div>

      <span>
     Task author: {el.author}
    </span>
      <span>
     Task Title: {el.title}
    </span>
      <span>
      Task main content: {el.content}
    </span>
    </div>

    <div className={''}>
      <span className={styles.Task__number}>#243</span>
      <span className={styles.Task__date}>{moment().format('DD.MM.YYYY')}</span>

      <IconCont
        w={24}
        onClick={() => deleteTask(el._id)}
      >
        <RiDeleteBin5Fill size={'100%'}/>
      </IconCont>
    </div>
  </div>
}
export default Task;