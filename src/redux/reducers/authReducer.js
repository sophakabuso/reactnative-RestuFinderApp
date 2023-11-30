import { 
    LOGIN_SUCCESS, 
    REGISTER_SUCCESS, 
    LOGOUT ,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAILURE,} from '../actions/authActions';
  
  const initialState = {
    user: null,
    isAuthenticated: false,
    forgotPasswordLoading: false,
    forgotPasswordSuccess: false,
    forgotPasswordError: null,
    
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
      case REGISTER_SUCCESS:
        return {
          ...state,
          user: action.payload,
          isAuthenticated: true,
        };
        case FORGOT_PASSWORD_REQUEST:
          return {
            ...state,
            forgotPasswordLoading: true,
            forgotPasswordSuccess: false,
            forgotPasswordError: null,
          };
        case FORGOT_PASSWORD_SUCCESS:
          return {
            ...state,
            forgotPasswordLoading: false,
            forgotPasswordSuccess: true,
            forgotPasswordError: null,
          };
        case FORGOT_PASSWORD_FAILURE:
        return {
          ...state,
          forgotPasswordLoading: false,
          forgotPasswordSuccess: false,
          forgotPasswordError: action.payload,
        };
      case LOGOUT:
        return {
          ...state,
          user: null,
          isAuthenticated: false,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;