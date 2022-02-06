import React from 'react';
import StyledListenBtn from 'styles/StyledListenBtn';

interface ListenBtnProps {
  onClick: () => void;
}

export const ListenBtn: React.FC<ListenBtnProps> = ({ onClick }) => (
  <StyledListenBtn onClick={onClick}>📢</StyledListenBtn>
);
