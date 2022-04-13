import React, { useState, useEffect } from 'react';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import Upload from '../../components/Upload/Upload';
import { fetchSignedUrl, getUserId } from '../../services/auth';
import { client } from '../../services/client';
import { useHistory, useParams } from 'react-router-dom';
import { fetchProfileById } from '../../services/fetch';

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

  const params = useParams();
  const id = params.id;
  // const [profile_image, setProfile_image] = useState('');

  const user = getUserId();

  useEffect(() => {
    const fetchUrl = async () => {
      const data = await fetchSignedUrl(avatarUrl);
      setAvatar_Url(data.signedURL);
    };
    fetchUrl();
  }, [avatarUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const updates = {
        created_at: new Date(),
        user_id: user,
        first_name: firstName,
        last_name: lastName,
        username: username,
        email: email,
        image: avatar_Url,
      };
      let { error } = await client.from('profiles').upsert(updates, { returning: 'minimal' });

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

  useEffect(() => {
    const fetchData = async () => {
      const data1 = await fetchProfileById(id);

      setProfileDetails(data1);
    };
    fetchData();
  }, [id]);

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

      <div>
        <ProfileForm
          {...{
            setFirstName,
            setLastName,
            setUsername,
            setEmail,
            handleSubmit,
          }}
        />
      </div>
      <div>
        <Upload
          url={avatarUrl}
          size={150}
          onUpload={(url) => {
            setAvatarUrl(url);
          }}
        />
      </div>
    </>
  );
}
