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
exports.id = "pages/15-01-comment-edit-01";
exports.ids = ["pages/15-01-comment-edit-01"];
exports.modules = {

/***/ "./pages/15-01-comment-edit-01/index.tsx":
/*!***********************************************!*\
  !*** ./pages/15-01-comment-edit-01/index.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CommentEditPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst FETCH_BOARDS = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  query fetchBoards($page: Int) {\n    fetchBoards(page: $page) {\n      number\n      writer\n      title\n      contents\n    }\n  }\n`;\nconst Row = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`\n  display: flex;\n  align-items: center;\n`;\nconst Column = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`\n  font-size: 20px;\n  width: 40%;\n  height: 40px;\n  border-bottom: 1px solid #bdbdbd;\n  line-height: 40px;\n`;\nconst ColumnBtn = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().button)`\n  width: 20%;\n  height: 40px;\n`;\nfunction CommentEditPage() {\n    var ref;\n    const { data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(FETCH_BOARDS);\n    const { 0: editId , 1: setEditId  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);\n    const onClickEdit = (event)=>{\n        setEditId(Number(event.currentTarget.id));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: data === null || data === void 0 ? void 0 : (ref = data.fetchBoards) === null || ref === void 0 ? void 0 : ref.map((el, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    index !== editId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                                children: el.writer\n                            }, void 0, false, {\n                                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/15-01-comment-edit-01/index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                                children: el.title\n                            }, void 0, false, {\n                                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/15-01-comment-edit-01/index.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColumnBtn, {\n                                id: String(index),\n                                onClick: onClickEdit,\n                                children: \"수정하기\"\n                            }, void 0, false, {\n                                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/15-01-comment-edit-01/index.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/15-01-comment-edit-01/index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, this),\n                    index === editId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"수정할 내용: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/15-01-comment-edit-01/index.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 23\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/15-01-comment-edit-01/index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, el.number, true, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/15-01-comment-edit-01/index.tsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this)\n        )\n    }, void 0, false));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8xNS0wMS1jb21tZW50LWVkaXQtMDEvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDVjtBQUtRO0FBRzVDLEtBQUssQ0FBQ0ksWUFBWSxHQUFHSiwrQ0FBRyxDQUFDOzs7Ozs7Ozs7QUFTekI7QUFDQSxLQUFLLENBQUNLLEdBQUcsR0FBR0gsNERBQVUsQ0FBQzs7O0FBR3ZCO0FBQ0EsS0FBSyxDQUFDSyxNQUFNLEdBQUdMLDREQUFVLENBQUM7Ozs7OztBQU0xQjtBQUNBLEtBQUssQ0FBQ00sU0FBUyxHQUFHTiwrREFBYSxDQUFDOzs7QUFHaEM7QUFFZSxRQUFRLENBQUNRLGVBQWUsR0FBRyxDQUFDO1FBWXBDQyxHQUFpQjtJQVh0QixLQUFLLENBQUMsQ0FBQyxDQUFDQSxJQUFJLEVBQUMsQ0FBQyxHQUFHVix3REFBUSxDQUN2QkcsWUFBWTtJQUdkLEtBQUssTUFBRVEsTUFBTSxNQUFFQyxTQUFTLE1BQUlWLCtDQUFRLENBQUMsQ0FBQztJQUV0QyxLQUFLLENBQUNXLFdBQVcsSUFBSUMsS0FBdUIsR0FBSyxDQUFDO1FBQ2hERixTQUFTLENBQUNHLE1BQU0sQ0FBQ0QsS0FBSyxDQUFDRSxhQUFhLENBQUNDLEVBQUU7SUFDekMsQ0FBQztJQUNELE1BQU07a0JBRURQLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxJQUFJLENBQUpBLENBQWlCLElBQWpCQSxHQUFpQixHQUFqQkEsSUFBSSxDQUFFUSxXQUFXLGNBQWpCUixHQUFpQixLQUFqQkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsR0FBaUIsQ0FBRVMsR0FBRyxFQUFFQyxFQUFFLEVBQUVDLEtBQUssK0VBQy9CaEIsQ0FBRzs7b0JBQ0RnQixLQUFLLEtBQUtWLE1BQU0sZ0ZBQ2RQLEdBQUc7O3dHQUNERSxNQUFNOzBDQUFFYyxFQUFFLENBQUNFLE1BQU07Ozs7Ozt3R0FDakJoQixNQUFNOzBDQUFFYyxFQUFFLENBQUNHLEtBQUs7Ozs7Ozt3R0FDaEJoQixTQUFTO2dDQUFDVSxFQUFFLEVBQUVPLE1BQU0sQ0FBQ0gsS0FBSztnQ0FBR0ksT0FBTyxFQUFFWixXQUFXOzBDQUFFLENBRXBEOzs7Ozs7Ozs7Ozs7b0JBR0hRLEtBQUssS0FBS1YsTUFBTSxnRkFDZE4sQ0FBRzs7NEJBQUMsQ0FDSzt3R0FBQ3FCLENBQUs7Z0NBQUNDLElBQUksRUFBQyxDQUFNOzs7Ozs7Ozs7Ozs7O2VBWnRCUCxFQUFFLENBQUNRLE1BQU07Ozs7Ozs7QUFtQjNCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGFzcy8uL3BhZ2VzLzE1LTAxLWNvbW1lbnQtZWRpdC0wMS9pbmRleC50c3g/YzVhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7XG4gIElRdWVyeSxcbiAgSVF1ZXJ5RmV0Y2hCb2FyZHNBcmdzLFxufSBmcm9tIFwiLi4vLi4vc3JjL2NvbW1vbnMvdHlwZXMvZ2VuZXJhdGVkL3R5cGVzXCI7XG5pbXBvcnQgeyBNb3VzZUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHR5cGUgQ3VzdG9tTW91c2VFdmVudCA9IE1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+O1xuXG5jb25zdCBGRVRDSF9CT0FSRFMgPSBncWxgXG4gIHF1ZXJ5IGZldGNoQm9hcmRzKCRwYWdlOiBJbnQpIHtcbiAgICBmZXRjaEJvYXJkcyhwYWdlOiAkcGFnZSkge1xuICAgICAgbnVtYmVyXG4gICAgICB3cml0ZXJcbiAgICAgIHRpdGxlXG4gICAgICBjb250ZW50c1xuICAgIH1cbiAgfVxuYDtcbmNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuY29uc3QgQ29sdW1uID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAyMHB4O1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmRiZGJkO1xuICBsaW5lLWhlaWdodDogNDBweDtcbmA7XG5jb25zdCBDb2x1bW5CdG4gPSBzdHlsZWQuYnV0dG9uYFxuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDQwcHg7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21tZW50RWRpdFBhZ2UoKSB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnk8UGljazxJUXVlcnksIFwiZmV0Y2hCb2FyZHNcIj4sIElRdWVyeUZldGNoQm9hcmRzQXJncz4oXG4gICAgRkVUQ0hfQk9BUkRTXG4gICk7XG5cbiAgY29uc3QgW2VkaXRJZCwgc2V0RWRpdElkXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IG9uQ2xpY2tFZGl0ID0gKGV2ZW50OiBDdXN0b21Nb3VzZUV2ZW50KSA9PiB7XG4gICAgc2V0RWRpdElkKE51bWJlcihldmVudC5jdXJyZW50VGFyZ2V0LmlkKSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtkYXRhPy5mZXRjaEJvYXJkcz8ubWFwKChlbCwgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2VsLm51bWJlcn0+XG4gICAgICAgICAge2luZGV4ICE9PSBlZGl0SWQgJiYgKFxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPENvbHVtbj57ZWwud3JpdGVyfTwvQ29sdW1uPlxuICAgICAgICAgICAgICA8Q29sdW1uPntlbC50aXRsZX08L0NvbHVtbj5cbiAgICAgICAgICAgICAgPENvbHVtbkJ0biBpZD17U3RyaW5nKGluZGV4KX0gb25DbGljaz17b25DbGlja0VkaXR9PlxuICAgICAgICAgICAgICAgIOyImOygle2VmOq4sFxuICAgICAgICAgICAgICA8L0NvbHVtbkJ0bj5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICl9XG4gICAgICAgICAge2luZGV4ID09PSBlZGl0SWQgJiYgKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAg7IiY7KCV7ZWgIOuCtOyaqTogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiZ3FsIiwidXNlUXVlcnkiLCJzdHlsZWQiLCJ1c2VTdGF0ZSIsIkZFVENIX0JPQVJEUyIsIlJvdyIsImRpdiIsIkNvbHVtbiIsIkNvbHVtbkJ0biIsImJ1dHRvbiIsIkNvbW1lbnRFZGl0UGFnZSIsImRhdGEiLCJlZGl0SWQiLCJzZXRFZGl0SWQiLCJvbkNsaWNrRWRpdCIsImV2ZW50IiwiTnVtYmVyIiwiY3VycmVudFRhcmdldCIsImlkIiwiZmV0Y2hCb2FyZHMiLCJtYXAiLCJlbCIsImluZGV4Iiwid3JpdGVyIiwidGl0bGUiLCJTdHJpbmciLCJvbkNsaWNrIiwiaW5wdXQiLCJ0eXBlIiwibnVtYmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/15-01-comment-edit-01/index.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/15-01-comment-edit-01/index.tsx"));
module.exports = __webpack_exports__;

})();