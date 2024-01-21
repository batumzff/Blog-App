import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import Login from "../pages/Login"
import Register from '../pages/Register'
import Navbar from '../components/NavBar'
import DashBoard from '../pages/Dashboard'
import { CssBaseline } from '@mui/material'
import Footer from '../components/Footer'
import PrivateRouter from './PrivateRouter'
import NewBlog from '../pages/NewBlog'
import About from '../pages/About'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Navbar />
      <Routes> 
        <Route path="/" element={<DashBoard />} />
        <Route path="/new-blog" element={<PrivateRouter/>}>
          <Route path="" element={<NewBlog/>} />

        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRouter