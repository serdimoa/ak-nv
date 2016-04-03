/**
 * Created by serdimoa on 03.04.16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from '../App/containers/App';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root'));
