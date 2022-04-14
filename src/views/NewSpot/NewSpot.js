import React, { useState, useEffect, useRef } from 'react';
import SpotForm from '../../components/SpotForm/SpotForm';
import Upload from '../../components/Upload/Upload';
import { fetchSignedUrl, getUserId } from '../../services/auth';
import { client } from '../../services/client';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import mapboxgl from '!mapbox-gl';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import SpotFormV2 from '../../components/SpotForm/SpotFormV2';

export default function NewSpot() {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [avatar_Url, setAvatar_Url] = useState(null);
  const [size, setSize] = useState('compact');
  const [details, setDetails] = useState('');
  const [nickname, setNickname] = useState('');
  const [price, setPrice] = useState('5');
  const [loading, setLoading] = useState(false);

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lat, setLat] = useState(45.523064);
  const [lng, setLng] = useState(-122.676483);
  const [zoom, setZoom] = useState(9);
  const history = useHistory();

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
  }, []);

  useEffect(() => {
    if (!map.current) return;
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  const user = getUserId();
  useEffect(() => {
    const fetchUrl = async () => {
      const data = await fetchSignedUrl(avatarUrl);
      setAvatar_Url(data.signedURL);
    };
    fetchUrl();
  }, [avatarUrl]);

  // const [avatar_url, setAvatar_Url] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const updates = {
        created_at: new Date(),
        owner_id: user,
        details: details,
        size: size,
        price: price,
        image: avatar_Url,
        name: nickname,
        lat: lat,
        lng: lng,
      };
      let { error } = await client.from('parking-spots').upsert(updates, { returning: 'minimal' });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
    history.push('/');
  };
  loading && 'loading';
  return (
    <>
      <div>
        <Container>
          <Smap ref={mapContainer} />
        </Container>
        <SpotForm
          {...{
            setSize,
            setDetails,
            setNickname,
            setPrice,
            handleSubmit,
          }}
        />
      </div>
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
