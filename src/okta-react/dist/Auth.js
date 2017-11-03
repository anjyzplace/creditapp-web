'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*
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

var _oktaAuthJs = require('@okta/okta-auth-js');

var _oktaAuthJs2 = _interopRequireDefault(_oktaAuthJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var containsAuthTokens = /id_token|access_token|code/;

var Auth = function () {
  function Auth(config) {
    _classCallCheck(this, Auth);

    this._oktaAuth = new _oktaAuthJs2.default({
      url: config.issuer.split('/oauth2/')[0],
      clientId: config.client_id,
      issuer: config.issuer,
      redirectUri: config.redirect_uri
    });
    this._config = config;
    this._history = config.history;

    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getUser = this.getUser.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  _createClass(Auth, [{
    key: 'handleAuthentication',
    value: async function handleAuthentication() {
      var tokens = await this._oktaAuth.token.parseFromUrl();
      tokens = Array.isArray(tokens) ? tokens : [tokens];
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = tokens[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var token = _step.value;

          if (token.idToken) {
            this._oktaAuth.tokenManager.add('idToken', token);
          } else if (token.accessToken) {
            this._oktaAuth.tokenManager.add('accessToken', token);
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: 'isAuthenticated',
    value: async function isAuthenticated() {
      // If there could be tokens in the url
      if (location && location.hash && containsAuthTokens.test(location.hash)) return null;
      return !!(await this.getAccessToken()) || !!(await this.getIdToken());
    }
  }, {
    key: 'getUser',
    value: async function getUser() {
      var accessToken = this._oktaAuth.tokenManager.get('accessToken');
      return accessToken ? this._oktaAuth.token.getUserInfo(accessToken) : undefined;
    }
  }, {
    key: 'getIdToken',
    value: async function getIdToken() {
      var idToken = this._oktaAuth.tokenManager.get('idToken');
      return idToken ? idToken.idToken : undefined;
    }
  }, {
    key: 'getAccessToken',
    value: async function getAccessToken() {
      var accessToken = this._oktaAuth.tokenManager.get('accessToken');
      return accessToken ? accessToken.accessToken : undefined;
    }
  }, {
    key: 'login',
    value: async function login() {
      localStorage.setItem('secureRouterReferrerPath', this._history.location.pathname);
      if (this._config.onAuthRequired) {
        var auth = this;
        var history = this._history;
        return this._config.onAuthRequired({ auth: auth, history: history });
      }
      await this.redirect();
    }
  }, {
    key: 'logout',
    value: async function logout() {
      this._oktaAuth.tokenManager.clear();
      await this._oktaAuth.signOut();
      this._history.push('/');
    }
  }, {
    key: 'redirect',
    value: async function redirect() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          sessionToken = _ref.sessionToken;

      this._oktaAuth.token.getWithRedirect({
        responseType: this._config.response_type || ['id_token', 'token'],
        scopes: this._config.scope || ['openid', 'email', 'profile'],
        sessionToken: sessionToken
      });

      // return a promise that doesn't terminate so nothing
      // happens after setting window.location
      return new Promise(function (resolve, reject) {});
    }
  }]);

  return Auth;
}();

exports.default = Auth;
;