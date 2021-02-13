webpackHotUpdate_N_E("pages/login",{

/***/ "./components/Dashboard/Dashboard.jsx":
/*!********************************************!*\
  !*** ./components/Dashboard/Dashboard.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _test_6__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-6 */ \"./components/Dashboard/test-6.js\");\n/* harmony import */ var _dashboardStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboardStyle */ \"./components/Dashboard/dashboardStyle.js\");\n/* harmony import */ var postcss_selector_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! postcss-selector-parser */ \"./node_modules/postcss-selector-parser/dist/index.js\");\n/* harmony import */ var postcss_selector_parser__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(postcss_selector_parser__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/fahrasnurhidayat/Documents/Fahras/Public/Portofolio/ibid-fe-test/components/Dashboard/Dashboard.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar Dashboard = function Dashboard() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      billdetails = _useState[0],\n      setBilldetails = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    type: '',\n    name: '',\n    email: '',\n    imageUrl: '',\n    account_id: ''\n  }),\n      isProfile = _useState2[0],\n      setProfile = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var bills = _test_6__WEBPACK_IMPORTED_MODULE_3__[\"data\"].data.response.billdetails;\n\n    if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"isEmpty\"])(window.localStorage.getItem('isToken'))) {\n      router.push('/login');\n    } else {\n      setBilldetails(bills.filter(function (bill) {\n        return bill.body.DENOM >= 100000;\n      }));\n      setProfile(JSON.parse(window.localStorage.getItem('isProfile')));\n    }\n  }, []);\n\n  var handleLogout = function handleLogout() {\n    window.localStorage.removeItem('isToken');\n    window.localStorage.removeItem('isProfile');\n    router.push('/');\n  };\n\n  return __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n    className: \"container-sm\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 3\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_4__[\"RowHeader\"], {\n    className: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 4\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_4__[\"ColProfile\"], {\n    className: \"col-11\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }\n  }), __jsx(\"div\", {\n    className: \"col-1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 5\n    }\n  }, __jsx(\"button\", {\n    className: \"btn btn-primary\",\n    onClick: handleLogout,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 6\n    }\n  }, \"Keluar\"))), __jsx(\"div\", {\n    className: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 4\n    }\n  }, billdetails.map(function (item, idx) {\n    return __jsx(\"p\", {\n      key: idx,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 7\n      }\n    }, \"[\".concat(idx, \"]\"), \" => \", item.body.DENOM);\n  })));\n};\n\n_s(Dashboard, \"q9sNHYyWKpiDZxCPqNxj/fu9QTI=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\n\nvar _c;\n\n$RefreshReg$(_c, \"Dashboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkLmpzeD81NWY4Il0sIm5hbWVzIjpbIkRhc2hib2FyZCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiYmlsbGRldGFpbHMiLCJzZXRCaWxsZGV0YWlscyIsInR5cGUiLCJuYW1lIiwiZW1haWwiLCJpbWFnZVVybCIsImFjY291bnRfaWQiLCJpc1Byb2ZpbGUiLCJzZXRQcm9maWxlIiwidXNlRWZmZWN0IiwiYmlsbHMiLCJkYXRhIiwicmVzcG9uc2UiLCJpc0VtcHR5Iiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInB1c2giLCJmaWx0ZXIiLCJiaWxsIiwiYm9keSIsIkRFTk9NIiwiSlNPTiIsInBhcnNlIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsIm1hcCIsIml0ZW0iLCJpZHgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDdkIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEdUIsa0JBRWVDLHNEQUFRLENBQUMsRUFBRCxDQUZ2QjtBQUFBLE1BRWhCQyxXQUZnQjtBQUFBLE1BRUhDLGNBRkc7O0FBQUEsbUJBR1NGLHNEQUFRLENBQUM7QUFDeENHLFFBQUksRUFBRSxFQURrQztBQUV4Q0MsUUFBSSxFQUFFLEVBRmtDO0FBR3hDQyxTQUFLLEVBQUUsRUFIaUM7QUFJeENDLFlBQVEsRUFBRSxFQUo4QjtBQUt4Q0MsY0FBVSxFQUFFO0FBTDRCLEdBQUQsQ0FIakI7QUFBQSxNQUdoQkMsU0FIZ0I7QUFBQSxNQUdMQyxVQUhLOztBQVd2QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2YsUUFBTUMsS0FBSyxHQUFHQyw0Q0FBSSxDQUFDQSxJQUFMLENBQVVDLFFBQVYsQ0FBbUJaLFdBQWpDOztBQUNBLFFBQUlhLHNEQUFPLENBQUNDLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsU0FBNUIsQ0FBRCxDQUFYLEVBQXFEO0FBQ3BEbkIsWUFBTSxDQUFDb0IsSUFBUCxDQUFZLFFBQVo7QUFDQSxLQUZELE1BRU87QUFDTmhCLG9CQUFjLENBQUNTLEtBQUssQ0FBQ1EsTUFBTixDQUFhLFVBQUFDLElBQUk7QUFBQSxlQUFJQSxJQUFJLENBQUNDLElBQUwsQ0FBVUMsS0FBVixJQUFtQixNQUF2QjtBQUFBLE9BQWpCLENBQUQsQ0FBZDtBQUNBYixnQkFBVSxDQUFDYyxJQUFJLENBQUNDLEtBQUwsQ0FBV1QsTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixXQUE1QixDQUFYLENBQUQsQ0FBVjtBQUNBO0FBQ0QsR0FSUSxFQVFOLEVBUk0sQ0FBVDs7QUFVQSxNQUFNUSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQzFCVixVQUFNLENBQUNDLFlBQVAsQ0FBb0JVLFVBQXBCLENBQStCLFNBQS9CO0FBQ0FYLFVBQU0sQ0FBQ0MsWUFBUCxDQUFvQlUsVUFBcEIsQ0FBK0IsV0FBL0I7QUFFQTVCLFVBQU0sQ0FBQ29CLElBQVAsQ0FBWSxHQUFaO0FBQ0EsR0FMRDs7QUFPQSxTQUNDLE1BQUMseURBQUQ7QUFBVyxhQUFTLEVBQUMsY0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMseURBQUQ7QUFBVyxhQUFTLEVBQUMsS0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsMERBQUQ7QUFBWSxhQUFTLEVBQUMsUUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBUUM7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBUSxhQUFTLEVBQUMsaUJBQWxCO0FBQW9DLFdBQU8sRUFBRU8sWUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELENBUkQsQ0FERCxFQWFDO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFeEIsV0FBVyxDQUFDMEIsR0FBWixDQUFnQixVQUFDQyxJQUFELEVBQU9DLEdBQVA7QUFBQSxXQUNmO0FBQUcsU0FBRyxFQUFFQSxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQWtCQSxHQUFsQixnQkFBa0NELElBQUksQ0FBQ1AsSUFBTCxDQUFVQyxLQUE1QyxDQURlO0FBQUEsR0FBaEIsQ0FGRixDQWJELENBREQ7QUF1QkEsQ0FuREQ7O0dBQU16QixTO1VBQ1VFLHFEOzs7S0FEVkYsUztBQXFEU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4vdGVzdC02J1xuaW1wb3J0IHtcblx0Q29udGFpbmVyLCBJbWFnZVByb2ZpbGUsXG5cdFRleHROYW1lLCBUZXh0RW1haWwsXG5cdENvbFByb2ZpbGUsIFJvd0hlYWRlcixcbn0gZnJvbSAnLi9kYXNoYm9hcmRTdHlsZSdcbmltcG9ydCB7IGNsYXNzTmFtZSB9IGZyb20gJ3Bvc3Rjc3Mtc2VsZWN0b3ItcGFyc2VyJ1xuXG5jb25zdCBEYXNoYm9hcmQgPSAoKSA9PiB7XG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cdGNvbnN0IFtiaWxsZGV0YWlscywgc2V0QmlsbGRldGFpbHNdID0gdXNlU3RhdGUoW10pXG5cdGNvbnN0IFtpc1Byb2ZpbGUsIHNldFByb2ZpbGVdID0gdXNlU3RhdGUoe1xuXHRcdHR5cGU6ICcnLFxuXHRcdG5hbWU6ICcnLFxuXHRcdGVtYWlsOiAnJyxcblx0XHRpbWFnZVVybDogJycsXG5cdFx0YWNjb3VudF9pZDogJycsXG5cdH0pXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBiaWxscyA9IGRhdGEuZGF0YS5yZXNwb25zZS5iaWxsZGV0YWlsc1xuXHRcdGlmIChpc0VtcHR5KHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXNUb2tlbicpKSkge1xuXHRcdFx0cm91dGVyLnB1c2goJy9sb2dpbicpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHNldEJpbGxkZXRhaWxzKGJpbGxzLmZpbHRlcihiaWxsID0+IGJpbGwuYm9keS5ERU5PTSA+PSAxMDAwMDApKVxuXHRcdFx0c2V0UHJvZmlsZShKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXNQcm9maWxlJykpKVxuXHRcdH1cblx0fSwgW10pXG5cblx0Y29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuXHRcdHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaXNUb2tlbicpXG5cdFx0d2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpc1Byb2ZpbGUnKVxuXG5cdFx0cm91dGVyLnB1c2goJy8nKVxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8Q29udGFpbmVyIGNsYXNzTmFtZT1cImNvbnRhaW5lci1zbVwiPlxuXHRcdFx0PFJvd0hlYWRlciBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0PENvbFByb2ZpbGUgY2xhc3NOYW1lPVwiY29sLTExXCI+XG5cdFx0XHRcdFx0ey8qIDxJbWFnZVByb2ZpbGUgc3JjPXtpc1Byb2ZpbGUuaW1hZ2VVcmx9IGFsdD17YCR7aXNQcm9maWxlLnR5cGUgfHwgJ2xvYWQnfS1pbWdgfS8+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdDxUZXh0TmFtZT57aXNQcm9maWxlLm5hbWV9PC9UZXh0TmFtZT5cblx0XHRcdFx0XHRcdDxUZXh0RW1haWw+e2lzUHJvZmlsZS5lbWFpbH08L1RleHRFbWFpbD5cblx0XHRcdFx0XHQ8L2Rpdj4gKi99XG5cdFx0XHRcdDwvQ29sUHJvZmlsZT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMVwiPlxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5LZWx1YXI8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L1Jvd0hlYWRlcj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRiaWxsZGV0YWlscy5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxuXHRcdFx0XHRcdFx0PHAga2V5PXtpZHh9PntgWyR7aWR4fV1gfXtgID0+IGB9e2l0ZW0uYm9keS5ERU5PTX08L3A+XG5cdFx0XHRcdFx0KSlcblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9Db250YWluZXI+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Dashboard/Dashboard.jsx\n");

/***/ })

})