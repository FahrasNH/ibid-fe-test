webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Dashboard/Dashboard.jsx":
/*!********************************************!*\
  !*** ./components/Dashboard/Dashboard.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _dashboardStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboardStyle */ \"./components/Dashboard/dashboardStyle.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/fahrasnurhidayat/Documents/Fahras/Public/Portofolio/ibid-fe-test/components/Dashboard/Dashboard.jsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Dashboard = function Dashboard() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    type: '',\n    name: '',\n    email: '',\n    imageUrl: '',\n    account_id: ''\n  }),\n      isProfile = _useState[0],\n      setProfile = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (Object(lodash__WEBPACK_IMPORTED_MODULE_2__[\"isEmpty\"])(window.localStorage.getItem('isToken'))) {\n      router.push('/login');\n    }\n\n    setProfile(JSON.parse(window.localStorage.getItem('isProfile')));\n  }, []);\n  return __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n    className: \"container-sm\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 4\n    }\n  }, __jsx(\"div\", {\n    className: \"col-1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_3__[\"ImageProfile\"], {\n    src: isProfile.imageUrl,\n    alt: \"\".concat(isProfile.type, \"-img\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 6\n    }\n  })), __jsx(\"div\", {\n    className: \"col-10\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 5\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_3__[\"TextName\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 6\n    }\n  }, isProfile.name), __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_3__[\"TextEmail\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 6\n    }\n  }, isProfile.email)), __jsx(\"div\", {\n    className: \"col-1\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }\n  }, __jsx(\"button\", {\n    className: \"btn btn-primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 6\n    }\n  }, \"Keluar\"))));\n};\n\n_s(Dashboard, \"PA1bUpX0ALM234Js8FRAEnKnC9k=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\n\nvar _c;\n\n$RefreshReg$(_c, \"Dashboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkLmpzeD81NWY4Il0sIm5hbWVzIjpbIkRhc2hib2FyZCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidHlwZSIsIm5hbWUiLCJlbWFpbCIsImltYWdlVXJsIiwiYWNjb3VudF9pZCIsImlzUHJvZmlsZSIsInNldFByb2ZpbGUiLCJ1c2VFZmZlY3QiLCJpc0VtcHR5Iiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInB1c2giLCJKU09OIiwicGFyc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBS0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUN2QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUR1QixrQkFFU0Msc0RBQVEsQ0FBQztBQUN4Q0MsUUFBSSxFQUFFLEVBRGtDO0FBRXhDQyxRQUFJLEVBQUUsRUFGa0M7QUFHeENDLFNBQUssRUFBRSxFQUhpQztBQUl4Q0MsWUFBUSxFQUFFLEVBSjhCO0FBS3hDQyxjQUFVLEVBQUU7QUFMNEIsR0FBRCxDQUZqQjtBQUFBLE1BRWhCQyxTQUZnQjtBQUFBLE1BRUxDLFVBRks7O0FBVXZCQyx5REFBUyxDQUFDLFlBQU07QUFDYixRQUFJQyxzREFBTyxDQUFDQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLFNBQTVCLENBQUQsQ0FBWCxFQUFxRDtBQUNuRGQsWUFBTSxDQUFDZSxJQUFQLENBQVksUUFBWjtBQUNIOztBQUVETixjQUFVLENBQUNPLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLFdBQTVCLENBQVgsQ0FBRCxDQUFWO0FBQ0EsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLFNBQ0MsTUFBQyx5REFBRDtBQUFXLGFBQVMsRUFBQyxjQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyw0REFBRDtBQUFjLE9BQUcsRUFBRU4sU0FBUyxDQUFDRixRQUE3QjtBQUF1QyxPQUFHLFlBQUtFLFNBQVMsQ0FBQ0wsSUFBZixTQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FERCxFQUlDO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFXSyxTQUFTLENBQUNKLElBQXJCLENBREQsRUFFQyxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBWUksU0FBUyxDQUFDSCxLQUF0QixDQUZELENBSkQsRUFRQztBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFRLGFBQVMsRUFBQyxpQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELENBUkQsQ0FERCxDQUREO0FBZ0JBLENBbENEOztHQUFNTixTO1VBQ1VFLHFEOzs7S0FEVkYsUztBQW9DU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Rhc2hib2FyZC9EYXNoYm9hcmQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHtcblx0Q29udGFpbmVyLCBJbWFnZVByb2ZpbGUsXG5cdFRleHROYW1lLCBUZXh0RW1haWwsXG59IGZyb20gJy4vZGFzaGJvYXJkU3R5bGUnXG5cbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblx0Y29uc3QgW2lzUHJvZmlsZSwgc2V0UHJvZmlsZV0gPSB1c2VTdGF0ZSh7XG5cdFx0dHlwZTogJycsXG5cdFx0bmFtZTogJycsXG5cdFx0ZW1haWw6ICcnLFxuXHRcdGltYWdlVXJsOiAnJyxcblx0XHRhY2NvdW50X2lkOiAnJyxcblx0fSlcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc0VtcHR5KHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXNUb2tlbicpKSkge1xuICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpXG5cdFx0fVxuXHRcdFxuXHRcdHNldFByb2ZpbGUoSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzUHJvZmlsZScpKSlcblx0fSwgW10pXG5cblx0cmV0dXJuIChcblx0XHQ8Q29udGFpbmVyIGNsYXNzTmFtZT1cImNvbnRhaW5lci1zbVwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMVwiPlxuXHRcdFx0XHRcdDxJbWFnZVByb2ZpbGUgc3JjPXtpc1Byb2ZpbGUuaW1hZ2VVcmx9IGFsdD17YCR7aXNQcm9maWxlLnR5cGV9LWltZ2B9Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEwXCI+XG5cdFx0XHRcdFx0PFRleHROYW1lPntpc1Byb2ZpbGUubmFtZX08L1RleHROYW1lPlxuXHRcdFx0XHRcdDxUZXh0RW1haWw+e2lzUHJvZmlsZS5lbWFpbH08L1RleHRFbWFpbD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTFcIj5cblx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPktlbHVhcjwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvQ29udGFpbmVyPlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Dashboard/Dashboard.jsx\n");

/***/ })

})