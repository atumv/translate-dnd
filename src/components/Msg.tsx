import React from 'react';
import StyledMsg from '../styles/StyledMsg';

interface MsgProps {
  isCorrect: boolean | null;
}

export const Msg: React.FC<MsgProps> = ({ isCorrect }) => (
  <StyledMsg
    color={
      isCorrect === null
        ? 'transparent'
        : isCorrect === true
        ? '#2d962d'
        : '#8d120e'
    }
  >
    {isCorrect === null
      ? '&npsb;'
      : isCorrect === true
      ? 'Правильно ✔️'
      : 'Неверно ✖️'}
  </StyledMsg>
);
