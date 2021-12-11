import React from "react";
import styled from "styled-components";

const StyledCheckBtn = styled.button`
  padding: 1rem 4rem;
  margin-top: 3rem;
  border: 1px solid #f3f3f3;
  border-radius: 50px;
  background-color: white;
  color: #333;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 300;
  font-family: "Roboto";
  box-shadow: 0px 2px 1px #c3c3c3;
  transition: box-shadow 0.1s linear;

  &:active {
    box-shadow: 0px 1px 0px #e1e1e1;
  }
`;

type CheckProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const CheckBtn = ({ onClick }: CheckProps) => (
  <StyledCheckBtn onClick={onClick}>Проверить</StyledCheckBtn>
);

export default CheckBtn;
