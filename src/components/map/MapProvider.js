import React, { useState } from 'react'
import { MapContext } from './MapContext';

export default function MapProvider({ children }) {

  const [map, setMap] = useState(null)

  const value = { map, setMap }

  return (
    <MapContext.Provider value={value}>
      {children}
    </MapContext.Provider>
  )
}