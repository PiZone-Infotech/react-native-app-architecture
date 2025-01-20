/**
 * Redux Store
 * create redux store with middleware,
 * enhancers & root reducer
 * configure redux persist
 * @format
 */

import { configureStore as reduxConfigureStore, Tuple } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { persistRootReducer } from './root-reducer';
import { rootSaga } from './root-saga';

/*-----------[ configure store ]------------*/
function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  // New middleware can be added here
  const middleware = [sagaMiddleware];

  const store = reduxConfigureStore({
    reducer: persistRootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(sagaMiddleware),
  });

  const persistor = persistStore(store);

  // Run sagas
  sagaMiddleware.run(rootSaga);

  return { store, persistor };
}

export { configureStore };
