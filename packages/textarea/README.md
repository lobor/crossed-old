# @crossed/textarea

## Installation

To use `@crossed/textarea`, all you need to do is install the
`@crossed/textarea` package:

```sh
$ yarn add @crossed/textarea

# or

$ npm i @crossed/textarea
```

## Usage

The Textarea component is designed to accommodate larger amounts of text input. It allows multi-line input and can be easily customized to fit the user's needs. Here's an example how to use this package to create one:

```jsx
import { Root, Input } from '../components/core/text-area/styled-components';
import { createTextarea } from '@crossed/textarea';
const Textarea = createTextarea({
  Root,
  Input,
});
```

## Customizing the textarea:

Default styling of all these components can be found in the components/core/textarea file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/development/example/storybook/src/ui-components/Textarea/index.tsx) of the styled `textarea` components.

```jsx
// import the styles
import { Root, Input } from '../components/core/text-area/styled-components';

// import the createTextarea function
import { createTextarea } from '@crossed/textarea';

// Understanding the API
const Textarea = createTextarea({
  Root,
  Input,
});

// Using the textarea component
export default () => (
  <Textarea>
    <Textarea.Input placeholder="your text goes here..." />
  </Textarea>
);
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/components/forms/text-area).
