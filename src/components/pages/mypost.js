import React, { useEffect, useState } from 'react'
import Navbar from "../Layout/Navbar";
import axios from 'axios';
import jwt_decode from "jwt-decode";

const Mypost = () => {

    const [post, setPost] = useState([]);
    
    var token = localStorage.getItem('auth')
    var decoded = jwt_decode(token);
    console.log(decoded.id);

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = async () => {    
        const result = await axios.get("https://socialappbackendhiren.herokuapp.com/mypost",{ params: { id: decoded.id } })   
        setPost(result.data.data)
    }

    return (
        <>
            <Navbar />
            <div className="container">
              <div className="row">
            {post &&
                post.map((post, index) => (
                            <div className="mypost col-lg-3">
                                <img  className="post_image" alt="..." src={`https://socialappbackendhiren.herokuapp.com/${post.image}`}/>
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text">{post.body}</p>
                                </div>
                            </div>  
                ))
            }
              </div>
            </div>
        </>
    )
}

export default Mypost