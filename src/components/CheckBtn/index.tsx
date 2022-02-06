import React from 'react';
import * as S from './styles';

interface CheckBtnProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const CheckBtn: React.FC<CheckBtnProps> = ({ onClick }) => (
  <S.CheckBtn onClick={onClick}>Проверить</S.CheckBtn>
);
