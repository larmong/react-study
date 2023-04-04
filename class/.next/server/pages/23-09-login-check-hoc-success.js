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
exports.id = "pages/23-09-login-check-hoc-success";
exports.ids = ["pages/23-09-login-check-hoc-success"];
exports.modules = {

/***/ "./pages/23-09-login-check-hoc-success/index.tsx":
/*!*******************************************************!*\
  !*** ./pages/23-09-login-check-hoc-success/index.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_commons_hocs_withAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/components/commons/hocs/withAuth */ \"./src/components/commons/hocs/withAuth.tsx\");\n\n\n\n\nconst FETCH_USER_LOGGED_IN = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  query {\n    fetchUserLoggedIn {\n      _id\n      email\n      name\n    }\n  }\n`;\nfunction LoginSuccessPage() {\n    var ref;\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(FETCH_USER_LOGGED_IN);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            data === null || data === void 0 ? void 0 : (ref = data.fetchUserLoggedIn) === null || ref === void 0 ? void 0 : ref.name,\n            \"님 환영합니다! 🥳\"\n        ]\n    }, void 0, true));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_src_components_commons_hocs_withAuth__WEBPACK_IMPORTED_MODULE_3__.withAuth)(LoginSuccessPage));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8yMy0wOS1sb2dpbi1jaGVjay1ob2Mtc3VjY2Vzcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQThDO0FBRVQ7QUFDOEI7QUFFbkUsS0FBSyxDQUFDSSxvQkFBb0IsR0FBR0osK0NBQUcsQ0FBQzs7Ozs7Ozs7QUFRakM7U0FFU0ssZ0JBQWdCLEdBQUcsQ0FBQztRQUtqQkMsR0FBdUI7SUFKakMsS0FBSyxDQUFDQyxNQUFNLEdBQUdMLHNEQUFTO0lBQ3hCLEtBQUssQ0FBQyxDQUFDLENBQUNJLElBQUksRUFBQyxDQUFDLEdBQ1pMLHdEQUFRLENBQW9DRyxvQkFBb0I7SUFFbEUsTUFBTTs7WUFBSUUsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBdUIsR0FBdkJBLElBQUksQ0FBSkEsQ0FBdUIsSUFBdkJBLEdBQXVCLEdBQXZCQSxJQUFJLENBQUVFLGlCQUFpQixjQUF2QkYsR0FBdUIsS0FBdkJBLElBQUksQ0FBSkEsQ0FBdUIsR0FBdkJBLElBQUksQ0FBSkEsQ0FBdUIsR0FBdkJBLEdBQXVCLENBQUVHLElBQUk7WUFBQyxDQUFVOzs7QUFDcEQsQ0FBQztBQUVELGlFQUFlTiwrRUFBUSxDQUFDRSxnQkFBZ0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsYXNzLy4vcGFnZXMvMjMtMDktbG9naW4tY2hlY2staG9jLXN1Y2Nlc3MvaW5kZXgudHN4P2I3OTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgSVF1ZXJ5IH0gZnJvbSBcIi4uLy4uL3NyYy9jb21tb25zL3R5cGVzL2dlbmVyYXRlZC90eXBlc1wiO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHt3aXRoQXV0aH0gZnJvbSBcIi4uLy4uL3NyYy9jb21wb25lbnRzL2NvbW1vbnMvaG9jcy93aXRoQXV0aFwiO1xuXG5jb25zdCBGRVRDSF9VU0VSX0xPR0dFRF9JTiA9IGdxbGBcbiAgcXVlcnkge1xuICAgIGZldGNoVXNlckxvZ2dlZEluIHtcbiAgICAgIF9pZFxuICAgICAgZW1haWxcbiAgICAgIG5hbWVcbiAgICB9XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIExvZ2luU3VjY2Vzc1BhZ2UoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHsgZGF0YSB9ID1cbiAgICB1c2VRdWVyeTxQaWNrPElRdWVyeSwgXCJmZXRjaFVzZXJMb2dnZWRJblwiPj4oRkVUQ0hfVVNFUl9MT0dHRURfSU4pO1xuXG4gIHJldHVybiA8PntkYXRhPy5mZXRjaFVzZXJMb2dnZWRJbj8ubmFtZX3ri5gg7ZmY7JiB7ZWp64uI64ukISDwn6WzPC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChMb2dpblN1Y2Nlc3NQYWdlKVxuIl0sIm5hbWVzIjpbImdxbCIsInVzZVF1ZXJ5IiwidXNlUm91dGVyIiwid2l0aEF1dGgiLCJGRVRDSF9VU0VSX0xPR0dFRF9JTiIsIkxvZ2luU3VjY2Vzc1BhZ2UiLCJkYXRhIiwicm91dGVyIiwiZmV0Y2hVc2VyTG9nZ2VkSW4iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/23-09-login-check-hoc-success/index.tsx\n");

/***/ }),

/***/ "./src/components/commons/hocs/withAuth.tsx":
/*!**************************************************!*\
  !*** ./src/components/commons/hocs/withAuth.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withAuth\": () => (/* binding */ withAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst withAuth = (Component)=>(props)=>{\n        const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n            if (!localStorage.getItem(\"accessToken\")) {\n                alert(\"로그인 후 이용 가능합니다!!\");\n                void router.push(\"/23-08-login-check-hoc\");\n            }\n        });\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...props\n        }, void 0, false, {\n            fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/src/components/commons/hocs/withAuth.tsx\",\n            lineNumber: 13,\n            columnNumber: 12\n        }, undefined));\n    }\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb25zL2hvY3Mvd2l0aEF1dGgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ007QUFFaEMsS0FBSyxDQUFDRSxRQUFRLElBQUlDLFNBQVMsSUFBTUMsS0FBSyxHQUFLLENBQUM7UUFDL0MsS0FBSyxDQUFDQyxNQUFNLEdBQUdKLHNEQUFTO1FBQ3hCRCxnREFBUyxLQUFPLENBQUM7WUFDYixFQUFFLEdBQUVNLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLENBQWEsZUFBRyxDQUFDO2dCQUN0Q0MsS0FBSyxDQUFDLENBQWtCO2dCQUN4QixJQUFJLENBQUNILE1BQU0sQ0FBQ0ksSUFBSSxDQUFDLENBQXdCO1lBQzdDLENBQUM7UUFDTCxDQUFDO1FBRUQsTUFBTSw2RUFBRU4sU0FBUztlQUFLQyxLQUFLOzs7Ozs7SUFDL0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsYXNzLy4vc3JjL2NvbXBvbmVudHMvY29tbW9ucy9ob2NzL3dpdGhBdXRoLnRzeD8xODJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmV4cG9ydCBjb25zdCB3aXRoQXV0aCA9IChDb21wb25lbnQpID0+IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYWNjZXNzVG9rZW5cIikpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwi66Gc6re47J24IO2bhCDsnbTsmqkg6rCA64ql7ZWp64uI64ukISFcIilcbiAgICAgICAgICAgIHZvaWQgcm91dGVyLnB1c2goXCIvMjMtMDgtbG9naW4tY2hlY2staG9jXCIpXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgcmV0dXJuIDxDb21wb25lbnQgey4uLnByb3BzfSAvPlxufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIndpdGhBdXRoIiwiQ29tcG9uZW50IiwicHJvcHMiLCJyb3V0ZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWxlcnQiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/commons/hocs/withAuth.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

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
var __webpack_exports__ = (__webpack_exec__("./pages/23-09-login-check-hoc-success/index.tsx"));
module.exports = __webpack_exports__;

})();