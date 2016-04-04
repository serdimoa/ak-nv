/**
 * Created by dmitr on 04.04.2016.
 */

import React, { Component } from 'react';
import Image from '../../image/logomenu.svg';
import {Motion, spring} from 'react-motion';
import _ from 'lodash';

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    // Manually bind this method to the component instance...
    this.onNavigationClick = this.onNavigationClick.bind(this);
  }

  onNavigationClick(e) {
    this.props.showMenu(this.props.opens ? false : true);
  };

  render() {
    const open = this.props.opens;
    const menuText = this.props.menuText;
    let navigationData = _.map(menuText, function (n, id) {
      return (
          <li key={id}>
            <a href={n.url}>{n.text}</a>
          </li>
      );
    });

    return (
        <div>
          <Motion style={{ x: spring(open ? 0 : 100) }}>
            {({ x }) =>
                <nav id="navigation">
                  <div className="row ">
                    <div  className="small-8 medium-5 large-5  columns ">
                      <img src={Image} className={open ? 'display-none' : 'display-block img-responsive'} alt="logo image"/>
                    </div>
                    <div
                        className="small-2 medium-offset-5 medium-2 large-offset-5 large-2 float-right">
                      <div className="Circle z-index-11" onClick={::this.onNavigationClick}>
                <span className={open ? 'menu-button is-active' : 'menu-button' } id="menuButton">
                  <span className="burger-icon"> </span>
                </span>
                      </div>
                    </div>
                  </div>
                </nav>
            }
          </Motion>
          <Motion defaultStyle={{ x: 0.0 }} style={{ x: spring(open ? 1.0 : 0.0) }}>
            {({ x }) =>
                <div style={{ opacity:x }} id="navigation-open"
                     className={open ? 'is-active z-index-10' : 'is-inactive' }>
                  <div className="row">
                    <div className="small-4  medium-4 large-4 float-center">
                      <img src={Image} className="" alt="logo image"/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="menu-centered">
                      <ul className="menu vertical">
                        {navigationData}
                      </ul>
                    </div>
                  </div>
                </div>
            }
          </Motion>
        </div>

    );
  }
}

Navigation.PropTypes = { opens: React.PropTypes.boolean, menuText: React.PropTypes.object };
