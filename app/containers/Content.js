/**
 * Created by serdimoa on 05.04.16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/index';
import Card from '../components/Card';
import CardInfo from '../components/CardInfo';
import _ from 'lodash';

class Content extends Component {
  render() {
    const company = this.props.content.company;
    console.log(company);
    let companyText = _.map(company, function (n, id) {
      let size;
      switch (n.size) {
        case 1:
          size = 'column small-12 medium-4 large-4';
          break;
        case 2:
          size = 'column small-12 medium-8 large-8';
          break;
        default:
          size = 'column small-12 medium-4 large-4';
      }
      return (
          <Card key={id} title={n.title} size={size} img={'url(' + n.img + ')'}/>
      );
    });

    return (
        <div>
          <section id="content" className="page-wrapper">
            <div className="full-width">
              {companyText}
            </div>
          </section>
          <CardInfo show={} />
        </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    content: state.content,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    Actions: bindActionCreators(Actions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
