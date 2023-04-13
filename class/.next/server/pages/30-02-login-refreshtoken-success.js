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
exports.id = "pages/30-02-login-refreshtoken-success";
exports.ids = ["pages/30-02-login-refreshtoken-success"];
exports.modules = {

/***/ "./pages/30-02-login-refreshtoken-success/index.tsx":
/*!**********************************************************!*\
  !*** ./pages/30-02-login-refreshtoken-success/index.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LoginSuccessPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst FETCH_USER_LOGGED_IN = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  query {\n    fetchUserLoggedIn {\n      email\n      name\n    }\n  }\n`;\nfunction LoginSuccessPage() {\n    // const { data } = useQuery()               // 1. 페이지 접속하면 자동으로 data 에 받아지고, 리렌더링 됨\n    // const [myQuery, {data}] = useLazyQuery()  // 2. 버튼 클릭시 직접 실행하면 data 에 받아지고, 리렌더링 됨\n    // const client = useApolloClient()          // 3. axios 동일\n    const client = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useApolloClient)();\n    const onClickButton = async ()=>{\n        const result = await client.query({\n            query: FETCH_USER_LOGGED_IN\n        });\n        console.log(result);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: onClickButton,\n        children: \"클릭하세요!!\"\n    }, void 0, false, {\n        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/30-02-login-refreshtoken-success/index.tsx\",\n        lineNumber: 26,\n        columnNumber: 10\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8zMC0wMi1sb2dpbi1yZWZyZXNodG9rZW4tc3VjY2Vzcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXFEO0FBRXJELEtBQUssQ0FBQ0Usb0JBQW9CLEdBQUdGLCtDQUFHLENBQUM7Ozs7Ozs7QUFPakM7QUFFZSxRQUFRLENBQUNHLGdCQUFnQixHQUFHLENBQUM7SUFDMUMsRUFBb0Y7SUFDMUMsRUFBMkM7SUFDM0MsRUFBaUI7SUFFdkQsS0FBQyxDQUFDQyxNQUFNLEdBQUdILCtEQUFlO0lBRTlCLEtBQUssQ0FBQ0ksYUFBYSxhQUFlLENBQUM7UUFDakMsS0FBSyxDQUFDQyxNQUFNLEdBQUcsS0FBSyxDQUFDRixNQUFNLENBQUNHLEtBQUssQ0FBQyxDQUFDO1lBQ2pDQSxLQUFLLEVBQUVMLG9CQUFvQjtRQUM3QixDQUFDO1FBQ0RNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxNQUFNO0lBQ3BCLENBQUM7SUFFRCxNQUFNLDZFQUFFSSxDQUFNO1FBQUNDLE9BQU8sRUFBRU4sYUFBYTtrQkFBRSxDQUFPOzs7Ozs7QUFDaEQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsYXNzLy4vcGFnZXMvMzAtMDItbG9naW4tcmVmcmVzaHRva2VuLXN1Y2Nlc3MvaW5kZXgudHN4PzdhYjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCB1c2VBcG9sbG9DbGllbnQgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuY29uc3QgRkVUQ0hfVVNFUl9MT0dHRURfSU4gPSBncWxgXG4gIHF1ZXJ5IHtcbiAgICBmZXRjaFVzZXJMb2dnZWRJbiB7XG4gICAgICBlbWFpbFxuICAgICAgbmFtZVxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5TdWNjZXNzUGFnZSgpIHtcbiAgLy8gY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeSgpICAgICAgICAgICAgICAgLy8gMS4g7Y6Y7J207KeAIOygkeyGje2VmOuptCDsnpDrj5nsnLzroZwgZGF0YSDsl5Ag67Cb7JWE7KeA6rOgLCDrpqzroIzrjZTrp4Eg65CoXG4gIC8vIGNvbnN0IFtteVF1ZXJ5LCB7ZGF0YX1dID0gdXNlTGF6eVF1ZXJ5KCkgIC8vIDIuIOuyhO2KvCDtgbTrpq3si5wg7KeB7KCRIOyLpO2Wie2VmOuptCBkYXRhIOyXkCDrsJvslYTsp4Dqs6AsIOumrOugjOuNlOungSDrkKhcbiAgLy8gY29uc3QgY2xpZW50ID0gdXNlQXBvbGxvQ2xpZW50KCkgICAgICAgICAgLy8gMy4gYXhpb3Mg64+Z7J28XG5cbiAgY29uc3QgY2xpZW50ID0gdXNlQXBvbGxvQ2xpZW50KCk7XG5cbiAgY29uc3Qgb25DbGlja0J1dHRvbiA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgICAgcXVlcnk6IEZFVENIX1VTRVJfTE9HR0VEX0lOLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gIH07XG5cbiAgcmV0dXJuIDxidXR0b24gb25DbGljaz17b25DbGlja0J1dHRvbn0+7YG066at7ZWY7IS47JqUISE8L2J1dHRvbj47XG59XG4iXSwibmFtZXMiOlsiZ3FsIiwidXNlQXBvbGxvQ2xpZW50IiwiRkVUQ0hfVVNFUl9MT0dHRURfSU4iLCJMb2dpblN1Y2Nlc3NQYWdlIiwiY2xpZW50Iiwib25DbGlja0J1dHRvbiIsInJlc3VsdCIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/30-02-login-refreshtoken-success/index.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/30-02-login-refreshtoken-success/index.tsx"));
module.exports = __webpack_exports__;

})();