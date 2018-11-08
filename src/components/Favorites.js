import React, { Component } from 'react';
import Favorite from './Favorite';

class Favorites extends Component {
  render() {
    const favorites = this.props.favorites.map(favorite => <Favorite key={favorite.data.id} data={favorite.data} />)
    return(
      <div>
        {favorites}
      </div>
    );
  }
};

export default Favorites;