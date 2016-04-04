import React from 'react';
import { IndexRoute, Route } from 'react-router';
import {
    App,
    Page,
    About,
    NotFound,
  } from 'containers';

export default () => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Main route */ }
      <IndexRoute component={Page}/>

      { /* Routes */ }
      <Route path="about" component={About}/>

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
