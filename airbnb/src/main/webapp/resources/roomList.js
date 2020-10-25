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
___CSS_LOADER_EXPORT___.push([module.i, ":root {\n  --wrapWidth: 1200px;\n  --gray: #7f8c8d;\n  --deepGray: #535c68;\n  --red: #ff385c;\n  --blue: lightseagreen;\n  --green: #23c382;\n  --containerHorizontalMargin: 50px;\n  --containerVerticalPadding: 30px;\n  --detailFontSize: smaller;\n  --bottomBorder: 1px solid #ecf0f1;\n  --borderRadius: 10px;\n  --calendarDaySize: 40px;\n  --boxShadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.ACCEPTED {\n  color: var(--green) !important; }\n\n.PENDING, .COMPLETED {\n  color: var(--gray) !important; }\n\n.REFUSED, .CANCLED {\n  color: var(--red) !important; }\n\n:root {\n  --wrapWidth: 1200px;\n  --gray: #7f8c8d;\n  --deepGray: #535c68;\n  --red: #ff385c;\n  --blue: lightseagreen;\n  --green: #23c382;\n  --containerHorizontalMargin: 50px;\n  --containerVerticalPadding: 30px;\n  --detailFontSize: smaller;\n  --bottomBorder: 1px solid #ecf0f1;\n  --borderRadius: 10px;\n  --calendarDaySize: 40px;\n  --boxShadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.ACCEPTED {\n  color: var(--green) !important; }\n\n.PENDING, .COMPLETED {\n  color: var(--gray) !important; }\n\n.REFUSED, .CANCLED {\n  color: var(--red) !important; }\n\nhtml, body {\n  width: 100%; }\n\n.wrap {\n  display: flex; }\n  .wrap .main_wrap {\n    padding: 0 var(--containerVerticalPadding);\n    margin: var(--containerHorizontalMargin) 0;\n    width: 50%; }\n    @media (max-width: 1023px) {\n      .wrap .main_wrap {\n        width: 100%; } }\n    .wrap .main_wrap .search_result {\n      padding-bottom: var(--containerVerticalPadding);\n      border-bottom: var(--bottomBorder);\n      margin-bottom: 15px; }\n      .wrap .main_wrap .search_result .header_title {\n        font-size: 2.5em;\n        font-weight: 700; }\n    .wrap .main_wrap .room_list {\n      width: 100%; }\n      .wrap .main_wrap .room_list .room_item {\n        padding: var(--containerVerticalPadding) 0;\n        border-top: var(--bottomBorder);\n        border-bottom: var(--bottomBorder);\n        cursor: pointer;\n        display: flex; }\n        .wrap .main_wrap .room_list .room_item .item_left_wrap {\n          display: inherit;\n          position: relative;\n          flex: 0 0 300px;\n          overflow: hidden;\n          border-radius: var(--borderRadius); }\n          .wrap .main_wrap .room_list .room_item .item_left_wrap .item_left {\n            display: flex;\n            position: relative;\n            transition: all ease 0.3s; }\n            .wrap .main_wrap .room_list .room_item .item_left_wrap .item_left .image_box {\n              width: 300px;\n              height: 200px; }\n              .wrap .main_wrap .room_list .room_item .item_left_wrap .item_left .image_box img {\n                width: 100%;\n                height: 100%;\n                object-fit: cover; }\n          .wrap .main_wrap .room_list .room_item .item_left_wrap:hover i {\n            display: block; }\n          .wrap .main_wrap .room_list .room_item .item_left_wrap i {\n            position: absolute;\n            display: none;\n            background-color: white;\n            border-radius: 50%;\n            width: 25px;\n            height: 25px;\n            margin: 0 5px;\n            line-height: 25px;\n            text-align: center;\n            top: 85px;\n            opacity: 0.5;\n            box-shadow: var(--boxShadow);\n            transition: all ease 0.3s; }\n            .wrap .main_wrap .room_list .room_item .item_left_wrap i:hover {\n              opacity: 1;\n              transform: scale(1.1); }\n          .wrap .main_wrap .room_list .room_item .item_left_wrap .fa-angle-right {\n            right: 0; }\n          .wrap .main_wrap .room_list .room_item .item_left_wrap .bottom_btn_wrap {\n            position: absolute;\n            width: 100%;\n            bottom: 7px;\n            text-align: center; }\n            .wrap .main_wrap .room_list .room_item .item_left_wrap .bottom_btn_wrap .circle_mark {\n              display: inline-block;\n              margin: 0 1px;\n              width: 5px;\n              height: 5px;\n              border: 1px solid white;\n              border-radius: 100%;\n              background-color: white;\n              opacity: 0.5; }\n              .wrap .main_wrap .room_list .room_item .item_left_wrap .bottom_btn_wrap .circle_mark.now {\n                opacity: 1; }\n        .wrap .main_wrap .room_list .room_item .item_right {\n          margin-left: var(--containerHorizontalMargin);\n          display: flex;\n          flex-direction: column; }\n          .wrap .main_wrap .room_list .room_item .item_right .room_address {\n            color: var(--deepGray); }\n          .wrap .main_wrap .room_list .room_item .item_right .room_name {\n            border-bottom: var(--bottomBorder);\n            padding-bottom: calc(var(--containerHorizontalMargin)/2);\n            margin-bottom: calc(var(--containerVerticalPadding)/2); }\n          .wrap .main_wrap .room_list .room_item .item_right .room_facility,\n          .wrap .main_wrap .room_list .room_item .item_right .room_amenity {\n            color: var(--deepGray); }\n          .wrap .main_wrap .room_list .room_item .item_right .rating {\n            margin-top: auto; }\n            .wrap .main_wrap .room_list .room_item .item_right .rating .room_short_info .star {\n              color: var(--red);\n              font-size: 1em; }\n            .wrap .main_wrap .room_list .room_item .item_right .rating .room_short_info .rating_count {\n              color: var(--deepGray); }\n      .wrap .main_wrap .room_list .pagination {\n        padding: var(--containerVerticalPadding) 0;\n        justify-content: center; }\n        .wrap .main_wrap .room_list .pagination .page_btns {\n          display: flex;\n          justify-content: center;\n          align-items: center; }\n          .wrap .main_wrap .room_list .pagination .page_btns > * {\n            margin: 0 8px; }\n          .wrap .main_wrap .room_list .pagination .page_btns button {\n            all: unset;\n            display: flex;\n            justify-content: center;\n            cursor: pointer;\n            width: 25px;\n            height: 25px;\n            box-shadow: var(--boxShadow);\n            border-radius: 50%;\n            margin: 0 5px; }\n          .wrap .main_wrap .room_list .pagination .page_btns .page_num:not(.cur_page) {\n            cursor: pointer;\n            text-align: center;\n            width: 10px; }\n            .wrap .main_wrap .room_list .pagination .page_btns .page_num:not(.cur_page):hover {\n              border-bottom: 1px solid black;\n              display: inline-block;\n              line-height: 0.85;\n              text-shadow: 1px 1px var(--backgroudColor), 1px -1px var(--backgroudColor), -1px 1px var(--backgroudColor), -1px -1px var(--backgroudColor);\n              line-height: 1.5; }\n          .wrap .main_wrap .room_list .pagination .page_btns .page_num.cur_page {\n            background-color: black;\n            width: 25px;\n            height: 25px;\n            color: white;\n            border: 0 !important;\n            border-radius: 50%;\n            text-align: center; }\n        .wrap .main_wrap .room_list .pagination .page_detail {\n          text-align: center;\n          display: block;\n          margin-top: 10px; }\n  @media (max-width: 1023px) {\n    .wrap .map {\n      display: none; } }\n  @media (min-width: 1024px) {\n    .wrap .map_wrapper {\n      width: 100%; }\n      .wrap .map_wrapper .map_relative {\n        position: relative;\n        height: 100%; }\n        .wrap .map_wrapper .map_relative .map_sticky {\n          height: 98vh;\n          position: sticky;\n          top: 0; }\n          .wrap .map_wrapper .map_relative .map_sticky .map {\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            right: -30px; } }\n", "",{"version":3,"sources":["webpack://scss/__base.scss","webpack://scss/roomList.scss","webpack://scss/__mixins.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;700&display=swap\");\r\n:root {\r\n\t--wrapWidth: 1200px;\r\n\t--gray: #7f8c8d;\r\n\t--deepGray: #535c68;\r\n\t--red: #ff385c;\r\n\t--blue: lightseagreen;\r\n\t--green: #23c382;\r\n\t--containerHorizontalMargin: 50px;\r\n\t--containerVerticalPadding: 30px;\r\n\t--detailFontSize: smaller;\r\n\t--bottomBorder: 1px solid #ecf0f1;\r\n\t--borderRadius: 10px;\r\n\t--calendarDaySize: 40px;\r\n\t--boxShadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n}\r\n\r\n// Breakpoints\r\n$breakpoint-tablet: 758px;\r\n$breakpoint-desktop: 1024px;\r\n\r\n.ACCEPTED {\r\n\tcolor: var(--green) !important;\r\n}\r\n\r\n.PENDING, .COMPLETED {\r\n\tcolor: var(--gray) !important;\r\n}\r\n\r\n.REFUSED, .CANCLED {\r\n\tcolor: var(--red) !important;\r\n}\r\n","@import \"./_base\";\r\n@import \"./_mixins\";\r\n\r\nhtml, body {\r\n\twidth: 100%;\r\n}\r\n\r\n.wrap {\r\n\tdisplay: flex;\r\n\t\r\n\t.main_wrap {\r\n\t\tpadding: 0 var(--containerVerticalPadding);\r\n\t\tmargin: var(--containerHorizontalMargin) 0;\r\n\t    width: 50%;\r\n\t\t\r\n\t\t@include tablet {\r\n\t\t\twidth: 100%;\r\n\t\t}\r\n\r\n\t\t.search_result {\r\n\t\t\tpadding-bottom: var(--containerVerticalPadding);\r\n\t\t\tborder-bottom: var(--bottomBorder);\r\n\t\t\tmargin-bottom: 15px;\r\n\t\t\t\r\n\t\t\t.header_title {\r\n\t\t\t\tfont-size: 2.5em;\r\n\t\t\t\tfont-weight: 700;\r\n\t\t\t}\r\n\t\t}\r\n\t\t\t\r\n\t\t.room_list {\r\n\t\t\twidth: 100%;\r\n\t\t\t\r\n\t\t\t.room_item {\r\n\t\t\t    padding: var(--containerVerticalPadding) 0;\r\n\t\t\t\tborder-top: var(--bottomBorder);\r\n\t\t\t\tborder-bottom: var(--bottomBorder);\r\n\t\t\t\tcursor: pointer;\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\t\r\n\t\t\t\t.item_left_wrap {\r\n\t\t\t\t\tdisplay: inherit;\r\n\t\t\t\t\tposition: relative;\r\n\t\t\t\t    flex: 0 0 300px;\r\n\t\t\t\t    overflow: hidden;\r\n\t\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\t\r\n\t\t\t\t\t.item_left {\r\n\t\t\t\t    display: flex;\r\n\t\t\t\t\tposition: relative;\r\n\t\t\t\t\ttransition: all ease 0.3s;\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t.image_box {\r\n\t\t\t\t\t\t\twidth: 300px;\r\n\t\t\t\t\t\t\theight: 200px;\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\timg {\r\n\t\t\t\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\t\t\t\theight: 100%;\r\n\t\t\t\t\t\t\t\tobject-fit: cover;\r\n\t\t\t\t\t\t\t}\t\t\t\t\t\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t&:hover i {\r\n\t\t\t\t\t\tdisplay: block;\r\n\t\t\t\t\t}\r\n\t\t\r\n\t\t\t\t\ti {\r\n\t\t\t\t\t\tposition: absolute;\r\n\t\t\t\t\t\tdisplay: none;\r\n\t\t\t\t\t\tbackground-color: white;\r\n\t\t\t\t\t\tborder-radius: 50%;\r\n\t\t\t\t\t\twidth: 25px;\r\n\t\t\t\t\t    height: 25px;\r\n\t\t\t\t\t    margin: 0 5px;\r\n   \t\t\t\t\t\tline-height: 25px;\r\n\t\t\t\t\t    text-align: center;\r\n\t\t\t\t\t\ttop: 85px;\r\n\t\t\t\t\t\topacity: 0.5;\r\n\t\t\t\t\t\tbox-shadow: var(--boxShadow);\r\n\t\t\t\t\t\ttransition: all ease 0.3s;\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t&:hover {\r\n\t\t\t\t\t\t\topacity: 1;\r\n\t\t\t\t\t\t\ttransform: scale(1.1);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.fa-angle-right {\r\n\t\t\t\t\t\tright:0;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t.bottom_btn_wrap {\r\n\t\t\t\t\t\tposition: absolute;\r\n\t\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\t\tbottom: 7px;\r\n\t\t\t\t\t\ttext-align: center;\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t.circle_mark {\r\n\t\t\t\t\t\t\tdisplay: inline-block;\r\n\t\t\t\t\t\t\tmargin: 0 1px;\r\n\t\t\t\t\t\t\twidth: 5px;\r\n\t\t\t\t\t\t\theight: 5px;\r\n\t\t\t\t\t\t\tborder: 1px solid white;\r\n\t\t\t\t\t\t\tborder-radius: 100%;\r\n\t\t\t\t\t\t\tbackground-color: white;\r\n\t\t\t\t\t\t\topacity: 0.5;\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t&.now {\r\n\t\t\t\t\t\t\t\topacity: 1;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t.item_right {\r\n\t\t\t\t\tmargin-left: var(--containerHorizontalMargin);\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\tflex-direction: column;\r\n\t\t\t\t\t\r\n\t\t\t\t\t.room_address {\r\n\t\t\t\t\t\tcolor: var(--deepGray);\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.room_name {\r\n\t\t\t\t\t\tborder-bottom: var(--bottomBorder);\r\n\t\t\t\t\t    padding-bottom: calc(var(--containerHorizontalMargin)/2);\r\n\t\t\t\t\t\tmargin-bottom: calc(var(--containerVerticalPadding)/2);\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.room_facility,\r\n\t\t\t\t\t.room_amenity {\r\n\t\t\t\t\t\tcolor: var(--deepGray);\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.rating {\r\n\t\t\t\t\t\tmargin-top: auto;\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t.room_short_info {\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t.star {\r\n\t\t\t\t\t\t\t@include star(1em);\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t.rating_count {\r\n\t\t\t\t\t\t\t\tcolor: var(--deepGray);\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t\t\r\n\t\t\t.pagination {\r\n\t\t\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\t\t\tjustify-content: center;\r\n\t\t\t\t\r\n\t\t\t\t.page_btns {\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\tjustify-content: center;\r\n\t\t\t\t\talign-items: center;\r\n\t\t\t\t\t\r\n\t\t\t\t\t& > * {\r\n\t\t\t\t\t\tmargin: 0 8px;\t\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\tbutton {\r\n\t\t\t\t\t\tall: unset;\r\n\t\t\t\t\t    display: flex;\r\n\t\t    \t\t\tjustify-content: center;\r\n\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\twidth: 25px;\r\n\t\t\t\t\t\theight: 25px;\r\n\t\t\t\t\t\tbox-shadow: var(--boxShadow);\r\n\t\t\t\t\t\tborder-radius: 50%;\r\n\t\t\t\t\t\tmargin: 0 5px;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.page_num:not(.cur_page) {\r\n\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\ttext-align: center;\r\n\t\t\t\t\t\twidth: 10px;\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t&:hover {\r\n\t\t\t\t\t\t\t@include underline;\r\n\t\t\t\t\t\t\tline-height: 1.5;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.page_num.cur_page {\t\t\r\n\t\t\t\t\t\tbackground-color: black;\r\n\t\t\t\t\t\twidth: 25px;\r\n\t\t\t\t\t\theight: 25px;\r\n\t\t\t\t\t\tcolor: white;\r\n\t\t\t\t\t\tborder: 0 !important;\r\n\t\t\t\t\t\tborder-radius: 50%;\r\n\t\t\t\t\t    text-align: center;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t.page_detail {\r\n\t\t\t\t    text-align: center;\r\n\t\t\t\t    display: block;\r\n\t\t\t\t    margin-top: 10px;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t@include tablet {\r\n\t\t.map {\r\n\t\t\tdisplay: none;\r\n\t\t}\r\n\t}\r\n\r\n\t@include desktop {\r\n\t\t.map_wrapper {\r\n\t\t\twidth: 100%;\r\n\t\t\t\r\n\t\t\t.map_relative {\r\n\t\t\t\tposition: relative;\r\n    \t\t\theight: 100%;\r\n\t\t\t\t\r\n\t\t\t\t.map_sticky {\r\n    \t\t\t\theight: 98vh;\r\n\t\t\t\t\tposition: sticky;\r\n\t\t\t\t\ttop: 0;\r\n\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t.map {\r\n\t\t\t\t\t\tposition: absolute;\r\n\t\t\t\t\t    width: 100%;\r\n\t\t\t\t\t\theight: 100%;\r\n\t\t\t\t\t\tright: -30px;\r\n\t\t\t\t\t}\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t}\r\n\t\t\t}\t\t\r\n\t\t}\r\n\t}\r\n}\r\n","@import \"./_base\";\r\n\r\n@mixin tablet {\r\n  @media (max-width: #{$breakpoint-desktop - 1px}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin desktop {\r\n  @media (min-width: #{$breakpoint-desktop}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin underline {\r\n\tborder-bottom: 1px solid black;\r\n\tdisplay: inline-block;\r\n\tline-height: 0.85;\r\n\ttext-shadow: 1px 1px var(--backgroudColor), 1px -1px var(--backgroudColor),\r\n\t\t-1px 1px var(--backgroudColor), -1px -1px var(--backgroudColor);\r\n\t@content;\r\n}\r\n\r\n@mixin star($font-size) {\r\n\tcolor: var(--red);\r\n\tfont-size: $font-size;\r\n}\r\n\r\n@mixin reservation_item {\r\n\tflex: 1 1 50%;\r\n\tpadding: 5px 10px;\r\n\tfont-size: 0.9rem;\r\n\theight: 50px;\r\n\r\n\t.reservation_display {\r\n\t\tcolor: var(--gray);\r\n\t\tfont-weight: 300;\r\n\t}\r\n}\r\n\r\n@mixin facility_rule_item {\r\n\tmargin: 15px 0;\r\n}\r\n\r\n@mixin facility_rule_icon {\r\n\tfont-size: 20px;\r\n\twidth: 40px;\r\n\ttext-align: center;\r\n}\r\n\r\n@mixin facility_rule_description {\r\n\tmargin-left: 15px;\r\n\tfont-weight: 300;\r\n}\r\n\r\n@mixin changeHeaderColor {\r\n\t.body_header ul .airbnb_icon,\r\n\t.body_header ul .header_profile .profile_img {\r\n\t\tcolor: var(--blue);\r\n\t}\r\n\t\r\n\t.body_header ul .room_search i {\r\n\t\tbackground-color: var(--blue);\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
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


const onClickItem = ({target}) => {
	const item = target.closest(".room_item");
	if (item == null) return;

	if (target.matches(".fa-angle-left") || target.matches(".fa-angle-right")) {
		const images = item.querySelectorAll(".room_photo");
		const imageCount = images.length;
		const imageWrap = item.querySelector(".item_left");
		const mark = item.querySelector(".circle_mark.now");
		let imageIdx;
		
		const showSlides = n => {
		    let imageIndex = n;
		    if (imageIndex == -1) {
		        imageIndex = imageCount - 1;
		    } else if (imageIndex === imageCount) {
		        imageIndex = 0;
		    }
		    imageWrap.style.transform = `translateX(${-300 * imageIndex}px)`;
			return imageIndex;
		}
		
		for(let i = 0; i < mark.parentNode.childElementCount; i++) {
			if (mark.parentNode.children[i] === mark) {
				imageIdx = i;
				break;
			}
		}
		
		if(target.matches(".fa-angle-left")) imageIdx = showSlides(--imageIdx);
		if(target.matches(".fa-angle-right")) imageIdx = showSlides(++imageIdx);
		mark.classList.remove("now");
		mark.parentNode.children[imageIdx].classList.add("now");		
	} else {
		const roomId = item.dataset.roomid;
		location.href = `/room/${roomId}`;		
	}
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
	level: 7 //지도의 레벨(확대, 축소 정도)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9yb29tTGlzdC5zY3NzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vanMvcm9vbUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9yb29tTGlzdC5zY3NzPzZlNTciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUM0RjtBQUM1Riw4QkFBOEIsbUZBQTJCO0FBQ3pELDhCQUE4QixRQUFTLDhFQUE4RSxJQUFJLGtCQUFrQjtB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T0FBTyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxZQUFZLGFBQWEsYUFBYSxZQUFZLFdBQVcsWUFBWSxrQkFBa0IsS0FBSyxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxrQkFBa0IsT0FBTyxnQkFBZ0IsS0FBSyxlQUFlLEtBQUssWUFBWSxhQUFhLGdCQUFnQixLQUFLLEtBQUsscUJBQXFCLE1BQU0sWUFBWSxhQUFhLGtCQUFrQixNQUFNLGFBQWEsa0JBQWtCLE9BQU8sZ0JBQWdCLE1BQU0sYUFBYSxhQUFhLGFBQWEsV0FBVyxlQUFlLE9BQU8sYUFBYSxhQUFhLFVBQVUsWUFBWSxrQkFBa0IsT0FBTyxXQUFXLGFBQWEsa0JBQWtCLE9BQU8sV0FBVyxlQUFlLE9BQU8sWUFBWSxXQUFXLGtCQUFrQixPQUFPLGdCQUFnQixPQUFPLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGtCQUFrQixPQUFPLFdBQVcsaUJBQWlCLE9BQU8sZ0JBQWdCLE1BQU0sYUFBYSxXQUFXLFVBQVUsaUJBQWlCLE9BQU8sYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxnQkFBZ0IsT0FBTyxpQkFBaUIsT0FBTyxhQUFhLFdBQVcsaUJBQWlCLE9BQU8sa0JBQWtCLE9BQU8sYUFBYSxhQUFhLGtCQUFrQixRQUFRLGtCQUFrQixPQUFPLGtCQUFrQixPQUFPLGFBQWEsa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sYUFBYSxrQkFBa0IsT0FBTyxXQUFXLFlBQVksa0JBQWtCLE9BQU8sZ0JBQWdCLE9BQU8sV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGdCQUFnQixPQUFPLFdBQVcsWUFBWSxnQkFBZ0IsT0FBTyxZQUFZLGFBQWEsYUFBYSxhQUFhLG1CQUFtQixPQUFPLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGlCQUFpQixPQUFPLGFBQWEsV0FBVyxpQkFBaUIsT0FBTyxLQUFLLHFCQUFxQixNQUFNLEtBQUssZ0JB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QTtBQUNBLEc7QUFDQSxFQUFFO0FBQ0Y7Ozs7Ozs7Ozs7OztBQzlHQSxVQUFVLG1CQUFPLENBQUMsdUpBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLGtOQUF3Rzs7QUFFMUk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0MiLCJmaWxlIjoicm9vbUxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9yZXNvdXJjZXMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvcm9vbUxpc3QuanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrS1I6d2dodEAzMDA7NTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrS1I6d2dodEAzMDA7NTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXdyYXBXaWR0aDogMTIwMHB4O1xcbiAgLS1ncmF5OiAjN2Y4YzhkO1xcbiAgLS1kZWVwR3JheTogIzUzNWM2ODtcXG4gIC0tcmVkOiAjZmYzODVjO1xcbiAgLS1ibHVlOiBsaWdodHNlYWdyZWVuO1xcbiAgLS1ncmVlbjogIzIzYzM4MjtcXG4gIC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbjogNTBweDtcXG4gIC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nOiAzMHB4O1xcbiAgLS1kZXRhaWxGb250U2l6ZTogc21hbGxlcjtcXG4gIC0tYm90dG9tQm9yZGVyOiAxcHggc29saWQgI2VjZjBmMTtcXG4gIC0tYm9yZGVyUmFkaXVzOiAxMHB4O1xcbiAgLS1jYWxlbmRhckRheVNpemU6IDQwcHg7XFxuICAtLWJveFNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpOyB9XFxuXFxuLkFDQ0VQVEVEIHtcXG4gIGNvbG9yOiB2YXIoLS1ncmVlbikgIWltcG9ydGFudDsgfVxcblxcbi5QRU5ESU5HLCAuQ09NUExFVEVEIHtcXG4gIGNvbG9yOiB2YXIoLS1ncmF5KSAhaW1wb3J0YW50OyB9XFxuXFxuLlJFRlVTRUQsIC5DQU5DTEVEIHtcXG4gIGNvbG9yOiB2YXIoLS1yZWQpICFpbXBvcnRhbnQ7IH1cXG5cXG46cm9vdCB7XFxuICAtLXdyYXBXaWR0aDogMTIwMHB4O1xcbiAgLS1ncmF5OiAjN2Y4YzhkO1xcbiAgLS1kZWVwR3JheTogIzUzNWM2ODtcXG4gIC0tcmVkOiAjZmYzODVjO1xcbiAgLS1ibHVlOiBsaWdodHNlYWdyZWVuO1xcbiAgLS1ncmVlbjogIzIzYzM4MjtcXG4gIC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbjogNTBweDtcXG4gIC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nOiAzMHB4O1xcbiAgLS1kZXRhaWxGb250U2l6ZTogc21hbGxlcjtcXG4gIC0tYm90dG9tQm9yZGVyOiAxcHggc29saWQgI2VjZjBmMTtcXG4gIC0tYm9yZGVyUmFkaXVzOiAxMHB4O1xcbiAgLS1jYWxlbmRhckRheVNpemU6IDQwcHg7XFxuICAtLWJveFNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpOyB9XFxuXFxuLkFDQ0VQVEVEIHtcXG4gIGNvbG9yOiB2YXIoLS1ncmVlbikgIWltcG9ydGFudDsgfVxcblxcbi5QRU5ESU5HLCAuQ09NUExFVEVEIHtcXG4gIGNvbG9yOiB2YXIoLS1ncmF5KSAhaW1wb3J0YW50OyB9XFxuXFxuLlJFRlVTRUQsIC5DQU5DTEVEIHtcXG4gIGNvbG9yOiB2YXIoLS1yZWQpICFpbXBvcnRhbnQ7IH1cXG5cXG5odG1sLCBib2R5IHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLndyYXAge1xcbiAgZGlzcGxheTogZmxleDsgfVxcbiAgLndyYXAgLm1haW5fd3JhcCB7XFxuICAgIHBhZGRpbmc6IDAgdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKTtcXG4gICAgbWFyZ2luOiB2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKSAwO1xcbiAgICB3aWR0aDogNTAlOyB9XFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAxMDIzcHgpIHtcXG4gICAgICAud3JhcCAubWFpbl93cmFwIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlOyB9IH1cXG4gICAgLndyYXAgLm1haW5fd3JhcCAuc2VhcmNoX3Jlc3VsdCB7XFxuICAgICAgcGFkZGluZy1ib3R0b206IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZyk7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm90dG9tQm9yZGVyKTtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyB9XFxuICAgICAgLndyYXAgLm1haW5fd3JhcCAuc2VhcmNoX3Jlc3VsdCAuaGVhZGVyX3RpdGxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XFxuICAgICAgICBmb250LXdlaWdodDogNzAwOyB9XFxuICAgIC53cmFwIC5tYWluX3dyYXAgLnJvb21fbGlzdCB7XFxuICAgICAgd2lkdGg6IDEwMCU7IH1cXG4gICAgICAud3JhcCAubWFpbl93cmFwIC5yb29tX2xpc3QgLnJvb21faXRlbSB7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7XFxuICAgICAgICBib3JkZXItdG9wOiB2YXIoLS1ib3R0b21Cb3JkZXIpO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm90dG9tQm9yZGVyKTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gICAgICAgIC53cmFwIC5tYWluX3dyYXAgLnJvb21fbGlzdCAucm9vbV9pdGVtIC5pdGVtX2xlZnRfd3JhcCB7XFxuICAgICAgICAgIGRpc3BsYXk6IGluaGVyaXQ7XFxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgZmxleDogMCAwIDMwMHB4O1xcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMpOyB9XFxuICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLnJvb21fbGlzdCAucm9vbV9pdGVtIC5pdGVtX2xlZnRfd3JhcCAuaXRlbV9sZWZ0IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjNzOyB9XFxuICAgICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAucm9vbV9saXN0IC5yb29tX2l0ZW0gLml0ZW1fbGVmdF93cmFwIC5pdGVtX2xlZnQgLmltYWdlX2JveCB7XFxuICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XFxuICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4OyB9XFxuICAgICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5yb29tX2xpc3QgLnJvb21faXRlbSAuaXRlbV9sZWZ0X3dyYXAgLml0ZW1fbGVmdCAuaW1hZ2VfYm94IGltZyB7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyOyB9XFxuICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLnJvb21fbGlzdCAucm9vbV9pdGVtIC5pdGVtX2xlZnRfd3JhcDpob3ZlciBpIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5yb29tX2xpc3QgLnJvb21faXRlbSAuaXRlbV9sZWZ0X3dyYXAgaSB7XFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcXG4gICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICB0b3A6IDg1cHg7XFxuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveFNoYWRvdyk7XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4zczsgfVxcbiAgICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLnJvb21fbGlzdCAucm9vbV9pdGVtIC5pdGVtX2xlZnRfd3JhcCBpOmhvdmVyIHtcXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IH1cXG4gICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAucm9vbV9saXN0IC5yb29tX2l0ZW0gLml0ZW1fbGVmdF93cmFwIC5mYS1hbmdsZS1yaWdodCB7XFxuICAgICAgICAgICAgcmlnaHQ6IDA7IH1cXG4gICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAucm9vbV9saXN0IC5yb29tX2l0ZW0gLml0ZW1fbGVmdF93cmFwIC5ib3R0b21fYnRuX3dyYXAge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBib3R0b206IDdweDtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5yb29tX2xpc3QgLnJvb21faXRlbSAuaXRlbV9sZWZ0X3dyYXAgLmJvdHRvbV9idG5fd3JhcCAuY2lyY2xlX21hcmsge1xcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDFweDtcXG4gICAgICAgICAgICAgIHdpZHRoOiA1cHg7XFxuICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcXG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC41OyB9XFxuICAgICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5yb29tX2xpc3QgLnJvb21faXRlbSAuaXRlbV9sZWZ0X3dyYXAgLmJvdHRvbV9idG5fd3JhcCAuY2lyY2xlX21hcmsubm93IHtcXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTsgfVxcbiAgICAgICAgLndyYXAgLm1haW5fd3JhcCAucm9vbV9saXN0IC5yb29tX2l0ZW0gLml0ZW1fcmlnaHQge1xcbiAgICAgICAgICBtYXJnaW4tbGVmdDogdmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbik7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAucm9vbV9saXN0IC5yb29tX2l0ZW0gLml0ZW1fcmlnaHQgLnJvb21fYWRkcmVzcyB7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWRlZXBHcmF5KTsgfVxcbiAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5yb29tX2xpc3QgLnJvb21faXRlbSAuaXRlbV9yaWdodCAucm9vbV9uYW1lIHtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiB2YXIoLS1ib3R0b21Cb3JkZXIpO1xcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pLzIpO1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKS8yKTsgfVxcbiAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5yb29tX2xpc3QgLnJvb21faXRlbSAuaXRlbV9yaWdodCAucm9vbV9mYWNpbGl0eSxcXG4gICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAucm9vbV9saXN0IC5yb29tX2l0ZW0gLml0ZW1fcmlnaHQgLnJvb21fYW1lbml0eSB7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWRlZXBHcmF5KTsgfVxcbiAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5yb29tX2xpc3QgLnJvb21faXRlbSAuaXRlbV9yaWdodCAucmF0aW5nIHtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiBhdXRvOyB9XFxuICAgICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAucm9vbV9saXN0IC5yb29tX2l0ZW0gLml0ZW1fcmlnaHQgLnJhdGluZyAucm9vbV9zaG9ydF9pbmZvIC5zdGFyIHtcXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07IH1cXG4gICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5yb29tX2xpc3QgLnJvb21faXRlbSAuaXRlbV9yaWdodCAucmF0aW5nIC5yb29tX3Nob3J0X2luZm8gLnJhdGluZ19jb3VudCB7XFxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZGVlcEdyYXkpOyB9XFxuICAgICAgLndyYXAgLm1haW5fd3JhcCAucm9vbV9saXN0IC5wYWdpbmF0aW9uIHtcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgMDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuICAgICAgICAud3JhcCAubWFpbl93cmFwIC5yb29tX2xpc3QgLnBhZ2luYXRpb24gLnBhZ2VfYnRucyB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLnJvb21fbGlzdCAucGFnaW5hdGlvbiAucGFnZV9idG5zID4gKiB7XFxuICAgICAgICAgICAgbWFyZ2luOiAwIDhweDsgfVxcbiAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5yb29tX2xpc3QgLnBhZ2luYXRpb24gLnBhZ2VfYnRucyBidXR0b24ge1xcbiAgICAgICAgICAgIGFsbDogdW5zZXQ7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveFNoYWRvdyk7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7IH1cXG4gICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAucm9vbV9saXN0IC5wYWdpbmF0aW9uIC5wYWdlX2J0bnMgLnBhZ2VfbnVtOm5vdCguY3VyX3BhZ2UpIHtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMHB4OyB9XFxuICAgICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAucm9vbV9saXN0IC5wYWdpbmF0aW9uIC5wYWdlX2J0bnMgLnBhZ2VfbnVtOm5vdCguY3VyX3BhZ2UpOmhvdmVyIHtcXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjg1O1xcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpLCAxcHggLTFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvciksIC0xcHggMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKSwgLTFweCAtMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKTtcXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7IH1cXG4gICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAucm9vbV9saXN0IC5wYWdpbmF0aW9uIC5wYWdlX2J0bnMgLnBhZ2VfbnVtLmN1cl9wYWdlIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICB3aWR0aDogMjVweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgICAgIC53cmFwIC5tYWluX3dyYXAgLnJvb21fbGlzdCAucGFnaW5hdGlvbiAucGFnZV9kZXRhaWwge1xcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4OyB9XFxuICBAbWVkaWEgKG1heC13aWR0aDogMTAyM3B4KSB7XFxuICAgIC53cmFwIC5tYXAge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcbiAgICAud3JhcCAubWFwX3dyYXBwZXIge1xcbiAgICAgIHdpZHRoOiAxMDAlOyB9XFxuICAgICAgLndyYXAgLm1hcF93cmFwcGVyIC5tYXBfcmVsYXRpdmUge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlOyB9XFxuICAgICAgICAud3JhcCAubWFwX3dyYXBwZXIgLm1hcF9yZWxhdGl2ZSAubWFwX3N0aWNreSB7XFxuICAgICAgICAgIGhlaWdodDogOTh2aDtcXG4gICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgICAgICAgdG9wOiAwOyB9XFxuICAgICAgICAgIC53cmFwIC5tYXBfd3JhcHBlciAubWFwX3JlbGF0aXZlIC5tYXBfc3RpY2t5IC5tYXAge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgcmlnaHQ6IC0zMHB4OyB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc2Nzcy9fX2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovL3Njc3Mvcm9vbUxpc3Quc2Nzc1wiLFwid2VicGFjazovL3Njc3MvX19taXhpbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNDLG1CQUFZO0VBQ1osZUFBTztFQUNQLG1CQUFXO0VBQ1gsY0FBTTtFQUNOLHFCQUFPO0VBQ1AsZ0JBQVE7RUFDUixpQ0FBNEI7RUFDNUIsZ0NBQTJCO0VBQzNCLHlCQUFpQjtFQUNqQixpQ0FBZTtFQUNmLG9CQUFlO0VBQ2YsdUJBQWtCO0VBQ2xCLHlFQUFZLEVBQUE7O0FBT2I7RUFDQyw4QkFBOEIsRUFBQTs7QUFHL0I7RUFDQyw2QkFBNkIsRUFBQTs7QUFHOUI7RUFDQyw0QkFBNEIsRUFBQTs7QUE3QjdCO0VBQ0MsbUJBQVk7RUFDWixlQUFPO0VBQ1AsbUJBQVc7RUFDWCxjQUFNO0VBQ04scUJBQU87RUFDUCxnQkFBUTtFQUNSLGlDQUE0QjtFQUM1QixnQ0FBMkI7RUFDM0IseUJBQWlCO0VBQ2pCLGlDQUFlO0VBQ2Ysb0JBQWU7RUFDZix1QkFBa0I7RUFDbEIseUVBQVksRUFBQTs7QUFPYjtFQUNDLDhCQUE4QixFQUFBOztBQUcvQjtFQUNDLDZCQUE2QixFQUFBOztBQUc5QjtFQUNDLDRCQUE0QixFQUFBOztBQzNCN0I7RUFDQyxXQUFXLEVBQUE7O0FBR1o7RUFDQyxhQUFhLEVBQUE7RUFEZDtJQUlFLDBDQUEwQztJQUMxQywwQ0FBMEM7SUFDdkMsVUFBVSxFQUFBO0lDVmI7TURJRjtRQVNHLFdBQVcsRUFBQSxFQWdNWjtJQXpNRjtNQWFHLCtDQUErQztNQUMvQyxrQ0FBa0M7TUFDbEMsbUJBQW1CLEVBQUE7TUFmdEI7UUFrQkksZ0JBQWdCO1FBQ2hCLGdCQUFnQixFQUFBO0lBbkJwQjtNQXdCRyxXQUFXLEVBQUE7TUF4QmQ7UUEyQk8sMENBQTBDO1FBQzdDLCtCQUErQjtRQUMvQixrQ0FBa0M7UUFDbEMsZUFBZTtRQUNmLGFBQWEsRUFBQTtRQS9CakI7VUFrQ0ssZ0JBQWdCO1VBQ2hCLGtCQUFrQjtVQUNmLGVBQWU7VUFDZixnQkFBZ0I7VUFDbkIsa0NBQWtDLEVBQUE7VUF0Q3ZDO1lBeUNRLGFBQWE7WUFDaEIsa0JBQWtCO1lBQ2xCLHlCQUF5QixFQUFBO1lBM0M5QjtjQThDTyxZQUFZO2NBQ1osYUFBYSxFQUFBO2NBL0NwQjtnQkFrRFEsV0FBVztnQkFDWCxZQUFZO2dCQUNaLGlCQUFpQixFQUFBO1VBcER6QjtZQTBETSxjQUFjLEVBQUE7VUExRHBCO1lBOERNLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsdUJBQXVCO1lBQ3ZCLGtCQUFrQjtZQUNsQixXQUFXO1lBQ1IsWUFBWTtZQUNaLGFBQWE7WUFDYixpQkFBaUI7WUFDakIsa0JBQWtCO1lBQ3JCLFNBQVM7WUFDVCxZQUFZO1lBQ1osNEJBQTRCO1lBQzVCLHlCQUF5QixFQUFBO1lBMUUvQjtjQTZFTyxVQUFVO2NBQ1YscUJBQXFCLEVBQUE7VUE5RTVCO1lBbUZNLFFBQU8sRUFBQTtVQW5GYjtZQXVGTSxrQkFBa0I7WUFDbEIsV0FBVztZQUNYLFdBQVc7WUFDWCxrQkFBa0IsRUFBQTtZQTFGeEI7Y0E2Rk8scUJBQXFCO2NBQ3JCLGFBQWE7Y0FDYixVQUFVO2NBQ1YsV0FBVztjQUNYLHVCQUF1QjtjQUN2QixtQkFBbUI7Y0FDbkIsdUJBQXVCO2NBQ3ZCLFlBQVksRUFBQTtjQXBHbkI7Z0JBdUdRLFVBQVUsRUFBQTtRQXZHbEI7VUE4R0ssNkNBQTZDO1VBQzdDLGFBQWE7VUFDYixzQkFBc0IsRUFBQTtVQWhIM0I7WUFtSE0sc0JBQXNCLEVBQUE7VUFuSDVCO1lBdUhNLGtDQUFrQztZQUMvQix3REFBd0Q7WUFDM0Qsc0RBQXNELEVBQUE7VUF6SDVEOztZQThITSxzQkFBc0IsRUFBQTtVQTlINUI7WUFrSU0sZ0JBQWdCLEVBQUE7WUFsSXRCO2NDaUJDLGlCQUFpQjtjQUNqQixjRHFIdUIsRUFBQTtZQXZJeEI7Y0EySVEsc0JBQXNCLEVBQUE7TUEzSTlCO1FBb0pJLDBDQUEwQztRQUMxQyx1QkFBdUIsRUFBQTtRQXJKM0I7VUF3SkssYUFBYTtVQUNiLHVCQUF1QjtVQUN2QixtQkFBbUIsRUFBQTtVQTFKeEI7WUE2Sk0sYUFBYSxFQUFBO1VBN0puQjtZQWlLTSxVQUFVO1lBQ1AsYUFBYTtZQUNiLHVCQUF1QjtZQUMxQixlQUFlO1lBQ2YsV0FBVztZQUNYLFlBQVk7WUFDWiw0QkFBNEI7WUFDNUIsa0JBQWtCO1lBQ2xCLGFBQWEsRUFBQTtVQXpLbkI7WUE2S00sZUFBZTtZQUNmLGtCQUFrQjtZQUNsQixXQUFXLEVBQUE7WUEvS2pCO2NDUUMsOEJBQThCO2NBQzlCLHFCQUFxQjtjQUNyQixpQkFBaUI7Y0FDakIsMklBQ2dFO2NEdUsxRCxnQkFBZ0IsRUFBQTtVQW5MdkI7WUF3TE0sdUJBQXVCO1lBQ3ZCLFdBQVc7WUFDWCxZQUFZO1lBQ1osWUFBWTtZQUNaLG9CQUFvQjtZQUNwQixrQkFBa0I7WUFDZixrQkFBa0IsRUFBQTtRQTlMM0I7VUFtTVEsa0JBQWtCO1VBQ2xCLGNBQWM7VUFDZCxnQkFBZ0IsRUFBQTtFQ3pNdEI7SURJRjtNQTRNRyxhQUFhLEVBQUEsRUFDYjtFQzNNRDtJREZGO01Ba05HLFdBQVcsRUFBQTtNQWxOZDtRQXFOSSxrQkFBa0I7UUFDZixZQUFZLEVBQUE7UUF0Tm5CO1VBeU5RLFlBQVk7VUFDZixnQkFBZ0I7VUFDaEIsTUFBTSxFQUFBO1VBM05YO1lBOE5NLGtCQUFrQjtZQUNmLFdBQVc7WUFDZCxZQUFZO1lBQ1osWUFBWSxFQUFBLEVBQ1pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0tSOndnaHRAMzAwOzUwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuOnJvb3Qge1xcclxcblxcdC0td3JhcFdpZHRoOiAxMjAwcHg7XFxyXFxuXFx0LS1ncmF5OiAjN2Y4YzhkO1xcclxcblxcdC0tZGVlcEdyYXk6ICM1MzVjNjg7XFxyXFxuXFx0LS1yZWQ6ICNmZjM4NWM7XFxyXFxuXFx0LS1ibHVlOiBsaWdodHNlYWdyZWVuO1xcclxcblxcdC0tZ3JlZW46ICMyM2MzODI7XFxyXFxuXFx0LS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luOiA1MHB4O1xcclxcblxcdC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nOiAzMHB4O1xcclxcblxcdC0tZGV0YWlsRm9udFNpemU6IHNtYWxsZXI7XFxyXFxuXFx0LS1ib3R0b21Cb3JkZXI6IDFweCBzb2xpZCAjZWNmMGYxO1xcclxcblxcdC0tYm9yZGVyUmFkaXVzOiAxMHB4O1xcclxcblxcdC0tY2FsZW5kYXJEYXlTaXplOiA0MHB4O1xcclxcblxcdC0tYm94U2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XFxyXFxufVxcclxcblxcclxcbi8vIEJyZWFrcG9pbnRzXFxyXFxuJGJyZWFrcG9pbnQtdGFibGV0OiA3NThweDtcXHJcXG4kYnJlYWtwb2ludC1kZXNrdG9wOiAxMDI0cHg7XFxyXFxuXFxyXFxuLkFDQ0VQVEVEIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tZ3JlZW4pICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5QRU5ESU5HLCAuQ09NUExFVEVEIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tZ3JheSkgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLlJFRlVTRUQsIC5DQU5DTEVEIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tcmVkKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgXFxcIi4vX2Jhc2VcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4vX21peGluc1xcXCI7XFxyXFxuXFxyXFxuaHRtbCwgYm9keSB7XFxyXFxuXFx0d2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi53cmFwIHtcXHJcXG5cXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcclxcblxcdC5tYWluX3dyYXAge1xcclxcblxcdFxcdHBhZGRpbmc6IDAgdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKTtcXHJcXG5cXHRcXHRtYXJnaW46IHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pIDA7XFxyXFxuXFx0ICAgIHdpZHRoOiA1MCU7XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0QGluY2x1ZGUgdGFibGV0IHtcXHJcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LnNlYXJjaF9yZXN1bHQge1xcclxcblxcdFxcdFxcdHBhZGRpbmctYm90dG9tOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpO1xcclxcblxcdFxcdFxcdGJvcmRlci1ib3R0b206IHZhcigtLWJvdHRvbUJvcmRlcik7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG5cXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHQuaGVhZGVyX3RpdGxlIHtcXHJcXG5cXHRcXHRcXHRcXHRmb250LXNpemU6IDIuNWVtO1xcclxcblxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHJcXG5cXHRcXHQucm9vbV9saXN0IHtcXHJcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHQucm9vbV9pdGVtIHtcXHJcXG5cXHRcXHRcXHQgICAgcGFkZGluZzogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAwO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlci10b3A6IHZhcigtLWJvdHRvbUJvcmRlcik7XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyLWJvdHRvbTogdmFyKC0tYm90dG9tQm9yZGVyKTtcXHJcXG5cXHRcXHRcXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHQuaXRlbV9sZWZ0X3dyYXAge1xcclxcblxcdFxcdFxcdFxcdFxcdGRpc3BsYXk6IGluaGVyaXQ7XFxyXFxuXFx0XFx0XFx0XFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdFxcdFxcdFxcdCAgICBmbGV4OiAwIDAgMzAwcHg7XFxyXFxuXFx0XFx0XFx0XFx0ICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0XFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHQuaXRlbV9sZWZ0IHtcXHJcXG5cXHRcXHRcXHRcXHQgICAgZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0dHJhbnNpdGlvbjogYWxsIGVhc2UgMC4zcztcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQuaW1hZ2VfYm94IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHR3aWR0aDogMzAwcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0aGVpZ2h0OiAyMDBweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRpbWcge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHQmOmhvdmVyIGkge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRpIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0d2lkdGg6IDI1cHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgIGhlaWdodDogMjVweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgbWFyZ2luOiAwIDVweDtcXHJcXG4gICBcXHRcXHRcXHRcXHRcXHRcXHRsaW5lLWhlaWdodDogMjVweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdHRvcDogODVweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRvcGFjaXR5OiAwLjU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Ym94LXNoYWRvdzogdmFyKC0tYm94U2hhZG93KTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjNzO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCY6aG92ZXIge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdG9wYWNpdHk6IDE7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0LmZhLWFuZ2xlLXJpZ2h0IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRyaWdodDowO1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHQuYm90dG9tX2J0bl93cmFwIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Ym90dG9tOiA3cHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdC5jaXJjbGVfbWFyayB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdG1hcmdpbjogMCAxcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0d2lkdGg6IDVweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRoZWlnaHQ6IDVweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdG9wYWNpdHk6IDAuNTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQmLm5vdyB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0b3BhY2l0eTogMTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0Lml0ZW1fcmlnaHQge1xcclxcblxcdFxcdFxcdFxcdFxcdG1hcmdpbi1sZWZ0OiB2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0LnJvb21fYWRkcmVzcyB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IHZhcigtLWRlZXBHcmF5KTtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0LnJvb21fbmFtZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Ym9yZGVyLWJvdHRvbTogdmFyKC0tYm90dG9tQm9yZGVyKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbikvMik7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpLzIpO1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHQucm9vbV9mYWNpbGl0eSxcXHJcXG5cXHRcXHRcXHRcXHRcXHQucm9vbV9hbWVuaXR5IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogdmFyKC0tZGVlcEdyYXkpO1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHQucmF0aW5nIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRtYXJnaW4tdG9wOiBhdXRvO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdC5yb29tX3Nob3J0X2luZm8ge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdC5zdGFyIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRAaW5jbHVkZSBzdGFyKDFlbSk7XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdC5yYXRpbmdfY291bnQge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiB2YXIoLS1kZWVwR3JheSk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHQucGFnaW5hdGlvbiB7XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAwO1xcclxcblxcdFxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdC5wYWdlX2J0bnMge1xcclxcblxcdFxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHQmID4gKiB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0bWFyZ2luOiAwIDhweDtcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0YnV0dG9uIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRhbGw6IHVuc2V0O1xcclxcblxcdFxcdFxcdFxcdFxcdCAgICBkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdCAgICBcXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0d2lkdGg6IDI1cHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0aGVpZ2h0OiAyNXB4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGJveC1zaGFkb3c6IHZhcigtLWJveFNoYWRvdyk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdG1hcmdpbjogMCA1cHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdC5wYWdlX251bTpub3QoLmN1cl9wYWdlKSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR3aWR0aDogMTBweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRAaW5jbHVkZSB1bmRlcmxpbmU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0bGluZS1oZWlnaHQ6IDEuNTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdC5wYWdlX251bS5jdXJfcGFnZSB7XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0d2lkdGg6IDI1cHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0aGVpZ2h0OiAyNXB4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRib3JkZXI6IDAgIWltcG9ydGFudDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdC5wYWdlX2RldGFpbCB7XFxyXFxuXFx0XFx0XFx0XFx0ICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHQgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0XFx0XFx0XFx0ICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcdEBpbmNsdWRlIHRhYmxldCB7XFxyXFxuXFx0XFx0Lm1hcCB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdEBpbmNsdWRlIGRlc2t0b3Age1xcclxcblxcdFxcdC5tYXBfd3JhcHBlciB7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0Lm1hcF9yZWxhdGl2ZSB7XFxyXFxuXFx0XFx0XFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBcXHRcXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0Lm1hcF9zdGlja3kge1xcclxcbiAgICBcXHRcXHRcXHRcXHRoZWlnaHQ6IDk4dmg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0cG9zaXRpb246IHN0aWNreTtcXHJcXG5cXHRcXHRcXHRcXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0Lm1hcCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdFxcdFxcdFxcdCAgICB3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0cmlnaHQ6IC0zMHB4O1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcdFxcdFxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCBcXFwiLi9fYmFzZVxcXCI7XFxyXFxuXFxyXFxuQG1peGluIHRhYmxldCB7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogI3skYnJlYWtwb2ludC1kZXNrdG9wIC0gMXB4fSkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGRlc2t0b3Age1xcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGJyZWFrcG9pbnQtZGVza3RvcH0pIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiB1bmRlcmxpbmUge1xcclxcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDAuODU7XFxyXFxuXFx0dGV4dC1zaGFkb3c6IDFweCAxcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpLCAxcHggLTFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvciksXFxyXFxuXFx0XFx0LTFweCAxcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpLCAtMXB4IC0xcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpO1xcclxcblxcdEBjb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gc3RhcigkZm9udC1zaXplKSB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLXJlZCk7XFxyXFxuXFx0Zm9udC1zaXplOiAkZm9udC1zaXplO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gcmVzZXJ2YXRpb25faXRlbSB7XFxyXFxuXFx0ZmxleDogMSAxIDUwJTtcXHJcXG5cXHRwYWRkaW5nOiA1cHggMTBweDtcXHJcXG5cXHRmb250LXNpemU6IDAuOXJlbTtcXHJcXG5cXHRoZWlnaHQ6IDUwcHg7XFxyXFxuXFxyXFxuXFx0LnJlc2VydmF0aW9uX2Rpc3BsYXkge1xcclxcblxcdFxcdGNvbG9yOiB2YXIoLS1ncmF5KTtcXHJcXG5cXHRcXHRmb250LXdlaWdodDogMzAwO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGZhY2lsaXR5X3J1bGVfaXRlbSB7XFxyXFxuXFx0bWFyZ2luOiAxNXB4IDA7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBmYWNpbGl0eV9ydWxlX2ljb24ge1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHR3aWR0aDogNDBweDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBmYWNpbGl0eV9ydWxlX2Rlc2NyaXB0aW9uIHtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMTVweDtcXHJcXG5cXHRmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gY2hhbmdlSGVhZGVyQ29sb3Ige1xcclxcblxcdC5ib2R5X2hlYWRlciB1bCAuYWlyYm5iX2ljb24sXFxyXFxuXFx0LmJvZHlfaGVhZGVyIHVsIC5oZWFkZXJfcHJvZmlsZSAucHJvZmlsZV9pbWcge1xcclxcblxcdFxcdGNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG5cXHR9XFxyXFxuXFx0XFxyXFxuXFx0LmJvZHlfaGVhZGVyIHVsIC5yb29tX3NlYXJjaCBpIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgXCIuLi9zY3NzL3Jvb21MaXN0LnNjc3NcIjtcclxuXHJcbmNvbnN0IG9uQ2xpY2tJdGVtID0gKHt0YXJnZXR9KSA9PiB7XHJcblx0Y29uc3QgaXRlbSA9IHRhcmdldC5jbG9zZXN0KFwiLnJvb21faXRlbVwiKTtcclxuXHRpZiAoaXRlbSA9PSBudWxsKSByZXR1cm47XHJcblxyXG5cdGlmICh0YXJnZXQubWF0Y2hlcyhcIi5mYS1hbmdsZS1sZWZ0XCIpIHx8IHRhcmdldC5tYXRjaGVzKFwiLmZhLWFuZ2xlLXJpZ2h0XCIpKSB7XHJcblx0XHRjb25zdCBpbWFnZXMgPSBpdGVtLnF1ZXJ5U2VsZWN0b3JBbGwoXCIucm9vbV9waG90b1wiKTtcclxuXHRcdGNvbnN0IGltYWdlQ291bnQgPSBpbWFnZXMubGVuZ3RoO1xyXG5cdFx0Y29uc3QgaW1hZ2VXcmFwID0gaXRlbS5xdWVyeVNlbGVjdG9yKFwiLml0ZW1fbGVmdFwiKTtcclxuXHRcdGNvbnN0IG1hcmsgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoXCIuY2lyY2xlX21hcmsubm93XCIpO1xyXG5cdFx0bGV0IGltYWdlSWR4O1xyXG5cdFx0XHJcblx0XHRjb25zdCBzaG93U2xpZGVzID0gbiA9PiB7XHJcblx0XHQgICAgbGV0IGltYWdlSW5kZXggPSBuO1xyXG5cdFx0ICAgIGlmIChpbWFnZUluZGV4ID09IC0xKSB7XHJcblx0XHQgICAgICAgIGltYWdlSW5kZXggPSBpbWFnZUNvdW50IC0gMTtcclxuXHRcdCAgICB9IGVsc2UgaWYgKGltYWdlSW5kZXggPT09IGltYWdlQ291bnQpIHtcclxuXHRcdCAgICAgICAgaW1hZ2VJbmRleCA9IDA7XHJcblx0XHQgICAgfVxyXG5cdFx0ICAgIGltYWdlV3JhcC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkey0zMDAgKiBpbWFnZUluZGV4fXB4KWA7XHJcblx0XHRcdHJldHVybiBpbWFnZUluZGV4O1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgbWFyay5wYXJlbnROb2RlLmNoaWxkRWxlbWVudENvdW50OyBpKyspIHtcclxuXHRcdFx0aWYgKG1hcmsucGFyZW50Tm9kZS5jaGlsZHJlbltpXSA9PT0gbWFyaykge1xyXG5cdFx0XHRcdGltYWdlSWR4ID0gaTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpZih0YXJnZXQubWF0Y2hlcyhcIi5mYS1hbmdsZS1sZWZ0XCIpKSBpbWFnZUlkeCA9IHNob3dTbGlkZXMoLS1pbWFnZUlkeCk7XHJcblx0XHRpZih0YXJnZXQubWF0Y2hlcyhcIi5mYS1hbmdsZS1yaWdodFwiKSkgaW1hZ2VJZHggPSBzaG93U2xpZGVzKCsraW1hZ2VJZHgpO1xyXG5cdFx0bWFyay5jbGFzc0xpc3QucmVtb3ZlKFwibm93XCIpO1xyXG5cdFx0bWFyay5wYXJlbnROb2RlLmNoaWxkcmVuW2ltYWdlSWR4XS5jbGFzc0xpc3QuYWRkKFwibm93XCIpO1x0XHRcclxuXHR9IGVsc2Uge1xyXG5cdFx0Y29uc3Qgcm9vbUlkID0gaXRlbS5kYXRhc2V0LnJvb21pZDtcclxuXHRcdGxvY2F0aW9uLmhyZWYgPSBgL3Jvb20vJHtyb29tSWR9YDtcdFx0XHJcblx0fVxyXG59XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb21MaXN0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrSXRlbSk7XHJcblxyXG5cclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8g7Lm07Lm07JikIOyngOuPhCBBUElcclxuY29uc3QgZGF0YSA9IHtcclxuXHRhZGRyZXNzOiBbXSxcclxuXHRuYW1lOiBbXSxcclxuXHRwaG90bzogW10sXHJcblx0cm9vbUlkOiBbXSxcclxufTtcclxuZGF0YS5hZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yb29tX2FkZHJlc3NcIik7XHJcbmRhdGEubmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucm9vbV9uYW1lXCIpO1xyXG5kYXRhLnBob3RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5yb29tX3Bob3RvXCIpO1xyXG5kYXRhLnJvb21JZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucm9vbV9pdGVtXCIpO1xyXG5cclxudmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKTsgLy/sp4Drj4Trpbwg64u07J2EIOyYgeyXreydmCBET00g66CI7Y2865+w7IqkXHJcbnZhciBvcHRpb25zID0geyAvL+yngOuPhOulvCDsg53shLHtlaAg65WMIO2VhOyalO2VnCDquLDrs7gg7Ji17IWYXHJcblx0Y2VudGVyOiBuZXcga2FrYW8ubWFwcy5MYXRMbmcoMzMuNDUwNzAxLCAxMjYuNTcwNjY3KSwgLy8g7KeA64+E7J2YIOykkeyLrOyijO2RnFxyXG5cdGxldmVsOiA3IC8v7KeA64+E7J2YIOugiOuyqCjtmZXrjIAsIOy2leyGjCDsoJXrj4QpXHJcbn07XHJcblx0XHJcbnZhciBtYXAgPSBuZXcga2FrYW8ubWFwcy5NYXAoY29udGFpbmVyLCBvcHRpb25zKTsgLy/sp4Drj4Qg7IOd7ISxIOuwjyDqsJ3ssrQg66as7YS0XHJcbnZhciBnZW9jb2RlciA9IG5ldyBrYWthby5tYXBzLnNlcnZpY2VzLkdlb2NvZGVyKCk7IC8vIOyjvOyGjC3sooztkZwg67OA7ZmYIOqwneyytOulvCDsg53shLHtlanri4jri6RcclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5hZGRyZXNzLmxlbmd0aDsgaSsrKSB7XHJcblx0Y29uc3QgYWRkcmVzcyA9IGRhdGEuYWRkcmVzc1tpXS50ZXh0Q29udGVudDtcclxuXHRjb25zdCBuYW1lID0gZGF0YS5uYW1lW2ldLnRleHRDb250ZW50O1xyXG5cdGNvbnN0IHBob3RvID0gZGF0YS5waG90b1tpXS5zcmM7XHJcblx0Y29uc3Qgcm9vbUlkID0gZGF0YS5yb29tSWRbaV0uZGF0YXNldC5yb29taWQ7XHJcblx0XHJcblx0Z2VvY29kZXIuYWRkcmVzc1NlYXJjaChhZGRyZXNzLCBmdW5jdGlvbihyZXN1bHQsIHN0YXR1cykge1xyXG5cclxuXHQgICAgLy8g7KCV7IOB7KCB7Jy866GcIOqygOyDieydtCDsmYTro4zrkJDsnLzrqbQgXHJcblx0ICAgIGlmIChzdGF0dXMgPT09IGtha2FvLm1hcHMuc2VydmljZXMuU3RhdHVzLk9LKSB7XHJcblx0XHJcblx0ICAgICAgICB2YXIgY29vcmRzID0gbmV3IGtha2FvLm1hcHMuTGF0TG5nKHJlc3VsdFswXS55LCByZXN1bHRbMF0ueCk7XHJcblx0XHJcblx0ICAgICAgICAvLyDqsrDqs7zqsJLsnLzroZwg67Cb7J2AIOychOy5mOulvCDrp4jsu6TroZwg7ZGc7Iuc7ZWp64uI64ukXHJcblx0ICAgICAgICB2YXIgbWFya2VyID0gbmV3IGtha2FvLm1hcHMuTWFya2VyKHtcclxuXHQgICAgICAgICAgICBtYXA6IG1hcCxcclxuXHQgICAgICAgICAgICBwb3NpdGlvbjogY29vcmRzLFxyXG5cdFx0XHRcdGNsaWNrYWJsZTogdHJ1ZVxyXG5cdCAgICAgICAgfSk7XHJcblx0XHJcblx0XHRcdGNvbnN0IGNvbnRlbnQgPSBgPGRpdiBzdHlsZT1cIndpZHRoOjIwMHB4O3RleHQtYWxpZ246Y2VudGVyO1wiPlxyXG5cdFx0XHQ8YSBocmVmPVwiL3Jvb20vJHtyb29tSWR9XCI+XHJcblx0XHRcdDxpbWcgc3JjPVwiJHtwaG90b31cIiBzdHlsZT1cIndpZHRoOjEwMCU7IGhlaWdodDoyMDBweDtcIj5cclxuXHRcdFx0PHA+JHtuYW1lfTwvcD5cclxuXHRcdFx0PC9hPlxyXG5cdFx0XHQ8L2Rpdj5gXHJcblx0XHJcblx0XHRcdC8vIOyduO2PrOyciOuPhOyasOuhnCDsnqXshozsl5Ag64yA7ZWcIOyEpOuqheydhCDtkZzsi5ztlanri4jri6RcclxuXHRcdFx0dmFyIGluZm93aW5kb3cgPSBuZXcga2FrYW8ubWFwcy5JbmZvV2luZG93KHtcclxuXHRcdFx0ICAgIGNvbnRlbnQ6IGNvbnRlbnQsXHJcblx0XHRcdFx0cmVtb3ZhYmxlOiB0cnVlXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0Ly8g66eI7Luk7JeQIO2BtOumreydtOuypO2KuOulvCDrk7HroZ3tlanri4jri6RcclxuXHRcdFx0a2FrYW8ubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXIsICdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQgICAgICAvLyDrp4jsu6Qg7JyE7JeQIOyduO2PrOyciOuPhOyasOulvCDtkZzsi5ztlanri4jri6RcclxuXHRcdFx0ICAgICAgaW5mb3dpbmRvdy5vcGVuKG1hcCwgbWFya2VyKTsgIFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0aWYgKGkgPT09IDApIHtcclxuXHRcdCAgICAgICAgLy8g7KeA64+E7J2YIOykkeyLrOydhCDqsrDqs7zqsJLsnLzroZwg67Cb7J2AIOychOy5mOuhnCDsnbTrj5nsi5ztgrXri4jri6RcclxuXHRcdCAgICAgICAgbWFwLnNldENlbnRlcihjb29yZHMpO1x0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHR9IFxyXG5cdH0pO1xyXG59XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcm9vbUxpc3Quc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==