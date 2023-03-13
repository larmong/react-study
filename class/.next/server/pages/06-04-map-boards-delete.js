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
exports.id = "pages/06-04-map-boards-delete";
exports.ids = ["pages/06-04-map-boards-delete"];
exports.modules = {

/***/ "./pages/06-04-map-boards-delete/index.js":
/*!************************************************!*\
  !*** ./pages/06-04-map-boards-delete/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MapBoardsPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst FETCH_BOARDS = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  query fetchBoards {\n    fetchBoards {\n      number\n      writer\n      title\n      contents\n    }\n  }\n`;\nconst DELETE_BOARD = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  mutation deleteBoard($number: Int) {\n    deleteBoard (number: $number ) {\n      message\n    }\n  }\n`;\nconst Row = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n`;\nconst Column = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`\n  font-size: 20px;\n  width: 10%;\n  height: 40px;\n  border-bottom: 1px solid #BDBDBD;\n  line-height: 40px;\n`;\nfunction MapBoardsPage() {\n    const { data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(FETCH_BOARDS);\n    const [deleteBoard] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(DELETE_BOARD);\n    // console.log(data?.fetchBoards)\n    const onClickDelete = async (event)=>{\n        await deleteBoard({\n            variables: {\n                number: Number(event.target.id)\n            },\n            refetchQueries: [\n                {\n                    query: FETCH_BOARDS\n                }\n            ] // 삭제 완료 후 새로고침 대신 다시 10개의 목록을 다시 가져오는 기능\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: data === null || data === void 0 ? void 0 : data.fetchBoards.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"checkbox\"\n                        }, void 0, false, {\n                            fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/06-04-map-boards-delete/index.js\",\n                            lineNumber: 57,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/06-04-map-boards-delete/index.js\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                        children: el.number\n                    }, void 0, false, {\n                        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/06-04-map-boards-delete/index.js\",\n                        lineNumber: 58,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                        children: el.title\n                    }, void 0, false, {\n                        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/06-04-map-boards-delete/index.js\",\n                        lineNumber: 59,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                        children: el.contents\n                    }, void 0, false, {\n                        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/06-04-map-boards-delete/index.js\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            id: el.number,\n                            onClick: onClickDelete,\n                            children: \"삭제\"\n                        }, void 0, false, {\n                            fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/06-04-map-boards-delete/index.js\",\n                            lineNumber: 61,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/06-04-map-boards-delete/index.js\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, el.number, true, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/06-04-map-boards-delete/index.js\",\n                lineNumber: 56,\n                columnNumber: 11\n            }, this)\n        )\n    }, void 0, false));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8wNi0wNC1tYXAtYm9hcmRzLWRlbGV0ZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF5RDtBQUNyQjtBQUVwQyxLQUFLLENBQUNJLFlBQVksR0FBR0osK0NBQUcsQ0FBQzs7Ozs7Ozs7O0FBU3pCO0FBRUEsS0FBSyxDQUFDSyxZQUFZLEdBQUdMLCtDQUFHLENBQUM7Ozs7OztBQU16QjtBQUlBLEtBQUssQ0FBQ00sR0FBRyxHQUFHSCw0REFBVSxDQUFFOzs7O0FBSXhCO0FBQ0EsS0FBSyxDQUFDSyxNQUFNLEdBQUdMLDREQUFVLENBQUU7Ozs7OztBQU0zQjtBQUVlLFFBQVEsQ0FBQ00sYUFBYSxHQUFHLENBQUM7SUFDdkMsS0FBSyxDQUFDLENBQUNDLENBQUFBLElBQUksR0FBQyxHQUFHUix3REFBUSxDQUFDRSxZQUFZO0lBQ3BDLEtBQUssRUFBRU8sV0FBVyxJQUFJViwyREFBVyxDQUFDSSxZQUFZO0lBRTlDLEVBQWlDO0lBQ2pDLEtBQUssQ0FBQ08sYUFBYSxVQUFVQyxLQUFLLEdBQUssQ0FBQztRQUN0QyxLQUFLLENBQUNGLFdBQVcsQ0FBQyxDQUFDO1lBQ2pCRyxTQUFTLEVBQUUsQ0FBQztnQkFDVkMsTUFBTSxFQUFFQyxNQUFNLENBQUNILEtBQUssQ0FBQ0ksTUFBTSxDQUFDQyxFQUFFO1lBQ2hDLENBQUM7WUFDREMsY0FBYyxFQUFFLENBQUM7Z0JBQUEsQ0FBQ0M7b0JBQUFBLEtBQUssRUFBRWhCLFlBQVk7Z0JBQUEsQ0FBQztZQUFBLENBQUMsQ0FBMkMsRUFBb0Q7UUFDcEYsQ0FBbkQ7SUFDSCxDQUFDO0lBRUQsTUFBTTtrQkFHQU0sSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLElBQUksQ0FBRVcsV0FBVyxDQUFDQyxHQUFHLEVBQUNDLEVBQUUsK0VBQ3JCakIsR0FBRzs7Z0dBQ0RFLE1BQU07OEdBQUVnQixDQUFLOzRCQUFDQyxJQUFJLEVBQUMsQ0FBVTs7Ozs7Ozs7Ozs7Z0dBQzdCakIsTUFBTTtrQ0FBRWUsRUFBRSxDQUFDUixNQUFNOzs7Ozs7Z0dBQ2pCUCxNQUFNO2tDQUFFZSxFQUFFLENBQUNHLEtBQUs7Ozs7OztnR0FDaEJsQixNQUFNO2tDQUFFZSxFQUFFLENBQUNJLFFBQVE7Ozs7OztnR0FDbkJuQixNQUFNOzhHQUFFb0IsQ0FBTTs0QkFBQ1YsRUFBRSxFQUFFSyxFQUFFLENBQUNSLE1BQU07NEJBQUVjLE9BQU8sRUFBRWpCLGFBQWE7c0NBQUUsQ0FBRTs7Ozs7Ozs7Ozs7O2VBTGpEVyxFQUFFLENBQUNSLE1BQU07Ozs7Ozs7QUFXN0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsYXNzLy4vcGFnZXMvMDYtMDQtbWFwLWJvYXJkcy1kZWxldGUvaW5kZXguanM/NzQ1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dxbCwgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5fSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5jb25zdCBGRVRDSF9CT0FSRFMgPSBncWxgXG4gIHF1ZXJ5IGZldGNoQm9hcmRzIHtcbiAgICBmZXRjaEJvYXJkcyB7XG4gICAgICBudW1iZXJcbiAgICAgIHdyaXRlclxuICAgICAgdGl0bGVcbiAgICAgIGNvbnRlbnRzXG4gICAgfVxuICB9XG5gXG5cbmNvbnN0IERFTEVURV9CT0FSRCA9IGdxbGBcbiAgbXV0YXRpb24gZGVsZXRlQm9hcmQoJG51bWJlcjogSW50KSB7XG4gICAgZGVsZXRlQm9hcmQgKG51bWJlcjogJG51bWJlciApIHtcbiAgICAgIG1lc3NhZ2VcbiAgICB9XG4gIH1cbmBcblxuXG5cbmNvbnN0IFJvdyA9IHN0eWxlZC5kaXYgYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYFxuY29uc3QgQ29sdW1uID0gc3R5bGVkLmRpdiBgXG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgd2lkdGg6IDEwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0JEQkRCRDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG5gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcEJvYXJkc1BhZ2UoKSB7XG4gIGNvbnN0IHtkYXRhfSA9IHVzZVF1ZXJ5KEZFVENIX0JPQVJEUylcbiAgY29uc3QgW2RlbGV0ZUJvYXJkXSA9IHVzZU11dGF0aW9uKERFTEVURV9CT0FSRClcblxuICAvLyBjb25zb2xlLmxvZyhkYXRhPy5mZXRjaEJvYXJkcylcbiAgY29uc3Qgb25DbGlja0RlbGV0ZSA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGF3YWl0IGRlbGV0ZUJvYXJkKHtcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBudW1iZXI6IE51bWJlcihldmVudC50YXJnZXQuaWQpXG4gICAgICB9LFxuICAgICAgcmVmZXRjaFF1ZXJpZXM6IFt7cXVlcnk6IEZFVENIX0JPQVJEU31dICAvLyDsgq3soJwg7JmE66OMIO2bhCDsg4jroZzqs6Dsuagg64yA7IugIOuLpOyLnCAxMOqwnOydmCDrqqnroZ3snYQg64uk7IucIOqwgOyguOyYpOuKlCDquLDriqVcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge1xuICAgICAgICBkYXRhPy5mZXRjaEJvYXJkcy5tYXAoZWwgPT4gKFxuICAgICAgICAgIDxSb3cga2V5PXtlbC5udW1iZXJ9PlxuICAgICAgICAgICAgPENvbHVtbj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz48L0NvbHVtbj5cbiAgICAgICAgICAgIDxDb2x1bW4+e2VsLm51bWJlcn08L0NvbHVtbj5cbiAgICAgICAgICAgIDxDb2x1bW4+e2VsLnRpdGxlfTwvQ29sdW1uPlxuICAgICAgICAgICAgPENvbHVtbj57ZWwuY29udGVudHN9PC9Db2x1bW4+XG4gICAgICAgICAgICA8Q29sdW1uPjxidXR0b24gaWQ9e2VsLm51bWJlcn0gb25DbGljaz17b25DbGlja0RlbGV0ZX0+7IKt7KCcPC9idXR0b24+PC9Db2x1bW4+XG4gICAgICAgICAgPC9Sb3c+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJncWwiLCJ1c2VNdXRhdGlvbiIsInVzZVF1ZXJ5Iiwic3R5bGVkIiwiRkVUQ0hfQk9BUkRTIiwiREVMRVRFX0JPQVJEIiwiUm93IiwiZGl2IiwiQ29sdW1uIiwiTWFwQm9hcmRzUGFnZSIsImRhdGEiLCJkZWxldGVCb2FyZCIsIm9uQ2xpY2tEZWxldGUiLCJldmVudCIsInZhcmlhYmxlcyIsIm51bWJlciIsIk51bWJlciIsInRhcmdldCIsImlkIiwicmVmZXRjaFF1ZXJpZXMiLCJxdWVyeSIsImZldGNoQm9hcmRzIiwibWFwIiwiZWwiLCJpbnB1dCIsInR5cGUiLCJ0aXRsZSIsImNvbnRlbnRzIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/06-04-map-boards-delete/index.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/06-04-map-boards-delete/index.js"));
module.exports = __webpack_exports__;

})();