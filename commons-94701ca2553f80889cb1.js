(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "+Hmc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ createUnarySpacing; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("E9XD");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("ODXe");

// EXTERNAL MODULE: ./node_modules/@material-ui/system/esm/breakpoints.js
var breakpoints = __webpack_require__("LybE");

// EXTERNAL MODULE: ./node_modules/@material-ui/system/esm/merge.js
var merge = __webpack_require__("bv9d");

// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/memoize.js
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) {
      cache[arg] = fn(arg);
    }

    return cache[arg];
  };
}
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/spacing.js






var properties = {
  m: 'margin',
  p: 'padding'
};
var directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
};
var aliases = {
  marginX: 'mx',
  marginY: 'my',
  paddingX: 'px',
  paddingY: 'py'
}; // memoize() impact:
// From 300,000 ops/sec
// To 350,000 ops/sec

var getCssProperties = memoize(function (prop) {
  // It's not a shorthand notation.
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }

  var _prop$split = prop.split(''),
      _prop$split2 = Object(slicedToArray["a" /* default */])(_prop$split, 2),
      a = _prop$split2[0],
      b = _prop$split2[1];

  var property = properties[a];
  var direction = directions[b] || '';
  return Array.isArray(direction) ? direction.map(function (dir) {
    return property + dir;
  }) : [property + direction];
});
var spacingKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY'];
function createUnarySpacing(theme) {
  var themeSpacing = theme.spacing || 8;

  if (typeof themeSpacing === 'number') {
    return function (abs) {
      if (false) {}

      return themeSpacing * abs;
    };
  }

  if (Array.isArray(themeSpacing)) {
    return function (abs) {
      if (false) {}

      return themeSpacing[abs];
    };
  }

  if (typeof themeSpacing === 'function') {
    return themeSpacing;
  }

  if (false) {}

  return function () {
    return undefined;
  };
}

function getValue(transformer, propValue) {
  if (typeof propValue === 'string') {
    return propValue;
  }

  var abs = Math.abs(propValue);
  var transformed = transformer(abs);

  if (propValue >= 0) {
    return transformed;
  }

  if (typeof transformed === 'number') {
    return -transformed;
  }

  return "-".concat(transformed);
}

function getStyleFromPropValue(cssProperties, transformer) {
  return function (propValue) {
    return cssProperties.reduce(function (acc, cssProperty) {
      acc[cssProperty] = getValue(transformer, propValue);
      return acc;
    }, {});
  };
}

function spacing(props) {
  var theme = props.theme;
  var transformer = createUnarySpacing(theme);
  return Object.keys(props).map(function (prop) {
    // Using a hash computation over an array iteration could be faster, but with only 28 items,
    // it's doesn't worth the bundle size.
    if (spacingKeys.indexOf(prop) === -1) {
      return null;
    }

    var cssProperties = getCssProperties(prop);
    var styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
    var propValue = props[prop];
    return Object(breakpoints["a" /* handleBreakpoints */])(props, propValue, styleFromPropValue);
  }).reduce(merge["a" /* default */], {});
}

spacing.propTypes =  false ? undefined : {};
spacing.filterProps = spacingKeys;
/* harmony default export */ var esm_spacing = __webpack_exports__["b"] = (spacing);

/***/ }),

/***/ "0PSK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ }),

/***/ "30Ys":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/stars-43af39b1229652f4e442f6a79757764e.png";

/***/ }),

/***/ "4Hym":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return reflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getTransitionProps; });
var reflow = function reflow(node) {
  return node.scrollTop;
};
function getTransitionProps(props, options) {
  var timeout = props.timeout,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style;
  return {
    duration: style.transitionDuration || typeof timeout === 'number' ? timeout : timeout[options.mode] || 0,
    delay: style.transitionDelay
  };
}

/***/ }),

/***/ "5AJ6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createSvgIcon; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("HR5l");



/**
 * Private module reserved for @material-ui/x packages.
 */

function createSvgIcon(path, displayName) {
  var Component = function Component(props, ref) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      ref: ref
    }, props), path);
  };

  if (false) {}

  Component.muiName = _SvgIcon__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].muiName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(Component));
}

/***/ }),

/***/ "5v02":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MODES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BLOCK_IDS; });
var MODES={READ:0,ASK:1};var BLOCK_IDS={MOON:"moon-block",ABOUT:"about-block",PROJECTS:"projects-block"};

/***/ }),

/***/ "668i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("gk1O");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("bfFb");
/* harmony import */ var _utils_useEventCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Ovef");







function mapEventPropToEvent(eventProp) {
  return eventProp.substring(2).toLowerCase();
}

function clickedRootScrollbar(event) {
  return document.documentElement.clientWidth < event.clientX || document.documentElement.clientHeight < event.clientY;
}
/**
 * Listen for click events that occur somewhere in the document, outside of the element itself.
 * For instance, if you need to hide a menu when people click anywhere else on your page.
 */


function ClickAwayListener(props) {
  var children = props.children,
      _props$disableReactTr = props.disableReactTree,
      disableReactTree = _props$disableReactTr === void 0 ? false : _props$disableReactTr,
      _props$mouseEvent = props.mouseEvent,
      mouseEvent = _props$mouseEvent === void 0 ? 'onClick' : _props$mouseEvent,
      onClickAway = props.onClickAway,
      _props$touchEvent = props.touchEvent,
      touchEvent = _props$touchEvent === void 0 ? 'onTouchEnd' : _props$touchEvent;
  var movedRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](false);
  var nodeRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
  var activatedRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](false);
  var syntheticEventRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](false);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    // Ensure that this component is not "activated" synchronously.
    // https://github.com/facebook/react/issues/20074
    setTimeout(function () {
      activatedRef.current = true;
    }, 0);
    return function () {
      activatedRef.current = false;
    };
  }, []); // can be removed once we drop support for non ref forwarding class components

  var handleOwnRef = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (instance) {
    // #StrictMode ready
    nodeRef.current = react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"](instance);
  }, []);
  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(children.ref, handleOwnRef); // The handler doesn't take event.defaultPrevented into account:
  //
  // event.preventDefault() is meant to stop default behaviours like
  // clicking a checkbox to check it, hitting a button to submit a form,
  // and hitting left arrow to move the cursor in a text input etc.
  // Only special HTML elements have these default behaviors.

  var handleClickAway = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(function (event) {
    // Given developers can stop the propagation of the synthetic event,
    // we can only be confident with a positive value.
    var insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false; // 1. IE 11 support, which trigger the handleClickAway even after the unbind
    // 2. The child might render null.
    // 3. Behave like a blur listener.

    if (!activatedRef.current || !nodeRef.current || clickedRootScrollbar(event)) {
      return;
    } // Do not act if user performed touchmove


    if (movedRef.current) {
      movedRef.current = false;
      return;
    }

    var insideDOM; // If not enough, can use https://github.com/DieterHolvoet/event-propagation-path/blob/master/propagationPath.js

    if (event.composedPath) {
      insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
    } else {
      // TODO v6 remove dead logic https://caniuse.com/#search=composedPath.
      var doc = Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(nodeRef.current);
      insideDOM = !doc.documentElement.contains(event.target) || nodeRef.current.contains(event.target);
    }

    if (!insideDOM && (disableReactTree || !insideReactTree)) {
      onClickAway(event);
    }
  }); // Keep track of mouse/touch events that bubbled up through the portal.

  var createHandleSynthetic = function createHandleSynthetic(handlerName) {
    return function (event) {
      syntheticEventRef.current = true;
      var childrenPropsHandler = children.props[handlerName];

      if (childrenPropsHandler) {
        childrenPropsHandler(event);
      }
    };
  };

  var childrenProps = {
    ref: handleRef
  };

  if (touchEvent !== false) {
    childrenProps[touchEvent] = createHandleSynthetic(touchEvent);
  }

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    if (touchEvent !== false) {
      var mappedTouchEvent = mapEventPropToEvent(touchEvent);
      var doc = Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(nodeRef.current);

      var handleTouchMove = function handleTouchMove() {
        movedRef.current = true;
      };

      doc.addEventListener(mappedTouchEvent, handleClickAway);
      doc.addEventListener('touchmove', handleTouchMove);
      return function () {
        doc.removeEventListener(mappedTouchEvent, handleClickAway);
        doc.removeEventListener('touchmove', handleTouchMove);
      };
    }

    return undefined;
  }, [handleClickAway, touchEvent]);

  if (mouseEvent !== false) {
    childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent);
  }

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    if (mouseEvent !== false) {
      var mappedMouseEvent = mapEventPropToEvent(mouseEvent);
      var doc = Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(nodeRef.current);
      doc.addEventListener(mappedMouseEvent, handleClickAway);
      return function () {
        doc.removeEventListener(mappedMouseEvent, handleClickAway);
      };
    }

    return undefined;
  }, [handleClickAway, mouseEvent]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](children, childrenProps));
}

 false ? undefined : void 0;

if (false) {}

/* harmony default export */ __webpack_exports__["a"] = (ClickAwayListener);

/***/ }),

/***/ "6u8J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export setTranslateValue */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("l3Wi");
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("dRu9");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("bfFb");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("tr08");
/* harmony import */ var _styles_transitions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("wpWl");
/* harmony import */ var _transitions_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("4Hym");










 // Translate the node so he can't be seen on the screen.
// Later, we gonna translate back the node to his original location
// with `none`.`

function getTranslateValue(direction, node) {
  var rect = node.getBoundingClientRect();
  var transform;

  if (node.fakeTransform) {
    transform = node.fakeTransform;
  } else {
    var computedStyle = window.getComputedStyle(node);
    transform = computedStyle.getPropertyValue('-webkit-transform') || computedStyle.getPropertyValue('transform');
  }

  var offsetX = 0;
  var offsetY = 0;

  if (transform && transform !== 'none' && typeof transform === 'string') {
    var transformValues = transform.split('(')[1].split(')')[0].split(',');
    offsetX = parseInt(transformValues[4], 10);
    offsetY = parseInt(transformValues[5], 10);
  }

  if (direction === 'left') {
    return "translateX(".concat(window.innerWidth, "px) translateX(").concat(offsetX - rect.left, "px)");
  }

  if (direction === 'right') {
    return "translateX(-".concat(rect.left + rect.width - offsetX, "px)");
  }

  if (direction === 'up') {
    return "translateY(".concat(window.innerHeight, "px) translateY(").concat(offsetY - rect.top, "px)");
  } // direction === 'down'


  return "translateY(-".concat(rect.top + rect.height - offsetY, "px)");
}

function setTranslateValue(direction, node) {
  var transform = getTranslateValue(direction, node);

  if (transform) {
    node.style.webkitTransform = transform;
    node.style.transform = transform;
  }
}
var defaultTimeout = {
  enter: _styles_transitions__WEBPACK_IMPORTED_MODULE_8__[/* duration */ "b"].enteringScreen,
  exit: _styles_transitions__WEBPACK_IMPORTED_MODULE_8__[/* duration */ "b"].leavingScreen
};
/**
 * The Slide transition is used by the [Drawer](/components/drawers/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Slide = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Slide(props, ref) {
  var children = props.children,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'down' : _props$direction,
      inProp = props.in,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      style = props.style,
      _props$timeout = props.timeout,
      timeout = _props$timeout === void 0 ? defaultTimeout : _props$timeout,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? react_transition_group__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"] : _props$TransitionComp,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["children", "direction", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]);

  var theme = Object(_styles_useTheme__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])();
  var childrenRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);
  /**
   * used in cloneElement(children, { ref: handleRef })
   */

  var handleOwnRef = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (instance) {
    // #StrictMode ready
    childrenRef.current = react_dom__WEBPACK_IMPORTED_MODULE_3__["findDOMNode"](instance);
  }, []);
  var handleRefIntermediary = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(children.ref, handleOwnRef);
  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(handleRefIntermediary, ref);

  var normalizedTransitionCallback = function normalizedTransitionCallback(callback) {
    return function (isAppearing) {
      if (callback) {
        // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
        if (isAppearing === undefined) {
          callback(childrenRef.current);
        } else {
          callback(childrenRef.current, isAppearing);
        }
      }
    };
  };

  var handleEnter = normalizedTransitionCallback(function (node, isAppearing) {
    setTranslateValue(direction, node);
    Object(_transitions_utils__WEBPACK_IMPORTED_MODULE_9__[/* reflow */ "b"])(node);

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntering = normalizedTransitionCallback(function (node, isAppearing) {
    var transitionProps = Object(_transitions_utils__WEBPACK_IMPORTED_MODULE_9__[/* getTransitionProps */ "a"])({
      timeout: timeout,
      style: style
    }, {
      mode: 'enter'
    });
    node.style.webkitTransition = theme.transitions.create('-webkit-transform', Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, transitionProps, {
      easing: theme.transitions.easing.easeOut
    }));
    node.style.transition = theme.transitions.create('transform', Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, transitionProps, {
      easing: theme.transitions.easing.easeOut
    }));
    node.style.webkitTransform = 'none';
    node.style.transform = 'none';

    if (onEntering) {
      onEntering(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(onEntered);
  var handleExiting = normalizedTransitionCallback(onExiting);
  var handleExit = normalizedTransitionCallback(function (node) {
    var transitionProps = Object(_transitions_utils__WEBPACK_IMPORTED_MODULE_9__[/* getTransitionProps */ "a"])({
      timeout: timeout,
      style: style
    }, {
      mode: 'exit'
    });
    node.style.webkitTransition = theme.transitions.create('-webkit-transform', Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, transitionProps, {
      easing: theme.transitions.easing.sharp
    }));
    node.style.transition = theme.transitions.create('transform', Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, transitionProps, {
      easing: theme.transitions.easing.sharp
    }));
    setTranslateValue(direction, node);

    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(function (node) {
    // No need for transitions when the component is hidden
    node.style.webkitTransition = '';
    node.style.transition = '';

    if (onExited) {
      onExited(node);
    }
  });
  var updatePosition = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function () {
    if (childrenRef.current) {
      setTranslateValue(direction, childrenRef.current);
    }
  }, [direction]);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    // Skip configuration where the position is screen size invariant.
    if (inProp || direction === 'down' || direction === 'right') {
      return undefined;
    }

    var handleResize = Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(function () {
      if (childrenRef.current) {
        setTranslateValue(direction, childrenRef.current);
      }
    });
    window.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener('resize', handleResize);
    };
  }, [direction, inProp]);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (!inProp) {
      // We need to update the position of the drawer when the direction change and
      // when it's hidden.
      updatePosition();
    }
  }, [inProp, updatePosition]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](TransitionComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    nodeRef: childrenRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    appear: true,
    in: inProp,
    timeout: timeout
  }, other), function (state, childProps) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](children, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      ref: handleRef,
      style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
        visibility: state === 'exited' && !inProp ? 'hidden' : undefined
      }, style, children.props.style)
    }, childProps));
  });
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Slide);

/***/ }),

/***/ "8+s/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var React = __webpack_require__("q1tI");

var React__default = _interopDefault(React);

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

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

function withSideEffect(reducePropsToState, handleStateChangeOnClient, mapStateOnServer) {
  if (typeof reducePropsToState !== 'function') {
    throw new Error('Expected reducePropsToState to be a function.');
  }

  if (typeof handleStateChangeOnClient !== 'function') {
    throw new Error('Expected handleStateChangeOnClient to be a function.');
  }

  if (typeof mapStateOnServer !== 'undefined' && typeof mapStateOnServer !== 'function') {
    throw new Error('Expected mapStateOnServer to either be undefined or a function.');
  }

  function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }

  return function wrap(WrappedComponent) {
    if (typeof WrappedComponent !== 'function') {
      throw new Error('Expected WrappedComponent to be a React component.');
    }

    var mountedInstances = [];
    var state;

    function emitChange() {
      state = reducePropsToState(mountedInstances.map(function (instance) {
        return instance.props;
      }));

      if (SideEffect.canUseDOM) {
        handleStateChangeOnClient(state);
      } else if (mapStateOnServer) {
        state = mapStateOnServer(state);
      }
    }

    var SideEffect = /*#__PURE__*/function (_PureComponent) {
      _inheritsLoose(SideEffect, _PureComponent);

      function SideEffect() {
        return _PureComponent.apply(this, arguments) || this;
      } // Try to use displayName of wrapped component
      // Expose canUseDOM so tests can monkeypatch it


      SideEffect.peek = function peek() {
        return state;
      };

      SideEffect.rewind = function rewind() {
        if (SideEffect.canUseDOM) {
          throw new Error('You may only call rewind() on the server. Call peek() to read the current state.');
        }

        var recordedState = state;
        state = undefined;
        mountedInstances = [];
        return recordedState;
      };

      var _proto = SideEffect.prototype;

      _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
        mountedInstances.push(this);
        emitChange();
      };

      _proto.componentDidUpdate = function componentDidUpdate() {
        emitChange();
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        var index = mountedInstances.indexOf(this);
        mountedInstances.splice(index, 1);
        emitChange();
      };

      _proto.render = function render() {
        return React__default.createElement(WrappedComponent, this.props);
      };

      return SideEffect;
    }(React.PureComponent);

    _defineProperty(SideEffect, "displayName", "SideEffect(" + getDisplayName(WrappedComponent) + ")");

    _defineProperty(SideEffect, "canUseDOM", canUseDOM);

    return SideEffect;
  };
}

module.exports = withSideEffect;

/***/ }),

/***/ "8/g6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _utils.createSvgIcon;
  }
});

var _utils = __webpack_require__("kNCj");

/***/ }),

/***/ "8ypT":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "Bl7J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__("Wbzz");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__("R/WZ");

// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/ThemeProvider/ThemeProvider.js
var ThemeProvider = __webpack_require__("bWLx");

// EXTERNAL MODULE: ./node_modules/notistack/dist/notistack.esm.js + 2 modules
var notistack_esm = __webpack_require__("NKQG");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__("H2TA");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js




var html = {
  WebkitFontSmoothing: 'antialiased',
  // Antialiasing.
  MozOsxFontSmoothing: 'grayscale',
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: 'border-box'
};
var CssBaseline_body = function body(theme) {
  return Object(esm_extends["a" /* default */])({
    color: theme.palette.text.primary
  }, theme.typography.body2, {
    backgroundColor: theme.palette.background.default,
    '@media print': {
      // Save printer ink.
      backgroundColor: theme.palette.common.white
    }
  });
};
var CssBaseline_styles = function styles(theme) {
  return {
    '@global': {
      html: html,
      '*, *::before, *::after': {
        boxSizing: 'inherit'
      },
      'strong, b': {
        fontWeight: theme.typography.fontWeightBold
      },
      body: Object(esm_extends["a" /* default */])({
        margin: 0
      }, CssBaseline_body(theme), {
        // Add support for document.body.requestFullScreen().
        // Other elements, if background transparent, are not supported.
        '&::backdrop': {
          backgroundColor: theme.palette.background.default
        }
      })
    }
  };
};
/**
 * Kickstart an elegant, consistent, and simple baseline to build upon.
 */

function CssBaseline(props) {
  /* eslint-disable no-unused-vars */
  var _props$children = props.children,
      children = _props$children === void 0 ? null : _props$children,
      classes = props.classes;
  /* eslint-enable no-unused-vars */

  return /*#__PURE__*/react["createElement"](react["Fragment"], null, children);
}

 false ? undefined : void 0;

if (false) {}

/* harmony default export */ var CssBaseline_CssBaseline = (Object(withStyles["a" /* default */])(CssBaseline_styles, {
  name: 'MuiCssBaseline'
})(CssBaseline));
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__("iuhU");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 13 modules
var Box = __webpack_require__("hlFM");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("Ff2n");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/useScrollTrigger/useScrollTrigger.js




function defaultTrigger(store, options) {
  var _options$disableHyste = options.disableHysteresis,
      disableHysteresis = _options$disableHyste === void 0 ? false : _options$disableHyste,
      _options$threshold = options.threshold,
      threshold = _options$threshold === void 0 ? 100 : _options$threshold,
      target = options.target;
  var previous = store.current;

  if (target) {
    // Get vertical scroll
    store.current = target.pageYOffset !== undefined ? target.pageYOffset : target.scrollTop;
  }

  if (!disableHysteresis && previous !== undefined) {
    if (store.current < previous) {
      return false;
    }
  }

  return store.current > threshold;
}

var defaultTarget = typeof window !== 'undefined' ? window : null;
function useScrollTrigger() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _options$getTrigger = options.getTrigger,
      getTrigger = _options$getTrigger === void 0 ? defaultTrigger : _options$getTrigger,
      _options$target = options.target,
      target = _options$target === void 0 ? defaultTarget : _options$target,
      other = Object(objectWithoutProperties["a" /* default */])(options, ["getTrigger", "target"]);

  var store = react["useRef"]();

  var _React$useState = react["useState"](function () {
    return getTrigger(store, other);
  }),
      trigger = _React$useState[0],
      setTrigger = _React$useState[1];

  react["useEffect"](function () {
    var handleScroll = function handleScroll() {
      setTrigger(getTrigger(store, Object(esm_extends["a" /* default */])({
        target: target
      }, other)));
    };

    handleScroll(); // Re-evaluate trigger when dependencies change

    target.addEventListener('scroll', handleScroll);
    return function () {
      target.removeEventListener('scroll', handleScroll);
    }; // See Option 3. https://github.com/facebook/react/issues/14476#issuecomment-471199055
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, getTrigger, JSON.stringify(other)]);
  return trigger;
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js + 4 modules
var ButtonBase = __webpack_require__("VD++");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__("NqtD");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Fab/Fab.js







var Fab_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: Object(esm_extends["a" /* default */])({}, theme.typography.button, {
      boxSizing: 'border-box',
      minHeight: 36,
      transition: theme.transitions.create(['background-color', 'box-shadow', 'border'], {
        duration: theme.transitions.duration.short
      }),
      borderRadius: '50%',
      padding: 0,
      minWidth: 0,
      width: 56,
      height: 56,
      boxShadow: theme.shadows[6],
      '&:active': {
        boxShadow: theme.shadows[12]
      },
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      '&:hover': {
        backgroundColor: theme.palette.grey.A100,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.grey[300]
        },
        '&$disabled': {
          backgroundColor: theme.palette.action.disabledBackground
        },
        textDecoration: 'none'
      },
      '&$focusVisible': {
        boxShadow: theme.shadows[6]
      },
      '&$disabled': {
        color: theme.palette.action.disabled,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground
      }
    }),

    /* Styles applied to the span element that wraps the children. */
    label: {
      width: '100%',
      // assure the correct width for iOS Safari
      display: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    },

    /* Styles applied to the root element if `color="primary"`. */
    primary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.primary.main
        }
      }
    },

    /* Styles applied to the root element if `color="secondary"`. */
    secondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.secondary.main
        }
      }
    },

    /* Styles applied to the root element if `variant="extended"`. */
    extended: {
      borderRadius: 48 / 2,
      padding: '0 16px',
      width: 'auto',
      minHeight: 'auto',
      minWidth: 48,
      height: 48,
      '&$sizeSmall': {
        width: 'auto',
        padding: '0 8px',
        borderRadius: 34 / 2,
        minWidth: 34,
        height: 34
      },
      '&$sizeMedium': {
        width: 'auto',
        padding: '0 16px',
        borderRadius: 40 / 2,
        minWidth: 40,
        height: 40
      }
    },

    /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
    focusVisible: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the root element if `size="small"``. */
    sizeSmall: {
      width: 40,
      height: 40
    },

    /* Styles applied to the root element if `size="medium"``. */
    sizeMedium: {
      width: 48,
      height: 48
    }
  };
};
var Fab_Fab = /*#__PURE__*/react["forwardRef"](function Fab(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$component = props.component,
      component = _props$component === void 0 ? 'button' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      focusVisibleClassName = props.focusVisibleClassName,
      _props$size = props.size,
      size = _props$size === void 0 ? 'large' : _props$size,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'round' : _props$variant,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["children", "classes", "className", "color", "component", "disabled", "disableFocusRipple", "focusVisibleClassName", "size", "variant"]);

  return /*#__PURE__*/react["createElement"](ButtonBase["a" /* default */], Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, className, variant !== "round" && classes.extended, size !== 'large' && classes["size".concat(Object(capitalize["a" /* default */])(size))], disabled && classes.disabled, {
      'primary': classes.primary,
      'secondary': classes.secondary,
      'inherit': classes.colorInherit
    }[color]),
    component: component,
    disabled: disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: Object(clsx_m["a" /* default */])(classes.focusVisible, focusVisibleClassName),
    ref: ref
  }, other), /*#__PURE__*/react["createElement"]("span", {
    className: classes.label
  }, children));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_Fab_Fab = (Object(withStyles["a" /* default */])(Fab_styles, {
  name: 'MuiFab'
})(Fab_Fab));
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/KeyboardArrowUp.js
var KeyboardArrowUp = __webpack_require__("Cekx");
var KeyboardArrowUp_default = /*#__PURE__*/__webpack_require__.n(KeyboardArrowUp);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("ODXe");

// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/Transition.js + 1 modules
var Transition = __webpack_require__("dRu9");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/transitions.js
var transitions = __webpack_require__("wpWl");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__("tr08");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/transitions/utils.js
var utils = __webpack_require__("4Hym");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useForkRef.js
var useForkRef = __webpack_require__("bfFb");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Zoom/Zoom.js









var Zoom_styles = {
  entering: {
    transform: 'none'
  },
  entered: {
    transform: 'none'
  }
};
var defaultTimeout = {
  enter: transitions["b" /* duration */].enteringScreen,
  exit: transitions["b" /* duration */].leavingScreen
};
/**
 * The Zoom transition can be used for the floating variant of the
 * [Button](/components/buttons/#floating-action-buttons) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Zoom_Zoom = /*#__PURE__*/react["forwardRef"](function Zoom(props, ref) {
  var children = props.children,
      _props$disableStrictM = props.disableStrictModeCompat,
      disableStrictModeCompat = _props$disableStrictM === void 0 ? false : _props$disableStrictM,
      inProp = props.in,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      style = props.style,
      _props$timeout = props.timeout,
      timeout = _props$timeout === void 0 ? defaultTimeout : _props$timeout,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? Transition["a" /* default */] : _props$TransitionComp,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]);

  var theme = Object(useTheme["a" /* default */])();
  var enableStrictModeCompat = theme.unstable_strictMode && !disableStrictModeCompat;
  var nodeRef = react["useRef"](null);
  var foreignRef = Object(useForkRef["a" /* default */])(children.ref, ref);
  var handleRef = Object(useForkRef["a" /* default */])(enableStrictModeCompat ? nodeRef : undefined, foreignRef);

  var normalizedTransitionCallback = function normalizedTransitionCallback(callback) {
    return function (nodeOrAppearing, maybeAppearing) {
      if (callback) {
        var _ref = enableStrictModeCompat ? [nodeRef.current, nodeOrAppearing] : [nodeOrAppearing, maybeAppearing],
            _ref2 = Object(slicedToArray["a" /* default */])(_ref, 2),
            node = _ref2[0],
            isAppearing = _ref2[1]; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.


        if (isAppearing === undefined) {
          callback(node);
        } else {
          callback(node, isAppearing);
        }
      }
    };
  };

  var handleEntering = normalizedTransitionCallback(onEntering);
  var handleEnter = normalizedTransitionCallback(function (node, isAppearing) {
    Object(utils["b" /* reflow */])(node); // So the animation always start from the start.

    var transitionProps = Object(utils["a" /* getTransitionProps */])({
      style: style,
      timeout: timeout
    }, {
      mode: 'enter'
    });
    node.style.webkitTransition = theme.transitions.create('transform', transitionProps);
    node.style.transition = theme.transitions.create('transform', transitionProps);

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(onEntered);
  var handleExiting = normalizedTransitionCallback(onExiting);
  var handleExit = normalizedTransitionCallback(function (node) {
    var transitionProps = Object(utils["a" /* getTransitionProps */])({
      style: style,
      timeout: timeout
    }, {
      mode: 'exit'
    });
    node.style.webkitTransition = theme.transitions.create('transform', transitionProps);
    node.style.transition = theme.transitions.create('transform', transitionProps);

    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(onExited);
  return /*#__PURE__*/react["createElement"](TransitionComponent, Object(esm_extends["a" /* default */])({
    appear: true,
    in: inProp,
    nodeRef: enableStrictModeCompat ? nodeRef : undefined,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    timeout: timeout
  }, other), function (state, childProps) {
    return /*#__PURE__*/react["cloneElement"](children, Object(esm_extends["a" /* default */])({
      style: Object(esm_extends["a" /* default */])({
        transform: 'scale(0)',
        visibility: state === 'exited' && !inProp ? 'hidden' : undefined
      }, Zoom_styles[state], style, children.props.style),
      ref: handleRef
    }, childProps));
  });
});
 false ? undefined : void 0;
/* harmony default export */ var esm_Zoom_Zoom = (Zoom_Zoom);
// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/useTheme/useTheme.js
var useTheme_useTheme = __webpack_require__("aXM8");

// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/getThemeProps/getThemeProps.js
var getThemeProps = __webpack_require__("A+CX");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js



function useMediaQuery(queryInput) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var theme = Object(useTheme_useTheme["a" /* default */])();
  var props = Object(getThemeProps["a" /* default */])({
    theme: theme,
    name: 'MuiUseMediaQuery',
    props: {}
  });

  if (false) {}

  var query = typeof queryInput === 'function' ? queryInput(theme) : queryInput;
  query = query.replace(/^@media( ?)/m, ''); // Wait for jsdom to support the match media feature.
  // All the browsers Material-UI support have this built-in.
  // This defensive check is here for simplicity.
  // Most of the time, the match media logic isn't central to people tests.

  var supportMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';

  var _props$options = Object(esm_extends["a" /* default */])({}, props, options),
      _props$options$defaul = _props$options.defaultMatches,
      defaultMatches = _props$options$defaul === void 0 ? false : _props$options$defaul,
      _props$options$matchM = _props$options.matchMedia,
      matchMedia = _props$options$matchM === void 0 ? supportMatchMedia ? window.matchMedia : null : _props$options$matchM,
      _props$options$noSsr = _props$options.noSsr,
      noSsr = _props$options$noSsr === void 0 ? false : _props$options$noSsr,
      _props$options$ssrMat = _props$options.ssrMatchMedia,
      ssrMatchMedia = _props$options$ssrMat === void 0 ? null : _props$options$ssrMat;

  var _React$useState = react["useState"](function () {
    if (noSsr && supportMatchMedia) {
      return matchMedia(query).matches;
    }

    if (ssrMatchMedia) {
      return ssrMatchMedia(query).matches;
    } // Once the component is mounted, we rely on the
    // event listeners to return the correct matches value.


    return defaultMatches;
  }),
      match = _React$useState[0],
      setMatch = _React$useState[1];

  react["useEffect"](function () {
    var active = true;

    if (!supportMatchMedia) {
      return undefined;
    }

    var queryList = matchMedia(query);

    var updateMatch = function updateMatch() {
      // Workaround Safari wrong implementation of matchMedia
      // TODO can we remove it?
      // https://github.com/mui-org/material-ui/pull/17315#issuecomment-528286677
      if (active) {
        setMatch(queryList.matches);
      }
    };

    updateMatch();
    queryList.addListener(updateMatch);
    return function () {
      active = false;
      queryList.removeListener(updateMatch);
    };
  }, [query, matchMedia, supportMatchMedia]);

  if (false) {}

  return match;
}
// EXTERNAL MODULE: ./src/constants/constants.js
var constants = __webpack_require__("5v02");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__("kKAo");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/AppBar/AppBar.js







var AppBar_styles = function styles(theme) {
  var backgroundColorDefault = theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[900];
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      boxSizing: 'border-box',
      // Prevent padding issue with the Modal and fixed positioned AppBar.
      zIndex: theme.zIndex.appBar,
      flexShrink: 0
    },

    /* Styles applied to the root element if `position="fixed"`. */
    positionFixed: {
      position: 'fixed',
      top: 0,
      left: 'auto',
      right: 0,
      '@media print': {
        // Prevent the app bar to be visible on each printed page.
        position: 'absolute'
      }
    },

    /* Styles applied to the root element if `position="absolute"`. */
    positionAbsolute: {
      position: 'absolute',
      top: 0,
      left: 'auto',
      right: 0
    },

    /* Styles applied to the root element if `position="sticky"`. */
    positionSticky: {
      // ⚠️ sticky is not supported by IE 11.
      position: 'sticky',
      top: 0,
      left: 'auto',
      right: 0
    },

    /* Styles applied to the root element if `position="static"`. */
    positionStatic: {
      position: 'static'
    },

    /* Styles applied to the root element if `position="relative"`. */
    positionRelative: {
      position: 'relative'
    },

    /* Styles applied to the root element if `color="default"`. */
    colorDefault: {
      backgroundColor: backgroundColorDefault,
      color: theme.palette.getContrastText(backgroundColorDefault)
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    },

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the root element if `color="transparent"`. */
    colorTransparent: {
      backgroundColor: 'transparent',
      color: 'inherit'
    }
  };
};
var AppBar_AppBar = /*#__PURE__*/react["forwardRef"](function AppBar(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$position = props.position,
      position = _props$position === void 0 ? 'fixed' : _props$position,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["classes", "className", "color", "position"]);

  return /*#__PURE__*/react["createElement"](Paper["a" /* default */], Object(esm_extends["a" /* default */])({
    square: true,
    component: "header",
    elevation: 4,
    className: Object(clsx_m["a" /* default */])(classes.root, classes["position".concat(Object(capitalize["a" /* default */])(position))], classes["color".concat(Object(capitalize["a" /* default */])(color))], className, position === 'fixed' && 'mui-fixed'),
    ref: ref
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_AppBar_AppBar = (Object(withStyles["a" /* default */])(AppBar_styles, {
  name: 'MuiAppBar'
})(AppBar_AppBar));
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("rePB");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Toolbar/Toolbar.js






var Toolbar_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    },

    /* Styles applied to the root element if `disableGutters={false}`. */
    gutters: Object(defineProperty["a" /* default */])({
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }, theme.breakpoints.up('sm'), {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }),

    /* Styles applied to the root element if `variant="regular"`. */
    regular: theme.mixins.toolbar,

    /* Styles applied to the root element if `variant="dense"`. */
    dense: {
      minHeight: 48
    }
  };
};
var Toolbar_Toolbar = /*#__PURE__*/react["forwardRef"](function Toolbar(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'regular' : _props$variant,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["classes", "className", "component", "disableGutters", "variant"]);

  return /*#__PURE__*/react["createElement"](Component, Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, classes[variant], className, !disableGutters && classes.gutters),
    ref: ref
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_Toolbar_Toolbar = (Object(withStyles["a" /* default */])(Toolbar_styles, {
  name: 'MuiToolbar'
})(Toolbar_Toolbar));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__("ofer");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__("Ji2X");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useIsFocusVisible.js
var useIsFocusVisible = __webpack_require__("G7As");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Link/Link.js










var Link_styles = {
  /* Styles applied to the root element. */
  root: {},

  /* Styles applied to the root element if `underline="none"`. */
  underlineNone: {
    textDecoration: 'none'
  },

  /* Styles applied to the root element if `underline="hover"`. */
  underlineHover: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },

  /* Styles applied to the root element if `underline="always"`. */
  underlineAlways: {
    textDecoration: 'underline'
  },
  // Same reset as ButtonBase.root

  /* Styles applied to the root element if `component="button"`. */
  button: {
    position: 'relative',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    '-moz-appearance': 'none',
    // Reset
    '-webkit-appearance': 'none',
    // Reset
    '&::-moz-focus-inner': {
      borderStyle: 'none' // Remove Firefox dotted outline.

    },
    '&$focusVisible': {
      outline: 'auto'
    }
  },

  /* Pseudo-class applied to the root element if the link is keyboard focused. */
  focusVisible: {}
};
var Link_Link = /*#__PURE__*/react["forwardRef"](function Link(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$component = props.component,
      component = _props$component === void 0 ? 'a' : _props$component,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      TypographyClasses = props.TypographyClasses,
      _props$underline = props.underline,
      underline = _props$underline === void 0 ? 'hover' : _props$underline,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'inherit' : _props$variant,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["classes", "className", "color", "component", "onBlur", "onFocus", "TypographyClasses", "underline", "variant"]);

  var _useIsFocusVisible = Object(useIsFocusVisible["a" /* default */])(),
      isFocusVisible = _useIsFocusVisible.isFocusVisible,
      onBlurVisible = _useIsFocusVisible.onBlurVisible,
      focusVisibleRef = _useIsFocusVisible.ref;

  var _React$useState = react["useState"](false),
      focusVisible = _React$useState[0],
      setFocusVisible = _React$useState[1];

  var handlerRef = Object(useForkRef["a" /* default */])(ref, focusVisibleRef);

  var handleBlur = function handleBlur(event) {
    if (focusVisible) {
      onBlurVisible();
      setFocusVisible(false);
    }

    if (onBlur) {
      onBlur(event);
    }
  };

  var handleFocus = function handleFocus(event) {
    if (isFocusVisible(event)) {
      setFocusVisible(true);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  return /*#__PURE__*/react["createElement"](Typography["a" /* default */], Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, classes["underline".concat(Object(capitalize["a" /* default */])(underline))], className, focusVisible && classes.focusVisible, component === 'button' && classes.button),
    classes: TypographyClasses,
    color: color,
    component: component,
    onBlur: handleBlur,
    onFocus: handleFocus,
    ref: handlerRef,
    variant: variant
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_Link_Link = (Object(withStyles["a" /* default */])(Link_styles, {
  name: 'MuiLink'
})(Link_Link));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__("Z3vd");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Slide/Slide.js
var Slide = __webpack_require__("6u8J");

// CONCATENATED MODULE: ./src/components/header.js
var useStyles=Object(makeStyles["a" /* default */])(function(theme){return{root:{flexGrow:1,zIndex:10},container:{zIndex:10},menuButton:{marginRight:theme.spacing(2)},title:{flexGrow:1,fontWeight:700},transparentBackground:{backgroundColor:"rgb(12 24 48 / 0.7)"},offset:theme.mixins.toolbar};});var HeaderNavBar=/*#__PURE__*/react_default.a.forwardRef(function(_ref,ref){var _clsx;var id=_ref.id,siteTitle=_ref.siteTitle,position=_ref.position;var classes=useStyles();var theme=Object(useTheme["a" /* default */])();var matches=useMediaQuery(theme.breakpoints.down('xs'));var preventDefault=function preventDefault(event){return event.preventDefault();};var scrollTo=function scrollTo(block){var element=document.getElementById(block);element.scrollIntoView({behavior:"smooth"});};return/*#__PURE__*/react_default.a.createElement(esm_AppBar_AppBar,{position:position,ref:ref,elevation:position==="fixed"?4:0,className:Object(clsx_m["a" /* default */])((_clsx={},_clsx[classes.transparentBackground]=position==="fixed",_clsx))},/*#__PURE__*/react_default.a.createElement(Container["a" /* default */],{className:classes.container,maxWidth:"lg"},/*#__PURE__*/react_default.a.createElement(esm_Toolbar_Toolbar,{id:"back-to-top-anchor"},/*#__PURE__*/react_default.a.createElement(Typography["a" /* default */],{variant:"h6",className:classes.title},/*#__PURE__*/react_default.a.createElement(esm_Link_Link,{color:"textPrimary",href:"/",onClick:preventDefault,underline:"none"},matches?"C.H WU":siteTitle)),/*#__PURE__*/react_default.a.createElement(Button["a" /* default */],{color:"inherit",onClick:function onClick(){return scrollTo(constants["a" /* BLOCK_IDS */].MOON);}},"Moon"),/*#__PURE__*/react_default.a.createElement(Button["a" /* default */],{color:"inherit",onClick:function onClick(){return scrollTo(constants["a" /* BLOCK_IDS */].ABOUT);}},"About"),/*#__PURE__*/react_default.a.createElement(Button["a" /* default */],{color:"inherit",onClick:function onClick(){return scrollTo(constants["a" /* BLOCK_IDS */].PROJECTS);}},"Projects"))));});var header_Header=function Header(_ref2){var siteTitle=_ref2.siteTitle;var classes=useStyles();var trigger=useScrollTrigger({threshold:64});return/*#__PURE__*/react_default.a.createElement("div",{className:classes.root},!trigger&&/*#__PURE__*/react_default.a.createElement(HeaderNavBar,{siteTitle:siteTitle,position:"static"}),/*#__PURE__*/react_default.a.createElement(Slide["a" /* default */],{appear:false,direction:"down",in:trigger},/*#__PURE__*/react_default.a.createElement(HeaderNavBar,{siteTitle:siteTitle,position:"fixed"})),trigger&&/*#__PURE__*/react_default.a.createElement("div",{className:classes.offset}));};HeaderNavBar.defaultProps={siteTitle:"",position:"static",ref:undefined};header_Header.defaultProps={siteTitle:""};/* harmony default export */ var header = (header_Header);
// EXTERNAL MODULE: ./src/components/layout.css
var layout = __webpack_require__("8ypT");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/createMuiTheme.js + 15 modules
var createMuiTheme = __webpack_require__("viY9");

// CONCATENATED MODULE: ./src/components/theme.js
var theme_theme=Object(createMuiTheme["a" /* default */])({palette:{primary:{light:'#122345',main:'#0c1830'},secondary:{light:'#b1bcde',main:'#9eacd6',dark:'#6e7895'},text:{primary:'#fff',secondary:'#000'}}});/* harmony default export */ var components_theme = (theme_theme);
// EXTERNAL MODULE: ./src/images/stars.png
var stars = __webpack_require__("30Ys");
var stars_default = /*#__PURE__*/__webpack_require__.n(stars);

// CONCATENATED MODULE: ./src/components/layout.js
/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */var layout_useStyles=Object(makeStyles["a" /* default */])(function(theme){return{baseEffect:{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",width:"100%",height:"100%",display:"block"},stars:{background:"url("+stars_default.a+") repeat top center",zIndex:0},toTop:{position:"fixed",right:theme.spacing(3),bottom:theme.spacing(3),width:44,height:44,zIndex:20}};});function ScrollTop(props){var children=props.children,window=props.window;var handleClick=function handleClick(event){var anchor=document.querySelector('#moon-block');if(anchor){anchor.scrollIntoView({behavior:'smooth',block:'center'});}};return/*#__PURE__*/react_default.a.createElement("div",{onClick:handleClick,role:"presentation"},children);}var layout_Layout=function Layout(props){var _data$site$siteMetada;var classes=layout_useStyles();var children=props.children;var data=Object(gatsby_browser_entry["useStaticQuery"])("3649515864");var trigger=useScrollTrigger({threshold:100});return/*#__PURE__*/react_default.a.createElement(CssBaseline_CssBaseline,null,/*#__PURE__*/react_default.a.createElement(ThemeProvider["a" /* default */],{theme:components_theme},/*#__PURE__*/react_default.a.createElement(notistack_esm["a" /* SnackbarProvider */],{maxSnack:3},/*#__PURE__*/react_default.a.createElement(header,{siteTitle:((_data$site$siteMetada=data.site.siteMetadata)===null||_data$site$siteMetada===void 0?void 0:_data$site$siteMetada.title)||"Title"}),/*#__PURE__*/react_default.a.createElement("main",{style:{position:"relative"}},children,/*#__PURE__*/react_default.a.createElement(Box["a" /* default */],{className:Object(clsx_m["a" /* default */])(classes.baseEffect,classes.stars)})),/*#__PURE__*/react_default.a.createElement("footer",{style:{marginTop:"2rem",marginBottom:"2rem",color:"white",textAlign:"center"}},"Cheng-Han Wu \xA9 ",new Date().getFullYear()),/*#__PURE__*/react_default.a.createElement(ScrollTop,props,/*#__PURE__*/react_default.a.createElement(esm_Zoom_Zoom,{in:trigger},/*#__PURE__*/react_default.a.createElement(esm_Fab_Fab,{className:classes.toTop,color:"secondary",size:"small","aria-label":"scroll back to top"},/*#__PURE__*/react_default.a.createElement(KeyboardArrowUp_default.a,null)))))));};/* harmony default export */ var components_layout = __webpack_exports__["a"] = (layout_Layout);

/***/ }),

/***/ "Cekx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

var _interopRequireWildcard = __webpack_require__("284h");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__("q1tI"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__("8/g6"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"
}), 'KeyboardArrowUp');

exports.default = _default;

/***/ }),

/***/ "G7As":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export teardown */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useIsFocusVisible; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
// based on https://github.com/WICG/focus-visible/blob/v4.1.5/src/focus-visible.js


var hadKeyboardEvent = true;
var hadFocusVisibleRecently = false;
var hadFocusVisibleRecentlyTimeout = null;
var inputTypesWhitelist = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  'datetime-local': true
};
/**
 * Computes whether the given element should automatically trigger the
 * `focus-visible` class being added, i.e. whether it should always match
 * `:focus-visible` when focused.
 * @param {Element} node
 * @return {boolean}
 */

function focusTriggersKeyboardModality(node) {
  var type = node.type,
      tagName = node.tagName;

  if (tagName === 'INPUT' && inputTypesWhitelist[type] && !node.readOnly) {
    return true;
  }

  if (tagName === 'TEXTAREA' && !node.readOnly) {
    return true;
  }

  if (node.isContentEditable) {
    return true;
  }

  return false;
}
/**
 * Keep track of our keyboard modality state with `hadKeyboardEvent`.
 * If the most recent user interaction was via the keyboard;
 * and the key press did not include a meta, alt/option, or control key;
 * then the modality is keyboard. Otherwise, the modality is not keyboard.
 * @param {KeyboardEvent} event
 */


function handleKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }

  hadKeyboardEvent = true;
}
/**
 * If at any point a user clicks with a pointing device, ensure that we change
 * the modality away from keyboard.
 * This avoids the situation where a user presses a key on an already focused
 * element, and then clicks on a different element, focusing it with a
 * pointing device, while we still think we're in keyboard modality.
 */


function handlePointerDown() {
  hadKeyboardEvent = false;
}

function handleVisibilityChange() {
  if (this.visibilityState === 'hidden') {
    // If the tab becomes active again, the browser will handle calling focus
    // on the element (Safari actually calls it twice).
    // If this tab change caused a blur on an element with focus-visible,
    // re-apply the class when the user switches back to the tab.
    if (hadFocusVisibleRecently) {
      hadKeyboardEvent = true;
    }
  }
}

function prepare(doc) {
  doc.addEventListener('keydown', handleKeyDown, true);
  doc.addEventListener('mousedown', handlePointerDown, true);
  doc.addEventListener('pointerdown', handlePointerDown, true);
  doc.addEventListener('touchstart', handlePointerDown, true);
  doc.addEventListener('visibilitychange', handleVisibilityChange, true);
}

function teardown(doc) {
  doc.removeEventListener('keydown', handleKeyDown, true);
  doc.removeEventListener('mousedown', handlePointerDown, true);
  doc.removeEventListener('pointerdown', handlePointerDown, true);
  doc.removeEventListener('touchstart', handlePointerDown, true);
  doc.removeEventListener('visibilitychange', handleVisibilityChange, true);
}

function isFocusVisible(event) {
  var target = event.target;

  try {
    return target.matches(':focus-visible');
  } catch (error) {} // browsers not implementing :focus-visible will throw a SyntaxError
  // we use our own heuristic for those browsers
  // rethrow might be better if it's not the expected error but do we really
  // want to crash if focus-visible malfunctioned?
  // no need for validFocusTarget check. the user does that by attaching it to
  // focusable events only


  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}
/**
 * Should be called if a blur event is fired on a focus-visible element
 */


function handleBlurVisible() {
  // To detect a tab/window switch, we look for a blur event followed
  // rapidly by a visibility change.
  // If we don't see a visibility change within 100ms, it's probably a
  // regular focus change.
  hadFocusVisibleRecently = true;
  window.clearTimeout(hadFocusVisibleRecentlyTimeout);
  hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
    hadFocusVisibleRecently = false;
  }, 100);
}

function useIsFocusVisible() {
  var ref = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (instance) {
    var node = react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"](instance);

    if (node != null) {
      prepare(node.ownerDocument);
    }
  }, []);

  if (false) {}

  return {
    isFocusVisible: isFocusVisible,
    onBlurVisible: handleBlurVisible,
    ref: ref
  };
}

/***/ }),

/***/ "GIek":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setRef; });
// TODO v5: consider to make it private
function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

/***/ }),

/***/ "H2TA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ucgz");
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cNwE");




function withStyles(stylesOrCreator, options) {
  return Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(stylesOrCreator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
  }, options));
}

/* harmony default export */ __webpack_exports__["a"] = (withStyles);

/***/ }),

/***/ "HR5l":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H2TA");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("NqtD");






