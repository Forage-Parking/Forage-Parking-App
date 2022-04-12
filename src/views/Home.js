import React, { useEffect, useState } from 'react';
import { fetchSpots } from '../services/fetch';
import Map from '../components/Map';

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
      <div>
        FORAGE PARKING <br></br>The best parking app that ever existed!
        {spots.map((spot) => (
          <p key={spot.id}>{`${spot.id}, ${spot.details}`}</p>
        ))}
      </div>
      <div>
        <Map spots={spots} />
      </div>
    </>
  );
}
