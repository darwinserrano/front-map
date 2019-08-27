import React, { useEffect } from 'react'
import L from 'leaflet'

export default function MapCreator({ setMap }) {

  useEffect(() => {
    const coord = {
      x: -70.679534,
      y: -33.470458
    }
    const map = L.map('map').setView([coord.y, coord.x], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    setMap(map)
  }, [setMap])

  return (
    <div id="map" style={{ width: '100%', height: '100%' }}></div>
  )
}