import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from '../routes';
// getting all the defined routes from routes.js

export default class AppRoutes extends React.Component {
  render() {
    return (
      <Router history={browserHistory} routes={routes} onUpdate={() => window.scrollTo(0, 0)}/>
      // onUpdate function here resets the scrolling of the window to the top every
      // time a link is clicked 
    );
  }
}
