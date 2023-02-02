import DataTable from "react-data-table-component";
import styled from "styled-components";
import { Colors } from "./Colors";

export const DataTableCustom = styled(DataTable)`
  height: 100%;
  width: 100%;

  .emptyTable {
    display: flex;
    flex-direction: row;
    align-items: center;

    @media screen and (max-width: 480px) {
      svg {
        width: 15px;
      }
    }

    h1 {
      margin-left: 10px;
      font-size: 1.1rem;

      @media screen and (max-width: 480px) {
        font-size: 0.8rem;
      }
    }
  }

  .tableTitle {
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
      max-width: calc(100% - 20px);
      white-space: prewrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    svg {
      width: 16px;
      margin-right: 5px;
    }
    .success {
      color: ${({ clr = Colors }) => clr.primary};
    }

    .error {
      color: ${({ clr = Colors }) => clr.tomato};
    }
  }

  .rdt_TableHead span {
    font-size: 10px;
    margin-left: 10px;
  }

  .rdt_TableRow {
    cursor: pointer;
    transition: background-color 0.4s ease-out;

    &:hover {
      background-color: ${({ clr = Colors }) => clr.white}33;
    }

    button.active {
      background-color: transparent;
    }
  }

  .errorRow {
    display: flex;
    align-items: center;
    flex-direction: row;

    svg {
      color: ${({ clr = Colors }) => clr.tomato};
      width: 16px;
      margin-right: 5px;
    }
  }
`;
