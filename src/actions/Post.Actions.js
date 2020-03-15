const path = 'https://backend-blog796.herokuapp.com/post';


export function searchPost(keyword, page){
    return dispatch => {
        keyword = escapeSpace(keyword);
        //convert space to %20
        console.log("truoc khi gui di: " + keyword);
        fetch(path + '/search?keyword=' + keyword + '&page=' + page)
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
        fetch(path + '?page=' + page)
        .then(postData => postData.json())
        .then(postDataJSON => {
            //console.log(postDataJSON.posts);
            dispatch({
                type: 'FETCH_POST',
                payload: postDataJSON.posts
            });
        })
    }
}

export const fetchTopPost = () => (dispatch) => {
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