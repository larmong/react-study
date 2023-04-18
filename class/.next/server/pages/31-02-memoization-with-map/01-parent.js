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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MemoizationParentPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _02_child__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./02-child */ \"./pages/31-02-memoization-with-map/02-child.tsx\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"uuid\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_3__]);\nuuid__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction MemoizationParentPage() {\n    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"철수는 오늘 점심을 맛있게 먹었습니다.\");\n    const onClickChange = ()=>{\n        setData(\"영희는 오늘 저녁을 맛없게 먹었습니다.\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            data.split(\" \").map((el, index)=>// 1. memo ===> key 또는 el이 변경된 부문만 리렌더링 됨(즉, \"오늘, \"먹었습니다.\" 제외)\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_02_child__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    el: el\n                }, index, false, {\n                    fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/31-02-memoization-with-map/01-parent.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this)\n            ),\n            data.split(\" \").map((el)=>// 2. key 자체가 변경되어 props 로 넘어가므로 모두 리렌더링 됨!!\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_02_child__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    el: el\n                }, (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(), false, {\n                    fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/31-02-memoization-with-map/01-parent.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this)\n            ),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onClickChange,\n                children: \"체인지!\"\n            }, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/31-02-memoization-with-map/01-parent.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8zMS0wMi1tZW1vaXphdGlvbi13aXRoLW1hcC8wMS1wYXJlbnQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ0g7QUFDTTtBQUVwQixRQUFRLENBQUNJLHFCQUFxQixHQUFHLENBQUM7SUFDL0MsS0FBSyxNQUFFQyxJQUFJLE1BQUVDLE9BQU8sTUFBSU4sK0NBQVEsQ0FBQyxDQUF1QjtJQUV4QixLQUEzQixDQUFDTyxhQUFhLE9BQVMsQ0FBQztRQUMzQkQsT0FBTyxDQUFDLENBQXVCO0lBQ0QsQ0FBL0I7SUFFRCxNQUFNOztZQUVERCxJQUFJLENBQUNHLEtBQUssQ0FBQyxDQUFHLElBQUVDLEdBQUcsRUFBRUMsRUFBRSxFQUFFQyxLQUFLLEdBQzdCLEVBQThEOzRGQUNiVixpREFBNUM7b0JBQWFTLEVBQUUsRUFBRUEsRUFBRTttQkFBYkMsS0FBSzs7Ozs7O1lBRWpCTixJQUFJLENBQUNHLEtBQUssQ0FBQyxDQUFHLElBQUVDLEdBQUcsRUFBRUMsRUFBRSxHQUN0QixFQUE0Qzs0RkFDSFQsaURBQXBDO29CQUFnQlMsRUFBRSxFQUFFQSxFQUFFO21CQUFoQlAsd0NBQU07Ozs7Ozt3RkFFbEJTLENBQU07Z0JBQUNDLE9BQU8sRUFBRU4sYUFBYTswQkFBRSxDQUFJOzs7Ozs7OztBQUcxQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xhc3MvLi9wYWdlcy8zMS0wMi1tZW1vaXphdGlvbi13aXRoLW1hcC8wMS1wYXJlbnQudHN4P2FmYjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBXb3JkIGZyb20gXCIuLzAyLWNoaWxkXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW1vaXphdGlvblBhcmVudFBhZ2UoKSB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFwi7LKg7IiY64qUIOyYpOuKmCDsoJDsi6zsnYQg66eb7J6I6rKMIOuoueyXiOyKteuLiOuLpC5cIik7XG5cbiAgY29uc3Qgb25DbGlja0NoYW5nZSA9ICgpID0+IHtcbiAgICBzZXREYXRhKFwi7JiB7Z2s64qUIOyYpOuKmCDsoIDrhYHsnYQg66eb7JeG6rKMIOuoueyXiOyKteuLiOuLpC5cIik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2RhdGEuc3BsaXQoXCIgXCIpLm1hcCgoZWwsIGluZGV4KSA9PiAoXG4gICAgICAgIC8vIDEuIG1lbW8gPT09PiBrZXkg65iQ64qUIGVs7J20IOuzgOqyveuQnCDrtoDrrLjrp4wg66as66CM642U66eBIOuQqCjspoksIFwi7Jik64qYLCBcIuuoueyXiOyKteuLiOuLpC5cIiDsoJzsmbgpXG4gICAgICAgIDxXb3JkIGtleT17aW5kZXh9IGVsPXtlbH0gLz5cbiAgICAgICkpfVxuICAgICAge2RhdGEuc3BsaXQoXCIgXCIpLm1hcCgoZWwpID0+IChcbiAgICAgICAgLy8gMi4ga2V5IOyekOyytOqwgCDrs4Dqsr3rkJjslrQgcHJvcHMg66GcIOuEmOyWtOqwgOuvgOuhnCDrqqjrkZAg66as66CM642U66eBIOuQqCEhXG4gICAgICAgIDxXb3JkIGtleT17dXVpZHY0KCl9IGVsPXtlbH0gLz5cbiAgICAgICkpfVxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrQ2hhbmdlfT7ssrTsnbjsp4AhPC9idXR0b24+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJXb3JkIiwidjQiLCJ1dWlkdjQiLCJNZW1vaXphdGlvblBhcmVudFBhZ2UiLCJkYXRhIiwic2V0RGF0YSIsIm9uQ2xpY2tDaGFuZ2UiLCJzcGxpdCIsIm1hcCIsImVsIiwiaW5kZXgiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/31-02-memoization-with-map/01-parent.tsx\n");

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