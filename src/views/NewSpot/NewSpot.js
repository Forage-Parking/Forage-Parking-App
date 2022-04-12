import React, { useState } from 'react';
import SpotForm from '../../components/SpotForm/SpotForm';
import Upload from '../../components/Upload/Upload';
import { getUserId } from '../../services/auth';
import { client } from '../../services/client';

export default function NewSpot() {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [ownerId, setOwnerId] = useState('user');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [size, setSize] = useState('');
  const [details, setDetails] = useState('');
  const [nickname, setNickname] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);

  const user = getUserId();
  // const [avatar_url, setAvatar_Url] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const updates = {
        created_at: new Date(),
        owner_id: user,
        details: details,
        price: price,
        image: avatarUrl,
        Name: nickname,
      };
      let { error } = await client.from('parking-spots').upsert(updates, { returning: 'minimal' });

      if (error) {
        throw error;
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  loading && 'loading';
  return (
    <>
      <div>
        <SpotForm
          {...{
            setOwnerId,
            setLat,
            setLng,
            setSize,
            setDetails,
            setNickname,
            setPrice,
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
            // updateProfile({ username, website, avatar_url: url });
          }}
        />
      </div>
    </>
  );
}
