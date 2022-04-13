import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Map from '../../components/Map';
import { endReservation, fetchSpotById, mostRecent, newReservation } from '../../services/fetch';
import { useBasicContext } from '../../context/BasicContext';
import { getUserId } from '../../services/auth';

export default function SpotDetail() {
  const [spot, setSpot] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');
  const { id } = useParams();
  const history = useHistory();
  const [available, setAvailable] = useState('');

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

  const returnSpot = async () => {
    // await endReservation();
    const data = await mostRecent(spot.id);
    await endReservation(data.id);
  };

  const isAvailable = async () => {
    const data = await mostRecent(spot.id);
    console.log((data.end_time !== null));
    return (data.end_time !== null);
  };

  // if (loading) return <h1>Loading Details<h1/>;

  return (
    <div className="SpotDetails">
      {error && <p>{error}</p>}

      <div key={spot.id}>
        {/* <img src = placeholder/> */}
        <p>{spot.name}</p>
        <p>{spot.price}</p>
        <p>{spot.size}</p>
        <p>{spot.details}</p>
        {/* <p>{spot.available}</p> */}
      </div>


      {isAvailable() && <button onClick={onReserve}>Reserve Spot</button>}

      <button onClick={returnSpot}>Return Spot</button>

      {/* <div>
        <Map />
      </div> */}
    </div>
  );
}