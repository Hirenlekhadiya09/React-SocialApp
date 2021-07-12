import React from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const Navbar = () => {

    const history = useHistory();
    function logout(){
        localStorage.clear();
        history.push('/Pages/login')
    }

    return(
        <nav className="navbar navbar-expand-lg">
         <div className="container-fluid">
            <Link className="navbar-brand" href="/"> Social App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
             
       </div>
       {
           localStorage.getItem('auth') ?
            <>
                    <Link className="btn btndark" to="/Pages/home">Home</Link>
                    <Link className="btn btndark" to="/Pages/addpost">AddPost</Link>
                    <Link className="btn btndark" to="/Pages/mypost">My Post</Link>
                    <Link className="btn btndark" to="/Pages/profile">My Profile</Link>
                   {/* <Link className="btn btndark" to={`/pages/profile/${id}`}>My Profile</Link> */}
                    <Link className="btn btndark" onClick={logout} >Logout</Link>
                   
            </>
            :
            <>
                     <Link className="btn btndark" to="/Pages/login">Login</Link>
                    <Link className="btn btndark" to="/Pages/signup">Signup</Link>
            </>
       } 
  </div>
</nav>
)}

export default Navbar