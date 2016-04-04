/**
 * Created by serdimoa on 04.04.16.
 */

import React, { Component } from 'react';

export default class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <header id="header">
          <div className="row center-vertical">
            <div className="container-medium float-center">
              <h1 className="section-title">
                <span>Самый крупный торговый центр автозапчастей в Нижневартовске</span>
              </h1>
            </div>
          </div>
        </header>
    );
  }
}
