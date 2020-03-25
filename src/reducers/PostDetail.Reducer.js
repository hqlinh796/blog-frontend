
const PostDetailInitialState = {
    relatedPosts: []
}

const PostDetial = (state = PostDetailInitialState, action) => {
    switch (action.type) {
        case 'FETCH_RELATED_POST':
            return {
                ...state,
                relatedPosts: action.payload
            }
    
        default:
            return state;

        
    }
}

export default PostDetial;