/**
 * Created by serdimoa on 07.04.16.
 */
import React, { Component } from 'react';

export default class Time extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="small-12 medium-12 large-12 column">
          <div className="time">
            <i className="icon-time"/>
            <span>{this.props.Text}</span>
          </div>
        </div>
    );
  }
}

Time.PropTypes = {
  Text:React.PropTypes.string,
};
