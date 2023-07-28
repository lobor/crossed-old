# @crossed/switch

## Installation

To use `@crossed/switch`, all you need to do is install the
`@crossed/switch` package:

```sh
$ yarn add @crossed/switch

# or

$ npm i @crossed/switch
```

## Usage

The Switch component offers a stylish alternative to the Checkbox, allowing users to enable or disable an option with a sleek sliding motion. This component is perfect for adding a touch of elegance and interactivity to your user interface. Here's an example how to use this package to create one:

```jsx
import { createSwitch } from '@crossed/switch';
import { Root } from './styled-components';

export const Switch = createSwitch({
  Root,
});
```

## Customizing the Switch:

Default styling of all these components can be found in the components/core/switch file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/development/example/storybook/src/ui-components/Switch/index.tsx) of the styled `Switch` components.

```jsx
// import the styles
import { Root } from '../components/core/switch/styled-components';

// import the createSwitch function
import { createSwitch } from '@crossed/switch';

// Understanding the API
const Switch = createSwitch({
  Root,
});

// Using the switch component
export default () => <Switch />;
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/components/forms/switch).
