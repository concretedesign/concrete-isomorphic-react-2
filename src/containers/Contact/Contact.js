import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class Contact extends Component {

  render() {
    return (
      <div className="container">
        <Helmet title="Contact page" />
        <h1>contact</h1>
        <p>Custom template for contact page</p>
      </div>
    );
  }
}
