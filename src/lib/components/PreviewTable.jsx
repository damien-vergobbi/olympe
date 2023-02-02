import React from "react";
import { Link, useParams } from "react-router-dom";

import { Olympe } from "../";
import { TableListStyle } from "./styles/PreviewTable";

export default function PreviewTable ({
  id = null,
  name = null,
  tableTitle = "Toutes les informations",
  buttonLabel = "Erreur",
  buttonIcon = null,
  loading = true,
  columns = [],
  datas = [],
  handleSearch = null,
  search = "",
  placeholder = "Rechercher ...",
  onClickRow = () => false,
  onClickBtn = () => false,
  sortAsc = true,
  sortId = 1,
  forceButton = false
}) {
  const params = useParams();

  const getSubHeaderComponent = () => (
    <Olympe.Input.Text
      className="search"
      type="text"
      onChange={(e) => handleSearch(e)}
      value={search}
      placeholder={placeholder}
      autoComplete="off"
    />
  );

  return (
    <TableListStyle clr={Olympe.Color}>
      <div className="headerWrap">
        {(id && params.usrId !== id) || loading
          ? (
            <Olympe.MiniLoader />
          )
          : (
            <Olympe.Tooltips
              title={name ? "Voir le compte" : ""}
              placement="right"
              notSpan
            >
              <Link className="header" to={id ? `/accounts/${id}` : "#"}>
                {Olympe.Utils.renderHTML(
                  Olympe.Utils.AvatarSvg({
                    seed: name || ""
                  }),
                  "usrLogo"
                )}
                <h2>{name || tableTitle}</h2>
              </Link>
            </Olympe.Tooltips>
          )}

        {(id || forceButton) && (
          <Olympe.Button.Basic
            label={buttonLabel}
            icon={buttonIcon}
            toExecute={onClickBtn}
          />
        )}
      </div>

      <Olympe.Table.Wrap
        responsive
        clr={Olympe.Color}
        columns={columns}
        defaultSortFieldId={sortId}
        defaultSortAsc={sortAsc}
        data={datas}
        noDataComponent={Olympe.Table.Empty()}
        pagination
        paginationComponentOptions={Olympe.Table.Pagination}
        progressPending={(id && params.usrId !== id) || loading}
        progressComponent={<div className="loader"></div>}
        subHeader
        subHeaderComponent={getSubHeaderComponent()}
        theme="customTheme"
        customStyles={Olympe.Table.Style}
        onRowClicked={onClickRow}
      />
    </TableListStyle>
  );
}
