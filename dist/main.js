/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad.js */ \"./src/pageLoad.js\");\n\n\nconst contentDiv = document.querySelector(\"#content\");\n\n(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__.contentLoad)();\n\nconst menuPage = document.querySelector(\".menu\");\n\nmenuPage.addEventListener('click', _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__.menuLoad);\n\nconst homePage = document.querySelector(\".home\");\n\nhomePage.addEventListener('click', _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__.contentLoad);\n\nconst aboutPage = document.querySelector(\".about\");\n\naboutPage.addEventListener('click', _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__.aboutLoad);\n\n\n//# sourceURL=webpack://restaurant-project/./src/index.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aboutLoad\": () => (/* binding */ aboutLoad),\n/* harmony export */   \"clearContent\": () => (/* binding */ clearContent),\n/* harmony export */   \"contentLoad\": () => (/* binding */ contentLoad),\n/* harmony export */   \"menuLoad\": () => (/* binding */ menuLoad)\n/* harmony export */ });\n\n\nfunction contentLoad() {\n\n    const contentDiv = document.querySelector(\"#content\");\n\n    contentDiv.innerHTML = '';\n\n    const mainTitle = document.createElement('h1');\n    mainTitle.innerText = \"Welcome to Arcygore's Taco Shop!\";\n\n    const mainImg = document.createElement('img');\n    mainImg.src = \"../images/mushrooms.jpg\";\n\n    const mainText = document.createElement('p');\n    mainText.innerText = \"Why yes, we do have mushroom tacos available!\";\n\n    contentDiv.appendChild(mainTitle);\n    contentDiv.appendChild(mainImg);\n    contentDiv.appendChild(mainText);\n};\n\nfunction aboutLoad() {\n\n    const contentDiv = document.querySelector(\"#content\");\n\n    contentDiv.innerHTML = '';\n\n    const mainTitle = document.createElement('h1');\n    mainTitle.innerText = \"About Us\";\n\n    const mainImg = document.createElement('img');\n    mainImg.src = \"../images/peppers.jpg\";\n\n    const mainText = document.createElement('p');\n    mainText.innerText = \"We pride ourselves on quality and use the best ingredients available to us\";\n\n    contentDiv.appendChild(mainTitle);\n    contentDiv.appendChild(mainImg);\n    contentDiv.appendChild(mainText);\n};\n\nfunction menuLoad() {\n\n    const contentDiv = document.querySelector(\"#content\");\n\n    contentDiv.innerHTML = '';\n\n    const mainTitle = document.createElement('h1');\n    mainTitle.innerText = \"Here is Arcygore's Menu!\";\n\n    const mainImg = document.createElement('img');\n    mainImg.src = \"../images/tofutaco.jpg\";\n\n    const mainText = document.createElement('p');\n    mainText.innerText = \"The tofu taco is to die for!\";\n\n    contentDiv.appendChild(mainTitle);\n    contentDiv.appendChild(mainImg);\n    contentDiv.appendChild(mainText);\n};\n\nfunction clearContent() {\n\n    const contentDiv = document.querySelector(\"#content\");\n\n    contentDiv.innerHTML = '';\n\n}\n\n\n//# sourceURL=webpack://restaurant-project/./src/pageLoad.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;