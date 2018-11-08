import React, { Component } from 'react';
import Posts from '../components/Posts';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchPosts } from '../actions/postActions';

class PostsContainer extends Component {

  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    return (
      <div>
        {this.props.posts.length > 0 ? <Posts posts={this.props.posts} /> : null}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    posts: state.posts
})

const mapDispatchToProps = dispatch =>  {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostsContainer));
