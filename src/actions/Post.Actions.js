const path = 'https://backend-blog796.herokuapp.com/post';
//const path = 'http://localhost:5500/post';


export function searchPost(keyword, page){
    return dispatch => {
        keyword = escapeSpace(keyword);
        //convert space to %20
        fetch(path + '/search?keyword=' + keyword + '&page=' + 0)
        .then(postData => postData.json())
        .then(postDataJSON => {
            //console.log(postDataJSON.posts);
            dispatch({
                type: 'SEARCH_POST',
                payload: postDataJSON.posts
            });
        })
    }
}

export function fetchPost(page) {
    return dispatch => {
        dispatch({
            type: 'FETCHING_POST'
        })
        fetch(path + '?page=' + page)
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
    fetch(path + '/top-post')
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
    fetch(path + '/recent-post')
        .then(postData => postData.json())
        .then(postDataJSON => {
            //console.log(postDataJSON.posts);
            dispatch({
                type: 'FETCH_RECENT_POST',
                payload: postDataJSON.posts
            });
        })
}

export const fetchPostDetail = (postID) => dispatch => {
    dispatch({
        type: 'FETCHING_POST_DETAIL'
    })
    fetch(path + '/' + postID)
    .then(postData => postData.json())
    .then(postDataJSON => {
        dispatch({
            type: 'FETCH_POST_DETAIL',
            payload: postDataJSON
        })
    })
}


const escapeSpace = (text) => text.replace(/\s/, '%20');