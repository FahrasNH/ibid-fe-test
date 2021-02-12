webpackHotUpdate_N_E("pages/login",{

/***/ "./components/Auth/Auth.jsx":
/*!**********************************!*\
  !*** ./components/Auth/Auth.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _authStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authStyle */ \"./components/Auth/authStyle.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/fahrasnurhidayat/Documents/Fahras/Public/Portofolio/ibid-fe-test/components/Auth/Auth.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\nvar Auth = function Auth() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    email: '',\n    password: ''\n  }),\n      form = _useState[0],\n      setForm = _useState[1];\n\n  var onSubmit = function onSubmit(event) {\n    event.preventDefault();\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(\"https://reqres.in/api\".concat(router.pathname), form).then(function (response) {\n      window.localStorage.setItem('isToken', response.data.token);\n      console.log(response); // if (response.meta.status) {\n      //   router.push('/login')\n      // }\n    })[\"catch\"](function (error) {\n      console.log(error);\n    });\n  };\n\n  return __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_5__[\"Container\"], {\n    className: \"container-sm\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_5__[\"AuthCard\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, router.pathname === '/login' ? __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_5__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 42\n    }\n  }, \"Masuk\") : __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_5__[\"Title\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 65\n    }\n  }, \"Daftar\"), router.pathname === '/login' ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"input-group\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_5__[\"LogoGoogle\"], {\n    className: \"input-group-text\",\n    id: \"basic-addon1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 15\n    }\n  }, __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_5__[\"FaGoogle\"], {\n    className: \"fab fa-google\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 74\n    }\n  })), __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_5__[\"ButtonGoogle\"], {\n    type: \"submit\",\n    className: \"btn btn-primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 15\n    }\n  }, \"Masuk dengan Google\")), __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_5__[\"Divider\"], {\n    className: \"hr-label\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 15\n    }\n  }, \"atau\"))) : null, __jsx(\"form\", {\n    onSubmit: onSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    className: \"input-group mb-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    className: \"form-control\",\n    placeholder: \"Email\",\n    maxLength: 30,\n    \"aria-label\": \"Email\",\n    \"aria-describedby\": \"basic-addon1\",\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        email: e.target.value\n      }));\n    },\n    required: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    className: \"input-group mb-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  }, __jsx(\"input\", {\n    type: \"password\",\n    className: \"form-control\",\n    placeholder: \"Kata sandi\",\n    maxLength: 30,\n    \"aria-label\": \"Password\",\n    \"aria-describedby\": \"basic-addon1\",\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        password: e.target.value\n      }));\n    },\n    required: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    className: \"btn-group mb-3\",\n    role: \"group\",\n    \"aria-label\": \"Basic example\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 11\n    }\n  }, __jsx(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 13\n    }\n  }, \"Masuk\")), router.pathname === '/login' ? __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_5__[\"LinkAuth\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 44\n    }\n  }, \"Belum punya akun? \", __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    href: \"/register\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 72\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 95\n    }\n  }, \"Daftar\"))) : __jsx(_authStyle__WEBPACK_IMPORTED_MODULE_5__[\"LinkAuth\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 129\n    }\n  }, \"Sudah punya akun? \", __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    href: \"/login\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 157\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 177\n    }\n  }, \"Masuk\"))))));\n};\n\n_s(Auth, \"YL47C+QtbOBXttjDnC2LbQaiZC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);\n\nvar _c;\n\n$RefreshReg$(_c, \"Auth\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRoL0F1dGguanN4PzJjMmMiXSwibmFtZXMiOlsiQXV0aCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImZvcm0iLCJzZXRGb3JtIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYXhpb3MiLCJwb3N0IiwicGF0aG5hbWUiLCJ0aGVuIiwicmVzcG9uc2UiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZGF0YSIsInRva2VuIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU9BLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEaUIsa0JBRU9DLHNEQUFRLENBQUM7QUFDL0JDLFNBQUssRUFBRSxFQUR3QjtBQUUvQkMsWUFBUSxFQUFFO0FBRnFCLEdBQUQsQ0FGZjtBQUFBLE1BRVZDLElBRlU7QUFBQSxNQUVKQyxPQUZJOztBQU9qQixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFDMUJBLFNBQUssQ0FBQ0MsY0FBTjtBQUVBQyxnREFBSyxDQUFDQyxJQUFOLGdDQUFtQ1gsTUFBTSxDQUFDWSxRQUExQyxHQUFzRFAsSUFBdEQsRUFDQ1EsSUFERCxDQUNNLFVBQVVDLFFBQVYsRUFBb0I7QUFDeEJDLFlBQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsU0FBNUIsRUFBdUNILFFBQVEsQ0FBQ0ksSUFBVCxDQUFjQyxLQUFyRDtBQUVBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWVAsUUFBWixFQUh3QixDQUl4QjtBQUNBO0FBQ0E7QUFDRCxLQVJE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LGlCQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsQ0F4QkYsRUEyQkl6QixNQUFNLENBQUNZLFFBQVAsS0FBb0IsUUFBcEIsR0FBK0IsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUE0QixNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQXZCLENBQTVCLENBQS9CLEdBQW9ILE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFBNEIsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFwQixDQUE1QixDQTNCeEgsQ0FkRixDQURGLENBREY7QUFnREQsQ0F4RUQ7O0dBQU1iLEk7VUFDV0UscUQ7OztLQURYRixJO0FBMEVTQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQXV0aC9BdXRoLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7XG4gIENvbnRhaW5lciwgQXV0aENhcmQsXG4gIFRpdGxlLCBMb2dvR29vZ2xlLFxuICBCdXR0b25Hb29nbGUsIERpdmlkZXIsXG4gIEZhR29vZ2xlLCBMaW5rQXV0aCxcbn0gZnJvbSAnLi9hdXRoU3R5bGUnXG5cbmNvbnN0IEF1dGggPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFtmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHtcbiAgICBlbWFpbDogJycsXG4gICAgcGFzc3dvcmQ6ICcnLFxuICB9KVxuXG4gIGNvbnN0IG9uU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgYXhpb3MucG9zdChgaHR0cHM6Ly9yZXFyZXMuaW4vYXBpJHtyb3V0ZXIucGF0aG5hbWV9YCwgZm9ybSlcbiAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXNUb2tlbicsIHJlc3BvbnNlLmRhdGEudG9rZW4pXG5cbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgLy8gaWYgKHJlc3BvbnNlLm1ldGEuc3RhdHVzKSB7XG4gICAgICAvLyAgIHJvdXRlci5wdXNoKCcvbG9naW4nKVxuICAgICAgLy8gfVxuICAgIH0pXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH0pXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwiY29udGFpbmVyLXNtXCI+XG4gICAgICA8QXV0aENhcmQ+XG4gICAgICAgIHsgcm91dGVyLnBhdGhuYW1lID09PSAnL2xvZ2luJyA/IDxUaXRsZT5NYXN1azwvVGl0bGU+IDogPFRpdGxlPkRhZnRhcjwvVGl0bGU+IH1cbiAgICAgICAge1xuICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gJy9sb2dpbidcbiAgICAgICAgICA/IDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxMb2dvR29vZ2xlIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHRcIiBpZD1cImJhc2ljLWFkZG9uMVwiPjxGYUdvb2dsZSBjbGFzc05hbWU9XCJmYWIgZmEtZ29vZ2xlXCI+PC9GYUdvb2dsZT48L0xvZ29Hb29nbGU+XG4gICAgICAgICAgICAgIDxCdXR0b25Hb29nbGUgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPk1hc3VrIGRlbmdhbiBHb29nbGU8L0J1dHRvbkdvb2dsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPERpdmlkZXIgY2xhc3NOYW1lPVwiaHItbGFiZWxcIj5cbiAgICAgICAgICAgICAgPHNwYW4+YXRhdTwvc3Bhbj5cbiAgICAgICAgICAgIDwvRGl2aWRlcj5cbiAgICAgICAgICA8Lz4gOiBudWxsXG4gICAgICAgIH1cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuICAgICAgICAgICAgICBtYXhMZW5ndGg9ezMwfVxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiRW1haWxcIlxuICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiYmFzaWMtYWRkb24xXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtKHsgLi4uZm9ybSwgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTNcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkthdGEgc2FuZGlcIlxuICAgICAgICAgICAgICBtYXhMZW5ndGg9ezMwfVxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiYmFzaWMtYWRkb24xXCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtKHsgLi4uZm9ybSwgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICByZXF1aXJlZC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG4tZ3JvdXAgbWItM1wiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJCYXNpYyBleGFtcGxlXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5NYXN1azwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHsgcm91dGVyLnBhdGhuYW1lID09PSAnL2xvZ2luJyA/IDxMaW5rQXV0aD5CZWx1bSBwdW55YSBha3VuPyA8TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+PGE+RGFmdGFyPC9hPjwvTGluaz48L0xpbmtBdXRoPiA6IDxMaW5rQXV0aD5TdWRhaCBwdW55YSBha3VuPyA8TGluayBocmVmPVwiL2xvZ2luXCI+PGE+TWFzdWs8L2E+PC9MaW5rPjwvTGlua0F1dGg+IH1cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9BdXRoQ2FyZD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Auth/Auth.jsx\n");

/***/ })

})