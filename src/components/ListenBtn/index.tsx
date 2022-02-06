import React from 'react';
import * as S from './styles';
import { ReactComponent as ListenIcon } from 'assets/svg/Listen.svg';

interface ListenBtnProps {
  onClick: () => void;
}

export const ListenBtn: React.FC<ListenBtnProps> = ({ onClick }) => (
  <S.ListenBtn onClick={onClick}>
    <ListenIcon />
  </S.ListenBtn>
);
