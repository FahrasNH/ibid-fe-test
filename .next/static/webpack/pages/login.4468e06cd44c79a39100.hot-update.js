webpackHotUpdate_N_E("pages/login",{

/***/ "./components/Auth/Auth.jsx":
/*!**********************************!*\
  !*** ./components/Auth/Auth.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/api */ \"./utils/api.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-google-login */ \"./node_modules/react-google-login/dist/google-login.js\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _authStyle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authStyle */ \"./components/Auth/authStyle.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/fahrasnurhidayat/Documents/Fahras/Public/Portofolio/ibid-fe-test/components/Auth/Auth.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar Auth = function Auth() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    email: '',\n    password: ''\n  }),\n      form = _useState[0],\n      setForm = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    message: '',\n    status: null\n  }),\n      isSuccess = _useState2[0],\n      setSuccess = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"isEmpty\"])(window.localStorage.getItem('isToken'))) {\n      router.push('/');\n    }\n  }, []);\n\n  var responseGoogle = function responseGoogle(response) {\n    console.log(response);\n    console.log(response.profileObj);\n  };\n\n  var onSubmit = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {\n      var response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n              _context.prev = 1;\n              _context.next = 4;\n              return Object(_utils_api__WEBPACK_IMPORTED_MODULE_4__[\"apiPostAuth\"])(\"https://reqres.in/api\".concat(router.pathname), form);\n\n            case 4:\n              response = _context.sent;\n              window.localStorage.setItem('isToken', response.data.token);\n\n              if (response.status === 200) {\n                router.pathname === '/login' ? setSuccess({\n                  status: true,\n                  message: 'Berhasil masuk!'\n                }) : setSuccess({\n                  status: true,\n                  message: 'Berhasil daftar!'\n                });\n                setTimeout(function () {\n                  setSuccess({\n                    status: true,\n                    message: ''\n                  });\n                  router.push('/');\n                }, 2000);\n              }\n\n              _context.next = 12;\n              break;\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](1);\n\n              if (_context.t0.response.status === 400) {\n                router.pathname === '/login' ? setSuccess({\n                  status: false,\n                  message: 'Email atau Password salah!'\n                }) : setSuccess({\n                  status: false,\n                  message: 'Gagal mendaftar!'\n                });\n                setTimeout(function () {\n                  setSuccess({\n                    status: false,\n                    message: ''\n                  });\n                }, 5000);\n              }\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 9]]);\n    }));\n\n    return function onSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_9__[\"Container\"], {\n    className: \"container-sm\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 5\n    }\n  }, __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_9__[\"AuthCard\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }, router.pathname === '/login' ? __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_9__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 42\n    }\n  }, \"Masuk\") : __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_9__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 65\n    }\n  }, \"Daftar\"), router.pathname === '/login' ? __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(react_google_login__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    clientId: \"1036312684002-9r1ei9mim483alvglj88bovq1prufg1i.apps.googleusercontent.com\",\n    buttonText: \"Masuk dengan Google\",\n    onSuccess: responseGoogle,\n    onFailure: responseGoogle,\n    cookiePolicy: 'single_host_origin',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  }), __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_9__[\"Divider\"], {\n    className: \"hr-label\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 15\n    }\n  }, \"atau\"))) : null, __jsx(\"form\", {\n    onSubmit: onSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"input-group mb-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    className: \"form-control\",\n    placeholder: \"Email\",\n    maxLength: 30,\n    \"aria-label\": \"Email\",\n    \"aria-describedby\": \"basic-addon1\",\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        email: e.target.value\n      }));\n    },\n    required: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    className: \"input-group mb-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"password\",\n    className: \"form-control\",\n    placeholder: \"Kata sandi\",\n    maxLength: 30,\n    \"aria-label\": \"Password\",\n    \"aria-describedby\": \"basic-addon1\",\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        password: e.target.value\n      }));\n    },\n    required: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 13\n    }\n  })), !Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"isEmpty\"])(isSuccess.message) && __jsx(\"div\", {\n    className: \"alert \".concat(isSuccess.status ? 'alert-success' : 'alert-danger', \" alert-dismissible fade show\"),\n    role: \"alert\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 13\n    }\n  }, Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"capitalize\"])(isSuccess.message)), __jsx(\"div\", {\n    className: \"btn-group mb-3\",\n    role: \"group\",\n    \"aria-label\": \"Basic example\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 13\n    }\n  }, router.pathname === '/login' ? 'Masuk' : 'Daftar')), router.pathname === '/login' ? __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_9__[\"LinkAuth\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 44\n    }\n  }, \"Belum punya akun? \", __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    href: \"/register\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 72\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 95\n    }\n  }, \"Daftar\"))) : __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_9__[\"LinkAuth\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 129\n    }\n  }, \"Sudah punya akun? \", __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    href: \"/login\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 157\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 177\n    }\n  }, \"Masuk\"))))));\n};\n\n_s(Auth, \"oe5XOHZxO998ng9LYVm4Lr0Km6E=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = Auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);\n\nvar _c;\n\n$RefreshReg$(_c, \"Auth\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRoL0F1dGguanN4PzJjMmMiXSwibmFtZXMiOlsiQXV0aCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImZvcm0iLCJzZXRGb3JtIiwibWVzc2FnZSIsInN0YXR1cyIsImlzU3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJ1c2VFZmZlY3QiLCJpc0VtcHR5Iiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInB1c2giLCJyZXNwb25zZUdvb2dsZSIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInByb2ZpbGVPYmoiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhcGlQb3N0QXV0aCIsInBhdGhuYW1lIiwic2V0SXRlbSIsImRhdGEiLCJ0b2tlbiIsInNldFRpbWVvdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJjYXBpdGFsaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU1BLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEaUIsa0JBRU9DLHNEQUFRLENBQUM7QUFDL0JDLFNBQUssRUFBRSxFQUR3QjtBQUUvQkMsWUFBUSxFQUFFO0FBRnFCLEdBQUQsQ0FGZjtBQUFBLE1BRVZDLElBRlU7QUFBQSxNQUVKQyxPQUZJOztBQUFBLG1CQU1lSixzREFBUSxDQUFDO0FBQ3ZDSyxXQUFPLEVBQUUsRUFEOEI7QUFFdkNDLFVBQU0sRUFBRTtBQUYrQixHQUFELENBTnZCO0FBQUEsTUFNVkMsU0FOVTtBQUFBLE1BTUNDLFVBTkQ7O0FBV2pCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLENBQUNDLHNEQUFPLENBQUNDLE1BQU0sQ0FB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QUE7QUFBQTtBQUFBLEtBQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBcEIsQ0FBNUIsQ0FoQ3hILENBakJGLENBREYsQ0FERjtBQXdERCxDQXRHRDs7R0FBTTNCLEk7VUFDV0UscUQ7OztLQURYRixJO0FBd0dTQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQXV0aC9BdXRoLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwaVBvc3RBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBpc0VtcHR5LCBjYXBpdGFsaXplIH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IEdvb2dsZUxvZ2luIGZyb20gJ3JlYWN0LWdvb2dsZS1sb2dpbidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7XG4gIENvbnRhaW5lciwgQXV0aENhcmQsXG4gIFRpdGxlLCBEaXZpZGVyLFxuICBMaW5rQXV0aCxcbn0gZnJvbSAnLi9hdXRoU3R5bGUnXG5cbmNvbnN0IEF1dGggPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHtcbiAgICBlbWFpbDogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICB9KVxuICBjb25zdCBbaXNTdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKHtcbiAgICBtZXNzYWdlOiAnJyxcbiAgICBzdGF0dXM6IG51bGwsXG4gIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWlzRW1wdHkod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpc1Rva2VuJykpKSB7XG4gICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCByZXNwb25zZUdvb2dsZSA9IChyZXNwb25zZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnByb2ZpbGVPYmopXG4gIH1cblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaVBvc3RBdXRoKGBodHRwczovL3JlcXJlcy5pbi9hcGkke3JvdXRlci5wYXRobmFtZX1gLCBmb3JtKVxuXG4gICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lzVG9rZW4nLCByZXNwb25zZS5kYXRhLnRva2VuKVxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gJy9sb2dpbicgPyBzZXRTdWNjZXNzKHsgc3RhdHVzOiB0cnVlLCBtZXNzYWdlOidCZXJoYXNpbCBtYXN1ayEnIH0pIDogc2V0U3VjY2Vzcyh7IHN0YXR1czogdHJ1ZSwgbWVzc2FnZTogJ0Jlcmhhc2lsIGRhZnRhciEnIH0pXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNldFN1Y2Nlc3MoeyBzdGF0dXM6IHRydWUsIG1lc3NhZ2U6ICcnIH0pXG4gICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxuICAgICAgICB9LCAyMDAwKVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcbiAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSAnL2xvZ2luJyA/IHNldFN1Y2Nlc3MoeyBzdGF0dXM6IGZhbHNlLCBtZXNzYWdlOiAnRW1haWwgYXRhdSBQYXNzd29yZCBzYWxhaCEnIH0pIDogc2V0U3VjY2Vzcyh7IHN0YXR1czogZmFsc2UsIG1lc3NhZ2U6ICdHYWdhbCBtZW5kYWZ0YXIhJyB9KVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBzZXRTdWNjZXNzKHsgc3RhdHVzOiBmYWxzZSwgbWVzc2FnZTogJycgfSlcbiAgICAgICAgfSwgNTAwMClcbiAgICAgIH1cbiAgICB9IFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImNvbnRhaW5lci1zbVwiPlxuICAgICAgPEF1dGhDYXJkPlxuICAgICAgICB7IHJvdXRlci5wYXRobmFtZSA9PT0gJy9sb2dpbicgPyA8VGl0bGU+TWFzdWs8L1RpdGxlPiA6IDxUaXRsZT5EYWZ0YXI8L1RpdGxlPiB9XG4gICAgICAgIHtcbiAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09ICcvbG9naW4nXG4gICAgICAgICAgPyA8PlxuICAgICAgICAgICAgPEdvb2dsZUxvZ2luXG4gICAgICAgICAgICAgIGNsaWVudElkPVwiMTAzNjMxMjY4NDAwMi05cjFlaTltaW00ODNhbHZnbGo4OGJvdnExcHJ1ZmcxaS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbVwiXG4gICAgICAgICAgICAgIGJ1dHRvblRleHQ9XCJNYXN1ayBkZW5nYW4gR29vZ2xlXCJcbiAgICAgICAgICAgICAgb25TdWNjZXNzPXtyZXNwb25zZUdvb2dsZX1cbiAgICAgICAgICAgICAgb25GYWlsdXJlPXtyZXNwb25zZUdvb2dsZX1cbiAgICAgICAgICAgICAgY29va2llUG9saWN5PXsnc2luZ2xlX2hvc3Rfb3JpZ2luJ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RGl2aWRlciBjbGFzc05hbWU9XCJoci1sYWJlbFwiPlxuICAgICAgICAgICAgICA8c3Bhbj5hdGF1PC9zcGFuPlxuICAgICAgICAgICAgPC9EaXZpZGVyPlxuICAgICAgICAgIDwvPiA6IG51bGxcbiAgICAgICAgfVxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICAgIG1heExlbmd0aD17MzB9XG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjFcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBlbWFpbDogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiS2F0YSBzYW5kaVwiXG4gICAgICAgICAgICAgIG1heExlbmd0aD17MzB9XG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjFcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgIHJlcXVpcmVkLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7ICFpc0VtcHR5KGlzU3VjY2Vzcy5tZXNzYWdlKSAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFsZXJ0ICR7aXNTdWNjZXNzLnN0YXR1cyA/ICdhbGVydC1zdWNjZXNzJyA6ICdhbGVydC1kYW5nZXInfSBhbGVydC1kaXNtaXNzaWJsZSBmYWRlIHNob3dgfSByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgICAge2NhcGl0YWxpemUoaXNTdWNjZXNzLm1lc3NhZ2UpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cCBtYi0zXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkJhc2ljIGV4YW1wbGVcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPntyb3V0ZXIucGF0aG5hbWUgPT09ICcvbG9naW4nID8gJ01hc3VrJyA6ICdEYWZ0YXInfTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsgcm91dGVyLnBhdGhuYW1lID09PSAnL2xvZ2luJyA/IDxMaW5rQXV0aD5CZWx1bSBwdW55YSBha3VuPyA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+PGE+RGFmdGFyPC9hPjwvTGluaz48L0xpbmtBdXRoPiA6IDxMaW5rQXV0aD5TdWRhaCBwdW55YSBha3VuPyA8TGluayBocmVmPVwiL2xvZ2luXCI+PGE+TWFzdWs8L2E+PC9MaW5rPjwvTGlua0F1dGg+IH1cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9BdXRoQ2FyZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Auth/Auth.jsx\n");

/***/ })

})