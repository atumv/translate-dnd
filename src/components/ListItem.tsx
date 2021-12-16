import React from "react";
import StyledListItem from "../styles/StyledListItem";

type ListItemProps = {
  onDragStart: (e: React.DragEvent<HTMLSpanElement>) => void;
  onDragOver: (e: React.DragEvent<HTMLSpanElement>) => void;
  onDrop: (e: React.DragEvent<HTMLSpanElement>) => void;
  id: string;
  children: React.ReactNode;
};

const ListItem: React.FC<ListItemProps> = ({
  id,
  onDragStart,
  onDragOver,
  onDrop,
  children,
}) => (
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
