import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors } from "./Colors";

export const MenuListStyle = styled.div`
  height: 500px;
  width: calc(30% - 70px);

  border-radius: 10px;
  overflow: hidden;

  background: ${({ clr = Colors }) => clr.black}66;
  border: 1px solid ${({ clr = Colors }) => clr.white}22;

  display: flex;
  flex-direction: column;

  padding: 0 30px;
  margin: 0;
  width: calc(40% - 10px);

  @media screen and (max-width: 1460px) {
    width: 100%;
  }

  > h2 {
    padding: 10px 0;
    color: ${({ clr = Colors }) => clr.greyLight};
  }

  input {
    padding: 7px 15px;
    margin: 10px 0;
  }

  .listContent {
    overflow-y: auto;

    width: 100%;
    height: 100%;

    margin: 0 0 10px 0;
    padding-right: 10px;
  }
`;

export const ItemListStyle = styled(Link)`
  border: none;
  outline: none;

  display: flex;
  flex: 1;

  margin: 10px 0;
  padding: 10px;
  border-radius: 15px;

  cursor: pointer;
  text-decoration: none;

  background: ${({ clr = Colors }) => clr.white}33;
  border: 1px solid ${({ clr = Colors }) => clr.white}33;
  transition: background-color 0.4s ease;

  @media screen and (max-width: 700px) {
    padding: 5px;
  }

  @media screen and (max-width: 1460px) {
    width: 100%;
  }

  &:hover,
  &:active {
    background: ${({ clr = Colors }) => clr.white}66;

    @media screen and (max-width: 700px) {
      .usrLogo {
        border-color: transparent;
      }
    }

    .usrIcon {
      color: ${({ clr = Colors }) => clr.blueLight} !important;
    }
  }

  &.active {
    background: ${({ clr = Colors }) => clr.white}11;

    .usrIcon {
      color: ${({ clr = Colors }) => clr.blue} !important;
    }
  }

  .usrLogo {
    width: 40px !important;
    height: 40px !important;

    display: flex;
    align-self: center;
    border-radius: 50%;
    transition: border-color 0.4s ease;
    border: 2px solid ${({ clr = Colors }) => clr.blueDark};

    @media screen and (max-width: 700px) {
      width: 30px !important;
      height: 30px !important;

      margin: 0;
      padding: 0;

      border-color: transparent;
    }
  }

  .usrWrap {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    position: relative;

    width: 100%;
    max-width: 100%;
    overflow: hidden;
    margin-left: 10px;

    .usrBody {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      width: calc(100% - 50px);
      max-width: calc(100% - 50px);

      div {
        padding: 0;
        margin: 0;
      }

      .usrName {
        width: 100%;
        max-width: 100%;

        padding: 5px 0;
        margin: 0;

        font-size: 1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${({ clr = Colors }) => clr.light};

        @media screen and (max-width: 700px) {
          word-wrap: break-word;
          white-space: break-spaces;
          font-size: 14px;
        }
      }

      .message {
        width: 100%;
        max-width: 100%;

        .usrDesc {
          padding: 0;
          margin: 0;

          width: 100%;
          max-width: 100%;

          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 0.8rem;
          color: ${({ clr = Colors }) => clr.grey};

          @media screen and (max-width: 700px) {
            display: none;
          }

          svg {
            width: 15px;
            margin-right: 5px;
            color: ${({ clr = Colors }) => clr.tomato};
          }

          .text {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;

            svg {
              color: ${({ clr = Colors }) => clr.grey};
              margin: 0 5px;
            }
          }

          @media screen and (max-width: 700px) {
            max-width: 130px;
          }
        }
      }
    }

    .end {
      position: absolute;
      width: auto;

      right: 0;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;

      .unread {
        display: flex;
        justify-content: center;
        align-items: center;

        color: ${({ clr = Colors }) => clr.black};
        background-color: ${({ clr = Colors }) => clr.blueLight};
        height: 20px;
        width: fit-content;
        min-width: 20px;
        border-radius: 50%;
        font-size: 14px;
        padding: 0 3px;
        margin: 0;
      }

      .usrIcon {
        color: ${({ clr = Colors }) => clr.light};
      }
    }
  }
`;
