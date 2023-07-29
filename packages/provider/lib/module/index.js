import {
  Provider as MainProvider,
  CrossedContextProvider,
  CrossedContext
} from "./Provider";
const createProvider = ({
  StyledProvider
}) => {
  const CrossedStyledProvider = MainProvider({ StyledProvider });
  CrossedStyledProvider.displayName = "CrossedStyledProvider";
  return CrossedStyledProvider;
};
export {
  CrossedContext,
  CrossedContextProvider,
  createProvider
};
//# sourceMappingURL=index.js.map
