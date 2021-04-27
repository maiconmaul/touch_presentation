import React, { ReactElement } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ComplexoCommonAreasPage from './pages/CommonAreas';
import ComplexoIndex from './pages/Complexo';
import GalleryPage from './pages/Gallery';
import HighlineIndex from './pages/Highline';
import HighlineProjectPage from './pages/Highline/Project';
import Index from './pages/Index';
import PanoramaPage from './pages/Panorama';
import ProjectPage from './pages/Project';
import CondominiumsPage from './pages/Condominiums';
import VideoPage from './pages/Video';
import VideoFullPage from './pages/VideoFull';
import VirtualTourPage from './pages/VirtualTour';
import HighlineUnitsPage from './pages/Highline/Units';
import HighlineGalleryPage from './pages/Highline/Gallery';
import LocationPage from './pages/Location';
import HighlineCommonAreasPage from './pages/Highline/CommonArea';
import EllipseIndex from './pages/EllipseTower';
import EllipseProjectPage from './pages/EllipseTower/Project';
import EllipseGalleryPage from './pages/EllipseTower/Gallery';
import MillenniumIndex from './pages/Millennium';
import MillenniumProjectPage from './pages/Millennium/Project';
import MillenniumCommonAreasPage from './pages/Millennium/CommonArea';
import MillenniumGalleryPage from './pages/Millennium/Gallery';
import MillenniumUnitsPage from './pages/Millennium/Units';

function Routes(): ReactElement {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Index} />
      <Route path="/complexo" exact component={ComplexoIndex} />
      <Route path="/video" exact component={VideoPage} />
      <Route path="/videofull" exact component={VideoFullPage} />
      <Route path="/gallery" exact component={GalleryPage} />
      <Route path="/panorama" exact component={PanoramaPage} />
      <Route path="/tour-virtual" exact component={VirtualTourPage} />
      <Route path="/complexo/projeto" component={ProjectPage} />
      <Route path="/unidades" component={CondominiumsPage} />
      <Route path="/areascomuns" component={ComplexoCommonAreasPage} />
      <Route path="/localizacao" component={LocationPage} />
      {/* HIGHLINE */}
      <Route path="/highline" exact component={HighlineIndex} />
      <Route path="/highline/projeto" component={ HighlineProjectPage } />
      <Route path="/highline/areascomuns" exact component={ HighlineCommonAreasPage } />
      <Route path="/highline/areascomuns/galeria/:id/:index" component={ HighlineGalleryPage } />
      <Route path="/highline/unidades" component={HighlineUnitsPage} />
      {/* ELLIPSE */}
      <Route path="/ellipse" exact component={EllipseIndex} />
      <Route path="/ellipse/projeto" component={ EllipseProjectPage } />
      {/* <Route path="/ellipse/areascomuns" exact component={ EllipseCommonAreasPage } /> */}
      <Route path="/ellipse/galeria/:id/:index" component={ EllipseGalleryPage } />
      {/* <Route path="/ellipse/unidades" component={EllipseUnitysPage} /> */}
      {/* MILLENNIUM */}
      <Route path="/millennium" exact component={MillenniumIndex} />
      <Route path="/millennium/projeto" component={ MillenniumProjectPage } />
      <Route path="/millennium/areascomuns" exact component={ MillenniumCommonAreasPage } />
      <Route path="/millennium/galeria/:id/:index" component={ MillenniumGalleryPage } />
      <Route path="/millennium/unidades" component={MillenniumUnitsPage} />

      
      {/* <Redirect to="/" /> */}
    </BrowserRouter>
  );
}
export default Routes