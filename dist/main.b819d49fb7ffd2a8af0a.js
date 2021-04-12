/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./babel.js":
/*!******************!*\
  !*** ./babel.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./babel.js?");

/***/ }),

/***/ "./fonts/ProximaNova-Bold.woff2":
/*!**************************************!*\
  !*** ./fonts/ProximaNova-Bold.woff2 ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"c84883dfcd4817e310dfe170d72183c5.woff2\");\n\n//# sourceURL=webpack:///./fonts/ProximaNova-Bold.woff2?");

/***/ }),

/***/ "./fonts/ProximaNova-Regular.woff2":
/*!*****************************************!*\
  !*** ./fonts/ProximaNova-Regular.woff2 ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"c4c3616c5577f9e7ef87762dea50caa2.woff2\");\n\n//# sourceURL=webpack:///./fonts/ProximaNova-Regular.woff2?");

/***/ }),

/***/ "./fonts/ProximaNova-Semibold.woff2":
/*!******************************************!*\
  !*** ./fonts/ProximaNova-Semibold.woff2 ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"54b9eb90d4b941f9371e1be637ce2c57.woff2\");\n\n//# sourceURL=webpack:///./fonts/ProximaNova-Semibold.woff2?");

/***/ }),

/***/ "./img/main/about/about.jpg":
/*!**********************************!*\
  !*** ./img/main/about/about.jpg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/about.jpg\");\n\n//# sourceURL=webpack:///./img/main/about/about.jpg?");

/***/ }),

/***/ "./img/main/about/ellipsesGroupTwo.png":
/*!*********************************************!*\
  !*** ./img/main/about/ellipsesGroupTwo.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/ellipsesGroupTwo.png\");\n\n//# sourceURL=webpack:///./img/main/about/ellipsesGroupTwo.png?");

/***/ }),

/***/ "./img/main/feedback/decorativeLine.png":
/*!**********************************************!*\
  !*** ./img/main/feedback/decorativeLine.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/decorativeLine.png\");\n\n//# sourceURL=webpack:///./img/main/feedback/decorativeLine.png?");

/***/ }),

/***/ "./img/main/feedback/purpleDonut.png":
/*!*******************************************!*\
  !*** ./img/main/feedback/purpleDonut.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/purpleDonut.png\");\n\n//# sourceURL=webpack:///./img/main/feedback/purpleDonut.png?");

/***/ }),

/***/ "./img/main/feedback/roundCube.png":
/*!*****************************************!*\
  !*** ./img/main/feedback/roundCube.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/roundCube.png\");\n\n//# sourceURL=webpack:///./img/main/feedback/roundCube.png?");

/***/ }),

/***/ "./img/main/main/ellipsesGroup.png":
/*!*****************************************!*\
  !*** ./img/main/main/ellipsesGroup.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/ellipsesGroup.png\");\n\n//# sourceURL=webpack:///./img/main/main/ellipsesGroup.png?");

/***/ }),

/***/ "./img/main/main/mainBg.jpg":
/*!**********************************!*\
  !*** ./img/main/main/mainBg.jpg ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/mainBg.jpg\");\n\n//# sourceURL=webpack:///./img/main/main/mainBg.jpg?");

/***/ }),

/***/ "./img/main/main/wifi.png":
/*!********************************!*\
  !*** ./img/main/main/wifi.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/wifi.png\");\n\n//# sourceURL=webpack:///./img/main/main/wifi.png?");

/***/ }),

/***/ "./img/main/reasons/circleGroup.png":
/*!******************************************!*\
  !*** ./img/main/reasons/circleGroup.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/circleGroup.png\");\n\n//# sourceURL=webpack:///./img/main/reasons/circleGroup.png?");

/***/ }),

/***/ "./img/main/reasons/reasonsBg.png":
/*!****************************************!*\
  !*** ./img/main/reasons/reasonsBg.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/reasonsBg.png\");\n\n//# sourceURL=webpack:///./img/main/reasons/reasonsBg.png?");

/***/ }),

/***/ "./img/main/solutions/donut.png":
/*!**************************************!*\
  !*** ./img/main/solutions/donut.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/donut.png\");\n\n//# sourceURL=webpack:///./img/main/solutions/donut.png?");

/***/ }),

/***/ "./img/main/solutions/dotcircle.png":
/*!******************************************!*\
  !*** ./img/main/solutions/dotcircle.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/dotcircle.png\");\n\n//# sourceURL=webpack:///./img/main/solutions/dotcircle.png?");

/***/ }),

