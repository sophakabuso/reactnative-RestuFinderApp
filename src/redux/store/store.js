// src/redux/store/store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import restaurantsReducer from '../reducers/restaurantReducer';
import reservationReducer from '../reducers/reservationReducer';
import authReducer from '../reducers/authReducer';
import favoriteRestaurantsReducer from '../reducers/favoriteRestaurantsReducer';


const rootReducer = combineReducers({
  restaurants: restaurantsReducer,
  reservation: reserveReducer,
  auth: authReducer,
  favoriteRestaurants: favoriteRestaurantsReducer,
 
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;