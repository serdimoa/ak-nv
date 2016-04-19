/**
 * Created by serdimoa on 07.04.16.
 */
import React, { Component } from 'react';

export default class Url extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="small-6 medium-6 large-6 column">
          <a target="_blank" href={'http://' + this.props.Text} className="url">
            <i className="icon-url"/>
            <span>{this.props.Text}</span>
          </a>
        </div>
    );
  }
}

Url.PropTypes = {
  Text:React.PropTypes.string,
};
