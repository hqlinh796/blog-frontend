const rightbarInitialState = {
    isTopRateFetching: false,
    isTopViewFetching: false,
    isRecentPostFetching: false,
    topRates: [],
    topViews: [],
    recentPosts: [],
    categories: []
}

const rightbarReducer = (state = rightbarInitialState, action) => {
    switch (action.type) {
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
        case 'FETCH_CATEGORIES':
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state;
    }
}

export default rightbarReducer;