/** *******************************
 * Created by serdimoa on 03.04.16.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Content from '../components/content';
import Navigation from '../components/navigation';
import DevTools from './DevTools';

class App extends Component {
  render() {
    const properties = this.props;
    return (
        <div>
          <Navigation opens={properties.menu.open}/>
          <Content content='hello'/>
          <DevTools />
        </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    menu: state.menu,
    content: state.content,
  };
}

export default connect(mapStateToProps)(App);

