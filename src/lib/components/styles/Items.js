import styled, { css } from "styled-components";
import { Colors } from "./Colors";

export const Item = styled.div`
  padding: 20px 30px;
  border-radius: 10px;
  width: calc(50% - 10px);

  background: rgba(0, 0, 0, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1010px) {
    width: 100%;
  }

  .basicInput {
    margin: 5px 0;
    width: 100%;

    display: flex;
    flex-direction: column;

    &.noMsg {
      flex-direction: row;
    }

    input [type="checkbox"] {
      display: inline;
      padding: 0;
      width: auto;
    }

    span {
      border: none;
      border: 1px solid ${({ clr = Colors }) => clr.grey};
      border-radius: 10px;
      outline: none;
      padding: 5px 10px;
      margin: 5px;
      font-size: 0.9rem;
      width: 100%;
      max-width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .select {
    width: calc(100% - 40px);
    color: ${({ clr = Colors }) => clr.dark};
    font-size: 0.9rem;
    margin: 10px 0;

    input {
      border: none;
      box-shadow: none;
    }

    .select__indicator {
      padding: 3px;
    }
  }

  .usrDetails {
    max-width: 100%;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;

    span:not(.codeDesc) {
      font-size: 1rem;
      max-width: 80%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      @media screen and (max-width: 700px) {
        font-size: 12px;
        max-width: 100%;
      }
    }

    svg {
      width: 24px;
      height: 16px;
      margin-right: 10px;
      color: ${({ clr = Colors }) => clr.blueLight};
    }

    button svg {
      margin-right: 0;
    }
  }

  .footerInfos {
    margin-top: 20px;
    align-self: flex-end;
    justify-content: flex-end;
    display: flex;
    flex-direction: row;

    button {
      color: ${({ clr = Colors }) => clr.light};
    }
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    margin: 5px 0;
    padding: 10px 20px;

    .usrDetails {
      font-size: 0.9rem;
      max-width: 100%;
    }

    .footerInfos {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      align-self: center;

      button {
        margin: 5px;
      }
    }
  }
`;

export const ItemFullWidth = styled(Item)`
  width: 100%;
  max-width: 100%;
  overflow: hidden;

  @media screen and (max-width: 700px) {
    max-width: 100%;
  }

  .usrDetails {
    padding: 5px 0;

    textarea {
      padding: 10px;
      border-radius: 10px;
      width: 100%;
      resize: vertical;
      min-height: 120px;
      height: auto;
      max-height: 500px;

      font-family: "Inter", sans-serif;
      background-color: ${({ clr = Colors }) => clr.inputBg};
      padding: 10px;
      outline: none;
      border-radius: 10px;
      border: 1px solid ${({ clr = Colors }) => clr.inputBg};

      &:focus {
        border-radius: 7px;
        border-color: ${({ clr = Colors }) => clr.blueInput};
        box-shadow: 0 0 0 1px ${({ clr = Colors }) => clr.blueInput};
      }
    }

    .codeDesc {
      font-size: 1rem;
      max-width: calc(100% - 50px);
      white-space: wrap;

      @media screen and (max-width: 700px) {
        font-size: 12px;
      }
    }

    .codeUnique {
      white-space: wrap;
      color: ${({ clr = Colors }) => clr.greyLight};

      @media screen and (max-width: 480px) {
        font-size: 0.85rem;
      }
    }
  }
`;

export const ItemWithAvatar = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  background-color: rgba(#fff, 0.2);

  &.center {
    align-items: center;
  }

  .infosSep {
    width: 60%;

    &.avatar {
      width: 40%;
      position: relative;

      display: flex;
      flex-direction: row;
      justify-content: center;

      .certified {
        color: ${({ clr = Colors }) => clr.blueLight};
        position: absolute;
        left: 60%;
      }

      div {
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          width: 100px;
        }
      }
    }
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;

    .infosSep {
      width: 100%;

      &.avatar {
        width: 100%;
        margin: 20px 0;
      }
    }
  }
