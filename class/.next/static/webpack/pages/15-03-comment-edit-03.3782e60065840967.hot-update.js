"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/15-03-comment-edit-03",{

/***/ "./src/components/units/15-board-commnet-item/index.tsx":
/*!**************************************************************!*\
  !*** ./src/components/units/15-board-commnet-item/index.tsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BoardCommentItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  align-items: center;\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-size: 20px;\\n  width: 40%;\\n  height: 40px;\\n  border-bottom: 1px solid #bdbdbd;\\n  line-height: 40px;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 20%;\\n  height: 40px;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar Row = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject());\n_c = Row;\nvar Column = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div(_templateObject1());\n_c1 = Column;\nvar ColumnBtn = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button(_templateObject2());\n_c2 = ColumnBtn;\nfunction BoardCommentItem(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), isEdit = ref[0], setIsEdit = ref[1];\n    var onClickEdit = function() {\n        setIsEdit(true);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            isEdit === false && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                        children: props.el.writer\n                    }, void 0, false, {\n                        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/src/components/units/15-board-commnet-item/index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                        children: props.el.title\n                    }, void 0, false, {\n                        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/src/components/units/15-board-commnet-item/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColumnBtn, {\n                        onClick: onClickEdit,\n                        children: \"수정하기\"\n                    }, void 0, false, {\n                        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/src/components/units/15-board-commnet-item/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/src/components/units/15-board-commnet-item/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this),\n            isEdit === true && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"수정할 내용: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/src/components/units/15-board-commnet-item/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 19\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/src/components/units/15-board-commnet-item/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this)\n        ]\n    }, el.number, true, {\n        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/src/components/units/15-board-commnet-item/index.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this));\n};\n_s(BoardCommentItem, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c3 = BoardCommentItem;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Row\");\n$RefreshReg$(_c1, \"Column\");\n$RefreshReg$(_c2, \"ColumnBtn\");\n$RefreshReg$(_c3, \"BoardCommentItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91bml0cy8xNS1ib2FyZC1jb21tbmV0LWl0ZW0vaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0M7QUFFSTs7Ozs7Ozs7Ozs7OztRQUtiLENBR3ZCOzs7Ozs7Ozs7UUFDMEIsQ0FNMUI7Ozs7Ozs7OztRQUNnQyxDQUdoQzs7Ozs7Ozs7QUFkQSxHQUFLLENBQUNFLEdBQUcsR0FBR0QsMkRBQVU7S0FBaEJDLEdBQUc7QUFJVCxHQUFLLENBQUNFLE1BQU0sR0FBR0gsMkRBQVU7TUFBbkJHLE1BQU07QUFPWixHQUFLLENBQUNDLFNBQVMsR0FBR0osOERBQWE7TUFBekJJLFNBQVM7QUFLQSxRQUFRLENBQUNFLGdCQUFnQixDQUFDQyxLQUFhLEVBQUUsQ0FBQzs7SUFDdkQsR0FBSyxDQUF1QlIsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBL0JTLE1BQU0sR0FBZVQsR0FBVyxLQUF4QlUsU0FBUyxHQUFJVixHQUFXO0lBQ3ZDLEdBQUssQ0FBQ1csV0FBVyxHQUFHLFFBQ3RCLEdBRDRCLENBQUM7UUFDekJELFNBQVMsQ0FBQyxJQUFJO0lBQ2hCLENBQUM7SUFDRCxNQUFNLDZFQUNIUCxDQUFHOztZQUNETSxNQUFNLEtBQUssS0FBSyxnRkFDZFAsR0FBRzs7Z0dBQ0RFLE1BQU07a0NBQUVJLEtBQUssQ0FBQ0ksRUFBRSxDQUFDQyxNQUFNOzs7Ozs7Z0dBQ3ZCVCxNQUFNO2tDQUFFSSxLQUFLLENBQUNJLEVBQUUsQ0FBQ0UsS0FBSzs7Ozs7O2dHQUN0QlQsU0FBUzt3QkFBQ1UsT0FBTyxFQUFFSixXQUFXO2tDQUFFLENBQUk7Ozs7Ozs7Ozs7OztZQUdoQ0YsTUFBRixLQUFLLElBQUksZ0ZBQ2JOLENBQUc7O29CQUFDLENBQ0s7Z0dBQUNhLENBQUs7d0JBQUNDLElBQUksRUFBQyxDQUFNOzs7Ozs7Ozs7Ozs7O09BVnRCTCxFQUFFLENBQUNNLE1BQU07Ozs7O0FBZXZCLENBQUM7R0FyQnVCWCxnQkFBZ0I7TUFBaEJBLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy91bml0cy8xNS1ib2FyZC1jb21tbmV0LWl0ZW0vaW5kZXgudHN4P2ZiYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElCb2FyZFJldHVybiB9IGZyb20gXCIuLi8uLi8uLi9jb21tb25zL3R5cGVzL2dlbmVyYXRlZC90eXBlc1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwiQGVtb3Rpb24vc3R5bGVkXCI7XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICBlbDogSUJvYXJkUmV0dXJuO1xufVxuY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5jb25zdCBDb2x1bW4gPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDIwcHg7XG4gIHdpZHRoOiA0MCU7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiZGJkYmQ7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuYDtcbmNvbnN0IENvbHVtbkJ0biA9IHN0eWxlZC5idXR0b25gXG4gIHdpZHRoOiAyMCU7XG4gIGhlaWdodDogNDBweDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkQ29tbWVudEl0ZW0ocHJvcHM6IElQcm9wcykge1xuICBjb25zdCBbaXNFZGl0LCBzZXRJc0VkaXRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IG9uQ2xpY2tFZGl0ID0gKCkgPT4ge1xuICAgIHNldElzRWRpdCh0cnVlKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGtleT17ZWwubnVtYmVyfT5cbiAgICAgIHtpc0VkaXQgPT09IGZhbHNlICYmIChcbiAgICAgICAgPFJvdz5cbiAgICAgICAgICA8Q29sdW1uPntwcm9wcy5lbC53cml0ZXJ9PC9Db2x1bW4+XG4gICAgICAgICAgPENvbHVtbj57cHJvcHMuZWwudGl0bGV9PC9Db2x1bW4+XG4gICAgICAgICAgPENvbHVtbkJ0biBvbkNsaWNrPXtvbkNsaWNrRWRpdH0+7IiY7KCV7ZWY6riwPC9Db2x1bW5CdG4+XG4gICAgICAgIDwvUm93PlxuICAgICAgKX1cbiAgICAgIHtpc0VkaXQgPT09IHRydWUgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIOyImOygle2VoCDrgrTsmqk6IDxpbnB1dCB0eXBlPVwidGV4dFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlZCIsIlJvdyIsImRpdiIsIkNvbHVtbiIsIkNvbHVtbkJ0biIsImJ1dHRvbiIsIkJvYXJkQ29tbWVudEl0ZW0iLCJwcm9wcyIsImlzRWRpdCIsInNldElzRWRpdCIsIm9uQ2xpY2tFZGl0IiwiZWwiLCJ3cml0ZXIiLCJ0aXRsZSIsIm9uQ2xpY2siLCJpbnB1dCIsInR5cGUiLCJudW1iZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/units/15-board-commnet-item/index.tsx\n");

/***/ })

});