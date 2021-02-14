webpackHotUpdate_N_E("pages/login",{

/***/ "./components/Dashboard/Dashboard.jsx":
/*!********************************************!*\
  !*** ./components/Dashboard/Dashboard.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dashboardStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboardStyle */ \"./components/Dashboard/dashboardStyle.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/fahrasnurhidayat/Documents/Fahras/Public/Portofolio/ibid-fe-test/components/Dashboard/Dashboard.jsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Dashboard = function Dashboard(_ref) {\n  var handleLogout = _ref.handleLogout,\n      isProfile = _ref.isProfile,\n      billdetails = _ref.billdetails,\n      isSnapshot = _ref.isSnapshot;\n  var filterBill = billdetails.filter(function (bill) {\n    return bill.body.DENOM >= 100000;\n  });\n  console.log(isSnapshot);\n  return __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(\"nav\", {\n    className: \"navbar navbar-expand-lg navbar-light mt-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    className: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_1__[\"ColProfile\"], {\n    className: \"col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_1__[\"ImageProfile\"], {\n    src: isProfile.imageUrl || __webpack_require__(/*! ../../assets/icons/ibid.png */ \"./assets/icons/ibid.png\"),\n    alt: \"\".concat(isProfile.type || 'load', \"-img\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_1__[\"TextName\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 15\n    }\n  }, isProfile.name), __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_1__[\"TextEmail\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 15\n    }\n  }, isProfile.email))), __jsx(\"div\", {\n    className: \"col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_1__[\"LogoutButton\"], {\n    className: \"btn btn-primary\",\n    onClick: handleLogout,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, \"Keluar\")))), __jsx(\"table\", {\n    className: \"table\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, __jsx(\"thead\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(\"tr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, __jsx(\"th\", {\n    scope: \"col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, \"No.\"), __jsx(\"th\", {\n    scope: \"col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, \"Car\"), __jsx(\"th\", {\n    scope: \"col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, \"Color\"), __jsx(\"th\", {\n    scope: \"col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, \"Action\"))), __jsx(\"tbody\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  })), __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_1__[\"RowBill\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, filterBill.map(function (item, idx) {\n    return __jsx(\"p\", {\n      key: idx,\n      style: {\n        padding: 0\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 11\n      }\n    }, \"[\".concat(idx, \"]\"), \" => \", item.body.DENOM);\n  })));\n};\n\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\n\nvar _c;\n\n$RefreshReg$(_c, \"Dashboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkLmpzeD81NWY4Il0sIm5hbWVzIjpbIkRhc2hib2FyZCIsImhhbmRsZUxvZ291dCIsImlzUHJvZmlsZSIsImJpbGxkZXRhaWxzIiwiaXNTbmFwc2hvdCIsImZpbHRlckJpbGwiLCJmaWx0ZXIiLCJiaWxsIiwiYm9keSIsIkRFTk9NIiwiY29uc29sZSIsImxvZyIsImltYWdlVXJsIiwicmVxdWlyZSIsInR5cGUiLCJuYW1lIiwiZW1haWwiLCJtYXAiLCJpdGVtIiwiaWR4IiwicGFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBT0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FLWjtBQUFBLE1BSkpDLFlBSUksUUFKSkEsWUFJSTtBQUFBLE1BSEpDLFNBR0ksUUFISkEsU0FHSTtBQUFBLE1BRkpDLFdBRUksUUFGSkEsV0FFSTtBQUFBLE1BREpDLFVBQ0ksUUFESkEsVUFDSTtBQUNKLE1BQU1DLFVBQVUsR0FBR0YsV0FBVyxDQUFDRyxNQUFaLENBQW1CLFVBQUFDLElBQUk7QUFBQSxXQUFJQSxJQUFJLENBQUNDLElBQUwsQ0FBVUMsS0FBVixJQUFtQixNQUF2QjtBQUFBLEdBQXZCLENBQW5CO0FBRUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUCxVQUFaO0FBQ0EsU0FDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQywyQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtREFBRDtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBEQUFEO0FBQVksYUFBUyxFQUFDLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQWMsT0FBRyxFQUFFRixTQUFTLENBQUNVLFFBQVYsSUFBc0JDLG1CQUFPLENBQUMsNERBQUQsQ0FBaEQ7QUFBaUYsT0FBRyxZQUFLWCxTQUFTLENBQUNZLElBQVYsSUFBa0IsTUFBdkIsU0FBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFXWixTQUFTLENBQUNhLElBQXJCLENBREYsRUFFRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBWWIsU0FBUyxDQUFDYyxLQUF0QixDQUZGLENBRkYsQ0FERixFQVFFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBYyxhQUFTLEVBQUMsaUJBQXhCO0FBQTBDLFdBQU8sRUFBRWYsWUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLENBUkYsQ0FERixDQURGLEVBZ0JFO0FBQU8sYUFBUyxFQUFDLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksU0FBSyxFQUFDLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGLEVBRUU7QUFBSSxTQUFLLEVBQUMsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkYsRUFHRTtBQUFJLFNBQUssRUFBQyxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixFQUlFO0FBQUksU0FBSyxFQUFDLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLENBREYsQ0FERixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQWhCRixFQXFDRSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0ksVUFBVSxDQUFDWSxHQUFYLENBQWUsVUFBQ0MsSUFBRCxFQUFPQyxHQUFQO0FBQUEsV0FDZDtBQUFHLFNBQUcsRUFBRUEsR0FBUjtBQUFhLFdBQUssRUFBRTtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUF5Q0QsR0FBekMsZ0JBQXlERCxJQUFJLENBQUNWLElBQUwsQ0FBVUMsS0FBbkUsQ0FEYztBQUFBLEdBQWYsQ0FESCxDQXJDRixDQURGO0FBNkNELENBdEREOztLQUFNVCxTO0FBd0RTQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hib2FyZC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb250YWluZXIsIEltYWdlUHJvZmlsZSxcbiAgVGV4dE5hbWUsIFRleHRFbWFpbCxcbiAgQ29sUHJvZmlsZSwgUm93LFxuICBMb2dvdXRCdXR0b24sIFJvd0JpbGwsXG59IGZyb20gJy4vZGFzaGJvYXJkU3R5bGUnXG5cbmNvbnN0IERhc2hib2FyZCA9ICh7XG4gIGhhbmRsZUxvZ291dCxcbiAgaXNQcm9maWxlLFxuICBiaWxsZGV0YWlscyxcbiAgaXNTbmFwc2hvdCxcbn0pID0+IHtcbiAgY29uc3QgZmlsdGVyQmlsbCA9IGJpbGxkZXRhaWxzLmZpbHRlcihiaWxsID0+IGJpbGwuYm9keS5ERU5PTSA+PSAxMDAwMDApXG5cbiAgY29uc29sZS5sb2coaXNTbmFwc2hvdClcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItbGlnaHQgbXQtM1wiPlxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxDb2xQcm9maWxlIGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgPEltYWdlUHJvZmlsZSBzcmM9e2lzUHJvZmlsZS5pbWFnZVVybCB8fCByZXF1aXJlKCcuLi8uLi9hc3NldHMvaWNvbnMvaWJpZC5wbmcnKX0gYWx0PXtgJHtpc1Byb2ZpbGUudHlwZSB8fCAnbG9hZCd9LWltZ2B9Lz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxUZXh0TmFtZT57aXNQcm9maWxlLm5hbWV9PC9UZXh0TmFtZT5cbiAgICAgICAgICAgICAgPFRleHRFbWFpbD57aXNQcm9maWxlLmVtYWlsfTwvVGV4dEVtYWlsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db2xQcm9maWxlPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICA8TG9nb3V0QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+S2VsdWFyPC9Mb2dvdXRCdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9uYXY+XG5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZVwiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+Tm8uPC90aD5cbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkNhcjwvdGg+XG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Db2xvcjwvdGg+XG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5BY3Rpb248L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgey8qIHtpc1NuYXBzaG90LmZvckVhY2goKGRvYywgaWR4KSA9PiAoXG4gICAgICAgICAgPHRyIGtleT17aWR4fT5cbiAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPjE8L3RoPlxuICAgICAgICAgICAgPHRkPntkb2MuZGF0YSgpLmNhcn08L3RkPlxuICAgICAgICAgICAgPHRkPntkb2MuZGF0YSgpLmNvbG9yfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+QWN0PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICApKX0gKi99XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuXG4gICAgICA8Um93QmlsbD5cbiAgICAgICAge2ZpbHRlckJpbGwubWFwKChpdGVtLCBpZHgpID0+IChcbiAgICAgICAgICA8cCBrZXk9e2lkeH0gc3R5bGU9e3sgcGFkZGluZzogMCB9fT57YFske2lkeH1dYH17YCA9PiBgfXtpdGVtLmJvZHkuREVOT019PC9wPlxuICAgICAgICApKX1cbiAgICAgIDwvUm93QmlsbD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Dashboard/Dashboard.jsx\n");

/***/ })

})