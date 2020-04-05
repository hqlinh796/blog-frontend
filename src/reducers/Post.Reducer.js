
const PostInitialState = {
    posts: [],
    keyword: "",
    page: -1,
    isSearch: false,
    hasMore: true,
    isPostFetching: false,
    isUpdate: false
}
const postReducer = (state = PostInitialState, action) => {
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

export default postReducer;