/***/ "./img/main/solutions/iphone.png":
/*!***************************************!*\
  !*** ./img/main/solutions/iphone.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/iphone.png\");\n\n//# sourceURL=webpack:///./img/main/solutions/iphone.png?");

/***/ }),

/***/ "./img/main/solutions/scard1.png":
/*!***************************************!*\
  !*** ./img/main/solutions/scard1.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/scard1.png\");\n\n//# sourceURL=webpack:///./img/main/solutions/scard1.png?");

/***/ }),

/***/ "./img/main/solutions/scard2.png":
/*!***************************************!*\
  !*** ./img/main/solutions/scard2.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/scard2.png\");\n\n//# sourceURL=webpack:///./img/main/solutions/scard2.png?");

/***/ }),

/***/ "./img/main/solutions/scard3.png":
/*!***************************************!*\
  !*** ./img/main/solutions/scard3.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/scard3.png\");\n\n//# sourceURL=webpack:///./img/main/solutions/scard3.png?");

/***/ }),

/***/ "./img/main/solutions/scard4.png":
/*!***************************************!*\
  !*** ./img/main/solutions/scard4.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/scard4.png\");\n\n//# sourceURL=webpack:///./img/main/solutions/scard4.png?");

/***/ }),

/***/ "./img/main/solutions/scard5.png":
/*!***************************************!*\
  !*** ./img/main/solutions/scard5.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/scard5.png\");\n\n//# sourceURL=webpack:///./img/main/solutions/scard5.png?");

/***/ }),

/***/ "./img/main/solutions/scard6.png":
/*!***************************************!*\
  !*** ./img/main/solutions/scard6.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/scard6.png\");\n\n//# sourceURL=webpack:///./img/main/solutions/scard6.png?");

/***/ }),

/***/ "./img/main/trust/c1.jpg":
/*!*******************************!*\
  !*** ./img/main/trust/c1.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/c1.jpg\");\n\n//# sourceURL=webpack:///./img/main/trust/c1.jpg?");

/***/ }),

/***/ "./img/main/trust/c10.jpg":
/*!********************************!*\
  !*** ./img/main/trust/c10.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/c10.jpg\");\n\n//# sourceURL=webpack:///./img/main/trust/c10.jpg?");

/***/ }),

/***/ "./img/main/trust/c2.jpg":
/*!*******************************!*\
  !*** ./img/main/trust/c2.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/c2.jpg\");\n\n//# sourceURL=webpack:///./img/main/trust/c2.jpg?");

/***/ }),

/***/ "./img/main/trust/c3.jpg":
/*!*******************************!*\
  !*** ./img/main/trust/c3.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/c3.jpg\");\n\n//# sourceURL=webpack:///./img/main/trust/c3.jpg?");

/***/ }),

/***/ "./img/main/trust/c4.jpg":
/*!*******************************!*\
  !*** ./img/main/trust/c4.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/c4.jpg\");\n\n//# sourceURL=webpack:///./img/main/trust/c4.jpg?");

/***/ }),

/***/ "./img/main/trust/c5.jpg":
/*!*******************************!*\
  !*** ./img/main/trust/c5.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/c5.jpg\");\n\n//# sourceURL=webpack:///./img/main/trust/c5.jpg?");

/***/ }),

/***/ "./img/main/trust/c6.jpg":
/*!*******************************!*\
  !*** ./img/main/trust/c6.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/c6.jpg\");\n\n//# sourceURL=webpack:///./img/main/trust/c6.jpg?");

/***/ }),

/***/ "./img/main/trust/c7.jpg":
/*!*******************************!*\
  !*** ./img/main/trust/c7.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/c7.jpg\");\n\n//# sourceURL=webpack:///./img/main/trust/c7.jpg?");

/***/ }),

/***/ "./img/main/trust/c8.jpg":
/*!*******************************!*\
  !*** ./img/main/trust/c8.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/c8.jpg\");\n\n//# sourceURL=webpack:///./img/main/trust/c8.jpg?");

/***/ }),

/***/ "./img/main/trust/c9.jpg":
/*!*******************************!*\
  !*** ./img/main/trust/c9.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/c9.jpg\");\n\n//# sourceURL=webpack:///./img/main/trust/c9.jpg?");

/***/ }),

