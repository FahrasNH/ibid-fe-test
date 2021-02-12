webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Auth/Auth.jsx":
/*!**********************************!*\
  !*** ./components/Auth/Auth.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/api */ \"./utils/api.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _authStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authStyle */ \"./components/Auth/authStyle.js\");\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/fahrasnurhidayat/Documents/Fahras/Public/Portofolio/ibid-fe-test/components/Auth/Auth.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar Auth = function Auth() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])({\n    email: '',\n    password: ''\n  }),\n      form = _useState[0],\n      setForm = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      isMessage = _useState2[0],\n      setMessage = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    if (!Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"isEmpty\"])(window.localStorage.getItem('isToken'))) {\n      router.push('/');\n    }\n  }, []);\n\n  var onSubmit = /*#__PURE__*/function () {\n    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(event) {\n      var response;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n              _context.prev = 1;\n              _context.next = 4;\n              return Object(_utils_api__WEBPACK_IMPORTED_MODULE_4__[\"apiPostAuth\"])(\"https://reqres.in/api\".concat(router.pathname), form);\n\n            case 4:\n              response = _context.sent;\n              window.localStorage.setItem('isToken', response.data.token);\n\n              if (response.status === 200) {\n                setTimeout(function () {\n                  router.pathname === '/login' ? setMessage('Berhasil masuk!') : setMessage('Berhasil daftar!');\n                }, 5000).then(function () {\n                  return router.push('/');\n                });\n              }\n\n              _context.next = 12;\n              break;\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](1);\n\n              if (_context.t0.response.status === 400) {\n                router.pathname === '/login' ? setMessage('Email atau Password salah!') : setMessage('Gagal mendaftar!');\n                setTimeout(function () {\n                  setMessage('');\n                }, 5000);\n              }\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 9]]);\n    }));\n\n    return function onSubmit(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  return __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_8__[\"Container\"], {\n    className: \"container-sm\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 5\n    }\n  }, __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_8__[\"AuthCard\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }, router.pathname === '/login' ? __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_8__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 42\n    }\n  }, \"Masuk\") : __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_8__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 65\n    }\n  }, \"Daftar\"), router.pathname === '/login' ? __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"input-group\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }\n  }, __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_8__[\"LogoGoogle\"], {\n    className: \"input-group-text\",\n    id: \"basic-addon1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 15\n    }\n  }, __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_8__[\"FaGoogle\"], {\n    className: \"fab fa-google\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 74\n    }\n  })), __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_8__[\"ButtonGoogle\"], {\n    type: \"submit\",\n    className: \"btn btn-primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 15\n    }\n  }, \"Masuk dengan Google\")), __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_8__[\"Divider\"], {\n    className: \"hr-label\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 15\n    }\n  }, \"atau\"))) : null, __jsx(\"form\", {\n    onSubmit: onSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"input-group mb-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    className: \"form-control\",\n    placeholder: \"Email\",\n    maxLength: 30,\n    \"aria-label\": \"Email\",\n    \"aria-describedby\": \"basic-addon1\",\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        email: e.target.value\n      }));\n    },\n    required: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    className: \"input-group mb-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"password\",\n    className: \"form-control\",\n    placeholder: \"Kata sandi\",\n    maxLength: 30,\n    \"aria-label\": \"Password\",\n    \"aria-describedby\": \"basic-addon1\",\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        password: e.target.value\n      }));\n    },\n    required: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }\n  })), !Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"isEmpty\"])(isMessage) && __jsx(\"div\", {\n    className: \"alert alert-danger alert-dismissible fade show\",\n    role: \"alert\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 13\n    }\n  }, Object(lodash__WEBPACK_IMPORTED_MODULE_6__[\"capitalize\"])(isMessage)), __jsx(\"div\", {\n    className: \"btn-group mb-3\",\n    role: \"group\",\n    \"aria-label\": \"Basic example\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 13\n    }\n  }, router.pathname === '/login' ? 'Masuk' : 'Daftar')), router.pathname === '/login' ? __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_8__[\"LinkAuth\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 44\n    }\n  }, \"Belum punya akun? \", __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    href: \"/register\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 72\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 95\n    }\n  }, \"Daftar\"))) : __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_8__[\"LinkAuth\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 129\n    }\n  }, \"Sudah punya akun? \", __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    href: \"/login\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 157\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 177\n    }\n  }, \"Masuk\"))))));\n};\n\n_s(Auth, \"2L8rAn5ciTm1vMF+o52syYHGuZ8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = Auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);\n\nvar _c;\n\n$RefreshReg$(_c, \"Auth\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRoL0F1dGguanN4PzJjMmMiXSwibmFtZXMiOlsiQXV0aCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImZvcm0iLCJzZXRGb3JtIiwiaXNNZXNzYWdlIiwic2V0TWVzc2FnZSIsInVzZUVmZmVjdCIsImlzRW1wdHkiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHVzaCIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFwaVBvc3RBdXRoIiwicGF0aG5hbWUiLCJyZXNwb25zZSIsInNldEl0ZW0iLCJkYXRhIiwidG9rZW4iLCJzdGF0dXMiLCJzZXRUaW1lb3V0IiwidGhlbiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNhcGl0YWxpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRGlCLGtCQUVPQyxzREFBUSxDQUFDO0FBQy9CQyxTQUFLLEVBQUUsRUFEd0I7QUFFL0JDLFlBQVEsRUFBRTtBQUZxQixHQUFELENBRmY7QUFBQSxNQUVWQyxJQUZVO0FBQUEsTUFFSkMsT0FGSTs7QUFBQSxtQkFNZUosc0RBQVEsQ0FBQyxFQUFELENBTnZCO0FBQUEsTUFNVkssU0FOVTtBQUFBLE1BTUNDLFVBTkQ7O0FBUWpCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJLENBQUNDLHNEQUFPLENBQUNDLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsU0FBNUIsQ0FBRCxDQUFaLEVBQXNEO0FBQ3BEYixZQUFNLENBQUNjLElBQVAsQ0FBWSxHQUFaO0FBQ0Q7QUFDRixHQUpRLEVBSU4s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O0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUFzQixhQUFTLEVBQUMsaUJBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbURQLE1BQU0sQ0FBQ21CLFFBQVAsS0FBb0IsUUFBcEIsR0FBK0IsT0FBL0IsR0FBeUMsUUFBNUYsQ0FERixDQTdCRixFQWdDSW5CLE1BQU0sQ0FBQ21CLFFBQVAsS0FBb0IsUUFBcEIsR0FBK0IsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUE0QixNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQXZCLENBQTVCLENBQS9CLEdBQW9ILE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBNEIsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFwQixDQUE1QixDQWhDeEgsQ0FkRixDQURGLENBREY7QUFxREQsQ0F6RkQ7O0dBQU1wQixJO1VBQ1dFLHFEOzs7S0FEWEYsSTtBQTJGU0EsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0F1dGgvQXV0aC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcGlQb3N0QXV0aCB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaSdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgaXNFbXB0eSwgY2FwaXRhbGl6ZSB9IGZyb20gJ2xvZGFzaCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7XG4gIENvbnRhaW5lciwgQXV0aENhcmQsXG4gIFRpdGxlLCBMb2dvR29vZ2xlLFxuICBCdXR0b25Hb29nbGUsIERpdmlkZXIsXG4gIEZhR29vZ2xlLCBMaW5rQXV0aCxcbn0gZnJvbSAnLi9hdXRoU3R5bGUnXG5cbmNvbnN0IEF1dGggPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHtcbiAgICBlbWFpbDogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICB9KVxuICBjb25zdCBbaXNNZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc0VtcHR5KHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXNUb2tlbicpKSkge1xuICAgICAgcm91dGVyLnB1c2goJy8nKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGlQb3N0QXV0aChgaHR0cHM6Ly9yZXFyZXMuaW4vYXBpJHtyb3V0ZXIucGF0aG5hbWV9YCwgZm9ybSlcblxuICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpc1Rva2VuJywgcmVzcG9uc2UuZGF0YS50b2tlbilcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09ICcvbG9naW4nID8gc2V0TWVzc2FnZSgnQmVyaGFzaWwgbWFzdWshJykgOiBzZXRNZXNzYWdlKCdCZXJoYXNpbCBkYWZ0YXIhJylcbiAgICAgICAgfSwgNTAwMCkudGhlbigoKSA9PiByb3V0ZXIucHVzaCgnLycpKVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcbiAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSAnL2xvZ2luJyA/IHNldE1lc3NhZ2UoJ0VtYWlsIGF0YXUgUGFzc3dvcmQgc2FsYWghJykgOiBzZXRNZXNzYWdlKCdHYWdhbCBtZW5kYWZ0YXIhJylcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgc2V0TWVzc2FnZSgnJylcbiAgICAgICAgfSwgNTAwMClcbiAgICAgIH1cbiAgICB9IFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImNvbnRhaW5lci1zbVwiPlxuICAgICAgPEF1dGhDYXJkPlxuICAgICAgICB7IHJvdXRlci5wYXRobmFtZSA9PT0gJy9sb2dpbicgPyA8VGl0bGU+TWFzdWs8L1RpdGxlPiA6IDxUaXRsZT5EYWZ0YXI8L1RpdGxlPiB9XG4gICAgICAgIHtcbiAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09ICcvbG9naW4nXG4gICAgICAgICAgPyA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICA8TG9nb0dvb2dsZSBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0XCIgaWQ9XCJiYXNpYy1hZGRvbjFcIj48RmFHb29nbGUgY2xhc3NOYW1lPVwiZmFiIGZhLWdvb2dsZVwiPjwvRmFHb29nbGU+PC9Mb2dvR29vZ2xlPlxuICAgICAgICAgICAgICA8QnV0dG9uR29vZ2xlIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5NYXN1ayBkZW5nYW4gR29vZ2xlPC9CdXR0b25Hb29nbGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxEaXZpZGVyIGNsYXNzTmFtZT1cImhyLWxhYmVsXCI+XG4gICAgICAgICAgICAgIDxzcGFuPmF0YXU8L3NwYW4+XG4gICAgICAgICAgICA8L0RpdmlkZXI+XG4gICAgICAgICAgPC8+IDogbnVsbFxuICAgICAgICB9XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgbWF4TGVuZ3RoPXszMH1cbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uMVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIGVtYWlsOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJLYXRhIHNhbmRpXCJcbiAgICAgICAgICAgICAgbWF4TGVuZ3RoPXszMH1cbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uMVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgcmVxdWlyZWQvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsgIWlzRW1wdHkoaXNNZXNzYWdlKSAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlciBhbGVydC1kaXNtaXNzaWJsZSBmYWRlIHNob3dcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgICAge2NhcGl0YWxpemUoaXNNZXNzYWdlKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXAgbWItM1wiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJCYXNpYyBleGFtcGxlXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj57cm91dGVyLnBhdGhuYW1lID09PSAnL2xvZ2luJyA/ICdNYXN1aycgOiAnRGFmdGFyJ308L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7IHJvdXRlci5wYXRobmFtZSA9PT0gJy9sb2dpbicgPyA8TGlua0F1dGg+QmVsdW0gcHVueWEgYWt1bj8gPExpbmsgaHJlZj1cIi9yZWdpc3RlclwiPjxhPkRhZnRhcjwvYT48L0xpbms+PC9MaW5rQXV0aD4gOiA8TGlua0F1dGg+U3VkYWggcHVueWEgYWt1bj8gPExpbmsgaHJlZj1cIi9sb2dpblwiPjxhPk1hc3VrPC9hPjwvTGluaz48L0xpbmtBdXRoPiB9XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvQXV0aENhcmQ+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Auth/Auth.jsx\n");

/***/ })

})