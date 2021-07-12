import React from "react"
import Navbar from '../Layout/Navbar'


const Dashboard = () => {
    
    return(
        <>
         <Navbar/>
            <div className="maindiv">
                <div className="Home">
                    <img className="profileimage" src="https://milan-facebook-node.herokuapp.com/Uploads/post/1602753620167.jpeg" alt="Sunset in the mountains" />
                    <h1 className="userheading">Hiren</h1>
                </div>
                <img className="homeimage" src="https://milan-facebook-node.herokuapp.com/Uploads/post/1602753620167.jpeg" />
                <div className="px-6 py-4">
                    <div className="font-bold text-size mb-2">My System</div>
                    <p className="text-gray-700 text-base">this is Demo</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm fontbold text-gray-700 mr-2 mb-2">Like</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm fontbold text-gray-700 mr-2 mb-2">Comment</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm fontbold text-gray-700 mr-2 mb-2">Share</span>
                </div>
            </div>
            <div className="maindiv">
                <div className="Home">
                    <img className="profileimage" src="https://milan-facebook-node.herokuapp.com/Uploads/post/1605784312888.jpeg" alt="Sunset in the mountains" />
                    <h1 className="userheading">Posting</h1>
                </div>
                <img className="homeimage" src="https://milan-facebook-node.herokuapp.com/Uploads/post/1605784312888.jpeg" />
                <div className="px-6 py-4">
                    <div className="font-bold text-size mb-2">5g leptop</div>
                    <p className="text-gray-700 text-base">this is tesing</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm fontbold text-gray-700 mr-2 mb-2">Like</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm fontbold text-gray-700 mr-2 mb-2">Comment</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm fontbold text-gray-700 mr-2 mb-2">Share</span>
                </div>
            </div>
            <div className="maindiv">
                <div className="Home">
                    <img className="profileimage" src="https://milan-facebook-node.herokuapp.com/Uploads/post/1603002169437.jpeg" alt="Sunset in the mountains" />
                    <h1 className="userheading">Global</h1>
                </div>
                <img className="homeimage" src="https://milan-facebook-node.herokuapp.com/Uploads/post/1603002169437.jpeg" />
                <div className="px-6 py-4">
                    <div className="font-bold text-size mb-2">person</div>
                    <p className="text-gray-700 text-base">this is humanbeing</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm fontbold text-gray-700 mr-2 mb-2">Like</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm fontbold text-gray-700 mr-2 mb-2">Comment</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm fontbold text-gray-700 mr-2 mb-2">Share</span>
                </div>
            </div>
        </>
    )
}

export default Dashboard;