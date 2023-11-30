import { FETCH_RESTAURANTS } from "../actions/restaurant";


const initialState = {
    restaurants: [],
};

const restaurantsReducer = (state = initialState, action) =>{

    switch (action.type) {
        case FETCH_RESTAURANTS:
          return { ...state, restaurants: action.payload };
        default:
          return state;
      }


};

export default restaurantsReducer;
  