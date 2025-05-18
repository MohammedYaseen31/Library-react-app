import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../assets/styles/users.css'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import { useLocation,useNavigate } from 'react-router-dom';
const Users = () => {
    let[users,Setusers]=useState([])
    useEffect(()=>{
        let fetchApi=async()=>{
            let usersApiData= await axios.get(`http://localhost:4000/users`)
            Setusers(usersApiData.data)
         }
         fetchApi()
    },[users])
    // console.log(users);
    let viewNavigate = useNavigate()
    let handleview=(id)=>{
        viewNavigate(`/adminportal/viewuser/${id}`)
    }

    let deleteUser=(id,lastname)=>
    {
        let deleteBool=window.confirm(`do you want to delete ${lastname} details?`)
        if(deleteBool)
        {
            fetch(`http://localhost:4000/users/${id}`, {method : 'DELETE'})
            alert(`${lastname} details are deleted`)
        }
        else{
            alert(`${lastname} details are not deleted`)
        }
    }
    let location=useLocation()
    let bool= location.pathname.startsWith(`/adminportal`)
    
  return (
    <>
        <div className="users">
            <div className="header">
                <h1>User Details</h1>
            </div>
            <div className="container">
                {
                    bool
                    ?
                    <table>
                    <thead>
                        <tr>
                            <th>Sl no</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Date of Birth</th>
                            <th>Age</th>
                            <th>Place</th>
                            <th>View</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((elem,index)=>{
                                let {id,firstname,lastname,contact,email,password,dob,place} =elem
                                let dateObj= new Date()
                                let age = dateObj.getFullYear() - dob.slice(0,4)
                                return(
                                    <tr>
                                        <th>{index+1}</th>
                                        <td>{firstname}</td>
                                        <td>{lastname}</td>
                                        <td>{contact}</td>
                                        <td>{email}</td>
                                        <td>user123</td>
                                        <td>{dob}</td>
                                        <td>{age}</td>
                                        <td>{place}</td>
                                        <td>
                                            <button className='view' onClick={()=>handleview(id,age)}>{<RemoveRedEyeIcon/>}</button>
                                        </td>
                                        <td>
                                            <button className='delete' onClick={()=>deleteUser(id,lastname)}>{<DeleteIcon/>}</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                :
                <table>
                    <thead>
                        <tr>
                            <th>Sl no</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Contact</th>
                            <th>Age</th>
                            <th>Place</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((elem,index)=>{
                                let {id,firstname,lastname,contact,email,password,dob,place} =elem
                                let dateObj= new Date()
                                let age = dateObj.getFullYear() - dob.slice(0,4)
                                return(
                                    <tr>
                                        <th>{index+1}</th>
                                        <td>{firstname}</td>
                                        <td>{lastname}</td>
                                        <td>{contact}</td>
                                        <td>{age}</td>
                                        <td>{place}</td>
                                        
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                }
            </div>

        </div>
    </>
  )
}

export default Users
