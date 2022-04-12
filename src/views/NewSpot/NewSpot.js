import React, { useState } from 'react';
import SpotForm from '../../components/SpotForm/SpotForm';
import Upload from '../../components/Upload/Upload';

export default function NewSpot() {
  const [avatarUrl, setAvatarUrl] = useState(null);
  // const [uploading, setUploading] = useState(false);
  // const [loading, setLoading] = useState(true);
  // const [username, setUsername] = useState(null);
  // const [website, setWebsite] = useState(null);
  const [avatar_url, setAvatar_Url] = useState(null);

  return (
    <>
      <div>
        <SpotForm />
      </div>
      <div>
        <Upload
          url={avatar_url}
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
