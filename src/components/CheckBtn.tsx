import React from 'react';
import StyledCheckBtn from '../styles/StyledCheckBtn';

interface CheckBtnProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const CheckBtn: React.FC<CheckBtnProps> = ({ onClick }) => (
  <StyledCheckBtn onClick={onClick}>Проверить</StyledCheckBtn>
);
