"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/31-02-memoization-with-map/01-parent",{

/***/ "./pages/31-02-memoization-with-map/01-parent.tsx":
/*!********************************************************!*\
  !*** ./pages/31-02-memoization-with-map/01-parent.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MemoizationParentPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _02_child__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./02-child */ \"./pages/31-02-memoization-with-map/02-child.tsx\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction MemoizationParentPage() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"철수는 오늘 점심을 맛있게 먹었습니다.\"), data = ref[0], setData = ref[1];\n    var onClickChange = function() {\n        setData(\"영희는 오늘 저녁을 맛없게 먹었습니다.\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            data.split(\" \").map(function(el) {\n                // key 자체가 변경되어 props 로 넘어가므로 모두 리렌더링 됨!!\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_02_child__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    el: el\n                }, (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(), false, {\n                    fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/31-02-memoization-with-map/01-parent.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, _this);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onClickChange,\n                children: \"체인지!\"\n            }, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/31-02-memoization-with-map/01-parent.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(MemoizationParentPage, \"KwqdOSfrSNkLap2f2hQ4VhemA0k=\");\n_c = MemoizationParentPage;\nvar _c;\n$RefreshReg$(_c, \"MemoizationParentPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8zMS0wMi1tZW1vaXphdGlvbi13aXRoLW1hcC8wMS1wYXJlbnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ0g7QUFDTTs7QUFFcEIsUUFBUSxDQUFDSSxxQkFBcUIsR0FBRyxDQUFDOzs7SUFDL0MsR0FBSyxDQUFtQkosR0FBaUMsR0FBakNBLCtDQUFRLENBQUMsQ0FBdUQseURBQWpGSztJQUV5QixHQUEzQixDQUFDRSxhQUFhLEdBQUcsUUFDeEIsR0FEOEIsQ0FBQztRQUMzQkQsT0FBTyxDQUFDLENBQXVCO0lBQ0QsQ0FBL0I7SUFFRCxNQUFNOztZQU1ERCxJQUFJLENBQUNHLEtBQUssQ0FBQyxDQUFHLElBQUVDLEdBQUcsQ0FBQyxRQUFRLENBQVBDLEVBQUU7Z0JBQ3RCLEVBQXlDOzhCQUNELE1BQWxDQyxDQUFBQSw2REFBQUEsQ0FBTFYsaURBQUk7b0JBQWdCUyxFQUFFLEVBQUVBLEVBQUU7bUJBQWhCUCx3Q0FBTTs7Ozs7O3dGQUVsQlMsQ0FBTTtnQkFBQ0MsT0FBTyxFQUFFTixhQUFhOzBCQUFFLENBQUk7Ozs7Ozs7O0FBRzFDLENBQUM7R0FwQnVCSCxxQkFBcUI7S0FBckJBLHFCQUFxQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy8zMS0wMi1tZW1vaXphdGlvbi13aXRoLW1hcC8wMS1wYXJlbnQudHN4P2FmYjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBXb3JkIGZyb20gXCIuLzAyLWNoaWxkXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW1vaXphdGlvblBhcmVudFBhZ2UoKSB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFwi7LKg7IiY64qUIOyYpOuKmCDsoJDsi6zsnYQg66eb7J6I6rKMIOuoueyXiOyKteuLiOuLpC5cIik7XG5cbiAgY29uc3Qgb25DbGlja0NoYW5nZSA9ICgpID0+IHtcbiAgICBzZXREYXRhKFwi7JiB7Z2s64qUIOyYpOuKmCDsoIDrhYHsnYQg66eb7JeG6rKMIOuoueyXiOyKteuLiOuLpC5cIik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qe2RhdGEuc3BsaXQoXCIgXCIpLm1hcCgoZWwsIGluZGV4KSA9PiAoKi99XG4gICAgICB7LyogIC8vIG1lbW8gPT09PiBrZXkg65iQ64qUIGVs7J20IOuzgOqyveuQnCDrtoDrrLjrp4wg66as66CM642U66eBIOuQqCjspoksIFwi7Jik64qYLCBcIuuoueyXiOyKteuLiOuLpC5cIiDsoJzsmbgpICovfVxuICAgICAgey8qICA8V29yZCBrZXk9e2luZGV4fSBlbD17ZWx9IC8+Ki99XG4gICAgICB7LyopKX0qL31cbiAgICAgIHtkYXRhLnNwbGl0KFwiIFwiKS5tYXAoKGVsKSA9PiAoXG4gICAgICAgIC8vIGtleSDsnpDssrTqsIAg67OA6rK965CY7Ja0IHByb3BzIOuhnCDrhJjslrTqsIDrr4DroZwg66qo65GQIOumrOugjOuNlOungSDrkKghIVxuICAgICAgICA8V29yZCBrZXk9e3V1aWR2NCgpfSBlbD17ZWx9IC8+XG4gICAgICApKX1cbiAgICAgIDxidXR0b24gb25DbGljaz17b25DbGlja0NoYW5nZX0+7LK07J247KeAITwvYnV0dG9uPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiV29yZCIsInY0IiwidXVpZHY0IiwiTWVtb2l6YXRpb25QYXJlbnRQYWdlIiwiZGF0YSIsInNldERhdGEiLCJvbkNsaWNrQ2hhbmdlIiwic3BsaXQiLCJtYXAiLCJlbCIsImtleSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/31-02-memoization-with-map/01-parent.tsx\n");

/***/ })

});