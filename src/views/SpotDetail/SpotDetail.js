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
  const [available, setAvailable] = useState(false);
  const [recentRes, setRecentRes] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await fetchSpotById(id);
        setSpot(data);

        const recent = await mostRecent(id);
        setRecentRes(recent[0] || {});
        setAvailable(recent.length === 0 || recent[0].end_time ? true : false);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };
    getData();
  }, [id]);
  // load the spot by unique id
  // load the most recent reservation
  // two buttons reserver spot if end_time in true and return spot if false
  // setState available true/false depending on end_time of most recent reservation
  //

  if (loading) return <h1>Loading Details</h1>;

  // renter_id is coming back undefined and we need to have it for a comparison
  const onReserve = async () => {
    // create a new reservation newReservation(spot_id, renter_id)
    // update available
    setLoading(true);
    const newRes = await newReservation(spot.id, getUserId());
    console.log('newRes', newRes);
    setAvailable(false);
    setRecentRes(newRes);
    setLoading(false);
    alert('You have reserved this spot.');
  };

  const returnSpot = async () => {
    // get most reservation by spot
    // update end_time - endReservation()
    // update available
    const recent = await mostRecent(spot.id);
    const resData = await endReservation(recent[0].id);
    setAvailable(true);
    setRecentRes(resData);
    alert('You have returned this spot.');
    history.push('/');
  };

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

      {console.log('userId', getUserId())}
      {console.log('renterId', recentRes.renter_id)}
      {available && <button onClick={onReserve}>Reserve Spot</button>}
      {recentRes.renter_id && !available && getUserId() === recentRes.renter_id && (
        <button onClick={returnSpot}>Return Spot</button>
      )}
      {!available && getUserId() !== recentRes.renter_id && (
        <p>This Spot is Unavailable. Please Try Another Spot</p>
      )}

      {/* {available && <button onClick={onReserve}>Reserve Spot</button>}
      {!available && getUserId() === recentRes.renter_id ? 
        <button onClick={returnSpot}>Return Spot</button>
        : !available && getUserId() !== recentRes.renter_id && <p>This Spot is Unavailable. Please Try Another Spot</p>} */}

      {/* <div>
        <Map />
      </div> */}
    </div>
  );
}
