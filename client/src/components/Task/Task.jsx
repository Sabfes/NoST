import React from "react";
import styles from './Task.module.css'
import IconCont from "../common/IconCont";
import {RiDeleteBin5Fill} from "react-icons/ri";
import {useDispatch} from "react-redux";
import {deleteTaskById} from "../../store/actions/tasks.actions";

const Task = ({el, index}) => {
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
  >
    <div>
      <div className={`${styles.checkIcon} ${el.isActive && styles.checkIconActive}`}>
        v
      </div>

      <span>
     Author: {el.author}
    </span>
      <span>
     Title: {el.title}
    </span>
      <span>
      Content: {el.content}
    </span>
    </div>

    <div className={''}>
      <span className={styles.Task__number}>#{index}</span>

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