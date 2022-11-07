import React, {useState} from "react";
import styles from './Task.module.css'
import moment from "moment";
import axios from "axios";

const Task = ({el}) => {
  //TODO
  const markAsReadToggle = (id) => {
    axios.put(`http://localhost:8000/api/tasks/${id}`)
    .then(res => {
      console.log(res)
    })
  }


  return <div
    className={styles.Task}
    onClick={() => markAsReadToggle(el._id)}
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
    </div>
  </div>
}
export default Task;