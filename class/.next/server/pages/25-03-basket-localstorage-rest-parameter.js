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
exports.id = "pages/25-03-basket-localstorage-rest-parameter";
exports.ids = ["pages/25-03-basket-localstorage-rest-parameter"];
exports.modules = {

/***/ "./pages/25-03-basket-localstorage-rest-parameter/index.tsx":
/*!******************************************************************!*\
  !*** ./pages/25-03-basket-localstorage-rest-parameter/index.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BasketLocalstoragePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst FETCH_BOARDS = _apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n  query fetchBoards($page: Int) {\n    fetchBoards(page: $page) {\n      _id\n      writer\n      title\n      contents\n    }\n  }\n`;\nfunction BasketLocalstoragePage() {\n    const { data  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(FETCH_BOARDS);\n    const onClickAddBasket = (basket)=>()=>{\n            console.log(basket);\n            var ref;\n            // 1. 기존 장바구니 가져오기\n            const baskets = JSON.parse((ref = localStorage.getItem(\"baskets\")) !== null && ref !== void 0 ? ref : \"[]\");\n            // 2. 이미 담겼는지 확인하기\n            const temp = baskets.filter((el)=>el._id === basket._id\n            );\n            if (temp.length === 1) {\n                alert(\"이미 담으신 물품입니다 !!\");\n                return;\n            }\n            // 3. 해당 장바구니에 담기\n            const { __typename , ...newBasket } = basket; // 필요없는 데이터(__typename) 삭제하기\n            baskets.push(newBasket);\n            localStorage.setItem(\"baskets\", JSON.stringify(baskets));\n        }\n    ;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: data === null || data === void 0 ? void 0 : data.fetchBoards.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            margin: \"10px\"\n                        },\n                        children: el.writer\n                    }, void 0, false, {\n                        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/25-03-basket-localstorage-rest-parameter/index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        style: {\n                            margin: \"10px\"\n                        },\n                        children: el.title\n                    }, void 0, false, {\n                        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/25-03-basket-localstorage-rest-parameter/index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: onClickAddBasket(el),\n                        children: \"장바구니 담기\"\n                    }, void 0, false, {\n                        fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/25-03-basket-localstorage-rest-parameter/index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, el._id, true, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/25-03-basket-localstorage-rest-parameter/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this)\n        )\n    }, void 0, false));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8yNS0wMy1iYXNrZXQtbG9jYWxzdG9yYWdlLXJlc3QtcGFyYW1ldGVyL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEM7QUFPOUMsS0FBSyxDQUFDRSxZQUFZLEdBQUdGLCtDQUFHLENBQUM7Ozs7Ozs7OztBQVN6QjtBQUVlLFFBQVEsQ0FBQ0csc0JBQXNCLEdBQUcsQ0FBQztJQUNoRCxLQUFLLENBQUMsQ0FBQyxDQUFDQyxJQUFJLEVBQUMsQ0FBQyxHQUFHSCx3REFBUSxDQUN2QkMsWUFBWTtJQUdkLEtBQUssQ0FBQ0csZ0JBQWdCLElBQUlDLE1BQVcsT0FBVyxDQUFDO1lBQy9DQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsTUFBTTtnQkFLSEcsR0FBK0I7WUFIOUMsRUFBc0M7WUFDdEMsS0FBSyxDQUFDQyxPQUFPLEdBRVRDLElBQUksQ0FBQ0MsS0FBSyxFQUFDSCxHQUErQixHQUEvQkEsWUFBWSxDQUFDSSxPQUFPLENBQUMsQ0FBUyx1QkFBOUJKLEdBQStCLGNBQS9CQSxHQUErQixHQUFJLENBQUk7WUFFdEQsRUFBa0I7WUFDRSxLQUFmLENBQUNLLElBQUksR0FBR0osT0FBTyxDQUFDSyxNQUFNLEVBQUVDLEVBQU8sR0FBS0EsRUFBRSxDQUFDQyxHQUFHLEtBQUtYLE1BQU0sQ0FBQ1csR0FBRzs7WUFDOUQsRUFBRSxFQUFFSCxJQUFJLENBQUNJLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztnQkFDdEJDLEtBQUssQ0FBQyxDQUFpQjtnQkFDSCxNQUFkO1lBQ1IsQ0FBQztZQUVELEVBQWlCO1lBQ0MsS0FBYixDQUFDLENBQUMsQ0FBQ0MsVUFBVSxNQUFLQyxTQUFTLENBQUMsQ0FBQyxHQUFHZixNQUFNLENBQUUsQ0FBNEIsRUFBc0I7WUFDekVJLE9BQWYsQ0FBQ1ksSUFBSSxDQUFDRCxTQUFTO1lBQ3RCWixZQUFZLENBQUNjLE9BQU8sQ0FBQyxDQUFTLFVBQUVaLElBQUksQ0FBQ2EsU0FBUyxDQUFDZCxPQUFPO1FBQ3hELENBQUM7O0lBRUQsTUFBTTtrQkFFRE4sSUFBSSxhQUFKQSxJQUFJLEtBQUpBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLElBQUksQ0FBSkEsQ0FBaUIsR0FBakJBLElBQUksQ0FBRXFCLFdBQVcsQ0FBQ0MsR0FBRyxFQUFFVixFQUFVLCtFQUMvQlcsQ0FBRzs7Z0dBQ0RDLENBQUk7d0JBQUNDLEtBQUssRUFBRSxDQUFDOzRCQUFDQyxNQUFNLEVBQUUsQ0FBTTt3QkFBQyxDQUFDO2tDQUFHZCxFQUFFLENBQUNlLE1BQU07Ozs7OztnR0FDMUNILENBQUk7d0JBQUNDLEtBQUssRUFBRSxDQUFDOzRCQUFDQyxNQUFNLEVBQUUsQ0FBTTt3QkFBQyxDQUFDO2tDQUFHZCxFQUFFLENBQUNnQixLQUFLOzs7Ozs7Z0dBQ3pDQyxDQUFNO3dCQUFDQyxPQUFPLEVBQUU3QixnQkFBZ0IsQ0FBQ1csRUFBRTtrQ0FBRyxDQUFPOzs7Ozs7O2VBSHRDQSxFQUFFLENBQUNDLEdBQUc7Ozs7Ozs7QUFReEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsYXNzLy4vcGFnZXMvMjUtMDMtYmFza2V0LWxvY2Fsc3RvcmFnZS1yZXN0LXBhcmFtZXRlci9pbmRleC50c3g/NjE4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncWwsIHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQge1xuICBJQm9hcmQsXG4gIElRdWVyeSxcbiAgSVF1ZXJ5RmV0Y2hCb2FyZHNBcmdzLFxufSBmcm9tIFwiLi4vLi4vc3JjL2NvbW1vbnMvdHlwZXMvZ2VuZXJhdGVkL3R5cGVzXCI7XG5cbmNvbnN0IEZFVENIX0JPQVJEUyA9IGdxbGBcbiAgcXVlcnkgZmV0Y2hCb2FyZHMoJHBhZ2U6IEludCkge1xuICAgIGZldGNoQm9hcmRzKHBhZ2U6ICRwYWdlKSB7XG4gICAgICBfaWRcbiAgICAgIHdyaXRlclxuICAgICAgdGl0bGVcbiAgICAgIGNvbnRlbnRzXG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYXNrZXRMb2NhbHN0b3JhZ2VQYWdlKCkge1xuICBjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5PFBpY2s8SVF1ZXJ5LCBcImZldGNoQm9hcmRzXCI+LCBJUXVlcnlGZXRjaEJvYXJkc0FyZ3M+KFxuICAgIEZFVENIX0JPQVJEU1xuICApO1xuXG4gIGNvbnN0IG9uQ2xpY2tBZGRCYXNrZXQgPSAoYmFza2V0OiBhbnkpID0+ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhiYXNrZXQpO1xuXG4gICAgLy8gMS4g6riw7KG0IOyepeuwlOq1rOuLiCDqsIDsoLjsmKTquLBcbiAgICBjb25zdCBiYXNrZXRzOiBBcnJheTxcbiAgICAgIFBpY2s8SUJvYXJkLCBcIndyaXRlclwiIHwgXCJjb250ZW50c1wiIHwgXCJ0aXRsZVwiIHwgXCJfaWRcIj5bXVxuICAgID4gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmFza2V0c1wiKSA/PyBcIltdXCIpO1xuXG4gICAgLy8gMi4g7J2066+4IOuLtOqyvOuKlOyngCDtmZXsnbjtlZjquLBcbiAgICBjb25zdCB0ZW1wID0gYmFza2V0cy5maWx0ZXIoKGVsOiBhbnkpID0+IGVsLl9pZCA9PT0gYmFza2V0Ll9pZCk7XG4gICAgaWYgKHRlbXAubGVuZ3RoID09PSAxKSB7XG4gICAgICBhbGVydChcIuydtOuvuCDri7TsnLzsi6Ag66y87ZKI7J6F64uI64ukICEhXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIDMuIO2VtOuLuSDsnqXrsJTqtazri4jsl5Ag64u06riwXG4gICAgY29uc3QgeyBfX3R5cGVuYW1lLCAuLi5uZXdCYXNrZXQgfSA9IGJhc2tldDsgLy8g7ZWE7JqU7JeG64qUIOuNsOydtO2EsChfX3R5cGVuYW1lKSDsgq3soJztlZjquLBcbiAgICBiYXNrZXRzLnB1c2gobmV3QmFza2V0KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJhc2tldHNcIiwgSlNPTi5zdHJpbmdpZnkoYmFza2V0cykpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtkYXRhPy5mZXRjaEJvYXJkcy5tYXAoKGVsOiBJQm9hcmQpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2VsLl9pZH0+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgbWFyZ2luOiBcIjEwcHhcIiB9fT57ZWwud3JpdGVyfTwvc3Bhbj5cbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBtYXJnaW46IFwiMTBweFwiIH19PntlbC50aXRsZX08L3NwYW4+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrQWRkQmFza2V0KGVsKX0+7J6l67CU6rWs64uIIOuLtOq4sDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImdxbCIsInVzZVF1ZXJ5IiwiRkVUQ0hfQk9BUkRTIiwiQmFza2V0TG9jYWxzdG9yYWdlUGFnZSIsImRhdGEiLCJvbkNsaWNrQWRkQmFza2V0IiwiYmFza2V0IiwiY29uc29sZSIsImxvZyIsImxvY2FsU3RvcmFnZSIsImJhc2tldHMiLCJKU09OIiwicGFyc2UiLCJnZXRJdGVtIiwidGVtcCIsImZpbHRlciIsImVsIiwiX2lkIiwibGVuZ3RoIiwiYWxlcnQiLCJfX3R5cGVuYW1lIiwibmV3QmFza2V0IiwicHVzaCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJmZXRjaEJvYXJkcyIsIm1hcCIsImRpdiIsInNwYW4iLCJzdHlsZSIsIm1hcmdpbiIsIndyaXRlciIsInRpdGxlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/25-03-basket-localstorage-rest-parameter/index.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/25-03-basket-localstorage-rest-parameter/index.tsx"));
module.exports = __webpack_exports__;

})();