import React from 'react';
import './ProfileForm.css';
import { Box, Button, Form, FormField, TextInput } from 'grommet';
import styled from 'styled-components';
export default function ProfileForm({
  setFirstName,
  setLastName,
  setUsername,
  handleSubmit,
  setEmail,
  firstName,
  lastName,
  username,
  email,
}) {
  return (
    <Box fill align="center" justify="center">
      <Form onSubmit={handleSubmit}>
        <Box width="medium">
          <FormField name="first_name">
            <TextInput
              type="text"
              name="first_name"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormField>
          <FormField name="last_name">
            <TextInput
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={lastName}
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
