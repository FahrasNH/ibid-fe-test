webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"./node_modules/lodash/lodash.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ \"./node_modules/firebase/app/dist/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _public_firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/firebase */ \"./public/firebase.js\");\nvar _jsxFileName = \"/Users/fahrasnurhidayat/Documents/Fahras/Public/Portofolio/ibid-fe-test/pages/index.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nObject(_public_firebase__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\nvar db = firebase_app__WEBPACK_IMPORTED_MODULE_4__[\"default\"].firestore();\ndb.settings({\n  timestampsInSnapshots: true\n});\ndb.collection('cars').get().then(function (snapshot) {\n  console.log(snapshot.docs);\n});\nfunction Home() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__[\"isEmpty\"])(window.localStorage.getItem('isToken'))) {\n      router.push('/login');\n    }\n  });\n  return __jsx(_components__WEBPACK_IMPORTED_MODULE_3__[\"Dashboard\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  });\n}\n\n_s(Home, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJpbml0aWFsRmlyZWJhc2UiLCJkYiIsImZpcmViYXNlIiwiZmlyZXN0b3JlIiwic2V0dGluZ3MiLCJ0aW1lc3RhbXBzSW5TbmFwc2hvdHMiLCJjb2xsZWN0aW9uIiwiZ2V0IiwidGhlbiIsInNuYXBzaG90IiwiY29uc29sZSIsImxvZyIsImRvY3MiLCJIb21lIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiaXNFbXB0eSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLGdFQUFlO0FBRWYsSUFBTUMsRUFBRSxHQUFHQyxvREFBUSxDQUFDQyxTQUFULEVBQVg7QUFDQUYsRUFBRSxDQUFDRyxRQUFILENBQVk7QUFBRUMsdUJBQXFCLEVBQUU7QUFBekIsQ0FBWjtBQUVBSixFQUFFLENBQUNLLFVBQUgsQ0FBYyxNQUFkLEVBQXNCQyxHQUF0QixHQUE0QkMsSUFBNUIsQ0FBaUMsVUFBQ0MsUUFBRCxFQUFjO0FBQzdDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBUSxDQUFDRyxJQUFyQjtBQUNELENBRkQ7QUFJZSxTQUFTQyxJQUFULEdBQWdCO0FBQUE7O0FBQzdCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUMsc0RBQU8sQ0FBQ0MsTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixTQUE1QixDQUFELENBQVgsRUFBcUQ7QUFDbkROLFlBQU0sQ0FBQ08sSUFBUCxDQUFZLFFBQVo7QUFDRDtBQUNGLEdBSlEsQ0FBVDtBQU1BLFNBQ0UsTUFBQyxxREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUFHRDs7R0FadUJSLEk7VUFDUEUscUQ7OztLQURPRixJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSBcImxvZGFzaFwiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IERhc2hib2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzXCJcbmltcG9ydCBmaXJlYmFzZSBmcm9tIFwiZmlyZWJhc2UvYXBwXCJcbmltcG9ydCBcImZpcmViYXNlL2ZpcmVzdG9yZVwiXG5pbXBvcnQgaW5pdGlhbEZpcmViYXNlIGZyb20gXCIuLi9wdWJsaWMvZmlyZWJhc2VcIlxuXG5pbml0aWFsRmlyZWJhc2UoKVxuXG5jb25zdCBkYiA9IGZpcmViYXNlLmZpcmVzdG9yZSgpXG5kYi5zZXR0aW5ncyh7IHRpbWVzdGFtcHNJblNuYXBzaG90czogdHJ1ZSB9KVxuXG5kYi5jb2xsZWN0aW9uKCdjYXJzJykuZ2V0KCkudGhlbigoc25hcHNob3QpID0+IHtcbiAgY29uc29sZS5sb2coc25hcHNob3QuZG9jcylcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNFbXB0eSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzVG9rZW4nKSkpIHtcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxEYXNoYm9hcmQgLz5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})