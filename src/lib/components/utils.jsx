import React from "react";
import { createAvatar } from "@dicebear/core";
import { loreleiNeutral } from "@dicebear/collection";
import $ from "jquery";
import moment from "moment";
import "moment/locale/fr";

const renderHTML = (rawHTML, classes = "") =>
  React.createElement("div", {
    className: classes,
    dangerouslySetInnerHTML: { __html: rawHTML }
  });

const appHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--vh", window.innerHeight * 0.01 + "px");
};

const numberShorter = (number = 0) => {
  const decPlaces = Math.pow(10, 2);
  const abbrev = ["k", "m", "b", "t"];

  for (let i = abbrev.length - 1; i >= 0; i--) {
    const size = Math.pow(10, (i + 1) * 3);

    if (size <= number) {
      number = Math.round((number * decPlaces) / size) / decPlaces;

      if (number === 1000 && i < abbrev.length - 1) {
        number = 1;
        i++;
      }

      number += abbrev[i];
      break;
    }
  }

  // if (!Number.isInteger(number)) return -1;
  return number;
};

const stringUpper = (str = "") => str.charAt(0).toUpperCase() + str.slice(1);

const SentLogTime = (lastSeenString = null, short = false) => {
  const nowDate = moment();
  const lastSeen = moment(lastSeenString);
  const diff = nowDate.diff(lastSeen, "seconds");

  if (short) {
    if (diff < 2) {
      return "À l'instant";
    }
    if (diff < 60) {
      const units = nowDate.diff(lastSeen, "seconds");
      return `${units} sec`;
    }
    if (diff < 3600) {
      const units = nowDate.diff(lastSeen, "minutes");
      return `${units} min`;
    } else if (diff < 86400) {
      const units = nowDate.diff(lastSeen, "hours");
      return `${units}h`;
    } else if (diff < 604800) {
      const units = nowDate.diff(lastSeen, "days");
      return `${units}j`;
    } else if (diff < 2592000) {
      const units = nowDate.diff(lastSeen, "weeks");
      return `${units} sem.`;
    } else if (diff < 31536000) {
      const units = nowDate.diff(lastSeen, "months");
      return `${units} mois`;
    } else {
      const units = nowDate.diff(lastSeen, "years");
      return `${units} ${units > 1 ? "années" : "an"}`;
    }
  }
  if (diff < 2) {
    return "À l'instant";
  }
  if (diff < 60) {
    const units = nowDate.diff(lastSeen, "seconds");
    return `Il y a ${units} seconde${units > 1 ? "s" : ""}`;
  }
  if (diff < 3600) {
    const units = nowDate.diff(lastSeen, "minutes");
    return `Il y a ${units} minute${units > 1 ? "s" : ""}`;
  } else if (diff < 86400) {
    const units = nowDate.diff(lastSeen, "hours");
    return `Il y a ${units} heure${units > 1 ? "s" : ""}`;
  } else {
    const units = nowDate.diff(lastSeen, "days");
    return units === 1
      ? "Hier à " + lastSeen.format("HH:mm").replace(":", "h")
      : lastSeen.format("DD MMM YY à HH:mm").replace(":", "h");
  }
};

const AvatarSvg = ({ seed = "" }) =>
  createAvatar(loreleiNeutral, {
    seed,
    scale: 100,
    radius: 50,
    backgroundColor: ["b6e3f4", "c0aede"],
    backgroundType: ["gradientLinear"]
  });

const AvatarSvgHtml = ({ seed = "" }) =>
  renderHTML(
    AvatarSvg({
      seed
    })
  );

const truncStr = ({ str = "", len = 15 }) =>
  str.length > len ? str.slice(0, len) + "..." : str;

const getFileSize = (bytes = 0) => {
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Byte";
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1000)), 10);
  if (i === 0) return `${bytes} ${sizes[i]}`;
  return `${(bytes / 1000 ** i).toFixed(2)} ${sizes[i]}`;
};

const enterInput = (e) => {
  e.preventDefault();
  $(e.target)[0].blur();
};

const downloadCSV = (datas = null, filename = "export.csv") => {
  const link = document.createElement("a");
  let csv = datas;

  if (csv == null) return;

  if (!csv.match(/^data:text\/csv/i)) {
    csv = `data:text/csv;charset=utf-8,${csv}`;
  }

  link.setAttribute("href", encodeURI(csv));
  link.setAttribute("download", filename);
  link.click();
};

function useWindowSize () {
  const [size, setSize] = React.useState(0);

  React.useLayoutEffect(() => {
    const updateSize = () => setSize(window.innerWidth);

    window.addEventListener("resize", updateSize);

    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
}

export const Utils = {
  renderHTML,
  appHeight,
  numberShorter,
  stringUpper,
  SentLogTime,
  AvatarSvg,
  AvatarSvgHtml,
  truncStr,
  getFileSize,
  enterInput,
  downloadCSV,
  useWindowSize
};
