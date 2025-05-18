import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../../assets/styles/viewuser.css'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import EventIcon from '@mui/icons-material/Event';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PlaceIcon from '@mui/icons-material/Place';

const ViewUser = () => {
    let param = useParams()
    // console.log(param);
    let userid = param.id    
    let [singleUser, setSingleUser] = useState({})
    let fetchUser = async () => {
        let resApi = await fetch(`http://localhost:4000/users/${userid}`)
        let user = await resApi.json()
        setSingleUser(user)
    }
    fetchUser()
    // console.log(singleUser);

    let { id, firstname, lastname, contact, email, password, dob, place} = singleUser
    // console.log(dob);
    // let year = dob.slice(0,4)
    // let  curryear = new dateObj.getFullYear()
    // let age = curryear - year
    
    return (
        <>
            <div className="viewuser">
                <div className="header">
                    <h1>{firstname} {lastname}</h1>
                </div>

                <div className="container">
                    <div className="card">
                        <div className="contact">
                            <div className="icon">
                                {<PhoneIcon />}
                            </div>
                            <div className="data">
                                {contact}
                            </div>
                        </div>
                        <div className="email">
                            <div className="icon">
                                {<EmailIcon />}
                            </div>
                            <div className="data">
                                {email}
                            </div>
                        </div>
                        <div className="password">
                            <div className="icon">
                                {<PasswordIcon />}
                            </div>
                            <div className="data">
                                {password}
                            </div>
                        </div>
                        <div className="dob">
                            <div className="icon">
                                {<DateRangeIcon />}
                            </div>
                            <div className="data">
                                {dob}
                            </div>
                        </div>
                        {/* <div className="age">
                            <div className="icon">
                                {<EventIcon />}
                            </div>
                            <div className="data">  
                               {age}
                            </div>
                        </div> */}
                        <div className="place">
                            <div className="icon">
                                {<PlaceIcon />}
                            </div>
                            <div className="data">
                                {place}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewUser
