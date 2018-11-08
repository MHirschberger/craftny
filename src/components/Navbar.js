import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


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

class Navbar extends Component {
  render() {
    return (
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
        >favorites ({this.props.numFavs})</NavLink>
      </div>

    )
  }
}

const mapStateToProps = state => ({
  numFavs: state.favorites.length
})

export default withRouter(connect(mapStateToProps)(Navbar));