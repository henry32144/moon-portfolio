(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "/9aa":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("NykK"),
    isObjectLike = __webpack_require__("ExA7");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "/eHF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopRequireDefault(o) {
  return o && o.__esModule ? o : {
    default: o
  };
}

function _objectWithoutProperties(o, e) {
  var r = {};

  for (var t in o) {
    e.indexOf(t) >= 0 || Object.prototype.hasOwnProperty.call(o, t) && (r[t] = o[t]);
  }

  return r;
}

function make(o, e) {
  var r = e.distance,
      t = e.left,
      p = e.right,
      a = e.up,
      l = e.down,
      i = e.top,
      u = e.bottom,
      n = e.big,
      s = e.mirror,
      d = e.opposite,
      _ = (r ? r.toString() : 0) + ((t ? 1 : 0) | (p ? 2 : 0) | (i || l ? 4 : 0) | (u || a ? 8 : 0) | (s ? 16 : 0) | (d ? 32 : 0) | (o ? 64 : 0) | (n ? 128 : 0));

  if (lookup.hasOwnProperty(_)) return lookup[_];
  var f = t || p || a || l || i || u,
      y = void 0,
      b = void 0;

  if (f) {
    if (!s != !(o && d)) {
      var v = [p, t, u, i, l, a];
      t = v[0], p = v[1], i = v[2], u = v[3], a = v[4], l = v[5];
    }

    var c = r || (n ? "2000px" : "100%");
    y = t ? "-" + c : p ? c : "0", b = l || i ? "-" + c : a || u ? c : "0";
  }

  return lookup[_] = (0, _globals.animation)((o ? "to" : "from") + " {opacity: 0;" + (f ? " transform: translate3d(" + y + ", " + b + ", 0);" : "") + "}\n     " + (o ? "from" : "to") + " {opacity: 1;transform: none;} "), lookup[_];
}

function Fade() {
  var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _globals.defaults,
      e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      r = o.children,
      t = (o.out, o.forever),
      p = o.timeout,
      a = o.duration,
      l = void 0 === a ? _globals.defaults.duration : a,
      i = o.delay,
      u = void 0 === i ? _globals.defaults.delay : i,
      n = o.count,
      s = void 0 === n ? _globals.defaults.count : n,
      d = _objectWithoutProperties(o, ["children", "out", "forever", "timeout", "duration", "delay", "count"]),
      _ = {
    make: make,
    duration: void 0 === p ? l : p,
    delay: u,
    forever: t,
    count: s,
    style: {
      animationFillMode: "both"
    },
    reverse: d.left
  };

  return e ? (0, _wrap2.default)(d, _, _, r) : _;
}

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _propTypes = __webpack_require__("17x9"),
    _globals = __webpack_require__("ar19"),
    _wrap = __webpack_require__("eH+L"),
    _wrap2 = _interopRequireDefault(_wrap),
    propTypes = {
  out: _propTypes.bool,
  left: _propTypes.bool,
  right: _propTypes.bool,
  top: _propTypes.bool,
  bottom: _propTypes.bool,
  big: _propTypes.bool,
  mirror: _propTypes.bool,
  opposite: _propTypes.bool,
  duration: _propTypes.number,
  timeout: _propTypes.number,
  distance: _propTypes.string,
  delay: _propTypes.number,
  count: _propTypes.number,
  forever: _propTypes.bool
},
    lookup = {};

Fade.propTypes = propTypes, exports.default = Fade, module.exports = exports.default;

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "03A+":
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__("JTzB"),
    isObjectLike = __webpack_require__("ExA7");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1TsT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addEventListener; });
var CAN_USE_DOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement); // Adapted from Modernizr
// https://github.com/Modernizr/Modernizr/blob/acb3f0d9/feature-detects/dom/passiveeventlisteners.js#L26-L37

function testPassiveEventListeners() {
  if (!CAN_USE_DOM) {
    return false;
  }

  if (!window.addEventListener || !window.removeEventListener || !Object.defineProperty) {
    return false;
  }

  var supportsPassiveOption = false;

  try {
    var opts = Object.defineProperty({}, 'passive', {
      // eslint-disable-next-line getter-return
      get: function () {
        function get() {
          supportsPassiveOption = true;
        }

        return get;
      }()
    });

    var noop = function noop() {};

    window.addEventListener('testPassiveEventSupport', noop, opts);
    window.removeEventListener('testPassiveEventSupport', noop, opts);
  } catch (e) {// do nothing
  }

  return supportsPassiveOption;
}

var memoized = void 0;

function canUsePassiveEventListeners() {
  if (memoized === undefined) {
    memoized = testPassiveEventListeners();
  }

  return memoized;
}

function normalizeEventOptions(eventOptions) {
  if (!eventOptions) {
    return undefined;
  }

  if (!canUsePassiveEventListeners()) {
    // If the browser does not support the passive option, then it is expecting
    // a boolean for the options argument to specify whether it should use
    // capture or not. In more modern browsers, this is passed via the `capture`
    // option, so let's just hoist that value up.
    return !!eventOptions.capture;
  }

  return eventOptions;
}
/* eslint-disable no-bitwise */

/**
 * Generate a unique key for any set of event options
 */


function eventOptionsKey(normalizedEventOptions) {
  if (!normalizedEventOptions) {
    return 0;
  } // If the browser does not support passive event listeners, the normalized
  // event options will be a boolean.


  if (normalizedEventOptions === true) {
    return 100;
  } // At this point, the browser supports passive event listeners, so we expect
  // the event options to be an object with possible properties of capture,
  // passive, and once.
  //
  // We want to consistently return the same value, regardless of the order of
  // these properties, so let's use binary maths to assign each property to a
  // bit, and then add those together (with an offset to account for the
  // booleans at the beginning of this function).


  var capture = normalizedEventOptions.capture << 0;
  var passive = normalizedEventOptions.passive << 1;
  var once = normalizedEventOptions.once << 2;
  return capture + passive + once;
}

function ensureCanMutateNextEventHandlers(eventHandlers) {
  if (eventHandlers.handlers === eventHandlers.nextHandlers) {
    // eslint-disable-next-line no-param-reassign
    eventHandlers.nextHandlers = eventHandlers.handlers.slice();
  }
}

function TargetEventHandlers(target) {
  this.target = target;
  this.events = {};
}

TargetEventHandlers.prototype.getEventHandlers = function () {
  function getEventHandlers(eventName, options) {
    var key = String(eventName) + ' ' + String(eventOptionsKey(options));

    if (!this.events[key]) {
      this.events[key] = {
        handlers: [],
        handleEvent: undefined
      };
      this.events[key].nextHandlers = this.events[key].handlers;
    }

    return this.events[key];
  }

  return getEventHandlers;
}();

TargetEventHandlers.prototype.handleEvent = function () {
  function handleEvent(eventName, options, event) {
    var eventHandlers = this.getEventHandlers(eventName, options);
    eventHandlers.handlers = eventHandlers.nextHandlers;
    eventHandlers.handlers.forEach(function (handler) {
      if (handler) {
        // We need to check for presence here because a handler function may
        // cause later handlers to get removed. This can happen if you for
        // instance have a waypoint that unmounts another waypoint as part of an
        // onEnter/onLeave handler.
        handler(event);
      }
    });
  }

  return handleEvent;
}();

TargetEventHandlers.prototype.add = function () {
  function add(eventName, listener, options) {
    var _this = this; // options has already been normalized at this point.


    var eventHandlers = this.getEventHandlers(eventName, options);
    ensureCanMutateNextEventHandlers(eventHandlers);

    if (eventHandlers.nextHandlers.length === 0) {
      eventHandlers.handleEvent = this.handleEvent.bind(this, eventName, options);
      this.target.addEventListener(eventName, eventHandlers.handleEvent, options);
    }

    eventHandlers.nextHandlers.push(listener);
    var isSubscribed = true;

    var unsubscribe = function () {
      function unsubscribe() {
        if (!isSubscribed) {
          return;
        }

        isSubscribed = false;
        ensureCanMutateNextEventHandlers(eventHandlers);
        var index = eventHandlers.nextHandlers.indexOf(listener);
        eventHandlers.nextHandlers.splice(index, 1);

        if (eventHandlers.nextHandlers.length === 0) {
          // All event handlers have been removed, so we want to remove the event
          // listener from the target node.
          if (_this.target) {
            // There can be a race condition where the target may no longer exist
            // when this function is called, e.g. when a React component is
            // unmounting. Guarding against this prevents the following error:
            //
            //   Cannot read property 'removeEventListener' of undefined
            _this.target.removeEventListener(eventName, eventHandlers.handleEvent, options);
          }

          eventHandlers.handleEvent = undefined;
        }
      }

      return unsubscribe;
    }();

    return unsubscribe;
  }

  return add;
}();

var EVENT_HANDLERS_KEY = '__consolidated_events_handlers__'; // eslint-disable-next-line import/prefer-default-export

function addEventListener(target, eventName, listener, options) {
  if (!target[EVENT_HANDLERS_KEY]) {
    // eslint-disable-next-line no-param-reassign
    target[EVENT_HANDLERS_KEY] = new TargetEventHandlers(target);
  }

  var normalizedEventOptions = normalizeEventOptions(options);
  return target[EVENT_HANDLERS_KEY].add(eventName, listener, normalizedEventOptions);
}



/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "28nh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}

function _defineProperty(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e;
}

function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(e, t) {
  if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return !t || "object" != typeof t && "function" != typeof t ? e : t;
}

function _inherits(e, t) {
  if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      enumerable: !1,
      writable: !0,
      configurable: !0
    }
  }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
  return typeof e;
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
},
    _slicedToArray = function () {
  function e(e, t) {
    var i = [],
        s = !0,
        o = !1,
        n = void 0;

    try {
      for (var r, a = e[Symbol.iterator](); !(s = (r = a.next()).done) && (i.push(r.value), !t || i.length !== t); s = !0) {
        ;
      }
    } catch (e) {
      o = !0, n = e;
    } finally {
      try {
        !s && a.return && a.return();
      } finally {
        if (o) throw n;
      }
    }

    return i;
  }

  return function (t, i) {
    if (Array.isArray(t)) return t;
    if (Symbol.iterator in Object(t)) return e(t, i);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };
}(),
    _extends = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var i = arguments[t];

    for (var s in i) {
      Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s]);
    }
  }

  return e;
},
    _createClass = function () {
  function e(e, t) {
    for (var i = 0; i < t.length; i++) {
      var s = t[i];
      s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s);
    }
  }

  return function (t, i, s) {
    return i && e(t.prototype, i), s && e(t, s), t;
  };
}(),
    _react = __webpack_require__("q1tI"),
    _react2 = _interopRequireDefault(_react),
    _propTypes = __webpack_require__("17x9"),
    _globals = __webpack_require__("ar19"),
    inOut = (0, _propTypes.shape)({
  make: _propTypes.func,
  duration: _propTypes.number.isRequired,
  delay: _propTypes.number.isRequired,
  forever: _propTypes.bool,
  count: _propTypes.number.isRequired,
  style: _propTypes.object.isRequired,
  reverse: _propTypes.bool
}),
    propTypes = {
  collapse: _propTypes.bool,
  collapseEl: _propTypes.element,
  cascade: _propTypes.bool,
  wait: _propTypes.number,
  force: _propTypes.bool,
  disabled: _propTypes.bool,
  appear: _propTypes.bool,
  enter: _propTypes.bool,
  exit: _propTypes.bool,
  fraction: _propTypes.number,
  refProp: _propTypes.string,
  innerRef: _propTypes.func,
  onReveal: _propTypes.func,
  unmountOnExit: _propTypes.bool,
  mountOnEnter: _propTypes.bool,
  inEffect: inOut.isRequired,
  outEffect: (0, _propTypes.oneOfType)([inOut, (0, _propTypes.oneOf)([!1])]).isRequired,
  ssrReveal: _propTypes.bool,
  collapseOnly: _propTypes.bool,
  ssrFadeout: _propTypes.bool
},
    defaultProps = {
  fraction: .2,
  refProp: "ref"
},
    contextTypes = {
  transitionGroup: _propTypes.object
},
    RevealBase = function (e) {
  function t(e, i) {
    _classCallCheck(this, t);

    var s = _possibleConstructorReturn(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, i));

    return s.isOn = void 0 === e.when || !!e.when, s.state = {
      collapse: e.collapse ? t.getInitialCollapseStyle(e) : void 0,
      style: {
        opacity: s.isOn && !e.ssrReveal || !e.outEffect ? void 0 : 0
      }
    }, s.savedChild = !1, s.isShown = !1, _globals.observerMode ? s.handleObserve = s.handleObserve.bind(s) : (s.revealHandler = s.makeHandler(s.reveal), s.resizeHandler = s.makeHandler(s.resize)), s.saveRef = s.saveRef.bind(s), s;
  }

  return _inherits(t, e), _createClass(t, [{
    key: "saveRef",
    value: function value(e) {
      this.childRef && this.childRef(e), this.props.innerRef && this.props.innerRef(e), this.el !== e && (this.el = e && "offsetHeight" in e ? e : void 0, this.observe(this.props, !0));
    }
  }, {
    key: "invisible",
    value: function value() {
      this && this.el && (this.savedChild = !1, this.isShown || (this.setState({
        hasExited: !0,
        collapse: this.props.collapse ? _extends({}, this.state.collapse, {
          visibility: "hidden"
        }) : null,
        style: {
          opacity: 0
        }
      }), !_globals.observerMode && this.props.collapse && window.document.dispatchEvent(_globals.collapseend)));
    }
  }, {
    key: "animationEnd",
    value: function value(e, t, i) {
      var s = this,
          o = i.forever,
          n = i.count,
          r = i.delay,
          a = i.duration;

      if (!o) {
        var l = function l() {
          s && s.el && (s.animationEndTimeout = void 0, e.call(s));
        };

        this.animationEndTimeout = window.setTimeout(l, r + (a + (t ? a : 0) * n));
      }
    }
  }, {
    key: "getDimensionValue",
    value: function value() {
      return this.el.offsetHeight + parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-top"), 10) + parseInt(window.getComputedStyle(this.el, null).getPropertyValue("margin-bottom"), 10);
    }
  }, {
    key: "collapse",
    value: function value(e, t, i) {
      var s = i.duration + (t.cascade ? i.duration : 0),
          o = this.isOn ? this.getDimensionValue() : 0,
          n = void 0,
          r = void 0;
      if (t.collapseOnly) n = i.duration / 3, r = i.delay;else {
        var a = s >> 2,
            l = a >> 1;
        n = a, r = i.delay + (this.isOn ? 0 : s - a - l), e.style.animationDuration = s - a + (this.isOn ? l : -l) + "ms", e.style.animationDelay = i.delay + (this.isOn ? a - l : 0) + "ms";
      }
      return e.collapse = {
        height: o,
        transition: "height " + n + "ms ease " + r + "ms",
        overflow: t.collapseOnly ? "hidden" : void 0
      }, e;
    }
  }, {
    key: "animate",
    value: function value(e) {
      if (this && this.el && (this.unlisten(), this.isShown !== this.isOn)) {
        this.isShown = this.isOn;
        var t = !this.isOn && e.outEffect,
            i = e[t ? "outEffect" : "inEffect"],
            s = "style" in i && i.style.animationName || void 0,
            o = void 0;
        e.collapseOnly ? o = {
          hasAppeared: !0,
          hasExited: !1,
          style: {
            opacity: 1
          }
        } : ((e.outEffect || this.isOn) && i.make && (s = i.make), o = {
          hasAppeared: !0,
          hasExited: !1,
          collapse: void 0,
          style: _extends({}, i.style, {
            animationDuration: i.duration + "ms",
            animationDelay: i.delay + "ms",
            animationIterationCount: i.forever ? "infinite" : i.count,
            opacity: 1,
            animationName: s
          }),
          className: i.className
        }), this.setState(e.collapse ? this.collapse(o, e, i) : o), t ? (this.savedChild = _react2.default.cloneElement(this.getChild()), this.animationEnd(this.invisible, e.cascade, i)) : this.savedChild = !1, this.onReveal(e);
      }
    }
  }, {
    key: "onReveal",
    value: function value(e) {
      e.onReveal && this.isOn && (this.onRevealTimeout && (this.onRevealTimeout = window.clearTimeout(this.onRevealTimeout)), e.wait ? this.onRevealTimeout = window.setTimeout(e.onReveal, e.wait) : e.onReveal());
    }
  }, {
    key: "componentWillUnmount",
    value: function value() {
      this.unlisten(), _globals.ssr && (0, _globals.disableSsr)();
    }
  }, {
    key: "handleObserve",
    value: function value(e, t) {
      _slicedToArray(e, 1)[0].intersectionRatio > 0 && (t.disconnect(), this.observer = null, this.reveal(this.props, !0));
    }
  }, {
    key: "observe",
    value: function value(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

      if (this.el && _globals.observerMode) {
        if (this.observer) {
          if (!t) return;
          this.observer.disconnect();
        } else if (t) return;

        this.observer = new IntersectionObserver(this.handleObserve, {
          threshold: e.fraction
        }), this.observer.observe(this.el);
      }
    }
  }, {
    key: "reveal",
    value: function value(e) {
      var t = this,
          i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      _globals.globalHide || (0, _globals.hideAll)(), this && this.el && (e || (e = this.props), _globals.ssr && (0, _globals.disableSsr)(), this.isOn && this.isShown && void 0 !== e.spy ? (this.isShown = !1, this.setState({
        style: {}
      }), window.setTimeout(function () {
        return t.reveal(e);
      }, 200)) : i || this.inViewport(e) || e.force ? this.animate(e) : _globals.observerMode ? this.observe(e) : this.listen());
    }
  }, {
    key: "componentDidMount",
    value: function value() {
      var e = this;

      if (this.el && !this.props.disabled) {
        this.props.collapseOnly || ("make" in this.props.inEffect && this.props.inEffect.make(!1, this.props), void 0 !== this.props.when && this.props.outEffect && "make" in this.props.outEffect && this.props.outEffect.make(!0, this.props));
        var i = this.context.transitionGroup,
            s = i && !i.isMounting ? !("enter" in this.props && !1 === this.props.enter) : this.props.appear;
        return this.isOn && ((void 0 !== this.props.when || void 0 !== this.props.spy) && !s || _globals.ssr && !_globals.fadeOutEnabled && !this.props.ssrFadeout && this.props.outEffect && !this.props.ssrReveal && t.getTop(this.el) < window.pageYOffset + window.innerHeight) ? (this.isShown = !0, this.setState({
          hasAppeared: !0,
          collapse: this.props.collapse ? {
            height: this.getDimensionValue()
          } : this.state.collapse,
          style: {
            opacity: 1
          }
        }), void this.onReveal(this.props)) : _globals.ssr && (_globals.fadeOutEnabled || this.props.ssrFadeout) && this.props.outEffect && t.getTop(this.el) < window.pageYOffset + window.innerHeight ? (this.setState({
          style: {
            opacity: 0,
            transition: "opacity 1000ms 1000ms"
          }
        }), void window.setTimeout(function () {
          return e.reveal(e.props, !0);
        }, 2e3)) : void (this.isOn && (this.props.force ? this.animate(this.props) : this.reveal(this.props)));
      }
    }
  }, {
    key: "cascade",
    value: function value(e) {
      var t = this,
          i = void 0;
      i = "string" == typeof e ? e.split("").map(function (e, t) {
        return _react2.default.createElement("span", {
          key: t,
          style: {
            display: "inline-block",
            whiteSpace: "pre"
          }
        }, e);
      }) : _react2.default.Children.toArray(e);
      var s = this.props[this.isOn || !this.props.outEffect ? "inEffect" : "outEffect"],
          o = s.duration,
          n = s.reverse,
          r = i.length,
          a = 2 * o;
      this.props.collapse && (a = parseInt(this.state.style.animationDuration, 10), o = a / 2);
      var l = n ? r : 0;
      return i = i.map(function (e) {
        return "object" === (void 0 === e ? "undefined" : _typeof(e)) && e ? _react2.default.cloneElement(e, {
          style: _extends({}, e.props.style, t.state.style, {
            animationDuration: Math.round((0, _globals.cascade)(n ? l-- : l++, 0, r, o, a)) + "ms"
          })
        }) : e;
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function value(e) {
      if (void 0 !== e.when && (this.isOn = !!e.when), e.fraction !== this.props.fraction && this.observe(e, !0), !this.isOn && e.onExited && "exit" in e && !1 === e.exit) return void e.onExited();
      e.disabled || (e.collapse && !this.props.collapse && (this.setState({
        style: {},
        collapse: t.getInitialCollapseStyle(e)
      }), this.isShown = !1), e.when === this.props.when && e.spy === this.props.spy || this.reveal(e), this.onRevealTimeout && !this.isOn && (this.onRevealTimeout = window.clearTimeout(this.onRevealTimeout)));
    }
  }, {
    key: "getChild",
    value: function value() {
      if (this.savedChild && !this.props.disabled) return this.savedChild;

      if ("object" === _typeof(this.props.children)) {
        var e = _react2.default.Children.only(this.props.children);

        return "type" in e && "string" == typeof e.type || "ref" !== this.props.refProp ? e : _react2.default.createElement("div", null, e);
      }

      return _react2.default.createElement("div", null, this.props.children);
    }
  }, {
    key: "render",
    value: function value() {
      var e = void 0;
      e = this.state.hasAppeared ? !this.props.unmountOnExit || !this.state.hasExited || this.isOn : !this.props.mountOnEnter || this.isOn;
      var t = this.getChild();
      "function" == typeof t.ref && (this.childRef = t.ref);
      var i = !1,
          s = t.props,
          o = s.style,
          n = s.className,
          r = s.children,
          a = this.props.disabled ? n : (this.props.outEffect ? _globals.namespace : "") + (this.state.className ? " " + this.state.className : "") + (n ? " " + n : "") || void 0,
          l = void 0;
      "function" == typeof this.state.style.animationName && (this.state.style.animationName = this.state.style.animationName(!this.isOn, this.props)), this.props.cascade && !this.props.disabled && r && this.state.style.animationName ? (i = this.cascade(r), l = _extends({}, o, {
        opacity: 1
      })) : l = this.props.disabled ? o : _extends({}, o, this.state.style);

      var p = _extends({}, this.props.props, _defineProperty({
        className: a,
        style: l
      }, this.props.refProp, this.saveRef)),
          h = _react2.default.cloneElement(t, p, e ? i || r : void 0);

      return void 0 !== this.props.collapse ? this.props.collapseEl ? _react2.default.cloneElement(this.props.collapseEl, {
        style: _extends({}, this.props.collapseEl.style, this.props.disabled ? void 0 : this.state.collapse),
        children: h
      }) : _react2.default.createElement("div", {
        style: this.props.disabled ? void 0 : this.state.collapse,
        children: h
      }) : h;
    }
  }, {
    key: "makeHandler",
    value: function value(e) {
      var t = this,
          i = function i() {
        e.call(t, t.props), t.ticking = !1;
      };

      return function () {
        t.ticking || ((0, _globals.raf)(i), t.ticking = !0);
      };
    }
  }, {
    key: "inViewport",
    value: function value(e) {
      if (!this.el || window.document.hidden) return !1;
      var i = this.el.offsetHeight,
          s = window.pageYOffset - t.getTop(this.el),
          o = Math.min(i, window.innerHeight) * (_globals.globalHide ? e.fraction : 0);
      return s > o - window.innerHeight && s < i - o;
    }
  }, {
    key: "resize",
    value: function value(e) {
      this && this.el && this.isOn && this.inViewport(e) && (this.unlisten(), this.isShown = this.isOn, this.setState({
        hasExited: !this.isOn,
        hasAppeared: !0,
        collapse: void 0,
        style: {
          opacity: this.isOn || !e.outEffect ? 1 : 0
        }
      }), this.onReveal(e));
    }
  }, {
    key: "listen",
    value: function value() {
      _globals.observerMode || this.isListener || (this.isListener = !0, window.addEventListener("scroll", this.revealHandler, {
        passive: !0
      }), window.addEventListener("orientationchange", this.revealHandler, {
        passive: !0
      }), window.document.addEventListener("visibilitychange", this.revealHandler, {
        passive: !0
      }), window.document.addEventListener("collapseend", this.revealHandler, {
        passive: !0
      }), window.addEventListener("resize", this.resizeHandler, {
        passive: !0
      }));
    }
  }, {
    key: "unlisten",
    value: function value() {
      !_globals.observerMode && this.isListener && (window.removeEventListener("scroll", this.revealHandler, {
        passive: !0
      }), window.removeEventListener("orientationchange", this.revealHandler, {
        passive: !0
      }), window.document.removeEventListener("visibilitychange", this.revealHandler, {
        passive: !0
      }), window.document.removeEventListener("collapseend", this.revealHandler, {
        passive: !0
      }), window.removeEventListener("resize", this.resizeHandler, {
        passive: !0
      }), this.isListener = !1), this.onRevealTimeout && (this.onRevealTimeout = window.clearTimeout(this.onRevealTimeout)), this.animationEndTimeout && (this.animationEndTimeout = window.clearTimeout(this.animationEndTimeout));
    }
  }], [{
    key: "getInitialCollapseStyle",
    value: function value(e) {
      return {
        height: 0,
        visibility: e.when ? void 0 : "hidden"
      };
    }
  }, {
    key: "getTop",
    value: function value(e) {
      for (; void 0 === e.offsetTop;) {
        e = e.parentNode;
      }

      for (var t = e.offsetTop; e.offsetParent; t += e.offsetTop) {
        e = e.offsetParent;
      }

      return t;
    }
  }]), t;
}(_react2.default.Component);

RevealBase.propTypes = propTypes, RevealBase.defaultProps = defaultProps, RevealBase.contextTypes = contextTypes, RevealBase.displayName = "RevealBase", exports.default = RevealBase, module.exports = exports.default;

/***/ }),

/***/ "2gN3":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("Kz5y");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "3Fdi":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "49sm":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

/***/ }),

/***/ "5UwM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "chainPropTypes", function() { return /* reexport */ chainPropTypes; });
__webpack_require__.d(__webpack_exports__, "deepmerge", function() { return /* reexport */ deepmerge["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "elementAcceptingRef", function() { return /* reexport */ esm_elementAcceptingRef; });
__webpack_require__.d(__webpack_exports__, "elementTypeAcceptingRef", function() { return /* reexport */ esm_elementTypeAcceptingRef; });
__webpack_require__.d(__webpack_exports__, "exactProp", function() { return /* reexport */ exactProp; });
__webpack_require__.d(__webpack_exports__, "formatMuiErrorMessage", function() { return /* reexport */ formatMuiErrorMessage["a" /* default */]; });
__webpack_require__.d(__webpack_exports__, "getDisplayName", function() { return /* reexport */ getDisplayName; });
__webpack_require__.d(__webpack_exports__, "HTMLElementType", function() { return /* reexport */ HTMLElementType; });
__webpack_require__.d(__webpack_exports__, "ponyfillGlobal", function() { return /* reexport */ ponyfillGlobal; });
__webpack_require__.d(__webpack_exports__, "refType", function() { return /* reexport */ esm_refType; });

// CONCATENATED MODULE: ./node_modules/@material-ui/utils/esm/chainPropTypes.js
function chainPropTypes(propType1, propType2) {
  if (true) {
    return function () {
      return null;
    };
  }

  return function validate() {
    return propType1.apply(void 0, arguments) || propType2.apply(void 0, arguments);
  };
}
// EXTERNAL MODULE: ./node_modules/@material-ui/utils/esm/deepmerge.js
var deepmerge = __webpack_require__("2+6g");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("17x9");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./node_modules/@material-ui/utils/esm/elementAcceptingRef.js



function isClassComponent(elementType) {
  // elementType.prototype?.isReactComponent
  var _elementType$prototyp = elementType.prototype,
      prototype = _elementType$prototyp === void 0 ? {} : _elementType$prototyp;
  return Boolean(prototype.isReactComponent);
}

function acceptingRef(props, propName, componentName, location, propFullName) {
  var element = props[propName];
  var safePropName = propFullName || propName;

  if (element == null) {
    return null;
  }

  var warningHint;
  var elementType = element.type;
  /**
   * Blacklisting instead of whitelisting
   *
   * Blacklisting will miss some components, such as React.Fragment. Those will at least
   * trigger a warning in React.
   * We can't whitelist because there is no safe way to detect React.forwardRef
   * or class components. "Safe" means there's no public API.
   *
   */

  if (typeof elementType === 'function' && !isClassComponent(elementType)) {
    warningHint = 'Did you accidentally use a plain function component for an element instead?';
  }

  if (warningHint !== undefined) {
    return new Error("Invalid ".concat(location, " `").concat(safePropName, "` supplied to `").concat(componentName, "`. ") + "Expected an element that can hold a ref. ".concat(warningHint, " ") + 'For more information see https://material-ui.com/r/caveat-with-refs-guide');
  }

  return null;
}

var elementAcceptingRef = chainPropTypes(prop_types_default.a.element, acceptingRef);
elementAcceptingRef.isRequired = chainPropTypes(prop_types_default.a.element.isRequired, acceptingRef);
/* harmony default export */ var esm_elementAcceptingRef = (elementAcceptingRef);
// CONCATENATED MODULE: ./node_modules/@material-ui/utils/esm/elementTypeAcceptingRef.js



function elementTypeAcceptingRef_isClassComponent(elementType) {
  // elementType.prototype?.isReactComponent
  var _elementType$prototyp = elementType.prototype,
      prototype = _elementType$prototyp === void 0 ? {} : _elementType$prototyp;
  return Boolean(prototype.isReactComponent);
}

function elementTypeAcceptingRef(props, propName, componentName, location, propFullName) {
  var propValue = props[propName];
  var safePropName = propFullName || propName;

  if (propValue == null) {
    return null;
  }

  var warningHint;
  /**
   * Blacklisting instead of whitelisting
   *
   * Blacklisting will miss some components, such as React.Fragment. Those will at least
   * trigger a warning in React.
   * We can't whitelist because there is no safe way to detect React.forwardRef
   * or class components. "Safe" means there's no public API.
   *
   */

  if (typeof propValue === 'function' && !elementTypeAcceptingRef_isClassComponent(propValue)) {
    warningHint = 'Did you accidentally provide a plain function component instead?';
  }

  if (warningHint !== undefined) {
    return new Error("Invalid ".concat(location, " `").concat(safePropName, "` supplied to `").concat(componentName, "`. ") + "Expected an element type that can hold a ref. ".concat(warningHint, " ") + 'For more information see https://material-ui.com/r/caveat-with-refs-guide');
  }

  return null;
}

/* harmony default export */ var esm_elementTypeAcceptingRef = (chainPropTypes(prop_types["elementType"], elementTypeAcceptingRef));
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("rePB");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// CONCATENATED MODULE: ./node_modules/@material-ui/utils/esm/exactProp.js

 // This module is based on https://github.com/airbnb/prop-types-exact repository.
// However, in order to reduce the number of dependencies and to remove some extra safe checks
// the module was forked.
// Only exported for test purposes.

var specialProperty = "exact-prop: \u200B";
function exactProp(propTypes) {
  if (true) {
    return propTypes;
  }

  return Object(esm_extends["a" /* default */])({}, propTypes, Object(defineProperty["a" /* default */])({}, specialProperty, function (props) {
    var unsupportedProps = Object.keys(props).filter(function (prop) {
      return !propTypes.hasOwnProperty(prop);
    });

    if (unsupportedProps.length > 0) {
      return new Error("The following props are not supported: ".concat(unsupportedProps.map(function (prop) {
        return "`".concat(prop, "`");
      }).join(', '), ". Please remove them."));
    }

    return null;
  }));
}
// EXTERNAL MODULE: ./node_modules/@material-ui/utils/esm/formatMuiErrorMessage.js
var formatMuiErrorMessage = __webpack_require__("TrhM");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("U8pU");

// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__("TOwV");

// CONCATENATED MODULE: ./node_modules/@material-ui/utils/esm/getDisplayName.js

 // Simplified polyfill for IE 11 support
// https://github.com/JamesMGreene/Function.name/blob/58b314d4a983110c3682f1228f845d39ccca1817/Function.name.js#L3

var fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function getFunctionName(fn) {
  var match = "".concat(fn).match(fnNameMatchRegex);
  var name = match && match[1];
  return name || '';
}
/**
 * @param {function} Component
 * @param {string} fallback
 * @returns {string | undefined}
 */

function getFunctionComponentName(Component) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return Component.displayName || Component.name || getFunctionName(Component) || fallback;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== '' ? "".concat(wrapperName, "(").concat(functionName, ")") : wrapperName);
}
/**
 * cherry-pick from
 * https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/getComponentName.js
 * originally forked from recompose/getDisplayName with added IE 11 support
 *
 * @param {React.ReactType} Component
 * @returns {string | undefined}
 */


function getDisplayName(Component) {
  if (Component == null) {
    return undefined;
  }

  if (typeof Component === 'string') {
    return Component;
  }

  if (typeof Component === 'function') {
    return getFunctionComponentName(Component, 'Component');
  }

  if (Object(esm_typeof["a" /* default */])(Component) === 'object') {
    switch (Component.$$typeof) {
      case react_is["ForwardRef"]:
        return getWrappedName(Component, Component.render, 'ForwardRef');

      case react_is["Memo"]:
        return getWrappedName(Component, Component.type, 'memo');

      default:
        return undefined;
    }
  }

  return undefined;
}
// CONCATENATED MODULE: ./node_modules/@material-ui/utils/esm/HTMLElementType.js
function HTMLElementType(props, propName, componentName, location, propFullName) {
  if (true) {
    return null;
  }

  var propValue = props[propName];
  var safePropName = propFullName || propName;

  if (propValue == null) {
    return null;
  }

  if (propValue && propValue.nodeType !== 1) {
    return new Error("Invalid ".concat(location, " `").concat(safePropName, "` supplied to `").concat(componentName, "`. ") + "Expected an HTMLElement.");
  }

  return null;
}
// CONCATENATED MODULE: ./node_modules/@material-ui/utils/esm/ponyfillGlobal.js
/* eslint-disable */
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
/* harmony default export */ var ponyfillGlobal = (typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')());
// CONCATENATED MODULE: ./node_modules/@material-ui/utils/esm/refType.js

var refType = prop_types_default.a.oneOfType([prop_types_default.a.func, prop_types_default.a.object]);
/* harmony default export */ var esm_refType = (refType);
// CONCATENATED MODULE: ./node_modules/@material-ui/utils/esm/index.js
/** @license Material-UI v4.11.2
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */











/***/ }),

/***/ "6sVZ":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "7pJ2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/avatar-397732c2065b1a5e2844507c63d4e098.jpg";

/***/ }),

/***/ "8L3F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("E9XD");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0__);


/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1-lts
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];

  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }

  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }

    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;
/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/

var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */

function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}
/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */


function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  } // NOTE: 1 DOM access here


  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}
/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */


function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }

  return element.parentNode || element.host;
}
/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */


function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;

    case '#document':
      return element.body;
  } // Firefox want us to check `-x` and `-y` variations as well


  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}
/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */


function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */

function isIE(version) {
  if (version === 11) {
    return isIE11;
  }

  if (version === 10) {
    return isIE10;
  }

  return isIE11 || isIE10;
}
/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */


function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null; // NOTE: 1 DOM access here

  var offsetParent = element.offsetParent || null; // Skip hidden elements which don't have an offsetParent

  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  } // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...


  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }

  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}
/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */


function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}
/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */


function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  } // Here we make sure to give as "start" the element that comes first in the DOM


  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1; // Get common ancestor container

  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  } // one of the nodes is inside shadowDOM, find which one


  var element1root = getRoot(element1);

  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}
/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */


function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}
/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */


function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}
/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */


function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);
  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

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

var defineProperty = function defineProperty(obj, key, value) {
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
};

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
/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */


function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}
/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */


function getBoundingClientRect(element) {
  var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11

  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  }; // subtract scrollbar size from sizes

  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;
  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons

  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);
  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth); // In cases where the parent is fixed, we must ignore negative scroll in offset calc

  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.

  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);
    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);
  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };
  return getClientRect(offset);
}
/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */


function isFixed(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }

  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }

  var parentNode = getParentNode(element);

  if (!parentNode) {
    return false;
  }

  return isFixed(parentNode);
}
/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */


function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }

  var el = element.parentElement;

  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }

  return el || document.documentElement;
}
/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */


function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false; // NOTE: 1 DOM access here

  var boundaries = {
    top: 0,
    left: 0
  };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference)); // Handle viewport case

  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;

    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));

      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition); // In case of HTML, we need a different computation

    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  } // Add paddings


  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;
  return width * height;
}
/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };
  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });
  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });
  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
  var variation = placement.split('-')[1];
  return computedPlacement + (variation ? '-' + variation : '');
}
/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */


function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */


function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}
/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */


function getOppositePlacement(placement) {
  var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */


function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0]; // Get popper node sizes

  var popperRect = getOuterSizes(popper); // Add position, width and height to our offsets object

  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  }; // depending by the popper placement we have to compute its offsets slightly differently

  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';
  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;

  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}
/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  } // use `filter` to obtain the same behavior of `find`


  return arr.filter(check)[0];
}
/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  } // use `find` + `indexOf` if `findIndex` isn't supported


  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}
/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */


function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }

    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation

    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);
      data = fn(data, modifier);
    }
  });
  return data;
}
/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */


function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  }; // compute reference element offsets

  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding); // store the computed placement inside `originalPlacement`

  data.originalPlacement = data.placement;
  data.positionFixed = this.options.positionFixed; // compute the popper offsets

  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'; // run the modifiers

  data = runModifiers(this.modifiers, data); // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback

  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}
/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */


function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}
/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */


function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;

    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }

  return null;
}
/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */


function destroy() {
  this.state.isDestroyed = true; // touch DOM only if `applyStyle` modifier is enabled

  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners(); // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it

  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }

  return this;
}
/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */


function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, {
    passive: true
  });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }

  scrollParents.push(target);
}
/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, {
    passive: true
  }); // Scroll event listener on scroll parents

  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;
  return state;
}
/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */


function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}
/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound); // Remove scroll event listener on scroll parents

  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  }); // Reset state

  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}
/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */


function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}
/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */


function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = ''; // add unit if the value is numeric and is one of the following

    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }

    element.style[prop] = styles[prop] + unit;
  });
}
/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];

    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */


function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles); // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element

  setAttributes(data.instance.popper, data.attributes); // if arrowElement is defined and arrowStyles has some properties

  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}
/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */


function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
  popper.setAttribute('x-placement', placement); // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations

  setStyles(popper, {
    position: options.positionFixed ? 'fixed' : 'absolute'
  });
  return options;
}
/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */


function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);
  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;
  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper; // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;

  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }

  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent); // Styles

  var styles = {
    position: popper.position
  };
  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right'; // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed

  var prefixedProperty = getSupportedPropertyName('transform'); // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.

  var left = void 0,
      top = void 0;

  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }

  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }

  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  } // Attributes


  var attributes = {
    'x-placement': data.placement
  }; // Update `data` attributes, styles and arrowStyles

  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
  return data;
}
/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */


function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });
  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';

    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }

  return isRequired;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function arrow(data, options) {
  var _data$offsets$arrow; // arrow depends on keepTogether in order to work


  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element; // if arrowElement is a string, suppose it's a CSS selector

  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement); // if arrowElement is not found, don't run the modifier

    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isVertical = ['left', 'right'].indexOf(placement) !== -1;
  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len]; //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //
  // top/left side

  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  } // bottom/right side


  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  data.offsets.popper = getClientRect(data.offsets.popper); // compute center of the popper

  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2; // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available

  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide; // prevent arrowElement from being placed not contiguously to its popper

  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
  return data;
}
/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */


function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }

  return variation;
}
/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */


var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']; // Get rid of `auto` `auto-start` and `auto-end`

var validPlacements = placements.slice(3);
/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */

function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';
  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;

    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;

    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;

    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);
    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference; // using floor because the reference offsets may contain decimals we are not going to consider here

    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1; // flips variation if reference element overflows boundaries

    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom); // flips variation if popper content overflows boundaries

    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);
    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : ''); // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future

      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }

  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}
/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */


function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2]; // If it's not a number it's an operator, I guess

  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;

    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;

      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;

    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }

    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}
/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */


function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0]; // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one

  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1; // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)

  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  }); // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space

  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  } // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.


  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments]; // Convert the values with units to absolute pixels to allow our computations

  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, []) // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  }); // Loop trough the offsets arrays and execute the operations

  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */


function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var basePlacement = placement.split('-')[0];
  var offsets = void 0;

  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper); // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken

  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  } // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself


  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification

  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];
  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed); // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed

  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;
  options.boundaries = boundaries;
  var order = options.priority;
  var popper = data.offsets.popper;
  var check = {
    primary: function primary(placement) {
      var value = popper[placement];

      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }

      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];

      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }

      return defineProperty({}, mainSide, value);
    }
  };
  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });
  data.offsets.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1]; // if shift shiftvariation is specified, run the modifier

  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;
    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';
    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };
    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);
  return data;
}
/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */


var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: offset,

    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: preventOverflow,

    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],

    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: arrow,

    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: flip,

    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',

    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',

    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,

    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,

    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,

    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: computeStyle,

    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,

    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',

    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: applyStyle,

    /** @prop {Function} */
    onLoad: applyStyleOnLoad,

    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};
/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */

var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};
/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */
// Utils
// Methods

var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    }; // make update() debounced, so that it only runs at most once-per-tick


    this.update = debounce(this.update.bind(this)); // with {} we create a new object with the options inside it

    this.options = _extends({}, Popper.Defaults, options); // init state

    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    }; // get reference and popper elements (allow jQuery wrappers)

    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper; // Deep merge modifiers options

    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    }); // Refactoring modifiers' list (Object => Array)

    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    }) // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    }); // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!

    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    }); // fire the first update to position the popper in the right place

    this.update();
    var eventsEnabled = this.options.eventsEnabled;

    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  } // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }
    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */

    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();
/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
/* harmony default export */ __webpack_exports__["a"] = (Popper);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("yLpj")))

/***/ }),

/***/ "8oxB":
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "9eSz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__("TqRt");exports.__esModule=true;exports.default=void 0;var _assertThisInitialized2=_interopRequireDefault(__webpack_require__("PJYZ"));var _inheritsLoose2=_interopRequireDefault(__webpack_require__("VbXa"));var _objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__("8OQS"));var _extends2=_interopRequireDefault(__webpack_require__("pVnL"));var _react=_interopRequireDefault(__webpack_require__("q1tI"));var _propTypes=_interopRequireDefault(__webpack_require__("17x9"));var logDeprecationNotice=function logDeprecationNotice(prop,replacement){if(true){return;}console.log("\n    The \""+prop+"\" prop is now deprecated and will be removed in the next major version\n    of \"gatsby-image\".\n    ");if(replacement){console.log("Please use "+replacement+" instead of \""+prop+"\".");}};// Handle legacy props during their deprecation phase
var convertProps=function convertProps(props){var convertedProps=(0,_extends2.default)({},props);var resolutions=convertedProps.resolutions,sizes=convertedProps.sizes,critical=convertedProps.critical;if(resolutions){convertedProps.fixed=resolutions;logDeprecationNotice("resolutions","the gatsby-image v2 prop \"fixed\"");delete convertedProps.resolutions;}if(sizes){convertedProps.fluid=sizes;logDeprecationNotice("sizes","the gatsby-image v2 prop \"fluid\"");delete convertedProps.sizes;}if(critical){logDeprecationNotice("critical","the native \"loading\" attribute");convertedProps.loading="eager";}// convert fluid & fixed to arrays so we only have to work with arrays
if(convertedProps.fluid){convertedProps.fluid=groupByMedia([].concat(convertedProps.fluid));}if(convertedProps.fixed){convertedProps.fixed=groupByMedia([].concat(convertedProps.fixed));}return convertedProps;};/**
 * Checks if fluid or fixed are art-direction arrays.
 *
 * @param currentData  {{media?: string}[]}   The props to check for images.
 * @return {boolean}
 */var hasArtDirectionSupport=function hasArtDirectionSupport(currentData){return!!currentData&&Array.isArray(currentData)&&currentData.some(function(image){return typeof image.media!=="undefined";});};/**
 * Tries to detect if a media query matches the current viewport.
 * @property media   {{media?: string}}  A media query string.
 * @return {boolean}
 */var matchesMedia=function matchesMedia(_ref){var media=_ref.media;return media?isBrowser&&!!window.matchMedia(media).matches:false;};/**
 * Find the source of an image to use as a key in the image cache.
 * Use `the first image in either `fixed` or `fluid`
 * @param {{fluid: {src: string, media?: string}[], fixed: {src: string, media?: string}[]}} args
 * @return {string?} Returns image src or undefined it not given.
 */var getImageCacheKey=function getImageCacheKey(_ref2){var fluid=_ref2.fluid,fixed=_ref2.fixed;var srcData=getCurrentSrcData(fluid||fixed||[]);return srcData&&srcData.src;};/**
 * Returns the current src - Preferably with art-direction support.
 * @param currentData  {{media?: string}[], maxWidth?: Number, maxHeight?: Number}   The fluid or fixed image array.
 * @return {{src: string, media?: string, maxWidth?: Number, maxHeight?: Number}}
 */var getCurrentSrcData=function getCurrentSrcData(currentData){if(isBrowser&&hasArtDirectionSupport(currentData)){// Do we have an image for the current Viewport?
var foundMedia=currentData.findIndex(matchesMedia);if(foundMedia!==-1){return currentData[foundMedia];}// No media matches, select first element without a media condition
var noMedia=currentData.findIndex(function(image){return typeof image.media==="undefined";});if(noMedia!==-1){return currentData[noMedia];}}// Else return the first image.
return currentData[0];};// Cache if we've seen an image before so we don't bother with
// lazy-loading & fading in on subsequent mounts.
var imageCache=Object.create({});var inImageCache=function inImageCache(props){var convertedProps=convertProps(props);var cacheKey=getImageCacheKey(convertedProps);return imageCache[cacheKey]||false;};var activateCacheForImage=function activateCacheForImage(props){var convertedProps=convertProps(props);var cacheKey=getImageCacheKey(convertedProps);if(cacheKey){imageCache[cacheKey]=true;}};// Native lazy-loading support: https://addyosmani.com/blog/lazy-loading/
var hasNativeLazyLoadSupport=typeof HTMLImageElement!=="undefined"&&"loading"in HTMLImageElement.prototype;var isBrowser=typeof window!=="undefined";var hasIOSupport=isBrowser&&window.IntersectionObserver;var io;var listeners=new WeakMap();function getIO(){if(typeof io==="undefined"&&typeof window!=="undefined"&&window.IntersectionObserver){io=new window.IntersectionObserver(function(entries){entries.forEach(function(entry){if(listeners.has(entry.target)){var cb=listeners.get(entry.target);// Edge doesn't currently support isIntersecting, so also test for an intersectionRatio > 0
if(entry.isIntersecting||entry.intersectionRatio>0){io.unobserve(entry.target);listeners.delete(entry.target);cb();}}});},{rootMargin:"200px"});}return io;}function generateImageSources(imageVariants){return imageVariants.map(function(_ref3){var src=_ref3.src,srcSet=_ref3.srcSet,srcSetWebp=_ref3.srcSetWebp,media=_ref3.media,sizes=_ref3.sizes;return/*#__PURE__*/_react.default.createElement(_react.default.Fragment,{key:src},srcSetWebp&&/*#__PURE__*/_react.default.createElement("source",{type:"image/webp",media:media,srcSet:srcSetWebp,sizes:sizes}),srcSet&&/*#__PURE__*/_react.default.createElement("source",{media:media,srcSet:srcSet,sizes:sizes}));});}// Return an array ordered by elements having a media prop, does not use
// native sort, as a stable sort is not guaranteed by all browsers/versions
function groupByMedia(imageVariants){var withMedia=[];var without=[];imageVariants.forEach(function(variant){return(variant.media?withMedia:without).push(variant);});if(without.length>1&&"production"!=="production"){console.warn("We've found "+without.length+" sources without a media property. They might be ignored by the browser, see: https://www.gatsbyjs.org/packages/gatsby-image/#art-directing-multiple-images");}return[].concat(withMedia,without);}function generateTracedSVGSources(imageVariants){return imageVariants.map(function(_ref4){var src=_ref4.src,media=_ref4.media,tracedSVG=_ref4.tracedSVG;return/*#__PURE__*/_react.default.createElement("source",{key:src,media:media,srcSet:tracedSVG});});}function generateBase64Sources(imageVariants){return imageVariants.map(function(_ref5){var src=_ref5.src,media=_ref5.media,base64=_ref5.base64;return/*#__PURE__*/_react.default.createElement("source",{key:src,media:media,srcSet:base64});});}function generateNoscriptSource(_ref6,isWebp){var srcSet=_ref6.srcSet,srcSetWebp=_ref6.srcSetWebp,media=_ref6.media,sizes=_ref6.sizes;var src=isWebp?srcSetWebp:srcSet;var mediaAttr=media?"media=\""+media+"\" ":"";var typeAttr=isWebp?"type='image/webp' ":"";var sizesAttr=sizes?"sizes=\""+sizes+"\" ":"";return"<source "+typeAttr+mediaAttr+"srcset=\""+src+"\" "+sizesAttr+"/>";}function generateNoscriptSources(imageVariants){return imageVariants.map(function(variant){return(variant.srcSetWebp?generateNoscriptSource(variant,true):"")+generateNoscriptSource(variant);}).join("");}var listenToIntersections=function listenToIntersections(el,cb){var observer=getIO();if(observer){observer.observe(el);listeners.set(el,cb);}return function(){observer.unobserve(el);listeners.delete(el);};};var noscriptImg=function noscriptImg(props){// Check if prop exists before adding each attribute to the string output below to prevent
// HTML validation issues caused by empty values like width="" and height=""
var src=props.src?"src=\""+props.src+"\" ":"src=\"\" ";// required attribute
var sizes=props.sizes?"sizes=\""+props.sizes+"\" ":"";var srcSet=props.srcSet?"srcset=\""+props.srcSet+"\" ":"";var title=props.title?"title=\""+props.title+"\" ":"";var alt=props.alt?"alt=\""+props.alt+"\" ":"alt=\"\" ";// required attribute
var width=props.width?"width=\""+props.width+"\" ":"";var height=props.height?"height=\""+props.height+"\" ":"";var crossOrigin=props.crossOrigin?"crossorigin=\""+props.crossOrigin+"\" ":"";var loading=props.loading?"loading=\""+props.loading+"\" ":"";var draggable=props.draggable?"draggable=\""+props.draggable+"\" ":"";var sources=generateNoscriptSources(props.imageVariants);return"<picture>"+sources+"<img "+loading+width+height+sizes+srcSet+src+alt+title+crossOrigin+draggable+"style=\"position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center\"/></picture>";};// Earlier versions of gatsby-image during the 2.x cycle did not wrap
// the `Img` component in a `picture` element. This maintains compatibility
// until a breaking change can be introduced in the next major release
var Placeholder=/*#__PURE__*/_react.default.forwardRef(function(props,ref){var src=props.src,imageVariants=props.imageVariants,generateSources=props.generateSources,spreadProps=props.spreadProps,ariaHidden=props.ariaHidden;var baseImage=/*#__PURE__*/_react.default.createElement(Img,(0,_extends2.default)({ref:ref,src:src},spreadProps,{ariaHidden:ariaHidden}));return imageVariants.length>1?/*#__PURE__*/_react.default.createElement("picture",null,generateSources(imageVariants),baseImage):baseImage;});var Img=/*#__PURE__*/_react.default.forwardRef(function(props,ref){var sizes=props.sizes,srcSet=props.srcSet,src=props.src,style=props.style,onLoad=props.onLoad,onError=props.onError,loading=props.loading,draggable=props.draggable,ariaHidden=props.ariaHidden,otherProps=(0,_objectWithoutPropertiesLoose2.default)(props,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return/*#__PURE__*/_react.default.createElement("img",(0,_extends2.default)({"aria-hidden":ariaHidden,sizes:sizes,srcSet:srcSet,src:src},otherProps,{onLoad:onLoad,onError:onError,ref:ref,loading:loading,draggable:draggable,style:(0,_extends2.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},style)}));});Img.propTypes={style:_propTypes.default.object,onError:_propTypes.default.func,onLoad:_propTypes.default.func};var Image=/*#__PURE__*/function(_React$Component){(0,_inheritsLoose2.default)(Image,_React$Component);function Image(props){var _this;_this=_React$Component.call(this,props)||this;// If this image has already been loaded before then we can assume it's
// already in the browser cache so it's cheap to just show directly.
_this.seenBefore=isBrowser&&inImageCache(props);_this.isCritical=props.loading==="eager"||props.critical;_this.addNoScript=!(_this.isCritical&&!props.fadeIn);_this.useIOSupport=!hasNativeLazyLoadSupport&&hasIOSupport&&!_this.isCritical&&!_this.seenBefore;var isVisible=_this.isCritical||isBrowser&&(hasNativeLazyLoadSupport||!_this.useIOSupport);_this.state={isVisible:isVisible,imgLoaded:false,imgCached:false,fadeIn:!_this.seenBefore&&props.fadeIn,isHydrated:false};_this.imageRef=/*#__PURE__*/_react.default.createRef();_this.placeholderRef=props.placeholderRef||/*#__PURE__*/_react.default.createRef();_this.handleImageLoaded=_this.handleImageLoaded.bind((0,_assertThisInitialized2.default)(_this));_this.handleRef=_this.handleRef.bind((0,_assertThisInitialized2.default)(_this));return _this;}var _proto=Image.prototype;_proto.componentDidMount=function componentDidMount(){this.setState({isHydrated:isBrowser});if(this.state.isVisible&&typeof this.props.onStartLoad==="function"){this.props.onStartLoad({wasCached:inImageCache(this.props)});}if(this.isCritical){var img=this.imageRef.current;if(img&&img.complete){this.handleImageLoaded();}}};_proto.componentWillUnmount=function componentWillUnmount(){if(this.cleanUpListeners){this.cleanUpListeners();}}// Specific to IntersectionObserver based lazy-load support
;_proto.handleRef=function handleRef(ref){var _this2=this;if(this.useIOSupport&&ref){this.cleanUpListeners=listenToIntersections(ref,function(){var imageInCache=inImageCache(_this2.props);if(!_this2.state.isVisible&&typeof _this2.props.onStartLoad==="function"){_this2.props.onStartLoad({wasCached:imageInCache});}// imgCached and imgLoaded must update after isVisible,
// Once isVisible is true, imageRef becomes accessible, which imgCached needs access to.
// imgLoaded and imgCached are in a 2nd setState call to be changed together,
// avoiding initiating unnecessary animation frames from style changes.
_this2.setState({isVisible:true},function(){_this2.setState({imgLoaded:imageInCache,// `currentSrc` should be a string, but can be `undefined` in IE,
// !! operator validates the value is not undefined/null/""
// for lazyloaded components this might be null
// TODO fix imgCached behaviour as it's now false when it's lazyloaded
imgCached:!!(_this2.imageRef.current&&_this2.imageRef.current.currentSrc)});});});}};_proto.handleImageLoaded=function handleImageLoaded(){activateCacheForImage(this.props);this.setState({imgLoaded:true});if(this.props.onLoad){this.props.onLoad();}};_proto.render=function render(){var _convertProps=convertProps(this.props),title=_convertProps.title,alt=_convertProps.alt,className=_convertProps.className,_convertProps$style=_convertProps.style,style=_convertProps$style===void 0?{}:_convertProps$style,_convertProps$imgStyl=_convertProps.imgStyle,imgStyle=_convertProps$imgStyl===void 0?{}:_convertProps$imgStyl,_convertProps$placeho=_convertProps.placeholderStyle,placeholderStyle=_convertProps$placeho===void 0?{}:_convertProps$placeho,placeholderClassName=_convertProps.placeholderClassName,fluid=_convertProps.fluid,fixed=_convertProps.fixed,backgroundColor=_convertProps.backgroundColor,durationFadeIn=_convertProps.durationFadeIn,Tag=_convertProps.Tag,itemProp=_convertProps.itemProp,loading=_convertProps.loading,draggable=_convertProps.draggable;var imageVariants=fluid||fixed;// Abort early if missing image data (#25371)
if(!imageVariants){return null;}var shouldReveal=this.state.fadeIn===false||this.state.imgLoaded;var shouldFadeIn=this.state.fadeIn===true&&!this.state.imgCached;var imageStyle=(0,_extends2.default)({opacity:shouldReveal?1:0,transition:shouldFadeIn?"opacity "+durationFadeIn+"ms":"none"},imgStyle);var bgColor=typeof backgroundColor==="boolean"?"lightgray":backgroundColor;var delayHideStyle={transitionDelay:durationFadeIn+"ms"};var imagePlaceholderStyle=(0,_extends2.default)({opacity:this.state.imgLoaded?0:1},shouldFadeIn&&delayHideStyle,imgStyle,placeholderStyle);var placeholderImageProps={title:title,alt:!this.state.isVisible?alt:"",style:imagePlaceholderStyle,className:placeholderClassName,itemProp:itemProp};// Initial client render state needs to match SSR until hydration finishes.
// Once hydration completes, render again to update to the correct image.
// `imageVariants` is always an Array type at this point due to `convertProps()`
var image=!this.state.isHydrated?imageVariants[0]:getCurrentSrcData(imageVariants);if(fluid){return/*#__PURE__*/_react.default.createElement(Tag,{className:(className?className:"")+" gatsby-image-wrapper",style:(0,_extends2.default)({position:"relative",overflow:"hidden",maxWidth:image.maxWidth?image.maxWidth+"px":null,maxHeight:image.maxHeight?image.maxHeight+"px":null},style),ref:this.handleRef,key:"fluid-"+JSON.stringify(image.srcSet)},/*#__PURE__*/_react.default.createElement(Tag,{"aria-hidden":true,style:{width:"100%",paddingBottom:100/image.aspectRatio+"%"}}),bgColor&&/*#__PURE__*/_react.default.createElement(Tag,{"aria-hidden":true,title:title,style:(0,_extends2.default)({backgroundColor:bgColor,position:"absolute",top:0,bottom:0,opacity:!this.state.imgLoaded?1:0,right:0,left:0},shouldFadeIn&&delayHideStyle)}),image.base64&&/*#__PURE__*/_react.default.createElement(Placeholder,{ariaHidden:true,ref:this.placeholderRef,src:image.base64,spreadProps:placeholderImageProps,imageVariants:imageVariants,generateSources:generateBase64Sources}),image.tracedSVG&&/*#__PURE__*/_react.default.createElement(Placeholder,{ariaHidden:true,ref:this.placeholderRef,src:image.tracedSVG,spreadProps:placeholderImageProps,imageVariants:imageVariants,generateSources:generateTracedSVGSources}),this.state.isVisible&&/*#__PURE__*/_react.default.createElement("picture",null,generateImageSources(imageVariants),/*#__PURE__*/_react.default.createElement(Img,{alt:alt,title:title,sizes:image.sizes,src:image.src,crossOrigin:this.props.crossOrigin,srcSet:image.srcSet,style:imageStyle,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:itemProp,loading:loading,draggable:draggable})),this.addNoScript&&/*#__PURE__*/_react.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:noscriptImg((0,_extends2.default)({alt:alt,title:title,loading:loading},image,{imageVariants:imageVariants}))}}));}if(fixed){var divStyle=(0,_extends2.default)({position:"relative",overflow:"hidden",display:"inline-block",width:image.width,height:image.height},style);if(style.display==="inherit"){delete divStyle.display;}return/*#__PURE__*/_react.default.createElement(Tag,{className:(className?className:"")+" gatsby-image-wrapper",style:divStyle,ref:this.handleRef,key:"fixed-"+JSON.stringify(image.srcSet)},bgColor&&/*#__PURE__*/_react.default.createElement(Tag,{"aria-hidden":true,title:title,style:(0,_extends2.default)({backgroundColor:bgColor,width:image.width,opacity:!this.state.imgLoaded?1:0,height:image.height},shouldFadeIn&&delayHideStyle)}),image.base64&&/*#__PURE__*/_react.default.createElement(Placeholder,{ariaHidden:true,ref:this.placeholderRef,src:image.base64,spreadProps:placeholderImageProps,imageVariants:imageVariants,generateSources:generateBase64Sources}),image.tracedSVG&&/*#__PURE__*/_react.default.createElement(Placeholder,{ariaHidden:true,ref:this.placeholderRef,src:image.tracedSVG,spreadProps:placeholderImageProps,imageVariants:imageVariants,generateSources:generateTracedSVGSources}),this.state.isVisible&&/*#__PURE__*/_react.default.createElement("picture",null,generateImageSources(imageVariants),/*#__PURE__*/_react.default.createElement(Img,{alt:alt,title:title,width:image.width,height:image.height,sizes:image.sizes,src:image.src,crossOrigin:this.props.crossOrigin,srcSet:image.srcSet,style:imageStyle,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:itemProp,loading:loading,draggable:draggable})),this.addNoScript&&/*#__PURE__*/_react.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:noscriptImg((0,_extends2.default)({alt:alt,title:title,loading:loading},image,{imageVariants:imageVariants}))}}));}return null;};return Image;}(_react.default.Component);Image.defaultProps={fadeIn:true,durationFadeIn:500,alt:"",Tag:"div",// We set it to `lazy` by default because it's best to default to a performant
// setting and let the user "opt out" to `eager`
loading:"lazy"};var fixedObject=_propTypes.default.shape({width:_propTypes.default.number.isRequired,height:_propTypes.default.number.isRequired,src:_propTypes.default.string.isRequired,srcSet:_propTypes.default.string.isRequired,base64:_propTypes.default.string,tracedSVG:_propTypes.default.string,srcWebp:_propTypes.default.string,srcSetWebp:_propTypes.default.string,media:_propTypes.default.string});var fluidObject=_propTypes.default.shape({aspectRatio:_propTypes.default.number.isRequired,src:_propTypes.default.string.isRequired,srcSet:_propTypes.default.string.isRequired,sizes:_propTypes.default.string.isRequired,base64:_propTypes.default.string,tracedSVG:_propTypes.default.string,srcWebp:_propTypes.default.string,srcSetWebp:_propTypes.default.string,media:_propTypes.default.string,maxWidth:_propTypes.default.number,maxHeight:_propTypes.default.number});function requireFixedOrFluid(originalPropTypes){return function(props,propName,componentName){var _PropTypes$checkPropT;if(!props.fixed&&!props.fluid){throw new Error("The prop `fluid` or `fixed` is marked as required in `"+componentName+"`, but their values are both `undefined`.");}_propTypes.default.checkPropTypes((_PropTypes$checkPropT={},_PropTypes$checkPropT[propName]=originalPropTypes,_PropTypes$checkPropT),props,"prop",componentName);};}// If you modify these propTypes, please don't forget to update following files as well:
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/index.d.ts
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/README.md#gatsby-image-props
// https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/gatsby-image.md#gatsby-image-props
Image.propTypes={resolutions:fixedObject,sizes:fluidObject,fixed:requireFixedOrFluid(_propTypes.default.oneOfType([fixedObject,_propTypes.default.arrayOf(fixedObject)])),fluid:requireFixedOrFluid(_propTypes.default.oneOfType([fluidObject,_propTypes.default.arrayOf(fluidObject)])),fadeIn:_propTypes.default.bool,durationFadeIn:_propTypes.default.number,title:_propTypes.default.string,alt:_propTypes.default.string,className:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.object]),// Support Glamor's css prop.
critical:_propTypes.default.bool,crossOrigin:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.bool]),style:_propTypes.default.object,imgStyle:_propTypes.default.object,placeholderStyle:_propTypes.default.object,placeholderClassName:_propTypes.default.string,backgroundColor:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.bool]),onLoad:_propTypes.default.func,onError:_propTypes.default.func,onStartLoad:_propTypes.default.func,Tag:_propTypes.default.string,itemProp:_propTypes.default.string,loading:_propTypes.default.oneOf(["auto","lazy","eager"]),draggable:_propTypes.default.bool};var _default=Image;exports.default=_default;

/***/ }),

/***/ "A90E":
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__("6sVZ"),
    nativeKeys = __webpack_require__("V6Ve");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "AP2z":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("nmnc");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "B6OW":
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
  d: "M7 10l5 5 5-5z"
}), 'ArrowDropDown');

exports.default = _default;

/***/ }),

/***/ "B8du":
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "Cwc5":
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__("NKxu"),
    getValue = __webpack_require__("Npjl");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "DHJd":
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

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z"
}), /*#__PURE__*/React.createElement("path", {
  d: "M17.5 10.5c.88 0 1.73.09 2.5.26V9.24c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99zM13 12.49v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26V11.9c-.79-.15-1.64-.24-2.5-.24-1.7 0-3.24.3-4.5.83zM17.5 14.33c-1.7 0-3.24.29-4.5.83v1.66c1.13-.64 2.7-.99 4.5-.99.88 0 1.73.09 2.5.26v-1.52c-.79-.16-1.64-.24-2.5-.24z"
})), 'MenuBook');

exports.default = _default;

/***/ }),

/***/ "DSRE":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__("Kz5y"),
    stubFalse = __webpack_require__("B8du");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YuTi")(module)))

/***/ }),

/***/ "E+oP":
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__("A90E"),
    getTag = __webpack_require__("QqLw"),
    isArguments = __webpack_require__("03A+"),
    isArray = __webpack_require__("Z0cm"),
    isArrayLike = __webpack_require__("MMmD"),
    isBuffer = __webpack_require__("DSRE"),
    isPrototype = __webpack_require__("6sVZ"),
    isTypedArray = __webpack_require__("c6wG");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;


/***/ }),

/***/ "E2jh":
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__("2gN3");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "E39E":
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
  d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
}), 'ArrowForward');

exports.default = _default;

/***/ }),

/***/ "ExA7":
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "GoyQ":
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "H7XF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
} // Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications


revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function getLens(b64) {
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4');
  } // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42


  var validLen = b64.indexOf('=');
  if (validLen === -1) validLen = len;
  var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
  return [validLen, placeHoldersLen];
} // base64 is 4/3 + up to two characters of the original data


function byteLength(b64) {
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function _byteLength(b64, validLen, placeHoldersLen) {
  return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}

function toByteArray(b64) {
  var tmp;
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
  var curByte = 0; // if there are placeholders, only get up to the last complete 4 chars

  var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
  var i;

  for (i = 0; i < len; i += 4) {
    tmp = revLookup[b64.charCodeAt(i)] << 18 | revLookup[b64.charCodeAt(i + 1)] << 12 | revLookup[b64.charCodeAt(i + 2)] << 6 | revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = tmp >> 16 & 0xFF;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 2) {
    tmp = revLookup[b64.charCodeAt(i)] << 2 | revLookup[b64.charCodeAt(i + 1)] >> 4;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 1) {
    tmp = revLookup[b64.charCodeAt(i)] << 10 | revLookup[b64.charCodeAt(i + 1)] << 4 | revLookup[b64.charCodeAt(i + 2)] >> 2;
    arr[curByte++] = tmp >> 8 & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  return arr;
}

function tripletToBase64(num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F];
}

function encodeChunk(uint8, start, end) {
  var tmp;
  var output = [];

  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
    output.push(tripletToBase64(tmp));
  }

  return output.join('');
}

function fromByteArray(uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes

  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3
  // go through the array every three bytes, we'll deal with trailing stuff later

  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
  } // pad the end with zeros, but make sure to not forget the extra bytes


  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 0x3F] + '==');
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 0x3F] + lookup[tmp << 2 & 0x3F] + '=');
  }

  return parts.join('');
}

/***/ }),

/***/ "HDXh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */

/* eslint-disable no-proto */


var base64 = __webpack_require__("H7XF");

var ieee754 = __webpack_require__("kVK+");

var isArray = __webpack_require__("49sm");

exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */

Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined ? global.TYPED_ARRAY_SUPPORT : typedArraySupport();
/*
 * Export kMaxLength after typed array support is determined.
 */

exports.kMaxLength = kMaxLength();

function typedArraySupport() {
  try {
    var arr = new Uint8Array(1);
    arr.__proto__ = {
      __proto__: Uint8Array.prototype,
      foo: function foo() {
        return 42;
      }
    };
    return arr.foo() === 42 && // typed array instances can be augmented
    typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
    arr.subarray(1, 1).byteLength === 0; // ie10 has broken `subarray`
  } catch (e) {
    return false;
  }
}

function kMaxLength() {
  return Buffer.TYPED_ARRAY_SUPPORT ? 0x7fffffff : 0x3fffffff;
}

function createBuffer(that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length');
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length);
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length);
    }

    that.length = length;
  }

  return that;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */


function Buffer(arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length);
  } // Common case.


  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error('If encoding is specified then the first argument must be a string');
    }

    return allocUnsafe(this, arg);
  }

  return from(this, arg, encodingOrOffset, length);
}

Buffer.poolSize = 8192; // not used by this implementation
// TODO: Legacy, not needed anymore. Remove in next major version.

Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype;
  return arr;
};

function from(that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number');
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length);
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset);
  }

  return fromObject(that, value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/


Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length);
};

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype;
  Buffer.__proto__ = Uint8Array;

  if (typeof Symbol !== 'undefined' && Symbol.species && Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    });
  }
}

function assertSize(size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number');
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative');
  }
}

function alloc(that, size, fill, encoding) {
  assertSize(size);

  if (size <= 0) {
    return createBuffer(that, size);
  }

  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string' ? createBuffer(that, size).fill(fill, encoding) : createBuffer(that, size).fill(fill);
  }

  return createBuffer(that, size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/


Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding);
};

function allocUnsafe(that, size) {
  assertSize(size);
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);

  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0;
    }
  }

  return that;
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */


Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */


Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size);
};

function fromString(that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8';
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding');
  }

  var length = byteLength(string, encoding) | 0;
  that = createBuffer(that, length);
  var actual = that.write(string, encoding);

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual);
  }

  return that;
}

function fromArrayLike(that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0;
  that = createBuffer(that, length);

  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255;
  }

  return that;
}

function fromArrayBuffer(that, array, byteOffset, length) {
  array.byteLength; // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds');
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds');
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array);
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset);
  } else {
    array = new Uint8Array(array, byteOffset, length);
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array;
    that.__proto__ = Buffer.prototype;
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array);
  }

  return that;
}

function fromObject(that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0;
    that = createBuffer(that, len);

    if (that.length === 0) {
      return that;
    }

    obj.copy(that, 0, 0, len);
    return that;
  }

  if (obj) {
    if (typeof ArrayBuffer !== 'undefined' && obj.buffer instanceof ArrayBuffer || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0);
      }

      return fromArrayLike(that, obj);
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data);
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.');
}

function checked(length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' + 'size: 0x' + kMaxLength().toString(16) + ' bytes');
  }

  return length | 0;
}

function SlowBuffer(length) {
  if (+length != length) {
    // eslint-disable-line eqeqeq
    length = 0;
  }

  return Buffer.alloc(+length);
}

Buffer.isBuffer = function isBuffer(b) {
  return !!(b != null && b._isBuffer);
};

Buffer.compare = function compare(a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers');
  }

  if (a === b) return 0;
  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

Buffer.isEncoding = function isEncoding(encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true;

    default:
      return false;
  }
};

Buffer.concat = function concat(list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers');
  }

  if (list.length === 0) {
    return Buffer.alloc(0);
  }

  var i;

  if (length === undefined) {
    length = 0;

    for (i = 0; i < list.length; ++i) {
      length += list[i].length;
    }
  }

  var buffer = Buffer.allocUnsafe(length);
  var pos = 0;

  for (i = 0; i < list.length; ++i) {
    var buf = list[i];

    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers');
    }

    buf.copy(buffer, pos);
    pos += buf.length;
  }

  return buffer;
};

function byteLength(string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length;
  }

  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' && (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength;
  }

  if (typeof string !== 'string') {
    string = '' + string;
  }

  var len = string.length;
  if (len === 0) return 0; // Use a for loop to avoid recursion

  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len;

      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length;

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2;

      case 'hex':
        return len >>> 1;

      case 'base64':
        return base64ToBytes(string).length;

      default:
        if (loweredCase) return utf8ToBytes(string).length; // assume utf8

        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
}

Buffer.byteLength = byteLength;

function slowToString(encoding, start, end) {
  var loweredCase = false; // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.
  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.

  if (start === undefined || start < 0) {
    start = 0;
  } // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.


  if (start > this.length) {
    return '';
  }

  if (end === undefined || end > this.length) {
    end = this.length;
  }

  if (end <= 0) {
    return '';
  } // Force coersion to uint32. This will also coerce falsey/NaN values to 0.


  end >>>= 0;
  start >>>= 0;

  if (end <= start) {
    return '';
  }

  if (!encoding) encoding = 'utf8';

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end);

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end);

      case 'ascii':
        return asciiSlice(this, start, end);

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end);

      case 'base64':
        return base64Slice(this, start, end);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = (encoding + '').toLowerCase();
        loweredCase = true;
    }
  }
} // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.


Buffer.prototype._isBuffer = true;

function swap(b, n, m) {
  var i = b[n];
  b[n] = b[m];
  b[m] = i;
}

Buffer.prototype.swap16 = function swap16() {
  var len = this.length;

  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits');
  }

  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1);
  }

  return this;
};

Buffer.prototype.swap32 = function swap32() {
  var len = this.length;

  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits');
  }

  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3);
    swap(this, i + 1, i + 2);
  }

  return this;
};

Buffer.prototype.swap64 = function swap64() {
  var len = this.length;

  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits');
  }

  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7);
    swap(this, i + 1, i + 6);
    swap(this, i + 2, i + 5);
    swap(this, i + 3, i + 4);
  }

  return this;
};

Buffer.prototype.toString = function toString() {
  var length = this.length | 0;
  if (length === 0) return '';
  if (arguments.length === 0) return utf8Slice(this, 0, length);
  return slowToString.apply(this, arguments);
};

Buffer.prototype.equals = function equals(b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
  if (this === b) return true;
  return Buffer.compare(this, b) === 0;
};

Buffer.prototype.inspect = function inspect() {
  var str = '';
  var max = exports.INSPECT_MAX_BYTES;

  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
    if (this.length > max) str += ' ... ';
  }

  return '<Buffer ' + str + '>';
};

Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer');
  }

  if (start === undefined) {
    start = 0;
  }

  if (end === undefined) {
    end = target ? target.length : 0;
  }

  if (thisStart === undefined) {
    thisStart = 0;
  }

  if (thisEnd === undefined) {
    thisEnd = this.length;
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index');
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0;
  }

  if (thisStart >= thisEnd) {
    return -1;
  }

  if (start >= end) {
    return 1;
  }

  start >>>= 0;
  end >>>= 0;
  thisStart >>>= 0;
  thisEnd >>>= 0;
  if (this === target) return 0;
  var x = thisEnd - thisStart;
  var y = end - start;
  var len = Math.min(x, y);
  var thisCopy = this.slice(thisStart, thisEnd);
  var targetCopy = target.slice(start, end);

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i];
      y = targetCopy[i];
      break;
    }
  }

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
}; // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf


function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1; // Normalize byteOffset

  if (typeof byteOffset === 'string') {
    encoding = byteOffset;
    byteOffset = 0;
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff;
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000;
  }

  byteOffset = +byteOffset; // Coerce to Number.

  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
  } // Normalize byteOffset: negative offsets start from the end of the buffer


  if (byteOffset < 0) byteOffset = buffer.length + byteOffset;

  if (byteOffset >= buffer.length) {
    if (dir) return -1;else byteOffset = buffer.length - 1;
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0;else return -1;
  } // Normalize val


  if (typeof val === 'string') {
    val = Buffer.from(val, encoding);
  } // Finally, search either indexOf (if dir is true) or lastIndexOf


  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1;
    }

    return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
  } else if (typeof val === 'number') {
    val = val & 0xFF; // Search for a byte value [0-255]

    if (Buffer.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
      }
    }

    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir);
  }

  throw new TypeError('val must be string, number or Buffer');
}

function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
  var indexSize = 1;
  var arrLength = arr.length;
  var valLength = val.length;

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase();

    if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1;
      }

      indexSize = 2;
      arrLength /= 2;
      valLength /= 2;
      byteOffset /= 2;
    }
  }

  function read(buf, i) {
    if (indexSize === 1) {
      return buf[i];
    } else {
      return buf.readUInt16BE(i * indexSize);
    }
  }

  var i;

  if (dir) {
    var foundIndex = -1;

    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i;
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
      } else {
        if (foundIndex !== -1) i -= i - foundIndex;
        foundIndex = -1;
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;

    for (i = byteOffset; i >= 0; i--) {
      var found = true;

      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false;
          break;
        }
      }

      if (found) return i;
    }
  }

  return -1;
}

Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1;
};

Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};

Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};

function hexWrite(buf, string, offset, length) {
  offset = Number(offset) || 0;
  var remaining = buf.length - offset;

  if (!length) {
    length = remaining;
  } else {
    length = Number(length);

    if (length > remaining) {
      length = remaining;
    }
  } // must be an even number of digits


  var strLen = string.length;
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string');

  if (length > strLen / 2) {
    length = strLen / 2;
  }

  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16);
    if (isNaN(parsed)) return i;
    buf[offset + i] = parsed;
  }

  return i;
}

function utf8Write(buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}

function asciiWrite(buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length);
}

function latin1Write(buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length);
}

function base64Write(buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length);
}

function ucs2Write(buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}

Buffer.prototype.write = function write(string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8';
    length = this.length;
    offset = 0; // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset;
    length = this.length;
    offset = 0; // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0;

    if (isFinite(length)) {
      length = length | 0;
      if (encoding === undefined) encoding = 'utf8';
    } else {
      encoding = length;
      length = undefined;
    } // legacy write(string, encoding, offset, length) - remove in v0.13

  } else {
    throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
  }

  var remaining = this.length - offset;
  if (length === undefined || length > remaining) length = remaining;

  if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds');
  }

  if (!encoding) encoding = 'utf8';
  var loweredCase = false;

  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length);

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length);

      case 'ascii':
        return asciiWrite(this, string, offset, length);

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length);

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length);

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length);

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
        encoding = ('' + encoding).toLowerCase();
        loweredCase = true;
    }
  }
};

Buffer.prototype.toJSON = function toJSON() {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};

function base64Slice(buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf);
  } else {
    return base64.fromByteArray(buf.slice(start, end));
  }
}

function utf8Slice(buf, start, end) {
  end = Math.min(buf.length, end);
  var res = [];
  var i = start;

  while (i < end) {
    var firstByte = buf[i];
    var codePoint = null;
    var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint;

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte;
          }

          break;

        case 2:
          secondByte = buf[i + 1];

          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;

            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 3:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;

            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint;
            }
          }

          break;

        case 4:
          secondByte = buf[i + 1];
          thirdByte = buf[i + 2];
          fourthByte = buf[i + 3];

          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;

            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint;
            }
          }

      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD;
      bytesPerSequence = 1;
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000;
      res.push(codePoint >>> 10 & 0x3FF | 0xD800);
      codePoint = 0xDC00 | codePoint & 0x3FF;
    }

    res.push(codePoint);
    i += bytesPerSequence;
  }

  return decodeCodePointsArray(res);
} // Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety


var MAX_ARGUMENTS_LENGTH = 0x1000;

function decodeCodePointsArray(codePoints) {
  var len = codePoints.length;

  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
  } // Decode in chunks to avoid "call stack size exceeded".


  var res = '';
  var i = 0;

  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }

  return res;
}

function asciiSlice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F);
  }

  return ret;
}

function latin1Slice(buf, start, end) {
  var ret = '';
  end = Math.min(buf.length, end);

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i]);
  }

  return ret;
}

function hexSlice(buf, start, end) {
  var len = buf.length;
  if (!start || start < 0) start = 0;
  if (!end || end < 0 || end > len) end = len;
  var out = '';

  for (var i = start; i < end; ++i) {
    out += toHex(buf[i]);
  }

  return out;
}

function utf16leSlice(buf, start, end) {
  var bytes = buf.slice(start, end);
  var res = '';

  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
  }

  return res;
}

Buffer.prototype.slice = function slice(start, end) {
  var len = this.length;
  start = ~~start;
  end = end === undefined ? len : ~~end;

  if (start < 0) {
    start += len;
    if (start < 0) start = 0;
  } else if (start > len) {
    start = len;
  }

  if (end < 0) {
    end += len;
    if (end < 0) end = 0;
  } else if (end > len) {
    end = len;
  }

  if (end < start) end = start;
  var newBuf;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end);
    newBuf.__proto__ = Buffer.prototype;
  } else {
    var sliceLen = end - start;
    newBuf = new Buffer(sliceLen, undefined);

    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start];
    }
  }

  return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */


function checkOffset(offset, ext, length) {
  if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}

Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  return val;
};

Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    checkOffset(offset, byteLength, this.length);
  }

  var val = this[offset + --byteLength];
  var mul = 1;

  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul;
  }

  return val;
};

Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  return this[offset];
};

Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] | this[offset + 1] << 8;
};

Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  return this[offset] << 8 | this[offset + 1];
};

Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};

Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};

Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var val = this[offset];
  var mul = 1;
  var i = 0;

  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
  offset = offset | 0;
  byteLength = byteLength | 0;
  if (!noAssert) checkOffset(offset, byteLength, this.length);
  var i = byteLength;
  var mul = 1;
  var val = this[offset + --i];

  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul;
  }

  mul *= 0x80;
  if (val >= mul) val -= Math.pow(2, 8 * byteLength);
  return val;
};

Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length);
  if (!(this[offset] & 0x80)) return this[offset];
  return (0xff - this[offset] + 1) * -1;
};

Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset] | this[offset + 1] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length);
  var val = this[offset + 1] | this[offset] << 8;
  return val & 0x8000 ? val | 0xFFFF0000 : val;
};

Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};

Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};

Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, true, 23, 4);
};

Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length);
  return ieee754.read(this, offset, false, 23, 4);
};

Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, true, 52, 8);
};

Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length);
  return ieee754.read(this, offset, false, 52, 8);
};

function checkInt(buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
}

Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var mul = 1;
  var i = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;
  byteLength = byteLength | 0;

  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1;
    checkInt(this, value, offset, byteLength, maxBytes, 0);
  }

  var i = byteLength - 1;
  var mul = 1;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = value / mul & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  this[offset] = value & 0xff;
  return offset + 1;
};

function objectWriteUInt16(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & 0xff << 8 * (littleEndian ? i : 1 - i)) >>> (littleEndian ? i : 1 - i) * 8;
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

function objectWriteUInt32(buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1;

  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = value >>> (littleEndian ? i : 3 - i) * 8 & 0xff;
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = 0;
  var mul = 1;
  var sub = 0;
  this[offset] = value & 0xFF;

  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
  value = +value;
  offset = offset | 0;

  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1);
    checkInt(this, value, offset, byteLength, limit - 1, -limit);
  }

  var i = byteLength - 1;
  var mul = 1;
  var sub = 0;
  this[offset + i] = value & 0xFF;

  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1;
    }

    this[offset + i] = (value / mul >> 0) - sub & 0xFF;
  }

  return offset + byteLength;
};

Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80);
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value);
  if (value < 0) value = 0xff + value + 1;
  this[offset] = value & 0xff;
  return offset + 1;
};

Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
  } else {
    objectWriteUInt16(this, value, offset, true);
  }

  return offset + 2;
};

Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
  } else {
    objectWriteUInt16(this, value, offset, false);
  }

  return offset + 2;
};

Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
  } else {
    objectWriteUInt32(this, value, offset, true);
  }

  return offset + 4;
};

Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
  value = +value;
  offset = offset | 0;
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000);
  if (value < 0) value = 0xffffffff + value + 1;

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
  } else {
    objectWriteUInt32(this, value, offset, false);
  }

  return offset + 4;
};

function checkIEEE754(buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range');
  if (offset < 0) throw new RangeError('Index out of range');
}

function writeFloat(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38);
  }

  ieee754.write(buf, value, offset, littleEndian, 23, 4);
  return offset + 4;
}

Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert);
};

Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert);
};

function writeDouble(buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308);
  }

  ieee754.write(buf, value, offset, littleEndian, 52, 8);
  return offset + 8;
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert);
};

Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert);
}; // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)


Buffer.prototype.copy = function copy(target, targetStart, start, end) {
  if (!start) start = 0;
  if (!end && end !== 0) end = this.length;
  if (targetStart >= target.length) targetStart = target.length;
  if (!targetStart) targetStart = 0;
  if (end > 0 && end < start) end = start; // Copy 0 bytes; we're done

  if (end === start) return 0;
  if (target.length === 0 || this.length === 0) return 0; // Fatal error conditions

  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds');
  }

  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds');
  if (end < 0) throw new RangeError('sourceEnd out of bounds'); // Are we oob?

  if (end > this.length) end = this.length;

  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start;
  }

  var len = end - start;
  var i;

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start];
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start];
    }
  } else {
    Uint8Array.prototype.set.call(target, this.subarray(start, start + len), targetStart);
  }

  return len;
}; // Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])


Buffer.prototype.fill = function fill(val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start;
      start = 0;
      end = this.length;
    } else if (typeof end === 'string') {
      encoding = end;
      end = this.length;
    }

    if (val.length === 1) {
      var code = val.charCodeAt(0);

      if (code < 256) {
        val = code;
      }
    }

    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string');
    }

    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding);
    }
  } else if (typeof val === 'number') {
    val = val & 255;
  } // Invalid ranges are not set to a default, so can range check early.


  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index');
  }

  if (end <= start) {
    return this;
  }

  start = start >>> 0;
  end = end === undefined ? this.length : end >>> 0;
  if (!val) val = 0;
  var i;

  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val;
    }
  } else {
    var bytes = Buffer.isBuffer(val) ? val : utf8ToBytes(new Buffer(val, encoding).toString());
    var len = bytes.length;

    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len];
    }
  }

  return this;
}; // HELPER FUNCTIONS
// ================


var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

function base64clean(str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, ''); // Node converts strings with length < 2 to ''

  if (str.length < 2) return ''; // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not

  while (str.length % 4 !== 0) {
    str = str + '=';
  }

  return str;
}

function stringtrim(str) {
  if (str.trim) return str.trim();
  return str.replace(/^\s+|\s+$/g, '');
}

function toHex(n) {
  if (n < 16) return '0' + n.toString(16);
  return n.toString(16);
}

function utf8ToBytes(string, units) {
  units = units || Infinity;
  var codePoint;
  var length = string.length;
  var leadSurrogate = null;
  var bytes = [];

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i); // is surrogate component

    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
          continue;
        } // valid lead


        leadSurrogate = codePoint;
        continue;
      } // 2 leads in a row


      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        leadSurrogate = codePoint;
        continue;
      } // valid surrogate pair


      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
    }

    leadSurrogate = null; // encode utf8

    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break;
      bytes.push(codePoint);
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break;
      bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break;
      bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break;
      bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
    } else {
      throw new Error('Invalid code point');
    }
  }

  return bytes;
}

function asciiToBytes(str) {
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
  }

  return byteArray;
}

function utf16leToBytes(str, units) {
  var c, hi, lo;
  var byteArray = [];

  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break;
    c = str.charCodeAt(i);
    hi = c >> 8;
    lo = c % 256;
    byteArray.push(lo);
    byteArray.push(hi);
  }

  return byteArray;
}

function base64ToBytes(str) {
  return base64.toByteArray(base64clean(str));
}

function blitBuffer(src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if (i + offset >= dst.length || i >= src.length) break;
    dst[i + offset] = src[i];
  }

  return i;
}

function isnan(val) {
  return val !== val; // eslint-disable-line no-self-compare
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("yLpj")))

/***/ }),

/***/ "HOxn":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("Cwc5"),
    root = __webpack_require__("Kz5y");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "JTzB":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("NykK"),
    isObjectLike = __webpack_require__("ExA7");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "KfNM":
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "Kz5y":
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__("WFqU");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "MMmD":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("lSCD"),
    isLength = __webpack_require__("shjB");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "NKxu":
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__("lSCD"),
    isMasked = __webpack_require__("E2jh"),
    isObject = __webpack_require__("GoyQ"),
    toSource = __webpack_require__("3Fdi");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "Npjl":
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "NykK":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("nmnc"),
    getRawTag = __webpack_require__("AP2z"),
    objectToString = __webpack_require__("KfNM");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "Of+w":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("Cwc5"),
    root = __webpack_require__("Kz5y");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "QFcT":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("I+eb");

var $hypot = Math.hypot;
var abs = Math.abs;
var sqrt = Math.sqrt;

// Chrome 77 bug
// https://bugs.chromium.org/p/v8/issues/detail?id=9546
var BUGGY = !!$hypot && $hypot(Infinity, NaN) !== Infinity;

// `Math.hypot` method
// https://tc39.github.io/ecma262/#sec-math.hypot
$({ target: 'Math', stat: true, forced: BUGGY }, {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * sqrt(sum);
  }
});


/***/ }),

/***/ "QqLw":
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__("tadb"),
    Map = __webpack_require__("ebwN"),
    Promise = __webpack_require__("HOxn"),
    Set = __webpack_require__("yGk4"),
    WeakMap = __webpack_require__("Of+w"),
    baseGetTag = __webpack_require__("NykK"),
    toSource = __webpack_require__("3Fdi");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "RXBc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("ls82");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js
var gatsby_browser_entry = __webpack_require__("Wbzz");

// EXTERNAL MODULE: ./node_modules/react-waypoint/es/index.js
var es = __webpack_require__("uuth");

// EXTERNAL MODULE: ./src/constants/constants.js
var constants = __webpack_require__("5v02");

// EXTERNAL MODULE: ./src/components/layout.js + 10 modules
var layout = __webpack_require__("Bl7J");

// EXTERNAL MODULE: ./node_modules/gatsby-image/index.js
var gatsby_image = __webpack_require__("9eSz");
var gatsby_image_default = /*#__PURE__*/__webpack_require__.n(gatsby_image);

// CONCATENATED MODULE: ./src/components/image.js
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */var image_Image=function Image(){var _data$placeholderImag,_data$placeholderImag2;var data=Object(gatsby_browser_entry["useStaticQuery"])("1132682437");if(!(data===null||data===void 0?void 0:(_data$placeholderImag=data.placeholderImage)===null||_data$placeholderImag===void 0?void 0:(_data$placeholderImag2=_data$placeholderImag.childImageSharp)===null||_data$placeholderImag2===void 0?void 0:_data$placeholderImag2.fluid)){return/*#__PURE__*/react_default.a.createElement("div",null,"Picture not found");}return/*#__PURE__*/react_default.a.createElement(gatsby_image_default.a,{fluid:data.placeholderImage.childImageSharp.fluid});};/* harmony default export */ var components_image = (image_Image);
// EXTERNAL MODULE: ./src/components/seo.js
var seo = __webpack_require__("vrFN");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__("R/WZ");

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__("iuhU");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("E9XD");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("Ff2n");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("wx14");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__("H2TA");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js


 // A grid component using the following libs as inspiration.
//
// For the implementation:
// - https://getbootstrap.com/docs/4.3/layout/grid/
// - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
// - https://github.com/roylee0704/react-flexbox-grid
// - https://material.angularjs.org/latest/layout/introduction
//
// Follow this flexbox Guide to better understand the underlying model:
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/





var SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function generateGrid(globalStyles, theme, breakpoint) {
  var styles = {};
  GRID_SIZES.forEach(function (size) {
    var key = "grid-".concat(breakpoint, "-").concat(size);

    if (size === true) {
      // For the auto layouting
      styles[key] = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%'
      };
      return;
    }

    if (size === 'auto') {
      styles[key] = {
        flexBasis: 'auto',
        flexGrow: 0,
        maxWidth: 'none'
      };
      return;
    } // Keep 7 significant numbers.


    var width = "".concat(Math.round(size / 12 * 10e7) / 10e5, "%"); // Close to the bootstrap implementation:
    // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41

    styles[key] = {
      flexBasis: width,
      flexGrow: 0,
      maxWidth: width
    };
  }); // No need for a media query for the first size.

  if (breakpoint === 'xs') {
    Object(esm_extends["a" /* default */])(globalStyles, styles);
  } else {
    globalStyles[theme.breakpoints.up(breakpoint)] = styles;
  }
}

function getOffset(val) {
  var div = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var parse = parseFloat(val);
  return "".concat(parse / div).concat(String(val).replace(String(parse), '') || 'px');
}

function generateGutter(theme, breakpoint) {
  var styles = {};
  SPACINGS.forEach(function (spacing) {
    var themeSpacing = theme.spacing(spacing);

    if (themeSpacing === 0) {
      return;
    }

    styles["spacing-".concat(breakpoint, "-").concat(spacing)] = {
      margin: "-".concat(getOffset(themeSpacing, 2)),
      width: "calc(100% + ".concat(getOffset(themeSpacing), ")"),
      '& > $item': {
        padding: getOffset(themeSpacing, 2)
      }
    };
  });
  return styles;
} // Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',


var Grid_styles = function styles(theme) {
  return Object(esm_extends["a" /* default */])({
    /* Styles applied to the root element. */
    root: {},

    /* Styles applied to the root element if `container={true}`. */
    container: {
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%'
    },

    /* Styles applied to the root element if `item={true}`. */
    item: {
      boxSizing: 'border-box',
      margin: '0' // For instance, it's useful when used with a `figure` element.

    },

    /* Styles applied to the root element if `zeroMinWidth={true}`. */
    zeroMinWidth: {
      minWidth: 0
    },

    /* Styles applied to the root element if `direction="column"`. */
    'direction-xs-column': {
      flexDirection: 'column'
    },

    /* Styles applied to the root element if `direction="column-reverse"`. */
    'direction-xs-column-reverse': {
      flexDirection: 'column-reverse'
    },

    /* Styles applied to the root element if `direction="row-reverse"`. */
    'direction-xs-row-reverse': {
      flexDirection: 'row-reverse'
    },

    /* Styles applied to the root element if `wrap="nowrap"`. */
    'wrap-xs-nowrap': {
      flexWrap: 'nowrap'
    },

    /* Styles applied to the root element if `wrap="reverse"`. */
    'wrap-xs-wrap-reverse': {
      flexWrap: 'wrap-reverse'
    },

    /* Styles applied to the root element if `alignItems="center"`. */
    'align-items-xs-center': {
      alignItems: 'center'
    },

    /* Styles applied to the root element if `alignItems="flex-start"`. */
    'align-items-xs-flex-start': {
      alignItems: 'flex-start'
    },

    /* Styles applied to the root element if `alignItems="flex-end"`. */
    'align-items-xs-flex-end': {
      alignItems: 'flex-end'
    },

    /* Styles applied to the root element if `alignItems="baseline"`. */
    'align-items-xs-baseline': {
      alignItems: 'baseline'
    },

    /* Styles applied to the root element if `alignContent="center"`. */
    'align-content-xs-center': {
      alignContent: 'center'
    },

    /* Styles applied to the root element if `alignContent="flex-start"`. */
    'align-content-xs-flex-start': {
      alignContent: 'flex-start'
    },

    /* Styles applied to the root element if `alignContent="flex-end"`. */
    'align-content-xs-flex-end': {
      alignContent: 'flex-end'
    },

    /* Styles applied to the root element if `alignContent="space-between"`. */
    'align-content-xs-space-between': {
      alignContent: 'space-between'
    },

    /* Styles applied to the root element if `alignContent="space-around"`. */
    'align-content-xs-space-around': {
      alignContent: 'space-around'
    },

    /* Styles applied to the root element if `justify="center"`. */
    'justify-xs-center': {
      justifyContent: 'center'
    },

    /* Styles applied to the root element if `justify="flex-end"`. */
    'justify-xs-flex-end': {
      justifyContent: 'flex-end'
    },

    /* Styles applied to the root element if `justify="space-between"`. */
    'justify-xs-space-between': {
      justifyContent: 'space-between'
    },

    /* Styles applied to the root element if `justify="space-around"`. */
    'justify-xs-space-around': {
      justifyContent: 'space-around'
    },

    /* Styles applied to the root element if `justify="space-evenly"`. */
    'justify-xs-space-evenly': {
      justifyContent: 'space-evenly'
    }
  }, generateGutter(theme, 'xs'), theme.breakpoints.keys.reduce(function (accumulator, key) {
    // Use side effect over immutability for better performance.
    generateGrid(accumulator, theme, key);
    return accumulator;
  }, {}));
};
var Grid_Grid = /*#__PURE__*/react["forwardRef"](function Grid(props, ref) {
  var _props$alignContent = props.alignContent,
      alignContent = _props$alignContent === void 0 ? 'stretch' : _props$alignContent,
      _props$alignItems = props.alignItems,
      alignItems = _props$alignItems === void 0 ? 'stretch' : _props$alignItems,
      classes = props.classes,
      classNameProp = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$container = props.container,
      container = _props$container === void 0 ? false : _props$container,
      _props$direction = props.direction,
      direction = _props$direction === void 0 ? 'row' : _props$direction,
      _props$item = props.item,
      item = _props$item === void 0 ? false : _props$item,
      _props$justify = props.justify,
      justify = _props$justify === void 0 ? 'flex-start' : _props$justify,
      _props$lg = props.lg,
      lg = _props$lg === void 0 ? false : _props$lg,
      _props$md = props.md,
      md = _props$md === void 0 ? false : _props$md,
      _props$sm = props.sm,
      sm = _props$sm === void 0 ? false : _props$sm,
      _props$spacing = props.spacing,
      spacing = _props$spacing === void 0 ? 0 : _props$spacing,
      _props$wrap = props.wrap,
      wrap = _props$wrap === void 0 ? 'wrap' : _props$wrap,
      _props$xl = props.xl,
      xl = _props$xl === void 0 ? false : _props$xl,
      _props$xs = props.xs,
      xs = _props$xs === void 0 ? false : _props$xs,
      _props$zeroMinWidth = props.zeroMinWidth,
      zeroMinWidth = _props$zeroMinWidth === void 0 ? false : _props$zeroMinWidth,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["alignContent", "alignItems", "classes", "className", "component", "container", "direction", "item", "justify", "lg", "md", "sm", "spacing", "wrap", "xl", "xs", "zeroMinWidth"]);

  var className = Object(clsx_m["a" /* default */])(classes.root, classNameProp, container && [classes.container, spacing !== 0 && classes["spacing-xs-".concat(String(spacing))]], item && classes.item, zeroMinWidth && classes.zeroMinWidth, direction !== 'row' && classes["direction-xs-".concat(String(direction))], wrap !== 'wrap' && classes["wrap-xs-".concat(String(wrap))], alignItems !== 'stretch' && classes["align-items-xs-".concat(String(alignItems))], alignContent !== 'stretch' && classes["align-content-xs-".concat(String(alignContent))], justify !== 'flex-start' && classes["justify-xs-".concat(String(justify))], xs !== false && classes["grid-xs-".concat(String(xs))], sm !== false && classes["grid-sm-".concat(String(sm))], md !== false && classes["grid-md-".concat(String(md))], lg !== false && classes["grid-lg-".concat(String(lg))], xl !== false && classes["grid-xl-".concat(String(xl))]);
  return /*#__PURE__*/react["createElement"](Component, Object(esm_extends["a" /* default */])({
    className: className,
    ref: ref
  }, other));
});
 false ? undefined : void 0;
var StyledGrid = Object(withStyles["a" /* default */])(Grid_styles, {
  name: 'MuiGrid'
})(Grid_Grid);

if (false) { var requireProp; }

/* harmony default export */ var esm_Grid_Grid = (StyledGrid);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 13 modules
var Box = __webpack_require__("hlFM");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__("ofer");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Email.js
var Email = __webpack_require__("y9eO");
var Email_default = /*#__PURE__*/__webpack_require__.n(Email);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/LinkedIn.js
var LinkedIn = __webpack_require__("lJuC");
var LinkedIn_default = /*#__PURE__*/__webpack_require__.n(LinkedIn);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/GitHub.js
var GitHub = __webpack_require__("RwSH");
var GitHub_default = /*#__PURE__*/__webpack_require__.n(GitHub);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Description.js
var Description = __webpack_require__("uXem");
var Description_default = /*#__PURE__*/__webpack_require__.n(Description);

// EXTERNAL MODULE: ./src/images/avatar.jpg
var images_avatar = __webpack_require__("7pJ2");
var avatar_default = /*#__PURE__*/__webpack_require__.n(images_avatar);

// EXTERNAL MODULE: ./src/images/twinkling.png
var twinkling = __webpack_require__("Xef4");
var twinkling_default = /*#__PURE__*/__webpack_require__.n(twinkling);

// EXTERNAL MODULE: ./src/images/clouds3.png
var clouds3 = __webpack_require__("aRp4");
var clouds3_default = /*#__PURE__*/__webpack_require__.n(clouds3);

// CONCATENATED MODULE: ./src/components/banner.js
var useStyles=Object(makeStyles["a" /* default */])(function(theme){var _root;return{root:(_root={flexGrow:1,width:"100%",height:"calc(100vh - 56px)"},_root["@media (min-width: 0px) and (orientation: landscape)"]={height:"calc(100vh - 48px)"},_root[theme.breakpoints.up('sm')]={height:"calc(100vh - 64px)"},_root),container:{flexGrow:1,height:"100%"},avatar:{width:"200px",height:"200px",objectFit:"cover",margin:"0 auto",borderRadius:"50%"},moon:{width:"200px",height:"200px",borderRadius:"100%",background:"#ddd",margin:"0 auto",transition:"1s",position:"absolute",boxShadow:"0 0 50px rgb(255 215 0 / 0.75), 0 0 150px rgb(255 215 0 / 0.75), inset 0 20px 20px 20px rgb(245 245 245 / 0.5), inset 30px 0 35px 11px rgb(255 255 240 / 0.5)","&:hover":{boxShadow:"0 0 0px tomato,0 0 0px orange, inset 0 0px 0px 0px #ddd, inset 0px 0 0px 0px #ccc",background:"rgb(0,0,0,0)",transition:"1s"}},iconContainer:{marginTop:theme.spacing(2),marginBottom:theme.spacing(2)},icon:{fontSize:44,color:theme.palette.secondary.main,transition:"transform .2s",/* Animation */"&:hover":{transform:"scale(1.25)"}},introduceText:{color:"#fff"},baseEffect:{position:"absolute",top:"0",left:"0",right:"0",bottom:"0",width:"100%",height:"100%",display:"block"},twinkling:{height:"513px",background:"url("+twinkling_default.a+") repeat top center",zIndex:1,"-moz-animation":"move-twink-back 200s linear infinite","-ms-animation":"move-twink-back 200s linear infinite","-o-animation":"move-twink-back 200s linear infinite","-webkit-animation":"move-twink-back 200s linear infinite","animation":"move-twink-back 200s linear infinite"},clouds:{background:"url("+clouds3_default.a+") repeat-x",zIndex:2,"-moz-animation":"move-clouds-back 200s linear infinite","-ms-animation":"move-clouds-back 200s linear infinite","-o-animation":"move-clouds-back 200s linear infinite","-webkit-animation":"move-clouds-back 200s linear infinite","animation":"move-clouds-back 200s linear infinite"}};});var banner_Banner=function Banner(props){var classes=useStyles();var id=props.id,siteTitle=props.siteTitle,_props$setBannerHeigh=props.setBannerHeight,setBannerHeight=_props$setBannerHeigh===void 0?function(){}:_props$setBannerHeigh;var _useState=Object(react["useState"])(0),height=_useState[0],setHeight=_useState[1];var ref=Object(react["useRef"])(null);Object(react["useEffect"])(function(){console.log(ref.current.clientHeight);setHeight(ref.current.clientHeight);setBannerHeight(ref.current.clientHeight);});var preventDefault=function preventDefault(event){return event.preventDefault();};return/*#__PURE__*/react_default.a.createElement(Box["a" /* default */],{className:classes.root,id:id},/*#__PURE__*/react_default.a.createElement(esm_Grid_Grid,{container:true,direction:"row",justify:"center",alignItems:"center",ref:ref,className:classes.container},/*#__PURE__*/react_default.a.createElement(esm_Grid_Grid,{item:true,xs:12,sm:12,container:true,direction:"column",justify:"center",alignItems:"center",style:{zIndex:10}},/*#__PURE__*/react_default.a.createElement(esm_Grid_Grid,{item:true},/*#__PURE__*/react_default.a.createElement("a",{href:"https://henry32144.github.io/hugo-website/"},/*#__PURE__*/react_default.a.createElement(Box["a" /* default */],{className:classes.moon}),/*#__PURE__*/react_default.a.createElement("img",{className:classes.avatar,alt:"CHENGHAN WU",src:avatar_default.a}))),/*#__PURE__*/react_default.a.createElement(esm_Grid_Grid,{item:true,container:true,direction:"row",justify:"center",alignItems:"center",className:classes.iconContainer,spacing:1},/*#__PURE__*/react_default.a.createElement(esm_Grid_Grid,{item:true},/*#__PURE__*/react_default.a.createElement("a",{href:"mailto:henry3214456@gmail.com"},/*#__PURE__*/react_default.a.createElement(Email_default.a,{className:classes.icon}))),/*#__PURE__*/react_default.a.createElement(esm_Grid_Grid,{item:true},/*#__PURE__*/react_default.a.createElement("a",{href:"https://www.linkedin.com/in/cheng-han-wu-0803/?locale=en_US"},/*#__PURE__*/react_default.a.createElement(LinkedIn_default.a,{className:classes.icon}))),/*#__PURE__*/react_default.a.createElement(esm_Grid_Grid,{item:true},/*#__PURE__*/react_default.a.createElement("a",{href:"https://github.com/henry32144"},/*#__PURE__*/react_default.a.createElement(GitHub_default.a,{style:{fontSize:"36px"},className:classes.icon}))),/*#__PURE__*/react_default.a.createElement(esm_Grid_Grid,{item:true},/*#__PURE__*/react_default.a.createElement("a",{href:"https://drive.google.com/file/d/1ZyHNY8QgwGa0M16bipT4JPGg403CbADK/view?usp=sharing"},/*#__PURE__*/react_default.a.createElement(Description_default.a,{style:{fontSize:"36px"},className:classes.icon})))),/*#__PURE__*/react_default.a.createElement(esm_Grid_Grid,{item:true,xs:10,sm:8,style:{zIndex:10}},/*#__PURE__*/react_default.a.createElement(Typography["a" /* default */],{variant:"h6",className:classes.introduceText},"FullStack Developer, Machine Learning Enthusiast, Gamer.")))),/*#__PURE__*/react_default.a.createElement(Box["a" /* default */],{className:Object(clsx_m["a" /* default */])(classes.baseEffect,classes.clouds),style:{height:height+"px"}}),/*#__PURE__*/react_default.a.createElement(Box["a" /* default */],{className:Object(clsx_m["a" /* default */])(classes.baseEffect,classes.twinkling)}));};banner_Banner.defaultProps={};/* harmony default export */ var banner = (banner_Banner);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/styles/colorManipulator.js
var colorManipulator = __webpack_require__("wClv");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__("kKAo");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Card/Card.js






var Card_styles = {
  /* Styles applied to the root element. */
  root: {
    overflow: 'hidden'
  }
};
var Card_Card = /*#__PURE__*/react["forwardRef"](function Card(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$raised = props.raised,
      raised = _props$raised === void 0 ? false : _props$raised,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["classes", "className", "raised"]);

  return /*#__PURE__*/react["createElement"](Paper["a" /* default */], Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, className),
    elevation: raised ? 8 : 1,
    ref: ref
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_Card_Card = (Object(withStyles["a" /* default */])(Card_styles, {
  name: 'MuiCard'
})(Card_Card));
// EXTERNAL MODULE: ./node_modules/react-is/index.js
var react_is = __webpack_require__("TOwV");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__("NqtD");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var styles_colorManipulator = __webpack_require__("ye/S");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__("Z3vd");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/ButtonGroup/ButtonGroup.js








 // Force a side effect so we don't have any override priority issue.
// eslint-disable-next-line no-unused-expressions

Button["a" /* default */].styles;
var ButtonGroup_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      borderRadius: theme.shape.borderRadius
    },

    /* Styles applied to the root element if `variant="contained"`. */
    contained: {
      boxShadow: theme.shadows[2]
    },

    /* Styles applied to the root element if `disableElevation={true}`. */
    disableElevation: {
      boxShadow: 'none'
    },

    /* Pseudo-class applied to child elements if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    },

    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
      flexDirection: 'column'
    },

    /* Styles applied to the children. */
    grouped: {
      minWidth: 40
    },

    /* Styles applied to the children if `orientation="horizontal"`. */
    groupedHorizontal: {
      '&:not(:first-child)': {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      },
      '&:not(:last-child)': {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      }
    },

    /* Styles applied to the children if `orientation="vertical"`. */
    groupedVertical: {
      '&:not(:first-child)': {
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0
      },
      '&:not(:last-child)': {
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
      }
    },

    /* Styles applied to the children if `variant="text"`. */
    groupedText: {},

    /* Styles applied to the children if `variant="text"` and `orientation="horizontal"`. */
    groupedTextHorizontal: {
      '&:not(:last-child)': {
        borderRight: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)')
      }
    },

    /* Styles applied to the children if `variant="text"` and `orientation="vertical"`. */
    groupedTextVertical: {
      '&:not(:last-child)': {
        borderBottom: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)')
      }
    },

    /* Styles applied to the children if `variant="text"` and `color="primary"`. */
    groupedTextPrimary: {
      '&:not(:last-child)': {
        borderColor: Object(styles_colorManipulator["c" /* fade */])(theme.palette.primary.main, 0.5)
      }
    },

    /* Styles applied to the children if `variant="text"` and `color="secondary"`. */
    groupedTextSecondary: {
      '&:not(:last-child)': {
        borderColor: Object(styles_colorManipulator["c" /* fade */])(theme.palette.secondary.main, 0.5)
      }
    },

    /* Styles applied to the children if `variant="outlined"`. */
    groupedOutlined: {},

    /* Styles applied to the children if `variant="outlined"` and `orientation="horizontal"`. */
    groupedOutlinedHorizontal: {
      '&:not(:first-child)': {
        marginLeft: -1
      },
      '&:not(:last-child)': {
        borderRightColor: 'transparent'
      }
    },

    /* Styles applied to the children if `variant="outlined"` and `orientation="vertical"`. */
    groupedOutlinedVertical: {
      '&:not(:first-child)': {
        marginTop: -1
      },
      '&:not(:last-child)': {
        borderBottomColor: 'transparent'
      }
    },

    /* Styles applied to the children if `variant="outlined"` and `color="primary"`. */
    groupedOutlinedPrimary: {
      '&:hover': {
        borderColor: theme.palette.primary.main
      }
    },

    /* Styles applied to the children if `variant="outlined"` and `color="secondary"`. */
    groupedOutlinedSecondary: {
      '&:hover': {
        borderColor: theme.palette.secondary.main
      }
    },

    /* Styles applied to the children if `variant="contained"`. */
    groupedContained: {
      boxShadow: 'none'
    },

    /* Styles applied to the children if `variant="contained"` and `orientation="horizontal"`. */
    groupedContainedHorizontal: {
      '&:not(:last-child)': {
        borderRight: "1px solid ".concat(theme.palette.grey[400]),
        '&$disabled': {
          borderRight: "1px solid ".concat(theme.palette.action.disabled)
        }
      }
    },

    /* Styles applied to the children if `variant="contained"` and `orientation="vertical"`. */
    groupedContainedVertical: {
      '&:not(:last-child)': {
        borderBottom: "1px solid ".concat(theme.palette.grey[400]),
        '&$disabled': {
          borderBottom: "1px solid ".concat(theme.palette.action.disabled)
        }
      }
    },

    /* Styles applied to the children if `variant="contained"` and `color="primary"`. */
    groupedContainedPrimary: {
      '&:not(:last-child)': {
        borderColor: theme.palette.primary.dark
      }
    },

    /* Styles applied to the children if `variant="contained"` and `color="secondary"`. */
    groupedContainedSecondary: {
      '&:not(:last-child)': {
        borderColor: theme.palette.secondary.dark
      }
    }
  };
};
var ButtonGroup_ButtonGroup = /*#__PURE__*/react["forwardRef"](function ButtonGroup(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableElevati = props.disableElevation,
      disableElevation = _props$disableElevati === void 0 ? false : _props$disableElevati,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      _props$disableRipple = props.disableRipple,
      disableRipple = _props$disableRipple === void 0 ? false : _props$disableRipple,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$orientation = props.orientation,
      orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'outlined' : _props$variant,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["children", "classes", "className", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "disableRipple", "fullWidth", "orientation", "size", "variant"]);

  var buttonClassName = Object(clsx_m["a" /* default */])(classes.grouped, classes["grouped".concat(Object(capitalize["a" /* default */])(orientation))], classes["grouped".concat(Object(capitalize["a" /* default */])(variant))], classes["grouped".concat(Object(capitalize["a" /* default */])(variant)).concat(Object(capitalize["a" /* default */])(orientation))], classes["grouped".concat(Object(capitalize["a" /* default */])(variant)).concat(color !== 'default' ? Object(capitalize["a" /* default */])(color) : '')], disabled && classes.disabled);
  return /*#__PURE__*/react["createElement"](Component, Object(esm_extends["a" /* default */])({
    role: "group",
    className: Object(clsx_m["a" /* default */])(classes.root, className, fullWidth && classes.fullWidth, disableElevation && classes.disableElevation, variant === 'contained' && classes.contained, orientation === 'vertical' && classes.vertical),
    ref: ref
  }, other), react["Children"].map(children, function (child) {
    if (! /*#__PURE__*/react["isValidElement"](child)) {
      return null;
    }

    if (false) {}

    return /*#__PURE__*/react["cloneElement"](child, {
      className: Object(clsx_m["a" /* default */])(buttonClassName, child.props.className),
      color: child.props.color || color,
      disabled: child.props.disabled || disabled,
      disableElevation: child.props.disableElevation || disableElevation,
      disableFocusRipple: disableFocusRipple,
      disableRipple: disableRipple,
      fullWidth: fullWidth,
      size: child.props.size || size,
      variant: child.props.variant || variant
    });
  }));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_ButtonGroup_ButtonGroup = (Object(withStyles["a" /* default */])(ButtonGroup_styles, {
  name: 'MuiButtonGroup'
})(ButtonGroup_ButtonGroup));
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

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Fade/Fade.js









var Fade_styles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};
var defaultTimeout = {
  enter: transitions["b" /* duration */].enteringScreen,
  exit: transitions["b" /* duration */].leavingScreen
};
/**
 * The Fade transition is used by the [Modal](/components/modal/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Fade_Fade = /*#__PURE__*/react["forwardRef"](function Fade(props, ref) {
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
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? Transition["a" /* default */] : _props$TransitionComp,
      _props$timeout = props.timeout,
      timeout = _props$timeout === void 0 ? defaultTimeout : _props$timeout,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "TransitionComponent", "timeout"]);

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
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);

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
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);

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
        opacity: 0,
        visibility: state === 'exited' && !inProp ? 'hidden' : undefined
      }, Fade_styles[state], style, children.props.style),
      ref: handleRef
    }, childProps));
  });
});
 false ? undefined : void 0;
/* harmony default export */ var esm_Fade_Fade = (Fade_Fade);
// EXTERNAL MODULE: ./node_modules/react-reveal/Flip.js
var Flip = __webpack_require__("bH/k");
var Flip_default = /*#__PURE__*/__webpack_require__.n(Flip);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__("KQm4");

// EXTERNAL MODULE: ./node_modules/lodash/isEmpty.js
var isEmpty = __webpack_require__("E+oP");
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty);

// EXTERNAL MODULE: ./node_modules/lodash/parseInt.js
var lodash_parseInt = __webpack_require__("XjeQ");
var parseInt_default = /*#__PURE__*/__webpack_require__.n(lodash_parseInt);

// EXTERNAL MODULE: ./node_modules/notistack/dist/notistack.esm.js + 2 modules
var notistack_esm = __webpack_require__("NKQG");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/List/ListContext.js

/**
 * @ignore - internal component.
 */

var ListContext = react["createContext"]({});

if (false) {}

/* harmony default export */ var List_ListContext = (ListContext);
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/List/List.js






var List_styles = {
  /* Styles applied to the root element. */
  root: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    position: 'relative'
  },

  /* Styles applied to the root element if `disablePadding={false}`. */
  padding: {
    paddingTop: 8,
    paddingBottom: 8
  },

  /* Styles applied to the root element if dense. */
  dense: {},

  /* Styles applied to the root element if a `subheader` is provided. */
  subheader: {
    paddingTop: 0
  }
};
var List_List = /*#__PURE__*/react["forwardRef"](function List(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'ul' : _props$component,
      _props$dense = props.dense,
      dense = _props$dense === void 0 ? false : _props$dense,
      _props$disablePadding = props.disablePadding,
      disablePadding = _props$disablePadding === void 0 ? false : _props$disablePadding,
      subheader = props.subheader,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["children", "classes", "className", "component", "dense", "disablePadding", "subheader"]);

  var context = react["useMemo"](function () {
    return {
      dense: dense
    };
  }, [dense]);
  return /*#__PURE__*/react["createElement"](List_ListContext.Provider, {
    value: context
  }, /*#__PURE__*/react["createElement"](Component, Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, className, dense && classes.dense, !disablePadding && classes.padding, subheader && classes.subheader),
    ref: ref
  }, other), subheader, children));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_List_List = (Object(withStyles["a" /* default */])(List_styles, {
  name: 'MuiList'
})(List_List));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js + 4 modules
var ButtonBase = __webpack_require__("VD++");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/isMuiElement.js
var isMuiElement = __webpack_require__("ucBr");

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__("i8i4");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/ListItem/ListItem.js











var ListItem_styles = function styles(theme) {
  return {
    /* Styles applied to the (normally root) `component` element. May be wrapped by a `container`. */
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      position: 'relative',
      textDecoration: 'none',
      width: '100%',
      boxSizing: 'border-box',
      textAlign: 'left',
      paddingTop: 8,
      paddingBottom: 8,
      '&$focusVisible': {
        backgroundColor: theme.palette.action.selected
      },
      '&$selected, &$selected:hover': {
        backgroundColor: theme.palette.action.selected
      },
      '&$disabled': {
        opacity: 0.5
      }
    },

    /* Styles applied to the `container` element if `children` includes `ListItemSecondaryAction`. */
    container: {
      position: 'relative'
    },

    /* Pseudo-class applied to the `component`'s `focusVisibleClassName` prop if `button={true}`. */
    focusVisible: {},

    /* Styles applied to the `component` element if dense. */
    dense: {
      paddingTop: 4,
      paddingBottom: 4
    },

    /* Styles applied to the `component` element if `alignItems="flex-start"`. */
    alignItemsFlexStart: {
      alignItems: 'flex-start'
    },

    /* Pseudo-class applied to the inner `component` element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the inner `component` element if `divider={true}`. */
    divider: {
      borderBottom: "1px solid ".concat(theme.palette.divider),
      backgroundClip: 'padding-box'
    },

    /* Styles applied to the inner `component` element if `disableGutters={false}`. */
    gutters: {
      paddingLeft: 16,
      paddingRight: 16
    },

    /* Styles applied to the inner `component` element if `button={true}`. */
    button: {
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shortest
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: theme.palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the `component` element if `children` includes `ListItemSecondaryAction`. */
    secondaryAction: {
      // Add some space to avoid collision as `ListItemSecondaryAction`
      // is absolutely positioned.
      paddingRight: 48
    },

    /* Pseudo-class applied to the root element if `selected={true}`. */
    selected: {}
  };
};
var useEnhancedEffect = typeof window === 'undefined' ? react["useEffect"] : react["useLayoutEffect"];
/**
 * Uses an additional container component if `ListItemSecondaryAction` is the last child.
 */

var ListItem_ListItem = /*#__PURE__*/react["forwardRef"](function ListItem(props, ref) {
  var _props$alignItems = props.alignItems,
      alignItems = _props$alignItems === void 0 ? 'center' : _props$alignItems,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
      _props$button = props.button,
      button = _props$button === void 0 ? false : _props$button,
      childrenProp = props.children,
      classes = props.classes,
      className = props.className,
      componentProp = props.component,
      _props$ContainerCompo = props.ContainerComponent,
      ContainerComponent = _props$ContainerCompo === void 0 ? 'li' : _props$ContainerCompo,
      _props$ContainerProps = props.ContainerProps;
  _props$ContainerProps = _props$ContainerProps === void 0 ? {} : _props$ContainerProps;

  var ContainerClassName = _props$ContainerProps.className,
      ContainerProps = Object(objectWithoutProperties["a" /* default */])(_props$ContainerProps, ["className"]),
      _props$dense = props.dense,
      dense = _props$dense === void 0 ? false : _props$dense,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      _props$divider = props.divider,
      divider = _props$divider === void 0 ? false : _props$divider,
      focusVisibleClassName = props.focusVisibleClassName,
      _props$selected = props.selected,
      selected = _props$selected === void 0 ? false : _props$selected,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["alignItems", "autoFocus", "button", "children", "classes", "className", "component", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "divider", "focusVisibleClassName", "selected"]);

  var context = react["useContext"](List_ListContext);
  var childContext = {
    dense: dense || context.dense || false,
    alignItems: alignItems
  };
  var listItemRef = react["useRef"](null);
  useEnhancedEffect(function () {
    if (autoFocus) {
      if (listItemRef.current) {
        listItemRef.current.focus();
      } else if (false) {}
    }
  }, [autoFocus]);
  var children = react["Children"].toArray(childrenProp);
  var hasSecondaryAction = children.length && Object(isMuiElement["a" /* default */])(children[children.length - 1], ['ListItemSecondaryAction']);
  var handleOwnRef = react["useCallback"](function (instance) {
    // #StrictMode ready
    listItemRef.current = react_dom["findDOMNode"](instance);
  }, []);
  var handleRef = Object(useForkRef["a" /* default */])(handleOwnRef, ref);

  var componentProps = Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, className, childContext.dense && classes.dense, !disableGutters && classes.gutters, divider && classes.divider, disabled && classes.disabled, button && classes.button, alignItems !== "center" && classes.alignItemsFlexStart, hasSecondaryAction && classes.secondaryAction, selected && classes.selected),
    disabled: disabled
  }, other);

  var Component = componentProp || 'li';

  if (button) {
    componentProps.component = componentProp || 'div';
    componentProps.focusVisibleClassName = Object(clsx_m["a" /* default */])(classes.focusVisible, focusVisibleClassName);
    Component = ButtonBase["a" /* default */];
  }

  if (hasSecondaryAction) {
    // Use div by default.
    Component = !componentProps.component && !componentProp ? 'div' : Component; // Avoid nesting of li > li.

    if (ContainerComponent === 'li') {
      if (Component === 'li') {
        Component = 'div';
      } else if (componentProps.component === 'li') {
        componentProps.component = 'div';
      }
    }

    return /*#__PURE__*/react["createElement"](List_ListContext.Provider, {
      value: childContext
    }, /*#__PURE__*/react["createElement"](ContainerComponent, Object(esm_extends["a" /* default */])({
      className: Object(clsx_m["a" /* default */])(classes.container, ContainerClassName),
      ref: handleRef
    }, ContainerProps), /*#__PURE__*/react["createElement"](Component, componentProps, children), children.pop()));
  }

  return /*#__PURE__*/react["createElement"](List_ListContext.Provider, {
    value: childContext
  }, /*#__PURE__*/react["createElement"](Component, Object(esm_extends["a" /* default */])({
    ref: handleRef
  }, componentProps), children));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_ListItem_ListItem = (Object(withStyles["a" /* default */])(ListItem_styles, {
  name: 'MuiListItem'
})(ListItem_ListItem));
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/ListItemText/ListItemText.js







var ListItemText_styles = {
  /* Styles applied to the root element. */
  root: {
    flex: '1 1 auto',
    minWidth: 0,
    marginTop: 4,
    marginBottom: 4
  },

  /* Styles applied to the `Typography` components if primary and secondary are set. */
  multiline: {
    marginTop: 6,
    marginBottom: 6
  },

  /* Styles applied to the `Typography` components if dense. */
  dense: {},

  /* Styles applied to the root element if `inset={true}`. */
  inset: {
    paddingLeft: 56
  },

  /* Styles applied to the primary `Typography` component. */
  primary: {},

  /* Styles applied to the secondary `Typography` component. */
  secondary: {}
};
var ListItemText_ListItemText = /*#__PURE__*/react["forwardRef"](function ListItemText(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$disableTypogra = props.disableTypography,
      disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      _props$inset = props.inset,
      inset = _props$inset === void 0 ? false : _props$inset,
      primaryProp = props.primary,
      primaryTypographyProps = props.primaryTypographyProps,
      secondaryProp = props.secondary,
      secondaryTypographyProps = props.secondaryTypographyProps,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["children", "classes", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"]);

  var _React$useContext = react["useContext"](List_ListContext),
      dense = _React$useContext.dense;

  var primary = primaryProp != null ? primaryProp : children;

  if (primary != null && primary.type !== Typography["a" /* default */] && !disableTypography) {
    primary = /*#__PURE__*/react["createElement"](Typography["a" /* default */], Object(esm_extends["a" /* default */])({
      variant: dense ? 'body2' : 'body1',
      className: classes.primary,
      component: "span",
      display: "block"
    }, primaryTypographyProps), primary);
  }

  var secondary = secondaryProp;

  if (secondary != null && secondary.type !== Typography["a" /* default */] && !disableTypography) {
    secondary = /*#__PURE__*/react["createElement"](Typography["a" /* default */], Object(esm_extends["a" /* default */])({
      variant: "body2",
      className: classes.secondary,
      color: "textSecondary",
      display: "block"
    }, secondaryTypographyProps), secondary);
  }

  return /*#__PURE__*/react["createElement"]("div", Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, className, dense && classes.dense, inset && classes.inset, primary && secondary && classes.multiline),
    ref: ref
  }, other), primary, secondary);
});
 false ? undefined : void 0;
/* harmony default export */ var esm_ListItemText_ListItemText = (Object(withStyles["a" /* default */])(ListItemText_styles, {
  name: 'MuiListItemText'
})(ListItemText_ListItemText));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createSvgIcon.js
var createSvgIcon = __webpack_require__("5AJ6");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/internal/svg-icons/Cancel.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ var Cancel = (Object(createSvgIcon["a" /* default */])( /*#__PURE__*/react["createElement"]("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), 'Cancel'));
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js











var Chip_styles = function styles(theme) {
  var backgroundColor = theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700];
  var deleteIconColor = Object(styles_colorManipulator["c" /* fade */])(theme.palette.text.primary, 0.26);
  return {
    /* Styles applied to the root element. */
    root: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(13),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 32,
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor: backgroundColor,
      borderRadius: 32 / 2,
      whiteSpace: 'nowrap',
      transition: theme.transitions.create(['background-color', 'box-shadow']),
      // label will inherit this from root, then `clickable` class overrides this for both
      cursor: 'default',
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0,
      textDecoration: 'none',
      border: 'none',
      // Remove `button` border
      padding: 0,
      // Remove `button` padding
      verticalAlign: 'middle',
      boxSizing: 'border-box',
      '&$disabled': {
        opacity: 0.5,
        pointerEvents: 'none'
      },
      '& $avatar': {
        marginLeft: 5,
        marginRight: -6,
        width: 24,
        height: 24,
        color: theme.palette.type === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
        fontSize: theme.typography.pxToRem(12)
      },
      '& $avatarColorPrimary': {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.dark
      },
      '& $avatarColorSecondary': {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.dark
      },
      '& $avatarSmall': {
        marginLeft: 4,
        marginRight: -4,
        width: 18,
        height: 18,
        fontSize: theme.typography.pxToRem(10)
      }
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      height: 24
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

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `onClick` is defined or `clickable={true}`. */
    clickable: {
      userSelect: 'none',
      WebkitTapHighlightColor: 'transparent',
      cursor: 'pointer',
      '&:hover, &:focus': {
        backgroundColor: Object(styles_colorManipulator["b" /* emphasize */])(backgroundColor, 0.08)
      },
      '&:active': {
        boxShadow: theme.shadows[1]
      }
    },

    /* Styles applied to the root element if `onClick` and `color="primary"` is defined or `clickable={true}`. */
    clickableColorPrimary: {
      '&:hover, &:focus': {
        backgroundColor: Object(styles_colorManipulator["b" /* emphasize */])(theme.palette.primary.main, 0.08)
      }
    },

    /* Styles applied to the root element if `onClick` and `color="secondary"` is defined or `clickable={true}`. */
    clickableColorSecondary: {
      '&:hover, &:focus': {
        backgroundColor: Object(styles_colorManipulator["b" /* emphasize */])(theme.palette.secondary.main, 0.08)
      }
    },

    /* Styles applied to the root element if `onDelete` is defined. */
    deletable: {
      '&:focus': {
        backgroundColor: Object(styles_colorManipulator["b" /* emphasize */])(backgroundColor, 0.08)
      }
    },

    /* Styles applied to the root element if `onDelete` and `color="primary"` is defined. */
    deletableColorPrimary: {
      '&:focus': {
        backgroundColor: Object(styles_colorManipulator["b" /* emphasize */])(theme.palette.primary.main, 0.2)
      }
    },

    /* Styles applied to the root element if `onDelete` and `color="secondary"` is defined. */
    deletableColorSecondary: {
      '&:focus': {
        backgroundColor: Object(styles_colorManipulator["b" /* emphasize */])(theme.palette.secondary.main, 0.2)
      }
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      backgroundColor: 'transparent',
      border: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'),
      '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
        backgroundColor: Object(styles_colorManipulator["c" /* fade */])(theme.palette.text.primary, theme.palette.action.hoverOpacity)
      },
      '& $avatar': {
        marginLeft: 4
      },
      '& $avatarSmall': {
        marginLeft: 2
      },
      '& $icon': {
        marginLeft: 4
      },
      '& $iconSmall': {
        marginLeft: 2
      },
      '& $deleteIcon': {
        marginRight: 5
      },
      '& $deleteIconSmall': {
        marginRight: 3
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
    outlinedPrimary: {
      color: theme.palette.primary.main,
      border: "1px solid ".concat(theme.palette.primary.main),
      '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
        backgroundColor: Object(styles_colorManipulator["c" /* fade */])(theme.palette.primary.main, theme.palette.action.hoverOpacity)
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
    outlinedSecondary: {
      color: theme.palette.secondary.main,
      border: "1px solid ".concat(theme.palette.secondary.main),
      '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
        backgroundColor: Object(styles_colorManipulator["c" /* fade */])(theme.palette.secondary.main, theme.palette.action.hoverOpacity)
      }
    },
    // TODO v5: remove

    /* Styles applied to the `avatar` element. */
    avatar: {},

    /* Styles applied to the `avatar` element if `size="small"`. */
    avatarSmall: {},

    /* Styles applied to the `avatar` element if `color="primary"`. */
    avatarColorPrimary: {},

    /* Styles applied to the `avatar` element if `color="secondary"`. */
    avatarColorSecondary: {},

    /* Styles applied to the `icon` element. */
    icon: {
      color: theme.palette.type === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
      marginLeft: 5,
      marginRight: -6
    },

    /* Styles applied to the `icon` element if `size="small"`. */
    iconSmall: {
      width: 18,
      height: 18,
      marginLeft: 4,
      marginRight: -4
    },

    /* Styles applied to the `icon` element if `color="primary"`. */
    iconColorPrimary: {
      color: 'inherit'
    },

    /* Styles applied to the `icon` element if `color="secondary"`. */
    iconColorSecondary: {
      color: 'inherit'
    },

    /* Styles applied to the label `span` element. */
    label: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      paddingLeft: 12,
      paddingRight: 12,
      whiteSpace: 'nowrap'
    },

    /* Styles applied to the label `span` element if `size="small"`. */
    labelSmall: {
      paddingLeft: 8,
      paddingRight: 8
    },

    /* Styles applied to the `deleteIcon` element. */
    deleteIcon: {
      WebkitTapHighlightColor: 'transparent',
      color: deleteIconColor,
      height: 22,
      width: 22,
      cursor: 'pointer',
      margin: '0 5px 0 -6px',
      '&:hover': {
        color: Object(styles_colorManipulator["c" /* fade */])(deleteIconColor, 0.4)
      }
    },

    /* Styles applied to the `deleteIcon` element if `size="small"`. */
    deleteIconSmall: {
      height: 16,
      width: 16,
      marginRight: 4,
      marginLeft: -4
    },

    /* Styles applied to the deleteIcon element if `color="primary"` and `variant="default"`. */
    deleteIconColorPrimary: {
      color: Object(styles_colorManipulator["c" /* fade */])(theme.palette.primary.contrastText, 0.7),
      '&:hover, &:active': {
        color: theme.palette.primary.contrastText
      }
    },

    /* Styles applied to the deleteIcon element if `color="secondary"` and `variant="default"`. */
    deleteIconColorSecondary: {
      color: Object(styles_colorManipulator["c" /* fade */])(theme.palette.secondary.contrastText, 0.7),
      '&:hover, &:active': {
        color: theme.palette.secondary.contrastText
      }
    },

    /* Styles applied to the deleteIcon element if `color="primary"` and `variant="outlined"`. */
    deleteIconOutlinedColorPrimary: {
      color: Object(styles_colorManipulator["c" /* fade */])(theme.palette.primary.main, 0.7),
      '&:hover, &:active': {
        color: theme.palette.primary.main
      }
    },

    /* Styles applied to the deleteIcon element if `color="secondary"` and `variant="outlined"`. */
    deleteIconOutlinedColorSecondary: {
      color: Object(styles_colorManipulator["c" /* fade */])(theme.palette.secondary.main, 0.7),
      '&:hover, &:active': {
        color: theme.palette.secondary.main
      }
    }
  };
};

function isDeleteKeyboardEvent(keyboardEvent) {
  return keyboardEvent.key === 'Backspace' || keyboardEvent.key === 'Delete';
}
/**
 * Chips represent complex entities in small blocks, such as a contact.
 */


var Chip_Chip = /*#__PURE__*/react["forwardRef"](function Chip(props, ref) {
  var avatarProp = props.avatar,
      classes = props.classes,
      className = props.className,
      clickableProp = props.clickable,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      ComponentProp = props.component,
      deleteIconProp = props.deleteIcon,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      iconProp = props.icon,
      label = props.label,
      onClick = props.onClick,
      onDelete = props.onDelete,
      onKeyDown = props.onKeyDown,
      onKeyUp = props.onKeyUp,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'default' : _props$variant,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["avatar", "classes", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant"]);

  var chipRef = react["useRef"](null);
  var handleRef = Object(useForkRef["a" /* default */])(chipRef, ref);

  var handleDeleteIconClick = function handleDeleteIconClick(event) {
    // Stop the event from bubbling up to the `Chip`
    event.stopPropagation();

    if (onDelete) {
      onDelete(event);
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
      // will be handled in keyUp, otherwise some browsers
      // might init navigation
      event.preventDefault();
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  var handleKeyUp = function handleKeyUp(event) {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target) {
      if (onDelete && isDeleteKeyboardEvent(event)) {
        onDelete(event);
      } else if (event.key === 'Escape' && chipRef.current) {
        chipRef.current.blur();
      }
    }

    if (onKeyUp) {
      onKeyUp(event);
    }
  };

  var clickable = clickableProp !== false && onClick ? true : clickableProp;
  var small = size === 'small';
  var Component = ComponentProp || (clickable ? ButtonBase["a" /* default */] : 'div');
  var moreProps = Component === ButtonBase["a" /* default */] ? {
    component: 'div'
  } : {};
  var deleteIcon = null;

  if (onDelete) {
    var customClasses = Object(clsx_m["a" /* default */])(color !== 'default' && (variant === "default" ? classes["deleteIconColor".concat(Object(capitalize["a" /* default */])(color))] : classes["deleteIconOutlinedColor".concat(Object(capitalize["a" /* default */])(color))]), small && classes.deleteIconSmall);
    deleteIcon = deleteIconProp && /*#__PURE__*/react["isValidElement"](deleteIconProp) ? /*#__PURE__*/react["cloneElement"](deleteIconProp, {
      className: Object(clsx_m["a" /* default */])(deleteIconProp.props.className, classes.deleteIcon, customClasses),
      onClick: handleDeleteIconClick
    }) : /*#__PURE__*/react["createElement"](Cancel, {
      className: Object(clsx_m["a" /* default */])(classes.deleteIcon, customClasses),
      onClick: handleDeleteIconClick
    });
  }

  var avatar = null;

  if (avatarProp && /*#__PURE__*/react["isValidElement"](avatarProp)) {
    avatar = /*#__PURE__*/react["cloneElement"](avatarProp, {
      className: Object(clsx_m["a" /* default */])(classes.avatar, avatarProp.props.className, small && classes.avatarSmall, color !== 'default' && classes["avatarColor".concat(Object(capitalize["a" /* default */])(color))])
    });
  }

  var icon = null;

  if (iconProp && /*#__PURE__*/react["isValidElement"](iconProp)) {
    icon = /*#__PURE__*/react["cloneElement"](iconProp, {
      className: Object(clsx_m["a" /* default */])(classes.icon, iconProp.props.className, small && classes.iconSmall, color !== 'default' && classes["iconColor".concat(Object(capitalize["a" /* default */])(color))])
    });
  }

  if (false) {}

  return /*#__PURE__*/react["createElement"](Component, Object(esm_extends["a" /* default */])({
    role: clickable || onDelete ? 'button' : undefined,
    className: Object(clsx_m["a" /* default */])(classes.root, className, color !== 'default' && [classes["color".concat(Object(capitalize["a" /* default */])(color))], clickable && classes["clickableColor".concat(Object(capitalize["a" /* default */])(color))], onDelete && classes["deletableColor".concat(Object(capitalize["a" /* default */])(color))]], variant !== "default" && [classes.outlined, {
      'primary': classes.outlinedPrimary,
      'secondary': classes.outlinedSecondary
    }[color]], disabled && classes.disabled, small && classes.sizeSmall, clickable && classes.clickable, onDelete && classes.deletable),
    "aria-disabled": disabled ? true : undefined,
    tabIndex: clickable || onDelete ? 0 : undefined,
    onClick: onClick,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    ref: handleRef
  }, moreProps, other), avatar || icon, /*#__PURE__*/react["createElement"]("span", {
    className: Object(clsx_m["a" /* default */])(classes.label, small && classes.labelSmall)
  }, label), deleteIcon);
});
 false ? undefined : void 0;
/* harmony default export */ var esm_Chip_Chip = (Object(withStyles["a" /* default */])(Chip_styles, {
  name: 'MuiChip'
})(Chip_Chip));
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Grow/Grow.js









function getScale(value) {
  return "scale(".concat(value, ", ").concat(Math.pow(value, 2), ")");
}

var Grow_styles = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: 'none'
  }
};
/**
 * The Grow transition is used by the [Tooltip](/components/tooltips/) and
 * [Popover](/components/popover/) components.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Grow_Grow = /*#__PURE__*/react["forwardRef"](function Grow(props, ref) {
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
      timeout = _props$timeout === void 0 ? 'auto' : _props$timeout,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? Transition["a" /* default */] : _props$TransitionComp,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["children", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]);

  var timer = react["useRef"]();
  var autoTimeout = react["useRef"]();
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

    var _getTransitionProps = Object(utils["a" /* getTransitionProps */])({
      style: style,
      timeout: timeout
    }, {
      mode: 'enter'
    }),
        transitionDuration = _getTransitionProps.duration,
        delay = _getTransitionProps.delay;

    var duration;

    if (timeout === 'auto') {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }

    node.style.transition = [theme.transitions.create('opacity', {
      duration: duration,
      delay: delay
    }), theme.transitions.create('transform', {
      duration: duration * 0.666,
      delay: delay
    })].join(',');

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(onEntered);
  var handleExiting = normalizedTransitionCallback(onExiting);
  var handleExit = normalizedTransitionCallback(function (node) {
    var _getTransitionProps2 = Object(utils["a" /* getTransitionProps */])({
      style: style,
      timeout: timeout
    }, {
      mode: 'exit'
    }),
        transitionDuration = _getTransitionProps2.duration,
        delay = _getTransitionProps2.delay;

    var duration;

    if (timeout === 'auto') {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }

    node.style.transition = [theme.transitions.create('opacity', {
      duration: duration,
      delay: delay
    }), theme.transitions.create('transform', {
      duration: duration * 0.666,
      delay: delay || duration * 0.333
    })].join(',');
    node.style.opacity = '0';
    node.style.transform = getScale(0.75);

    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(onExited);

  var addEndListener = function addEndListener(nodeOrNext, maybeNext) {
    var next = enableStrictModeCompat ? nodeOrNext : maybeNext;

    if (timeout === 'auto') {
      timer.current = setTimeout(next, autoTimeout.current || 0);
    }
  };

  react["useEffect"](function () {
    return function () {
      clearTimeout(timer.current);
    };
  }, []);
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
    addEndListener: addEndListener,
    timeout: timeout === 'auto' ? null : timeout
  }, other), function (state, childProps) {
    return /*#__PURE__*/react["cloneElement"](children, Object(esm_extends["a" /* default */])({
      style: Object(esm_extends["a" /* default */])({
        opacity: 0,
        transform: getScale(0.75),
        visibility: state === 'exited' && !inProp ? 'hidden' : undefined
      }, Grow_styles[state], style, children.props.style),
      ref: handleRef
    }, childProps));
  });
});
 false ? undefined : void 0;
Grow_Grow.muiSupportAuto = true;
/* harmony default export */ var esm_Grow_Grow = (Grow_Grow);
// EXTERNAL MODULE: ./node_modules/@material-ui/utils/esm/formatMuiErrorMessage.js
var formatMuiErrorMessage = __webpack_require__("TrhM");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/FormControl/formControlState.js

function formControlState(_ref) {
  var props = _ref.props,
      states = _ref.states,
      muiFormControl = _ref.muiFormControl;
  return states.reduce(function (acc, state) {
    acc[state] = props[state];

    if (muiFormControl) {
      if (typeof props[state] === 'undefined') {
        acc[state] = muiFormControl[state];
      }
    }

    return acc;
  }, {});
}
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js

/**
 * @ignore - internal component.
 */

var FormControlContext = react["createContext"]();

if (false) {}

function useFormControl() {
  return react["useContext"](FormControlContext);
}
/* harmony default export */ var FormControl_FormControlContext = (FormControlContext);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/debounce.js
var debounce = __webpack_require__("l3Wi");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/TextareaAutosize/TextareaAutosize.js






function getStyleValue(computedStyle, property) {
  return parseInt(computedStyle[property], 10) || 0;
}

var TextareaAutosize_useEnhancedEffect = typeof window !== 'undefined' ? react["useLayoutEffect"] : react["useEffect"];
var TextareaAutosize_styles = {
  /* Styles applied to the shadow textarea element. */
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: 'hidden',
    // Remove from the content flow
    position: 'absolute',
    // Ignore the scrollbar width
    overflow: 'hidden',
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: 'translateZ(0)'
  }
};
var TextareaAutosize_TextareaAutosize = /*#__PURE__*/react["forwardRef"](function TextareaAutosize(props, ref) {
  var onChange = props.onChange,
      rows = props.rows,
      rowsMax = props.rowsMax,
      _props$rowsMin = props.rowsMin,
      rowsMinProp = _props$rowsMin === void 0 ? 1 : _props$rowsMin,
      style = props.style,
      value = props.value,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["onChange", "rows", "rowsMax", "rowsMin", "style", "value"]);

  var rowsMin = rows || rowsMinProp;

  var _React$useRef = react["useRef"](value != null),
      isControlled = _React$useRef.current;

  var inputRef = react["useRef"](null);
  var handleRef = Object(useForkRef["a" /* default */])(ref, inputRef);
  var shadowRef = react["useRef"](null);
  var renders = react["useRef"](0);

  var _React$useState = react["useState"]({}),
      state = _React$useState[0],
      setState = _React$useState[1];

  var syncHeight = react["useCallback"](function () {
    var input = inputRef.current;
    var computedStyle = window.getComputedStyle(input);
    var inputShallow = shadowRef.current;
    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || props.placeholder || 'x';

    if (inputShallow.value.slice(-1) === '\n') {
      // Certain fonts which overflow the line height will cause the textarea
      // to report a different scrollHeight depending on whether the last line
      // is empty. Make it non-empty to avoid this issue.
      inputShallow.value += ' ';
    }

    var boxSizing = computedStyle['box-sizing'];
    var padding = getStyleValue(computedStyle, 'padding-bottom') + getStyleValue(computedStyle, 'padding-top');
    var border = getStyleValue(computedStyle, 'border-bottom-width') + getStyleValue(computedStyle, 'border-top-width'); // The height of the inner content

    var innerHeight = inputShallow.scrollHeight - padding; // Measure height of a textarea with a single row

    inputShallow.value = 'x';
    var singleRowHeight = inputShallow.scrollHeight - padding; // The height of the outer content

    var outerHeight = innerHeight;

    if (rowsMin) {
      outerHeight = Math.max(Number(rowsMin) * singleRowHeight, outerHeight);
    }

    if (rowsMax) {
      outerHeight = Math.min(Number(rowsMax) * singleRowHeight, outerHeight);
    }

    outerHeight = Math.max(outerHeight, singleRowHeight); // Take the box sizing into account for applying this value as a style.

    var outerHeightStyle = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
    var overflow = Math.abs(outerHeight - innerHeight) <= 1;
    setState(function (prevState) {
      // Need a large enough difference to update the height.
      // This prevents infinite rendering loop.
      if (renders.current < 20 && (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow)) {
        renders.current += 1;
        return {
          overflow: overflow,
          outerHeightStyle: outerHeightStyle
        };
      }

      if (false) {}

      return prevState;
    });
  }, [rowsMax, rowsMin, props.placeholder]);
  react["useEffect"](function () {
    var handleResize = Object(debounce["a" /* default */])(function () {
      renders.current = 0;
      syncHeight();
    });
    window.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener('resize', handleResize);
    };
  }, [syncHeight]);
  TextareaAutosize_useEnhancedEffect(function () {
    syncHeight();
  });
  react["useEffect"](function () {
    renders.current = 0;
  }, [value]);

  var handleChange = function handleChange(event) {
    renders.current = 0;

    if (!isControlled) {
      syncHeight();
    }

    if (onChange) {
      onChange(event);
    }
  };

  return /*#__PURE__*/react["createElement"](react["Fragment"], null, /*#__PURE__*/react["createElement"]("textarea", Object(esm_extends["a" /* default */])({
    value: value,
    onChange: handleChange,
    ref: handleRef // Apply the rows prop to get a "correct" first SSR paint
    ,
    rows: rowsMin,
    style: Object(esm_extends["a" /* default */])({
      height: state.outerHeightStyle,
      // Need a large enough difference to allow scrolling.
      // This prevents infinite rendering loop.
      overflow: state.overflow ? 'hidden' : null
    }, style)
  }, other)), /*#__PURE__*/react["createElement"]("textarea", {
    "aria-hidden": true,
    className: props.className,
    readOnly: true,
    ref: shadowRef,
    tabIndex: -1,
    style: Object(esm_extends["a" /* default */])({}, TextareaAutosize_styles.shadow, style)
  }));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_TextareaAutosize_TextareaAutosize = (TextareaAutosize_TextareaAutosize);
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/InputBase/utils.js
// Supports determination of isControlled().
// Controlled input accepts its current value as a prop.
//
// @see https://facebook.github.io/react/docs/forms.html#controlled-components
// @param value
// @returns {boolean} true if string (including '') or number (including zero)
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
} // Determine if field is empty or filled.
// Response determines if label is presented above field or as placeholder.
//
// @param obj
// @param SSR
// @returns {boolean} False when not present or empty string.
//                    True when any number or string with length.

function isFilled(obj) {
  var SSR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return obj && (hasValue(obj.value) && obj.value !== '' || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== '');
} // Determine if an Input is adorned on start.
// It's corresponding to the left with LTR.
//
// @param obj
// @returns {boolean} False when no adornments.
//                    True when adorned at the start.

function isAdornedStart(obj) {
  return obj.startAdornment;
}
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/InputBase/InputBase.js



/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */











var InputBase_styles = function styles(theme) {
  var light = theme.palette.type === 'light';
  var placeholder = {
    color: 'currentColor',
    opacity: light ? 0.42 : 0.5,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter
    })
  };
  var placeholderHidden = {
    opacity: '0 !important'
  };
  var placeholderVisible = {
    opacity: light ? 0.42 : 0.5
  };
  return {
    '@global': {
      '@keyframes mui-auto-fill': {},
      '@keyframes mui-auto-fill-cancel': {}
    },

    /* Styles applied to the root element. */
    root: Object(esm_extends["a" /* default */])({}, theme.typography.body1, {
      color: theme.palette.text.primary,
      lineHeight: '1.1876em',
      // Reset (19px), match the native input line-height
      boxSizing: 'border-box',
      // Prevent padding issue with fullWidth.
      position: 'relative',
      cursor: 'text',
      display: 'inline-flex',
      alignItems: 'center',
      '&$disabled': {
        color: theme.palette.text.disabled,
        cursor: 'default'
      }
    }),

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {},

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {},

    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {},

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px"),
      '&$marginDense': {
        paddingTop: 4 - 1
      }
    },

    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    },

    /* Styles applied to the `input` element. */
    input: {
      font: 'inherit',
      letterSpacing: 'inherit',
      color: 'currentColor',
      padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px"),
      border: 0,
      boxSizing: 'content-box',
      background: 'none',
      height: '1.1876em',
      // Reset (19px), match the native input line-height
      margin: 0,
      // Reset for Safari
      WebkitTapHighlightColor: 'transparent',
      display: 'block',
      // Make the flex item shrink with Firefox
      minWidth: 0,
      width: '100%',
      // Fix IE 11 width issue
      animationName: 'mui-auto-fill-cancel',
      animationDuration: '10ms',
      '&::-webkit-input-placeholder': placeholder,
      '&::-moz-placeholder': placeholder,
      // Firefox 19+
      '&:-ms-input-placeholder': placeholder,
      // IE 11
      '&::-ms-input-placeholder': placeholder,
      // Edge
      '&:focus': {
        outline: 0
      },
      // Reset Firefox invalid required input style
      '&:invalid': {
        boxShadow: 'none'
      },
      '&::-webkit-search-decoration': {
        // Remove the padding when type=search.
        '-webkit-appearance': 'none'
      },
      // Show and hide the placeholder logic
      'label[data-shrink=false] + $formControl &': {
        '&::-webkit-input-placeholder': placeholderHidden,
        '&::-moz-placeholder': placeholderHidden,
        // Firefox 19+
        '&:-ms-input-placeholder': placeholderHidden,
        // IE 11
        '&::-ms-input-placeholder': placeholderHidden,
        // Edge
        '&:focus::-webkit-input-placeholder': placeholderVisible,
        '&:focus::-moz-placeholder': placeholderVisible,
        // Firefox 19+
        '&:focus:-ms-input-placeholder': placeholderVisible,
        // IE 11
        '&:focus::-ms-input-placeholder': placeholderVisible // Edge

      },
      '&$disabled': {
        opacity: 1 // Reset iOS opacity

      },
      '&:-webkit-autofill': {
        animationDuration: '5000s',
        animationName: 'mui-auto-fill'
      }
    },

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 4 - 1
    },

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      height: 'auto',
      resize: 'none',
      padding: 0
    },

    /* Styles applied to the `input` element if `type="search"`. */
    inputTypeSearch: {
      // Improve type search style.
      '-moz-appearance': 'textfield',
      '-webkit-appearance': 'textfield'
    },

    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {},

    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {},

    /* Styles applied to the `input` element if `hiddenLabel={true}`. */
    inputHiddenLabel: {}
  };
};
var InputBase_useEnhancedEffect = typeof window === 'undefined' ? react["useEffect"] : react["useLayoutEffect"];
/**
 * `InputBase` contains as few styles as possible.
 * It aims to be a simple building block for creating an input.
 * It contains a load of style reset and some state logic.
 */

var InputBase_InputBase = /*#__PURE__*/react["forwardRef"](function InputBase(props, ref) {
  var ariaDescribedby = props['aria-describedby'],
      autoComplete = props.autoComplete,
      autoFocus = props.autoFocus,
      classes = props.classes,
      className = props.className,
      color = props.color,
      defaultValue = props.defaultValue,
      disabled = props.disabled,
      endAdornment = props.endAdornment,
      error = props.error,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      id = props.id,
      _props$inputComponent = props.inputComponent,
      inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
      _props$inputProps = props.inputProps,
      inputPropsProp = _props$inputProps === void 0 ? {} : _props$inputProps,
      inputRefProp = props.inputRef,
      margin = props.margin,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onClick = props.onClick,
      onFocus = props.onFocus,
      onKeyDown = props.onKeyDown,
      onKeyUp = props.onKeyUp,
      placeholder = props.placeholder,
      readOnly = props.readOnly,
      renderSuffix = props.renderSuffix,
      rows = props.rows,
      rowsMax = props.rowsMax,
      rowsMin = props.rowsMin,
      startAdornment = props.startAdornment,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      valueProp = props.value,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["aria-describedby", "autoComplete", "autoFocus", "classes", "className", "color", "defaultValue", "disabled", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "rowsMax", "rowsMin", "startAdornment", "type", "value"]);

  var value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;

  var _React$useRef = react["useRef"](value != null),
      isControlled = _React$useRef.current;

  var inputRef = react["useRef"]();
  var handleInputRefWarning = react["useCallback"](function (instance) {
    if (false) {}
  }, []);
  var handleInputPropsRefProp = Object(useForkRef["a" /* default */])(inputPropsProp.ref, handleInputRefWarning);
  var handleInputRefProp = Object(useForkRef["a" /* default */])(inputRefProp, handleInputPropsRefProp);
  var handleInputRef = Object(useForkRef["a" /* default */])(inputRef, handleInputRefProp);

  var _React$useState = react["useState"](false),
      focused = _React$useState[0],
      setFocused = _React$useState[1];

  var muiFormControl = useFormControl();

  if (false) {}

  var fcs = formControlState({
    props: props,
    muiFormControl: muiFormControl,
    states: ['color', 'disabled', 'error', 'hiddenLabel', 'margin', 'required', 'filled']
  });
  fcs.focused = muiFormControl ? muiFormControl.focused : focused; // The blur won't fire when the disabled state is set on a focused input.
  // We need to book keep the focused state manually.

  react["useEffect"](function () {
    if (!muiFormControl && disabled && focused) {
      setFocused(false);

      if (onBlur) {
        onBlur();
      }
    }
  }, [muiFormControl, disabled, focused, onBlur]);
  var onFilled = muiFormControl && muiFormControl.onFilled;
  var onEmpty = muiFormControl && muiFormControl.onEmpty;
  var checkDirty = react["useCallback"](function (obj) {
    if (isFilled(obj)) {
      if (onFilled) {
        onFilled();
      }
    } else if (onEmpty) {
      onEmpty();
    }
  }, [onFilled, onEmpty]);
  InputBase_useEnhancedEffect(function () {
    if (isControlled) {
      checkDirty({
        value: value
      });
    }
  }, [value, checkDirty, isControlled]);

  var handleFocus = function handleFocus(event) {
    // Fix a bug with IE 11 where the focus/blur events are triggered
    // while the input is disabled.
    if (fcs.disabled) {
      event.stopPropagation();
      return;
    }

    if (onFocus) {
      onFocus(event);
    }

    if (inputPropsProp.onFocus) {
      inputPropsProp.onFocus(event);
    }

    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    } else {
      setFocused(true);
    }
  };

  var handleBlur = function handleBlur(event) {
    if (onBlur) {
      onBlur(event);
    }

    if (inputPropsProp.onBlur) {
      inputPropsProp.onBlur(event);
    }

    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    } else {
      setFocused(false);
    }
  };

  var handleChange = function handleChange(event) {
    if (!isControlled) {
      var element = event.target || inputRef.current;

      if (element == null) {
        throw new Error( false ? undefined : Object(formatMuiErrorMessage["a" /* default */])(1));
      }

      checkDirty({
        value: element.value
      });
    }

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (inputPropsProp.onChange) {
      inputPropsProp.onChange.apply(inputPropsProp, [event].concat(args));
    } // Perform in the willUpdate


    if (onChange) {
      onChange.apply(void 0, [event].concat(args));
    }
  }; // Check the input state on mount, in case it was filled by the user
  // or auto filled by the browser before the hydration (for SSR).


  react["useEffect"](function () {
    checkDirty(inputRef.current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  var handleClick = function handleClick(event) {
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }

    if (onClick) {
      onClick(event);
    }
  };

  var InputComponent = inputComponent;

  var inputProps = Object(esm_extends["a" /* default */])({}, inputPropsProp, {
    ref: handleInputRef
  });

  if (typeof InputComponent !== 'string') {
    inputProps = Object(esm_extends["a" /* default */])({
      // Rename ref to inputRef as we don't know the
      // provided `inputComponent` structure.
      inputRef: handleInputRef,
      type: type
    }, inputProps, {
      ref: null
    });
  } else if (multiline) {
    if (rows && !rowsMax && !rowsMin) {
      InputComponent = 'textarea';
    } else {
      inputProps = Object(esm_extends["a" /* default */])({
        rows: rows,
        rowsMax: rowsMax
      }, inputProps);
      InputComponent = esm_TextareaAutosize_TextareaAutosize;
    }
  } else {
    inputProps = Object(esm_extends["a" /* default */])({
      type: type
    }, inputProps);
  }

  var handleAutoFill = function handleAutoFill(event) {
    // Provide a fake value as Chrome might not let you access it for security reasons.
    checkDirty(event.animationName === 'mui-auto-fill-cancel' ? inputRef.current : {
      value: 'x'
    });
  };

  react["useEffect"](function () {
    if (muiFormControl) {
      muiFormControl.setAdornedStart(Boolean(startAdornment));
    }
  }, [muiFormControl, startAdornment]);
  return /*#__PURE__*/react["createElement"]("div", Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, classes["color".concat(Object(capitalize["a" /* default */])(fcs.color || 'primary'))], className, fcs.disabled && classes.disabled, fcs.error && classes.error, fullWidth && classes.fullWidth, fcs.focused && classes.focused, muiFormControl && classes.formControl, multiline && classes.multiline, startAdornment && classes.adornedStart, endAdornment && classes.adornedEnd, fcs.margin === 'dense' && classes.marginDense),
    onClick: handleClick,
    ref: ref
  }, other), startAdornment, /*#__PURE__*/react["createElement"](FormControl_FormControlContext.Provider, {
    value: null
  }, /*#__PURE__*/react["createElement"](InputComponent, Object(esm_extends["a" /* default */])({
    "aria-invalid": fcs.error,
    "aria-describedby": ariaDescribedby,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    defaultValue: defaultValue,
    disabled: fcs.disabled,
    id: id,
    onAnimationStart: handleAutoFill,
    name: name,
    placeholder: placeholder,
    readOnly: readOnly,
    required: fcs.required,
    rows: rows,
    value: value,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp
  }, inputProps, {
    className: Object(clsx_m["a" /* default */])(classes.input, inputPropsProp.className, fcs.disabled && classes.disabled, multiline && classes.inputMultiline, fcs.hiddenLabel && classes.inputHiddenLabel, startAdornment && classes.inputAdornedStart, endAdornment && classes.inputAdornedEnd, type === 'search' && classes.inputTypeSearch, fcs.margin === 'dense' && classes.inputMarginDense),
    onBlur: handleBlur,
    onChange: handleChange,
    onFocus: handleFocus
  }))), endAdornment, renderSuffix ? renderSuffix(Object(esm_extends["a" /* default */])({}, fcs, {
    startAdornment: startAdornment
  })) : null);
});
 false ? undefined : void 0;
/* harmony default export */ var esm_InputBase_InputBase = (Object(withStyles["a" /* default */])(InputBase_styles, {
  name: 'MuiInputBase'
})(InputBase_InputBase));
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js









var IconButton_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      textAlign: 'center',
      flex: '0 0 auto',
      fontSize: theme.typography.pxToRem(24),
      padding: 12,
      borderRadius: '50%',
      overflow: 'visible',
      // Explicitly set the default value to solve a bug on IE 11.
      color: theme.palette.action.active,
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shortest
      }),
      '&:hover': {
        backgroundColor: Object(styles_colorManipulator["c" /* fade */])(theme.palette.action.active, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        backgroundColor: 'transparent',
        color: theme.palette.action.disabled
      }
    },

    /* Styles applied to the root element if `edge="start"`. */
    edgeStart: {
      marginLeft: -12,
      '$sizeSmall&': {
        marginLeft: -3
      }
    },

    /* Styles applied to the root element if `edge="end"`. */
    edgeEnd: {
      marginRight: -12,
      '$sizeSmall&': {
        marginRight: -3
      }
    },

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: Object(styles_colorManipulator["c" /* fade */])(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: Object(styles_colorManipulator["c" /* fade */])(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      padding: 3,
      fontSize: theme.typography.pxToRem(18)
    },

    /* Styles applied to the children container element. */
    label: {
      width: '100%',
      display: 'flex',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    }
  };
};
/**
 * Refer to the [Icons](/components/icons/) section of the documentation
 * regarding the available icon options.
 */

var IconButton_IconButton = /*#__PURE__*/react["forwardRef"](function IconButton(props, ref) {
  var _props$edge = props.edge,
      edge = _props$edge === void 0 ? false : _props$edge,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["edge", "children", "classes", "className", "color", "disabled", "disableFocusRipple", "size"]);

  return /*#__PURE__*/react["createElement"](ButtonBase["a" /* default */], Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, className, color !== 'default' && classes["color".concat(Object(capitalize["a" /* default */])(color))], disabled && classes.disabled, size === "small" && classes["size".concat(Object(capitalize["a" /* default */])(size))], {
      'start': classes.edgeStart,
      'end': classes.edgeEnd
    }[edge]),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled: disabled,
    ref: ref
  }, other), /*#__PURE__*/react["createElement"]("span", {
    className: classes.label
  }, children));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_IconButton_IconButton = (Object(withStyles["a" /* default */])(IconButton_styles, {
  name: 'MuiIconButton'
})(IconButton_IconButton));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ClickAwayListener/ClickAwayListener.js
var ClickAwayListener = __webpack_require__("668i");

// EXTERNAL MODULE: ./node_modules/popper.js/dist/esm/popper.js
var esm_popper = __webpack_require__("8L3F");

// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/useTheme/useTheme.js
var useTheme_useTheme = __webpack_require__("aXM8");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/setRef.js
var setRef = __webpack_require__("GIek");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Portal/Portal.js






function getContainer(container) {
  container = typeof container === 'function' ? container() : container; // #StrictMode ready

  return react_dom["findDOMNode"](container);
}

var Portal_useEnhancedEffect = typeof window !== 'undefined' ? react["useLayoutEffect"] : react["useEffect"];
/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 */

var Portal_Portal = /*#__PURE__*/react["forwardRef"](function Portal(props, ref) {
  var children = props.children,
      container = props.container,
      _props$disablePortal = props.disablePortal,
      disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
      onRendered = props.onRendered;

  var _React$useState = react["useState"](null),
      mountNode = _React$useState[0],
      setMountNode = _React$useState[1];

  var handleRef = Object(useForkRef["a" /* default */])( /*#__PURE__*/react["isValidElement"](children) ? children.ref : null, ref);
  Portal_useEnhancedEffect(function () {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  Portal_useEnhancedEffect(function () {
    if (mountNode && !disablePortal) {
      Object(setRef["a" /* default */])(ref, mountNode);
      return function () {
        Object(setRef["a" /* default */])(ref, null);
      };
    }

    return undefined;
  }, [ref, mountNode, disablePortal]);
  Portal_useEnhancedEffect(function () {
    if (onRendered && (mountNode || disablePortal)) {
      onRendered();
    }
  }, [onRendered, mountNode, disablePortal]);

  if (disablePortal) {
    if ( /*#__PURE__*/react["isValidElement"](children)) {
      return /*#__PURE__*/react["cloneElement"](children, {
        ref: handleRef
      });
    }

    return children;
  }

  return mountNode ? /*#__PURE__*/react_dom["createPortal"](children, mountNode) : mountNode;
});
 false ? undefined : void 0;

if (false) {}

/* harmony default export */ var esm_Portal_Portal = (Portal_Portal);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/createChainedFunction.js
var createChainedFunction = __webpack_require__("x6Ns");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Popper/Popper.js











function flipPlacement(placement, theme) {
  var direction = theme && theme.direction || 'ltr';

  if (direction === 'ltr') {
    return placement;
  }

  switch (placement) {
    case 'bottom-end':
      return 'bottom-start';

    case 'bottom-start':
      return 'bottom-end';

    case 'top-end':
      return 'top-start';

    case 'top-start':
      return 'top-end';

    default:
      return placement;
  }
}

function getAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}

var Popper_useEnhancedEffect = typeof window !== 'undefined' ? react["useLayoutEffect"] : react["useEffect"];
var defaultPopperOptions = {};
/**
 * Poppers rely on the 3rd party library [Popper.js](https://popper.js.org/docs/v1/) for positioning.
 */

var Popper_Popper = /*#__PURE__*/react["forwardRef"](function Popper(props, ref) {
  var anchorEl = props.anchorEl,
      children = props.children,
      container = props.container,
      _props$disablePortal = props.disablePortal,
      disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
      _props$keepMounted = props.keepMounted,
      keepMounted = _props$keepMounted === void 0 ? false : _props$keepMounted,
      modifiers = props.modifiers,
      open = props.open,
      _props$placement = props.placement,
      initialPlacement = _props$placement === void 0 ? 'bottom' : _props$placement,
      _props$popperOptions = props.popperOptions,
      popperOptions = _props$popperOptions === void 0 ? defaultPopperOptions : _props$popperOptions,
      popperRefProp = props.popperRef,
      style = props.style,
      _props$transition = props.transition,
      transition = _props$transition === void 0 ? false : _props$transition,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["anchorEl", "children", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition"]);

  var tooltipRef = react["useRef"](null);
  var ownRef = Object(useForkRef["a" /* default */])(tooltipRef, ref);
  var popperRef = react["useRef"](null);
  var handlePopperRef = Object(useForkRef["a" /* default */])(popperRef, popperRefProp);
  var handlePopperRefRef = react["useRef"](handlePopperRef);
  Popper_useEnhancedEffect(function () {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  react["useImperativeHandle"](popperRefProp, function () {
    return popperRef.current;
  }, []);

  var _React$useState = react["useState"](true),
      exited = _React$useState[0],
      setExited = _React$useState[1];

  var theme = Object(useTheme_useTheme["a" /* default */])();
  var rtlPlacement = flipPlacement(initialPlacement, theme);
  /**
   * placement initialized from prop but can change during lifetime if modifiers.flip.
   * modifiers.flip is essentially a flip for controlled/uncontrolled behavior
   */

  var _React$useState2 = react["useState"](rtlPlacement),
      placement = _React$useState2[0],
      setPlacement = _React$useState2[1];

  react["useEffect"](function () {
    if (popperRef.current) {
      popperRef.current.update();
    }
  });
  var handleOpen = react["useCallback"](function () {
    if (!tooltipRef.current || !anchorEl || !open) {
      return;
    }

    if (popperRef.current) {
      popperRef.current.destroy();
      handlePopperRefRef.current(null);
    }

    var handlePopperUpdate = function handlePopperUpdate(data) {
      setPlacement(data.placement);
    };

    var resolvedAnchorEl = getAnchorEl(anchorEl);

    if (false) { var box; }

    var popper = new esm_popper["a" /* default */](getAnchorEl(anchorEl), tooltipRef.current, Object(esm_extends["a" /* default */])({
      placement: rtlPlacement
    }, popperOptions, {
      modifiers: Object(esm_extends["a" /* default */])({}, disablePortal ? {} : {
        // It's using scrollParent by default, we can use the viewport when using a portal.
        preventOverflow: {
          boundariesElement: 'window'
        }
      }, modifiers, popperOptions.modifiers),
      // We could have been using a custom modifier like react-popper is doing.
      // But it seems this is the best public API for this use case.
      onCreate: Object(createChainedFunction["a" /* default */])(handlePopperUpdate, popperOptions.onCreate),
      onUpdate: Object(createChainedFunction["a" /* default */])(handlePopperUpdate, popperOptions.onUpdate)
    }));
    handlePopperRefRef.current(popper);
  }, [anchorEl, disablePortal, modifiers, open, rtlPlacement, popperOptions]);
  var handleRef = react["useCallback"](function (node) {
    Object(setRef["a" /* default */])(ownRef, node);
    handleOpen();
  }, [ownRef, handleOpen]);

  var handleEnter = function handleEnter() {
    setExited(false);
  };

  var handleClose = function handleClose() {
    if (!popperRef.current) {
      return;
    }

    popperRef.current.destroy();
    handlePopperRefRef.current(null);
  };

  var handleExited = function handleExited() {
    setExited(true);
    handleClose();
  };

  react["useEffect"](function () {
    return function () {
      handleClose();
    };
  }, []);
  react["useEffect"](function () {
    if (!open && !transition) {
      // Otherwise handleExited will call this.
      handleClose();
    }
  }, [open, transition]);

  if (!keepMounted && !open && (!transition || exited)) {
    return null;
  }

  var childProps = {
    placement: placement
  };

  if (transition) {
    childProps.TransitionProps = {
      in: open,
      onEnter: handleEnter,
      onExited: handleExited
    };
  }

  return /*#__PURE__*/react["createElement"](esm_Portal_Portal, {
    disablePortal: disablePortal,
    container: container
  }, /*#__PURE__*/react["createElement"]("div", Object(esm_extends["a" /* default */])({
    ref: handleRef,
    role: "tooltip"
  }, other, {
    style: Object(esm_extends["a" /* default */])({
      // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
      position: 'fixed',
      // Fix Popper.js display issue
      top: 0,
      left: 0,
      display: !open && keepMounted && !transition ? 'none' : null
    }, style)
  }), typeof children === 'function' ? children(childProps) : children));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_Popper_Popper = (Popper_Popper);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("rePB");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js







var MenuItem_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: Object(esm_extends["a" /* default */])({}, theme.typography.body1, Object(defineProperty["a" /* default */])({
      minHeight: 48,
      paddingTop: 6,
      paddingBottom: 6,
      boxSizing: 'border-box',
      width: 'auto',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    }, theme.breakpoints.up('sm'), {
      minHeight: 'auto'
    })),
    // TODO v5: remove

    /* Styles applied to the root element if `disableGutters={false}`. */
    gutters: {},

    /* Styles applied to the root element if `selected={true}`. */
    selected: {},

    /* Styles applied to the root element if dense. */
    dense: Object(esm_extends["a" /* default */])({}, theme.typography.body2, {
      minHeight: 'auto'
    })
  };
};
var MenuItem_MenuItem = /*#__PURE__*/react["forwardRef"](function MenuItem(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      component = _props$component === void 0 ? 'li' : _props$component,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      ListItemClasses = props.ListItemClasses,
      _props$role = props.role,
      role = _props$role === void 0 ? 'menuitem' : _props$role,
      selected = props.selected,
      tabIndexProp = props.tabIndex,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["classes", "className", "component", "disableGutters", "ListItemClasses", "role", "selected", "tabIndex"]);

  var tabIndex;

  if (!props.disabled) {
    tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
  }

  return /*#__PURE__*/react["createElement"](esm_ListItem_ListItem, Object(esm_extends["a" /* default */])({
    button: true,
    role: role,
    tabIndex: tabIndex,
    component: component,
    selected: selected,
    disableGutters: disableGutters,
    classes: Object(esm_extends["a" /* default */])({
      dense: classes.dense
    }, ListItemClasses),
    className: Object(clsx_m["a" /* default */])(classes.root, className, selected && classes.selected, !disableGutters && classes.gutters),
    ref: ref
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_MenuItem_MenuItem = (Object(withStyles["a" /* default */])(MenuItem_styles, {
  name: 'MuiMenuItem'
})(MenuItem_MenuItem));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/ownerDocument.js
var ownerDocument = __webpack_require__("gk1O");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/utils/getScrollbarSize.js
// A change of the browser zoom change the scrollbar size.
// Credit https://github.com/twbs/bootstrap/blob/3ffe3a5d82f6f561b82ff78d82b32a7d14aed558/js/src/modal.js#L512-L519
function getScrollbarSize() {
  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '99px';
  scrollDiv.style.height = '99px';
  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarSize;
}
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/MenuList/MenuList.js










function nextItem(list, item, disableListWrap) {
  if (list === item) {
    return list.firstChild;
  }

  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }

  return disableListWrap ? null : list.firstChild;
}

function previousItem(list, item, disableListWrap) {
  if (list === item) {
    return disableListWrap ? list.firstChild : list.lastChild;
  }

  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }

  return disableListWrap ? null : list.lastChild;
}

function textCriteriaMatches(nextFocus, textCriteria) {
  if (textCriteria === undefined) {
    return true;
  }

  var text = nextFocus.innerText;

  if (text === undefined) {
    // jsdom doesn't support innerText
    text = nextFocus.textContent;
  }

  text = text.trim().toLowerCase();

  if (text.length === 0) {
    return false;
  }

  if (textCriteria.repeating) {
    return text[0] === textCriteria.keys[0];
  }

  return text.indexOf(textCriteria.keys.join('')) === 0;
}

function moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria) {
  var wrappedOnce = false;
  var nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);

  while (nextFocus) {
    // Prevent infinite loop.
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return;
      }

      wrappedOnce = true;
    } // Same logic as useAutocomplete.js


    var nextFocusDisabled = disabledItemsFocusable ? false : nextFocus.disabled || nextFocus.getAttribute('aria-disabled') === 'true';

    if (!nextFocus.hasAttribute('tabindex') || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled) {
      // Move to the next element.
      nextFocus = traversalFunction(list, nextFocus, disableListWrap);
    } else {
      nextFocus.focus();
      return;
    }
  }
}

var MenuList_useEnhancedEffect = typeof window === 'undefined' ? react["useEffect"] : react["useLayoutEffect"];
/**
 * A permanently displayed menu following https://www.w3.org/TR/wai-aria-practices/#menubutton.
 * It's exposed to help customization of the [`Menu`](/api/menu/) component. If you
 * use it separately you need to move focus into the component manually. Once
 * the focus is placed inside the component it is fully keyboard accessible.
 */

var MenuList_MenuList = /*#__PURE__*/react["forwardRef"](function MenuList(props, ref) {
  var actions = props.actions,
      _props$autoFocus = props.autoFocus,
      autoFocus = _props$autoFocus === void 0 ? false : _props$autoFocus,
      _props$autoFocusItem = props.autoFocusItem,
      autoFocusItem = _props$autoFocusItem === void 0 ? false : _props$autoFocusItem,
      children = props.children,
      className = props.className,
      _props$disabledItemsF = props.disabledItemsFocusable,
      disabledItemsFocusable = _props$disabledItemsF === void 0 ? false : _props$disabledItemsF,
      _props$disableListWra = props.disableListWrap,
      disableListWrap = _props$disableListWra === void 0 ? false : _props$disableListWra,
      onKeyDown = props.onKeyDown,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'selectedMenu' : _props$variant,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"]);

  var listRef = react["useRef"](null);
  var textCriteriaRef = react["useRef"]({
    keys: [],
    repeating: true,
    previousKeyMatched: true,
    lastTime: null
  });
  MenuList_useEnhancedEffect(function () {
    if (autoFocus) {
      listRef.current.focus();
    }
  }, [autoFocus]);
  react["useImperativeHandle"](actions, function () {
    return {
      adjustStyleForScrollbar: function adjustStyleForScrollbar(containerElement, theme) {
        // Let's ignore that piece of logic if users are already overriding the width
        // of the menu.
        var noExplicitWidth = !listRef.current.style.width;

        if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
          var scrollbarSize = "".concat(getScrollbarSize(true), "px");
          listRef.current.style[theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight'] = scrollbarSize;
          listRef.current.style.width = "calc(100% + ".concat(scrollbarSize, ")");
        }

        return listRef.current;
      }
    };
  }, []);

  var handleKeyDown = function handleKeyDown(event) {
    var list = listRef.current;
    var key = event.key;
    /**
     * @type {Element} - will always be defined since we are in a keydown handler
     * attached to an element. A keydown event is either dispatched to the activeElement
     * or document.body or document.documentElement. Only the first case will
     * trigger this specific handler.
     */

    var currentFocus = Object(ownerDocument["a" /* default */])(list).activeElement;

    if (key === 'ArrowDown') {
      // Prevent scroll of the page
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === 'ArrowUp') {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key === 'Home') {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === 'End') {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key.length === 1) {
      var criteria = textCriteriaRef.current;
      var lowerKey = key.toLowerCase();
      var currTime = performance.now();

      if (criteria.keys.length > 0) {
        // Reset
        if (currTime - criteria.lastTime > 500) {
          criteria.keys = [];
          criteria.repeating = true;
          criteria.previousKeyMatched = true;
        } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
          criteria.repeating = false;
        }
      }

      criteria.lastTime = currTime;
      criteria.keys.push(lowerKey);
      var keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);

      if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, disabledItemsFocusable, nextItem, criteria))) {
        event.preventDefault();
      } else {
        criteria.previousKeyMatched = false;
      }
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  var handleOwnRef = react["useCallback"](function (instance) {
    // #StrictMode ready
    listRef.current = react_dom["findDOMNode"](instance);
  }, []);
  var handleRef = Object(useForkRef["a" /* default */])(handleOwnRef, ref);
  /**
   * the index of the item should receive focus
   * in a `variant="selectedMenu"` it's the first `selected` item
   * otherwise it's the very first item.
   */

  var activeItemIndex = -1; // since we inject focus related props into children we have to do a lookahead
  // to check if there is a `selected` item. We're looking for the last `selected`
  // item and use the first valid item as a fallback

  react["Children"].forEach(children, function (child, index) {
    if (! /*#__PURE__*/react["isValidElement"](child)) {
      return;
    }

    if (false) {}

    if (!child.props.disabled) {
      if (variant === 'selectedMenu' && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  var items = react["Children"].map(children, function (child, index) {
    if (index === activeItemIndex) {
      var newChildProps = {};

      if (autoFocusItem) {
        newChildProps.autoFocus = true;
      }

      if (child.props.tabIndex === undefined && variant === 'selectedMenu') {
        newChildProps.tabIndex = 0;
      }

      return /*#__PURE__*/react["cloneElement"](child, newChildProps);
    }

    return child;
  });
  return /*#__PURE__*/react["createElement"](esm_List_List, Object(esm_extends["a" /* default */])({
    role: "menu",
    ref: handleRef,
    className: className,
    onKeyDown: handleKeyDown,
    tabIndex: autoFocus ? 0 : -1
  }, other), items);
});
 false ? undefined : void 0;
/* harmony default export */ var esm_MenuList_MenuList = (MenuList_MenuList);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ArrowDropDown.js
var ArrowDropDown = __webpack_require__("B6OW");
var ArrowDropDown_default = /*#__PURE__*/__webpack_require__.n(ArrowDropDown);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ArrowForward.js
var ArrowForward = __webpack_require__("E39E");
var ArrowForward_default = /*#__PURE__*/__webpack_require__.n(ArrowForward);

// CONCATENATED MODULE: ./src/components/chatbox/type-box.js
var type_box_useStyles=Object(makeStyles["a" /* default */])(function(theme){return{root:{padding:'2px 4px',display:'flex',alignItems:'center',height:48},input:{color:"#000",marginLeft:theme.spacing(1),flex:1},iconButton:{padding:10,color:theme.palette.primary.light},menuItem:{color:"black"}};});var type_box_TypeBox=function TypeBox(props){var classes=type_box_useStyles();var _props$isLoading=props.isLoading,isLoading=_props$isLoading===void 0?true:_props$isLoading,_props$defaultQuestio=props.defaultQuestions,defaultQuestions=_props$defaultQuestio===void 0?[]:_props$defaultQuestio,_props$addMessageToQu=props.addMessageToQueue,addMessageToQueue=_props$addMessageToQu===void 0?function(){}:_props$addMessageToQu;var _useState=Object(react["useState"])(""),inputText=_useState[0],setInputText=_useState[1];var _useState2=Object(react["useState"])(false),open=_useState2[0],setOpen=_useState2[1];var anchorRef=Object(react["useRef"])(null);Object(react["useEffect"])(function(){if(prevOpen.current===true&&open===false){anchorRef.current.focus();}prevOpen.current=open;},[open]);var handleToggle=function handleToggle(){setOpen(function(prevOpen){return!prevOpen;});};var menuOnClick=function menuOnClick(question){setInputText(question);};var handleClose=function handleClose(event){if(anchorRef.current&&anchorRef.current.contains(event.target)){return;}setOpen(false);};function handleListKeyDown(event){if(event.key==='Tab'){event.preventDefault();setOpen(false);}}var handleChange=function handleChange(event){setInputText(event.target.value);};var handleKey=function handleKey(e){if(e.keyCode===13){e.preventDefault();submitText();}};var submitText=function submitText(){addMessageToQueue(inputText);setInputText("");};// return focus to the button when we transitioned from !open -> open
var prevOpen=react_default.a.useRef(open);return/*#__PURE__*/react_default.a.createElement(Paper["a" /* default */],{component:"form",className:classes.root},/*#__PURE__*/react_default.a.createElement(esm_InputBase_InputBase,{className:classes.input,placeholder:isLoading?"Please wait until model loaded":"Ask me some questions",inputProps:{'aria-label':'Question box'},disabled:isLoading,value:inputText,onChange:handleChange,onKeyDown:handleKey}),/*#__PURE__*/react_default.a.createElement(esm_IconButton_IconButton,{ref:anchorRef,className:classes.iconButton,onClick:handleToggle},/*#__PURE__*/react_default.a.createElement(ArrowDropDown_default.a,null)),/*#__PURE__*/react_default.a.createElement(esm_IconButton_IconButton,{disabled:isLoading,className:classes.iconButton,onClick:submitText},/*#__PURE__*/react_default.a.createElement(ArrowForward_default.a,null)),/*#__PURE__*/react_default.a.createElement(esm_Popper_Popper,{open:open,anchorEl:anchorRef.current,role:undefined,transition:true,disablePortal:true},function(_ref){var TransitionProps=_ref.TransitionProps,placement=_ref.placement;return/*#__PURE__*/react_default.a.createElement(esm_Grow_Grow,Object.assign({},TransitionProps,{style:{transformOrigin:placement==='bottom'?'center top':'center bottom'}}),/*#__PURE__*/react_default.a.createElement(Paper["a" /* default */],null,/*#__PURE__*/react_default.a.createElement(ClickAwayListener["a" /* default */],{onClickAway:handleClose},/*#__PURE__*/react_default.a.createElement(esm_MenuList_MenuList,{autoFocusItem:open,id:"menu-list-grow",onKeyDown:handleListKeyDown},defaultQuestions.map(function(item){return/*#__PURE__*/react_default.a.createElement(esm_MenuItem_MenuItem,{key:item,className:classes.menuItem,onClick:function onClick(event){menuOnClick(item);handleClose(event);}},item);})))));}));};/* harmony default export */ var type_box = (type_box_TypeBox);
// CONCATENATED MODULE: ./src/components/chatbox/chatbox.js
var chatbox_useStyles=Object(makeStyles["a" /* default */])(function(theme){return{root:{display:'flex',flexWrap:'wrap'},paper:{width:"100%",height:"512px",display:"flex",flexDirection:"column",background:"rgb(255 255 255 / 0.2)"},contentBoxContainer:{flex:"1 1 auto",position:"relative",height:"80%"},listContainer:{height:"100%",overflowY:"auto"},userListItem:{justifyContent:"flex-end"},textItem:{color:"rgba(0, 0, 0, 0.87)",border:"none",outline:0,fontSize:"0.8125rem",borderRadius:16,backgroundColor:"#e0e0e0",padding:16,maxWidth:"75%",flex:"0 1 auto"},userTextItem:{backgroundColor:theme.palette.secondary.main},typeBoxContainer:{flex:"0 1 auto",padding:theme.spacing(1)},loadingIndicator:{top:theme.spacing(2),width:"100%",zIndex:10,display:"flex",justifyContent:"center",position:"absolute"}};});var chatbox_ChatBox=function ChatBox(props){var classes=chatbox_useStyles();var passage="Hi, I am a Question Answering Fairy hired by Cheng Han. \n  I can do answer some simple questions about Cheng Han.\n  Cheng Han is a software engineer.\n  His motivation is to build interesting products which rich people's life.\n  He was born on 1997/08/03 in Taiwan.\n  He is "+(parseInt_default()(new Date().getFullYear())-1997)+" years old.\n  Currently, He has one year of work experience as a software engineer.\n  He graduated from Tunghai University which located in Taiwan in 2019/06.\n  He was major in Computer Science.\n  His current job is building websites using React.js, WebAR, and Node.js at Memopresso Inc.\n  The programming languages he uses are Python, JavaScript, Java, C#, Swift, SQL.\n  The machine learning frameworks he uses are Tensorflow, Keras, PyTorch, Scikit-Learn, XGBoost.\n  He can speak English, Mandarin, and Japanese.\n  He can make websites.\n  He has skills in Frontend engineering, Backend engineering, Machine Learning application, and App development.\n  ";var defaultQuestions=["Who is Cheng Han","What is his motivation","How many years of work experinece does he have","Where did he graduate","When did he graduate","What is his major","What skills does he have","What programming languages does he use","What machine learning frameworks does he use"];var _useSnackbar=Object(notistack_esm["b" /* useSnackbar */])(),enqueueSnackbar=_useSnackbar.enqueueSnackbar,closeSnackbar=_useSnackbar.closeSnackbar;var _useState=Object(react["useState"])([]),messageQueue=_useState[0],setMessageQueue=_useState[1];var _useState2=Object(react["useState"])(false),isLoading=_useState2[0],setLoading=_useState2[1];var _props$model=props.model,model=_props$model===void 0?null:_props$model,_props$loadModel=props.loadModel,loadModel=_props$loadModel===void 0?function(){}:_props$loadModel;Object(react["useEffect"])(function(){try{if(!model){var waitLoadModel=/*#__PURE__*/function(){var _ref=_asyncToGenerator(/*#__PURE__*/regenerator_default.a.mark(function _callee(){return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:setLoading(true);_context.next=3;return loadModel();case 3:setLoading(false);setMessageQueue([{isUser:false,text:"Hi, I am a Question Answering Fairy hired by Cheng Han. I can answer some basic questions about him for you. I was built by Tensorflow JS."}]);case 5:case"end":return _context.stop();}}},_callee);}));return function waitLoadModel(){return _ref.apply(this,arguments);};}();waitLoadModel();}}catch(error){console.log(error);enqueueSnackbar("Oops! Error happened",{variant:'error'});}},[model]);Object(react["useEffect"])(function(){try{if(messageQueue.length>0){var anchor=document.querySelector('#ask-text-container');if(!isEmpty_default()(anchor)){anchor.scrollTop=anchor.scrollHeight-anchor.clientHeight;}}}catch(error){enqueueSnackbar("Oops! Error happened",{variant:'error'});}},[messageQueue]);var addMessageToQueue=/*#__PURE__*/function(){var _ref2=_asyncToGenerator(/*#__PURE__*/regenerator_default.a.mark(function _callee2(message){var newMessageQueue,answers,answerItem,newMessageQueue2;return regenerator_default.a.wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:_context2.prev=0;if(isEmpty_default()(message)){_context2.next=13;break;}newMessageQueue=Object(toConsumableArray["a" /* default */])(messageQueue);newMessageQueue.push({isUser:true,text:message});setMessageQueue(newMessageQueue);_context2.next=7;return model.findAnswers(message,passage);case 7:answers=_context2.sent;console.log(answers);if(answers.length>0){answerItem={isUser:false,text:answers[0].text};}else{answerItem={isUser:false,text:"Sorry, I don't understand. Please forgive me."};}newMessageQueue2=Object(toConsumableArray["a" /* default */])(newMessageQueue);newMessageQueue2.push(answerItem);setMessageQueue(newMessageQueue2);case 13:_context2.next=19;break;case 15:_context2.prev=15;_context2.t0=_context2["catch"](0);console.log(_context2.t0);enqueueSnackbar("Oops! Error happened",{variant:'error'});case 19:case"end":return _context2.stop();}}},_callee2,null,[[0,15]]);}));return function addMessageToQueue(_x){return _ref2.apply(this,arguments);};}();return/*#__PURE__*/react_default.a.createElement(Paper["a" /* default */],{className:classes.paper,elevation:3},/*#__PURE__*/react_default.a.createElement(Box["a" /* default */],{className:classes.contentBoxContainer},isLoading&&/*#__PURE__*/react_default.a.createElement(Box["a" /* default */],{className:classes.loadingIndicator},/*#__PURE__*/react_default.a.createElement(esm_Chip_Chip,{label:"Loading model..."})),/*#__PURE__*/react_default.a.createElement(esm_List_List,{className:classes.listContainer,id:"ask-text-container"},messageQueue.map(function(item,index){var _clsx,_clsx2;return/*#__PURE__*/react_default.a.createElement(esm_Grow_Grow,{in:true,key:"input"+item.text+index},/*#__PURE__*/react_default.a.createElement(esm_ListItem_ListItem,{className:Object(clsx_m["a" /* default */])((_clsx={},_clsx[classes.userListItem]=item.isUser,_clsx))},/*#__PURE__*/react_default.a.createElement(esm_ListItemText_ListItemText,{className:Object(clsx_m["a" /* default */])(classes.textItem,(_clsx2={},_clsx2[classes.userTextItem]=item.isUser,_clsx2)),primary:item.text})));}))),/*#__PURE__*/react_default.a.createElement(Box["a" /* default */],{className:classes.typeBoxContainer},/*#__PURE__*/react_default.a.createElement(type_box,{addMessageToQueue:addMessageToQueue,isLoading:isLoading,defaultQuestions:defaultQuestions})));};/* harmony default export */ var chatbox = (chatbox_ChatBox);
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/MenuBook.js
var MenuBook = __webpack_require__("DHJd");
var MenuBook_default = /*#__PURE__*/__webpack_require__.n(MenuBook);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/QuestionAnswer.js
var QuestionAnswer = __webpack_require__("xwqs");
var QuestionAnswer_default = /*#__PURE__*/__webpack_require__.n(QuestionAnswer);

// CONCATENATED MODULE: ./src/components/about-block.js
var about_block_useStyles=Object(makeStyles["a" /* default */])(function(theme){return{backgroundCard:{zIndex:10,position:"relative",backgroundColor:Object(colorManipulator["fade"])(theme.palette.primary.main,0.3),paddingTop:theme.spacing(4),paddingBottom:theme.spacing(4),marginTop:theme.spacing(4),marginBottom:theme.spacing(4),height:"100vh"// height: "calc(100vh - 56px)",
// ["@media (min-width: 0px) and (orientation: landscape)"]: {
//   height: "calc(100vh - 48px)",
// },
// [theme.breakpoints.up('sm')]: {
//   height: "calc(100vh - 64px)",
// },
},contentCard:{flexGrow:1,zIndex:10,position:"relative",backgroundColor:theme.palette.primary.light},button:{background:theme.palette.primary.light}};});var QABlock=/*#__PURE__*/Object(react["forwardRef"])(function(props,ref){var classes=about_block_useStyles();var id=props.id,siteTitle=props.siteTitle,_props$model=props.model,model=_props$model===void 0?null:_props$model,_props$loadModel=props.loadModel,loadModel=_props$loadModel===void 0?function(){}:_props$loadModel,_props$mode=props.mode,mode=_props$mode===void 0?constants["b" /* MODES */].READ:_props$mode,_props$setMode=props.setMode,setMode=_props$setMode===void 0?function(){}:_props$setMode;var preventDefault=function preventDefault(event){return event.preventDefault();};return/*#__PURE__*/react_default.a.createElement(esm_Card_Card,{id:id,className:classes.backgroundCard,ref:ref},/*#__PURE__*/react_default.a.createElement(esm_Grid_Grid,{container:true,direction:"column",justify:"center",alignItems:"center"},/*#__PURE__*/react_default.a.createElement(esm_Grid_Grid,{item:true,container:true,xs:12,spacing:2,direction:"column",justify:"center",alignItems:"center"},/*#__PURE__*/react_default.a.createElement(esm_Grid_Grid,{item:true,container:true,justify:"center",alignItems:"center"},/*#__PURE__*/react_default.a.createElement(Box["a" /* default */],{mt:10},/*#__PURE__*/react_default.a.createElement(Typography["a" /* default */],{variant:"h4"},"About me"))),/*#__PURE__*/react_default.a.createElement(esm_Grid_Grid,{item:true},/*#__PURE__*/react_default.a.createElement(esm_ButtonGroup_ButtonGroup,{variant:"contained",color:"primary","aria-label":"contained primary button group"},/*#__PURE__*/react_default.a.createElement(Button["a" /* default */],{className:classes.button,startIcon:/*#__PURE__*/react_default.a.createElement(MenuBook_default.a,null),onClick:function onClick(){return setMode(constants["b" /* MODES */].READ);}},"Read"),/*#__PURE__*/react_default.a.createElement(Button["a" /* default */],{className:classes.button,startIcon:/*#__PURE__*/react_default.a.createElement(QuestionAnswer_default.a,null),onClick:function onClick(){setMode(constants["b" /* MODES */].ASK);}},"Ask"))),mode===constants["b" /* MODES */].READ&&/*#__PURE__*/react_default.a.createElement(esm_Fade_Fade,{in:mode===constants["b" /* MODES */].READ},/*#__PURE__*/react_default.a.createElement(esm_Grid_Grid,{item:true,md:6},/*#__PURE__*/react_default.a.createElement(Flip_default.a,{bottom:true},/*#__PURE__*/react_default.a.createElement(Typography["a" /* default */],{variant:"h6",component:"span"},"A software engineer who enthusiast at learning and using technology to make the world more interesting. Graduated from Tunghai University in Taiwan. Having experience in both Front-End and Back-End developing, Machine Learning and App developing. Love to try new things, and willing to overcome challenges. Passionate at product making, hope to make things which will improve many people life.")))),mode===constants["b" /* MODES */].ASK&&/*#__PURE__*/react_default.a.createElement(esm_Fade_Fade,{in:mode===constants["b" /* MODES */].ASK},/*#__PURE__*/react_default.a.createElement(esm_Grid_Grid,{item:true,container:true,xs:12,md:6},/*#__PURE__*/react_default.a.createElement(chatbox,{model:model,loadModel:loadModel}))))));});QABlock.defaultProps={};/* harmony default export */ var about_block = (QABlock);
// EXTERNAL MODULE: ./src/images/ig-practice.jpg
var ig_practice = __webpack_require__("sZJu");
var ig_practice_default = /*#__PURE__*/__webpack_require__.n(ig_practice);

// CONCATENATED MODULE: ./src/constants/projects.js
var PROJECTS=[{title:"Intelligent Asset Allocation",url:"https://github.com/henry32144/intelligent-asset-allocation",description:"Designed a minimal viable product asset allocation web application, which helps users build their stock portfolio using model like Black-litterman.",image:"https://henry32144.github.io/hugo-website/project/stock-price-indicator/featured.jpg"},{title:"PGGAN Tensorflow",url:"https://github.com/henry32144/pggan-tensorflow",description:"Implemented PGGAN in Tensorflow 2.0 to generate fake human face.",image:"https://henry32144.github.io/hugo-website/project/pggan-tensorflow/featured.jpg"},{title:"Collaboration and Competition",url:"https://github.com/henry32144/drlnd-collab-compet",description:"Implemented TD3, a modification of the DDPG reinforcement learning algorithm using PyTorch to train two AI to\n  play tennis in the Unity ML Tennis environment.",image:"https://henry32144.github.io/hugo-website/project/drlnd-collab-compet/featured.jpg"},{title:"Neural Style Website",url:"https://github.com/henry32144/neural-style",description:"Built a website using Python and Keras which used deep learning to transform regular images into more stylish ones",image:"https://henry32144.github.io/hugo-website/project/tucana-neural-style/featured.jpg"},{title:"SNGAN-Projection",url:"https://github.com/henry32144/sngan-projection-notebook",description:"Implemented SNGAN and Projection Discriminator to make food images!",image:"https://henry32144.github.io/hugo-website/project/sngan-projection/featured.jpg"},{title:"Mask Search",url:"https://github.com/henry32144/mask-search",description:"Built a website which visualize the remaining mask number in Taiwan in 2020/02, the time which the mask is shortage",image:"https://henry32144.github.io/hugo-website/project/mask-search/featured.jpg"},{title:"Instagram Practice",url:"https://github.com/henry32144/react-instagram-practice",description:"Practice to use React.js and Styled component to build a instagram like web page",image:ig_practice_default.a},{title:"Kuzushiji Recognition",url:"https://github.com/henry32144/kaggle-kuzushiji",description:"Implement a object recognition model to detect and recognize kuzushiji, a kind of traditional Japanese text",image:"https://henry32144.github.io/hugo-website/project/kaggle-kuzushiji/featured.jpg"},{title:"Popular Movies",url:"https://github.com/henry32144/popular-movies",description:"Developed an Android app which provides movies information, users can sort movies by popularity or ratings, add favorite movies, and watch trailers.",image:"https://github.com/henry32144/popular-movies/raw/master/img/screenshot_1.png"}];
// EXTERNAL MODULE: ./node_modules/react-reveal/Fade.js
var react_reveal_Fade = __webpack_require__("/eHF");
var Fade_default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade);

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/CardActionArea/CardActionArea.js






var CardActionArea_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'block',
      textAlign: 'inherit',
      width: '100%',
      '&:hover $focusHighlight': {
        opacity: theme.palette.action.hoverOpacity
      },
      '&$focusVisible $focusHighlight': {
        opacity: 0.12
      }
    },

    /* Pseudo-class applied to the ButtonBase root element if the action area is keyboard focused. */
    focusVisible: {},

    /* Styles applied to the overlay that covers the action area when it is keyboard focused. */
    focusHighlight: {
      overflow: 'hidden',
      pointerEvents: 'none',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      borderRadius: 'inherit',
      opacity: 0,
      backgroundColor: 'currentcolor',
      transition: theme.transitions.create('opacity', {
        duration: theme.transitions.duration.short
      })
    }
  };
};
var CardActionArea_CardActionArea = /*#__PURE__*/react["forwardRef"](function CardActionArea(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      focusVisibleClassName = props.focusVisibleClassName,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["children", "classes", "className", "focusVisibleClassName"]);

  return /*#__PURE__*/react["createElement"](ButtonBase["a" /* default */], Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, className),
    focusVisibleClassName: Object(clsx_m["a" /* default */])(focusVisibleClassName, classes.focusVisible),
    ref: ref
  }, other), children, /*#__PURE__*/react["createElement"]("span", {
    className: classes.focusHighlight
  }));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_CardActionArea_CardActionArea = (Object(withStyles["a" /* default */])(CardActionArea_styles, {
  name: 'MuiCardActionArea'
})(CardActionArea_CardActionArea));
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/CardContent/CardContent.js





var CardContent_styles = {
  /* Styles applied to the root element. */
  root: {
    padding: 16,
    '&:last-child': {
      paddingBottom: 24
    }
  }
};
var CardContent_CardContent = /*#__PURE__*/react["forwardRef"](function CardContent(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["classes", "className", "component"]);

  return /*#__PURE__*/react["createElement"](Component, Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, className),
    ref: ref
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_CardContent_CardContent = (Object(withStyles["a" /* default */])(CardContent_styles, {
  name: 'MuiCardContent'
})(CardContent_CardContent));
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/CardMedia/CardMedia.js






var CardMedia_styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'block',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },

  /* Styles applied to the root element if `component="video, audio, picture, iframe, or img"`. */
  media: {
    width: '100%'
  },

  /* Styles applied to the root element if `component="picture or img"`. */
  img: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover'
  }
};
var MEDIA_COMPONENTS = ['video', 'audio', 'picture', 'iframe', 'img'];
var CardMedia_CardMedia = /*#__PURE__*/react["forwardRef"](function CardMedia(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      image = props.image,
      src = props.src,
      style = props.style,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["children", "classes", "className", "component", "image", "src", "style"]);

  var isMediaComponent = MEDIA_COMPONENTS.indexOf(Component) !== -1;
  var composedStyle = !isMediaComponent && image ? Object(esm_extends["a" /* default */])({
    backgroundImage: "url(\"".concat(image, "\")")
  }, style) : style;
  return /*#__PURE__*/react["createElement"](Component, Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, className, isMediaComponent && classes.media, "picture img".indexOf(Component) !== -1 && classes.img),
    ref: ref,
    style: composedStyle,
    src: isMediaComponent ? image || src : undefined
  }, other), children);
});
 false ? undefined : void 0;
/* harmony default export */ var esm_CardMedia_CardMedia = (Object(withStyles["a" /* default */])(CardMedia_styles, {
  name: 'MuiCardMedia'
})(CardMedia_CardMedia));
// CONCATENATED MODULE: ./src/components/project-item.js
var project_item_useStyles=Object(makeStyles["a" /* default */])(function(theme){return{root:{flexGrow:1,minHeight:370},paper:{padding:theme.spacing(2),margin:'auto'},image:{width:300,height:200},img:{margin:'auto',display:'block',maxWidth:'100%',maxHeight:'100%'}};});var project_item_ProjectItem=function ProjectItem(props){var classes=project_item_useStyles();var _props$title=props.title,title=_props$title===void 0?"":_props$title,_props$description=props.description,description=_props$description===void 0?"":_props$description,_props$url=props.url,url=_props$url===void 0?"":_props$url,_props$image=props.image,image=_props$image===void 0?"":_props$image;var cardOnClick=function cardOnClick(url){window.open(url,"_blank");};return/*#__PURE__*/react_default.a.createElement(esm_Grid_Grid,{item:true,md:4},/*#__PURE__*/react_default.a.createElement(esm_CardActionArea_CardActionArea,{onClick:function onClick(){return cardOnClick(url);}},/*#__PURE__*/react_default.a.createElement(Fade_default.a,{bottom:true},/*#__PURE__*/react_default.a.createElement(esm_Card_Card,{className:classes.root},/*#__PURE__*/react_default.a.createElement(esm_CardMedia_CardMedia,{component:"img",alt:"Contemplative Reptile",height:"200",image:image,title:"Contemplative Reptile"}),/*#__PURE__*/react_default.a.createElement(esm_CardContent_CardContent,null,/*#__PURE__*/react_default.a.createElement(Typography["a" /* default */],{gutterBottom:true,color:"textSecondary",variant:"h6",component:"h2"},title),/*#__PURE__*/react_default.a.createElement(Typography["a" /* default */],{variant:"body2",color:"textSecondary",component:"p"},description))))));};/* harmony default export */ var project_item = (project_item_ProjectItem);
// CONCATENATED MODULE: ./src/components/project-block.js
var project_block_useStyles=Object(makeStyles["a" /* default */])(function(theme){return{backgroundCard:{zIndex:10,position:"relative",backgroundColor:Object(colorManipulator["fade"])(theme.palette.primary.main,0),paddingTop:theme.spacing(4),paddingBottom:theme.spacing(4),marginTop:theme.spacing(4),marginBottom:theme.spacing(4)},projectPaper:{backgroundColor:Object(colorManipulator["fade"])(theme.palette.primary.main,0.3)},root:{flexGrow:1},padding:{padding:theme.spacing(3)},projectContainer:{marginTop:theme.spacing(6)},moreButton:{background:theme.palette.primary.light,color:"#fff"}};});var ProjectBlock=/*#__PURE__*/Object(react["forwardRef"])(function(props,ref){var MODES={READ:0,ASK:1};var classes=project_block_useStyles();var id=props.id,siteTitle=props.siteTitle,model=props.model,loadModel=props.loadModel;var preventDefault=function preventDefault(event){return event.preventDefault();};var _useState=Object(react["useState"])(MODES.READ),mode=_useState[0],setMode=_useState[1];var _useState2=Object(react["useState"])(PROJECTS),projects=_useState2[0],setProjects=_useState2[1];return/*#__PURE__*/react_default.a.createElement(esm_Card_Card,{id:id,className:classes.backgroundCard,ref:ref},/*#__PURE__*/react_default.a.createElement(esm_Grid_Grid,{container:true,direction:"column",justify:"center",alignItems:"center"},/*#__PURE__*/react_default.a.createElement(esm_Grid_Grid,{item:true,container:true,xs:12,spacing:2,direction:"column",justify:"center",alignItems:"center"},/*#__PURE__*/react_default.a.createElement(esm_Grid_Grid,{item:true,container:true,direction:"column",justify:"center",alignItems:"center"},/*#__PURE__*/react_default.a.createElement(Box["a" /* default */],{mt:10},/*#__PURE__*/react_default.a.createElement(Typography["a" /* default */],{variant:"h4"},"Projects")),/*#__PURE__*/react_default.a.createElement(esm_Grid_Grid,{className:classes.projectContainer,container:true,item:true,xs:12,sm:10,spacing:2},projects.map(function(project,index){return/*#__PURE__*/react_default.a.createElement(project_item,{key:project.url,title:project.title,description:project.description,url:project.url,image:project.image});})),/*#__PURE__*/react_default.a.createElement(Box["a" /* default */],{mt:6},/*#__PURE__*/react_default.a.createElement(Button["a" /* default */],{className:classes.moreButton,size:"large",variant:"contained",color:"secondary",onClick:function onClick(){window.open("https://henry32144.github.io/hugo-website/projects/","_blank");}},"More"))))));});ProjectBlock.defaultProps={};/* harmony default export */ var project_block = (ProjectBlock);
// EXTERNAL MODULE: ./node_modules/@material-ui/styles/esm/getThemeProps/getThemeProps.js
var getThemeProps = __webpack_require__("A+CX");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useEventCallback.js
var useEventCallback = __webpack_require__("Ovef");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/zIndex.js
var zIndex = __webpack_require__("HwzS");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("1OyB");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass = __webpack_require__("vuIU");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/ownerWindow.js
var ownerWindow = __webpack_require__("g+pH");

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Modal/ModalManager.js





 // Is a vertical scrollbar displayed?

function isOverflowing(container) {
  var doc = Object(ownerDocument["a" /* default */])(container);

  if (doc.body === container) {
    return Object(ownerWindow["a" /* default */])(doc).innerWidth > doc.documentElement.clientWidth;
  }

  return container.scrollHeight > container.clientHeight;
}

function ariaHidden(node, show) {
  if (show) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
}

function getPaddingRight(node) {
  return parseInt(window.getComputedStyle(node)['padding-right'], 10) || 0;
}

function ariaHiddenSiblings(container, mountNode, currentNode) {
  var nodesToExclude = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var show = arguments.length > 4 ? arguments[4] : undefined;
  var blacklist = [mountNode, currentNode].concat(Object(toConsumableArray["a" /* default */])(nodesToExclude));
  var blacklistTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE'];
  [].forEach.call(container.children, function (node) {
    if (node.nodeType === 1 && blacklist.indexOf(node) === -1 && blacklistTagNames.indexOf(node.tagName) === -1) {
      ariaHidden(node, show);
    }
  });
}

function findIndexOf(containerInfo, callback) {
  var idx = -1;
  containerInfo.some(function (item, index) {
    if (callback(item)) {
      idx = index;
      return true;
    }

    return false;
  });
  return idx;
}

function handleContainer(containerInfo, props) {
  var restoreStyle = [];
  var restorePaddings = [];
  var container = containerInfo.container;
  var fixedNodes;

  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      // Compute the size before applying overflow hidden to avoid any scroll jumps.
      var scrollbarSize = getScrollbarSize();
      restoreStyle.push({
        value: container.style.paddingRight,
        key: 'padding-right',
        el: container
      }); // Use computed style, here to get the real padding to add our scrollbar width.

      container.style['padding-right'] = "".concat(getPaddingRight(container) + scrollbarSize, "px"); // .mui-fixed is a global helper.

      fixedNodes = Object(ownerDocument["a" /* default */])(container).querySelectorAll('.mui-fixed');
      [].forEach.call(fixedNodes, function (node) {
        restorePaddings.push(node.style.paddingRight);
        node.style.paddingRight = "".concat(getPaddingRight(node) + scrollbarSize, "px");
      });
    } // Improve Gatsby support
    // https://css-tricks.com/snippets/css/force-vertical-scrollbar/


    var parent = container.parentElement;
    var scrollContainer = parent.nodeName === 'HTML' && window.getComputedStyle(parent)['overflow-y'] === 'scroll' ? parent : container; // Block the scroll even if no scrollbar is visible to account for mobile keyboard
    // screensize shrink.

    restoreStyle.push({
      value: scrollContainer.style.overflow,
      key: 'overflow',
      el: scrollContainer
    });
    scrollContainer.style.overflow = 'hidden';
  }

  var restore = function restore() {
    if (fixedNodes) {
      [].forEach.call(fixedNodes, function (node, i) {
        if (restorePaddings[i]) {
          node.style.paddingRight = restorePaddings[i];
        } else {
          node.style.removeProperty('padding-right');
        }
      });
    }

    restoreStyle.forEach(function (_ref) {
      var value = _ref.value,
          el = _ref.el,
          key = _ref.key;

      if (value) {
        el.style.setProperty(key, value);
      } else {
        el.style.removeProperty(key);
      }
    });
  };

  return restore;
}

function getHiddenSiblings(container) {
  var hiddenSiblings = [];
  [].forEach.call(container.children, function (node) {
    if (node.getAttribute && node.getAttribute('aria-hidden') === 'true') {
      hiddenSiblings.push(node);
    }
  });
  return hiddenSiblings;
}
/**
 * @ignore - do not document.
 *
 * Proper state management for containers and the modals in those containers.
 * Simplified, but inspired by react-overlay's ModalManager class.
 * Used by the Modal to ensure proper styling of containers.
 */


var ModalManager_ModalManager = /*#__PURE__*/function () {
  function ModalManager() {
    Object(classCallCheck["a" /* default */])(this, ModalManager); // this.modals[modalIndex] = modal


    this.modals = []; // this.containers[containerIndex] = {
    //   modals: [],
    //   container,
    //   restore: null,
    // }

    this.containers = [];
  }

  Object(createClass["a" /* default */])(ModalManager, [{
    key: "add",
    value: function add(modal, container) {
      var modalIndex = this.modals.indexOf(modal);

      if (modalIndex !== -1) {
        return modalIndex;
      }

      modalIndex = this.modals.length;
      this.modals.push(modal); // If the modal we are adding is already in the DOM.

      if (modal.modalRef) {
        ariaHidden(modal.modalRef, false);
      }

      var hiddenSiblingNodes = getHiddenSiblings(container);
      ariaHiddenSiblings(container, modal.mountNode, modal.modalRef, hiddenSiblingNodes, true);
      var containerIndex = findIndexOf(this.containers, function (item) {
        return item.container === container;
      });

      if (containerIndex !== -1) {
        this.containers[containerIndex].modals.push(modal);
        return modalIndex;
      }

      this.containers.push({
        modals: [modal],
        container: container,
        restore: null,
        hiddenSiblingNodes: hiddenSiblingNodes
      });
      return modalIndex;
    }
  }, {
    key: "mount",
    value: function mount(modal, props) {
      var containerIndex = findIndexOf(this.containers, function (item) {
        return item.modals.indexOf(modal) !== -1;
      });
      var containerInfo = this.containers[containerIndex];

      if (!containerInfo.restore) {
        containerInfo.restore = handleContainer(containerInfo, props);
      }
    }
  }, {
    key: "remove",
    value: function remove(modal) {
      var modalIndex = this.modals.indexOf(modal);

      if (modalIndex === -1) {
        return modalIndex;
      }

      var containerIndex = findIndexOf(this.containers, function (item) {
        return item.modals.indexOf(modal) !== -1;
      });
      var containerInfo = this.containers[containerIndex];
      containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
      this.modals.splice(modalIndex, 1); // If that was the last modal in a container, clean up the container.

      if (containerInfo.modals.length === 0) {
        // The modal might be closed before it had the chance to be mounted in the DOM.
        if (containerInfo.restore) {
          containerInfo.restore();
        }

        if (modal.modalRef) {
          // In case the modal wasn't in the DOM yet.
          ariaHidden(modal.modalRef, true);
        }

        ariaHiddenSiblings(containerInfo.container, modal.mountNode, modal.modalRef, containerInfo.hiddenSiblingNodes, false);
        this.containers.splice(containerIndex, 1);
      } else {
        // Otherwise make sure the next top modal is visible to a screen reader.
        var nextTop = containerInfo.modals[containerInfo.modals.length - 1]; // as soon as a modal is adding its modalRef is undefined. it can't set
        // aria-hidden because the dom element doesn't exist either
        // when modal was unmounted before modalRef gets null

        if (nextTop.modalRef) {
          ariaHidden(nextTop.modalRef, false);
        }
      }

      return modalIndex;
    }
  }, {
    key: "isTopModal",
    value: function isTopModal(modal) {
      return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
    }
  }]);

  return ModalManager;
}();


// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Unstable_TrapFocus/Unstable_TrapFocus.js
/* eslint-disable consistent-return, jsx-a11y/no-noninteractive-tabindex, camelcase */





/**
 * Utility component that locks focus inside the component.
 */

function Unstable_TrapFocus(props) {
  var children = props.children,
      _props$disableAutoFoc = props.disableAutoFocus,
      disableAutoFocus = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
      _props$disableEnforce = props.disableEnforceFocus,
      disableEnforceFocus = _props$disableEnforce === void 0 ? false : _props$disableEnforce,
      _props$disableRestore = props.disableRestoreFocus,
      disableRestoreFocus = _props$disableRestore === void 0 ? false : _props$disableRestore,
      getDoc = props.getDoc,
      isEnabled = props.isEnabled,
      open = props.open;
  var ignoreNextEnforceFocus = react["useRef"]();
  var sentinelStart = react["useRef"](null);
  var sentinelEnd = react["useRef"](null);
  var nodeToRestore = react["useRef"]();
  var rootRef = react["useRef"](null); // can be removed once we drop support for non ref forwarding class components

  var handleOwnRef = react["useCallback"](function (instance) {
    // #StrictMode ready
    rootRef.current = react_dom["findDOMNode"](instance);
  }, []);
  var handleRef = Object(useForkRef["a" /* default */])(children.ref, handleOwnRef);
  var prevOpenRef = react["useRef"]();
  react["useEffect"](function () {
    prevOpenRef.current = open;
  }, [open]);

  if (!prevOpenRef.current && open && typeof window !== 'undefined') {
    // WARNING: Potentially unsafe in concurrent mode.
    // The way the read on `nodeToRestore` is setup could make this actually safe.
    // Say we render `open={false}` -> `open={true}` but never commit.
    // We have now written a state that wasn't committed. But no committed effect
    // will read this wrong value. We only read from `nodeToRestore` in effects
    // that were committed on `open={true}`
    // WARNING: Prevents the instance from being garbage collected. Should only
    // hold a weak ref.
    nodeToRestore.current = getDoc().activeElement;
  }

  react["useEffect"](function () {
    if (!open) {
      return;
    }

    var doc = Object(ownerDocument["a" /* default */])(rootRef.current); // We might render an empty child.

    if (!disableAutoFocus && rootRef.current && !rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute('tabIndex')) {
        if (false) {}

        rootRef.current.setAttribute('tabIndex', -1);
      }

      rootRef.current.focus();
    }

    var contain = function contain() {
      var rootElement = rootRef.current; // Cleanup functions are executed lazily in React 17.
      // Contain can be called between the component being unmounted and its cleanup function being run.

      if (rootElement === null) {
        return;
      }

      if (!doc.hasFocus() || disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }

      if (rootRef.current && !rootRef.current.contains(doc.activeElement)) {
        rootRef.current.focus();
      }
    };

    var loopFocus = function loopFocus(event) {
      // 9 = Tab
      if (disableEnforceFocus || !isEnabled() || event.keyCode !== 9) {
        return;
      } // Make sure the next tab starts from the right place.


      if (doc.activeElement === rootRef.current) {
        // We need to ignore the next contain as
        // it will try to move the focus back to the rootRef element.
        ignoreNextEnforceFocus.current = true;

        if (event.shiftKey) {
          sentinelEnd.current.focus();
        } else {
          sentinelStart.current.focus();
        }
      }
    };

    doc.addEventListener('focus', contain, true);
    doc.addEventListener('keydown', loopFocus, true); // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area
    // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
    //
    // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
    // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.

    var interval = setInterval(function () {
      contain();
    }, 50);
    return function () {
      clearInterval(interval);
      doc.removeEventListener('focus', contain, true);
      doc.removeEventListener('keydown', loopFocus, true); // restoreLastFocus()

      if (!disableRestoreFocus) {
        // In IE 11 it is possible for document.activeElement to be null resulting
        // in nodeToRestore.current being null.
        // Not all elements in IE 11 have a focus method.
        // Once IE 11 support is dropped the focus() call can be unconditional.
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          nodeToRestore.current.focus();
        }

        nodeToRestore.current = null;
      }
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open]);
  return /*#__PURE__*/react["createElement"](react["Fragment"], null, /*#__PURE__*/react["createElement"]("div", {
    tabIndex: 0,
    ref: sentinelStart,
    "data-test": "sentinelStart"
  }), /*#__PURE__*/react["cloneElement"](children, {
    ref: handleRef
  }), /*#__PURE__*/react["createElement"]("div", {
    tabIndex: 0,
    ref: sentinelEnd,
    "data-test": "sentinelEnd"
  }));
}

 false ? undefined : void 0;

if (false) {}

/* harmony default export */ var Unstable_TrapFocus_Unstable_TrapFocus = (Unstable_TrapFocus);
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Modal/SimpleBackdrop.js



var SimpleBackdrop_styles = {
  /* Styles applied to the root element. */
  root: {
    zIndex: -1,
    position: 'fixed',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    WebkitTapHighlightColor: 'transparent'
  },

  /* Styles applied to the root element if `invisible={true}`. */
  invisible: {
    backgroundColor: 'transparent'
  }
};
/**
 * @ignore - internal component.
 */

var SimpleBackdrop_SimpleBackdrop = /*#__PURE__*/react["forwardRef"](function SimpleBackdrop(props, ref) {
  var _props$invisible = props.invisible,
      invisible = _props$invisible === void 0 ? false : _props$invisible,
      open = props.open,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["invisible", "open"]);

  return open ? /*#__PURE__*/react["createElement"]("div", Object(esm_extends["a" /* default */])({
    "aria-hidden": true,
    ref: ref
  }, other, {
    style: Object(esm_extends["a" /* default */])({}, SimpleBackdrop_styles.root, invisible ? SimpleBackdrop_styles.invisible : {}, other.style)
  })) : null;
});
 false ? undefined : void 0;
/* harmony default export */ var Modal_SimpleBackdrop = (SimpleBackdrop_SimpleBackdrop);
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Modal/Modal.js
















function Modal_getContainer(container) {
  container = typeof container === 'function' ? container() : container;
  return react_dom["findDOMNode"](container);
}

function getHasTransition(props) {
  return props.children ? props.children.props.hasOwnProperty('in') : false;
} // A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.


var defaultManager = new ModalManager_ModalManager();
var Modal_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'fixed',
      zIndex: theme.zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0
    },

    /* Styles applied to the root element if the `Modal` has exited. */
    hidden: {
      visibility: 'hidden'
    }
  };
};
/**
 * Modal is a lower-level construct that is leveraged by the following components:
 *
 * - [Dialog](/api/dialog/)
 * - [Drawer](/api/drawer/)
 * - [Menu](/api/menu/)
 * - [Popover](/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 */

var Modal_Modal = /*#__PURE__*/react["forwardRef"](function Modal(inProps, ref) {
  var theme = Object(useTheme_useTheme["a" /* default */])();
  var props = Object(getThemeProps["a" /* default */])({
    name: 'MuiModal',
    props: Object(esm_extends["a" /* default */])({}, inProps),
    theme: theme
  });

  var _props$BackdropCompon = props.BackdropComponent,
      BackdropComponent = _props$BackdropCompon === void 0 ? Modal_SimpleBackdrop : _props$BackdropCompon,
      BackdropProps = props.BackdropProps,
      children = props.children,
      _props$closeAfterTran = props.closeAfterTransition,
      closeAfterTransition = _props$closeAfterTran === void 0 ? false : _props$closeAfterTran,
      container = props.container,
      _props$disableAutoFoc = props.disableAutoFocus,
      disableAutoFocus = _props$disableAutoFoc === void 0 ? false : _props$disableAutoFoc,
      _props$disableBackdro = props.disableBackdropClick,
      disableBackdropClick = _props$disableBackdro === void 0 ? false : _props$disableBackdro,
      _props$disableEnforce = props.disableEnforceFocus,
      disableEnforceFocus = _props$disableEnforce === void 0 ? false : _props$disableEnforce,
      _props$disableEscapeK = props.disableEscapeKeyDown,
      disableEscapeKeyDown = _props$disableEscapeK === void 0 ? false : _props$disableEscapeK,
      _props$disablePortal = props.disablePortal,
      disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
      _props$disableRestore = props.disableRestoreFocus,
      disableRestoreFocus = _props$disableRestore === void 0 ? false : _props$disableRestore,
      _props$disableScrollL = props.disableScrollLock,
      disableScrollLock = _props$disableScrollL === void 0 ? false : _props$disableScrollL,
      _props$hideBackdrop = props.hideBackdrop,
      hideBackdrop = _props$hideBackdrop === void 0 ? false : _props$hideBackdrop,
      _props$keepMounted = props.keepMounted,
      keepMounted = _props$keepMounted === void 0 ? false : _props$keepMounted,
      _props$manager = props.manager,
      manager = _props$manager === void 0 ? defaultManager : _props$manager,
      onBackdropClick = props.onBackdropClick,
      onClose = props.onClose,
      onEscapeKeyDown = props.onEscapeKeyDown,
      onRendered = props.onRendered,
      open = props.open,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["BackdropComponent", "BackdropProps", "children", "closeAfterTransition", "container", "disableAutoFocus", "disableBackdropClick", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "manager", "onBackdropClick", "onClose", "onEscapeKeyDown", "onRendered", "open"]);

  var _React$useState = react["useState"](true),
      exited = _React$useState[0],
      setExited = _React$useState[1];

  var modal = react["useRef"]({});
  var mountNodeRef = react["useRef"](null);
  var modalRef = react["useRef"](null);
  var handleRef = Object(useForkRef["a" /* default */])(modalRef, ref);
  var hasTransition = getHasTransition(props);

  var getDoc = function getDoc() {
    return Object(ownerDocument["a" /* default */])(mountNodeRef.current);
  };

  var getModal = function getModal() {
    modal.current.modalRef = modalRef.current;
    modal.current.mountNode = mountNodeRef.current;
    return modal.current;
  };

  var handleMounted = function handleMounted() {
    manager.mount(getModal(), {
      disableScrollLock: disableScrollLock
    }); // Fix a bug on Chrome where the scroll isn't initially 0.

    modalRef.current.scrollTop = 0;
  };

  var handleOpen = Object(useEventCallback["a" /* default */])(function () {
    var resolvedContainer = Modal_getContainer(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer); // The element was already mounted.

    if (modalRef.current) {
      handleMounted();
    }
  });
  var isTopModal = react["useCallback"](function () {
    return manager.isTopModal(getModal());
  }, [manager]);
  var handlePortalRef = Object(useEventCallback["a" /* default */])(function (node) {
    mountNodeRef.current = node;

    if (!node) {
      return;
    }

    if (onRendered) {
      onRendered();
    }

    if (open && isTopModal()) {
      handleMounted();
    } else {
      ariaHidden(modalRef.current, true);
    }
  });
  var handleClose = react["useCallback"](function () {
    manager.remove(getModal());
  }, [manager]);
  react["useEffect"](function () {
    return function () {
      handleClose();
    };
  }, [handleClose]);
  react["useEffect"](function () {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);

  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }

  var handleEnter = function handleEnter() {
    setExited(false);
  };

  var handleExited = function handleExited() {
    setExited(true);

    if (closeAfterTransition) {
      handleClose();
    }
  };

  var handleBackdropClick = function handleBackdropClick(event) {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (onBackdropClick) {
      onBackdropClick(event);
    }

    if (!disableBackdropClick && onClose) {
      onClose(event, 'backdropClick');
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    // The handler doesn't take event.defaultPrevented into account:
    //
    // event.preventDefault() is meant to stop default behaviours like
    // clicking a checkbox to check it, hitting a button to submit a form,
    // and hitting left arrow to move the cursor in a text input etc.
    // Only special HTML elements have these default behaviors.
    if (event.key !== 'Escape' || !isTopModal()) {
      return;
    }

    if (onEscapeKeyDown) {
      onEscapeKeyDown(event);
    }

    if (!disableEscapeKeyDown) {
      // Swallow the event, in case someone is listening for the escape key on the body.
      event.stopPropagation();

      if (onClose) {
        onClose(event, 'escapeKeyDown');
      }
    }
  };

  var inlineStyle = Modal_styles(theme || {
    zIndex: zIndex["a" /* default */]
  });
  var childProps = {};

  if (children.props.tabIndex === undefined) {
    childProps.tabIndex = children.props.tabIndex || '-1';
  } // It's a Transition like component


  if (hasTransition) {
    childProps.onEnter = Object(createChainedFunction["a" /* default */])(handleEnter, children.props.onEnter);
    childProps.onExited = Object(createChainedFunction["a" /* default */])(handleExited, children.props.onExited);
  }

  return /*#__PURE__*/react["createElement"](esm_Portal_Portal, {
    ref: handlePortalRef,
    container: container,
    disablePortal: disablePortal
  }, /*#__PURE__*/react["createElement"]("div", Object(esm_extends["a" /* default */])({
    ref: handleRef,
    onKeyDown: handleKeyDown,
    role: "presentation"
  }, other, {
    style: Object(esm_extends["a" /* default */])({}, inlineStyle.root, !open && exited ? inlineStyle.hidden : {}, other.style)
  }), hideBackdrop ? null : /*#__PURE__*/react["createElement"](BackdropComponent, Object(esm_extends["a" /* default */])({
    open: open,
    onClick: handleBackdropClick
  }, BackdropProps)), /*#__PURE__*/react["createElement"](Unstable_TrapFocus_Unstable_TrapFocus, {
    disableEnforceFocus: disableEnforceFocus,
    disableAutoFocus: disableAutoFocus,
    disableRestoreFocus: disableRestoreFocus,
    getDoc: getDoc,
    isEnabled: isTopModal,
    open: open
  }, /*#__PURE__*/react["cloneElement"](children, childProps))));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_Modal_Modal = (Modal_Modal);
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Backdrop/Backdrop.js






var Backdrop_styles = {
  /* Styles applied to the root element. */
  root: {
    // Improve scrollable dialog support.
    zIndex: -1,
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    WebkitTapHighlightColor: 'transparent'
  },

  /* Styles applied to the root element if `invisible={true}`. */
  invisible: {
    backgroundColor: 'transparent'
  }
};
var Backdrop_Backdrop = /*#__PURE__*/react["forwardRef"](function Backdrop(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$invisible = props.invisible,
      invisible = _props$invisible === void 0 ? false : _props$invisible,
      open = props.open,
      transitionDuration = props.transitionDuration,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? esm_Fade_Fade : _props$TransitionComp,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["children", "classes", "className", "invisible", "open", "transitionDuration", "TransitionComponent"]);

  return /*#__PURE__*/react["createElement"](TransitionComponent, Object(esm_extends["a" /* default */])({
    in: open,
    timeout: transitionDuration
  }, other), /*#__PURE__*/react["createElement"]("div", {
    className: Object(clsx_m["a" /* default */])(classes.root, className, invisible && classes.invisible),
    "aria-hidden": true,
    ref: ref
  }, children));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_Backdrop_Backdrop = (Object(withStyles["a" /* default */])(Backdrop_styles, {
  name: 'MuiBackdrop'
})(Backdrop_Backdrop));
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Dialog/Dialog.js












var Dialog_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      '@media print': {
        // Use !important to override the Modal inline-style.
        position: 'absolute !important'
      }
    },

    /* Styles applied to the container element if `scroll="paper"`. */
    scrollPaper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },

    /* Styles applied to the container element if `scroll="body"`. */
    scrollBody: {
      overflowY: 'auto',
      overflowX: 'hidden',
      textAlign: 'center',
      '&:after': {
        content: '""',
        display: 'inline-block',
        verticalAlign: 'middle',
        height: '100%',
        width: '0'
      }
    },

    /* Styles applied to the container element. */
    container: {
      height: '100%',
      '@media print': {
        height: 'auto'
      },
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0
    },

    /* Styles applied to the `Paper` component. */
    paper: {
      margin: 32,
      position: 'relative',
      overflowY: 'auto',
      // Fix IE 11 issue, to remove at some point.
      '@media print': {
        overflowY: 'visible',
        boxShadow: 'none'
      }
    },

    /* Styles applied to the `Paper` component if `scroll="paper"`. */
    paperScrollPaper: {
      display: 'flex',
      flexDirection: 'column',
      maxHeight: 'calc(100% - 64px)'
    },

    /* Styles applied to the `Paper` component if `scroll="body"`. */
    paperScrollBody: {
      display: 'inline-block',
      verticalAlign: 'middle',
      textAlign: 'left' // 'initial' doesn't work on IE 11

    },

    /* Styles applied to the `Paper` component if `maxWidth=false`. */
    paperWidthFalse: {
      maxWidth: 'calc(100% - 64px)'
    },

    /* Styles applied to the `Paper` component if `maxWidth="xs"`. */
    paperWidthXs: {
      maxWidth: Math.max(theme.breakpoints.values.xs, 444),
      '&$paperScrollBody': Object(defineProperty["a" /* default */])({}, theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="sm"`. */
    paperWidthSm: {
      maxWidth: theme.breakpoints.values.sm,
      '&$paperScrollBody': Object(defineProperty["a" /* default */])({}, theme.breakpoints.down(theme.breakpoints.values.sm + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="md"`. */
    paperWidthMd: {
      maxWidth: theme.breakpoints.values.md,
      '&$paperScrollBody': Object(defineProperty["a" /* default */])({}, theme.breakpoints.down(theme.breakpoints.values.md + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="lg"`. */
    paperWidthLg: {
      maxWidth: theme.breakpoints.values.lg,
      '&$paperScrollBody': Object(defineProperty["a" /* default */])({}, theme.breakpoints.down(theme.breakpoints.values.lg + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `maxWidth="xl"`. */
    paperWidthXl: {
      maxWidth: theme.breakpoints.values.xl,
      '&$paperScrollBody': Object(defineProperty["a" /* default */])({}, theme.breakpoints.down(theme.breakpoints.values.xl + 32 * 2), {
        maxWidth: 'calc(100% - 64px)'
      })
    },

    /* Styles applied to the `Paper` component if `fullWidth={true}`. */
    paperFullWidth: {
      width: 'calc(100% - 64px)'
    },

    /* Styles applied to the `Paper` component if `fullScreen={true}`. */
    paperFullScreen: {
      margin: 0,
      width: '100%',
      maxWidth: '100%',
      height: '100%',
      maxHeight: 'none',
      borderRadius: 0,
      '&$paperScrollBody': {
        margin: 0,
        maxWidth: '100%'
      }
    }
  };
};
var defaultTransitionDuration = {
  enter: transitions["b" /* duration */].enteringScreen,
  exit: transitions["b" /* duration */].leavingScreen
};
/**
 * Dialogs are overlaid modal paper based components with a backdrop.
 */

var Dialog_Dialog = /*#__PURE__*/react["forwardRef"](function Dialog(props, ref) {
  var BackdropProps = props.BackdropProps,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$disableBackdro = props.disableBackdropClick,
      disableBackdropClick = _props$disableBackdro === void 0 ? false : _props$disableBackdro,
      _props$disableEscapeK = props.disableEscapeKeyDown,
      disableEscapeKeyDown = _props$disableEscapeK === void 0 ? false : _props$disableEscapeK,
      _props$fullScreen = props.fullScreen,
      fullScreen = _props$fullScreen === void 0 ? false : _props$fullScreen,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$maxWidth = props.maxWidth,
      maxWidth = _props$maxWidth === void 0 ? 'sm' : _props$maxWidth,
      onBackdropClick = props.onBackdropClick,
      onClose = props.onClose,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onEscapeKeyDown = props.onEscapeKeyDown,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      open = props.open,
      _props$PaperComponent = props.PaperComponent,
      PaperComponent = _props$PaperComponent === void 0 ? Paper["a" /* default */] : _props$PaperComponent,
      _props$PaperProps = props.PaperProps,
      PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
      _props$scroll = props.scroll,
      scroll = _props$scroll === void 0 ? 'paper' : _props$scroll,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? esm_Fade_Fade : _props$TransitionComp,
      _props$transitionDura = props.transitionDuration,
      transitionDuration = _props$transitionDura === void 0 ? defaultTransitionDuration : _props$transitionDura,
      TransitionProps = props.TransitionProps,
      ariaDescribedby = props['aria-describedby'],
      ariaLabelledby = props['aria-labelledby'],
      other = Object(objectWithoutProperties["a" /* default */])(props, ["BackdropProps", "children", "classes", "className", "disableBackdropClick", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "onEnter", "onEntered", "onEntering", "onEscapeKeyDown", "onExit", "onExited", "onExiting", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps", "aria-describedby", "aria-labelledby"]);

  var mouseDownTarget = react["useRef"]();

  var handleMouseDown = function handleMouseDown(event) {
    mouseDownTarget.current = event.target;
  };

  var handleBackdropClick = function handleBackdropClick(event) {
    // Ignore the events not coming from the "backdrop"
    // We don't want to close the dialog when clicking the dialog content.
    if (event.target !== event.currentTarget) {
      return;
    } // Make sure the event starts and ends on the same DOM element.


    if (event.target !== mouseDownTarget.current) {
      return;
    }

    mouseDownTarget.current = null;

    if (onBackdropClick) {
      onBackdropClick(event);
    }

    if (!disableBackdropClick && onClose) {
      onClose(event, 'backdropClick');
    }
  };

  return /*#__PURE__*/react["createElement"](esm_Modal_Modal, Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, className),
    BackdropComponent: esm_Backdrop_Backdrop,
    BackdropProps: Object(esm_extends["a" /* default */])({
      transitionDuration: transitionDuration
    }, BackdropProps),
    closeAfterTransition: true,
    disableBackdropClick: disableBackdropClick,
    disableEscapeKeyDown: disableEscapeKeyDown,
    onEscapeKeyDown: onEscapeKeyDown,
    onClose: onClose,
    open: open,
    ref: ref
  }, other), /*#__PURE__*/react["createElement"](TransitionComponent, Object(esm_extends["a" /* default */])({
    appear: true,
    in: open,
    timeout: transitionDuration,
    onEnter: onEnter,
    onEntering: onEntering,
    onEntered: onEntered,
    onExit: onExit,
    onExiting: onExiting,
    onExited: onExited,
    role: "none presentation"
  }, TransitionProps), /*#__PURE__*/react["createElement"]("div", {
    className: Object(clsx_m["a" /* default */])(classes.container, classes["scroll".concat(Object(capitalize["a" /* default */])(scroll))]),
    onMouseUp: handleBackdropClick,
    onMouseDown: handleMouseDown
  }, /*#__PURE__*/react["createElement"](PaperComponent, Object(esm_extends["a" /* default */])({
    elevation: 24,
    role: "dialog",
    "aria-describedby": ariaDescribedby,
    "aria-labelledby": ariaLabelledby
  }, PaperProps, {
    className: Object(clsx_m["a" /* default */])(classes.paper, classes["paperScroll".concat(Object(capitalize["a" /* default */])(scroll))], classes["paperWidth".concat(Object(capitalize["a" /* default */])(String(maxWidth)))], PaperProps.className, fullScreen && classes.paperFullScreen, fullWidth && classes.paperFullWidth)
  }), children))));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_Dialog_Dialog = (Object(withStyles["a" /* default */])(Dialog_styles, {
  name: 'MuiDialog'
})(Dialog_Dialog));
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js





var DialogActions_styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    justifyContent: 'flex-end',
    flex: '0 0 auto'
  },

  /* Styles applied to the root element if `disableSpacing={false}`. */
  spacing: {
    '& > :not(:first-child)': {
      marginLeft: 8
    }
  }
};
var DialogActions_DialogActions = /*#__PURE__*/react["forwardRef"](function DialogActions(props, ref) {
  var _props$disableSpacing = props.disableSpacing,
      disableSpacing = _props$disableSpacing === void 0 ? false : _props$disableSpacing,
      classes = props.classes,
      className = props.className,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["disableSpacing", "classes", "className"]);

  return /*#__PURE__*/react["createElement"]("div", Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, className, !disableSpacing && classes.spacing),
    ref: ref
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_DialogActions_DialogActions = (Object(withStyles["a" /* default */])(DialogActions_styles, {
  name: 'MuiDialogActions'
})(DialogActions_DialogActions));
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js





var DialogContent_styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      flex: '1 1 auto',
      WebkitOverflowScrolling: 'touch',
      // Add iOS momentum scrolling.
      overflowY: 'auto',
      padding: '8px 24px',
      '&:first-child': {
        // dialog without title
        paddingTop: 20
      }
    },

    /* Styles applied to the root element if `dividers={true}`. */
    dividers: {
      padding: '16px 24px',
      borderTop: "1px solid ".concat(theme.palette.divider),
      borderBottom: "1px solid ".concat(theme.palette.divider)
    }
  };
};
var DialogContent_DialogContent = /*#__PURE__*/react["forwardRef"](function DialogContent(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$dividers = props.dividers,
      dividers = _props$dividers === void 0 ? false : _props$dividers,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["classes", "className", "dividers"]);

  return /*#__PURE__*/react["createElement"]("div", Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, className, dividers && classes.dividers),
    ref: ref
  }, other));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_DialogContent_DialogContent = (Object(withStyles["a" /* default */])(DialogContent_styles, {
  name: 'MuiDialogContent'
})(DialogContent_DialogContent));
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/DialogContentText/DialogContentText.js




var DialogContentText_styles = {
  /* Styles applied to the root element. */
  root: {
    marginBottom: 12
  }
};
var DialogContentText_DialogContentText = /*#__PURE__*/react["forwardRef"](function DialogContentText(props, ref) {
  return /*#__PURE__*/react["createElement"](Typography["a" /* default */], Object(esm_extends["a" /* default */])({
    component: "p",
    variant: "body1",
    color: "textSecondary",
    ref: ref
  }, props));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_DialogContentText_DialogContentText = (Object(withStyles["a" /* default */])(DialogContentText_styles, {
  name: 'MuiDialogContentText'
})(DialogContentText_DialogContentText));
// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js






var DialogTitle_styles = {
  /* Styles applied to the root element. */
  root: {
    margin: 0,
    padding: '16px 24px',
    flex: '0 0 auto'
  }
};
var DialogTitle_DialogTitle = /*#__PURE__*/react["forwardRef"](function DialogTitle(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$disableTypogra = props.disableTypography,
      disableTypography = _props$disableTypogra === void 0 ? false : _props$disableTypogra,
      other = Object(objectWithoutProperties["a" /* default */])(props, ["children", "classes", "className", "disableTypography"]);

  return /*#__PURE__*/react["createElement"]("div", Object(esm_extends["a" /* default */])({
    className: Object(clsx_m["a" /* default */])(classes.root, className),
    ref: ref
  }, other), disableTypography ? children : /*#__PURE__*/react["createElement"](Typography["a" /* default */], {
    component: "h2",
    variant: "h6"
  }, children));
});
 false ? undefined : void 0;
/* harmony default export */ var esm_DialogTitle_DialogTitle = (Object(withStyles["a" /* default */])(DialogTitle_styles, {
  name: 'MuiDialogTitle'
})(DialogTitle_DialogTitle));
// CONCATENATED MODULE: ./src/components/dialog/confirm-dialog.js
var confirm_dialog_ConfirmDialog=function ConfirmDialog(props){var _props$open=props.open,open=_props$open===void 0?false:_props$open,_props$handleClose=props.handleClose,handleClose=_props$handleClose===void 0?function(){}:_props$handleClose;return/*#__PURE__*/react_default.a.createElement("div",null,/*#__PURE__*/react_default.a.createElement(esm_Dialog_Dialog,{open:open,onClose:function onClose(){return handleClose(false);},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},/*#__PURE__*/react_default.a.createElement(esm_DialogTitle_DialogTitle,{style:{color:"black"},id:"alert-dialog-title"},"An 107MB AI model will be downloaded"),/*#__PURE__*/react_default.a.createElement(esm_DialogContent_DialogContent,null,/*#__PURE__*/react_default.a.createElement(esm_DialogContentText_DialogContentText,{id:"alert-dialog-description1"},"This feature makes use of the NLP deep learning technology,\n             it will use a pre-trained AI model to find out the closest answers to a question from a passage.\n              I use this AI to help answer some simple questions about me."),/*#__PURE__*/react_default.a.createElement(esm_DialogContentText_DialogContentText,{id:"alert-dialog-description2"},"The AI model is hosted on the cloud,\n             therefore we need to download it and load it.\n              If you want to preserve your network data, please click cancel to close this window.")),/*#__PURE__*/react_default.a.createElement(esm_DialogActions_DialogActions,null,/*#__PURE__*/react_default.a.createElement(Button["a" /* default */],{onClick:function onClick(){return handleClose(false);},color:"primary"},"Cancel"),/*#__PURE__*/react_default.a.createElement(Button["a" /* default */],{onClick:function onClick(){return handleClose(true);},color:"secondary",variant:"outlined"},"Agree"))));};/* harmony default export */ var confirm_dialog = (confirm_dialog_ConfirmDialog);
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__("Ji2X");

// EXTERNAL MODULE: ./node_modules/react-reveal/Slide.js
var Slide = __webpack_require__("oBNZ");

// EXTERNAL MODULE: ./node_modules/@tensorflow/tfjs-core/dist/tf-core.esm.js
var tf_core_esm = __webpack_require__("Re/O");

// EXTERNAL MODULE: ./node_modules/@tensorflow/tfjs-converter/dist/tf-converter.esm.js
var tf_converter_esm = __webpack_require__("tgWb");

// CONCATENATED MODULE: ./node_modules/@tensorflow-models/qna/dist/qna.esm.js


/**
    * @license
    * Copyright 2020 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    */



function __awaiter(t, e, n, r) {
  return new (n || (n = Promise))(function (o, i) {
    function s(t) {
      try {
        a(r.next(t));
      } catch (t) {
        i(t);
      }
    }

    function u(t) {
      try {
        a(r.throw(t));
      } catch (t) {
        i(t);
      }
    }

    function a(t) {
      t.done ? o(t.value) : new n(function (e) {
        e(t.value);
      }).then(s, u);
    }

    a((r = r.apply(t, e || [])).next());
  });
}

function __generator(t, e) {
  var n,
      r,
      o,
      i,
      s = {
    label: 0,
    sent: function sent() {
      if (1 & o[0]) throw o[1];
      return o[1];
    },
    trys: [],
    ops: []
  };
  return i = {
    next: u(0),
    throw: u(1),
    return: u(2)
  }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
    return this;
  }), i;

  function u(i) {
    return function (u) {
      return function (i) {
        if (n) throw new TypeError("Generator is already executing.");

        for (; s;) {
          try {
            if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;

            switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
              case 0:
              case 1:
                o = i;
                break;

              case 4:
                return s.label++, {
                  value: i[1],
                  done: !1
                };

              case 5:
                s.label++, r = i[1], i = [0];
                continue;

              case 7:
                i = s.ops.pop(), s.trys.pop();
                continue;

              default:
                if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                  s = 0;
                  continue;
                }

                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                  s.label = i[1];
                  break;
                }

                if (6 === i[0] && s.label < o[1]) {
                  s.label = o[1], o = i;
                  break;
                }

                if (o && s.label < o[2]) {
                  s.label = o[2], s.ops.push(i);
                  break;
                }

                o[2] && s.ops.pop(), s.trys.pop();
                continue;
            }

            i = e.call(t, s);
          } catch (t) {
            i = [6, t], r = 0;
          } finally {
            n = o = 0;
          }
        }

        if (5 & i[0]) throw i[1];
        return {
          value: i[0] ? i[1] : void 0,
          done: !0
        };
      }([i, u]);
    };
  }
}

function __values(t) {
  var e = "function" == typeof Symbol && t[Symbol.iterator],
      n = 0;
  return e ? e.call(t) : {
    next: function next() {
      return t && n >= t.length && (t = void 0), {
        value: t && t[n++],
        done: !t
      };
    }
  };
}

function __read(t, e) {
  var n = "function" == typeof Symbol && t[Symbol.iterator];
  if (!n) return t;
  var r,
      o,
      i = n.call(t),
      s = [];

  try {
    for (; (void 0 === e || e-- > 0) && !(r = i.next()).done;) {
      s.push(r.value);
    }
  } catch (t) {
    o = {
      error: t
    };
  } finally {
    try {
      r && !r.done && (n = i.return) && n.call(i);
    } finally {
      if (o) throw o.error;
    }
  }

  return s;
}

var SEPERATOR = "▁",
    UNK_INDEX = 100,
    CLS_INDEX = 101,
    CLS_TOKEN = "[CLS]",
    SEP_INDEX = 102,
    SEP_TOKEN = "[SEP]",
    NFKC_TOKEN = "NFKC",
    VOCAB_BASE = "https://tfhub.dev/tensorflow/tfjs-model/mobilebert/1/",
    VOCAB_URL = VOCAB_BASE + "processed_vocab.json?tfjs-format=file",
    TrieNode = function () {
  function t(t) {
    this.key = t, this.children = {}, this.end = !1;
  }

  return t.prototype.getWord = function () {
    for (var t = [], e = this; null != e;) {
      null != e.key && t.unshift(e.key), e = e.parent;
    }

    return [t, this.score, this.index];
  }, t;
}(),
    Trie = function () {
  function t() {
    this.root = new TrieNode(null);
  }

  return t.prototype.insert = function (t, e, n) {
    var r,
        o,
        i = this.root,
        s = [];

    try {
      for (var u = __values(t), a = u.next(); !a.done; a = u.next()) {
        var l = a.value;
        s.push(l);
      }
    } catch (t) {
      r = {
        error: t
      };
    } finally {
      try {
        a && !a.done && (o = u.return) && o.call(u);
      } finally {
        if (r) throw r.error;
      }
    }

    for (var c = 0; c < s.length; c++) {
      null == i.children[s[c]] && (i.children[s[c]] = new TrieNode(s[c]), i.children[s[c]].parent = i), i = i.children[s[c]], c === s.length - 1 && (i.end = !0, i.score = e, i.index = n);
    }
  }, t.prototype.find = function (t) {
    for (var e = this.root, n = 0; n < t.length && null != e;) {
      e = e.children[t[n]], n++;
    }

    return e;
  }, t;
}();

function isWhitespace(t) {
  return /\s/.test(t);
}

function isInvalid(t) {
  return 0 === t.charCodeAt(0) || 65533 === t.charCodeAt(0);
}

var punctuations = "[~`!@#$%^&*(){}[];:\"'<,.>?/\\|-_+=";

function isPunctuation(t) {
  return -1 !== punctuations.indexOf(t);
}

var BertTokenizer = function () {
  function t() {}

  return t.prototype.load = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t, e, n;
      return __generator(this, function (r) {
        switch (r.label) {
          case 0:
            return t = this, [4, this.loadVocab()];

          case 1:
            for (t.vocab = r.sent(), this.trie = new Trie(), e = 999; e < this.vocab.length; e++) {
              n = this.vocab[e], this.trie.insert(n, 1, e);
            }

            return [2];
        }
      });
    });
  }, t.prototype.loadVocab = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (t) {
        return [2, tf_core_esm["Ac" /* util */].fetch(VOCAB_URL).then(function (t) {
          return t.json();
        })];
      });
    });
  }, t.prototype.processInput = function (t) {
    for (var e = this, n = [], r = 0, o = this.cleanText(t, n).split(" ").map(function (t) {
      t = t.toLowerCase();
      var o = e.runSplitOnPunc(t, r, n);
      return r += t.length + 1, o;
    }), i = [], s = 0; s < o.length; s++) {
      i = i.concat(o[s]);
    }

    return i;
  }, t.prototype.cleanText = function (t, e) {
    var n,
        r,
        o = [],
        i = 0,
        s = 0;

    try {
      for (var u = __values(t), a = u.next(); !a.done; a = u.next()) {
        var l = a.value;
        if (isInvalid(l)) i += l.length;else {
          if (isWhitespace(l)) {
            if (!(o.length > 0 && " " !== o[o.length - 1])) {
              i += l.length;
              continue;
            }

            o.push(" "), e[s] = i, i += l.length;
          } else o.push(l), e[s] = i, i += l.length;

          s++;
        }
      }
    } catch (t) {
      n = {
        error: t
      };
    } finally {
      try {
        a && !a.done && (r = u.return) && r.call(u);
      } finally {
        if (n) throw n.error;
      }
    }

    return o.join("");
  }, t.prototype.runSplitOnPunc = function (t, e, n) {
    var r,
        o,
        i = [],
        s = !0;

    try {
      for (var u = __values(t), a = u.next(); !a.done; a = u.next()) {
        var l = a.value;
        isPunctuation(l) ? (i.push({
          text: l,
          index: n[e]
        }), e += l.length, s = !0) : (s && (i.push({
          text: "",
          index: n[e]
        }), s = !1), i[i.length - 1].text += l, e += l.length);
      }
    } catch (t) {
      r = {
        error: t
      };
    } finally {
      try {
        a && !a.done && (o = u.return) && o.call(u);
      } finally {
        if (r) throw r.error;
      }
    }

    return i;
  }, t.prototype.tokenize = function (t) {
    var e,
        n,
        r = [],
        o = this.processInput(t);
    o.forEach(function (t) {
      t.text !== CLS_TOKEN && t.text !== SEP_TOKEN && (t.text = "" + SEPERATOR + t.text.normalize(NFKC_TOKEN));
    });

    for (var i = 0; i < o.length; i++) {
      var s = [];

      try {
        for (var u = (e = void 0, __values(o[i].text)), a = u.next(); !a.done; a = u.next()) {
          var l = a.value;
          s.push(l);
        }
      } catch (t) {
        e = {
          error: t
        };
      } finally {
        try {
          a && !a.done && (n = u.return) && n.call(u);
        } finally {
          if (e) throw e.error;
        }
      }

      for (var c = !1, h = 0, f = [], p = s.length; h < p;) {
        for (var d = p, _ = void 0; h < d;) {
          var v = s.slice(h, d).join(""),
              g = this.trie.find(v);

          if (null != g && null != g.end) {
            _ = g.getWord()[2];
            break;
          }

          d -= 1;
        }

        if (null == _) {
          c = !0;
          break;
        }

        f.push(_), h = d;
      }

      c ? r.push(UNK_INDEX) : r = r.concat(f);
    }

    return r;
  }, t;
}();

function loadTokenizer() {
  return __awaiter(this, void 0, void 0, function () {
    var t;
    return __generator(this, function (e) {
      switch (e.label) {
        case 0:
          return [4, (t = new BertTokenizer()).load()];

        case 1:
          return e.sent(), [2, t];
      }
    });
  });
}

var MODEL_URL = "https://tfhub.dev/tensorflow/tfjs-model/mobilebert/1",
    INPUT_SIZE = 384,
    MAX_ANSWER_LEN = 32,
    MAX_QUERY_LEN = 64,
    MAX_SEQ_LEN = 384,
    PREDICT_ANSWER_NUM = 5,
    OUTPUT_OFFSET = 1,
    NO_ANSWER_THRESHOLD = 4.3980759382247925,
    QuestionAndAnswerImpl = function () {
  function t(t) {
    this.modelConfig = t, null == this.modelConfig && (this.modelConfig = {
      modelUrl: MODEL_URL,
      fromTFHub: !0
    }), null == this.modelConfig.fromTFHub && (this.modelConfig.fromTFHub = !1);
  }

  return t.prototype.process = function (t, e, n, r, o) {
    void 0 === o && (o = 128), t = (t = t.replace(/\?/g, "")).trim(), t += "?";
    var i = this.tokenizer.tokenize(t);
    if (i.length > n) throw new Error("The length of question token exceeds the limit (" + n + ").");

    for (var s = this.tokenizer.processInput(e.trim()), u = [], a = [], l = 0; l < s.length; l++) {
      for (var c = s[l].text, h = this.tokenizer.tokenize(c), f = 0; f < h.length; f++) {
        var p = h[f];
        u.push(l), a.push(p);
      }
    }

    for (var d = r - i.length - 3, _ = [], v = 0; v < a.length;) {
      var g = a.length - v;
      if (g > d && (g = d), _.push({
        start: v,
        length: g
      }), v + g === a.length) break;
      v += Math.min(g, o);
    }

    return _.map(function (t) {
      var e = [],
          n = [],
          o = {};
      e.push(CLS_INDEX), n.push(0);

      for (var l = 0; l < i.length; l++) {
        var c = i[l];
        e.push(c), n.push(0);
      }

      e.push(SEP_INDEX), n.push(0);

      for (l = 0; l < t.length; l++) {
        var h = l + t.start,
            f = a[h];
        e.push(f), n.push(1), o[e.length] = u[h];
      }

      e.push(SEP_INDEX), n.push(1);

      for (var p = e, d = p.map(function (t) {
        return 1;
      }); p.length < r;) {
        p.push(0), d.push(0), n.push(0);
      }

      return {
        inputIds: p,
        inputMask: d,
        segmentIds: n,
        origTokens: s,
        tokenToOrigMap: o
      };
    });
  }, t.prototype.load = function () {
    return __awaiter(this, void 0, void 0, function () {
      var t, e, n, r, o;
      return __generator(this, function (i) {
        switch (i.label) {
          case 0:
            return t = this, [4, Object(tf_converter_esm["a" /* loadGraphModel */])(this.modelConfig.modelUrl, {
              fromTFHub: this.modelConfig.fromTFHub
            })];

          case 1:
            return t.model = i.sent(), e = Object(tf_core_esm["Db" /* ones */])([1, INPUT_SIZE], "int32"), n = Object(tf_core_esm["Db" /* ones */])([1, INPUT_SIZE], "int32"), r = Object(tf_core_esm["Db" /* ones */])([1, INPUT_SIZE], "int32"), this.model.execute({
              input_ids: e,
              segment_ids: n,
              input_mask: r,
              global_step: Object(tf_core_esm["Tb" /* scalar */])(1, "int32")
            }), o = this, [4, loadTokenizer()];

          case 2:
            return o.tokenizer = i.sent(), [2];
        }
      });
    });
  }, t.prototype.findAnswers = function (t, e) {
    return __awaiter(this, void 0, void 0, function () {
      var n,
          r,
          o,
          i,
          s,
          u,
          a,
          l,
          c,
          h,
          f = this;
      return __generator(this, function (p) {
        switch (p.label) {
          case 0:
            if (null == t || null == e) throw new Error("The input to findAnswers call is null, please pass a string as input.");
            return n = this.process(t, e, MAX_QUERY_LEN, MAX_SEQ_LEN), r = n.map(function (t) {
              return t.inputIds;
            }), o = n.map(function (t) {
              return t.segmentIds;
            }), i = n.map(function (t) {
              return t.inputMask;
            }), s = Object(tf_core_esm["Tb" /* scalar */])(1, "int32"), u = n.length, a = Object(tf_core_esm["uc" /* tidy */])(function () {
              var t = Object(tf_core_esm["tc" /* tensor2d */])(r, [u, INPUT_SIZE], "int32"),
                  e = Object(tf_core_esm["tc" /* tensor2d */])(o, [u, INPUT_SIZE], "int32"),
                  n = Object(tf_core_esm["tc" /* tensor2d */])(i, [u, INPUT_SIZE], "int32");
              return f.model.execute({
                input_ids: t,
                segment_ids: e,
                input_mask: n,
                global_step: s
              }, ["start_logits", "end_logits"]);
            }), [4, Promise.all([a[0].array(), a[1].array()])];

          case 1:
            for (l = p.sent(), s.dispose(), a[0].dispose(), a[1].dispose(), c = [], h = 0; h < u; h++) {
              c.push(this.getBestAnswers(l[0][h], l[1][h], n[h].origTokens, n[h].tokenToOrigMap, e, h));
            }

            return [2, c.reduce(function (t, e) {
              return t.concat(e);
            }, []).sort(function (t, e) {
              return e.score - t.score;
            }).slice(0, PREDICT_ANSWER_NUM)];
        }
      });
    });
  }, t.prototype.getBestAnswers = function (t, e, n, r, o, i) {
    var s;
    void 0 === i && (i = 0);
    var u = this.getBestIndex(t),
        a = this.getBestIndex(e),
        l = [];
    u.forEach(function (n) {
      a.forEach(function (o) {
        r[n] && r[o] && o >= n && o - n + 1 < MAX_ANSWER_LEN && l.push({
          start: n,
          end: o,
          score: t[n] + e[o]
        });
      });
    }), l.sort(function (t, e) {
      return e.score - t.score;
    });

    for (var c = [], h = 0; h < l.length && !(h >= PREDICT_ANSWER_NUM || l[h].score < NO_ANSWER_THRESHOLD); h++) {
      var f = "",
          p = 0,
          d = 0;
      l[h].start > 0 ? (f = (s = __read(this.convertBack(n, r, l[h].start, l[h].end, o), 3))[0], p = s[1], d = s[2]) : f = "", c.push({
        text: f,
        score: l[h].score,
        startIndex: p,
        endIndex: d
      });
    }

    return c;
  }, t.prototype.getBestIndex = function (t) {
    for (var e = [], n = 0; n < MAX_SEQ_LEN; n++) {
      e.push([n, n, t[n]]);
    }

    e.sort(function (t, e) {
      return e[2] - t[2];
    });
    var r = [];

    for (n = 0; n < PREDICT_ANSWER_NUM; n++) {
      r.push(e[n][0]);
    }

    return r;
  }, t.prototype.convertBack = function (t, e, n, r, o) {
    var i = r + OUTPUT_OFFSET,
        s = e[n + OUTPUT_OFFSET],
        u = e[i],
        a = t[s].index,
        l = u < t.length - 1 ? t[u + 1].index - 1 : t[u].index + t[u].text.length;
    return [o.slice(a, l + 1).trim(), a, l];
  }, t;
}();

function load(t) {
  return __awaiter(this, void 0, void 0, function () {
    var e;
    return __generator(this, function (n) {
      switch (n.label) {
        case 0:
          return [4, (e = new QuestionAndAnswerImpl(t)).load()];

        case 1:
          return n.sent(), [2, e];
      }
    });
  });
}

var version = "1.0.0";

// CONCATENATED MODULE: ./src/pages/index.js
var pages_IndexPage=function IndexPage(){var _useState=Object(react["useState"])(null),model=_useState[0],setModel=_useState[1];var _useState2=Object(react["useState"])(896),bannerHeight=_useState2[0],setBannerHeight=_useState2[1];var _useState3=Object(react["useState"])(constants["b" /* MODES */].READ),mode=_useState3[0],setMode=_useState3[1];var _useState4=Object(react["useState"])(false),openConfirmDialog=_useState4[0],setConfirmDialogOpen=_useState4[1];var handleConfirmDialogClose=function handleConfirmDialogClose(confirm){if(confirm){setMode(constants["b" /* MODES */].ASK);}setConfirmDialogOpen(false);};var modeSwitch=function modeSwitch(mode){if(mode===constants["b" /* MODES */].ASK&&model===null){setConfirmDialogOpen(true);}else{setMode(mode);}};var loadModel=/*#__PURE__*/function(){var _ref=_asyncToGenerator(/*#__PURE__*/regenerator_default.a.mark(function _callee(){var model;return regenerator_default.a.wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return load();case 2:model=_context.sent;setModel(model);case 4:case"end":return _context.stop();}}},_callee);}));return function loadModel(){return _ref.apply(this,arguments);};}();return/*#__PURE__*/react_default.a.createElement(layout["a" /* default */],null,/*#__PURE__*/react_default.a.createElement(Container["a" /* default */],{maxWidth:"lg",style:{zIndex:10}},/*#__PURE__*/react_default.a.createElement(seo["a" /* default */],{title:"Home"}),/*#__PURE__*/react_default.a.createElement(banner,{id:constants["a" /* BLOCK_IDS */].MOON,setBannerHeight:setBannerHeight}),/*#__PURE__*/react_default.a.createElement(about_block,{id:constants["a" /* BLOCK_IDS */].ABOUT,model:model,loadModel:loadModel,mode:mode,setMode:modeSwitch}),/*#__PURE__*/react_default.a.createElement(project_block,{id:constants["a" /* BLOCK_IDS */].PROJECTS})),/*#__PURE__*/react_default.a.createElement(confirm_dialog,{open:openConfirmDialog,handleClose:handleConfirmDialogClose}));};/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_IndexPage);

/***/ }),

/***/ "RwSH":
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
  d: "M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"
}), 'GitHub');

exports.default = _default;

/***/ }),

/***/ "URgk":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply; // DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};

exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};

exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}

Timeout.prototype.unref = Timeout.prototype.ref = function () {};

Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
}; // Does not start the time, just sets up the members needed.


exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);
  var msecs = item._idleTimeout;

  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
}; // setimmediate attaches itself to the global object


__webpack_require__("YBdB"); // On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.


exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("yLpj")))

/***/ }),

/***/ "V6Ve":
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__("kekF");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "WFqU":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("yLpj")))

/***/ }),

/***/ "Xef4":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAqFBMVEUAAAAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDAMGDA8RNNEAAAAOHRSTlMA/vfyBgsQ4+ne7RkU2NTNwR4jrsUsOrRuoaZzuEMx0VK9YIw1J2l+V5x5TpiIyYNIqpBcsZQ+ZfRTF/wAABK5SURBVGjejFiJeqM2GHSb2IAxkrDEDeayuQ+Dr/d/s46gydcm200F9m5irGFm/otsfrHe5bm+5Pv3td1tDxvraVp2ZRdV2/d94NWO5/jc96auznvfd7OgSdz2ae+O+nbz6/X+/o7t8fbrT3fbrXXRk8jOXkH9ePR+6E2cpal/j/3B53yeeNcUSZC1p+tJ17+zkHuvOy0/4cT6B6P37bv+fjwfnlFyLdxmzj3fCR0as4HRWCOECCpC6t9537tuUtmmaf5SLQgiX1v8g/N9ZfZBcQsY3TpeWtstiya/czGlZEgppQqJCaEGoXQgXPg+f+TVrboeLl93x9v2sF3X5gCIRdDdDiAfH78fzEhvr21WPvp6EpwzgxhCiVVFw6FqmqYAiRPu5HX+am7J9Zvfu+1CQQcItJTvwNnhWKXb6duDDpTzLXtVPq9DQSjRDE3b7/fqXlPe3t4URVUMkgrBJq938zFJviiFuz/o2Fg3dzucgJEYILeiSKX0o9k+r0lf1WNXDsIxqAoWe+yON/XPt71K9qqixkIM3PHH8uEm/yKyXWzQdQBsACFh4Jq+26wfSWPM7dY0n01lB71Xsy4Wqka0vfLn23LI8889zr2qCmoMTlrneZf9I6jkPtBJbn6EPnhtjhuJtzGleFI0IOi2FbUJbhBBG0IoVVH26+5y/YEXOO3BB/4g3JzaG/t/hO6CsTHl9rvj8Xi4HDYH/AdAq3KgAmKnsx1di5f34pwy+Kzu90BYAP4AxgIjkQCuxPFEndoPPsNqJyGW7TbL/pcL7LlcLgcJg1+boLh9v9jI8ltQenPpDDFR9vBiRfjnWlAQAIZCmMP9/CP6dzB8owMBWwLjoFuWruuWebEABS5Yunm0TjvbypJbMU5hTAwoAmn+CbLQWTTDuVeQnIz1jw+pDlIp3PABCNjdPOn2+XjWbX17snRwAzwC63Kyn5VbzKMvfDpoKuz4yuITTUpGVEMbJn/lIdNutUNyMPXLM4ou0ak9naNLe9YhG4Jga1mHU5ZlSdDzmlEBx9X9YvZ3iFUzVYZyGNcfdRV+LDwOp2N02dlte4uqNrJsu7Xt8+X0vrV2l+PZOl7bYAzqmRMUEfjxhccXY/bKXtPS0FsAdqvncEPfnM1TdL3cXrdX0iY3NzHt7Bq1NuhBrNetdYNifNQoUZqKzPsNxuIMAtlgqdRq5QGtLkc9imz7lt2KoHBvbp9dM/fW2K7kAz+iKrkFRT+nfqrB8/1vMKRia4hRytaytwUIMPSjHT1tFwBZMM5lUQbFa3Zdd3xVrWU/z8kpQ/hmJfcNA/kGQ36DsoJoisH5CqJLxXTrdDpVUdaU1assu65r8n7OZxdt4VW52fl8u2ZV2zTl7FFDpuGPGBLFMOI7QCQMsuCA6Llek1uZdXXTjf1cci8Py3wu834syuhVVUEVzP3YOJMwiKYurv92vQFEjamQeSgL1sayTs8qQ2cei7we6ynvPD759/vdmbt6DB5B5rZFc3vlXenlRCMqQKTwv6cCEDJoyBLpyMHcRqcqq4omeHgPHvIwZSETvvMIB2fq89Et8uZ8C/J8fORTSjVFAZGfmAAE1hMG07EOh+P52bpucW5q/97fHQcodBj8lPkDjdFJ73Ndw5ysf9SzI2K6NJAfMNYg1gy6OKLvjifr2hZu7j06h3MnZDxlMTUMOhhxOIQp577j5UBAp+I+oShbS7L/sJYCpol1jDKt6/lZvsb84Tv3OwtRCzQFEYRsCA1BGLtzFob1XE98ujMmoJay/z8YaF9IR/QIYByeMCR48R48UioGomhEtmpcgHKtDYI6oT/MouMYsYQ3aLL8/i+QN0WL+TKLHM7Pcxt1QelPImQDZMIooGoKcDTUOKJpMYvJwBigvDBMBS4wZK/6EQOeGJpY2pV5PiMR8qALQydlhCHRZAfFiUILUoZGB0r9mt7DaWI1Jjl88D+oLMGlSbkOG1STLCqbuvengVEm+yYw5FI1QIGSahhDLGCWL/jEWEi1pZP8zESFJQS1C4XRSgokIfcaJ6UGgadgIiMUxx6E31QVfBgjQzgxwQbiA4QsTADzuzIMLTRKY6SJbp6rqniMHasHQtG4JQUp53LscYI0TApjEXtxHcN6Wbr2P8bwkvDGIASiyzo+i/bVBPeZUQiIdqdKGp9LokhyJI5FGA5icGKDGqrMxZ/qowpLaco226N+ygp39B6p4xgGdJBz4LrWK+UNLdYYAgnqCMGHgRJtYfJTumOWGMIaxp+usMSbnYlRQjTsJ1X60HsdDBcQxAmhhOJbhgxy6PV51X80eekIEd6E8dC+XYNHnvsOC2UFx4afPFb/FhDpPchwMbE4vWM2hU2A/32OaFgohBuMIlFQYlzjXjigb3+OayvESnuJE0NBvoQpclIIpIqm/n3lfzd4Fd8gfo3OaFpRlDSldxdEiRG7iz5fvyH7KPKFEY0yJHway2mFqP+NgqIl+zvyzu/djWklCcpvl6aDYSC01q/h+NZ9kJIKAow6jDuCChQ1uLLY96sRAkSoFhv8fo/GjWlaVhJ0acgZMYi6X7/1hcqal6oWw0dCmQP7CAQzNKi4EJdsP6zA1fKesCgb0tkPyo1+ukZBkYfcjyms/AD57qLMSDo4Q5qGmNd8OCOLA0bu1cEVaV0QCsmqacirfJqL28Y829cqm4PRGJQlj7+VC0l/BSGaLJW+qDu/9hGOIkYplXm67v2ZVCiv2MtgQ838unlmm6WoZDkPJyTYQh9cfhErKuRCrJDQc9Jw4nU9hcwRzDAIIlLSWTVQZZtaMAbCWR5giEsqTFtW23ZdMaWD0DTc2JIgv5w7NNkth9SZ8rrP/c4J6R2oGmrRUohUmWLQCWJpZEiJ5z36vgtuZzx62CdEV+mHnkEI5ILDXzFWrWWRFAZu35sxvDyCrhvBn9FUtmlVmoCqh2twK4ig1OvvYx+4mf208Dj1fCYYEPM72l6sSOe/oHzk/PKYTlJxdybul+7Yd/OMcscZG2JNUGKsVcBQmTEQp8PQkbvlNYku5mFzvEQyvO55KgTkVb8/ni2hs5fFDvWTibD2u352i7opgHN/oJnyJdQ0cIgFMonNDve82R3HGyZfOTkeTlFUVIHPaxEPkvMak9/UQgKj2jGR8rx0+6YMbuOYj+N9foRzSClHuMaoNqIMHVZ7Xd31xdU9VRdzi75oHu02wWTNOwcOah8h/Inyd71XF72Y16R11wRBkF3LqsWAA1G8fOIOm9CchD+xNOzSuXv0wS2Kjpa1e5d/MdG3l6i6NfNEQ5JSxAbkl0H8eSwLcYMaTBmUqR9l1lTB9dq247MZazfwGsxrnuf5vld7zdz3fZtfo+v5dDHfD8tTw1G/2G1Qjk3KMOIaiozyD1vkuZTHJRUNQinzSz5nFdapTc5J4gbVzfWKvplLTIa8g1dlcy2ymx1ZeKY6bIGB9Vdr1ralJgxF+wC0FiwSJIBIGkO4CCggCP//Z90JrbW2fbFNx+ly1gzbk3Pd+zgmSedZlEmLCq5HLSTsiqG//0jiLQoXRhmw8iypqr6SJO3p3ARdVSRJnYilKOqlLsdxjBoxWzPzTBvS2ApimZRKnnRZC4UBpmiRQT/5qVDonrUF82/bLE4WnrIgzwOPNjPjlPc8IrxnBReI2KZnPXSL3LGcJ2nRIlJW6dLGE2qk4v+POULjAADBgGT7gmI0+N3h0i4iDTxifiBMooKzWfbNjNvgPcZQAtWRKrXKNJ7FRQPCQyWj7tAN+6vKKVVZtVsABf8on3/euu52j+l+artmSVPmOIbhOKZnBR4iiEFgYGxmFnUIRizHJqb1hKCkLIMwxuui9OsQI+9XNQjrRwMDWNqSjb4s/3a4JaKmSxo4WjXywGdN4pm5ldvM8SAuEcNzTC1f/gpiWkEgq2i5lKA66KsoHkhdeB8oCIJVidtsj6Bdw9SNIxdBqoQ3JZZYtuJojm3ZOJ7t4b2WBYwXELAT2MorKrIyjo++u9WzL1yjZaZP6nz8cnV3w3GIwXwFTyV11vA3FY6j+LmS4ta32hW/H4hYuZ2O472+n/3Qn9CKXBUA6myROSgnX3exu+tQsZAjcPoK8UPaxf/mGqsvFjxbYqNxQfsZl/pyyc7TafoKFgRT8FKucDFz7BF5R7+Mu6j3JLGevWqucIrf/hVCDdyWQaiaVctkaNW0evX38A1GUsi8W6B8PU4nCKOH7jZWDWU5QB4PW9VXx8BLAf3lsiCgwmUOakvFFy7i2J+Asdu7OyB8UWLlDo0pjGMlJS9wCCPmT2UUxMNWEhnxELfIP0vh/Y5jafUGkuPcyKWuz2V7HoYThhfMV1Dfw2l/OMV+lt2SUXQNeJ9hWQ8ZmiBbAmRFgzpFrNkOHA+2mH+4NRUeyB7poSSJ8lLG5/vQ+ufwBu36sr/FYXzwu/OtLHkiA8iFj50B6L9H8p6ljUNnxOdMbcCA78CYFxytSCh50cyp7Iu+jJL23mbnQx0e2zDMWlD3YqkbMTJGiW1rO/CCGwhuOe/7uWrGpanTpkqZJEjJ3HwJAUMHiKXSKaW8GRsR3eoz9I3yHKFP4J66sq1HWkRy7i1kxeOaLa+RQVGMRdUlSZkqMalYOOsZRemCnS+WOLDRAhg6GZ2LoFo6/Fl0KevykvCOQw9JRTWSwHzcFZYblpzpkiRwY10n5xjVOVm6RKQVlbbpmb+4XzvKtJU1xKZoEnPDK2fhEQ5Hox1HEQXNSIlnI3i+ZyEekjMpWRGhXUXhlBzVDgVjb1F2dEHZV1r/6z5jFckdC0OrpIwuAv2Ojz06XyFSznlDcOBoc91wwLdYC4hUlOU9ayGon07I4WlCD4YSl/QUASI948UtKlm0Wo4y52F8GVM6Nt4coMc2uGOKpzooUD9i14L+bVTJiOHr4F/80PWnnRtOaBVZ3N2jRHApA8jLxuvmR21LsGtw8IGlHaSMSplSmmLkkNLILedp72SC1OS8gDZZdmEY76+763UTnvZg+YPvxyJK0ioPTBTk1+qCA1u0AP0BMp5teCZjBE3WwKdGiX38hYGuRHgl6kUvHnZgX+hBKHJbzJDHIypGdqsjyZ3ctF5RdMip5YxyDspErtTVDzAad+tZpsbQhhhoU5CulJTnn+I9ED5tNNdTlBK05xj6nUgg/Tp/KvvKvNUez7PWfx+I5eFn6ut7Dmu53aMJL5r6iDoKrQrdR/Uc4Kh+5+7j271YoFhTG/n62+4PCHrZpCXc9ZgawVmNWEHQZeEuEd2Hc7jbbL/qiQAHnRQo1+vXU3iKLsXYzB5C5TcQy0ARVU9cE0cD4A2S/Km2GwjflNOoiA8nJQ8rtrEerf9/2qKHTkNRF3MQIHdfj44f/Wj9zXGUYYAB/hOGZUgnJ6IeQrgcC7MHD1A4WACAee/O59slqXqm9lO/oTx6HV6wCMbq13O1M5zckyyN7pchdl3FydeN1kPo+ehC5gvPt2Ih0kHk/21Zqj83oux7XiivP09pM+3HIjugeYKcPQz5bo2ShaC9He6XglJUor9tj3Ubxfkesa+75ZyizIBIQUx3EbpPazkcBIEKsN2lTNKoZ1i3/f0A4GHaK4gdcFp02fl6/bKOtA8d5jvrg2J1umOdkEqb2c6HNw5adUArce/iGIuz79u5Z7YPEHczwSe8x2RvG++AoLsxkpZje/D3SAuN8eBL8D0y88s+hOR+a6IZff8tEIQ1m8eliEMwt82nJ4L5nWNgVbY77G+3ouc0AMobGKhcVpo2oj/EkxLYEcDPngcI6gyW5HFZlpXwUJjeMoWQIBeLuNRQqVGzdDl5RPBnJc2Dx8f3+9iAwiO63jnIGluiJd66eP8VYiJi+CcGDkL4S+gP7R1MCaTiPZ8YBvEoLQro4afdZgMURZV00oNnwCMYoY/IxjJpBNXt+p0DNpIzAZ6B+FILkC+aMW00K9Ma9eb0NfOzhTGe26prvYkiKZUJdjXtbhVvwGPwpbgM3mFv1B5izlPBsPt5E8NQOS95VcVte9ifXNV6kfgKCnzmipICXa8rxpExK8dlvQ0TNLwXUZYN05e9u3Xx9O1qBcR/P6xR2HoxSweV/l0IVBZbsj6IssvZ9/cTuNJ2ByF/4yqZC0Sg5eUSOYTA5vctQQ8IggUMoL7d2gFUBurd8ctXd+NO/hEjUYmt8ewxG8TyfRBMkuisEhpRFw3x8RQfYwRtGE7h4ThlYRkVRdBgttcF+F9QQMsxrxSaM7UtuNLptDuXw3COFjHKJWV2bhv/BoJVW54zWTMxdvfLLcbiEK3wfjhk0BxoJCrwkFVZ+TccG5yLYNvdl2U2nOM+voDT1MsoaCOZba/c9Z9RFDmzGG/Ssko6zMXJ3NTjWBWCBk6OseD/HAtNks09q3jPKwlWwykLKkptGfx+U+/npCK0eSAl4TmbIWelej4h3m+/+g2EiBtTt9aRPgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "XjeQ":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("Kz5y"),
    toString = __webpack_require__("dt0z");

/** Used to match leading and trailing whitespace. */
var reTrimStart = /^\s+/;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeParseInt = root.parseInt;

/**
 * Converts `string` to an integer of the specified radix. If `radix` is
 * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
 * hexadecimal, in which case a `radix` of `16` is used.
 *
 * **Note:** This method aligns with the
 * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category String
 * @param {string} string The string to convert.
 * @param {number} [radix=10] The radix to interpret `value` by.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.parseInt('08');
 * // => 8
 *
 * _.map(['6', '08', '10'], _.parseInt);
 * // => [6, 8, 10]
 */
function parseInt(string, radix, guard) {
  if (guard || radix == null) {
    radix = 0;
  } else if (radix) {
    radix = +radix;
  }
  return nativeParseInt(toString(string).replace(reTrimStart, ''), radix || 0);
}

module.exports = parseInt;


/***/ }),

/***/ "YBdB":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
  "use strict";

  if (global.setImmediate) {
    return;
  }

  var nextHandle = 1; // Spec says greater than zero

  var tasksByHandle = {};
  var currentlyRunningATask = false;
  var doc = global.document;
  var registerImmediate;

  function setImmediate(callback) {
    // Callback can either be a function or a string
    if (typeof callback !== "function") {
      callback = new Function("" + callback);
    } // Copy function arguments


    var args = new Array(arguments.length - 1);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 1];
    } // Store and register the task


    var task = {
      callback: callback,
      args: args
    };
    tasksByHandle[nextHandle] = task;
    registerImmediate(nextHandle);
    return nextHandle++;
  }

  function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }

  function run(task) {
    var callback = task.callback;
    var args = task.args;

    switch (args.length) {
      case 0:
        callback();
        break;

      case 1:
        callback(args[0]);
        break;

      case 2:
        callback(args[0], args[1]);
        break;

      case 3:
        callback(args[0], args[1], args[2]);
        break;

      default:
        callback.apply(undefined, args);
        break;
    }
  }

  function runIfPresent(handle) {
    // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
      // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
      // "too much recursion" error.
      setTimeout(runIfPresent, 0, handle);
    } else {
      var task = tasksByHandle[handle];

      if (task) {
        currentlyRunningATask = true;

        try {
          run(task);
        } finally {
          clearImmediate(handle);
          currentlyRunningATask = false;
        }
      }
    }
  }

  function installNextTickImplementation() {
    registerImmediate = function registerImmediate(handle) {
      process.nextTick(function () {
        runIfPresent(handle);
      });
    };
  }

  function canUsePostMessage() {
    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
    // where `global.postMessage` means something completely different and can't be used for this purpose.
    if (global.postMessage && !global.importScripts) {
      var postMessageIsAsynchronous = true;
      var oldOnMessage = global.onmessage;

      global.onmessage = function () {
        postMessageIsAsynchronous = false;
      };

      global.postMessage("", "*");
      global.onmessage = oldOnMessage;
      return postMessageIsAsynchronous;
    }
  }

  function installPostMessageImplementation() {
    // Installs an event handler on `global` for the `message` event: see
    // * https://developer.mozilla.org/en/DOM/window.postMessage
    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
    var messagePrefix = "setImmediate$" + Math.random() + "$";

    var onGlobalMessage = function onGlobalMessage(event) {
      if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
        runIfPresent(+event.data.slice(messagePrefix.length));
      }
    };

    if (global.addEventListener) {
      global.addEventListener("message", onGlobalMessage, false);
    } else {
      global.attachEvent("onmessage", onGlobalMessage);
    }

    registerImmediate = function registerImmediate(handle) {
      global.postMessage(messagePrefix + handle, "*");
    };
  }

  function installMessageChannelImplementation() {
    var channel = new MessageChannel();

    channel.port1.onmessage = function (event) {
      var handle = event.data;
      runIfPresent(handle);
    };

    registerImmediate = function registerImmediate(handle) {
      channel.port2.postMessage(handle);
    };
  }

  function installReadyStateChangeImplementation() {
    var html = doc.documentElement;

    registerImmediate = function registerImmediate(handle) {
      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var script = doc.createElement("script");

      script.onreadystatechange = function () {
        runIfPresent(handle);
        script.onreadystatechange = null;
        html.removeChild(script);
        script = null;
      };

      html.appendChild(script);
    };
  }

  function installSetTimeoutImplementation() {
    registerImmediate = function registerImmediate(handle) {
      setTimeout(runIfPresent, 0, handle);
    };
  } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
  attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

  if ({}.toString.call(global.process) === "[object process]") {
    // For Node.js before 0.9
    installNextTickImplementation();
  } else if (canUsePostMessage()) {
    // For non-IE10 modern browsers
    installPostMessageImplementation();
  } else if (global.MessageChannel) {
    // For web workers, where supported
    installMessageChannelImplementation();
  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
    // For IE 6–8
    installReadyStateChangeImplementation();
  } else {
    // For older browsers
    installSetTimeoutImplementation();
  }

  attachTo.setImmediate = setImmediate;
  attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("yLpj"), __webpack_require__("8oxB")))

/***/ }),

/***/ "YuTi":
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "Z0cm":
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "aRp4":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/clouds3-8286d65e2d9b31a2f06e584af0075883.png";

/***/ }),

/***/ "ar19":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function insertRule(e) {
  try {
    return sheet.insertRule(e, sheet.cssRules.length);
  } catch (e) {
    console.warn("react-reveal - animation failed");
  }
}

function cascade(e, n, t, o, r) {
  var s = Math.log(o),
      i = Math.log(r),
      a = (i - s) / (t - n);
  return Math.exp(s + a * (e - n));
}

function animation(e) {
  if (!sheet) return "";
  var n = "@keyframes " + (name + counter) + "{" + e + "}",
      t = effectMap[e];
  return t ? "" + name + t : (sheet.insertRule(n, sheet.cssRules.length), effectMap[e] = counter, "" + name + counter++);
}

function hideAll() {
  globalHide || (exports.globalHide = globalHide = !0, window.removeEventListener("scroll", hideAll, !0), insertRule("." + namespace + " { opacity: 0; }"), window.removeEventListener("orientationchange", hideAll, !0), window.document.removeEventListener("visibilitychange", hideAll));
}

function config(e) {
  var n = e.ssrFadeout;
  exports.fadeOutEnabled = fadeOutEnabled = n;
}

Object.defineProperty(exports, "__esModule", {
  value: !0
}), exports.insertRule = insertRule, exports.cascade = cascade, exports.animation = animation, exports.hideAll = hideAll, exports.default = config;

var namespace = exports.namespace = "react-reveal",
    defaults = exports.defaults = {
  duration: 1e3,
  delay: 0,
  count: 1
},
    ssr = exports.ssr = !0,
    observerMode = exports.observerMode = !1,
    raf = exports.raf = function (e) {
  return window.setTimeout(e, 66);
},
    disableSsr = exports.disableSsr = function () {
  return exports.ssr = ssr = !1;
},
    fadeOutEnabled = exports.fadeOutEnabled = !1,
    ssrFadeout = exports.ssrFadeout = function () {
  var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  return exports.fadeOutEnabled = fadeOutEnabled = e;
},
    globalHide = exports.globalHide = !1,
    ie10 = exports.ie10 = !1,
    collapseend = exports.collapseend = void 0,
    counter = 1,
    effectMap = {},
    sheet = !1,
    name = namespace + "-" + Math.floor(1e15 * Math.random()) + "-";

if ("undefined" != typeof window && "nodejs" !== window.name && window.document && "undefined" != typeof navigator) {
  exports.observerMode = observerMode = "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype && /\{\s*\[native code\]\s*\}/.test("" + IntersectionObserver), exports.raf = raf = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || raf, exports.ssr = ssr = window.document.querySelectorAll("div[data-reactroot]").length > 0, -1 !== navigator.appVersion.indexOf("MSIE 10") && (exports.ie10 = ie10 = !0), ssr && "performance" in window && "timing" in window.performance && "domContentLoadedEventEnd" in window.performance.timing && window.performance.timing.domLoading && Date.now() - window.performance.timing.domLoading < 300 && (exports.ssr = ssr = !1), ssr && window.setTimeout(disableSsr, 1500), observerMode || (exports.collapseend = collapseend = document.createEvent("Event"), collapseend.initEvent("collapseend", !0, !0));
  var element = document.createElement("style");
  document.head.appendChild(element), element.sheet && element.sheet.cssRules && element.sheet.insertRule && (sheet = element.sheet, window.addEventListener("scroll", hideAll, !0), window.addEventListener("orientationchange", hideAll, !0), window.document.addEventListener("visibilitychange", hideAll));
}

/***/ }),

/***/ "bH/k":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}

function _objectWithoutProperties(e, o) {
  var t = {};

  for (var r in e) {
    o.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  }

  return t;
}

function make(e, o) {
  var t = o.left,
      r = o.right,
      n = o.top,
      p = o.bottom,
      i = o.x,
      a = o.y,
      s = o.mirror,
      l = o.opposite,
      u = (t ? 1 : 0) | (r || a ? 2 : 0) | (n || i ? 4 : 0) | (p ? 8 : 0) | (s ? 16 : 0) | (l ? 32 : 0) | (e ? 64 : 0);
  if (lookup.hasOwnProperty(u)) return lookup[u];

  if (!s != !(e && l)) {
    var d = [r, t, p, n, a, i];
    t = d[0], r = d[1], n = d[2], p = d[3], i = d[4], a = d[5];
  }

  var f = void 0;

  if (i || a || t || r || n || p) {
    var m = i || n || p ? (p ? "-" : "") + "1" : "0",
        c = a || r || t ? (t ? "-" : "") + "1" : "0";
    f = e ? "from {\n          transform: perspective(400px);\n        }\n        30% {\n          transform: perspective(400px) rotate3d(" + m + ", " + c + ", 0, -15deg);\n          opacity: 1;\n        }\n        to {\n          transform: perspective(400px) rotate3d(" + m + ", " + c + ", 0, 90deg);\n          opacity: 0;\n        }" : "from {\n          transform: perspective(400px) rotate3d(" + m + ", " + c + ", 0, 90deg);\n          animation-timing-function: ease-in;\n          opacity: 0;\n        }\n        40% {\n          transform: perspective(400px) rotate3d(" + m + ", " + c + ", 0, -20deg);\n          animation-timing-function: ease-in;\n        }\n        60% {\n          transform: perspective(400px) rotate3d(" + m + ", " + c + ", 0, 10deg);\n          opacity: 1;\n        }\n        80% {\n          transform: perspective(400px) rotate3d(" + m + ", " + c + ", 0, -5deg);\n        }\n        to {\n          transform: perspective(400px);\n        }";
  } else f = "from {\n          transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n          animation-timing-function: ease-out;\n          opacity: " + (e ? "1" : "0") + ";\n        }\n        40% {\n          transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n          animation-timing-function: ease-out;\n        }\n        50% {\n          transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n          animation-timing-function: ease-in;\n        }\n        to {\n          transform: perspective(400px);\n          animation-timing-function: ease-in;\n          opacity: " + (e ? "0" : "1") + ";\n        }";

  return lookup[u] = (0, _globals.animation)(f), lookup[u];
}

function Flip() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _globals.defaults,
      o = e.children,
      t = (e.out, e.forever),
      r = e.timeout,
      n = e.duration,
      p = void 0 === n ? _globals.defaults.duration : n,
      i = e.delay,
      a = void 0 === i ? _globals.defaults.delay : i,
      s = e.count,
      l = void 0 === s ? _globals.defaults.count : s,
      u = _objectWithoutProperties(e, ["children", "out", "forever", "timeout", "duration", "delay", "count"]),
      d = {
    make: make,
    duration: void 0 === r ? p : r,
    delay: a,
    forever: t,
    count: l,
    style: {
      animationFillMode: "both",
      backfaceVisibility: "visible"
    }
  };

  return (0, _wrap2.default)(u, d, d, o);
}

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _propTypes = __webpack_require__("17x9"),
    _wrap = __webpack_require__("eH+L"),
    _wrap2 = _interopRequireDefault(_wrap),
    _globals = __webpack_require__("ar19"),
    propTypes = {
  out: _propTypes.bool,
  left: _propTypes.bool,
  right: _propTypes.bool,
  top: _propTypes.bool,
  bottom: _propTypes.bool,
  mirror: _propTypes.bool,
  opposite: _propTypes.bool,
  duration: _propTypes.number,
  timeout: _propTypes.number,
  delay: _propTypes.number,
  count: _propTypes.number,
  forever: _propTypes.bool
},
    lookup = {};

Flip.propTypes = propTypes, exports.default = Flip, module.exports = exports.default;

/***/ }),

/***/ "c6wG":
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__("dD9F"),
    baseUnary = __webpack_require__("sEf8"),
    nodeUtil = __webpack_require__("mdPL");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "dD9F":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("NykK"),
    isLength = __webpack_require__("shjB"),
    isObjectLike = __webpack_require__("ExA7");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "dt0z":
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__("zoYe");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "eH+L":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    default: e
  };
}

function wrap(e, t, a, r) {
  return "in" in e && (e.when = e.in), _react2.default.Children.count(r) < 2 ? _react2.default.createElement(_RevealBase2.default, _extends({}, e, {
    inEffect: t,
    outEffect: a,
    children: r
  })) : (r = _react2.default.Children.map(r, function (r) {
    return _react2.default.createElement(_RevealBase2.default, _extends({}, e, {
      inEffect: t,
      outEffect: a,
      children: r
    }));
  }), "Fragment" in _react2.default ? _react2.default.createElement(_react2.default.Fragment, null, r) : _react2.default.createElement("span", null, r));
}

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _extends = Object.assign || function (e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = arguments[t];

    for (var r in a) {
      Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
    }
  }

  return e;
};

exports.default = wrap;

var _react = __webpack_require__("q1tI"),
    _react2 = _interopRequireDefault(_react),
    _RevealBase = __webpack_require__("28nh"),
    _RevealBase2 = _interopRequireDefault(_RevealBase);

module.exports = exports.default;

/***/ }),

/***/ "eUgh":
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "ebwN":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("Cwc5"),
    root = __webpack_require__("Kz5y");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "kVK+":
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = -7;
  var i = isLE ? nBytes - 1 : 0;
  var d = isLE ? -1 : 1;
  var s = buffer[offset + i];
  i += d;
  e = s & (1 << -nBits) - 1;
  s >>= -nBits;
  nBits += eLen;

  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;

  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : (s ? -1 : 1) * Infinity;
  } else {
    m = m + Math.pow(2, mLen);
    e = e - eBias;
  }

  return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c;
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var i = isLE ? 0 : nBytes - 1;
  var d = isLE ? 1 : -1;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  value = Math.abs(value);

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0;
    e = eMax;
  } else {
    e = Math.floor(Math.log(value) / Math.LN2);

    if (value * (c = Math.pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }

    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * Math.pow(2, 1 - eBias);
    }

    if (value * c >= 2) {
      e++;
      c /= 2;
    }

    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
      e = 0;
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = e << mLen | m;
  eLen += mLen;

  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128;
};

/***/ }),

/***/ "kekF":
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "lJuC":
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
  d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
}), 'LinkedIn');

exports.default = _default;

/***/ }),

/***/ "lSCD":
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__("NykK"),
    isObject = __webpack_require__("GoyQ");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "ls82":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "mdPL":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__("WFqU");

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("YuTi")(module)))

/***/ }),

/***/ "nmnc":
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__("Kz5y");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "o0o1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ls82");


/***/ }),

/***/ "oBNZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopRequireDefault(o) {
  return o && o.__esModule ? o : {
    default: o
  };
}

function _objectWithoutProperties(o, e) {
  var r = {};

  for (var t in o) {
    e.indexOf(t) >= 0 || Object.prototype.hasOwnProperty.call(o, t) && (r[t] = o[t]);
  }

  return r;
}

function make(o, e) {
  var r = e.left,
      t = e.right,
      p = e.up,
      l = e.down,
      u = e.top,
      a = e.bottom,
      i = e.big,
      n = e.mirror,
      s = e.opposite,
      d = (r ? 1 : 0) | (t ? 2 : 0) | (u || l ? 4 : 0) | (a || p ? 8 : 0) | (n ? 16 : 0) | (s ? 32 : 0) | (o ? 64 : 0) | (i ? 128 : 0);
  if (lookup.hasOwnProperty(d)) return lookup[d];

  var _ = r || t || p || l || u || a,
      f = void 0,
      b = void 0;

  if (_) {
    if (!n != !(o && s)) {
      var y = [t, r, a, u, l, p];
      r = y[0], t = y[1], u = y[2], a = y[3], p = y[4], l = y[5];
    }

    var m = i ? "2000px" : "100%";
    f = r ? "-" + m : t ? m : "0", b = l || u ? "-" + m : p || a ? m : "0";
  }

  return lookup[d] = (0, _globals.animation)((o ? "to" : "from") + " {" + (_ ? " transform: translate3d(" + f + ", " + b + ", 0);" : "") + "}\n     " + (o ? "from" : "to") + " {transform: none;} "), lookup[d];
}

function Slide() {
  var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _globals.defaults,
      e = o.children,
      r = (o.out, o.forever),
      t = o.timeout,
      p = o.duration,
      l = void 0 === p ? _globals.defaults.duration : p,
      u = o.delay,
      a = void 0 === u ? _globals.defaults.delay : u,
      i = o.count,
      n = void 0 === i ? _globals.defaults.count : i,
      s = _objectWithoutProperties(o, ["children", "out", "forever", "timeout", "duration", "delay", "count"]),
      d = {
    make: make,
    duration: void 0 === t ? l : t,
    delay: a,
    forever: r,
    count: n,
    style: {
      animationFillMode: "both"
    },
    reverse: s.left
  };

  return (0, _wrap2.default)(s, d, d, e);
}

Object.defineProperty(exports, "__esModule", {
  value: !0
});

var _propTypes = __webpack_require__("17x9"),
    _wrap = __webpack_require__("eH+L"),
    _wrap2 = _interopRequireDefault(_wrap),
    _globals = __webpack_require__("ar19"),
    propTypes = {
  out: _propTypes.bool,
  left: _propTypes.bool,
  right: _propTypes.bool,
  top: _propTypes.bool,
  bottom: _propTypes.bool,
  big: _propTypes.bool,
  mirror: _propTypes.bool,
  opposite: _propTypes.bool,
  duration: _propTypes.number,
  timeout: _propTypes.number,
  delay: _propTypes.number,
  count: _propTypes.number,
  forever: _propTypes.bool
},
    lookup = {};

Slide.propTypes = propTypes, exports.default = Slide, module.exports = exports.default;

/***/ }),

/***/ "sEf8":
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "sZJu":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ig-practice-8100214a6b9ff9d49fbe5e2e3cfb75e9.jpg";

/***/ }),

/***/ "shjB":
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "tadb":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("Cwc5"),
    root = __webpack_require__("Kz5y");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "tgWb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/* unused harmony export GraphModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return loadGraphModel; });
/* unused harmony export deregisterOp */
/* unused harmony export registerOp */
/* unused harmony export version_converter */
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("E9XD");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Re/O");


/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */


var DataType,
    SaverDef,
    _assign = function __assign() {
  return (_assign = Object.assign || function (e) {
    for (var t, a = 1, r = arguments.length; a < r; a++) {
      for (var n in t = arguments[a]) {
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
      }
    }

    return e;
  }).apply(this, arguments);
};

function __awaiter(e, t, a, r) {
  return new (a || (a = Promise))(function (n, s) {
    function o(e) {
      try {
        u(r.next(e));
      } catch (e) {
        s(e);
      }
    }

    function p(e) {
      try {
        u(r.throw(e));
      } catch (e) {
        s(e);
      }
    }

    function u(e) {
      e.done ? n(e.value) : new a(function (t) {
        t(e.value);
      }).then(o, p);
    }

    u((r = r.apply(e, t || [])).next());
  });
}

function __generator(e, t) {
  var a,
      r,
      n,
      s,
      o = {
    label: 0,
    sent: function sent() {
      if (1 & n[0]) throw n[1];
      return n[1];
    },
    trys: [],
    ops: []
  };
  return s = {
    next: p(0),
    throw: p(1),
    return: p(2)
  }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {
    return this;
  }), s;

  function p(s) {
    return function (p) {
      return function (s) {
        if (a) throw new TypeError("Generator is already executing.");

        for (; o;) {
          try {
            if (a = 1, r && (n = 2 & s[0] ? r.return : s[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, s[1])).done) return n;

            switch (r = 0, n && (s = [2 & s[0], n.value]), s[0]) {
              case 0:
              case 1:
                n = s;
                break;

              case 4:
                return o.label++, {
                  value: s[1],
                  done: !1
                };

              case 5:
                o.label++, r = s[1], s = [0];
                continue;

              case 7:
                s = o.ops.pop(), o.trys.pop();
                continue;

              default:
                if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                  o = 0;
                  continue;
                }

                if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                  o.label = s[1];
                  break;
                }

                if (6 === s[0] && o.label < n[1]) {
                  o.label = n[1], n = s;
                  break;
                }

                if (n && o.label < n[2]) {
                  o.label = n[2], o.ops.push(s);
                  break;
                }

                n[2] && o.ops.pop(), o.trys.pop();
                continue;
            }

            s = t.call(e, o);
          } catch (e) {
            s = [6, e], r = 0;
          } finally {
            a = n = 0;
          }
        }

        if (5 & s[0]) throw s[1];
        return {
          value: s[0] ? s[1] : void 0,
          done: !0
        };
      }([s, p]);
    };
  }
}

!function (e) {
  e[e.DT_INVALID = 0] = "DT_INVALID", e[e.DT_FLOAT = 1] = "DT_FLOAT", e[e.DT_DOUBLE = 2] = "DT_DOUBLE", e[e.DT_INT32 = 3] = "DT_INT32", e[e.DT_UINT8 = 4] = "DT_UINT8", e[e.DT_INT16 = 5] = "DT_INT16", e[e.DT_INT8 = 6] = "DT_INT8", e[e.DT_STRING = 7] = "DT_STRING", e[e.DT_COMPLEX64 = 8] = "DT_COMPLEX64", e[e.DT_INT64 = 9] = "DT_INT64", e[e.DT_BOOL = 10] = "DT_BOOL", e[e.DT_QINT8 = 11] = "DT_QINT8", e[e.DT_QUINT8 = 12] = "DT_QUINT8", e[e.DT_QINT32 = 13] = "DT_QINT32", e[e.DT_BFLOAT16 = 14] = "DT_BFLOAT16", e[e.DT_FLOAT_REF = 101] = "DT_FLOAT_REF", e[e.DT_DOUBLE_REF = 102] = "DT_DOUBLE_REF", e[e.DT_INT32_REF = 103] = "DT_INT32_REF", e[e.DT_UINT8_REF = 104] = "DT_UINT8_REF", e[e.DT_INT16_REF = 105] = "DT_INT16_REF", e[e.DT_INT8_REF = 106] = "DT_INT8_REF", e[e.DT_STRING_REF = 107] = "DT_STRING_REF", e[e.DT_COMPLEX64_REF = 108] = "DT_COMPLEX64_REF", e[e.DT_INT64_REF = 109] = "DT_INT64_REF", e[e.DT_BOOL_REF = 110] = "DT_BOOL_REF", e[e.DT_QINT8_REF = 111] = "DT_QINT8_REF", e[e.DT_QUINT8_REF = 112] = "DT_QUINT8_REF", e[e.DT_QINT32_REF = 113] = "DT_QINT32_REF", e[e.DT_BFLOAT16_REF = 114] = "DT_BFLOAT16_REF";
}(DataType || (DataType = {})), function (e) {
  !function (e) {
    e[e.LEGACY = 0] = "LEGACY", e[e.V1 = 1] = "V1", e[e.V2 = 2] = "V2";
  }(e.CheckpointFormatVersion || (e.CheckpointFormatVersion = {}));
}(SaverDef || (SaverDef = {}));
var CUSTOM_OPS = {};

function registerOp(e, t) {
  var a = {
    tfOpName: e,
    category: "custom",
    inputs: [],
    attrs: [],
    customExecutor: t
  };
  CUSTOM_OPS[e] = a;
}

function getRegisteredOp(e) {
  return CUSTOM_OPS[e];
}

function deregisterOp(e) {
  delete CUSTOM_OPS[e];
}

function getParamValue(e, t, a, r) {
  var n = t.inputParams[e];

  if (n && void 0 !== n.inputIndexStart) {
    var s = n.inputIndexStart,
        o = 0 === n.inputIndexEnd ? void 0 : void 0 === n.inputIndexEnd ? s + 1 : n.inputIndexEnd;
    if ("tensor" === n.type) return getTensor(t.inputNames[n.inputIndexStart], a, r);
    if ("tensors" === n.type) return t.inputNames.slice(s, o).map(function (e) {
      return getTensor(e, a, r);
    });
    var p = Array.prototype.slice.call(getTensor(t.inputNames.slice(s)[0], a, r).dataSync());
    return "number" === n.type ? p[0] : p;
  }

  var u = t.attrParams[e];
  return u && u.value;
}

function getTensor(e, t, a) {
  var r = parseNodeName(e),
      n = r[0],
      s = r[1],
      o = a.currentContextIds.find(function (e) {
    return !!t[getNodeNameWithContextId(n, e)];
  });
  return void 0 !== o ? t[getNodeNameWithContextId(n, o)][s] : void 0;
}

function getTensorsForCurrentContenxt(e, t, a) {
  return t[getNodeNameWithContextId(e, a.currentContextId)];
}

function getNodeNameAndIndex(e, t) {
  var a = parseNodeName(e),
      r = a[0],
      n = a[1];
  return [getNodeNameWithContextId(r, t && t.currentContextId), n];
}

function getNodeNameWithContextId(e, t) {
  return t ? e + "-" + t : e;
}

function parseNodeName(e) {
  var t = e.lastIndexOf(":");
  return -1 === t ? [e, 0] : [e.substring(0, t), Number(e.substring(t + 1))];
}

function split$1(e, t) {
  for (var a = [], r = 0; r < e.length; r += t) {
    a.push(e.slice(r, r + t));
  }

  return a;
}

var json = [{
  tfOpName: "Add",
  category: "arithmetic",
  inputs: [{
    start: 0,
    name: "a",
    type: "tensor"
  }, {
    start: 1,
    name: "b",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "AddV2",
  category: "arithmetic",
  inputs: [{
    start: 0,
    name: "a",
    type: "tensor"
  }, {
    start: 1,
    name: "b",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "AddN",
  category: "arithmetic",
  inputs: [{
    start: 0,
    end: 0,
    name: "tensors",
    type: "tensors"
  }]
}, {
  tfOpName: "BiasAdd",
  category: "arithmetic",
  inputs: [{
    start: 0,
    name: "a",
    type: "tensor"
  }, {
    start: 1,
    name: "b",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Sub",
  category: "arithmetic",
  inputs: [{
    start: 0,
    name: "a",
    type: "tensor"
  }, {
    start: 1,
    name: "b",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "RealDiv",
  category: "arithmetic",
  inputs: [{
    start: 0,
    name: "a",
    type: "tensor"
  }, {
    start: 1,
    name: "b",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Div",
  category: "arithmetic",
  inputs: [{
    start: 0,
    name: "a",
    type: "tensor"
  }, {
    start: 1,
    name: "b",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "DivNoNan",
  category: "arithmetic",
  inputs: [{
    start: 0,
    name: "a",
    type: "tensor"
  }, {
    start: 1,
    name: "b",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "FloorDiv",
  category: "arithmetic",
  inputs: [{
    start: 0,
    name: "a",
    type: "tensor"
  }, {
    start: 1,
    name: "b",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Mul",
  category: "arithmetic",
  inputs: [{
    start: 0,
    name: "a",
    type: "tensor"
  }, {
    start: 1,
    name: "b",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Maximum",
  category: "arithmetic",
  inputs: [{
    start: 0,
    name: "a",
    type: "tensor"
  }, {
    start: 1,
    name: "b",
    type: "tensor"
  }]
}, {
  tfOpName: "Minimum",
  category: "arithmetic",
  inputs: [{
    start: 0,
    name: "a",
    type: "tensor"
  }, {
    start: 1,
    name: "b",
    type: "tensor"
  }]
}, {
  tfOpName: "Pow",
  category: "arithmetic",
  inputs: [{
    start: 0,
    name: "a",
    type: "tensor"
  }, {
    start: 1,
    name: "b",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "SquaredDifference",
  category: "arithmetic",
  inputs: [{
    start: 0,
    name: "a",
    type: "tensor"
  }, {
    start: 1,
    name: "b",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Mod",
  category: "arithmetic",
  inputs: [{
    start: 0,
    name: "a",
    type: "tensor"
  }, {
    start: 1,
    name: "b",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "FloorMod",
  category: "arithmetic",
  inputs: [{
    start: 0,
    name: "a",
    type: "tensor"
  }, {
    start: 1,
    name: "b",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}],
    arithmetic = Object.freeze({
  json: json
}),
    json$1 = [{
  tfOpName: "Abs",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Acos",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Asin",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Atan",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Atan2",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "y",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Ceil",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "ClipByValue",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "clip_value_min",
    name: "clipValueMin",
    type: "number"
  }, {
    tfName: "clip_value_max",
    name: "clipValueMax",
    type: "number"
  }]
}, {
  tfOpName: "Complex",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "real",
    type: "tensor"
  }, {
    start: 1,
    name: "imag",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "ComplexAbs",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Cos",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Cosh",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Elu",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Exp",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Floor",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Log",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Imag",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }, {
    tfName: "Tout",
    name: "outputType",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Neg",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Real",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }, {
    tfName: "Tout",
    name: "outputType",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Prelu",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "alpha",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Relu",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Relu6",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }, {
    tfName: "clipValueMin",
    name: "clipValueMin",
    type: "number",
    defaultValue: 0
  }, {
    tfName: "clipValueMax",
    name: "clipValueMax",
    type: "number",
    defaultValue: 6
  }]
}, {
  tfOpName: "Selu",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Sigmoid",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Sin",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Sinh",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Sqrt",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Rsqrt",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Square",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Tan",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Tanh",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Sign",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Round",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Expm1",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Log1p",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Reciprocal",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Softplus",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Asinh",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Acosh",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Atanh",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Erf",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Prod",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "axes",
    type: "number[]"
  }],
  attrs: [{
    tfName: "keep_dims",
    name: "keepDims",
    type: "bool",
    notSupported: !0
  }, {
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "LeakyRelu",
  category: "basic_math",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "alpha",
    name: "alpha",
    type: "number",
    defaultValue: .2
  }, {
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}],
    basicMath = Object.freeze({
  json: json$1
}),
    json$2 = [{
  tfOpName: "LoopCond",
  category: "control",
  inputs: [{
    start: 0,
    name: "pred",
    type: "tensor"
  }]
}, {
  tfOpName: "Switch",
  category: "control",
  inputs: [{
    start: 0,
    name: "data",
    type: "tensor"
  }, {
    start: 1,
    name: "pred",
    type: "tensor"
  }]
}, {
  tfOpName: "Merge",
  category: "control",
  inputs: [{
    start: 0,
    end: 0,
    name: "tensors",
    type: "tensors"
  }]
}, {
  tfOpName: "Enter",
  category: "control",
  inputs: [{
    start: 0,
    name: "tensor",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }, {
    tfName: "frame_name",
    name: "frameName",
    type: "string"
  }, {
    tfName: "is_constant",
    name: "isConstant",
    type: "bool"
  }]
}, {
  tfOpName: "Exit",
  category: "control",
  inputs: [{
    start: 0,
    name: "tensor",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "NextIteration",
  category: "control",
  inputs: [{
    start: 0,
    name: "tensor",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "TensorArrayV3",
  category: "control",
  inputs: [{
    start: 0,
    name: "size",
    type: "number"
  }],
  attrs: [{
    tfName: "dtype",
    name: "dtype",
    type: "dtype"
  }, {
    tfName: "element_shape",
    name: "elementShape",
    type: "shape"
  }, {
    tfName: "dynamic_size",
    name: "dynamicSize",
    type: "bool"
  }, {
    tfName: "clear_after_read",
    name: "clearAfterRead",
    type: "bool"
  }, {
    tfName: "identical_element_shapes",
    name: "identicalElementShapes",
    type: "bool"
  }, {
    tfName: "tensor_array_name",
    name: "name",
    type: "string"
  }]
}, {
  tfOpName: "TensorArrayWriteV3",
  category: "control",
  inputs: [{
    start: 0,
    name: "tensorArrayId",
    type: "number"
  }, {
    start: 1,
    name: "index",
    type: "number"
  }, {
    start: 2,
    name: "tensor",
    type: "tensor"
  }, {
    start: 3,
    name: "flowIn",
    type: "number"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "TensorArrayReadV3",
  category: "control",
  inputs: [{
    start: 0,
    name: "tensorArrayId",
    type: "number"
  }, {
    start: 1,
    name: "index",
    type: "number"
  }, {
    start: 2,
    name: "flowIn",
    type: "number"
  }],
  attrs: [{
    tfName: "dtype",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "TensorArrayGatherV3",
  category: "control",
  inputs: [{
    start: 0,
    name: "tensorArrayId",
    type: "number"
  }, {
    start: 1,
    name: "indices",
    type: "number[]"
  }, {
    start: 2,
    name: "flowIn",
    type: "number"
  }],
  attrs: [{
    tfName: "dtype",
    name: "dtype",
    type: "dtype"
  }, {
    tfName: "element_shape",
    name: "elementShape",
    type: "shape"
  }]
}, {
  tfOpName: "TensorArrayScatterV3",
  category: "control",
  inputs: [{
    start: 0,
    name: "tensorArrayId",
    type: "number"
  }, {
    start: 1,
    name: "indices",
    type: "number[]"
  }, {
    start: 2,
    name: "tensor",
    type: "tensor"
  }, {
    start: 3,
    name: "flowIn",
    type: "number"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype"
  }]
}, {
  tfOpName: "TensorArrayConcatV3",
  category: "control",
  inputs: [{
    start: 0,
    name: "tensorArrayId",
    type: "number"
  }, {
    start: 1,
    name: "flowIn",
    type: "number"
  }],
  attrs: [{
    tfName: "dtype",
    name: "dtype",
    type: "dtype"
  }, {
    tfName: "element_shape_except0",
    name: "elementShapeExcept0",
    type: "shape",
    notSupported: !0
  }]
}, {
  tfOpName: "TensorArraySplitV3",
  category: "control",
  inputs: [{
    start: 0,
    name: "tensorArrayId",
    type: "number"
  }, {
    start: 1,
    name: "tensor",
    type: "tensor"
  }, {
    start: 2,
    name: "lengths",
    type: "number[]"
  }, {
    start: 3,
    name: "flowIn",
    type: "number"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype"
  }]
}, {
  tfOpName: "TensorArraySizeV3",
  category: "control",
  inputs: [{
    start: 0,
    name: "tensorArrayId",
    type: "number"
  }, {
    start: 1,
    name: "flowIn",
    type: "number"
  }]
}, {
  tfOpName: "TensorArrayCloseV3",
  category: "control",
  inputs: [{
    start: 0,
    name: "tensorArrayId",
    type: "number"
  }]
}],
    control = Object.freeze({
  json: json$2
}),
    json$3 = [{
  tfOpName: "AvgPool",
  category: "convolution",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "strides",
    name: "strides",
    type: "number[]"
  }, {
    tfName: "padding",
    name: "pad",
    type: "string"
  }, {
    tfName: "data_format",
    name: "dataFormat",
    type: "string",
    notSupported: !0
  }, {
    tfName: "ksize",
    name: "kernelSize",
    type: "number[]"
  }, {
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "MaxPool",
  category: "convolution",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "strides",
    name: "strides",
    type: "number[]"
  }, {
    tfName: "padding",
    name: "pad",
    type: "string"
  }, {
    tfName: "data_format",
    name: "dataFormat",
    type: "string",
    notSupported: !0
  }, {
    tfName: "ksize",
    name: "kernelSize",
    type: "number[]"
  }, {
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "MaxPoolWithArgmax",
  category: "convolution",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "strides",
    name: "strides",
    type: "number[]"
  }, {
    tfName: "padding",
    name: "pad",
    type: "string"
  }, {
    tfName: "ksize",
    name: "kernelSize",
    type: "number[]"
  }, {
    tfName: "include_batch_in_index",
    name: "includeBatchInIndex",
    type: "bool"
  }, {
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "AvgPool3D",
  category: "convolution",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "strides",
    name: "strides",
    type: "number[]"
  }, {
    tfName: "padding",
    name: "pad",
    type: "string"
  }, {
    tfName: "data_format",
    name: "dataFormat",
    type: "string",
    notSupported: !0
  }, {
    tfName: "ksize",
    name: "kernelSize",
    type: "number[]"
  }, {
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "MaxPool3D",
  category: "convolution",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "strides",
    name: "strides",
    type: "number[]"
  }, {
    tfName: "padding",
    name: "pad",
    type: "string"
  }, {
    tfName: "data_format",
    name: "dataFormat",
    type: "string",
    notSupported: !0
  }, {
    tfName: "ksize",
    name: "kernelSize",
    type: "number[]"
  }, {
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Conv1D",
  category: "convolution",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "filter",
    type: "tensor"
  }],
  attrs: [{
    tfName: "stride",
    name: "stride",
    type: "number"
  }, {
    tfName: "padding",
    name: "pad",
    type: "string"
  }, {
    tfName: "data_format",
    name: "dataFormat",
    type: "string",
    defaultValue: "NWC"
  }, {
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }, {
    tfName: "dilation",
    name: "dilation",
    type: "number",
    defaultValue: 1
  }]
}, {
  tfOpName: "Conv2D",
  category: "convolution",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "filter",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }, {
    tfName: "strides",
    name: "strides",
    type: "number[]"
  }, {
    tfName: "padding",
    name: "pad",
    type: "string"
  }, {
    tfName: "useCudnnOnGpu",
    name: "useCudnnOnGpu",
    type: "bool"
  }, {
    tfName: "data_format",
    name: "dataFormat",
    type: "string",
    defaultValue: "NHWC"
  }, {
    tfName: "dilations",
    name: "dilations",
    type: "number[]"
  }]
}, {
  tfOpName: "_FusedConv2D",
  category: "convolution",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "filter",
    type: "tensor"
  }, {
    start: 2,
    end: 0,
    name: "args",
    type: "tensors"
  }],
  attrs: [{
    tfName: "num_args",
    name: "numArgs",
    type: "number"
  }, {
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }, {
    tfName: "strides",
    name: "strides",
    type: "number[]"
  }, {
    tfName: "padding",
    name: "pad",
    type: "string"
  }, {
    tfName: "explicit_paddings",
    name: "explicitPaddings",
    type: "number[]",
    defaultValue: []
  }, {
    tfName: "use_cudnn_on_gpu",
    name: "useCudnnOnGpu",
    type: "bool",
    defaultValue: !0
  }, {
    tfName: "data_format",
    name: "dataFormat",
    type: "string",
    defaultValue: "NHWC"
  }, {
    tfName: "dilations",
    name: "dilations",
    type: "number[]",
    defaultValue: [1, 1, 1, 1]
  }, {
    tfName: "fused_ops",
    name: "fusedOps",
    type: "string[]",
    defaultValue: []
  }, {
    tfName: "epsilon",
    name: "epsilon",
    type: "number",
    defaultValue: 1e-4
  }]
}, {
  tfOpName: "Conv2DBackpropInput",
  category: "convolution",
  inputs: [{
    start: 2,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "filter",
    type: "tensor"
  }, {
    start: 0,
    name: "outputShape",
    type: "number[]"
  }],
  attrs: [{
    tfName: "strides",
    name: "strides",
    type: "number[]"
  }, {
    tfName: "padding",
    name: "pad",
    type: "string"
  }, {
    tfName: "data_format",
    name: "dataFormat",
    type: "string",
    notSupported: !0
  }]
}, {
  tfOpName: "DepthwiseConv2d",
  category: "convolution",
  inputs: [{
    start: 0,
    name: "input",
    type: "tensor"
  }, {
    start: 1,
    name: "filter",
    type: "tensor"
  }],
  attrs: [{
    tfName: "strides",
    name: "strides",
    type: "number[]"
  }, {
    tfName: "padding",
    name: "pad",
    type: "string"
  }, {
    tfName: "data_format",
    name: "dataFormat",
    type: "string",
    defaultValue: "NHWC"
  }, {
    tfName: "dilations",
    name: "dilations",
    type: "number[]"
  }]
}, {
  tfOpName: "DepthwiseConv2dNative",
  category: "convolution",
  inputs: [{
    start: 0,
    name: "input",
    type: "tensor"
  }, {
    start: 1,
    name: "filter",
    type: "tensor"
  }],
  attrs: [{
    tfName: "strides",
    name: "strides",
    type: "number[]"
  }, {
    tfName: "padding",
    name: "pad",
    type: "string"
  }, {
    tfName: "data_format",
    name: "dataFormat",
    type: "string",
    defaultValue: "NHWC"
  }, {
    tfName: "dilations",
    name: "dilations",
    type: "number[]"
  }]
}, {
  tfOpName: "FusedDepthwiseConv2dNative",
  category: "convolution",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "filter",
    type: "tensor"
  }, {
    start: 2,
    end: 0,
    name: "args",
    type: "tensors"
  }],
  attrs: [{
    tfName: "num_args",
    name: "numArgs",
    type: "number"
  }, {
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }, {
    tfName: "strides",
    name: "strides",
    type: "number[]"
  }, {
    tfName: "padding",
    name: "pad",
    type: "string"
  }, {
    tfName: "data_format",
    name: "dataFormat",
    type: "string",
    defaultValue: "NHWC"
  }, {
    tfName: "dilations",
    name: "dilations",
    type: "number[]",
    defaultValue: [1, 1, 1, 1]
  }, {
    tfName: "fused_ops",
    name: "fusedOps",
    type: "string[]",
    defaultValue: []
  }]
}, {
  tfOpName: "Conv3D",
  category: "convolution",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "filter",
    type: "tensor"
  }],
  attrs: [{
    tfName: "strides",
    name: "strides",
    type: "number[]"
  }, {
    tfName: "padding",
    name: "pad",
    type: "string"
  }, {
    tfName: "data_format",
    name: "dataFormat",
    type: "string",
    defaultValue: "NHWC"
  }, {
    tfName: "dilations",
    name: "dilations",
    type: "number[]"
  }]
}],
    convolution = Object.freeze({
  json: json$3
}),
    json$4 = [{
  tfOpName: "Fill",
  category: "creation",
  inputs: [{
    start: 0,
    name: "shape",
    type: "number[]"
  }, {
    start: 1,
    name: "value",
    type: "number"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype"
  }]
}, {
  tfOpName: "LinSpace",
  category: "creation",
  inputs: [{
    start: 0,
    name: "start",
    type: "number"
  }, {
    start: 1,
    name: "stop",
    type: "number"
  }, {
    start: 2,
    name: "num",
    type: "number"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "OneHot",
  category: "creation",
  inputs: [{
    start: 0,
    name: "indices",
    type: "tensor"
  }, {
    start: 1,
    name: "depth",
    type: "number"
  }, {
    start: 2,
    name: "onValue",
    type: "number",
    defaultValue: 1
  }, {
    start: 3,
    name: "offValue",
    type: "number",
    defaultValue: 0
  }],
  attrs: [{
    tfName: "axis",
    name: "axis",
    type: "number",
    notSupported: !0
  }, {
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Ones",
  category: "creation",
  inputs: [{
    start: 0,
    name: "shape",
    type: "number[]"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype"
  }]
}, {
  tfOpName: "OnesLike",
  category: "creation",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "dtype",
    name: "dtype",
    type: "dtype"
  }]
}, {
  tfOpName: "RandomUniform",
  category: "creation",
  inputs: [{
    start: 0,
    name: "shape",
    type: "number[]"
  }],
  attrs: [{
    tfName: "minval",
    name: "minval",
    type: "number",
    defaultValue: 0
  }, {
    tfName: "maxval",
    name: "maxval",
    type: "number",
    defaultValue: 1
  }, {
    tfName: "dtype",
    name: "dtype",
    type: "dtype"
  }, {
    tfName: "seed",
    name: "seed",
    type: "number",
    defaultValue: 0
  }, {
    tfName: "seed2",
    name: "seed2",
    type: "number",
    defaultValue: 0,
    notSupported: !0
  }, {
    tfName: "T",
    name: "T",
    type: "number",
    notSupported: !0
  }]
}, {
  tfOpName: "Range",
  category: "creation",
  inputs: [{
    start: 0,
    name: "start",
    type: "number"
  }, {
    start: 1,
    name: "stop",
    type: "number"
  }, {
    start: 2,
    name: "step",
    type: "number",
    defaultValue: 0
  }],
  attrs: [{
    tfName: "Tidx",
    name: "dtype",
    type: "dtype"
  }]
}, {
  tfOpName: "TruncatedNormal",
  category: "creation",
  inputs: [{
    start: 0,
    name: "shape",
    type: "number[]"
  }],
  attrs: [{
    tfName: "means",
    name: "mean",
    type: "number",
    defaultValue: 0
  }, {
    tfName: "stddev",
    name: "stdDev",
    type: "number",
    defaultValue: 1
  }, {
    tfName: "seed",
    name: "seed",
    type: "number"
  }, {
    tfName: "seed2",
    name: "seed2",
    type: "number",
    defaultValue: 0,
    notSupported: !0
  }, {
    tfName: "dtype",
    name: "dtype",
    type: "dtype"
  }, {
    tfName: "T",
    name: "T",
    type: "number",
    notSupported: !0
  }]
}, {
  tfOpName: "Zeros",
  category: "creation",
  inputs: [{
    start: 0,
    name: "shape",
    type: "number[]"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype"
  }]
}, {
  tfOpName: "ZerosLike",
  category: "creation",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype"
  }]
}, {
  tfOpName: "Multinomial",
  category: "creation",
  inputs: [{
    start: 0,
    name: "logits",
    type: "tensor"
  }, {
    start: 1,
    name: "numSamples",
    type: "number"
  }],
  attrs: [{
    tfName: "seed",
    name: "seed",
    type: "number"
  }, {
    tfName: "seed2",
    name: "seed2",
    type: "number"
  }, {
    tfName: "T",
    name: "dtype",
    type: "dtype"
  }, {
    tfName: "output_dtype",
    name: "output_dtype",
    type: "dtype"
  }]
}],
    creation = Object.freeze({
  json: json$4
}),
    json$5 = [{
  tfOpName: "NonMaxSuppressionV2",
  category: "dynamic",
  inputs: [{
    start: 0,
    name: "boxes",
    type: "tensor"
  }, {
    start: 1,
    name: "scores",
    type: "tensor"
  }, {
    start: 2,
    name: "maxOutputSize",
    type: "number"
  }, {
    start: 3,
    name: "iouThreshold",
    type: "number"
  }]
}, {
  tfOpName: "NonMaxSuppressionV3",
  category: "dynamic",
  inputs: [{
    start: 0,
    name: "boxes",
    type: "tensor"
  }, {
    start: 1,
    name: "scores",
    type: "tensor"
  }, {
    start: 2,
    name: "maxOutputSize",
    type: "number"
  }, {
    start: 3,
    name: "iouThreshold",
    type: "number"
  }, {
    start: 4,
    name: "scoreThreshold",
    type: "number"
  }]
}, {
  tfOpName: "NonMaxSuppressionV5",
  category: "dynamic",
  inputs: [{
    start: 0,
    name: "boxes",
    type: "tensor"
  }, {
    start: 1,
    name: "scores",
    type: "tensor"
  }, {
    start: 2,
    name: "maxOutputSize",
    type: "number"
  }, {
    start: 3,
    name: "iouThreshold",
    type: "number"
  }, {
    start: 4,
    name: "scoreThreshold",
    type: "number"
  }, {
    start: 5,
    name: "softNmsSigma",
    type: "number"
  }]
}, {
  tfOpName: "Where",
  category: "dynamic",
  inputs: [{
    start: 0,
    name: "condition",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "ListDiff",
  category: "dynamic",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "y",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}],
    dynamic = Object.freeze({
  json: json$5
}),
    json$6 = [{
  tfOpName: "TopKV2",
  category: "evaluation",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "k",
    type: "number"
  }],
  attrs: [{
    tfName: "sorted",
    name: "sorted",
    type: "bool"
  }]
}],
    evaluation = Object.freeze({
  json: json$6
}),
    json$7 = [{
  tfOpName: "PlaceholderWithDefault",
  category: "graph",
  inputs: [{
    start: 0,
    name: "default",
    type: "tensor"
  }],
  attrs: [{
    tfName: "shape",
    name: "shape",
    type: "shape"
  }, {
    tfName: "dtype",
    name: "dtype",
    type: "dtype"
  }]
}, {
  tfOpName: "Placeholder",
  category: "graph",
  attrs: [{
    tfName: "shape",
    name: "shape",
    type: "shape"
  }, {
    tfName: "dtype",
    name: "dtype",
    type: "dtype"
  }]
}, {
  tfOpName: "Const",
  category: "graph"
}, {
  tfOpName: "Identity",
  category: "graph",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }]
}, {
  tfOpName: "IdentityN",
  category: "graph",
  inputs: [{
    start: 0,
    end: 0,
    name: "x",
    type: "tensors"
  }]
}, {
  tfOpName: "Snapshot",
  category: "graph",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }]
}, {
  tfOpName: "Rank",
  category: "graph",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }]
}, {
  tfOpName: "Size",
  category: "graph",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }]
}, {
  tfOpName: "Shape",
  category: "graph",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }]
}, {
  tfOpName: "ShapeN",
  category: "graph",
  inputs: [{
    start: 0,
    end: 0,
    name: "x",
    type: "tensors"
  }]
}, {
  tfOpName: "Print",
  category: "graph",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "data",
    type: "tensors"
  }],
  attrs: [{
    tfName: "message",
    name: "message",
    type: "string"
  }, {
    tfName: "first_n",
    name: "firstN",
    type: "number",
    notSupported: !0
  }, {
    tfName: "summarize",
    name: "summarize",
    type: "number",
    defaultValue: 3
  }]
}, {
  tfOpName: "NoOp",
  category: "graph",
  inputs: []
}, {
  tfOpName: "StopGradient",
  category: "graph",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }]
}, {
  tfOpName: "FakeQuantWithMinMaxVars",
  category: "graph",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "min",
    name: "min",
    type: "number"
  }, {
    tfName: "max",
    name: "max",
    type: "number"
  }]
}],
    graph = Object.freeze({
  json: json$7
}),
    json$8 = [{
  tfOpName: "ResizeBilinear",
  category: "image",
  inputs: [{
    start: 0,
    name: "images",
    type: "tensor"
  }, {
    start: 1,
    name: "size",
    type: "number[]"
  }],
  attrs: [{
    tfName: "align_corners",
    name: "alignCorners",
    type: "bool"
  }, {
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "ResizeNearestNeighbor",
  category: "image",
  inputs: [{
    start: 0,
    name: "images",
    type: "tensor"
  }, {
    start: 1,
    name: "size",
    type: "number[]"
  }],
  attrs: [{
    tfName: "align_corners",
    name: "alignCorners",
    type: "bool"
  }, {
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "CropAndResize",
  category: "image",
  inputs: [{
    start: 0,
    name: "image",
    type: "tensor"
  }, {
    start: 1,
    name: "boxes",
    type: "tensor"
  }, {
    start: 2,
    name: "boxInd",
    type: "tensor"
  }, {
    start: 3,
    name: "cropSize",
    type: "number[]"
  }],
  attrs: [{
    tfName: "method",
    name: "method",
    type: "string"
  }, {
    tfName: "extrapolation_value",
    name: "extrapolationValue",
    type: "number"
  }]
}],
    image$1 = Object.freeze({
  json: json$8
}),
    json$9 = [{
  tfOpName: "Equal",
  category: "logical",
  inputs: [{
    start: 0,
    name: "a",
    type: "tensor"
  }, {
    start: 1,
    name: "b",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "NotEqual",
  category: "logical",
  inputs: [{
    start: 0,
    name: "a",
    type: "tensor"
  }, {
    start: 1,
    name: "b",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Greater",
  category: "logical",
  inputs: [{
    start: 0,
    name: "a",
    type: "tensor"
  }, {
    start: 1,
    name: "b",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "GreaterEqual",
  category: "logical",
  inputs: [{
    start: 0,
    name: "a",
    type: "tensor"
  }, {
    start: 1,
    name: "b",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Less",
  category: "logical",
  inputs: [{
    start: 0,
    name: "a",
    type: "tensor"
  }, {
    start: 1,
    name: "b",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "LessEqual",
  category: "logical",
  inputs: [{
    start: 0,
    name: "a",
    type: "tensor"
  }, {
    start: 1,
    name: "b",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "LogicalAnd",
  category: "logical",
  inputs: [{
    start: 0,
    name: "a",
    type: "tensor"
  }, {
    start: 1,
    name: "b",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "LogicalNot",
  category: "logical",
  inputs: [{
    start: 0,
    name: "a",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "LogicalOr",
  category: "logical",
  inputs: [{
    start: 0,
    name: "a",
    type: "tensor"
  }, {
    start: 1,
    name: "b",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Select",
  category: "logical",
  inputs: [{
    start: 0,
    name: "condition",
    type: "tensor"
  }, {
    start: 1,
    name: "a",
    type: "tensor"
  }, {
    start: 2,
    name: "b",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "SelectV2",
  category: "logical",
  inputs: [{
    start: 0,
    name: "condition",
    type: "tensor"
  }, {
    start: 1,
    name: "a",
    type: "tensor"
  }, {
    start: 2,
    name: "b",
    type: "tensor"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}],
    logical = Object.freeze({
  json: json$9
}),
    json$10 = [{
  tfOpName: "_FusedMatMul",
  category: "matrices",
  inputs: [{
    start: 0,
    name: "a",
    type: "tensor"
  }, {
    start: 1,
    name: "b",
    type: "tensor"
  }, {
    start: 2,
    end: 0,
    name: "args",
    type: "tensors"
  }],
  attrs: [{
    tfName: "num_args",
    name: "numArgs",
    type: "number"
  }, {
    tfName: "fused_ops",
    name: "fusedOps",
    type: "string[]",
    defaultValue: []
  }, {
    tfName: "epsilon",
    name: "epsilon",
    type: "number",
    defaultValue: 1e-4
  }, {
    tfName: "transpose_a",
    name: "transposeA",
    type: "bool",
    defaultValue: !1
  }, {
    tfName: "transpose_b",
    name: "transposeB",
    type: "bool",
    defaultValue: !1
  }, {
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "MatMul",
  category: "matrices",
  inputs: [{
    start: 0,
    name: "a",
    type: "tensor"
  }, {
    start: 1,
    name: "b",
    type: "tensor"
  }],
  attrs: [{
    tfName: "transpose_a",
    name: "transposeA",
    type: "bool",
    defaultValue: !1
  }, {
    tfName: "transpose_b",
    name: "transposeB",
    type: "bool",
    defaultValue: !1
  }, {
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "BatchMatMul",
  category: "matrices",
  inputs: [{
    start: 0,
    name: "a",
    type: "tensor"
  }, {
    start: 1,
    name: "b",
    type: "tensor"
  }],
  attrs: [{
    tfName: "adj_x",
    name: "transposeA",
    type: "bool",
    defaultValue: !1
  }, {
    tfName: "adj_y",
    name: "transposeB",
    type: "bool",
    defaultValue: !1
  }, {
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "BatchMatMulV2",
  category: "matrices",
  inputs: [{
    start: 0,
    name: "a",
    type: "tensor"
  }, {
    start: 1,
    name: "b",
    type: "tensor"
  }],
  attrs: [{
    tfName: "adj_x",
    name: "transposeA",
    type: "bool",
    defaultValue: !1
  }, {
    tfName: "adj_y",
    name: "transposeB",
    type: "bool",
    defaultValue: !1
  }, {
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}, {
  tfOpName: "Transpose",
  category: "matrices",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "perm",
    type: "number[]"
  }],
  attrs: [{
    tfName: "T",
    name: "dtype",
    type: "dtype",
    notSupported: !0
  }]
}],
    matrices = Object.freeze({
  json: json$10
}),
    json$11 = [{
  tfOpName: "FusedBatchNorm",
  category: "normalization",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "scale",
    type: "tensor"
  }, {
    start: 2,
    name: "offset",
    type: "tensor"
  }, {
    start: 3,
    name: "mean",
    type: "tensor"
  }, {
    start: 4,
    name: "variance",
    type: "tensor"
  }],
  attrs: [{
    tfName: "epsilon",
    name: "epsilon",
    type: "number",
    defaultValue: .001
  }, {
    tfName: "data_format",
    name: "dataFormat",
    type: "string",
    notSupported: !0
  }]
}, {
  tfOpName: "FusedBatchNormV2",
  category: "normalization",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "scale",
    type: "tensor"
  }, {
    start: 2,
    name: "offset",
    type: "tensor"
  }, {
    start: 3,
    name: "mean",
    type: "tensor"
  }, {
    start: 4,
    name: "variance",
    type: "tensor"
  }],
  attrs: [{
    tfName: "epsilon",
    name: "epsilon",
    type: "number",
    defaultValue: .001
  }, {
    tfName: "data_format",
    name: "dataFormat",
    type: "string",
    notSupported: !0
  }]
}, {
  tfOpName: "FusedBatchNormV3",
  category: "normalization",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "scale",
    type: "tensor"
  }, {
    start: 2,
    name: "offset",
    type: "tensor"
  }, {
    start: 3,
    name: "mean",
    type: "tensor"
  }, {
    start: 4,
    name: "variance",
    type: "tensor"
  }],
  attrs: [{
    tfName: "epsilon",
    name: "epsilon",
    type: "number",
    defaultValue: .001
  }, {
    tfName: "data_format",
    name: "dataFormat",
    type: "string",
    notSupported: !0
  }]
}, {
  tfOpName: "LRN",
  category: "normalization",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "depth_radius",
    name: "radius",
    type: "number",
    defaultValue: 5
  }, {
    tfName: "bias",
    name: "bias",
    type: "number",
    defaultValue: 1
  }, {
    tfName: "alpha",
    name: "alpha",
    type: "number",
    defaultValue: 1
  }, {
    tfName: "beta",
    name: "beta",
    type: "number",
    defaultValue: .5
  }]
}, {
  tfOpName: "Softmax",
  category: "normalization",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }]
}, {
  tfOpName: "LogSoftmax",
  category: "normalization",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }]
}, {
  tfOpName: "SparseToDense",
  category: "normalization",
  inputs: [{
    start: 0,
    name: "sparseIndices",
    type: "tensor"
  }, {
    start: 1,
    name: "outputShape",
    type: "number[]"
  }, {
    start: 2,
    name: "sparseValues",
    type: "tensor"
  }, {
    start: 3,
    name: "defaultValue",
    type: "tensor"
  }],
  attrs: [{
    tfName: "validate_indices",
    name: "validateIndices",
    type: "bool",
    defaultValue: !0,
    notSupported: !0
  }]
}],
    normalization = Object.freeze({
  json: json$11
}),
    json$12 = [{
  tfOpName: "Max",
  category: "reduction",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "axis",
    type: "number[]"
  }],
  attrs: [{
    tfName: "keep_dims",
    name: "keepDims",
    type: "bool"
  }]
}, {
  tfOpName: "Mean",
  category: "reduction",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "axis",
    type: "number[]"
  }],
  attrs: [{
    tfName: "keep_dims",
    name: "keepDims",
    type: "bool"
  }]
}, {
  tfOpName: "Min",
  category: "reduction",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "axis",
    type: "number[]"
  }],
  attrs: [{
    tfName: "keep_dims",
    name: "keepDims",
    type: "bool"
  }]
}, {
  tfOpName: "Sum",
  category: "reduction",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "axis",
    type: "number[]"
  }],
  attrs: [{
    tfName: "keep_dims",
    name: "keepDims",
    type: "bool"
  }]
}, {
  tfOpName: "All",
  category: "reduction",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "axis",
    type: "number[]"
  }],
  attrs: [{
    tfName: "keep_dims",
    name: "keepDims",
    type: "bool"
  }]
}, {
  tfOpName: "Any",
  category: "reduction",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "axis",
    type: "number[]"
  }],
  attrs: [{
    tfName: "keep_dims",
    name: "keepDims",
    type: "bool"
  }]
}, {
  tfOpName: "ArgMax",
  category: "reduction",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "axis",
    type: "number"
  }]
}, {
  tfOpName: "ArgMin",
  category: "reduction",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "axis",
    type: "number"
  }]
}, {
  tfOpName: "Prod",
  category: "reduction",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "axis",
    type: "number[]"
  }],
  attrs: [{
    tfName: "keep_dims",
    name: "keepDims",
    type: "bool"
  }]
}],
    reduction = Object.freeze({
  json: json$12
}),
    json$13 = [{
  tfOpName: "ConcatV2",
  category: "slice_join",
  inputs: [{
    start: 0,
    end: -1,
    name: "tensors",
    type: "tensors"
  }, {
    start: -1,
    name: "axis",
    type: "number"
  }],
  attrs: [{
    tfName: "N",
    name: "n",
    type: "number",
    defaultValue: 2
  }]
}, {
  tfOpName: "Concat",
  category: "slice_join",
  inputs: [{
    start: 1,
    end: 0,
    name: "tensors",
    type: "tensors"
  }, {
    start: 0,
    name: "axis",
    type: "number"
  }],
  attrs: [{
    tfName: "N",
    name: "n",
    type: "number",
    defaultValue: 2
  }]
}, {
  tfOpName: "GatherV2",
  category: "slice_join",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "indices",
    type: "tensor"
  }, {
    start: 2,
    name: "axis",
    type: "number",
    defaultValue: 0
  }]
}, {
  tfOpName: "Gather",
  category: "slice_join",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "indices",
    type: "tensor"
  }],
  attrs: [{
    tfName: "axis",
    name: "axis",
    type: "number",
    defaultValue: 0
  }, {
    tfName: "validate_indices",
    name: "validateIndices",
    type: "bool",
    notSupported: !0
  }]
}, {
  tfOpName: "Reverse",
  category: "slice_join",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "dims",
    type: "bool",
    notSupported: !0
  }]
}, {
  tfOpName: "ReverseV2",
  category: "slice_join",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "axis",
    type: "number[]"
  }]
}, {
  tfOpName: "Slice",
  category: "slice_join",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "begin",
    type: "number[]"
  }, {
    start: 2,
    name: "size",
    type: "number[]"
  }]
}, {
  tfOpName: "StridedSlice",
  category: "slice_join",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "begin",
    type: "number[]"
  }, {
    start: 2,
    name: "end",
    type: "number[]"
  }, {
    start: 3,
    name: "strides",
    type: "number[]"
  }],
  attrs: [{
    tfName: "begin_mask",
    name: "beginMask",
    type: "number",
    defaultValue: 0
  }, {
    tfName: "end_mask",
    name: "endMask",
    type: "number",
    defaultValue: 0
  }, {
    tfName: "new_axis_mask",
    name: "newAxisMask",
    type: "number",
    defaultValue: 0
  }, {
    tfName: "ellipsis_mask",
    name: "ellipsisMask",
    type: "number",
    defaultValue: 0
  }, {
    tfName: "shrink_axis_mask",
    name: "shrinkAxisMask",
    type: "number",
    defaultValue: 0
  }]
}, {
  tfOpName: "Pack",
  category: "slice_join",
  inputs: [{
    start: 0,
    end: 0,
    name: "tensors",
    type: "tensors"
  }],
  attrs: [{
    tfName: "axis",
    name: "axis",
    type: "number",
    defaultValue: 0
  }]
}, {
  tfOpName: "Unpack",
  category: "slice_join",
  inputs: [{
    start: 0,
    name: "tensor",
    type: "tensor"
  }],
  attrs: [{
    tfName: "axis",
    name: "axis",
    type: "number",
    defaultValue: 0
  }, {
    tfName: "num",
    name: "num",
    type: "number",
    defaultValue: 0,
    notSupported: !0
  }]
}, {
  tfOpName: "Tile",
  category: "slice_join",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "reps",
    type: "number[]"
  }]
}, {
  tfOpName: "Split",
  category: "slice_join",
  inputs: [{
    start: 0,
    name: "axis",
    type: "number",
    defaultValue: 0
  }, {
    start: 1,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "num_split",
    name: "numOrSizeSplits",
    type: "number",
    defaultValue: 1
  }]
}, {
  tfOpName: "SplitV",
  category: "slice_join",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "numOrSizeSplits",
    type: "number[]"
  }, {
    start: 2,
    name: "axis",
    type: "number",
    defaultValue: 0
  }]
}, {
  tfOpName: "ScatterNd",
  category: "slice_join",
  inputs: [{
    start: 0,
    name: "indices",
    type: "tensor"
  }, {
    start: 1,
    name: "values",
    type: "tensor"
  }, {
    start: 2,
    name: "shape",
    type: "number[]"
  }]
}, {
  tfOpName: "GatherNd",
  category: "slice_join",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "indices",
    type: "tensor"
  }]
}, {
  tfOpName: "SparseToDense",
  category: "slice_join",
  inputs: [{
    start: 0,
    name: "sparseIndices",
    type: "tensor"
  }, {
    start: 1,
    name: "outputShape",
    type: "number[]"
  }, {
    start: 2,
    name: "sparseValues",
    type: "tensor"
  }, {
    start: 3,
    name: "defaultValue",
    type: "tensor"
  }],
  attrs: [{
    tfName: "validate_indices",
    name: "validateIndices",
    type: "bool",
    defaultValue: !1,
    notSupported: !0
  }]
}],
    sliceJoin = Object.freeze({
  json: json$13
}),
    json$14 = [{
  tfOpName: "FFT",
  category: "spectral",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }]
}, {
  tfOpName: "IFFT",
  category: "spectral",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }]
}, {
  tfOpName: "RFFT",
  category: "spectral",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "fft_length",
    type: "number",
    notSupported: !0
  }]
}, {
  tfOpName: "IRFFT",
  category: "spectral",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "fft_length",
    type: "number",
    notSupported: !0
  }]
}],
    spectral = Object.freeze({
  json: json$14
}),
    json$15 = [{
  tfOpName: "Cast",
  category: "transformation",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "SrcT",
    name: "sdtype",
    type: "dtype",
    notSupported: !0
  }, {
    tfName: "DstT",
    name: "dtype",
    type: "dtype"
  }]
}, {
  tfOpName: "ExpandDims",
  category: "transformation",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "axis",
    type: "number"
  }]
}, {
  tfOpName: "Pad",
  category: "transformation",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "padding",
    type: "number[]"
  }],
  attrs: [{
    tfName: "constant_value",
    name: "constantValue",
    type: "number",
    defaultValue: 0
  }]
}, {
  tfOpName: "PadV2",
  category: "transformation",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "padding",
    type: "number[]"
  }, {
    start: 2,
    name: "constantValue",
    type: "number",
    defaultValue: 0
  }]
}, {
  tfOpName: "Reshape",
  category: "transformation",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "shape",
    type: "number[]"
  }]
}, {
  tfOpName: "Squeeze",
  category: "transformation",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "axis",
    tfDeprecatedName: "squeeze_dims",
    name: "axis",
    type: "number[]"
  }]
}, {
  tfOpName: "SpaceToBatchND",
  category: "transformation",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "blockShape",
    type: "number[]"
  }, {
    start: 2,
    name: "paddings",
    type: "number[]"
  }]
}, {
  tfOpName: "BatchToSpaceND",
  category: "transformation",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }, {
    start: 1,
    name: "blockShape",
    type: "number[]"
  }, {
    start: 2,
    name: "crops",
    type: "number[]"
  }]
}, {
  tfOpName: "DepthToSpace",
  category: "transformation",
  inputs: [{
    start: 0,
    name: "x",
    type: "tensor"
  }],
  attrs: [{
    tfName: "block_size",
    name: "blockSize",
    type: "number"
  }, {
    tfName: "data_format",
    name: "dataFormat",
    type: "string"
  }]
}],
    transformation = Object.freeze({
  json: json$15
}),
    OperationMapper = function () {
  function e() {
    var e = [arithmetic, basicMath, control, convolution, creation, dynamic, evaluation, logical, image$1, graph, matrices, normalization, reduction, sliceJoin, spectral, transformation],
        t = [].concat.apply([], e.map(function (e) {
      return e.json;
    }));
    this.opMappers = t.reduce(function (e, t) {
      return e[t.tfOpName] = t, e;
    }, {});
  }

  return Object.defineProperty(e, "Instance", {
    get: function get() {
      return this._instance || (this._instance = new this());
    },
    enumerable: !0,
    configurable: !0
  }), e.prototype.transformGraph = function (e, t) {
    var a = this;
    void 0 === t && (t = {});
    var r = [],
        n = [],
        s = e.node.reduce(function (e, t) {
      return e[t.name] = a.mapNode(t), t.op.startsWith("Placeholder") && r.push(e[t.name]), "Const" === t.op && n.push(e[t.name]), e;
    }, {}),
        o = [],
        p = [],
        u = {},
        i = {};
    null != t && (u = this.mapSignatureEntries(t.inputs), i = this.mapSignatureEntries(t.outputs));
    var m = Object.keys(s);
    return m.forEach(function (e) {
      var t = s[e];
      t.inputNames.forEach(function (e) {
        var a = getNodeNameAndIndex(e)[0];
        t.inputs.push(s[a]), s[a].children.push(t);
      });
    }), 0 === Object.keys(i).length ? m.forEach(function (e) {
      var t = s[e];
      0 === t.children.length && p.push(t);
    }) : Object.keys(i).forEach(function (e) {
      var t = getNodeNameAndIndex(e)[0],
          a = s[t];
      null != a && (a.signatureKey = i[e], p.push(a));
    }), Object.keys(u).length > 0 ? Object.keys(u).forEach(function (e) {
      var t = getNodeNameAndIndex(e)[0],
          a = s[t];
      a && (a.signatureKey = u[e], o.push(a));
    }) : o = r, {
      nodes: s,
      inputs: o,
      outputs: p,
      weights: n,
      placeholders: r,
      signature: t
    };
  }, e.prototype.mapSignatureEntries = function (e) {
    return Object.keys(e || {}).reduce(function (t, a) {
      return t[e[a].name] = a, t;
    }, {});
  }, e.prototype.mapNode = function (e) {
    var t = getRegisteredOp(e.op) || this.opMappers[e.op] || {};
    null == e.attr && (e.attr = {});
    var a = {
      name: e.name,
      op: e.op,
      category: t.category,
      inputNames: (e.input || []).map(function (e) {
        return e.startsWith("^") ? e.substr(1) : e;
      }),
      inputs: [],
      children: [],
      inputParams: {},
      attrParams: {},
      rawAttrs: e.attr
    };
    return null != t.inputs && (a.inputParams = t.inputs.reduce(function (e, t) {
      return e[t.name] = {
        type: t.type,
        inputIndexStart: t.start,
        inputIndexEnd: t.end
      }, e;
    }, {})), null != t.attrs && (a.attrParams = t.attrs.reduce(function (t, a) {
      var r = a.type,
          n = void 0;

      switch (a.type) {
        case "string":
          void 0 === (n = getStringParam(e.attr, a.tfName, a.defaultValue)) && a.tfDeprecatedName && (n = getStringParam(e.attr, a.tfDeprecatedName, a.defaultValue));
          break;

        case "string[]":
          void 0 === (n = getStringArrayParam(e.attr, a.tfName, a.defaultValue)) && a.tfDeprecatedName && (n = getStringArrayParam(e.attr, a.tfDeprecatedName, a.defaultValue));
          break;

        case "number":
          void 0 === (n = getNumberParam(e.attr, a.tfName, a.defaultValue || 0)) && a.tfDeprecatedName && (n = getNumberParam(e.attr, a.tfDeprecatedName, a.defaultValue));
          break;

        case "number[]":
          void 0 === (n = getNumericArrayParam(e.attr, a.tfName, a.defaultValue)) && a.tfDeprecatedName && (n = getNumericArrayParam(e.attr, a.tfDeprecatedName, a.defaultValue));
          break;

        case "bool":
          void 0 === (n = getBoolParam(e.attr, a.tfName, a.defaultValue)) && a.tfDeprecatedName && (n = getBoolParam(e.attr, a.tfDeprecatedName, a.defaultValue));
          break;

        case "bool[]":
          void 0 === (n = getBoolArrayParam(e.attr, a.tfName, a.defaultValue)) && a.tfDeprecatedName && (n = getBoolArrayParam(e.attr, a.tfDeprecatedName, a.defaultValue));
          break;

        case "shape":
          void 0 === (n = getTensorShapeParam(e.attr, a.tfName, a.defaultValue)) && a.tfDeprecatedName && (n = getTensorShapeParam(e.attr, a.tfDeprecatedName, a.defaultValue));
          break;

        case "shape[]":
          void 0 === (n = getTensorShapeArrayParam(e.attr, a.tfName, a.defaultValue)) && a.tfDeprecatedName && (n = getTensorShapeArrayParam(e.attr, a.tfDeprecatedName, a.defaultValue));
          break;

        case "dtype":
          void 0 === (n = getDtypeParam(e.attr, a.tfName, a.defaultValue)) && a.tfDeprecatedName && (n = getDtypeParam(e.attr, a.tfDeprecatedName, a.defaultValue));
          break;

        case "dtype[]":
          void 0 === (n = getDtypeArrayParam(e.attr, a.tfName, a.defaultValue)) && a.tfDeprecatedName && (n = getDtypeArrayParam(e.attr, a.tfDeprecatedName, a.defaultValue));
          break;

        case "tensor":
        case "tensors":
          break;

        default:
          throw new Error("Unsupported param type: " + a.type + " for op: " + e.op);
      }

      return t[a.name] = {
        value: n,
        type: r
      }, t;
    }, {})), a;
  }, e;
}();

function decodeBase64(e) {
  var t = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* env */ "J"])().global;
  if (void 0 !== t.atob) return t.atob(e);
  if ("undefined" != typeof Buffer) return new Buffer(e, "base64").toString();
  throw new Error("Unable to decode base64 in this environment. Missing built-in atob() or Buffer()");
}

function parseStringParam(e, t) {
  var a = Array.isArray(e) ? String.fromCharCode.apply(null, e) : decodeBase64(e);
  return t ? a : a.toLowerCase();
}

function getStringParam(e, t, a, r) {
  void 0 === r && (r = !1);
  var n = e[t];
  return null != n ? parseStringParam(n.s, r) : a;
}

function getBoolParam(e, t, a) {
  var r = e[t];
  return r ? r.b : a;
}

function getNumberParam(e, t, a) {
  var r = e[t] || {},
      n = null != r.i ? r.i : null != r.f ? r.f : a;
  return "number" == typeof n ? n : parseInt(n, 10);
}

function parseDtypeParam(e) {
  switch ("string" == typeof e && (e = DataType[e]), e) {
    case DataType.DT_FLOAT:
      return "float32";

    case DataType.DT_INT32:
    case DataType.DT_INT64:
    case DataType.DT_INT8:
    case DataType.DT_UINT8:
      return "int32";

    case DataType.DT_BOOL:
      return "bool";

    case DataType.DT_DOUBLE:
      return "float32";

    case DataType.DT_STRING:
      return "string";

    default:
      return null;
  }
}

function getDtypeParam(e, t, a) {
  var r = e[t];
  return r && r.type ? parseDtypeParam(r.type) : a;
}

function getDtypeArrayParam(e, t, a) {
  var r = e[t];
  return r && r.list && r.list.type ? r.list.type.map(function (e) {
    return parseDtypeParam(e);
  }) : a;
}

function parseTensorShapeParam(e) {
  if (!e.unknownRank) return null != e.dim ? e.dim.map(function (e) {
    return "number" == typeof e.size ? e.size : parseInt(e.size, 10);
  }) : [];
}

function getTensorShapeParam(e, t, a) {
  var r = e[t];
  return r && r.shape ? parseTensorShapeParam(r.shape) : a;
}

function getNumericArrayParam(e, t, a) {
  var r = e[t];
  return r ? ((r.list.f && r.list.f.length ? r.list.f : r.list.i) || []).map(function (e) {
    return "number" == typeof e ? e : parseInt(e, 10);
  }) : a;
}

function getStringArrayParam(e, t, a, r) {
  void 0 === r && (r = !1);
  var n = e[t];
  return n && n.list && n.list.s ? n.list.s.map(function (e) {
    return parseStringParam(e, r);
  }) : a;
}

function getTensorShapeArrayParam(e, t, a) {
  var r = e[t];
  return r && r.list && r.list.shape ? r.list.shape.map(function (e) {
    return parseTensorShapeParam(e);
  }) : a;
}

function getBoolArrayParam(e, t, a) {
  var r = e[t];
  return r && r.list && r.list.b ? r.list.b : a;
}

var NodeValueImpl = function () {
  function e(e, t, a) {
    var r = this;
    this.node = e, this.tensorMap = t, this.context = a, this.inputs = [], this.attrs = {}, this.inputs = e.inputNames.map(function (e) {
      return r.getInput(e);
    }), null != e.rawAttrs && (this.attrs = Object.keys(e.rawAttrs).reduce(function (e, t) {
      return e[t] = r.getAttr(t), e;
    }, {}));
  }

  return e.prototype.getInput = function (e) {
    return getTensor(e, this.tensorMap, this.context);
  }, e.prototype.getAttr = function (e, t) {
    var a = this.node.rawAttrs[e];
    if (null != a.tensor) return getTensor(e, this.tensorMap, this.context);
    if (null != a.i || null != a.f) return getNumberParam(this.node.rawAttrs, e, t);
    if (null != a.s) return getStringParam(this.node.rawAttrs, e, t);
    if (null != a.b) return getBoolParam(this.node.rawAttrs, e, t);
    if (null != a.shape) return getTensorShapeParam(this.node.rawAttrs, e, t);
    if (null != a.type) return getDtypeParam(this.node.rawAttrs, e, t);

    if (null != a.list) {
      if (null != a.list.i || null != a.list.f) return getNumericArrayParam(this.node.rawAttrs, e, t);
      if (null != a.list.s) return getStringArrayParam(this.node.rawAttrs, e, t);
      if (null != a.list.shape) return getTensorShapeArrayParam(this.node.rawAttrs, e, t);
      if (null != a.list.b) return getBoolArrayParam(this.node.rawAttrs, e, t);
      if (null != a.list.type) return getDtypeArrayParam(this.node.rawAttrs, e, t);
    }

    return t;
  }, e;
}(),
    executeOp = function executeOp(e, t, a) {
  switch (e.op) {
    case "BiasAdd":
    case "AddV2":
    case "Add":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* add */ "e"])(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];

    case "AddN":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* addN */ "f"])(getParamValue("tensors", e, t, a))];

    case "FloorMod":
    case "Mod":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* mod */ "xb"])(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];

    case "Mul":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* mul */ "yb"])(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];

    case "RealDiv":
    case "Div":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* div */ "G"])(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];

    case "DivNoNan":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* divNoNan */ "H"])(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];

    case "FloorDiv":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* floorDiv */ "S"])(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];

    case "Sub":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* sub */ "nc"])(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];

    case "Minimum":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* minimum */ "wb"])(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];

    case "Maximum":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* maximum */ "tb"])(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];

    case "Pow":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* pow */ "Gb"])(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];

    case "SquaredDifference":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* squaredDifference */ "jc"])(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];

    default:
      throw TypeError("Node type " + e.op + " is not implemented");
  }
},
    executeOp$1 = function executeOp$1(e, t, a) {
  switch (e.op) {
    case "Abs":
    case "ComplexAbs":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* abs */ "b"])(getParamValue("x", e, t, a))];

    case "Acos":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* acos */ "c"])(getParamValue("x", e, t, a))];

    case "Acosh":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* acosh */ "d"])(getParamValue("x", e, t, a))];

    case "Asin":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* asin */ "k"])(getParamValue("x", e, t, a))];

    case "Asinh":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* asinh */ "l"])(getParamValue("x", e, t, a))];

    case "Atan":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* atan */ "m"])(getParamValue("x", e, t, a))];

    case "Atan2":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* atan2 */ "n"])(getParamValue("x", e, t, a), getParamValue("y", e, t, a))];

    case "Atanh":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* atanh */ "o"])(getParamValue("x", e, t, a))];

    case "Ceil":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* ceil */ "u"])(getParamValue("x", e, t, a))];

    case "Complex":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* complex */ "w"])(getParamValue("real", e, t, a), getParamValue("imag", e, t, a))];

    case "Cos":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* cos */ "C"])(getParamValue("x", e, t, a))];

    case "Cosh":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* cosh */ "D"])(getParamValue("x", e, t, a))];

    case "Elu":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* elu */ "I"])(getParamValue("x", e, t, a))];

    case "Erf":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* erf */ "L"])(getParamValue("x", e, t, a))];

    case "Exp":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* exp */ "M"])(getParamValue("x", e, t, a))];

    case "Expm1":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* expm1 */ "O"])(getParamValue("x", e, t, a))];

    case "Floor":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* floor */ "R"])(getParamValue("x", e, t, a))];

    case "Log":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* log */ "ib"])(getParamValue("x", e, t, a))];

    case "Log1p":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* log1p */ "jb"])(getParamValue("x", e, t, a))];

    case "Imag":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* imag */ "Z"])(getParamValue("x", e, t, a))];

    case "Neg":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* neg */ "Ab"])(getParamValue("x", e, t, a))];

    case "Reciprocal":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* reciprocal */ "Mb"])(getParamValue("x", e, t, a))];

    case "Real":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* real */ "Lb"])(getParamValue("x", e, t, a))];

    case "Relu":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* relu */ "Nb"])(getParamValue("x", e, t, a))];

    case "Round":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* round */ "Rb"])(getParamValue("x", e, t, a))];

    case "Selu":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* selu */ "Vb"])(getParamValue("x", e, t, a))];

    case "Sigmoid":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* sigmoid */ "Xb"])(getParamValue("x", e, t, a))];

    case "Sin":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* sin */ "Zb"])(getParamValue("x", e, t, a))];

    case "Sign":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* sign */ "Yb"])(getParamValue("x", e, t, a))];

    case "Sinh":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* sinh */ "ac"])(getParamValue("x", e, t, a))];

    case "Softplus":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* softplus */ "dc"])(getParamValue("x", e, t, a))];

    case "Sqrt":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* sqrt */ "hc"])(getParamValue("x", e, t, a))];

    case "Square":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* square */ "ic"])(getParamValue("x", e, t, a))];

    case "Tanh":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* tanh */ "qc"])(getParamValue("x", e, t, a))];

    case "Tan":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* tan */ "pc"])(getParamValue("x", e, t, a))];

    case "Relu6":
    case "ClipByValue":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* clipByValue */ "v"])(getParamValue("x", e, t, a), getParamValue("clipValueMin", e, t, a), getParamValue("clipValueMax", e, t, a))];

    case "Rsqrt":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* rsqrt */ "Sb"])(getTensor(e.inputNames[0], t, a))];

    case "Prod":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* prod */ "Ib"])(getParamValue("x", e, t, a), getParamValue("axes", e, t, a))];

    case "LeakyRelu":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* leakyRelu */ "db"])(getParamValue("x", e, t, a), getParamValue("alpha", e, t, a))];

    case "Prelu":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* prelu */ "Hb"])(getParamValue("x", e, t, a), getParamValue("alpha", e, t, a))];

    default:
      throw TypeError("Node type " + e.op + " is not implemented");
  }
},
    TensorArray = function () {
  function e(t, a, r, n, s, o, p) {
    this.name = t, this.dtype = a, this.maxSize = r, this.elementShape = n, this.identicalElementShapes = s, this.dynamicSize = o, this.clearAfterRead = p, this.tensors = [], this.closed_ = !1, this.id = e.nextId++;
  }

  return Object.defineProperty(e.prototype, "closed", {
    get: function get() {
      return this.closed_;
    },
    enumerable: !0,
    configurable: !0
  }), e.prototype.clearAndClose = function () {
    this.tensors.forEach(function (e) {
      return e.tensor.dispose();
    }), this.tensors = [], this.closed_ = !0;
  }, e.prototype.size = function () {
    return this.tensors.length;
  }, e.prototype.read = function (e) {
    if (this.closed_) throw new Error("TensorArray " + this.name + " has already been closed.");
    if (e < 0 || e >= this.tensors.length) throw new Error("Tried to read from index " + e + ", but array size is: " + this.tensors.length);
    var t = this.tensors[e];
    if (t.cleared) throw new Error("TensorArray " + this.name + ": Could not read index " + e + " twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).");
    return this.clearAfterRead && (t.cleared = !0), t.read = !0, t.tensor;
  }, e.prototype.readMany = function (e) {
    var t = this;
    return e.map(function (e) {
      return t.read(e);
    });
  }, e.prototype.write = function (e, t) {
    if (this.closed_) throw new Error("TensorArray " + this.name + " has already been closed.");
    if (e < 0 || !this.dynamicSize && e >= this.maxSize) throw new Error("Tried to write to index " + e + ", but array is not resizeable and size is: " + this.maxSize);
    var a = this.tensors[e] || {};
    if (t.dtype !== this.dtype) throw new Error("TensorArray " + this.name + ": Could not write to TensorArray index " + e + ",\n          because the value dtype is " + t.dtype + ", but TensorArray dtype is " + this.dtype + ".");
    if (0 !== this.size() || null != this.elementShape && 0 !== this.elementShape.length || (this.elementShape = t.shape), this.assertShapesMatchAllowUndefinedSize(this.elementShape, t.shape, "TensorArray " + this.name + ": Could not write to TensorArray index " + e + "."), a && a.read) throw new Error("TensorArray " + this.name + ": Could not write to TensorArray index " + e + ", because it has already been read.");
    if (a && a.written) throw new Error("TensorArray " + this.name + ": Could not write to TensorArray index " + e + ", because it has already been written.");
    a.tensor = t, a.written = !0, this.tensors[e] = a;
  }, e.prototype.writeMany = function (e, t) {
    var a = this;
    if (e.length !== t.length) throw new Error("TensorArray " + this.name + ": could not write multiple tensors,because the index size: " + e.length + " is not the same as tensors size: " + t.length + ".");
    e.forEach(function (e, r) {
      return a.write(e, t[r]);
    });
  }, e.prototype.gather = function (e, t) {
    if (t && t !== this.dtype) throw new Error("TensorArray dtype is " + this.dtype + " but gather requested dtype " + t);

    if (!e) {
      e = [];

      for (var a = 0; a < this.size(); a++) {
        e.push(a);
      }
    }

    if (0 === e.length) return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* tensor */ "rc"])([], [0].concat(this.elementShape));
    var r = this.readMany(e);
    return this.assertShapesMatchAllowUndefinedSize(this.elementShape, r[0].shape, "TensorArray shape mismatch: "), Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* stack */ "lc"])(r, 0);
  }, e.prototype.concat = function (e) {
    if (e && e !== this.dtype) throw new Error("TensorArray dtype is " + this.dtype + " but concat requested dtype " + e);
    if (0 === this.size()) return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* tensor */ "rc"])([], [0].concat(this.elementShape));

    for (var t = [], a = 0; a < this.size(); a++) {
      t.push(a);
    }

    var r = this.readMany(t);
    return this.assertShapesMatchAllowUndefinedSize(this.elementShape, r[0].shape, "TensorArray shape mismatch: tensor array shape (" + this.elementShape + ") vs first tensor shape (" + r[0].shape + ")"), Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* concat */ "x"])(r, 0);
  }, e.prototype.scatter = function (e, t) {
    if (t.dtype !== this.dtype) throw new Error("TensorArray dtype is " + this.dtype + " but tensor has dtype " + t.dtype);
    if (e.length !== t.shape[0]) throw new Error("Expected len(indices) == tensor.shape[0], but saw: " + e.length + " vs. " + t.shape[0]);
    var a = Math.max.apply(Math, e);
    if (!this.dynamicSize && a >= this.maxSize) throw new Error("Max index must be < array size (" + a + "  vs. " + this.maxSize + ")");
    this.writeMany(e, Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* unstack */ "zc"])(t, 0));
  }, e.prototype.split = function (e, t) {
    var a = this;
    if (t.dtype !== this.dtype) throw new Error("TensorArray dtype is " + this.dtype + " but tensor has dtype " + t.dtype);
    var r = 0,
        n = e.map(function (e) {
      return r += e;
    });
    if (r !== t.shape[0]) throw new Error("Expected sum of lengths to be equal to\n          tensor.shape[0], but sum of lengths is\n        " + r + ", and tensor's shape is: " + t.shape);
    if (!this.dynamicSize && e.length !== this.maxSize) throw new Error("TensorArray's size is not equal to the size of lengths (" + this.maxSize + " vs. " + e.length + "), and the TensorArray is not marked as dynamically resizeable");
    var s = 0 === r ? 0 : t.size / r,
        o = [];
    Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* tidy */ "uc"])(function () {
      t = t.reshape([1, r, s]);

      for (var p = 0; p < e.length; ++p) {
        var u = [0, 0 === p ? 0 : n[p - 1], 0],
            i = [1, e[p], s];
        o[p] = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* slice */ "bc"])(t, u, i).reshape(a.elementShape);
      }

      return o;
    });

    for (var p = [], u = 0; u < e.length; u++) {
      p[u] = u;
    }

    this.writeMany(p, o);
  }, e.prototype.assertShapesMatchAllowUndefinedSize = function (e, t, a) {
    void 0 === a && (a = ""), _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* util */ "Ac"].assert(this.shapesEqualAllowUndefinedSize(e, t), function () {
      return a + " Shapes " + e + " and " + t + " must match";
    });
  }, e.prototype.shapesEqualAllowUndefinedSize = function (e, t) {
    if (e.length !== t.length) return !1;

    for (var a = 0; a < e.length; a++) {
      if (-1 !== e[a] && -1 !== t[a] && e[a] !== t[a]) return !1;
    }

    return !0;
  }, e.nextId = 0, e;
}(),
    _this = void 0,
    executeOp$2 = function executeOp$2(e, t, a) {
  return __awaiter(_this, void 0, void 0, function () {
    var r, n, s, o, p, u, i, m, l, c, d, y, f, g, h, N, x, V, b, P, T, v, O, S, _, w, A, D, E, I, M, C, k, z, F;

    return __generator(this, function (j) {
      switch (j.label) {
        case 0:
          switch (e.op) {
            case "LoopCond":
              return [3, 1];

            case "Switch":
              return [3, 2];

            case "Merge":
              return [3, 4];

            case "Enter":
              return [3, 5];

            case "Exit":
              return [3, 6];

            case "NextIteration":
              return [3, 7];

            case "TensorArrayV3":
              return [3, 8];

            case "TensorArrayWriteV3":
              return [3, 9];

            case "TensorArrayReadV3":
              return [3, 10];

            case "TensorArrayGatherV3":
              return [3, 11];

            case "TensorArrayScatterV3":
              return [3, 12];

            case "TensorArrayConcatV3":
              return [3, 13];

            case "TensorArraySplitV3":
              return [3, 14];

            case "TensorArraySizeV3":
              return [3, 15];

            case "TensorArrayCloseV3":
              return [3, 16];
          }

          return [3, 17];

        case 1:
          return [2, [getParamValue("pred", e, t, a).clone()]];

        case 2:
          return r = getParamValue("pred", e, t, a), n = getParamValue("data", e, t, a), [4, r.data()];

        case 3:
          return [2, j.sent()[0] ? [void 0, n.clone()] : [n.clone(), void 0]];

        case 4:
          return [2, (s = e.inputNames.find(function (e) {
            return void 0 !== getTensor(e, t, a);
          })) ? [getTensor(s, t, a).clone()] : void 0];

        case 5:
          return o = getParamValue("frameName", e, t, a), p = getParamValue("tensor", e, t, a), a.enterFrame(o), [2, [p.clone()]];

        case 6:
          return u = getParamValue("tensor", e, t, a), a.exitFrame(), [2, [u.clone()]];

        case 7:
          return i = getParamValue("tensor", e, t, a), a.nextIteration(), [2, [i.clone()]];

        case 8:
          return m = getParamValue("size", e, t, a), l = getParamValue("dtype", e, t, a), c = getParamValue("elementShape", e, t, a), d = getParamValue("dynamicSize", e, t, a), y = getParamValue("clearAfterRead", e, t, a), f = getParamValue("identicalElementShapes", e, t, a), g = getParamValue("name", e, t, a), h = new TensorArray(g, l, m, c, f, d, y), a.addTensorArray(h), [2, [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* scalar */ "Tb"])(h.id), Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* scalar */ "Tb"])(1)]];

        case 9:
          return N = getParamValue("tensorArrayId", e, t, a), x = getParamValue("index", e, t, a), V = getParamValue("tensor", e, t, a), a.getTensorArray(N).write(x, V), [2, [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* scalar */ "Tb"])(1)]];

        case 10:
          return b = getParamValue("tensorArrayId", e, t, a), P = getParamValue("index", e, t, a), [2, [a.getTensorArray(b).read(P)]];

        case 11:
          return T = getParamValue("tensorArrayId", e, t, a), v = getParamValue("indices", e, t, a), O = getParamValue("dtype", e, t, a), [2, [a.getTensorArray(T).gather(v, O)]];

        case 12:
          return S = getParamValue("tensorArrayId", e, t, a), _ = getParamValue("indices", e, t, a), w = getParamValue("tensor", e, t, a), a.getTensorArray(S).scatter(_, w), [2, [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* scalar */ "Tb"])(1)]];

        case 13:
          return A = getParamValue("tensorArrayId", e, t, a), D = a.getTensorArray(A), E = getParamValue("dtype", e, t, a), [2, [D.concat(E)]];

        case 14:
          return I = getParamValue("tensorArrayId", e, t, a), M = getParamValue("tensor", e, t, a), C = getParamValue("lengths", e, t, a), a.getTensorArray(I).split(C, M), [2, [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* scalar */ "Tb"])(1)]];

        case 15:
          return k = getParamValue("tensorArrayId", e, t, a), z = a.getTensorArray(k), [2, [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* scalar */ "Tb"])(z.size(), "int32")]];

        case 16:
          return F = getParamValue("tensorArrayId", e, t, a), a.getTensorArray(F).clearAndClose(), [2, [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* scalar */ "Tb"])(0)]];

        case 17:
          throw TypeError("Node type " + e.op + " is not implemented");
      }
    });
  });
},
    executeOp$3 = function executeOp$3(e, t, a) {
  switch (e.op) {
    case "Conv1D":
      var r = getParamValue("stride", e, t, a),
          n = getParamValue("pad", e, t, a),
          s = getParamValue("dataFormat", e, t, a).toUpperCase(),
          o = getParamValue("dilation", e, t, a);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* conv1d */ "y"])(getParamValue("x", e, t, a), getParamValue("filter", e, t, a), r, n, s, o)];

    case "Conv2D":
      r = getParamValue("strides", e, t, a), n = getParamValue("pad", e, t, a), s = getParamValue("dataFormat", e, t, a).toUpperCase();
      var p = getParamValue("dilations", e, t, a);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* conv2d */ "z"])(getParamValue("x", e, t, a), getParamValue("filter", e, t, a), [r[1], r[2]], n, s, [p[1], p[2]])];

    case "_FusedConv2D":
    case "FusedDepthwiseConv2dNative":
      var u = getParamValue("fusedOps", e, t, a),
          i = u[0],
          m = u[1],
          l = "biasadd" === i,
          c = "prelu" === m,
          d = "fusedbatchnorm" === i,
          y = getParamValue("numArgs", e, t, a);

      if (l) {
        if (c && 2 !== y) throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");
        if (!c && 1 !== y) throw new Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.");
      }

      if (d) throw new Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported.");
      r = getParamValue("strides", e, t, a), n = getParamValue("pad", e, t, a), s = getParamValue("dataFormat", e, t, a).toUpperCase(), p = getParamValue("dilations", e, t, a);
      var f = getParamValue("args", e, t, a),
          g = f[0],
          h = f[1];
      return [("_FusedConv2D" === e.op ? _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* fused */ "T"].conv2d : _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* fused */ "T"].depthwiseConv2d)({
        x: getParamValue("x", e, t, a),
        filter: getParamValue("filter", e, t, a),
        strides: [r[1], r[2]],
        pad: n,
        dataFormat: s,
        dilations: [p[1], p[2]],
        bias: g,
        activation: m,
        preluActivationWeights: h
      })];

    case "Conv2DBackpropInput":
    case "Conv2dTranspose":
      var N = getParamValue("outputShape", e, t, a);
      r = getParamValue("strides", e, t, a), n = getParamValue("pad", e, t, a);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* conv2dTranspose */ "A"])(getParamValue("x", e, t, a), getParamValue("filter", e, t, a), N, [r[1], r[2]], n)];

    case "DepthwiseConv2dNative":
    case "DepthwiseConv2d":
      r = getParamValue("strides", e, t, a), n = getParamValue("pad", e, t, a), p = getParamValue("dilations", e, t, a), s = getParamValue("dataFormat", e, t, a).toUpperCase();
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* depthwiseConv2d */ "F"])(getParamValue("input", e, t, a), getParamValue("filter", e, t, a), [r[1], r[2]], n, s, [p[1], p[2]])];

    case "Conv3D":
      r = getParamValue("strides", e, t, a), n = getParamValue("pad", e, t, a), s = getParamValue("dataFormat", e, t, a).toUpperCase(), p = getParamValue("dilations", e, t, a);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* conv3d */ "B"])(getParamValue("x", e, t, a), getParamValue("filter", e, t, a), [r[1], r[2], r[3]], n, s, [p[1], p[2], p[3]])];

    case "AvgPool":
      r = getParamValue("strides", e, t, a), n = getParamValue("pad", e, t, a);
      var x = getParamValue("kernelSize", e, t, a);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* avgPool */ "p"])(getParamValue("x", e, t, a), [x[1], x[2]], [r[1], r[2]], n)];

    case "MaxPool":
      r = getParamValue("strides", e, t, a), n = getParamValue("pad", e, t, a), x = getParamValue("kernelSize", e, t, a);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* maxPool */ "qb"])(getParamValue("x", e, t, a), [x[1], x[2]], [r[1], r[2]], n)];

    case "MaxPoolWithArgmax":
      r = getParamValue("strides", e, t, a), n = getParamValue("pad", e, t, a), x = getParamValue("kernelSize", e, t, a);
      var V = getParamValue("includeBatchInIndex", e, t, a),
          b = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* maxPoolWithArgmax */ "sb"])(getParamValue("x", e, t, a), [x[1], x[2]], [r[1], r[2]], n, V);
      return [b.result, b.indexes];

    case "AvgPool3D":
      r = getParamValue("strides", e, t, a), n = getParamValue("pad", e, t, a), x = getParamValue("kernelSize", e, t, a);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* avgPool3d */ "q"])(getParamValue("x", e, t, a), [x[1], x[2], x[3]], [r[1], r[2], r[3]], n)];

    case "MaxPool3D":
      r = getParamValue("strides", e, t, a), n = getParamValue("pad", e, t, a), x = getParamValue("kernelSize", e, t, a);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* maxPool3d */ "rb"])(getParamValue("x", e, t, a), [x[1], x[2], x[3]], [r[1], r[2], r[3]], n)];

    default:
      throw TypeError("Node type " + e.op + " is not implemented");
  }
},
    executeOp$4 = function executeOp$4(e, t, a) {
  switch (e.op) {
    case "Fill":
      var r = getParamValue("shape", e, t, a),
          n = getParamValue("dtype", e, t, a),
          s = getParamValue("value", e, t, a);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* fill */ "Q"])(r, s, n)];

    case "LinSpace":
      var o = getParamValue("start", e, t, a),
          p = getParamValue("stop", e, t, a),
          u = getParamValue("num", e, t, a);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* linspace */ "gb"])(o, p, u)];

    case "Multinomial":
      var i = getParamValue("logits", e, t, a),
          m = getParamValue("numSamples", e, t, a),
          l = getParamValue("seed", e, t, a);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* multinomial */ "zb"])(i, m, l)];

    case "OneHot":
      var c = getParamValue("indices", e, t, a),
          d = getParamValue("depth", e, t, a),
          y = getParamValue("onValue", e, t, a),
          f = getParamValue("offValue", e, t, a);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* oneHot */ "Cb"])(c, d, y, f)];

    case "Ones":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* ones */ "Db"])(getParamValue("shape", e, t, a), getParamValue("dtype", e, t, a))];

    case "OnesLike":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* onesLike */ "Eb"])(getParamValue("x", e, t, a))];

    case "RandomUniform":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* randomUniform */ "Jb"])(getParamValue("shape", e, t, a), getParamValue("minval", e, t, a), getParamValue("maxval", e, t, a), getParamValue("dtype", e, t, a))];

    case "Range":
      o = getParamValue("start", e, t, a);
      var g = getParamValue("stop", e, t, a),
          h = getParamValue("step", e, t, a);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* range */ "Kb"])(o, g, h, getParamValue("dtype", e, t, a))];

    case "TruncatedNormal":
      r = getParamValue("shape", e, t, a);
      var N = getParamValue("mean", e, t, a),
          x = getParamValue("stdDev", e, t, a);
      l = getParamValue("seed", e, t, a);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* truncatedNormal */ "yc"])(r, N, x, getParamValue("dtype", e, t, a), l)];

    case "Zeros":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* zeros */ "Dc"])(getParamValue("shape", e, t, a), getParamValue("dtype", e, t, a))];

    case "ZerosLike":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* zerosLike */ "Ec"])(getParamValue("x", e, t, a))];

    default:
      throw TypeError("Node type " + e.op + " is not implemented");
  }
},
    _this$1 = void 0,
    executeOp$5 = function executeOp$5(e, t, a) {
  return __awaiter(_this$1, void 0, void 0, function () {
    var r, n, s, o, p, u, i, m;
    return __generator(this, function (l) {
      switch (l.label) {
        case 0:
          switch (e.op) {
            case "NonMaxSuppressionV5":
            case "NonMaxSuppressionV3":
            case "NonMaxSuppressionV2":
              return [3, 1];

            case "Where":
              return [3, 5];

            case "ListDiff":
              return [3, 7];
          }

          return [3, 8];

        case 1:
          return r = getParamValue("boxes", e, t, a), n = getParamValue("scores", e, t, a), s = getParamValue("maxOutputSize", e, t, a), o = getParamValue("iouThreshold", e, t, a), p = getParamValue("scoreThreshold", e, t, a), "NonMaxSuppressionV5" !== e.op ? [3, 3] : (u = getParamValue("softNmsSigma", e, t, a), [4, _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* image */ "ab"].nonMaxSuppressionWithScoreAsync(r, n, s, o, p, u)]);

        case 2:
          return [2, [(m = l.sent()).selectedIndices, m.selectedScores]];

        case 3:
          return [4, _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* image */ "ab"].nonMaxSuppressionAsync(r, n, s, o, p)];

        case 4:
          return [2, [l.sent()]];

        case 5:
          return i = getParamValue("condition", e, t, a).asType("bool"), [4, Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* whereAsync */ "Cc"])(i)];

        case 6:
          return m = [l.sent()], i.dispose(), [2, m];

        case 7:
          return [2, Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* setdiff1dAsync */ "Wb"])(getParamValue("x", e, t, a), getParamValue("y", e, t, a))];

        case 8:
          throw TypeError("Node type " + e.op + " is not implemented");
      }
    });
  });
},
    executeOp$6 = function executeOp$6(e, t, a) {
  switch (e.op) {
    case "TopKV2":
      var r = getParamValue("x", e, t, a),
          n = getParamValue("k", e, t, a),
          s = getParamValue("sorted", e, t, a),
          o = Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* topk */ "wc"])(r, n, s);
      return [o.values, o.indices];

    default:
      throw TypeError("Node type " + e.op + " is not implemented");
  }
},
    executeOp$7 = function executeOp$7(e, t, a) {
  switch (e.op) {
    case "Const":
      return t[e.name];

    case "PlaceholderWithDefault":
      var r = getParamValue("default", e, t, a);
      return [getTensor(e.name, t, a) || r];

    case "Placeholder":
      return [getTensor(e.name, t, a)];

    case "Identity":
    case "StopGradient":
    case "FakeQuantWithMinMaxVars":
      return [getParamValue("x", e, t, a).clone()];

    case "IdentityN":
      return getParamValue("x", e, t, a).map(function (e) {
        return e.clone();
      });

    case "Snapshot":
      return [getParamValue("x", e, t, a).clone()];

    case "Shape":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* tensor1d */ "sc"])(getParamValue("x", e, t, a).shape, "int32")];

    case "ShapeN":
      return getParamValue("x", e, t, a).map(function (e) {
        return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* tensor1d */ "sc"])(e.shape);
      });

    case "Size":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* scalar */ "Tb"])(getParamValue("x", e, t, a).size, "int32")];

    case "Rank":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* scalar */ "Tb"])(getParamValue("x", e, t, a).rank, "int32")];

    case "NoOp":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* scalar */ "Tb"])(1)];

    case "Print":
      var n = getParamValue("x", e, t, a),
          s = getParamValue("data", e, t, a),
          o = getParamValue("message", e, t, a),
          p = getParamValue("summarize", e, t, a);
      console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."), console.log(o);

      for (var u = 0; u < s.length; u++) {
        console.log(Array.prototype.slice.call(s[u].dataSync()).slice(0, p));
      }

      return [n];

    default:
      throw TypeError("Node type " + e.op + " is not implemented");
  }
},
    executeOp$8 = function executeOp$8(e, t, a) {
  switch (e.op) {
    case "ResizeBilinear":
      var r = getParamValue("images", e, t, a),
          n = getParamValue("size", e, t, a),
          s = getParamValue("alignCorners", e, t, a);
      return [_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* image */ "ab"].resizeBilinear(r, [n[0], n[1]], s)];

    case "ResizeNearestNeighbor":
      r = getParamValue("images", e, t, a), n = getParamValue("size", e, t, a), s = getParamValue("alignCorners", e, t, a);
      return [_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* image */ "ab"].resizeNearestNeighbor(r, [n[0], n[1]], s)];

    case "CropAndResize":
      var o = getParamValue("image", e, t, a),
          p = getParamValue("boxes", e, t, a),
          u = getParamValue("boxInd", e, t, a),
          i = getParamValue("cropSize", e, t, a),
          m = getParamValue("method", e, t, a),
          l = getParamValue("extrapolationValue", e, t, a);
      return [_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* image */ "ab"].cropAndResize(o, p, u, i, m, l)];

    default:
      throw TypeError("Node type " + e.op + " is not implemented");
  }
},
    executeOp$9 = function executeOp$9(e, t, a) {
  switch (e.op) {
    case "Equal":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* equal */ "K"])(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];

    case "NotEqual":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* notEqual */ "Bb"])(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];

    case "Greater":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* greater */ "W"])(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];

    case "GreaterEqual":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* greaterEqual */ "X"])(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];

    case "Less":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* less */ "eb"])(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];

    case "LessEqual":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* lessEqual */ "fb"])(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];

    case "LogicalAnd":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* logicalAnd */ "lb"])(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];

    case "LogicalNot":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* logicalNot */ "mb"])(getParamValue("a", e, t, a))];

    case "LogicalOr":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* logicalOr */ "nb"])(getParamValue("a", e, t, a), getParamValue("b", e, t, a))];

    case "Select":
    case "SelectV2":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* where */ "Bc"])(getParamValue("condition", e, t, a), getParamValue("a", e, t, a), getParamValue("b", e, t, a))];

    default:
      throw TypeError("Node type " + e.op + " is not implemented");
  }
},
    executeOp$10 = function executeOp$10(e, t, a) {
  switch (e.op) {
    case "BatchMatMul":
    case "BatchMatMulV2":
    case "MatMul":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* matMul */ "ob"])(getParamValue("a", e, t, a), getParamValue("b", e, t, a), getParamValue("transposeA", e, t, a), getParamValue("transposeB", e, t, a))];

    case "Transpose":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* transpose */ "xc"])(getParamValue("x", e, t, a), getParamValue("perm", e, t, a))];

    case "_FusedMatMul":
      var r = getParamValue("fusedOps", e, t, a),
          n = r[0],
          s = r[1],
          o = "biasadd" === n,
          p = "prelu" === s,
          u = getParamValue("numArgs", e, t, a);

      if (o) {
        if (p && 2 !== u) throw new Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");
        if (!p && 1 !== u) throw new Error("Fused MatMul with BiasAdd must have one extra argument: bias.");
      }

      var i = getParamValue("args", e, t, a),
          m = i[0],
          l = i[1];
      return [_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* fused */ "T"].matMul({
        a: getParamValue("a", e, t, a),
        b: getParamValue("b", e, t, a),
        transposeA: getParamValue("transposeA", e, t, a),
        transposeB: getParamValue("transposeB", e, t, a),
        bias: m,
        activation: s,
        preluActivationWeights: l
      })];

    default:
      throw TypeError("Node type " + e.op + " is not implemented");
  }
},
    executeOp$11 = function executeOp$11(e, t, a) {
  switch (e.op) {
    case "FusedBatchNorm":
    case "FusedBatchNormV2":
    case "FusedBatchNormV3":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* batchNorm */ "r"])(getParamValue("x", e, t, a), getParamValue("mean", e, t, a), getParamValue("variance", e, t, a), getParamValue("offset", e, t, a), getParamValue("scale", e, t, a), getParamValue("epsilon", e, t, a))];

    case "LRN":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* localResponseNormalization */ "hb"])(getParamValue("x", e, t, a), getParamValue("radius", e, t, a), getParamValue("bias", e, t, a), getParamValue("alpha", e, t, a), getParamValue("beta", e, t, a))];

    case "Softmax":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* softmax */ "cc"])(getParamValue("x", e, t, a))];

    case "LogSoftmax":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* logSoftmax */ "kb"])(getParamValue("x", e, t, a))];

    case "SparseToDense":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* sparseToDense */ "fc"])(getParamValue("sparseIndices", e, t, a), getParamValue("outputShape", e, t, a), getParamValue("sparseValues", e, t, a), getParamValue("defaultValue", e, t, a))];

    default:
      throw TypeError("Node type " + e.op + " is not implemented");
  }
},
    executeOp$12 = function executeOp$12(e, t, a) {
  switch (e.op) {
    case "Max":
      var r = getParamValue("axis", e, t, a),
          n = getParamValue("keepDims", e, t, a);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* max */ "pb"])(getParamValue("x", e, t, a), r, n)];

    case "Mean":
      r = getParamValue("axis", e, t, a), n = getParamValue("keepDims", e, t, a);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* mean */ "ub"])(getParamValue("x", e, t, a), r, n)];

    case "Min":
      r = getParamValue("axis", e, t, a), n = getParamValue("keepDims", e, t, a);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* min */ "vb"])(getParamValue("x", e, t, a), r, n)];

    case "Sum":
      r = getParamValue("axis", e, t, a), n = getParamValue("keepDims", e, t, a);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* sum */ "oc"])(getParamValue("x", e, t, a), r, n)];

    case "All":
      r = getParamValue("axis", e, t, a), n = getParamValue("keepDims", e, t, a);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* all */ "g"])(getParamValue("x", e, t, a), r, n)];

    case "Any":
      r = getParamValue("axis", e, t, a), n = getParamValue("keepDims", e, t, a);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* any */ "h"])(getParamValue("x", e, t, a), r, n)];

    case "ArgMax":
      r = getParamValue("axis", e, t, a);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* argMax */ "i"])(getParamValue("x", e, t, a), r)];

    case "ArgMin":
      r = getParamValue("axis", e, t, a);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* argMin */ "j"])(getParamValue("x", e, t, a), r)];

    case "Prod":
      r = getParamValue("axis", e, t, a), n = getParamValue("keepDims", e, t, a);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* prod */ "Ib"])(getParamValue("x", e, t, a), r, n)];

    default:
      throw TypeError("Node type " + e.op + " is not implemented");
  }
},
    executeOp$13 = function executeOp$13(e, t, a) {
  switch (e.op) {
    case "ConcatV2":
    case "Concat":
      var r = getParamValue("n", e, t, a),
          n = getParamValue("axis", e, t, a),
          s = getParamValue("tensors", e, t, a);
      return s = s.slice(0, r), [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* concat */ "x"])(s, n)];

    case "GatherV2":
    case "Gather":
      n = getParamValue("axis", e, t, a);
      var o = getParamValue("x", e, t, a),
          p = getParamValue("indices", e, t, a);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* gather */ "U"])(o, p.asType("int32"), n)];

    case "ReverseV2":
    case "Reverse":
      n = getParamValue("axis", e, t, a), o = getParamValue("x", e, t, a);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* reverse */ "Pb"])(o, n)];

    case "Slice":
      var u = getParamValue("begin", e, t, a),
          i = getParamValue("size", e, t, a);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* slice */ "bc"])(getParamValue("x", e, t, a), u, i)];

    case "StridedSlice":
      u = getParamValue("begin", e, t, a);
      var m = getParamValue("end", e, t, a),
          l = getParamValue("strides", e, t, a),
          c = getParamValue("beginMask", e, t, a),
          d = getParamValue("endMask", e, t, a),
          y = getParamValue("ellipsisMask", e, t, a),
          f = getParamValue("newAxisMask", e, t, a),
          g = getParamValue("shrinkAxisMask", e, t, a),
          h = getParamValue("x", e, t, a);
      if (1 === u.length && h.shape.length > 1) for (var N = 1; N < h.shape.length; N++) {
        u.push(0), m.push(h.shape[N]), l.push(l[0]);
      }
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* stridedSlice */ "mc"])(h, u, m, l, c, d, y, f, g)];

    case "Pack":
      return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* tidy */ "uc"])(function () {
        var r = getParamValue("axis", e, t, a),
            n = getParamValue("tensors", e, t, a),
            s = n[0].shape,
            o = n[0].squeeze().shape,
            p = n.map(function (e) {
          var t = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* util */ "Ac"].arraysEqual(e.shape, s);
          if (!t && !_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* util */ "Ac"].arraysEqual(e.squeeze().shape, o)) throw new Error("the input tensors shape does not match");
          return t ? e : e.reshape(s);
        });
        return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* stack */ "lc"])(p, r)];
      });

    case "Unpack":
      return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* tidy */ "uc"])(function () {
        var r = getParamValue("axis", e, t, a),
            n = getParamValue("tensor", e, t, a);
        return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* unstack */ "zc"])(n, r);
      });

    case "Tile":
      var x = getParamValue("reps", e, t, a);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* tile */ "vc"])(getParamValue("x", e, t, a), x)];

    case "Split":
    case "SplitV":
      n = getParamValue("axis", e, t, a);
      var V = getParamValue("numOrSizeSplits", e, t, a);
      return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* split */ "gc"])(getParamValue("x", e, t, a), V, n);

    case "ScatterNd":
      p = getParamValue("indices", e, t, a);
      var b = getParamValue("values", e, t, a),
          P = getParamValue("shape", e, t, a);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* scatterND */ "Ub"])(p, b, P)];

    case "GatherNd":
      var T = getParamValue("x", e, t, a);
      p = getParamValue("indices", e, t, a);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* gatherND */ "V"])(T, p)];

    case "SparseToDense":
      p = getParamValue("sparseIndices", e, t, a), P = getParamValue("outputShape", e, t, a);
      var v = getParamValue("sparseValues", e, t, a),
          O = getParamValue("defaultValue", e, t, a);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* sparseToDense */ "fc"])(p, v, P, v.dtype === O.dtype ? O : O.asType(v.dtype))];

    default:
      throw TypeError("Node type " + e.op + " is not implemented");
  }
},
    executeOp$14 = function executeOp$14(e, t, a) {
  switch (e.op) {
    case "FFT":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* fft */ "P"])(getParamValue("x", e, t, a))];

    case "IFFT":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* ifft */ "Y"])(getParamValue("x", e, t, a))];

    case "RFFT":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* rfft */ "Qb"])(getParamValue("x", e, t, a))];

    case "IRFFT":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* irfft */ "cb"])(getParamValue("x", e, t, a))];

    default:
      throw TypeError("Node type " + e.op + " is not implemented");
  }
},
    executeOp$15 = function executeOp$15(e, t, a) {
  switch (e.op) {
    case "Cast":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* cast */ "t"])(getParamValue("x", e, t, a), getParamValue("dtype", e, t, a))];

    case "ExpandDims":
      var r = getParamValue("axis", e, t, a);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* expandDims */ "N"])(getParamValue("x", e, t, a), r)];

    case "Squeeze":
      r = getParamValue("axis", e, t, a);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* squeeze */ "kc"])(getParamValue("x", e, t, a), r)];

    case "Reshape":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* reshape */ "Ob"])(getParamValue("x", e, t, a), getParamValue("shape", e, t, a))];

    case "PadV2":
    case "Pad":
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* pad */ "Fb"])(getParamValue("x", e, t, a), split$1(getParamValue("padding", e, t, a), 2), getParamValue("constantValue", e, t, a))];

    case "SpaceToBatchND":
      var n = getParamValue("blockShape", e, t, a),
          s = split$1(getParamValue("paddings", e, t, a), 2);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* spaceToBatchND */ "ec"])(getParamValue("x", e, t, a), n, s)];

    case "BatchToSpaceND":
      n = getParamValue("blockShape", e, t, a);
      var o = split$1(getParamValue("crops", e, t, a), 2);
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* batchToSpaceND */ "s"])(getParamValue("x", e, t, a), n, o)];

    case "DepthToSpace":
      var p = getParamValue("blockSize", e, t, a),
          u = getParamValue("dataFormat", e, t, a).toUpperCase();
      return [Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* depthToSpace */ "E"])(getParamValue("x", e, t, a), p, u)];

    default:
      throw TypeError("Node type " + e.op + " is not implemented");
  }
};

function executeOp$16(e, t, a) {
  var r = function (e, t, a) {
    switch (e.category) {
      case "arithmetic":
        return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* tidy */ "uc"])(function () {
          return executeOp(e, t, a);
        });

      case "basic_math":
        return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* tidy */ "uc"])(function () {
          return executeOp$1(e, t, a);
        });

      case "control":
        return executeOp$2(e, t, a);

      case "convolution":
        return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* tidy */ "uc"])(function () {
          return executeOp$3(e, t, a);
        });

      case "creation":
        return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* tidy */ "uc"])(function () {
          return executeOp$4(e, t, a);
        });

      case "dynamic":
        return executeOp$5(e, t, a);

      case "evaluation":
        return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* tidy */ "uc"])(function () {
          return executeOp$6(e, t, a);
        });

      case "image":
        return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* tidy */ "uc"])(function () {
          return executeOp$8(e, t, a);
        });

      case "graph":
        return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* tidy */ "uc"])(function () {
          return executeOp$7(e, t, a);
        });

      case "logical":
        return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* tidy */ "uc"])(function () {
          return executeOp$9(e, t, a);
        });

      case "matrices":
        return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* tidy */ "uc"])(function () {
          return executeOp$10(e, t, a);
        });

      case "normalization":
        return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* tidy */ "uc"])(function () {
          return executeOp$11(e, t, a);
        });

      case "reduction":
        return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* tidy */ "uc"])(function () {
          return executeOp$12(e, t, a);
        });

      case "slice_join":
        return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* tidy */ "uc"])(function () {
          return executeOp$13(e, t, a);
        });

      case "spectral":
        return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* tidy */ "uc"])(function () {
          return executeOp$14(e, t, a);
        });

      case "transformation":
        return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* tidy */ "uc"])(function () {
          return executeOp$15(e, t, a);
        });

      case "custom":
        var r = getRegisteredOp(e.op);
        if (r && r.customExecutor) return r.customExecutor(new NodeValueImpl(e, t, a));
        throw TypeError("Custom op " + e.op + " is not registered.");

      default:
        throw TypeError("Unknown op '" + e.op + "'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()");
    }
  }(e, t, a);

  return r instanceof Promise ? r.then(function (e) {
    return [].concat(e);
  }) : [].concat(r);
}

var ExecutionContext = function () {
  function e(e, t) {
    this.weightMap = e, this.tensorArrayMap = t, this.rootContext = {
      id: 0,
      frameName: "",
      iterationId: 0
    }, this.contexts = [this.rootContext], this.lastId = 0, this.generateCurrentContextIds();
  }

  return e.prototype.newFrame = function (e, t) {
    return {
      id: e,
      frameName: t,
      iterationId: 0
    };
  }, Object.defineProperty(e.prototype, "currentContext", {
    get: function get() {
      return this.contexts;
    },
    set: function set(e) {
      this.contexts !== e && (this.contexts = e, this.generateCurrentContextIds());
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e.prototype, "currentContextId", {
    get: function get() {
      return this._currentContextIds[0];
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e.prototype, "currentContextIds", {
    get: function get() {
      return this._currentContextIds;
    },
    enumerable: !0,
    configurable: !0
  }), e.prototype.generateCurrentContextIds = function () {
    for (var e = [], t = 0; t < this.contexts.length - 1; t++) {
      var a = this.contexts.slice(0, this.contexts.length - t);
      e.push(this.contextIdforContexts(a));
    }

    e.push(""), this._currentContextIds = e;
  }, e.prototype.contextIdforContexts = function (e) {
    return e ? e.map(function (e) {
      return 0 === e.id && 0 === e.iterationId ? "" : e.frameName + "-" + e.iterationId;
    }).join("/") : "";
  }, e.prototype.enterFrame = function (e) {
    this.contexts && (this.lastId++, this.contexts = this.contexts.slice(), this.contexts.push(this.newFrame(this.lastId, e)), this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)));
  }, e.prototype.exitFrame = function () {
    if (!(this.contexts && this.contexts.length > 1)) throw new Error("Cannot exit frame, the context is empty");
    this.contexts = this.contexts.slice(), this.contexts.splice(-1), this.currentContextIds.shift();
  }, e.prototype.nextIteration = function () {
    if (!(this.contexts && this.contexts.length > 0)) throw new Error("Cannot increase frame iteration, the context is empty");
    this.contexts = this.contexts.slice(), this.lastId++;
    var e = Object.assign({}, this.contexts[this.contexts.length - 1]);
    e.iterationId += 1, e.id = this.lastId, this.contexts.splice(-1, 1, e), this._currentContextIds.splice(0, 1, this.contextIdforContexts(this.contexts));
  }, e.prototype.getWeight = function (e) {
    return this.weightMap[e];
  }, e.prototype.addTensorArray = function (e) {
    this.tensorArrayMap[e.id] = e;
  }, e.prototype.getTensorArray = function (e) {
    return this.tensorArrayMap[e];
  }, e;
}();

function getExecutionSubgraph(e, t, a) {
  for (var r = new Set(), n = [], s = null, o = null, p = new Set(), u = Object.keys(e).map(function (e) {
    return parseNodeName(e)[0];
  }), i = t.slice(); i.length > 0;) {
    var m = i.pop();
    (isControlFlow(m) || isDynamicShape(m)) && null == s && (o = (s = m).children.map(function (e) {
      return e.name;
    }).filter(function (e) {
      return r.has(e);
    })), r.add(m.name), null == a[m.name] && -1 === u.indexOf(m.name) && (0 !== m.inputs.length ? m.inputs.forEach(function (e) {
      p.has(e.name) || (p.add(e.name), i.push(e));
    }) : n.push(m.name));
  }

  return {
    inputs: e,
    outputs: t,
    usedNodes: r,
    missingInputs: n,
    dynamicNode: s,
    syncInputs: o
  };
}

function getNodesInTopologicalOrder(e, t, a) {
  var r = a.usedNodes,
      n = a.inputs,
      s = [];
  Object.keys(n).map(function (e) {
    return parseNodeName(e)[0];
  }).map(function (t) {
    return e.nodes[t];
  }).forEach(function (e) {
    r.has(e.name) && s.push(e);
  }), e.weights.forEach(function (e) {
    r.has(e.name) && s.push(e);
  });

  for (var o = new Set(), p = []; s.length > 0;) {
    var u = s.pop();
    o.add(u.name), t[u.name] || p.push(u), u.children.forEach(function (e) {
      !o.has(e.name) && r.has(e.name) && e.inputs.every(function (e) {
        return o.has(e.name);
      }) && s.push(e);
    });
  }

  return p;
}

var CONTROL_FLOW_OPS = ["Switch", "Merge", "Enter", "Exit", "NextIteration"],
    DYNAMIC_SHAPE_OPS = ["NonMaxSuppressionV2", "NonMaxSuppressionV3", "NonMaxSuppressionV5", "Where"];

function isControlFlow(e) {
  return CONTROL_FLOW_OPS.indexOf(e.op) >= 0;
}

function isDynamicShape(e) {
  return DYNAMIC_SHAPE_OPS.indexOf(e.op) >= 0;
}

var GraphExecutor = function () {
  function e(e) {
    this.graph = e, this.compiledMap = new Map(), this._weightMap = {}, this.SEPERATOR = ",", this._outputs = e.outputs, this._inputs = e.inputs, this._signature = e.signature;
  }

  return Object.defineProperty(e.prototype, "weightMap", {
    get: function get() {
      return this._weightMap;
    },
    set: function set(e) {
      var t = Object.keys(e).map(function (t) {
        return e[t].map(function (e) {
          return e.id;
        });
      });
      this.weightIds = [].concat.apply([], t), this._weightMap = e;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e.prototype, "inputs", {
    get: function get() {
      return this._inputs.map(function (e) {
        return {
          name: e.name,
          shape: e.attrParams.shape ? e.attrParams.shape.value : void 0,
          dtype: e.attrParams.dtype ? e.attrParams.dtype.value : void 0
        };
      });
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e.prototype, "outputs", {
    get: function get() {
      return this._outputs.map(function (e) {
        return {
          name: e.name,
          shape: e.attrParams.shape ? e.attrParams.shape.value : void 0,
          dtype: e.attrParams.dtype ? e.attrParams.dtype.value : void 0
        };
      });
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e.prototype, "inputNodes", {
    get: function get() {
      return this._inputs.map(function (e) {
        return e.signatureKey || e.name;
      });
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e.prototype, "outputNodes", {
    get: function get() {
      return this._outputs.map(function (e) {
        return e.signatureKey || e.name;
      });
    },
    enumerable: !0,
    configurable: !0
  }), e.prototype.getCompilationKey = function (e, t) {
    var a = e.map(function (e) {
      return e.name;
    }).sort(),
        r = t.map(function (e) {
      return e.name;
    }).sort();
    return a.join(this.SEPERATOR) + "--" + r.join(this.SEPERATOR);
  }, e.prototype.compile = function (e, t) {
    var a = getExecutionSubgraph(e, t, this.weightMap),
        r = a.missingInputs,
        n = a.dynamicNode,
        s = a.syncInputs;
    if (null != n) throw new Error("This execution contains the node '" + n.name + "', which has the dynamic op '" + n.op + "'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [" + s + "]");

    if (r.length > 0) {
      var o = t.map(function (e) {
        return e.name;
      }),
          p = Object.keys(e);
      throw new Error("Cannot compute the outputs [" + o + "] from the provided inputs [" + p + "]. Missing the following inputs: [" + r + "]");
    }

    return getNodesInTopologicalOrder(this.graph, this.weightMap, a);
  }, e.prototype.execute = function (e, t) {
    var a = this;
    e = this.mapInputs(e);
    var r = Object.keys(e).sort();
    this.checkInputs(e), this.checkInputShapeAndType(e), t = this.mapOutputs(t), this.checkOutputs(t);
    var n = r.map(function (e) {
      return a.graph.nodes[parseNodeName(e)[0]];
    }),
        s = t.map(function (e) {
      return a.graph.nodes[parseNodeName(e)[0]];
    }),
        o = this.getCompilationKey(n, s),
        p = this.compiledMap.get(o);
    null == p && (p = this.compile(e, s), this.compiledMap.set(o, p));
    var u = {};
    return Object(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* tidy */ "uc"])(function () {
      var r = new ExecutionContext(a._weightMap, u),
          n = _assign({}, a.weightMap);

      Object.keys(e).forEach(function (t) {
        var a = parseNodeName(t),
            r = a[0],
            s = [];
        s[a[1]] = e[t], n[r] = s;
      });

      for (var s = a.getFrozenTensorIds(n), o = {}, i = 0; i < p.length; i++) {
        var m = p[i];

        if (!n[m.name]) {
          var l = executeOp$16(m, n, r);
          if (l instanceof Promise) throw new Error("The execution of the op '" + m.op + "' returned a promise. Please use model.executeAsync() instead.");
          n[m.name] = l, a.checkTensorForDisposal(m.name, m, n, r, s, t, o);
        }
      }

      return t.map(function (e) {
        return getTensor(e, n, r);
      });
    });
  }, e.prototype.getFrozenTensorIds = function (e) {
    var t = [].concat.apply([], Object.keys(e).map(function (t) {
      return e[t];
    }).map(function (e) {
      return e.map(function (e) {
        return e.id;
      });
    }));
    return new Set(t);
  }, e.prototype.checkTensorForDisposal = function (e, t, a, r, n, s, o) {
    "control" !== t.category && -1 === s.indexOf(e) && (a[e].forEach(function (e) {
      null != e && (o[e.id] = (o[e.id] || 0) + t.children.length);
    }), t.inputs.forEach(function (e) {
      if ("control" !== e.category) {
        var t = getTensorsForCurrentContenxt(e.name, a, r);
        null != t && t.forEach(function (e) {
          if (e && !n.has(e.id)) {
            var t = o[e.id];
            1 === t ? (e.dispose(), delete o[e.id]) : null != t && o[e.id]--;
          }
        });
      }
    }));
  }, e.prototype.executeAsync = function (e, t) {
    return __awaiter(this, void 0, void 0, function () {
      var a,
          r,
          n,
          s,
          o,
          p,
          u = this;
      return __generator(this, function (i) {
        switch (i.label) {
          case 0:
            return e = this.mapInputs(e), this.checkInputs(e), this.checkInputShapeAndType(e), t = this.mapOutputs(t), this.checkOutputs(t), a = {}, r = new ExecutionContext(this._weightMap, a), [4, this.executeWithControlFlow(e, r, t)];

          case 1:
            return n = i.sent(), s = t.map(function (e) {
              return getTensor(e, n, r);
            }), o = new Set(s.map(function (e) {
              return e.id;
            })), p = new Set(Object.keys(e).map(function (t) {
              return e[t].id;
            })), Object.keys(n).forEach(function (e) {
              n[e].forEach(function (e) {
                !e || e.isDisposed || o.has(e.id) || p.has(e.id) || -1 !== u.weightIds.indexOf(e.id) || e.dispose();
              });
            }), [2, s];
        }
      });
    });
  }, e.prototype.executeWithControlFlow = function (e, t, a) {
    return __awaiter(this, void 0, void 0, function () {
      var r,
          n,
          s,
          o,
          p,
          u,
          i,
          m,
          l,
          c,
          d,
          y,
          f,
          g,
          h,
          N,
          x = this;
      return __generator(this, function (V) {
        switch (V.label) {
          case 0:
            r = Object.keys(e), n = r.map(function (e) {
              return x.graph.nodes[parseNodeName(e)[0]];
            }), s = a.map(function (e) {
              return x.graph.nodes[parseNodeName(e)[0]];
            }), o = getExecutionSubgraph(e, s, this.weightMap), p = o.usedNodes, u = o.missingInputs, i = o.dynamicNode, m = o.syncInputs, l = n.concat(this.graph.weights).map(function (e) {
              return {
                node: e,
                contexts: t.currentContext
              };
            }), c = _assign({}, this.weightMap), Object.keys(e).forEach(function (t) {
              var a = parseNodeName(t),
                  r = a[0],
                  n = [];
              n[a[1]] = e[t], c[r] = n;
            }), d = {}, y = this.getFrozenTensorIds(c), f = {}, V.label = 1;

          case 1:
            return l.length > 0 ? (g = this.processStack(n, l, t, c, f, y, a, d, p), [4, Promise.all(g)]) : [3, 3];

          case 2:
            return V.sent(), [3, 1];

          case 3:
            if (null == i && console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead."), (h = s.filter(function (e) {
              return !isControlFlow(e) && !getTensor(e.name, c, t);
            }).map(function (e) {
              return e.name;
            })).length > 0) throw N = "", null != i && (N = "Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [" + m + "]"), new Error("Cannot compute the outputs [" + h + "] from the provided inputs [" + r + "]. Consider providing the following inputs: [" + u + "]. " + N);
            return [2, c];
        }
      });
    });
  }, e.prototype.processStack = function (e, t, a, r, n, s, o, p, u) {
    for (var i = this, m = [], l = function l() {
      var l = t.pop();
      a.currentContext = l.contexts;
      var d = "";

      if ("Enter" === l.node.op && getParamValue("isConstant", l.node, r, a) && (d = getNodeNameAndIndex(l.node.name, a)[0]), -1 === e.indexOf(l.node)) {
        var y = executeOp$16(l.node, r, a);
        d || (d = getNodeNameAndIndex(l.node.name, a)[0]);
        var f = a.currentContext;
        y instanceof Promise ? m.push(y.then(function (e) {
          return r[d] = e, a.currentContext = f, i.checkTensorForDisposal(d, l.node, r, a, s, o, p), i.processChildNodes(l.node, t, a, r, n, u), e;
        })) : (r[d] = y, c.checkTensorForDisposal(d, l.node, r, a, s, o, p), c.processChildNodes(l.node, t, a, r, n, u));
      } else c.processChildNodes(l.node, t, a, r, n, u);
    }, c = this; t.length > 0;) {
      l();
    }

    return m;
  }, e.prototype.processChildNodes = function (e, t, a, r, n, s) {
    e.children.forEach(function (e) {
      var o = getNodeNameAndIndex(e.name, a)[0];
      !n[o] && s.has(e.name) && ("Merge" === e.op ? e.inputNames.some(function (e) {
        return !!getTensor(e, r, a);
      }) && (n[o] = !0, t.push({
        contexts: a.currentContext,
        node: e
      })) : e.inputNames.every(function (e) {
        return !!getTensor(e, r, a);
      }) && (n[o] = !0, t.push({
        contexts: a.currentContext,
        node: e
      })));
    });
  }, e.prototype.dispose = function () {
    var e = this;
    Object.keys(this.weightMap).forEach(function (t) {
      return e.weightMap[t].forEach(function (e) {
        return e.dispose();
      });
    });
  }, e.prototype.checkInputShapeAndType = function (e) {
    var t = this;
    Object.keys(e).forEach(function (a) {
      var r = e[a],
          n = parseNodeName(a)[0],
          s = t.graph.nodes[n];

      if (s.attrParams.shape && s.attrParams.shape.value) {
        var o = s.attrParams.shape.value,
            p = o.length === r.shape.length && r.shape.every(function (e, t) {
          return -1 === o[t] || o[t] === e;
        });
        _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* util */ "Ac"].assert(p, function () {
          return "The shape of dict['" + s.name + "'] provided in model.execute(dict) must be [" + o + "], but was [" + r.shape + "]";
        });
      }

      s.attrParams.dtype && s.attrParams.dtype.value && _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* util */ "Ac"].assert(r.dtype === s.attrParams.dtype.value, function () {
        return "The dtype of dict['" + s.name + "'] provided in model.execute(dict) must be " + s.attrParams.dtype.value + ", but was " + r.dtype;
      });
    });
  }, e.prototype.mapInputs = function (e) {
    var t = {};

    for (var a in e) {
      if (null != this._signature && null != this._signature.inputs && null != this._signature.inputs[a]) t[this._signature.inputs[a].name] = e[a];else t[a] = e[a];
    }

    return t;
  }, e.prototype.checkInputs = function (e) {
    var t = this,
        a = Object.keys(e).filter(function (e) {
      var a = parseNodeName(e)[0];
      return null == t.graph.nodes[a];
    });
    if (a.length > 0) throw new Error("The dict provided in model.execute(dict) has keys: [" + a + "] that are not part of graph");
  }, e.prototype.mapOutputs = function (e) {
    var t = this;
    return e.map(function (e) {
      return null != t._signature && null != t._signature.outputs && null != t._signature.outputs[e] ? t._signature.outputs[e].name : e;
    }, {});
  }, e.prototype.checkOutputs = function (e) {
    var t = this;
    e.forEach(function (e) {
      var a = parseNodeName(e)[0];
      if (!t.graph.nodes[a]) throw new Error("The output '" + e + "' is not found in the graph");
    });
  }, e;
}(),
    TFHUB_SEARCH_PARAM = "?tfjs-format=file",
    DEFAULT_MODEL_NAME = "model.json",
    GraphModel = function () {
  function e(e, t) {
    void 0 === t && (t = {}), this.modelUrl = e, this.loadOptions = t, this.version = "n/a", null == t && (this.loadOptions = {});
  }

  return Object.defineProperty(e.prototype, "modelVersion", {
    get: function get() {
      return this.version;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e.prototype, "inputNodes", {
    get: function get() {
      return this.executor.inputNodes;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e.prototype, "outputNodes", {
    get: function get() {
      return this.executor.outputNodes;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e.prototype, "inputs", {
    get: function get() {
      return this.executor.inputs;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e.prototype, "outputs", {
    get: function get() {
      return this.executor.outputs;
    },
    enumerable: !0,
    configurable: !0
  }), Object.defineProperty(e.prototype, "weights", {
    get: function get() {
      return this.executor.weightMap;
    },
    enumerable: !0,
    configurable: !0
  }), e.prototype.findIOHandler = function () {
    var e = this.modelUrl;
    if (null != e.load) this.handler = e;else if (null != this.loadOptions.requestInit) this.handler = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* io */ "bb"].browserHTTPRequest(e, this.loadOptions);else {
      var t = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* io */ "bb"].getLoadHandlers(e, this.loadOptions.onProgress);
      if (0 === t.length) t.push(_tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* io */ "bb"].browserHTTPRequest(e, this.loadOptions));else if (t.length > 1) throw new Error("Found more than one (" + t.length + ") load handlers for URL '" + [e] + "'");
      this.handler = t[0];
    }
  }, e.prototype.load = function () {
    return __awaiter(this, void 0, void 0, function () {
      var e, t, a, r;
      return __generator(this, function (n) {
        switch (n.label) {
          case 0:
            if (this.findIOHandler(), null == this.handler.load) throw new Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");
            return e = this, [4, this.handler.load()];

          case 1:
            return e.artifacts = n.sent(), t = this.artifacts.modelTopology, a = {}, null != this.artifacts.userDefinedMetadata && (a = this.artifacts.userDefinedMetadata.signature), this.version = t.versions.producer + "." + t.versions.minConsumer, r = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* io */ "bb"].decodeWeights(this.artifacts.weightData, this.artifacts.weightSpecs), this.executor = new GraphExecutor(OperationMapper.Instance.transformGraph(t, a)), this.executor.weightMap = this.convertTensorMapToTensorsMap(r), [2, !0];
        }
      });
    });
  }, e.prototype.save = function (e, t) {
    return __awaiter(this, void 0, void 0, function () {
      var t;
      return __generator(this, function (a) {
        if ("string" == typeof e) {
          if (0 === (t = _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* io */ "bb"].getSaveHandlers(e)).length) throw new Error("Cannot find any save handlers for URL '" + e + "'");
          if (t.length > 1) throw new Error("Found more than one (" + t.length + ") save handlers for URL '" + e + "'");
          e = t[0];
        }

        if (null == e.save) throw new Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");
        return [2, e.save(this.artifacts)];
      });
    });
  }, e.prototype.predict = function (e, t) {
    return this.execute(e, this.outputNodes);
  }, e.prototype.normalizeInputs = function (e) {
    if (!(e instanceof _tensorflow_tfjs_core__WEBPACK_IMPORTED_MODULE_1__[/* Tensor */ "a"] || Array.isArray(e))) return e;
    if ((e = Array.isArray(e) ? e : [e]).length !== this.inputNodes.length) throw new Error("Input tensor count mismatch,the graph model has " + this.inputNodes.length + " placeholders, while there are " + e.length + " input tensors.");
    return this.inputNodes.reduce(function (t, a, r) {
      return t[a] = e[r], t;
    }, {});
  }, e.prototype.normalizeOutputs = function (e) {
    return e = e || this.outputNodes, Array.isArray(e) ? e : [e];
  }, e.prototype.execute = function (e, t) {
    e = this.normalizeInputs(e), t = this.normalizeOutputs(t);
    var a = this.executor.execute(e, t);
    return a.length > 1 ? a : a[0];
  }, e.prototype.executeAsync = function (e, t) {
    return __awaiter(this, void 0, void 0, function () {
      var a;
      return __generator(this, function (r) {
        switch (r.label) {
          case 0:
            return e = this.normalizeInputs(e), t = this.normalizeOutputs(t), [4, this.executor.executeAsync(e, t)];

          case 1:
            return [2, (a = r.sent()).length > 1 ? a : a[0]];
        }
      });
    });
  }, e.prototype.convertTensorMapToTensorsMap = function (e) {
    return Object.keys(e).reduce(function (t, a) {
      return t[a] = [e[a]], t;
    }, {});
  }, e.prototype.dispose = function () {
    this.executor.dispose();
  }, e;
}();

function loadGraphModel(e, t) {
  return void 0 === t && (t = {}), __awaiter(this, void 0, void 0, function () {
    var a;
    return __generator(this, function (r) {
      switch (r.label) {
        case 0:
          if (null == e) throw new Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");
          return null == t && (t = {}), t.fromTFHub && null == e.load && (e.endsWith("/") || (e += "/"), e = "" + e + DEFAULT_MODEL_NAME + TFHUB_SEARCH_PARAM), [4, (a = new GraphModel(e, t)).load()];

        case 1:
          return r.sent(), [2, a];
      }
    });
  });
}

var version = "1.7.4";

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HDXh").Buffer))

/***/ }),

/***/ "uXem":
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
  d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
}), 'Description');

exports.default = _default;

/***/ }),

/***/ "uuth":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export Waypoint */
/* harmony import */ var consolidated_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("1TsT");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TOwV");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_2__);




function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

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

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}
/**
 * Attempts to parse the offset provided as a prop as a percentage. For
 * instance, if the component has been provided with the string "20%" as
 * a value of one of the offset props. If the value matches, then it returns
 * a numeric version of the prop. For instance, "20%" would become `0.2`.
 * If `str` isn't a percentage, then `undefined` will be returned.
 *
 * @param {string} str The value of an offset prop to be converted to a
 *   number.
 * @return {number|undefined} The numeric version of `str`. Undefined if `str`
 *   was not a percentage.
 */


function parseOffsetAsPercentage(str) {
  if (str.slice(-1) === '%') {
    return parseFloat(str.slice(0, -1)) / 100;
  }

  return undefined;
}
/**
 * Attempts to parse the offset provided as a prop as a pixel value. If
 * parsing fails, then `undefined` is returned. Three examples of values that
 * will be successfully parsed are:
 * `20`
 * "20px"
 * "20"
 *
 * @param {string|number} str A string of the form "{number}" or "{number}px",
 *   or just a number.
 * @return {number|undefined} The numeric version of `str`. Undefined if `str`
 *   was neither a number nor string ending in "px".
 */


function parseOffsetAsPixels(str) {
  if (!isNaN(parseFloat(str)) && isFinite(str)) {
    return parseFloat(str);
  }

  if (str.slice(-2) === 'px') {
    return parseFloat(str.slice(0, -2));
  }

  return undefined;
}
/**
 * @param {string|number} offset
 * @param {number} contextHeight
 * @return {number} A number representing `offset` converted into pixels.
 */


function computeOffsetPixels(offset, contextHeight) {
  var pixelOffset = parseOffsetAsPixels(offset);

  if (typeof pixelOffset === 'number') {
    return pixelOffset;
  }

  var percentOffset = parseOffsetAsPercentage(offset);

  if (typeof percentOffset === 'number') {
    return percentOffset * contextHeight;
  }

  return undefined;
}

var ABOVE = 'above';
var INSIDE = 'inside';
var BELOW = 'below';
var INVISIBLE = 'invisible';

function debugLog() {
  if (false) { var _console; }
}
/**
 * When an element's type is a string, it represents a DOM node with that tag name
 * https://facebook.github.io/react/blog/2015/12/18/react-components-elements-and-instances.html#dom-elements
 *
 * @param {React.element} Component
 * @return {bool} Whether the component is a DOM Element
 */


function isDOMElement(Component) {
  return typeof Component.type === 'string';
}

var errorMessage = '<Waypoint> needs a DOM element to compute boundaries. The child you passed is neither a ' + 'DOM element (e.g. <div>) nor does it use the innerRef prop.\n\n' + 'See https://goo.gl/LrBNgw for more info.';
/**
 * Raise an error if "children" is not a DOM Element and there is no ref provided to Waypoint
 *
 * @param {?React.element} children
 * @param {?HTMLElement} ref
 * @return {undefined}
 */

function ensureRefIsProvidedByChild(children, ref) {
  if (children && !isDOMElement(children) && !ref) {
    throw new Error(errorMessage);
  }
}
/**
 * @param {object} bounds An object with bounds data for the waypoint and
 *   scrollable parent
 * @return {string} The current position of the waypoint in relation to the
 *   visible portion of the scrollable parent. One of the constants `ABOVE`,
 *   `BELOW`, `INSIDE` or `INVISIBLE`.
 */


function getCurrentPosition(bounds) {
  if (bounds.viewportBottom - bounds.viewportTop === 0) {
    return INVISIBLE;
  } // top is within the viewport


  if (bounds.viewportTop <= bounds.waypointTop && bounds.waypointTop <= bounds.viewportBottom) {
    return INSIDE;
  } // bottom is within the viewport


  if (bounds.viewportTop <= bounds.waypointBottom && bounds.waypointBottom <= bounds.viewportBottom) {
    return INSIDE;
  } // top is above the viewport and bottom is below the viewport


  if (bounds.waypointTop <= bounds.viewportTop && bounds.viewportBottom <= bounds.waypointBottom) {
    return INSIDE;
  }

  if (bounds.viewportBottom < bounds.waypointTop) {
    return BELOW;
  }

  if (bounds.waypointTop < bounds.viewportTop) {
    return ABOVE;
  }

  return INVISIBLE;
}

var timeout;
var timeoutQueue = [];

function onNextTick(cb) {
  timeoutQueue.push(cb);

  if (!timeout) {
    timeout = setTimeout(function () {
      timeout = null; // Drain the timeoutQueue

      var item; // eslint-disable-next-line no-cond-assign

      while (item = timeoutQueue.shift()) {
        item();
      }
    }, 0);
  }

  var isSubscribed = true;
  return function unsubscribe() {
    if (!isSubscribed) {
      return;
    }

    isSubscribed = false;
    var index = timeoutQueue.indexOf(cb);

    if (index === -1) {
      return;
    }

    timeoutQueue.splice(index, 1);

    if (!timeoutQueue.length && timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
}

function resolveScrollableAncestorProp(scrollableAncestor) {
  // When Waypoint is rendered on the server, `window` is not available.
  // To make Waypoint easier to work with, we allow this to be specified in
  // string form and safely convert to `window` here.
  if (scrollableAncestor === 'window') {
    return global.window;
  }

  return scrollableAncestor;
}

var defaultProps = {
  debug: false,
  scrollableAncestor: undefined,
  children: undefined,
  topOffset: '0px',
  bottomOffset: '0px',
  horizontal: false,
  onEnter: function onEnter() {},
  onLeave: function onLeave() {},
  onPositionChange: function onPositionChange() {},
  fireOnRapidScroll: true
}; // Calls a function when you scroll to the element.

var Waypoint = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Waypoint, _React$PureComponent);

  var _super = _createSuper(Waypoint);

  function Waypoint(props) {
    var _this;

    _classCallCheck(this, Waypoint);

    _this = _super.call(this, props);

    _this.refElement = function (e) {
      _this._ref = e;
    };

    return _this;
  }

  _createClass(Waypoint, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!Waypoint.getWindow()) {
        return;
      } // this._ref may occasionally not be set at this time. To help ensure that
      // this works smoothly and to avoid layout thrashing, we want to delay the
      // initial execution until the next tick.


      this.cancelOnNextTick = onNextTick(function () {
        _this2.cancelOnNextTick = null;
        var _this2$props = _this2.props,
            children = _this2$props.children,
            debug = _this2$props.debug; // Berofe doing anything, we want to check that this._ref is avaliable in Waypoint

        ensureRefIsProvidedByChild(children, _this2._ref);
        _this2._handleScroll = _this2._handleScroll.bind(_this2);
        _this2.scrollableAncestor = _this2._findScrollableAncestor();

        if (false) {}

        _this2.scrollEventListenerUnsubscribe = Object(consolidated_events__WEBPACK_IMPORTED_MODULE_0__[/* addEventListener */ "a"])(_this2.scrollableAncestor, 'scroll', _this2._handleScroll, {
          passive: true
        });
        _this2.resizeEventListenerUnsubscribe = Object(consolidated_events__WEBPACK_IMPORTED_MODULE_0__[/* addEventListener */ "a"])(window, 'resize', _this2._handleScroll, {
          passive: true
        });

        _this2._handleScroll(null);
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this3 = this;

      if (!Waypoint.getWindow()) {
        return;
      }

      if (!this.scrollableAncestor) {
        // The Waypoint has not yet initialized.
        return;
      } // The element may have moved, so we need to recompute its position on the
      // page. This happens via handleScroll in a way that forces layout to be
      // computed.
      //
      // We want this to be deferred to avoid forcing layout during render, which
      // causes layout thrashing. And, if we already have this work enqueued, we
      // can just wait for that to happen instead of enqueueing again.


      if (this.cancelOnNextTick) {
        return;
      }

      this.cancelOnNextTick = onNextTick(function () {
        _this3.cancelOnNextTick = null;

        _this3._handleScroll(null);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (!Waypoint.getWindow()) {
        return;
      }

      if (this.scrollEventListenerUnsubscribe) {
        this.scrollEventListenerUnsubscribe();
      }

      if (this.resizeEventListenerUnsubscribe) {
        this.resizeEventListenerUnsubscribe();
      }

      if (this.cancelOnNextTick) {
        this.cancelOnNextTick();
      }
    }
    /**
     * Traverses up the DOM to find an ancestor container which has an overflow
     * style that allows for scrolling.
     *
     * @return {Object} the closest ancestor element with an overflow style that
     *   allows for scrolling. If none is found, the `window` object is returned
     *   as a fallback.
     */

  }, {
    key: "_findScrollableAncestor",
    value: function _findScrollableAncestor() {
      var _this$props = this.props,
          horizontal = _this$props.horizontal,
          scrollableAncestor = _this$props.scrollableAncestor;

      if (scrollableAncestor) {
        return resolveScrollableAncestorProp(scrollableAncestor);
      }

      var node = this._ref;

      while (node.parentNode) {
        node = node.parentNode;

        if (node === document.body) {
          // We've reached all the way to the root node.
          return window;
        }

        var style = window.getComputedStyle(node);
        var overflowDirec = horizontal ? style.getPropertyValue('overflow-x') : style.getPropertyValue('overflow-y');
        var overflow = overflowDirec || style.getPropertyValue('overflow');

        if (overflow === 'auto' || overflow === 'scroll' || overflow === 'overlay') {
          return node;
        }
      } // A scrollable ancestor element was not found, which means that we need to
      // do stuff on window.


      return window;
    }
    /**
     * @param {Object} event the native scroll event coming from the scrollable
     *   ancestor, or resize event coming from the window. Will be undefined if
     *   called by a React lifecyle method
     */

  }, {
    key: "_handleScroll",
    value: function _handleScroll(event) {
      if (!this._ref) {
        // There's a chance we end up here after the component has been unmounted.
        return;
      }

      var bounds = this._getBounds();

      var currentPosition = getCurrentPosition(bounds);
      var previousPosition = this._previousPosition;
      var _this$props2 = this.props,
          debug = _this$props2.debug,
          onPositionChange = _this$props2.onPositionChange,
          onEnter = _this$props2.onEnter,
          onLeave = _this$props2.onLeave,
          fireOnRapidScroll = _this$props2.fireOnRapidScroll;

      if (false) {} // Save previous position as early as possible to prevent cycles


      this._previousPosition = currentPosition;

      if (previousPosition === currentPosition) {
        // No change since last trigger
        return;
      }

      var callbackArg = {
        currentPosition: currentPosition,
        previousPosition: previousPosition,
        event: event,
        waypointTop: bounds.waypointTop,
        waypointBottom: bounds.waypointBottom,
        viewportTop: bounds.viewportTop,
        viewportBottom: bounds.viewportBottom
      };
      onPositionChange.call(this, callbackArg);

      if (currentPosition === INSIDE) {
        onEnter.call(this, callbackArg);
      } else if (previousPosition === INSIDE) {
        onLeave.call(this, callbackArg);
      }

      var isRapidScrollDown = previousPosition === BELOW && currentPosition === ABOVE;
      var isRapidScrollUp = previousPosition === ABOVE && currentPosition === BELOW;

      if (fireOnRapidScroll && (isRapidScrollDown || isRapidScrollUp)) {
        // If the scroll event isn't fired often enough to occur while the
        // waypoint was visible, we trigger both callbacks anyway.
        onEnter.call(this, {
          currentPosition: INSIDE,
          previousPosition: previousPosition,
          event: event,
          waypointTop: bounds.waypointTop,
          waypointBottom: bounds.waypointBottom,
          viewportTop: bounds.viewportTop,
          viewportBottom: bounds.viewportBottom
        });
        onLeave.call(this, {
          currentPosition: currentPosition,
          previousPosition: INSIDE,
          event: event,
          waypointTop: bounds.waypointTop,
          waypointBottom: bounds.waypointBottom,
          viewportTop: bounds.viewportTop,
          viewportBottom: bounds.viewportBottom
        });
      }
    }
  }, {
    key: "_getBounds",
    value: function _getBounds() {
      var _this$props3 = this.props,
          horizontal = _this$props3.horizontal,
          debug = _this$props3.debug;

      var _this$_ref$getBoundin = this._ref.getBoundingClientRect(),
          left = _this$_ref$getBoundin.left,
          top = _this$_ref$getBoundin.top,
          right = _this$_ref$getBoundin.right,
          bottom = _this$_ref$getBoundin.bottom;

      var waypointTop = horizontal ? left : top;
      var waypointBottom = horizontal ? right : bottom;
      var contextHeight;
      var contextScrollTop;

      if (this.scrollableAncestor === window) {
        contextHeight = horizontal ? window.innerWidth : window.innerHeight;
        contextScrollTop = 0;
      } else {
        contextHeight = horizontal ? this.scrollableAncestor.offsetWidth : this.scrollableAncestor.offsetHeight;
        contextScrollTop = horizontal ? this.scrollableAncestor.getBoundingClientRect().left : this.scrollableAncestor.getBoundingClientRect().top;
      }

      if (false) {}

      var _this$props4 = this.props,
          bottomOffset = _this$props4.bottomOffset,
          topOffset = _this$props4.topOffset;
      var topOffsetPx = computeOffsetPixels(topOffset, contextHeight);
      var bottomOffsetPx = computeOffsetPixels(bottomOffset, contextHeight);
      var contextBottom = contextScrollTop + contextHeight;
      return {
        waypointTop: waypointTop,
        waypointBottom: waypointBottom,
        viewportTop: contextScrollTop + topOffsetPx,
        viewportBottom: contextBottom - bottomOffsetPx
      };
    }
    /**
     * @return {Object}
     */

  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var children = this.props.children;

      if (!children) {
        // We need an element that we can locate in the DOM to determine where it is
        // rendered relative to the top of its context.
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          ref: this.refElement,
          style: {
            fontSize: 0
          }
        });
      }

      if (isDOMElement(children) || Object(react_is__WEBPACK_IMPORTED_MODULE_2__["isForwardRef"])(children)) {
        var ref = function ref(node) {
          _this4.refElement(node);

          if (children.ref) {
            if (typeof children.ref === 'function') {
              children.ref(node);
            } else {
              children.ref.current = node;
            }
          }
        };

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
          ref: ref
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
        innerRef: this.refElement
      });
    }
  }]);

  return Waypoint;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent);

if (false) {}

Waypoint.above = ABOVE;
Waypoint.below = BELOW;
Waypoint.inside = INSIDE;
Waypoint.invisible = INVISIBLE;

Waypoint.getWindow = function () {
  if (typeof window !== 'undefined') {
    return window;
  }

  return undefined;
};

Waypoint.defaultProps = defaultProps;
Waypoint.displayName = 'Waypoint';

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("yLpj")))

/***/ }),

/***/ "wClv":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hexToRgb = hexToRgb;
exports.rgbToHex = rgbToHex;
exports.hslToRgb = hslToRgb;
exports.decomposeColor = decomposeColor;
exports.recomposeColor = recomposeColor;
exports.getContrastRatio = getContrastRatio;
exports.getLuminance = getLuminance;
exports.emphasize = emphasize;
exports.fade = fade;
exports.darken = darken;
exports.lighten = lighten;

var _utils = __webpack_require__("5UwM");
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
    throw new Error( false ? undefined : (0, _utils.formatMuiErrorMessage)(3, color));
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

/***/ }),

/***/ "xwqs":
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
  d: "M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"
}), 'QuestionAnswer');

exports.default = _default;

/***/ }),

/***/ "y9eO":
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
  d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
}), 'Email');

exports.default = _default;

/***/ }),

/***/ "yGk4":
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__("Cwc5"),
    root = __webpack_require__("Kz5y");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "zoYe":
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__("nmnc"),
    arrayMap = __webpack_require__("eUgh"),
    isArray = __webpack_require__("Z0cm"),
    isSymbol = __webpack_require__("/9aa");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ })

}]);
//# sourceMappingURL=component---src-pages-index-js-b6b28ff52b9dd0601c00.js.map