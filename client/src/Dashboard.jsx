import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./styles/Dashboard.css"
const { constants } = require('./constants');

function Dashboard() {
  const [username, setUserame] = useState();
  const [text, setText] = useState();
  const [photo, setPhoto] = useState();
  const [posts, setPosts] = useState();
  
  const navigate = useNavigate();


  const handleSubmit = e => {
    e.preventDefault();
    
    axios.post(`http://localhost:${constants.localHost}/api/posts`, {
        username,
        photo,
        text,
      },{
        headers: {
          'Content-Type': 'application/json', // Adjust as needed
        }}
        )
      .then(res => {
        navigate('/dashboard');
      })
      .catch(err => console.log("bug here",err));
  };

    useEffect(()=>{
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:${constants.localHost}/api/posts`);
          setPosts(response.data);

          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      
      fetchData();
      
      
      
    }, [])
    console.log(posts)

  

   
    function time(timestamp) {
      const time = new Date(timestamp)
      return `${time.getDate()} ${time.getMonth() + 1} ${time.getFullYear()}` 
    }
    const renderImageItems = () => {
    let renderedItems = [];
    // posts.forEach(post => {
    //   renderedItems.push(
    //     <div key={post._id} className="image-item">
    //       <img src={post.photo} alt={post.text} />
    //       <p>{post.username}</p>
    //       {/* Other post details you want to display */}
    //     </div>
    //   );
    // });
    // return renderedItems;

    posts.forEach(post => {
      renderedItems.push(
        <article class="post">
        <div class="user-info">
          <h2>{post.username}</h2>
          <p>{time(post.updatedAt)}</p>
        </div>
      <div class="post-content">
      <p class="post-text">{post.text}</p>
      <img src={post.photo} alt="Image"/>
      </div>
    </article>
      );
    });
    const reversedArray = renderedItems.reverse()
    return reversedArray;
    }
    
    // <article class="post">
    //       <div class="post-header">
    //         <div class="user-info">
    //           <h2>User 1</h2>
    //           <p>3 hours ago</p>
    //         </div>
    //       </div>
    //       <p class="post-text">This is a sample post text.</p>
    //       <img src="https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Post 1"/>
    //     </article>
    return (
      <div class="container">
      <section class="post-feed">
        {posts ? renderImageItems() : <p>Loading...</p>}
        
        {/* <article class="post">
            <div class="user-info">
              <h2>User 1</h2>
              <p>3 hours ago</p>
            </div>
          <div class="post-content">
          <p class="post-text">This is a sample post text.</p>
          <img src="https://images.unsplash.com/photo-1565992441121-4367c2967103?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Post 1"/>
          </div>
        </article>

        <article class="post">
         
        </article> */}
      </section>
      <div class="fixed-box">
    <div class="box-content">
      <p>Do you want to log out?</p>
      <Link to="/login" class="btn">Log Out</Link>
      <p>Post your own photo</p>
      <Link to="/post" class="btn">Post</Link>
    </div>
  </div>

      <div class="fixed-box2">
    <div class="box-content2">
      <h1>MyGram</h1>
      <p>About MyGram</p>
      <p className='small-p'>
      My MERN project employs MongoDB for data storage, utilizes Node.js and Express for the backend, and React for the frontend. It enables user registration, login, and displays posts from others. Users can also create and share their own posts.
      </p>
    </div>
  </div>
    </div>
  
  );
}


export default Dashboard;
