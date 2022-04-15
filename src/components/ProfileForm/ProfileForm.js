import React from 'react';
import { useProfileContext } from '../../context/ProfileContext';
import './ProfileForm.css';

export default function ProfileForm() {
  const { setFirstName,
    setLastName,
    setUsername,
    handleSubmit,
    setEmail,
    firstName,
    lastName,
    username,
    email } = useProfileContext();
  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      <label>First Name</label>
      <input
        type="text"
        name="first_name"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label>Last Name</label>
      <input
        type="text"
        name="last_name"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button>Save Profile</button>
    </form>
  );
}
