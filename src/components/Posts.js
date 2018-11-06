import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  render() {

    const posts = this.props.posts.map(post => <Post key={post.id} data={post.data} />)
    return(
      <div>
        {posts}
      </div>
    );
  }
};

export default Posts;