import React from 'react'
import { mount, shallow } from 'enzyme'
import { ThemeProvider } from 'styled-components'

export function shallowWithTheme (tree, theme = {}, options = {}) {
  const WrappingThemeProvider = (props) => (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )

  return shallow(tree, { wrappingComponent: WrappingThemeProvider, ...options })
}

export function mountWithTheme (tree, theme = {}, options = {}) {
  const WrappingThemeProvider = (props) => (
    <ThemeProvider theme={theme}>
      {props.children}
    </ThemeProvider>
  )

  // Mount the child component with the context
  return mount(tree, { wrappingComponent: WrappingThemeProvider, ...options })
}
