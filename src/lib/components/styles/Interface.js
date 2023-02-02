import { Sidebar } from "react-pro-sidebar";
import styled from "styled-components";
import { Colors } from "./Colors";
import { bounceBell, gelatine, spinEase } from "./KeyFrames";

export const HeaderWrap = styled.header`
  z-index: 3;
  padding: 0 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  min-height: 70px;
  max-height: 70px;

  color: ${Colors.light};

  background-color: ${Colors.black}66;
  border-bottom: 1px solid ${Colors.white}66;

  .SubMenu {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-width: 165px;

    img {
      height: 40px;
      width: 40px;
      object-fit: contain;
    }

    @media screen and (max-width: 700px) {
      display: none;

      &:nth-child(1) {
        display: flex;
        flex-wrap: nowrap;
        min-width: 100%;
        height: 70px;
        overflow-y: hidden;
        justify-content: space-between;

        p {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-size: 1rem;
        }
      }
    }

    p {
      color: ${Colors.light};
      font-size: 1rem;
      padding-left: 10px;
    }
  }
`;

export const MainWrap = styled.main`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);

  overflow-y: auto;
  color: ${Colors.light};

  .outlet {
    width: min(100%, 1300px);
    max-width: 100%;
    min-height: calc(var(--vh, 1vh) * 100 - 70px);

    margin-inline: auto;
    overflow-y: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    #ErrorPage {
      height: calc(var(--vh, 1vh) * 100 - 70px); // Adjust Height when incrusted
    }

    @media screen and (max-width: 700px) {
      width: 100%;
      margin: 0;
    }
  }
`;

export const WindowContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  transition: width 0.4s ease;

  width: calc(100% - 250px);
  height: calc(var(--vh, 1vh) * 100);

  @media screen and (max-width: 700px) {
    width: calc(100vw - 80px);
  }
`;

export const AccountPresentation = styled.div`
  height: 70px;
  padding: 0 10px;
  color: ${Colors.white};

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  white-space: nowrap;
  border-bottom: 1px solid ${Colors.white}66;

  h1 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    max-width: 70%;
    font-size: 1rem;
  }
`;

export const MainContextDiv = styled.div`
  display: flex;
  flex-direction: row;

  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);

  overflow: hidden;
  background-color: ${Colors.secondaryDarker};

  @media screen and (min-width: 700px) {
    ${WindowContainer} {
      background-image: url(${Colors.bgLogo});
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
`;

export const SideBarStyle = styled(Sidebar)`
  max-height: 100%;
  letter-spacing: 1px;

  background-color: transparent;
  font-family: "Lato", sans-serif;
  border-right: 1px solid ${Colors.black}66;

  > div {
    height: 100vh;
    height: calc(var(--vh, 1vh) * 100);

    background: ${Colors.black}66;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .SideBarLinks {
    outline: 1px solid ${Colors.white}00;

    .ps-submenu-expand-icon span {
      box-sizing: initial;
    }

    a {
      transition: background-color 0.4s ease;
      color: ${Colors.grey};
    }

    .ps-menu-icon {
      position: relative;

      .badgeOn {
        position: absolute;
        top: 0;
        right: 0;

        height: 10px;
        width: 10px;

        display: block;
        border-radius: 50%;
        background-color: ${Colors.blueLight};
      }
    }

    &.ps-active {
      outline: 1px solid ${Colors.white}22;

      &.bounce .ps-menu-icon {
        animation-name: ${bounceBell};
        animation-duration: 1s;
        animation-fill-mode: both;
      }
      &.rotate .ps-menu-icon {
        animation-name: ${spinEase};
        animation-duration: 1s;
        animation-fill-mode: both;
      }
      &:not(.rotate, .bounce) .ps-menu-icon {
        animation-name: ${gelatine};
        animation-duration: 0.5s;
        animation-fill-mode: both;
      }

      > a {
        background-color: ${Colors.white}22;
        outline: 1px solid ${Colors.white}22;
        color: ${Colors.blueLight};

        .ps-menu-label {
          color: ${Colors.light};
        }
      }
    }

    &:not(.SubMenu):hover a,
    &.SubMenu:not(.ps-open):hover > a {
      background-color: ${Colors.white}11;
      outline: 1px solid ${Colors.white}11;
    }

    &.ps-disabled {
      .ps-menu-label,
      .ps-menu-icon {
        color: #aaaaaa88;
      }
    }
  }

  .author {
    width: 100%;
    padding: 10px 5px 20px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 700px) {
      h1 {
        display: none;
      }
    }

    img {
      width: 100%;
      height: 50px;
      object-fit: contain;
    }

    h1 {
      margin: 0;
      padding: 5px;
      font-size: 14px;
      text-align: center;
      color: ${Colors.light};

      @media screen and (max-width: 700px) {
        display: none;
      }
    }
  }
`;
