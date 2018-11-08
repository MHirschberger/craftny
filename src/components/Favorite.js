import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { deleteFavorite } from '../actions/postActions'


class Favorite extends Component {

  deleteFavorite = postId => {
    this.props.deleteFavorite(postId)
  }

  render() {
    const { data } = this.props
    return (
      <div className='post'>
            <img className='image' src={data.url} alt='Image Not Available' />
            <div className='title'>
              <p className='title-text'>{data.title}</p>
            </div>
            <div className='other-text'>
              <p>/u/{data.author_fullname}</p>
            </div>
        <button className='delete-favorite' onClick={() => this.deleteFavorite(data.id)}>Delete Favorite</button>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch =>  {
  return {
    deleteFavorite: postId => dispatch(deleteFavorite(postId))
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Favorite));