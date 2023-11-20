import { createStore } from 'redux';
import appReducer from '../reducers/reducers'; // Import your root reducer

// Create the Redux store
const store = createStore(appReducer);

export default store;