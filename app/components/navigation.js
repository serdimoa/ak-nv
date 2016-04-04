/**
 * Created by dmitr on 04.04.2016.
 */

import React, { Component } from 'react';
import Image from '../../image/logomenu.svg';

export default class Navigation extends Component {
  render() {
    const open = this.props.opens;
    return (
        <nav id="navigation">
          <div className="row ">
            <div className="small-8 medium-5 large-5  columns ">
              <img src={Image} className="img-responsive" alt="logo image" />
            </div>
            <div className="small-2 medium-offset-5 medium-2 large-offset-5 large-2 float-right">
              <div className="Circle z-index-11" onClick={() => console.log('hello') }>
                <span className={!open ? 'menu-button is-active' : 'menu-button' } id="menuButton">
                  <span className="burger-icon"></span>
                </span>
              </div>
            </div>
          </div>
        </nav>
    );
  }
}

Navigation.PropTypes = {opens: React.PropTypes.boolean, };
