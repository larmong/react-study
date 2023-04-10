"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/25-03-basket-localstorage-rest-parameter",{

/***/ "./pages/25-03-basket-localstorage-rest-parameter/index.tsx":
/*!******************************************************************!*\
  !*** ./pages/25-03-basket-localstorage-rest-parameter/index.tsx ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BasketLocalstoragePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\n\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n  query fetchBoards($page: Int) {\\n    fetchBoards(page: $page) {\\n      _id\\n      writer\\n      title\\n      contents\\n    }\\n  }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nvar _s = $RefreshSig$();\nvar FETCH_BOARDS = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject());\nfunction BasketLocalstoragePage() {\n    var _this = this;\n    _s();\n    var data = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(FETCH_BOARDS).data;\n    var onClickAddBasket = function(basket) {\n        return function() {\n            console.log(basket);\n            var ref;\n            // 1. 기존 장바구니 가져오기\n            var baskets = JSON.parse((ref = localStorage.getItem(\"baskets\")) !== null && ref !== void 0 ? ref : \"[]\");\n            // 2. 이미 담겼는지 확인하기\n            var temp = baskets.filter(function(el) {\n                return el._id === basket._id;\n            });\n            if (temp.length === 1) {\n                alert(\"이미 담으신 물품입니다 !!\");\n                return;\n            }\n            // 3. 해당 장바구니에 담기\n            var __typename = basket.__typename, newBasket = _objectWithoutProperties(basket, [\n                \"__typename\"\n            ]);\n            console.log(baskets);\n            console.log(newBasket);\n            baskets.push(basket);\n            localStorage.setItem(\"baskets\", JSON.stringify(baskets));\n        };\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: data === null || data === void 0 ? void 0 : data.fetchBoards.map(function(el) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            margin: \"10px\"\n                        },\n                        children: el.writer\n                    }, void 0, false, {\n                        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/25-03-basket-localstorage-rest-parameter/index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            margin: \"10px\"\n                        },\n                        children: el.title\n                    }, void 0, false, {\n                        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/25-03-basket-localstorage-rest-parameter/index.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: onClickAddBasket(el),\n                        children: \"장바구니 담기\"\n                    }, void 0, false, {\n                        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/25-03-basket-localstorage-rest-parameter/index.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, el._id, true, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/25-03-basket-localstorage-rest-parameter/index.tsx\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, _this);\n        })\n    }, void 0, false));\n};\n_s(BasketLocalstoragePage, \"JtionF1PqWN50DPWu724eJIU2SM=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery\n    ];\n});\n_c = BasketLocalstoragePage;\nvar _c;\n$RefreshReg$(_c, \"BasketLocalstoragePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8yNS0wMy1iYXNrZXQtbG9jYWxzdG9yYWdlLXJlc3QtcGFyYW1ldGVyL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQU9yQixDQVN6Qjs7Ozs7Ozs7QUFUQSxHQUFLLENBQUNFLFlBQVksR0FBR0YsbURBQUc7QUFXVCxRQUFRLENBQUNHLHNCQUFzQixHQUFHLENBQUM7OztJQUNoRCxHQUFLLENBQUdDLElBQUksR0FBS0gsd0RBQVEsQ0FDdkJDLFlBQVksRUFETkUsSUFBSTtJQUlaLEdBQUssQ0FBQ0MsZ0JBQWdCLEdBQUcsUUFBUSxDQUFQQyxNQUFXO1FBQUssTUFBTSxDQUFOLFFBQzVDLEdBRGtELENBQUM7WUFDL0NDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFNO2dCQUtIRyxHQUErQjtZQUg5QyxFQUFzQztZQUN0QyxHQUFLLENBQUNDLE9BQU8sR0FFVEMsSUFBSSxDQUFDQyxLQUFLLEVBQUNILEdBQStCLEdBQS9CQSxZQUFZLENBQUNJLE9BQU8sQ0FBQyxDQUFTLHVCQUE5QkosR0FBK0IsY0FBL0JBLEdBQStCLEdBQUksQ0FBSTtZQUV0RCxFQUFrQjtZQUNFLEdBQWYsQ0FBQ0ssSUFBSSxHQUFHSixPQUFPLENBQUNLLE1BQU0sQ0FBQyxRQUFRLENBQVBDLEVBQU87Z0JBQUtBLE1BQU0sQ0FBTkEsRUFBRSxDQUFDQyxHQUFHLEtBQUtYLE1BQU0sQ0FBQ1csR0FBRzs7WUFDOUQsRUFBRSxFQUFFSCxJQUFJLENBQUNJLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztnQkFDdEJDLEtBQUssQ0FBQyxDQUFpQjtnQkFDSCxNQUFkO1lBQ1IsQ0FBQztZQUVELEVBQWlCO1lBQ0MsR0FBYixDQUFHQyxVQUFVLEdBQW1CZCxNQUFNLENBQW5DYyxVQUFVLEVBQUtDLFNBQVMsNEJBQUtmLE1BQU07Z0JBQW5DYyxDQUFVOztZQUNsQmIsT0FBTyxDQUFDQyxHQUFHLENBQUNFLE9BQU87WUFDbkJILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYSxTQUFTO1lBQ3JCWCxPQUFPLENBQUNZLElBQUksQ0FBQ2hCLE1BQU07WUFDbkJHLFlBQVksQ0FBQ2MsT0FBTyxDQUFDLENBQVMsVUFBRVosSUFBSSxDQUFDYSxTQUFTLENBQUNkLE9BQU87UUFDeEQsQ0FBQzs7SUFFRCxNQUFNO2tCQUVETixJQUFJLGFBQUpBLElBQUksS0FBSkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsSUFBSSxDQUFFcUIsV0FBVyxDQUFDQyxHQUFHLENBQUMsUUFBUSxDQUFQVixFQUFVOzBCQUNoQyxNQUFNLCtEQUFMVyxDQUFHOztnR0FDREMsQ0FBSTt3QkFBQ0MsS0FBSyxFQUFFLENBQUM7NEJBQUNDLE1BQU0sRUFBRSxDQUFNO3dCQUFDLENBQUM7a0NBQUdkLEVBQUUsQ0FBQ2UsTUFBTTs7Ozs7O2dHQUMxQ0gsQ0FBSTt3QkFBQ0MsS0FBSyxFQUFFLENBQUM7NEJBQUNDLE1BQU0sRUFBRSxDQUFNO3dCQUFDLENBQUM7a0NBQUdkLEVBQUUsQ0FBQ2dCLEtBQUs7Ozs7OztnR0FDekNDLENBQU07d0JBQUNDLE9BQU8sRUFBRTdCLGdCQUFnQixDQUFDVyxFQUFFO2tDQUFHLENBQU87Ozs7Ozs7ZUFIdENBLEVBQUUsQ0FBQ0MsR0FBRzs7Ozs7OztBQVF4QixDQUFDO0dBdkN1QmQsc0JBQXNCOztRQUMzQkYsb0RBQVE7OztLQURIRSxzQkFBc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvMjUtMDMtYmFza2V0LWxvY2Fsc3RvcmFnZS1yZXN0LXBhcmFtZXRlci9pbmRleC50c3g/NjE4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQge1xuICBJQm9hcmQsXG4gIElRdWVyeSxcbiAgSVF1ZXJ5RmV0Y2hCb2FyZHNBcmdzLFxufSBmcm9tIFwiLi4vLi4vc3JjL2NvbW1vbnMvdHlwZXMvZ2VuZXJhdGVkL3R5cGVzXCI7XG5cbmNvbnN0IEZFVENIX0JPQVJEUyA9IGdxbGBcbiAgcXVlcnkgZmV0Y2hCb2FyZHMoJHBhZ2U6IEludCkge1xuICAgIGZldGNoQm9hcmRzKHBhZ2U6ICRwYWdlKSB7XG4gICAgICBfaWRcbiAgICAgIHdyaXRlclxuICAgICAgdGl0bGVcbiAgICAgIGNvbnRlbnRzXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYXNrZXRMb2NhbHN0b3JhZ2VQYWdlKCkge1xuICBjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5PFBpY2s8SVF1ZXJ5LCBcImZldGNoQm9hcmRzXCI+LCBJUXVlcnlGZXRjaEJvYXJkc0FyZ3M+KFxuICAgIEZFVENIX0JPQVJEU1xuICApO1xuXG4gIGNvbnN0IG9uQ2xpY2tBZGRCYXNrZXQgPSAoYmFza2V0OiBhbnkpID0+ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhiYXNrZXQpO1xuXG4gICAgLy8gMS4g6riw7KG0IOyepeuwlOq1rOuLiCDqsIDsoLjsmKTquLBcbiAgICBjb25zdCBiYXNrZXRzOiBBcnJheTxcbiAgICAgIFBpY2s8SUJvYXJkLCBcIndyaXRlclwiIHwgXCJjb250ZW50c1wiIHwgXCJ0aXRsZVwiIHwgXCJfaWRcIj5bXVxuICAgID4gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmFza2V0c1wiKSA/PyBcIltdXCIpO1xuXG4gICAgLy8gMi4g7J2066+4IOuLtOqyvOuKlOyngCDtmZXsnbjtlZjquLBcbiAgICBjb25zdCB0ZW1wID0gYmFza2V0cy5maWx0ZXIoKGVsOiBhbnkpID0+IGVsLl9pZCA9PT0gYmFza2V0Ll9pZCk7XG4gICAgaWYgKHRlbXAubGVuZ3RoID09PSAxKSB7XG4gICAgICBhbGVydChcIuydtOuvuCDri7TsnLzsi6Ag66y87ZKI7J6F64uI64ukICEhXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIDMuIO2VtOuLuSDsnqXrsJTqtazri4jsl5Ag64u06riwXG4gICAgY29uc3QgeyBfX3R5cGVuYW1lLCAuLi5uZXdCYXNrZXQgfSA9IGJhc2tldDtcbiAgICBjb25zb2xlLmxvZyhiYXNrZXRzKTtcbiAgICBjb25zb2xlLmxvZyhuZXdCYXNrZXQpO1xuICAgIGJhc2tldHMucHVzaChiYXNrZXQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmFza2V0c1wiLCBKU09OLnN0cmluZ2lmeShiYXNrZXRzKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2RhdGE/LmZldGNoQm9hcmRzLm1hcCgoZWw6IElCb2FyZCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17ZWwuX2lkfT5cbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW46IFwiMTBweFwiIH19PntlbC53cml0ZXJ9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbjogXCIxMHB4XCIgfX0+e2VsLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tBZGRCYXNrZXQoZWwpfT7snqXrsJTqtazri4gg64u06riwPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiZ3FsIiwidXNlUXVlcnkiLCJGRVRDSF9CT0FSRFMiLCJCYXNrZXRMb2NhbHN0b3JhZ2VQYWdlIiwiZGF0YSIsIm9uQ2xpY2tBZGRCYXNrZXQiLCJiYXNrZXQiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwiYmFza2V0cyIsIkpTT04iLCJwYXJzZSIsImdldEl0ZW0iLCJ0ZW1wIiwiZmlsdGVyIiwiZWwiLCJfaWQiLCJsZW5ndGgiLCJhbGVydCIsIl9fdHlwZW5hbWUiLCJuZXdCYXNrZXQiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImZldGNoQm9hcmRzIiwibWFwIiwiZGl2Iiwic3BhbiIsInN0eWxlIiwibWFyZ2luIiwid3JpdGVyIiwidGl0bGUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/25-03-basket-localstorage-rest-parameter/index.tsx\n");

/***/ })

});