/***/ "./img/main/trust/companiesBg.png":
/*!****************************************!*\
  !*** ./img/main/trust/companiesBg.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/companiesBg.png\");\n\n//# sourceURL=webpack:///./img/main/trust/companiesBg.png?");

/***/ }),

/***/ "./img/sprite.svg":
/*!************************!*\
  !*** ./img/sprite.svg ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/sprite.svg\");\n\n//# sourceURL=webpack:///./img/sprite.svg?");

/***/ }),

/***/ "./sass/style.sass":
/*!*************************!*\
  !*** ./sass/style.sass ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./sass/style.sass?");

/***/ }),

/***/ "./scripts/index.js":
/*!**************************!*\
  !*** ./scripts/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../babel */ \"./babel.js\");\n/* harmony import */ var _babel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/style.sass */ \"./sass/style.sass\");\n/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_style_sass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/bundle */ \"../node_modules/swiper/swiper-bundle.esm.js\");\n/* harmony import */ var _img_sprite_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/sprite.svg */ \"./img/sprite.svg\");\n/* harmony import */ var _img_main_main_mainBg_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/main/main/mainBg.jpg */ \"./img/main/main/mainBg.jpg\");\n/* harmony import */ var _img_main_about_about_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/main/about/about.jpg */ \"./img/main/about/about.jpg\");\n/* harmony import */ var _img_main_main_wifi_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/main/main/wifi.png */ \"./img/main/main/wifi.png\");\n/* harmony import */ var _img_main_main_ellipsesGroup_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/main/main/ellipsesGroup.png */ \"./img/main/main/ellipsesGroup.png\");\n/* harmony import */ var _img_main_about_ellipsesGroupTwo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/main/about/ellipsesGroupTwo.png */ \"./img/main/about/ellipsesGroupTwo.png\");\n/* harmony import */ var _img_main_solutions_scard1_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/main/solutions/scard1.png */ \"./img/main/solutions/scard1.png\");\n/* harmony import */ var _img_main_solutions_scard2_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/main/solutions/scard2.png */ \"./img/main/solutions/scard2.png\");\n/* harmony import */ var _img_main_solutions_scard3_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/main/solutions/scard3.png */ \"./img/main/solutions/scard3.png\");\n/* harmony import */ var _img_main_solutions_scard4_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/main/solutions/scard4.png */ \"./img/main/solutions/scard4.png\");\n/* harmony import */ var _img_main_solutions_scard5_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/main/solutions/scard5.png */ \"./img/main/solutions/scard5.png\");\n/* harmony import */ var _img_main_solutions_scard6_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/main/solutions/scard6.png */ \"./img/main/solutions/scard6.png\");\n/* harmony import */ var _img_main_solutions_iphone_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../img/main/solutions/iphone.png */ \"./img/main/solutions/iphone.png\");\n/* harmony import */ var _img_main_solutions_donut_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../img/main/solutions/donut.png */ \"./img/main/solutions/donut.png\");\n/* harmony import */ var _img_main_solutions_dotcircle_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../img/main/solutions/dotcircle.png */ \"./img/main/solutions/dotcircle.png\");\n/* harmony import */ var _img_main_reasons_reasonsBg_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../img/main/reasons/reasonsBg.png */ \"./img/main/reasons/reasonsBg.png\");\n/* harmony import */ var _img_main_reasons_circleGroup_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../img/main/reasons/circleGroup.png */ \"./img/main/reasons/circleGroup.png\");\n/* harmony import */ var _img_main_trust_c1_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../img/main/trust/c1.jpg */ \"./img/main/trust/c1.jpg\");\n/* harmony import */ var _img_main_trust_c2_jpg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../img/main/trust/c2.jpg */ \"./img/main/trust/c2.jpg\");\n/* harmony import */ var _img_main_trust_c3_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../img/main/trust/c3.jpg */ \"./img/main/trust/c3.jpg\");\n/* harmony import */ var _img_main_trust_c4_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../img/main/trust/c4.jpg */ \"./img/main/trust/c4.jpg\");\n/* harmony import */ var _img_main_trust_c5_jpg__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../img/main/trust/c5.jpg */ \"./img/main/trust/c5.jpg\");\n/* harmony import */ var _img_main_trust_c6_jpg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../img/main/trust/c6.jpg */ \"./img/main/trust/c6.jpg\");\n/* harmony import */ var _img_main_trust_c7_jpg__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../img/main/trust/c7.jpg */ \"./img/main/trust/c7.jpg\");\n/* harmony import */ var _img_main_trust_c8_jpg__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../img/main/trust/c8.jpg */ \"./img/main/trust/c8.jpg\");\n/* harmony import */ var _img_main_trust_c9_jpg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../img/main/trust/c9.jpg */ \"./img/main/trust/c9.jpg\");\n/* harmony import */ var _img_main_trust_c10_jpg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../img/main/trust/c10.jpg */ \"./img/main/trust/c10.jpg\");\n/* harmony import */ var _img_main_trust_companiesBg_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../img/main/trust/companiesBg.png */ \"./img/main/trust/companiesBg.png\");\n/* harmony import */ var _img_main_feedback_decorativeLine_png__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../img/main/feedback/decorativeLine.png */ \"./img/main/feedback/decorativeLine.png\");\n/* harmony import */ var _img_main_feedback_purpleDonut_png__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../img/main/feedback/purpleDonut.png */ \"./img/main/feedback/purpleDonut.png\");\n/* harmony import */ var _img_main_feedback_roundCube_png__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../img/main/feedback/roundCube.png */ \"./img/main/feedback/roundCube.png\");\n/* harmony import */ var _fonts_ProximaNova_Regular_woff2__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../fonts/ProximaNova-Regular.woff2 */ \"./fonts/ProximaNova-Regular.woff2\");\n/* harmony import */ var _fonts_ProximaNova_Bold_woff2__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../fonts/ProximaNova-Bold.woff2 */ \"./fonts/ProximaNova-Bold.woff2\");\n/* harmony import */ var _fonts_ProximaNova_Semibold_woff2__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../fonts/ProximaNova-Semibold.woff2 */ \"./fonts/ProximaNova-Semibold.woff2\");\n/* harmony import */ var _modules_mobileMenu__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./modules/mobileMenu */ \"./scripts/modules/mobileMenu.js\");\n/* harmony import */ var _modules_scrollTo__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./modules/scrollTo */ \"./scripts/modules/scrollTo.js\");\n/* harmony import */ var _modules_trustSlider__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./modules/trustSlider */ \"./scripts/modules/trustSlider.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./modules/sendForm */ \"./scripts/modules/sendForm.js\");\n\n\n // Картинки\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n // Шрифты\n\n\n\n // Модули\n\n\n\n\n // Мобильное меню\n\nObject(_modules_mobileMenu__WEBPACK_IMPORTED_MODULE_37__[\"default\"])(); // Скролл\n\nObject(_modules_scrollTo__WEBPACK_IMPORTED_MODULE_38__[\"default\"])(); // Слайдер\n\nObject(_modules_trustSlider__WEBPACK_IMPORTED_MODULE_39__[\"default\"])(); // Отправка форма и валидация\n\nObject(_modules_sendForm__WEBPACK_IMPORTED_MODULE_40__[\"default\"])(document.getElementById('feedback-form'));\n\n//# sourceURL=webpack:///./scripts/index.js?");

