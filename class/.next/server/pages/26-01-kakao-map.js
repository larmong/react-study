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
exports.id = "pages/26-01-kakao-map";
exports.ids = ["pages/26-01-kakao-map"];
exports.modules = {

/***/ "./pages/26-01-kakao-map/index.tsx":
/*!*****************************************!*\
  !*** ./pages/26-01-kakao-map/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ KakaoMapPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction KakaoMapPage() {\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const container = document.getElementById(\"map\"); // 지도를 담을 영역의 DOM 레퍼런스\n        const options = {\n            // 지도를 생성할 때 필요한 기본 옵션\n            center: new window.kakao.maps.LatLng(37.556923, 126.923877),\n            level: 3\n        };\n        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴\n        console.log(map);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                    type: \"text/javascript\",\n                    src: \"//dapi.kakao.com/v2/maps/sdk.js?appkey=54bc3afc7f51bc48e41e8e3069689ea2\"\n                }, void 0, false, {\n                    fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/26-01-kakao-map/index.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/26-01-kakao-map/index.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"map\",\n                style: {\n                    width: 500,\n                    height: 400\n                }\n            }, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/26-01-kakao-map/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8yNi0wMS1rYWthby1tYXAvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ0s7QUFNbEIsUUFBUSxDQUFDRSxZQUFZLEdBQUcsQ0FBQztJQUN0Q0QsZ0RBQVMsS0FBTyxDQUFDO1FBQ2YsS0FBSyxDQUFDRSxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLENBQUssTUFBRyxDQUFzQixFQUF3QjtRQUN4RSxLQUFuQixDQUFDQyxPQUFPLEdBQUcsQ0FBQztZQUNmLEVBQXNCO1lBQ01DLE1BQXRCLEVBQUUsR0FBRyxDQUFDQyxNQUFNLENBQUNDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDQyxNQUFNLENBQUMsU0FBUyxFQUFFLFVBQVU7WUFDMURDLEtBQUssRUFBRSxDQUFDO1FBQ1YsQ0FBQztRQUVELEtBQUssQ0FBQ0MsR0FBRyxHQUFHLEdBQUcsQ0FBQ0wsTUFBTSxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FBQ0ksR0FBRyxDQUFDWCxTQUFTLEVBQUVHLE9BQU8sRUFBRyxDQUFnQjtRQUMzRVMsT0FBTyxDQUFDQyxHQUFHLENBQUNILEdBQUc7SUFDakIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU07O3dGQUVEYixrREFBSTtzR0FDRmlCLENBQU07b0JBQ0xDLElBQUksRUFBQyxDQUFpQjtvQkFDdEJDLEdBQUcsRUFBQyxDQUF5RTs7Ozs7Ozs7Ozs7d0ZBR2hGQyxDQUFHO2dCQUFDQyxFQUFFLEVBQUMsQ0FBSztnQkFBQ0MsS0FBSyxFQUFFLENBQUM7b0JBQUNDLEtBQUssRUFBRSxHQUFHO29CQUFFQyxNQUFNLEVBQUUsR0FBRztnQkFBQyxDQUFDOzs7Ozs7OztBQUd0RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xhc3MvLi9wYWdlcy8yNi0wMS1rYWthby1tYXAvaW5kZXgudHN4PzFhMjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmRlY2xhcmUgY29uc3Qgd2luZG93OiB0eXBlb2YgZ2xvYmFsVGhpcyAmIHtcbiAga2FrYW86IGFueTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEtha2FvTWFwUGFnZSgpIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcFwiKTsgLy8g7KeA64+E66W8IOuLtOydhCDsmIHsl63snZggRE9NIOugiO2NvOufsOyKpFxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAvLyDsp4Drj4Trpbwg7IOd7ISx7ZWgIOuVjCDtlYTsmpTtlZwg6riw67O4IOyYteyFmFxuICAgICAgY2VudGVyOiBuZXcgd2luZG93Lmtha2FvLm1hcHMuTGF0TG5nKDM3LjU1NjkyMywgMTI2LjkyMzg3NyksIC8vIOyngOuPhOydmCDspJHsi6zsooztkZwuXG4gICAgICBsZXZlbDogMywgLy8g7KeA64+E7J2YIOugiOuyqCjtmZXrjIAsIOy2leyGjCDsoJXrj4QpXG4gICAgfTtcblxuICAgIGNvbnN0IG1hcCA9IG5ldyB3aW5kb3cua2FrYW8ubWFwcy5NYXAoY29udGFpbmVyLCBvcHRpb25zKTsgLy8g7KeA64+EIOyDneyEsSDrsI8g6rCd7LK0IOumrO2EtFxuICAgIGNvbnNvbGUubG9nKG1hcCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIlxuICAgICAgICAgIHNyYz1cIi8vZGFwaS5rYWthby5jb20vdjIvbWFwcy9zZGsuanM/YXBwa2V5PTU0YmMzYWZjN2Y1MWJjNDhlNDFlOGUzMDY5Njg5ZWEyXCJcbiAgICAgICAgPjwvc2NyaXB0PlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBpZD1cIm1hcFwiIHN0eWxlPXt7IHdpZHRoOiA1MDAsIGhlaWdodDogNDAwIH19PjwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VFZmZlY3QiLCJLYWthb01hcFBhZ2UiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib3B0aW9ucyIsImNlbnRlciIsIndpbmRvdyIsImtha2FvIiwibWFwcyIsIkxhdExuZyIsImxldmVsIiwibWFwIiwiTWFwIiwiY29uc29sZSIsImxvZyIsInNjcmlwdCIsInR5cGUiLCJzcmMiLCJkaXYiLCJpZCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/26-01-kakao-map/index.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_exports__ = (__webpack_exec__("./pages/26-01-kakao-map/index.tsx"));
module.exports = __webpack_exports__;

})();