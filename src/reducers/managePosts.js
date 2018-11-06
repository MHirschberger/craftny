// import cuid from 'cuid';
// export const cuidFn = cuid;

export default function managePosts(state={loading: false, posts:[], favorites: []}, action) {
    switch(action.type) {

        case 'LOADING_POSTS':
            return { ...state, loading: true };

        case 'FETCH_POSTS':
            return { ...state, loading: false, posts: action.payload };
        
        case 'ADD_FAVORITE':
            if (action.payload.id && action.payload.text) {
                return { loading: false, comments: [...state.comments, action.payload], errors: []};
            } else if (!action.payload.id && action.payload.text){
                return { ...state, errors: action.payload.text };
            } else {
                return state;
            }
               
        case 'DELETE_COMMENT':
            return { ...state, loading: false, comments: state.comments.filter(comment => comment.id !== action.payload.id) }

        case 'FETCH_COMMENTS':
            return { loading: false, comments: action.payload };
        
        default:
            return state;
    }

}