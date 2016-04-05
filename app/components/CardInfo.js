/**
 * Created by serdimoa on 05.04.16.
 */
import React, { Component } from 'react';
import {Motion, spring} from 'react-motion';

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
        <Motion style={{ x:100 }}>
          {({ x }) =>
              <ScrollArea
                  speed={0.8}
                  className="aside"
                  contentClassName="aside"
                  horizontal={false}
                  smoothScrolling={true}
                  onScroll={this.handleScrolls}>

                <div className="info__body fadeInLeftBig"
                     style={{
                         WebkitTransform: `translate3d(${x}%, 0, 0)`,
                         transform: `translate3d(${x}%, 0, 0)`,
                       }}>
                  <div className="info-title">
                    <span className="underline">{ this.props.cardClass.Title }</span>
                  </div>
                  <button className="close" onClick={this.handleClick.bind(this)}>
                    <i className=" close-icon">
                    </i>
                  </button>
                  <div className="info-img">
                    <img src={this.props.cardClass.Info.Img } className=""
                         alt="logo image"/>
                  </div>
                  <div className="info-content">
                    <div className="row contact">
                      { this.props.cardClass.Info.Phone !== 'undefined' ? <Phone
                          Number={this.props.cardClass.Info.Phone}/> : '' }
                      { this.props.cardClass.Info.Url !== undefined ? <Url
                          Text={this.props.cardClass.Info.Url}/> : ''}
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
                      { this.props.cardClass.Info.Time !== 'undefined' ?
                          <Time Text={this.props.cardClass.Info.Time}/> : '' }
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

              </ScrollArea>
          }
        </Motion>
    );
  }
}
