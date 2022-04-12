import { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';
import styled from 'styled-components';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { fetchSpots } from '../services/fetch';
import { useHistory } from 'react-router-dom';
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_PUBLIC_TOKEN;

export default function Map({ spots }) {
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
    spots.map((spot) => {
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<a href=/spots/detail/${spot.id}>${spot.details}</a>`
      );
      new mapboxgl.Marker()
        .setLngLat([spot.longitutue, spot.lattitude])
        .setPopup(popup)
        .addTo(map.current);
    });
  });
  useEffect(() => {
    const geocoder = new MapboxGeocoder({
      accessToken: process.env.REACT_APP_MAPBOX_PUBLIC_TOKEN,
      marker: {
        color: 'orange',
      },
      mapboxgl: mapboxgl,
    });
    map.current.addControl(geocoder);
    setLng(map.current.getCenter().lng.toFixed(4));
    setLat(map.current.getCenter().lat.toFixed(4));
    setZoom(map.current.getZoom().toFixed(2));
  }, []);

  useEffect(() => {
    if (!map.current) return;
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });
  return (
    <>
      <div>
        <span>
          {lat}:{lng}
        </span>
      </div>
      <div>
        <Smap ref={mapContainer} />
      </div>
    </>
  );
}
const Smap = styled.div`
  height: 400px;
  width: 400px;
`;
