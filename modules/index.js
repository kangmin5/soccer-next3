import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter, { counterSaga } from './basic/counter';
import register, { registerSaga } from './auth/register';
import mlogin, { loginSaga } from './auth/login';

const rootReducer = combineReducers({
  counter, register,mlogin,

});

export function* rootSaga() {
  yield all([counterSaga(), registerSaga(), loginSaga()]);
}

export default rootReducer;