import React from 'react'
import { mount, shallow } from 'enzyme'
import { ThemeProvider } from 'styled-components'

export function shallowWithTheme (children, theme = {}, options = {}) {
  // shallow mount the component wrapped in a ThemeProvider
  const wrapper = shallow(
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>,
    options
  )

  const { context, childContextTypes, ...rest } = options
  const contextObj = {
    ...wrapper.instance().getChildContext(),
    ...context }
  const childContextTypesObj = {
    ...ThemeProvider.childContextTypes,
    ...childContextTypes
  }

  return shallow(children, { context: contextObj, childContextTypes: childContextTypesObj, ...rest })
}

export function mountWithTheme (children, theme = {}, options = {}) {
  // Moun the component wrapped in a ThemeProvider
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>,
    options
  )

  const { context, childContextTypes, ...rest } = options

  const contextObj = {
    ...wrapper.instance().getChildContext(),
    ...context }
  const childContextTypesObj = {
    ...ThemeProvider.childContextTypes,
    ...childContextTypes
  }

  // Mount the child component with the context
  return mount(children, { context: contextObj, childContextTypes: childContextTypesObj, ...rest })
}
