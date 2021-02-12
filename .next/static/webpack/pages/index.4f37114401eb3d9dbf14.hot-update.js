webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Auth/Auth.jsx":
/*!**********************************!*\
  !*** ./components/Auth/Auth.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/api */ \"./utils/api.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _authStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authStyle */ \"./components/Auth/authStyle.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/fahrasnurhidayat/Documents/Fahras/Public/Portofolio/ibid-fe-test/components/Auth/Auth.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar Auth = function Auth() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    email: '',\n    password: ''\n  }),\n      form = _useState[0],\n      setForm = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    message: '',\n    status: null\n  }),\n      isSuccess = _useState2[0],\n      setSuccess = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"isEmpty\"])(window.localStorage.getItem('isToken'))) {\n      router.push('/');\n    }\n  }, []);\n\n  var onSubmit = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {\n      var response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n              _context.prev = 1;\n              _context.next = 4;\n              return Object(_utils_api__WEBPACK_IMPORTED_MODULE_4__[\"apiPostAuth\"])(\"https://reqres.in/api\".concat(router.pathname), form);\n\n            case 4:\n              response = _context.sent;\n              window.localStorage.setItem('isToken', response.data.token);\n\n              if (response.status === 200) {\n                router.pathname === '/login' ? setSuccess({\n                  status: true,\n                  message: 'Berhasil masuk!'\n                }) : setSuccess({\n                  status: true,\n                  message: 'Berhasil daftar!'\n                });\n                setTimeout(function () {\n                  setSuccess({\n                    status: true,\n                    message: ''\n                  });\n                  router.push('/');\n                }, 5000);\n              }\n\n              _context.next = 12;\n              break;\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](1);\n\n              if (_context.t0.response.status === 400) {\n                router.pathname === '/login' ? setSuccess({\n                  status: false,\n                  message: 'Email atau Password salah!'\n                }) : setSuccess({\n                  status: false,\n                  message: 'Gagal mendaftar!'\n                });\n                setTimeout(function () {\n                  setSuccess({\n                    status: false,\n                    message: ''\n                  });\n                }, 5000);\n              }\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 9]]);\n    }));\n\n    return function onSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_8__[\"Container\"], {\n    className: \"container-sm\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 5\n    }\n  }, __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_8__[\"AuthCard\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }, router.pathname === '/login' ? __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_8__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 42\n    }\n  }, \"Masuk\") : __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_8__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 65\n    }\n  }, \"Daftar\"), router.pathname === '/login' ? __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"input-group\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }\n  }, __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_8__[\"LogoGoogle\"], {\n    className: \"input-group-text\",\n    id: \"basic-addon1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 15\n    }\n  }, __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_8__[\"FaGoogle\"], {\n    className: \"fab fa-google\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 74\n    }\n  })), __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_8__[\"ButtonGoogle\"], {\n    type: \"submit\",\n    className: \"btn btn-primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 15\n    }\n  }, \"Masuk dengan Google\")), __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_8__[\"Divider\"], {\n    className: \"hr-label\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 15\n    }\n  }, \"atau\"))) : null, __jsx(\"form\", {\n    onSubmit: onSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"input-group mb-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    className: \"form-control\",\n    placeholder: \"Email\",\n    maxLength: 30,\n    \"aria-label\": \"Email\",\n    \"aria-describedby\": \"basic-addon1\",\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        email: e.target.value\n      }));\n    },\n    required: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    className: \"input-group mb-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"password\",\n    className: \"form-control\",\n    placeholder: \"Kata sandi\",\n    maxLength: 30,\n    \"aria-label\": \"Password\",\n    \"aria-describedby\": \"basic-addon1\",\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        password: e.target.value\n      }));\n    },\n    required: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 13\n    }\n  })), !Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"isEmpty\"])(isSuccess) && __jsx(\"div\", {\n    className: \"alert alert-danger alert-dismissible fade show\",\n    role: \"alert\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 13\n    }\n  }, Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"capitalize\"])(isSuccess)), __jsx(\"div\", {\n    className: \"btn-group mb-3\",\n    role: \"group\",\n    \"aria-label\": \"Basic example\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 13\n    }\n  }, router.pathname === '/login' ? 'Masuk' : 'Daftar')), router.pathname === '/login' ? __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_8__[\"LinkAuth\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 44\n    }\n  }, \"Belum punya akun? \", __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    href: \"/register\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 72\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 95\n    }\n  }, \"Daftar\"))) : __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_8__[\"LinkAuth\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 129\n    }\n  }, \"Sudah punya akun? \", __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    href: \"/login\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 157\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 177\n    }\n  }, \"Masuk\"))))));\n};\n\n_s(Auth, \"oe5XOHZxO998ng9LYVm4Lr0Km6E=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = Auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);\n\nvar _c;\n\n$RefreshReg$(_c, \"Auth\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRoL0F1dGguanN4PzJjMmMiXSwibmFtZXMiOlsiQXV0aCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImZvcm0iLCJzZXRGb3JtIiwibWVzc2FnZSIsInN0YXR1cyIsImlzU3VjY2VzcyIsInNldFN1Y2Nlc3MiLCJ1c2VFZmZlY3QiLCJpc0VtcHR5Iiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInB1c2giLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhcGlQb3N0QXV0aCIsInBhdGhuYW1lIiwicmVzcG9uc2UiLCJzZXRJdGVtIiwiZGF0YSIsInRva2VuIiwic2V0VGltZW91dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNhcGl0YWxpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRGlCLGtCQUVPQyxzREFBUSxDQUFDO0FBQy9CQyxTQUFLLEVBQUUsRUFEd0I7QUFFL0JDLFlBQVEsRUFBRTtBQUZxQixHQUFELENBRmY7QUFBQSxNQUVWQyxJQUZVO0FBQUEsTUFFSkMsT0FGSTs7QUFBQSxtQkFNZUosc0RBQVEsQ0FBQztBQUN2Q0ssV0FBTyxFQUFFLEVBRDhCO0FBRXZDQyxVQUFNLEVBQUU7QUFGK0IsR0FBRCxDQU52QjtBQUFBLE1BTVZDLFNBTlU7QUFBQSxNQU1DQyxVQU5EOztBQVdqQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSSxDQUFDQyxzREFBTyxDQUFDQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLFNBQTVCLENBQUQsQ0FBWixFQUFzRDtBQUNw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LENBREYsQ0FERjtBQXFERCxDQTlGRDs7R0FBTXRCLEk7VUFDV0UscUQ7OztLQURYRixJO0FBZ0dTQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQXV0aC9BdXRoLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFwaVBvc3RBdXRoIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBpc0VtcHR5LCBjYXBpdGFsaXplIH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLCBBdXRoQ2FyZCxcbiAgVGl0bGUsIExvZ29Hb29nbGUsXG4gIEJ1dHRvbkdvb2dsZSwgRGl2aWRlcixcbiAgRmFHb29nbGUsIExpbmtBdXRoLFxufSBmcm9tICcuL2F1dGhTdHlsZSdcblxuY29uc3QgQXV0aCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW2Zvcm0sIHNldEZvcm1dID0gdXNlU3RhdGUoe1xuICAgIGVtYWlsOiAnJyxcbiAgICBwYXNzd29yZDogJycsXG4gIH0pXG4gIGNvbnN0IFtpc1N1Y2Nlc3MsIHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoe1xuICAgIG1lc3NhZ2U6ICcnLFxuICAgIHN0YXR1czogbnVsbCxcbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNFbXB0eSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzVG9rZW4nKSkpIHtcbiAgICAgIHJvdXRlci5wdXNoKCcvJylcbiAgICB9XG4gIH0sIFtdKVxuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpUG9zdEF1dGgoYGh0dHBzOi8vcmVxcmVzLmluL2FwaSR7cm91dGVyLnBhdGhuYW1lfWAsIGZvcm0pXG5cbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXNUb2tlbicsIHJlc3BvbnNlLmRhdGEudG9rZW4pXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSAnL2xvZ2luJyA/IHNldFN1Y2Nlc3MoeyBzdGF0dXM6IHRydWUsIG1lc3NhZ2U6J0Jlcmhhc2lsIG1hc3VrIScgfSkgOiBzZXRTdWNjZXNzKHsgc3RhdHVzOiB0cnVlLCBtZXNzYWdlOiAnQmVyaGFzaWwgZGFmdGFyIScgfSlcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0U3VjY2Vzcyh7IHN0YXR1czogdHJ1ZSwgbWVzc2FnZTogJycgfSlcbiAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgICAgIH0sIDUwMDApXG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMCkge1xuICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09ICcvbG9naW4nID8gc2V0U3VjY2Vzcyh7IHN0YXR1czogZmFsc2UsIG1lc3NhZ2U6ICdFbWFpbCBhdGF1IFBhc3N3b3JkIHNhbGFoIScgfSkgOiBzZXRTdWNjZXNzKHsgc3RhdHVzOiBmYWxzZSwgbWVzc2FnZTogJ0dhZ2FsIG1lbmRhZnRhciEnIH0pXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNldFN1Y2Nlc3MoeyBzdGF0dXM6IGZhbHNlLCBtZXNzYWdlOiAnJyB9KVxuICAgICAgICB9LCA1MDAwKVxuICAgICAgfVxuICAgIH0gXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwiY29udGFpbmVyLXNtXCI+XG4gICAgICA8QXV0aENhcmQ+XG4gICAgICAgIHsgcm91dGVyLnBhdGhuYW1lID09PSAnL2xvZ2luJyA/IDxUaXRsZT5NYXN1azwvVGl0bGU+IDogPFRpdGxlPkRhZnRhcjwvVGl0bGU+IH1cbiAgICAgICAge1xuICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gJy9sb2dpbidcbiAgICAgICAgICA/IDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxMb2dvR29vZ2xlIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIiBpZD1cImJhc2ljLWFkZG9uMVwiPjxGYUdvb2dsZSBjbGFzc05hbWU9XCJmYWIgZmEtZ29vZ2xlXCI+PC9GYUdvb2dsZT48L0xvZ29Hb29nbGU+XG4gICAgICAgICAgICAgIDxCdXR0b25Hb29nbGUgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPk1hc3VrIGRlbmdhbiBHb29nbGU8L0J1dHRvbkdvb2dsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPERpdmlkZXIgY2xhc3NOYW1lPVwiaHItbGFiZWxcIj5cbiAgICAgICAgICAgICAgPHNwYW4+YXRhdTwvc3Bhbj5cbiAgICAgICAgICAgIDwvRGl2aWRlcj5cbiAgICAgICAgICA8Lz4gOiBudWxsXG4gICAgICAgIH1cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgICBtYXhMZW5ndGg9ezMwfVxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiYmFzaWMtYWRkb24xXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtKHsgLi4uZm9ybSwgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkthdGEgc2FuZGlcIlxuICAgICAgICAgICAgICBtYXhMZW5ndGg9ezMwfVxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiYmFzaWMtYWRkb24xXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtKHsgLi4uZm9ybSwgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICByZXF1aXJlZC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgeyAhaXNFbXB0eShpc1N1Y2Nlc3MpICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyIGFsZXJ0LWRpc21pc3NpYmxlIGZhZGUgc2hvd1wiIHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgICB7Y2FwaXRhbGl6ZShpc1N1Y2Nlc3MpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cCBtYi0zXCIgcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cIkJhc2ljIGV4YW1wbGVcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPntyb3V0ZXIucGF0aG5hbWUgPT09ICcvbG9naW4nID8gJ01hc3VrJyA6ICdEYWZ0YXInfTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsgcm91dGVyLnBhdGhuYW1lID09PSAnL2xvZ2luJyA/IDxMaW5rQXV0aD5CZWx1bSBwdW55YSBha3VuPyA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+PGE+RGFmdGFyPC9hPjwvTGluaz48L0xpbmtBdXRoPiA6IDxMaW5rQXV0aD5TdWRhaCBwdW55YSBha3VuPyA8TGluayBocmVmPVwiL2xvZ2luXCI+PGE+TWFzdWs8L2E+PC9MaW5rPjwvTGlua0F1dGg+IH1cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9BdXRoQ2FyZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Auth/Auth.jsx\n");

/***/ })

})