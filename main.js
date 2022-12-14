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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad.js */ \"./src/pageLoad.js\");\n\n\n(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__.contentLoad)();\n(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__.pageEventListener)();\n\n\n//# sourceURL=webpack://restaurant-project/./src/index.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"aboutLoad\": () => (/* binding */ aboutLoad),\n/* harmony export */   \"clearContent\": () => (/* binding */ clearContent),\n/* harmony export */   \"contentLoad\": () => (/* binding */ contentLoad),\n/* harmony export */   \"menuLoad\": () => (/* binding */ menuLoad),\n/* harmony export */   \"pageEventListener\": () => (/* binding */ pageEventListener)\n/* harmony export */ });\nfunction navBarLoad(content) { // Loads the Navigation Bar at the top of the page.\n\n    const contentDiv = document.querySelector(\"#content\");\n\n    const navBar = document.createElement('header');\n    navBar.classList.add(\"nav-bar\");\n\n    const navBarList = document.createElement('ul')\n    navBarList.classList.add('nav-links');\n\n    const menuTab = document.createElement('li');\n    menuTab.classList.add('menu', 'link');\n    menuTab.innerText = \"Menu\";\n\n    const homeTab = document.createElement('li');\n    homeTab.classList.add('home', 'link');\n    homeTab.innerText = \"Home\";\n\n    const aboutTab = document.createElement('li');\n    aboutTab.classList.add('about', 'link');\n    aboutTab.innerText = \"About\";\n\n    navBarList.appendChild(menuTab);\n    navBarList.appendChild(homeTab);\n    navBarList.appendChild(aboutTab);\n    navBar.appendChild(navBarList);\n    content.appendChild(navBar);\n\n}\n\nfunction pageEventListener() {\n    const menuPage = document.querySelector(\".menu\");\n\n    menuPage.addEventListener('click', menuLoad);\n\n    const homePage = document.querySelector(\".home\");\n\n    homePage.addEventListener('click', contentLoad);\n\n    const aboutPage = document.querySelector(\".about\");\n\n    aboutPage.addEventListener('click', aboutLoad);\n\n}\n\n\n\nfunction contentLoad() {\n\n    const contentDiv = document.querySelector(\"#content\");\n\n    contentDiv.innerHTML = '';\n\n    navBarLoad(contentDiv);\n\n    const mainTitle = document.createElement('h1');\n    mainTitle.innerText = \"Welcome to Arcygore's Taco Shop!\";\n\n    const mainImg = document.createElement('img');\n    mainImg.src = \"../images/guac.jpg\";\n\n    const mainText = document.createElement('p');\n    mainText.innerText = \"We are the quintessence of culinary capability. Our homemade tacos will shock all of those around the world, even titans such as Rick Bayless or J. Kenji Lopez-Alt. Join us for a chocolate street taco, or take home a nice tofu taco - no matter what you choose at Arcygore's Taco Shop, you will not leave disappointed!\";\n\n    contentDiv.appendChild(mainTitle);\n    contentDiv.appendChild(mainImg);\n    contentDiv.appendChild(mainText);\n\n    pageEventListener();\n};\n\n\n\n\nfunction createMenu(menuList, menuLocation) { // Creates menu items in a grid when given a Array of objects\n    let i=1;\n    menuList.forEach(function(item) {\n        console.log(item);\n        const menuItem = document.createElement(\"div\");\n        menuItem.classList.add('menu-item', `menu-item${i}`);\n    \n        const itemImg = document.createElement('img');\n        itemImg.classList.add('food-img');\n        itemImg.src = item.itemimgsrc;\n\n        const foodItemAndPrice = document.createElement('h2');\n        foodItemAndPrice.innerText = `${item.itemname} - $${item.itemprice}`;\n        console.log(foodItemAndPrice);\n\n        const mainText = document.createElement('p');\n        mainText.innerText = `${item.itemdescription}`;\n\n        menuItem.appendChild(itemImg);\n        menuItem.appendChild(foodItemAndPrice);\n        menuItem.appendChild(mainText);\n        \n        menuLocation.appendChild(menuItem);\n        i++;\n    });\n}\n\n\n\n\nfunction aboutLoad() {\n\n    const contentDiv = document.querySelector(\"#content\");\n\n    contentDiv.innerHTML = '';\n\n    navBarLoad(contentDiv);\n\n    const mainTitle = document.createElement('h1');\n    mainTitle.innerText = \"About Us\";\n\n    const mainImg = document.createElement('img');\n    mainImg.src = \"../images/peppers.jpg\";\n\n    const mainText = document.createElement('p');\n    mainText.innerText = \"We pride ourselves on quality and use the best ingredients available to us. As a mechanical engineer with a passion for coding and video games, my knowledge of tacos is unmatched after the many hours in school and after that I have made a late-night trip to Taco Bell. The chef has worked at fine dining establishments such as 'IHOP' and 'Burger King', so you know you'll have a great meal here!\";\n\n    contentDiv.appendChild(mainTitle);\n    contentDiv.appendChild(mainImg);\n    contentDiv.appendChild(mainText);\n    pageEventListener();\n};\n\n\n\n\nfunction menuLoad() {\n\n    const contentDiv = document.querySelector(\"#content\");\n\n    contentDiv.innerHTML = '';\n\n    navBarLoad(contentDiv);\n\n    const mainTitle = document.createElement('h1');\n    mainTitle.innerText = \"Here is Arcygore's Menu!\";\n\n\n    const menuDiv = document.createElement(\"div\");\n    menuDiv.classList.add('menu-container');\n\n    let menuList = [{ // Items to be added into the menu page\n        \"itemimgsrc\": \"../images/streettaco.jpg\",\n        \"itemname\": \"Street Taco\",\n        \"itemprice\": 10.99,\n        \"itemdescription\": \"Traditional Mexican street taco with your choice of chocolate, vanilla, or strawberry!\"\n    },{\n        \"itemimgsrc\": \"../images/birriataco.jpg\",\n        \"itemname\": \"Birria Taco\",\n        \"itemprice\": 10.99,\n        \"itemdescription\": \"Fried street tacos dipped in consomme!\"\n    },{\n        \"itemimgsrc\": \"../images/shrimptaco.jpg\",\n        \"itemname\": \"Shrimp Taco\",\n        \"itemprice\": 13.99,\n        \"itemdescription\": \"Fresh, tasty tacos with one of the only acceptable crustaceans!\"\n    },{\n        \"itemimgsrc\": \"../images/tofutaco.jpg\",\n        \"itemname\": \"Tofu Taco\",\n        \"itemprice\": 11.99,\n        \"itemdescription\": \"For the plant-inclined!\"\n    }\n    ];\n\n    createMenu(menuList, menuDiv);\n    contentDiv.appendChild(menuDiv);\n    pageEventListener();\n};\n\n\n\n\nfunction clearContent() {\n\n    const contentDiv = document.querySelector(\"#content\");\n\n    contentDiv.innerHTML = '';\n    pageEventListener();\n\n}\n\n\n//# sourceURL=webpack://restaurant-project/./src/pageLoad.js?");

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