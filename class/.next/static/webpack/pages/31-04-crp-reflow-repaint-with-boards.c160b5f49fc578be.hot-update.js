"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/31-04-crp-reflow-repaint-with-boards",{

/***/ "./pages/31-04-crp-reflow-repaint-with-boards/index.tsx":
/*!**************************************************************!*\
  !*** ./pages/31-04-crp-reflow-repaint-with-boards/index.tsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MapBoardsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  query fetchBoards($page: Int) {\\n    fetchBoards(page: $page) {\\n      _id\\n      writer\\n      title\\n      contents\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar FETCH_BOARDS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject());\nfunction MapBoardsPage() {\n    var _this = this;\n    var ref;\n    _s();\n    var ref1 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(FETCH_BOARDS), data = ref1.data, refetch = ref1.refetch;\n    var onClickPage = function(event) {\n        void refetch({\n            page: Number(event.currentTarget.id)\n        });\n        console.log(event.currentTarget.id);\n    };\n    return(// style={{ height: \"30px\" }} => 리플로우 방지\n    // ex) 구글 이미지 검색\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            data === null || data === void 0 ? void 0 : (ref = data.fetchBoards) === null || ref === void 0 ? void 0 : ref.map(function(el) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        height: \"30px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            style: {\n                                margin: \"10px\"\n                            },\n                            children: el.writer\n                        }, void 0, false, {\n                            fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/31-04-crp-reflow-repaint-with-boards/index.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            style: {\n                                margin: \"10px\"\n                            },\n                            children: el.title\n                        }, void 0, false, {\n                            fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/31-04-crp-reflow-repaint-with-boards/index.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, el._id, true, {\n                    fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/31-04-crp-reflow-repaint-with-boards/index.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, _this);\n            }),\n            Array(10).fill(1).map(function(_el, index) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    style: {\n                        padding: \"5px\",\n                        margin: \"10px\"\n                    },\n                    id: String(index + 1),\n                    onClick: onClickPage,\n                    children: index + 1\n                }, index + 1, false, {\n                    fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/31-04-crp-reflow-repaint-with-boards/index.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 11\n                }, _this);\n            })\n        ]\n    }, void 0, true));\n};\n_s(MapBoardsPage, \"iCHd3sTq7va4oFuMT0A8VLN0ksc=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery\n    ];\n});\n_c = MapBoardsPage;\nvar _c;\n$RefreshReg$(_c, \"MapBoardsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8zMS0wNC1jcnAtcmVmbG93LXJlcGFpbnQtd2l0aC1ib2FyZHMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQThDOzs7Ozs7Ozs7Ozs7O1FBU3JCLENBU3pCOzs7Ozs7OztBQVRBLEdBQUssQ0FBQ0UsWUFBWSxHQUFHRixtREFBRztBQVdULFFBQVEsQ0FBQ0csYUFBYSxHQUFHLENBQUM7O1FBY2xDQyxHQUFpQjs7SUFidEIsR0FBSyxDQUFxQkgsSUFHWCxHQUhXQSx3REFBUSxDQUdoQ0MsWUFBWSxHQUhORSxJQUFJLEdBQWNILElBR1gsQ0FIUEcsSUFBSSxFQUFFQyxPQUFPLEdBQUtKLElBR1gsQ0FIREksT0FBTztJQUtyQixHQUFLLENBQUNDLFdBQVcsR0FBRyxRQUFRLENBQVBDLEtBQXVCLEVBQUssQ0FBQztRQUNoRCxJQUFJLENBQUNGLE9BQU8sQ0FBQyxDQUFDO1lBQUNHLElBQUksRUFBRUMsTUFBTSxDQUFDRixLQUFLLENBQUNHLGFBQWEsQ0FBQ0MsRUFBRTtRQUFFLENBQUM7UUFDckRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixLQUFLLENBQUNHLGFBQWEsQ0FBQ0MsRUFBRTtJQUNwQyxDQUFDO0lBQ0QsTUFBTSxDQUNKLEVBQXdDO0lBQzVCLEVBQUk7OztZQUViUCxJQUFJLGFBQUpBLElBQUksS0FBSkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsSUFBSSxDQUFKQSxDQUFpQixJQUFqQkEsR0FBaUIsR0FBakJBLElBQUksQ0FBRVUsV0FBVyxjQUFqQlYsR0FBaUIsS0FBakJBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLEdBQWlCLENBQUVXLEdBQUcsQ0FBQyxRQUFRLENBQVBDLEVBQUU7OEJBQ3pCLE1BQU0sK0RBQUxDLENBQUc7b0JBQWNDLEtBQUssRUFBRSxDQUFDO3dCQUFDQyxNQUFNLEVBQUUsQ0FBTTtvQkFBQyxDQUFDOztvR0FDeENDLENBQUk7NEJBQUNGLEtBQUssRUFBRSxDQUFDO2dDQUFDRyxNQUFNLEVBQUUsQ0FBTTs0QkFBQyxDQUFDO3NDQUFHTCxFQUFFLENBQUNNLE1BQU07Ozs7OztvR0FDMUNGLENBQUk7NEJBQUNGLEtBQUssRUFBRSxDQUFDO2dDQUFDRyxNQUFNLEVBQUUsQ0FBTTs0QkFBQyxDQUFDO3NDQUFHTCxFQUFFLENBQUNPLEtBQUs7Ozs7Ozs7bUJBRmxDUCxFQUFFLENBQUNRLEdBQUc7Ozs7OztZQU1qQkMsS0FBSyxDQUFDLEVBQUUsRUFDTkMsSUFBSSxDQUFDLENBQUMsRUFDTlgsR0FBRyxDQUFDLFFBQVEsQ0FBUFksR0FBRyxFQUFFQyxLQUFLOzhCQUNkLE1BQ1YsQ0FBQyw4REFEVVIsQ0FBSTtvQkFFSEYsS0FBSyxFQUFFLENBQUM7d0JBQUNXLE9BQU8sRUFBRSxDQUFLO3dCQUFFUixNQUFNLEVBQUUsQ0FBTTtvQkFBQyxDQUFDO29CQUN6Q1YsRUFBRSxFQUFFbUIsTUFBTSxDQUFDRixLQUFLLEdBQUcsQ0FBQztvQkFDcEJHLE9BQU8sRUFBRXpCLFdBQVc7OEJBRW5Cc0IsS0FBSyxHQUFHLENBQUM7bUJBTExBLEtBQUssR0FBRyxDQUFDOzs7Ozs7OztBQVUxQixDQUFDO0dBbkN1QnpCLGFBQWE7O1FBQ1RGLG9EQUFROzs7S0FEWkUsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy8zMS0wNC1jcnAtcmVmbG93LXJlcGFpbnQtd2l0aC1ib2FyZHMvaW5kZXgudHN4Pzg3OTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5pbXBvcnQge1xuICBJUXVlcnksXG4gIElRdWVyeUZldGNoQm9hcmRzQXJncyxcbn0gZnJvbSBcIi4uLy4uL3NyYy9jb21tb25zL3R5cGVzL2dlbmVyYXRlZC90eXBlc1wiO1xuaW1wb3J0IHsgTW91c2VFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHR5cGUgQ3VzdG9tTW91c2VFdmVudCA9IE1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+O1xuXG5jb25zdCBGRVRDSF9CT0FSRFMgPSBncWxgXG4gIHF1ZXJ5IGZldGNoQm9hcmRzKCRwYWdlOiBJbnQpIHtcbiAgICBmZXRjaEJvYXJkcyhwYWdlOiAkcGFnZSkge1xuICAgICAgX2lkXG4gICAgICB3cml0ZXJcbiAgICAgIHRpdGxlXG4gICAgICBjb250ZW50c1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFwQm9hcmRzUGFnZSgpIHtcbiAgY29uc3QgeyBkYXRhLCByZWZldGNoIH0gPSB1c2VRdWVyeTxcbiAgICBQaWNrPElRdWVyeSwgXCJmZXRjaEJvYXJkc1wiPixcbiAgICBJUXVlcnlGZXRjaEJvYXJkc0FyZ3NcbiAgPihGRVRDSF9CT0FSRFMpO1xuXG4gIGNvbnN0IG9uQ2xpY2tQYWdlID0gKGV2ZW50OiBDdXN0b21Nb3VzZUV2ZW50KSA9PiB7XG4gICAgdm9pZCByZWZldGNoKHsgcGFnZTogTnVtYmVyKGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQpIH0pO1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LmN1cnJlbnRUYXJnZXQuaWQpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIC8vIHN0eWxlPXt7IGhlaWdodDogXCIzMHB4XCIgfX0gPT4g66as7ZSM66Gc7JqwIOuwqeyngFxuICAgIC8vIGV4KSDqtazquIAg7J2066+47KeAIOqygOyDiVxuICAgIDw+XG4gICAgICB7ZGF0YT8uZmV0Y2hCb2FyZHM/Lm1hcCgoZWwpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2VsLl9pZH0gc3R5bGU9e3sgaGVpZ2h0OiBcIjMwcHhcIiB9fT5cbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW46IFwiMTBweFwiIH19PntlbC53cml0ZXJ9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbjogXCIxMHB4XCIgfX0+e2VsLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cblxuICAgICAge0FycmF5KDEwKVxuICAgICAgICAuZmlsbCgxKVxuICAgICAgICAubWFwKChfZWwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgIGtleT17aW5kZXggKyAxfVxuICAgICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogXCI1cHhcIiwgbWFyZ2luOiBcIjEwcHhcIiB9fVxuICAgICAgICAgICAgaWQ9e1N0cmluZyhpbmRleCArIDEpfVxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja1BhZ2V9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2luZGV4ICsgMX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICkpfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImdxbCIsInVzZVF1ZXJ5IiwiRkVUQ0hfQk9BUkRTIiwiTWFwQm9hcmRzUGFnZSIsImRhdGEiLCJyZWZldGNoIiwib25DbGlja1BhZ2UiLCJldmVudCIsInBhZ2UiLCJOdW1iZXIiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hCb2FyZHMiLCJtYXAiLCJlbCIsImRpdiIsInN0eWxlIiwiaGVpZ2h0Iiwic3BhbiIsIm1hcmdpbiIsIndyaXRlciIsInRpdGxlIiwiX2lkIiwiQXJyYXkiLCJmaWxsIiwiX2VsIiwiaW5kZXgiLCJwYWRkaW5nIiwiU3RyaW5nIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/31-04-crp-reflow-repaint-with-boards/index.tsx\n");

/***/ })

});