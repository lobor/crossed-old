import {
  Provider as MainProvider,
  CrossedContextProvider,
  CrossedContext,
} from './Provider';

export const createProvider = <StyledProviderProps>({
  StyledProvider,
}: {
  StyledProvider: React.ComponentType<StyledProviderProps>;
}) => {
  const CrossedStyledProvider = MainProvider({ StyledProvider }) as any;
  CrossedStyledProvider.displayName = 'CrossedStyledProvider';
  return CrossedStyledProvider as (props: StyledProviderProps) => JSX.Element;
};
export { CrossedContextProvider, CrossedContext };
