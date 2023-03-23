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
exports.id = "pages/15-03-comment-edit-03";
exports.ids = ["pages/15-03-comment-edit-03"];
exports.modules = {

/***/ "./pages/15-03-comment-edit-03/index.tsx":
/*!***********************************************!*\
  !*** ./pages/15-03-comment-edit-03/index.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CommentEditPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_units_15_board_commnet_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/components/units/15-board-commnet-item */ \"./src/components/units/15-board-commnet-item/index.tsx\");\n\n\n\nconst FETCH_BOARDS = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  query fetchBoards($page: Int) {\n    fetchBoards(page: $page) {\n      number\n      writer\n      title\n      contents\n    }\n  }\n`;\nfunction CommentEditPage() {\n    var ref;\n    const { data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(FETCH_BOARDS);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: data === null || data === void 0 ? void 0 : (ref = data.fetchBoards) === null || ref === void 0 ? void 0 : ref.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_units_15_board_commnet_item__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                el: el\n            }, el.number, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/15-03-comment-edit-03/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this)\n        )\n    }, void 0, false));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8xNS0wMy1jb21tZW50LWVkaXQtMDMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEM7QUFLaUM7QUFFL0UsS0FBSyxDQUFDRyxZQUFZLEdBQUdILCtDQUFHLENBQUM7Ozs7Ozs7OztBQVN6QjtBQUVlLFFBQVEsQ0FBQ0ksZUFBZSxHQUFHLENBQUM7UUFPcENDLEdBQWlCO0lBTnRCLEtBQUssQ0FBQyxDQUFDLENBQUNBLElBQUksRUFBQyxDQUFDLEdBQUdKLHdEQUFRLENBQ3ZCRSxZQUFZO0lBR2QsTUFBTTtrQkFFREUsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLElBQUksQ0FBSkEsQ0FBaUIsSUFBakJBLEdBQWlCLEdBQWpCQSxJQUFJLENBQUVDLFdBQVcsY0FBakJELEdBQWlCLEtBQWpCQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxHQUFpQixDQUFFRSxHQUFHLEVBQUVDLEVBQUUsK0VBQ3hCTixtRkFBZ0I7Z0JBQWlCTSxFQUFFLEVBQUVBLEVBQUU7ZUFBakJBLEVBQUUsQ0FBQ0MsTUFBTTs7Ozs7OztBQUl4QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xhc3MvLi9wYWdlcy8xNS0wMy1jb21tZW50LWVkaXQtMDMvaW5kZXgudHN4PzA4MzciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHtcbiAgSVF1ZXJ5LFxuICBJUXVlcnlGZXRjaEJvYXJkc0FyZ3MsXG59IGZyb20gXCIuLi8uLi9zcmMvY29tbW9ucy90eXBlcy9nZW5lcmF0ZWQvdHlwZXNcIjtcbmltcG9ydCBCb2FyZENvbW1lbnRJdGVtIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy91bml0cy8xNS1ib2FyZC1jb21tbmV0LWl0ZW1cIjtcblxuY29uc3QgRkVUQ0hfQk9BUkRTID0gZ3FsYFxuICBxdWVyeSBmZXRjaEJvYXJkcygkcGFnZTogSW50KSB7XG4gICAgZmV0Y2hCb2FyZHMocGFnZTogJHBhZ2UpIHtcbiAgICAgIG51bWJlclxuICAgICAgd3JpdGVyXG4gICAgICB0aXRsZVxuICAgICAgY29udGVudHNcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1lbnRFZGl0UGFnZSgpIHtcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeTxQaWNrPElRdWVyeSwgXCJmZXRjaEJvYXJkc1wiPiwgSVF1ZXJ5RmV0Y2hCb2FyZHNBcmdzPihcbiAgICBGRVRDSF9CT0FSRFNcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7ZGF0YT8uZmV0Y2hCb2FyZHM/Lm1hcCgoZWwpID0+IChcbiAgICAgICAgPEJvYXJkQ29tbWVudEl0ZW0ga2V5PXtlbC5udW1iZXJ9IGVsPXtlbH0gLz5cbiAgICAgICkpfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImdxbCIsInVzZVF1ZXJ5IiwiQm9hcmRDb21tZW50SXRlbSIsIkZFVENIX0JPQVJEUyIsIkNvbW1lbnRFZGl0UGFnZSIsImRhdGEiLCJmZXRjaEJvYXJkcyIsIm1hcCIsImVsIiwibnVtYmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/15-03-comment-edit-03/index.tsx\n");

/***/ }),