var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      userSelect: 'none',
      width: '1em',
      height: '1em',
      display: 'inline-block',
      fill: 'currentColor',
      flexShrink: 0,
      fontSize: theme.typography.pxToRem(24),
      transition: theme.transitions.create('fill', {
        duration: theme.transitions.duration.shorter
      })
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },

    /* Styles applied to the root element if `color="action"`. */
    colorAction: {
      color: theme.palette.action.active
    },

    /* Styles applied to the root element if `color="error"`. */
    colorError: {
      color: theme.palette.error.main
    },

    /* Styles applied to the root element if `color="disabled"`. */
    colorDisabled: {
      color: theme.palette.action.disabled
    },

    /* Styles applied to the root element if `fontSize="inherit"`. */
    fontSizeInherit: {
      fontSize: 'inherit'
    },

    /* Styles applied to the root element if `fontSize="small"`. */
    fontSizeSmall: {
      fontSize: theme.typography.pxToRem(20)
    },

    /* Styles applied to the root element if `fontSize="large"`. */
    fontSizeLarge: {
      fontSize: theme.typography.pxToRem(35)
    }
  };
};
var SvgIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function SvgIcon(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'inherit' : _props$color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'svg' : _props$component,
      _props$fontSize = props.fontSize,
      fontSize = _props$fontSize === void 0 ? 'default' : _props$fontSize,
      htmlColor = props.htmlColor,
      titleAccess = props.titleAccess,
      _props$viewBox = props.viewBox,
      viewBox = _props$viewBox === void 0 ? '0 0 24 24' : _props$viewBox,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["children", "classes", "className", "color", "component", "fontSize", "htmlColor", "titleAccess", "viewBox"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className, color !== 'inherit' && classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(color))], fontSize !== 'default' && classes["fontSize".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(fontSize))]),
    focusable: "false",
    viewBox: viewBox,
    color: htmlColor,
    "aria-hidden": titleAccess ? undefined : true,
    role: titleAccess ? 'img' : undefined,
    ref: ref
  }, other), children, titleAccess ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("title", null, titleAccess) : null);
});
 false ? undefined : void 0;
SvgIcon.muiName = 'SvgIcon';
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(styles, {
  name: 'MuiSvgIcon'
})(SvgIcon));

/***/ }),

/***/ "HwzS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// We need to centralize the zIndex definitions as they work
// like global values in the browser.
var zIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
/* harmony default export */ __webpack_exports__["a"] = (zIndex);

/***/ }),

/***/ "Ji2X":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("E9XD");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Ff2n");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rePB");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("iuhU");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("H2TA");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("NqtD");








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({
      width: '100%',
      marginLeft: 'auto',
      boxSizing: 'border-box',
      marginRight: 'auto',
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      display: 'block'
    }, theme.breakpoints.up('sm'), {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }),

    /* Styles applied to the root element if `disableGutters={true}`. */
    disableGutters: {
      paddingLeft: 0,
      paddingRight: 0
    },

    /* Styles applied to the root element if `fixed={true}`. */
    fixed: Object.keys(theme.breakpoints.values).reduce(function (acc, breakpoint) {
      var value = theme.breakpoints.values[breakpoint];

      if (value !== 0) {
        acc[theme.breakpoints.up(breakpoint)] = {
          maxWidth: value
        };
      }

      return acc;
    }, {}),

    /* Styles applied to the root element if `maxWidth="xs"`. */
    maxWidthXs: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, theme.breakpoints.up('xs'), {
      maxWidth: Math.max(theme.breakpoints.values.xs, 444)
    }),

    /* Styles applied to the root element if `maxWidth="sm"`. */
    maxWidthSm: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, theme.breakpoints.up('sm'), {
      maxWidth: theme.breakpoints.values.sm
    }),

    /* Styles applied to the root element if `maxWidth="md"`. */
    maxWidthMd: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, theme.breakpoints.up('md'), {
      maxWidth: theme.breakpoints.values.md
    }),

    /* Styles applied to the root element if `maxWidth="lg"`. */
    maxWidthLg: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, theme.breakpoints.up('lg'), {
      maxWidth: theme.breakpoints.values.lg
    }),

    /* Styles applied to the root element if `maxWidth="xl"`. */
    maxWidthXl: Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])({}, theme.breakpoints.up('xl'), {
      maxWidth: theme.breakpoints.values.xl
    })
  };
};
var Container = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["forwardRef"](function Container(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      _props$fixed = props.fixed,
      fixed = _props$fixed === void 0 ? false : _props$fixed,
      _props$maxWidth = props.maxWidth,
      maxWidth = _props$maxWidth === void 0 ? 'lg' : _props$maxWidth,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(props, ["classes", "className", "component", "disableGutters", "fixed", "maxWidth"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(classes.root, className, fixed && classes.fixed, disableGutters && classes.disableGutters, maxWidth !== false && classes["maxWidth".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(String(maxWidth)))]),
    ref: ref
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(styles, {
  name: 'MuiContainer'
})(Container));

/***/ }),

/***/ "LybE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return handleBreakpoints; });
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("E9XD");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("KQm4");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("U8pU");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("bv9d");





 // The breakpoint **start** at this value.
// For instance with the first breakpoint xs: [xs, sm[.

var values = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};
var defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  up: function up(key) {
    return "@media (min-width:".concat(values[key], "px)");
  }
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  if (false) {}

  if (Array.isArray(propValue)) {
    var themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;
    return propValue.reduce(function (acc, item, index) {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }

  if (Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(propValue) === 'object') {
    var _themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;

    return Object.keys(propValue).reduce(function (acc, breakpoint) {
      acc[_themeBreakpoints.up(breakpoint)] = styleFromPropValue(propValue[breakpoint]);
      return acc;
    }, {});
  }

  var output = styleFromPropValue(propValue);
  return output;
}

function breakpoints(styleFunction) {
  var newStyleFunction = function newStyleFunction(props) {
    var base = styleFunction(props);
    var themeBreakpoints = props.theme.breakpoints || defaultBreakpoints;
    var extended = themeBreakpoints.keys.reduce(function (acc, key) {
      if (props[key]) {
        acc = acc || {};
        acc[themeBreakpoints.up(key)] = styleFunction(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])({
          theme: props.theme
        }, props[key]));
      }

      return acc;
    }, null);
    return Object(_merge__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(base, extended);
  };

  newStyleFunction.propTypes =  false ? undefined : {};
  newStyleFunction.filterProps = ['xs', 'sm', 'md', 'lg', 'xl'].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(styleFunction.filterProps));
  return newStyleFunction;
}

/* unused harmony default export */ var _unused_webpack_default_export = (breakpoints);

/***/ }),

/***/ "NKQG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ notistack_esm_SnackbarProvider; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ notistack_esm_useSnackbar; });

// UNUSED EXPORTS: SnackbarContent, withSnackbar

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("E9XD");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("i8i4");

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__("iuhU");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Slide/Slide.js
var Slide = __webpack_require__("6u8J");

// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/createStyles/createStyles.js
var createStyles = __webpack_require__("ED4I");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/styles/createStyles.js
 // let warnOnce = false;
// To remove in v5

