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
exports.id = "pages/19-02-image-ref";
exports.ids = ["pages/19-02-image-ref"];
exports.modules = {

/***/ "./pages/19-02-image-ref/index.tsx":
/*!*****************************************!*\
  !*** ./pages/19-02-image-ref/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ImageUploadPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst UPLOAD_FILE = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`\n  mutation uploadFile($file: Upload!) {\n    uploadFile(file: $file) {\n      url\n    }\n  }\n`;\nfunction ImageUploadPage() {\n    const fileRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { 0: imgUrl , 1: setImgUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [uploadFile] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(UPLOAD_FILE);\n    const onChangeFile = async (event)=>{\n        var ref;\n        const file = (ref = event.target.files) === null || ref === void 0 ? void 0 : ref[0]; // multiple 속성으로 여러개 드래그 가능\n        console.log(file);\n        try {\n            var ref1, ref2;\n            const result = await uploadFile({\n                variables: {\n                    file\n                }\n            });\n            var ref3;\n            setImgUrl((ref3 = (ref1 = result.data) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.uploadFile) === null || ref2 === void 0 ? void 0 : ref2.url) !== null && ref3 !== void 0 ? ref3 : \"\");\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    const onClickImage = ()=>{\n        var ref;\n        (ref = fileRef.current) === null || ref === void 0 ? void 0 : ref.click();\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"50px\",\n                    height: \"50px\",\n                    background: \"green\"\n                },\n                onClick: onClickImage,\n                children: \"이미지선택\"\n            }, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/19-02-image-ref/index.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                style: {\n                    display: \"none\"\n                },\n                type: \"file\",\n                onChange: onChangeFile,\n                ref: fileRef\n            }, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/19-02-image-ref/index.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: `https://storage.googleapis.com/${imgUrl}`\n            }, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/19-02-image-ref/index.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8xOS0wMi1pbWFnZS1yZWYvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ0o7QUFFakQsS0FBSyxDQUFDSSxXQUFXLEdBQUdGLCtDQUFHLENBQUM7Ozs7OztBQU14QjtBQUVlLFFBQVEsQ0FBQ0csZUFBZSxHQUFHLENBQUM7SUFDekMsS0FBSyxDQUFDQyxPQUFPLEdBQUdOLDZDQUFNLENBQW1CLElBQUk7SUFDN0MsS0FBSyxNQUFFTyxNQUFNLE1BQUVDLFNBQVMsTUFBSVAsK0NBQVEsQ0FBQyxDQUFFO0lBQ3ZDLEtBQUssRUFBRVEsVUFBVSxJQUFJTiwyREFBVyxDQUFDQyxXQUFXO0lBRTVDLEtBQUssQ0FBQ00sWUFBWSxVQUFVQyxLQUFvQyxHQUFLLENBQUM7WUFDdkRBLEdBQWtCO1FBQS9CLEtBQUssQ0FBQ0MsSUFBSSxJQUFHRCxHQUFrQixHQUFsQkEsS0FBSyxDQUFDRSxNQUFNLENBQUNDLEtBQUssY0FBbEJILEdBQWtCLEtBQWxCQSxJQUFJLENBQUpBLENBQXVCLEdBQXZCQSxJQUFJLENBQUpBLENBQXVCLEdBQXZCQSxHQUFrQixDQUFHLENBQUMsRUFBRyxDQUEyQixFQUF3QjtRQUNqRUksT0FBakIsQ0FBQ0MsR0FBRyxDQUFDSixJQUFJO1FBRWhCLEdBQUcsQ0FBQyxDQUFDO2dCQUVPSyxJQUFXO1lBRHJCLEtBQUssQ0FBQ0EsTUFBTSxHQUFHLEtBQUssQ0FBQ1IsVUFBVSxDQUFDLENBQUM7Z0JBQUNTLFNBQVMsRUFBRSxDQUFDO29CQUFDTixJQUFJO2dCQUFDLENBQUM7WUFBQyxDQUFDO2dCQUM3Q0ssSUFBNEI7WUFBdENULFNBQVMsRUFBQ1MsSUFBNEIsSUFBNUJBLElBQVcsR0FBWEEsTUFBTSxDQUFDRSxJQUFJLGNBQVhGLElBQVcsS0FBWEEsSUFBSSxDQUFKQSxDQUF1QixHQUF2QkEsSUFBSSxDQUFKQSxDQUF1QixXQUF2QkEsSUFBVyxDQUFFUixVQUFVLHVCQUF2QlEsSUFBSSxDQUFKQSxDQUF1QixHQUF2QkEsSUFBSSxDQUFKQSxDQUF1QixRQUFFRyxHQUFHLGNBQTVCSCxJQUE0QixjQUE1QkEsSUFBNEIsR0FBSSxDQUFFO1FBQzlDLENBQUMsQ0FBQyxLQUFLLEVBQUVJLEdBQUcsRUFBRSxDQUFDO1lBQ2JOLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxHQUFHO1FBQ2pCLENBQUM7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDQyxZQUFZLE9BQVMsQ0FBQztZQUMxQmhCLEdBQWU7U0FBZkEsR0FBZSxHQUFmQSxPQUFPLENBQUNpQixPQUFPLGNBQWZqQixHQUFlLEtBQWZBLElBQUksQ0FBSkEsQ0FBc0IsR0FBdEJBLElBQUksQ0FBSkEsQ0FBc0IsR0FBdEJBLEdBQWUsQ0FBRWtCLEtBQUs7SUFDeEIsQ0FBQztJQUVELE1BQU07O3dGQUVEQyxDQUFHO2dCQUNGQyxLQUFLLEVBQUUsQ0FBQztvQkFBQ0MsS0FBSyxFQUFFLENBQU07b0JBQUVDLE1BQU0sRUFBRSxDQUFNO29CQUFFQyxVQUFVLEVBQUUsQ0FBTztnQkFBQyxDQUFDO2dCQUM3REMsT0FBTyxFQUFFUixZQUFZOzBCQUN0QixDQUVEOzs7Ozs7d0ZBQ0NTLENBQUs7Z0JBQ0pMLEtBQUssRUFBRSxDQUFDO29CQUFDTSxPQUFPLEVBQUUsQ0FBTTtnQkFBQyxDQUFDO2dCQUMxQkMsSUFBSSxFQUFDLENBQU07Z0JBQ1hDLFFBQVEsRUFBRXhCLFlBQVk7Z0JBQ3RCeUIsR0FBRyxFQUFFN0IsT0FBTzs7Ozs7O3dGQUViOEIsQ0FBRztnQkFBQ0MsR0FBRyxHQUFHLCtCQUErQixFQUFFOUIsTUFBTTs7Ozs7Ozs7QUFHeEQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsYXNzLy4vcGFnZXMvMTktMDItaW1hZ2UtcmVmL2luZGV4LnRzeD82ZDZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZUV2ZW50LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBncWwsIHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cbmNvbnN0IFVQTE9BRF9GSUxFID0gZ3FsYFxuICBtdXRhdGlvbiB1cGxvYWRGaWxlKCRmaWxlOiBVcGxvYWQhKSB7XG4gICAgdXBsb2FkRmlsZShmaWxlOiAkZmlsZSkge1xuICAgICAgdXJsXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZVVwbG9hZFBhZ2UoKSB7XG4gIGNvbnN0IGZpbGVSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IFtpbWdVcmwsIHNldEltZ1VybF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3VwbG9hZEZpbGVdID0gdXNlTXV0YXRpb24oVVBMT0FEX0ZJTEUpO1xuXG4gIGNvbnN0IG9uQ2hhbmdlRmlsZSA9IGFzeW5jIChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzPy5bMF07IC8vIG11bHRpcGxlIOyGjeyEseycvOuhnCDsl6zrn6zqsJwg65Oc656Y6re4IOqwgOuKpVxuICAgIGNvbnNvbGUubG9nKGZpbGUpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHVwbG9hZEZpbGUoeyB2YXJpYWJsZXM6IHsgZmlsZSB9IH0pO1xuICAgICAgc2V0SW1nVXJsKHJlc3VsdC5kYXRhPy51cGxvYWRGaWxlPy51cmwgPz8gXCJcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBvbkNsaWNrSW1hZ2UgPSAoKSA9PiB7XG4gICAgZmlsZVJlZi5jdXJyZW50Py5jbGljaygpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiLCBiYWNrZ3JvdW5kOiBcImdyZWVuXCIgfX1cbiAgICAgICAgb25DbGljaz17b25DbGlja0ltYWdlfVxuICAgICAgPlxuICAgICAgICDsnbTrr7jsp4DshKDtg51cbiAgICAgIDwvZGl2PlxuICAgICAgPGlucHV0XG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XG4gICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRmlsZX1cbiAgICAgICAgcmVmPXtmaWxlUmVmfVxuICAgICAgLz5cbiAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tLyR7aW1nVXJsfWB9IC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlUmVmIiwidXNlU3RhdGUiLCJncWwiLCJ1c2VNdXRhdGlvbiIsIlVQTE9BRF9GSUxFIiwiSW1hZ2VVcGxvYWRQYWdlIiwiZmlsZVJlZiIsImltZ1VybCIsInNldEltZ1VybCIsInVwbG9hZEZpbGUiLCJvbkNoYW5nZUZpbGUiLCJldmVudCIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHQiLCJ2YXJpYWJsZXMiLCJkYXRhIiwidXJsIiwiZXJyIiwib25DbGlja0ltYWdlIiwiY3VycmVudCIsImNsaWNrIiwiZGl2Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmQiLCJvbkNsaWNrIiwiaW5wdXQiLCJkaXNwbGF5IiwidHlwZSIsIm9uQ2hhbmdlIiwicmVmIiwiaW1nIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/19-02-image-ref/index.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

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
var __webpack_exports__ = (__webpack_exec__("./pages/19-02-image-ref/index.tsx"));
module.exports = __webpack_exports__;

})();