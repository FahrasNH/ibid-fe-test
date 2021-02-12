webpackHotUpdate_N_E("pages/register",{

/***/ "./components/Auth/auth.js":
/*!*********************************!*\
  !*** ./components/Auth/auth.js ***!
  \*********************************/
/*! exports provided: Container, AuthCard, Title, LogoGoogle, FaGoogle, ButtonGoogle, Divider, LinkAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthCard\", function() { return AuthCard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Title\", function() { return Title; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LogoGoogle\", function() { return LogoGoogle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FaGoogle\", function() { return FaGoogle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButtonGoogle\", function() { return ButtonGoogle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Divider\", function() { return Divider; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LinkAuth\", function() { return LinkAuth; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nfunction _templateObject8() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\tbottom: 0;\\n\\tfont-size: 16px;\\n\\ttext-align: center;\\n\\tposition: absolute;\\n\"]);\n\n  _templateObject8 = function _templateObject8() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject7() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\tclear: both;\\n\\tdisplay: flex;\\n\\tmargin-top: 20px;\\n\\toverflow: hidden;\\n\\tposition: relative;\\n\\ttext-align: center;\\n\\talign-items: center;\\n\\tmargin-bottom: 20px;\\n\\tjustify-content: center;\\n\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\twidth: 85%;\\n\\theight: 36px;\\n\\talign-items: center;\\n\\tjustify-content: center;\\n\\tbackground-color: #1B73E8;\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\tcolor: #FFF;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\twidth: 15%;\\n\\tborder: 1px solid #1B73E8;\\n\\tjustify-content: center;\\n\\tbackground-color: #1B73E8;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\tfont-size: 24px;\\n\\tfont-weight: 500;\\n\\tfont-family: 'Work Sans',\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\twidth: 400px;\\n\\theight: 500px;\\n\\tposition: relative;\\n\\tpadding: 20px 50px;\\n\\tborder-radius: 8px;\\n\\tbackground-color: #FFF;\\n\\tbox-shadow: 10px 10px 45px #EAEAEA;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\theight: 100vh;\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tjustify-content: center;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject());\nvar AuthCard = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2());\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p(_templateObject3());\nvar LogoGoogle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject4());\nvar FaGoogle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject5());\nvar ButtonGoogle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject6());\nvar Divider = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject7());\nvar LinkAuth = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p(_templateObject8());\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRoL2F1dGguanM/OTgyYSJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJBdXRoQ2FyZCIsIlRpdGxlIiwicCIsIkxvZ29Hb29nbGUiLCJGYUdvb2dsZSIsIkJ1dHRvbkdvb2dsZSIsImJ1dHRvbiIsIkRpdmlkZXIiLCJMaW5rQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxTQUFTLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQWY7QUFPQSxJQUFNQyxRQUFRLEdBQUdGLHlEQUFNLENBQUNDLEdBQVYsb0JBQWQ7QUFVQSxJQUFNRSxLQUFLLEdBQUdILHlEQUFNLENBQUNJLENBQVYsb0JBQVg7QUFNQSxJQUFNQyxVQUFVLEdBQUdMLHlEQUFNLENBQUNDLEdBQVYsb0JBQWhCO0FBT0EsSUFBTUssUUFBUSxHQUFHTix5REFBTSxDQUFDQyxHQUFWLG9CQUFkO0FBSUEsSUFBTU0sWUFBWSxHQUFHUCx5REFBTSxDQUFDUSxNQUFWLG9CQUFsQjtBQVFBLElBQU1DLE9BQU8sR0FBR1QseURBQU0sQ0FBQ0MsR0FBVixvQkFBYjtBQVlBLElBQU1TLFFBQVEsR0FBR1YseURBQU0sQ0FBQ0ksQ0FBVixvQkFBZCIsImZpbGUiOiIuL2NvbXBvbmVudHMvQXV0aC9hdXRoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG5cdGhlaWdodDogMTAwdmg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IEF1dGhDYXJkID0gc3R5bGVkLmRpdmBcblx0d2lkdGg6IDQwMHB4O1xuXHRoZWlnaHQ6IDUwMHB4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHBhZGRpbmc6IDIwcHggNTBweDtcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuXHRib3gtc2hhZG93OiAxMHB4IDEwcHggNDVweCAjRUFFQUVBO1xuYDtcblxuZXhwb3J0IGNvbnN0IFRpdGxlID0gc3R5bGVkLnBgXG5cdGZvbnQtc2l6ZTogMjRweDtcblx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0Zm9udC1mYW1pbHk6ICdXb3JrIFNhbnMnLFxuYDtcblxuZXhwb3J0IGNvbnN0IExvZ29Hb29nbGUgPSBzdHlsZWQuZGl2YFxuXHR3aWR0aDogMTUlO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMUI3M0U4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YmFja2dyb3VuZC1jb2xvcjogIzFCNzNFODtcbmA7XG5cbmV4cG9ydCBjb25zdCBGYUdvb2dsZSA9IHN0eWxlZC5kaXZgXG5cdGNvbG9yOiAjRkZGO1xuYDtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkdvb2dsZSA9IHN0eWxlZC5idXR0b25gXG5cdHdpZHRoOiA4NSU7XG5cdGhlaWdodDogMzZweDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGJhY2tncm91bmQtY29sb3I6ICMxQjczRTg7XG5gO1xuXG5leHBvcnQgY29uc3QgRGl2aWRlciA9IHN0eWxlZC5kaXZgXG5cdGNsZWFyOiBib3RoO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5gXG5cbmV4cG9ydCBjb25zdCBMaW5rQXV0aCA9IHN0eWxlZC5wYFxuXHRib3R0b206IDA7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5gXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Auth/auth.js\n");

/***/ })

})