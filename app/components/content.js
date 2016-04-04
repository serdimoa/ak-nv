/**
 * Created by dmitr on 04.04.2016.
 */

import React, { PropTypes, Component } from 'react';
import ScrollArea from 'react-scrollbar';

export default class Content extends Component {
  render() {
    const { content } = this.props;
    return (
        <div>
          <p>Привет, {content}!</p>
        </div>
    );
  }
}

Content.propTypes = {
  content: React.PropTypes.string,
};
