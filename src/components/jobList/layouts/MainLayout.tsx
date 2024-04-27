import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import NavBar from '../NavBar'

const MainLayout = () => {
  return (
    <>
    <NavBar />
    <Outlet />
    <ToastContainer />
    </>
  )
}

export default MainLayout
