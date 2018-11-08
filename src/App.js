import React, { Component } from 'react';
import './App.css';
import PostsContainer from './containers/PostsContainer';
import FavoritesContainer from './containers/FavoritesContainer';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar favs={this.props.numFavorites}/> 
        </header>
        <div className="App-body">
          <Route exact path="/" component={PostsContainer} />
          <Route exact path="/favorites" component={FavoritesContainer} />
        </div>
      </div>
    );
  }
}

export default App;
