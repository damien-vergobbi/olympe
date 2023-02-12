import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  width: 70%;
  min-height: 500px;

  ${({ horizontal = false, multiple = false }) =>
    horizontal &&
    !multiple &&
    css`
      width: 90%;
      height: calc(var(--vh, 1vh) * 100 - 70px);
      justify-content: center;

      @media screen and (max-width: 1010px) {
        height: initial;
      }

      > div {
        > div:first-child {
          flex: 35%;
          max-width: 40%;
        }
        > div:last-child {
          flex: 55%;
          max-width: 60%;
        }

        @media screen and (max-width: 1010px) {
          > div:first-child,
          > div:last-child {
            height: 500px;
            flex: 90%;
            max-width: 90%;
          }
        }
      }
    `}

  ${({ horizontal = false, multiple = false }) =>
    horizontal &&
    multiple &&
    css`
      width: 90%;
      height: auto;
      justify-content: center;

      @media screen and (max-width: 1010px) {
        height: initial;
      }

      > div.listItem {
        > div:first-child {
          flex: 35%;
          max-width: 40%;
        }
        > div:last-child {
          flex: 55%;
          max-width: 60%;
        }

        @media screen and (max-width: 1010px) {
          > div:first-child,
          > div:last-child {
            height: 500px;
            flex: 90%;
            max-width: 90%;
          }
        }
      }
    `}

  ${({ centered = false }) =>
    centered &&
    css`
      width: 90%;
      min-height: calc(var(--vh, 1vh) * 100 - 70px);
      justify-content: center;
      align-items: center;

      @media screen and (max-width: 1010px) {
        height: auto;
        flex-direction: column;
        min-height: calc(var(--vh, 1vh) * 100 - 70px);
      }

      > div {
        > div:first-child {
          flex: 50%;
          max-width: 45%;
        }
        > div:not(#ListPwd):last-child {
          flex: 50%;
          max-width: 45%;
        }
        > div#ListPwd {
          flex: 90%;
          max-width: 91%;
        }

        @media screen and (max-width: 1010px) {
          flex-direction: column;
          align-items: center;

          > div:first-child,
          > div:last-child,
          > div:not(#ListPwd):last-child {
            flex: 90%;
            max-width: 90%;
          }
        }
      }
    `}

  @media screen and (max-width: 1205px) {
    width: 80%;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
  }
`;
