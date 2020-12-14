import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Langing from './pages/Landing';
import OngsMap from './pages/OngMap';
import Ong from './pages/Ong';
import CreateOng from './pages/CreateOng';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Langing} />
        <Route path="/app" component={OngsMap} />

        <Route path="/ongs/create" component={CreateOng} />
        <Route path="/ongs/:id" component={Ong} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
