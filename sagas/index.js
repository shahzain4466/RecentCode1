import { takeEvery, all } from 'redux-saga/effects';

import * as types from '../actions/types';
import { signupAsync } from './signup';

export default function* watch() {
  yield all([
    takeEvery(types.SIGNUP_REQUEST, signupAsync),
  ]);
}
