webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Auth/Auth.jsx":
/*!**********************************!*\
  !*** ./components/Auth/Auth.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/api */ \"./utils/api.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-google-login */ \"./node_modules/react-google-login/dist/google-login.js\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _authStyle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authStyle */ \"./components/Auth/authStyle.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/fahrasnurhidayat/Documents/Fahras/Public/Portofolio/ibid-fe-test/components/Auth/Auth.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar Auth = function Auth() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    email: '',\n    password: ''\n  }),\n      form = _useState[0],\n      setForm = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    message: '',\n    status: null\n  }),\n      isSuccess = _useState2[0],\n      setSuccess = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"isEmpty\"])(window.localStorage.getItem('isToken'))) {\n      router.push('/');\n    }\n  }, []);\n\n  var responseGoogle = function responseGoogle(response) {\n    var data = {\n      account_id: response.profileObj.googleId,\n      type: 'google',\n      name: response.profileObj.name,\n      email: response.profileObj.email,\n      imageUrl: response.profileObj.imageUrl\n    };\n    console.log(response);\n  };\n\n  var onSubmit = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {\n      var response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n              _context.prev = 1;\n              _context.next = 4;\n              return Object(_utils_api__WEBPACK_IMPORTED_MODULE_4__[\"apiPostAuth\"])(\"https://reqres.in/api\".concat(router.pathname), form);\n\n            case 4:\n              response = _context.sent;\n              window.localStorage.setItem('isToken', response.data.token);\n\n              if (response.status === 200) {\n                router.pathname === '/login' ? setSuccess({\n                  status: true,\n                  message: 'Berhasil masuk!'\n                }) : setSuccess({\n                  status: true,\n                  message: 'Berhasil daftar!'\n                });\n                setTimeout(function () {\n                  setSuccess({\n                    status: true,\n                    message: ''\n                  });\n                  router.push('/');\n                }, 2000);\n              }\n\n              _context.next = 12;\n              break;\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](1);\n\n              if (_context.t0.response.status === 400) {\n                router.pathname === '/login' ? setSuccess({\n                  status: false,\n                  message: 'Email atau Password salah!'\n                }) : setSuccess({\n                  status: false,\n                  message: 'Gagal mendaftar!'\n                });\n                setTimeout(function () {\n                  setSuccess({\n                    status: false,\n                    message: ''\n                  });\n                }, 5000);\n              }\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 9]]);\n    }));\n\n    return function onSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_9__[\"Container\"], {\n    className: \"container-sm\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 5\n    }\n  }, __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_9__[\"AuthCard\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 7\n    }\n  }, router.pathname === '/login' ? __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_9__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 42\n    }\n  }, \"Masuk\") : __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_9__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 65\n    }\n  }, \"Daftar\"), router.pathname === '/login' ? __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(react_google_login__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    clientId: \"1036312684002-9r1ei9mim483alvglj88bovq1prufg1i.apps.googleusercontent.com\",\n    buttonText: \"Masuk dengan Google\",\n    onSuccess: responseGoogle,\n    onFailure: responseGoogle,\n    className: \"google-btn\",\n    cookiePolicy: 'single_host_origin',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }), __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_9__[\"Divider\"], {\n    className: \"hr-label\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 15\n    }\n  }, \"atau\"))) : null, __jsx(\"form\", {\n    onSubmit: onSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"input-group mb-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    className: \"form-control\",\n    placeholder: \"Email\",\n    maxLength: 30,\n    \"aria-label\": \"Email\",\n    \"aria-describedby\": \"basic-addon1\",\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        email: e.target.value\n      }));\n    },\n    required: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    className: \"input-group mb-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"password\",\n    className: \"form-control\",\n    placeholder: \"Kata sandi\",\n    maxLength: 30,\n    \"aria-label\": \"Password\",\n    \"aria-describedby\": \"basic-addon1\",\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        password: e.target.value\n      }));\n    },\n    required: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 13\n    }\n  })), !Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"isEmpty\"])(isSuccess.message) && __jsx(\"div\", {\n    className: \"alert \".concat(isSuccess.status ? 'alert-success' : 'alert-danger', \" alert-dismissible fade show\"),\n    role: \"alert\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 13\n    }\n  }, Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"capitalize\"])(isSuccess.message)), __jsx(\"div\", {\n    className: \"btn-group mb-3\",\n    role: \"group\",\n    \"aria-label\": \"Basic example\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 116,\n      columnNumber: 13\n    }\n  }, router.pathname === '/login' ? 'Masuk' : 'Daftar')), router.pathname === '/login' ? __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_9__[\"LinkAuth\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 44\n    }\n  }, \"Belum punya akun? \", __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    href: \"/register\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 72\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 95\n    }\n  }, \"Daftar\"))) : __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_9__[\"LinkAuth\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 129\n    }\n  }, \"Sudah punya akun? \", __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    href: \"/login\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 157\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 177\n    }\n  }, \"Masuk\"))))));\n};\n\n_s(Auth, \"oe5XOHZxO998ng9LYVm4Lr0Km6E=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = Auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);\n\nvar _c;\n\n$RefreshReg$(_c, \"Auth\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRoL0F1dGguanN4PzJjMmMiXSwibmFtZXMiOlsiQXV0aCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImZvcm0iLCJzZXRGb3JtIiwibWVzc2FnZSIsInN0YXR1cyIsImlzU3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJ1c2VFZmZlY3QiLCJpc0VtcHR5Iiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInB1c2giLCJyZXNwb25zZUdvb2dsZSIsInJlc3BvbnNlIiwiZGF0YSIsImFjY291bnRfaWQiLCJwcm9maWxlT2JqIiwiZ29vZ2xlSWQiLCJ0eXBlIiwibmFtZSIsImltYWdlVXJsIiwiY29uc29sZSIsImxvZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFwaVBvc3RBdXRoIiwicGF0aG5hbWUiLCJzZXRJdGVtIiwidG9rZW4iLCJzZXRUaW1lb3V0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiY2FwaXRhbGl6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRGlCLGtCQUVPQyxzREFBUSxDQUFDO0FBQy9CQyxTQUFLLEVBQUUsRUFEd0I7QUFFL0JDLFlBQVEsRUFBRTtBQUZxQixHQUFELENBRmY7QUFBQSxNQUVWQyxJQUZVO0FBQUEsTUFFSkMsT0FGSTs7QUFBQSxtQkFNZUosc0RBQVEsQ0FBQztBQUN2Q0ssV0FBTyxFQUFFLEVBRDhCO0FBRXZDQyxVQUFNLEVBQUU7QUFGK0IsR0FBRCxDQU52QjtBQUFBLE1BTVZDLFNBTlU7QUFBQSxNQU1DQyxVQU5EOztBQVdqQkMseURB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QUE7QUFBQTtBQUFBO0FBQUEsMkJBQTRCLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBdkIsQ0FBNUIsQ0FBL0IsR0FBb0gsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUE0QixNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXBCLENBQTVCLENBaEN4SCxDQWxCRixDQURGLENBREY7QUF5REQsQ0E5R0Q7O0dBQU1qQyxJO1VBQ1dFLHFEOzs7S0FEWEYsSTtBQWdIU0EsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0F1dGgvQXV0aC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcGlQb3N0QXV0aCB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaSdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgaXNFbXB0eSwgY2FwaXRhbGl6ZSB9IGZyb20gJ2xvZGFzaCdcbmltcG9ydCBHb29nbGVMb2dpbiBmcm9tICdyZWFjdC1nb29nbGUtbG9naW4nXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQge1xuICBDb250YWluZXIsIEF1dGhDYXJkLFxuICBUaXRsZSwgRGl2aWRlcixcbiAgTGlua0F1dGgsXG59IGZyb20gJy4vYXV0aFN0eWxlJ1xuXG5jb25zdCBBdXRoID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7XG4gICAgZW1haWw6ICcnLFxuICAgIHBhc3N3b3JkOiAnJyxcbiAgfSlcbiAgY29uc3QgW2lzU3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZSh7XG4gICAgbWVzc2FnZTogJycsXG4gICAgc3RhdHVzOiBudWxsLFxuICB9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc0VtcHR5KHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXNUb2tlbicpKSkge1xuICAgICAgcm91dGVyLnB1c2goJy8nKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgY29uc3QgcmVzcG9uc2VHb29nbGUgPSAocmVzcG9uc2UpID0+IHtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgYWNjb3VudF9pZDogcmVzcG9uc2UucHJvZmlsZU9iai5nb29nbGVJZCxcbiAgICAgIHR5cGU6ICdnb29nbGUnLFxuICAgICAgbmFtZTogcmVzcG9uc2UucHJvZmlsZU9iai5uYW1lLFxuICAgICAgZW1haWw6IHJlc3BvbnNlLnByb2ZpbGVPYmouZW1haWwsXG4gICAgICBpbWFnZVVybDogcmVzcG9uc2UucHJvZmlsZU9iai5pbWFnZVVybCxcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgfVxuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpUG9zdEF1dGgoYGh0dHBzOi8vcmVxcmVzLmluL2FwaSR7cm91dGVyLnBhdGhuYW1lfWAsIGZvcm0pXG5cbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXNUb2tlbicsIHJlc3BvbnNlLmRhdGEudG9rZW4pXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSAnL2xvZ2luJyA/IHNldFN1Y2Nlc3MoeyBzdGF0dXM6IHRydWUsIG1lc3NhZ2U6J0Jlcmhhc2lsIG1hc3VrIScgfSkgOiBzZXRTdWNjZXNzKHsgc3RhdHVzOiB0cnVlLCBtZXNzYWdlOiAnQmVyaGFzaWwgZGFmdGFyIScgfSlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0U3VjY2Vzcyh7IHN0YXR1czogdHJ1ZSwgbWVzc2FnZTogJycgfSlcbiAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgICAgIH0sIDIwMDApXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xuICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09ICcvbG9naW4nID8gc2V0U3VjY2Vzcyh7IHN0YXR1czogZmFsc2UsIG1lc3NhZ2U6ICdFbWFpbCBhdGF1IFBhc3N3b3JkIHNhbGFoIScgfSkgOiBzZXRTdWNjZXNzKHsgc3RhdHVzOiBmYWxzZSwgbWVzc2FnZTogJ0dhZ2FsIG1lbmRhZnRhciEnIH0pXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNldFN1Y2Nlc3MoeyBzdGF0dXM6IGZhbHNlLCBtZXNzYWdlOiAnJyB9KVxuICAgICAgICB9LCA1MDAwKVxuICAgICAgfVxuICAgIH0gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwiY29udGFpbmVyLXNtXCI+XG4gICAgICA8QXV0aENhcmQ+XG4gICAgICAgIHsgcm91dGVyLnBhdGhuYW1lID09PSAnL2xvZ2luJyA/IDxUaXRsZT5NYXN1azwvVGl0bGU+IDogPFRpdGxlPkRhZnRhcjwvVGl0bGU+IH1cbiAgICAgICAge1xuICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gJy9sb2dpbidcbiAgICAgICAgICA/IDw+XG4gICAgICAgICAgICA8R29vZ2xlTG9naW5cbiAgICAgICAgICAgICAgY2xpZW50SWQ9XCIxMDM2MzEyNjg0MDAyLTlyMWVpOW1pbTQ4M2Fsdmdsajg4Ym92cTFwcnVmZzFpLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCJcbiAgICAgICAgICAgICAgYnV0dG9uVGV4dD1cIk1hc3VrIGRlbmdhbiBHb29nbGVcIlxuICAgICAgICAgICAgICBvblN1Y2Nlc3M9e3Jlc3BvbnNlR29vZ2xlfVxuICAgICAgICAgICAgICBvbkZhaWx1cmU9e3Jlc3BvbnNlR29vZ2xlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnb29nbGUtYnRuXCJcbiAgICAgICAgICAgICAgY29va2llUG9saWN5PXsnc2luZ2xlX2hvc3Rfb3JpZ2luJ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RGl2aWRlciBjbGFzc05hbWU9XCJoci1sYWJlbFwiPlxuICAgICAgICAgICAgICA8c3Bhbj5hdGF1PC9zcGFuPlxuICAgICAgICAgICAgPC9EaXZpZGVyPlxuICAgICAgICAgIDwvPiA6IG51bGxcbiAgICAgICAgfVxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICAgIG1heExlbmd0aD17MzB9XG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjFcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBlbWFpbDogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiS2F0YSBzYW5kaVwiXG4gICAgICAgICAgICAgIG1heExlbmd0aD17MzB9XG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjFcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgIHJlcXVpcmVkLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7ICFpc0VtcHR5KGlzU3VjY2Vzcy5tZXNzYWdlKSAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFsZXJ0ICR7aXNTdWNjZXNzLnN0YXR1cyA/ICdhbGVydC1zdWNjZXNzJyA6ICdhbGVydC1kYW5nZXInfSBhbGVydC1kaXNtaXNzaWJsZSBmYWRlIHNob3dgfSByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgICAge2NhcGl0YWxpemUoaXNTdWNjZXNzLm1lc3NhZ2UpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cCBtYi0zXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkJhc2ljIGV4YW1wbGVcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPntyb3V0ZXIucGF0aG5hbWUgPT09ICcvbG9naW4nID8gJ01hc3VrJyA6ICdEYWZ0YXInfTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsgcm91dGVyLnBhdGhuYW1lID09PSAnL2xvZ2luJyA/IDxMaW5rQXV0aD5CZWx1bSBwdW55YSBha3VuPyA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+PGE+RGFmdGFyPC9hPjwvTGluaz48L0xpbmtBdXRoPiA6IDxMaW5rQXV0aD5TdWRhaCBwdW55YSBha3VuPyA8TGluayBocmVmPVwiL2xvZ2luXCI+PGE+TWFzdWs8L2E+PC9MaW5rPjwvTGlua0F1dGg+IH1cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9BdXRoQ2FyZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Auth/Auth.jsx\n");

/***/ })

})