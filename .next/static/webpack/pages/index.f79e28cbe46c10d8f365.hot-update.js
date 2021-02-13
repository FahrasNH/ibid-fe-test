webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Dashboard/Dashboard.jsx":
/*!********************************************!*\
  !*** ./components/Dashboard/Dashboard.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _test_6__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test-6 */ \"./components/Dashboard/test-6.js\");\n/* harmony import */ var _dashboardStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboardStyle */ \"./components/Dashboard/dashboardStyle.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/fahrasnurhidayat/Documents/Fahras/Public/Portofolio/ibid-fe-test/components/Dashboard/Dashboard.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nvar Dashboard = function Dashboard() {\n  _s();\n\n  var _jsx;\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      billdetails = _useState[0],\n      setBilldetails = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    type: '',\n    name: '',\n    email: '',\n    imageUrl: '',\n    account_id: ''\n  }),\n      isProfile = _useState2[0],\n      setProfile = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var bills = _test_6__WEBPACK_IMPORTED_MODULE_4__[\"data\"].data.response.billdetails;\n\n    if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__[\"isEmpty\"])(window.localStorage.getItem('isToken'))) {\n      router.push('/login');\n    } else {\n      setBilldetails(bills.filter(function (bill) {\n        return bill.body.DENOM >= 100000;\n      }));\n      setProfile(JSON.parse(window.localStorage.getItem('isProfile')));\n    }\n  }, []);\n\n  var handleLogout = function handleLogout() {\n    window.localStorage.removeItem('isToken');\n    window.localStorage.removeItem('isProfile');\n    router.push('/');\n  };\n\n  return __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_5__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], (_jsx = {\n    className: \"row\",\n    style: {\n      paddingRight: 50,\n      paddingLeft: 50\n    }\n  }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx, \"className\", \"row\"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx, \"__self\", _this), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_jsx, \"__source\", {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 7\n  }), _jsx), __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_5__[\"ColProfile\"], {\n    className: \"col-lg-11\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_5__[\"ImageProfile\"], {\n    src: isProfile.imageUrl || __webpack_require__(/*! ../../assets/icons/ibid.png */ \"./assets/icons/ibid.png\"),\n    alt: \"\".concat(isProfile.type || 'load', \"-img\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 11\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_5__[\"TextName\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }\n  }, isProfile.name), __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_5__[\"TextEmail\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }\n  }, isProfile.email))), __jsx(\"div\", {\n    className: \"col-lg-1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 9\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_5__[\"LogoutButton\"], {\n    className: \"btn btn-primary\",\n    onClick: handleLogout,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 11\n    }\n  }, \"Keluar\"))), __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_5__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, billdetails.map(function (item, idx) {\n    return __jsx(\"p\", {\n      key: idx,\n      style: {\n        padding: 0\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 13\n      }\n    }, \"[\".concat(idx, \"]\"), \" => \", item.body.DENOM);\n  })));\n};\n\n_s(Dashboard, \"2Onyd0xqLjrvaSqKvq9bBKRkBzU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\n\nvar _c;\n\n$RefreshReg$(_c, \"Dashboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkLmpzeD81NWY4Il0sIm5hbWVzIjpbIkRhc2hib2FyZCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiYmlsbGRldGFpbHMiLCJzZXRCaWxsZGV0YWlscyIsInR5cGUiLCJuYW1lIiwiZW1haWwiLCJpbWFnZVVybCIsImFjY291bnRfaWQiLCJpc1Byb2ZpbGUiLCJzZXRQcm9maWxlIiwidXNlRWZmZWN0IiwiYmlsbHMiLCJkYXRhIiwicmVzcG9uc2UiLCJpc0VtcHR5Iiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInB1c2giLCJmaWx0ZXIiLCJiaWxsIiwiYm9keSIsIkRFTk9NIiwiSlNPTiIsInBhcnNlIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsInBhZGRpbmdSaWdodCIsInBhZGRpbmdMZWZ0IiwicmVxdWlyZSIsIm1hcCIsIml0ZW0iLCJpZHgiLCJwYWRkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU9BLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQTs7QUFDdEIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEc0Isa0JBRWdCQyxzREFBUSxDQUFDLEVBQUQsQ0FGeEI7QUFBQSxNQUVmQyxXQUZlO0FBQUEsTUFFRkMsY0FGRTs7QUFBQSxtQkFHVUYsc0RBQVEsQ0FBQztBQUN2Q0csUUFBSSxFQUFFLEVBRGlDO0FBRXZDQyxRQUFJLEVBQUUsRUFGaUM7QUFHdkNDLFNBQUssRUFBRSxFQUhnQztBQUl2Q0MsWUFBUSxFQUFFLEVBSjZCO0FBS3ZDQyxjQUFVLEVBQUU7QUFMMkIsR0FBRCxDQUhsQjtBQUFBLE1BR2ZDLFNBSGU7QUFBQSxNQUdKQyxVQUhJOztBQVd0QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsS0FB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ZC9EYXNoYm9hcmQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gJy4vdGVzdC02J1xuaW1wb3J0IHtcbiAgQ29udGFpbmVyLCBJbWFnZVByb2ZpbGUsXG4gIFRleHROYW1lLCBUZXh0RW1haWwsXG4gIENvbFByb2ZpbGUsIFJvdyxcbiAgTG9nb3V0QnV0dG9uLFxufSBmcm9tICcuL2Rhc2hib2FyZFN0eWxlJ1xuXG5jb25zdCBEYXNoYm9hcmQgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IFtiaWxsZGV0YWlscywgc2V0QmlsbGRldGFpbHNdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtpc1Byb2ZpbGUsIHNldFByb2ZpbGVdID0gdXNlU3RhdGUoe1xuICAgIHR5cGU6ICcnLFxuICAgIG5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBpbWFnZVVybDogJycsXG4gICAgYWNjb3VudF9pZDogJycsXG4gIH0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBiaWxscyA9IGRhdGEuZGF0YS5yZXNwb25zZS5iaWxsZGV0YWlsc1xuICAgIGlmIChpc0VtcHR5KHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXNUb2tlbicpKSkge1xuICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEJpbGxkZXRhaWxzKGJpbGxzLmZpbHRlcihiaWxsID0+IGJpbGwuYm9keS5ERU5PTSA+PSAxMDAwMDApKVxuICAgICAgc2V0UHJvZmlsZShKU09OLnBhcnNlKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXNQcm9maWxlJykpKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaXNUb2tlbicpXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpc1Byb2ZpbGUnKVxuXG4gICAgcm91dGVyLnB1c2goJy8nKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPFJvdyBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17eyBwYWRkaW5nUmlnaHQ6IDUwLCBwYWRkaW5nTGVmdDogNTAgfX0gY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxDb2xQcm9maWxlIGNsYXNzTmFtZT1cImNvbC1sZy0xMVwiPlxuICAgICAgICAgIDxJbWFnZVByb2ZpbGUgc3JjPXtpc1Byb2ZpbGUuaW1hZ2VVcmwgfHwgcmVxdWlyZSgnLi4vLi4vYXNzZXRzL2ljb25zL2liaWQucG5nJyl9IGFsdD17YCR7aXNQcm9maWxlLnR5cGUgfHwgJ2xvYWQnfS1pbWdgfS8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxUZXh0TmFtZT57aXNQcm9maWxlLm5hbWV9PC9UZXh0TmFtZT5cbiAgICAgICAgICAgIDxUZXh0RW1haWw+e2lzUHJvZmlsZS5lbWFpbH08L1RleHRFbWFpbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2xQcm9maWxlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xXCI+XG4gICAgICAgICAgPExvZ291dEJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PktlbHVhcjwvTG9nb3V0QnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUm93PlxuICAgICAgPFJvdz5cbiAgICAgICAge1xuICAgICAgICAgIGJpbGxkZXRhaWxzLm1hcCgoaXRlbSwgaWR4KSA9PiAoXG4gICAgICAgICAgICA8cCBrZXk9e2lkeH0gc3R5bGU9e3sgcGFkZGluZzogMCB9fT57YFske2lkeH1dYH17YCA9PiBgfXtpdGVtLmJvZHkuREVOT019PC9wPlxuICAgICAgICAgICkpXG4gICAgICAgIH1cbiAgICAgIDwvUm93PlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Dashboard/Dashboard.jsx\n");

