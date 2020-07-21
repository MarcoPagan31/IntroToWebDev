import React from 'react'
import './Post.css';

// ES7 React Redux Extension
function Post() {
    return (
        // Look up bem for div className 
        // same with post__image
        <div className="post">
            <h3>Username</h3>
            {/* header -> avatar + username */}
             
            {/* open image in new tab by control clicking on it */}
            <img className="post__image" src="https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg.webp"
            height="100" width="100">
            </img>
            
            {/* image */}
            
            <h4>Username: caption</h4>
            {/* username + caption */}
        </div>
    )
}

export default Post
