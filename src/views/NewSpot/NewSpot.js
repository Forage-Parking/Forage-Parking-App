import React, { useState } from 'react';
import SpotForm from '../../components/SpotForm/SpotForm';
import Upload from '../../components/Upload/Upload';

export default function NewSpot() {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [ownerId, setOwnerId] = useState('user');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [size, setSize] = useState('');
  const [details, setDetails] = useState('');
  const [nickname, setNickname] = useState('');
  const [price, setPrice] = useState('');

  // const [avatar_url, setAvatar_Url] = useState(null);

  console.log(avatarUrl);

  return (
    <>
      <div>
        <SpotForm {...{ setOwnerId, setLat, setLng, setSize, setDetails, setNickname, setPrice }} />
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
