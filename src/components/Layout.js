import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

const activeClass = ({ isActive }) =>
  isActive ? 'activeBtn favorites__button' : 'favorites__button';

const Layout = () => {
  return (
    <>
      <header>
        <h1 className='title'>Book App</h1>
        <div className='actions'>
          <NavLink to='/' className={activeClass}>
            Home
          </NavLink>
          <NavLink to='favorites' className={activeClass}>
            Favorites
          </NavLink>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
