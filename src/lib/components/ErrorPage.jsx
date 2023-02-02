import React from "react";
import { Search } from "react-feather";
import { useRouteError } from "react-router-dom";
import { WrapperError } from "./styles/ErrorPage";

export function ErrorPage ({
  e = {
    status: 500,
    statusText: "Redirection automatique sur la page d'erreur."
  }
}) {
  const error = e || useRouteError();

  return (
    <WrapperError id="ErrorPage">
      <div>
        <p>
          <Search />
        </p>
        <p>
          Cette page n'existe pas ou vous n'êtes pas habilité pour la consulter.
        </p>

        <span>
          {error.status && `${error.status} : `}
          {error.statusText}
        </span>
        {window.location.pathname === "/application/" ||
        window.location.pathname === "/login/"
          ? (
            <a href="#" className="disabled">
              L'interface Olympe semble ne pas fonctionner. Contactez
              l'administrateur si le problème persiste.
            </a>
          )
          : (
            <a href="/">Retourner à l'accueil</a>
          )}
      </div>
    </WrapperError>
  );
}
