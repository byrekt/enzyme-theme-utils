
# Enzyme Theme Utils

```sh
npm install enzyme-theme-utils
```

## Motivation
Testing React components that need to be wrapped in a ThemeProvider is a pain in the butt. So after lots of trial-and-error programming I created this module to rectify this. Essentially what it does is renders the ThemeProvider and it's children inside a wrapper. Then it adds context to the wrapped ThemeProvider. Then it extracts the children and adds the context from the ThemeProvider to the child and mounts it.

## Usage

### mountWithTheme

```jsx
import React from 'react'
import PropTypes from 'prop-types'
import { mountWithTheme } from 'enzyme-theme-utils'

const someTheme = {
  colors: {
    red: 'red',
    yellow: 'yellow'
  }
}

describe('some themed component', () => {

  it('can be mounted, () => {
    const test = mountWithTheme(
      <SomeComponent/>,
      someTheme
    )

    // Assertions

  })
})

```

[MIT License](LICENSE.md)
