import { combineReducers } from 'redux';
import authReducer from './authReducer';
import reservationReducer from './reservationReducer';
import historyReducer from './historyReducer';
import profileReducer from './profileReducer';
import restaurantReducer from './restaurantReducer';
import menuReducer from './menuReducer';
import selectedRestaurantReducer from './selectedRestaurantReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  reservation: reservationReducer,
  history: historyReducer,
  profile: profileReducer,
  restuarant:restaurantReducer,
  menu:menuReducer,
  selected:selectedRestaurantReducer,
  user:userReducer,
  // Add other reducers as needed
});

export default rootReducer;
