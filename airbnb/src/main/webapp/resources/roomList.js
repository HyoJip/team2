/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/resources/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/roomList.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./scss/roomList.scss":
/*!***********************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./scss/roomList.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root {\n  --wrapWidth: 1200px;\n  --gray: #7f8c8d;\n  --deepGray: #535c68;\n  --red: #ff385c;\n  --blue: lightseagreen;\n  --green: #23c382;\n  --containerHorizontalMargin: 50px;\n  --containerVerticalPadding: 30px;\n  --detailFontSize: smaller;\n  --bottomBorder: 1px solid #ecf0f1;\n  --borderRadius: 10px;\n  --calendarDaySize: 40px;\n  --boxShadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.ACCEPTED {\n  color: var(--green) !important; }\n\n.PENDING, .COMPLETED {\n  color: var(--gray) !important; }\n\n.REFUSED, .CANCLED {\n  color: var(--red) !important; }\n\n:root {\n  --wrapWidth: 1200px;\n  --gray: #7f8c8d;\n  --deepGray: #535c68;\n  --red: #ff385c;\n  --blue: lightseagreen;\n  --green: #23c382;\n  --containerHorizontalMargin: 50px;\n  --containerVerticalPadding: 30px;\n  --detailFontSize: smaller;\n  --bottomBorder: 1px solid #ecf0f1;\n  --borderRadius: 10px;\n  --calendarDaySize: 40px;\n  --boxShadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.ACCEPTED {\n  color: var(--green) !important; }\n\n.PENDING, .COMPLETED {\n  color: var(--gray) !important; }\n\n.REFUSED, .CANCLED {\n  color: var(--red) !important; }\n\n.main_wrap {\n  padding: 0 var(--containerVerticalPadding);\n  margin: var(--containerHorizontalMargin) 0; }\n  .main_wrap .search_result {\n    padding-bottom: var(--containerVerticalPadding);\n    border-bottom: var(--bottomBorder);\n    margin-bottom: 15px; }\n    .main_wrap .search_result .header_title {\n      font-size: 2.5em;\n      font-weight: 700; }\n  .main_wrap .room_list_wrap {\n    display: flex; }\n    .main_wrap .room_list_wrap .room_list {\n      width: 100%; }\n      .main_wrap .room_list_wrap .room_list .room_item {\n        padding: var(--containerVerticalPadding) 0;\n        border-top: var(--bottomBorder);\n        border-bottom: var(--bottomBorder);\n        cursor: pointer;\n        display: flex; }\n        .main_wrap .room_list_wrap .room_list .room_item .item_left {\n          position: relative; }\n          .main_wrap .room_list_wrap .room_list .room_item .item_left img {\n            width: 300px;\n            height: 200px;\n            object-fit: cover;\n            border-radius: var(--borderRadius); }\n        .main_wrap .room_list_wrap .room_list .room_item .item_right {\n          margin-left: var(--containerHorizontalMargin);\n          display: flex;\n          flex-direction: column; }\n          .main_wrap .room_list_wrap .room_list .room_item .item_right .room_address {\n            color: var(--deepGray); }\n          .main_wrap .room_list_wrap .room_list .room_item .item_right .room_name {\n            border-bottom: var(--bottomBorder);\n            padding-bottom: calc(var(--containerHorizontalMargin)/2);\n            margin-bottom: calc(var(--containerVerticalPadding)/2); }\n          .main_wrap .room_list_wrap .room_list .room_item .item_right .room_facility,\n          .main_wrap .room_list_wrap .room_list .room_item .item_right .room_amenity {\n            color: var(--deepGray); }\n          .main_wrap .room_list_wrap .room_list .room_item .item_right .rating {\n            margin-top: auto; }\n            .main_wrap .room_list_wrap .room_list .room_item .item_right .rating .room_short_info .star {\n              color: var(--red);\n              font-size: 1em; }\n            .main_wrap .room_list_wrap .room_list .room_item .item_right .rating .room_short_info .rating_count {\n              color: var(--deepGray); }\n      .main_wrap .room_list_wrap .room_list .pagination {\n        padding: var(--containerVerticalPadding) 0;\n        justify-content: center; }\n        .main_wrap .room_list_wrap .room_list .pagination .page_btns {\n          display: flex;\n          justify-content: center;\n          align-items: center; }\n          .main_wrap .room_list_wrap .room_list .pagination .page_btns > * {\n            margin: 0 8px; }\n          .main_wrap .room_list_wrap .room_list .pagination .page_btns button {\n            all: unset;\n            display: flex;\n            justify-content: center;\n            cursor: pointer;\n            width: 25px;\n            height: 25px;\n            box-shadow: var(--boxShadow);\n            border-radius: 50%;\n            margin: 0 5px; }\n          .main_wrap .room_list_wrap .room_list .pagination .page_btns .page_num:not(.cur_page) {\n            cursor: pointer;\n            text-align: center;\n            width: 10px; }\n            .main_wrap .room_list_wrap .room_list .pagination .page_btns .page_num:not(.cur_page):hover {\n              border-bottom: 1px solid black;\n              display: inline-block;\n              line-height: 0.85;\n              text-shadow: 1px 1px var(--backgroudColor), 1px -1px var(--backgroudColor), -1px 1px var(--backgroudColor), -1px -1px var(--backgroudColor);\n              line-height: 1.5; }\n          .main_wrap .room_list_wrap .room_list .pagination .page_btns .page_num.cur_page {\n            background-color: black;\n            width: 25px;\n            height: 25px;\n            color: white;\n            border: 0 !important;\n            border-radius: 50%;\n            text-align: center; }\n        .main_wrap .room_list_wrap .room_list .pagination .page_detail {\n          text-align: center;\n          display: block;\n          margin-top: 10px; }\n    @media (min-width: 758px) and (max-width: 1023px) {\n      .main_wrap .room_list_wrap .map {\n        display: none; } }\n    @media (min-width: 1024px) {\n      .main_wrap .room_list_wrap .map_wrapper {\n        width: 100%; }\n        .main_wrap .room_list_wrap .map_wrapper .map_sticky {\n          position: sticky;\n          height: 100%; }\n          .main_wrap .room_list_wrap .map_wrapper .map_sticky .map_relative {\n            height: 100%;\n            position: relative; }\n            .main_wrap .room_list_wrap .map_wrapper .map_sticky .map_relative .map {\n              position: absolute;\n              width: 100%;\n              height: 100%; } }\n", "",{"version":3,"sources":["webpack://scss/__base.scss","webpack://scss/roomList.scss","webpack://scss/__mixins.scss"],"names":[],"mappings":"AACA;EACC,mBAAY;EACZ,eAAO;EACP,mBAAW;EACX,cAAM;EACN,qBAAO;EACP,gBAAQ;EACR,iCAA4B;EAC5B,gCAA2B;EAC3B,yBAAiB;EACjB,iCAAe;EACf,oBAAe;EACf,uBAAkB;EAClB,yEAAY,EAAA;;AAOb;EACC,8BAA8B,EAAA;;AAG/B;EACC,6BAA6B,EAAA;;AAG9B;EACC,4BAA4B,EAAA;;AA7B7B;EACC,mBAAY;EACZ,eAAO;EACP,mBAAW;EACX,cAAM;EACN,qBAAO;EACP,gBAAQ;EACR,iCAA4B;EAC5B,gCAA2B;EAC3B,yBAAiB;EACjB,iCAAe;EACf,oBAAe;EACf,uBAAkB;EAClB,yEAAY,EAAA;;AAOb;EACC,8BAA8B,EAAA;;AAG/B;EACC,6BAA6B,EAAA;;AAG9B;EACC,4BAA4B,EAAA;;AC3B7B;EACC,0CAA0C;EAC1C,0CAA0C,EAAA;EAF3C;IAKE,+CAA+C;IAC/C,kCAAkC;IAClC,mBAAmB,EAAA;IAPrB;MAUG,gBAAgB;MAChB,gBAAgB,EAAA;EAXnB;IAkBE,aAAa,EAAA;IAlBf;MAqBG,WAAW,EAAA;MArBd;QAwBO,0CAA0C;QAC7C,+BAA+B;QAC/B,kCAAkC;QAClC,eAAe;QACf,aAAa,EAAA;QA5BjB;UA+BK,kBAAkB,EAAA;UA/BvB;YAkCM,YAAY;YACZ,aAAa;YACb,iBAAiB;YACjB,kCAAkC,EAAA;QArCxC;UA0CK,6CAA6C;UAC7C,aAAa;UACb,sBAAsB,EAAA;UA5C3B;YA+CM,sBAAsB,EAAA;UA/C5B;YAmDM,kCAAkC;YAC/B,wDAAwD;YAC3D,sDAAsD,EAAA;UArD5D;;YA0DM,sBAAsB,EAAA;UA1D5B;YA8DM,gBAAgB,EAAA;YA9DtB;cCqBC,iBAAiB;cACjB,cD6CuB,EAAA;YAnExB;cAuEQ,sBAAsB,EAAA;MAvE9B;QAgFI,0CAA0C;QAC1C,uBAAuB,EAAA;QAjF3B;UAoFK,aAAa;UACb,uBAAuB;UACvB,mBAAmB,EAAA;UAtFxB;YAyFM,aAAa,EAAA;UAzFnB;YA6FM,UAAU;YACP,aAAa;YACb,uBAAuB;YAC1B,eAAe;YACf,WAAW;YACX,YAAY;YACZ,4BAA4B;YAC5B,kBAAkB;YAClB,aAAa,EAAA;UArGnB;YAyGM,eAAe;YACf,kBAAkB;YAClB,WAAW,EAAA;YA3GjB;cCYC,8BAA8B;cAC9B,qBAAqB;cACrB,iBAAiB;cACjB,2IACgE;cD+F1D,gBAAgB,EAAA;UA/GvB;YAoHM,uBAAuB;YACvB,WAAW;YACX,YAAY;YACZ,YAAY;YACZ,oBAAoB;YACpB,kBAAkB;YACf,kBAAkB,EAAA;QA1H3B;UA+HQ,kBAAkB;UAClB,cAAc;UACd,gBAAgB,EAAA;ICjItB;MDAF;QAuII,aAAa,EAAA,EACb;IClIF;MDNF;QA6II,WAAW,EAAA;QA7If;UAgJK,gBAAgB;UACb,YAAY,EAAA;UAjJpB;YAoJS,YAAY;YACf,kBAAkB,EAAA;YArJxB;cAwJO,kBAAkB;cACf,WAAW;cACd,YAAY,EAAA,EACZ","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;700&display=swap\");\r\n:root {\r\n\t--wrapWidth: 1200px;\r\n\t--gray: #7f8c8d;\r\n\t--deepGray: #535c68;\r\n\t--red: #ff385c;\r\n\t--blue: lightseagreen;\r\n\t--green: #23c382;\r\n\t--containerHorizontalMargin: 50px;\r\n\t--containerVerticalPadding: 30px;\r\n\t--detailFontSize: smaller;\r\n\t--bottomBorder: 1px solid #ecf0f1;\r\n\t--borderRadius: 10px;\r\n\t--calendarDaySize: 40px;\r\n\t--boxShadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n}\r\n\r\n// Breakpoints\r\n$breakpoint-tablet: 758px;\r\n$breakpoint-desktop: 1024px;\r\n\r\n.ACCEPTED {\r\n\tcolor: var(--green) !important;\r\n}\r\n\r\n.PENDING, .COMPLETED {\r\n\tcolor: var(--gray) !important;\r\n}\r\n\r\n.REFUSED, .CANCLED {\r\n\tcolor: var(--red) !important;\r\n}\r\n","@import \"./_base\";\r\n@import \"./_mixins\";\r\n\r\n.main_wrap {\r\n\tpadding: 0 var(--containerVerticalPadding);\r\n\tmargin: var(--containerHorizontalMargin) 0;\r\n\t\r\n\t.search_result {\r\n\t\tpadding-bottom: var(--containerVerticalPadding);\r\n\t\tborder-bottom: var(--bottomBorder);\r\n\t\tmargin-bottom: 15px;\r\n\t\t\r\n\t\t.header_title {\r\n\t\t\tfont-size: 2.5em;\r\n\t\t\tfont-weight: 700;\r\n\t\t}\r\n\t\t\r\n\t}\r\n\t\r\n\t\r\n\t.room_list_wrap {\r\n\t\tdisplay: flex;\r\n\t\t\r\n\t\t.room_list {\r\n\t\t\twidth: 100%;\r\n\t\t\t\r\n\t\t\t.room_item {\r\n\t\t\t    padding: var(--containerVerticalPadding) 0;\r\n\t\t\t\tborder-top: var(--bottomBorder);\r\n\t\t\t\tborder-bottom: var(--bottomBorder);\r\n\t\t\t\tcursor: pointer;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\t\r\n\t\t\t\t.item_left {\r\n\t\t\t\t\tposition: relative;\r\n\t\t\t\t\t\r\n\t\t\t\t\timg {\r\n\t\t\t\t\t\twidth: 300px;\r\n\t\t\t\t\t\theight: 200px;\r\n\t\t\t\t\t\tobject-fit: cover;\r\n\t\t\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t.item_right {\r\n\t\t\t\t\tmargin-left: var(--containerHorizontalMargin);\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\tflex-direction: column;\r\n\t\t\t\t\t\r\n\t\t\t\t\t.room_address {\r\n\t\t\t\t\t\tcolor: var(--deepGray);\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.room_name {\r\n\t\t\t\t\t\tborder-bottom: var(--bottomBorder);\r\n\t\t\t\t\t    padding-bottom: calc(var(--containerHorizontalMargin)/2);\r\n\t\t\t\t\t\tmargin-bottom: calc(var(--containerVerticalPadding)/2);\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.room_facility,\r\n\t\t\t\t\t.room_amenity {\r\n\t\t\t\t\t\tcolor: var(--deepGray);\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.rating {\r\n\t\t\t\t\t\tmargin-top: auto;\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t.room_short_info {\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t.star {\r\n\t\t\t\t\t\t\t@include star(1em);\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t.rating_count {\r\n\t\t\t\t\t\t\t\tcolor: var(--deepGray);\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t\t\r\n\t\t\t.pagination {\r\n\t\t\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\t\r\n\t\t\t\t.page_btns {\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\tjustify-content: center;\r\n\t\t\t\t\talign-items: center;\r\n\t\t\t\t\t\r\n\t\t\t\t\t& > * {\r\n\t\t\t\t\t\tmargin: 0 8px;\t\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\tbutton {\r\n\t\t\t\t\t\tall: unset;\r\n\t\t\t\t\t    display: flex;\r\n\t\t    \t\t\tjustify-content: center;\r\n\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\twidth: 25px;\r\n\t\t\t\t\t\theight: 25px;\r\n\t\t\t\t\t\tbox-shadow: var(--boxShadow);\r\n\t\t\t\t\t\tborder-radius: 50%;\r\n\t\t\t\t\t\tmargin: 0 5px;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.page_num:not(.cur_page) {\r\n\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\ttext-align: center;\r\n\t\t\t\t\t\twidth: 10px;\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t&:hover {\r\n\t\t\t\t\t\t\t@include underline;\r\n\t\t\t\t\t\t\tline-height: 1.5;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.page_num.cur_page {\t\t\r\n\t\t\t\t\t\tbackground-color: black;\r\n\t\t\t\t\t\twidth: 25px;\r\n\t\t\t\t\t\theight: 25px;\r\n\t\t\t\t\t\tcolor: white;\r\n\t\t\t\t\t\tborder: 0 !important;\r\n\t\t\t\t\t\tborder-radius: 50%;\r\n\t\t\t\t\t    text-align: center;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t.page_detail {\r\n\t\t\t\t    text-align: center;\r\n\t\t\t\t    display: block;\r\n\t\t\t\t    margin-top: 10px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t@include tablet {\r\n\t\t\t.map {\r\n\t\t\t\tdisplay: none;\r\n\t\t\t}\r\n\t\t}\r\n\t\r\n\t\t@include desktop {\r\n\t\t\t.map_wrapper {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\t\r\n\t\t\t\t.map_sticky {\r\n\t\t\t\t\tposition: sticky;\r\n\t    \t\t\theight: 100%;\r\n\t\t\t\t\t\r\n\t\t\t\t\t.map_relative {\r\n\t    \t\t\t\theight: 100%;\r\n\t\t\t\t\t\tposition: relative;\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t.map {\r\n\t\t\t\t\t\t\tposition: absolute;\r\n\t\t\t\t\t\t    width: 100%;\r\n\t\t\t\t\t\t\theight: 100%;\r\n\t\t\t\t\t\t}\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t}\r\n\t\t\t\t}\t\t\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}","@import \"./_base\";\r\n\r\n@mixin tablet {\r\n  @media (min-width: #{$breakpoint-tablet}) and (max-width: #{$breakpoint-desktop - 1px}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin desktop {\r\n  @media (min-width: #{$breakpoint-desktop}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin underline {\r\n\tborder-bottom: 1px solid black;\r\n\tdisplay: inline-block;\r\n\tline-height: 0.85;\r\n\ttext-shadow: 1px 1px var(--backgroudColor), 1px -1px var(--backgroudColor),\r\n\t\t-1px 1px var(--backgroudColor), -1px -1px var(--backgroudColor);\r\n\t@content;\r\n}\r\n\r\n@mixin star($font-size) {\r\n\tcolor: var(--red);\r\n\tfont-size: $font-size;\r\n}\r\n\r\n@mixin reservation_item {\r\n\tflex: 1 1 50%;\r\n\tpadding: 5px 10px;\r\n\tfont-size: 0.9rem;\r\n\theight: 50px;\r\n\r\n\t.reservation_display {\r\n\t\tcolor: var(--gray);\r\n\t\tfont-weight: 300;\r\n\t}\r\n}\r\n\r\n@mixin facility_rule_item {\r\n\tmargin: 15px 0;\r\n}\r\n\r\n@mixin facility_rule_icon {\r\n\tfont-size: 20px;\r\n\twidth: 40px;\r\n\ttext-align: center;\r\n}\r\n\r\n@mixin facility_rule_description {\r\n\tmargin-left: 15px;\r\n\tfont-weight: 300;\r\n}\r\n\r\n@mixin changeHeaderColor {\r\n\t.body_header ul .airbnb_icon,\r\n\t.body_header ul .header_profile .profile_img {\r\n\t\tcolor: var(--blue);\r\n\t}\r\n\t\r\n\t.body_header ul .room_search i {\r\n\t\tbackground-color: var(--blue);\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./js/roomList.js":
/*!************************!*\
  !*** ./js/roomList.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_roomList_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/roomList.scss */ "./scss/roomList.scss");
