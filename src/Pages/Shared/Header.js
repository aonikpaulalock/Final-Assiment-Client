import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div class="navbar md:px-14 sm:px-6 shadow-lg py-3">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow-md bg-base-100 rounded-box w-52 text-md font-medium text-accent">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/profile">My-Profile</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/login">login</Link></li>
          </ul>
        </div>
        <Link to="" class="btn btn-ghost normal-case text-xl">daisyUI</Link>
      </div>
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal p-0 text-md font-medium text-accent">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/profile">My-Profile</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/login">login</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;