import { ErrorPage } from "./components/ErrorPage";
import { MainWrapper } from "./components/Wrapper";
import { GlobalStyles } from "./components/styles/Global";
import { Utils } from "./components/utils";
import Tooltips from "./components/Tooltips";
import {
  ContainerPdf,
  ContainerSeparator,
  Item,
  ItemChart,
  ItemFullWidth,
  ItemTitle,
  ItemWithAvatar
} from "./components/styles/Items";
import ChartItem from "./components/ChartItem";
import WrapperFade from "./components/WrapperFade";
import {
  customStyles,
  paginationComponentOptions,
  renderEmptyTable,
  tableTheme
} from "./components/TableUtils";
import { Colors } from "./components/styles/Colors";
import PreviewTable from "./components/PreviewTable";
import PreviewList from "./components/PreviewList";
import { DataTableCustom } from "./components/styles/DataTable";
import { FileForm, Input, InputFile } from "./components/styles/Inputs";
import Loader from "./components/Loader";
import { MiniLoader } from "./components/styles/MiniLoader";
import { ButtonBase } from "./components/Button";
import { PickFile, UploadFileBtn, FileCancel } from "./components/styles/Buttons";
import LoginPage from "./components/Login";
import Interface from "./components/Interface";
import { Modal } from "./components/Modal";

export const Olympe = {
  Color: Colors,
  Wrapper: MainWrapper,
  Fade: WrapperFade,
  Chart: ChartItem,
  GlobalStyles,
  ErrorPage,
  Tooltips,
  Utils,
  Item,
  Loader,
  MiniLoader,
  ItemTitle,
  ItemChart,
  ItemFullWidth,
  ItemWithAvatar,
  WrapPdf: ContainerPdf,
  SubItem: ContainerSeparator,
  Interface,
  Modal,

  List: {
    Table: PreviewTable,
    Menu: PreviewList
  },

  Table: {
    Wrap: DataTableCustom,
    Empty: renderEmptyTable,
    Style: customStyles,
    Pagination: paginationComponentOptions,
    Theme: tableTheme
  },

  Input: {
    Text: Input,
    FormFile: FileForm,
    File: InputFile
  },

  Button: {
    Basic: ButtonBase,
    FilePick: PickFile,
    FileUpload: UploadFileBtn,
    FileCancel
  },

  LoginPage
};
