import {  useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./styles/Post.css"
const { constants } = require('./constants');

function Post() {
  const [username, setUserame] = useState();
  const [text, setText] = useState();
  const [photo, setPhoto] = useState();
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

return(
    <div className="home-container2">
    <div className="left-section2">
        <form className='postForm' onSubmit={handleSubmit}>
        <div className="formy2">
          <h2>Make your post</h2>
            <label htmlFor="Text">
              <strong>Userame</strong>
            </label>
            <input
              type="text"
              placeholder="Userame"
              autoComplete="off"
              required
              name='Text'
              onChange={e => setUserame(e.target.value)}
              />
          </div>
          <div className="formy2">
            <label htmlFor="Text">
              <strong>Text</strong>
            </label>
            <input
              type="text"
              placeholder="Text"
              autoComplete="off"
              required
              name="Text"
              onChange={e => setText(e.target.value)}
              />
          </div>
          <div className="formy2">
            <label htmlFor="Photo">
              <strong>Photo src/url</strong>
            </label>
            <input
              type="text"
              placeholder="Photo src/url"
              required
              name='Photo'
              onChange={e => setPhoto(e.target.value)}
            />
          </div>
          <button type="submit" className="btn2">
            Post 
          </button>
        </form>
    </div>
    </div>
    )
}

export default Post