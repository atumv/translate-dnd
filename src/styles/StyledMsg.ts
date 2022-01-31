import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;

const StyledMsg = styled.p`
  color: ${(props) => props.color};
  font-family: "Roboto";
  font-size: 1rem;
  font-weight: 300;
  margin-top: 1.5rem;
  line-height: 1.2;
  animation: 1s ${fadeInAnimation};
`;

export default StyledMsg;