/* harmony import */ var _scss_roomList_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_roomList_scss__WEBPACK_IMPORTED_MODULE_0__);


const onClickItem = (event) => {
	const item = event.target.closest(".room_item");
	if (item == null) return;
	const roomId = item.dataset.roomid;
	location.href = `/room/${roomId}`;
	
}

document.querySelector("#roomList").addEventListener("click", onClickItem);


/////////////////// 카카오 지도 API
const data = {
	address: [],
	name: [],
	photo: [],
	roomId: [],
};
data.address = document.querySelectorAll(".room_address");
data.name = document.querySelectorAll(".room_name");
data.photo = document.querySelectorAll(".room_photo");
data.roomId = document.querySelectorAll(".room_item");

var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
var options = { //지도를 생성할 때 필요한 기본 옵션
	center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
	level: 8 //지도의 레벨(확대, 축소 정도)
};
	
var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
var geocoder = new kakao.maps.services.Geocoder(); // 주소-좌표 변환 객체를 생성합니다

for (let i = 0; i < data.address.length; i++) {
	const address = data.address[i].textContent;
	const name = data.name[i].textContent;
	const photo = data.photo[i].src;
	const roomId = data.roomId[i].dataset.roomid;
	
	geocoder.addressSearch(address, function(result, status) {

	    // 정상적으로 검색이 완료됐으면 
	    if (status === kakao.maps.services.Status.OK) {
	
	        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
	
	        // 결과값으로 받은 위치를 마커로 표시합니다
	        var marker = new kakao.maps.Marker({
	            map: map,
	            position: coords,
				clickable: true
	        });
	
			const content = `<div style="width:200px;text-align:center;">
			<a href="/room/${roomId}">
			<img src="${photo}" style="width:100%; height:200px;">
			<p>${name}</p>
			</a>
			</div>`
	
			// 인포윈도우로 장소에 대한 설명을 표시합니다
			var infowindow = new kakao.maps.InfoWindow({
			    content: content,
				removable: true
			});
			
			// 마커에 클릭이벤트를 등록합니다
			kakao.maps.event.addListener(marker, 'click', function() {
			      // 마커 위에 인포윈도우를 표시합니다
			      infowindow.open(map, marker);  
			});
			if (i === 0) {
		        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
		        map.setCenter(coords);			
			}
		} 
	});
}


