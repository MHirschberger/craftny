import React, { Component } from 'react';
import Posts from '../components/Posts';
//import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class PostsContainer extends Component {

  state = {
    posts: []
  }

  fetchPosts = () => {
    fetch('https://www.reddit.com/r/analog/top/.json')
      .then(response => response.json())
      .then(discussions => console.log(discussions))
  }

  componentDidMount() {
    this.fetchPosts()
  }

  render() {
    return (
      <div>
        {this.state.posts.length > 0 ? <Posts posts={this.state.posts} /> : null}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    posts: state.posts
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
})

export default PostsContainer;