import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';
import styled from 'styled-components';
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_PUBLIC_TOKEN;

export default function SpotSearch() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lat, setLat] = useState(45.523064);
  const [lng, setLng] = useState(-122.676483);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });
  });
  return (
    <div>
      <Smap ref={mapContainer} />
    </div>
  );
}
const Smap = styled.div`
  height: 400px;
  width: 400px;
`;
