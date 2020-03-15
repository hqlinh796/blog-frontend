import {fetchPost} from '../actions/Post.Actions';
import postReducer from '../reducers/Post.Reducer';

function fetchPosts() {
    return async (dispatch) => {
        console.log("co");
        const postData = await fetch('http://localhost:5500/post');
        console.log(postData.json());
        dispatch(fetchPost(postData.json()));
    }
}

export default fetchPosts;