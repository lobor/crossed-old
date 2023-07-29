"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var Toast_exports = {};
__export(Toast_exports, {
  ToastContext: () => ToastContext,
  ToastProvider: () => ToastProvider,
  useToast: () => useToast
});
module.exports = __toCommonJS(Toast_exports);
var import_react = __toESM(require("react"));
var import_ToastList = require("./ToastList");
const ToastContext = (0, import_react.createContext)({
  toastInfo: {},
  setToastInfo: () => {
  },
  setToast: () => {
  },
  removeToast: () => {
  },
  hideAll: () => {
  },
  isActive: () => false,
  visibleToasts: {},
  setVisibleToasts: () => {
  },
  hideToast: () => {
  }
});
const ToastProvider = ({ children }) => {
  const [toastInfo, setToastInfo] = (0, import_react.useState)({});
  const [visibleToasts, setVisibleToasts] = (0, import_react.useState)({});
  const toastIndex = import_react.default.useRef(1);
  const hideAll = import_react.default.useCallback(() => {
    setVisibleToasts({});
  }, [setVisibleToasts]);
  const hideToast = import_react.default.useCallback(
    (id) => {
      setVisibleToasts((prevVisibleToasts) => ({
        ...prevVisibleToasts,
        [id]: false
      }));
    },
    [setVisibleToasts]
  );
  const isActive = import_react.default.useCallback(
    (id) => {
      for (const toastPosition of Object.keys(toastInfo)) {
        const positionArray = toastInfo[toastPosition];
        return positionArray.findIndex((toastData) => toastData.id === id) > -1;
      }
      return false;
    },
    [toastInfo]
  );
  const removeToast = import_react.default.useCallback(
    (id) => {
      setToastInfo((prev) => {
        for (const toastPosition of Object.keys(prev)) {
          const positionArray = prev[toastPosition];
          const isToastPresent = positionArray.findIndex((toastData) => toastData.id === id) > -1;
          if (isToastPresent) {
            const newPositionArray = positionArray.filter(
              (item) => item.id !== id
            );
            const temp = {};
            temp[toastPosition] = newPositionArray;
            const newToastInfo = { ...prev, ...temp };
            return newToastInfo;
          }
        }
        return prev;
      });
    },
    [setToastInfo]
  );
  const setToast = import_react.default.useCallback(
    (props) => {
      const {
        placement = "bottom",
        render,
        id = toastIndex.current++,
        duration = 5e3
      } = props;
      let positionToastArray = toastInfo[placement];
      if (!positionToastArray)
        positionToastArray = [];
      let component = null;
      if (render) {
        component = render({ id });
        toastInfo[placement] = [
          ...positionToastArray,
          { component, id, config: props }
        ];
        setToastInfo({ ...toastInfo });
        setVisibleToasts({ ...visibleToasts, [id]: true });
        if (duration !== null) {
          setTimeout(function() {
            hideToast(id);
          }, duration);
        }
      }
      return id;
    },
    [toastInfo, visibleToasts, hideToast]
  );
  const contextValue = import_react.default.useMemo(() => {
    return {
      toastInfo,
      setToastInfo,
      setToast,
      removeToast,
      hideAll,
      isActive,
      visibleToasts,
      setVisibleToasts,
      hideToast
    };
  }, [
    toastInfo,
    setToastInfo,
    setToast,
    removeToast,
    hideAll,
    isActive,
    visibleToasts,
    setVisibleToasts,
    hideToast
  ]);
  return /* @__PURE__ */ import_react.default.createElement(ToastContext.Provider, { value: contextValue }, children, /* @__PURE__ */ import_react.default.createElement(import_ToastList.ToastList, null));
};
const useToast = () => {
  const { setToast, hideAll, isActive, hideToast } = import_react.default.useContext(ToastContext);
  const toast = (0, import_react.useMemo)(
    () => ({
      show: setToast,
      close: hideToast,
      closeAll: hideAll,
      isActive
    }),
    [setToast, hideAll, isActive, hideToast]
  );
  return toast;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ToastContext,
  ToastProvider,
  useToast
});
//# sourceMappingURL=Toast.js.map
