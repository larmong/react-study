"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/18-01-firebase",{

/***/ "./pages/18-01-firebase/index.tsx":
/*!****************************************!*\
  !*** ./pages/18-01-firebase/index.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FirebasePage; }\n/* harmony export */ });\n/* harmony import */ var _Users_larmong_Desktop_codecamp_04frontend_class_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_larmong_Desktop_codecamp_04frontend_class_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_larmong_Desktop_codecamp_04frontend_class_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_app */ \"./pages/_app.tsx\");\n/* harmony import */ var firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore/lite */ \"./node_modules/firebase/firestore/lite/dist/esm/index.esm.js\");\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction FirebasePage() {\n    var onClickSubmit = function() {\n        var board = (0,firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_3__.collection)((0,firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(_app__WEBPACK_IMPORTED_MODULE_2__.firebaseApp), \"board\");\n        void (0,firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_3__.addDoc)(board, {\n            writer: \"철수\",\n            title: \"제목입니다.\",\n            contents: \"내용이에요!!\"\n        });\n    };\n    var onClickFetch = function() {\n        var _ref = _asyncToGenerator(_Users_larmong_Desktop_codecamp_04frontend_class_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var board, result, data;\n            return _Users_larmong_Desktop_codecamp_04frontend_class_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        board = (0,firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_3__.collection)((0,firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_3__.getFirestore)(_app__WEBPACK_IMPORTED_MODULE_2__.firebaseApp), \"board\");\n                        _ctx.next = 3;\n                        return (0,firebase_firestore_lite__WEBPACK_IMPORTED_MODULE_3__.getDocs)(board);\n                    case 3:\n                        result = _ctx.sent;\n                        data = result.docs.map(function(el) {\n                            return el.data();\n                        });\n                        console.log(data);\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onClickFetch() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: onClickSubmit,\n                children: \"등록하기\"\n            }, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/18-01-firebase/index.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: onClickFetch,\n                children: \"조히하기\"\n            }, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/18-01-firebase/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_c = FirebasePage;\nvar _c;\n$RefreshReg$(_c, \"FirebasePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8xOC0wMS1maXJlYmFzZS9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXFDO0FBTUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqQixRQUFRLENBQUNLLFlBQVksR0FBRyxDQUFDO0lBQ3RDLEdBQUssQ0FBQ0MsYUFBYSxHQUFHLFFBQ3hCLEdBRDhCLENBQUM7UUFDM0IsR0FBSyxDQUFDQyxLQUFLLEdBQUdOLG1FQUFVLENBQUNHLHFFQUFZLENBQUNKLDZDQUFXLEdBQUcsQ0FBTztRQUMzRCxJQUFJLENBQUNFLCtEQUFNLENBQUNLLEtBQUssRUFBRSxDQUFDO1lBQ2xCQyxNQUFNLEVBQUUsQ0FBSTtZQUNSQyxLQUFDLEVBQUUsQ0FBUTtZQUNMQyxRQUFGLEVBQUUsQ0FBUztRQUNYLENBQVQ7SUFDSCxDQUFDO0lBRUQsR0FBSyxDQUFDQyxZQUFZO2lNQUFHLFFBQVEsV0FBSSxDQUFDO2dCQUMxQkosS0FBSyxFQUNMSyxNQUFNLEVBQ05DLElBQUk7Ozs7d0JBRkpOLEtBQUssR0FBR04sbUVBQVUsQ0FBQ0cscUVBQVksQ0FBQ0osNkNBQVcsR0FBRyxDQUFPOzsrQkFDdENHLGdFQUFPLENBQUNJLEtBQUs7O3dCQUE1QkssTUFBTTt3QkFDTkMsSUFBSSxHQUFHRCxNQUFNLENBQUNFLElBQUksQ0FBQ0MsR0FBRyxDQUFDLFFBQVFDLENBQVBBLEVBQUU7NEJBQUtBLE1BQU0sQ0FBTkEsRUFBRSxDQUFDSCxJQUFJOzt3QkFDNUNJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxJQUFJOzs7Ozs7UUFDbEIsQ0FBQzt3QkFMS0YsWUFBWTs7OztJQU9sQixNQUFNOzt3RkFFRFEsQ0FBTTtnQkFBQ0MsT0FBTyxFQUFFZCxhQUFhOzBCQUFFLENBQUk7Ozs7Ozt3RkFDM0JhLENBQUY7Z0JBQUNDLE9BQU8sRUFBRVQsWUFBWTswQkFBRSxDQUFJOzs7Ozs7OztBQUd6QyxDQUFDO0tBdkJ1Qk4sWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy8xOC0wMS1maXJlYmFzZS9pbmRleC50c3g/N2EyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaXJlYmFzZUFwcCB9IGZyb20gXCIuLi9fYXBwXCI7XG5pbXBvcnQge1xuICBjb2xsZWN0aW9uLFxuICBhZGREb2MsXG4gIGdldERvY3MsXG4gIGdldEZpcmVzdG9yZSxcbn0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZS9saXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpcmViYXNlUGFnZSgpIHtcbiAgY29uc3Qgb25DbGlja1N1Ym1pdCA9ICgpID0+IHtcbiAgICBjb25zdCBib2FyZCA9IGNvbGxlY3Rpb24oZ2V0RmlyZXN0b3JlKGZpcmViYXNlQXBwKSwgXCJib2FyZFwiKTtcbiAgICB2b2lkIGFkZERvYyhib2FyZCwge1xuICAgICAgd3JpdGVyOiBcIuyyoOyImFwiLFxuICAgICAgdGl0bGU6IFwi7KCc66qp7J6F64uI64ukLlwiLFxuICAgICAgY29udGVudHM6IFwi64K07Jqp7J207JeQ7JqUISFcIixcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBvbkNsaWNrRmV0Y2ggPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYm9hcmQgPSBjb2xsZWN0aW9uKGdldEZpcmVzdG9yZShmaXJlYmFzZUFwcCksIFwiYm9hcmRcIik7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ2V0RG9jcyhib2FyZCk7XG4gICAgY29uc3QgZGF0YSA9IHJlc3VsdC5kb2NzLm1hcCgoZWwpID0+IGVsLmRhdGEoKSk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrU3VibWl0fT7rk7HroZ3tlZjquLA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gb25DbGljaz17b25DbGlja0ZldGNofT7sobDtnojtlZjquLA8L2J1dHRvbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJmaXJlYmFzZUFwcCIsImNvbGxlY3Rpb24iLCJhZGREb2MiLCJnZXREb2NzIiwiZ2V0RmlyZXN0b3JlIiwiRmlyZWJhc2VQYWdlIiwib25DbGlja1N1Ym1pdCIsImJvYXJkIiwid3JpdGVyIiwidGl0bGUiLCJjb250ZW50cyIsIm9uQ2xpY2tGZXRjaCIsInJlc3VsdCIsImRhdGEiLCJkb2NzIiwibWFwIiwiZWwiLCJjb25zb2xlIiwibG9nIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/18-01-firebase/index.tsx\n");

/***/ })

});