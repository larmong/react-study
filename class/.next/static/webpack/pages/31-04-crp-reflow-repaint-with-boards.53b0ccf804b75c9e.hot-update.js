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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MapBoardsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  query fetchBoards($page: Int) {\\n    fetchBoards(page: $page) {\\n      _id\\n      writer\\n      title\\n      contents\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar FETCH_BOARDS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject());\nfunction MapBoardsPage() {\n    var _this = this;\n    var ref;\n    _s();\n    var ref1 = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(FETCH_BOARDS), data = ref1.data, refetch = ref1.refetch;\n    var onClickPage = function(event) {\n        void refetch({\n            page: Number(event.currentTarget.id)\n        });\n        console.log(event.currentTarget.id);\n    };\n    return(// 임시 배열 10개를 생성하여, 데이터가 없을 떄도 높이 30px을 유지하여 reflow 방지\n    // style={{ height: \"30px\" }} => 리플로우 방지\n    // ex) 구글 이미지 검색\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            data === null || data === void 0 ? void 0 : (ref = data.fetchBoards) === null || ref === void 0 ? void 0 : ref.map(function(el) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        height: \"30px\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            style: {\n                                margin: \"10px\"\n                            },\n                            children: el.writer\n                        }, void 0, false, {\n                            fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/31-04-crp-reflow-repaint-with-boards/index.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            style: {\n                                margin: \"10px\"\n                            },\n                            children: el.title\n                        }, void 0, false, {\n                            fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/31-04-crp-reflow-repaint-with-boards/index.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, el._id, true, {\n                    fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/31-04-crp-reflow-repaint-with-boards/index.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, _this);\n            }),\n            Array(10).fill(1).map(function(_el, index) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    style: {\n                        padding: \"5px\",\n                        margin: \"10px\"\n                    },\n                    id: String(index + 1),\n                    onClick: onClickPage,\n                    children: index + 1\n                }, index + 1, false, {\n                    fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/31-04-crp-reflow-repaint-with-boards/index.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 11\n                }, _this);\n            })\n        ]\n    }, void 0, true));\n};\n_s(MapBoardsPage, \"iCHd3sTq7va4oFuMT0A8VLN0ksc=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery\n    ];\n});\n_c = MapBoardsPage;\nvar _c;\n$RefreshReg$(_c, \"MapBoardsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8zMS0wNC1jcnAtcmVmbG93LXJlcGFpbnQtd2l0aC1ib2FyZHMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQThDOzs7Ozs7Ozs7Ozs7O1FBU3JCLENBU3pCOzs7Ozs7OztBQVRBLEdBQUssQ0FBQ0UsWUFBWSxHQUFHRixtREFBRztBQVdULFFBQVEsQ0FBQ0csYUFBYSxHQUFHLENBQUM7O1FBZWxDQyxHQUFpQjs7SUFkdEIsR0FBSyxDQUFxQkgsSUFHWCxHQUhXQSx3REFBUSxDQUdoQ0MsWUFBWSxHQUhORSxJQUFJLEdBQWNILElBR1gsQ0FIUEcsSUFBSSxFQUFFQyxPQUFPLEdBQUtKLElBR1gsQ0FIREksT0FBTztJQUtyQixHQUFLLENBQUNDLFdBQVcsR0FBRyxRQUFRLENBQVBDLEtBQXVCLEVBQUssQ0FBQztRQUNoRCxJQUFJLENBQUNGLE9BQU8sQ0FBQyxDQUFDO1lBQUNHLElBQUksRUFBRUMsTUFBTSxDQUFDRixLQUFLLENBQUNHLGFBQWEsQ0FBQ0MsRUFBRTtRQUFFLENBQUM7UUFDckRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixLQUFLLENBQUNHLGFBQWEsQ0FBQ0MsRUFBRTtJQUNwQyxDQUFDO0lBQ0QsTUFBTSxDQUNKLEVBQXNEO0lBQ0EsRUFBZDtJQUM1QixFQUFJOzs7WUFFYlAsSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLElBQUksQ0FBSkEsQ0FBaUIsSUFBakJBLEdBQWlCLEdBQWpCQSxJQUFJLENBQUVVLFdBQVcsY0FBakJWLEdBQWlCLEtBQWpCQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxJQUFJLENBQUpBLENBQWlCLEdBQWpCQSxHQUFpQixDQUFFVyxHQUFHLENBQUMsUUFBUSxDQUFQQyxFQUFFOzhCQUN6QixNQUFNLCtEQUFMQyxDQUFHO29CQUFjQyxLQUFLLEVBQUUsQ0FBQzt3QkFBQ0MsTUFBTSxFQUFFLENBQU07b0JBQUMsQ0FBQzs7b0dBQ3hDQyxDQUFJOzRCQUFDRixLQUFLLEVBQUUsQ0FBQztnQ0FBQ0csTUFBTSxFQUFFLENBQU07NEJBQUMsQ0FBQztzQ0FBR0wsRUFBRSxDQUFDTSxNQUFNOzs7Ozs7b0dBQzFDRixDQUFJOzRCQUFDRixLQUFLLEVBQUUsQ0FBQztnQ0FBQ0csTUFBTSxFQUFFLENBQU07NEJBQUMsQ0FBQztzQ0FBR0wsRUFBRSxDQUFDTyxLQUFLOzs7Ozs7O21CQUZsQ1AsRUFBRSxDQUFDUSxHQUFHOzs7Ozs7WUFNakJDLEtBQUssQ0FBQyxFQUFFLEVBQ05DLElBQUksQ0FBQyxDQUFDLEVBQ05YLEdBQUcsQ0FBQyxRQUFRLENBQVBZLEdBQUcsRUFBRUMsS0FBSzs4QkFDZCxNQUNWLENBQUMsOERBRFVSLENBQUk7b0JBRUhGLEtBQUssRUFBRSxDQUFDO3dCQUFDVyxPQUFPLEVBQUUsQ0FBSzt3QkFBRVIsTUFBTSxFQUFFLENBQU07b0JBQUMsQ0FBQztvQkFDekNWLEVBQUUsRUFBRW1CLE1BQU0sQ0FBQ0YsS0FBSyxHQUFHLENBQUM7b0JBQ3BCRyxPQUFPLEVBQUV6QixXQUFXOzhCQUVuQnNCLEtBQUssR0FBRyxDQUFDO21CQUxMQSxLQUFLLEdBQUcsQ0FBQzs7Ozs7Ozs7QUFVMUIsQ0FBQztHQXBDdUJ6QixhQUFhOztRQUNURixvREFBUTs7O0tBRFpFLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvMzEtMDQtY3JwLXJlZmxvdy1yZXBhaW50LXdpdGgtYm9hcmRzL2luZGV4LnRzeD84Nzk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCwgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcIkBlbW90aW9uL3N0eWxlZFwiO1xuaW1wb3J0IHtcbiAgSVF1ZXJ5LFxuICBJUXVlcnlGZXRjaEJvYXJkc0FyZ3MsXG59IGZyb20gXCIuLi8uLi9zcmMvY29tbW9ucy90eXBlcy9nZW5lcmF0ZWQvdHlwZXNcIjtcbmltcG9ydCB7IE1vdXNlRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB0eXBlIEN1c3RvbU1vdXNlRXZlbnQgPSBNb3VzZUV2ZW50PEhUTUxFbGVtZW50PjtcblxuY29uc3QgRkVUQ0hfQk9BUkRTID0gZ3FsYFxuICBxdWVyeSBmZXRjaEJvYXJkcygkcGFnZTogSW50KSB7XG4gICAgZmV0Y2hCb2FyZHMocGFnZTogJHBhZ2UpIHtcbiAgICAgIF9pZFxuICAgICAgd3JpdGVyXG4gICAgICB0aXRsZVxuICAgICAgY29udGVudHNcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcEJvYXJkc1BhZ2UoKSB7XG4gIGNvbnN0IHsgZGF0YSwgcmVmZXRjaCB9ID0gdXNlUXVlcnk8XG4gICAgUGljazxJUXVlcnksIFwiZmV0Y2hCb2FyZHNcIj4sXG4gICAgSVF1ZXJ5RmV0Y2hCb2FyZHNBcmdzXG4gID4oRkVUQ0hfQk9BUkRTKTtcblxuICBjb25zdCBvbkNsaWNrUGFnZSA9IChldmVudDogQ3VzdG9tTW91c2VFdmVudCkgPT4ge1xuICAgIHZvaWQgcmVmZXRjaCh7IHBhZ2U6IE51bWJlcihldmVudC5jdXJyZW50VGFyZ2V0LmlkKSB9KTtcbiAgICBjb25zb2xlLmxvZyhldmVudC5jdXJyZW50VGFyZ2V0LmlkKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICAvLyDsnoTsi5wg67Cw7Je0IDEw6rCc66W8IOyDneyEse2VmOyXrCwg642w7J207YSw6rCAIOyXhuydhCDrloTrj4Qg64aS7J20IDMwcHjsnYQg7Jyg7KeA7ZWY7JesIHJlZmxvdyDrsKnsp4BcbiAgICAvLyBzdHlsZT17eyBoZWlnaHQ6IFwiMzBweFwiIH19ID0+IOumrO2UjOuhnOyasCDrsKnsp4BcbiAgICAvLyBleCkg6rWs6riAIOydtOuvuOyngCDqsoDsg4lcbiAgICA8PlxuICAgICAge2RhdGE/LmZldGNoQm9hcmRzPy5tYXAoKGVsKSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtlbC5faWR9IHN0eWxlPXt7IGhlaWdodDogXCIzMHB4XCIgfX0+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luOiBcIjEwcHhcIiB9fT57ZWwud3JpdGVyfTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW46IFwiMTBweFwiIH19PntlbC50aXRsZX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG5cbiAgICAgIHtBcnJheSgxMClcbiAgICAgICAgLmZpbGwoMSlcbiAgICAgICAgLm1hcCgoX2VsLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBrZXk9e2luZGV4ICsgMX1cbiAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiNXB4XCIsIG1hcmdpbjogXCIxMHB4XCIgfX1cbiAgICAgICAgICAgIGlkPXtTdHJpbmcoaW5kZXggKyAxKX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tQYWdlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpbmRleCArIDF9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJncWwiLCJ1c2VRdWVyeSIsIkZFVENIX0JPQVJEUyIsIk1hcEJvYXJkc1BhZ2UiLCJkYXRhIiwicmVmZXRjaCIsIm9uQ2xpY2tQYWdlIiwiZXZlbnQiLCJwYWdlIiwiTnVtYmVyIiwiY3VycmVudFRhcmdldCIsImlkIiwiY29uc29sZSIsImxvZyIsImZldGNoQm9hcmRzIiwibWFwIiwiZWwiLCJkaXYiLCJzdHlsZSIsImhlaWdodCIsInNwYW4iLCJtYXJnaW4iLCJ3cml0ZXIiLCJ0aXRsZSIsIl9pZCIsIkFycmF5IiwiZmlsbCIsIl9lbCIsImluZGV4IiwicGFkZGluZyIsIlN0cmluZyIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/31-04-crp-reflow-repaint-with-boards/index.tsx\n");

/***/ })

});