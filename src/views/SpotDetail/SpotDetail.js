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
    const getData = async () => {
      const data = await fetchSpotById(id);
      setSpot(data);

      const recent = await mostRecent(id);
      setAvailable(recent.end_time ? true : false);
    };
    getData();
  }, [id]);
  // load the spot by unique id
  // load the most recent reservation
  // two buttons reserver spot if end_time in true and return spot if false
  // setState available true/false depending on end_time of most recent reservation
  //

  // if (loading) return <h1>Loading Details</h1>;

  const onReserve = () => {};
  const returnSpot = () => {};

  return (
    <div className="SpotDetails">
      {error && <p>{error}</p>}
      <h1>{available}</h1>
      <div key={spot.id}>
        {/* <img src = placeholder/> */}
        <p>{spot.name}</p>
        <p>{spot.price}</p>
        <p>{spot.size}</p>
        <p>{spot.details}</p>
        {/* <p>{spot.available}</p> */}
      </div>

      {available ? (
        <button onClick={onReserve}>Reserve Spot</button>
      ) : (
        <button onClick={returnSpot}>Return Spot</button>
      )}

      {/* <div>
        <Map />
      </div> */}
    </div>
  );
}
