import React, { Component } from 'react';
import Favorites from '../components/Favorites';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import { withRouter } from 'react-router';

class FavoritesContainer extends Component {

  render() {
    return (
      <div>
        {this.props.favorites.length > 0 ? <Favorites favorites={this.props.favorites} /> : 'You Currently Have No Favorites'}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    favorites: state.favorites
})

const mapDispatchToProps = dispatch =>  {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer));