/***/ "./src/components/units/15-board-commnet-item/index.tsx":
/*!**************************************************************!*\
  !*** ./src/components/units/15-board-commnet-item/index.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BoardCommentItem)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Row = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`\n  display: flex;\n  align-items: center;\n`;\nconst Column = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().div)`\n  font-size: 20px;\n  width: 40%;\n  height: 40px;\n  border-bottom: 1px solid #bdbdbd;\n  line-height: 40px;\n`;\nconst ColumnBtn = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().button)`\n  width: 20%;\n  height: 40px;\n`;\nfunction BoardCommentItem(props) {\n    const { 0: isEdit , 1: setIsEdit  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const onClickEdit = ()=>{\n        setIsEdit(true);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            isEdit === false && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                        children: props.el.writer\n                    }, void 0, false, {\n                        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/src/components/units/15-board-commnet-item/index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                        children: props.el.title\n                    }, void 0, false, {\n                        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/src/components/units/15-board-commnet-item/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColumnBtn, {\n                        onClick: onClickEdit,\n                        children: \"수정하기\"\n                    }, void 0, false, {\n                        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/src/components/units/15-board-commnet-item/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/src/components/units/15-board-commnet-item/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this),\n            isEdit === true && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"수정할 내용: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/src/components/units/15-board-commnet-item/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 19\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/src/components/units/15-board-commnet-item/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/src/components/units/15-board-commnet-item/index.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91bml0cy8xNS1ib2FyZC1jb21tbmV0LWl0ZW0vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdDO0FBRUk7QUFLcEMsS0FBSyxDQUFDRSxHQUFHLEdBQUdELDREQUFVLENBQUM7OztBQUd2QjtBQUNBLEtBQUssQ0FBQ0csTUFBTSxHQUFHSCw0REFBVSxDQUFDOzs7Ozs7QUFNMUI7QUFDQSxLQUFLLENBQUNJLFNBQVMsR0FBR0osK0RBQWEsQ0FBQzs7O0FBR2hDO0FBRWUsUUFBUSxDQUFDTSxnQkFBZ0IsQ0FBQ0MsS0FBYSxFQUFFLENBQUM7SUFDdkQsS0FBSyxNQUFFQyxNQUFNLE1BQUVDLFNBQVMsTUFBSVYsK0NBQVEsQ0FBVSxLQUFLO0lBQ25ELEtBQUssQ0FBQ1csV0FBVyxPQUFTLENBQUM7UUFDekJELFNBQVMsQ0FBQyxJQUFJO0lBQ2hCLENBQUM7SUFDRCxNQUFNLDZFQUNIUCxDQUFHOztZQUNETSxNQUFNLEtBQUssS0FBSyxnRkFDZFAsR0FBRzs7Z0dBQ0RFLE1BQU07a0NBQUVJLEtBQUssQ0FBQ0ksRUFBRSxDQUFDQyxNQUFNOzs7Ozs7Z0dBQ3ZCVCxNQUFNO2tDQUFFSSxLQUFLLENBQUNJLEVBQUUsQ0FBQ0UsS0FBSzs7Ozs7O2dHQUN0QlQsU0FBUzt3QkFBQ1UsT0FBTyxFQUFFSixXQUFXO2tDQUFFLENBQUk7Ozs7Ozs7Ozs7OztZQUdoQ0YsTUFBRixLQUFLLElBQUksZ0ZBQ2JOLENBQUc7O29CQUFDLENBQ0s7Z0dBQUNhLENBQUs7d0JBQUNDLElBQUksRUFBQyxDQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsYXNzLy4vc3JjL2NvbXBvbmVudHMvdW5pdHMvMTUtYm9hcmQtY29tbW5ldC1pdGVtL2luZGV4LnRzeD9mYmI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJQm9hcmRSZXR1cm4gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9ucy90eXBlcy9nZW5lcmF0ZWQvdHlwZXNcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgZWw6IElCb2FyZFJldHVybjtcbn1cbmNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuY29uc3QgQ29sdW1uID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAyMHB4O1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmRiZGJkO1xuICBsaW5lLWhlaWdodDogNDBweDtcbmA7XG5jb25zdCBDb2x1bW5CdG4gPSBzdHlsZWQuYnV0dG9uYFxuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDQwcHg7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb2FyZENvbW1lbnRJdGVtKHByb3BzOiBJUHJvcHMpIHtcbiAgY29uc3QgW2lzRWRpdCwgc2V0SXNFZGl0XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3Qgb25DbGlja0VkaXQgPSAoKSA9PiB7XG4gICAgc2V0SXNFZGl0KHRydWUpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7aXNFZGl0ID09PSBmYWxzZSAmJiAoXG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbHVtbj57cHJvcHMuZWwud3JpdGVyfTwvQ29sdW1uPlxuICAgICAgICAgIDxDb2x1bW4+e3Byb3BzLmVsLnRpdGxlfTwvQ29sdW1uPlxuICAgICAgICAgIDxDb2x1bW5CdG4gb25DbGljaz17b25DbGlja0VkaXR9PuyImOygle2VmOq4sDwvQ29sdW1uQnRuPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICl9XG4gICAgICB7aXNFZGl0ID09PSB0cnVlICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICDsiJjsoJXtlaAg64K07JqpOiA8aW5wdXQgdHlwZT1cInRleHRcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZWQiLCJSb3ciLCJkaXYiLCJDb2x1bW4iLCJDb2x1bW5CdG4iLCJidXR0b24iLCJCb2FyZENvbW1lbnRJdGVtIiwicHJvcHMiLCJpc0VkaXQiLCJzZXRJc0VkaXQiLCJvbkNsaWNrRWRpdCIsImVsIiwid3JpdGVyIiwidGl0bGUiLCJvbkNsaWNrIiwiaW5wdXQiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/units/15-board-commnet-item/index.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/15-03-comment-edit-03/index.tsx"));
module.exports = __webpack_exports__;

})();