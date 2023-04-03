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
exports.id = "pages/23-02-login-localstorage-success";
exports.ids = ["pages/23-02-login-localstorage-success"];
exports.modules = {

/***/ "./pages/23-02-login-localstorage-success/index.tsx":
/*!**********************************************************!*\
  !*** ./pages/23-02-login-localstorage-success/index.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LoginSuccessPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst FETCH_USER_LOGGED_IN = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  query {\n    fetchUserLoggedIn {\n      _id\n      email\n      name\n    }\n  }\n`;\nfunction LoginSuccessPage() {\n    var ref;\n    const { data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(FETCH_USER_LOGGED_IN);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            data === null || data === void 0 ? void 0 : (ref = data.fetchUserLoggedIn) === null || ref === void 0 ? void 0 : ref.name,\n            \"님 환영합니다! 🥳\"\n        ]\n    }, void 0, true));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8yMy0wMi1sb2dpbi1sb2NhbHN0b3JhZ2Utc3VjY2Vzcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQThDO0FBRzlDLEtBQUssQ0FBQ0Usb0JBQW9CLEdBQUdGLCtDQUFHLENBQUM7Ozs7Ozs7O0FBUWpDO0FBRWUsUUFBUSxDQUFDRyxnQkFBZ0IsR0FBRyxDQUFDO1FBSWhDQyxHQUF1QjtJQUhqQyxLQUFLLENBQUMsQ0FBQyxDQUFDQSxJQUFJLEVBQUMsQ0FBQyxHQUNaSCx3REFBUSxDQUFvQ0Msb0JBQW9CO0lBRWxFLE1BQU07O1lBQUlFLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQXVCLEdBQXZCQSxJQUFJLENBQUpBLENBQXVCLElBQXZCQSxHQUF1QixHQUF2QkEsSUFBSSxDQUFFQyxpQkFBaUIsY0FBdkJELEdBQXVCLEtBQXZCQSxJQUFJLENBQUpBLENBQXVCLEdBQXZCQSxJQUFJLENBQUpBLENBQXVCLEdBQXZCQSxHQUF1QixDQUFFRSxJQUFJO1lBQUMsQ0FBVTs7O0FBQ3BELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGFzcy8uL3BhZ2VzLzIzLTAyLWxvZ2luLWxvY2Fsc3RvcmFnZS1zdWNjZXNzL2luZGV4LnRzeD8xNjQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IElRdWVyeSB9IGZyb20gXCIuLi8uLi9zcmMvY29tbW9ucy90eXBlcy9nZW5lcmF0ZWQvdHlwZXNcIjtcblxuY29uc3QgRkVUQ0hfVVNFUl9MT0dHRURfSU4gPSBncWxgXG4gIHF1ZXJ5IHtcbiAgICBmZXRjaFVzZXJMb2dnZWRJbiB7XG4gICAgICBfaWRcbiAgICAgIGVtYWlsXG4gICAgICBuYW1lXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpblN1Y2Nlc3NQYWdlKCkge1xuICBjb25zdCB7IGRhdGEgfSA9XG4gICAgdXNlUXVlcnk8UGljazxJUXVlcnksIFwiZmV0Y2hVc2VyTG9nZ2VkSW5cIj4+KEZFVENIX1VTRVJfTE9HR0VEX0lOKTtcblxuICByZXR1cm4gPD57ZGF0YT8uZmV0Y2hVc2VyTG9nZ2VkSW4/Lm5hbWV964uYIO2ZmOyYge2VqeuLiOuLpCEg8J+lszwvPjtcbn1cbiJdLCJuYW1lcyI6WyJncWwiLCJ1c2VRdWVyeSIsIkZFVENIX1VTRVJfTE9HR0VEX0lOIiwiTG9naW5TdWNjZXNzUGFnZSIsImRhdGEiLCJmZXRjaFVzZXJMb2dnZWRJbiIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/23-02-login-localstorage-success/index.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/23-02-login-localstorage-success/index.tsx"));
module.exports = __webpack_exports__;

})();