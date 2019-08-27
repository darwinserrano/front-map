import { useContext, useEffect } from 'react'
import { connect } from 'react-redux'
import { loadPoints } from '../redux/points/actions';
import { MapContext } from './map/MapContext';
import L from 'leaflet';

export function Points({ points, loadPoints }) {
  const context = useContext(MapContext)

  useEffect(() => {
    loadPoints()
  }, [loadPoints])

  useEffect(() => {
    if (points.length === 0) return

    const ps = points.map((point) => {
      const p = L.marker([point.y, point.x])
      p.id = point.id
      return p
    })

    L.featureGroup(ps)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .on('click', (e) => {
        console.log('e.layer.attributes :', e.layer.id);
        const popup = e.target.getPopup();
        const chart_div = document.getElementById("graphdiv");
        popup.setContent(chart_div);
      })
      .addTo(context.map);

    // context.map.fitBounds(layerGroup.getBounds());
  }, [points, context.map])


  return (
    null
  )
}


const mapStateToProps = ({ points }) => ({
  points: points.items
})

const mapDispatchToProps = {
  loadPoints
}

export default connect(mapStateToProps, mapDispatchToProps)(Points)
