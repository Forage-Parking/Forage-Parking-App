import React, { useState } from 'react';
import './ProfileForm.css';

export default function ProfileForm({ setFirstName, setLastName, setUserName, handleSubmit }) {
  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      <label>First Name</label>
      <input
        type="text"
        name="first_name"
        placeholder="First Name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <label>Last Name</label>
      <input
        type="text"
        name="last_name"
        placeholder="Last Name"
        onChange={(e) => setLastName(e.target.value)}
      />
      <label>Username</label>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={(e) => setUserName(e.target.value)}
      />

      <button>Save Profile</button>
    </form>
  );
}
