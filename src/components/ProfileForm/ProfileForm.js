import React from 'react';
import { useProfileContext } from '../../context/ProfileContext';
import './ProfileForm.css';
import { Box, Button, Form, FormField, TextInput } from 'grommet';
import styled from 'styled-components';
export default function ProfileForm({ handleSubmit }) {
  const { setFirstName,
    setLastName,
    setUsername,
    setEmail,
    email, 
    username, 
    lastName, 
    firstName, 
  } = useProfileContext();
  return (
    <Box fill align="center" justify="center">
      <Form onSubmit={handleSubmit}>
        <Box width="medium">
          <FormField name="first_name">
            <TextInput
              type="text"
              name="first_name"
              placeholder="First Name"
              value={firstName ? firstName : ''} 
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormField>
          <FormField name="last_name">
            <TextInput
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={lastName ? lastName : ''} 
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormField>
          <FormField name="username">
            <TextInput
              type="text"
              name="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormField>
          <label>Email</label>
          <FormField name="email">
            <TextInput
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormField>{' '}
          <Box direction="row" justify="between" margin={{ top: 'medium' }}>
            <ButtonColor type="reset" label="Reset form" />
            <ButtonColor type="submit" label="Save Spot" />
          </Box>
        </Box>
      </Form>
    </Box>
  );
}
const ButtonColor = styled(Button)`
  color: #f4f1de;
`;


// export default function ProfileForm({ handleSubmit }) {
//   const { setFirstName,
//     setLastName,
//     setUsername,
//     setEmail,
//     email, 
//     username, 
//     lastName, 
//     firstName, 
//   } = useProfileContext();
//   return (
//     <form className="profile-form" onSubmit={handleSubmit}>
//       <label>First Name</label>
//       <input
//         type="text"
//         name="first_name"
//         placeholder="First Name"
//         value={firstName ? firstName : ''} 