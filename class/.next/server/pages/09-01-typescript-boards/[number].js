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
exports.id = "pages/09-01-typescript-boards/[number]";
exports.ids = ["pages/09-01-typescript-boards/[number]"];
exports.modules = {

/***/ "./pages/09-01-typescript-boards/[number]/index.tsx":
/*!**********************************************************!*\
  !*** ./pages/09-01-typescript-boards/[number]/index.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StaticRoutedPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst FETCH_BOARD = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  query fetchBoard ($number: Int) {\n    fetchBoard (number: $number){\n      writer\n      title\n      contents\n    }\n  }\n`;\nfunction StaticRoutedPage() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(FETCH_BOARD, {\n        variables: {\n            number: Number(router.query.number)\n        }\n    });\n    const onClickMoveToEdit = ()=>{\n        router.push(`/09-01-typescript-boards/${router.query.number}/edit`);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    router.query.number,\n                    \"번 게시글로 이동이 완료되었습니다 🥳\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/09-01-typescript-boards/[number]/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/09-01-typescript-boards/[number]/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 59\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"작성자: \",\n                    data ? data.fetchBoard.writer : \"로딩중입니다...\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/09-01-typescript-boards/[number]/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"제목: \",\n                    data && data.fetchBoard.title\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/09-01-typescript-boards/[number]/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"내용: \",\n                    data === null || data === void 0 ? void 0 : data.fetchBoard.contents\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/09-01-typescript-boards/[number]/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onClickMoveToEdit,\n                children: \"수정하기\"\n            }, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/09-01-typescript-boards/[number]/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8wOS0wMS10eXBlc2NyaXB0LWJvYXJkcy9bbnVtYmVyXS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBOEM7QUFDUDtBQUV2QyxLQUFLLENBQUNHLFdBQVcsR0FBR0gsK0NBQUcsQ0FBQzs7Ozs7Ozs7QUFReEI7QUFFZSxRQUFRLENBQUNJLGdCQUFnQixHQUFHLENBQUM7SUFDMUMsS0FBSyxDQUFDQyxNQUFNLEdBQUdILHNEQUFTO0lBRXhCLEtBQUssQ0FBQyxDQUFDSSxDQUFBQSxJQUFJLEdBQUMsR0FBR0wsd0RBQVEsQ0FBQ0UsV0FBVyxFQUFFLENBQUM7UUFDcENJLFNBQVMsRUFBRSxDQUFDO1lBQ1ZDLE1BQU0sRUFBRUMsTUFBTSxDQUFDSixNQUFNLENBQUNLLEtBQUssQ0FBQ0YsTUFBTTtRQUNwQyxDQUFDO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQ0csaUJBQWlCLE9BQVMsQ0FBQztRQUMvQk4sTUFBTSxDQUFDTyxJQUFJLEVBQUUseUJBQXlCLEVBQUVQLE1BQU0sQ0FBQ0ssS0FBSyxDQUFDRixNQUFNLENBQUMsS0FBSztJQUNuRSxDQUFDO0lBRUQsTUFBTTs7d0ZBRURLLENBQUc7O29CQUFFUixNQUFNLENBQUNLLEtBQUssQ0FBQ0YsTUFBTTtvQkFBQyxDQUFvQjs7Ozs7Ozt3RkFBd0NNLENBQUU7Ozs7O3dGQUN0REQsQ0FBOUI7O29CQUFDLENBQUs7b0JBQU9QLElBQUksR0FBR0EsSUFBSSxDQUFDUyxVQUFVLENBQUNDLE1BQU0sR0FBRyxDQUFXOzs7Ozs7O3dGQUN6Q0gsQ0FBZjs7b0JBQUMsQ0FBSTtvQkFBS1AsSUFBSSxJQUFJQSxJQUFJLENBQUNTLFVBQVUsQ0FBQ0UsS0FBSzs7Ozs7Ozt3RkFDdENKLENBQUQ7O29CQUFDLENBQUk7b0JBQUtQLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQWdCLEdBQWhCQSxJQUFJLENBQUpBLENBQWdCLEdBQWhCQSxJQUFJLENBQUVTLFVBQVUsQ0FBQ0csUUFBUTs7Ozs7Ozt3RkFDbENDLENBQUU7Z0JBQUNDLE9BQU8sRUFBRVQsaUJBQWlCOzBCQUFFLENBQUk7Ozs7Ozs7O0FBRzlDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGFzcy8uL3BhZ2VzLzA5LTAxLXR5cGVzY3JpcHQtYm9hcmRzL1tudW1iZXJdL2luZGV4LnRzeD83ZDFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBGRVRDSF9CT0FSRCA9IGdxbGBcbiAgcXVlcnkgZmV0Y2hCb2FyZCAoJG51bWJlcjogSW50KSB7XG4gICAgZmV0Y2hCb2FyZCAobnVtYmVyOiAkbnVtYmVyKXtcbiAgICAgIHdyaXRlclxuICAgICAgdGl0bGVcbiAgICAgIGNvbnRlbnRzXG4gICAgfVxuICB9XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YXRpY1JvdXRlZFBhZ2UoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3Qge2RhdGF9ID0gdXNlUXVlcnkoRkVUQ0hfQk9BUkQsIHtcbiAgICB2YXJpYWJsZXM6IHtcbiAgICAgIG51bWJlcjogTnVtYmVyKHJvdXRlci5xdWVyeS5udW1iZXIpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IG9uQ2xpY2tNb3ZlVG9FZGl0ID0gKCkgPT4ge1xuICAgIHJvdXRlci5wdXNoKGAvMDktMDEtdHlwZXNjcmlwdC1ib2FyZHMvJHtyb3V0ZXIucXVlcnkubnVtYmVyfS9lZGl0YClcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+e3JvdXRlci5xdWVyeS5udW1iZXJ967KIIOqyjOyLnOq4gOuhnCDsnbTrj5nsnbQg7JmE66OM65CY7JeI7Iq164uI64ukIPCfpbM8L2Rpdj48YnIgLz5cbiAgICAgIDxkaXY+7J6R7ISx7J6QOiB7ZGF0YSA/IGRhdGEuZmV0Y2hCb2FyZC53cml0ZXIgOiBcIuuhnOuUqeykkeyeheuLiOuLpC4uLlwifTwvZGl2PlxuICAgICAgPGRpdj7soJzrqqk6IHtkYXRhICYmIGRhdGEuZmV0Y2hCb2FyZC50aXRsZX08L2Rpdj5cbiAgICAgIDxkaXY+64K07JqpOiB7ZGF0YT8uZmV0Y2hCb2FyZC5jb250ZW50c308L2Rpdj5cbiAgICAgIDxidXR0b24gb25DbGljaz17b25DbGlja01vdmVUb0VkaXR9PuyImOygle2VmOq4sDwvYnV0dG9uPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsiZ3FsIiwidXNlUXVlcnkiLCJ1c2VSb3V0ZXIiLCJGRVRDSF9CT0FSRCIsIlN0YXRpY1JvdXRlZFBhZ2UiLCJyb3V0ZXIiLCJkYXRhIiwidmFyaWFibGVzIiwibnVtYmVyIiwiTnVtYmVyIiwicXVlcnkiLCJvbkNsaWNrTW92ZVRvRWRpdCIsInB1c2giLCJkaXYiLCJiciIsImZldGNoQm9hcmQiLCJ3cml0ZXIiLCJ0aXRsZSIsImNvbnRlbnRzIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/09-01-typescript-boards/[number]/index.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/09-01-typescript-boards/[number]/index.tsx"));
module.exports = __webpack_exports__;

})();