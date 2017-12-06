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
  // Set the context and remount.
  const themeProvider = wrapper.shallow({
    context: wrapper.instance().getChildContext()
  })

  // shallow mount the child component with the context
  return shallow(themeProvider.instance().props.children, { context: wrapper.instance().getChildContext(), childContextTypes: ThemeProvider.childContextTypes })
}

export function mountWithTheme (children, theme = {}, options = {}) {
  // Moun the component wrapped in a ThemeProvider
  const wrapper = mount(
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>,
    options
  )
  // Set the context and remount.
  const themeProvider = wrapper.mount({
    context: wrapper.instance().getChildContext()
  })

  const { context, childContextTypes, ...rest} = options
  const contextObj = {
    ...wrapper.instance().getChildContext(),
    ...context }
  const childContextTypesObj = {
    ...ThemeProvider.childContextTypes,
    ...childContextTypes
  }
  // console.log(contextObj, childContextTypes)
  // Mount the child component with the context
  return mount(themeProvider.instance().props.children, { context: contextObj, childContextTypes: childContextTypesObj, ...rest })
}