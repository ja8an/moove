import './index.scss';
import { Badge, Container, Jumbotron } from 'react-bootstrap';
import Header from '../../elements/header';
import React, { useMemo, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from '../../pages/home';
import Search from '../../pages/search';


function MainLayout({ children }) {
  return (<Router>
    <Header />
    <Container>
      <Switch>
        <Route path={'/'} exact>
          <Home />
        </Route>
        <Route path={'/search'} render={props => <Search {...props}/>}/>
      </Switch>
    </Container>
  </Router >
  );
}

export default MainLayout;