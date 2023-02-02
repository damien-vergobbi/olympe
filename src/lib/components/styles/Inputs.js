import styled, { css } from "styled-components";
import { Colors } from "./Colors";

export const Input = styled.input`
  width: auto;
  border: none;
  outline: none;
  background-color: ${({ clr = Colors }) => clr.inputBg};
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid ${({ clr = Colors }) => clr.inputBg};

  ${({ centered }) =>
    centered &&
    css`
      text-align: center;
    `}

  &:focus {
    border-radius: 7px;
    border-color: ${({ clr = Colors }) => clr.blueInput};
    box-shadow: 0 0 0 1px ${({ clr = Colors }) => clr.blueInput};
  }
`;

export const FileForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;

    span input {
      min-width: initial;
    }
  }

  svg {
    width: 40px;
    height: 40px;
  }
`;

export const InputFile = styled(Input)`
  width: 100%;
  min-width: 250px;
  margin: 0 15px;
`;
