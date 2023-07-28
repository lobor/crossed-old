# @crossed/vstack

## Installation

To use `@crossed/vstack`, all you need to do is install the
`@crossed/vstack` package:

```sh
$ yarn add @crossed/vstack

# or

$ npm i @crossed/vstack
```

## Usage

VStack organizes items vertically in a layout. Alternatively, you can use Column as an alias for VStack to achieve the same layout. Here's an example how to use this package to create one:

```jsx
import { Root, Spacer } from '../components/vstack/styled-components';
import { createVStack } from '@crossed/vstack';
const VStack = createVStack({
  Root,
  Spacer,
});
```

## Customizing the vstack:

Default styling of all these components can be found in the components/core/vstack file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/development/example/storybook/src/ui-components/VStack/index.tsx) of the styled `vstack` components.

```jsx
// import the styles
import { Root, Spacer } from '../components/vstack/styled-components';

// import the createVStack function
import { createVStack } from '@crossed/vstack';

// Understanding the API
const VStack = createVStack({
  Root,
  Spacer,
});

// Using the vstack component
export default () => <VStack />;
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/components/layout/vstack).
