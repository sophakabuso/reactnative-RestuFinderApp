import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // Import your root reducer

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer, // pass your root reducer
    initialState,
    applyMiddleware(...middleware)
);

export default store;