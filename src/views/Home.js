import React, { useEffect, useState } from 'react';
import { fetchSpots } from '../services/fetch';
import Map from '../components/Map';
import styled from 'styled-components';

export default function Home() {
  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true);

  const CarImage = styled.img`
    height: 100px;
    width: 100px;
  `;

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
      <div>
        FORAGE PARKING <br></br>The best parking app that ever existed!
        {spots.map((spot) => (
          <div key={spot.id}>
            <p>{spot.Name}</p>
            <p>{spot.details}</p>
            <CarImage src={spot.image} />
          </div>
        ))}
      </div>
      <div>
        <Map spots={spots} />
      </div>
    </>
  );
}
