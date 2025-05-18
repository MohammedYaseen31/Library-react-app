import React, { useState } from 'react'
import '../assets/styles/landingpage.css'
import AdminLogin from './Admin/AdminLogin'
import UserLogin from './User/UserLogin'
import { Link } from 'react-router-dom'
const LandingPage = () => {

    let[bool,setBool]=useState(true)
    let handleToggle=()=>{
        setBool(!bool)
    }
  return (
    <>
        <div className="landingpage">
            <div className="container">
                <div className="btnbox">
                    <button onClick={handleToggle} 
                    className={bool? 'lft-btn' : 'rgt-btn'}>
                        { bool? 'Admin Login': 'User Login'}
                    </button>
                </div>

                <div className="heading">
                    <h2>{bool? 'Admin Login': 'User Login'}</h2>
                </div>

                <div className="formBox">
                    {   
                        bool?<AdminLogin/>:<UserLogin/>
                    }
                </div>

                <div className='forgettenPass'>
                    <Link to='/forgottenpassword'>Forgotten Password</Link>
                </div>
            </div>

        </div>
    </>
  )
}

export default LandingPage
