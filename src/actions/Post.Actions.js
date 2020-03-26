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

export const fetchTopPost = () => (dispatch) => {
    dispatch({
        type: 'FETCHING_TOP_POST'
    })
    fetch(postPath + '/top-post')
        .then(postData => postData.json())
        .then(postDataJSON => {
            //console.log(postDataJSON.posts);
            dispatch({
                type: 'FETCH_TOP_POST',
                payload: postDataJSON.posts
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
                payload: postDataJSON.posts
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