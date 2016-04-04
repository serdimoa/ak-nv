/**
 * Created by serdimoa on 03.04.16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import configureStore from './store/configureStore';
import Style from '../style/main.scss';
const store = configureStore();
import * as WebFont from 'webfontloader';

WebFont.load({
  typekit: {
    id: ['hnu0zvv'],
  },
});

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root'));
