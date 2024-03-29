import React, { useState, createContext, useMemo } from "react";
import { ToastList } from "./ToastList";
const ToastContext = createContext({
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
  const [toastInfo, setToastInfo] = useState({});
  const [visibleToasts, setVisibleToasts] = useState({});
  const toastIndex = React.useRef(1);
  const hideAll = React.useCallback(() => {
    setVisibleToasts({});
  }, [setVisibleToasts]);
  const hideToast = React.useCallback(
    (id) => {
      setVisibleToasts((prevVisibleToasts) => ({
        ...prevVisibleToasts,
        [id]: false
      }));
    },
    [setVisibleToasts]
  );
  const isActive = React.useCallback(
    (id) => {
      for (const toastPosition of Object.keys(toastInfo)) {
        const positionArray = toastInfo[toastPosition];
        return positionArray.findIndex((toastData) => toastData.id === id) > -1;
      }
      return false;
    },
    [toastInfo]
  );
  const removeToast = React.useCallback(
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
  const setToast = React.useCallback(
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
  const contextValue = React.useMemo(() => {
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
  return /* @__PURE__ */ React.createElement(ToastContext.Provider, { value: contextValue }, children, /* @__PURE__ */ React.createElement(ToastList, null));
};
const useToast = () => {
  const { setToast, hideAll, isActive, hideToast } = React.useContext(ToastContext);
  const toast = useMemo(
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
export {
  ToastContext,
  ToastProvider,
  useToast
};
//# sourceMappingURL=Toast.js.map
