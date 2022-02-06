import styled from 'styled-components';

export const CheckBtn = styled.button`
  padding: 16px 64px;
  border: 1px solid #f3f3f3;
  border-radius: 50px;
  background-color: #ffffff;
  color: #333333;
  cursor: pointer;
  font-weight: 300;
  font-size: 1rem;
  box-shadow: 0px 2px 1px #c3c3c3;
  transition: box-shadow 0.1s linear;

  &:active {
    box-shadow: 0px 1px 0px #e1e1e1;
  }
`;
