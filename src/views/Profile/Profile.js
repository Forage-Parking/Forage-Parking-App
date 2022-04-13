import React from 'react';
import ProfileForm from '../../components/ProfileForm/ProfileForm';

export default function Profile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');

  return (
    <div>
      <ProfileForm />
    </div>
  );
}
