import React from "react";
import styled from "styled-components";

const StyledListenBtn = styled.button`
  font-size: 2rem;
  margin-top: 0.5rem;
  background: transparent;
  cursor: pointer;
`;

type ListenBtnProps = {
  onClick: () => void;
};

const ListenBtn = ({ onClick }: ListenBtnProps) => (
  <StyledListenBtn onClick={onClick}>📢</StyledListenBtn>
);

export default ListenBtn;
