import React, { ReactElement } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ComplexoIndex from './pages/Complexo';
import Index from './pages/Index';

function Routes(): ReactElement {
    return (
      <BrowserRouter>
      <Route path="/" exact component={ Index } />
      <Route path="/complexo" exact component={ ComplexoIndex } />
      </BrowserRouter>
    );
  }
  export default Routes