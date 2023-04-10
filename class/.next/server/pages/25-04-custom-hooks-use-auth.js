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
exports.id = "pages/25-04-custom-hooks-use-auth";
exports.ids = ["pages/25-04-custom-hooks-use-auth"];
exports.modules = {

/***/ "./pages/25-04-custom-hooks-use-auth/index.tsx":
/*!*****************************************************!*\
  !*** ./pages/25-04-custom-hooks-use-auth/index.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CustomHooksUseAuthPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_commons_hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/components/commons/hooks/useAuth */ \"./src/components/commons/hooks/useAuth.tsx\");\n\n\nfunction CustomHooksUseAuthPage() {\n    (0,_src_components_commons_hooks_useAuth__WEBPACK_IMPORTED_MODULE_1__.useAuth)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"프로필 페이지 입니다.\"\n    }, void 0, false, {\n        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/25-04-custom-hooks-use-auth/index.tsx\",\n        lineNumber: 6,\n        columnNumber: 10\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8yNS0wNC1jdXN0b20taG9va3MtdXNlLWF1dGgvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW9FO0FBRXJELFFBQVEsQ0FBQ0Msc0JBQXNCLEdBQUcsQ0FBQztJQUNoREQsOEVBQU87SUFFUCxNQUFNLDZFQUFFRSxDQUFHO2tCQUFDLENBQVk7Ozs7OztBQUMxQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xhc3MvLi9wYWdlcy8yNS0wNC1jdXN0b20taG9va3MtdXNlLWF1dGgvaW5kZXgudHN4PzQxMzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9jb21tb25zL2hvb2tzL3VzZUF1dGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3VzdG9tSG9va3NVc2VBdXRoUGFnZSgpIHtcbiAgdXNlQXV0aCgpO1xuXG4gIHJldHVybiA8ZGl2Pu2UhOuhnO2VhCDtjpjsnbTsp4Ag7J6F64uI64ukLjwvZGl2Pjtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VBdXRoIiwiQ3VzdG9tSG9va3NVc2VBdXRoUGFnZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/25-04-custom-hooks-use-auth/index.tsx\n");

/***/ }),

/***/ "./src/components/commons/hooks/useAuth.tsx":
/*!**************************************************!*\
  !*** ./src/components/commons/hooks/useAuth.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAuth\": () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst useAuth = ()=>()=>{\n        const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n        (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n            if (!localStorage.getItem(\"accessToken\")) {\n                alert(\"로그인 후 이용 가능합니다!!\");\n                void router.push(\"/23-08-login-check-hoc\");\n            }\n        }, []);\n    }\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb25zL2hvb2tzL3VzZUF1dGgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWlDO0FBQ007QUFFaEMsS0FBSyxDQUFDRSxPQUFPLFdBQWUsQ0FBQztRQUNsQyxLQUFLLENBQUNDLE1BQU0sR0FBR0Ysc0RBQVM7UUFFeEJELGdEQUFTLEtBQU8sQ0FBQztZQUNmLEVBQUUsR0FBR0ksWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBYSxlQUFHLENBQUM7Z0JBQ3pDQyxLQUFLLENBQUMsQ0FBa0I7Z0JBQ3hCLElBQUksQ0FBQ0gsTUFBTSxDQUFDSSxJQUFJLENBQUMsQ0FBd0I7WUFDM0MsQ0FBQztRQUNILENBQUMsRUFBRSxDQUFDLENBQUM7SUFDUCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xhc3MvLi9zcmMvY29tcG9uZW50cy9jb21tb25zL2hvb2tzL3VzZUF1dGgudHN4Pzk5OWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2Vzc1Rva2VuXCIpKSB7XG4gICAgICBhbGVydChcIuuhnOq3uOyduCDtm4Qg7J207JqpIOqwgOuKpe2VqeuLiOuLpCEhXCIpO1xuICAgICAgdm9pZCByb3V0ZXIucHVzaChcIi8yMy0wOC1sb2dpbi1jaGVjay1ob2NcIik7XG4gICAgfVxuICB9LCBbXSk7XG59O1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInVzZUF1dGgiLCJyb3V0ZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWxlcnQiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/commons/hooks/useAuth.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = (__webpack_exec__("./pages/25-04-custom-hooks-use-auth/index.tsx"));
module.exports = __webpack_exports__;

})();