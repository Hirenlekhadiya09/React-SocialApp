import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory,Link } from 'react-router-dom';
import Navbar from '../Layout/Navbar'
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

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

    const {register, handleSubmit, formState: { errors }} = useForm();
    
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

  const showpassword = () => {
    var pwd = document.getElementById("myPassword");
    if (pwd.type === "password") {
        pwd.type = "text";
    } else {
        pwd.type = "password";
    }
  };

    const signup = async (e) => {
        e.preventDefault();
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if(!username){
            return toast.error("UserName is required")
        }
        if(!email){
            return toast.error("Email is required")
        }
        if(!regEmail.test(email)){
            return toast.error("Invalid Email");
        }
        if(!password){
            return toast.error("Password is required")
        }
        // if(!strongRegex.test(password)){
        //     return toast.error("Password strength is too weak");
        // }
      
        user.image = file;
        const formData = new FormData();
        formData.append("username", user.username);
        formData.append("email", user.email);
        formData.append("password", user.password);
        formData.append("image", file);

        await axios.post(`${process.env.REACT_APP_NDOE_API}/signup`, formData).then((data) => {
             // localStorage.setItem("id",)
            // console.log(result._id)
            //localStorage.setItem("auth",JSON.stringify(data.data.token))
            history.push({
            pathname: '/pages/login',
            })
            toast.success("You have successfully Signup!")
        }).catch((error) => {
            toast.error("Failed!")
        })
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="w-50 mx-auto shadow p-3">
                    <h2 className="text-xenter mb-4">Signup to our site</h2>
                    <form onSubmit={(e) => handleSubmit(signup(e))}>
                        <div className="form-group">
                            {/* <label className="font-bold">UserName</label> */}
                            <h5>UserName</h5>
                            <input type="text"
                                className="px-4 py-2 mb-4"
                                placeholder="Enter Username"
                                {...register('username', { required: true })}
                                name="username"
                                value={username}
                                onChange={e => onInputChange(e)}
                                
                            />
                        </div>
                        <div className="form-group">
                            {/* <label className="font-bold">Email </label> */}
                            <h5>Email</h5>
                            <input type="email"
                                className="px-4 py-2 mb-4"
                                placeholder="Enter EmailId"
                                {...register('email', { required: true })}
                                name="email"
                                value={email}
                                onChange={e => onInputChange(e)}
                                
                            />
                        </div>
                        <div className="form-group">
                            {/* <label className="font-bold">Password</label> */}
                            <h5>Password</h5>
                            <input type="password"
                                 id="myPassword"
                                className="px-4 py-2 mb-4"
                                placeholder="Enter Password"
                                {...register('password', { required: true })}
                                name="password"
                                value={password}
                                onChange={e => onInputChange(e)}
                            />
                             <br />
                            <p>
                                <label>
                                <input type="checkbox" onClick={showpassword} />&nbsp;
                                <span>show password</span>
                                </label>
                            </p>
                        </div>
                        <div className="form-group">
                            {/* <label className="font-bold">Upload Profile</label> */}
                            <h5>Upload Profile</h5>
                            <input type="file" className="px-4 py-2 mb-4"
                                name="image"
                                value={image}
                                {...register('image', { required: true })}
                                onChange={e => onChange(e)}
                            />
                        </div>
                        <br></br>
                        {/* <button onClick={(e) => signup(e)} className="btn btn-primary btn-block">Signup</button> */}
                        <input type="submit" className="btn btn-primary btn-block" value="Signup"/>
                        <br></br>
                        <br></br>
                        <p>Already have an account?  <Link to="/Pages/login">Login</Link> </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup


