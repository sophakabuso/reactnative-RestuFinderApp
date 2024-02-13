// User Actions
export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER';

// Auth Actions
export const SET_AUTH = 'SET_AUTH'; 

// Restaurant Actions
export const SET_RESTAURANTS = 'SET_RESTAURANTS';

// Selected Restaurant Actions
export const SET_SELECTED_RESTAURANT = 'SET_SELECTED_RESTAURANT';

// Menu Actions
export const SET_MENU = 'SET_MENU';

// Reservation Actions
export const SET_RESERVATION = 'SET_RESERVATION';

// History Actions
export const SET_HISTORY = 'SET_HISTORY';

// Profile Actions
export const SET_PROFILE = 'SET_PROFILE';

// Action creators
export const setUser = user => ({ type: SET_USER, payload: user });
export const clearUser = () => ({ type: CLEAR_USER });

export const setRestaurants = restaurants => ({ type: SET_RESTAURANTS, payload: restaurants });

export const setSelectedRestaurant = restaurant => ({ type: SET_SELECTED_RESTAURANT, payload: restaurant });

export const setMenu = menu => ({ type: SET_MENU, payload: menu });

export const setReservation = reservation => ({ type: SET_RESERVATION, payload: reservation });

export const setHistory = history => ({ type: SET_HISTORY, payload: history });

export const setProfile = profile => ({ type: SET_PROFILE, payload: profile });