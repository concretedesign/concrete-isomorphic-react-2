import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class Page extends Component {

  render() {
    return (
      <div className="container">
        <Helmet title="Page"/>
        <h1>Page data goes here</h1>
      </div>
    );
  }
}