`;

export const ItemTitle = styled.h2`
  font-size: 1.2rem;
  padding: 10px 0px 0;
  color: ${({ clr = Colors }) => clr.light};

  &,
  > span {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  svg {
    margin-right: 10px;
  }

  button.icon {
    margin: 0px;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(0px);
    border-color: rgba(255, 255, 255, 0.1);

    svg {
      color: ${({ clr = Colors }) => clr.light};
      transition: transform 0.4s ease;
    }

    &:hover {
      background: rgba(255, 255, 255, 0.1);

      svg {
        transform: scale(0.9);
      }
    }
  }

  @media screen and (max-width: 700px) {
    font-size: 1rem;
  }
`;

export const ContainerSeparator = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  /* border: 2px solid red;
  background-color: white; */

  gap: 10px;
  justify-content: center;

  min-height: 40px;
  width: 100%;

  > div {
    flex: 100%;
    max-width: 100%;
  }

  /* MARGIN TOP - BOTTOM */
  &:first-child {
    margin-top: 10px;

    &:last-child {
      margin-bottom: 10px;
    }
  }
  &:last-child:not(:first-child) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  &:not(:first-child):not(:last-child) {
    margin-top: 10px;
  }

  /* MANAGE CHILDS WIDTH */
  ${({ children = [] }) =>
    children.length === 3 &&
    css`
      > div {
        flex: 30%;
        max-width: 33%;
      }
      @media screen and (max-width: 1205px) {
        > div {
          flex: 45%;
          max-width: 50%;
        }
      }
      @media screen and (max-width: 1000px) {
        > div {
          flex: 100%;
          max-width: 100%;
        }
      }
    `}

  ${({ children = [] }) =>
    children.length === 2 &&
    css`
      > div {
        flex: 45%;
        max-width: 50%;
      }
      @media screen and (max-width: 1010px) {
        > div {
          flex: 100%;
          max-width: 100%;
        }
      }
    `}

    // Hide if no items contained
    ${({ children }) =>
    !children &&
    css`
      display: none;
    `}
`;

export const ItemChart = styled(Item)`
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: calc(25% - 30px);
  padding-bottom: 30px;

  &.large .chart {
    max-width: 100%;
    max-height: 30rem;
  }

  @media screen and (max-width: 700px) {
    width: calc(100% - 25px);
    height: auto;

    &.large {
      width: calc(100% - 25px);
    }

    .chart {
      width: 100%;
      height: 100%;
    }
  }

  h2 {
    font-size: 1.1rem;
    color: ${({ clr = Colors }) => clr.light};
    padding-bottom: 0;
    margin-bottom: 0;
  }

  p {
    font-size: 0.9rem;
    color: ${({ clr = Colors }) => clr.grey};
  }

  .chart {
    width: 100%;
    max-width: 10rem;
    position: relative;

    .chartTitle {
      position: absolute;
      top: 30%;
      right: 50%;
      transform: translate(50%, -50%);

      @media screen and (max-width: 700px) {
        top: 35%;
      }
    }

    p {
      font-size: 1.9rem;
      color: ${({ clr = Colors }) => clr.light};
    }
  }

  .chartLegend {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    align-self: flex-start;

    text-align: left;
    margin: 20px auto 0 auto;
    max-width: 30rem;

    .legend {
      text-align: center;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      font-size: 0.75rem;
      padding: 2px 0;
      margin: 0px 15px;
      color: ${({ clr = Colors }) => clr.greyLight};

      @media screen and (max-width: 700px) {
        margin: 5px;
      }

      &.lonely {
        margin: 5px;
      }

      .square {
        display: block;
        height: 10px;
        width: 10px;
        border: 1px solid ${({ clr = Colors }) => clr.greyLight};
        margin-right: 5px;
        border-radius: 2px;
      }
    }
  }
`;

export const ContainerPdf = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);

  @media screen and (max-width: 1305px) {
    width: 80%;
    height: auto;
    flex-direction: column;
  }

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
