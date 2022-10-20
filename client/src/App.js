import styles from './App.module.css';
import {useEffect, useState} from "react";
import Header from "./conponents/Header/Header";
import axios from "axios";
import Sidebar from "./conponents/Sidebar/Sidebar";
import Task from "./conponents/Task/Task";

function App() {
  const [posts, setPosts] = useState([])
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    axios.get(`http://localhost:8000/api/posts`)
    .then(res => {
      if (res.status === 200) {
        setPosts(res.data)
      }
    })
    .catch(e => {
      console.log(e)
    })
  }, [])

  const addNewPost = () => {
    axios.post('http://localhost:8000/api/posts', {
      content,
      title,
      author: 'Denis'
    }).then(res => {
      console.log(res)
      if (res.status === 200) {
        setPosts([...posts, res.data])
        setTitle('')
        setContent('')
      }
    }).catch(e => {
      console.log(e)
    })
  }

  return (
    <div className={styles.App}>
      <Sidebar/>

      <div className={styles.mainCont}>
        <Header/>

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
    </div>
  );
}

export default App;
