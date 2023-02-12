import React from "react";
import { Wrapper } from "./styles/Wrapper";
import WrapperFade from "./WrapperFade";

export function MainWrapper (props) {
  return (
    <WrapperFade>
      <Wrapper
        onClick={props.onClick || null}
        onSubmit={props.onSubmit || null}
        horizontal={props.horizontal}
        centered={props.centered}
        multiple={props.multiple}
      >
        {props.children || <p>Une erreur est survenue.</p>}
      </Wrapper>
    </WrapperFade>
  );
}
