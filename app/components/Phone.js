/**
 * Created by serdimoa on 07.04.16.
 */
import React, { Component } from 'react';

export default class Phone extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="small-6 medium-6 large-6 column">
          <a href={'tel:' + this.props.Number.replace(/[^-0-9]/gim, '')} className="phone">
            <i className="icon-phone"/>
            <span>{this.props.Number}</span>
          </a>
        </div>
    );
  }
}

Phone.PropTypes = {
  Number:React.PropTypes.string,
};
