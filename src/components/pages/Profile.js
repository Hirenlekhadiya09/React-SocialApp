import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Navbar from "../Layout/Navbar";
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify';
import jwt_decode from "jwt-decode";

const Profile = () => {
    var id = JSON.parse(localStorage.getItem('userid'));
    let history = useHistory()
    const [profile, setProfile] = useState({
        username: "",
        email: "",
        image: ""
    })

    const { username, email, image } = profile;

    const onInputChange = e => {
        setProfile({ ...profile, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        loadUser()
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/updateprofile/${id}`, profile).then((data) => {
            history.push('/pages/profile')
            toast.success("Profile updated successfully!")
        }).catch((error) => {
            toast.error("Failed!")
        })
    }

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:5000/getprofileid/${id}`)
        setProfile(result.data)
    }

    // ----------------------------------------------------------------------------------
    //for display mypost 
    const [post, setPost] = useState([]);

    var token = localStorage.getItem('auth')
    var decoded = jwt_decode(token);

    useEffect(() => {
        loadPosts();
    }, [post]);

    const loadPosts = async () => {
        const result = await axios.get("http://localhost:5000/mypost", { params: { id: decoded.id } })
        setPost(result.data.data)
    }

    const postHandle = async () => {
        const result = await axios.get("http://localhost:5000/mypost", { params: { id: decoded.id } })
        setPost(result.data.data)
    }
    const notificationHandle = async () => {
        alert("I am Notification")
    }

    // ----------------------------------------------------------------------------------

    return (
        <>
            <Navbar />
            <div className="container shadow">

                <div className="w-75 mx-auto edit-profile">
                    <div>
                        <img alt="..." src={`http://localhost:5000/${image}`} />
                        <div className="profile">
                            <div>
                                <h6>Followers</h6>
                                <h6>0</h6>
                            </div>
                            <div>
                                <h6>Posts</h6>
                                <h6>{post.length}</h6>
                            </div>
                        </div>

                        {/* <input
                                type="file"
                                // onChange={(e) => setUpdatePhoto(e.target.files[0])}
                            /> */}
                    </div>
                    <div className="row">

                        <form onSubmit={e => onSubmit(e)}>
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
                            <br />
                            <button className="btn btn-primary btn-block">Update Profile</button>
                        </form>
                    </div>

                </div>
                <hr color="gray"></hr>
                <div class="myprofile_buttonDiv__1bLyk">
                    <button type="button" name="t1" class=" btn btn-outline-primary btnprofile" onClick={(e) => postHandle()}>
                        My post
                    </button>&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" name="t2" class=" btn btn-outline-success btnprofile" onClick={(e) => notificationHandle()}>
                        Notification
                    </button>
                </div>


                {/*  ----------------------------------------------------------------------------------
                 for display mypost */}
                <div className="row">
                    {post &&
                        post.map((post, index) => (
                            <div className="mypost col-lg-3">
                                <img className="post_image" alt="..." src={`http://localhost:5000/${post.image}`} />
                            </div>
                        ))
                    }
                </div>
                {/*  ----------------------------------------------------------------------------------
                 for display mypost  */}
            </div>
        </>
    )
}

export default Profile
