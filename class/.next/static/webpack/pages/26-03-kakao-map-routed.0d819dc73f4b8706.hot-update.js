"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/26-03-kakao-map-routed",{

/***/ "./pages/26-03-kakao-map-routed/index.tsx":
/*!************************************************!*\
  !*** ./pages/26-03-kakao-map-routed/index.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ KakaoMapRoutedPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\nfunction KakaoMapRoutedPage() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var script = document.createElement(\"script\") // script 태그가 만들기 <script></script>\n        ;\n        script.src = \"//dapi.kakao.com/v2/maps/sdk.js?appkey=54bc3afc7f51bc48e41e8e3069689ea2\";\n        document.head.appendChild(script);\n        // script 가 onload 되면 실행되도록 함수안에 설정하기\n        script.onload = function() {\n            var container = document.getElementById(\"map\"); // 지도를 담을 영역의 DOM 레퍼런스\n            var options = {\n                // 지도를 생성할 때 필요한 기본 옵션\n                center: new window.kakao.maps.LatLng(37.556923, 126.923877),\n                level: 3\n            };\n            var map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴\n            console.log(map);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"map\",\n            style: {\n                width: 500,\n                height: 400\n            }\n        }, void 0, false, {\n            fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/26-03-kakao-map-routed/index.tsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n};\n_s(KakaoMapRoutedPage, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = KakaoMapRoutedPage;\nvar _c;\n$RefreshReg$(_c, \"KakaoMapRoutedPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8yNi0wMy1rYWthby1tYXAtcm91dGVkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDaUM7O0FBTWxCLFFBQVEsQ0FBQ0Msa0JBQWtCLEdBQUcsQ0FBQzs7SUFDNUNELGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2YsR0FBSyxDQUFDRSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLENBQVEsUUFBRSxDQUFtQyxFQUFZOztRQUNuRkYsTUFBTixDQUFDRyxHQUFHLEdBQUcsQ0FBeUU7UUFDdEZGLFFBQVEsQ0FBQ0csSUFBSSxDQUFDQyxXQUFXLENBQUNMLE1BQU07UUFHaEMsRUFBcUM7UUFDTEEsTUFBMUIsQ0FBQ00sTUFBTSxHQUFHLFFBQ3BCLEdBRDBCLENBQUM7WUFDckIsR0FBSyxDQUFDQyxTQUFTLEdBQUdOLFFBQVEsQ0FBQ08sY0FBYyxDQUFDLENBQUssTUFBRyxDQUFzQixFQUF3QjtZQUN4RSxHQUFuQixDQUFDQyxPQUFPLEdBQUcsQ0FBQztnQkFDZixFQUFzQjtnQkFDTUMsTUFBdEIsRUFBRSxHQUFHLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJLENBQUNDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsVUFBVTtnQkFDMURDLEtBQUssRUFBRSxDQUFDO1lBQ1YsQ0FBQztZQUVELEdBQUssQ0FBQ0MsR0FBRyxHQUFHLEdBQUcsQ0FBQ0wsTUFBTSxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FBQ0ksR0FBRyxDQUFDVixTQUFTLEVBQUVFLE9BQU8sRUFBRyxDQUFnQjtZQUMzRVMsT0FBTyxDQUFDQyxHQUFHLENBQUNILEdBQUc7UUFDakIsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxNQUFNOzhGQVFESSxDQUFHO1lBQUNDLEVBQUUsRUFBQyxDQUFLO1lBQUNDLEtBQUssRUFBRSxDQUFDO2dCQUFDQyxLQUFLLEVBQUUsR0FBRztnQkFBRUMsTUFBTSxFQUFFLEdBQUc7WUFBQyxDQUFDOzs7Ozs7O0FBR3RELENBQUM7R0FoQ3VCekIsa0JBQWtCO0tBQWxCQSxrQkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvMjYtMDMta2FrYW8tbWFwLXJvdXRlZC9pbmRleC50c3g/ZTYxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IHR5cGVvZiBnbG9iYWxUaGlzICYge1xuICBrYWthbzogYW55O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gS2FrYW9NYXBSb3V0ZWRQYWdlKCkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikgLy8gc2NyaXB0IO2DnOq3uOqwgCDrp4zrk6TquLAgPHNjcmlwdD48L3NjcmlwdD5cbiAgICBzY3JpcHQuc3JjID0gXCIvL2RhcGkua2FrYW8uY29tL3YyL21hcHMvc2RrLmpzP2FwcGtleT01NGJjM2FmYzdmNTFiYzQ4ZTQxZThlMzA2OTY4OWVhMlwiXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpXG5cblxuICAgIC8vIHNjcmlwdCDqsIAgb25sb2FkIOuQmOuptCDsi6TtlonrkJjrj4TroZ0g7ZWo7IiY7JWI7JeQIOyEpOygle2VmOq4sFxuICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKTsgLy8g7KeA64+E66W8IOuLtOydhCDsmIHsl63snZggRE9NIOugiO2NvOufsOyKpFxuICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgLy8g7KeA64+E66W8IOyDneyEse2VoCDrlYwg7ZWE7JqU7ZWcIOq4sOuzuCDsmLXshZhcbiAgICAgICAgY2VudGVyOiBuZXcgd2luZG93Lmtha2FvLm1hcHMuTGF0TG5nKDM3LjU1NjkyMywgMTI2LjkyMzg3NyksIC8vIOyngOuPhOydmCDspJHsi6zsooztkZwuXG4gICAgICAgIGxldmVsOiAzLCAvLyDsp4Drj4TsnZgg66CI67KoKO2ZleuMgCwg7LaV7IaMIOygleuPhClcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IG1hcCA9IG5ldyB3aW5kb3cua2FrYW8ubWFwcy5NYXAoY29udGFpbmVyLCBvcHRpb25zKTsgLy8g7KeA64+EIOyDneyEsSDrsI8g6rCd7LK0IOumrO2EtFxuICAgICAgY29uc29sZS5sb2cobWFwKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7Lyo8SGVhZD4qL31cbiAgICAgIHsvKiAgPHNjcmlwdCovfVxuICAgICAgey8qICAgIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiovfVxuICAgICAgey8qICAgIHNyYz1cIi8vZGFwaS5rYWthby5jb20vdjIvbWFwcy9zZGsuanM/YXBwa2V5PTU0YmMzYWZjN2Y1MWJjNDhlNDFlOGUzMDY5Njg5ZWEyXCIqL31cbiAgICAgIHsvKiAgPjwvc2NyaXB0PiovfVxuICAgICAgey8qPC9IZWFkPiovfVxuICAgICAgPGRpdiBpZD1cIm1hcFwiIHN0eWxlPXt7IHdpZHRoOiA1MDAsIGhlaWdodDogNDAwIH19PjwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIktha2FvTWFwUm91dGVkUGFnZSIsInNjcmlwdCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIm9ubG9hZCIsImNvbnRhaW5lciIsImdldEVsZW1lbnRCeUlkIiwib3B0aW9ucyIsImNlbnRlciIsIndpbmRvdyIsImtha2FvIiwibWFwcyIsIkxhdExuZyIsImxldmVsIiwibWFwIiwiTWFwIiwiY29uc29sZSIsImxvZyIsImRpdiIsImlkIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/26-03-kakao-map-routed/index.tsx\n");

/***/ })

});