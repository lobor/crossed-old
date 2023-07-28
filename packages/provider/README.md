# @crossed/provider

## Installation

To use `@crossed/provider`, all you need to do is install the
`@crossed/provider` package:

```sh
$ yarn add @crossed/provider

# or

$ npm i @crossed/provider
```

#### Usage

Provider component that can be used to configure the library. It consists of StyledProvider, OverlayProvider and ToastProvider internally.

Default theme can be found in the `gluestack-ui.config` file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/main/example/storybook/src/gluestack-ui.config.ts).

```jsx
// import the createProvider function
import { createProvider } from '@crossed/provider';
import { config } from '../gluestack.config';
import { StyledProvider } from '@crossed/core';

export const Provider = createProvider({
  StyledProvider,
});

// Using the Provider component
export default () => (
  <Provider config={config.theme}>
    <Text />
  </Provider>
);
```

You can also create GluestackUIProvider component which can be used to wrap your entire application. This will make sure that all the components are wrapped with the provider with styling and other providers like OverlayProvider and ToastProvider.

```jsx
// import the createProvider function
import { StyledProvider } from '@crossed/core';
import { OverlayProvider } from '@crossed/overlay';
import { ToastProvider } from '@crossed/toast';

const GluestackUIStyledProvider = createProvider({ StyledProvider });

const GluestackUIProvider = ({ children, ...props }: any) => {
  return (
    <GluestackUIStyledProvider {...props}>
      <OverlayProvider>
        <ToastProvider>{children}</ToastProvider>
      </OverlayProvider>
    </GluestackUIStyledProvider>
  );
};
```
