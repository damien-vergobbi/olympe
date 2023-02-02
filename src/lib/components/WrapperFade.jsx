import React from "react";
import Animate from "react-smooth";

export default function WrapperFade (props) {
  return (
    <Animate
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      easing="ease-out"
      duration={400}
    >
      {props.children}
    </Animate>
  );
}
