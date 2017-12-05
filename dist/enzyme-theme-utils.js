'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var enzyme = require('enzyme');
var styledComponents = require('styled-components');

function shallowWithTheme(children) {
  var theme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  // shallow mount the component wrapped in a ThemeProvider
  var wrapper = enzyme.shallow(React.createElement(
    styledComponents.ThemeProvider,
    { theme: theme },
    children
  ), options);
  // Set the context and remount.
  var themeProvider = wrapper.shallow({
    context: wrapper.instance().getChildContext()
  });

  // shallow mount the child component with the context
  return enzyme.shallow(themeProvider.instance().props.children, { context: wrapper.instance().getChildContext(), childContextTypes: styledComponents.ThemeProvider.childContextTypes });
}

function mountWithTheme(children) {
  var theme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  // Moun the component wrapped in a ThemeProvider
  var wrapper = enzyme.mount(React.createElement(
    styledComponents.ThemeProvider,
    { theme: theme },
    children
  ), options);
  // Set the context and remount.
  var themeProvider = wrapper.mount({
    context: wrapper.instance().getChildContext()
  });

  // Mount the child component with the context
  return enzyme.mount(themeProvider.instance().props.children, { context: wrapper.instance().getChildContext(), childContextTypes: styledComponents.ThemeProvider.childContextTypes });
}

exports.shallowWithTheme = shallowWithTheme;
exports.mountWithTheme = mountWithTheme;
