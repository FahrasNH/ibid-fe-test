webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Dashboard/Dashboard.jsx":
/*!********************************************!*\
  !*** ./components/Dashboard/Dashboard.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dashboardStyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboardStyle */ \"./components/Dashboard/dashboardStyle.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/fahrasnurhidayat/Documents/Fahras/Public/Portofolio/ibid-fe-test/components/Dashboard/Dashboard.jsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar Dashboard = function Dashboard(_ref) {\n  var handleLogout = _ref.handleLogout,\n      isProfile = _ref.isProfile,\n      billdetails = _ref.billdetails,\n      isSnapshot = _ref.isSnapshot;\n  var filterBill = billdetails.filter(function (bill) {\n    return bill.body.DENOM >= 100000;\n  });\n  console.log(isSnapshot.forEach(function (doc) {\n    return doc;\n  }));\n  return __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_1__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(\"nav\", {\n    className: \"navbar navbar-expand-lg navbar-light mt-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    className: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_1__[\"ColProfile\"], {\n    className: \"col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_1__[\"ImageProfile\"], {\n    src: isProfile.imageUrl || __webpack_require__(/*! ../../assets/icons/ibid.png */ \"./assets/icons/ibid.png\"),\n    alt: \"\".concat(isProfile.type || 'load', \"-img\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_1__[\"TextName\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 15\n    }\n  }, isProfile.name), __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_1__[\"TextEmail\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 15\n    }\n  }, isProfile.email))), __jsx(\"div\", {\n    className: \"col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_1__[\"LogoutButton\"], {\n    className: \"btn btn-primary\",\n    onClick: handleLogout,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }\n  }, \"Keluar\")))), __jsx(\"table\", {\n    className: \"table\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, __jsx(\"thead\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(\"tr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, __jsx(\"th\", {\n    scope: \"col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }\n  }, \"No.\"), __jsx(\"th\", {\n    scope: \"col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, \"Car\"), __jsx(\"th\", {\n    scope: \"col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, \"Color\"), __jsx(\"th\", {\n    scope: \"col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  }, \"Action\"))), __jsx(\"tbody\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 9\n    }\n  })), __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_1__[\"RowBill\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, filterBill.map(function (item, idx) {\n    return __jsx(\"p\", {\n      key: idx,\n      style: {\n        padding: 0\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 11\n      }\n    }, \"[\".concat(idx, \"]\"), \" => \", item.body.DENOM);\n  })));\n};\n\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\n\nvar _c;\n\n$RefreshReg$(_c, \"Dashboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkLmpzeD81NWY4Il0sIm5hbWVzIjpbIkRhc2hib2FyZCIsImhhbmRsZUxvZ291dCIsImlzUHJvZmlsZSIsImJpbGxkZXRhaWxzIiwiaXNTbmFwc2hvdCIsImZpbHRlckJpbGwiLCJmaWx0ZXIiLCJiaWxsIiwiYm9keSIsIkRFTk9NIiwiY29uc29sZSIsImxvZyIsImZvckVhY2giLCJkb2MiLCJpbWFnZVVybCIsInJlcXVpcmUiLCJ0eXBlIiwibmFtZSIsImVtYWlsIiwibWFwIiwiaXRlbSIsImlkeCIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQU9BLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BS1o7QUFBQSxNQUpKQyxZQUlJLFFBSkpBLFlBSUk7QUFBQSxNQUhKQyxTQUdJLFFBSEpBLFNBR0k7QUFBQSxNQUZKQyxXQUVJLFFBRkpBLFdBRUk7QUFBQSxNQURKQyxVQUNJLFFBREpBLFVBQ0k7QUFDSixNQUFNQyxVQUFVLEdBQUdGLFdBQVcsQ0FBQ0csTUFBWixDQUFtQixVQUFBQyxJQUFJO0FBQUEsV0FBSUEsSUFBSSxDQUFDQyxJQUFMLENBQVVDLEtBQVYsSUFBbUIsTUFBdkI7QUFBQSxHQUF2QixDQUFuQjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVAsVUFBVSxDQUFDUSxPQUFYLENBQW1CLFVBQUFDLEdBQUc7QUFBQSxXQUFJQSxHQUFKO0FBQUEsR0FBdEIsQ0FBWjtBQUVBLFNBQ0UsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsMkNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFZLGFBQVMsRUFBQyxLQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFjLE9BQUcsRUFBRVgsU0FBUyxDQUFDWSxRQUFWLElBQXNCQyxtQkFBTyxDQUFDLDREQUFELENBQWhEO0FBQWlGLE9BQUcsWUFBS2IsU0FBUyxDQUFDYyxJQUFWLElBQWtCLE1BQXZCLFNBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBV2QsU0FBUyxDQUFDZSxJQUFyQixDQURGLEVBRUUsTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVlmLFNBQVMsQ0FBQ2dCLEtBQXRCLENBRkYsQ0FGRixDQURGLEVBUUU7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFjLGFBQVMsRUFBQyxpQkFBeEI7QUFBMEMsV0FBTyxFQUFFakIsWUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLENBUkYsQ0FERixDQURGLEVBZ0JFO0FBQU8sYUFBUyxFQUFDLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksU0FBSyxFQUFDLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGLEVBRUU7QUFBSSxTQUFLLEVBQUMsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkYsRUFHRTtBQUFJLFNBQUssRUFBQyxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixFQUlFO0FBQUksU0FBSyxFQUFDLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLENBREYsQ0FERixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQWhCRixFQXFDRSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0ksVUFBVSxDQUFDYyxHQUFYLENBQWUsVUFBQ0MsSUFBRCxFQUFPQyxHQUFQO0FBQUEsV0FDZDtBQUFHLFNBQUcsRUFBRUEsR0FBUjtBQUFhLFdBQUssRUFBRTtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUF5Q0QsR0FBekMsZ0JBQXlERCxJQUFJLENBQUNaLElBQUwsQ0FBVUMsS0FBbkUsQ0FEYztBQUFBLEdBQWYsQ0FESCxDQXJDRixDQURGO0FBNkNELENBdEREOztLQUFNVCxTO0FBd0RTQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hib2FyZC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb250YWluZXIsIEltYWdlUHJvZmlsZSxcbiAgVGV4dE5hbWUsIFRleHRFbWFpbCxcbiAgQ29sUHJvZmlsZSwgUm93LFxuICBMb2dvdXRCdXR0b24sIFJvd0JpbGwsXG59IGZyb20gJy4vZGFzaGJvYXJkU3R5bGUnXG5cbmNvbnN0IERhc2hib2FyZCA9ICh7XG4gIGhhbmRsZUxvZ291dCxcbiAgaXNQcm9maWxlLFxuICBiaWxsZGV0YWlscyxcbiAgaXNTbmFwc2hvdCxcbn0pID0+IHtcbiAgY29uc3QgZmlsdGVyQmlsbCA9IGJpbGxkZXRhaWxzLmZpbHRlcihiaWxsID0+IGJpbGwuYm9keS5ERU5PTSA+PSAxMDAwMDApXG4gIGNvbnNvbGUubG9nKGlzU25hcHNob3QuZm9yRWFjaChkb2MgPT4gZG9jKSlcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodCBtdC0zXCI+XG4gICAgICAgIDxSb3cgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPENvbFByb2ZpbGUgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICA8SW1hZ2VQcm9maWxlIHNyYz17aXNQcm9maWxlLmltYWdlVXJsIHx8IHJlcXVpcmUoJy4uLy4uL2Fzc2V0cy9pY29ucy9pYmlkLnBuZycpfSBhbHQ9e2Ake2lzUHJvZmlsZS50eXBlIHx8ICdsb2FkJ30taW1nYH0vPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPFRleHROYW1lPntpc1Byb2ZpbGUubmFtZX08L1RleHROYW1lPlxuICAgICAgICAgICAgICA8VGV4dEVtYWlsPntpc1Byb2ZpbGUuZW1haWx9PC9UZXh0RW1haWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbFByb2ZpbGU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgIDxMb2dvdXRCdXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT5LZWx1YXI8L0xvZ291dEJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Sb3c+XG4gICAgICA8L25hdj5cblxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlXCI+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5Oby48L3RoPlxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+Q2FyPC90aD5cbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkNvbG9yPC90aD5cbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkFjdGlvbjwvdGg+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICB7Lyoge2lzU25hcHNob3QuZm9yRWFjaCgoZG9jLCBpZHgpID0+IChcbiAgICAgICAgICA8dHIga2V5PXtpZHh9PlxuICAgICAgICAgICAgPHRoIHNjb3BlPVwicm93XCI+MTwvdGg+XG4gICAgICAgICAgICA8dGQ+e2RvYy5kYXRhKCkuY2FyfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2RvYy5kYXRhKCkuY29sb3J9PC90ZD5cbiAgICAgICAgICAgIDx0ZD5BY3Q8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICkpfSAqL31cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG5cbiAgICAgIDxSb3dCaWxsPlxuICAgICAgICB7ZmlsdGVyQmlsbC5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxuICAgICAgICAgIDxwIGtleT17aWR4fSBzdHlsZT17eyBwYWRkaW5nOiAwIH19PntgWyR7aWR4fV1gfXtgID0+IGB9e2l0ZW0uYm9keS5ERU5PTX08L3A+XG4gICAgICAgICkpfVxuICAgICAgPC9Sb3dCaWxsPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Dashboard/Dashboard.jsx\n");

/***/ })

})