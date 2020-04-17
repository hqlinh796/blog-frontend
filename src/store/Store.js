import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import postReducer from '../reducers/Post.Reducer';
import postDetailReducer from '../reducers/PostDetail.Reducer';
import rightbarReducer from '../reducers/RightBar.Reducer';
import headerReducer from '../reducers/Header.Reducer';
import { loadingBarReducer, loadingBarMiddleware } from 'react-redux-loading-bar';

const store = createStore(
    combineReducers({postReducer, postDetailReducer, rightbarReducer, headerReducer, loadingBar: loadingBarReducer}),
     {}, 
     applyMiddleware(logger ,thunk)
     );

store.subscribe(() => {
})

export default store;