function createStyles_createStyles(styles) {
  // warning(
  //   warnOnce,
  //   [
  //     'Material-UI: createStyles from @material-ui/core/styles is deprecated.',
  //     'Please use @material-ui/styles/createStyles',
  //   ].join('\n'),
  // );
  // warnOnce = true;
  return Object(createStyles["a" /* default */])(styles);
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__("H2TA");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__("ye/S");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__("R/WZ");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("ODXe");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("Ff2n");

// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/Transition.js + 1 modules
var Transition = __webpack_require__("dRu9");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/transitions.js
var transitions = __webpack_require__("wpWl");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/transitions/utils.js
var utils = __webpack_require__("4Hym");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__("tr08");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useForkRef.js
var useForkRef = __webpack_require__("bfFb");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Collapse/Collapse.js











var Collapse_styles = function styles(theme) {
  return {
    /* Styles applied to the container element. */
    container: {
      height: 0,
      overflow: 'hidden',
      transition: theme.transitions.create('height')
    },

    /* Styles applied to the container element when the transition has entered. */
    entered: {
      height: 'auto',
      overflow: 'visible'
    },

    /* Styles applied to the container element when the transition has exited and `collapsedHeight` != 0px. */
    hidden: {
      visibility: 'hidden'
    },

    /* Styles applied to the outer wrapper element. */
    wrapper: {
      // Hack to get children with a negative margin to not falsify the height computation.
      display: 'flex'
    },

    /* Styles applied to the inner wrapper element. */
    wrapperInner: {
      width: '100%'
    }
  };
};
/**
 * The Collapse transition is used by the
 * [Vertical Stepper](/components/steppers/#vertical-stepper) StepContent component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Collapse_Collapse = /*#__PURE__*/react["forwardRef"](function Collapse(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$collapsedHeigh = props.collapsedHeight,
      collapsedHeightProp = _props$collapsedHeigh === void 0 ? '0px' : _props$collapsedHeigh,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disableStrictM = props.disableStrictModeCompat,
      disableStrictModeCompat = _props$disableStrictM === void 0 ? false : _props$disableStrictM,
      inProp = props.in,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      style = props.style,
      _props$timeout = props.timeout,
      timeout = _props$timeout === void 0 ? transitions["b" /* duration */].standard : _props$timeout,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? Transition["a" /* default */] : _props$TransitionComp,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["children", "classes", "className", "collapsedHeight", "component", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]);

  var theme = Object(useTheme["a" /* default */])();
  var timer = react["useRef"]();
  var wrapperRef = react["useRef"](null);
  var autoTransitionDuration = react["useRef"]();
  var collapsedHeight = typeof collapsedHeightProp === 'number' ? "".concat(collapsedHeightProp, "px") : collapsedHeightProp;
  react["useEffect"](function () {
    return function () {
      clearTimeout(timer.current);
    };
  }, []);
  var enableStrictModeCompat = theme.unstable_strictMode && !disableStrictModeCompat;
  var nodeRef = react["useRef"](null);
  var handleRef = Object(useForkRef["a" /* default */])(ref, enableStrictModeCompat ? nodeRef : undefined);

  var normalizedTransitionCallback = function normalizedTransitionCallback(callback) {
    return function (nodeOrAppearing, maybeAppearing) {
      if (callback) {
        var _ref = enableStrictModeCompat ? [nodeRef.current, nodeOrAppearing] : [nodeOrAppearing, maybeAppearing],
            _ref2 = Object(slicedToArray["a" /* default */])(_ref, 2),
            node = _ref2[0],
            isAppearing = _ref2[1]; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.


        if (isAppearing === undefined) {
          callback(node);
        } else {
          callback(node, isAppearing);
        }
      }
    };
  };

  var handleEnter = normalizedTransitionCallback(function (node, isAppearing) {
    node.style.height = collapsedHeight;

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntering = normalizedTransitionCallback(function (node, isAppearing) {
    var wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;

    var _getTransitionProps = Object(utils["a" /* getTransitionProps */])({
      style: style,
      timeout: timeout
    }, {
      mode: 'enter'
    }),
        transitionDuration = _getTransitionProps.duration;

    if (timeout === 'auto') {
      var duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
      node.style.transitionDuration = "".concat(duration2, "ms");
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : "".concat(transitionDuration, "ms");
    }

    node.style.height = "".concat(wrapperHeight, "px");

    if (onEntering) {
      onEntering(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(function (node, isAppearing) {
    node.style.height = 'auto';

    if (onEntered) {
      onEntered(node, isAppearing);
    }
  });
  var handleExit = normalizedTransitionCallback(function (node) {
    var wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;
    node.style.height = "".concat(wrapperHeight, "px");

    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(onExited);
  var handleExiting = normalizedTransitionCallback(function (node) {
    var wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;

    var _getTransitionProps2 = Object(utils["a" /* getTransitionProps */])({
      style: style,
      timeout: timeout
    }, {
      mode: 'exit'
    }),
        transitionDuration = _getTransitionProps2.duration;

    if (timeout === 'auto') {
      var duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
      node.style.transitionDuration = "".concat(duration2, "ms");
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : "".concat(transitionDuration, "ms");
    }

    node.style.height = collapsedHeight;

    if (onExiting) {
      onExiting(node);
    }
  });

  var addEndListener = function addEndListener(nodeOrNext, maybeNext) {
    var next = enableStrictModeCompat ? nodeOrNext : maybeNext;

    if (timeout === 'auto') {
      timer.current = setTimeout(next, autoTransitionDuration.current || 0);
    }
  };

  return /*#__PURE__*/react["createElement"](TransitionComponent, Object(esm_extends["a" /* default */])({
    in: inProp,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: addEndListener,
    nodeRef: enableStrictModeCompat ? nodeRef : undefined,
    timeout: timeout === 'auto' ? null : timeout
  }, other), function (state, childProps) {
    return /*#__PURE__*/react["createElement"](Component, Object(esm_extends["a" /* default */])({
      className: Object(clsx_m["a" /* default */])(classes.container, className, {
        'entered': classes.entered,
        'exited': !inProp && collapsedHeight === '0px' && classes.hidden
      }[state]),
      style: Object(esm_extends["a" /* default */])({
        minHeight: collapsedHeight
      }, style),
      ref: handleRef
    }, childProps), /*#__PURE__*/react["createElement"]("div", {
      className: classes.wrapper,
      ref: wrapperRef
    }, /*#__PURE__*/react["createElement"]("div", {
      className: classes.wrapperInner
    }, children)));
  });
});
 false ? undefined : void 0;
Collapse_Collapse.muiSupportAuto = true;
/* harmony default export */ var esm_Collapse_Collapse = (Object(withStyles["a" /* default */])(Collapse_styles, {
  name: 'MuiCollapse'
})(Collapse_Collapse));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/SvgIcon/SvgIcon.js
var SvgIcon = __webpack_require__("HR5l");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ClickAwayListener/ClickAwayListener.js
var ClickAwayListener = __webpack_require__("668i");

// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__("2mql");
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// CONCATENATED MODULE: ./node_modules/notistack/dist/notistack.esm.js











function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var SnackbarContext = /*#__PURE__*/react_default.a.createContext();
var allClasses = {
  mui: {
    root: {},
    anchorOriginTopCenter: {},
    anchorOriginBottomCenter: {},
    anchorOriginTopRight: {},
    anchorOriginBottomRight: {},
    anchorOriginTopLeft: {},
    anchorOriginBottomLeft: {}
  },
  container: {
    containerRoot: {},
    containerAnchorOriginTopCenter: {},
    containerAnchorOriginBottomCenter: {},
    containerAnchorOriginTopRight: {},
    containerAnchorOriginBottomRight: {},
    containerAnchorOriginTopLeft: {},
    containerAnchorOriginBottomLeft: {}
  }
};
var MESSAGES = {
  NO_PERSIST_ALL: 'WARNING - notistack: Reached maxSnack while all enqueued snackbars have \'persist\' flag. Notistack will dismiss the oldest snackbar anyway to allow other ones in the queue to be presented.'
};
var SNACKBAR_INDENTS = {
  view: {
    "default": 20,
    dense: 4
  },
  snackbar: {
    "default": 6,
    dense: 2
  }
};
var DEFAULTS = {
  maxSnack: 3,
  dense: false,
  hideIconVariant: false,
  variant: 'default',
  autoHideDuration: 5000,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  },
  TransitionComponent: Slide["a" /* default */],
  transitionDuration: {
    enter: 225,
    exit: 195
  }
};

var capitalise = function capitalise(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

var originKeyExtractor = function originKeyExtractor(anchor) {
  return "" + capitalise(anchor.vertical) + capitalise(anchor.horizontal);
};
/**
 * Omit SnackbarContainer class keys that are not needed for SnackbarItem
 */


var omitContainerKeys = function omitContainerKeys(classes) {
  return (// @ts-ignore
    Object.keys(classes).filter(function (key) {
      return !allClasses.container[key];
    }).reduce(function (obj, key) {
      var _extends2;

      return _extends({}, obj, (_extends2 = {}, _extends2[key] = classes[key], _extends2));
    }, {})
  );
};

var REASONS = {
  TIMEOUT: 'timeout',
  CLICKAWAY: 'clickaway',
  MAXSNACK: 'maxsnack',
  INSTRUCTED: 'instructed'
};
/** Tranforms classes name */

var transformer = {
  toContainerAnchorOrigin: function toContainerAnchorOrigin(origin) {
    return "anchorOrigin" + origin;
  },
  toAnchorOrigin: function toAnchorOrigin(_ref) {
    var vertical = _ref.vertical,
        horizontal = _ref.horizontal;
    return "anchorOrigin" + capitalise(vertical) + capitalise(horizontal);
  },
  toVariant: function toVariant(variant) {
    return "variant" + capitalise(variant);
  }
};

var isDefined = function isDefined(value) {
  return !!value || value === 0;
};

var numberOrNull = function numberOrNull(numberish) {
  return typeof numberish === 'number' || numberish === null;
}; // @ts-ignore


var merge = function merge(options, props, defaults) {
  return function (name) {
    if (name === 'autoHideDuration') {
      if (numberOrNull(options.autoHideDuration)) return options.autoHideDuration;
      if (numberOrNull(props.autoHideDuration)) return props.autoHideDuration;
      return DEFAULTS.autoHideDuration;
    }

    return options[name] || props[name] || defaults[name];
  };
};

function objectMerge(options, props, defaults) {
  if (options === void 0) {
    options = {};
  }

  if (props === void 0) {
    props = {};
  }

  if (defaults === void 0) {
    defaults = {};
  }

  return _extends({}, defaults, {}, props, {}, options);
}

var notistack_esm_styles = function styles(theme) {
  var _root;

  return createStyles_createStyles({
    root: (_root = {
      display: 'flex',
      flexWrap: 'wrap',
      flexGrow: 1
    }, _root[theme.breakpoints.up('sm')] = {
      flexGrow: 'initial',
      minWidth: 288
    }, _root)
  });
};

var SnackbarContent = /*#__PURE__*/Object(react["forwardRef"])(function (_ref, ref) {
  var classes = _ref.classes,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["classes", "className"]);

  return react_default.a.createElement("div", Object.assign({
    ref: ref,
    className: Object(clsx_m["a" /* default */])(classes.root, className)
  }, props));
});
var SnackbarContent$1 = /*#__PURE__*/Object(withStyles["a" /* default */])(notistack_esm_styles)(SnackbarContent);
var DIRECTION = {
  right: 'left',
  left: 'right',
  bottom: 'up',
  top: 'down'
};

var getTransitionDirection = function getTransitionDirection(anchorOrigin) {
  if (anchorOrigin.horizontal !== 'center') {
    return DIRECTION[anchorOrigin.horizontal];
  }

  return DIRECTION[anchorOrigin.vertical];
};
/**
 * Omit all class keys except what we need for collapse component
 */


var notistack_esm_omitNonCollapseKeys = function omitNonCollapseKeys(classes, dense) {
  return {
    container: classes.collapseContainer,
    wrapper: Object(clsx_m["a" /* default */])(classes.collapseWrapper, dense && classes.collapseWrapperDense)
  };
};

var notistack_esm_CheckIcon = function CheckIcon(props) {
  return react_default.a.createElement(SvgIcon["a" /* default */], Object.assign({}, props), react_default.a.createElement("path", {
    d: "M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41\n        10.59L10 14.17L17.59 6.58L19 8L10 17Z"
  }));
};

var notistack_esm_WarningIcon = function WarningIcon(props) {
  return react_default.a.createElement(SvgIcon["a" /* default */], Object.assign({}, props), react_default.a.createElement("path", {
    d: "M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"
  }));
};

var notistack_esm_ErrorIcon = function ErrorIcon(props) {
  return react_default.a.createElement(SvgIcon["a" /* default */], Object.assign({}, props), react_default.a.createElement("path", {
    d: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,\n        6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,\n        13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"
  }));
};

var notistack_esm_InfoIcon = function InfoIcon(props) {
  return react_default.a.createElement(SvgIcon["a" /* default */], Object.assign({}, props), react_default.a.createElement("path", {
    d: "M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,\n        0 22,12A10,10 0 0,0 12,2Z"
  }));
};

var iconStyles = {
  fontSize: 20,
  marginInlineEnd: 8
};
var defaultIconVariants = {
  "default": undefined,
  success: /*#__PURE__*/react_default.a.createElement(notistack_esm_CheckIcon, {
    style: iconStyles
  }),
  warning: /*#__PURE__*/react_default.a.createElement(notistack_esm_WarningIcon, {
    style: iconStyles
  }),
  error: /*#__PURE__*/react_default.a.createElement(notistack_esm_ErrorIcon, {
    style: iconStyles
  }),
  info: /*#__PURE__*/react_default.a.createElement(notistack_esm_InfoIcon, {
    style: iconStyles
  })
};
/**
 * @link https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/utils/createChainedFunction.js
 */

function createChainedFunction(funcs, extraArg) {
  return funcs.reduce(function (acc, func) {
    if (func == null) return acc;

    if (false) {}

    return function chainedFunction() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var argums = [].concat(args);

      if (extraArg && argums.indexOf(extraArg) === -1) {
        argums.push(extraArg);
      }

      acc.apply(this, argums);
      func.apply(this, argums);
    };
  }, function () {});
}
/**
 * @link https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/utils/useEventCallback.js
 */


var useEnhancedEffect = typeof window !== 'undefined' ? react["useLayoutEffect"] : react["useEffect"];

function useEventCallback(fn) {
  var ref = Object(react["useRef"])(fn);
  useEnhancedEffect(function () {
    ref.current = fn;
  });
  return Object(react["useCallback"])(function () {
    return ref.current.apply(void 0, arguments);
  }, []);
}

var Snackbar = /*#__PURE__*/Object(react["forwardRef"])(function (props, ref) {
  var children = props.children,
      autoHideDuration = props.autoHideDuration,
      ClickAwayListenerProps = props.ClickAwayListenerProps,
      _props$disableWindowB = props.disableWindowBlurListener,
      disableWindowBlurListener = _props$disableWindowB === void 0 ? false : _props$disableWindowB,
      onClose = props.onClose,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      open = props.open,
      resumeHideDuration = props.resumeHideDuration,
      other = _objectWithoutPropertiesLoose(props, ["children", "autoHideDuration", "ClickAwayListenerProps", "disableWindowBlurListener", "onClose", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration"]);

  var timerAutoHide = Object(react["useRef"])();
  var handleClose = useEventCallback(function () {
    if (onClose) {
      onClose.apply(void 0, arguments);
    }
  });
  var setAutoHideTimer = useEventCallback(function (autoHideDurationParam) {
    if (!onClose || autoHideDurationParam == null) {
      return;
    }

    clearTimeout(timerAutoHide.current);
    timerAutoHide.current = setTimeout(function () {
      handleClose(null, REASONS.TIMEOUT);
    }, autoHideDurationParam);
  });
  Object(react["useEffect"])(function () {
    if (open) {
      setAutoHideTimer(autoHideDuration);
    }

    return function () {
      clearTimeout(timerAutoHide.current);
    };
  }, [open, autoHideDuration, setAutoHideTimer]);
  /**
   * Pause the timer when the user is interacting with the Snackbar
   * or when the user hide the window.
   */

  var handlePause = function handlePause() {
    clearTimeout(timerAutoHide.current);
  };
  /**
   * Restart the timer when the user is no longer interacting with the Snackbar
   * or when the window is shown back.
   */


  var handleResume = Object(react["useCallback"])(function () {
    if (autoHideDuration != null) {
      setAutoHideTimer(resumeHideDuration != null ? resumeHideDuration : autoHideDuration * 0.5);
    }
  }, [autoHideDuration, resumeHideDuration, setAutoHideTimer]);

  var handleMouseEnter = function handleMouseEnter(event) {
    if (onMouseEnter) {
      onMouseEnter(event);
    }

    handlePause();
  };

  var handleMouseLeave = function handleMouseLeave(event) {
    if (onMouseLeave) {
      onMouseLeave(event);
    }

    handleResume();
  };

  var handleClickAway = function handleClickAway(event) {
    if (onClose) {
      onClose(event, REASONS.CLICKAWAY);
    }
  };

  Object(react["useEffect"])(function () {
    if (!disableWindowBlurListener && open) {
      window.addEventListener('focus', handleResume);
      window.addEventListener('blur', handlePause);
      return function () {
        window.removeEventListener('focus', handleResume);
        window.removeEventListener('blur', handlePause);
      };
    }

    return undefined;
  }, [disableWindowBlurListener, handleResume, open]);
  return Object(react["createElement"])(ClickAwayListener["a" /* default */], _extends({
    onClickAway: handleClickAway
  }, ClickAwayListenerProps), Object(react["createElement"])("div", _extends({
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    ref: ref
  }, other), children));
});

var styles$1 = function styles(theme) {
  var _collapseContainer; // @ts-ignore


  var mode = theme.palette.mode || theme.palette.type;
  var backgroundColor = Object(colorManipulator["b" /* emphasize */])(theme.palette.background["default"], mode === 'light' ? 0.8 : 0.98);
  return createStyles_createStyles(_extends({}, allClasses.mui, {
    lessPadding: {
      paddingLeft: 8 * 2.5
    },
    variantSuccess: {
      backgroundColor: '#43a047 !important',
      color: '#fff !important'
    },
    variantError: {
      backgroundColor: '#d32f2f !important',
      color: '#fff !important'
    },
    variantInfo: {
      backgroundColor: '#2196f3 !important',
      color: '#fff !important'
    },
    variantWarning: {
      backgroundColor: '#ff9800 !important',
      color: '#fff !important'
    },
    contentRoot: _extends({}, theme.typography.body2, {
      backgroundColor: backgroundColor,
      color: theme.palette.getContrastText(backgroundColor),
      alignItems: 'center',
      padding: '6px 16px',
      borderRadius: '4px',
      boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)'
    }),
    message: {
      display: 'flex',
      alignItems: 'center',
      padding: '8px 0'
    },
    action: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto',
      paddingLeft: 16,
      marginRight: -8
    },
    wrappedRoot: {
      position: 'relative',
      transform: 'translateX(0)',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    collapseContainer: (_collapseContainer = {}, _collapseContainer[theme.breakpoints.down('xs')] = {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1)
    }, _collapseContainer),
    collapseWrapper: {
      transition: theme.transitions.create(['margin-bottom'], {
        easing: 'ease'
      }),
      marginTop: SNACKBAR_INDENTS.snackbar["default"],
      marginBottom: SNACKBAR_INDENTS.snackbar["default"]
    },
    collapseWrapperDense: {
      marginTop: SNACKBAR_INDENTS.snackbar.dense,
      marginBottom: SNACKBAR_INDENTS.snackbar.dense
    }
  }));
};

var notistack_esm_SnackbarItem = function SnackbarItem(_ref) {
  var classes = _ref.classes,
      props = _objectWithoutPropertiesLoose(_ref, ["classes"]);

  var timeout = Object(react["useRef"])();

  var _useState = Object(react["useState"])(true),
      collapsed = _useState[0],
      setCollapsed = _useState[1];

  Object(react["useEffect"])(function () {
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);
  var handleClose = createChainedFunction([props.snack.onClose, props.onClose], props.snack.key);

  var handleEntered = function handleEntered() {
    if (props.snack.requestClose) {
      handleClose(null, REASONS.INSTRCUTED);
    }
  };

  var handleExitedScreen = function handleExitedScreen() {
    timeout.current = setTimeout(function () {
      setCollapsed(!collapsed);
    }, 125);
  };

  var style = props.style,
      dense = props.dense,
      otherAriaAttributes = props.ariaAttributes,
      otherClassName = props.className,
      hideIconVariant = props.hideIconVariant,
      iconVariant = props.iconVariant,
      snack = props.snack,
      otherAction = props.action,
      otherContent = props.content,
      otherTranComponent = props.TransitionComponent,
      otherTranProps = props.TransitionProps,
      otherTranDuration = props.transitionDuration,
      other = _objectWithoutPropertiesLoose(props, ["style", "dense", "ariaAttributes", "className", "hideIconVariant", "iconVariant", "snack", "action", "content", "TransitionComponent", "TransitionProps", "transitionDuration", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting"]);

  var key = snack.key,
      open = snack.open,
      singleClassName = snack.className,
      variant = snack.variant,
      singleContent = snack.content,
      singleAction = snack.action,
      singleAriaAttributes = snack.ariaAttributes,
      anchorOrigin = snack.anchorOrigin,
      snackMessage = snack.message,
      singleTranComponent = snack.TransitionComponent,
      singleTranProps = snack.TransitionProps,
      singleTranDuration = snack.transitionDuration,
      singleSnackProps = _objectWithoutPropertiesLoose(snack, ["persist", "key", "open", "entered", "requestClose", "className", "variant", "content", "action", "ariaAttributes", "anchorOrigin", "message", "TransitionComponent", "TransitionProps", "transitionDuration", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting"]);

  var icon = _extends({}, defaultIconVariants, {}, iconVariant)[variant];

  var ariaAttributes = _extends({
    'aria-describedby': 'notistack-snackbar'
  }, objectMerge(singleAriaAttributes, otherAriaAttributes));

  var TransitionComponent = singleTranComponent || otherTranComponent || DEFAULTS.TransitionComponent;
  var transitionDuration = objectMerge(singleTranDuration, otherTranDuration, DEFAULTS.transitionDuration);

  var transitionProps = _extends({
    direction: getTransitionDirection(anchorOrigin)
  }, objectMerge(singleTranProps, otherTranProps));

  var action = singleAction || otherAction;

  if (typeof action === 'function') {
    action = action(key);
  }

  var content = singleContent || otherContent;

  if (typeof content === 'function') {
    content = content(key, snack.message);
  }

  var callbacks = ['onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'].reduce(function (acc, cbName) {
    var _extends2;

    return _extends({}, acc, (_extends2 = {}, _extends2[cbName] = createChainedFunction([props.snack[cbName], props[cbName]], props.snack.key), _extends2));
  }, {});
  return react_default.a.createElement(esm_Collapse_Collapse, {
    unmountOnExit: true,
    timeout: 175,
    "in": collapsed,
    classes: notistack_esm_omitNonCollapseKeys(classes, dense),
    onExited: callbacks.onExited
  }, react_default.a.createElement(Snackbar, Object.assign({}, other, singleSnackProps, {
    open: open,
    className: Object(clsx_m["a" /* default */])(classes.root, classes.wrappedRoot, classes[transformer.toAnchorOrigin(anchorOrigin)]),
    onClose: handleClose
  }), react_default.a.createElement(TransitionComponent, Object.assign({
    appear: true,
    "in": open,
    timeout: transitionDuration
  }, transitionProps, {
    onExit: callbacks.onExit,
    onExiting: callbacks.onExiting,
    onExited: handleExitedScreen,
    onEnter: callbacks.onEnter,
    onEntering: callbacks.onEntering,
    // order matters. first callbacks.onEntered to set entered: true,
    // then handleEntered to check if there's a request for closing
    onEntered: createChainedFunction([callbacks.onEntered, handleEntered])
  }), content || react_default.a.createElement(SnackbarContent$1, Object.assign({}, ariaAttributes, {
    role: "alert",
    style: style,
    className: Object(clsx_m["a" /* default */])(classes.contentRoot, classes[transformer.toVariant(variant)], otherClassName, singleClassName, !hideIconVariant && icon && classes.lessPadding)
  }), react_default.a.createElement("div", {
    id: ariaAttributes['aria-describedby'],
    className: classes.message
  }, !hideIconVariant ? icon : null, snackMessage), action && react_default.a.createElement("div", {
    className: classes.action
  }, action)))));
};

var SnackbarItem$1 = /*#__PURE__*/Object(withStyles["a" /* default */])(styles$1)(notistack_esm_SnackbarItem);
var useStyle = /*#__PURE__*/Object(makeStyles["a" /* default */])(function (theme) {
  var _root, _center;

  return {
    root: (_root = {
      boxSizing: 'border-box',
      display: 'flex',
      maxHeight: '100%',
      maxWidth: '100%',
      position: 'fixed',
      flexDirection: 'column',
      zIndex: theme.zIndex.snackbar,
      height: 'auto',
      width: 'auto',
      minWidth: 288,
      transition: theme.transitions.create(['top', 'right', 'bottom', 'left'], {
        easing: 'ease'
      })
    }, _root[theme.breakpoints.down('xs')] = {
      left: '0 !important',
      right: '0 !important',
      width: '100%'
    }, _root),
    reverseColumns: {
      flexDirection: 'column-reverse'
    },
    top: {
      top: SNACKBAR_INDENTS.view["default"] - SNACKBAR_INDENTS.snackbar["default"]
    },
    topDense: {
      top: SNACKBAR_INDENTS.view.dense - SNACKBAR_INDENTS.snackbar.dense
    },
    bottom: {
      bottom: SNACKBAR_INDENTS.view["default"] - SNACKBAR_INDENTS.snackbar["default"]
    },
    bottomDense: {
      bottom: SNACKBAR_INDENTS.view.dense - SNACKBAR_INDENTS.snackbar.dense
    },
    left: {
      left: SNACKBAR_INDENTS.view["default"]
    },
    leftDense: {
      left: SNACKBAR_INDENTS.view.dense
    },
    right: {
      right: SNACKBAR_INDENTS.view["default"]
    },
    rightDense: {
      right: SNACKBAR_INDENTS.view.dense
    },
    center: (_center = {
      left: '50%',
      transform: 'translateX(-50%)'
    }, _center[theme.breakpoints.down('xs')] = {
      transform: 'translateX(0)'
    }, _center)
  };
});

var notistack_esm_SnackbarContainer = function SnackbarContainer(props) {
  var classes = useStyle();

  var className = props.className,
      anchorOrigin = props.anchorOrigin,
      dense = props.dense,
      other = _objectWithoutPropertiesLoose(props, ["className", "anchorOrigin", "dense"]);

  var combinedClassname = Object(clsx_m["a" /* default */])(classes.root, classes[anchorOrigin.vertical], classes[anchorOrigin.horizontal], // @ts-ignore
  classes["" + anchorOrigin.vertical + (dense ? 'Dense' : '')], // @ts-ignore
  classes["" + anchorOrigin.horizontal + (dense ? 'Dense' : '')], className, anchorOrigin.vertical === 'bottom' && classes.reverseColumns);
  return react_default.a.createElement("div", Object.assign({
    className: combinedClassname
  }, other));
};

var SnackbarContainer$1 = /*#__PURE__*/react_default.a.memo(notistack_esm_SnackbarContainer);
/* eslint-disable */

var __DEV__ = "production" !== 'production';

var warning = function warning(message) {
  if (!__DEV__) return;

  if (typeof console !== 'undefined') {
    console.error(message);
  }

  try {
    throw new Error(message);
  } catch (x) {}
};

var notistack_esm_SnackbarProvider = /*#__PURE__*/function (_Component) {
  _inheritsLoose(SnackbarProvider, _Component);

  function SnackbarProvider(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    /**
     * Adds a new snackbar to the queue to be presented.
     * Returns generated or user defined key referencing the new snackbar or null
     */

    _this.enqueueSnackbar = function (message, opts) {
      if (opts === void 0) {
        opts = {};
      }

      var _opts = opts,
          key = _opts.key,
          preventDuplicate = _opts.preventDuplicate,
          options = _objectWithoutPropertiesLoose(_opts, ["key", "preventDuplicate"]);

      var hasSpecifiedKey = isDefined(key);
      var id = hasSpecifiedKey ? key : new Date().getTime() + Math.random();
      var merger = merge(options, _this.props, DEFAULTS);

      var snack = _extends({
        key: id
      }, options, {
        message: message,
        open: true,
        entered: false,
        requestClose: false,
        variant: merger('variant'),
        anchorOrigin: merger('anchorOrigin'),
        autoHideDuration: merger('autoHideDuration')
      });

      if (options.persist) {
        snack.autoHideDuration = undefined;
      }

      _this.setState(function (state) {
        if (preventDuplicate === undefined && _this.props.preventDuplicate || preventDuplicate) {
          var compareFunction = function compareFunction(item) {
            return hasSpecifiedKey ? item.key === key : item.message === message;
          };

          var inQueue = state.queue.findIndex(compareFunction) > -1;
          var inView = state.snacks.findIndex(compareFunction) > -1;

          if (inQueue || inView) {
            return state;
          }
        }

        return _this.handleDisplaySnack(_extends({}, state, {
          queue: [].concat(state.queue, [snack])
        }));
      });

      return id;
    };
    /**
     * Reducer: Display snack if there's space for it. Otherwise, immediately
     * begin dismissing the oldest message to start showing the new one.
     */


    _this.handleDisplaySnack = function (state) {
      var snacks = state.snacks;

      if (snacks.length >= _this.maxSnack) {
        return _this.handleDismissOldest(state);
      }

      return _this.processQueue(state);
    };
    /**
     * Reducer: Display items (notifications) in the queue if there's space for them.
     */


    _this.processQueue = function (state) {
      var queue = state.queue,
          snacks = state.snacks;

      if (queue.length > 0) {
        return _extends({}, state, {
          snacks: [].concat(snacks, [queue[0]]),
          queue: queue.slice(1, queue.length)
        });
      }

      return state;
    };
    /**
     * Reducer: Hide oldest snackbar on the screen because there exists a new one which we have to display.
     * (ignoring the one with 'persist' flag. i.e. explicitly told by user not to get dismissed).
     *
     * Note 1: If there is already a message leaving the screen, no new messages are dismissed.
     * Note 2: If the oldest message has not yet entered the screen, only a request to close the
     *         snackbar is made. Once it entered the screen, it will be immediately dismissed.
     */


    _this.handleDismissOldest = function (state) {
      if (state.snacks.some(function (item) {
        return !item.open || item.requestClose;
      })) {
        return state;
      }

      var popped = false;
      var ignore = false;
      var persistentCount = state.snacks.reduce(function (acc, current) {
        return acc + (current.open && current.persist ? 1 : 0);
      }, 0);

      if (persistentCount === _this.maxSnack) {
         false ? undefined : void 0;
        ignore = true;
      }

      var snacks = state.snacks.map(function (item) {
        if (!popped && (!item.persist || ignore)) {
          popped = true;

          if (!item.entered) {
            return _extends({}, item, {
              requestClose: true
            });
          }

          if (item.onClose) item.onClose(null, REASONS.MAXSNACK, item.key);
          if (_this.props.onClose) _this.props.onClose(null, REASONS.MAXSNACK, item.key);
          return _extends({}, item, {
            open: false
          });
        }

        return _extends({}, item);
      });
      return _extends({}, state, {
        snacks: snacks
      });
    };
    /**
     * Set the entered state of the snackbar with the given key.
     */


    _this.handleEnteredSnack = function (node, isAppearing, key) {
      if (!isDefined(key)) {
        throw new Error('handleEnteredSnack Cannot be called with undefined key');
      }

      _this.setState(function (_ref) {
        var snacks = _ref.snacks;
        return {
          snacks: snacks.map(function (item) {
            return item.key === key ? _extends({}, item, {
              entered: true
            }) : _extends({}, item);
          })
        };
      });
    };
    /**
     * Hide a snackbar after its timeout.
     */


    _this.handleCloseSnack = function (event, reason, key) {
      // should not use createChainedFunction for onClose.
      // because this.closeSnackbar called this function
      if (_this.props.onClose) {
        _this.props.onClose(event, reason, key);
      }

      if (reason === REASONS.CLICKAWAY) return;
      var shouldCloseAll = key === undefined;

      _this.setState(function (_ref2) {
        var snacks = _ref2.snacks,
            queue = _ref2.queue;
        return {
          snacks: snacks.map(function (item) {
            if (!shouldCloseAll && item.key !== key) {
              return _extends({}, item);
            }

            return item.entered ? _extends({}, item, {
              open: false
            }) : _extends({}, item, {
              requestClose: true
            });
          }),
          queue: queue.filter(function (item) {
            return item.key !== key;
          })
        };
      });
    };
    /**
     * Close snackbar with the given key
     */


    _this.closeSnackbar = function (key) {
      // call individual snackbar onClose callback passed through options parameter
      var toBeClosed = _this.state.snacks.find(function (item) {
        return item.key === key;
      });

      if (isDefined(key) && toBeClosed && toBeClosed.onClose) {
        toBeClosed.onClose(null, REASONS.INSTRUCTED, key);
      }

      _this.handleCloseSnack(null, REASONS.INSTRUCTED, key);
    };
    /**
     * When we set open attribute of a snackbar to false (i.e. after we hide a snackbar),
     * it leaves the screen and immediately after leaving animation is done, this method
     * gets called. We remove the hidden snackbar from state and then display notifications
     * waiting in the queue (if any). If after this process the queue is not empty, the
     * oldest message is dismissed.
     */
    // @ts-ignore


    _this.handleExitedSnack = function (event, key1, key2) {
      var key = key1 || key2;

      if (!isDefined(key)) {
        throw new Error('handleExitedSnack Cannot be called with undefined key');
      }

      _this.setState(function (state) {
        var newState = _this.processQueue(_extends({}, state, {
          snacks: state.snacks.filter(function (item) {
            return item.key !== key;
          })
        }));

        if (newState.queue.length === 0) {
          return newState;
        }

        return _this.handleDismissOldest(newState);
      });
    };

    _this.state = {
      snacks: [],
      queue: [],
      contextValue: {
        enqueueSnackbar: _this.enqueueSnackbar,
        closeSnackbar: _this.closeSnackbar
      }
    };
    return _this;
  }

  var _proto = SnackbarProvider.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var contextValue = this.state.contextValue;

    var _this$props = this.props,
        iconVariant = _this$props.iconVariant,
        _this$props$dense = _this$props.dense,
        dense = _this$props$dense === void 0 ? DEFAULTS.dense : _this$props$dense,
        _this$props$hideIconV = _this$props.hideIconVariant,
        hideIconVariant = _this$props$hideIconV === void 0 ? DEFAULTS.hideIconVariant : _this$props$hideIconV,
        domRoot = _this$props.domRoot,
        children = _this$props.children,
        _this$props$classes = _this$props.classes,
        classes = _this$props$classes === void 0 ? {} : _this$props$classes,
        props = _objectWithoutPropertiesLoose(_this$props, ["maxSnack", "preventDuplicate", "variant", "anchorOrigin", "iconVariant", "dense", "hideIconVariant", "domRoot", "children", "classes"]);

    var categ = this.state.snacks.reduce(function (acc, current) {
      var _extends2;

      var category = originKeyExtractor(current.anchorOrigin);
      var existingOfCategory = acc[category] || [];
      return _extends({}, acc, (_extends2 = {}, _extends2[category] = [].concat(existingOfCategory, [current]), _extends2));
    }, {});
    var snackbars = Object.keys(categ).map(function (origin) {
      var snacks = categ[origin];
      return react_default.a.createElement(SnackbarContainer$1, {
        key: origin,
        dense: dense,
        anchorOrigin: snacks[0].anchorOrigin,
        className: Object(clsx_m["a" /* default */])(classes.containerRoot, classes[transformer.toContainerAnchorOrigin(origin)])
      }, snacks.map(function (snack) {
        return react_default.a.createElement(SnackbarItem$1, Object.assign({}, props, {
          key: snack.key,
          snack: snack,
          dense: dense,
          iconVariant: iconVariant,
          hideIconVariant: hideIconVariant,
          classes: omitContainerKeys(classes),
          onClose: _this2.handleCloseSnack,
          onExited: createChainedFunction([_this2.handleExitedSnack, _this2.props.onExited]),
          onEntered: createChainedFunction([_this2.handleEnteredSnack, _this2.props.onEntered])
        }));
      }));
    });
    return react_default.a.createElement(SnackbarContext.Provider, {
      value: contextValue
    }, children, domRoot ? Object(react_dom["createPortal"])(snackbars, domRoot) : snackbars);
  };

  _createClass(SnackbarProvider, [{
    key: "maxSnack",
    get: function get() {
      return this.props.maxSnack || DEFAULTS.maxSnack;
    }
  }]);

  return SnackbarProvider;
}(react["Component"]); // https://github.com/JamesMGreene/Function.name/blob/58b314d4a983110c3682f1228f845d39ccca1817/Function.name.js#L3


var fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;

var getFunctionName = function getFunctionName(fn) {
  var match = ("" + fn).match(fnNameMatchRegex);
  var name = match && match[1];
  return name || '';
};
/**
 * @param {function} Component
 * @param {string} fallback
 * @returns {string | undefined}
 */


var getFunctionComponentName = function getFunctionComponentName(Component, fallback) {
  if (fallback === void 0) {
    fallback = '';
  }

  return Component.displayName || Component.name || getFunctionName(Component) || fallback;
};

var getWrappedName = function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
};
/** 
 * From react-is
 * @link https://github.com/facebook/react/blob/master/packages/shared/ReactSymbols.js
 */


var ForwardRef = function ForwardRef() {
  var symbolFor = typeof Symbol === 'function' && Symbol["for"];
  return symbolFor ? symbolFor('react.forward_ref') : 0xead0;
};
/**
 * https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/getComponentName.js
 *
 * @param {React.ReactType} Component
 * @returns {string | undefined}
 */


var getDisplayName = function getDisplayName(Component) {
  if (Component == null) {
    return undefined;
  }

  if (typeof Component === 'string') {
    return Component;
  }

  if (typeof Component === 'function') {
    return getFunctionComponentName(Component, 'Component');
  }

  if (typeof Component === 'object') {
    switch (Component.$$typeof) {
      case ForwardRef():
        return getWrappedName(Component, Component.render, 'ForwardRef');

      default:
        return undefined;
    }
  }

  return undefined;
};

var notistack_esm_withSnackbar = function withSnackbar(Component) {
  var WrappedComponent = react_default.a.forwardRef(function (props, ref) {
    return react_default.a.createElement(SnackbarContext.Consumer, null, function (context) {
      return react_default.a.createElement(Component, _extends({}, props, {
        ref: ref,
        enqueueSnackbar: context.enqueueSnackbar,
        closeSnackbar: context.closeSnackbar
      }));
    });
  });

  if (false) {}

  hoist_non_react_statics_cjs_default()(WrappedComponent, Component);
  return WrappedComponent;
};

var notistack_esm_useSnackbar = function useSnackbar() {
  return Object(react["useContext"])(SnackbarContext);
};



/***/ }),

/***/ "NqtD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return capitalize; });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TrhM");
 // It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word a the sentence.
// We only handle the first word.

function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error( false ? undefined : Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(7));
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

/***/ }),

/***/ "ODXe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _slicedToArray; });

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__("BsWD");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || Object(unsupportedIterableToArray["a" /* default */])(arr, i) || _nonIterableRest();
}

/***/ }),

/***/ "Ovef":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useEventCallback; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var useEnhancedEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];
/**
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 *
 * @param {function} fn
 */

function useEventCallback(fn) {
  var ref = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](fn);
  useEnhancedEffect(function () {
    ref.current = fn;
  });
  return react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function () {
    return (0, ref.current).apply(void 0, arguments);
  }, []);
}

/***/ }),

/***/ "R/WZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("RD7I");
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cNwE");




function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(stylesOrCreator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
  }, options));
}

/* harmony default export */ __webpack_exports__["a"] = (makeStyles);

/***/ }),

/***/ "TrhM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatMuiErrorMessage; });
/**
 * WARNING: Don't import this directly.
 * Use `MuiError` from `@material-ui/utils/macros/MuiError.macro` instead.
 * @param {number} code
 */
function formatMuiErrorMessage(code) {
  // Apply babel-plugin-transform-template-literals in loose mode
  // loose mode is safe iff we're concatenating primitives
  // see https://babeljs.io/docs/en/babel-plugin-transform-template-literals#loose

  /* eslint-disable prefer-template */
  var url = 'https://material-ui.com/production-error/?code=' + code;

  for (var i = 1; i < arguments.length; i += 1) {
    // rest params over-transpile for this case
    // eslint-disable-next-line prefer-rest-params
    url += '&args[]=' + encodeURIComponent(arguments[i]);
  }

  return 'Minified Material-UI error #' + code + '; visit ' + url + ' for the full message.';
  /* eslint-enable prefer-template */
}

/***/ }),

