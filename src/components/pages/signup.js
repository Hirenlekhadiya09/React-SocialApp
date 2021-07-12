import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Navbar from '../Layout/Navbar'

const Signup = () => {

    const history = useHistory();
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        image: "",
    })

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            history.push('home')
        }
    }, [])

    const [file, setFile] = useState("");

    function onChange(event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
            console.log("event", event)
            setFile(file)
        };
        reader.readAsText(file);
    }
    const { username, email, password, image } = user;

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const signup = async (e) => {
        e.preventDefault();
        user.image = file;
        const formData = new FormData();
        formData.append("username", user.username);
        formData.append("email", user.email);
        formData.append("password", user.password);
        formData.append("image", file);

        let result = await axios.post("http://localhost:5000/signup", formData)
        // localStorage.setItem("id",)
        // console.log(result._id)
        localStorage.setItem("auth",JSON.stringify(result.data.token))
        history.push({
            pathname: '/pages/home',
            state: { detail: "text" }
        })
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="w-50 mx-auto shadow p-3">
                    <h2 className="text-xenter mb-4">Signup to our site</h2>
                    <form>
                        <div className="form-group">
                            {/* <label className="font-bold">UserName</label> */}
                            <h5>UserName</h5>
                            <input type="text"
                                className="px-4 py-2 mb-4"
                                placeholder="Enter Username"
                                name="username"
                                value={username}
                                onChange={e => onInputChange(e)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            {/* <label className="font-bold">Email </label> */}
                            <h5>Email</h5>
                            <input type="email"
                                className="px-4 py-2 mb-4"
                                placeholder="Enter EmailId"
                                name="email"
                                value={email}
                                onChange={e => onInputChange(e)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            {/* <label className="font-bold">Password</label> */}
                            <h5>Password</h5>
                            <input type="password"
                                className="px-4 py-2 mb-4"
                                placeholder="Enter Password"
                                name="password"
                                value={password}
                                onChange={e => onInputChange(e)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            {/* <label className="font-bold">Upload Profile</label> */}
                            <h5>Upload Profile</h5>
                            <input type="file" className="px-4 py-2 mb-4"
                                name="image"
                                value={image}
                                onChange={e => onChange(e)}
                            />
                        </div>
                        <br></br>
                        <button onClick={(e) => signup(e)} className="btn btn-primary btn-block">Signup</button>
                        <br></br>
                        <br></br>
                        <p>Already have an account?  <a href="/Pages/login">Sign Up</a> </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup


