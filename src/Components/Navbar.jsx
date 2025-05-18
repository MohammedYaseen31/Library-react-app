import React, { useState } from 'react'
import '../assets/styles/navbar.css'
import logo from '../assets/images/booklogo3.png'
import { NavLink, useLocation } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
  let [menu,setMenu]=useState(true)
  let menuClick=()=>{
    setMenu(!menu)
    // console.log(menu);
  }
  let location=useLocation()
  // console.log(location);
  
  let bool= location.pathname.startsWith(`/adminportal`) 
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className={menu?'links' : 'sidebar'}>
          {
            bool
            ?
            <ul>
            <li><NavLink to='/adminportal/'>Homepage</NavLink></li>
            <li><NavLink to='/adminportal/books'>Books</NavLink></li>
            <li><NavLink to='/adminportal/addbooks'>Add Books</NavLink></li>
            <li><NavLink to='/adminportal/users'>Users</NavLink></li>
            <li><NavLink to='/adminportal/addusers'>Add Users</NavLink></li>
            <li><NavLink to='/'> Logout</NavLink></li>
          </ul>
          :
          <ul>
          <li><NavLink to='/userportal/'>Homepage</NavLink></li>
          <li><NavLink to='/userportal/books'>Books</NavLink></li>
          <li><NavLink to='/userportal/users'>Users</NavLink></li>
          <li><NavLink to='/userportal/cartitems'>Cart</NavLink></li>
          <li><NavLink to='/'> Logout</NavLink></li>
        </ul>
          }
        </div>
        <div className="menuicon">
            <div className="icon" onClick={menuClick}>
            {<MenuIcon />}
            </div>
        </div>

      </div>
    </>
  )
}

export default Navbar
