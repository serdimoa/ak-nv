/**
 * Created by serdimoa on 02.04.16.
 */
import 'babel-polyfill';

import React from 'react';
import styles from './App.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { test: 'foo' };
  }

  render() {
    return (
        <div>
          bar
        </div>
    );
  }
}
