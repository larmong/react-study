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
exports.id = "pages/24-01-basket-localstorage";
exports.ids = ["pages/24-01-basket-localstorage"];
exports.modules = {

/***/ "./pages/24-01-basket-localstorage/index.tsx":
/*!***************************************************!*\
  !*** ./pages/24-01-basket-localstorage/index.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BasketLocalstoragePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst FETCH_BOARDS = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  query fetchBoards($page: Int) {\n    fetchBoards(page: $page) {\n      _id\n      writer\n      title\n      contents\n    }\n  }\n`;\n// type IBaskets = ;\nfunction BasketLocalstoragePage() {\n    const { data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(FETCH_BOARDS);\n    const onClickAddBasket = (basket)=>()=>{\n            console.log(basket);\n            var ref;\n            // 1. 기존 장바구니 가져오기\n            const baskets = JSON.parse((ref = localStorage.getItem(\"baskets\")) !== null && ref !== void 0 ? ref : \"[]\");\n            // 2. 이미 담겼는지 확인하기\n            const temp = baskets.filter((el)=>el._id === basket._id\n            );\n            if (temp.length === 1) {\n                alert(\"이미 담으신 물품입니다 !!\");\n                return;\n            }\n            // 3. 해당 장바구니에 담기\n            baskets.push(basket);\n            localStorage.setItem(\"baskets\", JSON.stringify(baskets));\n        }\n    ;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: data === null || data === void 0 ? void 0 : data.fetchBoards.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            margin: \"10px\"\n                        },\n                        children: el.writer\n                    }, void 0, false, {\n                        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/24-01-basket-localstorage/index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            margin: \"10px\"\n                        },\n                        children: el.title\n                    }, void 0, false, {\n                        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/24-01-basket-localstorage/index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: onClickAddBasket(el),\n                        children: \"장바구니 담기\"\n                    }, void 0, false, {\n                        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/24-01-basket-localstorage/index.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, el._id, true, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/24-01-basket-localstorage/index.tsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this)\n        )\n    }, void 0, false));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8yNC0wMS1iYXNrZXQtbG9jYWxzdG9yYWdlL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEM7QUFPOUMsS0FBSyxDQUFDRSxZQUFZLEdBQUdGLCtDQUFHLENBQUM7Ozs7Ozs7OztBQVN6QjtBQUVBLEVBQW9CO0FBRUwsUUFBUSxDQUFDRyxzQkFBc0IsR0FBRyxDQUFDO0lBQ2hELEtBQUssQ0FBQyxDQUFDLENBQUNDLElBQUksRUFBQyxDQUFDLEdBQUdILHdEQUFRLENBQ3ZCQyxZQUFZO0lBR2QsS0FBSyxDQUFDRyxnQkFBZ0IsSUFBSUMsTUFBYyxPQUFXLENBQUM7WUFDbERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixNQUFNO2dCQUtIRyxHQUErQjtZQUg5QyxFQUFzQztZQUN0QyxLQUFLLENBQUNDLE9BQU8sR0FFVEMsSUFBSSxDQUFDQyxLQUFLLEVBQUNILEdBQStCLEdBQS9CQSxZQUFZLENBQUNJLE9BQU8sQ0FBQyxDQUFTLHVCQUE5QkosR0FBK0IsY0FBL0JBLEdBQStCLEdBQUksQ0FBSTtZQUV0RCxFQUFrQjtZQUNFLEtBQWYsQ0FBQ0ssSUFBSSxHQUFHSixPQUFPLENBQUNLLE1BQU0sRUFBRUMsRUFBTyxHQUFLQSxFQUFFLENBQUNDLEdBQUcsS0FBS1gsTUFBTSxDQUFDVyxHQUFHOztZQUM5RCxFQUFFLEVBQUVILElBQUksQ0FBQ0ksTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUN0QkMsS0FBSyxDQUFDLENBQWlCO2dCQUNILE1BQWQ7WUFDUixDQUFDO1lBRUQsRUFBaUI7WUFDQ1QsT0FBWCxDQUFDVSxJQUFJLENBQUNkLE1BQU07WUFDbkJHLFlBQVksQ0FBQ1ksT0FBTyxDQUFDLENBQVMsVUFBRVYsSUFBSSxDQUFDVyxTQUFTLENBQUNaLE9BQU87UUFDeEQsQ0FBQzs7SUFFRCxNQUFNO2tCQUVETixJQUFJLGFBQUpBLElBQUksS0FBSkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsSUFBSSxDQUFKQSxDQUFpQixHQUFqQkEsSUFBSSxDQUFFbUIsV0FBVyxDQUFDQyxHQUFHLEVBQUVSLEVBQVUsK0VBQy9CUyxDQUFHOztnR0FDREMsQ0FBSTt3QkFBQ0MsS0FBSyxFQUFFLENBQUM7NEJBQUNDLE1BQU0sRUFBRSxDQUFNO3dCQUFDLENBQUM7a0NBQUdaLEVBQUUsQ0FBQ2EsTUFBTTs7Ozs7O2dHQUMxQ0gsQ0FBSTt3QkFBQ0MsS0FBSyxFQUFFLENBQUM7NEJBQUNDLE1BQU0sRUFBRSxDQUFNO3dCQUFDLENBQUM7a0NBQUdaLEVBQUUsQ0FBQ2MsS0FBSzs7Ozs7O2dHQUN6Q0MsQ0FBTTt3QkFBQ0MsT0FBTyxFQUFFM0IsZ0JBQWdCLENBQUNXLEVBQUU7a0NBQUcsQ0FBTzs7Ozs7OztlQUh0Q0EsRUFBRSxDQUFDQyxHQUFHOzs7Ozs7O0FBUXhCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGFzcy8uL3BhZ2VzLzI0LTAxLWJhc2tldC1sb2NhbHN0b3JhZ2UvaW5kZXgudHN4PzcwZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHtcbiAgSUJvYXJkLFxuICBJUXVlcnksXG4gIElRdWVyeUZldGNoQm9hcmRzQXJncyxcbn0gZnJvbSBcIi4uLy4uL3NyYy9jb21tb25zL3R5cGVzL2dlbmVyYXRlZC90eXBlc1wiO1xuXG5jb25zdCBGRVRDSF9CT0FSRFMgPSBncWxgXG4gIHF1ZXJ5IGZldGNoQm9hcmRzKCRwYWdlOiBJbnQpIHtcbiAgICBmZXRjaEJvYXJkcyhwYWdlOiAkcGFnZSkge1xuICAgICAgX2lkXG4gICAgICB3cml0ZXJcbiAgICAgIHRpdGxlXG4gICAgICBjb250ZW50c1xuICAgIH1cbiAgfVxuYDtcblxuLy8gdHlwZSBJQmFza2V0cyA9IDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFza2V0TG9jYWxzdG9yYWdlUGFnZSgpIHtcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VRdWVyeTxQaWNrPElRdWVyeSwgXCJmZXRjaEJvYXJkc1wiPiwgSVF1ZXJ5RmV0Y2hCb2FyZHNBcmdzPihcbiAgICBGRVRDSF9CT0FSRFNcbiAgKTtcblxuICBjb25zdCBvbkNsaWNrQWRkQmFza2V0ID0gKGJhc2tldDogSUJvYXJkKSA9PiAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYmFza2V0KTtcblxuICAgIC8vIDEuIOq4sOyhtCDsnqXrsJTqtazri4gg6rCA7KC47Jik6riwXG4gICAgY29uc3QgYmFza2V0czogQXJyYXk8XG4gICAgICBQaWNrPElCb2FyZCwgXCJ3cml0ZXJcIiB8IFwiY29udGVudHNcIiB8IFwidGl0bGVcIiB8IFwiX2lkXCI+W11cbiAgICA+ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJhc2tldHNcIikgPz8gXCJbXVwiKTtcblxuICAgIC8vIDIuIOydtOuvuCDri7TqsrzripTsp4Ag7ZmV7J247ZWY6riwXG4gICAgY29uc3QgdGVtcCA9IGJhc2tldHMuZmlsdGVyKChlbDogYW55KSA9PiBlbC5faWQgPT09IGJhc2tldC5faWQpO1xuICAgIGlmICh0ZW1wLmxlbmd0aCA9PT0gMSkge1xuICAgICAgYWxlcnQoXCLsnbTrr7gg64u07Jy87IugIOusvO2SiOyeheuLiOuLpCAhIVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyAzLiDtlbTri7kg7J6l67CU6rWs64uI7JeQIOuLtOq4sFxuICAgIGJhc2tldHMucHVzaChiYXNrZXQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmFza2V0c1wiLCBKU09OLnN0cmluZ2lmeShiYXNrZXRzKSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2RhdGE/LmZldGNoQm9hcmRzLm1hcCgoZWw6IElCb2FyZCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17ZWwuX2lkfT5cbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW46IFwiMTBweFwiIH19PntlbC53cml0ZXJ9PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpbjogXCIxMHB4XCIgfX0+e2VsLnRpdGxlfTwvc3Bhbj5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tBZGRCYXNrZXQoZWwpfT7snqXrsJTqtazri4gg64u06riwPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiZ3FsIiwidXNlUXVlcnkiLCJGRVRDSF9CT0FSRFMiLCJCYXNrZXRMb2NhbHN0b3JhZ2VQYWdlIiwiZGF0YSIsIm9uQ2xpY2tBZGRCYXNrZXQiLCJiYXNrZXQiLCJjb25zb2xlIiwibG9nIiwibG9jYWxTdG9yYWdlIiwiYmFza2V0cyIsIkpTT04iLCJwYXJzZSIsImdldEl0ZW0iLCJ0ZW1wIiwiZmlsdGVyIiwiZWwiLCJfaWQiLCJsZW5ndGgiLCJhbGVydCIsInB1c2giLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZmV0Y2hCb2FyZHMiLCJtYXAiLCJkaXYiLCJzcGFuIiwic3R5bGUiLCJtYXJnaW4iLCJ3cml0ZXIiLCJ0aXRsZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/24-01-basket-localstorage/index.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

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
var __webpack_exports__ = (__webpack_exec__("./pages/24-01-basket-localstorage/index.tsx"));
module.exports = __webpack_exports__;

})();