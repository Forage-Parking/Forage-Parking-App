import React, { useEffect, useState } from 'react';
import { fetchSpots } from '../services/fetch';

export default function Home() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSpots();
      console.log(data);
      setSpots(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      FORAGE PARKING <br></br>The best parking app that ever existed!
      {spots.map((spot) => (
        <p key={spot.id}>{`${spot.id}, ${spot.details}`}</p>
      ))}
    </div>
  );
}
