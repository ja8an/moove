import './index.scss';
import { Container } from 'react-bootstrap';
import Header from '../../elements/header';
import React from "react";
import { Route } from 'react-router-dom';


const MainLayout = ({ component: Component, ...rest }) => {

  return (
    <Route {...rest} render={props => (
      <>
        <Header />
        <Container>
          <Component {...props} />
        </Container>
      </>
    )} />);
}

export default MainLayout;