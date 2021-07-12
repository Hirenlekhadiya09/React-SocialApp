import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory  } from 'react-router-dom';
import Navbar from '../Layout/Navbar'

const Login = () => {

    useEffect(() => {
        if(localStorage.getItem('auth'))
        {
            history.push('home')
        }
    })
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    
    const login = async (e) => {
        e.preventDefault();
        let item= {email,password}
        let result = await axios.post("http://localhost:5000/login",item)
        localStorage.setItem("auth",JSON.stringify(result.data.token))
        localStorage.setItem("userid",JSON.stringify(result.data.userid))
        history.push('/pages/home')
    }
   
    return (
        <>
        <Navbar/>
        <div className="container">
            <div className="w-50 mx-auto shadow p-5">
            <h2 className="text-xenter mb-4">Login to our site</h2>
                <form>
                    <div className="form-group">
                        <h5>Email</h5>
                        <input type="text" 
                               className="px-4 py-2 mb-4" 
                               placeholder="Enter Email"
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <h5>Password</h5>
                        <input type="password" 
                               className="px-4 py-2 mb-4" 
                               placeholder="Enter Password"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <br></br>
                    <button onClick={(e)=>login(e)} className="btn btn-primary btn-block">Login</button>
                    <br></br>
                    <br></br>
                    <p>Don't Have an account!  <a href="/Pages/signup">Sign Up</a> </p>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login