/**
 * Created by serdimoa on 05.04.16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/index';
import Card from '../components/Card';
import CardInfo from '../components/CardInfo';
import {Motion, spring} from 'react-motion';
import _ from 'lodash';
import ScrollArea from 'react-scrollbar';

class Content extends Component {
  constructor(props) {
    super(props);

    // Manually bind this method to the component instance...
    this.handleCartClick = this.handleCartClick.bind(this);
  }

  handleCartClick() {
    console.log(this.props.cardOpen);
  }

  render() {
    const company = this.props.content.company;
    const { triggerSidebar } = this.props.Actions;
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
          <Card triggerSidebar={triggerSidebar} key={id} title={n.title} size={size}
                img={'url(' + n.img + ')'}/>
      );
    });

    return (
        <div>
          <section id="content" className="page-wrapper">
            <div className="full-width">
              {companyText}
            </div>
          </section>
          <Motion style={{ x: spring(this.props.opens ? 0 : 120) }}>
            {({ x }) =>
                <ScrollArea
                    speed={0.8}
                    className="aside"
                    contentClassName="aside"
                    horizontal={false}
                    smoothScrolling={true}
                    style={{
                      position: `fixed`,
                      right: 0,
                      zIndex:80,
                      top:0,
                      width: `50%`,
                      height:`100%`,
                      WebkitTransform: `translate3d(${x}%, 0, 0)`,
                      transform: `translate3d(${x}%, 0, 0)`,
                    }}>
                  < CardInfo />
                </ScrollArea>
            }
          </Motion>
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
