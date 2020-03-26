const postPath = 'https://backend-blog796.herokuapp.com/post';
const categoryPath = 'https://backend-blog796.herokuapp.com/category';
//const postPath = 'http://localhost:5500/post';
//const categoryPath = 'http://localhost:5500/category';


export function searchPost(keyword, page){
    return dispatch => {
        dispatch({
            type: 'FETCHING_POST'
        })
        keyword = escapeSpace(keyword);
        //convert space to %20
        fetch(postPath + '/search?keyword=' + keyword + '&page=' + page)
        .then(postData => postData.json())
        .then(postDataJSON => {
            //console.log(postDataJSON.posts);
            dispatch({
                type: 'SEARCH_POST',
                payload: postDataJSON
            });
        })
    }
}

export function fetchPost(page) {
    return dispatch => {
        dispatch({
            type: 'FETCHING_POST'
        })
        fetch(postPath + '?page=' + page)
        .then(postData => postData.json())
        .then(postDataJSON => {
            //console.log(postDataJSON.posts);
            dispatch({
                type: 'FETCH_POST',
                payload: postDataJSON
            });
            // setTimeout(() => {
            //     dispatch({
            //         type: 'FETCH_POST',
            //         payload: postDataJSON.posts
            //     });
            // }, 2000);
        })
    }
}

export const fetchTopRate = () => (dispatch) => {
    dispatch({
        type: 'FETCHING_TOP_RATE'
    })
    fetch(postPath + '/top-rate')
        .then(postData => postData.json())
        .then(postDataJSON => {
            //console.log(postDataJSON.posts);
            dispatch({
                type: 'FETCH_TOP_RATE',
                payload: postDataJSON
            });
        })
}

export const fetchRecentPost = () => (dispatch) => {
    dispatch({
        type: 'FETCHING_RECENT_POST'
    })
    fetch(postPath + '/recent-post')
        .then(postData => postData.json())
        .then(postDataJSON => {
            //console.log(postDataJSON.posts);
            dispatch({
                type: 'FETCH_RECENT_POST',
                payload: postDataJSON
            });
        })
}

export const fetchTopView = () => (dispatch) => {
    dispatch({
        type: 'FETCHING_TOP_VIEW'
    })
    fetch(postPath + '/top-view')
        .then(postData => postData.json())
        .then(postDataJSON => {
            //console.log(postDataJSON.posts);
            dispatch({
                type: 'FETCH_TOP_VIEW',
                payload: postDataJSON
            });
        })
}

export const resetResult = ()  => ({
        type: 'RESET_RESULT'
    });

export const fetchCategories = () => dispatch => {
    fetch(categoryPath)
    .then(categoryData => categoryData.json())
    .then(categoryJSON => {
        dispatch({
            type: 'FETCH_CATEGORIES',
            payload: categoryJSON
        })
    })
}

const escapeSpace = (text) => text.replace(/\s/, '%20');