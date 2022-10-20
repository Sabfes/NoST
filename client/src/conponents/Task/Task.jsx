import React, {useState} from "react";
import styles from './Task.module.css'
import moment from "moment";

const Task = ({el}) => {
  const [isActive, setIsActive] = useState(false)

  return <div
    className={styles.Task}
    onClick={() => setIsActive(true)}
  >
    <div>
      <div className={`${styles.checkIcon} ${isActive && styles.checkIconActive}`}>
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