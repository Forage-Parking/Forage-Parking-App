import React, { useEffect, useState } from 'react';
import { fetchSpots } from '../services/fetch';
import Map from '../components/Map';

export default function Home() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSpots();

      setSpots(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        FORAGE PARKING <br></br>The best parking app that ever existed!
        {spots.map((spot) => (
          <p key={spot.id}>{`${spot.id}, ${spot.details}`}</p>
        ))}
      </div>
      <div>
        <Map />
      </div>
    </>
  );
}
