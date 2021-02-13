import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthCard = styled.div`
  width: 400px;
  height: 500px;
  position: relative;
  padding: 20px 50px;
  border-radius: 8px;
  background-color: #FFF;
  box-shadow: 10px 10px 45px #EAEAEA;
  @media (max-width: 768px) {
    box-shadow: unset;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 500;
  font-family: 'Work Sans', sans-serif;
`;

export const Divider = styled.div`
  clear: both;
  display: flex;
  margin-top: 20px;
  overflow: hidden;
  position: relative;
  text-align: center;
  align-items: center;
  margin-bottom: 20px;
  justify-content: center;
`

export const LinkAuth = styled.p`
  bottom: 0;
  left: 50%;
  font-size: 16px;
  position: absolute;
  transform: translate(-50%, -50%);
`
