import styled from 'styled-components';

export const Phrase = styled.h1`
  color: #333333;
  font-family: 'Roboto Light';
  font-weight: 300;
  font-size: 48px;
  text-align: center;

  @media (max-width: 375px) {
    font-size: 32px;
  }

  @media (max-width: 320px) {
    font-size: 24px;
  }
`;
