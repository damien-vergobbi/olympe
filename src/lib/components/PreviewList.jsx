import React from "react";
import { useParams } from "react-router-dom";
import { ChevronRight } from "react-feather";

import { Olympe } from "../";
import { ItemListStyle, MenuListStyle } from "./styles/PreviewList";

export default function PreviewList ({
  label = null,
  handleSearch = () => false,
  search = "",
  placeholder = "",
  content = null,
  uri = "/",
  children = <></>,
  btnFct = false,
  btnIcon = false,
  btnTitle = ""
}) {
  const params = useParams();

  const renderUser = (info) => {
    const id = info.id || info.name;
    const name = info.name || "Inconnu";
    const desc = info.desc || "Voir plus";
    const badge = info.badge || 0;

    return (
      <ItemListStyle
        className={id === params.usrId ? "active" : ""}
        key={id}
        onClick={() => false}
        to={params.usrId === id ? `/${uri}/` : `/${uri}/${id}`}
        clr={Olympe.Color}
      >
        {Olympe.Utils.renderHTML(
          Olympe.Utils.AvatarSvg({
            seed: name
          }),
          "usrLogo"
        )}
        <div className="usrWrap">
          <div className="usrBody">
            <p className="usrName">
              {Olympe.Utils.truncStr({ str: name, len: 20 })}
            </p>
            <div className="message">
              <p className="usrDesc">
                {Olympe.Utils.truncStr({ str: desc, len: 40 })}
              </p>
            </div>
          </div>
          <span className="end">
            {badge > 0 && (
              <span className="unread">{badge > 9 ? "+9" : badge}</span>
            )}
            <ChevronRight className="usrIcon" />
          </span>
        </div>
      </ItemListStyle>
    );
  };

  return (
    <MenuListStyle clr={Olympe.Color} className={uri}>
      <Olympe.ItemTitle clr={Olympe.Color}>
        <span>{label || "Liste des utilisateurs"}</span>

        {btnIcon && (
          <Olympe.Tooltips title={btnTitle} classes="icon" placement="left">
            <Olympe.Button.Basic toExecute={btnFct} icon={btnIcon} />
          </Olympe.Tooltips>
        )}
      </Olympe.ItemTitle>

      <Olympe.Input.Text
        type="text"
        onChange={handleSearch}
        value={search}
        placeholder={placeholder}
        autoComplete="off"
      />

      <div className={`listContent ${uri}`}>
        {content && content.length > 0
          ? (
            content.map((elt) => renderUser(elt))
          )
          : (
            <p style={{ textAlign: "center" }}>Aucune correspondance.</p>
          )}
      </div>
      {children}
    </MenuListStyle>
  );
}
