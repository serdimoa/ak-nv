/**
 * Created by serdimoa on 03.04.16.
 */
import { createStore, applyMiddleware } from 'redux';
import Menu from '../reducers/Menu';

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
