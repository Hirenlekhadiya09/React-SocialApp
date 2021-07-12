import axios from 'axios';
import React, { useState , useEffect} from 'react'
import Navbar from "../Layout/Navbar";
import {useHistory,useParams} from 'react-router-dom'

const Profile = () => {

    let history = useHistory()
    const {id} = useParams()
    const [profile,setProfile] = useState({
        username:"",
        email:""
    })

    const {username,email} = profile;

    const onInputChange = e => {
        setProfile({...profile,[e.target.name]: e.target.value})
    }

    useEffect(() => {
        loadUser()
    }, [])
 

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:5000/getprofileid/${id}`)
        //const result = await axios.get(`http://localhost:5000/getprofileid/60e67d8c4990bf5f5af28201`)
        console.log("--Result",result)
        history.push('/pages/profile')
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <div className="row">
                        <form>
                            <input type="text"
                                className="px-4 py-2 mb-4"
                                placeholder="Enter Username"
                                name="username"
                                value={username}
                                onChange={e => onInputChange(e)}
                            />
                            <br />
                            <input type="text"
                                className="px-4 py-2 mb-4"
                                placeholder="Enter Email"
                                name="email"
                                value={email}
                                onChange={e => onInputChange(e)}
                            />
                            <br/>
                              <button className="btn btn-primary btn-block">Update Profile</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
