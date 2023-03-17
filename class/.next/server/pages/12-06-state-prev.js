"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/12-06-state-prev";
exports.ids = ["pages/12-06-state-prev"];
exports.modules = {

/***/ "./pages/12-06-state-prev/index.tsx":
/*!******************************************!*\
  !*** ./pages/12-06-state-prev/index.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StatePrevPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction StatePrevPage() {\n    const { 0: count , 1: setCount  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    // const onClickCountUp = () => {\n    //   setCount(count + 1); // 현재 count는 0 + 1 => 1을 상자에 담는다.\n    //   setCount(count + 1); // 1 이 상자에 담겼지만 여전히 count는 0 이므로 1이 상자에 담긴다\n    //   setCount(count + 1); // ...\n    //   setCount(count + 1); // ...\n    //   setCount(count + 1); // 같은 방식으로 최종적으로 1이 상자에 담겨 화면에 1이 반영된다\n    // };\n    const onClickCountUp = ()=>{\n        setCount((prev)=>prev + 1\n        ); // 임시저장공간의 0(기본값, prev) + 1 => 1을 상자에 담는다.\n        setCount((prev)=>prev + 1\n        ); // 임시저장공간에 담긴 1(prev) + 1 => 2를 상자에 담는다.\n        setCount((prev)=>prev + 1\n        ); // ...\n        setCount((prev)=>prev + 1\n        ); // ...\n        setCount((prev)=>prev + 1\n        ); // 같은 방식으로 최종적으로 5가 상자에 담겨 화면에 5가 반영된다\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                id: \"count\",\n                children: [\n                    count,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/12-06-state-prev/index.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onClickCountUp,\n                children: \"카운트 올리기👍\"\n            }, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/12-06-state-prev/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8xMi0wNi1zdGF0ZS1wcmV2L2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBZ0M7QUFFakIsUUFBUSxDQUFDQyxhQUFhLEdBQUcsQ0FBQztJQUN2QyxLQUFLLE1BQUVDLEtBQUssTUFBRUMsUUFBUSxNQUFJSCwrQ0FBUSxDQUFDLENBQUM7SUFFcEMsRUFBaUM7SUFDakMsRUFBMkQ7SUFDdkMsRUFBaUQ7SUFDekIsRUFBWjtJQUNoQyxFQUFnQztJQUNoQyxFQUFnRTtJQUNkLEVBQTdDO0lBQ0wsS0FBSyxDQUFDSSxjQUFjLE9BQVMsQ0FBQztRQUM1QkQsUUFBUSxFQUFFRSxJQUFJLEdBQUtBLElBQUksR0FBRyxDQUFDO1VBQUcsQ0FBMEMsRUFBa0M7UUFDeEVGLFFBQTFCLEVBQUVFLElBQUksR0FBS0EsSUFBSSxHQUFHLENBQUM7VUFBRyxDQUF3QyxFQUFnQztRQUN0RUYsUUFBeEIsRUFBRUUsSUFBSSxHQUFLQSxJQUFJLEdBQUcsQ0FBQztVQUFHLENBQU07UUFDcENGLFFBQVEsRUFBRUUsSUFBSSxHQUFLQSxJQUFJLEdBQUcsQ0FBQztVQUFHLENBQU07UUFDcENGLFFBQVEsRUFBRUUsSUFBSSxHQUFLQSxJQUFJLEdBQUcsQ0FBQztVQUFHLENBQXNDLEVBQWtEO0lBQ3RFLENBQWpEO0lBRUQsTUFBTTs7d0ZBRURDLENBQUk7Z0JBQUNDLEVBQUUsRUFBQyxDQUFPOztvQkFBRUwsS0FBSztvQkFBQyxDQUFDOzs7Ozs7O3dGQUN4Qk0sQ0FBTTtnQkFBQ0MsT0FBTyxFQUFFTCxjQUFjOzBCQUFFLENBQVE7Ozs7Ozs7O0FBRy9DLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGFzcy8uL3BhZ2VzLzEyLTA2LXN0YXRlLXByZXYvaW5kZXgudHN4P2U3OTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhdGVQcmV2UGFnZSgpIHtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcblxuICAvLyBjb25zdCBvbkNsaWNrQ291bnRVcCA9ICgpID0+IHtcbiAgLy8gICBzZXRDb3VudChjb3VudCArIDEpOyAvLyDtmITsnqwgY291bnTripQgMCArIDEgPT4gMeydhCDsg4HsnpDsl5Ag64u064qU64ukLlxuICAvLyAgIHNldENvdW50KGNvdW50ICsgMSk7IC8vIDEg7J20IOyDgeyekOyXkCDri7Tqsrzsp4Drp4wg7Jes7KCE7Z6IIGNvdW5064qUIDAg7J2066+A66GcIDHsnbQg7IOB7J6Q7JeQIOuLtOq4tOuLpFxuICAvLyAgIHNldENvdW50KGNvdW50ICsgMSk7IC8vIC4uLlxuICAvLyAgIHNldENvdW50KGNvdW50ICsgMSk7IC8vIC4uLlxuICAvLyAgIHNldENvdW50KGNvdW50ICsgMSk7IC8vIOqwmeydgCDrsKnsi53snLzroZwg7LWc7KKF7KCB7Jy866GcIDHsnbQg7IOB7J6Q7JeQIOuLtOqyqCDtmZTrqbTsl5AgMeydtCDrsJjsmIHrkJzri6RcbiAgLy8gfTtcbiAgY29uc3Qgb25DbGlja0NvdW50VXAgPSAoKSA9PiB7XG4gICAgc2V0Q291bnQoKHByZXYpID0+IHByZXYgKyAxKTsgLy8g7J6E7Iuc7KCA7J6l6rO16rCE7J2YIDAo6riw67O46rCSLCBwcmV2KSArIDEgPT4gMeydhCDsg4HsnpDsl5Ag64u064qU64ukLlxuICAgIHNldENvdW50KChwcmV2KSA9PiBwcmV2ICsgMSk7IC8vIOyehOyLnOyggOyepeqzteqwhOyXkCDri7TquLQgMShwcmV2KSArIDEgPT4gMuulvCDsg4HsnpDsl5Ag64u064qU64ukLlxuICAgIHNldENvdW50KChwcmV2KSA9PiBwcmV2ICsgMSk7IC8vIC4uLlxuICAgIHNldENvdW50KChwcmV2KSA9PiBwcmV2ICsgMSk7IC8vIC4uLlxuICAgIHNldENvdW50KChwcmV2KSA9PiBwcmV2ICsgMSk7IC8vIOqwmeydgCDrsKnsi53snLzroZwg7LWc7KKF7KCB7Jy866GcIDXqsIAg7IOB7J6Q7JeQIOuLtOqyqCDtmZTrqbTsl5AgNeqwgCDrsJjsmIHrkJzri6RcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8c3BhbiBpZD1cImNvdW50XCI+e2NvdW50fSA8L3NwYW4+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tDb3VudFVwfT7subTsmrTtirgg7Jis66as6riw8J+RjTwvYnV0dG9uPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiU3RhdGVQcmV2UGFnZSIsImNvdW50Iiwic2V0Q291bnQiLCJvbkNsaWNrQ291bnRVcCIsInByZXYiLCJzcGFuIiwiaWQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/12-06-state-prev/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/12-06-state-prev/index.tsx"));
module.exports = __webpack_exports__;

})();