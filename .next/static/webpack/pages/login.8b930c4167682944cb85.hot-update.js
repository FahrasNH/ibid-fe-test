webpackHotUpdate_N_E("pages/login",{

/***/ "./components/Dashboard/Dashboard.jsx":
/*!********************************************!*\
  !*** ./components/Dashboard/Dashboard.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _test_6__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-6 */ \"./components/Dashboard/test-6.js\");\n/* harmony import */ var _dashboardStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboardStyle */ \"./components/Dashboard/dashboardStyle.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/fahrasnurhidayat/Documents/Fahras/Public/Portofolio/ibid-fe-test/components/Dashboard/Dashboard.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Dashboard = function Dashboard() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      billdetails = _useState[0],\n      setBilldetails = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    type: '',\n    name: '',\n    email: '',\n    imageUrl: '',\n    account_id: ''\n  }),\n      isProfile = _useState2[0],\n      setProfile = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var bills = _test_6__WEBPACK_IMPORTED_MODULE_3__[\"data\"].data.response.billdetails;\n\n    if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"isEmpty\"])(window.localStorage.getItem('isToken'))) {\n      router.push('/login');\n    } else {\n      setBilldetails(bills.filter(function (bill) {\n        return bill.body.DENOM >= 100000;\n      }));\n      setProfile(JSON.parse(window.localStorage.getItem('isProfile')));\n    }\n  }, []);\n\n  var handleLogout = function handleLogout() {\n    window.localStorage.removeItem('isToken');\n    window.localStorage.removeItem('isProfile');\n    router.push('/');\n  };\n\n  return __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n    className: \"container-sm\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_4__[\"RowHeader\"], {\n    className: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_4__[\"ColProfile\"], {\n    className: \"col-lg-11\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_4__[\"ImageProfile\"], {\n    src: isProfile.imageUrl || __webpack_require__(/*! ../../assets/icons/ibid.png */ \"./assets/icons/ibid.png\"),\n    alt: \"\".concat(isProfile.type || 'load', \"-img\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_4__[\"TextName\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }, isProfile.name), __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_4__[\"TextEmail\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, isProfile.email))), __jsx(\"div\", {\n    className: \"col-lg-1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_4__[\"LogoutButton\"], {\n    className: \"btn btn-primary\",\n    onClick: handleLogout,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 11\n    }\n  }, \"Keluar\"))), __jsx(\"div\", {\n    className: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, billdetails.map(function (item, idx) {\n    return __jsx(\"p\", {\n      key: idx,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 13\n      }\n    }, \"[\".concat(idx, \"]\"), \" => \", item.body.DENOM);\n  })));\n};\n\n_s(Dashboard, \"2Onyd0xqLjrvaSqKvq9bBKRkBzU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\n\nvar _c;\n\n$RefreshReg$(_c, \"Dashboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkLmpzeD81NWY4Il0sIm5hbWVzIjpbIkRhc2hib2FyZCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiYmlsbGRldGFpbHMiLCJzZXRCaWxsZGV0YWlscyIsInR5cGUiLCJuYW1lIiwiZW1haWwiLCJpbWFnZVVybCIsImFjY291bnRfaWQiLCJpc1Byb2ZpbGUiLCJzZXRQcm9maWxlIiwidXNlRWZmZWN0IiwiYmlsbHMiLCJkYXRhIiwicmVzcG9uc2UiLCJpc0VtcHR5Iiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInB1c2giLCJmaWx0ZXIiLCJiaWxsIiwiYm9keSIsIkRFTk9NIiwiSlNPTiIsInBhcnNlIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsInJlcXVpcmUiLCJtYXAiLCJpdGVtIiwiaWR4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU9BLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDdEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEc0Isa0JBRWdCQyxzREFBUSxDQUFDLEVBQUQsQ0FGeEI7QUFBQSxNQUVmQyxXQUZlO0FBQUEsTUFFRkMsY0FGRTs7QUFBQSxtQkFHVUYsc0RBQVEsQ0FBQztBQUN2Q0csUUFBSSxFQUFFLEVBRGlDO0FBRXZDQyxRQUFJLEVBQUUsRUFGaUM7QUFHdkNDLFNBQUssRUFBRSxFQUhnQztBQUl2Q0MsWUFBUSxFQUFFLEVBSjZCO0FBS3ZDQyxjQUFVLEVBQUU7QUFMMkIsR0FBRCxDQUhsQjtBQUFBLE1BR2ZDLFNBSGU7QUFBQSxNQUdKQyxVQUhJOztBQVd0QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsS0FBSyxHQUFHQyw0Q0FBSSxDQUFDQSxJQUFMLENBQVVDLFFBQVYsQ0FBbUJaLFdBQWpDOztBQUNBLFFBQUlhLHNEQUFPLENBQUNDLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsU0FBNUIsQ0FBRCxDQUFYLEVBQXFEO0FBQ25EbkIsWUFBTSxDQUFDb0IsSUFBUCxDQUFZLFFBQVo7QUFDRCxLQUZELE1BRU87QUFDTGhCLG9CQUFjLENBQUNTLEtBQUssQ0FBQ1EsTUFBTixDQUFhLFVBQUFDLElBQUk7QUFBQSxlQUFJQSxJQUFJLENBQUNDLElBQUwsQ0FBVUMsS0FBVixJQUFtQixNQUF2QjtBQUFBLE9BQWpCLENBQUQsQ0FBZDtBQUNBYixnQkFBVSxDQUFDYyxJQUFJLENBQUNDLEtBQUwsQ0FBV1QsTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixXQUE1QixDQUFYLENBQUQsQ0FBVjtBQUNEO0FBQ0YsR0FSUSxFQVFOLEVBUk0sQ0FBVDs7QUFVQSxNQUFNUSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCVixVQUFNLENBQUNDLFlBQVAsQ0FBb0JVLFVBQXBCLENBQStCLFNBQS9CO0FBQ0FYLFVBQU0sQ0FBQ0MsWUFBUCxDQUFvQlUsVUFBcEIsQ0FBK0IsV0FBL0I7QUFFQTVCLFVBQU0sQ0FBQ29CLElBQVAsQ0FBWSxHQUFaO0FBQ0QsR0FMRDs7QUFPQSxTQUNFLE1BQUMseURBQUQ7QUFBVyxhQUFTLEVBQUMsY0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBVyxhQUFTLEVBQUMsS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBWSxhQUFTLEVBQUMsV0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBYyxPQUFHLEVBQUVWLFNBQVMsQ0FBQ0YsUUFBVixJQUFzQnFCLG1CQUFPLENBQUMsNERBQUQsQ0FBaEQ7QUFBaUYsT0FBRyxZQUFLbkIsU0FBUyxDQUFDTCxJQUFWLElBQWtCLE1BQXZCLFNBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBV0ssU0FBUyxDQUFDSixJQUFyQixDQURGLEVBRUUsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVlJLFNBQVMsQ0FBQ0gsS0FBdEIsQ0FGRixDQUZGLENBREYsRUFRRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQWMsYUFBUyxFQUFDLGlCQUF4QjtBQUEwQyxXQUFPLEVBQUVvQixZQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsQ0FSRixDQURGLEVBYUU7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUl4QixXQUFXLENBQUMyQixHQUFaLENBQWdCLFVBQUNDLElBQUQsRUFBT0MsR0FBUDtBQUFBLFdBQ2Q7QUFBRyxTQUFHLEVBQUVBLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBa0JBLEdBQWxCLGdCQUFrQ0QsSUFBSSxDQUFDUixJQUFMLENBQVVDLEtBQTVDLENBRGM7QUFBQSxHQUFoQixDQUZKLENBYkYsQ0FERjtBQXVCRCxDQW5ERDs7R0FBTXpCLFM7VUFDV0UscUQ7OztLQURYRixTO0FBcURTQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hib2FyZC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGlzRW1wdHkgfSBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSAnLi90ZXN0LTYnXG5pbXBvcnQge1xuICBDb250YWluZXIsIEltYWdlUHJvZmlsZSxcbiAgVGV4dE5hbWUsIFRleHRFbWFpbCxcbiAgQ29sUHJvZmlsZSwgUm93SGVhZGVyLFxuICBMb2dvdXRCdXR0b24sXG59IGZyb20gJy4vZGFzaGJvYXJkU3R5bGUnXG5cbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgW2JpbGxkZXRhaWxzLCBzZXRCaWxsZGV0YWlsc10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2lzUHJvZmlsZSwgc2V0UHJvZmlsZV0gPSB1c2VTdGF0ZSh7XG4gICAgdHlwZTogJycsXG4gICAgbmFtZTogJycsXG4gICAgZW1haWw6ICcnLFxuICAgIGltYWdlVXJsOiAnJyxcbiAgICBhY2NvdW50X2lkOiAnJyxcbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGJpbGxzID0gZGF0YS5kYXRhLnJlc3BvbnNlLmJpbGxkZXRhaWxzXG4gICAgaWYgKGlzRW1wdHkod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpc1Rva2VuJykpKSB7XG4gICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJylcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0QmlsbGRldGFpbHMoYmlsbHMuZmlsdGVyKGJpbGwgPT4gYmlsbC5ib2R5LkRFTk9NID49IDEwMDAwMCkpXG4gICAgICBzZXRQcm9maWxlKEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpc1Byb2ZpbGUnKSkpXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpc1Rva2VuJylcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2lzUHJvZmlsZScpXG5cbiAgICByb3V0ZXIucHVzaCgnLycpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPVwiY29udGFpbmVyLXNtXCI+XG4gICAgICA8Um93SGVhZGVyIGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8Q29sUHJvZmlsZSBjbGFzc05hbWU9XCJjb2wtbGctMTFcIj5cbiAgICAgICAgICA8SW1hZ2VQcm9maWxlIHNyYz17aXNQcm9maWxlLmltYWdlVXJsIHx8IHJlcXVpcmUoJy4uLy4uL2Fzc2V0cy9pY29ucy9pYmlkLnBuZycpfSBhbHQ9e2Ake2lzUHJvZmlsZS50eXBlIHx8ICdsb2FkJ30taW1nYH0vPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8VGV4dE5hbWU+e2lzUHJvZmlsZS5uYW1lfTwvVGV4dE5hbWU+XG4gICAgICAgICAgICA8VGV4dEVtYWlsPntpc1Byb2ZpbGUuZW1haWx9PC9UZXh0RW1haWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sUHJvZmlsZT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMVwiPlxuICAgICAgICAgIDxMb2dvdXRCdXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5LZWx1YXI8L0xvZ291dEJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1Jvd0hlYWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIHtcbiAgICAgICAgICBiaWxsZGV0YWlscy5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxuICAgICAgICAgICAgPHAga2V5PXtpZHh9PntgWyR7aWR4fV1gfXtgID0+IGB9e2l0ZW0uYm9keS5ERU5PTX08L3A+XG4gICAgICAgICAgKSlcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Dashboard/Dashboard.jsx\n");

/***/ }),

