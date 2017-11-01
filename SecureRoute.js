'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _withAuth = require('./withAuth');

var _withAuth2 = _interopRequireDefault(_withAuth);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
} /*
   * Copyright (c) 2017, Okta, Inc. and/or its affiliates. All rights reserved.
   * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
   *
   * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
   * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   *
   * See the License for the specific language governing permissions and limitations under the License.
   */

exports.default = (0, _withAuth2.default)(function (_Component) {
  _inherits(SecureRoute, _Component);

  function SecureRoute(props) {
    _classCallCheck(this, SecureRoute);

    var _this = _possibleConstructorReturn(this, (SecureRoute.__proto__ || Object.getPrototypeOf(SecureRoute)).call(this, props));

    _this.state = {
      authenticated: null
    };

    _this.checkAuthentication = _this.checkAuthentication.bind(_this);
    _this.renderWrapper = _this.renderWrapper.bind(_this);

    _this.checkAuthentication();
    return _this;
  }

  _createClass(SecureRoute, [{
    key: 'checkAuthentication',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var authenticated;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.props.auth.isAuthenticated();

              case 2:
                authenticated = _context.sent;

                if (authenticated !== this.state.authenticated) {
                  this.setState({ authenticated: authenticated });
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function checkAuthentication() {
        return _ref.apply(this, arguments);
      }

      return checkAuthentication;
    }()
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.checkAuthentication();
    }
  }, {
    key: 'renderWrapper',
    value: function renderWrapper(renderProps) {
      if (this.state.authenticated === null) {
        return null;
      }

      if (!this.state.authenticated) {
        this.props.auth.login();
        return null;
      }

      var C = this.props.component;
      return _react2.default.createElement(C, renderProps);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactRouter.Route, { path: this.props.path, render: this.renderWrapper });
    }
  }]);

  return SecureRoute;
}(_react.Component));