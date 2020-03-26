
const PostInitialState = {
    posts: [],
    topRates: [],
    recentPosts: [],
    topViews: [],
    categories: [],

    keyword: "",
    page: -1,

    isSearch: false,
    hasMore: true,
    isPostFetching: false,
    isTopRateFetching: false,
    isRecentPostFetching: false,
    isTopViewFetchinh: false,
    isUpdate: false
}
const Post = (state = PostInitialState, action) => {
    switch (action.type) {
        case 'SEARCH_POST':
            return {
                ...state,
                isSearch: true,
                //keyword: action.payload,
                posts: [...state.posts, ...action.payload.posts],
                hasMore: action.payload.hasMore,
                page: action.payload.page,
                isPostFetching: false,
                keyword: action.payload.keyword
            }
        case 'FETCHING_POST':
            return {
                ...state,
                isPostFetching: true
            }
        case 'FETCHING_TOP_RATE':
            return {
                ...state,
                isTopRateFetching: true
            }
        case 'FETCHING_RECENT_POST':
            return {
                ...state,
                isRecentPostFetching: true
            }
        case 'FETCHING_TOP_VIEW':
            return {
                ...state,
                isTopViewFetching: true
            }
        case 'FETCH_POST':
            return {
                ...state,
                posts: [...state.posts, ...action.payload.posts],
                hasMore: action.payload.hasMore,
                page: action.payload.page,
                isPostFetching: false,
                keyword: '',
                isSearch: false
            }
        case 'FETCH_TOP_RATE':
            return {
                ...state,
                topRates: action.payload,
                isTopRateFetching: false
            }
        case 'FETCH_RECENT_POST':
            return {
                ...state,
                recentPosts: action.payload,
                isRecentPostFetching: false
            }
        case 'FETCH_TOP_VIEW':
            return {
                ...state,
                topViews: action.payload,
                isTopViewFetching: false
            }
        case 'RESET_RESULT':
            return {
                ...state,
                posts: [],
                page: 0
            }
        case 'FETCH_CATEGORIES':
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state
    }
}

export default Post;