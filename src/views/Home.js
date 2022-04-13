import React, { useEffect, useState } from 'react';
import { fetchSpots } from '../services/fetch';
import Map from '../components/Map';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export default function Home() {
  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSpots();

      setSpots(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return 'loading';
  }
  return (
    <>
      <Wrapper>
        FORAGE PARKING <br></br>The best parking app that ever existed!
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '3em,',
          }}
        >
          {spots.map((spot) => (
            <SplideSlide key={spot.id}>
              <Card>
                <span>{spot.name}</span>
                <p>{spot.details}</p>
                <img src={spot.image} />
                <Gradient />
              </Card>
            </SplideSlide>
          ))}
        </Splide>
      </Wrapper>
      <MapContainer>
        <Map spots={spots} />
      </MapContainer>
    </>
  );
}
const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    /* position: absolute; */
    left: 0;
    width: 400px;
    height: 400px;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    position: absolute;
    z-index: 10;
    left: 50%;
    top: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    position: absolute;
    z-index: 10;
    top: 0;
  }
`;
