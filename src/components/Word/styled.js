import styled, { keyframes } from "styled-components";
import { slideInRight } from "react-animations";

const slideInRightAnimation = keyframes`${slideInRight}`;

const StyledWord = styled.span`
  list-style-type: none;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 75px;
  min-height: 40px;
  border-radius: 50px;
  background: #ffff35;
  font-family: "Roboto";
  font-weight: 400;
  cursor: pointer;
  box-shadow: 0px 2px 1px #d1d147;
  animation: 1s ${slideInRightAnimation};
`;

export default StyledWord;
