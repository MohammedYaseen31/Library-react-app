import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {
  let [user,SetUser]=useState([])
  let formdata=useRef()
  let navigate = useNavigate()
  // console.log(formdata);

  //fetch users api
  useEffect(()=>{
    let fetchUserApi=async()=>{  
      let userData=await axios.get(`http://localhost:4000/users`)
      // console.log(userData);
      SetUser(userData.data)
    }
    fetchUserApi()
  },[user])
  
  //collecting all users email 
  let allUserEmail= user.map((elem)=>{
    return elem.email
   })
  //  console.log(allUserEmail);
  let handleSubmit=(e)=>{
    e.preventDefault()

    //collecting user input value form users login page
    let inputData = {
      emailVal:formdata.current[0].value,
      passwordVal:formdata.current[1].value
    }
    let {emailVal, passwordVal}=inputData
    // console.log(emailVal);

    //checking of the email value from the user input is present in the allUserEmail(json file)
    let emailBool=allUserEmail.includes(emailVal)
    // console.log(emailBool);
    let passwordBool=(passwordVal ==='user123')
    // console.log(passwordBool);
    if(emailBool && passwordBool)
    {
      navigate(`/userportal`)
    }
    else
    {
      alert(`noob`) 
    }
  }
  // console.log(user);

  return (
    <>
        <div className="userLogin">
        <form ref={formdata}>
                        <input type="email" placeholder='Enter Email Address' />
                        <input type="password" placeholder='user123' />
                        <button onClick={handleSubmit}>User Login</button>
                        </form>
        </div>
    </>
  )
}

export default UserLogin
