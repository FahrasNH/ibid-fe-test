webpackHotUpdate_N_E("pages/login",{

/***/ "./components/Auth/Auth.jsx":
/*!**********************************!*\
  !*** ./components/Auth/Auth.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/api */ \"./utils/api.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _authStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authStyle */ \"./components/Auth/authStyle.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/fahrasnurhidayat/Documents/Fahras/Public/Portofolio/ibid-fe-test/components/Auth/Auth.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar Auth = function Auth() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    email: '',\n    password: ''\n  }),\n      form = _useState[0],\n      setForm = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      isSuccess = _useState2[0],\n      setSuccess = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"isEmpty\"])(window.localStorage.getItem('isToken'))) {\n      router.push('/');\n    }\n  }, []);\n\n  var onSubmit = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {\n      var response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n              _context.prev = 1;\n              _context.next = 4;\n              return Object(_utils_api__WEBPACK_IMPORTED_MODULE_4__[\"apiPostAuth\"])(\"https://reqres.in/api\".concat(router.pathname), form);\n\n            case 4:\n              response = _context.sent;\n              window.localStorage.setItem('isToken', response.data.token);\n\n              if (response.status === 200) {\n                router.pathname === '/login' ? setSuccess('Berhasil masuk!') : setSuccess('Berhasil daftar!');\n                setTimeout(function () {\n                  setSuccess('');\n                  router.push('/');\n                }, 5000);\n              }\n\n              _context.next = 12;\n              break;\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](1);\n\n              if (_context.t0.response.status === 400) {\n                router.pathname === '/login' ? setSuccess('Email atau Password salah!') : setSuccess('Gagal mendaftar!');\n                setTimeout(function () {\n                  setSuccess('');\n                }, 5000);\n              }\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 9]]);\n    }));\n\n    return function onSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_8__[\"Container\"], {\n    className: \"container-sm\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 5\n    }\n  }, __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_8__[\"AuthCard\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }, router.pathname === '/login' ? __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_8__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 42\n    }\n  }, \"Masuk\") : __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_8__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 65\n    }\n  }, \"Daftar\"), router.pathname === '/login' ? __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"input-group\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  }, __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_8__[\"LogoGoogle\"], {\n    className: \"input-group-text\",\n    id: \"basic-addon1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 15\n    }\n  }, __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_8__[\"FaGoogle\"], {\n    className: \"fab fa-google\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 74\n    }\n  })), __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_8__[\"ButtonGoogle\"], {\n    type: \"submit\",\n    className: \"btn btn-primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 15\n    }\n  }, \"Masuk dengan Google\")), __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_8__[\"Divider\"], {\n    className: \"hr-label\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 15\n    }\n  }, \"atau\"))) : null, __jsx(\"form\", {\n    onSubmit: onSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"input-group mb-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    className: \"form-control\",\n    placeholder: \"Email\",\n    maxLength: 30,\n    \"aria-label\": \"Email\",\n    \"aria-describedby\": \"basic-addon1\",\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        email: e.target.value\n      }));\n    },\n    required: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    className: \"input-group mb-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"password\",\n    className: \"form-control\",\n    placeholder: \"Kata sandi\",\n    maxLength: 30,\n    \"aria-label\": \"Password\",\n    \"aria-describedby\": \"basic-addon1\",\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        password: e.target.value\n      }));\n    },\n    required: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }\n  })), !Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"isEmpty\"])(isSuccess) && __jsx(\"div\", {\n    className: \"alert alert-danger alert-dismissible fade show\",\n    role: \"alert\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 13\n    }\n  }, Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"capitalize\"])(isSuccess)), __jsx(\"div\", {\n    className: \"btn-group mb-3\",\n    role: \"group\",\n    \"aria-label\": \"Basic example\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 13\n    }\n  }, router.pathname === '/login' ? 'Masuk' : 'Daftar')), router.pathname === '/login' ? __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_8__[\"LinkAuth\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 44\n    }\n  }, \"Belum punya akun? \", __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    href: \"/register\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 72\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 95\n    }\n  }, \"Daftar\"))) : __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_8__[\"LinkAuth\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 129\n    }\n  }, \"Sudah punya akun? \", __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    href: \"/login\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 157\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 177\n    }\n  }, \"Masuk\"))))));\n};\n\n_s(Auth, \"UvBIX4v5bw6AHL12Nvk9JqBg4bU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = Auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);\n\nvar _c;\n\n$RefreshReg$(_c, \"Auth\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRoL0F1dGguanN4PzJjMmMiXSwibmFtZXMiOlsiQXV0aCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImZvcm0iLCJzZXRGb3JtIiwiaXNTdWNjZXNzIiwic2V0U3VjY2VzcyIsInVzZUVmZmVjdCIsImlzRW1wdHkiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHVzaCIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFwaVBvc3RBdXRoIiwicGF0aG5hbWUiLCJyZXNwb25zZSIsInNldEl0ZW0iLCJkYXRhIiwidG9rZW4iLCJzdGF0dXMiLCJzZXRUaW1lb3V0IiwiZSIsInRhcmdldCIsInZhbHVlIiwiY2FwaXRhbGl6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU9BLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEaUIsa0JBRU9DLHNEQUFRLENBQUM7QUFDL0JDLFNBQUssRUFBRSxFQUR3QjtBQUUvQkMsWUFBUSxFQUFFO0FBRnFCLEdBQUQsQ0FGZjtBQUFBLE1BRVZDLElBRlU7QUFBQSxNQUVKQyxPQUZJOztBQUFBLG1CQU1lSixzREFBUSxDQUFDLEVBQUQsQ0FOdkI7QUFBQSxNQU1WSyxTQU5VO0FBQUEsTUFNQ0MsVUFORDs7QUFRakJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksQ0FBQ0Msc0RBQU8sQ0FBQ0MsTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixTQUE1QixDQUFELENBQVosRUFBc0Q7QUFDcERiLFlBQU0sQ0FBQ2MsSUFBUCxDQUFZLEdBQVo7QUFDRDtBQUNGLEdBSlEsRUFJTixFQUpNLENB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QUNFO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFBc0IsYUFBUyxFQUFDLGlCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW1EUCxNQUFNLENBQUNtQixRQUFQLEtBQW9CLFFBQXBCLEdBQStCLE9BQS9CLEdBQXlDLFFBQTVGLENBREYsQ0E3QkYsRUFnQ0luQixNQUFNLENBQUNtQixRQUFQLEtBQW9CLFFBQXBCLEdBQStCLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBNEIsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUF2QixDQUE1QixDQUEvQixHQUFvSCxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBQTRCLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBcEIsQ0FBNUIsQ0FoQ3hILENBZEYsQ0FERixDQURGO0FBcURELENBM0ZEOztHQUFNcEIsSTtVQUNXRSxxRDs7O0tBRFhGLEk7QUE2RlNBLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BdXRoL0F1dGguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBpUG9zdEF1dGggfSBmcm9tICcuLi8uLi91dGlscy9hcGknXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGlzRW1wdHksIGNhcGl0YWxpemUgfSBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQge1xuICBDb250YWluZXIsIEF1dGhDYXJkLFxuICBUaXRsZSwgTG9nb0dvb2dsZSxcbiAgQnV0dG9uR29vZ2xlLCBEaXZpZGVyLFxuICBGYUdvb2dsZSwgTGlua0F1dGgsXG59IGZyb20gJy4vYXV0aFN0eWxlJ1xuXG5jb25zdCBBdXRoID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBbZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7XG4gICAgZW1haWw6ICcnLFxuICAgIHBhc3N3b3JkOiAnJyxcbiAgfSlcbiAgY29uc3QgW2lzU3VjY2Vzcywgc2V0U3VjY2Vzc10gPSB1c2VTdGF0ZSgnJylcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNFbXB0eSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzVG9rZW4nKSkpIHtcbiAgICAgIHJvdXRlci5wdXNoKCcvJylcbiAgICB9XG4gIH0sIFtdKVxuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpUG9zdEF1dGgoYGh0dHBzOi8vcmVxcmVzLmluL2FwaSR7cm91dGVyLnBhdGhuYW1lfWAsIGZvcm0pXG5cbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXNUb2tlbicsIHJlc3BvbnNlLmRhdGEudG9rZW4pXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSAnL2xvZ2luJyA/IHNldFN1Y2Nlc3MoJ0Jlcmhhc2lsIG1hc3VrIScpIDogc2V0U3VjY2VzcygnQmVyaGFzaWwgZGFmdGFyIScpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHNldFN1Y2Nlc3MoJycpXG4gICAgICAgICAgcm91dGVyLnB1c2goJy8nKVxuICAgICAgICB9LCA1MDAwKVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcbiAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSAnL2xvZ2luJyA/IHNldFN1Y2Nlc3MoJ0VtYWlsIGF0YXUgUGFzc3dvcmQgc2FsYWghJykgOiBzZXRTdWNjZXNzKCdHYWdhbCBtZW5kYWZ0YXIhJylcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0U3VjY2VzcygnJylcbiAgICAgICAgfSwgNTAwMClcbiAgICAgIH1cbiAgICB9IFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImNvbnRhaW5lci1zbVwiPlxuICAgICAgPEF1dGhDYXJkPlxuICAgICAgICB7IHJvdXRlci5wYXRobmFtZSA9PT0gJy9sb2dpbicgPyA8VGl0bGU+TWFzdWs8L1RpdGxlPiA6IDxUaXRsZT5EYWZ0YXI8L1RpdGxlPiB9XG4gICAgICAgIHtcbiAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09ICcvbG9naW4nXG4gICAgICAgICAgPyA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICA8TG9nb0dvb2dsZSBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCIgaWQ9XCJiYXNpYy1hZGRvbjFcIj48RmFHb29nbGUgY2xhc3NOYW1lPVwiZmFiIGZhLWdvb2dsZVwiPjwvRmFHb29nbGU+PC9Mb2dvR29vZ2xlPlxuICAgICAgICAgICAgICA8QnV0dG9uR29vZ2xlIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5NYXN1ayBkZW5nYW4gR29vZ2xlPC9CdXR0b25Hb29nbGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxEaXZpZGVyIGNsYXNzTmFtZT1cImhyLWxhYmVsXCI+XG4gICAgICAgICAgICAgIDxzcGFuPmF0YXU8L3NwYW4+XG4gICAgICAgICAgICA8L0RpdmlkZXI+XG4gICAgICAgICAgPC8+IDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgbWF4TGVuZ3RoPXszMH1cbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uMVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJLYXRhIHNhbmRpXCJcbiAgICAgICAgICAgICAgbWF4TGVuZ3RoPXszMH1cbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uMVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgcmVxdWlyZWQvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsgIWlzRW1wdHkoaXNTdWNjZXNzKSAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlciBhbGVydC1kaXNtaXNzaWJsZSBmYWRlIHNob3dcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgICAge2NhcGl0YWxpemUoaXNTdWNjZXNzKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXAgbWItM1wiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJCYXNpYyBleGFtcGxlXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj57cm91dGVyLnBhdGhuYW1lID09PSAnL2xvZ2luJyA/ICdNYXN1aycgOiAnRGFmdGFyJ308L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7IHJvdXRlci5wYXRobmFtZSA9PT0gJy9sb2dpbicgPyA8TGlua0F1dGg+QmVsdW0gcHVueWEgYWt1bj8gPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiPjxhPkRhZnRhcjwvYT48L0xpbms+PC9MaW5rQXV0aD4gOiA8TGlua0F1dGg+U3VkYWggcHVueWEgYWt1bj8gPExpbmsgaHJlZj1cIi9sb2dpblwiPjxhPk1hc3VrPC9hPjwvTGluaz48L0xpbmtBdXRoPiB9XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvQXV0aENhcmQ+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Auth/Auth.jsx\n");

/***/ })

})