/***/ }),

/***/ "./scripts/modules/mobileMenu.js":
/*!***************************************!*\
  !*** ./scripts/modules/mobileMenu.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar mobileMenu = function mobileMenu() {\n  var btn = document.getElementById('burger-btn'),\n      menu = document.getElementById('mobile-menu');\n\n  var toggleMenu = function toggleMenu() {\n    if (btn.classList.contains('burger-button--active')) {\n      btn.classList.remove('burger-button--active');\n      menu.style.transform = 'translate(-50%, 150%)';\n    } else {\n      btn.classList.add('burger-button--active');\n      menu.style.transform = 'translate(-50%, -50%)';\n    }\n  };\n\n  btn.addEventListener('click', toggleMenu);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mobileMenu);\n\n//# sourceURL=webpack:///./scripts/modules/mobileMenu.js?");

/***/ }),

/***/ "./scripts/modules/scrollTo.js":
/*!*************************************!*\
  !*** ./scripts/modules/scrollTo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar scrollTo = function scrollTo() {\n  var pageLinks = document.querySelectorAll('a[href*=\"#\"]');\n\n  var createSlowScroll = function createSlowScroll() {\n    pageLinks.forEach(function (item) {\n      if (item.getAttribute('href').length > 1) {\n        item.addEventListener('click', function (e) {\n          e.preventDefault();\n          var blockID = item.getAttribute('href').substr(1);\n          document.getElementById(blockID).scrollIntoView({\n            behavior: 'smooth',\n            block: 'start'\n          });\n        });\n      }\n\n      ;\n    });\n  };\n\n  createSlowScroll();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (scrollTo);\n\n//# sourceURL=webpack:///./scripts/modules/scrollTo.js?");

/***/ }),

