/**
 * Created by serdimoa on 05.04.16.
 */
import React, { Component } from 'react';
import Url from './Url';
import Time from './Time';
import Phone from './Phone';
export default class CardInfo extends Component {

  static scrollTops() {
    //console.log(this);
    this.handleClick();
  }

  handleTop() {
    this.context.scrollArea.scrollTop();
  }

  componentWillReceiveProps(property) {
  }

  handleClick():void {
  }

  handleScrolls(ScrollData) {
  }

  render() {
    return (
          <div className="info__body fadeInLeftBig">

            <div className="info-title">
              <span className="underline">Title</span>
            </div>
            <button className="close" onClick={this.handleClick.bind(this)}>
              <i className=" close-icon">
              </i>
            </button>
            <div className="info-img">
              <img src="this.props.cardClass.Info.Img " className=""
                   alt="logo image"/>
            </div>
            <div className="info-content">
              <div className="row contact">
                <Phone Number="Phone"/>
                <Url Text="Url"/>
              </div>
              <div className="row">
                <p className="about">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
                <Time Text="Time"/>
                <p className="about">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                  eu
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                  in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
              </div>
            </div>
          </div>
    );
  }
}
