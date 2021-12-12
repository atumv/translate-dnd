import React from "react";
import styled from "styled-components";

const StyledListItem = styled.li`
  list-style-type: none;
  display: inline-block;
  width: 75px;
  height: 40px;
  border-radius: 50px;
  background: #f3f3f3;
  margin: 0.4rem;
`;

type ListItemProps = {
  onDragStart: (e: React.DragEvent<HTMLSpanElement>) => void;
  onDragOver: (e: React.DragEvent<HTMLSpanElement>) => void;
  onDrop: (e: React.DragEvent<HTMLSpanElement>) => void;
  id: string;
  children: React.ReactNode;
};

const ListItem = ({
  onDragStart,
  onDragOver,
  onDrop,
  id,
  children,
}: ListItemProps) => (
  <StyledListItem
    className={`_${id} list-item`}
    onDragStart={onDragStart}
    onDragOver={onDragOver}
    onDrop={onDrop}
  >
    {children}
  </StyledListItem>
);

export default ListItem;
