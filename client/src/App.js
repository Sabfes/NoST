import styles from './App.module.css';
import {useEffect, useState} from "react";
import Header from "./conponents/Header/Header";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([])

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
  })

  return (
    <div className={styles.App}>
      <Header/>

      <div className={styles.Cont}>
        {
          posts.length > 0 && <div>
            {
              posts.map(el => {
                return <div className={styles.Post}>
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
              })
            }
          </div>
        }
      </div>
    </div>
  );
}

export default App;
