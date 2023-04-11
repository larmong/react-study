"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/commons/apollo/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/commons/apollo/index.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ApolloSetting; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! apollo-upload-client */ \"./node_modules/apollo-upload-client/public/index.mjs\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _commons_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../commons/store */ \"./src/commons/store/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nvar GLOBAL_STATE = new _apollo_client__WEBPACK_IMPORTED_MODULE_4__.InMemoryCache(); // 함수 밖에서 설정\n// GraphQL setting\nfunction ApolloSetting(props) {\n    _s();\n    var ref = _slicedToArray((0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_commons_store__WEBPACK_IMPORTED_MODULE_2__.accessTokenState), 2), accessToken = ref[0], setAccessToken = ref[1];\n    // 1. 프리렌더링 예제 - process.browser 방법\n    // if(process.browser) {\n    //   console.log(\"지금은 브라우저다!!!\")\n    // } else {\n    //   console.log(\"지금은 프론트엔드 서버다!!!\")\n    // }\n    // 2. 프리렌더링 예제 - typeof window 방법\n    // if(typeof window === \"undefined\") {\n    //   console.log(\"지금은 브라우저다!!!\")\n    // } else {\n    //   console.log(\"지금은 프론트엔드 서버다!!!\")\n    // }\n    // 3. 프리렌더링 무시 - useEffect 방법\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var result = localStorage.getItem(\"accessToken\");\n        if (result) setAccessToken(result);\n    });\n    var uploadLink = (0,apollo_upload_client__WEBPACK_IMPORTED_MODULE_5__.createUploadLink)({\n        uri: \"https://backendonline.codebootcamp.co.kr/graphql\",\n        headers: {\n            Authorization: \"Bearer \".concat(accessToken)\n        }\n    });\n    var client = new _apollo_client__WEBPACK_IMPORTED_MODULE_4__.ApolloClient({\n        link: _apollo_client__WEBPACK_IMPORTED_MODULE_4__.ApolloLink.from([\n            uploadLink\n        ]),\n        cache: GLOBAL_STATE,\n        connectToDevTools: true\n    });\n    // prettier-ignore\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_4__.ApolloProvider, {\n        client: client,\n        children: props.children\n    }, void 0, false, {\n        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/src/components/commons/apollo/index.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this));\n};\n_s(ApolloSetting, \"BqIiZTy+YGkVRXFHj405P7tJRyY=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState\n    ];\n});\n_c = ApolloSetting;\nvar _c;\n$RefreshReg$(_c, \"ApolloSetting\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb25zL2Fwb2xsby9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUt1QjtBQUNnQztBQUNoQjtBQUNrQjtBQUN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpDLEdBQUssQ0FBQ1EsWUFBWSxHQUFHLEdBQUcsQ0FBQ0wseURBQWEsR0FBSSxDQUFZLEVBQWM7QUFNdEQsRUFBSTtBQUNILFFBQVEsQ0FBQ00sYUFBYSxDQUFDQyxLQUFhLEVBQUUsQ0FBQzs7SUFDcEQsR0FBSyxDQUFpQ0wsR0FBZ0Msa0JBQWhDQSxzREFBYyxDQUFDQyw0REFBZ0IsT0FBOURLLFdBQVcsR0FBb0JOLEdBQWdDLEtBQWxETyxjQUFjLEdBQUlQLEdBQWdDO0lBRXRFLEVBQW1DO0lBQ2pCLEVBQU07SUFDeEIsRUFBZ0M7SUFDaEIsRUFBTDtJQUNYLEVBQW9DO0lBQ2QsRUFBbEI7SUFFSixFQUFpQztJQUNmLEVBQW9CO0lBQ3RDLEVBQWdDO0lBQ2hCLEVBQUw7SUFDWCxFQUFvQztJQUNkLEVBQWxCO0lBRUosRUFBNkI7SUFDWEUsZ0RBQVQsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZixHQUFLLENBQUNNLE1BQU0sR0FBR0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsQ0FBYTtRQUNqRCxFQUFFLEVBQUVGLE1BQU0sRUFBRUQsY0FBYyxDQUFDQyxNQUFNO0lBQ25DLENBQUM7SUFFRCxHQUFLLENBQUNHLFVBQVUsR0FBR1osc0VBQWdCLENBQUMsQ0FBQztRQUNuQ2EsR0FBRyxFQUFFLENBQWtEO1FBQ3ZEQyxPQUFPLEVBQUUsQ0FBQztZQUFDQyxhQUFhLEVBQUcsQ0FBTyxTQUFjLE9BQVpSLFdBQVc7UUFBRyxDQUFDO0lBQ3JELENBQUM7SUFFRCxHQUFLLENBQUNTLE1BQU0sR0FBRyxHQUFHLENBQUNwQix3REFBWSxDQUFDLENBQUM7UUFDL0JxQixJQUFJLEVBQUVwQiwyREFBZSxDQUFDLENBQUNlO1lBQUFBLFVBQVU7UUFBQSxDQUFDO1FBQ2xDTyxLQUFLLEVBQUVmLFlBQVk7UUFDbkJnQixpQkFBaUIsRUFBRSxJQUFJO0lBQ3pCLENBQUM7SUFFRCxFQUFrQjtJQUNsQixNQUFNLDZFQUNIdEIsMERBQWM7UUFBQ2tCLE1BQU0sRUFBRUEsTUFBTTtrQkFDM0JWLEtBQUssQ0FBQ2UsUUFBUTs7Ozs7O0FBR3JCLENBQUM7R0F4Q3VCaEIsYUFBYTs7UUFDR0osa0RBQWM7OztLQUQ5QkksYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9jb21tb25zL2Fwb2xsby9pbmRleC50c3g/MmU4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBcG9sbG9DbGllbnQsXG4gIEFwb2xsb0xpbmssXG4gIEFwb2xsb1Byb3ZpZGVyLFxuICBJbk1lbW9yeUNhY2hlLFxufSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCB7IGNyZWF0ZVVwbG9hZExpbmsgfSBmcm9tIFwiYXBvbGxvLXVwbG9hZC1jbGllbnRcIjtcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xuaW1wb3J0IHsgYWNjZXNzVG9rZW5TdGF0ZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb25zL3N0b3JlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgR0xPQkFMX1NUQVRFID0gbmV3IEluTWVtb3J5Q2FjaGUoKTsgLy8g7ZWo7IiYIOuwluyXkOyEnCDshKTsoJVcblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIGNoaWxkcmVuOiBKU1guRWxlbWVudDtcbn1cblxuLy8gR3JhcGhRTCBzZXR0aW5nXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcG9sbG9TZXR0aW5nKHByb3BzOiBJUHJvcHMpIHtcbiAgY29uc3QgW2FjY2Vzc1Rva2VuLCBzZXRBY2Nlc3NUb2tlbl0gPSB1c2VSZWNvaWxTdGF0ZShhY2Nlc3NUb2tlblN0YXRlKTtcblxuICAvLyAxLiDtlITrpqzroIzrjZTrp4Eg7JiI7KCcIC0gcHJvY2Vzcy5icm93c2VyIOuwqeuylVxuICAvLyBpZihwcm9jZXNzLmJyb3dzZXIpIHtcbiAgLy8gICBjb25zb2xlLmxvZyhcIuyngOq4iOydgCDruIzrnbzsmrDsoIDri6QhISFcIilcbiAgLy8gfSBlbHNlIHtcbiAgLy8gICBjb25zb2xlLmxvZyhcIuyngOq4iOydgCDtlITroaDtirjsl5Trk5wg7ISc67KE64ukISEhXCIpXG4gIC8vIH1cblxuICAvLyAyLiDtlITrpqzroIzrjZTrp4Eg7JiI7KCcIC0gdHlwZW9mIHdpbmRvdyDrsKnrspVcbiAgLy8gaWYodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAvLyAgIGNvbnNvbGUubG9nKFwi7KeA6riI7J2AIOu4jOudvOyasOyggOuLpCEhIVwiKVxuICAvLyB9IGVsc2Uge1xuICAvLyAgIGNvbnNvbGUubG9nKFwi7KeA6riI7J2AIO2UhOuhoO2KuOyXlOuTnCDshJzrsoTri6QhISFcIilcbiAgLy8gfVxuXG4gIC8vIDMuIO2UhOumrOugjOuNlOungSDrrLTsi5wgLSB1c2VFZmZlY3Qg67Cp67KVXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NUb2tlblwiKTtcbiAgICBpZiAocmVzdWx0KSBzZXRBY2Nlc3NUb2tlbihyZXN1bHQpO1xuICB9KTtcblxuICBjb25zdCB1cGxvYWRMaW5rID0gY3JlYXRlVXBsb2FkTGluayh7XG4gICAgdXJpOiBcImh0dHBzOi8vYmFja2VuZG9ubGluZS5jb2RlYm9vdGNhbXAuY28ua3IvZ3JhcGhxbFwiLFxuICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAgfSxcbiAgfSk7XG5cbiAgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgbGluazogQXBvbGxvTGluay5mcm9tKFt1cGxvYWRMaW5rXSksXG4gICAgY2FjaGU6IEdMT0JBTF9TVEFURSwgLy8g7Y6Y7J207KeAIOyghO2ZmChfYXBwLnRzeCDrpqzroIzrjZQp65CY7Ja064+EIOy6kOyLnCDsnKDsp4BcbiAgICBjb25uZWN0VG9EZXZUb29sczogdHJ1ZSxcbiAgfSk7XG5cbiAgLy8gcHJldHRpZXItaWdub3JlXG4gIHJldHVybiAoXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsiQXBvbGxvQ2xpZW50IiwiQXBvbGxvTGluayIsIkFwb2xsb1Byb3ZpZGVyIiwiSW5NZW1vcnlDYWNoZSIsImNyZWF0ZVVwbG9hZExpbmsiLCJ1c2VSZWNvaWxTdGF0ZSIsImFjY2Vzc1Rva2VuU3RhdGUiLCJ1c2VFZmZlY3QiLCJHTE9CQUxfU1RBVEUiLCJBcG9sbG9TZXR0aW5nIiwicHJvcHMiLCJhY2Nlc3NUb2tlbiIsInNldEFjY2Vzc1Rva2VuIiwicmVzdWx0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVwbG9hZExpbmsiLCJ1cmkiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImNsaWVudCIsImxpbmsiLCJmcm9tIiwiY2FjaGUiLCJjb25uZWN0VG9EZXZUb29scyIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/commons/apollo/index.tsx\n");

/***/ })

});