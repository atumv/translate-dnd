import React from "react";
import StyledListenBtn from "../styles/StyledListenBtn";

type ListenBtnProps = {
  onClick: () => void;
};

const ListenBtn: React.FC<ListenBtnProps> = ({ onClick }) => (
  <StyledListenBtn onClick={onClick}>📢</StyledListenBtn>
);

export default ListenBtn;
