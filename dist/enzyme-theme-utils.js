'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var enzyme = require('enzyme');
var styledComponents = require('styled-components');

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function shallowWithTheme(tree) {
  var theme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var WrappingThemeProvider = function WrappingThemeProvider(props) {
    return React.createElement(styledComponents.ThemeProvider, {
      theme: theme
    }, props.children);
  };

  return enzyme.shallow(tree, _objectSpread2({
    wrappingComponent: WrappingThemeProvider
  }, options));
}
function mountWithTheme(tree) {
  var theme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var WrappingThemeProvider = function WrappingThemeProvider(props) {
    return React.createElement(styledComponents.ThemeProvider, {
      theme: theme
    }, props.children);
  }; // Mount the child component with the context


  return enzyme.mount(tree, _objectSpread2({
    wrappingComponent: WrappingThemeProvider
  }, options));
}

exports.shallowWithTheme = shallowWithTheme;
exports.mountWithTheme = mountWithTheme;
