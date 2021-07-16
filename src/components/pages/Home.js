import React,{ useState, useEffect } from 'react'
import Navbar from '../Layout/Navbar'
import axios from 'axios';
// import { Link } from 'react-router-dom'

const Home = () => {
    const [post, setPost] = useState([]);

    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts =  async () => {
           const result = await axios.get("http://localhost:5000/getpost")
            setPost(result.data)
    }  

    const deletePost = async _id => {
        var id = JSON.parse(localStorage.getItem('userid'));
        console.log("{}{}{}{}--",id)
        if (id && _id){
            await axios.delete(`http://localhost:5000/deletepost/${_id}`);
            loadPosts();
        }
        else{
            alert()
        }  
    }
 
    return (
        <>
            <Navbar />
            <div>
                {post &&
                    post.map((post, index) => (
                                <div className="homepost">
                                    <img  className="post_images" alt="..." src={`http://localhost:5000/${post.image}`}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{post.title}</h5>
                                        <p className="card-text">{post.body}</p>
                                    </div>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm fontbold text-gray-700 mr-2 mb-2">Like</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm fontbold text-gray-700 mr-2 mb-2">Comment</span>
                                    <button onClick={() => deletePost(post._id)} className="btn btn-delete btn-block"><i className="fa fa-trash" aria-hidden="true"></i></button>
                                    {/* <Link className="btn btn-edit btn-block" to="/Pages/editpost" ><i class="fa fa-edit" aria-hidden="true"></i></Link> */}
                                </div>  
                    ))
                }
            </div>
        </>
    )
}

export default Home

