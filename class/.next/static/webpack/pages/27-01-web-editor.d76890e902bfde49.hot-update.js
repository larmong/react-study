"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/27-01-web-editor",{

/***/ "./pages/27-01-web-editor/index.tsx":
/*!******************************************!*\
  !*** ./pages/27-01-web-editor/index.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WebEditorPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ \"./node_modules/react-quill/dist/quill.snow.css\");\n/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n\n// import ReactQuill from \"react-quill\";\n\n\n// import { Modal } from \"antd\";\n// Server Error === ReferenceError: document is not defined 이슈 (react에선 오류 안나지만 next에서는 오류 남)\nvar ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"node_modules_react-quill_lib_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-quill */ \"./node_modules/react-quill/lib/index.js\", 23));\n}, {\n    loadableGenerated: {\n        modules: [\n            \"27-01-web-editor/index.tsx -> \" + \"react-quill\"\n        ]\n    },\n    ssr: false\n});\n_c = ReactQuill;\nfunction WebEditorPage() {\n    var onChangeContents = function(value) {\n        console.log(value);\n    };\n    var onClickSubmit = function() {\n    // code-splitting 코드 스플릿팅\n    // 한번만 쓰이는건데 전체페이지 렌더링 할때 다운로드 받는것보다는 onClickSubmit 버튼을 눌렀을때 받는것이 성능에 좋음\n    // 모달은 여기저기 사용하니까 상관없음\n    // const { Modal } = dynamic(async () => await import(\"antd\"), { ssr: false });\n    // Modal.success({ content: \"등록에 성공하였습니다!\" })\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"작성자: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/27-01-web-editor/index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 14\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/27-01-web-editor/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"비밀번호: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\"\n                    }, void 0, false, {\n                        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/27-01-web-editor/index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/27-01-web-editor/index.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"제목: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/27-01-web-editor/index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/27-01-web-editor/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"내용: \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ReactQuill, {\n                        onChange: onChangeContents\n                    }, void 0, false, {\n                        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/27-01-web-editor/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/27-01-web-editor/index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                children: \"등록하기\"\n            }, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/27-01-web-editor/index.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_c1 = WebEditorPage;\nvar _c, _c1;\n$RefreshReg$(_c, \"ReactQuill\");\n$RefreshReg$(_c1, \"WebEditorPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8yNy0wMS13ZWItZWRpdG9yL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLEVBQXdDO0FBQ0E7QUFDTjtBQUNsQyxFQUFnQztBQUVoQyxFQUE2RjtBQUM3RCxHQUEzQixDQUFDQyxVQUFVLEdBQUdELG1EQUFPLENBQUMsUUFBUTtJQUFGLE1BQU0sQ0FBTixzTUFBb0I7Ozs7Ozs7SUFBS0UsR0FBRyxFQUFFLEtBQUs7O0tBQTlERCxVQUFVO0FBRUQsUUFBUSxDQUFDRSxhQUFhLEdBQUcsQ0FBQztJQUN2QyxHQUFLLENBQUNDLGdCQUFnQixHQUFHLFFBQVEsQ0FBUEMsS0FBYSxFQUFLLENBQUM7UUFDM0NDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixLQUFLO0lBQ25CLENBQUM7SUFFRCxHQUFLLENBQUNHLGFBQWEsR0FBRyxRQUN4QixHQUQ4QixDQUFDO0lBQzNCLEVBQXlCO0lBQ2IsRUFBNEQ7SUFDZ0IsRUFBbEU7SUFDVSxFQUErQztJQUMvRSxFQUE2QztJQUMzQixDQUFuQjtJQUVELE1BQU07O3dGQUVEQyxDQUFHOztvQkFBQyxDQUNFO2dHQUFPQyxDQUFLO3dCQUFDQyxJQUFJLEVBQUMsQ0FBTTs7Ozs7Ozs7Ozs7O3dGQUV4QkYsQ0FBSDs7b0JBQUMsQ0FDRztnR0FBU0MsQ0FBSzt3QkFBQ0MsSUFBSSxFQUFDLENBQVU7Ozs7Ozs7Ozs7Ozt3RkFFN0JGLENBQUw7O29CQUFDLENBQ0M7Z0dBQUtDLENBQUs7d0JBQUNDLElBQUksRUFBQyxDQUFNOzs7Ozs7Ozs7Ozs7d0ZBRXZCRixDQUFEOztvQkFBQyxDQUNDO2dHQUFLUixVQUFVO3dCQUFDVyxRQUFRLEVBQUVSLGdCQUFnQjs7Ozs7Ozs7Ozs7O3dGQUUzQ1MsQ0FBRTswQkFBQyxDQUFJOzs7Ozs7OztBQUdsQixDQUFDO01BOUJ1QlYsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy8yNy0wMS13ZWItZWRpdG9yL2luZGV4LnRzeD83OWQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdFF1aWxsIGZyb20gXCJyZWFjdC1xdWlsbFwiO1xuaW1wb3J0IFwicmVhY3QtcXVpbGwvZGlzdC9xdWlsbC5zbm93LmNzc1wiO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuLy8gaW1wb3J0IHsgTW9kYWwgfSBmcm9tIFwiYW50ZFwiO1xuXG4vLyBTZXJ2ZXIgRXJyb3IgPT09IFJlZmVyZW5jZUVycm9yOiBkb2N1bWVudCBpcyBub3QgZGVmaW5lZCDsnbTsioggKHJlYWN07JeQ7ISgIOyYpOulmCDslYjrgpjsp4Drp4wgbmV4dOyXkOyEnOuKlCDsmKTrpZgg64KoKVxuY29uc3QgUmVhY3RRdWlsbCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwicmVhY3QtcXVpbGxcIiksIHsgc3NyOiBmYWxzZSB9KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2ViRWRpdG9yUGFnZSgpIHtcbiAgY29uc3Qgb25DaGFuZ2VDb250ZW50cyA9ICh2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc29sZS5sb2codmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IG9uQ2xpY2tTdWJtaXQgPSAoKSA9PiB7XG4gICAgLy8gY29kZS1zcGxpdHRpbmcg7L2U65OcIOyKpO2UjOumv+2MhVxuICAgIC8vIO2VnOuyiOunjCDsk7DsnbTripTqsbTrjbAg7KCE7LK07Y6Y7J207KeAIOugjOuNlOungSDtlaDrlYwg64uk7Jq066Gc65OcIOuwm+uKlOqyg+uztOuLpOuKlCBvbkNsaWNrU3VibWl0IOuyhO2KvOydhCDriIzroIDsnYTrlYwg67Cb64qU6rKD7J20IOyEseuKpeyXkCDsoovsnYxcbiAgICAvLyDrqqjri6zsnYAg7Jes6riw7KCA6riwIOyCrOyaqe2VmOuLiOq5jCDsg4HqtIDsl4bsnYxcbiAgICAvLyBjb25zdCB7IE1vZGFsIH0gPSBkeW5hbWljKGFzeW5jICgpID0+IGF3YWl0IGltcG9ydChcImFudGRcIiksIHsgc3NyOiBmYWxzZSB9KTtcbiAgICAvLyBNb2RhbC5zdWNjZXNzKHsgY29udGVudDogXCLrk7HroZ3sl5Ag7ISx6rO17ZWY7JiA7Iq164uI64ukIVwiIH0pXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdj5cbiAgICAgICAg7J6R7ISx7J6QOiA8aW5wdXQgdHlwZT1cInRleHRcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICDruYTrsIDrsojtmLg6IDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICDsoJzrqqk6IDxpbnB1dCB0eXBlPVwidGV4dFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIOuCtOyaqTogPFJlYWN0UXVpbGwgb25DaGFuZ2U9e29uQ2hhbmdlQ29udGVudHN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24+65Ox66Gd7ZWY6riwPC9idXR0b24+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiZHluYW1pYyIsIlJlYWN0UXVpbGwiLCJzc3IiLCJXZWJFZGl0b3JQYWdlIiwib25DaGFuZ2VDb250ZW50cyIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsIm9uQ2xpY2tTdWJtaXQiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/27-01-web-editor/index.tsx\n");

/***/ })

});