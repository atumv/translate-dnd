import React from "react";
import StyledCheckBtn from "./styled";

type CheckBtnProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const CheckBtn: React.FC<CheckBtnProps> = ({ onClick }) => (
  <StyledCheckBtn onClick={onClick}>Проверить</StyledCheckBtn>
);

export default CheckBtn;
