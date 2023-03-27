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
exports.id = "pages/16-04-function-lifecycle";
exports.ids = ["pages/16-04-function-lifecycle"];
exports.modules = {

/***/ "./pages/16-04-function-lifecycle/index.tsx":
/*!**************************************************!*\
  !*** ./pages/16-04-function-lifecycle/index.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FunctionLifeCyClePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction FunctionLifeCyClePage() {\n    const { 0: count , 1: setCount  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    // useEffect(() => {}, []);  => [] : 의존성 배열    <- 처음에도, 변경되고도 실행 함\n    // ex) [] 안에 \"변수\"를 넣어서 \"변수\"가 바뀌면 실행\n    // useEffect(() => {\n    //   console.log(\"변경되고 나서 실행!\");\n    // }, []);\n    // 1. componentDidMount() {\n    //   console.log(\"그려지고 나서 실행!\");\n    // }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(\"그려지고 나서 실행!\");\n    }, []);\n    // => 의존성 배열이 비어있으니까 한번만 실행하게 됨 === componentDidMount\n    // 2. componentDidUpdate() {\n    //   console.log(\"변경되고 나서 실행!\");    <- 처음엔 실행 안됨(변경 되고만 실행 함)\n    // }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(\"변경되고 나서 실행!\");\n    });\n    // => 의존성 배열이 아예 없는 상태라 모든 걸 의미함. 어떤거 하나라도 바뀌면 실행 됨 == componentDidUpdate (비슷)\n    // 3. componentWillUnmount() {\n    //   console.log(\"사라질 때 실행!\");\n    // // }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        return ()=>{\n            console.log(\"사라질 때 실행!\");\n        };\n    }, []);\n    // => return을 넣으면 사라질 때 한번만 실행하게 됨 === componentWillUnmount\n    // 1) 그려지고 나서 한번만 실행, 사라질 때 한번만 실행은 하나로 합칠 수 있다.\n    // useEffect(() => {\n    //   console.log(\"그려지고 나서 실행!\");\n    //   return () => {\n    //     console.log(\"사라질 때 실행!\");\n    //   };\n    // }, []);\n    // useEffect(() => {\n    //   console.log(\"변경되고 나서 실행!\");\n    // });\n    // 2)\n    const onClickCountUp = ()=>{\n        setCount((prev)=>prev + 1\n        );\n    };\n    const onClickMove = ()=>{\n        void router.push(\"/\");\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: \"리액트에서 제공해주는 기능입니다.\"\n            }, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/16-04-function-lifecycle/index.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: count\n            }, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/16-04-function-lifecycle/index.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onClickCountUp,\n                children: \"카운트 올리기!\"\n            }, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/16-04-function-lifecycle/index.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: onClickMove,\n                children: \"나가기!!!\"\n            }, void 0, false, {\n                fileName: \"/Users/larmong/Desktop/codecamp/04frontend/class/pages/16-04-function-lifecycle/index.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy8xNi0wNC1mdW5jdGlvbi1saWZlY3ljbGUvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ0k7QUFFNUIsUUFBUSxDQUFDRyxxQkFBcUIsR0FBRyxDQUFDO0lBQy9DLEtBQUssTUFBRUMsS0FBSyxNQUFFQyxRQUFRLE1BQUlILCtDQUFRLENBQUMsQ0FBQztJQUNwQyxLQUFLLENBQUNJLE1BQU0sR0FBR04sc0RBQVM7SUFFeEIsRUFBa0U7SUFDaEMsRUFBQztJQUNILEVBQVo7SUFDcEIsRUFBZ0M7SUFDaEIsRUFBTjtJQUVWLEVBQTJCO0lBQzNCLEVBQWdDO0lBQ2hCLEVBQVo7SUFDSkMsZ0RBQVMsS0FBTyxDQUFDO1FBQ2ZNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWE7SUFDWCxDQUFmLEVBQUUsQ0FBQyxDQUFDO0lBRUwsRUFBcUQ7SUFFYixFQUFaO0lBQzVCLEVBQTZEO0lBQ2YsRUFBMUM7SUFDSlAsZ0RBQVMsS0FBTyxDQUFDO1FBQ2ZNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWE7SUFDWCxDQUFmO0lBRUQsRUFBOEU7SUFFVixFQUF0QztJQUM5QixFQUE4QjtJQUNsQixFQUFMO0lBQ1BQLGdEQUFTLEtBQU8sQ0FBQztRQUNmLE1BQU0sS0FBTyxDQUFDO1lBQ1pNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVc7UUFDYixDQUFYO0lBQ0gsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNMLEVBQTJEO0lBRTNCLEVBQWdCO0lBQ1UsRUFBdEM7SUFDcEIsRUFBZ0M7SUFDaEIsRUFBRztJQUNuQixFQUFnQztJQUNwQixFQUFMO0lBQ1AsRUFBVTtJQUNWLEVBQW9CO0lBQ3BCLEVBQWdDO0lBQ2hCLEVBQVY7SUFFTixFQUFLO0lBRUwsS0FBSyxDQUFDQyxjQUFjLE9BQVMsQ0FBQztRQUM1QkosUUFBUSxFQUFFSyxJQUFJLEdBQUtBLElBQUksR0FBRyxDQUFDOztJQUM3QixDQUFDO0lBRUQsS0FBSyxDQUFDQyxXQUFXLE9BQVMsQ0FBQztRQUN6QixJQUFJLENBQUNMLE1BQU0sQ0FBQ00sSUFBSSxDQUFDLENBQUc7SUFDdEIsQ0FBQztJQUVELE1BQU07O3dGQUVEQyxDQUFHOzBCQUFDLENBQWtCOzs7Ozs7d0ZBQ1FBLENBQTNCOzBCQUFFVCxLQUFLOzs7Ozs7d0ZBQ1ZVLENBQU07Z0JBQUNDLE9BQU8sRUFBRU4sY0FBYzswQkFBRSxDQUFROzs7Ozs7d0ZBQzVCSyxDQUFOO2dCQUFDQyxPQUFPLEVBQUVKLFdBQVc7MEJBQUUsQ0FBTTs7Ozs7Ozs7QUFHMUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsYXNzLy4vcGFnZXMvMTYtMDQtZnVuY3Rpb24tbGlmZWN5Y2xlL2luZGV4LnRzeD8wZGRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGdW5jdGlvbkxpZmVDeUNsZVBhZ2UoKSB7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7fSwgW10pOyAgPT4gW10gOiDsnZjsobTshLEg67Cw7Je0ICAgIDwtIOyymOydjOyXkOuPhCwg67OA6rK965CY6rOg64+EIOyLpO2WiSDtlahcbiAgLy8gZXgpIFtdIOyViOyXkCBcIuuzgOyImFwi66W8IOuEo+yWtOyEnCBcIuuzgOyImFwi6rCAIOuwlOuAjOuptCDsi6TtlolcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZyhcIuuzgOqyveuQmOqzoCDrgpjshJwg7Iuk7ZaJIVwiKTtcbiAgLy8gfSwgW10pO1xuXG4gIC8vIDEuIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAvLyAgIGNvbnNvbGUubG9nKFwi6re466Ck7KeA6rOgIOuCmOyEnCDsi6TtlokhXCIpO1xuICAvLyB9XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCLqt7jroKTsp4Dqs6Ag64KY7IScIOyLpO2WiSFcIik7XG4gIH0sIFtdKTtcblxuICAvLyA9PiDsnZjsobTshLEg67Cw7Je07J20IOu5hOyWtOyeiOycvOuLiOq5jCDtlZzrsojrp4wg7Iuk7ZaJ7ZWY6rKMIOuQqCA9PT0gY29tcG9uZW50RGlkTW91bnRcblxuICAvLyAyLiBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gIC8vICAgY29uc29sZS5sb2coXCLrs4Dqsr3rkJjqs6Ag64KY7IScIOyLpO2WiSFcIik7ICAgIDwtIOyymOydjOyXlCDsi6Ttlokg7JWI65CoKOuzgOqyvSDrkJjqs6Drp4wg7Iuk7ZaJIO2VqClcbiAgLy8gfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwi67OA6rK965CY6rOgIOuCmOyEnCDsi6TtlokhXCIpO1xuICB9KTtcblxuICAvLyA9PiDsnZjsobTshLEg67Cw7Je07J20IOyVhOyYiCDsl4bripQg7IOB7YOc6528IOuqqOuToCDqsbgg7J2Y66+47ZWoLiDslrTrlqTqsbAg7ZWY64KY652864+EIOuwlOuAjOuptCDsi6Ttlokg65CoID09IGNvbXBvbmVudERpZFVwZGF0ZSAo67mE7Iq3KVxuXG4gIC8vIDMuIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAvLyAgIGNvbnNvbGUubG9nKFwi7IKs65287KeIIOuVjCDsi6TtlokhXCIpO1xuICAvLyAvLyB9XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwi7IKs65287KeIIOuVjCDsi6TtlokhXCIpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgLy8gPT4gcmV0dXJu7J2EIOuEo+ycvOuptCDsgqzrnbzsp4gg65WMIO2VnOuyiOunjCDsi6TtlontlZjqsowg65CoID09PSBjb21wb25lbnRXaWxsVW5tb3VudFxuXG4gIC8vIDEpIOq3uOugpOyngOqzoCDrgpjshJwg7ZWc67KI66eMIOyLpO2WiSwg7IKs65287KeIIOuVjCDtlZzrsojrp4wg7Iuk7ZaJ7J2AIO2VmOuCmOuhnCDtlansuaAg7IiYIOyeiOuLpC5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZyhcIuq3uOugpOyngOqzoCDrgpjshJwg7Iuk7ZaJIVwiKTtcbiAgLy8gICByZXR1cm4gKCkgPT4ge1xuICAvLyAgICAgY29uc29sZS5sb2coXCLsgqzrnbzsp4gg65WMIOyLpO2WiSFcIik7XG4gIC8vICAgfTtcbiAgLy8gfSwgW10pO1xuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKFwi67OA6rK965CY6rOgIOuCmOyEnCDsi6TtlokhXCIpO1xuICAvLyB9KTtcblxuICAvLyAyKVxuXG4gIGNvbnN0IG9uQ2xpY2tDb3VudFVwID0gKCkgPT4ge1xuICAgIHNldENvdW50KChwcmV2KSA9PiBwcmV2ICsgMSk7XG4gIH07XG5cbiAgY29uc3Qgb25DbGlja01vdmUgPSAoKSA9PiB7XG4gICAgdm9pZCByb3V0ZXIucHVzaChcIi9cIik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdj7rpqzslaHtirjsl5DshJwg7KCc6rO17ZW07KO864qUIOq4sOuKpeyeheuLiOuLpC48L2Rpdj5cbiAgICAgIDxkaXY+e2NvdW50fTwvZGl2PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrQ291bnRVcH0+7Lm07Jq07Yq4IOyYrOumrOq4sCE8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gb25DbGljaz17b25DbGlja01vdmV9PuuCmOqwgOq4sCEhITwvYnV0dG9uPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRnVuY3Rpb25MaWZlQ3lDbGVQYWdlIiwiY291bnQiLCJzZXRDb3VudCIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJvbkNsaWNrQ291bnRVcCIsInByZXYiLCJvbkNsaWNrTW92ZSIsInB1c2giLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/16-04-function-lifecycle/index.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = (__webpack_exec__("./pages/16-04-function-lifecycle/index.tsx"));
module.exports = __webpack_exports__;

})();