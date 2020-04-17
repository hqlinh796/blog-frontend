import { showLoading, hideLoading } from 'react-redux-loading-bar';
export const setCover = (url) =>  dispatch => {
        dispatch(showLoading());
        dispatch({
                type: 'SET_COVER',
                payload: url
        })
}

export const setCoverIsLoaded = (boolean) => ({
                type: 'SET_COVER_IS_LOADED',
                payload: boolean
        })