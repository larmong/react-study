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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CREATE_BOARD\": function() { return /* binding */ CREATE_BOARD; },\n/* harmony export */   \"DELETE_BOARD\": function() { return /* binding */ DELETE_BOARD; },\n/* harmony export */   \"default\": function() { return /* binding */ MapBoardsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  query fetchBoards($page: Int) {\\n    fetchBoards(page: $page) {\\n      _id\\n      writer\\n      title\\n      contents\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  mutation createBoard($writer: String, $title: String, $contents: String) {\\n    createBoard(writer: $writer, title: $title, contents: $contents) {\\n      _id\\n      number\\n      message\\n    }\\n  }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  mutation deleteBoard($boardId: ID!) {\\n    deleteBoard(boardId: $boardId)\\n  }\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar FETCH_BOARDS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject());\nvar CREATE_BOARD = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject1());\nvar DELETE_BOARD = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject2());\n// const Row = styled.div`\n//   display: flex;\n//   flex-direction: row;\n//   align-items: center;\n// `;\n// const Column = styled.div`\n//   font-size: 20px;\n//   width: 100%;\n//   height: 40px;\n//   border-bottom: 1px solid #bdbdbd;\n//   line-height: 40px;\n// `;\nfunction MapBoardsPage() {\n    var _this = this;\n    var ref;\n    _s();\n    var data = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(FETCH_BOARDS).data;\n    var ref1 = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(DELETE_BOARD), 1), deleteBoard = ref1[0];\n    var ref2 = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation)(CREATE_BOARD), 1), createBoard = ref2[0];\n    var onClickDelete = function(boardId) {\n        return function() {};\n    };\n    var onClickCreate = function() {};\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            data === null || data === void 0 ? void 0 : (ref = data.fetchBoards) === null || ref === void 0 ? void 0 : ref.map(function(el) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: el.writer\n                        }, void 0, false, {\n                            fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/26-04-apollo-cache-state/index.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: el.title\n                        }, void 0, false, {\n                            fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/26-04-apollo-cache-state/index.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: onClickDelete(String(el._id)),\n                            children: \"삭제하기\"\n                        }, void 0, false, {\n                            fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/26-04-apollo-cache-state/index.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, el._id, true, {\n                    fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/26-04-apollo-cache-state/index.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, _this);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onClickCreate,\n                children: \"등록하기\"\n            }, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/26-04-apollo-cache-state/index.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(MapBoardsPage, \"5WEM7gHD4J5aDb/WONnfx7wpBV4=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation,\n        _apollo_client__WEBPACK_IMPORTED_MODULE_1__.useMutation\n    ];\n});\n_c = MapBoardsPage;\nvar _c;\n$RefreshReg$(_c, \"MapBoardsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8yNi0wNC1hcG9sbG8tY2FjaGUtc3RhdGUvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBVWxDLENBU3pCOzs7Ozs7Ozs7UUFDZ0MsQ0FRaEM7Ozs7Ozs7OztRQUNnQyxDQUloQzs7Ozs7Ozs7QUF2QkEsR0FBSyxDQUFDRyxZQUFZLEdBQUdILG1EQUFHO0FBVWpCLEdBQUssQ0FBQ0ksWUFBWSxHQUFHSixtREFBRztBQVN4QixHQUFLLENBQUNLLFlBQVksR0FBR0wsbURBQUc7QUFNL0IsRUFBMEI7QUFDMUIsRUFBbUI7QUFDbkIsRUFBeUI7QUFDekIsRUFBeUI7QUFDekIsRUFBSztBQUNMLEVBQTZCO0FBQzdCLEVBQXFCO0FBQ3JCLEVBQWlCO0FBQ2pCLEVBQWtCO0FBQ2xCLEVBQXNDO0FBQ3RDLEVBQXVCO0FBQ3ZCLEVBQUs7QUFFVSxRQUFRLENBQUNNLGFBQWEsR0FBRyxDQUFDOztRQWFsQ0MsR0FBaUI7O0lBWnRCLEdBQUssQ0FBR0EsSUFBSSxHQUFLTCx3REFBUSxDQUN2QkMsWUFBWSxFQUROSSxJQUFJO0lBSVosR0FBSyxDQUFpQk4sSUFBeUIsa0JBQXpCQSwyREFBVyxDQUFDSSxZQUFZLE9BQXZDRyxXQUFXLEdBQUlQLElBQXlCO0lBQy9DLEdBQUssQ0FBaUJBLElBQXlCLGtCQUF6QkEsMkRBQVcsQ0FBQ0csWUFBWSxPQUF2Q0ssV0FBVyxHQUFJUixJQUF5QjtJQUUvQyxHQUFLLENBQUNTLGFBQWEsR0FBRyxRQUFRLENBQVBDLE9BQWU7UUFBSyxNQUFNLENBQU4sUUFBUSxHQUFGLENBQUMsQ0FBQzs7SUFDbkQsR0FBSyxDQUFDQyxhQUFhLEdBQUcsUUFBUSxHQUFGLENBQUMsQ0FBQztJQUU5QixNQUFNOztZQUVETCxJQUFJLGFBQUpBLElBQUksS0FBSkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsSUFBSSxDQUFKQSxDQUFpQixJQUFqQkEsR0FBaUIsR0FBakJBLElBQUksQ0FBRU0sV0FBVyxjQUFqQk4sR0FBaUIsS0FBakJBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLEdBQWlCLENBQUVPLEdBQUcsQ0FBQyxRQUFRLENBQVBDLEVBQVU7OEJBQ2pDLE1BQU0sK0RBQUxDLENBQUc7O29HQUNEQyxDQUFJO3NDQUFFRixFQUFFLENBQUNHLE1BQU07Ozs7OztvR0FDZkQsQ0FBSTtzQ0FBRUYsRUFBRSxDQUFDSSxLQUFLOzs7Ozs7b0dBQ2RDLENBQU07NEJBQUNDLE9BQU8sRUFBRVgsYUFBYSxDQUFDWSxNQUFNLENBQUNQLEVBQUUsQ0FBQ1EsR0FBRztzQ0FBSSxDQUFJOzs7Ozs7O21CQUg1Q1IsRUFBRSxDQUFDUSxHQUFHOzs7Ozs7d0ZBTVRILENBQUY7Z0JBQUNDLE9BQU8sRUFBRVQsYUFBYTswQkFBRSxDQUFJOzs7Ozs7OztBQUcxQyxDQUFDO0dBdkJ1Qk4sYUFBYTs7UUFDbEJKLG9EQUFRO1FBSUhELHVEQUFXO1FBQ1hBLHVEQUFXOzs7S0FOWEssYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy8yNi0wNC1hcG9sbG8tY2FjaGUtc3RhdGUvaW5kZXgudHN4P2U4ZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHtcbiAgSUJvYXJkLFxuICBJUXVlcnksXG4gIElRdWVyeUZldGNoQm9hcmRzQXJncyxcbn0gZnJvbSBcIi4uLy4uL3NyYy9jb21tb25zL3R5cGVzL2dlbmVyYXRlZC90eXBlc1wiO1xuaW1wb3J0IHsgTW91c2VFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHR5cGUgQ3VzdG9tTW91c2VFdmVudCA9IE1vdXNlRXZlbnQ8SFRNTEVsZW1lbnQ+O1xuXG5jb25zdCBGRVRDSF9CT0FSRFMgPSBncWxgXG4gIHF1ZXJ5IGZldGNoQm9hcmRzKCRwYWdlOiBJbnQpIHtcbiAgICBmZXRjaEJvYXJkcyhwYWdlOiAkcGFnZSkge1xuICAgICAgX2lkXG4gICAgICB3cml0ZXJcbiAgICAgIHRpdGxlXG4gICAgICBjb250ZW50c1xuICAgIH1cbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBDUkVBVEVfQk9BUkQgPSBncWxgXG4gIG11dGF0aW9uIGNyZWF0ZUJvYXJkKCR3cml0ZXI6IFN0cmluZywgJHRpdGxlOiBTdHJpbmcsICRjb250ZW50czogU3RyaW5nKSB7XG4gICAgY3JlYXRlQm9hcmQod3JpdGVyOiAkd3JpdGVyLCB0aXRsZTogJHRpdGxlLCBjb250ZW50czogJGNvbnRlbnRzKSB7XG4gICAgICBfaWRcbiAgICAgIG51bWJlclxuICAgICAgbWVzc2FnZVxuICAgIH1cbiAgfVxuYDtcbmV4cG9ydCBjb25zdCBERUxFVEVfQk9BUkQgPSBncWxgXG4gIG11dGF0aW9uIGRlbGV0ZUJvYXJkKCRib2FyZElkOiBJRCEpIHtcbiAgICBkZWxldGVCb2FyZChib2FyZElkOiAkYm9hcmRJZClcbiAgfVxuYDtcblxuLy8gY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcbi8vICAgZGlzcGxheTogZmxleDtcbi8vICAgZmxleC1kaXJlY3Rpb246IHJvdztcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vIGA7XG4vLyBjb25zdCBDb2x1bW4gPSBzdHlsZWQuZGl2YFxuLy8gICBmb250LXNpemU6IDIwcHg7XG4vLyAgIHdpZHRoOiAxMDAlO1xuLy8gICBoZWlnaHQ6IDQwcHg7XG4vLyAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmRiZGJkO1xuLy8gICBsaW5lLWhlaWdodDogNDBweDtcbi8vIGA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcEJvYXJkc1BhZ2UoKSB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlUXVlcnk8UGljazxJUXVlcnksIFwiZmV0Y2hCb2FyZHNcIj4sIElRdWVyeUZldGNoQm9hcmRzQXJncz4oXG4gICAgRkVUQ0hfQk9BUkRTXG4gICk7XG5cbiAgY29uc3QgW2RlbGV0ZUJvYXJkXSA9IHVzZU11dGF0aW9uKERFTEVURV9CT0FSRCk7XG4gIGNvbnN0IFtjcmVhdGVCb2FyZF0gPSB1c2VNdXRhdGlvbihDUkVBVEVfQk9BUkQpO1xuXG4gIGNvbnN0IG9uQ2xpY2tEZWxldGUgPSAoYm9hcmRJZDogc3RyaW5nKSA9PiAoKSA9PiB7fTtcbiAgY29uc3Qgb25DbGlja0NyZWF0ZSA9ICgpID0+IHt9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtkYXRhPy5mZXRjaEJvYXJkcz8ubWFwKChlbDogSUJvYXJkKSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtlbC5faWR9PlxuICAgICAgICAgIDxzcGFuPntlbC53cml0ZXJ9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPntlbC50aXRsZX08L3NwYW4+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrRGVsZXRlKFN0cmluZyhlbC5faWQpKX0+7IKt7KCc7ZWY6riwPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tDcmVhdGV9PuuTseuhne2VmOq4sDwvYnV0dG9uPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImdxbCIsInVzZU11dGF0aW9uIiwidXNlUXVlcnkiLCJGRVRDSF9CT0FSRFMiLCJDUkVBVEVfQk9BUkQiLCJERUxFVEVfQk9BUkQiLCJNYXBCb2FyZHNQYWdlIiwiZGF0YSIsImRlbGV0ZUJvYXJkIiwiY3JlYXRlQm9hcmQiLCJvbkNsaWNrRGVsZXRlIiwiYm9hcmRJZCIsIm9uQ2xpY2tDcmVhdGUiLCJmZXRjaEJvYXJkcyIsIm1hcCIsImVsIiwiZGl2Iiwic3BhbiIsIndyaXRlciIsInRpdGxlIiwiYnV0dG9uIiwib25DbGljayIsIlN0cmluZyIsIl9pZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/26-04-apollo-cache-state/index.tsx\n");

/***/ })

});