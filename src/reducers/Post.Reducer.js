
const PostInitialState = {
    posts: [],
    topPosts: [],
    recentPosts: [],
    postDetail: {},
    isSearch: false,
    keyword: "",
    page: 0,
    isPostFetching: false,
    isTopPostFetching: false,
    isRecentPostFetching: false
}
const Post = (state = PostInitialState, action) => {
    switch (action.type) {
        case 'SEARCH_POST':
            return {
                ...state,
                isSearch: true,
                //keyword: action.payload,
                posts: action.payload
            }
        case 'FETCHING_POST':
            return {
                ...state,
                isPostFetching: true
            }
        case 'FETCHING_TOP_POST':
            return {
                ...state,
                isTopPostFetching: true
            }
        case 'FETCHING_RECENT_POST':
            return {
                ...state,
                isRecentPostFetching: true
            }
        case 'FETCH_POST':
            return {
                ...state,
                posts: action.payload,
                isPostFetching: false
            }
        case 'FETCH_TOP_POST':
            return {
                ...state,
                topPosts: action.payload,
                isTopPostFetching: false
            }
        case 'FETCH_RECENT_POST':
            return {
                ...state,
                recentPosts: action.payload,
                isRecentPostFetching: false
            }
        case 'FETCH_POST_DETAIL':
            return {
                ...state,
                postDetail: action.payload
            }
        default:
            return state
    }
}

export default Post;