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
exports.id = "pages/31-04-crp-reflow-repaint-with-boards";
exports.ids = ["pages/31-04-crp-reflow-repaint-with-boards"];
exports.modules = {

/***/ "./pages/31-04-crp-reflow-repaint-with-boards/index.tsx":
/*!**************************************************************!*\
  !*** ./pages/31-04-crp-reflow-repaint-with-boards/index.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MapBoardsPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst FETCH_BOARDS = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  query fetchBoards($page: Int) {\n    fetchBoards(page: $page) {\n      _id\n      writer\n      title\n      contents\n    }\n  }\n`;\nfunction MapBoardsPage() {\n    var ref;\n    const { data , refetch  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(FETCH_BOARDS);\n    const onClickPage = (event)=>{\n        void refetch({\n            page: Number(event.currentTarget.id)\n        });\n        console.log(event.currentTarget.id);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            data === null || data === void 0 ? void 0 : (ref = data.fetchBoards) === null || ref === void 0 ? void 0 : ref.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        height: \"30px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            style: {\n                                margin: \"10px\"\n                            },\n                            children: el.writer\n                        }, void 0, false, {\n                            fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/31-04-crp-reflow-repaint-with-boards/index.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            style: {\n                                margin: \"10px\"\n                            },\n                            children: el.title\n                        }, void 0, false, {\n                            fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/31-04-crp-reflow-repaint-with-boards/index.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, el._id, true, {\n                    fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/31-04-crp-reflow-repaint-with-boards/index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this)\n            ),\n            Array(10).fill(1).map((_el, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    style: {\n                        padding: \"5px\",\n                        margin: \"10px\"\n                    },\n                    id: String(index + 1),\n                    onClick: onClickPage,\n                    children: index + 1\n                }, index + 1, false, {\n                    fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/31-04-crp-reflow-repaint-with-boards/index.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                }, this)\n            )\n        ]\n    }, void 0, true));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8zMS0wNC1jcnAtcmVmbG93LXJlcGFpbnQtd2l0aC1ib2FyZHMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4QztBQVM5QyxLQUFLLENBQUNFLFlBQVksR0FBR0YsK0NBQUcsQ0FBQzs7Ozs7Ozs7O0FBU3pCO0FBRWUsUUFBUSxDQUFDRyxhQUFhLEdBQUcsQ0FBQztRQVlsQ0MsR0FBaUI7SUFYdEIsS0FBSyxDQUFDLENBQUMsQ0FBQ0EsSUFBSSxHQUFFQyxPQUFPLEVBQUMsQ0FBQyxHQUFHSix3REFBUSxDQUdoQ0MsWUFBWTtJQUVkLEtBQUssQ0FBQ0ksV0FBVyxJQUFJQyxLQUF1QixHQUFLLENBQUM7UUFDaEQsSUFBSSxDQUFDRixPQUFPLENBQUMsQ0FBQztZQUFDRyxJQUFJLEVBQUVDLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDRyxhQUFhLENBQUNDLEVBQUU7UUFBRSxDQUFDO1FBQ3JEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sS0FBSyxDQUFDRyxhQUFhLENBQUNDLEVBQUU7SUFDcEMsQ0FBQztJQUNELE1BQU07O1lBRURQLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxJQUFJLENBQUpBLENBQWlCLElBQWpCQSxHQUFpQixHQUFqQkEsSUFBSSxDQUFFVSxXQUFXLGNBQWpCVixHQUFpQixLQUFqQkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsR0FBaUIsQ0FBRVcsR0FBRyxFQUFFQyxFQUFFLCtFQUN4QkMsQ0FBRztvQkFBY0MsS0FBSyxFQUFFLENBQUM7d0JBQUNDLE1BQU0sRUFBRSxDQUFNO29CQUFDLENBQUM7O29HQUN4Q0MsQ0FBSTs0QkFBQ0YsS0FBSyxFQUFFLENBQUM7Z0NBQUNHLE1BQU0sRUFBRSxDQUFNOzRCQUFDLENBQUM7c0NBQUdMLEVBQUUsQ0FBQ00sTUFBTTs7Ozs7O29HQUMxQ0YsQ0FBSTs0QkFBQ0YsS0FBSyxFQUFFLENBQUM7Z0NBQUNHLE1BQU0sRUFBRSxDQUFNOzRCQUFDLENBQUM7c0NBQUdMLEVBQUUsQ0FBQ08sS0FBSzs7Ozs7OzttQkFGbENQLEVBQUUsQ0FBQ1EsR0FBRzs7Ozs7O1lBTWpCQyxLQUFLLENBQUMsRUFBRSxFQUNOQyxJQUFJLENBQUMsQ0FBQyxFQUNOWCxHQUFHLEVBQUVZLEdBQUcsRUFBRUMsS0FBSywrRUFDYlIsQ0FBSTtvQkFFSEYsS0FBSyxFQUFFLENBQUM7d0JBQUNXLE9BQU8sRUFBRSxDQUFLO3dCQUFFUixNQUFNLEVBQUUsQ0FBTTtvQkFBQyxDQUFDO29CQUN6Q1YsRUFBRSxFQUFFbUIsTUFBTSxDQUFDRixLQUFLLEdBQUcsQ0FBQztvQkFDcEJHLE9BQU8sRUFBRXpCLFdBQVc7OEJBRW5Cc0IsS0FBSyxHQUFHLENBQUM7bUJBTExBLEtBQUssR0FBRyxDQUFDOzs7Ozs7OztBQVUxQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xhc3MvLi9wYWdlcy8zMS0wNC1jcnAtcmVmbG93LXJlcGFpbnQtd2l0aC1ib2FyZHMvaW5kZXgudHN4Pzg3OTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQge1xuICBJUXVlcnksXG4gIElRdWVyeUZldGNoQm9hcmRzQXJncyxcbn0gZnJvbSBcIi4uLy4uL3NyYy9jb21tb25zL3R5cGVzL2dlbmVyYXRlZC90eXBlc1wiO1xuaW1wb3J0IHsgTW91c2VFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHR5cGUgQ3VzdG9tTW91c2VFdmVudCA9IE1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+O1xuXG5jb25zdCBGRVRDSF9CT0FSRFMgPSBncWxgXG4gIHF1ZXJ5IGZldGNoQm9hcmRzKCRwYWdlOiBJbnQpIHtcbiAgICBmZXRjaEJvYXJkcyhwYWdlOiAkcGFnZSkge1xuICAgICAgX2lkXG4gICAgICB3cml0ZXJcbiAgICAgIHRpdGxlXG4gICAgICBjb250ZW50c1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFwQm9hcmRzUGFnZSgpIHtcbiAgY29uc3QgeyBkYXRhLCByZWZldGNoIH0gPSB1c2VRdWVyeTxcbiAgICBQaWNrPElRdWVyeSwgXCJmZXRjaEJvYXJkc1wiPixcbiAgICBJUXVlcnlGZXRjaEJvYXJkc0FyZ3NcbiAgPihGRVRDSF9CT0FSRFMpO1xuXG4gIGNvbnN0IG9uQ2xpY2tQYWdlID0gKGV2ZW50OiBDdXN0b21Nb3VzZUV2ZW50KSA9PiB7XG4gICAgdm9pZCByZWZldGNoKHsgcGFnZTogTnVtYmVyKGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQpIH0pO1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7ZGF0YT8uZmV0Y2hCb2FyZHM/Lm1hcCgoZWwpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2VsLl9pZH0gc3R5bGU9e3sgaGVpZ2h0OiBcIjMwcHhcIiB9fT5cbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW46IFwiMTBweFwiIH19PntlbC53cml0ZXJ9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbjogXCIxMHB4XCIgfX0+e2VsLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cblxuICAgICAge0FycmF5KDEwKVxuICAgICAgICAuZmlsbCgxKVxuICAgICAgICAubWFwKChfZWwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGtleT17aW5kZXggKyAxfVxuICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogXCI1cHhcIiwgbWFyZ2luOiBcIjEwcHhcIiB9fVxuICAgICAgICAgICAgaWQ9e1N0cmluZyhpbmRleCArIDEpfVxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja1BhZ2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2luZGV4ICsgMX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICkpfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImdxbCIsInVzZVF1ZXJ5IiwiRkVUQ0hfQk9BUkRTIiwiTWFwQm9hcmRzUGFnZSIsImRhdGEiLCJyZWZldGNoIiwib25DbGlja1BhZ2UiLCJldmVudCIsInBhZ2UiLCJOdW1iZXIiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hCb2FyZHMiLCJtYXAiLCJlbCIsImRpdiIsInN0eWxlIiwiaGVpZ2h0Iiwic3BhbiIsIm1hcmdpbiIsIndyaXRlciIsInRpdGxlIiwiX2lkIiwiQXJyYXkiLCJmaWxsIiwiX2VsIiwiaW5kZXgiLCJwYWRkaW5nIiwiU3RyaW5nIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/31-04-crp-reflow-repaint-with-boards/index.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

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
var __webpack_exports__ = (__webpack_exec__("./pages/31-04-crp-reflow-repaint-with-boards/index.tsx"));
module.exports = __webpack_exports__;

})();