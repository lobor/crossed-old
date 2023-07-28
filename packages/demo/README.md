<h3 align="center">
  <a href="https://github.com/gluestack/crossed">
    <img src="https://raw.githubusercontent.com/gluestack/crossed/main/img/gluestack-logo.svg" alt="gluestack logo">
  </a>
  <br>
  <br>
</h3>

## A library that allows you to use CSS in your React and React Native projects with a modern, powerful and flexible way. `crossed` allows you to write CSS using JavaScript, which enables you to take advantage of the power and expressiveness of both languages. With its simple and intuitive API, you can easily create dynamic styles, responsive design, and handle themes for your applications.

## Documentation

You can find detailed documentation for each component, including a list of props and examples, in https://style.gluestack.io/docs website.

## Installation

To use `@crossed/react`, all you need to do is install the
`@crossed/react` package and its peer dependencies:

```sh
$ yarn add @crossed/react react-native-web react-native-svg

# or

$ npm i @crossed/react react-native-web react-native-svg
```

## Usage

To use the `@crossed/react` in your project, follow these steps:

1. Wrap your application with the `StyledProvider` provided by
   **@crossed/react**.

```jsx
import { StyledProvider } from '@crossed/core';

// Do this at the root of your application
function App({ children }) {
  return <StyledProvider>{children}</StyledProvider>;
}
```

1. Now you can use `@crossed/react` to style your components by using the `styled` function provided by the library. For example:

```jsx
import React from 'react';
import { styled } from '@crossed/core';

const StyledButton = styled(
  Pressable,
  {
    bg: '$red500',
    p: '$3',
  },
  {}
);

const StyledButtonText = styled(Text, {}, {});

export const App = () => {
  return (
    <StyledProvider>
      <StyledButton>
        <StyledButtonText>Button</StyledButtonText>
      </StyledButton>
    </StyledProvider>
  );
};
```

More guides on how to get started are available
[here](https://style.gluestack.io/).
