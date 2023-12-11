// selectedRestaurantReducer.js
import { SET_SELECTED_RESTAURANT } from '../actions/selectedRestaurantActions';

const initialState = {
  selectedRestaurant: null,
};

const selectedRestaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_RESTAURANT:
      return {
        ...state,
        selectedRestaurant: action.payload,
      };
    default:
      return state;
  }
};

export default selectedRestaurantReducer;
