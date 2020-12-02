import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {reactotronRedux as reduxPlugin} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';

import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import reducers from './ducks';

const ReactotronConfig = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: 'APP',
    host: '192.168.0.211',
  })
  .useReactNative()
  .use(reduxPlugin())
  .use(sagaPlugin());

if (__DEV__) {
  ReactotronConfig.connect();
  ReactotronConfig.clear();
}

const sagaMonitor = ReactotronConfig.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({sagaMonitor});

const middleware = [sagaMiddleware];

const appReducer = reducers;

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, appReducer);

const store = createStore(
  persistedReducer,
  composeWithDevTools(
    applyMiddleware(...middleware),
    Reactotron.createEnhancer(),
  ),
);

sagaMiddleware.run(sagas);

export const persistor = persistStore(store);

export default store;
