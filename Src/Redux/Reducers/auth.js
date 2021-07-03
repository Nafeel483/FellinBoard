import { types } from "../Types/auth";

let initialState = {

};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Register
    case types.REGISTER_REQUEST:
      return {
        ...state,
        loadingReducer: true,
        registerError: false
      };
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        register: action.payload,
        loadingReducer: false,
        registerError: null,
      };
    case types.REGISTER_FAILURE:
      return {
        ...state,
        loadingReducer: false,
        registerError: action.payload.message,
      };
    // // Login
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loadingLogin: true,
        loginError: false
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loggedInStatus: true,
        loadingLogin: false,
        loginError: null,
        token: action.payload.token
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        loggedInStatus: false,
        loadingLogin: false,
        loginError: action.payload.message,
      };

    // Forgot
    case types.FORGOT_REQUEST:
      return {
        ...state,
        loadingforgot: true,
      };
    case types.FORGOT_SUCCESS:
      return {
        ...state,
        loadingforgot: false,
      };
    case types.FORGOT_FAILURE:
      return {
        ...state,
        loadingforgot: false,
        registerError: action.payload.message,
      };


    // verification
    case types.VERIFICATION_REQUEST:
      return {
        ...state,
        loadingverify: true,
      };
    case types.VERIFICATION_SUCCESS:
      return {
        ...state,
        loadingverify: false,
      };
    case types.VERIFICATION_FAILURE:
      return {
        ...state,
        loadingverify: false,
        registerError: action.payload.message,
      };


    default: {
      return { ...state };
    }
  }
};

export default authReducer;