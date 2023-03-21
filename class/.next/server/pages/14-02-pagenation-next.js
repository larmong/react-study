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
exports.id = "pages/14-02-pagenation-next";
exports.ids = ["pages/14-02-pagenation-next"];
exports.modules = {

/***/ "./pages/14-02-pagenation-next/index.tsx":
/*!***********************************************!*\
  !*** ./pages/14-02-pagenation-next/index.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MapBoardsPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst FETCH_BOARDS = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  query fetchBoards($page: Int) {\n    fetchBoards(page: $page) {\n      number\n      writer\n      title\n      contents\n    }\n  }\n`;\nconst Row = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n`;\nconst Column = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`\n  font-size: 20px;\n  width: 100%;\n  height: 40px;\n  border-bottom: 1px solid #bdbdbd;\n  line-height: 40px;\n`;\nfunction MapBoardsPage() {\n    var ref;\n    const { data , refetch  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(FETCH_BOARDS);\n    const { 0: startPage , 1: setStatPage  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);\n    const onClickPage = (event)=>{\n        void refetch({\n            page: Number(event.currentTarget.id)\n        });\n        console.log(event.currentTarget.id);\n    };\n    // event: CustomMouseEvent\n    const onClickPrevPage = ()=>{\n        setStatPage(startPage - 10);\n        void refetch({\n            page: startPage - 10\n        });\n    };\n    const onClickNextPage = ()=>{\n        setStatPage(startPage + 10);\n        void refetch({\n            page: startPage + 10\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            data === null || data === void 0 ? void 0 : (ref = data.fetchBoards) === null || ref === void 0 ? void 0 : ref.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                            children: el.writer\n                        }, void 0, false, {\n                            fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/14-02-pagenation-next/index.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                            children: el.title\n                        }, void 0, false, {\n                            fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/14-02-pagenation-next/index.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, el.number, true, {\n                    fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/14-02-pagenation-next/index.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this)\n            ),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                onClick: onClickPrevPage,\n                children: \"이전페이지\"\n            }, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/14-02-pagenation-next/index.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            new Array(10).fill(1).map((_el, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    style: {\n                        padding: \"5px\",\n                        margin: \"10px\"\n                    },\n                    id: String(index + startPage),\n                    onClick: onClickPage,\n                    children: index + startPage\n                }, index + startPage, false, {\n                    fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/14-02-pagenation-next/index.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            ),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                onClick: onClickNextPage,\n                children: \"다음페이지\"\n            }, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/14-02-pagenation-next/index.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8xNC0wMi1wYWdlbmF0aW9uLW5leHQvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDVjtBQUtRO0FBRzVDLEtBQUssQ0FBQ0ksWUFBWSxHQUFHSiwrQ0FBRyxDQUFDOzs7Ozs7Ozs7QUFTekI7QUFDQSxLQUFLLENBQUNLLEdBQUcsR0FBR0gsNERBQVUsQ0FBQzs7OztBQUl2QjtBQUNBLEtBQUssQ0FBQ0ssTUFBTSxHQUFHTCw0REFBVSxDQUFDOzs7Ozs7QUFNMUI7QUFFZSxRQUFRLENBQUNNLGFBQWEsR0FBRyxDQUFDO1FBd0JsQ0MsR0FBaUI7SUF2QnRCLEtBQUssQ0FBQyxDQUFDLENBQUNBLElBQUksR0FBRUMsT0FBTyxFQUFDLENBQUMsR0FBR1Qsd0RBQVEsQ0FHaENHLFlBQVk7SUFFZCxLQUFLLE1BQUVPLFNBQVMsTUFBRUMsV0FBVyxNQUFJVCwrQ0FBUSxDQUFDLENBQUM7SUFFM0MsS0FBSyxDQUFDVSxXQUFXLElBQUlDLEtBQXVCLEdBQUssQ0FBQztRQUNoRCxJQUFJLENBQUNKLE9BQU8sQ0FBQyxDQUFDO1lBQUNLLElBQUksRUFBRUMsTUFBTSxDQUFDRixLQUFLLENBQUNHLGFBQWEsQ0FBQ0MsRUFBRTtRQUFFLENBQUM7UUFDckRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixLQUFLLENBQUNHLGFBQWEsQ0FBQ0MsRUFBRTtJQUNwQyxDQUFDO0lBQ0QsRUFBMEI7SUFDMUIsS0FBSyxDQUFDRyxlQUFlLE9BQVMsQ0FBQztRQUM3QlQsV0FBVyxDQUFDRCxTQUFTLEdBQUcsRUFBRTtRQUMxQixJQUFJLENBQUNELE9BQU8sQ0FBQyxDQUFDO1lBQUNLLElBQUksRUFBRUosU0FBUyxHQUFHLEVBQUU7UUFBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxLQUFLLENBQUNXLGVBQWUsT0FBUyxDQUFDO1FBQzdCVixXQUFXLENBQUNELFNBQVMsR0FBRyxFQUFFO1FBQzFCLElBQUksQ0FBQ0QsT0FBTyxDQUFDLENBQUM7WUFBQ0ssSUFBSSxFQUFFSixTQUFTLEdBQUcsRUFBRTtRQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELE1BQU07O1lBRURGLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxJQUFJLENBQUpBLENBQWlCLElBQWpCQSxHQUFpQixHQUFqQkEsSUFBSSxDQUFFYyxXQUFXLGNBQWpCZCxHQUFpQixLQUFqQkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsR0FBaUIsQ0FBRWUsR0FBRyxFQUFFQyxFQUFFLCtFQUN4QnBCLEdBQUc7O29HQUNERSxNQUFNO3NDQUFFa0IsRUFBRSxDQUFDQyxNQUFNOzs7Ozs7b0dBQ2pCbkIsTUFBTTtzQ0FBRWtCLEVBQUUsQ0FBQ0UsS0FBSzs7Ozs7OzttQkFGVEYsRUFBRSxDQUFDRyxNQUFNOzs7Ozs7d0ZBS3BCQyxDQUFJO2dCQUFDQyxPQUFPLEVBQUVULGVBQWU7MEJBQUUsQ0FBSzs7Ozs7O1lBQzFCLEdBQVAsQ0FBQ1UsS0FBSyxDQUFDLEVBQUUsRUFBRUMsSUFBSSxDQUFDLENBQUMsRUFBRVIsR0FBRyxFQUFFUyxHQUFHLEVBQUVDLEtBQUssK0VBQ25DTCxDQUFJO29CQUVITSxLQUFLLEVBQUUsQ0FBQzt3QkFBQ0MsT0FBTyxFQUFFLENBQUs7d0JBQUVDLE1BQU0sRUFBRSxDQUFNO29CQUFDLENBQUM7b0JBQ3pDbkIsRUFBRSxFQUFFb0IsTUFBTSxDQUFDSixLQUFLLEdBQUd2QixTQUFTO29CQUM1Qm1CLE9BQU8sRUFBRWpCLFdBQVc7OEJBRW5CcUIsS0FBSyxHQUFHdkIsU0FBUzttQkFMYnVCLEtBQUssR0FBR3ZCLFNBQVM7Ozs7Ozt3RkFRekJrQixDQUFJO2dCQUFDQyxPQUFPLEVBQUVSLGVBQWU7MEJBQUUsQ0FBSzs7Ozs7Ozs7QUFHM0MsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsYXNzLy4vcGFnZXMvMTQtMDItcGFnZW5hdGlvbi1uZXh0L2luZGV4LnRzeD8wMjRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHtcbiAgSVF1ZXJ5LFxuICBJUXVlcnlGZXRjaEJvYXJkc0FyZ3MsXG59IGZyb20gXCIuLi8uLi9zcmMvY29tbW9ucy90eXBlcy9nZW5lcmF0ZWQvdHlwZXNcIjtcbmltcG9ydCB7IE1vdXNlRXZlbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgdHlwZSBDdXN0b21Nb3VzZUV2ZW50ID0gTW91c2VFdmVudDxIVE1MRWxlbWVudD47XG5cbmNvbnN0IEZFVENIX0JPQVJEUyA9IGdxbGBcbiAgcXVlcnkgZmV0Y2hCb2FyZHMoJHBhZ2U6IEludCkge1xuICAgIGZldGNoQm9hcmRzKHBhZ2U6ICRwYWdlKSB7XG4gICAgICBudW1iZXJcbiAgICAgIHdyaXRlclxuICAgICAgdGl0bGVcbiAgICAgIGNvbnRlbnRzXG4gICAgfVxuICB9XG5gO1xuY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5jb25zdCBDb2x1bW4gPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmRiZGJkO1xuICBsaW5lLWhlaWdodDogNDBweDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcEJvYXJkc1BhZ2UoKSB7XG4gIGNvbnN0IHsgZGF0YSwgcmVmZXRjaCB9ID0gdXNlUXVlcnk8XG4gICAgUGljazxJUXVlcnksIFwiZmV0Y2hCb2FyZHNcIj4sXG4gICAgSVF1ZXJ5RmV0Y2hCb2FyZHNBcmdzXG4gID4oRkVUQ0hfQk9BUkRTKTtcblxuICBjb25zdCBbc3RhcnRQYWdlLCBzZXRTdGF0UGFnZV0gPSB1c2VTdGF0ZSgxKTtcblxuICBjb25zdCBvbkNsaWNrUGFnZSA9IChldmVudDogQ3VzdG9tTW91c2VFdmVudCkgPT4ge1xuICAgIHZvaWQgcmVmZXRjaCh7IHBhZ2U6IE51bWJlcihldmVudC5jdXJyZW50VGFyZ2V0LmlkKSB9KTtcbiAgICBjb25zb2xlLmxvZyhldmVudC5jdXJyZW50VGFyZ2V0LmlkKTtcbiAgfTtcbiAgLy8gZXZlbnQ6IEN1c3RvbU1vdXNlRXZlbnRcbiAgY29uc3Qgb25DbGlja1ByZXZQYWdlID0gKCkgPT4ge1xuICAgIHNldFN0YXRQYWdlKHN0YXJ0UGFnZSAtIDEwKTtcbiAgICB2b2lkIHJlZmV0Y2goeyBwYWdlOiBzdGFydFBhZ2UgLSAxMCB9KTtcbiAgfTtcbiAgY29uc3Qgb25DbGlja05leHRQYWdlID0gKCkgPT4ge1xuICAgIHNldFN0YXRQYWdlKHN0YXJ0UGFnZSArIDEwKTtcbiAgICB2b2lkIHJlZmV0Y2goeyBwYWdlOiBzdGFydFBhZ2UgKyAxMCB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7ZGF0YT8uZmV0Y2hCb2FyZHM/Lm1hcCgoZWwpID0+IChcbiAgICAgICAgPFJvdyBrZXk9e2VsLm51bWJlcn0+XG4gICAgICAgICAgPENvbHVtbj57ZWwud3JpdGVyfTwvQ29sdW1uPlxuICAgICAgICAgIDxDb2x1bW4+e2VsLnRpdGxlfTwvQ29sdW1uPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICkpfVxuICAgICAgPHNwYW4gb25DbGljaz17b25DbGlja1ByZXZQYWdlfT7snbTsoITtjpjsnbTsp4A8L3NwYW4+XG4gICAgICB7bmV3IEFycmF5KDEwKS5maWxsKDEpLm1hcCgoX2VsLCBpbmRleCkgPT4gKFxuICAgICAgICA8c3BhblxuICAgICAgICAgIGtleT17aW5kZXggKyBzdGFydFBhZ2V9XG4gICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogXCI1cHhcIiwgbWFyZ2luOiBcIjEwcHhcIiB9fVxuICAgICAgICAgIGlkPXtTdHJpbmcoaW5kZXggKyBzdGFydFBhZ2UpfVxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tQYWdlfVxuICAgICAgICA+XG4gICAgICAgICAge2luZGV4ICsgc3RhcnRQYWdlfVxuICAgICAgICA8L3NwYW4+XG4gICAgICApKX1cbiAgICAgIDxzcGFuIG9uQ2xpY2s9e29uQ2xpY2tOZXh0UGFnZX0+64uk7J2M7Y6Y7J207KeAPC9zcGFuPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImdxbCIsInVzZVF1ZXJ5Iiwic3R5bGVkIiwidXNlU3RhdGUiLCJGRVRDSF9CT0FSRFMiLCJSb3ciLCJkaXYiLCJDb2x1bW4iLCJNYXBCb2FyZHNQYWdlIiwiZGF0YSIsInJlZmV0Y2giLCJzdGFydFBhZ2UiLCJzZXRTdGF0UGFnZSIsIm9uQ2xpY2tQYWdlIiwiZXZlbnQiLCJwYWdlIiwiTnVtYmVyIiwiY3VycmVudFRhcmdldCIsImlkIiwiY29uc29sZSIsImxvZyIsIm9uQ2xpY2tQcmV2UGFnZSIsIm9uQ2xpY2tOZXh0UGFnZSIsImZldGNoQm9hcmRzIiwibWFwIiwiZWwiLCJ3cml0ZXIiLCJ0aXRsZSIsIm51bWJlciIsInNwYW4iLCJvbkNsaWNrIiwiQXJyYXkiLCJmaWxsIiwiX2VsIiwiaW5kZXgiLCJzdHlsZSIsInBhZGRpbmciLCJtYXJnaW4iLCJTdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/14-02-pagenation-next/index.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/14-02-pagenation-next/index.tsx"));
module.exports = __webpack_exports__;

})();