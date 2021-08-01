import React, { useState, useEffect } from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOptions from './InputOptions';
import ImageIcon from '@material-ui/icons/Image';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalenderViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';
import { db } from '../firebase';
import firebase from 'firebase';
import { YouTube } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');
  const user = useSelector(selectUser);
  console.log(user);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Start a post"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOptions Icon={ImageIcon} title="Photo" color="#71B5F8" />
          <InputOptions Icon={YouTube} title="Video" color="#80C15E" />
          <InputOptions Icon={EventNoteIcon} title="Event" color="#E7A33E" />
          <InputOptions
            Icon={CalenderViewDayIcon}
            title="Write Article"
            color="#FC9294"
          />
        </div>
      </div>
      {/* Posts */}
      <FlipMove>
        {posts.map(
          ({ id, data: { name, description, message, photoUrl } }, idx) => (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
            />
          )
        )}
      </FlipMove>
    </div>
  );
};

export default Feed;
