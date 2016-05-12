import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <Helmet title="Home Page"/>
        <h1>this is the home page</h1>
      </div>
    );
  }
}