/***/ }),

/***/ "./scss/roomList.scss":
/*!****************************!*\
  !*** ./scss/roomList.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./roomList.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./scss/roomList.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9yb29tTGlzdC5zY3NzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcm9vbUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9yb29tTGlzdC5zY3NzPzZlNTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUM0RjtBQUM1Riw4QkFBOEIsbUZBQTJCO0FBQ3pELDhCQUE4QixRQUFTLDhFQUE4RSxJQUFJLGtCQUFrQjtB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QUNBO0FBQ0E7QUFDQSwwQkFBMEIsT0FBTzs7QUFFakM7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0NBQStDO0FBQy9DLGVBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUEsaURBQWlEO0FBQ2pELGtEQUFrRDs7QUFFbEQsZUFBZSx5QkFBeUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7QUFFViw0Q0FBNEMsa0JBQWtCO0FBQzlELG9CQUFvQixPQUFPO0FBQzNCLGVBQWUsTUFBTSxvQkFBb0IsY0FBYztBQUN2RCxRQUFRLEtBQUs7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxzQztBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0M7QUFDQTtBQUNBLEc7QUFDQSxFQUFFO0FBQ0Y7Ozs7Ozs7Ozs7OztBQzlFQSxVQUFVLG1CQUFPLENBQUMsdUpBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLGtOQUF3Rzs7QUFFMUk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0MiLCJmaWxlIjoicm9vbUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9yZXNvdXJjZXMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvcm9vbUxpc3QuanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrS1I6d2dodEAzMDA7NTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrS1I6d2dodEAzMDA7NTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXdyYXBXaWR0aDogMTIwMHB4O1xcbiAgLS1ncmF5OiAjN2Y4YzhkO1xcbiAgLS1kZWVwR3JheTogIzUzNWM2ODtcXG4gIC0tcmVkOiAjZmYzODVjO1xcbiAgLS1ibHVlOiBsaWdodHNlYWdyZWVuO1xcbiAgLS1ncmVlbjogIzIzYzM4MjtcXG4gIC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbjogNTBweDtcXG4gIC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nOiAzMHB4O1xcbiAgLS1kZXRhaWxGb250U2l6ZTogc21hbGxlcjtcXG4gIC0tYm90dG9tQm9yZGVyOiAxcHggc29saWQgI2VjZjBmMTtcXG4gIC0tYm9yZGVyUmFkaXVzOiAxMHB4O1xcbiAgLS1jYWxlbmRhckRheVNpemU6IDQwcHg7XFxuICAtLWJveFNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpOyB9XFxuXFxuLkFDQ0VQVEVEIHtcXG4gIGNvbG9yOiB2YXIoLS1ncmVlbikgIWltcG9ydGFudDsgfVxcblxcbi5QRU5ESU5HLCAuQ09NUExFVEVEIHtcXG4gIGNvbG9yOiB2YXIoLS1ncmF5KSAhaW1wb3J0YW50OyB9XFxuXFxuLlJFRlVTRUQsIC5DQU5DTEVEIHtcXG4gIGNvbG9yOiB2YXIoLS1yZWQpICFpbXBvcnRhbnQ7IH1cXG5cXG46cm9vdCB7XFxuICAtLXdyYXBXaWR0aDogMTIwMHB4O1xcbiAgLS1ncmF5OiAjN2Y4YzhkO1xcbiAgLS1kZWVwR3JheTogIzUzNWM2ODtcXG4gIC0tcmVkOiAjZmYzODVjO1xcbiAgLS1ibHVlOiBsaWdodHNlYWdyZWVuO1xcbiAgLS1ncmVlbjogIzIzYzM4MjtcXG4gIC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbjogNTBweDtcXG4gIC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nOiAzMHB4O1xcbiAgLS1kZXRhaWxGb250U2l6ZTogc21hbGxlcjtcXG4gIC0tYm90dG9tQm9yZGVyOiAxcHggc29saWQgI2VjZjBmMTtcXG4gIC0tYm9yZGVyUmFkaXVzOiAxMHB4O1xcbiAgLS1jYWxlbmRhckRheVNpemU6IDQwcHg7XFxuICAtLWJveFNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpOyB9XFxuXFxuLkFDQ0VQVEVEIHtcXG4gIGNvbG9yOiB2YXIoLS1ncmVlbikgIWltcG9ydGFudDsgfVxcblxcbi5QRU5ESU5HLCAuQ09NUExFVEVEIHtcXG4gIGNvbG9yOiB2YXIoLS1ncmF5KSAhaW1wb3J0YW50OyB9XFxuXFxuLlJFRlVTRUQsIC5DQU5DTEVEIHtcXG4gIGNvbG9yOiB2YXIoLS1yZWQpICFpbXBvcnRhbnQ7IH1cXG5cXG4ubWFpbl93cmFwIHtcXG4gIHBhZGRpbmc6IDAgdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKTtcXG4gIG1hcmdpbjogdmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbikgMDsgfVxcbiAgLm1haW5fd3JhcCAuc2VhcmNoX3Jlc3VsdCB7XFxuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpO1xcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1ib3R0b21Cb3JkZXIpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyB9XFxuICAgIC5tYWluX3dyYXAgLnNlYXJjaF9yZXN1bHQgLmhlYWRlcl90aXRsZSB7XFxuICAgICAgZm9udC1zaXplOiAyLjVlbTtcXG4gICAgICBmb250LXdlaWdodDogNzAwOyB9XFxuICAubWFpbl93cmFwIC5yb29tX2xpc3Rfd3JhcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gICAgLm1haW5fd3JhcCAucm9vbV9saXN0X3dyYXAgLnJvb21fbGlzdCB7XFxuICAgICAgd2lkdGg6IDEwMCU7IH1cXG4gICAgICAubWFpbl93cmFwIC5yb29tX2xpc3Rfd3JhcCAucm9vbV9saXN0IC5yb29tX2l0ZW0ge1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAwO1xcbiAgICAgICAgYm9yZGVyLXRvcDogdmFyKC0tYm90dG9tQm9yZGVyKTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IHZhcigtLWJvdHRvbUJvcmRlcik7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAgICAgICAubWFpbl93cmFwIC5yb29tX2xpc3Rfd3JhcCAucm9vbV9saXN0IC5yb29tX2l0ZW0gLml0ZW1fbGVmdCB7XFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgICAgICAgICAubWFpbl93cmFwIC5yb29tX2xpc3Rfd3JhcCAucm9vbV9saXN0IC5yb29tX2l0ZW0gLml0ZW1fbGVmdCBpbWcge1xcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7IH1cXG4gICAgICAgIC5tYWluX3dyYXAgLnJvb21fbGlzdF93cmFwIC5yb29tX2xpc3QgLnJvb21faXRlbSAuaXRlbV9yaWdodCB7XFxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKTtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgICAgICAgICAubWFpbl93cmFwIC5yb29tX2xpc3Rfd3JhcCAucm9vbV9saXN0IC5yb29tX2l0ZW0gLml0ZW1fcmlnaHQgLnJvb21fYWRkcmVzcyB7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWRlZXBHcmF5KTsgfVxcbiAgICAgICAgICAubWFpbl93cmFwIC5yb29tX2xpc3Rfd3JhcCAucm9vbV9saXN0IC5yb29tX2l0ZW0gLml0ZW1fcmlnaHQgLnJvb21fbmFtZSB7XFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm90dG9tQm9yZGVyKTtcXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKS8yKTtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykvMik7IH1cXG4gICAgICAgICAgLm1haW5fd3JhcCAucm9vbV9saXN0X3dyYXAgLnJvb21fbGlzdCAucm9vbV9pdGVtIC5pdGVtX3JpZ2h0IC5yb29tX2ZhY2lsaXR5LFxcbiAgICAgICAgICAubWFpbl93cmFwIC5yb29tX2xpc3Rfd3JhcCAucm9vbV9saXN0IC5yb29tX2l0ZW0gLml0ZW1fcmlnaHQgLnJvb21fYW1lbml0eSB7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWRlZXBHcmF5KTsgfVxcbiAgICAgICAgICAubWFpbl93cmFwIC5yb29tX2xpc3Rfd3JhcCAucm9vbV9saXN0IC5yb29tX2l0ZW0gLml0ZW1fcmlnaHQgLnJhdGluZyB7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogYXV0bzsgfVxcbiAgICAgICAgICAgIC5tYWluX3dyYXAgLnJvb21fbGlzdF93cmFwIC5yb29tX2xpc3QgLnJvb21faXRlbSAuaXRlbV9yaWdodCAucmF0aW5nIC5yb29tX3Nob3J0X2luZm8gLnN0YXIge1xcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXJlZCk7XFxuICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTsgfVxcbiAgICAgICAgICAgIC5tYWluX3dyYXAgLnJvb21fbGlzdF93cmFwIC5yb29tX2xpc3QgLnJvb21faXRlbSAuaXRlbV9yaWdodCAucmF0aW5nIC5yb29tX3Nob3J0X2luZm8gLnJhdGluZ19jb3VudCB7XFxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZGVlcEdyYXkpOyB9XFxuICAgICAgLm1haW5fd3JhcCAucm9vbV9saXN0X3dyYXAgLnJvb21fbGlzdCAucGFnaW5hdGlvbiB7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcbiAgICAgICAgLm1haW5fd3JhcCAucm9vbV9saXN0X3dyYXAgLnJvb21fbGlzdCAucGFnaW5hdGlvbiAucGFnZV9idG5zIHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgICAgICAgLm1haW5fd3JhcCAucm9vbV9saXN0X3dyYXAgLnJvb21fbGlzdCAucGFnaW5hdGlvbiAucGFnZV9idG5zID4gKiB7XFxuICAgICAgICAgICAgbWFyZ2luOiAwIDhweDsgfVxcbiAgICAgICAgICAubWFpbl93cmFwIC5yb29tX2xpc3Rfd3JhcCAucm9vbV9saXN0IC5wYWdpbmF0aW9uIC5wYWdlX2J0bnMgYnV0dG9uIHtcXG4gICAgICAgICAgICBhbGw6IHVuc2V0O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3hTaGFkb3cpO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgICBtYXJnaW46IDAgNXB4OyB9XFxuICAgICAgICAgIC5tYWluX3dyYXAgLnJvb21fbGlzdF93cmFwIC5yb29tX2xpc3QgLnBhZ2luYXRpb24gLnBhZ2VfYnRucyAucGFnZV9udW06bm90KC5jdXJfcGFnZSkge1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgd2lkdGg6IDEwcHg7IH1cXG4gICAgICAgICAgICAubWFpbl93cmFwIC5yb29tX2xpc3Rfd3JhcCAucm9vbV9saXN0IC5wYWdpbmF0aW9uIC5wYWdlX2J0bnMgLnBhZ2VfbnVtOm5vdCguY3VyX3BhZ2UpOmhvdmVyIHtcXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjg1O1xcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpLCAxcHggLTFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvciksIC0xcHggMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKSwgLTFweCAtMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKTtcXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7IH1cXG4gICAgICAgICAgLm1haW5fd3JhcCAucm9vbV9saXN0X3dyYXAgLnJvb21fbGlzdCAucGFnaW5hdGlvbiAucGFnZV9idG5zIC5wYWdlX251bS5jdXJfcGFnZSB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgICAgICAubWFpbl93cmFwIC5yb29tX2xpc3Rfd3JhcCAucm9vbV9saXN0IC5wYWdpbmF0aW9uIC5wYWdlX2RldGFpbCB7XFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7IH1cXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc1OHB4KSBhbmQgKG1heC13aWR0aDogMTAyM3B4KSB7XFxuICAgICAgLm1haW5fd3JhcCAucm9vbV9saXN0X3dyYXAgLm1hcCB7XFxuICAgICAgICBkaXNwbGF5OiBub25lOyB9IH1cXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgICAgIC5tYWluX3dyYXAgLnJvb21fbGlzdF93cmFwIC5tYXBfd3JhcHBlciB7XFxuICAgICAgICB3aWR0aDogMTAwJTsgfVxcbiAgICAgICAgLm1haW5fd3JhcCAucm9vbV9saXN0X3dyYXAgLm1hcF93cmFwcGVyIC5tYXBfc3RpY2t5IHtcXG4gICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlOyB9XFxuICAgICAgICAgIC5tYWluX3dyYXAgLnJvb21fbGlzdF93cmFwIC5tYXBfd3JhcHBlciAubWFwX3N0aWNreSAubWFwX3JlbGF0aXZlIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAgICAgICAgICAgLm1haW5fd3JhcCAucm9vbV9saXN0X3dyYXAgLm1hcF93cmFwcGVyIC5tYXBfc3RpY2t5IC5tYXBfcmVsYXRpdmUgLm1hcCB7XFxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3Njc3MvX19iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly9zY3NzL3Jvb21MaXN0LnNjc3NcIixcIndlYnBhY2s6Ly9zY3NzL19fbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDQyxtQkFBWTtFQUNaLGVBQU87RUFDUCxtQkFBVztFQUNYLGNBQU07RUFDTixxQkFBTztFQUNQLGdCQUFRO0VBQ1IsaUNBQTRCO0VBQzVCLGdDQUEyQjtFQUMzQix5QkFBaUI7RUFDakIsaUNBQWU7RUFDZixvQkFBZTtFQUNmLHVCQUFrQjtFQUNsQix5RUFBWSxFQUFBOztBQU9iO0VBQ0MsOEJBQThCLEVBQUE7O0FBRy9CO0VBQ0MsNkJBQTZCLEVBQUE7O0FBRzlCO0VBQ0MsNEJBQTRCLEVBQUE7O0FBN0I3QjtFQUNDLG1CQUFZO0VBQ1osZUFBTztFQUNQLG1CQUFXO0VBQ1gsY0FBTTtFQUNOLHFCQUFPO0VBQ1AsZ0JBQVE7RUFDUixpQ0FBNEI7RUFDNUIsZ0NBQTJCO0VBQzNCLHlCQUFpQjtFQUNqQixpQ0FBZTtFQUNmLG9CQUFlO0VBQ2YsdUJBQWtCO0VBQ2xCLHlFQUFZLEVBQUE7O0FBT2I7RUFDQyw4QkFBOEIsRUFBQTs7QUFHL0I7RUFDQyw2QkFBNkIsRUFBQTs7QUFHOUI7RUFDQyw0QkFBNEIsRUFBQTs7QUMzQjdCO0VBQ0MsMENBQTBDO0VBQzFDLDBDQUEwQyxFQUFBO0VBRjNDO0lBS0UsK0NBQStDO0lBQy9DLGtDQUFrQztJQUNsQyxtQkFBbUIsRUFBQTtJQVByQjtNQVVHLGdCQUFnQjtNQUNoQixnQkFBZ0IsRUFBQTtFQVhuQjtJQWtCRSxhQUFhLEVBQUE7SUFsQmY7TUFxQkcsV0FBVyxFQUFBO01BckJkO1FBd0JPLDBDQUEwQztRQUM3QywrQkFBK0I7UUFDL0Isa0NBQWtDO1FBQ2xDLGVBQWU7UUFDZixhQUFhLEVBQUE7UUE1QmpCO1VBK0JLLGtCQUFrQixFQUFBO1VBL0J2QjtZQWtDTSxZQUFZO1lBQ1osYUFBYTtZQUNiLGlCQUFpQjtZQUNqQixrQ0FBa0MsRUFBQTtRQXJDeEM7VUEwQ0ssNkNBQTZDO1VBQzdDLGFBQWE7VUFDYixzQkFBc0IsRUFBQTtVQTVDM0I7WUErQ00sc0JBQXNCLEVBQUE7VUEvQzVCO1lBbURNLGtDQUFrQztZQUMvQix3REFBd0Q7WUFDM0Qsc0RBQXNELEVBQUE7VUFyRDVEOztZQTBETSxzQkFBc0IsRUFBQTtVQTFENUI7WUE4RE0sZ0JBQWdCLEVBQUE7WUE5RHRCO2NDcUJDLGlCQUFpQjtjQUNqQixjRDZDdUIsRUFBQTtZQW5FeEI7Y0F1RVEsc0JBQXNCLEVBQUE7TUF2RTlCO1FBZ0ZJLDBDQUEwQztRQUMxQyx1QkFBdUIsRUFBQTtRQWpGM0I7VUFvRkssYUFBYTtVQUNiLHVCQUF1QjtVQUN2QixtQkFBbUIsRUFBQTtVQXRGeEI7WUF5Rk0sYUFBYSxFQUFBO1VBekZuQjtZQTZGTSxVQUFVO1lBQ1AsYUFBYTtZQUNiLHVCQUF1QjtZQUMxQixlQUFlO1lBQ2YsV0FBVztZQUNYLFlBQVk7WUFDWiw0QkFBNEI7WUFDNUIsa0JBQWtCO1lBQ2xCLGFBQWEsRUFBQTtVQXJHbkI7WUF5R00sZUFBZTtZQUNmLGtCQUFrQjtZQUNsQixXQUFXLEVBQUE7WUEzR2pCO2NDWUMsOEJBQThCO2NBQzlCLHFCQUFxQjtjQUNyQixpQkFBaUI7Y0FDakIsMklBQ2dFO2NEK0YxRCxnQkFBZ0IsRUFBQTtVQS9HdkI7WUFvSE0sdUJBQXVCO1lBQ3ZCLFdBQVc7WUFDWCxZQUFZO1lBQ1osWUFBWTtZQUNaLG9CQUFvQjtZQUNwQixrQkFBa0I7WUFDZixrQkFBa0IsRUFBQTtRQTFIM0I7VUErSFEsa0JBQWtCO1VBQ2xCLGNBQWM7VUFDZCxnQkFBZ0IsRUFBQTtJQ2pJdEI7TURBRjtRQXVJSSxhQUFhLEVBQUEsRUFDYjtJQ2xJRjtNRE5GO1FBNklJLFdBQVcsRUFBQTtRQTdJZjtVQWdKSyxnQkFBZ0I7VUFDYixZQUFZLEVBQUE7VUFqSnBCO1lBb0pTLFlBQVk7WUFDZixrQkFBa0IsRUFBQTtZQXJKeEI7Y0F3Sk8sa0JBQWtCO2NBQ2YsV0FBVztjQUNkLFlBQVksRUFBQSxFQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUjp3Z2h0QDMwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbjpyb290IHtcXHJcXG5cXHQtLXdyYXBXaWR0aDogMTIwMHB4O1xcclxcblxcdC0tZ3JheTogIzdmOGM4ZDtcXHJcXG5cXHQtLWRlZXBHcmF5OiAjNTM1YzY4O1xcclxcblxcdC0tcmVkOiAjZmYzODVjO1xcclxcblxcdC0tYmx1ZTogbGlnaHRzZWFncmVlbjtcXHJcXG5cXHQtLWdyZWVuOiAjMjNjMzgyO1xcclxcblxcdC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbjogNTBweDtcXHJcXG5cXHQtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZzogMzBweDtcXHJcXG5cXHQtLWRldGFpbEZvbnRTaXplOiBzbWFsbGVyO1xcclxcblxcdC0tYm90dG9tQm9yZGVyOiAxcHggc29saWQgI2VjZjBmMTtcXHJcXG5cXHQtLWJvcmRlclJhZGl1czogMTBweDtcXHJcXG5cXHQtLWNhbGVuZGFyRGF5U2l6ZTogNDBweDtcXHJcXG5cXHQtLWJveFNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBCcmVha3BvaW50c1xcclxcbiRicmVha3BvaW50LXRhYmxldDogNzU4cHg7XFxyXFxuJGJyZWFrcG9pbnQtZGVza3RvcDogMTAyNHB4O1xcclxcblxcclxcbi5BQ0NFUFRFRCB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWdyZWVuKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uUEVORElORywgLkNPTVBMRVRFRCB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWdyYXkpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5SRUZVU0VELCAuQ0FOQ0xFRCB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLXJlZCkgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0IFxcXCIuL19iYXNlXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuL19taXhpbnNcXFwiO1xcclxcblxcclxcbi5tYWluX3dyYXAge1xcclxcblxcdHBhZGRpbmc6IDAgdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKTtcXHJcXG5cXHRtYXJnaW46IHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pIDA7XFxyXFxuXFx0XFxyXFxuXFx0LnNlYXJjaF9yZXN1bHQge1xcclxcblxcdFxcdHBhZGRpbmctYm90dG9tOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpO1xcclxcblxcdFxcdGJvcmRlci1ib3R0b206IHZhcigtLWJvdHRvbUJvcmRlcik7XFxyXFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQuaGVhZGVyX3RpdGxlIHtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDIuNWVtO1xcclxcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdFxcclxcblxcdH1cXHJcXG5cXHRcXHJcXG5cXHRcXHJcXG5cXHQucm9vbV9saXN0X3dyYXAge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0LnJvb21fbGlzdCB7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0LnJvb21faXRlbSB7XFxyXFxuXFx0XFx0XFx0ICAgIHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgMDtcXHJcXG5cXHRcXHRcXHRcXHRib3JkZXItdG9wOiB2YXIoLS1ib3R0b21Cb3JkZXIpO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlci1ib3R0b206IHZhcigtLWJvdHRvbUJvcmRlcik7XFxyXFxuXFx0XFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0Lml0ZW1fbGVmdCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdGltZyB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0d2lkdGg6IDMwMHB4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGhlaWdodDogMjAwcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0b2JqZWN0LWZpdDogY292ZXI7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdC5pdGVtX3JpZ2h0IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRtYXJnaW4tbGVmdDogdmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbik7XFxyXFxuXFx0XFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdC5yb29tX2FkZHJlc3Mge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiB2YXIoLS1kZWVwR3JheSk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdC5yb29tX25hbWUge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGJvcmRlci1ib3R0b206IHZhcigtLWJvdHRvbUJvcmRlcik7XFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pLzIpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKS8yKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0LnJvb21fZmFjaWxpdHksXFxyXFxuXFx0XFx0XFx0XFx0XFx0LnJvb21fYW1lbml0eSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IHZhcigtLWRlZXBHcmF5KTtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0LnJhdGluZyB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0bWFyZ2luLXRvcDogYXV0bztcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQucm9vbV9zaG9ydF9pbmZvIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQuc3RhciB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0QGluY2x1ZGUgc3RhcigxZW0pO1xcdFxcdFxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQucmF0aW5nX2NvdW50IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogdmFyKC0tZGVlcEdyYXkpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0LnBhZ2luYXRpb24ge1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgMDtcXHJcXG5cXHRcXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHQucGFnZV9idG5zIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdFxcdFxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0JiA+ICoge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdG1hcmdpbjogMCA4cHg7XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdGJ1dHRvbiB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0YWxsOiB1bnNldDtcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHQgICAgXFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdHdpZHRoOiAyNXB4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGhlaWdodDogMjVweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRib3gtc2hhZG93OiB2YXIoLS1ib3hTaGFkb3cpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRtYXJnaW46IDAgNXB4O1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHQucGFnZV9udW06bm90KC5jdXJfcGFnZSkge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0d2lkdGg6IDEwcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0QGluY2x1ZGUgdW5kZXJsaW5lO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHQucGFnZV9udW0uY3VyX3BhZ2Uge1xcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdHdpZHRoOiAyNXB4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGhlaWdodDogMjVweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Ym9yZGVyOiAwICFpbXBvcnRhbnQ7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdFxcdFxcdFxcdFxcdCAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHQucGFnZV9kZXRhaWwge1xcclxcblxcdFxcdFxcdFxcdCAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0ICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdFxcdFxcdFxcdCAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdEBpbmNsdWRlIHRhYmxldCB7XFxyXFxuXFx0XFx0XFx0Lm1hcCB7XFxyXFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcclxcblxcdFxcdEBpbmNsdWRlIGRlc2t0b3Age1xcclxcblxcdFxcdFxcdC5tYXBfd3JhcHBlciB7XFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0Lm1hcF9zdGlja3kge1xcclxcblxcdFxcdFxcdFxcdFxcdHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuXFx0ICAgIFxcdFxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHQubWFwX3JlbGF0aXZlIHtcXHJcXG5cXHQgICAgXFx0XFx0XFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQubWFwIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ICAgIHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR9XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdH1cXHRcXHRcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XCIsXCJAaW1wb3J0IFxcXCIuL19iYXNlXFxcIjtcXHJcXG5cXHJcXG5AbWl4aW4gdGFibGV0IHtcXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRicmVha3BvaW50LXRhYmxldH0pIGFuZCAobWF4LXdpZHRoOiAjeyRicmVha3BvaW50LWRlc2t0b3AgLSAxcHh9KSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZGVza3RvcCB7XFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skYnJlYWtwb2ludC1kZXNrdG9wfSkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIHVuZGVybGluZSB7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcclxcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG5cXHRsaW5lLWhlaWdodDogMC44NTtcXHJcXG5cXHR0ZXh0LXNoYWRvdzogMXB4IDFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvciksIDFweCAtMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKSxcXHJcXG5cXHRcXHQtMXB4IDFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvciksIC0xcHggLTFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvcik7XFxyXFxuXFx0QGNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBzdGFyKCRmb250LXNpemUpIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tcmVkKTtcXHJcXG5cXHRmb250LXNpemU6ICRmb250LXNpemU7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiByZXNlcnZhdGlvbl9pdGVtIHtcXHJcXG5cXHRmbGV4OiAxIDEgNTAlO1xcclxcblxcdHBhZGRpbmc6IDVweCAxMHB4O1xcclxcblxcdGZvbnQtc2l6ZTogMC45cmVtO1xcclxcblxcdGhlaWdodDogNTBweDtcXHJcXG5cXHJcXG5cXHQucmVzZXJ2YXRpb25fZGlzcGxheSB7XFxyXFxuXFx0XFx0Y29sb3I6IHZhcigtLWdyYXkpO1xcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZmFjaWxpdHlfcnVsZV9pdGVtIHtcXHJcXG5cXHRtYXJnaW46IDE1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGZhY2lsaXR5X3J1bGVfaWNvbiB7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcblxcdHdpZHRoOiA0MHB4O1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGZhY2lsaXR5X3J1bGVfZGVzY3JpcHRpb24ge1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBjaGFuZ2VIZWFkZXJDb2xvciB7XFxyXFxuXFx0LmJvZHlfaGVhZGVyIHVsIC5haXJibmJfaWNvbixcXHJcXG5cXHQuYm9keV9oZWFkZXIgdWwgLmhlYWRlcl9wcm9maWxlIC5wcm9maWxlX2ltZyB7XFxyXFxuXFx0XFx0Y29sb3I6IHZhcigtLWJsdWUpO1xcclxcblxcdH1cXHJcXG5cXHRcXHJcXG5cXHQuYm9keV9oZWFkZXIgdWwgLnJvb21fc2VhcmNoIGkge1xcclxcblxcdFxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUpO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCBcIi4uL3Njc3Mvcm9vbUxpc3Quc2Nzc1wiO1xyXG5cclxuY29uc3Qgb25DbGlja0l0ZW0gPSAoZXZlbnQpID0+IHtcclxuXHRjb25zdCBpdGVtID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIucm9vbV9pdGVtXCIpO1xyXG5cdGlmIChpdGVtID09IG51bGwpIHJldHVybjtcclxuXHRjb25zdCByb29tSWQgPSBpdGVtLmRhdGFzZXQucm9vbWlkO1xyXG5cdGxvY2F0aW9uLmhyZWYgPSBgL3Jvb20vJHtyb29tSWR9YDtcclxuXHRcclxufVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb29tTGlzdFwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGlja0l0ZW0pO1xyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8g7Lm07Lm07JikIOyngOuPhCBBUElcclxuY29uc3QgZGF0YSA9IHtcclxuXHRhZGRyZXNzOiBbXSxcclxuXHRuYW1lOiBbXSxcclxuXHRwaG90bzogW10sXHJcblx0cm9vbUlkOiBbXSxcclxufTtcclxuZGF0YS5hZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yb29tX2FkZHJlc3NcIik7XHJcbmRhdGEubmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucm9vbV9uYW1lXCIpO1xyXG5kYXRhLnBob3RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yb29tX3Bob3RvXCIpO1xyXG5kYXRhLnJvb21JZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucm9vbV9pdGVtXCIpO1xyXG5cclxudmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKTsgLy/sp4Drj4Trpbwg64u07J2EIOyYgeyXreydmCBET00g66CI7Y2865+w7IqkXHJcbnZhciBvcHRpb25zID0geyAvL+yngOuPhOulvCDsg53shLHtlaAg65WMIO2VhOyalO2VnCDquLDrs7gg7Ji17IWYXHJcblx0Y2VudGVyOiBuZXcga2FrYW8ubWFwcy5MYXRMbmcoMzMuNDUwNzAxLCAxMjYuNTcwNjY3KSwgLy8g7KeA64+E7J2YIOykkeyLrOyijO2RnFxyXG5cdGxldmVsOiA4IC8v7KeA64+E7J2YIOugiOuyqCjtmZXrjIAsIOy2leyGjCDsoJXrj4QpXHJcbn07XHJcblx0XHJcbnZhciBtYXAgPSBuZXcga2FrYW8ubWFwcy5NYXAoY29udGFpbmVyLCBvcHRpb25zKTsgLy/sp4Drj4Qg7IOd7ISxIOuwjyDqsJ3ssrQg66as7YS0XHJcbnZhciBnZW9jb2RlciA9IG5ldyBrYWthby5tYXBzLnNlcnZpY2VzLkdlb2NvZGVyKCk7IC8vIOyjvOyGjC3sooztkZwg67OA7ZmYIOqwneyytOulvCDsg53shLHtlanri4jri6RcclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5hZGRyZXNzLmxlbmd0aDsgaSsrKSB7XHJcblx0Y29uc3QgYWRkcmVzcyA9IGRhdGEuYWRkcmVzc1tpXS50ZXh0Q29udGVudDtcclxuXHRjb25zdCBuYW1lID0gZGF0YS5uYW1lW2ldLnRleHRDb250ZW50O1xyXG5cdGNvbnN0IHBob3RvID0gZGF0YS5waG90b1tpXS5zcmM7XHJcblx0Y29uc3Qgcm9vbUlkID0gZGF0YS5yb29tSWRbaV0uZGF0YXNldC5yb29taWQ7XHJcblx0XHJcblx0Z2VvY29kZXIuYWRkcmVzc1NlYXJjaChhZGRyZXNzLCBmdW5jdGlvbihyZXN1bHQsIHN0YXR1cykge1xyXG5cclxuXHQgICAgLy8g7KCV7IOB7KCB7Jy866GcIOqygOyDieydtCDsmYTro4zrkJDsnLzrqbQgXHJcblx0ICAgIGlmIChzdGF0dXMgPT09IGtha2FvLm1hcHMuc2VydmljZXMuU3RhdHVzLk9LKSB7XHJcblx0XHJcblx0ICAgICAgICB2YXIgY29vcmRzID0gbmV3IGtha2FvLm1hcHMuTGF0TG5nKHJlc3VsdFswXS55LCByZXN1bHRbMF0ueCk7XHJcblx0XHJcblx0ICAgICAgICAvLyDqsrDqs7zqsJLsnLzroZwg67Cb7J2AIOychOy5mOulvCDrp4jsu6TroZwg7ZGc7Iuc7ZWp64uI64ukXHJcblx0ICAgICAgICB2YXIgbWFya2VyID0gbmV3IGtha2FvLm1hcHMuTWFya2VyKHtcclxuXHQgICAgICAgICAgICBtYXA6IG1hcCxcclxuXHQgICAgICAgICAgICBwb3NpdGlvbjogY29vcmRzLFxyXG5cdFx0XHRcdGNsaWNrYWJsZTogdHJ1ZVxyXG5cdCAgICAgICAgfSk7XHJcblx0XHJcblx0XHRcdGNvbnN0IGNvbnRlbnQgPSBgPGRpdiBzdHlsZT1cIndpZHRoOjIwMHB4O3RleHQtYWxpZ246Y2VudGVyO1wiPlxyXG5cdFx0XHQ8YSBocmVmPVwiL3Jvb20vJHtyb29tSWR9XCI+XHJcblx0XHRcdDxpbWcgc3JjPVwiJHtwaG90b31cIiBzdHlsZT1cIndpZHRoOjEwMCU7IGhlaWdodDoyMDBweDtcIj5cclxuXHRcdFx0PHA+JHtuYW1lfTwvcD5cclxuXHRcdFx0PC9hPlxyXG5cdFx0XHQ8L2Rpdj5gXHJcblx0XHJcblx0XHRcdC8vIOyduO2PrOyciOuPhOyasOuhnCDsnqXshozsl5Ag64yA7ZWcIOyEpOuqheydhCDtkZzsi5ztlanri4jri6RcclxuXHRcdFx0dmFyIGluZm93aW5kb3cgPSBuZXcga2FrYW8ubWFwcy5JbmZvV2luZG93KHtcclxuXHRcdFx0ICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcblx0XHRcdFx0cmVtb3ZhYmxlOiB0cnVlXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8g66eI7Luk7JeQIO2BtOumreydtOuypO2KuOulvCDrk7HroZ3tlanri4jri6RcclxuXHRcdFx0a2FrYW8ubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXIsICdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQgICAgICAvLyDrp4jsu6Qg7JyE7JeQIOyduO2PrOyciOuPhOyasOulvCDtkZzsi5ztlanri4jri6RcclxuXHRcdFx0ICAgICAgaW5mb3dpbmRvdy5vcGVuKG1hcCwgbWFya2VyKTsgIFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0aWYgKGkgPT09IDApIHtcclxuXHRcdCAgICAgICAgLy8g7KeA64+E7J2YIOykkeyLrOydhCDqsrDqs7zqsJLsnLzroZwg67Cb7J2AIOychOy5mOuhnCDsnbTrj5nsi5ztgrXri4jri6RcclxuXHRcdCAgICAgICAgbWFwLnNldENlbnRlcihjb29yZHMpO1x0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHR9IFxyXG5cdH0pO1xyXG59XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcm9vbUxpc3Quc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==