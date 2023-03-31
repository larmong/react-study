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
exports.id = "pages/19-01-image-upload";
exports.ids = ["pages/19-01-image-upload"];
exports.modules = {

/***/ "./pages/19-01-image-upload/index.tsx":
/*!********************************************!*\
  !*** ./pages/19-01-image-upload/index.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ImageUploadPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst UPLOAD_FILE = _apollo_client__WEBPACK_IMPORTED_MODULE_2__.gql`\n  mutation uploadFile($file: Upload!) {\n    uploadFile(file: $file) {\n      url\n    }\n  }\n`;\nfunction ImageUploadPage() {\n    const { 0: imgUrl , 1: setImgUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [uploadFile] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_2__.useMutation)(UPLOAD_FILE);\n    const onChangeFile = async (event)=>{\n        var ref;\n        const file = (ref = event.target.files) === null || ref === void 0 ? void 0 : ref[0]; // multiple 속성으로 여러개 드래그 가능\n        console.log(file);\n        try {\n            var ref1, ref2;\n            const result = await uploadFile({\n                variables: {\n                    file\n                }\n            });\n            var ref3;\n            setImgUrl((ref3 = (ref1 = result.data) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.uploadFile) === null || ref2 === void 0 ? void 0 : ref2.url) !== null && ref3 !== void 0 ? ref3 : \"\");\n        } catch (err) {\n            console.log(err);\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                onChange: onChangeFile\n            }, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/19-01-image-upload/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: `https://storage.googleapis.com/${imgUrl}`\n            }, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/19-01-image-upload/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8xOS0wMS1pbWFnZS11cGxvYWQvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTZDO0FBQ0k7QUFHakQsS0FBSyxDQUFDRyxXQUFXLEdBQUdGLCtDQUFHLENBQUM7Ozs7OztBQU14QjtBQUVlLFFBQVEsQ0FBQ0csZUFBZSxHQUFHLENBQUM7SUFDekMsS0FBSyxNQUFFQyxNQUFNLE1BQUVDLFNBQVMsTUFBSU4sK0NBQVEsQ0FBQyxDQUFFO0lBQ3ZDLEtBQUssRUFBRU8sVUFBVSxJQUFJTCwyREFBVyxDQUFDQyxXQUFXO0lBRTVDLEtBQUssQ0FBQ0ssWUFBWSxVQUFVQyxLQUFvQyxHQUFLLENBQUM7WUFDdkRBLEdBQWtCO1FBQS9CLEtBQUssQ0FBQ0MsSUFBSSxJQUFHRCxHQUFrQixHQUFsQkEsS0FBSyxDQUFDRSxNQUFNLENBQUNDLEtBQUssY0FBbEJILEdBQWtCLEtBQWxCQSxJQUFJLENBQUpBLENBQXVCLEdBQXZCQSxJQUFJLENBQUpBLENBQXVCLEdBQXZCQSxHQUFrQixDQUFHLENBQUMsRUFBRyxDQUEyQjtRQUNqRUksT0FBTyxDQUFDQyxHQUFHLENBQUNKLElBQUk7UUFFaEIsR0FBRyxDQUFDLENBQUM7Z0JBRU9LLElBQVc7WUFEckIsS0FBSyxDQUFDQSxNQUFNLEdBQUcsS0FBSyxDQUFDUixVQUFVLENBQUMsQ0FBQztnQkFBQ1MsU0FBUyxFQUFFLENBQUM7b0JBQUNOLElBQUk7Z0JBQUMsQ0FBQztZQUFDLENBQUM7Z0JBQzdDSyxJQUE0QjtZQUF0Q1QsU0FBUyxFQUFDUyxJQUE0QixJQUE1QkEsSUFBVyxHQUFYQSxNQUFNLENBQUNFLElBQUksY0FBWEYsSUFBVyxLQUFYQSxJQUFJLENBQUpBLENBQXVCLEdBQXZCQSxJQUFJLENBQUpBLENBQXVCLFdBQXZCQSxJQUFXLENBQUVSLFVBQVUsdUJBQXZCUSxJQUFJLENBQUpBLENBQXVCLEdBQXZCQSxJQUFJLENBQUpBLENBQXVCLFFBQUVHLEdBQUcsY0FBNUJILElBQTRCLGNBQTVCQSxJQUE0QixHQUFJLENBQUU7UUFDOUMsQ0FBQyxDQUFDLEtBQUssRUFBRUksR0FBRyxFQUFFLENBQUM7WUFDYk4sT0FBTyxDQUFDQyxHQUFHLENBQUNLLEdBQUc7UUFDakIsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNOzt3RkFFREMsQ0FBSztnQkFBQ0MsSUFBSSxFQUFDLENBQU07Z0JBQUNDLFFBQVEsRUFBRWQsWUFBWTs7Ozs7O3dGQUN4Q2UsQ0FBRztnQkFBQ0MsR0FBRyxHQUFHLCtCQUErQixFQUFFbkIsTUFBTTs7Ozs7Ozs7QUFHeEQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsYXNzLy4vcGFnZXMvMTktMDEtaW1hZ2UtdXBsb2FkL2luZGV4LnRzeD9mMWZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgZ3FsLCB1c2VNdXRhdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgSU11dGF0aW9uIH0gZnJvbSBcIi4uLy4uL3NyYy9jb21tb25zL3R5cGVzL2dlbmVyYXRlZC90eXBlc1wiO1xuXG5jb25zdCBVUExPQURfRklMRSA9IGdxbGBcbiAgbXV0YXRpb24gdXBsb2FkRmlsZSgkZmlsZTogVXBsb2FkISkge1xuICAgIHVwbG9hZEZpbGUoZmlsZTogJGZpbGUpIHtcbiAgICAgIHVybFxuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2VVcGxvYWRQYWdlKCkge1xuICBjb25zdCBbaW1nVXJsLCBzZXRJbWdVcmxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt1cGxvYWRGaWxlXSA9IHVzZU11dGF0aW9uKFVQTE9BRF9GSUxFKTtcblxuICBjb25zdCBvbkNoYW5nZUZpbGUgPSBhc3luYyAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlcz8uWzBdOyAvLyBtdWx0aXBsZSDsho3shLHsnLzroZwg7Jes65+s6rCcIOuTnOuemOq3uCDqsIDriqVcbiAgICBjb25zb2xlLmxvZyhmaWxlKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB1cGxvYWRGaWxlKHsgdmFyaWFibGVzOiB7IGZpbGUgfSB9KTtcbiAgICAgIHNldEltZ1VybChyZXN1bHQuZGF0YT8udXBsb2FkRmlsZT8udXJsID8/IFwiXCIpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e29uQ2hhbmdlRmlsZX0gLz5cbiAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9zdG9yYWdlLmdvb2dsZWFwaXMuY29tLyR7aW1nVXJsfWB9IC8+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJncWwiLCJ1c2VNdXRhdGlvbiIsIlVQTE9BRF9GSUxFIiwiSW1hZ2VVcGxvYWRQYWdlIiwiaW1nVXJsIiwic2V0SW1nVXJsIiwidXBsb2FkRmlsZSIsIm9uQ2hhbmdlRmlsZSIsImV2ZW50IiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwiY29uc29sZSIsImxvZyIsInJlc3VsdCIsInZhcmlhYmxlcyIsImRhdGEiLCJ1cmwiLCJlcnIiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImltZyIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/19-01-image-upload/index.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/19-01-image-upload/index.tsx"));
module.exports = __webpack_exports__;

})();