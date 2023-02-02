import React from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import styled from "styled-components";
import { Colors } from "./styles/Colors";

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    color: Colors.light,
    fontSize: 12,
    backgroundColor: Colors.dark,
    border: `1px solid ${Colors.blueDark}`
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: Colors.blueDark
  }
}));

export default function Tooltips (props) {
  return (
    <CustomTooltip
      title={props.title}
      arrow
      placement={props.placement || "top"}
    >
      {props.notSpan
        ? (
          props.children
        )
        : (
          <span className={props.classes}>{props.children}</span>
        )}
    </CustomTooltip>
  );
}
