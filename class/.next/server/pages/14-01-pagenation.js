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
exports.id = "pages/14-01-pagenation";
exports.ids = ["pages/14-01-pagenation"];
exports.modules = {

/***/ "./pages/14-01-pagenation/index.tsx":
/*!******************************************!*\
  !*** ./pages/14-01-pagenation/index.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MapBoardsPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst FETCH_BOARDS = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  query fetchBoards($page: Int) {\n    fetchBoards(page: $page) {\n      number\n      writer\n      title\n      contents\n    }\n  }\n`;\nconst Row = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n`;\nconst Column = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`\n  font-size: 20px;\n  width: 100%;\n  height: 40px;\n  border-bottom: 1px solid #bdbdbd;\n  line-height: 40px;\n`;\nfunction MapBoardsPage() {\n    var ref;\n    const { data , refetch  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(FETCH_BOARDS);\n    const onClickPage = (event)=>{\n        // async / await => refetch 하고 난 다음 무언가 더 해야할 때\n        // void => refetch 하고 끝일 때\n        void refetch({\n            page: Number(event.currentTarget.id)\n        });\n        console.log(event.currentTarget.id);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            data === null || data === void 0 ? void 0 : (ref = data.fetchBoards) === null || ref === void 0 ? void 0 : ref.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                            children: el.writer\n                        }, void 0, false, {\n                            fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/14-01-pagenation/index.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                            children: el.title\n                        }, void 0, false, {\n                            fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/14-01-pagenation/index.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, el.number, true, {\n                    fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/14-01-pagenation/index.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            ),\n            Array(10).fill(1).map((_el, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    style: {\n                        padding: \"5px\",\n                        margin: \"10px\"\n                    },\n                    id: String(index + 1),\n                    onClick: onClickPage,\n                    children: index + 1\n                }, index + 1, false, {\n                    fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/14-01-pagenation/index.tsx\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, this)\n            )\n        ]\n    }, void 0, true));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8xNC0wMS1wYWdlbmF0aW9uL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE4QztBQUNWO0FBUXBDLEtBQUssQ0FBQ0csWUFBWSxHQUFHSCwrQ0FBRyxDQUFDOzs7Ozs7Ozs7QUFTekI7QUFDQSxLQUFLLENBQUNJLEdBQUcsR0FBR0YsNERBQVUsQ0FBQzs7OztBQUl2QjtBQUNBLEtBQUssQ0FBQ0ksTUFBTSxHQUFHSiw0REFBVSxDQUFDOzs7Ozs7QUFNMUI7QUFFZSxRQUFRLENBQUNLLGFBQWEsR0FBRyxDQUFDO1FBY2xDQyxHQUFpQjtJQWJ0QixLQUFLLENBQUMsQ0FBQyxDQUFDQSxJQUFJLEdBQUVDLE9BQU8sRUFBQyxDQUFDLEdBQUdSLHdEQUFRLENBR2hDRSxZQUFZO0lBRWQsS0FBSyxDQUFDTyxXQUFXLElBQUlDLEtBQXVCLEdBQUssQ0FBQztRQUNoRCxFQUErQztRQUNyQjtRQUMxQixJQUFJLENBQUNGLE9BQU8sQ0FBQyxDQUFDO1lBQUNHLElBQUksRUFBRUMsTUFBTSxDQUFDRixLQUFLLENBQUNHLGFBQWEsQ0FBQ0MsRUFBRTtRQUFFLENBQUM7UUFDckRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixLQUFLLENBQUNHLGFBQWEsQ0FBQ0MsRUFBRTtJQUNwQyxDQUFDO0lBQ0QsTUFBTTs7WUFFRFAsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLElBQUksQ0FBSkEsQ0FBaUIsSUFBakJBLEdBQWlCLEdBQWpCQSxJQUFJLENBQUVVLFdBQVcsY0FBakJWLEdBQWlCLEtBQWpCQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxHQUFpQixDQUFFVyxHQUFHLEVBQUVDLEVBQUUsK0VBQ3hCaEIsR0FBRzs7b0dBQ0RFLE1BQU07c0NBQUVjLEVBQUUsQ0FBQ0MsTUFBTTs7Ozs7O29HQUNqQmYsTUFBTTtzQ0FBRWMsRUFBRSxDQUFDRSxLQUFLOzs7Ozs7O21CQUZURixFQUFFLENBQUNHLE1BQU07Ozs7OztZQU1wQkMsS0FBSyxDQUFDLEVBQUUsRUFDTkMsSUFBSSxDQUFDLENBQUMsRUFDTk4sR0FBRyxFQUFFTyxHQUFHLEVBQUVDLEtBQUssK0VBQ2JDLENBQUk7b0JBRUhDLEtBQUssRUFBRSxDQUFDO3dCQUFDQyxPQUFPLEVBQUUsQ0FBSzt3QkFBRUMsTUFBTSxFQUFFLENBQU07b0JBQUMsQ0FBQztvQkFDekNoQixFQUFFLEVBQUVpQixNQUFNLENBQUNMLEtBQUssR0FBRyxDQUFDO29CQUNwQk0sT0FBTyxFQUFFdkIsV0FBVzs4QkFFbkJpQixLQUFLLEdBQUcsQ0FBQzttQkFMTEEsS0FBSyxHQUFHLENBQUM7Ozs7Ozs7O0FBcUIxQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xhc3MvLi9wYWdlcy8xNC0wMS1wYWdlbmF0aW9uL2luZGV4LnRzeD8zZjAwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHtcbiAgSVF1ZXJ5LFxuICBJUXVlcnlGZXRjaEJvYXJkc0FyZ3MsXG59IGZyb20gXCIuLi8uLi9zcmMvY29tbW9ucy90eXBlcy9nZW5lcmF0ZWQvdHlwZXNcIjtcbmltcG9ydCB7IE1vdXNlRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB0eXBlIEN1c3RvbU1vdXNlRXZlbnQgPSBNb3VzZUV2ZW50PEhUTUxFbGVtZW50PjtcblxuY29uc3QgRkVUQ0hfQk9BUkRTID0gZ3FsYFxuICBxdWVyeSBmZXRjaEJvYXJkcygkcGFnZTogSW50KSB7XG4gICAgZmV0Y2hCb2FyZHMocGFnZTogJHBhZ2UpIHtcbiAgICAgIG51bWJlclxuICAgICAgd3JpdGVyXG4gICAgICB0aXRsZVxuICAgICAgY29udGVudHNcbiAgICB9XG4gIH1cbmA7XG5jb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcbmNvbnN0IENvbHVtbiA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZGJkYmQ7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFwQm9hcmRzUGFnZSgpIHtcbiAgY29uc3QgeyBkYXRhLCByZWZldGNoIH0gPSB1c2VRdWVyeTxcbiAgICBQaWNrPElRdWVyeSwgXCJmZXRjaEJvYXJkc1wiPixcbiAgICBJUXVlcnlGZXRjaEJvYXJkc0FyZ3NcbiAgPihGRVRDSF9CT0FSRFMpO1xuXG4gIGNvbnN0IG9uQ2xpY2tQYWdlID0gKGV2ZW50OiBDdXN0b21Nb3VzZUV2ZW50KSA9PiB7XG4gICAgLy8gYXN5bmMgLyBhd2FpdCA9PiByZWZldGNoIO2VmOqzoCDrgpwg64uk7J2MIOustOyWuOqwgCDrjZQg7ZW07JW87ZWgIOuVjFxuICAgIC8vIHZvaWQgPT4gcmVmZXRjaCDtlZjqs6Ag64Gd7J28IOuVjFxuICAgIHZvaWQgcmVmZXRjaCh7IHBhZ2U6IE51bWJlcihldmVudC5jdXJyZW50VGFyZ2V0LmlkKSB9KTtcbiAgICBjb25zb2xlLmxvZyhldmVudC5jdXJyZW50VGFyZ2V0LmlkKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2RhdGE/LmZldGNoQm9hcmRzPy5tYXAoKGVsKSA9PiAoXG4gICAgICAgIDxSb3cga2V5PXtlbC5udW1iZXJ9PlxuICAgICAgICAgIDxDb2x1bW4+e2VsLndyaXRlcn08L0NvbHVtbj5cbiAgICAgICAgICA8Q29sdW1uPntlbC50aXRsZX08L0NvbHVtbj5cbiAgICAgICAgPC9Sb3c+XG4gICAgICApKX1cblxuICAgICAge0FycmF5KDEwKVxuICAgICAgICAuZmlsbCgxKVxuICAgICAgICAubWFwKChfZWwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGtleT17aW5kZXggKyAxfVxuICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogXCI1cHhcIiwgbWFyZ2luOiBcIjEwcHhcIiB9fVxuICAgICAgICAgICAgaWQ9e1N0cmluZyhpbmRleCArIDEpfVxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja1BhZ2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2luZGV4ICsgMX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICkpfVxuXG4gICAgICB7Lyp7WzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwXS5tYXAoKGVsKSA9PiAoKi99XG4gICAgICB7LyogIDxzcGFuKi99XG4gICAgICB7LyogICAga2V5PXtlbH0qL31cbiAgICAgIHsvKiAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjVweFwiLCBtYXJnaW46IFwiMTBweFwiIH19Ki99XG4gICAgICB7LyogICAgaWQ9e1N0cmluZyhlbCl9Ki99XG4gICAgICB7LyogICAgb25DbGljaz17b25DbGlja1BhZ2V9Ki99XG4gICAgICB7LyogID4qL31cbiAgICAgIHsvKiAgICB7ZWx9Ki99XG4gICAgICB7LyogIDwvc3Bhbj4qL31cbiAgICAgIHsvKikpfSovfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImdxbCIsInVzZVF1ZXJ5Iiwic3R5bGVkIiwiRkVUQ0hfQk9BUkRTIiwiUm93IiwiZGl2IiwiQ29sdW1uIiwiTWFwQm9hcmRzUGFnZSIsImRhdGEiLCJyZWZldGNoIiwib25DbGlja1BhZ2UiLCJldmVudCIsInBhZ2UiLCJOdW1iZXIiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hCb2FyZHMiLCJtYXAiLCJlbCIsIndyaXRlciIsInRpdGxlIiwibnVtYmVyIiwiQXJyYXkiLCJmaWxsIiwiX2VsIiwiaW5kZXgiLCJzcGFuIiwic3R5bGUiLCJwYWRkaW5nIiwibWFyZ2luIiwiU3RyaW5nIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/14-01-pagenation/index.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@emotion/styled");

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
var __webpack_exports__ = (__webpack_exec__("./pages/14-01-pagenation/index.tsx"));
module.exports = __webpack_exports__;

})();