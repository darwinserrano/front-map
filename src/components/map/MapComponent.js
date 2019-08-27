import React from 'react'
import { MapContext } from './MapContext';
import MapCreator from './MapCreator';


export default function MapComponent() {
  return (
    <MapContext.Consumer>
      {({ map, setMap }) => <MapCreator map={map} setMap={setMap} />}
    </MapContext.Consumer>
  )
}
