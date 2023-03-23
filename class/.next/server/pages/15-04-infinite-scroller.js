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
exports.id = "pages/15-04-infinite-scroller";
exports.ids = ["pages/15-04-infinite-scroller"];
exports.modules = {

/***/ "./pages/15-04-infinite-scroller/index.tsx":
/*!*************************************************!*\
  !*** ./pages/15-04-infinite-scroller/index.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MapBoardsPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-infinite-scroller */ \"react-infinite-scroller\");\n/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst FETCH_BOARDS = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  query fetchBoards($page: Int) {\n    fetchBoards(page: $page) {\n      number\n      writer\n      title\n      contents\n    }\n  }\n`;\nconst Row = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n`;\nconst Column = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`\n  font-size: 20px;\n  width: 100%;\n  height: 40px;\n  border-bottom: 1px solid #bdbdbd;\n  line-height: 40px;\n`;\nfunction MapBoardsPage() {\n    var ref3;\n    const { data , fetchMore  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(FETCH_BOARDS);\n    const onFetchMore = ()=>{\n        var ref, ref2;\n        if ((data === null || data === void 0 ? void 0 : (ref = data.fetchBoards) === null || ref === void 0 ? void 0 : ref.length) === undefined) return;\n        void fetchMore({\n            variables: {\n                page: Math.ceil((data === null || data === void 0 ? void 0 : (ref2 = data.fetchBoards) === null || ref2 === void 0 ? void 0 : ref2.length) / 10) + 1\n            },\n            updateQuery: (prev, { fetchMoreResult  })=>{\n                if (fetchMoreResult.fetchBoards === undefined) {\n                    return {\n                        fetchBoards: [\n                            ...prev.fetchBoards\n                        ]\n                    };\n                }\n                return {\n                    fetchBoards: [\n                        ...prev.fetchBoards,\n                        ...fetchMoreResult.fetchBoards\n                    ]\n                };\n            }\n        });\n    };\n    var ref1;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_infinite_scroller__WEBPACK_IMPORTED_MODULE_3___default()), {\n            pageStart: 0,\n            loadMore: onFetchMore,\n            hasMore: true,\n            children: (ref1 = data === null || data === void 0 ? void 0 : (ref3 = data.fetchBoards) === null || ref3 === void 0 ? void 0 : ref3.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                            children: el.writer\n                        }, void 0, false, {\n                            fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/15-04-infinite-scroller/index.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                            children: el.title\n                        }, void 0, false, {\n                            fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/15-04-infinite-scroller/index.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, el.number, true, {\n                    fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/15-04-infinite-scroller/index.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 11\n                }, this)\n            )) !== null && ref1 !== void 0 ? ref1 : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/15-04-infinite-scroller/index.tsx\",\n                lineNumber: 66,\n                columnNumber: 15\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/15-04-infinite-scroller/index.tsx\",\n            lineNumber: 60,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8xNS0wNC1pbmZpbml0ZS1zY3JvbGxlci9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE4QztBQUNWO0FBT2dCO0FBRXBELEtBQUssQ0FBQ0ksWUFBWSxHQUFHSiwrQ0FBRyxDQUFDOzs7Ozs7Ozs7QUFTekI7QUFDQSxLQUFLLENBQUNLLEdBQUcsR0FBR0gsNERBQVUsQ0FBQzs7OztBQUl2QjtBQUNBLEtBQUssQ0FBQ0ssTUFBTSxHQUFHTCw0REFBVSxDQUFDOzs7Ozs7QUFNMUI7QUFFZSxRQUFRLENBQUNNLGFBQWEsR0FBRyxDQUFDO1FBMkJoQ0MsSUFBaUI7SUExQnhCLEtBQUssQ0FBQyxDQUFDLENBQUNBLElBQUksR0FBRUMsU0FBUyxFQUFDLENBQUMsR0FBR1Qsd0RBQVEsQ0FHbENHLFlBQVk7SUFFZCxLQUFLLENBQUNPLFdBQVcsT0FBUyxDQUFDO1lBQ3JCRixHQUFpQixFQUdVQSxJQUFpQjtRQUhoRCxFQUFFLEdBQUVBLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxJQUFJLENBQUpBLENBQWlCLElBQWpCQSxHQUFpQixHQUFqQkEsSUFBSSxDQUFFRyxXQUFXLGNBQWpCSCxHQUFpQixLQUFqQkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsR0FBaUIsQ0FBRUksTUFBTSxNQUFLQyxTQUFTLEVBQUUsTUFBTTtRQUVuRCxJQUFJLENBQUNKLFNBQVMsQ0FBQyxDQUFDO1lBQ2RLLFNBQVMsRUFBRSxDQUFDO2dCQUFDQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsSUFBSSxFQUFDVCxJQUFJLGFBQUpBLElBQUksS0FBSkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsSUFBSSxDQUFKQSxDQUFpQixJQUFqQkEsSUFBaUIsR0FBakJBLElBQUksQ0FBRUcsV0FBVyxjQUFqQkgsSUFBaUIsS0FBakJBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLElBQWlCLENBQUVJLE1BQU0sSUFBRyxFQUFFLElBQUksQ0FBQztZQUFDLENBQUM7WUFDbEVNLFdBQVcsR0FBR0MsSUFBUyxFQUFFLENBQUMsQ0FBQ0MsZUFBZSxFQUFNLENBQUMsR0FBSyxDQUFDO2dCQUNyRCxFQUFFLEVBQUVBLGVBQWUsQ0FBQ1QsV0FBVyxLQUFLRSxTQUFTLEVBQUUsQ0FBQztvQkFDOUMsTUFBTSxDQUFDLENBQUM7d0JBQ05GLFdBQVcsRUFBRSxDQUFDOytCQUFHUSxJQUFJLENBQUNSLFdBQVc7d0JBQUEsQ0FBQztvQkFDcEMsQ0FBQztnQkFDSCxDQUFDO2dCQUNELE1BQU0sQ0FBQyxDQUFDO29CQUNOQSxXQUFXLEVBQUUsQ0FBQzsyQkFBR1EsSUFBSSxDQUFDUixXQUFXOzJCQUFLUyxlQUFlLENBQUNULFdBQVc7b0JBQUEsQ0FBQztnQkFDcEUsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztRQUtNSCxJQUtDO0lBUlIsTUFBTTs4RkFFRE4sZ0VBQWM7WUFBQ21CLFNBQVMsRUFBRSxDQUFDO1lBQUVDLFFBQVEsRUFBRVosV0FBVztZQUFFYSxPQUFPLEVBQUUsSUFBSTt1QkFDL0RmLElBS0MsR0FMREEsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLElBQUksQ0FBSkEsQ0FBaUIsSUFBakJBLElBQWlCLEdBQWpCQSxJQUFJLENBQUVHLFdBQVcsY0FBakJILElBQWlCLEtBQWpCQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxJQUFpQixDQUFFZ0IsR0FBRyxFQUFFQyxFQUFFLCtFQUN4QnJCLEdBQUc7O29HQUNERSxNQUFNO3NDQUFFbUIsRUFBRSxDQUFDQyxNQUFNOzs7Ozs7b0dBQ2pCcEIsTUFBTTtzQ0FBRW1CLEVBQUUsQ0FBQ0UsS0FBSzs7Ozs7OzttQkFGVEYsRUFBRSxDQUFDRyxNQUFNOzs7OzsyQkFEcEJwQixJQUtDLGNBTERBLElBS0MsK0VBQUtILENBQUc7Ozs7Ozs7Ozs7O0FBSWxCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGFzcy8uL3BhZ2VzLzE1LTA0LWluZmluaXRlLXNjcm9sbGVyL2luZGV4LnRzeD83ZWNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHtcbiAgSVF1ZXJ5LFxuICBJUXVlcnlGZXRjaEJvYXJkc0FyZ3MsXG59IGZyb20gXCIuLi8uLi9zcmMvY29tbW9ucy90eXBlcy9nZW5lcmF0ZWQvdHlwZXNcIjtcbmltcG9ydCB7IE1vdXNlRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB0eXBlIEN1c3RvbU1vdXNlRXZlbnQgPSBNb3VzZUV2ZW50PEhUTUxFbGVtZW50PjtcbmltcG9ydCBJbmZpbml0ZVNjcm9sbCBmcm9tIFwicmVhY3QtaW5maW5pdGUtc2Nyb2xsZXJcIjtcblxuY29uc3QgRkVUQ0hfQk9BUkRTID0gZ3FsYFxuICBxdWVyeSBmZXRjaEJvYXJkcygkcGFnZTogSW50KSB7XG4gICAgZmV0Y2hCb2FyZHMocGFnZTogJHBhZ2UpIHtcbiAgICAgIG51bWJlclxuICAgICAgd3JpdGVyXG4gICAgICB0aXRsZVxuICAgICAgY29udGVudHNcbiAgICB9XG4gIH1cbmA7XG5jb25zdCBSb3cgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcbmNvbnN0IENvbHVtbiA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZGJkYmQ7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFwQm9hcmRzUGFnZSgpIHtcbiAgY29uc3QgeyBkYXRhLCBmZXRjaE1vcmUgfSA9IHVzZVF1ZXJ5PFxuICAgIFBpY2s8SVF1ZXJ5LCBcImZldGNoQm9hcmRzXCI+LFxuICAgIElRdWVyeUZldGNoQm9hcmRzQXJnc1xuICA+KEZFVENIX0JPQVJEUyk7XG5cbiAgY29uc3Qgb25GZXRjaE1vcmUgPSAoKSA9PiB7XG4gICAgaWYgKGRhdGE/LmZldGNoQm9hcmRzPy5sZW5ndGggPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG4gICAgdm9pZCBmZXRjaE1vcmUoe1xuICAgICAgdmFyaWFibGVzOiB7IHBhZ2U6IE1hdGguY2VpbChkYXRhPy5mZXRjaEJvYXJkcz8ubGVuZ3RoIC8gMTApICsgMSB9LFxuICAgICAgdXBkYXRlUXVlcnk6IChwcmV2OiBhbnksIHsgZmV0Y2hNb3JlUmVzdWx0IH06IGFueSkgPT4ge1xuICAgICAgICBpZiAoZmV0Y2hNb3JlUmVzdWx0LmZldGNoQm9hcmRzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmV0Y2hCb2FyZHM6IFsuLi5wcmV2LmZldGNoQm9hcmRzXSxcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZmV0Y2hCb2FyZHM6IFsuLi5wcmV2LmZldGNoQm9hcmRzLCAuLi5mZXRjaE1vcmVSZXN1bHQuZmV0Y2hCb2FyZHNdLFxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SW5maW5pdGVTY3JvbGwgcGFnZVN0YXJ0PXswfSBsb2FkTW9yZT17b25GZXRjaE1vcmV9IGhhc01vcmU9e3RydWV9PlxuICAgICAgICB7ZGF0YT8uZmV0Y2hCb2FyZHM/Lm1hcCgoZWwpID0+IChcbiAgICAgICAgICA8Um93IGtleT17ZWwubnVtYmVyfT5cbiAgICAgICAgICAgIDxDb2x1bW4+e2VsLndyaXRlcn08L0NvbHVtbj5cbiAgICAgICAgICAgIDxDb2x1bW4+e2VsLnRpdGxlfTwvQ29sdW1uPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICApKSA/PyA8ZGl2PjwvZGl2Pn1cbiAgICAgIDwvSW5maW5pdGVTY3JvbGw+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiZ3FsIiwidXNlUXVlcnkiLCJzdHlsZWQiLCJJbmZpbml0ZVNjcm9sbCIsIkZFVENIX0JPQVJEUyIsIlJvdyIsImRpdiIsIkNvbHVtbiIsIk1hcEJvYXJkc1BhZ2UiLCJkYXRhIiwiZmV0Y2hNb3JlIiwib25GZXRjaE1vcmUiLCJmZXRjaEJvYXJkcyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInZhcmlhYmxlcyIsInBhZ2UiLCJNYXRoIiwiY2VpbCIsInVwZGF0ZVF1ZXJ5IiwicHJldiIsImZldGNoTW9yZVJlc3VsdCIsInBhZ2VTdGFydCIsImxvYWRNb3JlIiwiaGFzTW9yZSIsIm1hcCIsImVsIiwid3JpdGVyIiwidGl0bGUiLCJudW1iZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/15-04-infinite-scroller/index.tsx\n");

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

/***/ "react-infinite-scroller":
/*!******************************************!*\
  !*** external "react-infinite-scroller" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("react-infinite-scroller");

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
var __webpack_exports__ = (__webpack_exec__("./pages/15-04-infinite-scroller/index.tsx"));
module.exports = __webpack_exports__;

})();