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
exports.id = "pages/22-02-login-success";
exports.ids = ["pages/22-02-login-success"];
exports.modules = {

/***/ "./pages/22-02-login-success/index.tsx":
/*!*********************************************!*\
  !*** ./pages/22-02-login-success/index.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LoginSuccessPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst FETCH_USER_LOGGED_IN = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  query {\n    fetchUserLoggedIn {\n      _id\n      email\n      name\n    }\n  }\n`;\nfunction LoginSuccessPage() {\n    var ref;\n    const { data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(FETCH_USER_LOGGED_IN);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            data === null || data === void 0 ? void 0 : (ref = data.fetchUserLoggedIn) === null || ref === void 0 ? void 0 : ref.name,\n            \"님 환영합니다! 🥳\"\n        ]\n    }, void 0, true));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8yMi0wMi1sb2dpbi1zdWNjZXNzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEM7QUFHOUMsS0FBSyxDQUFDRSxvQkFBb0IsR0FBR0YsK0NBQUcsQ0FBQzs7Ozs7Ozs7QUFRakM7QUFFZSxRQUFRLENBQUNHLGdCQUFnQixHQUFHLENBQUM7UUFJaENDLEdBQXVCO0lBSGpDLEtBQUssQ0FBQyxDQUFDLENBQUNBLElBQUksRUFBQyxDQUFDLEdBQ1pILHdEQUFRLENBQW9DQyxvQkFBb0I7SUFFbEUsTUFBTTs7WUFBSUUsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBdUIsR0FBdkJBLElBQUksQ0FBSkEsQ0FBdUIsSUFBdkJBLEdBQXVCLEdBQXZCQSxJQUFJLENBQUVDLGlCQUFpQixjQUF2QkQsR0FBdUIsS0FBdkJBLElBQUksQ0FBSkEsQ0FBdUIsR0FBdkJBLElBQUksQ0FBSkEsQ0FBdUIsR0FBdkJBLEdBQXVCLENBQUVFLElBQUk7WUFBQyxDQUFVOzs7QUFDcEQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsYXNzLy4vcGFnZXMvMjItMDItbG9naW4tc3VjY2Vzcy9pbmRleC50c3g/MjMxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBJUXVlcnkgfSBmcm9tIFwiLi4vLi4vc3JjL2NvbW1vbnMvdHlwZXMvZ2VuZXJhdGVkL3R5cGVzXCI7XG5cbmNvbnN0IEZFVENIX1VTRVJfTE9HR0VEX0lOID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgZmV0Y2hVc2VyTG9nZ2VkSW4ge1xuICAgICAgX2lkXG4gICAgICBlbWFpbFxuICAgICAgbmFtZVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5TdWNjZXNzUGFnZSgpIHtcbiAgY29uc3QgeyBkYXRhIH0gPVxuICAgIHVzZVF1ZXJ5PFBpY2s8SVF1ZXJ5LCBcImZldGNoVXNlckxvZ2dlZEluXCI+PihGRVRDSF9VU0VSX0xPR0dFRF9JTik7XG5cbiAgcmV0dXJuIDw+e2RhdGE/LmZldGNoVXNlckxvZ2dlZEluPy5uYW1lfeuLmCDtmZjsmIHtlanri4jri6QhIPCfpbM8Lz47XG59XG4iXSwibmFtZXMiOlsiZ3FsIiwidXNlUXVlcnkiLCJGRVRDSF9VU0VSX0xPR0dFRF9JTiIsIkxvZ2luU3VjY2Vzc1BhZ2UiLCJkYXRhIiwiZmV0Y2hVc2VyTG9nZ2VkSW4iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/22-02-login-success/index.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

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
var __webpack_exports__ = (__webpack_exec__("./pages/22-02-login-success/index.tsx"));
module.exports = __webpack_exports__;

})();