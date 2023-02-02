import styled from "styled-components";
import { Colors } from "./Colors";

export const TableListStyle = styled.div`
  background-color: ${({ clr = Colors }) => clr.black}66;
  border: 1px solid ${({ clr = Colors }) => clr.white}22;

  border-radius: 10px;
  overflow-y: auto;

  width: calc(65% - 10px);
  height: 500px;

  margin: 0;
  padding: 20px 30px;

  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 1460px) {
    width: 100%;
  }

  @media screen and (max-width: 700px) {
    width: 90%;
  }

  header {
    max-height: 70px;

    @media screen and (max-width: 700px) {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      margin: 0;
      padding: 0;
    }

    input {
      max-width: 100%;
      min-width: 200px;
      padding: 5px 10px;

      @media screen and (max-width: 700px) {
        min-width: 80%;
        max-width: 80%;
      }
    }
  }

  .empty {
    font-size: 1.1rem;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    svg {
      margin-right: 10px;
    }
  }

  .headerWrap {
    padding: 10px 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 700px) {
      flex-direction: column;
    }

    .header {
      padding: 10px 0px;
      display: flex;
      flex-direction: row;
      align-items: center;
      text-decoration: none;

      .usrLogo {
        display: flex;
        align-self: center;

        border: 2px solid ${({ clr = Colors }) => clr.blue};
        transition: border-color 0.4s ease;

        width: 40px !important;
        height: 40px !important;
        border-radius: 50%;
        margin-right: 10px;

        @media screen and (max-width: 700px) {
          margin-right: 5px;
          padding: 0;
          border-color: transparent;
        }
      }

      h2 {
        font-size: 1.2rem;
        color: ${({ clr = Colors }) => clr.grey};

        @media screen and (max-width: 700px) {
          font-size: 18px;
        }
      }
    }
  }

  > div:nth-child(3) {
    background-color: ${({ clr = Colors }) => clr.white}33;
    border: 1px solid ${({ clr = Colors }) => clr.white}33;
    overflow-y: auto;

    .rdt_TableRow:last-of-type {
      border-bottom: 1px solid #aaa;
    }

    .rdt_TableHeadRow {
      * {
        font-size: 1rem;
      }
    }

    .rdt_TableHeadRow span {
      font-size: 12px;
    }
  }

  .rdt_Pagination {
    border-top: none;
  }

  .footer {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;

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

      &:focus {
        outline: none;
      }
    }
  }
`;
