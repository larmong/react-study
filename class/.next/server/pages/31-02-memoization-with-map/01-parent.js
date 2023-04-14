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
exports.id = "pages/31-02-memoization-with-map/01-parent";
exports.ids = ["pages/31-02-memoization-with-map/01-parent"];
exports.modules = {

/***/ "./pages/31-02-memoization-with-map/01-parent.tsx":
/*!********************************************************!*\
  !*** ./pages/31-02-memoization-with-map/01-parent.tsx ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MemoizationParentPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _02_child__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./02-child */ \"./pages/31-02-memoization-with-map/02-child.tsx\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"uuid\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_3__]);\nuuid__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction MemoizationParentPage() {\n    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"철수는 오늘 점심을 맛있게 먹었습니다.\");\n    const onClickChange = ()=>{\n        setData(\"영희는 오늘 저녁을 맛없게 먹었습니다.\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            data.split(\" \").map((el, index)=>// key 또는 el이 변경된 부문만 리렌더링 됨(즉, \"오늘, \"먹었습니다.\" 제외)\n                // memo 는 props(el) 가 변경되어야 리렌더링 되므로..\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_02_child__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    el: el\n                }, (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(), false, {\n                    fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/31-02-memoization-with-map/01-parent.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            ),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onClickChange,\n                children: \"체인지!\"\n            }, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/31-02-memoization-with-map/01-parent.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8zMS0wMi1tZW1vaXphdGlvbi13aXRoLW1hcC8wMS1wYXJlbnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ0g7QUFDTTtBQUVwQixRQUFRLENBQUNJLHFCQUFxQixHQUFHLENBQUM7SUFDL0MsS0FBSyxNQUFFQyxJQUFJLE1BQUVDLE9BQU8sTUFBSU4sK0NBQVEsQ0FBQyxDQUF1QjtJQUV4QixLQUEzQixDQUFDTyxhQUFhLE9BQVMsQ0FBQztRQUMzQkQsT0FBTyxDQUFDLENBQXVCO0lBQ0QsQ0FBL0I7SUFFRCxNQUFNOztZQUVERCxJQUFJLENBQUNHLEtBQUssQ0FBQyxDQUFHLElBQUVDLEdBQUcsRUFBRUMsRUFBRSxFQUFFQyxLQUFLLEdBQzdCLEVBQWlEO2dCQUNELEVBQVY7NEZBQ1RWLGlEQUF4QjtvQkFBZ0JTLEVBQUUsRUFBRUEsRUFBRTttQkFBaEJQLHdDQUFNOzs7Ozs7d0ZBRWxCUyxDQUFNO2dCQUFDQyxPQUFPLEVBQUVOLGFBQWE7MEJBQUUsQ0FBSTs7Ozs7Ozs7QUFHMUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsYXNzLy4vcGFnZXMvMzEtMDItbWVtb2l6YXRpb24td2l0aC1tYXAvMDEtcGFyZW50LnRzeD9hZmI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgV29yZCBmcm9tIFwiLi8wMi1jaGlsZFwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVtb2l6YXRpb25QYXJlbnRQYWdlKCkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShcIuyyoOyImOuKlCDsmKTripgg7KCQ7Ius7J2EIOunm+yeiOqyjCDrqLnsl4jsirXri4jri6QuXCIpO1xuXG4gIGNvbnN0IG9uQ2xpY2tDaGFuZ2UgPSAoKSA9PiB7XG4gICAgc2V0RGF0YShcIuyYge2drOuKlCDsmKTripgg7KCA64WB7J2EIOunm+yXhuqyjCDrqLnsl4jsirXri4jri6QuXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtkYXRhLnNwbGl0KFwiIFwiKS5tYXAoKGVsLCBpbmRleCkgPT4gKFxuICAgICAgICAvLyBrZXkg65iQ64qUIGVs7J20IOuzgOqyveuQnCDrtoDrrLjrp4wg66as66CM642U66eBIOuQqCjspoksIFwi7Jik64qYLCBcIuuoueyXiOyKteuLiOuLpC5cIiDsoJzsmbgpXG4gICAgICAgIC8vIG1lbW8g64qUIHByb3BzKGVsKSDqsIAg67OA6rK965CY7Ja07JW8IOumrOugjOuNlOungSDrkJjrr4DroZwuLlxuICAgICAgICA8V29yZCBrZXk9e3V1aWR2NCgpfSBlbD17ZWx9IC8+XG4gICAgICApKX1cbiAgICAgIDxidXR0b24gb25DbGljaz17b25DbGlja0NoYW5nZX0+7LK07J247KeAITwvYnV0dG9uPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiV29yZCIsInY0IiwidXVpZHY0IiwiTWVtb2l6YXRpb25QYXJlbnRQYWdlIiwiZGF0YSIsInNldERhdGEiLCJvbkNsaWNrQ2hhbmdlIiwic3BsaXQiLCJtYXAiLCJlbCIsImluZGV4IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/31-02-memoization-with-map/01-parent.tsx\n");

/***/ }),

/***/ "./pages/31-02-memoization-with-map/02-child.tsx":
/*!*******************************************************!*\
  !*** ./pages/31-02-memoization-with-map/02-child.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Word(props) {\n    console.log(\"Memoization 자식이 렌더링 됩니다!!\", props.el);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        children: props.el\n    }, void 0, false, {\n        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/31-02-memoization-with-map/02-child.tsx\",\n        lineNumber: 6,\n        columnNumber: 10\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(Word));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8zMS0wMi1tZW1vaXphdGlvbi13aXRoLW1hcC8wMi1jaGlsZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTRCO1NBRW5CQyxJQUFJLENBQUNDLEtBQVUsRUFBRSxDQUFDO0lBQ3pCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUEyQjtJQUV2QyxNQUFNLDZFQUFFRSxDQUFJO2tCQUFFSixLQUFLLENBQUNHLEVBQUU7Ozs7OztBQUN4QixDQUFDO0FBRUQsOEVBQWVMLDJDQUFJLENBQUNDLElBQUksQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xhc3MvLi9wYWdlcy8zMS0wMi1tZW1vaXphdGlvbi13aXRoLW1hcC8wMi1jaGlsZC50c3g/NzBkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIFdvcmQocHJvcHM6IGFueSkge1xuICBjb25zb2xlLmxvZyhcIk1lbW9pemF0aW9uIOyekOyLneydtCDroIzrjZTrp4Eg65Cp64uI64ukISFcIiwgcHJvcHMuZWwpO1xuXG4gIHJldHVybiA8c3Bhbj57cHJvcHMuZWx9PC9zcGFuPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtbyhXb3JkKTtcbiJdLCJuYW1lcyI6WyJtZW1vIiwiV29yZCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImVsIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/31-02-memoization-with-map/02-child.tsx\n");

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

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = import("uuid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/31-02-memoization-with-map/01-parent.tsx"));
module.exports = __webpack_exports__;

})();