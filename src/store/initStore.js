import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import images from './reducers/images';

const middlewares = [thunkMiddleware]
const middlewareEnhancer = applyMiddleware(...middlewares)
const enhancers = [middlewareEnhancer]
const composedEnhancers = process.env === 'development' ? 
    composeWithDevTools(...enhancers) :
    compose(...enhancers);

export const store = createStore(
    combineReducers({
        images,
    }),
    undefined,
    composedEnhancers
);
