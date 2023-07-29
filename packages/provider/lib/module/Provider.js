import React from "react";
import { Platform } from "react-native";
import { keyboardDismissHandlerManager } from "@react-native-aria/interactions";
const CrossedContext = React.createContext({});
const CrossedContextProvider = ({
  children,
  components,
  ...props
}) => {
  React.useEffect(() => {
    let escapeKeyListener = null;
    if (Platform.OS === "web") {
      escapeKeyListener = (e) => {
        if (e.key === "Escape") {
          if (keyboardDismissHandlerManager.length() > 0) {
            const lastHandler = keyboardDismissHandlerManager.pop();
            lastHandler();
          }
        }
      };
      document.addEventListener("keydown", escapeKeyListener);
    }
    return () => {
      if (Platform.OS === "web") {
        document.removeEventListener("keydown", escapeKeyListener);
      }
    };
  }, []);
  return /* @__PURE__ */ React.createElement(CrossedContext.Provider, { value: components, ...props }, children);
};
const Provider = ({ StyledProvider }) => {
  return ({ children, components, config, ...props }) => {
    return /* @__PURE__ */ React.createElement(CrossedContextProvider, { components }, /* @__PURE__ */ React.createElement(StyledProvider, { config, ...props }, children));
  };
};
export {
  CrossedContext,
  CrossedContextProvider,
  Provider
};
//# sourceMappingURL=Provider.js.map
