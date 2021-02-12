webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Auth/Auth.jsx":
/*!**********************************!*\
  !*** ./components/Auth/Auth.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/api */ \"./utils/api.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-google-login */ \"./node_modules/react-google-login/dist/google-login.js\");\n/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _authStyle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authStyle */ \"./components/Auth/authStyle.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/fahrasnurhidayat/Documents/Fahras/Public/Portofolio/ibid-fe-test/components/Auth/Auth.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar Auth = function Auth() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    email: '',\n    password: ''\n  }),\n      form = _useState[0],\n      setForm = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    message: '',\n    status: null\n  }),\n      isSuccess = _useState2[0],\n      setSuccess = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"isEmpty\"])(window.localStorage.getItem('isToken'))) {\n      router.push('/');\n    }\n  }, []);\n\n  var responseGoogle = function responseGoogle(response) {\n    var data = {\n      account_id: response.profileObj.googleId,\n      type: 'google',\n      name: response.profileObj.name,\n      email: response.profileObj.email,\n      imageUrl: response.profileObj.imageUrl\n    };\n    window.localStorage.setItem('isToken', response.accessToken);\n    window.localStorage.setItem('isProfile', data);\n    setSuccess({\n      status: true,\n      message: 'Berhasil masuk!'\n    });\n    setTimeout(function () {\n      setSuccess({\n        status: true,\n        message: ''\n      });\n      router.push('/');\n    }, 2000);\n  };\n\n  var onSubmit = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {\n      var response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n              _context.prev = 1;\n              _context.next = 4;\n              return Object(_utils_api__WEBPACK_IMPORTED_MODULE_4__[\"apiPostAuth\"])(\"https://reqres.in/api\".concat(router.pathname), form);\n\n            case 4:\n              response = _context.sent;\n              window.localStorage.setItem('isToken', response.data.token);\n\n              if (response.status === 200) {\n                router.pathname === '/login' ? setSuccess({\n                  status: true,\n                  message: 'Berhasil masuk!'\n                }) : setSuccess({\n                  status: true,\n                  message: 'Berhasil daftar!'\n                });\n                setTimeout(function () {\n                  setSuccess({\n                    status: true,\n                    message: ''\n                  });\n                  router.push('/');\n                }, 2000);\n              }\n\n              _context.next = 12;\n              break;\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](1);\n\n              if (_context.t0.response.status === 400) {\n                router.pathname === '/login' ? setSuccess({\n                  status: false,\n                  message: 'Email atau Password salah!'\n                }) : setSuccess({\n                  status: false,\n                  message: 'Gagal mendaftar!'\n                });\n                setTimeout(function () {\n                  setSuccess({\n                    status: false,\n                    message: ''\n                  });\n                }, 5000);\n              }\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 9]]);\n    }));\n\n    return function onSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_9__[\"Container\"], {\n    className: \"container-sm\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 5\n    }\n  }, __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_9__[\"AuthCard\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 7\n    }\n  }, router.pathname === '/login' ? __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_9__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 42\n    }\n  }, \"Masuk\") : __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_9__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 65\n    }\n  }, \"Daftar\"), router.pathname === '/login' ? __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(react_google_login__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    clientId: \"1036312684002-9r1ei9mim483alvglj88bovq1prufg1i.apps.googleusercontent.com\",\n    buttonText: \"Masuk dengan Google\",\n    onSuccess: responseGoogle,\n    onFailure: responseGoogle,\n    className: \"google-btn\",\n    cookiePolicy: 'single_host_origin',\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }), __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_9__[\"Divider\"], {\n    className: \"hr-label\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 15\n    }\n  }, \"atau\"))) : null, __jsx(\"form\", {\n    onSubmit: onSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"input-group mb-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    className: \"form-control\",\n    placeholder: \"Email\",\n    maxLength: 30,\n    \"aria-label\": \"Email\",\n    \"aria-describedby\": \"basic-addon1\",\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        email: e.target.value\n      }));\n    },\n    required: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    className: \"input-group mb-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"password\",\n    className: \"form-control\",\n    placeholder: \"Kata sandi\",\n    maxLength: 30,\n    \"aria-label\": \"Password\",\n    \"aria-describedby\": \"basic-addon1\",\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        password: e.target.value\n      }));\n    },\n    required: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 13\n    }\n  })), !Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"isEmpty\"])(isSuccess.message) && __jsx(\"div\", {\n    className: \"alert \".concat(isSuccess.status ? 'alert-success' : 'alert-danger', \" alert-dismissible fade show\"),\n    role: \"alert\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 118,\n      columnNumber: 13\n    }\n  }, Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"capitalize\"])(isSuccess.message)), __jsx(\"div\", {\n    className: \"btn-group mb-3\",\n    role: \"group\",\n    \"aria-label\": \"Basic example\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 13\n    }\n  }, router.pathname === '/login' ? 'Masuk' : 'Daftar')), router.pathname === '/login' ? __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_9__[\"LinkAuth\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 44\n    }\n  }, \"Belum punya akun? \", __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    href: \"/register\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 72\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 95\n    }\n  }, \"Daftar\"))) : __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_9__[\"LinkAuth\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 129\n    }\n  }, \"Sudah punya akun? \", __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {\n    href: \"/login\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 157\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 177\n    }\n  }, \"Masuk\"))))));\n};\n\n_s(Auth, \"oe5XOHZxO998ng9LYVm4Lr0Km6E=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = Auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);\n\nvar _c;\n\n$RefreshReg$(_c, \"Auth\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRoL0F1dGguanN4PzJjMmMiXSwibmFtZXMiOlsiQXV0aCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImZvcm0iLCJzZXRGb3JtIiwibWVzc2FnZSIsInN0YXR1cyIsImlzU3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJ1c2VFZmZlY3QiLCJpc0VtcHR5Iiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInB1c2giLCJyZXNwb25zZUdvb2dsZSIsInJlc3BvbnNlIiwiZGF0YSIsImFjY291bnRfaWQiLCJwcm9maWxlT2JqIiwiZ29vZ2xlSWQiLCJ0eXBlIiwibmFtZSIsImltYWdlVXJsIiwic2V0SXRlbSIsImFjY2Vzc1Rva2VuIiwic2V0VGltZW91dCIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFwaVBvc3RBdXRoIiwicGF0aG5hbWUiLCJ0b2tlbiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNhcGl0YWxpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURpQixrQkFFT0Msc0RBQVEsQ0FBQztBQUMvQkMsU0FBSyxFQUFFLEVBRHdCO0FBRS9CQyxZQUFRLEVBQUU7QUFGcUIsR0FBRCxDQUZmO0FBQUEsTUFFVkMsSUFGVTtBQUFBLE1BRUpDLE9BRkk7O0FBQUEsbUJBTWVKLHNEQUFRLENBQUM7QUFDdkNLLFdBQU8sRUFBRSxFQUQ4QjtBQUV2Q0MsVUFBTSxFQUFFO0FBRitCLEdBQUQsQ0FOdkI7QUFBQSxNQU1WQyxTQU5VO0FBQUEsTUFNQ0MsVUFORDs7QUFXakJDLHlEQUFT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QUFLLGFBQVMsRUFBQyxnQkFBZjtBQUFnQyxRQUFJLEVBQUMsT0FBckM7QUFBNkMsa0JBQVcsZUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBUyxFQUFDLGlCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW1EUCxNQUFNLENBQUNpQyxRQUFQLEtBQW9CLFFBQXBCLEdBQStCLE9BQS9CLEdBQXlDLFFBQTVGLENBREYsQ0E3QkYsRUFnQ0lqQyxNQUFNLENBQUNpQyxRQUFQLEtBQW9CLFFBQXBCLEdBQStCLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBNEIsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUF2QixDQUE1QixDQUEvQixHQUFvSCxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQTRCLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBcEIsQ0FBNUIsQ0FoQ3hILENBbEJGLENBREYsQ0FERjtBQXlERCxDQXJIRDs7R0FBTWxDLEk7VUFDV0UscUQ7OztLQURYRixJO0FBdUhTQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQXV0aC9BdXRoLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwaVBvc3RBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBpc0VtcHR5LCBjYXBpdGFsaXplIH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IEdvb2dsZUxvZ2luIGZyb20gJ3JlYWN0LWdvb2dsZS1sb2dpbidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7XG4gIENvbnRhaW5lciwgQXV0aENhcmQsXG4gIFRpdGxlLCBEaXZpZGVyLFxuICBMaW5rQXV0aCxcbn0gZnJvbSAnLi9hdXRoU3R5bGUnXG5cbmNvbnN0IEF1dGggPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHtcbiAgICBlbWFpbDogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICB9KVxuICBjb25zdCBbaXNTdWNjZXNzLCBzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKHtcbiAgICBtZXNzYWdlOiAnJyxcbiAgICBzdGF0dXM6IG51bGwsXG4gIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWlzRW1wdHkod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpc1Rva2VuJykpKSB7XG4gICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCByZXNwb25zZUdvb2dsZSA9IChyZXNwb25zZSkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBhY2NvdW50X2lkOiByZXNwb25zZS5wcm9maWxlT2JqLmdvb2dsZUlkLFxuICAgICAgdHlwZTogJ2dvb2dsZScsXG4gICAgICBuYW1lOiByZXNwb25zZS5wcm9maWxlT2JqLm5hbWUsXG4gICAgICBlbWFpbDogcmVzcG9uc2UucHJvZmlsZU9iai5lbWFpbCxcbiAgICAgIGltYWdlVXJsOiByZXNwb25zZS5wcm9maWxlT2JqLmltYWdlVXJsLFxuICAgIH1cblxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXNUb2tlbicsIHJlc3BvbnNlLmFjY2Vzc1Rva2VuKVxuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXNQcm9maWxlJywgZGF0YSlcblxuICAgIHNldFN1Y2Nlc3MoeyBzdGF0dXM6IHRydWUsIG1lc3NhZ2U6J0Jlcmhhc2lsIG1hc3VrIScgfSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFN1Y2Nlc3MoeyBzdGF0dXM6IHRydWUsIG1lc3NhZ2U6ICcnIH0pXG4gICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgfSwgMjAwMClcbiAgfVxuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpUG9zdEF1dGgoYGh0dHBzOi8vcmVxcmVzLmluL2FwaSR7cm91dGVyLnBhdGhuYW1lfWAsIGZvcm0pXG5cbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXNUb2tlbicsIHJlc3BvbnNlLmRhdGEudG9rZW4pXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSAnL2xvZ2luJyA/IHNldFN1Y2Nlc3MoeyBzdGF0dXM6IHRydWUsIG1lc3NhZ2U6J0Jlcmhhc2lsIG1hc3VrIScgfSkgOiBzZXRTdWNjZXNzKHsgc3RhdHVzOiB0cnVlLCBtZXNzYWdlOiAnQmVyaGFzaWwgZGFmdGFyIScgfSlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0U3VjY2Vzcyh7IHN0YXR1czogdHJ1ZSwgbWVzc2FnZTogJycgfSlcbiAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgICAgIH0sIDIwMDApXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xuICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09ICcvbG9naW4nID8gc2V0U3VjY2Vzcyh7IHN0YXR1czogZmFsc2UsIG1lc3NhZ2U6ICdFbWFpbCBhdGF1IFBhc3N3b3JkIHNhbGFoIScgfSkgOiBzZXRTdWNjZXNzKHsgc3RhdHVzOiBmYWxzZSwgbWVzc2FnZTogJ0dhZ2FsIG1lbmRhZnRhciEnIH0pXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNldFN1Y2Nlc3MoeyBzdGF0dXM6IGZhbHNlLCBtZXNzYWdlOiAnJyB9KVxuICAgICAgICB9LCA1MDAwKVxuICAgICAgfVxuICAgIH0gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwiY29udGFpbmVyLXNtXCI+XG4gICAgICA8QXV0aENhcmQ+XG4gICAgICAgIHsgcm91dGVyLnBhdGhuYW1lID09PSAnL2xvZ2luJyA/IDxUaXRsZT5NYXN1azwvVGl0bGU+IDogPFRpdGxlPkRhZnRhcjwvVGl0bGU+IH1cbiAgICAgICAge1xuICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gJy9sb2dpbidcbiAgICAgICAgICA/IDw+XG4gICAgICAgICAgICA8R29vZ2xlTG9naW5cbiAgICAgICAgICAgICAgY2xpZW50SWQ9XCIxMDM2MzEyNjg0MDAyLTlyMWVpOW1pbTQ4M2Fsdmdsajg4Ym92cTFwcnVmZzFpLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCJcbiAgICAgICAgICAgICAgYnV0dG9uVGV4dD1cIk1hc3VrIGRlbmdhbiBHb29nbGVcIlxuICAgICAgICAgICAgICBvblN1Y2Nlc3M9e3Jlc3BvbnNlR29vZ2xlfVxuICAgICAgICAgICAgICBvbkZhaWx1cmU9e3Jlc3BvbnNlR29vZ2xlfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJnb29nbGUtYnRuXCJcbiAgICAgICAgICAgICAgY29va2llUG9saWN5PXsnc2luZ2xlX2hvc3Rfb3JpZ2luJ31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RGl2aWRlciBjbGFzc05hbWU9XCJoci1sYWJlbFwiPlxuICAgICAgICAgICAgICA8c3Bhbj5hdGF1PC9zcGFuPlxuICAgICAgICAgICAgPC9EaXZpZGVyPlxuICAgICAgICAgIDwvPiA6IG51bGxcbiAgICAgICAgfVxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICAgIG1heExlbmd0aD17MzB9XG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjFcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBlbWFpbDogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiS2F0YSBzYW5kaVwiXG4gICAgICAgICAgICAgIG1heExlbmd0aD17MzB9XG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjFcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZvcm0oeyAuLi5mb3JtLCBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgIHJlcXVpcmVkLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7ICFpc0VtcHR5KGlzU3VjY2Vzcy5tZXNzYWdlKSAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFsZXJ0ICR7aXNTdWNjZXNzLnN0YXR1cyA/ICdhbGVydC1zdWNjZXNzJyA6ICdhbGVydC1kYW5nZXInfSBhbGVydC1kaXNtaXNzaWJsZSBmYWRlIHNob3dgfSByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgICAge2NhcGl0YWxpemUoaXNTdWNjZXNzLm1lc3NhZ2UpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cCBtYi0zXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkJhc2ljIGV4YW1wbGVcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPntyb3V0ZXIucGF0aG5hbWUgPT09ICcvbG9naW4nID8gJ01hc3VrJyA6ICdEYWZ0YXInfTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsgcm91dGVyLnBhdGhuYW1lID09PSAnL2xvZ2luJyA/IDxMaW5rQXV0aD5CZWx1bSBwdW55YSBha3VuPyA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+PGE+RGFmdGFyPC9hPjwvTGluaz48L0xpbmtBdXRoPiA6IDxMaW5rQXV0aD5TdWRhaCBwdW55YSBha3VuPyA8TGluayBocmVmPVwiL2xvZ2luXCI+PGE+TWFzdWs8L2E+PC9MaW5rPjwvTGlua0F1dGg+IH1cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9BdXRoQ2FyZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Auth/Auth.jsx\n");

/***/ })

})