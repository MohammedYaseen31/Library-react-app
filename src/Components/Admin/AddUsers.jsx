import React, { useRef } from 'react'
import '../../assets/styles/addusers.css'
import { useNavigate } from 'react-router-dom'
const AddUsers = () => {
    let formData=useRef()
    let navigate= useNavigate()

    let handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(formData.current[0].value);
        
        let newUser={
            firstname:formData.current[0].value,
            lastname:formData.current[1].value,
            contact:formData.current[2].value,
            email:formData.current[3].value,
            password:formData.current[4].value,
            dob:formData.current[5].value,
            place:formData.current[6].value
        }
        fetch(`http://localhost:4000/users` , {
            method:'POST',
            headers:{'Content-Type' : 'application/json'},
            body : JSON.stringify(newUser)
        })
        navigate(`/adminportal/users`)
    }
  return (
    <>
        <div className="addusers">
            <div className="header">
                <h1>Add users</h1>
            </div>

            <div className="container">
                <div className="formbox">
                    <form ref={formData}>
                        <input type="text" placeholder='Enter First Name'/>
                        <input type="text" placeholder='Enter Last Name'/>
                        <input type="tel" pattern='[6-9]{1}[0-9]{9}' placeholder='Enter Contact NUmber'/>
                        <input type="email" placeholder='Enter Email'/>
                        <input type="password" placeholder='Enter Password' disabled/>
                        <input type="date"/>
                        <input type="text" placeholder='Enter place'/>

                        <button onClick={handleSubmit}>
                            Add User
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddUsers
