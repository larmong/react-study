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
exports.id = "pages/30-03-observable-flatmap";
exports.ids = ["pages/30-03-observable-flatmap"];
exports.modules = {

/***/ "./pages/30-03-observable-flatmap/index.tsx":
/*!**************************************************!*\
  !*** ./pages/30-03-observable-flatmap/index.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ObservableFlatmapPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zen-observable */ \"zen-observable\");\n/* harmony import */ var zen_observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(zen_observable__WEBPACK_IMPORTED_MODULE_1__);\n\n// import { Observable } from \"@apollo/client\";\n\nfunction ObservableFlatmapPage() {\n    const onClickButton = ()=>{\n        // new Promise(() => {})      ===> Promise 사용법\n        // new Observable(() => {})   ===> apollo 에서 제공해주고 있는 Observable\n        (0,zen_observable__WEBPACK_IMPORTED_MODULE_1__.from)([\n            \"1번 useQuery\",\n            \"2번 useQuery\",\n            \"3번 useQuery\"\n        ]) // ===> from/Promise 같은 기능\n        .flatMap((el)=>(0,zen_observable__WEBPACK_IMPORTED_MODULE_1__.from)([\n                `${el} 결과에 qqq 적용`,\n                `${el} 결과에 zzz 적용`\n            ])\n        ).subscribe((el)=>console.log(el)\n        ); // ===> subscribe: 실행\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: onClickButton,\n        children: \"클릭\"\n    }, void 0, false, {\n        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/30-03-observable-flatmap/index.tsx\",\n        lineNumber: 14,\n        columnNumber: 10\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8zMC0wMy1vYnNlcnZhYmxlLWZsYXRtYXAvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLEVBQStDO0FBQ1Y7QUFFdEIsUUFBUSxDQUFDQyxxQkFBcUIsR0FBRyxDQUFDO0lBQy9DLEtBQUssQ0FBQ0MsYUFBYSxPQUFTLENBQUM7UUFDM0IsRUFBOEM7UUFDeEMsRUFBMEQ7UUFFOUNGLG9EQUFkLENBQUMsQ0FBQztZQUFBLENBQWE7WUFBSSxDQUFhO1lBQUksQ0FBYTtRQUFFLENBQUMsQ0FBRSxDQUEwQixFQUFRO1NBQzNFRyxPQUFQLEVBQUVDLEVBQUUsR0FBS0osb0RBQUksQ0FBQyxDQUFDO21CQUFHSSxFQUFFLENBQUM7bUJBQTJCQSxFQUFFLENBQUM7WUFBc0IsQ0FBQztVQUM3REMsU0FBWCxFQUFFRCxFQUFFLEdBQUtFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxFQUFFO1VBQUksQ0FBcUIsRUFBSTtJQUM5RCxDQUFIO0lBRUQsTUFBTSw2RUFBRUksQ0FBTTtRQUFDQyxPQUFPLEVBQUVQLGFBQWE7a0JBQUUsQ0FBRTs7Ozs7O0FBQzNDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGFzcy8uL3BhZ2VzLzMwLTAzLW9ic2VydmFibGUtZmxhdG1hcC9pbmRleC50c3g/ZjA2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBmcm9tIH0gZnJvbSBcInplbi1vYnNlcnZhYmxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9ic2VydmFibGVGbGF0bWFwUGFnZSgpIHtcbiAgY29uc3Qgb25DbGlja0J1dHRvbiA9ICgpID0+IHtcbiAgICAvLyBuZXcgUHJvbWlzZSgoKSA9PiB7fSkgICAgICA9PT0+IFByb21pc2Ug7IKs7Jqp67KVXG4gICAgLy8gbmV3IE9ic2VydmFibGUoKCkgPT4ge30pICAgPT09PiBhcG9sbG8g7JeQ7IScIOygnOqzte2VtOyjvOqzoCDsnojripQgT2JzZXJ2YWJsZVxuXG4gICAgZnJvbShbXCIx67KIIHVzZVF1ZXJ5XCIsIFwiMuuyiCB1c2VRdWVyeVwiLCBcIjPrsoggdXNlUXVlcnlcIl0pIC8vID09PT4gZnJvbS9Qcm9taXNlIOqwmeydgCDquLDriqVcbiAgICAgIC5mbGF0TWFwKChlbCkgPT4gZnJvbShbYCR7ZWx9IOqysOqzvOyXkCBxcXEg7KCB7JqpYCwgYCR7ZWx9IOqysOqzvOyXkCB6enog7KCB7JqpYF0pKVxuICAgICAgLnN1YnNjcmliZSgoZWwpID0+IGNvbnNvbGUubG9nKGVsKSk7IC8vID09PT4gc3Vic2NyaWJlOiDsi6TtlolcbiAgfTtcblxuICByZXR1cm4gPGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrQnV0dG9ufT7tgbTrpq08L2J1dHRvbj47XG59XG4iXSwibmFtZXMiOlsiZnJvbSIsIk9ic2VydmFibGVGbGF0bWFwUGFnZSIsIm9uQ2xpY2tCdXR0b24iLCJmbGF0TWFwIiwiZWwiLCJzdWJzY3JpYmUiLCJjb25zb2xlIiwibG9nIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/30-03-observable-flatmap/index.tsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "zen-observable":
/*!*********************************!*\
  !*** external "zen-observable" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("zen-observable");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/30-03-observable-flatmap/index.tsx"));
module.exports = __webpack_exports__;

})();