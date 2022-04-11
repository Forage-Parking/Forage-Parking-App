import styled from 'styled-components';

function Auth({ password, email, setEmail, setPassword, handleSubmit, setType, type }) {
  return (
    <>
      <div>
        <H4>
          <span className={type === 'sign-in' ? 'in' : ''} onClick={() => setType('sign-in')}>
            Sign In
          </span>

          <span className={type === 'sign-up' ? 'out' : ''} onClick={() => setType('sign-up')}>
            Sign Up
          </span>
        </H4>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Sign In</button>
        </form>
      </div>
    </>
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
