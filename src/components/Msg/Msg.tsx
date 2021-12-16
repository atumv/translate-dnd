import React from "react";
import StyledMsg from "./styled";

type MsgProps = {
  color: string;
  children: React.ReactNode;
};

const Msg: React.FC<MsgProps> = ({ color, children }) => (
  <StyledMsg color={color}>{children}</StyledMsg>
);

export default Msg;
