import * as types from '../actions/types';

const initialState = {
  isSignedIn: false,
  email: '',
  otp: '',
  otpError: false,
  authenticationToken: null,
};

const authenticationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.LOGOUT:
      return {
        ...initialState,
        email: '',
        authenticationToken: null,
        isSignedIn: false,
      };
    case types.AUTH_CHANGE_STATE:
      return {
        ...state,
        ...action.payload,
      };
    case types.SIGNUP_RESPONSE:
      return {
        ...state,
      };
    case types.OTP_VERIFICATION_RESPONSE:
      const { attributes } = action.response.data;

      return {
        ...state,
      };
    default:
      return state;
  }
};

export default authenticationReducer;
