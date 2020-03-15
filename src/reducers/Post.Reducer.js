
const PostInitialState = {
    posts: [],
    topPosts: [],
    recentPosts: [],
    postDetail: {},
    isSearch: false,
    keyword: "",
    page: 0
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
        case 'FETCH_POST':
            return {
                ...state,
                posts: action.payload
            }
        case 'FETCH_TOP_POST':
            return {
                ...state,
                topPosts: action.payload
            }
        case 'FETCH_RECENT_POST':
            return {
                ...state,
                recentPosts: action.payload
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