/***/ "VD++":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: styles

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("Ff2n");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("i8i4");

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__("iuhU");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useForkRef.js
var useForkRef = __webpack_require__("bfFb");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useEventCallback.js
var useEventCallback = __webpack_require__("Ovef");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__("H2TA");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useIsFocusVisible.js
var useIsFocusVisible = __webpack_require__("G7As");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("KQm4");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__("zLVn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("JX7q");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__("dI71");

// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/TransitionGroupContext.js
var TransitionGroupContext = __webpack_require__("0PSK");

// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/utils/ChildMapping.js

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && Object(react["isValidElement"])(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react["Children"].map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return Object(react["cloneElement"])(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!Object(react["isValidElement"])(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = Object(react["isValidElement"])(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = Object(react["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = Object(react["cloneElement"])(child, {
        in: false
      });
    } else if (hasNext && hasPrev && Object(react["isValidElement"])(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = Object(react["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}
// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/TransitionGroup.js








var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup_TransitionGroup = /*#__PURE__*/function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(Object(assertThisInitialized["a" /* default */])(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = Object(esm_extends["a" /* default */])({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/react_default.a.createElement(TransitionGroupContext["a" /* default */].Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/react_default.a.createElement(TransitionGroupContext["a" /* default */].Provider, {
      value: contextValue
    }, /*#__PURE__*/react_default.a.createElement(Component, props, children));
  };

  return TransitionGroup;
}(react_default.a.Component);

TransitionGroup_TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ var esm_TransitionGroup = (TransitionGroup_TransitionGroup);
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/ButtonBase/Ripple.js



var useEnhancedEffect = typeof window === 'undefined' ? react["useEffect"] : react["useLayoutEffect"];
/**
 * @ignore - internal component.
 */

function Ripple(props) {
  var classes = props.classes,
      _props$pulsate = props.pulsate,
      pulsate = _props$pulsate === void 0 ? false : _props$pulsate,
      rippleX = props.rippleX,
      rippleY = props.rippleY,
      rippleSize = props.rippleSize,
      inProp = props.in,
      _props$onExited = props.onExited,
      onExited = _props$onExited === void 0 ? function () {} : _props$onExited,
      timeout = props.timeout;

  var _React$useState = react["useState"](false),
      leaving = _React$useState[0],
      setLeaving = _React$useState[1];

  var rippleClassName = Object(clsx_m["a" /* default */])(classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  var rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  var childClassName = Object(clsx_m["a" /* default */])(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  var handleExited = Object(useEventCallback["a" /* default */])(onExited); // Ripple is used for user feedback (e.g. click or press) so we want to apply styles with the highest priority

  useEnhancedEffect(function () {
    if (!inProp) {
      // react-transition-group#onExit
      setLeaving(true); // react-transition-group#onExited

      var timeoutId = setTimeout(handleExited, timeout);
      return function () {
        clearTimeout(timeoutId);
      };
    }

    return undefined;
  }, [handleExited, inProp, timeout]);
  return /*#__PURE__*/react["createElement"]("span", {
    className: rippleClassName,
    style: rippleStyles
  }, /*#__PURE__*/react["createElement"]("span", {
    className: childClassName
  }));
}

 false ? undefined : void 0;
/* harmony default export */ var ButtonBase_Ripple = (Ripple);
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/ButtonBase/TouchRipple.js








var DURATION = 550;
var DELAY_RIPPLE = 80;
var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      overflow: 'hidden',
      pointerEvents: 'none',
      position: 'absolute',
      zIndex: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      borderRadius: 'inherit'
    },

    /* Styles applied to the internal `Ripple` components `ripple` class. */
    ripple: {
      opacity: 0,
      position: 'absolute'
    },

    /* Styles applied to the internal `Ripple` components `rippleVisible` class. */
    rippleVisible: {
      opacity: 0.3,
      transform: 'scale(1)',
      animation: "$enter ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
    },

    /* Styles applied to the internal `Ripple` components `ripplePulsate` class. */
    ripplePulsate: {
      animationDuration: "".concat(theme.transitions.duration.shorter, "ms")
    },

    /* Styles applied to the internal `Ripple` components `child` class. */
    child: {
      opacity: 1,
      display: 'block',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      backgroundColor: 'currentColor'
    },

    /* Styles applied to the internal `Ripple` components `childLeaving` class. */
    childLeaving: {
      opacity: 0,
      animation: "$exit ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
    },

    /* Styles applied to the internal `Ripple` components `childPulsate` class. */
    childPulsate: {
      position: 'absolute',
      left: 0,
      top: 0,
      animation: "$pulsate 2500ms ".concat(theme.transitions.easing.easeInOut, " 200ms infinite")
    },
    '@keyframes enter': {
      '0%': {
        transform: 'scale(0)',
        opacity: 0.1
      },
      '100%': {
        transform: 'scale(1)',
        opacity: 0.3
      }
    },
    '@keyframes exit': {
      '0%': {
        opacity: 1
      },
      '100%': {
        opacity: 0
      }
    },
    '@keyframes pulsate': {
      '0%': {
        transform: 'scale(1)'
      },
      '50%': {
        transform: 'scale(0.92)'
      },
      '100%': {
        transform: 'scale(1)'
      }
    }
  };
};
/**
 * @ignore - internal component.
 *
 * TODO v5: Make private
 */

var TouchRipple_TouchRipple = /*#__PURE__*/react["forwardRef"](function TouchRipple(props, ref) {
  var _props$center = props.center,
      centerProp = _props$center === void 0 ? false : _props$center,
      classes = props.classes,
      className = props.className,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["center", "classes", "className"]);

  var _React$useState = react["useState"]([]),
      ripples = _React$useState[0],
      setRipples = _React$useState[1];

  var nextKey = react["useRef"](0);
  var rippleCallback = react["useRef"](null);
  react["useEffect"](function () {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]); // Used to filter out mouse emulated events on mobile.

  var ignoringMouseDown = react["useRef"](false); // We use a timer in order to only show the ripples for touch "click" like events.
  // We don't want to display the ripple for touch scroll events.

  var startTimer = react["useRef"](null); // This is the hook called once the previous timeout is ready.

  var startTimerCommit = react["useRef"](null);
  var container = react["useRef"](null);
  react["useEffect"](function () {
    return function () {
      clearTimeout(startTimer.current);
    };
  }, []);
  var startCommit = react["useCallback"](function (params) {
    var pulsate = params.pulsate,
        rippleX = params.rippleX,
        rippleY = params.rippleY,
        rippleSize = params.rippleSize,
        cb = params.cb;
    setRipples(function (oldRipples) {
      return [].concat(Object(toConsumableArray["a" /* default */])(oldRipples), [/*#__PURE__*/react["createElement"](ButtonBase_Ripple, {
        key: nextKey.current,
        classes: classes,
        timeout: DURATION,
        pulsate: pulsate,
        rippleX: rippleX,
        rippleY: rippleY,
        rippleSize: rippleSize
      })]);
    });
    nextKey.current += 1;
    rippleCallback.current = cb;
  }, [classes]);
  var start = react["useCallback"](function () {
    var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var cb = arguments.length > 2 ? arguments[2] : undefined;
    var _options$pulsate = options.pulsate,
        pulsate = _options$pulsate === void 0 ? false : _options$pulsate,
        _options$center = options.center,
        center = _options$center === void 0 ? centerProp || options.pulsate : _options$center,
        _options$fakeElement = options.fakeElement,
        fakeElement = _options$fakeElement === void 0 ? false : _options$fakeElement;

    if (event.type === 'mousedown' && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }

    if (event.type === 'touchstart') {
      ignoringMouseDown.current = true;
    }

    var element = fakeElement ? null : container.current;
    var rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    }; // Get the size of the ripple

    var rippleX;
    var rippleY;
    var rippleSize;

    if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      var _ref = event.touches ? event.touches[0] : event,
          clientX = _ref.clientX,
          clientY = _ref.clientY;

      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }

    if (center) {
      rippleSize = Math.sqrt((2 * Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 3); // For some reason the animation is broken on Mobile Chrome if the size if even.

      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      var sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      var sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
    } // Touche devices


    if (event.touches) {
      // check that this isn't another touchstart due to multitouch
      // otherwise we will only clear a single timer when unmounting while two
      // are running
      if (startTimerCommit.current === null) {
        // Prepare the ripple effect.
        startTimerCommit.current = function () {
          startCommit({
            pulsate: pulsate,
            rippleX: rippleX,
            rippleY: rippleY,
            rippleSize: rippleSize,
            cb: cb
          });
        }; // Delay the execution of the ripple effect.


        startTimer.current = setTimeout(function () {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
      }
    } else {
      startCommit({
        pulsate: pulsate,
        rippleX: rippleX,
        rippleY: rippleY,
        rippleSize: rippleSize,
        cb: cb
      });
    }
  }, [centerProp, startCommit]);
  var pulsate = react["useCallback"](function () {
    start({}, {
      pulsate: true
    });
  }, [start]);
  var stop = react["useCallback"](function (event, cb) {
    clearTimeout(startTimer.current); // The touch interaction occurs too quickly.
    // We still want to show ripple effect.

    if (event.type === 'touchend' && startTimerCommit.current) {
      event.persist();
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.current = setTimeout(function () {
        stop(event, cb);
      });
      return;
    }

    startTimerCommit.current = null;
    setRipples(function (oldRipples) {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }

      return oldRipples;
    });
    rippleCallback.current = cb;
  }, []);
  react["useImperativeHandle"](ref, function () {
    return {
      pulsate: pulsate,
      start: start,
      stop: stop
    };
  }, [pulsate, start, stop]);
  return /*#__PURE__*/react["createElement"]("span", Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, className),
    ref: container
  }, other), /*#__PURE__*/react["createElement"](esm_TransitionGroup, {
    component: null,
    exit: true
  }, ripples));
});
 false ? undefined : void 0;
/* harmony default export */ var ButtonBase_TouchRipple = (Object(withStyles["a" /* default */])(styles, {
  flip: false,
  name: 'MuiTouchRipple'
})( /*#__PURE__*/react["memo"](TouchRipple_TouchRipple)));
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js











var ButtonBase_styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    '-moz-appearance': 'none',
    // Reset
    '-webkit-appearance': 'none',
    // Reset
    textDecoration: 'none',
    // So we take precedent over the style of a native <a /> element.
    color: 'inherit',
    '&::-moz-focus-inner': {
      borderStyle: 'none' // Remove Firefox dotted outline.

    },
    '&$disabled': {
      pointerEvents: 'none',
      // Disable link interactions
      cursor: 'default'
    },
    '@media print': {
      colorAdjust: 'exact'
    }
  },

  /* Pseudo-class applied to the root element if `disabled={true}`. */
  disabled: {},

  /* Pseudo-class applied to the root element if keyboard focused. */
  focusVisible: {}
};
/**
 * `ButtonBase` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains a load of style reset and some focus/ripple logic.
 */

var ButtonBase_ButtonBase = /*#__PURE__*/react["forwardRef"](function ButtonBase(props, ref) {
  var action = props.action,
      buttonRefProp = props.buttonRef,
      _props$centerRipple = props.centerRipple,
      centerRipple = _props$centerRipple === void 0 ? false : _props$centerRipple,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      component = _props$component === void 0 ? 'button' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableRipple = props.disableRipple,
      disableRipple = _props$disableRipple === void 0 ? false : _props$disableRipple,
      _props$disableTouchRi = props.disableTouchRipple,
      disableTouchRipple = _props$disableTouchRi === void 0 ? false : _props$disableTouchRi,
      _props$focusRipple = props.focusRipple,
      focusRipple = _props$focusRipple === void 0 ? false : _props$focusRipple,
      focusVisibleClassName = props.focusVisibleClassName,
      onBlur = props.onBlur,
      onClick = props.onClick,
      onFocus = props.onFocus,
      onFocusVisible = props.onFocusVisible,
      onKeyDown = props.onKeyDown,
      onKeyUp = props.onKeyUp,
      onMouseDown = props.onMouseDown,
      onMouseLeave = props.onMouseLeave,
      onMouseUp = props.onMouseUp,
      onTouchEnd = props.onTouchEnd,
      onTouchMove = props.onTouchMove,
      onTouchStart = props.onTouchStart,
      onDragLeave = props.onDragLeave,
      _props$tabIndex = props.tabIndex,
      tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
      TouchRippleProps = props.TouchRippleProps,
      _props$type = props.type,
      type = _props$type === void 0 ? 'button' : _props$type,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["action", "buttonRef", "centerRipple", "children", "classes", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "onBlur", "onClick", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "onDragLeave", "tabIndex", "TouchRippleProps", "type"]);

  var buttonRef = react["useRef"](null);

  function getButtonNode() {
    // #StrictMode ready
    return react_dom["findDOMNode"](buttonRef.current);
  }

  var rippleRef = react["useRef"](null);

  var _React$useState = react["useState"](false),
      focusVisible = _React$useState[0],
      setFocusVisible = _React$useState[1];

  if (disabled && focusVisible) {
    setFocusVisible(false);
  }

  var _useIsFocusVisible = Object(useIsFocusVisible["a" /* default */])(),
      isFocusVisible = _useIsFocusVisible.isFocusVisible,
      onBlurVisible = _useIsFocusVisible.onBlurVisible,
      focusVisibleRef = _useIsFocusVisible.ref;

  react["useImperativeHandle"](action, function () {
    return {
      focusVisible: function focusVisible() {
        setFocusVisible(true);
        buttonRef.current.focus();
      }
    };
  }, []);
  react["useEffect"](function () {
    if (focusVisible && focusRipple && !disableRipple) {
      rippleRef.current.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible]);

  function useRippleHandler(rippleAction, eventCallback) {
    var skipRippleAction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : disableTouchRipple;
    return Object(useEventCallback["a" /* default */])(function (event) {
      if (eventCallback) {
        eventCallback(event);
      }

      var ignore = skipRippleAction;

      if (!ignore && rippleRef.current) {
        rippleRef.current[rippleAction](event);
      }

      return true;
    });
  }

  var handleMouseDown = useRippleHandler('start', onMouseDown);
  var handleDragLeave = useRippleHandler('stop', onDragLeave);
  var handleMouseUp = useRippleHandler('stop', onMouseUp);
  var handleMouseLeave = useRippleHandler('stop', function (event) {
    if (focusVisible) {
      event.preventDefault();
    }

    if (onMouseLeave) {
      onMouseLeave(event);
    }
  });
  var handleTouchStart = useRippleHandler('start', onTouchStart);
  var handleTouchEnd = useRippleHandler('stop', onTouchEnd);
  var handleTouchMove = useRippleHandler('stop', onTouchMove);
  var handleBlur = useRippleHandler('stop', function (event) {
    if (focusVisible) {
      onBlurVisible(event);
      setFocusVisible(false);
    }

    if (onBlur) {
      onBlur(event);
    }
  }, false);
  var handleFocus = Object(useEventCallback["a" /* default */])(function (event) {
    // Fix for https://github.com/facebook/react/issues/7769
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }

    if (isFocusVisible(event)) {
      setFocusVisible(true);

      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }

    if (onFocus) {
      onFocus(event);
    }
  });

  var isNonNativeButton = function isNonNativeButton() {
    var button = getButtonNode();
    return component && component !== 'button' && !(button.tagName === 'A' && button.href);
  };
  /**
   * IE 11 shim for https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat
   */


  var keydownRef = react["useRef"](false);
  var handleKeyDown = Object(useEventCallback["a" /* default */])(function (event) {
    // Check if key is already down to avoid repeats being counted as multiple activations
    if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === ' ') {
      keydownRef.current = true;
      event.persist();
      rippleRef.current.stop(event, function () {
        rippleRef.current.start(event);
      });
    }

    if (event.target === event.currentTarget && isNonNativeButton() && event.key === ' ') {
      event.preventDefault();
    }

    if (onKeyDown) {
      onKeyDown(event);
    } // Keyboard accessibility for non interactive elements


    if (event.target === event.currentTarget && isNonNativeButton() && event.key === 'Enter' && !disabled) {
      event.preventDefault();

      if (onClick) {
        onClick(event);
      }
    }
  });
  var handleKeyUp = Object(useEventCallback["a" /* default */])(function (event) {
    // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
    // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0
    if (focusRipple && event.key === ' ' && rippleRef.current && focusVisible && !event.defaultPrevented) {
      keydownRef.current = false;
      event.persist();
      rippleRef.current.stop(event, function () {
        rippleRef.current.pulsate(event);
      });
    }

    if (onKeyUp) {
      onKeyUp(event);
    } // Keyboard accessibility for non interactive elements


    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === ' ' && !event.defaultPrevented) {
      onClick(event);
    }
  });
  var ComponentProp = component;

  if (ComponentProp === 'button' && other.href) {
    ComponentProp = 'a';
  }

  var buttonProps = {};

  if (ComponentProp === 'button') {
    buttonProps.type = type;
    buttonProps.disabled = disabled;
  } else {
    if (ComponentProp !== 'a' || !other.href) {
      buttonProps.role = 'button';
    }

    buttonProps['aria-disabled'] = disabled;
  }

  var handleUserRef = Object(useForkRef["a" /* default */])(buttonRefProp, ref);
  var handleOwnRef = Object(useForkRef["a" /* default */])(focusVisibleRef, buttonRef);
  var handleRef = Object(useForkRef["a" /* default */])(handleUserRef, handleOwnRef);

  var _React$useState2 = react["useState"](false),
      mountedState = _React$useState2[0],
      setMountedState = _React$useState2[1];

  react["useEffect"](function () {
    setMountedState(true);
  }, []);
  var enableTouchRipple = mountedState && !disableRipple && !disabled;

  if (false) {}

  return /*#__PURE__*/react["createElement"](ComponentProp, Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, className, focusVisible && [classes.focusVisible, focusVisibleClassName], disabled && classes.disabled),
    onBlur: handleBlur,
    onClick: onClick,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled ? -1 : tabIndex
  }, buttonProps, other), children, enableTouchRipple ?
  /*#__PURE__*/

  /* TouchRipple is only needed client-side, x2 boost on the server. */
  react["createElement"](ButtonBase_TouchRipple, Object(esm_extends["a" /* default */])({
    ref: rippleRef,
    center: centerRipple
  }, TouchRippleProps)) : null);
});
 false ? undefined : void 0;
/* harmony default export */ var esm_ButtonBase_ButtonBase = __webpack_exports__["a"] = (Object(withStyles["a" /* default */])(ButtonBase_styles, {
  name: 'MuiButtonBase'
})(ButtonBase_ButtonBase));

/***/ }),

/***/ "Z3vd":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Ff2n");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wx14");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H2TA");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("ye/S");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("VD++");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("NqtD");








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({}, theme.typography.button, {
      boxSizing: 'border-box',
      minWidth: 64,
      padding: '6px 16px',
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.text.primary,
      transition: theme.transitions.create(['background-color', 'box-shadow', 'border'], {
        duration: theme.transitions.duration.short
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__[/* fade */ "c"])(theme.palette.text.primary, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        },
        '&$disabled': {
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    }),

    /* Styles applied to the span element that wraps the children. */
    label: {
      width: '100%',
      // Ensure the correct width for iOS Safari
      display: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    },

    /* Styles applied to the root element if `variant="text"`. */
    text: {
      padding: '6px 8px'
    },

    /* Styles applied to the root element if `variant="text"` and `color="primary"`. */
    textPrimary: {
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__[/* fade */ "c"])(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the root element if `variant="text"` and `color="secondary"`. */
    textSecondary: {
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__[/* fade */ "c"])(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      padding: '5px 15px',
      border: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'),
      '&$disabled': {
        border: "1px solid ".concat(theme.palette.action.disabledBackground)
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
    outlinedPrimary: {
      color: theme.palette.primary.main,
      border: "1px solid ".concat(Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__[/* fade */ "c"])(theme.palette.primary.main, 0.5)),
      '&:hover': {
        border: "1px solid ".concat(theme.palette.primary.main),
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__[/* fade */ "c"])(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
    outlinedSecondary: {
      color: theme.palette.secondary.main,
      border: "1px solid ".concat(Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__[/* fade */ "c"])(theme.palette.secondary.main, 0.5)),
      '&:hover': {
        border: "1px solid ".concat(theme.palette.secondary.main),
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_5__[/* fade */ "c"])(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        border: "1px solid ".concat(theme.palette.action.disabled)
      }
    },

    /* Styles applied to the root element if `variant="contained"`. */
    contained: {
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      boxShadow: theme.shadows[2],
      '&:hover': {
        backgroundColor: theme.palette.grey.A100,
        boxShadow: theme.shadows[4],
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          boxShadow: theme.shadows[2],
          backgroundColor: theme.palette.grey[300]
        },
        '&$disabled': {
          backgroundColor: theme.palette.action.disabledBackground
        }
      },
      '&$focusVisible': {
        boxShadow: theme.shadows[6]
      },
      '&:active': {
        boxShadow: theme.shadows[8]
      },
      '&$disabled': {
        color: theme.palette.action.disabled,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground
      }
    },

    /* Styles applied to the root element if `variant="contained"` and `color="primary"`. */
    containedPrimary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.primary.main
        }
      }
    },

    /* Styles applied to the root element if `variant="contained"` and `color="secondary"`. */
    containedSecondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.secondary.main
        }
      }
    },

    /* Styles applied to the root element if `disableElevation={true}`. */
    disableElevation: {
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none'
      },
      '&$focusVisible': {
        boxShadow: 'none'
      },
      '&:active': {
        boxShadow: 'none'
      },
      '&$disabled': {
        boxShadow: 'none'
      }
    },

    /* Pseudo-class applied to the ButtonBase root element if the button is keyboard focused. */
    focusVisible: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit',
      borderColor: 'currentColor'
    },

    /* Styles applied to the root element if `size="small"` and `variant="text"`. */
    textSizeSmall: {
      padding: '4px 5px',
      fontSize: theme.typography.pxToRem(13)
    },

    /* Styles applied to the root element if `size="large"` and `variant="text"`. */
    textSizeLarge: {
      padding: '8px 11px',
      fontSize: theme.typography.pxToRem(15)
    },

    /* Styles applied to the root element if `size="small"` and `variant="outlined"`. */
    outlinedSizeSmall: {
      padding: '3px 9px',
      fontSize: theme.typography.pxToRem(13)
    },

    /* Styles applied to the root element if `size="large"` and `variant="outlined"`. */
    outlinedSizeLarge: {
      padding: '7px 21px',
      fontSize: theme.typography.pxToRem(15)
    },

    /* Styles applied to the root element if `size="small"` and `variant="contained"`. */
    containedSizeSmall: {
      padding: '4px 10px',
      fontSize: theme.typography.pxToRem(13)
    },

    /* Styles applied to the root element if `size="large"` and `variant="contained"`. */
    containedSizeLarge: {
      padding: '8px 22px',
      fontSize: theme.typography.pxToRem(15)
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {},

    /* Styles applied to the root element if `size="large"`. */
    sizeLarge: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    },

    /* Styles applied to the startIcon element if supplied. */
    startIcon: {
      display: 'inherit',
      marginRight: 8,
      marginLeft: -4,
      '&$iconSizeSmall': {
        marginLeft: -2
      }
    },

    /* Styles applied to the endIcon element if supplied. */
    endIcon: {
      display: 'inherit',
      marginRight: -4,
      marginLeft: 8,
      '&$iconSizeSmall': {
        marginRight: -2
      }
    },

    /* Styles applied to the icon element if supplied and `size="small"`. */
    iconSizeSmall: {
      '& > *:first-child': {
        fontSize: 18
      }
    },

    /* Styles applied to the icon element if supplied and `size="medium"`. */
    iconSizeMedium: {
      '& > *:first-child': {
        fontSize: 20
      }
    },

    /* Styles applied to the icon element if supplied and `size="large"`. */
    iconSizeLarge: {
      '& > *:first-child': {
        fontSize: 22
      }
    }
  };
};
var Button = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Button(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$component = props.component,
      component = _props$component === void 0 ? 'button' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableElevati = props.disableElevation,
      disableElevation = _props$disableElevati === void 0 ? false : _props$disableElevati,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      endIconProp = props.endIcon,
      focusVisibleClassName = props.focusVisibleClassName,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      startIconProp = props.startIcon,
      _props$type = props.type,
      type = _props$type === void 0 ? 'button' : _props$type,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'text' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(props, ["children", "classes", "className", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"]);

  var startIcon = startIconProp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.startIcon, classes["iconSize".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(size))])
  }, startIconProp);
  var endIcon = endIconProp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.endIcon, classes["iconSize".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(size))])
  }, endIconProp);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_ButtonBase__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, classes[variant], className, color === 'inherit' ? classes.colorInherit : color !== 'default' && classes["".concat(variant).concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(color))], size !== 'medium' && [classes["".concat(variant, "Size").concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(size))], classes["size".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(size))]], disableElevation && classes.disableElevation, disabled && classes.disabled, fullWidth && classes.fullWidth),
    component: component,
    disabled: disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.focusVisible, focusVisibleClassName),
    ref: ref,
    type: type
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
    className: classes.label
  }, startIcon, children, endIcon));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(styles, {
  name: 'MuiButton'
})(Button));

/***/ }),

/***/ "ZhWT":
/***/ (function(module, exports) {

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */
var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView; // Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;
    var length, i, keys;

    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (!equal(a[i], b[i])) return false;
      }

      return true;
    } // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.


    var it;

    if (hasMap && a instanceof Map && b instanceof Map) {
      if (a.size !== b.size) return false;
      it = a.entries();

      while (!(i = it.next()).done) {
        if (!b.has(i.value[0])) return false;
      }

      it = a.entries();

      while (!(i = it.next()).done) {
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      }

      return true;
    }

    if (hasSet && a instanceof Set && b instanceof Set) {
      if (a.size !== b.size) return false;
      it = a.entries();

      while (!(i = it.next()).done) {
        if (!b.has(i.value[0])) return false;
      }

      return true;
    } // END: Modifications


    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;

      for (i = length; i-- !== 0;) {
        if (a[i] !== b[i]) return false;
      }

      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;) {
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    } // END: fast-deep-equal
    // START: react-fast-compare
    // custom handling for DOM elements


    if (hasElementType && a instanceof Element) return false; // custom handling for React/Preact

    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements
        continue;
      } // all other properties should be traversed as usual


      if (!equal(a[keys[i]], b[keys[i]])) return false;
    } // END: react-fast-compare
    // START: fast-deep-equal


    return true;
  }

  return a !== a && b !== b;
} // end fast-deep-equal


module.exports = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if ((error.message || '').match(/stack|recursion/i)) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    } // some other error. we should definitely know about these


    throw error;
  }
};

/***/ }),

/***/ "bfFb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useForkRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setRef__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("GIek");


function useForkRef(refA, refB) {
  /**
   * This will create a new function if the ref props change and are defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior
   */
  return react__WEBPACK_IMPORTED_MODULE_0__["useMemo"](function () {
    if (refA == null && refB == null) {
      return null;
    }

    return function (refValue) {
      Object(_setRef__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(refA, refValue);
      Object(_setRef__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(refB, refValue);
    };
  }, [refA, refB]);
}

/***/ }),

