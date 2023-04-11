"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/26-04-apollo-cache-state",{

/***/ "./pages/26-04-apollo-cache-state/index.tsx":
/*!**************************************************!*\
  !*** ./pages/26-04-apollo-cache-state/index.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DELETE_BOARD\": function() { return /* binding */ DELETE_BOARD; },\n/* harmony export */   \"CREATE_BOARD\": function() { return /* binding */ CREATE_BOARD; },\n/* harmony export */   \"default\": function() { return /* binding */ MapBoardsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  query fetchBoards($page: Int) {\\n    fetchBoards(page: $page) {\\n      _id\\n      writer\\n      title\\n      contents\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  mutation deleteBoard($boardId: ID!) {\\n    deleteBoard(boardId: $boardId)\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  mutation createBoard($createBoardInput: CreateBoardInput!) {\\n    createBoard(createBoardInput: $createBoardInput) {\\n      _id\\n      writer\\n      title\\n      contents\\n    }\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar FETCH_BOARDS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject());\nvar DELETE_BOARD = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject1());\nvar CREATE_BOARD = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject2());\nfunction MapBoardsPage() {\n    var _this = this;\n    var ref;\n    _s();\n    var data = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(FETCH_BOARDS).data;\n    var ref1 = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(DELETE_BOARD), 1), deleteBoard = ref1[0];\n    var ref2 = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(CREATE_BOARD), 1), createBoard = ref2[0];\n    var onClickDelete = function(boardId) {\n        return function() {\n            void deleteBoard({\n                variables: {\n                    boardId: boardId\n                },\n                // refetchQueries: [{ query: FETCH_BOARDS }],  ==> refetch 편리한 대신 성능저하 이슈 있음 (작은서비스에서는 좋음)\n                update: function update(cache, param) {\n                    var data = param.data;\n                }\n            });\n        };\n    };\n    var onClickCreate = function() {\n        void createBoard({\n            variables: {\n                createBoardInput: {\n                    writer: \"철수\",\n                    password: \"1234\",\n                    title: \"제목입니다\",\n                    contents: \"내용입니다.\"\n                }\n            },\n            update: function update(cache) {}\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            data === null || data === void 0 ? void 0 : (ref = data.fetchBoards) === null || ref === void 0 ? void 0 : ref.map(function(el) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            style: {\n                                margin: \"20px\"\n                            },\n                            children: el.writer\n                        }, void 0, false, {\n                            fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/26-04-apollo-cache-state/index.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            style: {\n                                margin: \"20px\"\n                            },\n                            children: el.title\n                        }, void 0, false, {\n                            fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/26-04-apollo-cache-state/index.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: onClickDelete(String(el._id)),\n                            children: \"삭제하기\"\n                        }, void 0, false, {\n                            fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/26-04-apollo-cache-state/index.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, el._id, true, {\n                    fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/26-04-apollo-cache-state/index.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, _this);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onClickCreate,\n                children: \"등록하기\"\n            }, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/26-04-apollo-cache-state/index.tsx\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(MapBoardsPage, \"5WEM7gHD4J5aDb/WONnfx7wpBV4=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation\n    ];\n});\n_c = MapBoardsPage;\nvar _c;\n$RefreshReg$(_c, \"MapBoardsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8yNi0wNC1hcG9sbG8tY2FjaGUtc3RhdGUvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBVS9DLENBU3pCOzs7Ozs7Ozs7UUFDZ0MsQ0FJaEM7Ozs7Ozs7OztRQUNnQyxDQVNoQzs7Ozs7Ozs7QUF4QkEsR0FBSyxDQUFDRyxZQUFZLEdBQUdILG1EQUFHO0FBVWpCLEdBQUssQ0FBQ0ksWUFBWSxHQUFHSixtREFBRztBQUt4QixHQUFLLENBQUNLLFlBQVksR0FBR0wsbURBQUc7QUFXaEIsUUFBUSxDQUFDTSxhQUFhLEdBQUcsQ0FBQzs7UUErQmxDQyxHQUFpQjs7SUE5QnRCLEdBQUssQ0FBR0EsSUFBSSxHQUFLTCx3REFBUSxDQUN2QkMsWUFBWSxFQUROSSxJQUFJO0lBR1osR0FBSyxDQUFpQk4sSUFBeUIsa0JBQXpCQSwyREFBVyxDQUFDRyxZQUFZLE9BQXZDSSxXQUFXLEdBQUlQLElBQXlCO0lBQy9DLEdBQUssQ0FBaUJBLElBQXlCLGtCQUF6QkEsMkRBQVcsQ0FBQ0ksWUFBWSxPQUF2Q0ksV0FBVyxHQUFJUixJQUF5QjtJQUUvQyxHQUFLLENBQUNTLGFBQWEsR0FBRyxRQUFRLENBQVBDLE9BQWU7UUFBSyxNQUFNLENBQU4sUUFDN0MsR0FEbUQsQ0FBQztZQUNoRCxJQUFJLENBQUNILFdBQVcsQ0FBQyxDQUFDO2dCQUNoQkksU0FBUyxFQUFFLENBQUM7b0JBQUNELE9BQU8sRUFBUEEsT0FBTztnQkFBQyxDQUFDO2dCQUN0QixFQUF3STtnQkFDeElFLE1BQU0sRUFBTkEsUUFBUSxDQUFSQSxNQUFNLENBQUNDLEtBQXVCLEVBQUUsS0FBUSxFQUFFLENBQUM7d0JBQVRQLElBQUksR0FBTixLQUFRLENBQU5BLElBQUk7Z0JBQUssQ0FBQztZQUM5QyxDQUFDO1FBQ0gsQ0FBQzs7SUFFRCxHQUFLLENBQUNRLGFBQWEsR0FBRyxRQUN4QixHQUQ4QixDQUFDO1FBQzNCLElBQUksQ0FBQ04sV0FBVyxDQUFDLENBQUM7WUFDaEJHLFNBQVMsRUFBRSxDQUFDO2dCQUNWSSxnQkFBZ0IsRUFBRSxDQUFDO29CQUNqQkMsTUFBTSxFQUFFLENBQVE7b0JBQ2hCQyxRQUFRLEVBQUUsQ0FBTTtvQkFDaEJDLEtBQUssRUFBRSxDQUFpQjtvQkFDeEJDLFFBQVEsRUFBRSxDQUFrQjtnQkFDOUIsQ0FBQztZQUNILENBQUM7WUFDRFAsTUFBTSxFQUFOQSxRQUFRLENBQVJBLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNsQixDQUFDO0lBQ0gsQ0FBQztJQUVELE1BQU07O1lBRURQLElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxJQUFJLENBQUpBLENBQWlCLElBQWpCQSxHQUFpQixHQUFqQkEsSUFBSSxDQUFFYyxXQUFXLGNBQWpCZCxHQUFpQixLQUFqQkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsR0FBaUIsQ0FBRWUsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsRUFBVTs4QkFDakMsTUFBTSwrREFBTEMsQ0FBRzs7b0dBQ0RDLENBQUk7NEJBQUNDLEtBQUssRUFBRSxDQUFDO2dDQUFDQyxNQUFNLEVBQUUsQ0FBTTs0QkFBQyxDQUFDO3NDQUFHSixFQUFFLENBQUNOLE1BQU07Ozs7OztvR0FDMUNRLENBQUk7NEJBQUNDLEtBQUssRUFBRSxDQUFDO2dDQUFDQyxNQUFNLEVBQUUsQ0FBTTs0QkFBQyxDQUFDO3NDQUFHSixFQUFFLENBQUNKLEtBQUs7Ozs7OztvR0FDekNTLENBQU07NEJBQUNDLE9BQU8sRUFBRW5CLGFBQWEsQ0FBQ29CLE1BQU0sQ0FBQ1AsRUFBRSxDQUFDUSxHQUFHO3NDQUFJLENBQUk7Ozs7Ozs7bUJBSDVDUixFQUFFLENBQUNRLEdBQUc7Ozs7Ozt3RkFNVEgsQ0FBRjtnQkFBQ0MsT0FBTyxFQUFFZCxhQUFhOzBCQUFFLENBQUk7Ozs7Ozs7O0FBRzFDLENBQUM7R0F6Q3VCVCxhQUFhOztRQUNsQkosb0RBQVE7UUFHSEQsdURBQVc7UUFDWEEsdURBQVc7OztLQUxYSyxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzLzI2LTA0LWFwb2xsby1jYWNoZS1zdGF0ZS9pbmRleC50c3g/ZThmNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9DYWNoZSwgZ3FsLCB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHtcbiAgSUJvYXJkLFxuICBJUXVlcnksXG4gIElRdWVyeUZldGNoQm9hcmRzQXJncyxcbn0gZnJvbSBcIi4uLy4uL3NyYy9jb21tb25zL3R5cGVzL2dlbmVyYXRlZC90eXBlc1wiO1xuaW1wb3J0IHsgTW91c2VFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHR5cGUgQ3VzdG9tTW91c2VFdmVudCA9IE1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+O1xuXG5jb25zdCBGRVRDSF9CT0FSRFMgPSBncWxgXG4gIHF1ZXJ5IGZldGNoQm9hcmRzKCRwYWdlOiBJbnQpIHtcbiAgICBmZXRjaEJvYXJkcyhwYWdlOiAkcGFnZSkge1xuICAgICAgX2lkXG4gICAgICB3cml0ZXJcbiAgICAgIHRpdGxlXG4gICAgICBjb250ZW50c1xuICAgIH1cbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBERUxFVEVfQk9BUkQgPSBncWxgXG4gIG11dGF0aW9uIGRlbGV0ZUJvYXJkKCRib2FyZElkOiBJRCEpIHtcbiAgICBkZWxldGVCb2FyZChib2FyZElkOiAkYm9hcmRJZClcbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBDUkVBVEVfQk9BUkQgPSBncWxgXG4gIG11dGF0aW9uIGNyZWF0ZUJvYXJkKCRjcmVhdGVCb2FyZElucHV0OiBDcmVhdGVCb2FyZElucHV0ISkge1xuICAgIGNyZWF0ZUJvYXJkKGNyZWF0ZUJvYXJkSW5wdXQ6ICRjcmVhdGVCb2FyZElucHV0KSB7XG4gICAgICBfaWRcbiAgICAgIHdyaXRlclxuICAgICAgdGl0bGVcbiAgICAgIGNvbnRlbnRzXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXBCb2FyZHNQYWdlKCkge1xuICBjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5PFBpY2s8SVF1ZXJ5LCBcImZldGNoQm9hcmRzXCI+LCBJUXVlcnlGZXRjaEJvYXJkc0FyZ3M+KFxuICAgIEZFVENIX0JPQVJEU1xuICApO1xuICBjb25zdCBbZGVsZXRlQm9hcmRdID0gdXNlTXV0YXRpb24oREVMRVRFX0JPQVJEKTtcbiAgY29uc3QgW2NyZWF0ZUJvYXJkXSA9IHVzZU11dGF0aW9uKENSRUFURV9CT0FSRCk7XG5cbiAgY29uc3Qgb25DbGlja0RlbGV0ZSA9IChib2FyZElkOiBzdHJpbmcpID0+ICgpID0+IHtcbiAgICB2b2lkIGRlbGV0ZUJvYXJkKHtcbiAgICAgIHZhcmlhYmxlczogeyBib2FyZElkIH0sXG4gICAgICAvLyByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IEZFVENIX0JPQVJEUyB9XSwgID09PiByZWZldGNoIO2OuOumrO2VnCDrjIDsi6Ag7ISx64ql7KCA7ZWYIOydtOyKiCDsnojsnYwgKOyekeydgOyEnOu5hOyKpOyXkOyEnOuKlCDsoovsnYwpXG4gICAgICB1cGRhdGUoY2FjaGU6IEFwb2xsb0NhY2hlPGFueT4sIHsgZGF0YSB9KSB7fSxcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBvbkNsaWNrQ3JlYXRlID0gKCkgPT4ge1xuICAgIHZvaWQgY3JlYXRlQm9hcmQoe1xuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIGNyZWF0ZUJvYXJkSW5wdXQ6IHtcbiAgICAgICAgICB3cml0ZXI6IFwi7LKg7IiYXCIsXG4gICAgICAgICAgcGFzc3dvcmQ6IFwiMTIzNFwiLFxuICAgICAgICAgIHRpdGxlOiBcIuygnOuqqeyeheuLiOuLpFwiLFxuICAgICAgICAgIGNvbnRlbnRzOiBcIuuCtOyaqeyeheuLiOuLpC5cIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB1cGRhdGUoY2FjaGUpIHt9LFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtkYXRhPy5mZXRjaEJvYXJkcz8ubWFwKChlbDogSUJvYXJkKSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtlbC5faWR9PlxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbjogXCIyMHB4XCIgfX0+e2VsLndyaXRlcn08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luOiBcIjIwcHhcIiB9fT57ZWwudGl0bGV9PC9zcGFuPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DbGlja0RlbGV0ZShTdHJpbmcoZWwuX2lkKSl9PuyCreygnO2VmOq4sDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrQ3JlYXRlfT7rk7HroZ3tlZjquLA8L2J1dHRvbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJncWwiLCJ1c2VNdXRhdGlvbiIsInVzZVF1ZXJ5IiwiRkVUQ0hfQk9BUkRTIiwiREVMRVRFX0JPQVJEIiwiQ1JFQVRFX0JPQVJEIiwiTWFwQm9hcmRzUGFnZSIsImRhdGEiLCJkZWxldGVCb2FyZCIsImNyZWF0ZUJvYXJkIiwib25DbGlja0RlbGV0ZSIsImJvYXJkSWQiLCJ2YXJpYWJsZXMiLCJ1cGRhdGUiLCJjYWNoZSIsIm9uQ2xpY2tDcmVhdGUiLCJjcmVhdGVCb2FyZElucHV0Iiwid3JpdGVyIiwicGFzc3dvcmQiLCJ0aXRsZSIsImNvbnRlbnRzIiwiZmV0Y2hCb2FyZHMiLCJtYXAiLCJlbCIsImRpdiIsInNwYW4iLCJzdHlsZSIsIm1hcmdpbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJTdHJpbmciLCJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/26-04-apollo-cache-state/index.tsx\n");

/***/ })

});