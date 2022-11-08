import React, {useState} from "react";
import InputField from "../InputField/InputField";
import styles from './AddNewTaskModal.module.css'
import IconCont from "../common/IconCont";
import {AiOutlineCloudUpload} from "react-icons/ai";
import Button from "../Button/Button";
import {addNewTask} from "../../store/actions/tasks.actions";
import {useDispatch} from "react-redux";

const AddNewTaskModal = () => {
  const dispatch = useDispatch()
  const [taskValue, setTaskValue] = useState({
    taskTitle: '',
    taskText: '',
    author: ''
  })

  const addNewTaskHandler = (taskTitle, taskText, author) => {
    dispatch(addNewTask({
      title: taskTitle,
      content: taskText,
      author: author,
      isActive: false
    }))
  }

  const clearInfo = () => {
    setTaskValue({
      taskTitle: '',
      taskText: '',
      author: ''
    })
  }

  return  <>
    <h2 className={styles.TodoInfoContainer__title}>Add new task</h2>

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
    <InputField
      value={taskValue.author}
      setValue={(e) => setTaskValue({...taskValue, author: e})}
      placeholder={'Task author'}
    />

    <div className={styles.TodoInfoContainer__dd}>
      <input type="file" id={'inputFile'} style={{width: '100%', height: '100%', display: 'none'}}/>
      <label htmlFor={'inputFile'} style={{marginLeft: '10px', height: '100%', width: '100%', position: 'absolute'}}/>
      <IconCont>
        <AiOutlineCloudUpload size={'100%'}/>
      </IconCont>
    </div>


    <div className={styles.submit_btn}>
      <Button
        w={'49%'}
        type={'outline'}
        onClick={() => clearInfo()}
      >
        Clear
      </Button>
      <Button
        w={'49%'}
        type={'submit'}
        onClick={() => {
          addNewTaskHandler(
            taskValue.taskTitle,
            taskValue.taskText,
            taskValue.author
          )
          clearInfo()
        }}
      >
        Add
      </Button>
    </div>
  </>
}
export default AddNewTaskModal