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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DELETE_BOARD\": function() { return /* binding */ DELETE_BOARD; },\n/* harmony export */   \"CREATE_BOARD\": function() { return /* binding */ CREATE_BOARD; },\n/* harmony export */   \"default\": function() { return /* binding */ MapBoardsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  query fetchBoards($page: Int) {\\n    fetchBoards(page: $page) {\\n      _id\\n      writer\\n      title\\n      contents\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  mutation deleteBoard($boardId: ID!) {\\n    deleteBoard(boardId: $boardId)\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  mutation createBoard($createBoardInput: CreateBoardInput!) {\\n    createBoard(createBoardInput: $createBoardInput) {\\n      _id\\n      writer\\n      title\\n      contents\\n    }\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar FETCH_BOARDS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject());\nvar DELETE_BOARD = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject1());\nvar CREATE_BOARD = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject2());\nfunction MapBoardsPage() {\n    var _this = this;\n    var ref;\n    _s();\n    var data1 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(FETCH_BOARDS).data;\n    var ref1 = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(DELETE_BOARD), 1), deleteBoard = ref1[0];\n    var ref2 = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(CREATE_BOARD), 1), createBoard = ref2[0];\n    var onClickDelete = function(boardId) {\n        return function() {\n            void deleteBoard({\n                variables: {\n                    boardId: boardId\n                },\n                // refetchQueries: [{ query: FETCH_BOARDS }],  ==> refetch 편리한 대신 성능저하 이슈 있음 (작은서비스에서는 좋음)\n                update: function update(cache, param1) {\n                    var data = param1.data;\n                    cache.modify({\n                        fields: {\n                            fetchBoards: function(prev, param) {\n                                var readField = param.readField;\n                                var deleteId = data.deleteBoard; // 삭제된 ID\n                                var filteredPrev = prev.filter(function(el) {\n                                    return readField(\"_id\", el) !== deleteId // el._id 를 못씀. readField 를 사용해서 _id 꺼내오기\n                                    ;\n                                }); // 삭제된 데이터 뺀 9개의 데이터\n                                return _toConsumableArray(filteredPrev);\n                            }\n                        }\n                    });\n                }\n            });\n        };\n    };\n    var onClickCreate = function() {\n        void createBoard({\n            variables: {\n                createBoardInput: {\n                    writer: \"철수\",\n                    password: \"1234\",\n                    title: \"제목입니다\",\n                    contents: \"내용입니다.\"\n                }\n            },\n            update: function update(cache, param) {\n                var data = param.data;\n                cache.modify({\n                    fields: {\n                        fetchBoards: function(prev) {\n                            return [\n                                data.createBoard\n                            ].concat(_toConsumableArray(prev));\n                        }\n                    }\n                });\n            }\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            data1 === null || data1 === void 0 ? void 0 : (ref = data1.fetchBoards) === null || ref === void 0 ? void 0 : ref.map(function(el) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            style: {\n                                margin: \"20px\"\n                            },\n                            children: el.writer\n                        }, void 0, false, {\n                            fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/26-04-apollo-cache-state/index.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            style: {\n                                margin: \"20px\"\n                            },\n                            children: el.title\n                        }, void 0, false, {\n                            fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/26-04-apollo-cache-state/index.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: onClickDelete(String(el._id)),\n                            children: \"삭제하기\"\n                        }, void 0, false, {\n                            fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/26-04-apollo-cache-state/index.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, el._id, true, {\n                    fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/26-04-apollo-cache-state/index.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, _this);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onClickCreate,\n                children: \"등록하기\"\n            }, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/26-04-apollo-cache-state/index.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(MapBoardsPage, \"5WEM7gHD4J5aDb/WONnfx7wpBV4=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation\n    ];\n});\n_c = MapBoardsPage;\nvar _c;\n$RefreshReg$(_c, \"MapBoardsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8yNi0wNC1hcG9sbG8tY2FjaGUtc3RhdGUvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBVS9DLENBU3pCOzs7Ozs7Ozs7UUFDZ0MsQ0FJaEM7Ozs7Ozs7OztRQUNnQyxDQVNoQzs7Ozs7Ozs7QUF4QkEsR0FBSyxDQUFDRyxZQUFZLEdBQUdILG1EQUFHO0FBVWpCLEdBQUssQ0FBQ0ksWUFBWSxHQUFHSixtREFBRztBQUt4QixHQUFLLENBQUNLLFlBQVksR0FBR0wsbURBQUc7QUFXaEIsUUFBUSxDQUFDTSxhQUFhLEdBQUcsQ0FBQzs7UUFvRGxDQyxHQUFpQjs7SUFuRHRCLEdBQUssQ0FBR0EsS0FBSSxHQUFLTCx3REFBUSxDQUN2QkMsWUFBWSxFQUROSSxJQUFJO0lBR1osR0FBSyxDQUFpQk4sSUFBeUIsa0JBQXpCQSwyREFBVyxDQUFDRyxZQUFZLE9BQXZDSSxXQUFXLEdBQUlQLElBQXlCO0lBQy9DLEdBQUssQ0FBaUJBLElBQXlCLGtCQUF6QkEsMkRBQVcsQ0FBQ0ksWUFBWSxPQUF2Q0ksV0FBVyxHQUFJUixJQUF5QjtJQUUvQyxHQUFLLENBQUNTLGFBQWEsR0FBRyxRQUFRLENBQVBDLE9BQWU7UUFBSyxNQUFNLENBQU4sUUFDN0MsR0FEbUQsQ0FBQztZQUNoRCxJQUFJLENBQUNILFdBQVcsQ0FBQyxDQUFDO2dCQUNoQkksU0FBUyxFQUFFLENBQUM7b0JBQUNELE9BQU8sRUFBUEEsT0FBTztnQkFBQyxDQUFDO2dCQUN0QixFQUF3STtnQkFDeElFLE1BQU0sRUFBTkEsUUFBUSxDQUFSQSxNQUFNLENBQUNDLEtBQXVCLEVBQUUsTUFBUSxFQUFFLENBQUM7d0JBQVRQLElBQUksR0FBTixNQUFRLENBQU5BLElBQUk7b0JBQ3BDTyxLQUFLLENBQUNDLE1BQU0sQ0FBQyxDQUFDO3dCQUNaQyxNQUFNLEVBQUUsQ0FBQzs0QkFDUEMsV0FBVyxFQUFFLFFBQVEsQ0FBUEMsSUFBSSxTQUFvQixDQUFDO29DQUFqQkMsU0FBUyxTQUFUQSxTQUFTO2dDQUM3QixHQUFLLENBQUNDLFFBQVEsR0FBR2IsSUFBSSxDQUFDQyxXQUFXLENBQUUsQ0FBZTtnQ0FDbEQsR0FBSyxDQUFDYSxZQUFZLEdBQUdILElBQUksQ0FBQ0ksTUFBTSxDQUM5QixRQUFRLENBQVBDLEVBQU87b0NBQUtKLE1BQU0sQ0FBTkEsU0FBUyxDQUFDLENBQUssTUFBRUksRUFBRSxNQUFNSCxRQUFRLENBQWtFOzttQ0FDL0csQ0FBNEM7Z0NBRS9DLE1BQU0sb0JBQUtDLFlBQVk7NEJBQ3pCLENBQUM7d0JBQ0gsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQzs7SUFFRCxHQUFLLENBQUNHLGFBQWEsR0FBRyxRQUN4QixHQUQ4QixDQUFDO1FBQzNCLElBQUksQ0FBQ2YsV0FBVyxDQUFDLENBQUM7WUFDaEJHLFNBQVMsRUFBRSxDQUFDO2dCQUNWYSxnQkFBZ0IsRUFBRSxDQUFDO29CQUNqQkMsTUFBTSxFQUFFLENBQVE7b0JBQ2hCQyxRQUFRLEVBQUUsQ0FBTTtvQkFDaEJDLEtBQUssRUFBRSxDQUFpQjtvQkFDeEJDLFFBQVEsRUFBRSxDQUFrQjtnQkFDOUIsQ0FBQztZQUNILENBQUM7WUFDRGhCLE1BQU0sRUFBTkEsUUFBUSxDQUFSQSxNQUFNLENBQUNDLEtBQXVCLEVBQUUsS0FBUSxFQUFFLENBQUM7b0JBQVRQLElBQUksR0FBTixLQUFRLENBQU5BLElBQUk7Z0JBQ3BDTyxLQUFLLENBQUNDLE1BQU0sQ0FBQyxDQUFDO29CQUNaQyxNQUFNLEVBQUUsQ0FBQzt3QkFDUEMsV0FBVyxFQUFFLFFBQVEsQ0FBUEMsSUFBSSxFQUFLLENBQUM7NEJBQ3RCLE1BQU0sQ0FBQyxDQUFDWDtnQ0FBQUEsSUFBSSxDQUFDRSxXQUFXOzRCQUFTLENBQUMsQ0FBM0IsTUFBMkIsb0JBQUxTLElBQUk7d0JBQ25DLENBQUM7b0JBQ0gsQ0FBQztnQkFDSCxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTTs7WUFFRFgsS0FBSSxhQUFKQSxLQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLElBQUksQ0FBSkEsQ0FBaUIsSUFBakJBLEdBQWlCLEdBQWpCQSxLQUFJLENBQUVVLFdBQVcsY0FBakJWLEdBQWlCLEtBQWpCQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxHQUFpQixDQUFFdUIsR0FBRyxDQUFDLFFBQVEsQ0FBUFAsRUFBVTs4QkFDakMsTUFBTSwrREFBTFEsQ0FBRzs7b0dBQ0RDLENBQUk7NEJBQUNDLEtBQUssRUFBRSxDQUFDO2dDQUFDQyxNQUFNLEVBQUUsQ0FBTTs0QkFBQyxDQUFDO3NDQUFHWCxFQUFFLENBQUNHLE1BQU07Ozs7OztvR0FDMUNNLENBQUk7NEJBQUNDLEtBQUssRUFBRSxDQUFDO2dDQUFDQyxNQUFNLEVBQUUsQ0FBTTs0QkFBQyxDQUFDO3NDQUFHWCxFQUFFLENBQUNLLEtBQUs7Ozs7OztvR0FDekNPLENBQU07NEJBQUNDLE9BQU8sRUFBRTFCLGFBQWEsQ0FBQzJCLE1BQU0sQ0FBQ2QsRUFBRSxDQUFDZSxHQUFHO3NDQUFJLENBQUk7Ozs7Ozs7bUJBSDVDZixFQUFFLENBQUNlLEdBQUc7Ozs7Ozt3RkFNVEgsQ0FBRjtnQkFBQ0MsT0FBTyxFQUFFWixhQUFhOzBCQUFFLENBQUk7Ozs7Ozs7O0FBRzFDLENBQUM7R0E5RHVCbEIsYUFBYTs7UUFDbEJKLG9EQUFRO1FBR0hELHVEQUFXO1FBQ1hBLHVEQUFXOzs7S0FMWEssYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy8yNi0wNC1hcG9sbG8tY2FjaGUtc3RhdGUvaW5kZXgudHN4P2U4ZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvQ2FjaGUsIGdxbCwgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCB7XG4gIElCb2FyZCxcbiAgSVF1ZXJ5LFxuICBJUXVlcnlGZXRjaEJvYXJkc0FyZ3MsXG59IGZyb20gXCIuLi8uLi9zcmMvY29tbW9ucy90eXBlcy9nZW5lcmF0ZWQvdHlwZXNcIjtcbmltcG9ydCB7IE1vdXNlRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB0eXBlIEN1c3RvbU1vdXNlRXZlbnQgPSBNb3VzZUV2ZW50PEhUTUxFbGVtZW50PjtcblxuY29uc3QgRkVUQ0hfQk9BUkRTID0gZ3FsYFxuICBxdWVyeSBmZXRjaEJvYXJkcygkcGFnZTogSW50KSB7XG4gICAgZmV0Y2hCb2FyZHMocGFnZTogJHBhZ2UpIHtcbiAgICAgIF9pZFxuICAgICAgd3JpdGVyXG4gICAgICB0aXRsZVxuICAgICAgY29udGVudHNcbiAgICB9XG4gIH1cbmA7XG5leHBvcnQgY29uc3QgREVMRVRFX0JPQVJEID0gZ3FsYFxuICBtdXRhdGlvbiBkZWxldGVCb2FyZCgkYm9hcmRJZDogSUQhKSB7XG4gICAgZGVsZXRlQm9hcmQoYm9hcmRJZDogJGJvYXJkSWQpXG4gIH1cbmA7XG5leHBvcnQgY29uc3QgQ1JFQVRFX0JPQVJEID0gZ3FsYFxuICBtdXRhdGlvbiBjcmVhdGVCb2FyZCgkY3JlYXRlQm9hcmRJbnB1dDogQ3JlYXRlQm9hcmRJbnB1dCEpIHtcbiAgICBjcmVhdGVCb2FyZChjcmVhdGVCb2FyZElucHV0OiAkY3JlYXRlQm9hcmRJbnB1dCkge1xuICAgICAgX2lkXG4gICAgICB3cml0ZXJcbiAgICAgIHRpdGxlXG4gICAgICBjb250ZW50c1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFwQm9hcmRzUGFnZSgpIHtcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeTxQaWNrPElRdWVyeSwgXCJmZXRjaEJvYXJkc1wiPiwgSVF1ZXJ5RmV0Y2hCb2FyZHNBcmdzPihcbiAgICBGRVRDSF9CT0FSRFNcbiAgKTtcbiAgY29uc3QgW2RlbGV0ZUJvYXJkXSA9IHVzZU11dGF0aW9uKERFTEVURV9CT0FSRCk7XG4gIGNvbnN0IFtjcmVhdGVCb2FyZF0gPSB1c2VNdXRhdGlvbihDUkVBVEVfQk9BUkQpO1xuXG4gIGNvbnN0IG9uQ2xpY2tEZWxldGUgPSAoYm9hcmRJZDogc3RyaW5nKSA9PiAoKSA9PiB7XG4gICAgdm9pZCBkZWxldGVCb2FyZCh7XG4gICAgICB2YXJpYWJsZXM6IHsgYm9hcmRJZCB9LFxuICAgICAgLy8gcmVmZXRjaFF1ZXJpZXM6IFt7IHF1ZXJ5OiBGRVRDSF9CT0FSRFMgfV0sICA9PT4gcmVmZXRjaCDtjrjrpqztlZwg64yA7IugIOyEseuKpeyggO2VmCDsnbTsiogg7J6I7J2MICjsnpHsnYDshJzruYTsiqTsl5DshJzripQg7KKL7J2MKVxuICAgICAgdXBkYXRlKGNhY2hlOiBBcG9sbG9DYWNoZTxhbnk+LCB7IGRhdGEgfSkge1xuICAgICAgICBjYWNoZS5tb2RpZnkoe1xuICAgICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgZmV0Y2hCb2FyZHM6IChwcmV2LCB7IHJlYWRGaWVsZCB9KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUlkID0gZGF0YS5kZWxldGVCb2FyZDsgLy8g7IKt7KCc65CcIElEXG4gICAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkUHJldiA9IHByZXYuZmlsdGVyKFxuICAgICAgICAgICAgICAgIChlbDogYW55KSA9PiByZWFkRmllbGQoXCJfaWRcIiwgZWwpICE9PSBkZWxldGVJZCAvLyBlbC5faWQg66W8IOuqu+yUgC4gcmVhZEZpZWxkIOulvCDsgqzsmqntlbTshJwgX2lkIOq6vOuCtOyYpOq4sFxuICAgICAgICAgICAgICApOyAvLyDsgq3soJzrkJwg642w7J207YSwIOu6gCA56rCc7J2YIOuNsOydtO2EsFxuXG4gICAgICAgICAgICAgIHJldHVybiBbLi4uZmlsdGVyZWRQcmV2XTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uQ2xpY2tDcmVhdGUgPSAoKSA9PiB7XG4gICAgdm9pZCBjcmVhdGVCb2FyZCh7XG4gICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgY3JlYXRlQm9hcmRJbnB1dDoge1xuICAgICAgICAgIHdyaXRlcjogXCLssqDsiJhcIixcbiAgICAgICAgICBwYXNzd29yZDogXCIxMjM0XCIsXG4gICAgICAgICAgdGl0bGU6IFwi7KCc66qp7J6F64uI64ukXCIsXG4gICAgICAgICAgY29udGVudHM6IFwi64K07Jqp7J6F64uI64ukLlwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHVwZGF0ZShjYWNoZTogQXBvbGxvQ2FjaGU8YW55PiwgeyBkYXRhIH0pIHtcbiAgICAgICAgY2FjaGUubW9kaWZ5KHtcbiAgICAgICAgICBmaWVsZHM6IHtcbiAgICAgICAgICAgIGZldGNoQm9hcmRzOiAocHJldikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gW2RhdGEuY3JlYXRlQm9hcmQsIC4uLnByZXZdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2RhdGE/LmZldGNoQm9hcmRzPy5tYXAoKGVsOiBJQm9hcmQpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2VsLl9pZH0+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luOiBcIjIwcHhcIiB9fT57ZWwud3JpdGVyfTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW46IFwiMjBweFwiIH19PntlbC50aXRsZX08L3NwYW4+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrRGVsZXRlKFN0cmluZyhlbC5faWQpKX0+7IKt7KCc7ZWY6riwPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tDcmVhdGV9PuuTseuhne2VmOq4sDwvYnV0dG9uPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImdxbCIsInVzZU11dGF0aW9uIiwidXNlUXVlcnkiLCJGRVRDSF9CT0FSRFMiLCJERUxFVEVfQk9BUkQiLCJDUkVBVEVfQk9BUkQiLCJNYXBCb2FyZHNQYWdlIiwiZGF0YSIsImRlbGV0ZUJvYXJkIiwiY3JlYXRlQm9hcmQiLCJvbkNsaWNrRGVsZXRlIiwiYm9hcmRJZCIsInZhcmlhYmxlcyIsInVwZGF0ZSIsImNhY2hlIiwibW9kaWZ5IiwiZmllbGRzIiwiZmV0Y2hCb2FyZHMiLCJwcmV2IiwicmVhZEZpZWxkIiwiZGVsZXRlSWQiLCJmaWx0ZXJlZFByZXYiLCJmaWx0ZXIiLCJlbCIsIm9uQ2xpY2tDcmVhdGUiLCJjcmVhdGVCb2FyZElucHV0Iiwid3JpdGVyIiwicGFzc3dvcmQiLCJ0aXRsZSIsImNvbnRlbnRzIiwibWFwIiwiZGl2Iiwic3BhbiIsInN0eWxlIiwibWFyZ2luIiwiYnV0dG9uIiwib25DbGljayIsIlN0cmluZyIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/26-04-apollo-cache-state/index.tsx\n");

/***/ })

});