/***/ "./components/Dashboard/dashboardStyle.js":
/*!************************************************!*\
  !*** ./components/Dashboard/dashboardStyle.js ***!
  \************************************************/
/*! exports provided: Container, ImageProfile, TextName, TextEmail, LogoutButton, ColProfile, RowHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImageProfile\", function() { return ImageProfile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextName\", function() { return TextName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextEmail\", function() { return TextEmail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LogoutButton\", function() { return LogoutButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColProfile\", function() { return ColProfile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RowHeader\", function() { return RowHeader; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nfunction _templateObject7() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  margin: 0 0 30px 0;\\n\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-size: 14px;\\n  font-weight: 400;\\n  font-family: 'Work Sans', sans-serif;\\n  @media (max-width: 768px) {\\n    font-size: 12px;\\n  }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  margin: 0;\\n  font-size: 16px;\\n  font-weight: 600;\\n  font-family: 'Work Sans', sans-serif;\\n  @media (max-width: 768px) {\\n    font-size: 14px;\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 50px;\\n  height: 50px;\\n  margin-right: 20px;\\n  border-radius: 50%;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding: 30px 0 0 0;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\nvar ImageProfile = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img(_templateObject2());\nvar TextName = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p(_templateObject3());\nvar TextEmail = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p(_templateObject4());\nvar LogoutButton = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject5());\nvar ColProfile = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject6());\nvar RowHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject7());\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvZGFzaGJvYXJkU3R5bGUuanM/YTUyNSJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJJbWFnZVByb2ZpbGUiLCJpbWciLCJUZXh0TmFtZSIsInAiLCJUZXh0RW1haWwiLCJMb2dvdXRCdXR0b24iLCJidXR0b24iLCJDb2xQcm9maWxlIiwiUm93SGVhZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQWY7QUFJQSxJQUFNQyxZQUFZLEdBQUdGLHlEQUFNLENBQUNHLEdBQVYsb0JBQWxCO0FBT0EsSUFBTUMsUUFBUSxHQUFHSix5REFBTSxDQUFDSyxDQUFWLG9CQUFkO0FBVUEsSUFBTUMsU0FBUyxHQUFHTix5REFBTSxDQUFDSyxDQUFWLG9CQUFmO0FBU0EsSUFBTUUsWUFBWSxHQUFHUCx5REFBTSxDQUFDUSxNQUFWLG9CQUFsQjtBQUlBLElBQU1DLFVBQVUsR0FBR1QseURBQU0sQ0FBQ0MsR0FBVixvQkFBaEI7QUFJQSxJQUFNUyxTQUFTLEdBQUdWLHlEQUFNLENBQUNDLEdBQVYsb0JBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Rhc2hib2FyZC9kYXNoYm9hcmRTdHlsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAzMHB4IDAgMCAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEltYWdlUHJvZmlsZSA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuYDtcblxuZXhwb3J0IGNvbnN0IFRleHROYW1lID0gc3R5bGVkLnBgXG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogJ1dvcmsgU2FucycsIHNhbnMtc2VyaWY7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRleHRFbWFpbCA9IHN0eWxlZC5wYFxuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgTG9nb3V0QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcblxuYFxuXG5leHBvcnQgY29uc3QgQ29sUHJvZmlsZSA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG5gO1xuXG5leHBvcnQgY29uc3QgUm93SGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAwIDAgMzBweCAwO1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Dashboard/dashboardStyle.js\n");

/***/ }),

/***/ "./node_modules/dot-prop/index.js":
false,

/***/ "./node_modules/indexes-of/index.js":
false,

/***/ "./node_modules/is-obj/index.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/index.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/parser.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/processor.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/attribute.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/className.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/combinator.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/comment.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/constructors.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/container.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/guards.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/id.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/index.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/namespace.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/nesting.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/node.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/pseudo.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/root.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/selector.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/string.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/tag.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/types.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/selectors/universal.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/sortAscending.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/tokenTypes.js":
false,

/***/ "./node_modules/postcss-selector-parser/dist/tokenize.js":
false,

/***/ "./node_modules/uniq/uniq.js":
false

})