import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: '#191970',
  textDecoration: '#191970',
  color: 'black',
}

const Navbar = props => 

  <div>
      <NavLink
        className='navbar'
        to="/"
        exact
        style={link}
        activeStyle={{
          background: '#4169E1'
        }}
      >/r/analog</NavLink>
      <NavLink
        className='navbar'
        to="/favorites"
        exact
        style={link}
        activeStyle={{
          background: '#4169E1'
        }}
      >favorites</NavLink>
  </div>

export default Navbar;