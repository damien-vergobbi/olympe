import React from "react";
import { Search } from "react-feather";
import { createTheme } from "react-data-table-component";
import { Colors } from "./styles/Colors";

export const renderEmptyTable = () => (
  <div className="emptyTable">
    <Search />
    <h1>Aucune correspondance trouvée.</h1>
  </div>
);

export const customStyles = {
  headCells: {
    style: {
      fontSize: 18
    }
  }
};

export const paginationComponentOptions = {
  rowsPerPageText: "Lignes par page",
  rangeSeparatorText: "de",
  selectAllRowsItem: false
};

export const tableTheme = createTheme(
  "customTheme",
  {
    text: {
      primary: Colors.light,
      secondary: Colors.grey
    },
    background: {
      default: "transparent"
    },
    divider: {
      default: "#aaa"
    }
  },
  "dark"
);
