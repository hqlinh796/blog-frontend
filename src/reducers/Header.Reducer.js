const headerInitialState = {
    cover : ''
}

const headerReducer = (state = headerInitialState, action) => {
    switch (action.type) {
        case 'SET_COVER':
            return {
                ...state,
                cover: action.payload
            }
    
        default:
            return state;
    }
}