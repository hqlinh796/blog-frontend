const headerInitialState = {
    cover : '',
    isCoverLoaded: false
}

const headerReducer = (state = headerInitialState, action) => {
    switch (action.type) {
        case 'SET_COVER_IS_LOADED':
            return {
                ...state,
                isCoverLoaded: action.payload
            }
        case 'SET_COVER':
            return {
                ...state,
                cover: action.payload
            }
    
        default:
            return state;
    }
}

export default headerReducer;