import { createGlobalStyle } from "styled-components";
import { Colors } from "./Colors";
import { anvil } from "./KeyFrames";

export const GlobalStyles = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }
  ::-webkit-scrollbar-track {
    background: ${Colors.black}66;

    :hover {
      background: ${Colors.black}88;
    }
  }
  ::-webkit-scrollbar-thumb {
    background: ${Colors.grey};
    border-radius: 10px;

    &:hover {
      background: ${Colors.light};
    }
  }

  body {
    margin: 0;
    font-family: "Inter", sans-serif;
    background-color: ${Colors.dark};
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);
    overflow-y: hidden;

    * {
      box-sizing: border-box;
    }
  }

  .popup-overlay {
    background: rgba(0, 0, 0, 0.8) !important;

    .popup-content {
      max-width: 30%;
      animation: ${anvil} 0.3s cubic-bezier(0.38, 0.1, 0.36, 0.9) forwards;
      border-radius: 10px;
      background-color: ${Colors.dark} !important;
      border: 2px solid ${Colors.secondary} !important;
      color: ${Colors.light};
      padding: 20px 25px !important;
      
      &.large-content {
        max-width: 50%;
      }
      
      @media screen and (max-width: 700px) {
        max-width: 100%;
        width: 100%;
      }
    }

  }
`;
