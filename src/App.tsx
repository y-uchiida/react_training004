import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Home } from './components/Home'
import { CreatePost } from './components/CreatePost'
import { Login } from './components/Login'
import { Logout } from './components/Logout'
import { Navbar } from './components/Navbar'

function App() {

  /** ログイン状態の真偽値 */
  const [isAuth, setItAuth] = useState(false);

  return (
    <>
      <Router> {/* Router: ルーティング設定を記述するコンポーネント */}
        <Navbar isAuth={isAuth} />
        <Routes> {/* Routes: このコンポーネントの中に、パスとコンポーネントの一覧を書いていく */}
          {/* Route: path にURL(パス)を、element にそのURLへアクセスされた際に表示するコンポーネント名を記述する */}
          <Route path="/" element={<Home />} ></Route>
          <Route path="/createpost" element={<CreatePost />} ></Route>
          <Route path="/login" element={<Login setIsAuth={setItAuth} />} ></Route>
          <Route path="/logout" element={<Logout setIsAuth={setItAuth} />} ></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
