import React from 'react'
import PropTypes from 'prop-types'
import { mountWithTheme, shallowWithTheme } from './index.js'
import styled from 'styled-components'

const theme = {
  color: 'red'
}

const Button = styled.button`
  background-color: ${({ theme }) => theme.color || 'black'};
  color: white;
`
Button.displayName = 'StyledButton'

Button.contextTypes = {
  name: PropTypes.string,
  ...Button.contextTypes
}

describe('mountWithTheme with a theme', () => {
  const wrapper = mountWithTheme(
    <Button>
      Button Text
    </Button>,
    theme
  )

  it('renders the Button as the root element', () => {
    expect(wrapper.contains(Button)).toBeTruthy()
  })
  it('renders the Button with the styled-component theme passed in as context', () => {
    expect(wrapper.context('__styled-components__next__').getTheme()).toEqual(theme)
  })
  it('renders the Button with a red background color', () => {
    expect(wrapper).toHaveStyleRule('background-color', 'red')
  })
})

describe('mountWithTheme with no theme', () => {
  const wrapper = mountWithTheme(
    <Button>
      Button Text
    </Button>
  )

  it('renders the Button as the root element', () => {
    expect(wrapper.contains(Button)).toBeTruthy()
  })
  it('renders the Button with the styled-component theme passed in as context', () => {
    expect(wrapper.context('__styled-components__next__').getTheme()).toEqual({})
  })
  it('renders the Button with a red background color', () => {
    expect(wrapper).toHaveStyleRule('background-color', 'black')
  })
})

describe('mountWithTheme with additional context', () => {
  const wrapper = mountWithTheme(
    <Button>
      Button Text
    </Button>,
    theme,
    {
      context: {
        name: 'Bertha'
      },
      childContextTypes: {
        name: PropTypes.string
      }
    }
  )

  it('renders the Button as the root element', () => {
    expect(wrapper.contains(Button)).toBeTruthy()
  })
  it('renders the Button with the styled-component theme passed in as context', () => {
    expect(wrapper.context('__styled-components__next__').getTheme()).toEqual(theme)
  })
  it('renders the Button with a red background color', () => {
    expect(wrapper).toHaveStyleRule('background-color', 'red')
  })
  it('has access to the context passed in as options', () => {
    expect(wrapper.context('name')).toEqual('Bertha')
  })
})

describe('shallowWithTheme with a theme', () => {
  const wrapper = shallowWithTheme(
    <Button someProp>
      Button Text
    </Button>,
    theme
  )

  it('renders the Button as the root element', () => {
    expect(wrapper.props('someProp')).toBeTruthy()
  })
  it('renders the Button with the styled-component theme passed in as context', () => {
    expect(wrapper.context('__styled-components__next__').getTheme()).toEqual(theme)
  })
  it('renders the Button with a red background color', () => {
    expect(wrapper).toHaveStyleRule('background-color', 'red')
  })
})

describe('shallowWithTheme with no theme', () => {
  const wrapper = shallowWithTheme(
    <Button someProp>
      Button Text
    </Button>
  )

  it('renders the Button as the root element', () => {
    expect(wrapper.props('someProp')).toBeTruthy()
  })
  it('renders the Button with the styled-component theme passed in as context', () => {
    expect(wrapper.context('__styled-components__next__').getTheme()).toEqual({})
  })
  it('renders the Button with a red background color', () => {
    expect(wrapper).toHaveStyleRule('background-color', 'black')
  })
})

describe('shallowWithTheme with additional context', () => {
  const wrapper = shallowWithTheme(
    <Button someProp>
      Button Text
    </Button>,
    theme,
    {
      context: {
        name: 'Bertha'
      },
      childContextTypes: {
        name: PropTypes.string
      }
    }
  )

  it('renders the Button as the root element', () => {
    expect(wrapper.props('someProp')).toBeTruthy()
  })
  it('renders the Button with the styled-component theme passed in as context', () => {
    expect(wrapper.context('__styled-components__next__').getTheme()).toEqual(theme)
  })
  it('renders the Button with a red background color', () => {
    expect(wrapper).toHaveStyleRule('background-color', 'red')
  })
  it('has access to the context passed in as options', () => {
    expect(wrapper.context('name')).toEqual('Bertha')
  })
})