import styles from './App.module.css';
import {Route, Routes} from "react-router-dom";
import TodoPage from "./pages/Todo/TodoPage";
import LoginPage from "./pages/Login/LoginPage";
import RegistrationPage from "./pages/Registration/RegistrationPage";
import {useSelector} from "react-redux";

function App() {
  const isAuth = useSelector(state => state.user.isAuth)

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
