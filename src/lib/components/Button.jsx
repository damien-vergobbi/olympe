import React from "react";
import { ButtonStyles } from "./styles/Buttons";

export const ButtonBase = ({
  toExecute = null,
  label = null,
  icon = null,
  anim = "",
  type = "button"
}) => {
  const disabled = !toExecute;

  return (
    <ButtonStyles
      disabled={disabled}
      onClick={() => toExecute()}
      type={type}
      className={`ButtonBase ${anim} ${!label && icon ? "icon" : ""}`}
    >
      {label}
      {icon}
    </ButtonStyles>
  );
};
