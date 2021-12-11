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

const ListenBtn = (props: ListenBtnProps) => (
  <StyledListenBtn onClick={props.onClick}>📢</StyledListenBtn>
);

export default ListenBtn;
