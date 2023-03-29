import { useState, useEffect } from 'react'
import './App.css'
import './Blog'
import Navbar from './components/Navbar'
import IndexBody from './components/IndexBody'
import Blog from './Blog'
import Login from './Login'
import Register from './Register'
import {Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import PostPage from './PostPage'
import EditPost from './components/EditPost'
import {UserContextProvider} from './UserContext'
import hljs from 'highlight.js'

function App() {
  const [count, setCount] = useState(0)
   useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <UserContextProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<IndexBody/>}  /> 
          <Route path={'/blog'} element={<Blog/>}  /> 
          <Route path={'/login'} element={<Login/>}  /> 
          <Route path={'/register'} element={<Register/>}  /> 
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
