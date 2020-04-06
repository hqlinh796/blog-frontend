const postPath = 'https://backend-blog796.herokuapp.com/post';
//const categoryPath = 'https://backend-blog796.herokuapp.com/category';
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

export function fetchPost(page, sortBy) {
    return dispatch => {
        dispatch({
            type: 'FETCHING_POST'
        })
        if (!sortBy)
            sortBy = 'time';
        fetch(`${postPath}?page=${page}&sort=${sortBy}`)
        .then(postData => postData.json())
        .then(postDataJSON => {
            //console.log(postDataJSON.posts);
            dispatch({
                type: 'FETCH_POST',
                payload: postDataJSON
            });
           
        })
    }
}



export const resetResult = ()  => ({
        type: 'RESET_RESULT'
    });



const escapeSpace = (text) => text.replace(/\s/, '%20');