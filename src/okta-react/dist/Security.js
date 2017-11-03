'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; /*
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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Auth = require('./Auth');

var _Auth2 = _interopRequireDefault(_Auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _reactRouter.withRouter)((_temp = _class = function (_Component) {
  _inherits(Security, _Component);

  function Security(props) {
    _classCallCheck(this, Security);

    var _this = _possibleConstructorReturn(this, (Security.__proto__ || Object.getPrototypeOf(Security)).call(this, props));

    _this.auth = new _Auth2.default(props);
    return _this;
  }

  _createClass(Security, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        auth: this.auth
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.props.children
      );
    }
  }]);

  return Security;
}(_react.Component), _class.childContextTypes = {
  auth: _propTypes2.default.object.isRequired
}, _temp));