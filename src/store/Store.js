import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import postReducer from '../reducers/Post.Reducer';
import postDetailReducer from '../reducers/PostDetail.Reducer';
import rightbarReducer from '../reducers/RightBar.Reducer';
import headerReducer from '../reducers/Header.Reducer';

const store = createStore(
    combineReducers({postReducer, postDetailReducer, rightbarReducer, headerReducer}),
     {}, 
     applyMiddleware(logger, thunk)
     );

store.subscribe(() => {
})

export default store;