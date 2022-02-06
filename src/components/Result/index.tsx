import React from 'react';
import * as S from './styles';
import { ReactComponent as CheckMarkIcon } from 'assets/svg/CheckMark.svg';
import { ReactComponent as CrossIcon } from 'assets/svg/Cross.svg';

interface ResultProps {
  isCorrect: boolean | null;
}

export const Result: React.FC<ResultProps> = ({ isCorrect }) => (
  <S.Result
    color={
      isCorrect === null
        ? 'transparent'
        : isCorrect === true
        ? '#2d962d'
        : '#8d120e'
    }
  >
    {isCorrect === null ? (
      '&npsb;'
    ) : isCorrect === true ? (
      <span>
        Правильно <CheckMarkIcon />
      </span>
    ) : (
      <span>
        Неверно <CrossIcon />
      </span>
    )}
  </S.Result>
);
