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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ KakaoMapRoutedPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\nfunction KakaoMapRoutedPage() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var script = document.createElement(\"script\"); // script 태그가 만들기 <script></script>\n        script.src = \"//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=54bc3afc7f51bc48e41e8e3069689ea2\";\n        document.head.appendChild(script);\n        // script 가 onload 되면 실행되도록 함수안에 설정하기\n        script.onload = function() {\n            window.kakao.maps.load(function() {\n                var container = document.getElementById(\"map\"); // 지도를 담을 영역의 DOM 레퍼런스\n                var options = {\n                    // 지도를 생성할 때 필요한 기본 옵션\n                    center: new window.kakao.maps.LatLng(37.556923, 126.923877),\n                    level: 3\n                };\n                var map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴\n                console.log(map);\n            });\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"map\",\n            style: {\n                width: 500,\n                height: 400\n            }\n        }, void 0, false, {\n            fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/26-03-kakao-map-routed/index.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n};\n_s(KakaoMapRoutedPage, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = KakaoMapRoutedPage;\nvar _c;\n$RefreshReg$(_c, \"KakaoMapRoutedPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8yNi0wMy1rYWthby1tYXAtcm91dGVkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUM7O0FBT2xCLFFBQVEsQ0FBQ0Msa0JBQWtCLEdBQUcsQ0FBQzs7SUFDNUNELGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2YsR0FBSyxDQUFDRSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLENBQVEsU0FBRyxDQUFtQyxFQUFZO1FBQ3BGRixNQUFOLENBQUNHLEdBQUcsR0FDUixDQUF3RjtRQUMxRkYsUUFBUSxDQUFDRyxJQUFJLENBQUNDLFdBQVcsQ0FBQ0wsTUFBTTtRQUVoQyxFQUFxQztRQUNMQSxNQUExQixDQUFDTSxNQUFNLEdBQUcsUUFDcEIsR0FEMEIsQ0FBQztZQUNyQkMsTUFBTSxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FBQ0MsSUFBSSxDQUFDLFFBQVEsR0FBSSxDQUFDO2dCQUNsQyxHQUFLLENBQUNDLFNBQVMsR0FBR1YsUUFBUSxDQUFDVyxjQUFjLENBQUMsQ0FBSyxNQUFHLENBQXNCLEVBQXdCO2dCQUN4RSxHQUFuQixDQUFDQyxPQUFPLEdBQUcsQ0FBQztvQkFDZixFQUFzQjtvQkFDTUMsTUFBdEIsRUFBRSxHQUFHLENBQUNQLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJLENBQUNNLE1BQU0sQ0FBQyxTQUFTLEVBQUUsVUFBVTtvQkFDMURDLEtBQUssRUFBRSxDQUFDO2dCQUNWLENBQUM7Z0JBRUQsR0FBSyxDQUFDQyxHQUFHLEdBQUcsR0FBRyxDQUFDVixNQUFNLENBQUNDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDUyxHQUFHLENBQUNQLFNBQVMsRUFBRUUsT0FBTyxFQUFHLENBQWdCO2dCQUMzRU0sT0FBTyxDQUFDQyxHQUFHLENBQUNILEdBQUc7WUFDakIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTTs4RkFRREksQ0FBRztZQUFDQyxFQUFFLEVBQUMsQ0FBSztZQUFDQyxLQUFLLEVBQUUsQ0FBQztnQkFBQ0MsS0FBSyxFQUFFLEdBQUc7Z0JBQUVDLE1BQU0sRUFBRSxHQUFHO1lBQUMsQ0FBQzs7Ozs7OztBQUd0RCxDQUFDO0dBbEN1QjFCLGtCQUFrQjtLQUFsQkEsa0JBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzLzI2LTAzLWtha2FvLW1hcC1yb3V0ZWQvaW5kZXgudHN4P2U2MWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmRlY2xhcmUgY29uc3Qgd2luZG93OiB0eXBlb2YgZ2xvYmFsVGhpcyAmIHtcbiAga2FrYW86IGFueTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEtha2FvTWFwUm91dGVkUGFnZSgpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpOyAvLyBzY3JpcHQg7YOc6re46rCAIOunjOuTpOq4sCA8c2NyaXB0Pjwvc2NyaXB0PlxuICAgIHNjcmlwdC5zcmMgPVxuICAgICAgXCIvL2RhcGkua2FrYW8uY29tL3YyL21hcHMvc2RrLmpzP2F1dG9sb2FkPWZhbHNlJmFwcGtleT01NGJjM2FmYzdmNTFiYzQ4ZTQxZThlMzA2OTY4OWVhMlwiO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblxuICAgIC8vIHNjcmlwdCDqsIAgb25sb2FkIOuQmOuptCDsi6TtlonrkJjrj4TroZ0g7ZWo7IiY7JWI7JeQIOyEpOygle2VmOq4sFxuICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICB3aW5kb3cua2FrYW8ubWFwcy5sb2FkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIik7IC8vIOyngOuPhOulvCDri7TsnYQg7JiB7Jet7J2YIERPTSDroIjtjbzrn7DsiqRcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAvLyDsp4Drj4Trpbwg7IOd7ISx7ZWgIOuVjCDtlYTsmpTtlZwg6riw67O4IOyYteyFmFxuICAgICAgICAgIGNlbnRlcjogbmV3IHdpbmRvdy5rYWthby5tYXBzLkxhdExuZygzNy41NTY5MjMsIDEyNi45MjM4NzcpLCAvLyDsp4Drj4TsnZgg7KSR7Ius7KKM7ZGcLlxuICAgICAgICAgIGxldmVsOiAzLCAvLyDsp4Drj4TsnZgg66CI67KoKO2ZleuMgCwg7LaV7IaMIOygleuPhClcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBtYXAgPSBuZXcgd2luZG93Lmtha2FvLm1hcHMuTWFwKGNvbnRhaW5lciwgb3B0aW9ucyk7IC8vIOyngOuPhCDsg53shLEg67CPIOqwneyytCDrpqzthLRcbiAgICAgICAgY29uc29sZS5sb2cobWFwKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7Lyo8SGVhZD4qL31cbiAgICAgIHsvKiAgPHNjcmlwdCovfVxuICAgICAgey8qICAgIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiovfVxuICAgICAgey8qICAgIHNyYz1cIi8vZGFwaS5rYWthby5jb20vdjIvbWFwcy9zZGsuanM/IGF1dG9sb2FkPWZhbHNlIGFwcGtleT01NGJjM2FmYzdmNTFiYzQ4ZTQxZThlMzA2OTY4OWVhMlwiKi99XG4gICAgICB7LyogID48L3NjcmlwdD4qL31cbiAgICAgIHsvKjwvSGVhZD4qL31cbiAgICAgIDxkaXYgaWQ9XCJtYXBcIiBzdHlsZT17eyB3aWR0aDogNTAwLCBoZWlnaHQ6IDQwMCB9fT48L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJLYWthb01hcFJvdXRlZFBhZ2UiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJvbmxvYWQiLCJ3aW5kb3ciLCJrYWthbyIsIm1hcHMiLCJsb2FkIiwiY29udGFpbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJvcHRpb25zIiwiY2VudGVyIiwiTGF0TG5nIiwibGV2ZWwiLCJtYXAiLCJNYXAiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaWQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/26-03-kakao-map-routed/index.tsx\n");

/***/ })

});