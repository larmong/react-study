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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ImageUploadPage; }\n/* harmony export */ });\n/* harmony import */ var _Users_larmong_Desktop_codecamp_04frontend_class_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_larmong_Desktop_codecamp_04frontend_class_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_larmong_Desktop_codecamp_04frontend_class_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  mutation uploadFile($file: Upload!) {\\n    uploadFile(file: $file) {\\n      url\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar UPLOAD_FILE = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.gql)(_templateObject());\nfunction ImageUploadPage() {\n    _s();\n    var qqq = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), imgUrl = ref5[0], setImgUrl = ref5[1];\n    var ref1 = _slicedToArray((0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(UPLOAD_FILE), 1), uploadFile = ref1[0];\n    var onChangeFile = function() {\n        var _ref = _asyncToGenerator(_Users_larmong_Desktop_codecamp_04frontend_class_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var ref, file, ref2, ref3, result, ref4;\n            return _Users_larmong_Desktop_codecamp_04frontend_class_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        ;\n                        file = (ref = event.target.files) === null || ref === void 0 ? void 0 : ref[0]; // multiple 속성으로 여러개 드래그 가능\n                        console.log(file);\n                        _ctx.prev = 3;\n                        ;\n                        _ctx.next = 7;\n                        return uploadFile({\n                            variables: {\n                                file: file\n                            }\n                        });\n                    case 7:\n                        result = _ctx.sent;\n                        ;\n                        setImgUrl((ref4 = (ref2 = result.data) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.uploadFile) === null || ref3 === void 0 ? void 0 : ref3.url) !== null && ref4 !== void 0 ? ref4 : \"\");\n                        _ctx.next = 15;\n                        break;\n                    case 12:\n                        _ctx.prev = 12;\n                        _ctx.t0 = _ctx[\"catch\"](3);\n                        console.log(_ctx.t0);\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    3,\n                    12\n                ]\n            ]);\n        }));\n        return function onChangeFile(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onClickImage = function() {\n        var ref;\n        (ref = qqq.current) === null || ref === void 0 ? void 0 : ref.click();\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                style: {\n                    width: \"50px\",\n                    height: \"50px\",\n                    background: \"green\"\n                },\n                onClick: onClickImage,\n                children: \"이미지선택\"\n            }, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/19-02-image-ref/index.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                style: {\n                    display: \"none\"\n                },\n                type: \"file\",\n                onChange: onChangeFile,\n                ref: qqq\n            }, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/19-02-image-ref/index.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"img\", {\n                src: \"https://storage.googleapis.com/\".concat(imgUrl)\n            }, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/19-02-image-ref/index.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(ImageUploadPage, \"esk9R8xBKou//+34uYUHlMdT9f0=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation\n    ];\n});\n_c = ImageUploadPage;\nvar _c;\n$RefreshReg$(_c, \"ImageUploadPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8xOS0wMi1pbWFnZS1yZWYvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUV6QixDQU14Qjs7Ozs7Ozs7QUFOQSxHQUFLLENBQUNJLFdBQVcsR0FBR0YsbURBQUc7QUFRUixRQUFRLENBQUNHLGVBQWUsR0FBRyxDQUFDOztJQUN6QyxHQUFLLENBQUNDLEdBQUcsR0FBR04sNkNBQU07SUFDbEIsR0FBSyxDQUF1QkMsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBaENNLE1BQU0sR0FBZU4sSUFBWSxLQUF6Qk8sU0FBUyxHQUFJUCxJQUFZO0lBQ3hDLEdBQUssQ0FBZ0JFLElBQXdCLGtCQUF4QkEsMkRBQVcsQ0FBQ0MsV0FBVyxPQUFyQ0ssVUFBVSxHQUFJTixJQUF3QjtJQUU3QyxHQUFLLENBQUNPLFlBQVk7aU1BQUcsUUFBUSxTQUFEQyxLQUFvQyxFQUFLLENBQUM7Z0JBQ3ZEQSxHQUFrQixFQUF6QkMsSUFBSSxFQUtFQyxJQUFXLFFBRGZBLE1BQU0sRUFDRkEsSUFBNEI7Ozs7O3dCQUxsQ0QsSUFBSSxJQUFHRCxHQUFrQixHQUFsQkEsS0FBSyxDQUFDRyxNQUFNLENBQUNDLEtBQUssY0FBbEJKLEdBQWtCLEtBQWxCQSxJQUFJLENBQUpBLENBQXVCLEdBQXZCQSxJQUFJLENBQUpBLENBQXVCLEdBQXZCQSxHQUFrQixDQUFHLENBQUMsRUFBRyxDQUFtRDt3QkFDekZLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxJQUFJOzs7OytCQUdPSCxVQUFVLENBQUMsQ0FBQzs0QkFBQ1MsU0FBUyxFQUFFLENBQUM7Z0NBQUNOLElBQUksRUFBSkEsSUFBSTs0QkFBQyxDQUFDO3dCQUFDLENBQUM7O3dCQUFqREMsTUFBTTs7d0JBQ1pMLFNBQVMsRUFBQ0ssSUFBNEIsSUFBNUJBLElBQVcsR0FBWEEsTUFBTSxDQUFDTSxJQUFJLGNBQVhOLElBQVcsS0FBWEEsSUFBSSxDQUFKQSxDQUF1QixHQUF2QkEsSUFBSSxDQUFKQSxDQUF1QixXQUF2QkEsSUFBVyxDQUFFSixVQUFVLHVCQUF2QkksSUFBSSxDQUFKQSxDQUF1QixHQUF2QkEsSUFBSSxDQUFKQSxDQUF1QixRQUFFTyxHQUFHLGNBQTVCUCxJQUE0QixjQUE1QkEsSUFBNEIsR0FBSSxDQUFFOzs7Ozs7d0JBRTVDRyxPQUFPLENBQUNDLEdBQUc7Ozs7Ozs7Ozs7O1FBRWYsQ0FBQzt3QkFWS1AsWUFBWSxDQUFVQyxLQUFvQzs7OztJQVloRSxHQUFLLENBQUNVLFlBQVksR0FBRyxRQUN2QixHQUQ2QixDQUFDO1lBQzFCZixHQUFXO1NBQVhBLEdBQVcsR0FBWEEsR0FBRyxDQUFDZ0IsT0FBTyxjQUFYaEIsR0FBVyxLQUFYQSxJQUFJZ0IsQ0FBSmhCLENBQWtCLEdBQWxCQSxJQUFJZ0IsQ0FBSmhCLENBQWtCLEdBQWxCQSxHQUFXLENBQUVpQixLQUFLO0lBQ3BCLENBQUM7SUFFRCxNQUFNOzt3RkFFREMsQ0FBRztnQkFDRkMsS0FBSyxFQUFFLENBQUM7b0JBQUNDLEtBQUssRUFBRSxDQUFNO29CQUFFQyxNQUFNLEVBQUUsQ0FBTTtvQkFBRUMsVUFBVSxFQUFFLENBQU87Z0JBQUMsQ0FBQztnQkFDN0RDLE9BQU8sRUFBRVIsWUFBWTswQkFDdEIsQ0FFRDs7Ozs7O3dGQUNDUyxDQUFLO2dCQUNKTCxLQUFLLEVBQUUsQ0FBQztvQkFBQ00sT0FBTyxFQUFFLENBQU07Z0JBQUMsQ0FBQztnQkFDMUJDLElBQUksRUFBQyxDQUFNO2dCQUNYQyxRQUFRLEVBQUV2QixZQUFZO2dCQUN0QndCLEdBQUcsRUFBRTVCLEdBQUc7Ozs7Ozt3RkFFVDZCLENBQUc7Z0JBQUNDLEdBQUcsRUFBRyxDQUErQixpQ0FBUyxPQUFQN0IsTUFBTTs7Ozs7Ozs7QUFHeEQsQ0FBQztHQXRDdUJGLGVBQWU7O1FBR2hCRix1REFBVzs7O0tBSFZFLGVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvMTktMDItaW1hZ2UtcmVmL2luZGV4LnRzeD82ZDZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZUV2ZW50LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBncWwsIHVzZU11dGF0aW9uIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5cbmNvbnN0IFVQTE9BRF9GSUxFID0gZ3FsYFxuICBtdXRhdGlvbiB1cGxvYWRGaWxlKCRmaWxlOiBVcGxvYWQhKSB7XG4gICAgdXBsb2FkRmlsZShmaWxlOiAkZmlsZSkge1xuICAgICAgdXJsXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZVVwbG9hZFBhZ2UoKSB7XG4gIGNvbnN0IHFxcSA9IHVzZVJlZigpO1xuICBjb25zdCBbaW1nVXJsLCBzZXRJbWdVcmxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt1cGxvYWRGaWxlXSA9IHVzZU11dGF0aW9uKFVQTE9BRF9GSUxFKTtcblxuICBjb25zdCBvbkNoYW5nZUZpbGUgPSBhc3luYyAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlcz8uWzBdOyAvLyBtdWx0aXBsZSDsho3shLHsnLzroZwg7Jes65+s6rCcIOuTnOuemOq3uCDqsIDriqVcbiAgICBjb25zb2xlLmxvZyhmaWxlKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB1cGxvYWRGaWxlKHsgdmFyaWFibGVzOiB7IGZpbGUgfSB9KTtcbiAgICAgIHNldEltZ1VybChyZXN1bHQuZGF0YT8udXBsb2FkRmlsZT8udXJsID8/IFwiXCIpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25DbGlja0ltYWdlID0gKCkgPT4ge1xuICAgIHFxcS5jdXJyZW50Py5jbGljaygpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTBweFwiLCBoZWlnaHQ6IFwiNTBweFwiLCBiYWNrZ3JvdW5kOiBcImdyZWVuXCIgfX1cbiAgICAgICAgb25DbGljaz17b25DbGlja0ltYWdlfVxuICAgICAgPlxuICAgICAgICDsnbTrr7jsp4DshKDtg51cbiAgICAgIDwvZGl2PlxuICAgICAgPGlucHV0XG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XG4gICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlRmlsZX1cbiAgICAgICAgcmVmPXtxcXF9XG4gICAgICAvPlxuICAgICAgPGltZyBzcmM9e2BodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vJHtpbWdVcmx9YH0gLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImdxbCIsInVzZU11dGF0aW9uIiwiVVBMT0FEX0ZJTEUiLCJJbWFnZVVwbG9hZFBhZ2UiLCJxcXEiLCJpbWdVcmwiLCJzZXRJbWdVcmwiLCJ1cGxvYWRGaWxlIiwib25DaGFuZ2VGaWxlIiwiZXZlbnQiLCJmaWxlIiwicmVzdWx0IiwidGFyZ2V0IiwiZmlsZXMiLCJjb25zb2xlIiwibG9nIiwidmFyaWFibGVzIiwiZGF0YSIsInVybCIsIm9uQ2xpY2tJbWFnZSIsImN1cnJlbnQiLCJjbGljayIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwib25DbGljayIsImlucHV0IiwiZGlzcGxheSIsInR5cGUiLCJvbkNoYW5nZSIsInJlZiIsImltZyIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/19-02-image-ref/index.tsx\n");

/***/ })

});