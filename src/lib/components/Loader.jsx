import React from "react";
import Animate from "react-smooth";
import { ContainerLoader } from "./styles/ContainerLoader";
import { Olympe } from "../";

export default function Loader ({ show = false, text = "" }) {
  const title = <p>{text}</p>;

  return (
    <Olympe.Fade>
      <ContainerLoader>
        <Animate
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          easing="ease-out"
          begin={show ? 0 : 700}
        >
          <img src={Olympe.Color.logoLight} alt="Chargement" height={100} width={100} />
          {title}
        </Animate>
      </ContainerLoader>
    </Olympe.Fade>
  );
}
