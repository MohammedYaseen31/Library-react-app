import React from 'react'
import Navbar from '../Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Admin/HomePage'
import Books from '../Books'
import ReadBooks from '../ReadBooks'
import Users from '../Users'
import ViewUser from '../Admin/ViewUser'
import CartItems from './CartItems'
const UserPortal = () => {
  return (
    <>
      <Navbar/>
      <Routes>
              <Route element={<HomePage/>} path='/'/>
              <Route element={<Books/>} path='/books'/>
              <Route element={<ReadBooks/>} path='/readbooks/:id'/>
              <Route element={<Users/>} path='/users'/>
              <Route element={<ViewUser/>} path='/viewuser/:id'/>
              <Route element={<CartItems/>} path='/cartitems'/>
             </Routes>
    </>
  )
}

export default UserPortal