/***/ }),

/***/ "./components/Dashboard/dashboardStyle.js":
/*!************************************************!*\
  !*** ./components/Dashboard/dashboardStyle.js ***!
  \************************************************/
/*! exports provided: Container, ImageProfile, TextName, TextEmail, LogoutButton, ColProfile, Row */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImageProfile\", function() { return ImageProfile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextName\", function() { return TextName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextEmail\", function() { return TextEmail; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LogoutButton\", function() { return LogoutButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ColProfile\", function() { return ColProfile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Row\", function() { return Row; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nfunction _templateObject7() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding: 0 50px;\\n\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  @media (max-width: 768px) {\\n    width: 60px;\\n    font-size: 12px;\\n  }\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-size: 14px;\\n  font-weight: 400;\\n  font-family: 'Work Sans', sans-serif;\\n  @media (max-width: 768px) {\\n    font-size: 12px;\\n  }\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  margin: 0;\\n  font-size: 16px;\\n  font-weight: 600;\\n  font-family: 'Work Sans', sans-serif;\\n  @media (max-width: 768px) {\\n    font-size: 14px;\\n  }\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 50px;\\n  height: 50px;\\n  margin-right: 20px;\\n  border-radius: 50%;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding: 30px 0 0 0;\\n  @media (max-width: 768px) {\\n    padding: 0;\\n    width: 100%;\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\nvar ImageProfile = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img(_templateObject2());\nvar TextName = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p(_templateObject3());\nvar TextEmail = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p(_templateObject4());\nvar LogoutButton = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject5());\nvar ColProfile = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject6());\nvar Row = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject7());\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvZGFzaGJvYXJkU3R5bGUuanM/YTUyNSJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJJbWFnZVByb2ZpbGUiLCJpbWciLCJUZXh0TmFtZSIsInAiLCJUZXh0RW1haWwiLCJMb2dvdXRCdXR0b24iLCJidXR0b24iLCJDb2xQcm9maWxlIiwiUm93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQWY7QUFRQSxJQUFNQyxZQUFZLEdBQUdGLHlEQUFNLENBQUNHLEdBQVYsb0JBQWxCO0FBT0EsSUFBTUMsUUFBUSxHQUFHSix5REFBTSxDQUFDSyxDQUFWLG9CQUFkO0FBVUEsSUFBTUMsU0FBUyxHQUFHTix5REFBTSxDQUFDSyxDQUFWLG9CQUFmO0FBU0EsSUFBTUUsWUFBWSxHQUFHUCx5REFBTSxDQUFDUSxNQUFWLG9CQUFsQjtBQU9BLElBQU1DLFVBQVUsR0FBR1QseURBQU0sQ0FBQ0MsR0FBVixvQkFBaEI7QUFJQSxJQUFNUyxHQUFHLEdBQUdWLHlEQUFNLENBQUNDLEdBQVYsb0JBQVQiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Rhc2hib2FyZC9kYXNoYm9hcmRTdHlsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAzMHB4IDAgMCAwO1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSW1hZ2VQcm9maWxlID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG5gO1xuXG5leHBvcnQgY29uc3QgVGV4dE5hbWUgPSBzdHlsZWQucGBcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtZmFtaWx5OiAnV29yayBTYW5zJywgc2Fucy1zZXJpZjtcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgVGV4dEVtYWlsID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLCBzYW5zLXNlcmlmO1xuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBMb2dvdXRCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICB3aWR0aDogNjBweDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IENvbFByb2ZpbGUgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuYDtcblxuZXhwb3J0IGNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDAgNTBweDtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Dashboard/dashboardStyle.js\n");

/***/ })

})