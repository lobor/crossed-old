import { StyledProvider } from "@gluestack-style/react";
import { Config } from "@gluestack-style/react/lib/typescript/types";
import { PropsWithChildren } from "react";

export const CrossedProvider = ({
  config,
  children,
}: PropsWithChildren<{ config: Config }>) => {
  return <StyledProvider config={config}>{children}</StyledProvider>;
};
