"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/19-02-image-ref",{

/***/ "./pages/19-02-image-ref/index.tsx":
/*!*****************************************!*\
  !*** ./pages/19-02-image-ref/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ImageUploadPage; }\n/* harmony export */ });\n/* harmony import */ var _Users_larmong_Desktop_codecamp_04frontend_class_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_larmong_Desktop_codecamp_04frontend_class_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_larmong_Desktop_codecamp_04frontend_class_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  mutation uploadFile($file: Upload!) {\\n    uploadFile(file: $file) {\\n      url\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar UPLOAD_FILE = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject());\nfunction ImageUploadPage() {\n    _s();\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), imgUrl = ref5[0], setImgUrl = ref5[1];\n    var ref1 = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(UPLOAD_FILE), 1), uploadFile = ref1[0];\n    var onChangeFile = function() {\n        var _ref = _asyncToGenerator(_Users_larmong_Desktop_codecamp_04frontend_class_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var ref, file, ref2, ref3, result, ref4;\n            return _Users_larmong_Desktop_codecamp_04frontend_class_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ;\n                        file = (ref = event.target.files) === null || ref === void 0 ? void 0 : ref[0]; // multiple 속성으로 여러개 드래그 가능\n                        console.log(file);\n                        _ctx.prev = 3;\n                        ;\n                        _ctx.next = 7;\n                        return uploadFile({\n                            variables: {\n                                file: file\n                            }\n                        });\n                    case 7:\n                        result = _ctx.sent;\n                        ;\n                        setImgUrl((ref4 = (ref2 = result.data) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.uploadFile) === null || ref3 === void 0 ? void 0 : ref3.url) !== null && ref4 !== void 0 ? ref4 : \"\");\n                        _ctx.next = 15;\n                        break;\n                    case 12:\n                        _ctx.prev = 12;\n                        _ctx.t0 = _ctx[\"catch\"](3);\n                        console.log(_ctx.t0);\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    3,\n                    12\n                ]\n            ]);\n        }));\n        return function onChangeFile(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                type: \"file\",\n                onChange: onChangeFile\n            }, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/19-02-image-ref/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                src: \"https://storage.googleapis.com/\".concat(imgUrl)\n            }, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/19-02-image-ref/index.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(ImageUploadPage, \"4AOyZn7Nl6dzD77aezkph56Ni88=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation\n    ];\n});\n_c = ImageUploadPage;\nvar _c;\n$RefreshReg$(_c, \"ImageUploadPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8xOS0wMi1pbWFnZS1yZWYvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUd6QixDQU14Qjs7Ozs7Ozs7QUFOQSxHQUFLLENBQUNHLFdBQVcsR0FBR0YsbURBQUc7QUFRUixRQUFRLENBQUNHLGVBQWUsR0FBRyxDQUFDOztJQUN6QyxHQUFLLENBQXVCSixJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUFoQ0ssTUFBTSxHQUFlTCxJQUFZLEtBQXpCTSxTQUFTLEdBQUlOLElBQVk7SUFDeEMsR0FBSyxDQUFnQkUsSUFBd0Isa0JBQXhCQSwyREFBVyxDQUFDQyxXQUFXLE9BQXJDSSxVQUFVLEdBQUlMLElBQXdCO0lBRTdDLEdBQUssQ0FBQ00sWUFBWTtpTUFBRyxRQUFRLFNBQURDLEtBQW9DLEVBQUssQ0FBQztnQkFDdkRBLEdBQWtCLEVBQXpCQyxJQUFJLEVBS0VDLElBQVcsUUFEZkEsTUFBTSxFQUNGQSxJQUE0Qjs7Ozs7d0JBTGxDRCxJQUFJLElBQUdELEdBQWtCLEdBQWxCQSxLQUFLLENBQUNHLE1BQU0sQ0FBQ0MsS0FBSyxjQUFsQkosR0FBa0IsS0FBbEJBLElBQUksQ0FBSkEsQ0FBdUIsR0FBdkJBLElBQUksQ0FBSkEsQ0FBdUIsR0FBdkJBLEdBQWtCLENBQUcsQ0FBQyxFQUFHLENBQTJCO3dCQUNqRUssT0FBTyxDQUFDQyxHQUFHLENBQUNMLElBQUk7Ozs7K0JBR09ILFVBQVUsQ0FBQyxDQUFDOzRCQUFDUyxTQUFTLEVBQUUsQ0FBQztnQ0FBQ04sSUFBSSxFQUFKQSxJQUFJOzRCQUFDLENBQUM7d0JBQUMsQ0FBQzs7d0JBQWpEQyxNQUFNOzt3QkFDWkwsU0FBUyxFQUFDSyxJQUE0QixJQUE1QkEsSUFBVyxHQUFYQSxNQUFNLENBQUNNLElBQUksY0FBWE4sSUFBVyxLQUFYQSxJQUFJLENBQUpBLENBQXVCLEdBQXZCQSxJQUFJLENBQUpBLENBQXVCLFdBQXZCQSxJQUFXLENBQUVKLFVBQVUsdUJBQXZCSSxJQUFJLENBQUpBLENBQXVCLEdBQXZCQSxJQUFJLENBQUpBLENBQXVCLFFBQUVPLEdBQUcsY0FBNUJQLElBQTRCLGNBQTVCQSxJQUE0QixHQUFJLENBQUU7Ozs7Ozt3QkFFNUNHLE9BQU8sQ0FBQ0MsR0FBRzs7Ozs7Ozs7Ozs7UUFFZixDQUFDO3dCQVZLUCxZQUFZLENBQVVDLEtBQW9DOzs7O0lBWWhFLE1BQU07O3dGQUVEVSxDQUFLO2dCQUFDQyxJQUFJLEVBQUMsQ0FBTTtnQkFBQ0MsUUFBUSxFQUFFYixZQUFZOzs7Ozs7d0ZBQ3hDYyxDQUFHO2dCQUFDQyxHQUFHLEVBQUcsQ0FBK0IsaUNBQVMsT0FBUGxCLE1BQU07Ozs7Ozs7O0FBR3hELENBQUM7R0F0QnVCRCxlQUFlOztRQUVoQkYsdURBQVc7OztLQUZWRSxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzLzE5LTAyLWltYWdlLXJlZi9pbmRleC50c3g/NmQ2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VFdmVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdxbCwgdXNlTXV0YXRpb24gfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IElNdXRhdGlvbiB9IGZyb20gXCIuLi8uLi9zcmMvY29tbW9ucy90eXBlcy9nZW5lcmF0ZWQvdHlwZXNcIjtcblxuY29uc3QgVVBMT0FEX0ZJTEUgPSBncWxgXG4gIG11dGF0aW9uIHVwbG9hZEZpbGUoJGZpbGU6IFVwbG9hZCEpIHtcbiAgICB1cGxvYWRGaWxlKGZpbGU6ICRmaWxlKSB7XG4gICAgICB1cmxcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlVXBsb2FkUGFnZSgpIHtcbiAgY29uc3QgW2ltZ1VybCwgc2V0SW1nVXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdXBsb2FkRmlsZV0gPSB1c2VNdXRhdGlvbihVUExPQURfRklMRSk7XG5cbiAgY29uc3Qgb25DaGFuZ2VGaWxlID0gYXN5bmMgKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IGZpbGUgPSBldmVudC50YXJnZXQuZmlsZXM/LlswXTsgLy8gbXVsdGlwbGUg7IaN7ISx7Jy866GcIOyXrOufrOqwnCDrk5zrnpjqt7gg6rCA64qlXG4gICAgY29uc29sZS5sb2coZmlsZSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdXBsb2FkRmlsZSh7IHZhcmlhYmxlczogeyBmaWxlIH0gfSk7XG4gICAgICBzZXRJbWdVcmwocmVzdWx0LmRhdGE/LnVwbG9hZEZpbGU/LnVybCA/PyBcIlwiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtvbkNoYW5nZUZpbGV9IC8+XG4gICAgICA8aW1nIHNyYz17YGh0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS8ke2ltZ1VybH1gfSAvPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiZ3FsIiwidXNlTXV0YXRpb24iLCJVUExPQURfRklMRSIsIkltYWdlVXBsb2FkUGFnZSIsImltZ1VybCIsInNldEltZ1VybCIsInVwbG9hZEZpbGUiLCJvbkNoYW5nZUZpbGUiLCJldmVudCIsImZpbGUiLCJyZXN1bHQiLCJ0YXJnZXQiLCJmaWxlcyIsImNvbnNvbGUiLCJsb2ciLCJ2YXJpYWJsZXMiLCJkYXRhIiwidXJsIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJpbWciLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/19-02-image-ref/index.tsx\n");

/***/ })

});