import styled from "styled-components";
import { Colors } from "./Colors";

export const ButtonStyles = styled.button`
  outline: none;
  padding: 5px 15px;
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer !important;
  font-size: 0.95rem;

  color: ${({ clr = Colors }) => clr.light};
  border-radius: 15px;

  background-color: ${({ clr = Colors }) => clr.white}15;
  will-change: backdrop-filter;
  backdrop-filter: blur(10px);
  border: 1px solid ${({ clr = Colors }) => clr.white}33;

  transition: background-color 0.4s ease, color 0.4s ease, transform 0.8s ease,
    border-width 0.4s ease, border-color 0.4s ease, border-radius 0.4s ease;

  svg {
    margin-left: 10px;
    width: 18px;
    color: ${({ clr = Colors }) => clr.blueLight};
    transition: all 0.4s ease;
  }

  @media screen and (max-width: 700px) {
    padding: 5px 10px;
    font-size: 14px;

    svg {
      width: 14px;
    }
  }

  &:not(:disabled):hover {
    background-color: ${({ clr = Colors }) => clr.blue};
    border-radius: 10px;

    &:not(.danger) {
      border-color: ${({ clr = Colors }) => clr.blueLight};
    }

    &:not(.icon) {
      svg {
        color: ${({ clr = Colors }) => clr.light};
      }
    }
  }

  &.icon svg {
    width: 20px;
    color: ${({ clr = Colors }) => clr.light};
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &.danger {
    border-radius: 10px;
    background-color: ${({ clr = Colors }) => clr.tomato}66;
    border: 1px solid ${({ clr = Colors }) => clr.tomato}66;

    svg {
      color: ${({ clr = Colors }) => clr.tomato} !important;
    }

    &:hover {
      background-color: ${({ clr = Colors }) => clr.tomato}22;
    }
  }

  &:disabled {
    color: ${({ clr = Colors }) => clr.greyLight}88 !important;
    pointer-events: none;
    cursor: not-allowed !important;

    background-color: transparent;
    border: 1px solid ${({ clr = Colors }) => clr.greyLight}88;

    svg {
      color: ${({ clr = Colors }) => clr.greyLight} !important;
    }
  }
`;

export const PickFile = styled.button`
  cursor: pointer;
  padding: 10px 50px;
  color: ${({ clr = Colors }) => clr.light};
  background-color: transparent;
  border: 2px dashed ${({ clr = Colors }) => clr.grey};
  border-radius: 10px;
  transition: all 0.3s ease;
  margin: 5px;
  width: 220px;
`;

export const FileCancel = styled.button`
  cursor: pointer;
  padding: 0;
  margin: 0 10px;
  background-color: initial;
  outline: none;
  border: none;
  color: ${({ clr = Colors }) => clr.grey};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ clr = Colors }) => clr.light};
  }

  svg {
    height: 18px !important;
    width: 18px !important;
  }
`;

export const UploadFileBtn = styled(PickFile)`
  border: 2px solid ${({ clr = Colors }) => clr.blue};
  background-color: ${({ clr = Colors }) => clr.blue};
  width: 100px;
  padding: 10px;
  text-align: center;

  &:hover {
    border-color: ${({ clr = Colors }) => clr.light};
    background-color: initial;
  }
`;
