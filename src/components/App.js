import React from 'react';
import Loadable from 'react-loadable';
import { Switch, Route, Redirect } from 'react-router-dom';

import Loader from './Layout/Loader';

const FlightSection = Loadable({
  loader: () => import(/* webpackChunkName: 'FlightList' */ './FlightList'),
  loading: () => <Loader loading={true} />
});

const App = () => (
  <Switch>
    <Route exact path="/" component={FlightSection} />
    <Redirect from="*" to={"/"} />
  </Switch>
);

export default App;
