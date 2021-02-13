webpackHotUpdate_N_E("pages/login",{

/***/ "./components/Dashboard/Dashboard.jsx":
/*!********************************************!*\
  !*** ./components/Dashboard/Dashboard.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _test_6__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-6 */ \"./components/Dashboard/test-6.js\");\n/* harmony import */ var _dashboardStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboardStyle */ \"./components/Dashboard/dashboardStyle.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/fahrasnurhidayat/Documents/Fahras/Public/Portofolio/ibid-fe-test/components/Dashboard/Dashboard.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Dashboard = function Dashboard() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      billdetails = _useState[0],\n      setBilldetails = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    type: '',\n    name: '',\n    email: '',\n    imageUrl: '',\n    account_id: ''\n  }),\n      isProfile = _useState2[0],\n      setProfile = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var bills = _test_6__WEBPACK_IMPORTED_MODULE_3__[\"data\"].data.response.billdetails;\n\n    if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"isEmpty\"])(window.localStorage.getItem('isToken'))) {\n      router.push('/login');\n    } else {\n      setBilldetails(bills.filter(function (bill) {\n        return bill.body.DENOM >= 100000;\n      }));\n      setProfile(JSON.parse(window.localStorage.getItem('isProfile')));\n    }\n  }, []);\n\n  var handleLogout = function handleLogout() {\n    window.localStorage.removeItem('isToken');\n    window.localStorage.removeItem('isProfile');\n    router.push('/');\n  };\n\n  return __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_4__[\"RowHeader\"], {\n    className: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_4__[\"ColProfile\"], {\n    className: \"col-lg-11\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_4__[\"ImageProfile\"], {\n    src: isProfile.imageUrl || __webpack_require__(/*! ../../assets/icons/ibid.png */ \"./assets/icons/ibid.png\"),\n    alt: \"\".concat(isProfile.type || 'load', \"-img\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_4__[\"TextName\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }, isProfile.name), __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_4__[\"TextEmail\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, isProfile.email))), __jsx(\"div\", {\n    className: \"col-lg-1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_4__[\"LogoutButton\"], {\n    className: \"btn btn-primary\",\n    onClick: handleLogout,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 11\n    }\n  }, \"Keluar\"))), __jsx(\"div\", {\n    className: \"row\",\n    style: {\n      marginRight: 50,\n      marginLeft: 50\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, billdetails.map(function (item, idx) {\n    return __jsx(\"p\", {\n      key: idx,\n      style: {\n        padding: 0\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 13\n      }\n    }, \"[\".concat(idx, \"]\"), \" => \", item.body.DENOM);\n  })));\n};\n\n_s(Dashboard, \"2Onyd0xqLjrvaSqKvq9bBKRkBzU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\n\nvar _c;\n\n$RefreshReg$(_c, \"Dashboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkLmpzeD81NWY4Il0sIm5hbWVzIjpbIkRhc2hib2FyZCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiYmlsbGRldGFpbHMiLCJzZXRCaWxsZGV0YWlscyIsInR5cGUiLCJuYW1lIiwiZW1haWwiLCJpbWFnZVVybCIsImFjY291bnRfaWQiLCJpc1Byb2ZpbGUiLCJzZXRQcm9maWxlIiwidXNlRWZmZWN0IiwiYmlsbHMiLCJkYXRhIiwicmVzcG9uc2UiLCJpc0VtcHR5Iiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInB1c2giLCJmaWx0ZXIiLCJiaWxsIiwiYm9keSIsIkRFTk9NIiwiSlNPTiIsInBhcnNlIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsInJlcXVpcmUiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkxlZnQiLCJtYXAiLCJpdGVtIiwiaWR4IiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQ3RCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRHNCLGtCQUVnQkMsc0RBQVEsQ0FBQyxFQUFELENBRnhCO0FBQUEsTUFFZkMsV0FGZTtBQUFBLE1BRUZDLGNBRkU7O0FBQUEsbUJBR1VGLHNEQUFRLENBQUM7QUFDdkNHLFFBQUksRUFBRSxFQURpQztBQUV2Q0MsUUFBSSxFQUFFLEVBRmlDO0FBR3ZDQyxTQUFLLEVBQUUsRUFIZ0M7QUFJdkNDLFlBQVEsRUFBRSxFQUo2QjtBQUt2Q0MsY0FBVSxFQUFFO0FBTDJCLEdBQUQsQ0FIbEI7QUFBQSxNQUdmQyxTQUhlO0FBQUEsTUFHSkMsVUFISTs7QUFXdEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLEtBQUssR0FBR0MsNENB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L0Rhc2hib2FyZC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi90ZXN0LTYnXG5pbXBvcnQge1xuICBDb250YWluZXIsIEltYWdlUHJvZmlsZSxcbiAgVGV4dE5hbWUsIFRleHRFbWFpbCxcbiAgQ29sUHJvZmlsZSwgUm93SGVhZGVyLFxuICBMb2dvdXRCdXR0b24sXG59IGZyb20gJy4vZGFzaGJvYXJkU3R5bGUnXG5cbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW2JpbGxkZXRhaWxzLCBzZXRCaWxsZGV0YWlsc10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2lzUHJvZmlsZSwgc2V0UHJvZmlsZV0gPSB1c2VTdGF0ZSh7XG4gICAgdHlwZTogJycsXG4gICAgbmFtZTogJycsXG4gICAgZW1haWw6ICcnLFxuICAgIGltYWdlVXJsOiAnJyxcbiAgICBhY2NvdW50X2lkOiAnJyxcbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGJpbGxzID0gZGF0YS5kYXRhLnJlc3BvbnNlLmJpbGxkZXRhaWxzXG4gICAgaWYgKGlzRW1wdHkod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpc1Rva2VuJykpKSB7XG4gICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJylcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0QmlsbGRldGFpbHMoYmlsbHMuZmlsdGVyKGJpbGwgPT4gYmlsbC5ib2R5LkRFTk9NID49IDEwMDAwMCkpXG4gICAgICBzZXRQcm9maWxlKEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpc1Byb2ZpbGUnKSkpXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpc1Rva2VuJylcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2lzUHJvZmlsZScpXG5cbiAgICByb3V0ZXIucHVzaCgnLycpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8Um93SGVhZGVyIGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8Q29sUHJvZmlsZSBjbGFzc05hbWU9XCJjb2wtbGctMTFcIj5cbiAgICAgICAgICA8SW1hZ2VQcm9maWxlIHNyYz17aXNQcm9maWxlLmltYWdlVXJsIHx8IHJlcXVpcmUoJy4uLy4uL2Fzc2V0cy9pY29ucy9pYmlkLnBuZycpfSBhbHQ9e2Ake2lzUHJvZmlsZS50eXBlIHx8ICdsb2FkJ30taW1nYH0vPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8VGV4dE5hbWU+e2lzUHJvZmlsZS5uYW1lfTwvVGV4dE5hbWU+XG4gICAgICAgICAgICA8VGV4dEVtYWlsPntpc1Byb2ZpbGUuZW1haWx9PC9UZXh0RW1haWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sUHJvZmlsZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMVwiPlxuICAgICAgICAgIDxMb2dvdXRCdXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5LZWx1YXI8L0xvZ291dEJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1Jvd0hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDUwLCBtYXJnaW5MZWZ0OiA1MCB9fT5cbiAgICAgICAge1xuICAgICAgICAgIGJpbGxkZXRhaWxzLm1hcCgoaXRlbSwgaWR4KSA9PiAoXG4gICAgICAgICAgICA8cCBrZXk9e2lkeH0gc3R5bGU9e3sgcGFkZGluZzogMCB9fT57YFske2lkeH1dYH17YCA9PiBgfXtpdGVtLmJvZHkuREVOT019PC9wPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Dashboard/Dashboard.jsx\n");

/***/ })

})