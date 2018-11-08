// import cuid from 'cuid';
// export const cuidFn = cuid;

export default function managePosts(state={loading: false, posts:[], favorites: []}, action) {
    switch(action.type) {

        case 'LOADING_POSTS':
            return { ...state, loading: true };

        case 'FETCH_POSTS':
            return { ...state, loading: false, posts: action.payload };
        
        case 'ADD_FAVORITE':
            if (state.favorites.filter(favorite => favorite.data.id === action.newFav).length === 0) {
                return {...state, favorites: [...state.favorites, state.posts.filter(post => post.data.id === action.newFav)[0]]};
            } else {
                return state;
            }

        case 'DELETE_FAVORITE':
            return {...state, favorites: state.favorites.filter(favorite => favorite.data.id !== action.deletedFav)};
               
        case 'DELETE_COMMENT':
            return { ...state, loading: false, comments: state.comments.filter(comment => comment.id !== action.payload.id) }

        case 'FETCH_COMMENTS':
            return { loading: false, comments: action.payload };
        
        default:
            return state;
    }

}