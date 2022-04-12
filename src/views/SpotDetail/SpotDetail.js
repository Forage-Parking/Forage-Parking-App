import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Map from '../../components/Map';
import { fetchSpotById, newReservation } from '../../services/fetch';
import { useBasicContext } from '../../context/BasicContext';
import { getUserId } from '../../services/auth';

export default function SpotDetail() {
  const [spot, setSpot] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchSpotById(id);
        setSpot(resp);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [id]);

  const onReserve = async () => {
    const resp = await newReservation(id, getUserId());
  };

  // if (loading) return <h1>Loading Details<h1/>;

  return (
    <div className="SpotDetails">
      {error && <p>{error}</p>}

      <div key={spot.id}>
        {/* <img src = placeholder/> */}
        <p>{spot.Name}</p>
        <p>{spot.price}</p>
        <p>{spot.size}</p>
        <p>{spot.details}</p>
        {/* <p>{spot.available}</p> */}
      </div>

      <button onClick={onReserve}>Reserve Spot</button>

      {/* <div>
        <Map />
      </div> */}
    </div>
  );
}
