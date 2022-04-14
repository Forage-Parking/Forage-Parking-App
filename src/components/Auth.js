import styled from 'styled-components';
import { Form, Box, FormField, TextInput, Button } from 'grommet';
import { useBasicContext } from '../context/BasicContext';

function Auth({ handleSubmit }) 
{
  const { password,
    email,
    setEmail,
    setPassword,
    setType,
    type,
    setUsername,
    username } = useBasicContext();
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
          {type === 'sign-up' && (
            <FormField>
              <TextInput
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormField>
          )}
          <FormField>
            <TextInput
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormField>
          <ButtonColor type="submit" label={type === 'sign-in' ? 'Sign In' : 'Go'} />
        </Form>
      </Box>
    </Box>
  );
}

const H4 = styled.h4`
  display: flex;
  justify-content: space-around;
  color: #f4f1de;

  .in {
    padding: 20px 50px;
    border: 3px solid #3c67e3;
    border-radius: 10px;
    animation: pulsate 3s, ease-in-out;
  }
  .out {
    padding: 20px 50px;
    border: 3px solid #3c67e3;
    border-radius: 10px;
    animation: pulsate 3s ease-in-out;
  }

  @keyframes pulsate {
    0% {
      box-shadow: 0 0 25px #5ddcff, 0 0 50px #4e00c2;
    }
  }
`;

const ButtonColor = styled(Button)`
  color: #f4f1de;
`;
export default Auth;
