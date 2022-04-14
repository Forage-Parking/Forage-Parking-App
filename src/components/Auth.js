import styled from 'styled-components';
import { Form, Box, FormField, TextInput, Button } from 'grommet';

function Auth({ password, email, setEmail, setPassword, handleSubmit, setType, type }) {
  return (
    <Box>
      <Box>
        <H4>
          <span className={type === 'sign-in' ? 'in' : ''} onClick={() => setType('sign-in')}>
            Sign In
          </span>

          <span className={type === 'sign-up' ? 'out' : ''} onClick={() => setType('sign-up')}>
            Sign Up
          </span>
        </H4>
        <Form action="" onSubmit={handleSubmit}>
          <FormField>
            <TextInput
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormField>
          {/* <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /> */}
          <FormField>
            <TextInput
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormField>
          {/* <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /> */}
          <Button type="submit" label={type === 'sign-in' ? 'Sign In' : 'Go'} />
        </Form>
      </Box>
    </Box>
  );
}

const H4 = styled.h4`
  display: flex;
  justify-content: space-around;

  .in {
    text-decoration: underline;
  }
  .out {
    text-decoration: underline;
  }
`;
export default Auth;
