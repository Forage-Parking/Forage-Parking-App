import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <NavLink exact to="/">
        <h4>Home</h4>
      </NavLink>
      <NavLink to="/spots/search">
        <h4>Search</h4>
      </NavLink>
      <NavLink to="/profile/:id">
        <h4>Profile</h4>
      </NavLink>
      <NavLink to="/spots/new">
        <h4>New Spot</h4>
      </NavLink>
    </div>
  );
}

export default Nav;
