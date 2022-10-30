import styles from './App.module.css';
import {Route, Routes} from "react-router-dom";
import TodoPage from "./pages/Todo/TodoPage";
import {useState} from "react";
import LoginPage from "./pages/Login/LoginPage";
import RegistrationPage from "./pages/Registration/RegistrationPage";

function App() {
  const [isAuth, setIsAuth] = useState(true)

  return <div className={styles.App}>
    {
      isAuth
        ?<Routes>
          <Route path={'/todo'} element={<TodoPage/>}/>
          <Route path={'*'} element={<TodoPage/>}/>
        </Routes>
        :<Routes>
          <Route path={'/login'} element={<LoginPage/>}/>
          <Route path={'/registration'} element={<RegistrationPage/>} />
          <Route path={'*'} element={<LoginPage/>}/>
        </Routes>
    }
  </div>
}

export default App;
