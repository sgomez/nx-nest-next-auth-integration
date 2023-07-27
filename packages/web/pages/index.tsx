import styled from 'styled-components';
import LoginBtn from '../components/login-btn';

const StyledPage = styled.div`
  .page {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
  }
`;

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      <LoginBtn />
    </StyledPage>
  );
}

export default Index;
