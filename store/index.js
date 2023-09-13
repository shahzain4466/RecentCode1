import { createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const preloadedState = {};
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['loadingReducer'],
};

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
// if (__DEV__) middlewares.push(createLogger());
const persistedReducers = persistReducer(persistConfig, rootReducer);
const enhancers = applyMiddleware(...middlewares);

export const store = createStore(persistedReducers, preloadedState, enhancers);
export const persistor = persistStore(store);

export const clearReduxData = () => {
  return new Promise(async (resolve, reject) => {
    await persistor.flush()
    await persistor.purge()
    await persistor.flush()
    resolve({ status: "Clean success" })
  })
}
// clearReduxData()

sagaMiddleware.run(rootSaga);
