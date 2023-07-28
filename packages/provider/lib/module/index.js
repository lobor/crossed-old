import { Provider as MainProvider, CrossedContextProvider, CrossedContext } from './Provider';
export const createProvider = _ref => {
  let {
    StyledProvider
  } = _ref;
  const CrossedStyledProvider = MainProvider({
    StyledProvider
  });
  CrossedStyledProvider.displayName = 'CrossedStyledProvider';
  return CrossedStyledProvider;
};
export { CrossedContextProvider, CrossedContext };
//# sourceMappingURL=index.js.map