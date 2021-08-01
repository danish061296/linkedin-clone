import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import HeaderMenu from './HeaderMenu';
import { auth } from '../firebase';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logoutApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderMenu title="Home" Icon={HomeIcon} />
        <HeaderMenu title="My Network" Icon={SupervisorIcon} />
        <HeaderMenu title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderMenu title="Messaging" Icon={ChatIcon} />
        <HeaderMenu title="Notifications" Icon={NotificationsIcon} />
        <HeaderMenu avatar={true} title="me" onClick={logoutApp} />
      </div>
    </div>
  );
};

export default Header;
