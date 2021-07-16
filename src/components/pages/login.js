import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useHistory  } from 'react-router-dom';
import Navbar from '../Layout/Navbar'
import { useForm } from 'react-hook-form';

const Login = () => {

    const {register, handleSubmit, formState: { errors }} = useForm();
     
    useEffect(() => {
        if(localStorage.getItem('auth'))
        {
            history.push('home')
        }
    })
    const history = useHistory();
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 

    const showPassword = () => {
        var pass = document.getElementById("myPassword");
        if(pass.type === "password"){
            pass.type = "text"
        }else{
            pass.type = "password"
        }
    }
   
    const login = async (e) => {
        e.preventDefault();
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let item= {email,password}
        if(!email)
        {
            return toast.error("Email is required");
        }
        if(!regEmail.test(email)){
            return toast.error("Invalid Email");
        }
        if(!password)
        {
            return toast.error("Password is required");
        }
            await axios.post("http://localhost:5000/login",item).then((data) => {
            localStorage.setItem("auth",JSON.stringify(data.data.token))
            localStorage.setItem("userid",JSON.stringify(data.data.userid))
            history.push('/pages/home')
            toast.success("You have successfully login!")
        }).catch((error) => {
            toast.error("Failed!")
        })
    }

    return (
        <>
        <Navbar/>
        <div className="container">
            <div className="w-50 mx-auto shadow p-5">
            <h2 className="text-xenter mb-4">Login to our site</h2>
            <form onSubmit={(e)=>handleSubmit(login(e))}>
                    <div className="form-group">
                        <h5>Email</h5>
                        <input type="email" 
                               className="px-4 py-2 mb-4" 
                               placeholder="Enter Email"
                               {...register('email', { required: true })}
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p>Email is required.</p>}
                    </div>
                    <div className="form-group">
                        <h5>Password</h5>
                        <input type="password" 
                                id="myPassword"
                               className="px-4 py-2 mb-4" 
                               placeholder="Enter Password"
                               {...register('password', { required: true })}
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                        />
                        <br/>
                        <p>
                            <label>
                                <input type="checkbox" onClick={showPassword}/>&nbsp;
                                <span>Show password</span>
                            </label>
                        </p>
                        {errors.password && <p>Password is required.</p>}
                    </div>
                    <br></br>
                    {/* <button type="submit" className="btn btn-primary btn-block" onClick={(e)=>login(e)} >Log in</button> */}
                    <input type="submit" className="btn btn-primary btn-block" value="Log in"  />
                    <br></br>
                    <br></br>
                    <p>Don't have an account!  <a href="/Pages/signup">Sign Up</a> </p>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login