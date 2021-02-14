import styled from 'styled-components'

export const Container = styled.div`
  padding: 0;
`;

export const ImageProfile = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

export const TextName = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Work Sans', sans-serif;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const TextEmail = styled.p`
  font-size: 14px;
  font-weight: 400;
  font-family: 'Work Sans', sans-serif;
  @media (max-width: 768px) {
    font-size: 9px;
  }
`;

export const LogoutButton = styled.button`
  float: right;
  @media (max-width: 768px) {
    width: 60px;
    font-size: 12px;
  }
`

export const ColProfile = styled.div`
  display: flex;
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const Row = styled.div`
  width: 100%;
`;

export const RowBill = styled.div`
  padding: 20px 16px;
`;

export const CardTable = styled.div`
  margin-bottom: 50px;
  position: relative;
  padding: 20px 50px;
  border-radius: 8px;
  background-color: #FFF;
  box-shadow: 10px 10px 45px #EAEAEA;
`;

export const IsLoad = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
