import React, { Component } from 'react';
import './App.css';
import PostsContainer from './containers/PostsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <Navbar /> */}
        </header>
        <div className="App-body">
          {/* <Route exact path="/" component={PostsContainer} />
          <Route exact path="/favorites" component={FavoritesContainer} /> */}
        </div>
      </div>
    );
  }
}

export default App;
