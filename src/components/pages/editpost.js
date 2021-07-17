import React, {  useState } from 'react'
import axios from 'axios';
import { useHistory  } from 'react-router-dom';
import Navbar from '../Layout/Navbar'

const Editpost = () => {
   
    const history = useHistory();
    const [post, setPost] = useState({
        title:"",
        body:"",
        image:"",
    })
    
    const [file,setFile] = useState("");

    function onChange(event) {
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function(event) {
            console.log("event",event)
            setFile(file)
        };
        reader.readAsText(file);
    }

    const {title,body,image} = post;

    const onInputChange  = e => {
        setPost({...post,[e.target.name]: e.target.value})
    }

    const addpost = async (e) => {
        e.preventDefault();
        post.image = file;
        const formData = new FormData();
        formData.append("title",post.title);
        formData.append("body",post.body);
        formData.append("image",file);
       
        let result =  await axios.post(`${process.env.REACT_APP_NDOE_API}/addpost`,formData) 
        console.log(result)
        history.push('/home')    
    }

    return (
        <>
        <Navbar/>
        <div className="container">
        <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-xenter mb-4">Edit Post</h2>
            <form>
                <h4>Title</h4>
                    <input type="text"
                             className="px-4 py-2 mb-4" 
                              placeholder="Enter Title" 
                              name="title"
                              value={title} 
                              onChange={e => onInputChange(e)} 
                    />
                 <h4>Body</h4>
                    <input type="text"
                             className="px-4 py-2 mb-4" 
                              placeholder="Enter body" 
                              name="body"
                              value={body} 
                              onChange={e => onInputChange(e)} 
                    />
                 <h4>Upload Post</h4>
                    <input type="file"
                             className="px-4 py-2 mb-4" 
                              name="image"
                              value={image} 
                              onChange={e => onChange(e)}
                    />
                <br></br>
                <button onClick={(e) => addpost(e)} className="btn btn-primary btn-block">Edit Post</button>
            </form>
        </div>
    </div>
    </>
    )
}

export default Editpost