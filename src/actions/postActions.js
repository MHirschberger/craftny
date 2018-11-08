const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

export const fetchPosts = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_POSTS' });
        return fetch('https://www.reddit.com/r/analog/top/.json')
            .then(response => response.json())
            .then(posts => dispatch({type: 'FETCH_POSTS', payload: posts.data.children }))
    }
};

export const addFavorite = postId => {
    return {
        type: 'ADD_FAVORITE',
        newFav: postId
    }
}

export const deleteFavorite = postId => {
    return {
        type: 'DELETE_FAVORITE',
        deletedFav: postId
    }
}

// export const addComment = (text, discussionId) => {
//         return (dispatch) => {
//         dispatch({type: 'LOADING_COMMENTS'});
//         return fetch(`/api/discussions/${discussionId}/comments`, {
//             method: "POST",
//             body: JSON.stringify({'comment':{text, discussion_id: discussionId}}),
//             headers
//         })
//             .then(response => response.json())
//             .then(comment => dispatch({type: 'ADD_COMMENT', payload: comment}))
//     }
// }

// export const deleteComment = (commentId) => {
//     return (dispatch) => {
//     dispatch({type: 'LOADING'});
//     return fetch(`/api/comments/${commentId}`, {
//         method: "DELETE",
//         body: JSON.stringify({'comment':{id: commentId}}),
//         headers
//     })
//         .then(response => response.json())
//         .then(comment => dispatch({type: 'DELETE_COMMENT', payload: comment}))
//     }
// }