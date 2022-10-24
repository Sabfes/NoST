import React, {useState} from "react";
import InputField from "../InputField/InputField";
import styles from './AddNewTaskModal.module.css'
import Modal from "../Modal/Modal";
import moment from "moment";

const AddNewTaskModal = ({
   setShow,
  addNewTask
}) => {
  const [taskValue, setTaskValue] = useState({
    taskTitle: '',
    taskText: '',
    date: moment().format('DD.MM.YYYY')
  })


  return <Modal
    setShowModal={setShow}
  >
    <div className={styles.modalContainer}>
      <header>
        <h1 className={styles.modal__titlee}>Add new task</h1>

        <div className={styles.closeBtn}>x</div>
      </header>

      <InputField
        value={taskValue.taskTitle}
        setValue={(e) => setTaskValue({...taskValue, taskTitle: e})}
        placeholder={'Title'}
      />
      <InputField
        value={taskValue.taskText}
        setValue={(e) => setTaskValue({...taskValue, taskText: e})}
        placeholder={'Task text'}
      />

      <div className={styles.btnCont}>
        <button
          className={`${styles.btn} ${styles.default}`}
          onClick={() => setShow(false)}
        >
          Cancel
        </button>
        <button
          className={`${styles.btn} ${styles.save}`}
          onClick={() => {
            addNewTask(
              taskValue.taskTitle,
              taskValue.taskText,
              taskValue.date
            )
            setTaskValue({
              taskTitle: '',
              taskText: '',
              date: moment().format('DD.MM.YYYY')
            })
            setShow(false)
          }}
        >
          Save
        </button>
      </div>
    </div>
  </Modal>
}
export default AddNewTaskModal