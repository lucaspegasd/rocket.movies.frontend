import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 64px;
  height: 116px;

  padding: 24px 123px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.TEXT_100};
`;

export const Brand = styled(Link)`
  background: none;
  border: none;
    
  h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

`;

export const Profile = styled(Link)`
  display: flex;
  gap: 9px;


  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;

  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    

    

    strong {
      font-size: 14px;
      font-weight: bold;

      white-space: nowrap;




      color: ${({ theme }) => theme.COLORS.WHITE};
      
    }

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.TEXT_100};
    }
  }
`;