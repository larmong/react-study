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
exports.id = "pages/15-02-comment-edit-02";
exports.ids = ["pages/15-02-comment-edit-02"];
exports.modules = {

/***/ "./pages/15-02-comment-edit-02/index.tsx":
/*!***********************************************!*\
  !*** ./pages/15-02-comment-edit-02/index.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CommentEditPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst FETCH_BOARDS = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  query fetchBoards($page: Int) {\n    fetchBoards(page: $page) {\n      number\n      writer\n      title\n      contents\n    }\n  }\n`;\nconst Row = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`\n  display: flex;\n  align-items: center;\n`;\nconst Column = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`\n  font-size: 20px;\n  width: 40%;\n  height: 40px;\n  border-bottom: 1px solid #bdbdbd;\n  line-height: 40px;\n`;\nconst ColumnBtn = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().button)`\n  width: 20%;\n  height: 40px;\n`;\nfunction CommentEditPage() {\n    var ref;\n    const { data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(FETCH_BOARDS);\n    const { 0: editId , 1: setEditId  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([\n        false,\n        false,\n        false,\n        false,\n        false,\n        false,\n        false,\n        false,\n        false,\n        false\n    ]);\n    const onClickEdit = (event)=>{\n        const copyEditId = [\n            ...editId\n        ];\n        copyEditId[Number(event.currentTarget.id)] = true;\n        console.log(editId);\n        setEditId(copyEditId);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: data === null || data === void 0 ? void 0 : (ref = data.fetchBoards) === null || ref === void 0 ? void 0 : ref.map((el, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    editId[index] === false && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                                children: el.writer\n                            }, void 0, false, {\n                                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/15-02-comment-edit-02/index.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                                children: el.title\n                            }, void 0, false, {\n                                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/15-02-comment-edit-02/index.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColumnBtn, {\n                                id: String(index),\n                                onClick: onClickEdit,\n                                children: \"수정하기\"\n                            }, void 0, false, {\n                                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/15-02-comment-edit-02/index.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/15-02-comment-edit-02/index.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, this),\n                    editId[index] === true && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"수정할 내용: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/15-02-comment-edit-02/index.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 23\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/15-02-comment-edit-02/index.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, el.number, true, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/15-02-comment-edit-02/index.tsx\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, this)\n        )\n    }, void 0, false));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8xNS0wMi1jb21tZW50LWVkaXQtMDIvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDVjtBQUtRO0FBRzVDLEtBQUssQ0FBQ0ksWUFBWSxHQUFHSiwrQ0FBRyxDQUFDOzs7Ozs7Ozs7QUFTekI7QUFDQSxLQUFLLENBQUNLLEdBQUcsR0FBR0gsNERBQVUsQ0FBQzs7O0FBR3ZCO0FBQ0EsS0FBSyxDQUFDSyxNQUFNLEdBQUdMLDREQUFVLENBQUM7Ozs7OztBQU0xQjtBQUNBLEtBQUssQ0FBQ00sU0FBUyxHQUFHTiwrREFBYSxDQUFDOzs7QUFHaEM7QUFFZSxRQUFRLENBQUNRLGVBQWUsR0FBRyxDQUFDO1FBMEJwQ0MsR0FBaUI7SUF6QnRCLEtBQUssQ0FBQyxDQUFDLENBQUNBLElBQUksRUFBQyxDQUFDLEdBQUdWLHdEQUFRLENBQ3ZCRyxZQUFZO0lBR2QsS0FBSyxNQUFFUSxNQUFNLE1BQUVDLFNBQVMsTUFBSVYsK0NBQVEsQ0FBQyxDQUFDO1FBQ3BDLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7SUFDUCxDQUFDO0lBRUQsS0FBSyxDQUFDVyxXQUFXLElBQUlDLEtBQXVCLEdBQUssQ0FBQztRQUNoRCxLQUFLLENBQUNDLFVBQVUsR0FBRyxDQUFDO2VBQUdKLE1BQU07UUFBQSxDQUFDO1FBQzlCSSxVQUFVLENBQUNDLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDRyxhQUFhLENBQUNDLEVBQUUsS0FBSyxJQUFJO1FBQ2pEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsTUFBTTtRQUNsQkMsU0FBUyxDQUFDRyxVQUFVO0lBQ3RCLENBQUM7SUFDRCxNQUFNO2tCQUVETCxJQUFJLGFBQUpBLElBQUksS0FBSkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsSUFBSSxDQUFKQSxDQUFpQixJQUFqQkEsR0FBaUIsR0FBakJBLElBQUksQ0FBRVcsV0FBVyxjQUFqQlgsR0FBaUIsS0FBakJBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLEdBQWlCLENBQUVZLEdBQUcsRUFBRUMsRUFBRSxFQUFFQyxLQUFLLCtFQUMvQm5CLENBQUc7O29CQUNETSxNQUFNLENBQUNhLEtBQUssTUFBTSxLQUFLLGdGQUNyQnBCLEdBQUc7O3dHQUNERSxNQUFNOzBDQUFFaUIsRUFBRSxDQUFDRSxNQUFNOzs7Ozs7d0dBQ2pCbkIsTUFBTTswQ0FBRWlCLEVBQUUsQ0FBQ0csS0FBSzs7Ozs7O3dHQUNoQm5CLFNBQVM7Z0NBQUNXLEVBQUUsRUFBRVMsTUFBTSxDQUFDSCxLQUFLO2dDQUFHSSxPQUFPLEVBQUVmLFdBQVc7MENBQUUsQ0FFcEQ7Ozs7Ozs7Ozs7OztvQkFHSEYsTUFBTSxDQUFDYSxLQUFLLE1BQU0sSUFBSSxnRkFDcEJuQixDQUFHOzs0QkFBQyxDQUNLO3dHQUFDd0IsQ0FBSztnQ0FBQ0MsSUFBSSxFQUFDLENBQU07Ozs7Ozs7Ozs7Ozs7ZUFadEJQLEVBQUUsQ0FBQ1EsTUFBTTs7Ozs7OztBQW1CM0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsYXNzLy4vcGFnZXMvMTUtMDItY29tbWVudC1lZGl0LTAyL2luZGV4LnRzeD8zMTA1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHtcbiAgSVF1ZXJ5LFxuICBJUXVlcnlGZXRjaEJvYXJkc0FyZ3MsXG59IGZyb20gXCIuLi8uLi9zcmMvY29tbW9ucy90eXBlcy9nZW5lcmF0ZWQvdHlwZXNcIjtcbmltcG9ydCB7IE1vdXNlRXZlbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgdHlwZSBDdXN0b21Nb3VzZUV2ZW50ID0gTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD47XG5cbmNvbnN0IEZFVENIX0JPQVJEUyA9IGdxbGBcbiAgcXVlcnkgZmV0Y2hCb2FyZHMoJHBhZ2U6IEludCkge1xuICAgIGZldGNoQm9hcmRzKHBhZ2U6ICRwYWdlKSB7XG4gICAgICBudW1iZXJcbiAgICAgIHdyaXRlclxuICAgICAgdGl0bGVcbiAgICAgIGNvbnRlbnRzXG4gICAgfVxuICB9XG5gO1xuY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5jb25zdCBDb2x1bW4gPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDIwcHg7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZGJkYmQ7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuYDtcbmNvbnN0IENvbHVtbkJ0biA9IHN0eWxlZC5idXR0b25gXG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogNDBweDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1lbnRFZGl0UGFnZSgpIHtcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeTxQaWNrPElRdWVyeSwgXCJmZXRjaEJvYXJkc1wiPiwgSVF1ZXJ5RmV0Y2hCb2FyZHNBcmdzPihcbiAgICBGRVRDSF9CT0FSRFNcbiAgKTtcblxuICBjb25zdCBbZWRpdElkLCBzZXRFZGl0SWRdID0gdXNlU3RhdGUoW1xuICAgIGZhbHNlLCAvLyBpbmRleDBcbiAgICBmYWxzZSwgLy8gaW5kZXgxXG4gICAgZmFsc2UsIC8vIGluZGV4MlxuICAgIGZhbHNlLCAvLyBpbmRleDNcbiAgICBmYWxzZSwgLy8gaW5kZXg0XG4gICAgZmFsc2UsIC8vIGluZGV4NVxuICAgIGZhbHNlLCAvLyBpbmRleDZcbiAgICBmYWxzZSwgLy8gaW5kZXg3XG4gICAgZmFsc2UsIC8vIGluZGV4OFxuICAgIGZhbHNlLCAvLyBpbmRleDlcbiAgXSk7XG5cbiAgY29uc3Qgb25DbGlja0VkaXQgPSAoZXZlbnQ6IEN1c3RvbU1vdXNlRXZlbnQpID0+IHtcbiAgICBjb25zdCBjb3B5RWRpdElkID0gWy4uLmVkaXRJZF07XG4gICAgY29weUVkaXRJZFtOdW1iZXIoZXZlbnQuY3VycmVudFRhcmdldC5pZCldID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZyhlZGl0SWQpO1xuICAgIHNldEVkaXRJZChjb3B5RWRpdElkKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2RhdGE/LmZldGNoQm9hcmRzPy5tYXAoKGVsLCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17ZWwubnVtYmVyfT5cbiAgICAgICAgICB7ZWRpdElkW2luZGV4XSA9PT0gZmFsc2UgJiYgKFxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPENvbHVtbj57ZWwud3JpdGVyfTwvQ29sdW1uPlxuICAgICAgICAgICAgICA8Q29sdW1uPntlbC50aXRsZX08L0NvbHVtbj5cbiAgICAgICAgICAgICAgPENvbHVtbkJ0biBpZD17U3RyaW5nKGluZGV4KX0gb25DbGljaz17b25DbGlja0VkaXR9PlxuICAgICAgICAgICAgICAgIOyImOygle2VmOq4sFxuICAgICAgICAgICAgICA8L0NvbHVtbkJ0bj5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICl9XG4gICAgICAgICAge2VkaXRJZFtpbmRleF0gPT09IHRydWUgJiYgKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAg7IiY7KCV7ZWgIOuCtOyaqTogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiZ3FsIiwidXNlUXVlcnkiLCJzdHlsZWQiLCJ1c2VTdGF0ZSIsIkZFVENIX0JPQVJEUyIsIlJvdyIsImRpdiIsIkNvbHVtbiIsIkNvbHVtbkJ0biIsImJ1dHRvbiIsIkNvbW1lbnRFZGl0UGFnZSIsImRhdGEiLCJlZGl0SWQiLCJzZXRFZGl0SWQiLCJvbkNsaWNrRWRpdCIsImV2ZW50IiwiY29weUVkaXRJZCIsIk51bWJlciIsImN1cnJlbnRUYXJnZXQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaEJvYXJkcyIsIm1hcCIsImVsIiwiaW5kZXgiLCJ3cml0ZXIiLCJ0aXRsZSIsIlN0cmluZyIsIm9uQ2xpY2siLCJpbnB1dCIsInR5cGUiLCJudW1iZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/15-02-comment-edit-02/index.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/15-02-comment-edit-02/index.tsx"));
module.exports = __webpack_exports__;

})();