import React from "react";
import { Info } from "react-feather";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import { Olympe } from "../";
import { ModalContainer } from "./styles/Modal";

export const Modal = ({
  title = "Modal",
  content = "Validez-vous l'action ?",
  loading = false,
  large = false,
  buttons = [],
  verifTxt = "",
  open = () => false,
  onClose = () => false,
  closeOnDocumentClick = false
}) => {
  const [entered, setEntered] = React.useState("");
  const [isVerif, setIsVerif] = React.useState(false);

  React.useEffect(() => {
    setIsVerif(false);
    if (verifTxt.length > 0 && entered === verifTxt) setIsVerif(true);
  }, [entered]);

  const renderFooterButtons = (elt) => (
    <Olympe.Button.Basic
      key={elt.label + elt.anim}
      label={elt.label || "Inconnu"}
      icon={elt.icon || <Info />}
      anim={elt.isDanger ? "danger" : elt.isCancel ? "cancel" : ""}
      toExecute={
        elt.isDanger && verifTxt.length > 0
          ? (isVerif && elt.exec) || false
          : elt.exec || false
      }
    />
  );

  return (
    <Popup
      open={open}
      closeOnDocumentClick={closeOnDocumentClick}
      onClose={onClose}
      className={large ? "large" : ""}
    >
      <ModalContainer>
        <div className="header">{title}</div>
        <div className="content">
          {content}
          {verifTxt && verifTxt.length > 0 && (
            <>
              <p>
                Entrez la valeur <strong>{verifTxt}</strong> ci-dessous pour
                continuer l'action :
              </p>
              <input
                type={"text"}
                placeholder={verifTxt}
                value={entered}
                maxLength={255}
                onInput={(e) => setEntered(e.target.value)}
              />
            </>
          )}
        </div>

        <div className="actions">
          {loading
            ? (
              <Olympe.MiniLoader />
            )
            : (
              buttons.map((elt) => renderFooterButtons(elt))
            )}
        </div>
      </ModalContainer>
    </Popup>
  );
};
