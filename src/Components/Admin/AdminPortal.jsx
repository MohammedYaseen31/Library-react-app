import React from 'react'
import Navbar from '../Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Books from '../Books'
import ReadBooks from '../ReadBooks'
import AddBooks from './AddBooks'
import Users from '../Users'
import AddUsers from './AddUsers'
import ViewUser from './ViewUser'


const AdminPortal = () => {
  return (
    <>
        <Navbar/>
       <Routes>
        <Route element={<HomePage/>} path='/'/>
        <Route element={<Books/>} path='/books'/>
        <Route element={<ReadBooks/>} path='/readbooks/:id'/>
        <Route element={<AddBooks/>} path='/addbooks'/>
        <Route element={<Users/>} path='/users'/>
        <Route element={<AddUsers/>} path='/addusers'/>
        <Route element={<ViewUser/>} path='/viewuser/:id'/>
       </Routes>
    </>
  )
}

export default AdminPortal
