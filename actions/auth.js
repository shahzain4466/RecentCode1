import {
  SIGNUP_REQUEST,
  SIGNUP_RESPONSE,
  AUTH_CHANGE_STATE,
} from './types';

const dummyFuntion = () => { }

export const signupRequest = (payload) => ({
  type: SIGNUP_REQUEST,
  payload,
});

export const signupResponse = (response) => ({
  type: SIGNUP_RESPONSE,
  response,
});

export const onAuthChange = (payload) => ({
  type: AUTH_CHANGE_STATE,
  payload,
});
