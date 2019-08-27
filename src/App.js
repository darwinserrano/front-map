import React from 'react';
import './App.css';
import StartSession from './components/StartSession';
import Usuario from './components/Usuario';
import { Container } from 'reactstrap';
import MapProvider from './components/map/MapProvider';
import MapComponent from './components/map/MapComponent';
import Points from './components/Points';
import { MapContext } from './components/map/MapContext';

import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function App() {
  return (
    <MapProvider>
      <div className="App">
        <Container>
          <StartSession />
          <Usuario />
          <div style={{ width: '100%', height: 800 }}>
            <MapComponent />
          </div>
          <MapContext.Consumer>
            {({ map }) => (map && <React.Fragment>
              <Points />
            </React.Fragment>)}
          </MapContext.Consumer>
        </Container>
      </div>
    </MapProvider>
  );
}

export default App;
