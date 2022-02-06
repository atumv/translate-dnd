import React from 'react';
import * as S from './styles';

interface ListItemProps {
  onDragStart: (event: React.DragEvent<HTMLSpanElement>) => void;
  onDragOver: (event: React.DragEvent<HTMLSpanElement>) => void;
  onDrop: (event: React.DragEvent<HTMLSpanElement>) => void;
  id: string;
  children: React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({
  id,
  onDragStart,
  onDragOver,
  onDrop,
  children,
}) => (
  <S.ListItem
    className={`_${id} list-item`}
    onDragStart={onDragStart}
    onDragOver={onDragOver}
    onDrop={onDrop}
  >
    {children}
  </S.ListItem>
);
