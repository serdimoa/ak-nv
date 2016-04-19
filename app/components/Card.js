/**
 * Created by serdimoa on 05.04.16.
 */
import React, { Component } from 'react';

export default class Card extends Component {
  constructor(props) {
    super(props);

    // Manually bind this method to the component instance...

  }

  render() {
    return (
        <div onClick="" className={ this.props.size }>
          <article className="card" style={{ backgroundImage:this.props.img }}>
            <h3>
              <span>{this.props.title}</span>
              <p>Читать подробнее</p>
            </h3>
            <div className="cover"></div>
          </article>
        </div>
    );
  }
}
Card.PropTypes = {
  size: React.PropTypes.number,
  img: React.PropTypes.string,
  title: React.PropTypes.string,
};
