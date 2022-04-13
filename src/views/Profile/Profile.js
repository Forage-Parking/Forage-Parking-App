import React, { useState, useEffect } from 'react';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import Upload from '../../components/Upload/Upload';
import { fetchSignedUrl, getUserId } from '../../services/auth';
import { client } from '../../services/client';
import { useHistory, useParams } from 'react-router-dom';
import { fetchProfiles } from '../../services/fetch';
import { Link } from 'react-router-dom';

export default function Profile({ currentUser }) {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [avatar_Url, setAvatar_Url] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [profiles, setProfiles] = useState([]);

  // const params = useParams();
  // const id = params.id;
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
      const data1 = await fetchProfiles();

      setProfiles(data1);
    };
    fetchData();
  }, []);

  return (
    <div>
      {profiles.map((profile) => (
        <div key={profile.id}>
          <p>{profile.first_name}</p>
          <p>{profile.last_name}</p>
          <p>{profile.username}</p>
          <img src={profile.image} />
          {/* <div className="edit-link">
          {currentUser && <Link to={`/dogs/${profile.id}/edit`}>Edit</Link>}{' '}
        </div> */}
        </div>
      ))}

      <ProfileForm
        {...{
          setFirstName,
          setLastName,
          setUsername,
          handleSubmit,
        }}
      />

      <div>
        <Upload
          url={avatarUrl}
          size={150}
          onUpload={(url) => {
            setAvatarUrl(url);
          }}
        />
      </div>
    </div>
  );
}
