import { SET_USER, CLEAR_USER, SET_RESTAURANTS, SET_SELECTED_RESTAURANT, SET_MENU, SET_RESERVATION, SET_HISTORY, SET_PROFILE } from '../actions/actions';

const initialState = {
    user: null,
    restaurants: [],
    selectedRestaurant: null,
    menu: [],
    reservation: null,
    history: [],
    profile: null
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return { ...state, user: action.payload };
        case CLEAR_USER:
            return { ...state, user: null };
        case SET_RESTAURANTS:
            return { ...state, restaurants: action.payload };
        case SET_SELECTED_RESTAURANT:
            return { ...state, selectedRestaurant: action.payload };
        case SET_MENU:
            return { ...state, menu: action.payload };
        case SET_RESERVATION:
            return { ...state, reservation: action.payload };
        case SET_HISTORY:
            return { ...state, history: action.payload };
        case SET_PROFILE:
            return { ...state, profile: action.payload };
        default:
            return state;
    }
};

export default appReducer;