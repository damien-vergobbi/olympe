import styled from "styled-components";
import { Colors } from "./Colors";

export const WrapperError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;

  background-color: ${Colors.secondaryDarker};
  background-image: url(${Colors.bgLogo});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  div {
    background-color: ${Colors.black}99;
    border: 1px solid ${Colors.white}22;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    padding: 60px 40px;
    border-radius: 10px;

    p {
      color: ${Colors.light};
    }

    span {
      margin: 10px 0;
      font-size: 13px;
      color: ${Colors.greyLight};
    }

    a {
      color: ${Colors.blueLight};
      text-decoration: none;
      border-bottom: 2px solid transparent;
      margin-top: 10px;
      transition: border-bottom-color 0.4s ease;
      max-width: 500px;

      &.disabled {
        pointer-events: none;
        color: ${Colors.grey};
      }

      &:hover {
        border-bottom-color: ${Colors.blueLight};
      }
    }
  }
`;