/***/ "./scripts/modules/sendForm.js":
/*!*************************************!*\
  !*** ./scripts/modules/sendForm.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ../node_modules/babel-loader/lib/index.js):\\nSyntaxError: D:\\\\websites\\\\IQSens\\\\src\\\\scripts\\\\modules\\\\sendForm.js: Missing semicolon (43:6)\\n\\n\\u001b[0m \\u001b[90m 41 |\\u001b[39m             console\\u001b[33m.\\u001b[39merror(error)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 42 |\\u001b[39m         })\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 43 |\\u001b[39m     }))\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    |\\u001b[39m       \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 44 |\\u001b[39m }\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 45 |\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 46 |\\u001b[39m \\u001b[36mexport\\u001b[39m \\u001b[36mdefault\\u001b[39m sendForm\\u001b[33m;\\u001b[39m\\u001b[0m\\n    at Parser._raise (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:775:17)\\n    at Parser.raiseWithData (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:768:17)\\n    at Parser.raise (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:736:17)\\n    at Parser.semicolon (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9698:10)\\n    at Parser.parseExpressionStatement (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12774:10)\\n    at Parser.parseStatementContent (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12372:19)\\n    at Parser.parseStatement (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12236:17)\\n    at Parser.parseBlockOrModuleBlockBody (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12816:25)\\n    at Parser.parseBlockBody (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12807:10)\\n    at Parser.parseBlock (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12791:10)\\n    at Parser.parseFunctionBody (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11758:24)\\n    at Parser.parseArrowExpression (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11730:10)\\n    at Parser.parseExprAtom (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10965:25)\\n    at Parser.parseExprSubscripts (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10689:23)\\n    at Parser.parseUpdate (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10669:21)\\n    at Parser.parseMaybeUnary (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10647:23)\\n    at Parser.parseExprOps (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10504:23)\\n    at Parser.parseMaybeConditional (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10478:23)\\n    at Parser.parseMaybeAssign (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10441:21)\\n    at D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10408:39\\n    at Parser.allowInAnd (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12079:16)\\n    at Parser.parseMaybeAssignAllowIn (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10408:17)\\n    at Parser.parseVar (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12897:70)\\n    at Parser.parseVarStatement (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12711:10)\\n    at Parser.parseStatementContent (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12303:21)\\n    at Parser.parseStatement (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12236:17)\\n    at Parser.parseBlockOrModuleBlockBody (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12816:25)\\n    at Parser.parseBlockBody (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12807:10)\\n    at Parser.parseProgram (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12171:10)\\n    at Parser.parseTopLevel (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:12162:25)\\n    at Parser.parse (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13863:10)\\n    at parse (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:13915:38)\\n    at parser (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\parser\\\\index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (D:\\\\websites\\\\IQSens\\\\node_modules\\\\@babel\\\\core\\\\lib\\\\transformation\\\\normalize-file.js:55:38)\\n    at normalizeFile.next (<anonymous>)\");\n\n//# sourceURL=webpack:///./scripts/modules/sendForm.js?");

/***/ }),

/***/ "./scripts/modules/trustSlider.js":
/*!****************************************!*\
  !*** ./scripts/modules/trustSlider.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ \"../node_modules/swiper/swiper-bundle.esm.js\");\n\n\nvar trustSlider = function trustSlider() {\n  var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.companies-wrapper--mobile', {\n    direction: 'horizontal',\n    slidesPerView: 'auto',\n    centeredSlides: true,\n    spaceBetween: 20,\n    autoplay: {\n      delay: 1500\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (trustSlider);\n\n//# sourceURL=webpack:///./scripts/modules/trustSlider.js?");

/***/ }),

/***/ 0:
/*!************************************************!*\
  !*** multi @babel/polyfill ./scripts/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"../node_modules/@babel/polyfill/lib/index.js\");\nmodule.exports = __webpack_require__(/*! ./scripts/index.js */\"./scripts/index.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./scripts/index.js?");

/***/ })

/******/ });