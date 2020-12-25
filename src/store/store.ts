import {createStore, applyMiddleware, combineReducers} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import logger from 'redux-logger';

import auth from './_reducers/auth';
import apps from './_reducers/apps';

const reducers = combineReducers({
  auth,
  apps,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(logger));

const persistor = persistStore(store);

export {store, persistor};

export default store;
