import React from "react";
import StyledListenBtn from "./styled";

type ListenBtnProps = {
  onClick: () => void;
};

const ListenBtn: React.FC<ListenBtnProps> = ({ onClick }) => (
  <StyledListenBtn onClick={onClick}>📢</StyledListenBtn>
);

export default ListenBtn;
