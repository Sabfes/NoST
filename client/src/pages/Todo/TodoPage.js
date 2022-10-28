import React, {useEffect, useState} from "react";
import styles from "./TodoPage.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Task from "../../components/Task/Task";
import AddNewTaskModal from "../../components/AddNewTaskModal/AddNewTaskModal";
import axios from "axios";

const TodoPage = () => {
  const [posts, setPosts] = useState([])
  const [showAddNewTaskModal, setShowAddNewTaskModal] = useState(false)

  useEffect(() => {
    axios.get(`http://localhost:8000/api/tasks`)
    .then(res => {
      if (res.status === 200) {
        setPosts(res.data)
      }
    })
    .catch(e => {
      console.log(e)
    })
  }, [])

  const addNewTask = (taskTitle, taskText, date) => {
    axios.post('http://localhost:8000/api/tasks', {
      taskText,
      taskTitle,
      date
    }).then(res => {
      if (res.status === 200) {
        setPosts([...posts, res.data])
      }
    }).catch(e => {
      console.log(e)
    }).finally(() => {
      return true
    })
  }

  return <div className={styles.TodoPage}>
    <Sidebar/>

    <div className={styles.mainCont}>
      <Header
        setShowAddTaskModal={setShowAddNewTaskModal}
      />

      <div className={styles.Cont}>
        <p className={styles.Cont__title}>
          v Today {posts.length && `(${posts.length})`}
        </p>

        {
          posts.length > 0 && <div>
            {
              posts.map(el => {
                return <Task
                  el={el}
                  key={el._id}
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
        addNewTask={addNewTask}
        setShow={setShowAddNewTaskModal}
      />
    }
  </div>
}
export default TodoPage