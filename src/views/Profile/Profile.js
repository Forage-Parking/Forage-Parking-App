import React, { useEffect } from 'react';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import Upload from '../../components/Upload/Upload';
import { Button, Image, Paragraph, Grid } from 'grommet';
import styled from 'styled-components';

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
import { client } from '../../services/client';

export default function Profile() {
  const userId = getUserId();
  const params = useParams();
  const id = params.id;
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    username,
    setUsername,
    email,
    setEmail,
    loading,
    setLoading,
    avatarUrl,
    setAvatarUrl,
    clicked,
    setClicked,
    avatar_Url,
    setAvatar_Url,
    spots,
    setSpots,
  } = useProfileContext();

  useEffect(() => {
    const fetchUrl = async () => {
      const data = await fetchSignedUrl(avatarUrl);
      setAvatar_Url(data.signedURL);
    };
    fetchUrl();
  }, [avatarUrl, setAvatar_Url]);

  useEffect(() => {
    const fetchData = async () => {
      const data1 = await fetchProfileById(`${id}`); //added template Literal Watch out

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
    {
      clicked ? setClicked(false) : setClicked(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const updates = {
        id: id,
        first_name: firstName,
        last_name: lastName,
        username: username,
        email: email,
        image: avatar_Url,
      };
      await updateProfile(updates);

      const data1 = await fetchProfileById(id);
      setAvatarUrl(data1.image);

      let { error } = await client.from('profiles').upsert(updates, { returning: 'minimal' });

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
    <Grid>
      <Grid>
        <Image src={avatarUrl} />
        <Paragraph>{` ${firstName} ${lastName}`}</Paragraph>

        <Paragraph>Username: {username}</Paragraph>
        <Paragraph>Email: {email}</Paragraph>
      </Grid>
      <ButtonColor label="Edit Profile" onClick={editBtn} />
      <div>{clicked && <ProfileForm {...{ handleSubmit }} />}</div>

      <div>
        {clicked && (
          <Upload
            url={avatarUrl}
            size={150}
            onUpload={(url) => {
              setAvatarUrl(url);
            }}
          />
        )}
      </div>
      <Grid>
        <Paragraph>Your Owned Parking Spots</Paragraph>
        {spots.map((spot) => (
          <div key={spot.id}>
            <Paragraph>{spot.name}</Paragraph>
            <Paragraph>{spot.details}</Paragraph>
            <Image src={spot.image} />
            <ButtonColor label="Delete" onClick={() => handleDelete(spot.id)} />
          </div>
        ))}
      </Grid>
    </Grid>
  );
}
const ButtonColor = styled(Button)`
  color: #f4f1de;
`;