/***/ "bv9d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2+6g");


function merge(acc, item) {
  if (!item) {
    return acc;
  }

  return Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(acc, item, {
    clone: false // No need to clone deep, it's way faster.

  });
}

/* harmony default export */ __webpack_exports__["a"] = (merge);

/***/ }),

/***/ "cNwE":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _createMuiTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("viY9");

var defaultTheme = Object(_createMuiTheme__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])();
/* harmony default export */ __webpack_exports__["a"] = (defaultTheme);

/***/ }),

/***/ "dRu9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: UNMOUNTED, EXITED, ENTERING, ENTERED, EXITING

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__("zLVn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
var inheritsLoose = __webpack_require__("dI71");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("i8i4");
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/config.js
/* harmony default export */ var config = ({
  disabled: false
});
// EXTERNAL MODULE: ./node_modules/react-transition-group/esm/TransitionGroupContext.js
var TransitionGroupContext = __webpack_require__("0PSK");

// CONCATENATED MODULE: ./node_modules/react-transition-group/esm/Transition.js







var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition_Transition = /*#__PURE__*/function (_React$Component) {
  Object(inheritsLoose["a" /* default */])(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom_default.a.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom_default.a.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom_default.a.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = Object(objectWithoutPropertiesLoose["a" /* default */])(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react_default.a.createElement(TransitionGroupContext["a" /* default */].Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react_default.a.cloneElement(react_default.a.Children.only(children), childProps))
    );
  };

  return Transition;
}(react_default.a.Component);

Transition_Transition.contextType = TransitionGroupContext["a" /* default */];

// Name the function so it is clearer in the documentation
function noop() {}

Transition_Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition_Transition.UNMOUNTED = UNMOUNTED;
Transition_Transition.EXITED = EXITED;
Transition_Transition.ENTERING = ENTERING;
Transition_Transition.ENTERED = ENTERED;
Transition_Transition.EXITING = EXITING;
/* harmony default export */ var esm_Transition = __webpack_exports__["a"] = (Transition_Transition);

/***/ }),

/***/ "g+pH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ownerWindow; });
/* harmony import */ var _ownerDocument__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("gk1O");

function ownerWindow(node) {
  var doc = Object(_ownerDocument__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(node);
  return doc.defaultView || window;
}

/***/ }),

/***/ "gk1O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ownerDocument; });
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

/***/ }),

/***/ "hlFM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: styleFunction

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("KQm4");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("17x9");

// EXTERNAL MODULE: ./node_modules/@material-ui/system/esm/merge.js
var merge = __webpack_require__("bv9d");

// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/css.js





function omit(input, fields) {
  var output = {};
  Object.keys(input).forEach(function (prop) {
    if (fields.indexOf(prop) === -1) {
      output[prop] = input[prop];
    }
  });
  return output;
}

function css(styleFunction) {
  var newStyleFunction = function newStyleFunction(props) {
    var output = styleFunction(props);

    if (props.css) {
      return Object(esm_extends["a" /* default */])({}, Object(merge["a" /* default */])(output, styleFunction(Object(esm_extends["a" /* default */])({
        theme: props.theme
      }, props.css))), omit(props.css, [styleFunction.filterProps]));
    }

    return output;
  };

  newStyleFunction.propTypes =  false ? undefined : {};
  newStyleFunction.filterProps = ['css'].concat(Object(toConsumableArray["a" /* default */])(styleFunction.filterProps));
  return newStyleFunction;
}

/* harmony default export */ var esm_css = (css);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("E9XD");

// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/compose.js




function compose() {
  for (var _len = arguments.length, styles = new Array(_len), _key = 0; _key < _len; _key++) {
    styles[_key] = arguments[_key];
  }

  var fn = function fn(props) {
    return styles.reduce(function (acc, style) {
      var output = style(props);

      if (output) {
        return Object(merge["a" /* default */])(acc, output);
      }

      return acc;
    }, {});
  }; // Alternative approach that doesn't yield any performance gain.
  // const handlers = styles.reduce((acc, style) => {
  //   style.filterProps.forEach(prop => {
  //     acc[prop] = style;
  //   });
  //   return acc;
  // }, {});
  // const fn = props => {
  //   return Object.keys(props).reduce((acc, prop) => {
  //     if (handlers[prop]) {
  //       return merge(acc, handlers[prop](props));
  //     }
  //     return acc;
  //   }, {});
  // };


  fn.propTypes =  false ? undefined : {};
  fn.filterProps = styles.reduce(function (acc, style) {
    return acc.concat(style.filterProps);
  }, []);
  return fn;
}

/* harmony default export */ var esm_compose = (compose);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("rePB");

// EXTERNAL MODULE: ./node_modules/@material-ui/system/esm/breakpoints.js
var breakpoints = __webpack_require__("LybE");

// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/style.js





function getPath(obj, path) {
  if (!path || typeof path !== 'string') {
    return null;
  }

  return path.split('.').reduce(function (acc, item) {
    return acc && acc[item] ? acc[item] : null;
  }, obj);
}

function style_style(options) {
  var prop = options.prop,
      _options$cssProperty = options.cssProperty,
      cssProperty = _options$cssProperty === void 0 ? options.prop : _options$cssProperty,
      themeKey = options.themeKey,
      transform = options.transform;

  var fn = function fn(props) {
    if (props[prop] == null) {
      return null;
    }

    var propValue = props[prop];
    var theme = props.theme;
    var themeMapping = getPath(theme, themeKey) || {};

    var styleFromPropValue = function styleFromPropValue(propValueFinal) {
      var value;

      if (typeof themeMapping === 'function') {
        value = themeMapping(propValueFinal);
      } else if (Array.isArray(themeMapping)) {
        value = themeMapping[propValueFinal] || propValueFinal;
      } else {
        value = getPath(themeMapping, propValueFinal) || propValueFinal;

        if (transform) {
          value = transform(value);
        }
      }

      if (cssProperty === false) {
        return value;
      }

      return Object(defineProperty["a" /* default */])({}, cssProperty, value);
    };

    return Object(breakpoints["a" /* handleBreakpoints */])(props, propValue, styleFromPropValue);
  };

  fn.propTypes =  false ? undefined : {};
  fn.filterProps = [prop];
  return fn;
}

/* harmony default export */ var esm_style = (style_style);
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/borders.js



function getBorder(value) {
  if (typeof value !== 'number') {
    return value;
  }

  return "".concat(value, "px solid");
}

var border = esm_style({
  prop: 'border',
  themeKey: 'borders',
  transform: getBorder
});
var borderTop = esm_style({
  prop: 'borderTop',
  themeKey: 'borders',
  transform: getBorder
});
var borderRight = esm_style({
  prop: 'borderRight',
  themeKey: 'borders',
  transform: getBorder
});
var borderBottom = esm_style({
  prop: 'borderBottom',
  themeKey: 'borders',
  transform: getBorder
});
var borderLeft = esm_style({
  prop: 'borderLeft',
  themeKey: 'borders',
  transform: getBorder
});
var borderColor = esm_style({
  prop: 'borderColor',
  themeKey: 'palette'
});
var borderRadius = esm_style({
  prop: 'borderRadius',
  themeKey: 'shape'
});
var borders = esm_compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderRadius);
/* harmony default export */ var esm_borders = (borders);
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/display.js


var displayPrint = esm_style({
  prop: 'displayPrint',
  cssProperty: false,
  transform: function transform(value) {
    return {
      '@media print': {
        display: value
      }
    };
  }
});
var displayRaw = esm_style({
  prop: 'display'
});
var overflow = esm_style({
  prop: 'overflow'
});
var textOverflow = esm_style({
  prop: 'textOverflow'
});
var visibility = esm_style({
  prop: 'visibility'
});
var whiteSpace = esm_style({
  prop: 'whiteSpace'
});
/* harmony default export */ var display = (esm_compose(displayPrint, displayRaw, overflow, textOverflow, visibility, whiteSpace));
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/flexbox.js


var flexBasis = esm_style({
  prop: 'flexBasis'
});
var flexDirection = esm_style({
  prop: 'flexDirection'
});
var flexWrap = esm_style({
  prop: 'flexWrap'
});
var justifyContent = esm_style({
  prop: 'justifyContent'
});
var alignItems = esm_style({
  prop: 'alignItems'
});
var alignContent = esm_style({
  prop: 'alignContent'
});
var order = esm_style({
  prop: 'order'
});
var flex = esm_style({
  prop: 'flex'
});
var flexGrow = esm_style({
  prop: 'flexGrow'
});
var flexShrink = esm_style({
  prop: 'flexShrink'
});
var alignSelf = esm_style({
  prop: 'alignSelf'
});
var justifyItems = esm_style({
  prop: 'justifyItems'
});
var justifySelf = esm_style({
  prop: 'justifySelf'
});
var flexbox = esm_compose(flexBasis, flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, alignSelf, justifyItems, justifySelf);
/* harmony default export */ var esm_flexbox = (flexbox);
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/grid.js


var gridGap = esm_style({
  prop: 'gridGap'
});
var gridColumnGap = esm_style({
  prop: 'gridColumnGap'
});
var gridRowGap = esm_style({
  prop: 'gridRowGap'
});
var gridColumn = esm_style({
  prop: 'gridColumn'
});
var gridRow = esm_style({
  prop: 'gridRow'
});
var gridAutoFlow = esm_style({
  prop: 'gridAutoFlow'
});
var gridAutoColumns = esm_style({
  prop: 'gridAutoColumns'
});
var gridAutoRows = esm_style({
  prop: 'gridAutoRows'
});
var gridTemplateColumns = esm_style({
  prop: 'gridTemplateColumns'
});
var gridTemplateRows = esm_style({
  prop: 'gridTemplateRows'
});
var gridTemplateAreas = esm_style({
  prop: 'gridTemplateAreas'
});
var gridArea = esm_style({
  prop: 'gridArea'
});
var grid = esm_compose(gridGap, gridColumnGap, gridRowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
/* harmony default export */ var esm_grid = (grid);
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/positions.js


var position = esm_style({
  prop: 'position'
});
var zIndex = esm_style({
  prop: 'zIndex',
  themeKey: 'zIndex'
});
var positions_top = esm_style({
  prop: 'top'
});
var right = esm_style({
  prop: 'right'
});
var bottom = esm_style({
  prop: 'bottom'
});
var left = esm_style({
  prop: 'left'
});
/* harmony default export */ var positions = (esm_compose(position, zIndex, positions_top, right, bottom, left));
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/palette.js


var color = esm_style({
  prop: 'color',
  themeKey: 'palette'
});
var bgcolor = esm_style({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette'
});
var palette = esm_compose(color, bgcolor);
/* harmony default export */ var esm_palette = (palette);
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/shadows.js

var boxShadow = esm_style({
  prop: 'boxShadow',
  themeKey: 'shadows'
});
/* harmony default export */ var shadows = (boxShadow);
// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/sizing.js



function sizing_transform(value) {
  return value <= 1 ? "".concat(value * 100, "%") : value;
}

var width = esm_style({
  prop: 'width',
  transform: sizing_transform
});
var maxWidth = esm_style({
  prop: 'maxWidth',
  transform: sizing_transform
});
var minWidth = esm_style({
  prop: 'minWidth',
  transform: sizing_transform
});
var height = esm_style({
  prop: 'height',
  transform: sizing_transform
});
var maxHeight = esm_style({
  prop: 'maxHeight',
  transform: sizing_transform
});
var minHeight = esm_style({
  prop: 'minHeight',
  transform: sizing_transform
});
var sizeWidth = esm_style({
  prop: 'size',
  cssProperty: 'width',
  transform: sizing_transform
});
var sizeHeight = esm_style({
  prop: 'size',
  cssProperty: 'height',
  transform: sizing_transform
});
var boxSizing = esm_style({
  prop: 'boxSizing'
});
var sizing = esm_compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
/* harmony default export */ var esm_sizing = (sizing);
// EXTERNAL MODULE: ./node_modules/@material-ui/system/esm/spacing.js + 1 modules
var spacing = __webpack_require__("+Hmc");

// CONCATENATED MODULE: ./node_modules/@material-ui/system/esm/typography.js


var fontFamily = esm_style({
  prop: 'fontFamily',
  themeKey: 'typography'
});
var fontSize = esm_style({
  prop: 'fontSize',
  themeKey: 'typography'
});
var fontStyle = esm_style({
  prop: 'fontStyle',
  themeKey: 'typography'
});
var fontWeight = esm_style({
  prop: 'fontWeight',
  themeKey: 'typography'
});
var letterSpacing = esm_style({
  prop: 'letterSpacing'
});
var lineHeight = esm_style({
  prop: 'lineHeight'
});
var textAlign = esm_style({
  prop: 'textAlign'
});
var typography = esm_compose(fontFamily, fontSize, fontStyle, fontWeight, letterSpacing, lineHeight, textAlign);
/* harmony default export */ var esm_typography = (typography);
// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/styled/styled.js
var styled_styled = __webpack_require__("/P46");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/defaultTheme.js
var defaultTheme = __webpack_require__("cNwE");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/styles/styled.js




var styles_styled_styled = function styled(Component) {
  var componentCreator = Object(styled_styled["a" /* default */])(Component);
  return function (style, options) {
    return componentCreator(style, Object(esm_extends["a" /* default */])({
      defaultTheme: defaultTheme["a" /* default */]
    }, options));
  };
};

/* harmony default export */ var styles_styled = (styles_styled_styled);
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js


var Box_styleFunction = esm_css(esm_compose(esm_borders, display, esm_flexbox, esm_grid, positions, esm_palette, shadows, esm_sizing, spacing["b" /* default */], esm_typography));
/**
 * @ignore - do not document.
 */

var Box = styles_styled('div')(Box_styleFunction, {
  name: 'MuiBox'
});
/* harmony default export */ var Box_Box = __webpack_exports__["a"] = (Box);

/***/ }),

/***/ "kKAo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Ff2n");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wx14");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H2TA");






var styles = function styles(theme) {
  var elevations = {};
  theme.shadows.forEach(function (shadow, index) {
    elevations["elevation".concat(index)] = {
      boxShadow: shadow
    };
  });
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    /* Styles applied to the root element. */
    root: {
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      transition: theme.transitions.create('box-shadow')
    },

    /* Styles applied to the root element if `square={false}`. */
    rounded: {
      borderRadius: theme.shape.borderRadius
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      border: "1px solid ".concat(theme.palette.divider)
    }
  }, elevations);
};
var Paper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Paper(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$square = props.square,
      square = _props$square === void 0 ? false : _props$square,
      _props$elevation = props.elevation,
      elevation = _props$elevation === void 0 ? 1 : _props$elevation,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'elevation' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(props, ["classes", "className", "component", "square", "elevation", "variant"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className, variant === 'outlined' ? classes.outlined : classes["elevation".concat(elevation)], !square && classes.rounded),
    ref: ref
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(styles, {
  name: 'MuiPaper'
})(Paper));

/***/ }),

/***/ "kNCj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "capitalize", function() { return /* reexport */ capitalize["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "createChainedFunction", function() { return /* reexport */ createChainedFunction["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "createSvgIcon", function() { return /* reexport */ createSvgIcon["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "debounce", function() { return /* reexport */ debounce["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "deprecatedPropType", function() { return /* reexport */ deprecatedPropType; });
__webpack_require__.d(__webpack_exports__, "isMuiElement", function() { return /* reexport */ isMuiElement["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "ownerDocument", function() { return /* reexport */ ownerDocument["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "ownerWindow", function() { return /* reexport */ ownerWindow["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "requirePropFactory", function() { return /* reexport */ requirePropFactory["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "setRef", function() { return /* reexport */ setRef["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "unsupportedProp", function() { return /* reexport */ unsupportedProp["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "useControlled", function() { return /* reexport */ useControlled; });
__webpack_require__.d(__webpack_exports__, "useEventCallback", function() { return /* reexport */ useEventCallback["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "useForkRef", function() { return /* reexport */ useForkRef["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "unstable_useId", function() { return /* reexport */ useId; });
__webpack_require__.d(__webpack_exports__, "useIsFocusVisible", function() { return /* reexport */ useIsFocusVisible["a" /* default */]; });

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__("NqtD");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createChainedFunction.js
var createChainedFunction = __webpack_require__("x6Ns");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__("5AJ6");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/debounce.js
var debounce = __webpack_require__("l3Wi");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js
function deprecatedPropType(validator, reason) {
  if (true) {
    return function () {
      return null;
    };
  }

  return function (props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (typeof props[propName] !== 'undefined') {
      return new Error("The ".concat(location, " `").concat(propFullNameSafe, "` of ") + "`".concat(componentNameSafe, "` is deprecated. ").concat(reason));
    }

    return null;
  };
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/isMuiElement.js
var isMuiElement = __webpack_require__("ucBr");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/ownerDocument.js
var ownerDocument = __webpack_require__("gk1O");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/ownerWindow.js
var ownerWindow = __webpack_require__("g+pH");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/requirePropFactory.js
var requirePropFactory = __webpack_require__("ueBp");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/setRef.js
var setRef = __webpack_require__("GIek");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/unsupportedProp.js
var unsupportedProp = __webpack_require__("y6BH");

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/utils/useControlled.js
/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */

function useControlled(_ref) {
  var controlled = _ref.controlled,
      defaultProp = _ref.default,
      name = _ref.name,
      _ref$state = _ref.state,
      state = _ref$state === void 0 ? 'value' : _ref$state;

  var _React$useRef = react["useRef"](controlled !== undefined),
      isControlled = _React$useRef.current;

  var _React$useState = react["useState"](defaultProp),
      valueState = _React$useState[0],
      setValue = _React$useState[1];

  var value = isControlled ? controlled : valueState;

  if (false) { var _React$useRef2, defaultValue; }

  var setValueIfUncontrolled = react["useCallback"](function (newValue) {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useEventCallback.js
var useEventCallback = __webpack_require__("Ovef");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useForkRef.js
var useForkRef = __webpack_require__("bfFb");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/utils/unstable_useId.js

/**
 * Private module reserved for @material-ui/x packages.
 */

function useId(idOverride) {
  var _React$useState = react["useState"](idOverride),
      defaultId = _React$useState[0],
      setDefaultId = _React$useState[1];

  var id = idOverride || defaultId;
  react["useEffect"](function () {
    if (defaultId == null) {
      // Fallback to this default id when possible.
      // Use the random value for client-side rendering only.
      // We can't use it server-side.
      setDefaultId("mui-".concat(Math.round(Math.random() * 1e5)));
    }
  }, [defaultId]);
  return id;
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useIsFocusVisible.js
var useIsFocusVisible = __webpack_require__("G7As");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/utils/index.js













 // eslint-disable-next-line camelcase




/***/ }),

/***/ "l3Wi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return debounce; });
// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 166;
  var timeout;

  function debounced() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    } // eslint-disable-next-line consistent-this


    var that = this;

    var later = function later() {
      func.apply(that, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }

  debounced.clear = function () {
    clearTimeout(timeout);
  };

  return debounced;
}

/***/ }),

/***/ "ofer":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wx14");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ff2n");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iuhU");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("H2TA");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("NqtD");






var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      margin: 0
    },

    /* Styles applied to the root element if `variant="body2"`. */
    body2: theme.typography.body2,

    /* Styles applied to the root element if `variant="body1"`. */
    body1: theme.typography.body1,

    /* Styles applied to the root element if `variant="caption"`. */
    caption: theme.typography.caption,

    /* Styles applied to the root element if `variant="button"`. */
    button: theme.typography.button,

    /* Styles applied to the root element if `variant="h1"`. */
    h1: theme.typography.h1,

    /* Styles applied to the root element if `variant="h2"`. */
    h2: theme.typography.h2,

    /* Styles applied to the root element if `variant="h3"`. */
    h3: theme.typography.h3,

    /* Styles applied to the root element if `variant="h4"`. */
    h4: theme.typography.h4,

    /* Styles applied to the root element if `variant="h5"`. */
    h5: theme.typography.h5,

    /* Styles applied to the root element if `variant="h6"`. */
    h6: theme.typography.h6,

    /* Styles applied to the root element if `variant="subtitle1"`. */
    subtitle1: theme.typography.subtitle1,

    /* Styles applied to the root element if `variant="subtitle2"`. */
    subtitle2: theme.typography.subtitle2,

    /* Styles applied to the root element if `variant="overline"`. */
    overline: theme.typography.overline,

    /* Styles applied to the root element if `variant="srOnly"`. Only accessible to screen readers. */
    srOnly: {
      position: 'absolute',
      height: 1,
      width: 1,
      overflow: 'hidden'
    },

    /* Styles applied to the root element if `align="left"`. */
    alignLeft: {
      textAlign: 'left'
    },

    /* Styles applied to the root element if `align="center"`. */
    alignCenter: {
      textAlign: 'center'
    },

    /* Styles applied to the root element if `align="right"`. */
    alignRight: {
      textAlign: 'right'
    },

    /* Styles applied to the root element if `align="justify"`. */
    alignJustify: {
      textAlign: 'justify'
    },

    /* Styles applied to the root element if `nowrap={true}`. */
    noWrap: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },

    /* Styles applied to the root element if `gutterBottom={true}`. */
    gutterBottom: {
      marginBottom: '0.35em'
    },

    /* Styles applied to the root element if `paragraph={true}`. */
    paragraph: {
      marginBottom: 16
    },

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },

    /* Styles applied to the root element if `color="textPrimary"`. */
    colorTextPrimary: {
      color: theme.palette.text.primary
    },

    /* Styles applied to the root element if `color="textSecondary"`. */
    colorTextSecondary: {
      color: theme.palette.text.secondary
    },

    /* Styles applied to the root element if `color="error"`. */
    colorError: {
      color: theme.palette.error.main
    },

    /* Styles applied to the root element if `display="inline"`. */
    displayInline: {
      display: 'inline'
    },

    /* Styles applied to the root element if `display="block"`. */
    displayBlock: {
      display: 'block'
    }
  };
};
var defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p'
};
var Typography = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Typography(props, ref) {
  var _props$align = props.align,
      align = _props$align === void 0 ? 'inherit' : _props$align,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'initial' : _props$color,
      component = props.component,
      _props$display = props.display,
      display = _props$display === void 0 ? 'initial' : _props$display,
      _props$gutterBottom = props.gutterBottom,
      gutterBottom = _props$gutterBottom === void 0 ? false : _props$gutterBottom,
      _props$noWrap = props.noWrap,
      noWrap = _props$noWrap === void 0 ? false : _props$noWrap,
      _props$paragraph = props.paragraph,
      paragraph = _props$paragraph === void 0 ? false : _props$paragraph,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'body1' : _props$variant,
      _props$variantMapping = props.variantMapping,
      variantMapping = _props$variantMapping === void 0 ? defaultVariantMapping : _props$variantMapping,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(props, ["align", "classes", "className", "color", "component", "display", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"]);

  var Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(classes.root, className, variant !== 'inherit' && classes[variant], color !== 'initial' && classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(color))], noWrap && classes.noWrap, gutterBottom && classes.gutterBottom, paragraph && classes.paragraph, align !== 'inherit' && classes["align".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(align))], display !== 'initial' && classes["display".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(display))]),
    ref: ref
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ __webpack_exports__["a"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(styles, {
  name: 'MuiTypography'
})(Typography));

/***/ }),

/***/ "qhky":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelmetExport; });
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("E9XD");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_side_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8+s/");
/* harmony import */ var react_side_effect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_side_effect__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ZhWT");
/* harmony import */ var react_fast_compare__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_fast_compare__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("YVoz");
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_5__);






var ATTRIBUTE_NAMES = {
  BODY: "bodyAttributes",
  HTML: "htmlAttributes",
  TITLE: "titleAttributes"
};
var TAG_NAMES = {
  BASE: "base",
  BODY: "body",
  HEAD: "head",
  HTML: "html",
  LINK: "link",
  META: "meta",
  NOSCRIPT: "noscript",
  SCRIPT: "script",
  STYLE: "style",
  TITLE: "title"
};
var VALID_TAG_NAMES = Object.keys(TAG_NAMES).map(function (name) {
  return TAG_NAMES[name];
});
var TAG_PROPERTIES = {
  CHARSET: "charset",
  CSS_TEXT: "cssText",
  HREF: "href",
  HTTPEQUIV: "http-equiv",
  INNER_HTML: "innerHTML",
  ITEM_PROP: "itemprop",
  NAME: "name",
  PROPERTY: "property",
  REL: "rel",
  SRC: "src",
  TARGET: "target"
};
var REACT_TAG_MAP = {
  accesskey: "accessKey",
  charset: "charSet",
  class: "className",
  contenteditable: "contentEditable",
  contextmenu: "contextMenu",
  "http-equiv": "httpEquiv",
  itemprop: "itemProp",
  tabindex: "tabIndex"
};
var HELMET_PROPS = {
  DEFAULT_TITLE: "defaultTitle",
  DEFER: "defer",
  ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
  ON_CHANGE_CLIENT_STATE: "onChangeClientState",
  TITLE_TEMPLATE: "titleTemplate"
};
var HTML_TAG_MAP = Object.keys(REACT_TAG_MAP).reduce(function (obj, key) {
  obj[REACT_TAG_MAP[key]] = key;
  return obj;
}, {});
var SELF_CLOSING_TAGS = [TAG_NAMES.NOSCRIPT, TAG_NAMES.SCRIPT, TAG_NAMES.STYLE];
var HELMET_ATTRIBUTE = "data-react-helmet";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var encodeSpecialCharacters = function encodeSpecialCharacters(str) {
  var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (encode === false) {
    return String(str);
  }

  return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
};

