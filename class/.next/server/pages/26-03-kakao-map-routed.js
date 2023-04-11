"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/26-03-kakao-map-routed";
exports.ids = ["pages/26-03-kakao-map-routed"];
exports.modules = {

/***/ "./pages/26-03-kakao-map-routed/index.tsx":
/*!************************************************!*\
  !*** ./pages/26-03-kakao-map-routed/index.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ KakaoMapRoutedPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction KakaoMapRoutedPage() {\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const script = document.createElement(\"script\"); // script 태그가 만들기 <script></script>\n        script.src = \"//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=54bc3afc7f51bc48e41e8e3069689ea2\";\n        document.head.appendChild(script);\n        // script 가 onload 되면 실행되도록 함수안에 설정하기\n        script.onload = ()=>{\n            window.kakao.maps.load(function() {\n                const container = document.getElementById(\"map\"); // 지도를 담을 영역의 DOM 레퍼런스\n                const options = {\n                    // 지도를 생성할 때 필요한 기본 옵션\n                    center: new window.kakao.maps.LatLng(37.556923, 126.923877),\n                    level: 3\n                };\n                const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴\n                console.log(map);\n            });\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"map\",\n            style: {\n                width: 500,\n                height: 400\n            }\n        }, void 0, false, {\n            fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/26-03-kakao-map-routed/index.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8yNi0wMy1rYWthby1tYXAtcm91dGVkL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUM7QUFPbEIsUUFBUSxDQUFDQyxrQkFBa0IsR0FBRyxDQUFDO0lBQzVDRCxnREFBUyxLQUFPLENBQUM7UUFDZixLQUFLLENBQUNFLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsQ0FBUSxTQUFHLENBQW1DLEVBQVk7UUFDcEZGLE1BQU4sQ0FBQ0csR0FBRyxHQUNSLENBQXdGO1FBQzFGRixRQUFRLENBQUNHLElBQUksQ0FBQ0MsV0FBVyxDQUFDTCxNQUFNO1FBRWhDLEVBQXFDO1FBQ0xBLE1BQTFCLENBQUNNLE1BQU0sT0FBUyxDQUFDO1lBQ3JCQyxNQUFNLENBQUNDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQUMsUUFBUSxHQUFJLENBQUM7Z0JBQ2xDLEtBQUssQ0FBQ0MsU0FBUyxHQUFHVixRQUFRLENBQUNXLGNBQWMsQ0FBQyxDQUFLLE1BQUcsQ0FBc0IsRUFBd0I7Z0JBQ3hFLEtBQW5CLENBQUNDLE9BQU8sR0FBRyxDQUFDO29CQUNmLEVBQXNCO29CQUNNQyxNQUF0QixFQUFFLEdBQUcsQ0FBQ1AsTUFBTSxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FBQ00sTUFBTSxDQUFDLFNBQVMsRUFBRSxVQUFVO29CQUMxREMsS0FBSyxFQUFFLENBQUM7Z0JBQ1YsQ0FBQztnQkFFRCxLQUFLLENBQUNDLEdBQUcsR0FBRyxHQUFHLENBQUNWLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJLENBQUNTLEdBQUcsQ0FBQ1AsU0FBUyxFQUFFRSxPQUFPLEVBQUcsQ0FBZ0I7Z0JBQzNFTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsR0FBRztZQUNqQixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxNQUFNOzhGQVFESSxDQUFHO1lBQUNDLEVBQUUsRUFBQyxDQUFLO1lBQUNDLEtBQUssRUFBRSxDQUFDO2dCQUFDQyxLQUFLLEVBQUUsR0FBRztnQkFBRUMsTUFBTSxFQUFFLEdBQUc7WUFBQyxDQUFDOzs7Ozs7O0FBR3RELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGFzcy8uL3BhZ2VzLzI2LTAzLWtha2FvLW1hcC1yb3V0ZWQvaW5kZXgudHN4P2U2MWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmRlY2xhcmUgY29uc3Qgd2luZG93OiB0eXBlb2YgZ2xvYmFsVGhpcyAmIHtcbiAga2FrYW86IGFueTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEtha2FvTWFwUm91dGVkUGFnZSgpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpOyAvLyBzY3JpcHQg7YOc6re46rCAIOunjOuTpOq4sCA8c2NyaXB0Pjwvc2NyaXB0PlxuICAgIHNjcmlwdC5zcmMgPVxuICAgICAgXCIvL2RhcGkua2FrYW8uY29tL3YyL21hcHMvc2RrLmpzP2F1dG9sb2FkPWZhbHNlJmFwcGtleT01NGJjM2FmYzdmNTFiYzQ4ZTQxZThlMzA2OTY4OWVhMlwiO1xuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcblxuICAgIC8vIHNjcmlwdCDqsIAgb25sb2FkIOuQmOuptCDsi6TtlonrkJjrj4TroZ0g7ZWo7IiY7JWI7JeQIOyEpOygle2VmOq4sFxuICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICB3aW5kb3cua2FrYW8ubWFwcy5sb2FkKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYXBcIik7IC8vIOyngOuPhOulvCDri7TsnYQg7JiB7Jet7J2YIERPTSDroIjtjbzrn7DsiqRcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAvLyDsp4Drj4Trpbwg7IOd7ISx7ZWgIOuVjCDtlYTsmpTtlZwg6riw67O4IOyYteyFmFxuICAgICAgICAgIGNlbnRlcjogbmV3IHdpbmRvdy5rYWthby5tYXBzLkxhdExuZygzNy41NTY5MjMsIDEyNi45MjM4NzcpLCAvLyDsp4Drj4TsnZgg7KSR7Ius7KKM7ZGcLlxuICAgICAgICAgIGxldmVsOiAzLCAvLyDsp4Drj4TsnZgg66CI67KoKO2ZleuMgCwg7LaV7IaMIOygleuPhClcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBtYXAgPSBuZXcgd2luZG93Lmtha2FvLm1hcHMuTWFwKGNvbnRhaW5lciwgb3B0aW9ucyk7IC8vIOyngOuPhCDsg53shLEg67CPIOqwneyytCDrpqzthLRcbiAgICAgICAgY29uc29sZS5sb2cobWFwKTtcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7Lyo8SGVhZD4qL31cbiAgICAgIHsvKiAgPHNjcmlwdCovfVxuICAgICAgey8qICAgIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIiovfVxuICAgICAgey8qICAgIHNyYz1cIi8vZGFwaS5rYWthby5jb20vdjIvbWFwcy9zZGsuanM/IGF1dG9sb2FkPWZhbHNlIGFwcGtleT01NGJjM2FmYzdmNTFiYzQ4ZTQxZThlMzA2OTY4OWVhMlwiKi99XG4gICAgICB7LyogID48L3NjcmlwdD4qL31cbiAgICAgIHsvKjwvSGVhZD4qL31cbiAgICAgIDxkaXYgaWQ9XCJtYXBcIiBzdHlsZT17eyB3aWR0aDogNTAwLCBoZWlnaHQ6IDQwMCB9fT48L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJLYWthb01hcFJvdXRlZFBhZ2UiLCJzY3JpcHQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJvbmxvYWQiLCJ3aW5kb3ciLCJrYWthbyIsIm1hcHMiLCJsb2FkIiwiY29udGFpbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJvcHRpb25zIiwiY2VudGVyIiwiTGF0TG5nIiwibGV2ZWwiLCJtYXAiLCJNYXAiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaWQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/26-03-kakao-map-routed/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/26-03-kakao-map-routed/index.tsx"));
module.exports = __webpack_exports__;

})();