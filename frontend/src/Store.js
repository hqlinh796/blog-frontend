import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import postReducer from './reducers/Post.Reducer';


const store = createStore(
    combineReducers({postReducer}),
     {}, 
     applyMiddleware(logger, thunk)
     );

store.subscribe(() => {
})

export default store;