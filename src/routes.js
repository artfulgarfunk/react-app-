import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import AthletePage from './components/AthletePage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
  // line 9, lets you use the layout in every section of the application
  // all the routes are nested inside the main Route component
    <IndexRoute component={IndexPage}/>
  // IndexRoute..a child route used to define the component (IndexPage) that will be rendered
  // when viewing the index page of the parent route ('/')
    <Route path="athlete/:id" component={AthletePage}/>
  // this makes a route that will match ALL the paths with the prefix /athlete/.
  // id will be available inside the component as this.props.params.id
    <Route path="*" component={NotFoundPage}/>
  // match all route...every OTHER route goes to the notfoundpage
  </Route>
);

export default routes;
