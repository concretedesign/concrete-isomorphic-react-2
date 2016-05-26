import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import {load} from 'redux/modules/page';
import {loadModules} from 'utils/acf-loader';

@connect(
    state => ({page: state.page.data}),
    dispatch => bindActionCreators({load}, dispatch))
export default class Page extends Component {
  static propTypes = {
    page: PropTypes.array,
    load: PropTypes.func.isRequired
  }

  render() {
    const page = this.props.page ? this.props.page[0] : false;
    if (!page) return (<div></div>);

    const modules = loadModules((page.acf && page.acf.content) ? page.acf.content : []);
    console.log('modules');

    return (
      <div className="container">
        <Helmet title="Page"/>
        <h1>Page data goes here</h1>
        <h2>{page ? page.title.rendered : 'no title'}</h2>
        {modules}
      </div>
    );
  }
}
