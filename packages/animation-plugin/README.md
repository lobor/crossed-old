# @crossed/animation-plugin

## Installation

To use `@crossed/animation-plugin`, all you need to do is install the
`@crossed/animation-plugin` package:

```sh
$ yarn add @crossed/animation-plugin

# or

$ npm i @crossed/animation-plugin
```

## Usage

You can initialize the Animation plugin by creating a new instance of the AnimationResolver class and providing it as an argument to the createStyled function. The `AnimationResolver` takes an optional `styledUtils` object that maps the styled utils object. Here's an example:

```jsx
import { createStyled } from '@crossed/core';
import { AnimationResolver } from '@crossed/animation-plugin';

const styled = createStyled([
  new AnimationResolver({
    aliases: {
      ':initial': 'initial',
      ':animate': 'animate',
      ':exit': 'exit',
    },
  }),
]);
```

In this example, we are creating a new instance of the AnimationResolver class, passing an object with the 'aliases' property as an argument. The aliases object maps the aliases :initial, :animate, and :exit to their corresponding animation props.

## Example of creating a styled component:

Once the plugin is initialized, you can use the styled function to create styled components with animation props. Here's an example:

```jsx
const Box = styled(Motion.View, {
  ':initial': { opacity: 0 },
  ':animate': { opacity: 1 },
  ':exit': { opacity: 0 },
});
```

The final internal styled object that will be resolved is:

```jsx
styledObject = {
  'props': {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
    }
  },
};
```

More guides on how to get started are available
[here](https://style.gluestack.io/).
