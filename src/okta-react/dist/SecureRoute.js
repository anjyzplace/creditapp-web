'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _withAuth = require('./withAuth');

var _withAuth2 = _interopRequireDefault(_withAuth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
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
    value: async function checkAuthentication() {
      var authenticated = await this.props.auth.isAuthenticated();
      if (authenticated !== this.state.authenticated) {
        this.setState({ authenticated: authenticated });
      }
    }
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