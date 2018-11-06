import React, { Component } from 'react';

export default class Post extends Component {

  render() {
    const { data } = this.props

    return (
      <div className='post'>
        <img src={data.thumbnail} alt='Image Not Available' />
        <p>{data.url}</p>
        <p>/u/{data.author_fullname}</p>
        {/* <button className='make-favorite' onClick={() => this.props.deleteComment(this.props.comment.id)}> Delete Comment </button> */}
      </div>
    );
  }

};