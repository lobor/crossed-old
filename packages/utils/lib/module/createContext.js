import React from "react";
function createContext(rootComponentName) {
  const Context = React.createContext(null);
  function Provider(props) {
    const { children, ...providerProps } = props;
    const value = React.useMemo(
      () => providerProps,
      //  eslint-disable-next-line react-hooks/exhaustive-deps
      Object.values(providerProps)
    );
    return /* @__PURE__ */ React.createElement(Context.Provider, { value }, children);
  }
  function useContext(consumerName) {
    const context = React.useContext(Context);
    if (context === null) {
      throw new Error(
        `\`${consumerName}\` must be used within \`${rootComponentName}\``
      );
    }
    return context;
  }
  Provider.displayName = rootComponentName + "Provider";
  return [Provider, useContext];
}
export {
  createContext
};
//# sourceMappingURL=createContext.js.map
