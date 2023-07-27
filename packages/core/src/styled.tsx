import { ComponentType, PropsWithChildren } from "react";
import { StyledProps as NStyledProps, styled as styledWind } from "nativewind";
import tw from "twrnc";

type StyledProps<P> = P & Pick<NStyledProps<P>, "tw"> & P;

// twrnc
export const styled = <P extends object>(
  Component: ComponentType<P>,
  twClassNames: string[] = []
) => {
  return ({
    nativeProps = {} as P,
    children,
    ...props
  }: PropsWithChildren<StyledProps<{ nativeProps?: P }>>) => {
    const style = tw.style(...Object.keys(props), ...twClassNames);
    return (
      <Component
        {...({ ...nativeProps, children } as any)}
        style={{ ...style, ...nativeProps.style }}
      />
    );
  };
};

// nativewind
// export const styled = <P extends object>(component: ComponentType<P>) => {
//   const Component = styledWind(component);
//   return ({
//     nativeProps,
//     children,
//     ...props
//   }: PropsWithChildren<StyledProps<{ nativeProps?: P }>>) => {
//     const tailwindProps = Object.keys(props).join(" ") as NStyledProps<P>["tw"];
//     console.log(tailwindProps);
//     return (
//       <Component
//         tw={tailwindProps}
//         {...({ ...nativeProps, children } as any)}
//       />
//     );
//   };
// };