var getTitleFromPropsList = function getTitleFromPropsList(propsList) {
  var innermostTitle = getInnermostProperty(propsList, TAG_NAMES.TITLE);
  var innermostTemplate = getInnermostProperty(propsList, HELMET_PROPS.TITLE_TEMPLATE);

  if (innermostTemplate && innermostTitle) {
    // use function arg to avoid need to escape $ characters
    return innermostTemplate.replace(/%s/g, function () {
      return Array.isArray(innermostTitle) ? innermostTitle.join("") : innermostTitle;
    });
  }

  var innermostDefaultTitle = getInnermostProperty(propsList, HELMET_PROPS.DEFAULT_TITLE);
  return innermostTitle || innermostDefaultTitle || undefined;
};

var getOnChangeClientState = function getOnChangeClientState(propsList) {
  return getInnermostProperty(propsList, HELMET_PROPS.ON_CHANGE_CLIENT_STATE) || function () {};
};

var getAttributesFromPropsList = function getAttributesFromPropsList(tagType, propsList) {
  return propsList.filter(function (props) {
    return typeof props[tagType] !== "undefined";
  }).map(function (props) {
    return props[tagType];
  }).reduce(function (tagAttrs, current) {
    return _extends({}, tagAttrs, current);
  }, {});
};

var getBaseTagFromPropsList = function getBaseTagFromPropsList(primaryAttributes, propsList) {
  return propsList.filter(function (props) {
    return typeof props[TAG_NAMES.BASE] !== "undefined";
  }).map(function (props) {
    return props[TAG_NAMES.BASE];
  }).reverse().reduce(function (innermostBaseTag, tag) {
    if (!innermostBaseTag.length) {
      var keys = Object.keys(tag);

      for (var i = 0; i < keys.length; i++) {
        var attributeKey = keys[i];
        var lowerCaseAttributeKey = attributeKey.toLowerCase();

        if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && tag[lowerCaseAttributeKey]) {
          return innermostBaseTag.concat(tag);
        }
      }
    }

    return innermostBaseTag;
  }, []);
};

var getTagsFromPropsList = function getTagsFromPropsList(tagName, primaryAttributes, propsList) {
  // Calculate list of tags, giving priority innermost component (end of the propslist)
  var approvedSeenTags = {};
  return propsList.filter(function (props) {
    if (Array.isArray(props[tagName])) {
      return true;
    }

    if (typeof props[tagName] !== "undefined") {
      warn("Helmet: " + tagName + " should be of type \"Array\". Instead found type \"" + _typeof(props[tagName]) + "\"");
    }

    return false;
  }).map(function (props) {
    return props[tagName];
  }).reverse().reduce(function (approvedTags, instanceTags) {
    var instanceSeenTags = {};
    instanceTags.filter(function (tag) {
      var primaryAttributeKey = void 0;
      var keys = Object.keys(tag);

      for (var i = 0; i < keys.length; i++) {
        var attributeKey = keys[i];
        var lowerCaseAttributeKey = attributeKey.toLowerCase(); // Special rule with link tags, since rel and href are both primary tags, rel takes priority

        if (primaryAttributes.indexOf(lowerCaseAttributeKey) !== -1 && !(primaryAttributeKey === TAG_PROPERTIES.REL && tag[primaryAttributeKey].toLowerCase() === "canonical") && !(lowerCaseAttributeKey === TAG_PROPERTIES.REL && tag[lowerCaseAttributeKey].toLowerCase() === "stylesheet")) {
          primaryAttributeKey = lowerCaseAttributeKey;
        } // Special case for innerHTML which doesn't work lowercased


        if (primaryAttributes.indexOf(attributeKey) !== -1 && (attributeKey === TAG_PROPERTIES.INNER_HTML || attributeKey === TAG_PROPERTIES.CSS_TEXT || attributeKey === TAG_PROPERTIES.ITEM_PROP)) {
          primaryAttributeKey = attributeKey;
        }
      }

      if (!primaryAttributeKey || !tag[primaryAttributeKey]) {
        return false;
      }

      var value = tag[primaryAttributeKey].toLowerCase();

      if (!approvedSeenTags[primaryAttributeKey]) {
        approvedSeenTags[primaryAttributeKey] = {};
      }

      if (!instanceSeenTags[primaryAttributeKey]) {
        instanceSeenTags[primaryAttributeKey] = {};
      }

      if (!approvedSeenTags[primaryAttributeKey][value]) {
        instanceSeenTags[primaryAttributeKey][value] = true;
        return true;
      }

      return false;
    }).reverse().forEach(function (tag) {
      return approvedTags.push(tag);
    }); // Update seen tags with tags from this instance

    var keys = Object.keys(instanceSeenTags);

    for (var i = 0; i < keys.length; i++) {
      var attributeKey = keys[i];
      var tagUnion = object_assign__WEBPACK_IMPORTED_MODULE_5___default()({}, approvedSeenTags[attributeKey], instanceSeenTags[attributeKey]);
      approvedSeenTags[attributeKey] = tagUnion;
    }

    return approvedTags;
  }, []).reverse();
};

var getInnermostProperty = function getInnermostProperty(propsList, property) {
  for (var i = propsList.length - 1; i >= 0; i--) {
    var props = propsList[i];

    if (props.hasOwnProperty(property)) {
      return props[property];
    }
  }

  return null;
};

var reducePropsToState = function reducePropsToState(propsList) {
  return {
    baseTag: getBaseTagFromPropsList([TAG_PROPERTIES.HREF, TAG_PROPERTIES.TARGET], propsList),
    bodyAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.BODY, propsList),
    defer: getInnermostProperty(propsList, HELMET_PROPS.DEFER),
    encode: getInnermostProperty(propsList, HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),
    htmlAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.HTML, propsList),
    linkTags: getTagsFromPropsList(TAG_NAMES.LINK, [TAG_PROPERTIES.REL, TAG_PROPERTIES.HREF], propsList),
    metaTags: getTagsFromPropsList(TAG_NAMES.META, [TAG_PROPERTIES.NAME, TAG_PROPERTIES.CHARSET, TAG_PROPERTIES.HTTPEQUIV, TAG_PROPERTIES.PROPERTY, TAG_PROPERTIES.ITEM_PROP], propsList),
    noscriptTags: getTagsFromPropsList(TAG_NAMES.NOSCRIPT, [TAG_PROPERTIES.INNER_HTML], propsList),
    onChangeClientState: getOnChangeClientState(propsList),
    scriptTags: getTagsFromPropsList(TAG_NAMES.SCRIPT, [TAG_PROPERTIES.SRC, TAG_PROPERTIES.INNER_HTML], propsList),
    styleTags: getTagsFromPropsList(TAG_NAMES.STYLE, [TAG_PROPERTIES.CSS_TEXT], propsList),
    title: getTitleFromPropsList(propsList),
    titleAttributes: getAttributesFromPropsList(ATTRIBUTE_NAMES.TITLE, propsList)
  };
};

var rafPolyfill = function () {
  var clock = Date.now();
  return function (callback) {
    var currentTime = Date.now();

    if (currentTime - clock > 16) {
      clock = currentTime;
      callback(currentTime);
    } else {
      setTimeout(function () {
        rafPolyfill(callback);
      }, 0);
    }
  };
}();

var cafPolyfill = function cafPolyfill(id) {
  return clearTimeout(id);
};

var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || rafPolyfill : global.requestAnimationFrame || rafPolyfill;
var cancelAnimationFrame = typeof window !== "undefined" ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || cafPolyfill : global.cancelAnimationFrame || cafPolyfill;

var warn = function warn(msg) {
  return console && typeof console.warn === "function" && console.warn(msg);
};

var _helmetCallback = null;

var handleClientStateChange = function handleClientStateChange(newState) {
  if (_helmetCallback) {
    cancelAnimationFrame(_helmetCallback);
  }

  if (newState.defer) {
    _helmetCallback = requestAnimationFrame(function () {
      commitTagChanges(newState, function () {
        _helmetCallback = null;
      });
    });
  } else {
    commitTagChanges(newState);
    _helmetCallback = null;
  }
};

var commitTagChanges = function commitTagChanges(newState, cb) {
  var baseTag = newState.baseTag,
      bodyAttributes = newState.bodyAttributes,
      htmlAttributes = newState.htmlAttributes,
      linkTags = newState.linkTags,
      metaTags = newState.metaTags,
      noscriptTags = newState.noscriptTags,
      onChangeClientState = newState.onChangeClientState,
      scriptTags = newState.scriptTags,
      styleTags = newState.styleTags,
      title = newState.title,
      titleAttributes = newState.titleAttributes;
  updateAttributes(TAG_NAMES.BODY, bodyAttributes);
  updateAttributes(TAG_NAMES.HTML, htmlAttributes);
  updateTitle(title, titleAttributes);
  var tagUpdates = {
    baseTag: updateTags(TAG_NAMES.BASE, baseTag),
    linkTags: updateTags(TAG_NAMES.LINK, linkTags),
    metaTags: updateTags(TAG_NAMES.META, metaTags),
    noscriptTags: updateTags(TAG_NAMES.NOSCRIPT, noscriptTags),
    scriptTags: updateTags(TAG_NAMES.SCRIPT, scriptTags),
    styleTags: updateTags(TAG_NAMES.STYLE, styleTags)
  };
  var addedTags = {};
  var removedTags = {};
  Object.keys(tagUpdates).forEach(function (tagType) {
    var _tagUpdates$tagType = tagUpdates[tagType],
        newTags = _tagUpdates$tagType.newTags,
        oldTags = _tagUpdates$tagType.oldTags;

    if (newTags.length) {
      addedTags[tagType] = newTags;
    }

    if (oldTags.length) {
      removedTags[tagType] = tagUpdates[tagType].oldTags;
    }
  });
  cb && cb();
  onChangeClientState(newState, addedTags, removedTags);
};

var flattenArray = function flattenArray(possibleArray) {
  return Array.isArray(possibleArray) ? possibleArray.join("") : possibleArray;
};

var updateTitle = function updateTitle(title, attributes) {
  if (typeof title !== "undefined" && document.title !== title) {
    document.title = flattenArray(title);
  }

  updateAttributes(TAG_NAMES.TITLE, attributes);
};

var updateAttributes = function updateAttributes(tagName, attributes) {
  var elementTag = document.getElementsByTagName(tagName)[0];

  if (!elementTag) {
    return;
  }

  var helmetAttributeString = elementTag.getAttribute(HELMET_ATTRIBUTE);
  var helmetAttributes = helmetAttributeString ? helmetAttributeString.split(",") : [];
  var attributesToRemove = [].concat(helmetAttributes);
  var attributeKeys = Object.keys(attributes);

  for (var i = 0; i < attributeKeys.length; i++) {
    var attribute = attributeKeys[i];
    var value = attributes[attribute] || "";

    if (elementTag.getAttribute(attribute) !== value) {
      elementTag.setAttribute(attribute, value);
    }

    if (helmetAttributes.indexOf(attribute) === -1) {
      helmetAttributes.push(attribute);
    }

    var indexToSave = attributesToRemove.indexOf(attribute);

    if (indexToSave !== -1) {
      attributesToRemove.splice(indexToSave, 1);
    }
  }

  for (var _i = attributesToRemove.length - 1; _i >= 0; _i--) {
    elementTag.removeAttribute(attributesToRemove[_i]);
  }

  if (helmetAttributes.length === attributesToRemove.length) {
    elementTag.removeAttribute(HELMET_ATTRIBUTE);
  } else if (elementTag.getAttribute(HELMET_ATTRIBUTE) !== attributeKeys.join(",")) {
    elementTag.setAttribute(HELMET_ATTRIBUTE, attributeKeys.join(","));
  }
};

var updateTags = function updateTags(type, tags) {
  var headElement = document.head || document.querySelector(TAG_NAMES.HEAD);
  var tagNodes = headElement.querySelectorAll(type + "[" + HELMET_ATTRIBUTE + "]");
  var oldTags = Array.prototype.slice.call(tagNodes);
  var newTags = [];
  var indexToDelete = void 0;

  if (tags && tags.length) {
    tags.forEach(function (tag) {
      var newElement = document.createElement(type);

      for (var attribute in tag) {
        if (tag.hasOwnProperty(attribute)) {
          if (attribute === TAG_PROPERTIES.INNER_HTML) {
            newElement.innerHTML = tag.innerHTML;
          } else if (attribute === TAG_PROPERTIES.CSS_TEXT) {
            if (newElement.styleSheet) {
              newElement.styleSheet.cssText = tag.cssText;
            } else {
              newElement.appendChild(document.createTextNode(tag.cssText));
            }
          } else {
            var value = typeof tag[attribute] === "undefined" ? "" : tag[attribute];
            newElement.setAttribute(attribute, value);
          }
        }
      }

      newElement.setAttribute(HELMET_ATTRIBUTE, "true"); // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.

      if (oldTags.some(function (existingTag, index) {
        indexToDelete = index;
        return newElement.isEqualNode(existingTag);
      })) {
        oldTags.splice(indexToDelete, 1);
      } else {
        newTags.push(newElement);
      }
    });
  }

  oldTags.forEach(function (tag) {
    return tag.parentNode.removeChild(tag);
  });
  newTags.forEach(function (tag) {
    return headElement.appendChild(tag);
  });
  return {
    oldTags: oldTags,
    newTags: newTags
  };
};

var generateElementAttributesAsString = function generateElementAttributesAsString(attributes) {
  return Object.keys(attributes).reduce(function (str, key) {
    var attr = typeof attributes[key] !== "undefined" ? key + "=\"" + attributes[key] + "\"" : "" + key;
    return str ? str + " " + attr : attr;
  }, "");
};

var generateTitleAsString = function generateTitleAsString(type, title, attributes, encode) {
  var attributeString = generateElementAttributesAsString(attributes);
  var flattenedTitle = flattenArray(title);
  return attributeString ? "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\" " + attributeString + ">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">" : "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\">" + encodeSpecialCharacters(flattenedTitle, encode) + "</" + type + ">";
};

var generateTagsAsString = function generateTagsAsString(type, tags, encode) {
  return tags.reduce(function (str, tag) {
    var attributeHtml = Object.keys(tag).filter(function (attribute) {
      return !(attribute === TAG_PROPERTIES.INNER_HTML || attribute === TAG_PROPERTIES.CSS_TEXT);
    }).reduce(function (string, attribute) {
      var attr = typeof tag[attribute] === "undefined" ? attribute : attribute + "=\"" + encodeSpecialCharacters(tag[attribute], encode) + "\"";
      return string ? string + " " + attr : attr;
    }, "");
    var tagContent = tag.innerHTML || tag.cssText || "";
    var isSelfClosing = SELF_CLOSING_TAGS.indexOf(type) === -1;
    return str + "<" + type + " " + HELMET_ATTRIBUTE + "=\"true\" " + attributeHtml + (isSelfClosing ? "/>" : ">" + tagContent + "</" + type + ">");
  }, "");
};

var convertElementAttributestoReactProps = function convertElementAttributestoReactProps(attributes) {
  var initProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.keys(attributes).reduce(function (obj, key) {
    obj[REACT_TAG_MAP[key] || key] = attributes[key];
    return obj;
  }, initProps);
};

var convertReactPropstoHtmlAttributes = function convertReactPropstoHtmlAttributes(props) {
  var initAttributes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.keys(props).reduce(function (obj, key) {
    obj[HTML_TAG_MAP[key] || key] = props[key];
    return obj;
  }, initAttributes);
};

var generateTitleAsReactComponent = function generateTitleAsReactComponent(type, title, attributes) {
  var _initProps; // assigning into an array to define toString function on it


  var initProps = (_initProps = {
    key: title
  }, _initProps[HELMET_ATTRIBUTE] = true, _initProps);
  var props = convertElementAttributestoReactProps(attributes, initProps);
  return [react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(TAG_NAMES.TITLE, props, title)];
};

var generateTagsAsReactComponent = function generateTagsAsReactComponent(type, tags) {
  return tags.map(function (tag, i) {
    var _mappedTag;

    var mappedTag = (_mappedTag = {
      key: i
    }, _mappedTag[HELMET_ATTRIBUTE] = true, _mappedTag);
    Object.keys(tag).forEach(function (attribute) {
      var mappedAttribute = REACT_TAG_MAP[attribute] || attribute;

      if (mappedAttribute === TAG_PROPERTIES.INNER_HTML || mappedAttribute === TAG_PROPERTIES.CSS_TEXT) {
        var content = tag.innerHTML || tag.cssText;
        mappedTag.dangerouslySetInnerHTML = {
          __html: content
        };
      } else {
        mappedTag[mappedAttribute] = tag[attribute];
      }
    });
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(type, mappedTag);
  });
};

var getMethodsForTag = function getMethodsForTag(type, tags, encode) {
  switch (type) {
    case TAG_NAMES.TITLE:
      return {
        toComponent: function toComponent() {
          return generateTitleAsReactComponent(type, tags.title, tags.titleAttributes, encode);
        },
        toString: function toString() {
          return generateTitleAsString(type, tags.title, tags.titleAttributes, encode);
        }
      };

    case ATTRIBUTE_NAMES.BODY:
    case ATTRIBUTE_NAMES.HTML:
      return {
        toComponent: function toComponent() {
          return convertElementAttributestoReactProps(tags);
        },
        toString: function toString() {
          return generateElementAttributesAsString(tags);
        }
      };

    default:
      return {
        toComponent: function toComponent() {
          return generateTagsAsReactComponent(type, tags);
        },
        toString: function toString() {
          return generateTagsAsString(type, tags, encode);
        }
      };
  }
};

var mapStateOnServer = function mapStateOnServer(_ref) {
  var baseTag = _ref.baseTag,
      bodyAttributes = _ref.bodyAttributes,
      encode = _ref.encode,
      htmlAttributes = _ref.htmlAttributes,
      linkTags = _ref.linkTags,
      metaTags = _ref.metaTags,
      noscriptTags = _ref.noscriptTags,
      scriptTags = _ref.scriptTags,
      styleTags = _ref.styleTags,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? "" : _ref$title,
      titleAttributes = _ref.titleAttributes;
  return {
    base: getMethodsForTag(TAG_NAMES.BASE, baseTag, encode),
    bodyAttributes: getMethodsForTag(ATTRIBUTE_NAMES.BODY, bodyAttributes, encode),
    htmlAttributes: getMethodsForTag(ATTRIBUTE_NAMES.HTML, htmlAttributes, encode),
    link: getMethodsForTag(TAG_NAMES.LINK, linkTags, encode),
    meta: getMethodsForTag(TAG_NAMES.META, metaTags, encode),
    noscript: getMethodsForTag(TAG_NAMES.NOSCRIPT, noscriptTags, encode),
    script: getMethodsForTag(TAG_NAMES.SCRIPT, scriptTags, encode),
    style: getMethodsForTag(TAG_NAMES.STYLE, styleTags, encode),
    title: getMethodsForTag(TAG_NAMES.TITLE, {
      title: title,
      titleAttributes: titleAttributes
    }, encode)
  };
};

var Helmet = function Helmet(Component) {
  var _class, _temp;

  return _temp = _class = function (_React$Component) {
    inherits(HelmetWrapper, _React$Component);

    function HelmetWrapper() {
      classCallCheck(this, HelmetWrapper);
      return possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    HelmetWrapper.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
      return !react_fast_compare__WEBPACK_IMPORTED_MODULE_3___default()(this.props, nextProps);
    };

    HelmetWrapper.prototype.mapNestedChildrenToProps = function mapNestedChildrenToProps(child, nestedChildren) {
      if (!nestedChildren) {
        return null;
      }

      switch (child.type) {
        case TAG_NAMES.SCRIPT:
        case TAG_NAMES.NOSCRIPT:
          return {
            innerHTML: nestedChildren
          };

        case TAG_NAMES.STYLE:
          return {
            cssText: nestedChildren
          };
      }

      throw new Error("<" + child.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
    };

    HelmetWrapper.prototype.flattenArrayTypeChildren = function flattenArrayTypeChildren(_ref) {
      var _babelHelpers$extends;

      var child = _ref.child,
          arrayTypeChildren = _ref.arrayTypeChildren,
          newChildProps = _ref.newChildProps,
          nestedChildren = _ref.nestedChildren;
      return _extends({}, arrayTypeChildren, (_babelHelpers$extends = {}, _babelHelpers$extends[child.type] = [].concat(arrayTypeChildren[child.type] || [], [_extends({}, newChildProps, this.mapNestedChildrenToProps(child, nestedChildren))]), _babelHelpers$extends));
    };

    HelmetWrapper.prototype.mapObjectTypeChildren = function mapObjectTypeChildren(_ref2) {
      var _babelHelpers$extends2, _babelHelpers$extends3;

      var child = _ref2.child,
          newProps = _ref2.newProps,
          newChildProps = _ref2.newChildProps,
          nestedChildren = _ref2.nestedChildren;

      switch (child.type) {
        case TAG_NAMES.TITLE:
          return _extends({}, newProps, (_babelHelpers$extends2 = {}, _babelHelpers$extends2[child.type] = nestedChildren, _babelHelpers$extends2.titleAttributes = _extends({}, newChildProps), _babelHelpers$extends2));

        case TAG_NAMES.BODY:
          return _extends({}, newProps, {
            bodyAttributes: _extends({}, newChildProps)
          });

        case TAG_NAMES.HTML:
          return _extends({}, newProps, {
            htmlAttributes: _extends({}, newChildProps)
          });
      }

      return _extends({}, newProps, (_babelHelpers$extends3 = {}, _babelHelpers$extends3[child.type] = _extends({}, newChildProps), _babelHelpers$extends3));
    };

    HelmetWrapper.prototype.mapArrayTypeChildrenToProps = function mapArrayTypeChildrenToProps(arrayTypeChildren, newProps) {
      var newFlattenedProps = _extends({}, newProps);

      Object.keys(arrayTypeChildren).forEach(function (arrayChildName) {
        var _babelHelpers$extends4;

        newFlattenedProps = _extends({}, newFlattenedProps, (_babelHelpers$extends4 = {}, _babelHelpers$extends4[arrayChildName] = arrayTypeChildren[arrayChildName], _babelHelpers$extends4));
      });
      return newFlattenedProps;
    };

    HelmetWrapper.prototype.warnOnInvalidChildren = function warnOnInvalidChildren(child, nestedChildren) {
      if (false) {}

      return true;
    };

    HelmetWrapper.prototype.mapChildrenToProps = function mapChildrenToProps(children, newProps) {
      var _this2 = this;

      var arrayTypeChildren = {};
      react__WEBPACK_IMPORTED_MODULE_4___default.a.Children.forEach(children, function (child) {
        if (!child || !child.props) {
          return;
        }

        var _child$props = child.props,
            nestedChildren = _child$props.children,
            childProps = objectWithoutProperties(_child$props, ["children"]);
        var newChildProps = convertReactPropstoHtmlAttributes(childProps);

        _this2.warnOnInvalidChildren(child, nestedChildren);

        switch (child.type) {
          case TAG_NAMES.LINK:
          case TAG_NAMES.META:
          case TAG_NAMES.NOSCRIPT:
          case TAG_NAMES.SCRIPT:
          case TAG_NAMES.STYLE:
            arrayTypeChildren = _this2.flattenArrayTypeChildren({
              child: child,
              arrayTypeChildren: arrayTypeChildren,
              newChildProps: newChildProps,
              nestedChildren: nestedChildren
            });
            break;

          default:
            newProps = _this2.mapObjectTypeChildren({
              child: child,
              newProps: newProps,
              newChildProps: newChildProps,
              nestedChildren: nestedChildren
            });
            break;
        }
      });
      newProps = this.mapArrayTypeChildrenToProps(arrayTypeChildren, newProps);
      return newProps;
    };

    HelmetWrapper.prototype.render = function render() {
      var _props = this.props,
          children = _props.children,
          props = objectWithoutProperties(_props, ["children"]);

      var newProps = _extends({}, props);

      if (children) {
        newProps = this.mapChildrenToProps(children, newProps);
      }

      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, newProps);
    };

    createClass(HelmetWrapper, null, [{
      key: "canUseDOM",
      // Component.peek comes from react-side-effect:
      // For testing, you may use a static peek() method available on the returned component.
      // It lets you get the current state without resetting the mounted instance stack.
      // Don’t use it for anything other than testing.

      /**
       * @param {Object} base: {"target": "_blank", "href": "http://mysite.com/"}
       * @param {Object} bodyAttributes: {"className": "root"}
       * @param {String} defaultTitle: "Default Title"
       * @param {Boolean} defer: true
       * @param {Boolean} encodeSpecialCharacters: true
       * @param {Object} htmlAttributes: {"lang": "en", "amp": undefined}
       * @param {Array} link: [{"rel": "canonical", "href": "http://mysite.com/example"}]
       * @param {Array} meta: [{"name": "description", "content": "Test description"}]
       * @param {Array} noscript: [{"innerHTML": "<img src='http://mysite.com/js/test.js'"}]
       * @param {Function} onChangeClientState: "(newState) => console.log(newState)"
       * @param {Array} script: [{"type": "text/javascript", "src": "http://mysite.com/js/test.js"}]
       * @param {Array} style: [{"type": "text/css", "cssText": "div { display: block; color: blue; }"}]
       * @param {String} title: "Title"
       * @param {Object} titleAttributes: {"itemprop": "name"}
       * @param {String} titleTemplate: "MySite.com - %s"
       */
      set: function set$$1(canUseDOM) {
        Component.canUseDOM = canUseDOM;
      }
    }]);
    return HelmetWrapper;
  }(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component), _class.propTypes = {
    base: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    bodyAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node]),
    defaultTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    defer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    encodeSpecialCharacters: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    htmlAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    link: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
    meta: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
    noscript: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
    onChangeClientState: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    script: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
    style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object),
    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    titleAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    titleTemplate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }, _class.defaultProps = {
    defer: true,
    encodeSpecialCharacters: true
  }, _class.peek = Component.peek, _class.rewind = function () {
    var mappedState = Component.rewind();

    if (!mappedState) {
      // provide fallback if mappedState is undefined
      mappedState = mapStateOnServer({
        baseTag: [],
        bodyAttributes: {},
        encodeSpecialCharacters: true,
        htmlAttributes: {},
        linkTags: [],
        metaTags: [],
        noscriptTags: [],
        scriptTags: [],
        styleTags: [],
        title: "",
        titleAttributes: {}
      });
    }

    return mappedState;
  }, _temp;
};

