import React from "react";
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;

const StyledMsg = styled.p`
  color: ${(props) => props.color};
  font-family: "Roboto";
  font-size: 1rem;
  font-weight: 300;
  margin-top: 1.5rem;
  animation: 1s ${fadeInAnimation};
`;

type MsgProps = {
  color: string;
  children: React.ReactNode;
};

const Msg: React.FC<MsgProps> = ({ color, children }) => (
  <StyledMsg color={color}>{children}</StyledMsg>
);

export default Msg;
