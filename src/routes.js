import React from 'react';
import { IndexRoute, Route } from 'react-router';
import {
    App,
    Home,
    About,
    Page,
    NotFound,
  } from 'containers';

export default () => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home route */ }
      <IndexRoute component={Home}/>

      { /* Other Page Routes */ }
      <Route path="about" component={About}/>

      { /* Catchall pages */}
      <Route path="/:page" component={Page}/>

      { /* Catch all route */ }
      { /* FIXME: We may want catchall to try to load a page by slug and have
        the template sent from the server, then redirect to 404 if not found on server */}
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
