import React, {useEffect, useState} from "react";
import styles from "./TodoPage.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Task from "../../components/Task/Task";
import AddNewTaskModal from "../../components/AddNewTaskModal/AddNewTaskModal";
import {useDispatch, useSelector} from "react-redux";
import {addNewTask, getAllTasks} from "../../store/actions/tasks.actions";

const TodoPage = () => {
  const tasks = useSelector(state => state.tasks.tasksList)
  const dispatch = useDispatch()
  const [showAddNewTaskModal, setShowAddNewTaskModal] = useState(false)

  useEffect(() => {
    dispatch(getAllTasks())
  }, [])


  const addNewTaskHandler = (taskTitle, taskText, date) => {
    dispatch(addNewTask({
      title: taskTitle,
      content: taskText,
      isActive: false,
      author: 'Denis'
    }))
  }

  return <div className={styles.TodoPage}>
    <Sidebar/>

    <div className={styles.mainCont}>
      <Header
        setShowAddTaskModal={setShowAddNewTaskModal}
      />

      <div className={styles.Cont}>
        <p className={styles.Cont__title}>
          v Today {tasks.length && `(${tasks.length})`}
        </p>

        {
          tasks.length > 0 && <div>
            {
              tasks.map((el, i) => {
                return <Task
                  el={el}
                  key={i}
                />
              })
            }
          </div>
        }
      </div>
    </div>

    <div className={styles.contInfo}>

    </div>


    {
      showAddNewTaskModal && <AddNewTaskModal
        addNewTask={addNewTaskHandler}
        setShow={setShowAddNewTaskModal}
      />
    }
  </div>
}
export default TodoPage