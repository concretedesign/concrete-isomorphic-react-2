import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import {load} from 'redux/modules/page';

@connect(
    state => ({page: state.page.data}),
    dispatch => bindActionCreators({load}, dispatch))
export default class Page extends Component {
  static propTypes = {
    page: PropTypes.array,
    load: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className="container">
        <Helmet title="Page"/>
        <h1>Page data goes here</h1>
        <h2>{this.props.page ? this.props.page[0].title.rendered : 'no title'}</h2>
        // TODO: Group custom fields by namespace, iterate over them and load corresponding modules (or dump data if module not found)
      </div>
    );
  }
}
