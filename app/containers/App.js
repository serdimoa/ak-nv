/** *******************************
 * Created by serdimoa on 03.04.16.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Content from '../containers/Content';
import Navigation from '../components/navigation';
import Header from '../components/Header';
import DevTools from './devTools';
import * as Actions from '../actions/index';

class App extends Component {
  render() {
    const properties = this.props;
    const { showMenu } = this.props.Actions;
    return (
        <div>
          <Header />
          <Navigation showMenu={showMenu} menuText={properties.menu.items} opens={properties.menu.open}/>
          <Content cardOpen={properties.content.cardOpen } />
          <DevTools  />
        </div>

    );
  }
}
//

function mapStateToProps(state) {
  return {
    menu: state.menu,
    content: state.content,
    cardOpen:state.cardOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(Actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

