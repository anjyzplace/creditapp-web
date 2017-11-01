'use strict';

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
}(); /*
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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

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
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var tokens, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, token;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._oktaAuth.token.parseFromUrl();

              case 2:
                tokens = _context.sent;

                tokens = Array.isArray(tokens) ? tokens : [tokens];
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 7;

                for (_iterator = tokens[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  token = _step.value;


                  if (token.idToken) {
                    this._oktaAuth.tokenManager.add('idToken', token);
                  } else if (token.accessToken) {
                    this._oktaAuth.tokenManager.add('accessToken', token);
                  }
                }
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](7);

                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 15:
                _context.prev = 15;
                _context.prev = 16;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 18:
                _context.prev = 18;

                if (!_didIteratorError) {
                  _context.next = 21;
                  break;
                }

                throw _iteratorError;

              case 21:
                return _context.finish(18);

              case 22:
                return _context.finish(15);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[7, 11, 15, 23], [16,, 18, 22]]);
      }));

      function handleAuthentication() {
        return _ref2.apply(this, arguments);
      }

      return handleAuthentication;
    }()
  }, {
    key: 'isAuthenticated',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(location && location.hash && containsAuthTokens.test(location.hash))) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", null);

              case 2:
                _context2.next = 4;
                return this.getAccessToken();

              case 4:
                _context2.t0 = !!_context2.sent;

                if (_context2.t0) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 8;
                return this.getIdToken();

              case 8:
                _context2.t0 = !!_context2.sent;

              case 9:
                return _context2.abrupt("return", _context2.t0);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function isAuthenticated() {
        return _ref3.apply(this, arguments);
      }

      return isAuthenticated;
    }()
  }, {
    key: 'getUser',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var accessToken;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                accessToken = this._oktaAuth.tokenManager.get('accessToken');
                return _context3.abrupt("return", accessToken ? this._oktaAuth.token.getUserInfo(accessToken) : undefined);

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getUser() {
        return _ref4.apply(this, arguments);
      }

      return getUser;
    }()
  }, {
    key: 'getIdToken',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var idToken;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                idToken = this._oktaAuth.tokenManager.get('idToken');
                return _context4.abrupt("return", idToken ? idToken.idToken : undefined);

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getIdToken() {
        return _ref5.apply(this, arguments);
      }

      return getIdToken;
    }()
  }, {
    key: 'getAccessToken',
    value: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
        var accessToken;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                accessToken = this._oktaAuth.tokenManager.get('accessToken');
                return _context5.abrupt("return", accessToken ? accessToken.accessToken : undefined);

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function getAccessToken() {
        return _ref6.apply(this, arguments);
      }

      return getAccessToken;
    }()
  }, {
    key: 'login',
    value: function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
        var auth, history;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                localStorage.setItem('secureRouterReferrerPath', this._history.location.pathname);

                if (!this._config.onAuthRequired) {
                  _context6.next = 5;
                  break;
                }

                auth = this;
                history = this._history;
                return _context6.abrupt("return", this._config.onAuthRequired({ auth: auth, history: history }));

              case 5:
                _context6.next = 7;
                return this.redirect();

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function login() {
        return _ref7.apply(this, arguments);
      }

      return login;
    }()
  }, {
    key: 'logout',
    value: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this._oktaAuth.tokenManager.clear();
                _context7.next = 3;
                return this._oktaAuth.signOut();

              case 3:
                this._history.push('/');

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function logout() {
        return _ref8.apply(this, arguments);
      }

      return logout;
    }()
  }, {
    key: 'redirect',
    value: function () {
      var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
        var _ref,
            sessionToken,
            _args8 = arguments;

        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _ref = _args8.length > 0 && _args8[0] !== undefined ? _args8[0] : {}, sessionToken = _ref.sessionToken;


                this._oktaAuth.token.getWithRedirect({
                  responseType: this._config.response_type || ['id_token', 'token'],
                  scopes: this._config.scope || ['openid', 'email', 'profile'],
                  sessionToken: sessionToken
                });

                // return a promise that doesn't terminate so nothing
                // happens after setting window.location
                return _context8.abrupt("return", new Promise(function (resolve, reject) {}));

              case 3:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function redirect() {
        return _ref9.apply(this, arguments);
      }

      return redirect;
    }()
  }]);

  return Auth;
}();

exports.default = Auth;
;