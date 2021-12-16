import React from "react";
import StyledMsg from "../styles/StyledMsg";

type MsgProps = {
  color: string;
  children: React.ReactNode;
};

const Msg: React.FC<MsgProps> = ({ color, children }) => (
  <StyledMsg color={color}>{children}</StyledMsg>
);

export default Msg;
