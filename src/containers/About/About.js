import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class About extends Component {

  render() {
    const kitten = require('./kitten.jpg');
    return (
      <div className="container">
        <p>
          Custom template
        </p>

        <div><img src={kitten}/></div>
      </div>
    );
  }
}
