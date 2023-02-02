import React, { useEffect } from "react";

import { Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AlignLeft, Info, LogOut, X, XCircle } from "react-feather";
import Animate from "react-smooth";

import { Olympe } from "../";
import {
  AccountPresentation,
  HeaderWrap,
  MainContextDiv,
  MainWrap,
  SideBarStyle,
  WindowContainer
} from "./styles/Interface";
import { ErrorPage } from "./ErrorPage";
import { Utils } from "./utils";

export default function Interface ({ MainContext = null, ListItem = [] }) {
  if (!MainContext) {
    return (
      <ErrorPage e={{ status: 501, statusText: "Context Introuvable." }} />
    );
  }

  const context = React.useContext(MainContext);

  const location = useLocation();
  const navigate = useNavigate();
  const { collapseSidebar, collapsed } = useProSidebar();

  const path = location.pathname;
  const width = Utils.useWindowSize();

  const [logout, setLogout] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const closeModal = () => setOpen(false);

  useEffect(() => {
    document
      .getElementById("outletid")
      ?.scrollIntoView({ behavior: "instant" });
  }, [location]);

  const exitSessions = () => {
    setLogout(true);
    localStorage.removeItem("key");
    navigate("/login/");
  };

  window.addEventListener("resize", Olympe.Utils.appHeight);
  Olympe.Utils.appHeight();

  const onClick = (e) =>
    width < 700 && e.target.nodeName === "A" && !collapsed && collapseSidebar();

  const renderMenuItem = (item) => (
    <MenuItem
      key={item.name}
      disabled={item.link === false}
      icon={item.icon || <Info />}
      className={`SideBarLinks ${item.anim || ""}`}
      component={item.link || false}
      active={path.startsWith(item.path || "nc")}
    >
      {item.name || "Inconnu"}
    </MenuItem>
  );

  if (!context.corp.infos) return <Olympe.Loader />;

  return (
    <Animate from={{ opacity: 0 }} to={{ opacity: 1 }} easing="ease-in">
      <Olympe.Modal
        open={open}
        loading={logout}
        onClose={closeModal}
        title="Se déconnecter"
        closeOnDocumentClick
        content="Etes-vous certain de vouloir vous déconnecter de l'interface Olympe ?"
        buttons={[
          {
            isCancel: true,
            label: "Annuler",
            icon: <XCircle />,
            exec: closeModal
          },
          {
            label: "Déconnexion",
            icon: <LogOut />,
            exec: exitSessions
          }
        ]}
      />

      <MainContextDiv onClick={onClick}>
        <SideBarStyle defaultCollapsed={width < 700}>
          <Menu closeOnClick>
            <AccountPresentation>
              {!collapsed && <h1>Olympe - {context.corp.infos.permRole}</h1>}

              <Olympe.Button.Basic
                icon={!collapsed ? <X /> : <AlignLeft />}
                toExecute={collapseSidebar}
              />
            </AccountPresentation>

            {ListItem.map((elt) => renderMenuItem(elt))}
          </Menu>

          <div className="author">
            <img
              src={Olympe.Color.logoLight}
              height={60}
              width={60}
              alt="Damien Vergobbi"
            />
            <h1>Damien Vergobbi</h1>
          </div>
        </SideBarStyle>

        <WindowContainer className={collapsed ? "collapsed" : ""}>
          <HeaderWrap>
            <div className="SubMenu">
              <img
                src={context.corp.infos.corp.logo}
                height={40}
                width={40}
                alt={context.corp.infos.corp.name}
              />
              {window.innerWidth < 700
                ? (
                  <>
                    <p>{context.corp.infos.name}</p>
                    <Olympe.Button.Basic
                      label="Déconnexion"
                      icon={<LogOut />}
                      toExecute={() => setOpen(true)}
                    />
                  </>
                )
                : (
                  <p>
                    {context.corp.infos.corp.name} - {context.corp.infos.name}
                  </p>
                )}
            </div>

            <div className="SubMenu">
              <Olympe.Button.Basic
                label="Déconnexion"
                icon={<LogOut />}
                toExecute={() => setOpen(true)}
              />
            </div>
          </HeaderWrap>
          <MainWrap>
            <div className="outlet" id="outletid">
              <Outlet />
            </div>
          </MainWrap>
        </WindowContainer>
      </MainContextDiv>
    </Animate>
  );
}
