import { keyframes } from "styled-components";

export const bounceBell = keyframes`
  30% {
    transform: scale(1.2);
  }
  40%,
  60% {
    transform: rotate(-20deg) scale(1.2);
  }
  50% {
    transform: rotate(20deg) scale(1.2);
  }
  70% {
    transform: rotate(0deg) scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const gelatine = keyframes`
    from,
  to {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(1.1, 0.9);
  }
  50% {
    transform: scale(0.9, 1.1);
  }
  75% {
    transform: scale(1.05, 0.95);
  }
`;

export const spinEase = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const anvil = keyframes`
  0% {
    transform: scale(1) translateY(0px);
    opacity: 0;
    box-shadow: 0 0 0 rgba(241, 241, 241, 0);
  }
  1% {
    transform: scale(0.96) translateY(10px);
    opacity: 0;
    box-shadow: 0 0 0 rgba(241, 241, 241, 0);
  }
  100% {
    transform: scale(1) translateY(0px);
    opacity: 1;
    box-shadow: 0 0 500px rgba(241, 241, 241, 0);
  }
`;
