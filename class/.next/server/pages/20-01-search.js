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
exports.id = "pages/20-01-search";
exports.ids = ["pages/20-01-search"];
exports.modules = {

/***/ "./pages/20-01-search/index.tsx":
/*!**************************************!*\
  !*** ./pages/20-01-search/index.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SearchPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst FETCH_BOARDS = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  query fetchBoards($page: Int) {\n    fetchBoards(page: $page) {\n      number\n      writer\n      title\n      contents\n    }\n  }\n`;\nconst Row = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n`;\nconst Column = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`\n  font-size: 20px;\n  width: 100%;\n  height: 40px;\n  border-bottom: 1px solid #bdbdbd;\n  line-height: 40px;\n`;\nfunction SearchPage() {\n    var ref;\n    const { data , refetch  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(FETCH_BOARDS);\n    const onClickPage = (event)=>{\n        void refetch({\n            page: Number(event.currentTarget.id)\n        });\n        console.log(event.currentTarget.id);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            data === null || data === void 0 ? void 0 : (ref = data.fetchBoards) === null || ref === void 0 ? void 0 : ref.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                            children: el.writer\n                        }, void 0, false, {\n                            fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/20-01-search/index.tsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                            children: el.title\n                        }, void 0, false, {\n                            fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/20-01-search/index.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, el.number, true, {\n                    fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/20-01-search/index.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            ),\n            Array(10).fill(1).map((_el, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    style: {\n                        padding: \"5px\",\n                        margin: \"10px\"\n                    },\n                    id: String(index + 1),\n                    onClick: onClickPage,\n                    children: index + 1\n                }, index + 1, false, {\n                    fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/20-01-search/index.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, this)\n            )\n        ]\n    }, void 0, true));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8yMC0wMS1zZWFyY2gvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQThDO0FBQ1Y7QUFRcEMsS0FBSyxDQUFDRyxZQUFZLEdBQUdILCtDQUFHLENBQUM7Ozs7Ozs7OztBQVN6QjtBQUNBLEtBQUssQ0FBQ0ksR0FBRyxHQUFHRiw0REFBVSxDQUFDOzs7O0FBSXZCO0FBQ0EsS0FBSyxDQUFDSSxNQUFNLEdBQUdKLDREQUFVLENBQUM7Ozs7OztBQU0xQjtBQUVlLFFBQVEsQ0FBQ0ssVUFBVSxHQUFHLENBQUM7UUFZL0JDLEdBQWlCO0lBWHRCLEtBQUssQ0FBQyxDQUFDLENBQUNBLElBQUksR0FBRUMsT0FBTyxFQUFDLENBQUMsR0FBR1Isd0RBQVEsQ0FHaENFLFlBQVk7SUFFZCxLQUFLLENBQUNPLFdBQVcsSUFBSUMsS0FBdUIsR0FBSyxDQUFDO1FBQ2hELElBQUksQ0FBQ0YsT0FBTyxDQUFDLENBQUM7WUFBQ0csSUFBSSxFQUFFQyxNQUFNLENBQUNGLEtBQUssQ0FBQ0csYUFBYSxDQUFDQyxFQUFFO1FBQUUsQ0FBQztRQUNyREMsT0FBTyxDQUFDQyxHQUFHLENBQUNOLEtBQUssQ0FBQ0csYUFBYSxDQUFDQyxFQUFFO0lBQ3BDLENBQUM7SUFDRCxNQUFNOztZQUVEUCxJQUFJLGFBQUpBLElBQUksS0FBSkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsSUFBSSxDQUFKQSxDQUFpQixJQUFqQkEsR0FBaUIsR0FBakJBLElBQUksQ0FBRVUsV0FBVyxjQUFqQlYsR0FBaUIsS0FBakJBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLEdBQWlCLENBQUVXLEdBQUcsRUFBRUMsRUFBRSwrRUFDeEJoQixHQUFHOztvR0FDREUsTUFBTTtzQ0FBRWMsRUFBRSxDQUFDQyxNQUFNOzs7Ozs7b0dBQ2pCZixNQUFNO3NDQUFFYyxFQUFFLENBQUNFLEtBQUs7Ozs7Ozs7bUJBRlRGLEVBQUUsQ0FBQ0csTUFBTTs7Ozs7O1lBTXBCQyxLQUFLLENBQUMsRUFBRSxFQUNOQyxJQUFJLENBQUMsQ0FBQyxFQUNOTixHQUFHLEVBQUVPLEdBQUcsRUFBRUMsS0FBSywrRUFDYkMsQ0FBSTtvQkFFSEMsS0FBSyxFQUFFLENBQUM7d0JBQUNDLE9BQU8sRUFBRSxDQUFLO3dCQUFFQyxNQUFNLEVBQUUsQ0FBTTtvQkFBQyxDQUFDO29CQUN6Q2hCLEVBQUUsRUFBRWlCLE1BQU0sQ0FBQ0wsS0FBSyxHQUFHLENBQUM7b0JBQ3BCTSxPQUFPLEVBQUV2QixXQUFXOzhCQUVuQmlCLEtBQUssR0FBRyxDQUFDO21CQUxMQSxLQUFLLEdBQUcsQ0FBQzs7Ozs7Ozs7QUFVMUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsYXNzLy4vcGFnZXMvMjAtMDEtc2VhcmNoL2luZGV4LnRzeD9iMWFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHtcbiAgSVF1ZXJ5LFxuICBJUXVlcnlGZXRjaEJvYXJkc0FyZ3MsXG59IGZyb20gXCIuLi8uLi9zcmMvY29tbW9ucy90eXBlcy9nZW5lcmF0ZWQvdHlwZXNcIjtcbmltcG9ydCB7IE1vdXNlRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB0eXBlIEN1c3RvbU1vdXNlRXZlbnQgPSBNb3VzZUV2ZW50PEhUTUxFbGVtZW50PjtcblxuY29uc3QgRkVUQ0hfQk9BUkRTID0gZ3FsYFxuICBxdWVyeSBmZXRjaEJvYXJkcygkcGFnZTogSW50KSB7XG4gICAgZmV0Y2hCb2FyZHMocGFnZTogJHBhZ2UpIHtcbiAgICAgIG51bWJlclxuICAgICAgd3JpdGVyXG4gICAgICB0aXRsZVxuICAgICAgY29udGVudHNcbiAgICB9XG4gIH1cbmA7XG5jb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcbmNvbnN0IENvbHVtbiA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZGJkYmQ7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoUGFnZSgpIHtcbiAgY29uc3QgeyBkYXRhLCByZWZldGNoIH0gPSB1c2VRdWVyeTxcbiAgICBQaWNrPElRdWVyeSwgXCJmZXRjaEJvYXJkc1wiPixcbiAgICBJUXVlcnlGZXRjaEJvYXJkc0FyZ3NcbiAgPihGRVRDSF9CT0FSRFMpO1xuXG4gIGNvbnN0IG9uQ2xpY2tQYWdlID0gKGV2ZW50OiBDdXN0b21Nb3VzZUV2ZW50KSA9PiB7XG4gICAgdm9pZCByZWZldGNoKHsgcGFnZTogTnVtYmVyKGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQpIH0pO1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7ZGF0YT8uZmV0Y2hCb2FyZHM/Lm1hcCgoZWwpID0+IChcbiAgICAgICAgPFJvdyBrZXk9e2VsLm51bWJlcn0+XG4gICAgICAgICAgPENvbHVtbj57ZWwud3JpdGVyfTwvQ29sdW1uPlxuICAgICAgICAgIDxDb2x1bW4+e2VsLnRpdGxlfTwvQ29sdW1uPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICkpfVxuXG4gICAgICB7QXJyYXkoMTApXG4gICAgICAgIC5maWxsKDEpXG4gICAgICAgIC5tYXAoKF9lbCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAga2V5PXtpbmRleCArIDF9XG4gICAgICAgICAgICBzdHlsZT17eyBwYWRkaW5nOiBcIjVweFwiLCBtYXJnaW46IFwiMTBweFwiIH19XG4gICAgICAgICAgICBpZD17U3RyaW5nKGluZGV4ICsgMSl9XG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrUGFnZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aW5kZXggKyAxfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiZ3FsIiwidXNlUXVlcnkiLCJzdHlsZWQiLCJGRVRDSF9CT0FSRFMiLCJSb3ciLCJkaXYiLCJDb2x1bW4iLCJTZWFyY2hQYWdlIiwiZGF0YSIsInJlZmV0Y2giLCJvbkNsaWNrUGFnZSIsImV2ZW50IiwicGFnZSIsIk51bWJlciIsImN1cnJlbnRUYXJnZXQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaEJvYXJkcyIsIm1hcCIsImVsIiwid3JpdGVyIiwidGl0bGUiLCJudW1iZXIiLCJBcnJheSIsImZpbGwiLCJfZWwiLCJpbmRleCIsInNwYW4iLCJzdHlsZSIsInBhZGRpbmciLCJtYXJnaW4iLCJTdHJpbmciLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/20-01-search/index.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/20-01-search/index.tsx"));
module.exports = __webpack_exports__;

})();