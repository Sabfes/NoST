import React, {useEffect} from "react";
import styles from "./TodoPage.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Task from "../../components/Task/Task";
import AddNewTaskModal from "../../components/AddNewTaskModal/AddNewTaskModal";
import {useDispatch, useSelector} from "react-redux";
import {getAllTasks} from "../../store/actions/tasks.actions";

const TodoPage = () => {
  const tasks = useSelector(state => state.tasks.tasksList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllTasks())
  }, [dispatch])

  return <div className={styles.TodoPage}>
    <Sidebar/>

    <div className={styles.mainCont}>
      <Header />

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
                  index={tasks.length - i}
                  key={i}
                />
              })
            }
          </div>
        }
      </div>
    </div>

    <div className={styles.TodoInfoContainer}>
      <AddNewTaskModal />
    </div>
  </div>
}
export default TodoPage