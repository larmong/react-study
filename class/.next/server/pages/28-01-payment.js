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
exports.id = "pages/28-01-payment";
exports.ids = ["pages/28-01-payment"];
exports.modules = {

/***/ "./pages/28-01-payment/index.tsx":
/*!***************************************!*\
  !*** ./pages/28-01-payment/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PaymentPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction PaymentPage() {\n    const onClickPayment = ()=>{\n        const IMP = window.IMP;\n        IMP.init(\"imp62582078\");\n        // IMP.request_pay(param, callback) 결제창 호출\n        IMP.request_pay({\n            // param\n            pg: \"nice\",\n            pay_method: \"card\",\n            // merchant_uid: \"ORD20180131-0000011\", // 중복되면 결제 안됨\n            name: \"노르웨이 회전 의자\",\n            amount: 100,\n            buyer_email: \"larmong@naver.com\",\n            buyer_name: \"이루이\",\n            buyer_tel: \"010-4242-4242\",\n            buyer_addr: \"서울특별시 강남구 신사동\",\n            buyer_postcode: \"01181\",\n            m_redirect_url: \"http://localhost:3000/28-01-payment\"\n        }, (rsp)=>{\n            // callback\n            if (rsp.success) {\n                // 결제 성공 시 로직\n                console.log(rsp);\n            // 백엔드에 결제관련 데이터 넘겨주기 => 즉, mutation 실행\n            // createPointTransactionOfLoading\n            } else {\n                // 결제 실패 시 로직\n                alert(\"결제에 실패했습니다. 다시 시도해 주세요!\");\n            }\n        });\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                    src: \"https://cdn.iamport.kr/v1/iamport.js\"\n                }, void 0, false, {\n                    fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/28-01-payment/index.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/28-01-payment/index.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onClickPayment,\n                children: \"결제하기\"\n            }, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/28-01-payment/index.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8yOC0wMS1wYXltZW50L2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEI7QUFNYixRQUFRLENBQUNDLFdBQVcsR0FBRyxDQUFDO0lBQ3JDLEtBQUssQ0FBQ0MsY0FBYyxPQUFTLENBQUM7UUFDNUIsS0FBSyxDQUFDQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0QsR0FBRztRQUN0QkEsR0FBRyxDQUFDRSxJQUFJLENBQUMsQ0FBYTtRQUV0QixFQUEwQztRQUNoQ0YsR0FBUCxDQUFDRyxXQUFXLENBQ2IsQ0FBQztZQUNDLEVBQVE7WUFDUkMsRUFBRSxFQUFFLENBQU07WUFDVkMsVUFBVSxFQUFFLENBQU07WUFDbEIsRUFBcUQ7WUFDckNDLElBQVosRUFBRSxDQUFZO1lBQ0ZDLE1BQVYsRUFBRSxHQUFHO1lBQ1hDLFdBQVcsRUFBRSxDQUFtQjtZQUNoQ0MsVUFBVSxFQUFFLENBQUs7WUFDWEMsU0FBRyxFQUFFLENBQWU7WUFDMUJDLFVBQVUsRUFBRSxDQUFlO1lBQ0xDLGNBQVIsRUFBRSxDQUFPO1lBQ3ZCQyxjQUFjLEVBQUUsQ0FBcUM7UUFDdkQsQ0FBQyxHQUNBQyxHQUFRLEdBQUssQ0FBQztZQUNiLEVBQVc7WUFDWCxFQUFFLEVBQUVBLEdBQUcsQ0FBQ0MsT0FBTyxFQUFFLENBQUM7Z0JBQ2hCLEVBQWE7Z0JBQ0NDLE9BQVAsQ0FBQ0MsR0FBRyxDQUFDSCxHQUFHO1lBRWYsRUFBdUM7WUFDSCxFQUFGO1lBQ3BDLENBQUMsTUFBTSxDQUFDO2dCQUNOLEVBQWE7Z0JBQ0NJLEtBQVQsQ0FBQyxDQUF5QjtZQUNDLENBQWpDO1FBQ0gsQ0FBQztJQUVMLENBQUM7SUFFRCxNQUFNOzt3RkFFRHJCLGtEQUFJO3NHQUVGc0IsQ0FBTTtvQkFBQ0MsR0FBRyxFQUFDLENBQXNDOzs7Ozs7Ozs7Ozt3RkFFbkRDLENBQU07Z0JBQUNDLE9BQU8sRUFBRXZCLGNBQWM7MEJBQUUsQ0FBSTs7Ozs7Ozs7QUFHM0MsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsYXNzLy4vcGFnZXMvMjgtMDEtcGF5bWVudC9pbmRleC50c3g/ZTcxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5cbmRlY2xhcmUgY29uc3Qgd2luZG93OiB0eXBlb2YgZ2xvYmFsVGhpcyAmIHtcbiAgSU1QOiBhbnk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXltZW50UGFnZSgpIHtcbiAgY29uc3Qgb25DbGlja1BheW1lbnQgPSAoKSA9PiB7XG4gICAgY29uc3QgSU1QID0gd2luZG93LklNUDtcbiAgICBJTVAuaW5pdChcImltcDYyNTgyMDc4XCIpO1xuXG4gICAgLy8gSU1QLnJlcXVlc3RfcGF5KHBhcmFtLCBjYWxsYmFjaykg6rKw7KCc7LC9IO2YuOy2nFxuICAgIElNUC5yZXF1ZXN0X3BheShcbiAgICAgIHtcbiAgICAgICAgLy8gcGFyYW1cbiAgICAgICAgcGc6IFwibmljZVwiLFxuICAgICAgICBwYXlfbWV0aG9kOiBcImNhcmRcIiwgLy8gY2FyZCwgdmJhbmso66y07Ya17J6lKSDrk7FcbiAgICAgICAgLy8gbWVyY2hhbnRfdWlkOiBcIk9SRDIwMTgwMTMxLTAwMDAwMTFcIiwgLy8g7KSR67O165CY66m0IOqysOygnCDslYjrkKhcbiAgICAgICAgbmFtZTogXCLrhbjrpbTsm6jsnbQg7ZqM7KCEIOydmOyekFwiLFxuICAgICAgICBhbW91bnQ6IDEwMCxcbiAgICAgICAgYnV5ZXJfZW1haWw6IFwibGFybW9uZ0BuYXZlci5jb21cIixcbiAgICAgICAgYnV5ZXJfbmFtZTogXCLsnbTro6jsnbRcIixcbiAgICAgICAgYnV5ZXJfdGVsOiBcIjAxMC00MjQyLTQyNDJcIixcbiAgICAgICAgYnV5ZXJfYWRkcjogXCLshJzsmrjtirnrs4Tsi5wg6rCV64Ko6rWsIOyLoOyCrOuPmVwiLFxuICAgICAgICBidXllcl9wb3N0Y29kZTogXCIwMTE4MVwiLFxuICAgICAgICBtX3JlZGlyZWN0X3VybDogXCJodHRwOi8vbG9jYWxob3N0OjMwMDAvMjgtMDEtcGF5bWVudFwiLCAvLyDrqqjrsJTsnbzsl5DshJzripQg6rKw7KCc7IucIO2OmOydtOyngCDso7zshozqsIAg67CU64CM66m07IScIOydtOuPmeuQmOq4sCDrlYzrrLjsl5Ag64+M7JWE7JisIO2OmOydtOyngOulvCDsnoXroKXtlbTslbwg7ZWoXG4gICAgICB9LFxuICAgICAgKHJzcDogYW55KSA9PiB7XG4gICAgICAgIC8vIGNhbGxiYWNrXG4gICAgICAgIGlmIChyc3Auc3VjY2Vzcykge1xuICAgICAgICAgIC8vIOqysOygnCDshLHqs7Ug7IucIOuhnOyngVxuICAgICAgICAgIGNvbnNvbGUubG9nKHJzcCk7XG5cbiAgICAgICAgICAvLyDrsLHsl5Trk5zsl5Ag6rKw7KCc6rSA66CoIOuNsOydtO2EsCDrhJjqsqjso7zquLAgPT4g7KaJLCBtdXRhdGlvbiDsi6TtlolcbiAgICAgICAgICAvLyBjcmVhdGVQb2ludFRyYW5zYWN0aW9uT2ZMb2FkaW5nXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8g6rKw7KCcIOyLpO2MqCDsi5wg66Gc7KeBXG4gICAgICAgICAgYWxlcnQoXCLqsrDsoJzsl5Ag7Iuk7Yyo7ZaI7Iq164uI64ukLiDri6Tsi5wg7Iuc64+E7ZW0IOyjvOyEuOyalCFcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICB7LyogaWFtcG9ydC5wYXltZW50LmpzICovfVxuICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vY2RuLmlhbXBvcnQua3IvdjEvaWFtcG9ydC5qc1wiPjwvc2NyaXB0PlxuICAgICAgPC9IZWFkPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrUGF5bWVudH0+6rKw7KCc7ZWY6riwPC9idXR0b24+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIlBheW1lbnRQYWdlIiwib25DbGlja1BheW1lbnQiLCJJTVAiLCJ3aW5kb3ciLCJpbml0IiwicmVxdWVzdF9wYXkiLCJwZyIsInBheV9tZXRob2QiLCJuYW1lIiwiYW1vdW50IiwiYnV5ZXJfZW1haWwiLCJidXllcl9uYW1lIiwiYnV5ZXJfdGVsIiwiYnV5ZXJfYWRkciIsImJ1eWVyX3Bvc3Rjb2RlIiwibV9yZWRpcmVjdF91cmwiLCJyc3AiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsImFsZXJ0Iiwic2NyaXB0Iiwic3JjIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/28-01-payment/index.tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

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
var __webpack_exports__ = (__webpack_exec__("./pages/28-01-payment/index.tsx"));
module.exports = __webpack_exports__;

})();