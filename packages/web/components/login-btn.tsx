import { signIn, signOut, useSession } from 'next-auth/react';
import { memo } from 'react';
import styled from 'styled-components';
import Me from './me';

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in as {session.user?.name} <br />
        <Button onClick={() => signOut()}>Sign out</Button>
        <Me />
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <Button onClick={() => signIn()}>Sign in</Button>
    </>
  );
}

export default memo(LoginButton);
