"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/15-01-comment-edit-01",{

/***/ "./pages/15-01-comment-edit-01/index.tsx":
/*!***********************************************!*\
  !*** ./pages/15-01-comment-edit-01/index.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CommentEditPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  query fetchBoards($page: Int) {\\n    fetchBoards(page: $page) {\\n      number\\n      writer\\n      title\\n      contents\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  display: flex;\\n  align-items: center;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  font-size: 20px;\\n  width: 40%;\\n  height: 40px;\\n  border-bottom: 1px solid #bdbdbd;\\n  line-height: 40px;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  width: 20%;\\n  height: 40px;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar FETCH_BOARDS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject());\nvar Row = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject1());\n_c = Row;\nvar Column = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div(_templateObject2());\n_c1 = Column;\nvar ColumnBtn = _emotion_styled__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject3());\n_c2 = ColumnBtn;\nfunction CommentEditPage() {\n    var _this = this;\n    var ref;\n    _s();\n    var data = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)(FETCH_BOARDS).data;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1), editId = ref1[0], setEditId = ref1[1];\n    var onClickEdit = function(event) {\n        setEditId(Number(event.currentTarget.id));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: data === null || data === void 0 ? void 0 : (ref = data.fetchBoards) === null || ref === void 0 ? void 0 : ref.map(function(el, index) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    index !== editId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                                children: el.writer\n                            }, void 0, false, {\n                                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/15-01-comment-edit-01/index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Column, {\n                                children: el.title\n                            }, void 0, false, {\n                                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/15-01-comment-edit-01/index.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColumnBtn, {\n                                id: String(index),\n                                onClick: onClickEdit,\n                                children: \"수정하기\"\n                            }, void 0, false, {\n                                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/15-01-comment-edit-01/index.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/15-01-comment-edit-01/index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, _this),\n                    index === editId && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"수정할 내용: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\"\n                            }, void 0, false, {\n                                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/15-01-comment-edit-01/index.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 23\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/15-01-comment-edit-01/index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, el.number, true, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/15-01-comment-edit-01/index.tsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false));\n};\n_s(CommentEditPage, \"b7kduw315HphpgnGDs8aDzyZum4=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery\n    ];\n});\n_c3 = CommentEditPage;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Row\");\n$RefreshReg$(_c1, \"Column\");\n$RefreshReg$(_c2, \"ColumnBtn\");\n$RefreshReg$(_c3, \"CommentEditPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8xNS0wMS1jb21tZW50LWVkaXQtMDEvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQThDO0FBQ1Y7QUFLUTs7Ozs7Ozs7Ozs7OztRQUduQixDQVN6Qjs7Ozs7Ozs7O1FBQ3VCLENBR3ZCOzs7Ozs7Ozs7UUFDMEIsQ0FNMUI7Ozs7Ozs7OztRQUNnQyxDQUdoQzs7Ozs7Ozs7QUF4QkEsR0FBSyxDQUFDSSxZQUFZLEdBQUdKLG1EQUFHO0FBVXhCLEdBQUssQ0FBQ0ssR0FBRyxHQUFHSCwyREFBVTtLQUFoQkcsR0FBRztBQUlULEdBQUssQ0FBQ0UsTUFBTSxHQUFHTCwyREFBVTtNQUFuQkssTUFBTTtBQU9aLEdBQUssQ0FBQ0MsU0FBUyxHQUFHTiw4REFBYTtNQUF6Qk0sU0FBUztBQUtBLFFBQVEsQ0FBQ0UsZUFBZSxHQUFHLENBQUM7O1FBWXBDQyxHQUFpQjs7SUFYdEIsR0FBSyxDQUFHQSxJQUFJLEdBQUtWLHdEQUFRLENBQ3ZCRyxZQUFZLEVBRE5PLElBQUk7SUFJWixHQUFLLENBQXVCUixJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUEvQlMsTUFBTSxHQUFlVCxJQUFXLEtBQXhCVSxTQUFTLEdBQUlWLElBQVc7SUFFdkMsR0FBSyxDQUFDVyxXQUFXLEdBQUcsUUFBUSxDQUFQQyxLQUF1QixFQUFLLENBQUM7UUFDaERGLFNBQVMsQ0FBQ0csTUFBTSxDQUFDRCxLQUFLLENBQUNFLGFBQWEsQ0FBQ0MsRUFBRTtJQUN6QyxDQUFDO0lBQ0QsTUFBTTtrQkFFRFAsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLElBQUksQ0FBSkEsQ0FBaUIsSUFBakJBLEdBQWlCLEdBQWpCQSxJQUFJLENBQUVRLFdBQVcsY0FBakJSLEdBQWlCLEtBQWpCQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxHQUFpQixDQUFFUyxHQUFHLENBQUMsUUFBUSxDQUFQQyxFQUFFLEVBQUVDLEtBQUs7MEJBQ2hDLE1BQU0sK0RBQUxoQixDQUFHOztvQkFDRGdCLEtBQUssS0FBS1YsTUFBTSxnRkFDZFAsR0FBRzs7d0dBQ0RFLE1BQU07MENBQUVjLEVBQUUsQ0FBQ0UsTUFBTTs7Ozs7O3dHQUNqQmhCLE1BQU07MENBQUVjLEVBQUUsQ0FBQ0csS0FBSzs7Ozs7O3dHQUNoQmhCLFNBQVM7Z0NBQUNVLEVBQUUsRUFBRU8sTUFBTSxDQUFDSCxLQUFLO2dDQUFHSSxPQUFPLEVBQUVaLFdBQVc7MENBQUUsQ0FFcEQ7Ozs7Ozs7Ozs7OztvQkFHSFEsS0FBSyxLQUFLVixNQUFNLGdGQUNkTixDQUFHOzs0QkFBQyxDQUNLO3dHQUFDcUIsQ0FBSztnQ0FBQ0MsSUFBSSxFQUFDLENBQU07Ozs7Ozs7Ozs7Ozs7ZUFadEJQLEVBQUUsQ0FBQ1EsTUFBTTs7Ozs7OztBQW1CM0IsQ0FBQztHQWhDdUJuQixlQUFlOztRQUNwQlQsb0RBQVE7OztNQURIUyxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzLzE1LTAxLWNvbW1lbnQtZWRpdC0wMS9pbmRleC50c3g/YzVhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7XG4gIElRdWVyeSxcbiAgSVF1ZXJ5RmV0Y2hCb2FyZHNBcmdzLFxufSBmcm9tIFwiLi4vLi4vc3JjL2NvbW1vbnMvdHlwZXMvZ2VuZXJhdGVkL3R5cGVzXCI7XG5pbXBvcnQgeyBNb3VzZUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHR5cGUgQ3VzdG9tTW91c2VFdmVudCA9IE1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+O1xuXG5jb25zdCBGRVRDSF9CT0FSRFMgPSBncWxgXG4gIHF1ZXJ5IGZldGNoQm9hcmRzKCRwYWdlOiBJbnQpIHtcbiAgICBmZXRjaEJvYXJkcyhwYWdlOiAkcGFnZSkge1xuICAgICAgbnVtYmVyXG4gICAgICB3cml0ZXJcbiAgICAgIHRpdGxlXG4gICAgICBjb250ZW50c1xuICAgIH1cbiAgfVxuYDtcbmNvbnN0IFJvdyA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuY29uc3QgQ29sdW1uID0gc3R5bGVkLmRpdmBcbiAgZm9udC1zaXplOiAyMHB4O1xuICB3aWR0aDogNDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmRiZGJkO1xuICBsaW5lLWhlaWdodDogNDBweDtcbmA7XG5jb25zdCBDb2x1bW5CdG4gPSBzdHlsZWQuYnV0dG9uYFxuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDQwcHg7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21tZW50RWRpdFBhZ2UoKSB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnk8UGljazxJUXVlcnksIFwiZmV0Y2hCb2FyZHNcIj4sIElRdWVyeUZldGNoQm9hcmRzQXJncz4oXG4gICAgRkVUQ0hfQk9BUkRTXG4gICk7XG5cbiAgY29uc3QgW2VkaXRJZCwgc2V0RWRpdElkXSA9IHVzZVN0YXRlKDEpO1xuXG4gIGNvbnN0IG9uQ2xpY2tFZGl0ID0gKGV2ZW50OiBDdXN0b21Nb3VzZUV2ZW50KSA9PiB7XG4gICAgc2V0RWRpdElkKE51bWJlcihldmVudC5jdXJyZW50VGFyZ2V0LmlkKSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtkYXRhPy5mZXRjaEJvYXJkcz8ubWFwKChlbCwgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2VsLm51bWJlcn0+XG4gICAgICAgICAge2luZGV4ICE9PSBlZGl0SWQgJiYgKFxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPENvbHVtbj57ZWwud3JpdGVyfTwvQ29sdW1uPlxuICAgICAgICAgICAgICA8Q29sdW1uPntlbC50aXRsZX08L0NvbHVtbj5cbiAgICAgICAgICAgICAgPENvbHVtbkJ0biBpZD17U3RyaW5nKGluZGV4KX0gb25DbGljaz17b25DbGlja0VkaXR9PlxuICAgICAgICAgICAgICAgIOyImOygle2VmOq4sFxuICAgICAgICAgICAgICA8L0NvbHVtbkJ0bj5cbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICl9XG4gICAgICAgICAge2luZGV4ID09PSBlZGl0SWQgJiYgKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAg7IiY7KCV7ZWgIOuCtOyaqTogPGlucHV0IHR5cGU9XCJ0ZXh0XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiZ3FsIiwidXNlUXVlcnkiLCJzdHlsZWQiLCJ1c2VTdGF0ZSIsIkZFVENIX0JPQVJEUyIsIlJvdyIsImRpdiIsIkNvbHVtbiIsIkNvbHVtbkJ0biIsImJ1dHRvbiIsIkNvbW1lbnRFZGl0UGFnZSIsImRhdGEiLCJlZGl0SWQiLCJzZXRFZGl0SWQiLCJvbkNsaWNrRWRpdCIsImV2ZW50IiwiTnVtYmVyIiwiY3VycmVudFRhcmdldCIsImlkIiwiZmV0Y2hCb2FyZHMiLCJtYXAiLCJlbCIsImluZGV4Iiwid3JpdGVyIiwidGl0bGUiLCJTdHJpbmciLCJvbkNsaWNrIiwiaW5wdXQiLCJ0eXBlIiwibnVtYmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/15-01-comment-edit-01/index.tsx\n");

/***/ })

});