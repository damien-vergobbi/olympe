import styled from "styled-components";
import { Colors } from "./Colors";

export const ModalContainer = styled.div`
  .header {
    width: 100%;
    font-size: 18px;
    padding: 5px;
    color: ${Colors.greyLight};
    font-size: 1.3rem;
  }

  .content {
    width: 100%;
    padding: 20px 5px;
    font-size: 0.9rem;

    strong {
      color: ${Colors.blueLight};
    }

    input[type="text"] {
      width: 100%;
      font-size: 0.9rem;
      padding: 10px;
      border-radius: 10px;
      height: 100%;
      font-family: "Inter", sans-serif;
      margin: 5px 0;

      &:focus {
        outline: none;
      }
    }

    textarea {
      width: 100%;
      resize: vertical;
      font-size: 0.9rem;
      padding: 10px;
      border-radius: 10px;
      min-height: 2.4rem !important;
      max-height: 20rem !important;
      height: 100%;
      font-family: "Inter", sans-serif;
      overflow-y: auto;
      margin: 5px 0;

      &:focus {
        outline: none;
      }
    }
  }

  .actions {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    padding: 10px 0;

    .ButtonBase {
      &:not(.danger) {
        background-color: ${Colors.white}22;

        &:hover {
          background-color: ${Colors.blueLight};

          svg {
            color: ${Colors.light};
          }
        }
      }

      &:not(:disabled) svg {
        color: ${Colors.blue};
      }

      &:disabled {
        background-color: transparent;
      }

      &.cancel svg {
        color: ${Colors.blueLight};
      }
    }
  }
`;
