import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import AdminPortal from './Components/Admin/AdminPortal'
import ForgottenPassword from './Components/ForgottenPassword'
import UserPortal from './Components/User/UserPortal'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<LandingPage/>} path='/'/>
          <Route element={<AdminPortal/>} path='/adminportal/*'/>
          <Route element={<ForgottenPassword/>} path='/forgottenpassword'/>
          <Route element={<UserPortal/>} path='/userportal/*'/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
