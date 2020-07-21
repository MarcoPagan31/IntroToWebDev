import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './Post';

// deleted default code in App
function App() {
  return (
    <div className="app">
          <div className="app__header">
            <img
              // bem 
              className="app__headerImage"
              src="https://fontmeme.com/images/instagram-new-logo.png"  
              height="100" width="100"
              alt=""
            />
          </div>

          <h1>HELLO Clever Programmers Let's build an Instagram
          Clone with React!</h1>
          {/* Header */}

          <Post />
          {/* Posts */}
          {/* Posts */}
        
    </div>
  );
}

export default App;
