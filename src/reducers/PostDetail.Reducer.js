
const PostDetailInitialState = {
    relatedPosts: [],
    postDetail: {},
    isPostDetailFetching: false,
}

const PostDetial = (state = PostDetailInitialState, action) => {
    switch (action.type) {
        case 'FETCHING_POST_DETAIL':
            return {
                ...state,
                isPostDetailFetching: true
            }
        case 'FETCH_POST_DETAIL':
            return {
                ...state,
                postDetail: action.payload,
                isPostDetailFetching: false
            }
        case 'FETCH_RELATED_POST':
            return {
                ...state,
                relatedPosts: action.payload
            }
        case 'RATE_POST':
            return {
                ...state,
                postDetail: {
                    ...state.postDetail,
                    rate: [...state.postDetail.rate, action.payload]
                }
            }
    
        default:
            return state;
    }
}

export default PostDetial;