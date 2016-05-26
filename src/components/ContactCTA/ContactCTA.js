import React, {Component, PropTypes} from 'react';

export default class ContactCTA extends Component {
  static propTypes = {
    data: PropTypes.object
  }

  render() {
    const {data} = this.props;

    return (
      <div className="contact-cta">
        <h3>This is the contact CTA</h3>
        <h4>{data.headline}</h4>
        <div><a href={data.email_address}>{data.email_address}</a></div>
      </div>
    );
  }
}
