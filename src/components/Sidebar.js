import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

const Sidebar = () => {
  const user = useSelector(selectUser);

  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4D16AQGIl8a7wpTlaw/profile-displaybackgroundimage-shrink_350_1400/0/1622753047942?e=1632960000&v=beta&t=GcJa4IhF-h7OhG_NRkdGrFJMYsrxgzG3Nit2JVNTU1Y"
          alt="avatar"
        />
        <Avatar
          src={user.photoUrl}
          style={{
            height: '70px',
            width: '70px',
            marginTop: '-15px',
            border: '2px solid white',
            cursor: 'pointer',
          }}
          className="sidebar__avatar"
        >
          {!user.photoUrl && user.email[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,435</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">1,231</p>
        </div>
        <div className="sidebar__connection ">
          <p>Connections</p>
          <p className="sidebar__statNumber">85</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('frontend dev')}
        {recentItem('software engineering')}
        {recentItem('development')}
      </div>
    </div>
  );
};

export default Sidebar;
