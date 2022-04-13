import React, { useState } from 'react';
import ProfileForm from '../../components/ProfileForm/ProfileForm';

export default function Profile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [profile_image, setProfile_image] = useState('');

  return (
    <div>
      <ProfileForm />
    </div>
  );
}
