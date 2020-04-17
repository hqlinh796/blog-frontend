
const postDetailInitialState = {
    relatedPosts: [],
    postDetail: {},
    isPostDetailFetching: false,
}

const postDetialReducer = (state = postDetailInitialState, action) => {
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
                    rating: [...state.postDetail.rating, action.payload]
                }
            }
        case'RESET_POST_DETAIL':
            return {
                ...state,
                postDetail: {}
            }
        default:
            return state;
    }
}

export default postDetialReducer;