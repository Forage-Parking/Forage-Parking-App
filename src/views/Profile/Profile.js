import React, { useState, useEffect } from 'react';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import Upload from '../../components/Upload/Upload';
import { fetchSignedUrl, getUserId } from '../../services/auth';

import { useParams } from 'react-router-dom';
import {
  fetchProfileById,
  fetchSpotsByOwnerId,
  updateProfile,
  deleteRes,
  deleteSpot,
} from '../../services/fetch';

import './Profile.css';
import { useProfileContext } from '../../context/ProfileContext';

export default function Profile() {
  const userId = getUserId();
  const params = useParams();
  const id = params.id;
  // const [avatarUrl, setAvatarUrl] = useState(null);
  // const [avatar_Url, setAvatar_Url] = useState(null);
  // const [firstName, setFirstName] = useState('');
  const { firstName, setFirstName,
    lastName, setLastName,
    username, setUsername,
    email, setEmail,
    loading, setLoading,
    avatarUrl, setAvatarUrl,
    clicked, setClicked, 
    error,
    spots, setSpots } = useProfileContext();

   
  // const [lastName, setLastName] = useState('');
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [loading, setLoading] = useState(false);

  // const [profileDetails, setProfileDetails] = useState([]);
  // const [clicked, setClicked] = useState(false);
  // const [error, setError] = useState('');
  // const [spots, setSpots] = useState([]);


  // const [profile_image, setProfile_image] = useState('');

  // const userId = getUserId();
  // console.log(userId);

  // useEffect(() => {
  //   const fetchUrl = async () => {
  //     const data = await fetchSignedUrl(avatarUrl);
  //     setAvatar_Url(data.signedURL);
  //   };
  //   fetchUrl();
  // }, [avatarUrl]);

  useEffect(() => {
    const fetchData = async () => {
      const data1 = await fetchProfileById(id);

      // setProfileDetails(data1);
      setFirstName(data1.first_name);
      setLastName(data1.last_name);
      setUsername(data1.username);
      setEmail(data1.email);
      setAvatarUrl(data1.image);
    };
    fetchData();
  }, [id, setFirstName, setLastName, setUsername, setEmail, setAvatarUrl]);

  useEffect(() => {
    const fetchData = async () => {
      const data2 = await fetchSpotsByOwnerId(userId);

      setSpots(data2);
    };
    fetchData();
  }, [userId, setSpots]);

  const editBtn = async () => {
    {clicked ? setClicked(false) : setClicked(true);}
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const updates = {
        // user_id: user,
        id: id,
        first_name: firstName,
        last_name: lastName,
        username: username,
        email: email,
        image: avatarUrl,
      };
      await updateProfile(updates);

      // let { error } = await client.from('profiles').update(updates, { returning: 'minimal' });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
    alert('Successfully updated profile');
  };
  loading && 'loading';

  const handleDelete = async (spot_id) => {
    await deleteRes(spot_id);
    await deleteSpot(spot_id);

    const resp = await fetchSpotsByOwnerId(userId);
    setSpots(resp);
  };

  return (
    <>
      <div className="profile-details">
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{username}</p>
        <p>{email}</p>
        <img src={avatarUrl} />
        {/* <div className="edit-link">
          {currentUser && <Link to={`/dogs/${profile.id}/edit`}>Edit</Link>}{' '}
        </div> */}
      </div>
      <button onClick={editBtn}>Edit</button>
      <div>
        {clicked && (
          <ProfileForm/>
        )}
      </div>

      {/* <div>
        {clicked && (
          <Upload
            url={avatarUrl}
            size={150}
            onUpload={(url) => {
              setAvatarUrl(url);
            }}
          /> */}
      {/* )} */}
      {/* {/* </div> */}
      <div>
        {spots.map((spot) => (
          <div key={spot.id}>
            <p>{spot.name}</p>
            <p>{spot.details}</p>
            <img src={spot.image} />
            <button onClick={() => handleDelete(spot.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}
