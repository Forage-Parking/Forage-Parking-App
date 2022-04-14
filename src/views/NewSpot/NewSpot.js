import React, { useEffect, useRef } from 'react';
import SpotForm from '../../components/SpotForm/SpotForm';
import Upload from '../../components/Upload/Upload';
import { fetchSignedUrl } from '../../services/auth';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import mapboxgl from '!mapbox-gl';
import styled from 'styled-components';
import { useSpotFormContext } from '../../context/SpotFormContext';

export default function NewSpot() {
  const { 
    avatarUrl, 
    setAvatarUrl, 
    setAvatar_Url,
    loading,
    zoom, 
    setZoom,
    lng,
    setLng,
    lat,
    setLat, } = useSpotFormContext();

  const mapContainer = useRef(null);
  const map = useRef(null);


  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    });

    const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`<p>your new spot</p>`);
    new mapboxgl.Marker().setLngLat([lng, lat]).setPopup(popup).addTo(map.current);
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
  }, [setLat, setLng, setZoom]);

  useEffect(() => {
    if (!map.current) return;
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  useEffect(() => {
    const fetchUrl = async () => {
      const data = await fetchSignedUrl(avatarUrl);
      setAvatar_Url(data.signedURL);
    };
    fetchUrl();
  }, [avatarUrl, setAvatar_Url]);

  // const [avatar_url, setAvatar_Url] = useState(null);

  loading && 'loading';
  return (
    <>
      <div>
        <SpotForm />
      </div>
      <Container>
        <Smap ref={mapContainer} />
      </Container>
      <div>
        <Upload
          url={avatarUrl}
          size={150}
          onUpload={(url) => {
            setAvatarUrl(url);
          }}
        />
      </div>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Smap = styled.div`
  height: 400px;
  width: 400px;
`;
