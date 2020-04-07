import {postPath} from './path';

export const fetchRelatedPost = (postID) => dispatch => {
    //category = escapeSpace(category);
    
    fetch(`${postPath}/${postID}/related-post`)
    .then(relatedPosts => relatedPosts.json())
    .then(relatedPostsJSON => {
        dispatch({
            type: 'FETCH_RELATED_POST',
            payload: relatedPostsJSON
        })
    })
}

export const ratePost = (postID, rating) => dispatch => {
    fetch(`${postPath}/rate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            postID: postID,
            rating: rating
        })
    })
    .then(() => {
        dispatch({
            type: 'RATE_POST',
            payload: rating
        })
    })
}

export const fetchPostDetail = (postID) => dispatch => {
    dispatch({
        type: 'FETCHING_POST_DETAIL'
    })
    fetch(`${postPath}/${postID}`)
    .then(postData => postData.json())
    .then(postDataJSON => {
        dispatch({
            type: 'FETCH_POST_DETAIL',
            payload: postDataJSON
        })
    })
}

//const escapeSpace = (text) => text.replace(/\s/, '%20');