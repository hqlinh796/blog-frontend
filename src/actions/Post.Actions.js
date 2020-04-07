import {postPath} from './path';


export const changeKeyword = (keyword) => ({
    type: 'CHANGE_KEYWORD',
    payload: keyword
})

export const changeSortBy = (sortBy) => ({
    type: 'CHANGE_SORT_BY',
    payload: sortBy
})

export function searchPost(keyword, page, sortBy){
    return dispatch => {
        dispatch({
            type: 'FETCHING_POST'
        })
        keyword = escapeSpace(keyword);
        //convert space to %20
        fetch(`${postPath}/search?keyword=${keyword}&page=${page}&sort=${sortBy}`)
        .then(postData => postData.json())
        .then(postDataJSON => {
            
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