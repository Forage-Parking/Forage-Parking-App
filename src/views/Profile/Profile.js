import React, { useState, useEffect } from 'react';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import Upload from '../../components/Upload/Upload';
import { fetchSignedUrl, getUserId } from '../../services/auth';

import { useHistory, useParams } from 'react-router-dom';
import { fetchProfileById, updateProfile } from '../../services/fetch';

import './Profile.css';

export default function Profile() {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [avatar_Url, setAvatar_Url] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [profileDetails, setProfileDetails] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [error, setError] = useState('');

  const params = useParams();
  const id = params.id;
  // const [profile_image, setProfile_image] = useState('');

  const user = getUserId();

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
      setFirstName(data1.firstName);
      setLastName(data1.lastName);
      setUsername(data1.username);
      setEmail(data1.email);
    };
    fetchData();
  }, [id]);
  const editBtn = async () => {
    setClicked(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const updates = {
        // user_id: user,
        first_name: firstName,
        last_name: lastName,
        username: username,
        email: email,
        image: avatar_Url,
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
    history.push('/');
  };
  loading && 'loading';

  return (
    <>
      <div className="profile-details">
        <p>{profileDetails.first_name}</p>
        <p>{profileDetails.last_name}</p>
        <p>{profileDetails.username}</p>
        <img src={profileDetails.image} />
        {/* <div className="edit-link">
          {currentUser && <Link to={`/dogs/${profile.id}/edit`}>Edit</Link>}{' '}
        </div> */}
      </div>
      <button onClick={editBtn}>Edit</button>
      <div>
        {clicked && (
          <ProfileForm
            {...{
              setFirstName,
              setLastName,
              setUsername,
              setEmail,
              handleSubmit,
            }}
          />
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
    </>
  );
}
