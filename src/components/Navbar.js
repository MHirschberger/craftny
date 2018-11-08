import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  height: '50px',
  // margin: '0 6px 6px',
  background: 'white',
  textDecoration: 'white',
  color: '#57a2e4',
  size: '16px'
}

const Navbar = props => 

  <div>
      <NavLink
        className='navbar'
        to="/"
        exact
        style={link}
        activeStyle={{
          background: '#57a2e4',
          color: 'white'
        }}
      >/r/analog</NavLink>
      <NavLink
        className='navbar'
        to="/favorites"
        exact
        style={link}
        activeStyle={{
          background: '#57a2e4',
          color: 'white'
        }}
      >favorites</NavLink>
  </div>

export default Navbar;