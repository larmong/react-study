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
exports.id = "pages/23-04-login-check-success";
exports.ids = ["pages/23-04-login-check-success"];
exports.modules = {

/***/ "./pages/23-04-login-check-success/index.tsx":
/*!***************************************************!*\
  !*** ./pages/23-04-login-check-success/index.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LoginSuccessPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst FETCH_USER_LOGGED_IN = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  query {\n    fetchUserLoggedIn {\n      _id\n      email\n      name\n    }\n  }\n`;\nfunction LoginSuccessPage() {\n    var ref;\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(FETCH_USER_LOGGED_IN);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (!localStorage.getItem(\"accessToken\")) {\n            alert(\"로그인 후 이용 가능합니다!!\");\n            void router.push(\"/23-03-login-check\");\n        }\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            data === null || data === void 0 ? void 0 : (ref = data.fetchUserLoggedIn) === null || ref === void 0 ? void 0 : ref.name,\n            \"님 환영합니다! 🥳\"\n        ]\n    }, void 0, true));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8yMy0wNC1sb2dpbi1jaGVjay1zdWNjZXNzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQThDO0FBRVQ7QUFDTjtBQUUvQixLQUFLLENBQUNJLG9CQUFvQixHQUFHSiwrQ0FBRyxDQUFDOzs7Ozs7OztBQVFqQztBQUVlLFFBQVEsQ0FBQ0ssZ0JBQWdCLEdBQUcsQ0FBQztRQVloQ0MsR0FBdUI7SUFYakMsS0FBSyxDQUFDQyxNQUFNLEdBQUdMLHNEQUFTO0lBQ3hCLEtBQUssQ0FBQyxDQUFDLENBQUNJLElBQUksRUFBQyxDQUFDLEdBQ1pMLHdEQUFRLENBQW9DRyxvQkFBb0I7SUFFbEVELGdEQUFTLEtBQU8sQ0FBQztRQUNmLEVBQUUsR0FBRUssWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBYSxlQUFHLENBQUM7WUFDeENDLEtBQUssQ0FBQyxDQUF3QztZQUM5QyxJQUFJLENBQUNILE1BQU0sQ0FBQ0ksSUFBSSxDQUFDLENBQW9CO1FBQ3ZDLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTTs7WUFBSUwsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBdUIsR0FBdkJBLElBQUksQ0FBSkEsQ0FBdUIsSUFBdkJBLEdBQXVCLEdBQXZCQSxJQUFJLENBQUVNLGlCQUFpQixjQUF2Qk4sR0FBdUIsS0FBdkJBLElBQUksQ0FBSkEsQ0FBdUIsR0FBdkJBLElBQUksQ0FBSkEsQ0FBdUIsR0FBdkJBLEdBQXVCLENBQUVPLElBQUk7WUFBQyxDQUFVOzs7QUFDcEQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsYXNzLy4vcGFnZXMvMjMtMDQtbG9naW4tY2hlY2stc3VjY2Vzcy9pbmRleC50c3g/ZWFiMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBJUXVlcnkgfSBmcm9tIFwiLi4vLi4vc3JjL2NvbW1vbnMvdHlwZXMvZ2VuZXJhdGVkL3R5cGVzXCI7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IEZFVENIX1VTRVJfTE9HR0VEX0lOID0gZ3FsYFxuICBxdWVyeSB7XG4gICAgZmV0Y2hVc2VyTG9nZ2VkSW4ge1xuICAgICAgX2lkXG4gICAgICBlbWFpbFxuICAgICAgbmFtZVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5TdWNjZXNzUGFnZSgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgeyBkYXRhIH0gPVxuICAgIHVzZVF1ZXJ5PFBpY2s8SVF1ZXJ5LCBcImZldGNoVXNlckxvZ2dlZEluXCI+PihGRVRDSF9VU0VSX0xPR0dFRF9JTik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZighbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NUb2tlblwiKSkge1xuICAgICAgYWxlcnQoXCLroZzqt7jsnbgg7ZuEIOydtOyaqSDqsIDriqXtlanri4jri6QhIVwiKVxuICAgICAgdm9pZCByb3V0ZXIucHVzaChcIi8yMy0wMy1sb2dpbi1jaGVja1wiKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gPD57ZGF0YT8uZmV0Y2hVc2VyTG9nZ2VkSW4/Lm5hbWV964uYIO2ZmOyYge2VqeuLiOuLpCEg8J+lszwvPjtcbn1cbiJdLCJuYW1lcyI6WyJncWwiLCJ1c2VRdWVyeSIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIkZFVENIX1VTRVJfTE9HR0VEX0lOIiwiTG9naW5TdWNjZXNzUGFnZSIsImRhdGEiLCJyb3V0ZXIiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWxlcnQiLCJwdXNoIiwiZmV0Y2hVc2VyTG9nZ2VkSW4iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/23-04-login-check-success/index.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/23-04-login-check-success/index.tsx"));
module.exports = __webpack_exports__;

})();