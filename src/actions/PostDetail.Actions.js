const postPath = 'https://backend-blog796.herokuapp.com/post';
const categoryPath = 'https://backend-blog796.herokuapp.com/category';
//const postPath = 'http://localhost:5500/post';
//const categoryPath = 'http://localhost:5500/category';

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

const escapeSpace = (text) => text.replace(/\s/, '%20');