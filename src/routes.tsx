import React, { ReactElement } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ComplexoIndex from './pages/Complexo';
import Index from './pages/Index';
import VideoPage from './pages/Video';

function Routes(): ReactElement {
    return (
      <BrowserRouter>
      <Route path="/" exact component={ Index } />
      <Route path="/complexo" exact component={ ComplexoIndex } />
      <Route path="/video" exact component={ VideoPage } />
      </BrowserRouter>
    );
  }
  export default Routes