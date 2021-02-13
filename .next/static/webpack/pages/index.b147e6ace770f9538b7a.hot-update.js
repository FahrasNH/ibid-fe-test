webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Dashboard/Dashboard.jsx":
/*!********************************************!*\
  !*** ./components/Dashboard/Dashboard.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _test_6__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-6 */ \"./components/Dashboard/test-6.js\");\n/* harmony import */ var _dashboardStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboardStyle */ \"./components/Dashboard/dashboardStyle.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/fahrasnurhidayat/Documents/Fahras/Public/Portofolio/ibid-fe-test/components/Dashboard/Dashboard.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Dashboard = function Dashboard() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      billdetails = _useState[0],\n      setBilldetails = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    type: '',\n    name: '',\n    email: '',\n    imageUrl: '',\n    account_id: ''\n  }),\n      isProfile = _useState2[0],\n      setProfile = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var bills = _test_6__WEBPACK_IMPORTED_MODULE_3__[\"data\"].data.response.billdetails;\n\n    if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"isEmpty\"])(window.localStorage.getItem('isToken'))) {\n      router.push('/login');\n    } else {\n      setBilldetails(bills.filter(function (bill) {\n        return bill.body.DENOM >= 100000;\n      }));\n      setProfile(JSON.parse(window.localStorage.getItem('isProfile')));\n    }\n  }, []);\n\n  var handleLogout = function handleLogout() {\n    window.localStorage.removeItem('isToken');\n    window.localStorage.removeItem('isProfile');\n    router.push('/');\n  };\n\n  return __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n    className: \"container-fluid\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_4__[\"RowHeader\"], {\n    className: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_4__[\"ColProfile\"], {\n    className: \"col-lg-11\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_4__[\"ImageProfile\"], {\n    src: isProfile.imageUrl || __webpack_require__(/*! ../../assets/icons/ibid.png */ \"./assets/icons/ibid.png\"),\n    alt: \"\".concat(isProfile.type || 'load', \"-img\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_4__[\"TextName\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }, isProfile.name), __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_4__[\"TextEmail\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, isProfile.email))), __jsx(\"div\", {\n    className: \"col-lg-1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_4__[\"LogoutButton\"], {\n    className: \"btn btn-primary\",\n    onClick: handleLogout,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 11\n    }\n  }, \"Keluar\"))), __jsx(\"div\", {\n    className: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, billdetails.map(function (item, idx) {\n    return __jsx(\"p\", {\n      key: idx,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 13\n      }\n    }, \"[\".concat(idx, \"]\"), \" => \", item.body.DENOM);\n  })));\n};\n\n_s(Dashboard, \"2Onyd0xqLjrvaSqKvq9bBKRkBzU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\n\nvar _c;\n\n$RefreshReg$(_c, \"Dashboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkLmpzeD81NWY4Il0sIm5hbWVzIjpbIkRhc2hib2FyZCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiYmlsbGRldGFpbHMiLCJzZXRCaWxsZGV0YWlscyIsInR5cGUiLCJuYW1lIiwiZW1haWwiLCJpbWFnZVVybCIsImFjY291bnRfaWQiLCJpc1Byb2ZpbGUiLCJzZXRQcm9maWxlIiwidXNlRWZmZWN0IiwiYmlsbHMiLCJkYXRhIiwicmVzcG9uc2UiLCJpc0VtcHR5Iiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInB1c2giLCJmaWx0ZXIiLCJiaWxsIiwiYm9keSIsIkRFTk9NIiwiSlNPTiIsInBhcnNlIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsInJlcXVpcmUiLCJtYXAiLCJpdGVtIiwiaWR4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU9BLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFDdEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEc0Isa0JBRWdCQyxzREFBUSxDQUFDLEVBQUQsQ0FGeEI7QUFBQSxNQUVmQyxXQUZlO0FBQUEsTUFFRkMsY0FGRTs7QUFBQSxtQkFHVUYsc0RBQVEsQ0FBQztBQUN2Q0csUUFBSSxFQUFFLEVBRGlDO0FBRXZDQyxRQUFJLEVBQUUsRUFGaUM7QUFHdkNDLFNBQUssRUFBRSxFQUhnQztBQUl2Q0MsWUFBUSxFQUFFLEVBSjZCO0FBS3ZDQyxjQUFVLEVBQUU7QUFMMkIsR0FBRCxDQUhsQjtBQUFBLE1BR2ZDLFNBSGU7QUFBQSxNQUdKQyxVQUhJOztBQVd0QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsS0FBSyxHQUFHQyw0Q0FBSSxDQUFDQSxJQUFMLENBQVVDLFFBQVYsQ0FBbUJaLFdBQWpDOztBQUNBLFFBQUlhLHNEQUFPLENBQUNDLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsU0FBNUIsQ0FBRCxDQUFYLEVBQXFEO0FBQ25EbkIsWUFBTSxDQUFDb0IsSUFBUCxDQUFZLFFBQVo7QUFDRCxLQUZELE1BRU87QUFDTGhCLG9CQUFjLENBQUNTLEtBQUssQ0FBQ1EsTUFBTixDQUFhLFVBQUFDLElBQUk7QUFBQSxlQUFJQSxJQUFJLENBQUNDLElBQUwsQ0FBVUMsS0FBVixJQUFtQixNQUF2QjtBQUFBLE9BQWpCLENBQUQsQ0FBZDtBQUNBYixnQkFBVSxDQUFDYyxJQUFJLENBQUNDLEtBQUwsQ0FBV1QsTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixXQUE1QixDQUFYLENBQUQsQ0FBVjtBQUNEO0FBQ0YsR0FSUSxFQVFOLEVBUk0sQ0FBVDs7QUFVQSxNQUFNUSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3pCVixVQUFNLENBQUNDLFlBQVAsQ0FBb0JVLFVBQXBCLENBQStCLFNBQS9CO0FBQ0FYLFVBQU0sQ0FBQ0MsWUFBUCxDQUFvQlUsVUFBcEIsQ0FBK0IsV0FBL0I7QUFFQTVCLFVBQU0sQ0FBQ29CLElBQVAsQ0FBWSxHQUFaO0FBQ0QsR0FMRDs7QUFPQSxTQUNFLE1BQUMseURBQUQ7QUFBVyxhQUFTLEVBQUMsaUJBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFEO0FBQVcsYUFBUyxFQUFDLEtBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQVksYUFBUyxFQUFDLFdBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQWMsT0FBRyxFQUFFVixTQUFTLENBQUNGLFFBQVYsSUFBc0JxQixtQkFBTyxDQUFDLDREQUFELENBQWhEO0FBQWlGLE9BQUcsWUFBS25CLFNBQVMsQ0FBQ0wsSUFBVixJQUFrQixNQUF2QixTQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVdLLFNBQVMsQ0FBQ0osSUFBckIsQ0FERixFQUVFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFZSSxTQUFTLENBQUNILEtBQXRCLENBRkYsQ0FGRixDQURGLEVBUUU7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFjLGFBQVMsRUFBQyxpQkFBeEI7QUFBMEMsV0FBTyxFQUFFb0IsWUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLENBUkYsQ0FERixFQWFFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJeEIsV0FBVyxDQUFDMkIsR0FBWixDQUFnQixVQUFDQyxJQUFELEVBQU9DLEdBQVA7QUFBQSxXQUNkO0FBQUcsU0FBRyxFQUFFQSxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQWtCQSxHQUFsQixnQkFBa0NELElBQUksQ0FBQ1IsSUFBTCxDQUFVQyxLQUE1QyxDQURjO0FBQUEsR0FBaEIsQ0FGSixDQWJGLENBREY7QUF1QkQsQ0FuREQ7O0dBQU16QixTO1VBQ1dFLHFEOzs7S0FEWEYsUztBQXFEU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4vdGVzdC02J1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLCBJbWFnZVByb2ZpbGUsXG4gIFRleHROYW1lLCBUZXh0RW1haWwsXG4gIENvbFByb2ZpbGUsIFJvd0hlYWRlcixcbiAgTG9nb3V0QnV0dG9uLFxufSBmcm9tICcuL2Rhc2hib2FyZFN0eWxlJ1xuXG5jb25zdCBEYXNoYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFtiaWxsZGV0YWlscywgc2V0QmlsbGRldGFpbHNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtpc1Byb2ZpbGUsIHNldFByb2ZpbGVdID0gdXNlU3RhdGUoe1xuICAgIHR5cGU6ICcnLFxuICAgIG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBpbWFnZVVybDogJycsXG4gICAgYWNjb3VudF9pZDogJycsXG4gIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBiaWxscyA9IGRhdGEuZGF0YS5yZXNwb25zZS5iaWxsZGV0YWlsc1xuICAgIGlmIChpc0VtcHR5KHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXNUb2tlbicpKSkge1xuICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEJpbGxkZXRhaWxzKGJpbGxzLmZpbHRlcihiaWxsID0+IGJpbGwuYm9keS5ERU5PTSA+PSAxMDAwMDApKVxuICAgICAgc2V0UHJvZmlsZShKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXNQcm9maWxlJykpKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaXNUb2tlbicpXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpc1Byb2ZpbGUnKVxuXG4gICAgcm91dGVyLnB1c2goJy8nKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgPFJvd0hlYWRlciBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPENvbFByb2ZpbGUgY2xhc3NOYW1lPVwiY29sLWxnLTExXCI+XG4gICAgICAgICAgPEltYWdlUHJvZmlsZSBzcmM9e2lzUHJvZmlsZS5pbWFnZVVybCB8fCByZXF1aXJlKCcuLi8uLi9hc3NldHMvaWNvbnMvaWJpZC5wbmcnKX0gYWx0PXtgJHtpc1Byb2ZpbGUudHlwZSB8fCAnbG9hZCd9LWltZ2B9Lz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPFRleHROYW1lPntpc1Byb2ZpbGUubmFtZX08L1RleHROYW1lPlxuICAgICAgICAgICAgPFRleHRFbWFpbD57aXNQcm9maWxlLmVtYWlsfTwvVGV4dEVtYWlsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbFByb2ZpbGU+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTFcIj5cbiAgICAgICAgICA8TG9nb3V0QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+S2VsdWFyPC9Mb2dvdXRCdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Sb3dIZWFkZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICB7XG4gICAgICAgICAgYmlsbGRldGFpbHMubWFwKChpdGVtLCBpZHgpID0+IChcbiAgICAgICAgICAgIDxwIGtleT17aWR4fT57YFske2lkeH1dYH17YCA9PiBgfXtpdGVtLmJvZHkuREVOT019PC9wPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Dashboard/Dashboard.jsx\n");

/***/ })

})