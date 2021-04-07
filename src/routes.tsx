import React, { ReactElement } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ComplexoIndex from './pages/Complexo';
import GalleryPage from './pages/Gallery';
import Index from './pages/Index';
import PanoramaPage from './pages/Panorama';
import VideoPage from './pages/Video';

function Routes(): ReactElement {
    return (
      <BrowserRouter>
        <Route path="/" exact component={ Index } />
        <Route path="/complexo" exact component={ ComplexoIndex } />
        <Route path="/video" exact component={ VideoPage } />
        <Route path="/gallery" exact component={ GalleryPage } />
        <Route path="/panorama" exact component={ PanoramaPage } />
      </BrowserRouter>
    );
  }
  export default Routes