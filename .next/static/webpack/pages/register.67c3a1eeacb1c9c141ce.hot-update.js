webpackHotUpdate_N_E("pages/register",{

/***/ "./components/Dashboard/Dashboard.jsx":
/*!********************************************!*\
  !*** ./components/Dashboard/Dashboard.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _dashboardStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboardStyle */ \"./components/Dashboard/dashboardStyle.js\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/fahrasnurhidayat/Documents/Fahras/Public/Portofolio/ibid-fe-test/components/Dashboard/Dashboard.jsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar Dashboard = function Dashboard(_ref) {\n  var form = _ref.form,\n      setForm = _ref.setForm,\n      isProfile = _ref.isProfile,\n      isSnapshot = _ref.isSnapshot,\n      billdetails = _ref.billdetails,\n      handleLogout = _ref.handleLogout,\n      handleAddNewCar = _ref.handleAddNewCar,\n      handleDeleteCar = _ref.handleDeleteCar;\n  var filterBill = billdetails.filter(function (bill) {\n    return bill.body.DENOM >= 100000;\n  });\n  var dataDocs = [];\n  isSnapshot.forEach(function (doc) {\n    return dataDocs.push({\n      id: doc.id,\n      car: doc.data().car,\n      color: doc.data().color\n    });\n  });\n  return __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_2__[\"Container\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, __jsx(\"nav\", {\n    className: \"navbar navbar-expand-lg navbar-light mt-3\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    className: \"row\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 9\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_2__[\"ColProfile\"], {\n    className: \"col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_2__[\"ImageProfile\"], {\n    src: isProfile.imageUrl || __webpack_require__(/*! ../../assets/icons/ibid.png */ \"./assets/icons/ibid.png\"),\n    alt: \"\".concat(isProfile.type || 'load', \"-img\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_2__[\"TextName\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 15\n    }\n  }, isProfile.name), __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_2__[\"TextEmail\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 15\n    }\n  }, isProfile.email))), __jsx(\"div\", {\n    className: \"col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_2__[\"LogoutButton\"], {\n    className: \"btn btn-primary\",\n    onClick: handleLogout,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, \"Keluar\")))), __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_2__[\"RowBill\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_2__[\"CardForm\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }\n  }, __jsx(\"form\", {\n    className: \"row\",\n    onSubmit: handleAddNewCar,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    className: \"input-group mb-3 col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }\n  }, __jsx(\"input\", {\n    required: true,\n    type: \"text\",\n    maxLength: 30,\n    \"aria-label\": \"Car\",\n    value: form.car,\n    placeholder: \"Input Car\",\n    className: \"form-control\",\n    \"aria-describedby\": \"basic-addon1\",\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        car: e.target.value\n      }));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 15\n    }\n  })), __jsx(\"div\", {\n    className: \"input-group mb-3 col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }, __jsx(\"input\", {\n    required: true,\n    type: \"text\",\n    maxLength: 30,\n    \"aria-label\": \"Color\",\n    value: form.color,\n    className: \"form-control\",\n    placeholder: \"Input Color\",\n    \"aria-describedby\": \"basic-addon1\",\n    onChange: function onChange(e) {\n      return setForm(_objectSpread(_objectSpread({}, form), {}, {\n        color: e.target.value\n      }));\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 15\n    }\n  })), __jsx(\"div\", {\n    className: \"btn-group mb-3 col-lg-1 col-xs-12\",\n    role: \"group\",\n    \"aria-label\": \"Basic example\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }\n  }, __jsx(\"button\", {\n    type: \"submit\",\n    className: \"btn btn-primary\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 15\n    }\n  }, \"Add Car\"))), __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_2__[\"CardTable\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 11\n    }\n  }, !form.isLoad ? __jsx(\"table\", {\n    className: \"table\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 15\n    }\n  }, __jsx(\"thead\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 17\n    }\n  }, __jsx(\"tr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 19\n    }\n  }, __jsx(\"th\", {\n    scope: \"col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 21\n    }\n  }, \"No.\"), __jsx(\"th\", {\n    scope: \"col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 21\n    }\n  }, \"Car\"), __jsx(\"th\", {\n    scope: \"col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 21\n    }\n  }, \"Color\"), __jsx(\"th\", {\n    scope: \"col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 21\n    }\n  }, \"Edit\"), __jsx(\"th\", {\n    scope: \"col\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 21\n    }\n  }, \"Delete\"))), __jsx(\"tbody\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 19\n    }\n  }, dataDocs.map(function (doc, idx) {\n    return __jsx(\"tr\", {\n      key: doc.id,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 23\n      }\n    }, __jsx(\"th\", {\n      scope: \"row\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 25\n      }\n    }, idx + 1), __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 25\n      }\n    }, doc.car), __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 25\n      }\n    }, doc.color), __jsx(\"td\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 25\n      }\n    }, \"Edit\"), __jsx(\"td\", {\n      style: {\n        cursor: \"pointer\"\n      },\n      onClick: function onClick() {\n        return handleDeleteCar(doc.id);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 25\n      }\n    }, \"Delete\"));\n  }))) : __jsx(_dashboardStyle__WEBPACK_IMPORTED_MODULE_2__[\"IsLoad\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 15\n    }\n  }, __jsx(\"div\", {\n    className: \"spinner-grow text-secondary\",\n    role: \"status\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 17\n    }\n  }, __jsx(\"span\", {\n    className: \"visually-hidden\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 19\n    }\n  }, \"Loading...\"))))), filterBill.map(function (item, idx) {\n    return __jsx(\"p\", {\n      key: idx,\n      style: {\n        padding: 0\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 11\n      }\n    }, \"[\".concat(idx, \"]\"), \" => \", item.body.DENOM);\n  })));\n};\n\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\n\nvar _c;\n\n$RefreshReg$(_c, \"Dashboard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvRGFzaGJvYXJkLmpzeD81NWY4Il0sIm5hbWVzIjpbIkRhc2hib2FyZCIsImZvcm0iLCJzZXRGb3JtIiwiaXNQcm9maWxlIiwiaXNTbmFwc2hvdCIsImJpbGxkZXRhaWxzIiwiaGFuZGxlTG9nb3V0IiwiaGFuZGxlQWRkTmV3Q2FyIiwiaGFuZGxlRGVsZXRlQ2FyIiwiZmlsdGVyQmlsbCIsImZpbHRlciIsImJpbGwiLCJib2R5IiwiREVOT00iLCJkYXRhRG9jcyIsImZvckVhY2giLCJkb2MiLCJwdXNoIiwiaWQiLCJjYXIiLCJkYXRhIiwiY29sb3IiLCJpbWFnZVVybCIsInJlcXVpcmUiLCJ0eXBlIiwibmFtZSIsImVtYWlsIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaXNMb2FkIiwibWFwIiwiaWR4IiwiY3Vyc29yIiwiaXRlbSIsInBhZGRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBU0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FTWjtBQUFBLE1BUkpDLElBUUksUUFSSkEsSUFRSTtBQUFBLE1BUEpDLE9BT0ksUUFQSkEsT0FPSTtBQUFBLE1BTkpDLFNBTUksUUFOSkEsU0FNSTtBQUFBLE1BTEpDLFVBS0ksUUFMSkEsVUFLSTtBQUFBLE1BSkpDLFdBSUksUUFKSkEsV0FJSTtBQUFBLE1BSEpDLFlBR0ksUUFISkEsWUFHSTtBQUFBLE1BRkpDLGVBRUksUUFGSkEsZUFFSTtBQUFBLE1BREpDLGVBQ0ksUUFESkEsZUFDSTtBQUNKLE1BQU1DLFVBQVUsR0FBR0osV0FBVyxDQUFDSyxNQUFaLENBQW1CLFVBQUFDLElBQUk7QUFBQSxXQUFJQSxJQUFJLENBQUNDLElBQUwsQ0FBVUMsS0FBVixJQUFtQixNQUF2QjtBQUFBLEdBQXZCLENBQW5CO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLEVBQWpCO0FBRUFWLFlBQVUsQ0FBQ1csT0FBWCxDQUFtQixVQUFBQyxH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c0IsR0FBWCxDQUFlLFVBQUNHLElBQUQsRUFBT0YsR0FBUDtBQUFBLFdBQ2Q7QUFBRyxTQUFHLEVBQUVBLEdBQVI7QUFBYSxXQUFLLEVBQUU7QUFBRUcsZUFBTyxFQUFFO0FBQVgsT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBeUNILEdBQXpDLGdCQUF5REUsSUFBSSxDQUFDdEIsSUFBTCxDQUFVQyxLQUFuRSxDQURjO0FBQUEsR0FBZixDQXBFSCxDQWhCRixDQURGO0FBMkZELENBOUdEOztLQUFNYixTO0FBZ0hTQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRGFzaGJvYXJkL0Rhc2hib2FyZC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb250YWluZXIsIEltYWdlUHJvZmlsZSxcbiAgVGV4dE5hbWUsIFRleHRFbWFpbCxcbiAgQ29sUHJvZmlsZSwgUm93LFxuICBMb2dvdXRCdXR0b24sIFJvd0JpbGwsXG4gIElzTG9hZCwgQ2FyZEZvcm0sXG4gIENhcmRUYWJsZSxcbn0gZnJvbSAnLi9kYXNoYm9hcmRTdHlsZSdcblxuY29uc3QgRGFzaGJvYXJkID0gKHtcbiAgZm9ybSxcbiAgc2V0Rm9ybSxcbiAgaXNQcm9maWxlLFxuICBpc1NuYXBzaG90LFxuICBiaWxsZGV0YWlscyxcbiAgaGFuZGxlTG9nb3V0LFxuICBoYW5kbGVBZGROZXdDYXIsXG4gIGhhbmRsZURlbGV0ZUNhcixcbn0pID0+IHtcbiAgY29uc3QgZmlsdGVyQmlsbCA9IGJpbGxkZXRhaWxzLmZpbHRlcihiaWxsID0+IGJpbGwuYm9keS5ERU5PTSA+PSAxMDAwMDApXG4gIGNvbnN0IGRhdGFEb2NzID0gW11cblxuICBpc1NuYXBzaG90LmZvckVhY2goZG9jID0+IGRhdGFEb2NzLnB1c2goe1xuICAgIGlkOiBkb2MuaWQsXG4gICAgY2FyOiBkb2MuZGF0YSgpLmNhcixcbiAgICBjb2xvcjogZG9jLmRhdGEoKS5jb2xvcixcbiAgfSkpXG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItbGlnaHQgbXQtM1wiPlxuICAgICAgICA8Um93IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxDb2xQcm9maWxlIGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgPEltYWdlUHJvZmlsZSBzcmM9e2lzUHJvZmlsZS5pbWFnZVVybCB8fCByZXF1aXJlKCcuLi8uLi9hc3NldHMvaWNvbnMvaWJpZC5wbmcnKX0gYWx0PXtgJHtpc1Byb2ZpbGUudHlwZSB8fCAnbG9hZCd9LWltZ2B9Lz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxUZXh0TmFtZT57aXNQcm9maWxlLm5hbWV9PC9UZXh0TmFtZT5cbiAgICAgICAgICAgICAgPFRleHRFbWFpbD57aXNQcm9maWxlLmVtYWlsfTwvVGV4dEVtYWlsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9Db2xQcm9maWxlPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICA8TG9nb3V0QnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+S2VsdWFyPC9Mb2dvdXRCdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUm93PlxuICAgICAgPC9uYXY+XG4gICAgICBcbiAgICAgIDxSb3dCaWxsPlxuICAgICAgICA8Q2FyZEZvcm0+XG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwicm93XCIgb25TdWJtaXQ9e2hhbmRsZUFkZE5ld0Nhcn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwIG1iLTMgY29sXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG1heExlbmd0aD17MzB9XG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNhclwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0uY2FyfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5wdXQgQ2FyXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJiYXNpYy1hZGRvbjFcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybSh7IC4uLmZvcm0sIGNhcjogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItMyBjb2xcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbWF4TGVuZ3RoPXszMH1cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ29sb3JcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmNvbG9yfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnB1dCBDb2xvclwiXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uMVwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtKHsgLi4uZm9ybSwgY29sb3I6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1ncm91cCBtYi0zIGNvbC1sZy0xIGNvbC14cy0xMlwiIHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJCYXNpYyBleGFtcGxlXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPkFkZCBDYXI8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgIDxDYXJkVGFibGU+XG4gICAgICAgICAgICB7IWZvcm0uaXNMb2FkID8gKFxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPk5vLjwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkNhcjwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkNvbG9yPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+RWRpdDwvdGg+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPkRlbGV0ZTwvdGg+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHtkYXRhRG9jcy5tYXAoKGRvYywgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17ZG9jLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cInJvd1wiPntpZHgrMX08L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntkb2MuY2FyfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2RvYy5jb2xvcn08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPkVkaXQ8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX0gb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlQ2FyKGRvYy5pZCl9PkRlbGV0ZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPElzTG9hZD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItZ3JvdyB0ZXh0LXNlY29uZGFyeVwiIHJvbGU9XCJzdGF0dXNcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInZpc3VhbGx5LWhpZGRlblwiPkxvYWRpbmcuLi48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvSXNMb2FkPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0NhcmRUYWJsZT5cbiAgICAgICAgPC9DYXJkRm9ybT5cbiAgICAgIFxuICAgICAgICB7ZmlsdGVyQmlsbC5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxuICAgICAgICAgIDxwIGtleT17aWR4fSBzdHlsZT17eyBwYWRkaW5nOiAwIH19PntgWyR7aWR4fV1gfXtgID0+IGB9e2l0ZW0uYm9keS5ERU5PTX08L3A+XG4gICAgICAgICkpfVxuICAgICAgPC9Sb3dCaWxsPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Dashboard/Dashboard.jsx\n");

/***/ })

})