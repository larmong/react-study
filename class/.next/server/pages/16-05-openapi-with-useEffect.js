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
exports.id = "pages/16-05-openapi-with-useEffect";
exports.ids = ["pages/16-05-openapi-with-useEffect"];
exports.modules = {

/***/ "./pages/16-05-openapi-with-useEffect/index.tsx":
/*!******************************************************!*\
  !*** ./pages/16-05-openapi-with-useEffect/index.tsx ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ OpenapiWithUseEffectPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction OpenapiWithUseEffectPage() {\n    const { 0: dogUrl , 1: setDogUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchDog = async ()=>{\n            const result = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"https://dog.ceo/api/breeds/image/random\");\n            setDogUrl(result.data.message);\n        };\n        void fetchDog();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        style: {\n            width: \"auto\",\n            height: \"auto\"\n        },\n        src: dogUrl,\n        alt: \"dog\"\n    }, void 0, false, {\n        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/16-05-openapi-with-useEffect/index.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this));\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8xNi0wNS1vcGVuYXBpLXdpdGgtdXNlRWZmZWN0L2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ2tCO0FBRTVCLFFBQVEsQ0FBQ0csd0JBQXdCLEdBQUcsQ0FBQztJQUNsRCxLQUFLLE1BQUVDLE1BQU0sTUFBRUMsU0FBUyxNQUFJSCwrQ0FBUSxDQUFDLENBQUU7SUFFdkNELGdEQUFTLEtBQU8sQ0FBQztRQUNmLEtBQUssQ0FBQ0ssUUFBUSxhQUFlLENBQUM7WUFDNUIsS0FBSyxDQUFDQyxNQUFNLEdBQUcsS0FBSyxDQUFDUCxpREFBUyxDQUFDLENBQXlDO1lBQ3hFSyxTQUFTLENBQUNFLE1BQU0sQ0FBQ0UsSUFBSSxDQUFDQyxPQUFPO1FBQy9CLENBQUM7UUFDRCxJQUFJLENBQUNKLFFBQVE7SUFDZixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTSw2RUFDSEssQ0FBRztRQUFDQyxLQUFLLEVBQUUsQ0FBQztZQUFDQyxLQUFLLEVBQUUsQ0FBTTtZQUFFQyxNQUFNLEVBQUUsQ0FBTTtRQUFDLENBQUM7UUFBRUMsR0FBRyxFQUFFWCxNQUFNO1FBQUVZLEdBQUcsRUFBQyxDQUFLOzs7Ozs7QUFFekUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsYXNzLy4vcGFnZXMvMTYtMDUtb3BlbmFwaS13aXRoLXVzZUVmZmVjdC9pbmRleC50c3g/ZGUzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9wZW5hcGlXaXRoVXNlRWZmZWN0UGFnZSgpIHtcbiAgY29uc3QgW2RvZ1VybCwgc2V0RG9nVXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEb2cgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwczovL2RvZy5jZW8vYXBpL2JyZWVkcy9pbWFnZS9yYW5kb21cIik7XG4gICAgICBzZXREb2dVcmwocmVzdWx0LmRhdGEubWVzc2FnZSk7XG4gICAgfTtcbiAgICB2b2lkIGZldGNoRG9nKCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6IFwiYXV0b1wiLCBoZWlnaHQ6IFwiYXV0b1wiIH19IHNyYz17ZG9nVXJsfSBhbHQ9XCJkb2dcIiAvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJPcGVuYXBpV2l0aFVzZUVmZmVjdFBhZ2UiLCJkb2dVcmwiLCJzZXREb2dVcmwiLCJmZXRjaERvZyIsInJlc3VsdCIsImdldCIsImRhdGEiLCJtZXNzYWdlIiwiaW1nIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/16-05-openapi-with-useEffect/index.tsx\n");

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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/16-05-openapi-with-useEffect/index.tsx"));
module.exports = __webpack_exports__;

})();