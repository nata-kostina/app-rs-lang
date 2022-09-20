import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import { RouteNames } from '../../router';
import { useActions } from '../../hooks/useActions';
import { Dropdown, Menu, Space } from 'antd';
import { GameMode, TransitionEnum } from '../../types/types';
import { NavigateState } from './../../types/types';
import './styles.scss';

const menuItems = [
  {
    key: '0',
    label: <Link to={`${RouteNames.GAMES}/${RouteNames.SPRINT_GAME}`}
      state={GameMode.MENU_GAME}>Sprint
    </Link>,
  },
];
const menu = (
  <Menu items={menuItems} />
);
const Navigation = () => {
  const { isAuth, user } = useAppSelector((state) => state.auth);
  const { logout } = useActions();
  const handleLogoutClick = () => {
    logout();
  }
  const location = useLocation();
  return (
    <nav id="nav" className='nav'>
      <Link to={RouteNames.HOMEPAGE}>Homepage</Link>
      <Link to={RouteNames.TEXTBOOK}>Textbook</Link>
      <Dropdown overlay={menu}>
        <Link to={RouteNames.GAMES}>
          <Space> Games   </Space>
        </Link>
      </Dropdown>
      <Link to={RouteNames.STATISTICS}>Statistics</Link>
      {
        isAuth ?
          <>
            <span className='greetings'>Hi, {user?.name}</span>
            <button className={`${'btn'} ${'btn_logout'}`} type="button" onClick={handleLogoutClick}>Logout</button>
          </> :
          <Link
            className={`${'btn'} ${'btn_login'}`}
            to={RouteNames.AUTHORIZATION}
            state={{ mode: TransitionEnum.NORMAL, location: location.pathname } as NavigateState}> Login</Link>
      }
    </nav >
  );
};

export default Navigation;