var NullComponent = function NullComponent() {
  return null;
};

var HelmetSideEffects = react_side_effect__WEBPACK_IMPORTED_MODULE_2___default()(reducePropsToState, handleClientStateChange, mapStateOnServer)(NullComponent);
var HelmetExport = Helmet(HelmetSideEffects);
HelmetExport.renderStatic = HelmetExport.rewind;
/* unused harmony default export */ var _unused_webpack_default_export = (HelmetExport);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("yLpj")))

/***/ }),

/***/ "rePB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
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

/***/ }),

/***/ "tr08":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return useTheme; });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("aXM8");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cNwE");



function useTheme() {
  var theme = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])() || _defaultTheme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"];

  if (false) {}

  return theme;
}

/***/ }),

/***/ "ucBr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isMuiElement; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function isMuiElement(element, muiNames) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"](element) && muiNames.indexOf(element.type.muiName) !== -1;
}

/***/ }),

/***/ "ueBp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return requirePropFactory; });
function requirePropFactory(componentNameInError) {
  if (true) {
    return function () {
      return null;
    };
  }

  var requireProp = function requireProp(requiredProp) {
    return function (props, propName, componentName, location, propFullName) {
      var propFullNameSafe = propFullName || propName;

      if (typeof props[propName] !== 'undefined' && !props[requiredProp]) {
        return new Error("The prop `".concat(propFullNameSafe, "` of ") + "`".concat(componentNameInError, "` must be used on `").concat(requiredProp, "`."));
      }

      return null;
    };
  };

  return requireProp;
}

/***/ }),

/***/ "viY9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("E9XD");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("rePB");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("Ff2n");

// EXTERNAL MODULE: ./node_modules/@material-ui/utils/esm/deepmerge.js
var deepmerge = __webpack_require__("2+6g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/styles/createBreakpoints.js

 // Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.

var keys = ['xs', 'sm', 'md', 'lg', 'xl']; // Keep in mind that @media is inclusive by the CSS specification.

function createBreakpoints(breakpoints) {
  var _breakpoints$values = breakpoints.values,
      values = _breakpoints$values === void 0 ? {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  } : _breakpoints$values,
      _breakpoints$unit = breakpoints.unit,
      unit = _breakpoints$unit === void 0 ? 'px' : _breakpoints$unit,
      _breakpoints$step = breakpoints.step,
      step = _breakpoints$step === void 0 ? 5 : _breakpoints$step,
      other = Object(objectWithoutProperties["a" /* default */])(breakpoints, ["values", "unit", "step"]);

  function up(key) {
    var value = typeof values[key] === 'number' ? values[key] : key;
    return "@media (min-width:".concat(value).concat(unit, ")");
  }

  function down(key) {
    var endIndex = keys.indexOf(key) + 1;
    var upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      // xl down applies to all sizes
      return up('xs');
    }

    var value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
    return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
  }

  function between(start, end) {
    var endIndex = keys.indexOf(end);

    if (endIndex === keys.length - 1) {
      return up(start);
    }

    return "@media (min-width:".concat(typeof values[start] === 'number' ? values[start] : start).concat(unit, ") and ") + "(max-width:".concat((endIndex !== -1 && typeof values[keys[endIndex + 1]] === 'number' ? values[keys[endIndex + 1]] : end) - step / 100).concat(unit, ")");
  }

  function only(key) {
    return between(key, key);
  }

  function width(key) {
    return values[key];
  }

  return Object(esm_extends["a" /* default */])({
    keys: keys,
    values: values,
    up: up,
    down: down,
    between: between,
    only: only,
    width: width
  }, other);
}
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/styles/createMixins.js


function createMixins(breakpoints, spacing, mixins) {
  var _toolbar;

  return Object(esm_extends["a" /* default */])({
    gutters: function gutters() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}; // To deprecate in v4.1
      //       warning(
      //         false,
      //         [
      //           'Material-UI: Theme.mixins.gutters() is deprecated.',
      //           'You can use the source of the mixin directly:',
      //           `
      // paddingLeft: theme.spacing(2),
      // paddingRight: theme.spacing(2),
      // [theme.breakpoints.up('sm')]: {
      //   paddingLeft: theme.spacing(3),
      //   paddingRight: theme.spacing(3),
      // },
      // `,
      //         ].join('\n'),
      //       );

      return Object(esm_extends["a" /* default */])({
        paddingLeft: spacing(2),
        paddingRight: spacing(2)
      }, styles, Object(defineProperty["a" /* default */])({}, breakpoints.up('sm'), Object(esm_extends["a" /* default */])({
        paddingLeft: spacing(3),
        paddingRight: spacing(3)
      }, styles[breakpoints.up('sm')])));
    },
    toolbar: (_toolbar = {
      minHeight: 56
    }, Object(defineProperty["a" /* default */])(_toolbar, "".concat(breakpoints.up('xs'), " and (orientation: landscape)"), {
      minHeight: 48
    }), Object(defineProperty["a" /* default */])(_toolbar, breakpoints.up('sm'), {
      minHeight: 64
    }), _toolbar)
  }, mixins);
}
// EXTERNAL MODULE: ./node_modules/@material-ui/utils/esm/formatMuiErrorMessage.js
var formatMuiErrorMessage = __webpack_require__("TrhM");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/colors/common.js
var common = {
  black: '#000',
  white: '#fff'
};
/* harmony default export */ var colors_common = (common);
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/colors/grey.js
var grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161'
};
/* harmony default export */ var colors_grey = (grey);
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/colors/indigo.js
var indigo = {
  50: '#e8eaf6',
  100: '#c5cae9',
  200: '#9fa8da',
  300: '#7986cb',
  400: '#5c6bc0',
  500: '#3f51b5',
  600: '#3949ab',
  700: '#303f9f',
  800: '#283593',
  900: '#1a237e',
  A100: '#8c9eff',
  A200: '#536dfe',
  A400: '#3d5afe',
  A700: '#304ffe'
};
/* harmony default export */ var colors_indigo = (indigo);
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/colors/pink.js
var pink = {
  50: '#fce4ec',
  100: '#f8bbd0',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#e91e63',
  600: '#d81b60',
  700: '#c2185b',
  800: '#ad1457',
  900: '#880e4f',
  A100: '#ff80ab',
  A200: '#ff4081',
  A400: '#f50057',
  A700: '#c51162'
};
/* harmony default export */ var colors_pink = (pink);
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/colors/red.js
var red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};
/* harmony default export */ var colors_red = (red);
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/colors/orange.js
var orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00'
};
/* harmony default export */ var colors_orange = (orange);
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/colors/blue.js
var blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff'
};
/* harmony default export */ var colors_blue = (blue);
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/colors/green.js
var green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853'
};
/* harmony default export */ var colors_green = (green);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__("ye/S");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/styles/createPalette.js













var light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.54)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)',
    // Text hints.
    hint: 'rgba(0, 0, 0, 0.38)'
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: colors_common.white,
    default: colors_grey[50]
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
var dark = {
  text: {
    primary: colors_common.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: colors_grey[800],
    default: '#303030'
  },
  action: {
    active: colors_common.white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};

function addLightOrDark(intent, direction, shade, tonalOffset) {
  var tonalOffsetLight = tonalOffset.light || tonalOffset;
  var tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = Object(colorManipulator["e" /* lighten */])(intent.main, tonalOffsetLight);
    } else if (direction === 'dark') {
      intent.dark = Object(colorManipulator["a" /* darken */])(intent.main, tonalOffsetDark);
    }
  }
}

function createPalette(palette) {
  var _palette$primary = palette.primary,
      primary = _palette$primary === void 0 ? {
    light: colors_indigo[300],
    main: colors_indigo[500],
    dark: colors_indigo[700]
  } : _palette$primary,
      _palette$secondary = palette.secondary,
      secondary = _palette$secondary === void 0 ? {
    light: colors_pink.A200,
    main: colors_pink.A400,
    dark: colors_pink.A700
  } : _palette$secondary,
      _palette$error = palette.error,
      error = _palette$error === void 0 ? {
    light: colors_red[300],
    main: colors_red[500],
    dark: colors_red[700]
  } : _palette$error,
      _palette$warning = palette.warning,
      warning = _palette$warning === void 0 ? {
    light: colors_orange[300],
    main: colors_orange[500],
    dark: colors_orange[700]
  } : _palette$warning,
      _palette$info = palette.info,
      info = _palette$info === void 0 ? {
    light: colors_blue[300],
    main: colors_blue[500],
    dark: colors_blue[700]
  } : _palette$info,
      _palette$success = palette.success,
      success = _palette$success === void 0 ? {
    light: colors_green[300],
    main: colors_green[500],
    dark: colors_green[700]
  } : _palette$success,
      _palette$type = palette.type,
      type = _palette$type === void 0 ? 'light' : _palette$type,
      _palette$contrastThre = palette.contrastThreshold,
      contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
      _palette$tonalOffset = palette.tonalOffset,
      tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset,
      other = Object(objectWithoutProperties["a" /* default */])(palette, ["primary", "secondary", "error", "warning", "info", "success", "type", "contrastThreshold", "tonalOffset"]); // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54


  function getContrastText(background) {
    var contrastText = Object(colorManipulator["d" /* getContrastRatio */])(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

    if (false) { var contrast; }

    return contrastText;
  }

  var augmentColor = function augmentColor(color) {
    var mainShade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    var lightShade = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;
    var darkShade = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 700;
    color = Object(esm_extends["a" /* default */])({}, color);

    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }

    if (!color.main) {
      throw new Error( false ? undefined : Object(formatMuiErrorMessage["a" /* default */])(4, mainShade));
    }

    if (typeof color.main !== 'string') {
      throw new Error( false ? undefined : Object(formatMuiErrorMessage["a" /* default */])(5, JSON.stringify(color.main)));
    }

    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);

    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }

    return color;
  };

  var types = {
    dark: dark,
    light: light
  };

  if (false) {}

  var paletteOutput = Object(deepmerge["a" /* default */])(Object(esm_extends["a" /* default */])({
    // A collection of common colors.
    common: colors_common,
    // The palette type, can be light or dark.
    type: type,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor(primary),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor(secondary, 'A400', 'A200', 'A700'),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor(error),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor(warning),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor(info),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor(success),
    // The grey colors.
    grey: colors_grey,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: getContrastText,
    // Generate a rich color object.
    augmentColor: augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: tonalOffset
  }, types[type]), other);
  return paletteOutput;
}
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/styles/createTypography.js




function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

var caseAllCaps = {
  textTransform: 'uppercase'
};
var defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
/**
 * @see @link{https://material.io/design/typography/the-type-system.html}
 * @see @link{https://material.io/design/typography/understanding-typography.html}
 */

function createTypography(palette, typography) {
  var _ref = typeof typography === 'function' ? typography(palette) : typography,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? defaultFontFamily : _ref$fontFamily,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
      _ref$fontWeightLight = _ref.fontWeightLight,
      fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
      _ref$fontWeightRegula = _ref.fontWeightRegular,
      fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
      _ref$fontWeightMedium = _ref.fontWeightMedium,
      fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
      _ref$fontWeightBold = _ref.fontWeightBold,
      fontWeightBold = _ref$fontWeightBold === void 0 ? 700 : _ref$fontWeightBold,
      _ref$htmlFontSize = _ref.htmlFontSize,
      htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
      allVariants = _ref.allVariants,
      pxToRem2 = _ref.pxToRem,
      other = Object(objectWithoutProperties["a" /* default */])(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"]);

  if (false) {}

  var coef = fontSize / 14;

  var pxToRem = pxToRem2 || function (size) {
    return "".concat(size / htmlFontSize * coef, "rem");
  };

  var buildVariant = function buildVariant(fontWeight, size, lineHeight, letterSpacing, casing) {
    return Object(esm_extends["a" /* default */])({
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontSize: pxToRem(size),
      // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
      lineHeight: lineHeight
    }, fontFamily === defaultFontFamily ? {
      letterSpacing: "".concat(round(letterSpacing / size), "em")
    } : {}, casing, allVariants);
  };

  var variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps)
  };
  return Object(deepmerge["a" /* default */])(Object(esm_extends["a" /* default */])({
    htmlFontSize: htmlFontSize,
    pxToRem: pxToRem,
    round: round,
    // TODO v5: remove
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeightLight: fontWeightLight,
    fontWeightRegular: fontWeightRegular,
    fontWeightMedium: fontWeightMedium,
    fontWeightBold: fontWeightBold
  }, variants), other, {
    clone: false // No need to clone deep

  });
}
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/styles/shadows.js
var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;

function createShadow() {
  return ["".concat(arguments.length <= 0 ? undefined : arguments[0], "px ").concat(arguments.length <= 1 ? undefined : arguments[1], "px ").concat(arguments.length <= 2 ? undefined : arguments[2], "px ").concat(arguments.length <= 3 ? undefined : arguments[3], "px rgba(0,0,0,").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? undefined : arguments[4], "px ").concat(arguments.length <= 5 ? undefined : arguments[5], "px ").concat(arguments.length <= 6 ? undefined : arguments[6], "px ").concat(arguments.length <= 7 ? undefined : arguments[7], "px rgba(0,0,0,").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? undefined : arguments[8], "px ").concat(arguments.length <= 9 ? undefined : arguments[9], "px ").concat(arguments.length <= 10 ? undefined : arguments[10], "px ").concat(arguments.length <= 11 ? undefined : arguments[11], "px rgba(0,0,0,").concat(shadowAmbientShadowOpacity, ")")].join(',');
} // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss


var shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
/* harmony default export */ var styles_shadows = (shadows);
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/styles/shape.js
var shape = {
  borderRadius: 4
};
/* harmony default export */ var styles_shape = (shape);
// EXTERNAL MODULE: ./node_modules/@material-ui/system/esm/spacing.js + 1 modules
var esm_spacing = __webpack_require__("+Hmc");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/styles/createSpacing.js

var warnOnce;
function createSpacing() {
  var spacingInput = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8; // Already transformed.

  if (spacingInput.mui) {
    return spacingInput;
  } // Material Design layouts are visually balanced. Most measurements align to an 8dp grid applied, which aligns both spacing and the overall layout.
  // Smaller components, such as icons and type, can align to a 4dp grid.
  // https://material.io/design/layout/understanding-layout.html#usage


  var transform = Object(esm_spacing["a" /* createUnarySpacing */])({
    spacing: spacingInput
  });

  var spacing = function spacing() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (false) {}

    if (args.length === 0) {
      return transform(1);
    }

    if (args.length === 1) {
      return transform(args[0]);
    }

    return args.map(function (argument) {
      if (typeof argument === 'string') {
        return argument;
      }

      var output = transform(argument);
      return typeof output === 'number' ? "".concat(output, "px") : output;
    }).join(' ');
  }; // Backward compatibility, to remove in v5.


  Object.defineProperty(spacing, 'unit', {
    get: function get() {
      if (false) {}

      return spacingInput;
    }
  });
  spacing.mui = true;
  return spacing;
}
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/transitions.js
var transitions = __webpack_require__("wpWl");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/zIndex.js
var zIndex = __webpack_require__("HwzS");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/styles/createMuiTheme.js














function createMuiTheme() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _options$breakpoints = options.breakpoints,
      breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints,
      _options$mixins = options.mixins,
      mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
      _options$palette = options.palette,
      paletteInput = _options$palette === void 0 ? {} : _options$palette,
      spacingInput = options.spacing,
      _options$typography = options.typography,
      typographyInput = _options$typography === void 0 ? {} : _options$typography,
      other = Object(objectWithoutProperties["a" /* default */])(options, ["breakpoints", "mixins", "palette", "spacing", "typography"]);

  var palette = createPalette(paletteInput);
  var breakpoints = createBreakpoints(breakpointsInput);
  var spacing = createSpacing(spacingInput);
  var muiTheme = Object(deepmerge["a" /* default */])({
    breakpoints: breakpoints,
    direction: 'ltr',
    mixins: createMixins(breakpoints, spacing, mixinsInput),
    overrides: {},
    // Inject custom styles
    palette: palette,
    props: {},
    // Provide default props
    shadows: styles_shadows,
    typography: createTypography(palette, typographyInput),
    spacing: spacing,
    shape: styles_shape,
    transitions: transitions["a" /* default */],
    zIndex: zIndex["a" /* default */]
  }, other);

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  muiTheme = args.reduce(function (acc, argument) {
    return Object(deepmerge["a" /* default */])(acc, argument);
  }, muiTheme);

  if (false) { var traverse, pseudoClasses; }

  return muiTheme;
}

/* harmony default export */ var styles_createMuiTheme = __webpack_exports__["a"] = (createMuiTheme);

/***/ }),

/***/ "vrFN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qhky");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Wbzz");
/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */function SEO(_ref){var _site$siteMetadata,_site$siteMetadata2;var description=_ref.description,lang=_ref.lang,meta=_ref.meta,title=_ref.title;var _useStaticQuery=Object(gatsby__WEBPACK_IMPORTED_MODULE_2__["useStaticQuery"])("63159454"),site=_useStaticQuery.site;var metaDescription=description||site.siteMetadata.description;var defaultTitle=(_site$siteMetadata=site.siteMetadata)===null||_site$siteMetadata===void 0?void 0:_site$siteMetadata.title;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__[/* Helmet */ "a"],{htmlAttributes:{lang:lang},title:title,titleTemplate:defaultTitle?"%s | "+defaultTitle:null,meta:[{name:"description",content:metaDescription},{property:"og:title",content:title},{property:"og:description",content:metaDescription},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:((_site$siteMetadata2=site.siteMetadata)===null||_site$siteMetadata2===void 0?void 0:_site$siteMetadata2.author)||""},{name:"twitter:title",content:title},{name:"twitter:description",content:metaDescription}].concat(meta)});}SEO.defaultProps={lang:"en",meta:[],description:""};/* harmony default export */ __webpack_exports__["a"] = (SEO);

/***/ }),

/***/ "wpWl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export easing */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return duration; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Ff2n");
 // Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.

var easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
}; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing

var duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};

function formatMs(milliseconds) {
  return "".concat(Math.round(milliseconds), "ms");
}
/**
 * @param {string|Array} props
 * @param {object} param
 * @param {string} param.prop
 * @param {number} param.duration
 * @param {string} param.easing
 * @param {number} param.delay
 */


/* harmony default export */ __webpack_exports__["a"] = ({
  easing: easing,
  duration: duration,
  create: function create() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _options$duration = options.duration,
        durationOption = _options$duration === void 0 ? duration.standard : _options$duration,
        _options$easing = options.easing,
        easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing,
        _options$delay = options.delay,
        delay = _options$delay === void 0 ? 0 : _options$delay,
        other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(options, ["duration", "easing", "delay"]);

    if (false) { var isNumber, isString; }

    return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
      return "".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs(delay));
    }).join(',');
  },
  getAutoHeightDuration: function getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }

    var constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

    return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
  }
});

/***/ }),

/***/ "x6Ns":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createChainedFunction; });
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("E9XD");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.reduce(function (acc, func) {
    if (func == null) {
      return acc;
    }

    if (false) {}

    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      acc.apply(this, args);
      func.apply(this, args);
    };
  }, function () {});
}

/***/ }),

/***/ "y6BH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return unsupportedProp; });
function unsupportedProp(props, propName, componentName, location, propFullName) {
  if (true) {
    return null;
  }

  var propFullNameSafe = propFullName || propName;

  if (typeof props[propName] !== 'undefined') {
    return new Error("The prop `".concat(propFullNameSafe, "` is not supported. Please remove it."));
  }

  return null;
}

/***/ }),

/***/ "ye/S":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hexToRgb */
/* unused harmony export rgbToHex */
/* unused harmony export hslToRgb */
/* unused harmony export decomposeColor */
/* unused harmony export recomposeColor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getContrastRatio; });
/* unused harmony export getLuminance */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return emphasize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return fade; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return darken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return lighten; });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TrhM");

/* eslint-disable no-use-before-define */

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */

function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  if (false) {}

  return Math.min(Math.max(min, value), max);
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */


function hexToRgb(color) {
  color = color.substr(1);
  var re = new RegExp(".{1,".concat(color.length >= 6 ? 2 : 1, "}"), 'g');
  var colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(function (n) {
      return n + n;
    });
  }

  return colors ? "rgb".concat(colors.length === 4 ? 'a' : '', "(").concat(colors.map(function (n, index) {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', '), ")") : '';
}

function intToHex(int) {
  var hex = int.toString(16);
  return hex.length === 1 ? "0".concat(hex) : hex;
}
/**
 * Converts a color from CSS rgb format to CSS hex format.
 *
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */


function rgbToHex(color) {
  // Idempotent
  if (color.indexOf('#') === 0) {
    return color;
  }

  var _decomposeColor = decomposeColor(color),
      values = _decomposeColor.values;

  return "#".concat(values.map(function (n) {
    return intToHex(n);
  }).join(''));
}
/**
 * Converts a color from hsl format to rgb format.
 *
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */

function hslToRgb(color) {
  color = decomposeColor(color);
  var _color = color,
      values = _color.values;
  var h = values[0];
  var s = values[1] / 100;
  var l = values[2] / 100;
  var a = s * Math.min(l, 1 - l);

  var f = function f(n) {
    var k = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (n + h / 30) % 12;
    return l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  };

  var type = 'rgb';
  var rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];

  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }

  return recomposeColor({
    type: type,
    values: rgb
  });
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */

function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }

  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }

  var marker = color.indexOf('(');
  var type = color.substring(0, marker);

  if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
    throw new Error( false ? undefined : Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(3, color));
  }

  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });
  return {
    type: type,
    values: values
  };
}
/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */

function recomposeColor(color) {
  var type = color.type;
  var values = color.values;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map(function (n, i) {
      return i < 3 ? parseInt(n, 10) : n;
    });
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = "".concat(values[1], "%");
    values[2] = "".concat(values[2], "%");
  }

  return "".concat(type, "(").concat(values.join(', '), ")");
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */

function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */

function getLuminance(color) {
  color = decomposeColor(color);
  var rgb = color.type === 'hsl' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(function (val) {
    val /= 255; // normalized

    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  }); // Truncate at 3 digits

  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function emphasize(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function fade(color, value) {
  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }

  color.values[3] = value;
  return recomposeColor(color);
}
/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }

  return recomposeColor(color);
}
/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */

function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}

/***/ })

}]);
//# sourceMappingURL=commons-94701ca2553f80889cb1.js.map