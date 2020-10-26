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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/reservationForm.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./scss/reservationForm.scss":
/*!******************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./scss/reservationForm.scss ***!
  \******************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, ":root {\n  --wrapWidth: 1200px;\n  --gray: #7f8c8d;\n  --deepGray: #535c68;\n  --red: #ff385c;\n  --blue: lightseagreen;\n  --green: #23c382;\n  --containerHorizontalMargin: 50px;\n  --containerVerticalPadding: 30px;\n  --detailFontSize: smaller;\n  --bottomBorder: 1px solid #ecf0f1;\n  --borderRadius: 10px;\n  --calendarDaySize: 40px;\n  --boxShadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.ACCEPTED {\n  color: var(--green) !important; }\n\n.PENDING, .COMPLETED {\n  color: var(--gray) !important; }\n\n.REFUSED, .CANCLED {\n  color: var(--red) !important; }\n\n:root {\n  --wrapWidth: 1200px;\n  --gray: #7f8c8d;\n  --deepGray: #535c68;\n  --red: #ff385c;\n  --blue: lightseagreen;\n  --green: #23c382;\n  --containerHorizontalMargin: 50px;\n  --containerVerticalPadding: 30px;\n  --detailFontSize: smaller;\n  --bottomBorder: 1px solid #ecf0f1;\n  --borderRadius: 10px;\n  --calendarDaySize: 40px;\n  --boxShadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.ACCEPTED {\n  color: var(--green) !important; }\n\n.PENDING, .COMPLETED {\n  color: var(--gray) !important; }\n\n.REFUSED, .CANCLED {\n  color: var(--red) !important; }\n\n.main_wrap {\n  margin: 0 auto;\n  max-width: var(--wrapWidth);\n  padding: var(--containerVerticalPadding) 0; }\n  .main_wrap .main_header {\n    margin: 0 var(--containerHorizontalMargin); }\n    .main_wrap .main_header i {\n      display: block;\n      cursor: pointer; }\n    .main_wrap .main_header .main_title {\n      font-weight: 700;\n      padding: var(--containerVerticalPadding) 0; }\n  .main_wrap .main_main {\n    display: flex;\n    justify-content: space-between; }\n    .main_wrap .main_main .main_left {\n      width: 50%;\n      margin: 0 var(--containerHorizontalMargin); }\n      .main_wrap .main_main .main_left .advise_wrap {\n        padding-bottom: var(--containerVerticalPadding);\n        border-bottom: var(--bottomBorder);\n        display: flex; }\n        .main_wrap .main_main .main_left .advise_wrap .advise {\n          color: var(--deepGray);\n          font-weight: 300; }\n          .main_wrap .main_main .main_left .advise_wrap .advise strong {\n            color: black; }\n        .main_wrap .main_main .main_left .advise_wrap i {\n          padding: 20px;\n          color: var(--red); }\n      .main_wrap .main_main .main_left .reservation_form .reservation_info_wrap {\n        padding: var(--containerVerticalPadding) 0;\n        border-bottom: var(--bottomBorder);\n        color: var(--deepGray); }\n        .main_wrap .main_main .main_left .reservation_form .reservation_info_wrap .reservation_info_title {\n          color: black; }\n        .main_wrap .main_main .main_left .reservation_form .reservation_info_wrap .info_name {\n          display: block;\n          margin-top: calc(var(--containerHorizontalMargin)/2);\n          margin-bottom: 10px;\n          color: black; }\n        .main_wrap .main_main .main_left .reservation_form .reservation_info_wrap .info_value {\n          all: unset;\n          font-weight: 300;\n          width: 90px; }\n          .main_wrap .main_main .main_left .reservation_form .reservation_info_wrap .info_value:last-child {\n            width: 10px; }\n      .main_wrap .main_main .main_left .reservation_form .refund_notice {\n        padding: var(--containerVerticalPadding);\n        border-bottom: var(--bottomBorder);\n        position: relative; }\n        .main_wrap .main_main .main_left .reservation_form .refund_notice::before {\n          content: \"\";\n          position: absolute;\n          top: 35px;\n          left: 0px;\n          width: 9px;\n          background-color: #FFAF0F;\n          height: 80%; }\n        .main_wrap .main_main .main_left .reservation_form .refund_notice .refund_description, .main_wrap .main_main .main_left .reservation_form .refund_notice .refund_small {\n          margin: calc(var(--containerHorizontalMargin)/2) 0;\n          color: var(--deepGray);\n          font-weight: 300; }\n          .main_wrap .main_main .main_left .reservation_form .refund_notice .refund_description strong, .main_wrap .main_main .main_left .reservation_form .refund_notice .refund_small strong {\n            color: black; }\n      .main_wrap .main_main .main_left .reservation_form .confirm_notice {\n        padding: var(--containerVerticalPadding) 0;\n        border-bottom: var(--bottomBorder);\n        display: flex;\n        justify-content: space-between; }\n        .main_wrap .main_main .main_left .reservation_form .confirm_notice i {\n          font-size: 1.5rem;\n          padding-right: 15px; }\n        .main_wrap .main_main .main_left .reservation_form .confirm_notice .confirm_description {\n          font-weight: 300;\n          color: var(-deepGray); }\n          .main_wrap .main_main .main_left .reservation_form .confirm_notice .confirm_description strong {\n            color: black; }\n      .main_wrap .main_main .main_left .reservation_form .reserve_btn_wrap {\n        padding: var(--containerVerticalPadding) 0; }\n        .main_wrap .main_main .main_left .reservation_form .reserve_btn_wrap small {\n          font-weight: 300;\n          color: var(--deepGray);\n          font-size: 12px; }\n          .main_wrap .main_main .main_left .reservation_form .reserve_btn_wrap small span {\n            font-weight: 500;\n            color: mediumslateblue;\n            border-bottom: 1px solid black;\n            display: inline-block;\n            line-height: 0.85;\n            text-shadow: 1px 1px var(--backgroudColor), 1px -1px var(--backgroudColor), -1px 1px var(--backgroudColor), -1px -1px var(--backgroudColor); }\n        .main_wrap .main_main .main_left .reservation_form .reserve_btn_wrap .reserve_btn {\n          border: 0;\n          outline: none;\n          width: 100%;\n          padding: 10px 30px;\n          background-color: var(--red);\n          color: white;\n          margin: 10px 0;\n          border-radius: var(--borderRadius);\n          text-align: center;\n          font-weight: 700;\n          cursor: pointer;\n          font-size: 16px; }\n    .main_wrap .main_main .main_right {\n      width: 50%;\n      position: relative;\n      padding-top: var(--containerVerticalPadding);\n      padding-bottom: calc(var(--containerVerticalPadding) * 2);\n      margin: 0 var(--containerHorizontalMargin); }\n      .main_wrap .main_main .main_right .reservation_wrap {\n        position: sticky;\n        top: 80px;\n        box-shadow: var(--boxShadow);\n        border-radius: var(--borderRadius);\n        padding: 20px; }\n        .main_wrap .main_main .main_right .reservation_wrap .reservation_room {\n          display: flex;\n          padding-bottom: var(--containerVerticalPadding);\n          border-bottom: var(--bottomBorder); }\n          .main_wrap .main_main .main_right .reservation_wrap .reservation_room .room_img {\n            width: 130px;\n            height: 100px;\n            border-radius: var(--borderRadius);\n            background-size: cover;\n            margin-right: 20px;\n            background-position: center center; }\n          .main_wrap .main_main .main_right .reservation_wrap .reservation_room .room_info {\n            font-weight: 300;\n            font-size: 12px; }\n            .main_wrap .main_main .main_right .reservation_wrap .reservation_room .room_info .room_spec {\n              color: var(--deepGray); }\n        .main_wrap .main_main .main_right .reservation_wrap .reservation_price {\n          padding-top: var(--containerVerticalPadding); }\n          .main_wrap .main_main .main_right .reservation_wrap .reservation_price .price_title {\n            font-weight: 700;\n            margin-bottom: 10px; }\n          .main_wrap .main_main .main_right .reservation_wrap .reservation_price .price_item,\n          .main_wrap .main_main .main_right .reservation_wrap .reservation_price .total_price {\n            display: flex;\n            justify-content: space-between;\n            padding-top: calc(var(--containerVerticalPadding) / 2); }\n            .main_wrap .main_main .main_right .reservation_wrap .reservation_price .price_item .price_name,\n            .main_wrap .main_main .main_right .reservation_wrap .reservation_price .total_price .price_name {\n              text-align: left; }\n            .main_wrap .main_main .main_right .reservation_wrap .reservation_price .price_item .price_value,\n            .main_wrap .main_main .main_right .reservation_wrap .reservation_price .total_price .price_value {\n              text-align: right; }\n            .main_wrap .main_main .main_right .reservation_wrap .reservation_price .price_item .underline,\n            .main_wrap .main_main .main_right .reservation_wrap .reservation_price .total_price .underline {\n              border-bottom: 1px solid black;\n              display: inline-block;\n              line-height: 0.85;\n              text-shadow: 1px 1px var(--backgroudColor), 1px -1px var(--backgroudColor), -1px 1px var(--backgroudColor), -1px -1px var(--backgroudColor); }\n          .main_wrap .main_main .main_right .reservation_wrap .reservation_price .total_price {\n            font-weight: 700; }\n", "",{"version":3,"sources":["webpack://scss/__base.scss","webpack://scss/reservationForm.scss","webpack://scss/__mixins.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;700&display=swap\");\r\n:root {\r\n\t--wrapWidth: 1200px;\r\n\t--gray: #7f8c8d;\r\n\t--deepGray: #535c68;\r\n\t--red: #ff385c;\r\n\t--blue: lightseagreen;\r\n\t--green: #23c382;\r\n\t--containerHorizontalMargin: 50px;\r\n\t--containerVerticalPadding: 30px;\r\n\t--detailFontSize: smaller;\r\n\t--bottomBorder: 1px solid #ecf0f1;\r\n\t--borderRadius: 10px;\r\n\t--calendarDaySize: 40px;\r\n\t--boxShadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n}\r\n\r\n// Breakpoints\r\n$breakpoint-tablet: 758px;\r\n$breakpoint-desktop: 1024px;\r\n\r\n.ACCEPTED {\r\n\tcolor: var(--green) !important;\r\n}\r\n\r\n.PENDING, .COMPLETED {\r\n\tcolor: var(--gray) !important;\r\n}\r\n\r\n.REFUSED, .CANCLED {\r\n\tcolor: var(--red) !important;\r\n}\r\n","@import \"./_base\";\r\n@import \"./_mixins\";\r\n\r\n.main_wrap {\r\n\tmargin: 0 auto;\r\n\tmax-width: var(--wrapWidth);\r\n\tpadding: var(--containerVerticalPadding) 0;\r\n\t\r\n\t.main_header {\r\n\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\t\t\r\n\t\ti {\r\n\t\t\tdisplay: block;\r\n\t\t\tcursor: pointer;\r\n\t\t}\r\n\t\t\r\n\t\t.main_title {\r\n\t\t\tfont-weight: 700;\r\n\t\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\t}\r\n\t}\r\n\t\r\n\t.main_main {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\t\r\n\t\t.main_left {\r\n\t\t\twidth: 50%;\r\n\t\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\t\t\t\r\n\t\t\t.advise_wrap {\r\n\t\t\t\tpadding-bottom: var(--containerVerticalPadding);\r\n\t\t\t\tborder-bottom: var(--bottomBorder);\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\t\r\n\t\t\t\t.advise {\r\n\t\t\t\t\tcolor: var(--deepGray);\r\n\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\t\r\n\t\t\t\t\tstrong {\r\n\t\t\t\t\t\tcolor: black;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\ti {\r\n\t\t\t\t\tpadding: 20px;\r\n\t\t\t\t\tcolor: var(--red);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t.reservation_form {\r\n\t\t\t\t\r\n\t\t\t\t.reservation_info_wrap {\r\n\t\t\t\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\t\t\t\tborder-bottom: var(--bottomBorder);\r\n\t\t\t\t\tcolor: var(--deepGray);\r\n\t\t\t\t\t\r\n\t\t\t\t\t.reservation_info_title {\r\n\t\t\t\t\t\tcolor: black;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.info_name {\r\n\t\t\t\t\t\tdisplay: block;\r\n\t\t\t\t\t\tmargin-top: calc(var(--containerHorizontalMargin)/2);\r\n\t\t\t\t\t\tmargin-bottom: 10px;\r\n\t\t\t\t\t\tcolor: black;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.info_value {\r\n\t\t\t\t\t\tall: unset;\r\n\t\t\t\t\t\tfont-weight: 300;\t\r\n\t\t\t\t\t\twidth: 90px;\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t&:last-child {\r\n\t\t\t\t\t\t\twidth: 10px;\r\n\t\t\t\t\t\t}\t\t\r\n\t\t\t\t\t}\t\t\t\t\t\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t.refund_notice {\r\n\t\t\t\t\tpadding: var(--containerVerticalPadding);\r\n\t\t\t\t\tborder-bottom: var(--bottomBorder);\r\n\t\t\t\t\tposition: relative;\r\n\t\t\t\t\t\r\n\t\t\t\t\t&::before {\r\n\t\t\t\t    \tcontent: \"\";\r\n\t\t\t\t\t    position: absolute;\r\n\t\t\t\t\t    top: 35px;\r\n\t\t\t\t\t    left: 0px;\r\n\t\t\t\t\t    width: 9px;\r\n\t\t\t\t\t    background-color: #FFAF0F;\r\n\t\t\t\t\t    height: 80%;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.refund_description, .refund_small {\r\n\t\t\t\t\t\tmargin: calc(var(--containerHorizontalMargin)/2) 0;\r\n\t\t\t\t\t\tcolor: var(--deepGray);\r\n\t\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\tstrong {\r\n\t\t\t\t\t\t\tcolor: black;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t.confirm_notice {\r\n\t\t\t\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\t\t\t\tborder-bottom: var(--bottomBorder);\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\tjustify-content: space-between;\r\n\t\t\t\t\t\r\n\t\t\t\t\ti {\r\n\t\t\t\t\t\tfont-size: 1.5rem;\r\n\t\t\t\t\t    padding-right: 15px;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.confirm_description {\r\n\t\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\t\tcolor: var(-deepGray);\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\tstrong {\r\n\t\t\t\t\t\t\tcolor: black;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t.reserve_btn_wrap {\r\n\t\t\t\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\t\t\t\t\r\n\t\t\t\t\tsmall {\r\n\t\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\t\tcolor: var(--deepGray);\r\n\t\t\t\t\t\tfont-size: 12px;\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\tspan {\r\n\t\t\t\t\t\t\tfont-weight: 500;\r\n\t\t\t\t\t\t\tcolor: mediumslateblue;\r\n\t\t\t\t\t\t\t@include underline;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.reserve_btn {\r\n\t\t\t\t\t\tborder: 0;\r\n\t\t\t\t\t\toutline: none;\r\n\t\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\t\tpadding: 10px 30px;\r\n\t\t\t\t\t\tbackground-color: var(--red);\r\n\t\t\t\t\t\tcolor: white;\r\n\t\t\t\t\t\tmargin: 10px 0;\r\n\t\t\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\t\t\ttext-align: center;\r\n\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\tfont-size: 16px;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\t.main_right {\r\n\t\t\twidth: 50%;\r\n\t\t\tposition: relative;\r\n\t\t\tpadding-top: var(--containerVerticalPadding);\r\n\t\t\tpadding-bottom: calc(var(--containerVerticalPadding) * 2);\r\n\t\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\t\t\t\r\n\t\t\t.reservation_wrap {\r\n\t\t\t\tposition: sticky;\r\n\t\t\t\ttop: 80px;\r\n\t\t\t\tbox-shadow: var(--boxShadow);\r\n\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\tpadding: 20px;\r\n\t\t\t\t\r\n\t\t\t\t.reservation_room {\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\tpadding-bottom: var(--containerVerticalPadding);\r\n\t\t\t\t\tborder-bottom: var(--bottomBorder);\r\n\t\t\t\t\t\r\n\t\t\t\t\t.room_img {\r\n\t\t\t\t\t\twidth: 130px;\r\n\t\t\t\t\t\theight: 100px;\r\n\t\t\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\t\t\tbackground-size: cover;\r\n\t\t\t\t\t\tmargin-right: 20px;\r\n\t\t\t\t\t\tbackground-position: center center;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.room_info {\r\n\t\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\t\tfont-size: 12px;\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t.room_spec {\r\n\t\t\t\t\t\t\tcolor: var(--deepGray);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t.reservation_price {\r\n\t\t\t\t\tpadding-top: var(--containerVerticalPadding);\r\n\t\t\t\t\t\r\n\t\t\t\t\t.price_title {\r\n\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t\tmargin-bottom: 10px;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.price_item,\r\n\t\t\t\t\t.total_price {\r\n\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\tjustify-content: space-between;\r\n\t\t\t\t\t\tpadding-top: calc(var(--containerVerticalPadding) / 2);\r\n\r\n\t\t\t\t\t\t.price_name {\r\n\t\t\t\t\t\t\ttext-align: left;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.price_value {\r\n\t\t\t\t\t\t\ttext-align: right;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t.underline {\r\n\t\t\t\t\t\t\t@include underline;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.total_price {\r\n\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}","@import \"./_base\";\r\n\r\n@mixin tablet {\r\n  @media (max-width: #{$breakpoint-desktop - 1px}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin desktop {\r\n  @media (min-width: #{$breakpoint-desktop}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin underline {\r\n\tborder-bottom: 1px solid black;\r\n\tdisplay: inline-block;\r\n\tline-height: 0.85;\r\n\ttext-shadow: 1px 1px var(--backgroudColor), 1px -1px var(--backgroudColor),\r\n\t\t-1px 1px var(--backgroudColor), -1px -1px var(--backgroudColor);\r\n\t@content;\r\n}\r\n\r\n@mixin star($font-size) {\r\n\tcolor: var(--red);\r\n\tfont-size: $font-size;\r\n}\r\n\r\n@mixin reservation_item {\r\n\tflex: 1 1 50%;\r\n\tpadding: 5px 10px;\r\n\tfont-size: 0.9rem;\r\n\theight: 50px;\r\n\r\n\t.reservation_display {\r\n\t\tcolor: var(--gray);\r\n\t\tfont-weight: 300;\r\n\t}\r\n}\r\n\r\n@mixin facility_rule_item {\r\n\tmargin: 15px 0;\r\n}\r\n\r\n@mixin facility_rule_icon {\r\n\tfont-size: 20px;\r\n\twidth: 40px;\r\n\ttext-align: center;\r\n}\r\n\r\n@mixin facility_rule_description {\r\n\tmargin-left: 15px;\r\n\tfont-weight: 300;\r\n}\r\n\r\n@mixin changeHeaderColor {\r\n\t.body_header ul .airbnb_icon,\r\n\t.body_header ul .header_profile .profile_img {\r\n\t\tcolor: var(--blue);\r\n\t}\r\n\t\r\n\t.body_header ul .room_search i {\r\n\t\tbackground-color: var(--blue);\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./js/reservationForm.js":
/*!*******************************!*\
  !*** ./js/reservationForm.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_reservationForm_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/reservationForm.scss */ "./scss/reservationForm.scss");
/* harmony import */ var _scss_reservationForm_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_reservationForm_scss__WEBPACK_IMPORTED_MODULE_0__);


document.querySelector("#backIcon").addEventListener("click", () => location.href = location.pathname.match(/.*room\/[\d]+/)[0]);

/***/ }),

/***/ "./scss/reservationForm.scss":
/*!***********************************!*\
  !*** ./scss/reservationForm.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./reservationForm.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./scss/reservationForm.scss");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9yZXNlcnZhdGlvbkZvcm0uc2NzcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL2pzL3Jlc2VydmF0aW9uRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL3Jlc2VydmF0aW9uRm9ybS5zY3NzPzhlYWMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUM0RjtBQUM1Riw4QkFBOEIsbUZBQTJCO0FBQ3pELDhCQUE4QixRQUFT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LFdBQVcsWUFBWSxhQUFhLGFBQWEsWUFBWSxXQUFXLFlBQVksa0JBQWtCLEtBQUssa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sa0JBQWtCLE9BQU8sVUFBVSxZQUFZLGtCQUFrQixNQUFNLGlCQUFpQixNQUFNLFVBQVUsZUFBZSxNQUFNLFlBQVksa0JBQWtCLE1BQU0sV0FBVyxpQkFBaUIsT0FBTyxXQUFXLGlCQUFpQixPQUFPLGFBQWEsYUFBYSxnQkFBZ0IsT0FBTyxhQUFhLGtCQUFrQixPQUFPLGdCQUFnQixPQUFPLFdBQVcsaUJBQWlCLE9BQU8sYUFBYSxhQUFhLGtCQUFrQixPQUFPLGdCQUFnQixPQUFPLFdBQVcsWUFBWSxhQUFhLGdCQUFnQixPQUFPLFdBQVcsWUFBWSxnQkFBZ0IsT0FBTyxnQkFBZ0IsT0FBTyxhQUFhLGFBQWEsa0JBQWtCLE9BQU8sV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksZ0JBQWdCLE9BQU8sYUFBYSxhQUFhLGtCQUFrQixPQUFPLGdCQUFnQixPQUFPLGFBQWEsYUFBYSxXQUFXLGlCQUFpQixPQUFPLGFBQWEsaUJBQWlCLE9BQU8sYUFBYSxrQkFBa0IsT0FBTyxnQkFBZ0IsT0FBTyxrQkFBa0IsT0FBTyxhQUFhLGFBQWEsZ0JBQWdCLE9BQU8sYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGtCQUFrQixPQUFPLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxlQUFlLE9BQU8sV0FBVyxZQUFZLGFBQWEsYUFBYSxrQkFBa0IsT0FBTyxhQUFhLFdBQVcsWUFBWSxhQUFhLGdCQUFnQixPQUFPLFdBQVcsWUFBWSxrQkFBa0IsT0FBTyxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsa0JBQWtCLE9BQU8sYUFBYSxnQkFBZ0IsT0FBTyxrQkFBa0IsT0FBTyxrQkFBa0IsT0FBTyxhQUFhLGtCQUFrQixRQUFRLFdBQVcsWUFBWSxrQkFBa0IsUUFBUSxrQkFBa0IsUUFBUSxrQkFBa0IsUUFBUSxZQUFZLGFBQWEsYUFBYSxrQkFB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QUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUM1UUE7QUFBQTtBQUFBO0FBQXNDOztBQUV0QyxpSTs7Ozs7Ozs7Ozs7QUNGQSxVQUFVLG1CQUFPLENBQUMsdUpBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLGdPQUErRzs7QUFFako7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0MiLCJmaWxlIjoicmVzZXJ2ZUZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9yZXNvdXJjZXMvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvcmVzZXJ2YXRpb25Gb3JtLmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0tSOndnaHRAMzAwOzUwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0tSOndnaHRAMzAwOzUwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS13cmFwV2lkdGg6IDEyMDBweDtcXG4gIC0tZ3JheTogIzdmOGM4ZDtcXG4gIC0tZGVlcEdyYXk6ICM1MzVjNjg7XFxuICAtLXJlZDogI2ZmMzg1YztcXG4gIC0tYmx1ZTogbGlnaHRzZWFncmVlbjtcXG4gIC0tZ3JlZW46ICMyM2MzODI7XFxuICAtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW46IDUwcHg7XFxuICAtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZzogMzBweDtcXG4gIC0tZGV0YWlsRm9udFNpemU6IHNtYWxsZXI7XFxuICAtLWJvdHRvbUJvcmRlcjogMXB4IHNvbGlkICNlY2YwZjE7XFxuICAtLWJvcmRlclJhZGl1czogMTBweDtcXG4gIC0tY2FsZW5kYXJEYXlTaXplOiA0MHB4O1xcbiAgLS1ib3hTaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTsgfVxcblxcbi5BQ0NFUFRFRCB7XFxuICBjb2xvcjogdmFyKC0tZ3JlZW4pICFpbXBvcnRhbnQ7IH1cXG5cXG4uUEVORElORywgLkNPTVBMRVRFRCB7XFxuICBjb2xvcjogdmFyKC0tZ3JheSkgIWltcG9ydGFudDsgfVxcblxcbi5SRUZVU0VELCAuQ0FOQ0xFRCB7XFxuICBjb2xvcjogdmFyKC0tcmVkKSAhaW1wb3J0YW50OyB9XFxuXFxuOnJvb3Qge1xcbiAgLS13cmFwV2lkdGg6IDEyMDBweDtcXG4gIC0tZ3JheTogIzdmOGM4ZDtcXG4gIC0tZGVlcEdyYXk6ICM1MzVjNjg7XFxuICAtLXJlZDogI2ZmMzg1YztcXG4gIC0tYmx1ZTogbGlnaHRzZWFncmVlbjtcXG4gIC0tZ3JlZW46ICMyM2MzODI7XFxuICAtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW46IDUwcHg7XFxuICAtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZzogMzBweDtcXG4gIC0tZGV0YWlsRm9udFNpemU6IHNtYWxsZXI7XFxuICAtLWJvdHRvbUJvcmRlcjogMXB4IHNvbGlkICNlY2YwZjE7XFxuICAtLWJvcmRlclJhZGl1czogMTBweDtcXG4gIC0tY2FsZW5kYXJEYXlTaXplOiA0MHB4O1xcbiAgLS1ib3hTaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTsgfVxcblxcbi5BQ0NFUFRFRCB7XFxuICBjb2xvcjogdmFyKC0tZ3JlZW4pICFpbXBvcnRhbnQ7IH1cXG5cXG4uUEVORElORywgLkNPTVBMRVRFRCB7XFxuICBjb2xvcjogdmFyKC0tZ3JheSkgIWltcG9ydGFudDsgfVxcblxcbi5SRUZVU0VELCAuQ0FOQ0xFRCB7XFxuICBjb2xvcjogdmFyKC0tcmVkKSAhaW1wb3J0YW50OyB9XFxuXFxuLm1haW5fd3JhcCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1heC13aWR0aDogdmFyKC0td3JhcFdpZHRoKTtcXG4gIHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgMDsgfVxcbiAgLm1haW5fd3JhcCAubWFpbl9oZWFkZXIge1xcbiAgICBtYXJnaW46IDAgdmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbik7IH1cXG4gICAgLm1haW5fd3JhcCAubWFpbl9oZWFkZXIgaSB7XFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgIC5tYWluX3dyYXAgLm1haW5faGVhZGVyIC5tYWluX3RpdGxlIHtcXG4gICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgIHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgMDsgfVxcbiAgLm1haW5fd3JhcCAubWFpbl9tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9sZWZ0IHtcXG4gICAgICB3aWR0aDogNTAlO1xcbiAgICAgIG1hcmdpbjogMCB2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKTsgfVxcbiAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9sZWZ0IC5hZHZpc2Vfd3JhcCB7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IHZhcigtLWJvdHRvbUJvcmRlcik7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAgICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fbGVmdCAuYWR2aXNlX3dyYXAgLmFkdmlzZSB7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1kZWVwR3JheSk7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7IH1cXG4gICAgICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX2xlZnQgLmFkdmlzZV93cmFwIC5hZHZpc2Ugc3Ryb25nIHtcXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7IH1cXG4gICAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9sZWZ0IC5hZHZpc2Vfd3JhcCBpIHtcXG4gICAgICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgICAgICAgY29sb3I6IHZhcigtLXJlZCk7IH1cXG4gICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fbGVmdCAucmVzZXJ2YXRpb25fZm9ybSAucmVzZXJ2YXRpb25faW5mb193cmFwIHtcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgMDtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IHZhcigtLWJvdHRvbUJvcmRlcik7XFxuICAgICAgICBjb2xvcjogdmFyKC0tZGVlcEdyYXkpOyB9XFxuICAgICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fbGVmdCAucmVzZXJ2YXRpb25fZm9ybSAucmVzZXJ2YXRpb25faW5mb193cmFwIC5yZXNlcnZhdGlvbl9pbmZvX3RpdGxlIHtcXG4gICAgICAgICAgY29sb3I6IGJsYWNrOyB9XFxuICAgICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fbGVmdCAucmVzZXJ2YXRpb25fZm9ybSAucmVzZXJ2YXRpb25faW5mb193cmFwIC5pbmZvX25hbWUge1xcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKS8yKTtcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgICAgICAgY29sb3I6IGJsYWNrOyB9XFxuICAgICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fbGVmdCAucmVzZXJ2YXRpb25fZm9ybSAucmVzZXJ2YXRpb25faW5mb193cmFwIC5pbmZvX3ZhbHVlIHtcXG4gICAgICAgICAgYWxsOiB1bnNldDtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgICAgICAgd2lkdGg6IDkwcHg7IH1cXG4gICAgICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX2xlZnQgLnJlc2VydmF0aW9uX2Zvcm0gLnJlc2VydmF0aW9uX2luZm9fd3JhcCAuaW5mb192YWx1ZTpsYXN0LWNoaWxkIHtcXG4gICAgICAgICAgICB3aWR0aDogMTBweDsgfVxcbiAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9sZWZ0IC5yZXNlcnZhdGlvbl9mb3JtIC5yZWZ1bmRfbm90aWNlIHtcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZyk7XFxuICAgICAgICBib3JkZXItYm90dG9tOiB2YXIoLS1ib3R0b21Cb3JkZXIpO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAgICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fbGVmdCAucmVzZXJ2YXRpb25fZm9ybSAucmVmdW5kX25vdGljZTo6YmVmb3JlIHtcXG4gICAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgdG9wOiAzNXB4O1xcbiAgICAgICAgICBsZWZ0OiAwcHg7XFxuICAgICAgICAgIHdpZHRoOiA5cHg7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkFGMEY7XFxuICAgICAgICAgIGhlaWdodDogODAlOyB9XFxuICAgICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fbGVmdCAucmVzZXJ2YXRpb25fZm9ybSAucmVmdW5kX25vdGljZSAucmVmdW5kX2Rlc2NyaXB0aW9uLCAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fbGVmdCAucmVzZXJ2YXRpb25fZm9ybSAucmVmdW5kX25vdGljZSAucmVmdW5kX3NtYWxsIHtcXG4gICAgICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pLzIpIDA7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1kZWVwR3JheSk7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7IH1cXG4gICAgICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX2xlZnQgLnJlc2VydmF0aW9uX2Zvcm0gLnJlZnVuZF9ub3RpY2UgLnJlZnVuZF9kZXNjcmlwdGlvbiBzdHJvbmcsIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9sZWZ0IC5yZXNlcnZhdGlvbl9mb3JtIC5yZWZ1bmRfbm90aWNlIC5yZWZ1bmRfc21hbGwgc3Ryb25nIHtcXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7IH1cXG4gICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fbGVmdCAucmVzZXJ2YXRpb25fZm9ybSAuY29uZmlybV9ub3RpY2Uge1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAwO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm90dG9tQm9yZGVyKTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG4gICAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9sZWZ0IC5yZXNlcnZhdGlvbl9mb3JtIC5jb25maXJtX25vdGljZSBpIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7IH1cXG4gICAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9sZWZ0IC5yZXNlcnZhdGlvbl9mb3JtIC5jb25maXJtX25vdGljZSAuY29uZmlybV9kZXNjcmlwdGlvbiB7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLWRlZXBHcmF5KTsgfVxcbiAgICAgICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fbGVmdCAucmVzZXJ2YXRpb25fZm9ybSAuY29uZmlybV9ub3RpY2UgLmNvbmZpcm1fZGVzY3JpcHRpb24gc3Ryb25nIHtcXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7IH1cXG4gICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fbGVmdCAucmVzZXJ2YXRpb25fZm9ybSAucmVzZXJ2ZV9idG5fd3JhcCB7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7IH1cXG4gICAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9sZWZ0IC5yZXNlcnZhdGlvbl9mb3JtIC5yZXNlcnZlX2J0bl93cmFwIHNtYWxsIHtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgICAgICAgY29sb3I6IHZhcigtLWRlZXBHcmF5KTtcXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4OyB9XFxuICAgICAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9sZWZ0IC5yZXNlcnZhdGlvbl9mb3JtIC5yZXNlcnZlX2J0bl93cmFwIHNtYWxsIHNwYW4ge1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICAgICAgY29sb3I6IG1lZGl1bXNsYXRlYmx1ZTtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjg1O1xcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKSwgMXB4IC0xcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpLCAtMXB4IDFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvciksIC0xcHggLTFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvcik7IH1cXG4gICAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9sZWZ0IC5yZXNlcnZhdGlvbl9mb3JtIC5yZXNlcnZlX2J0bl93cmFwIC5yZXNlcnZlX2J0biB7XFxuICAgICAgICAgIGJvcmRlcjogMDtcXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzKTtcXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDsgfVxcbiAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fcmlnaHQge1xcbiAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHBhZGRpbmctdG9wOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpO1xcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgKiAyKTtcXG4gICAgICBtYXJnaW46IDAgdmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbik7IH1cXG4gICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAge1xcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgICAgIHRvcDogODBweDtcXG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveFNoYWRvdyk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMpO1xcbiAgICAgICAgcGFkZGluZzogMjBweDsgfVxcbiAgICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9yb29tIHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZyk7XFxuICAgICAgICAgIGJvcmRlci1ib3R0b206IHZhcigtLWJvdHRvbUJvcmRlcik7IH1cXG4gICAgICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9yb29tIC5yb29tX2ltZyB7XFxuICAgICAgICAgICAgd2lkdGg6IDEzMHB4O1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzKTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyOyB9XFxuICAgICAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fcm9vbSAucm9vbV9pbmZvIHtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDsgfVxcbiAgICAgICAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fcm9vbSAucm9vbV9pbmZvIC5yb29tX3NwZWMge1xcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWRlZXBHcmF5KTsgfVxcbiAgICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9wcmljZSB7XFxuICAgICAgICAgIHBhZGRpbmctdG9wOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpOyB9XFxuICAgICAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fcHJpY2UgLnByaWNlX3RpdGxlIHtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7IH1cXG4gICAgICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9wcmljZSAucHJpY2VfaXRlbSxcXG4gICAgICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9wcmljZSAudG90YWxfcHJpY2Uge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgLyAyKTsgfVxcbiAgICAgICAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fcHJpY2UgLnByaWNlX2l0ZW0gLnByaWNlX25hbWUsXFxuICAgICAgICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9wcmljZSAudG90YWxfcHJpY2UgLnByaWNlX25hbWUge1xcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDsgfVxcbiAgICAgICAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fcHJpY2UgLnByaWNlX2l0ZW0gLnByaWNlX3ZhbHVlLFxcbiAgICAgICAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fcHJpY2UgLnRvdGFsX3ByaWNlIC5wcmljZV92YWx1ZSB7XFxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxcbiAgICAgICAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fcHJpY2UgLnByaWNlX2l0ZW0gLnVuZGVybGluZSxcXG4gICAgICAgICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX3ByaWNlIC50b3RhbF9wcmljZSAudW5kZXJsaW5lIHtcXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjg1O1xcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpLCAxcHggLTFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvciksIC0xcHggMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKSwgLTFweCAtMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKTsgfVxcbiAgICAgICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX3ByaWNlIC50b3RhbF9wcmljZSB7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zY3NzL19fYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc2Nzcy9yZXNlcnZhdGlvbkZvcm0uc2Nzc1wiLFwid2VicGFjazovL3Njc3MvX19taXhpbnMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNDLG1CQUFZO0VBQ1osZUFBTztFQUNQLG1CQUFX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bEMsYUFBYSxFQUFBO1FBektqQjtVQTRLSyxhQUFhO1VBQ2IsK0NBQStDO1VBQy9DLGtDQUFrQyxFQUFBO1VBOUt2QztZQWlMTSxZQUFZO1lBQ1osYUFBYTtZQUNiLGtDQUFrQztZQUNsQyxzQkFBc0I7WUFDdEIsa0JBQWtCO1lBQ2xCLGtDQUFrQyxFQUFBO1VBdEx4QztZQTBMTSxnQkFBZ0I7WUFDaEIsZUFBZSxFQUFBO1lBM0xyQjtjQThMTyxzQkFBc0IsRUFBQTtRQTlMN0I7VUFvTUssNENBQTRDLEVBQUE7VUFwTWpEO1lBdU1NLGdCQUFnQjtZQUNoQixtQkFBbUIsRUFBQTtVQXhNekI7O1lBNk1NLGFBQWE7WUFDYiw4QkFBOEI7WUFDOUIsc0RBQXNELEVBQUE7WUEvTTVEOztjQWtOTyxnQkFBZ0IsRUFBQTtZQWxOdkI7O2NBc05PLGlCQUFpQixFQUFBO1lBdE54Qjs7Y0NZQyw4QkFBOEI7Y0FDOUIscUJBQXFCO2NBQ3JCLGlCQUFpQjtjQUNqQiwySUFDZ0UsRUFBQTtVRGhCakU7WUErTk0sZ0JBQWdCLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0tSOndnaHRAMzAwOzUwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuOnJvb3Qge1xcclxcblxcdC0td3JhcFdpZHRoOiAxMjAwcHg7XFxyXFxuXFx0LS1ncmF5OiAjN2Y4YzhkO1xcclxcblxcdC0tZGVlcEdyYXk6ICM1MzVjNjg7XFxyXFxuXFx0LS1yZWQ6ICNmZjM4NWM7XFxyXFxuXFx0LS1ibHVlOiBsaWdodHNlYWdyZWVuO1xcclxcblxcdC0tZ3JlZW46ICMyM2MzODI7XFxyXFxuXFx0LS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luOiA1MHB4O1xcclxcblxcdC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nOiAzMHB4O1xcclxcblxcdC0tZGV0YWlsRm9udFNpemU6IHNtYWxsZXI7XFxyXFxuXFx0LS1ib3R0b21Cb3JkZXI6IDFweCBzb2xpZCAjZWNmMGYxO1xcclxcblxcdC0tYm9yZGVyUmFkaXVzOiAxMHB4O1xcclxcblxcdC0tY2FsZW5kYXJEYXlTaXplOiA0MHB4O1xcclxcblxcdC0tYm94U2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XFxyXFxufVxcclxcblxcclxcbi8vIEJyZWFrcG9pbnRzXFxyXFxuJGJyZWFrcG9pbnQtdGFibGV0OiA3NThweDtcXHJcXG4kYnJlYWtwb2ludC1kZXNrdG9wOiAxMDI0cHg7XFxyXFxuXFxyXFxuLkFDQ0VQVEVEIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tZ3JlZW4pICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5QRU5ESU5HLCAuQ09NUExFVEVEIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tZ3JheSkgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLlJFRlVTRUQsIC5DQU5DTEVEIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tcmVkKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cIixcIkBpbXBvcnQgXFxcIi4vX2Jhc2VcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4vX21peGluc1xcXCI7XFxyXFxuXFxyXFxuLm1haW5fd3JhcCB7XFxyXFxuXFx0bWFyZ2luOiAwIGF1dG87XFxyXFxuXFx0bWF4LXdpZHRoOiB2YXIoLS13cmFwV2lkdGgpO1xcclxcblxcdHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgMDtcXHJcXG5cXHRcXHJcXG5cXHQubWFpbl9oZWFkZXIge1xcclxcblxcdFxcdG1hcmdpbjogMCB2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKTtcXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHRpIHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRcXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdFxcclxcblxcdFxcdC5tYWluX3RpdGxlIHtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgMDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcdFxcclxcblxcdC5tYWluX21haW4ge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdFxcclxcblxcdFxcdC5tYWluX2xlZnQge1xcclxcblxcdFxcdFxcdHdpZHRoOiA1MCU7XFxyXFxuXFx0XFx0XFx0bWFyZ2luOiAwIHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pO1xcclxcblxcdFxcdFxcdFxcclxcblxcdFxcdFxcdC5hZHZpc2Vfd3JhcCB7XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZy1ib3R0b206IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZyk7XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyLWJvdHRvbTogdmFyKC0tYm90dG9tQm9yZGVyKTtcXHJcXG5cXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdC5hZHZpc2Uge1xcclxcblxcdFxcdFxcdFxcdFxcdGNvbG9yOiB2YXIoLS1kZWVwR3JheSk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRzdHJvbmcge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdGkge1xcclxcblxcdFxcdFxcdFxcdFxcdHBhZGRpbmc6IDIwcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Y29sb3I6IHZhcigtLXJlZCk7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHQucmVzZXJ2YXRpb25fZm9ybSB7XFxyXFxuXFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0LnJlc2VydmF0aW9uX2luZm9fd3JhcCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0cGFkZGluZzogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAwO1xcclxcblxcdFxcdFxcdFxcdFxcdGJvcmRlci1ib3R0b206IHZhcigtLWJvdHRvbUJvcmRlcik7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Y29sb3I6IHZhcigtLWRlZXBHcmF5KTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHQucmVzZXJ2YXRpb25faW5mb190aXRsZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHQuaW5mb19uYW1lIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRtYXJnaW4tdG9wOiBjYWxjKHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pLzIpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHQuaW5mb192YWx1ZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0YWxsOiB1bnNldDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRmb250LXdlaWdodDogMzAwO1xcdFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdHdpZHRoOiA5MHB4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdCY6bGFzdC1jaGlsZCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0d2lkdGg6IDEwcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0fVxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdH1cXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0LnJlZnVuZF9ub3RpY2Uge1xcclxcblxcdFxcdFxcdFxcdFxcdHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZyk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Ym9yZGVyLWJvdHRvbTogdmFyKC0tYm90dG9tQm9yZGVyKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0Jjo6YmVmb3JlIHtcXHJcXG5cXHRcXHRcXHRcXHQgICAgXFx0Y29udGVudDogXFxcIlxcXCI7XFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgdG9wOiAzNXB4O1xcclxcblxcdFxcdFxcdFxcdFxcdCAgICBsZWZ0OiAwcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgIHdpZHRoOiA5cHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkFGMEY7XFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgIGhlaWdodDogODAlO1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHQucmVmdW5kX2Rlc2NyaXB0aW9uLCAucmVmdW5kX3NtYWxsIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRtYXJnaW46IGNhbGModmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbikvMikgMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogdmFyKC0tZGVlcEdyYXkpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0c3Ryb25nIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0LmNvbmZpcm1fbm90aWNlIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Ym9yZGVyLWJvdHRvbTogdmFyKC0tYm90dG9tQm9yZGVyKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRpIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IDEuNXJlbTtcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgcGFkZGluZy1yaWdodDogMTVweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0LmNvbmZpcm1fZGVzY3JpcHRpb24ge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IHZhcigtZGVlcEdyYXkpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdHN0cm9uZyB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdC5yZXNlcnZlX2J0bl93cmFwIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0c21hbGwge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IHZhcigtLWRlZXBHcmF5KTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IDEycHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0c3BhbiB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDUwMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogbWVkaXVtc2xhdGVibHVlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdEBpbmNsdWRlIHVuZGVybGluZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdC5yZXNlcnZlX2J0biB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Ym9yZGVyOiAwO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0cGFkZGluZzogMTBweCAzMHB4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdG1hcmdpbjogMTBweCAwO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMTZweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0Lm1haW5fcmlnaHQge1xcclxcblxcdFxcdFxcdHdpZHRoOiA1MCU7XFxyXFxuXFx0XFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdFxcdFxcdHBhZGRpbmctdG9wOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpO1xcclxcblxcdFxcdFxcdHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgKiAyKTtcXHJcXG5cXHRcXHRcXHRtYXJnaW46IDAgdmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbik7XFxyXFxuXFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0LnJlc2VydmF0aW9uX3dyYXAge1xcclxcblxcdFxcdFxcdFxcdHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuXFx0XFx0XFx0XFx0dG9wOiA4MHB4O1xcclxcblxcdFxcdFxcdFxcdGJveC1zaGFkb3c6IHZhcigtLWJveFNoYWRvdyk7XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzKTtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAyMHB4O1xcclxcblxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdC5yZXNlcnZhdGlvbl9yb29tIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdFxcdFxcdHBhZGRpbmctYm90dG9tOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpO1xcclxcblxcdFxcdFxcdFxcdFxcdGJvcmRlci1ib3R0b206IHZhcigtLWJvdHRvbUJvcmRlcik7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0LnJvb21faW1nIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR3aWR0aDogMTMwcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0aGVpZ2h0OiAxMDBweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdC5yb29tX2luZm8ge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxMnB4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdC5yb29tX3NwZWMge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiB2YXIoLS1kZWVwR3JheSk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0LnJlc2VydmF0aW9uX3ByaWNlIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRwYWRkaW5nLXRvcDogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHQucHJpY2VfdGl0bGUge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0LnByaWNlX2l0ZW0sXFxyXFxuXFx0XFx0XFx0XFx0XFx0LnRvdGFsX3ByaWNlIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIC8gMik7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0LnByaWNlX25hbWUge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdFxcdC5wcmljZV92YWx1ZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0dGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdC51bmRlcmxpbmUge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdEBpbmNsdWRlIHVuZGVybGluZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdC50b3RhbF9wcmljZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cIixcIkBpbXBvcnQgXFxcIi4vX2Jhc2VcXFwiO1xcclxcblxcclxcbkBtaXhpbiB0YWJsZXQge1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICN7JGJyZWFrcG9pbnQtZGVza3RvcCAtIDFweH0pIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBkZXNrdG9wIHtcXHJcXG4gIEBtZWRpYSAobWluLXdpZHRoOiAjeyRicmVha3BvaW50LWRlc2t0b3B9KSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gdW5kZXJsaW5lIHtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAwLjg1O1xcclxcblxcdHRleHQtc2hhZG93OiAxcHggMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKSwgMXB4IC0xcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpLFxcclxcblxcdFxcdC0xcHggMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKSwgLTFweCAtMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKTtcXHJcXG5cXHRAY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIHN0YXIoJGZvbnQtc2l6ZSkge1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQpO1xcclxcblxcdGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIHJlc2VydmF0aW9uX2l0ZW0ge1xcclxcblxcdGZsZXg6IDEgMSA1MCU7XFxyXFxuXFx0cGFkZGluZzogNXB4IDEwcHg7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjlyZW07XFxyXFxuXFx0aGVpZ2h0OiA1MHB4O1xcclxcblxcclxcblxcdC5yZXNlcnZhdGlvbl9kaXNwbGF5IHtcXHJcXG5cXHRcXHRjb2xvcjogdmFyKC0tZ3JheSk7XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBmYWNpbGl0eV9ydWxlX2l0ZW0ge1xcclxcblxcdG1hcmdpbjogMTVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZmFjaWxpdHlfcnVsZV9pY29uIHtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0d2lkdGg6IDQwcHg7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZmFjaWxpdHlfcnVsZV9kZXNjcmlwdGlvbiB7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGNoYW5nZUhlYWRlckNvbG9yIHtcXHJcXG5cXHQuYm9keV9oZWFkZXIgdWwgLmFpcmJuYl9pY29uLFxcclxcblxcdC5ib2R5X2hlYWRlciB1bCAuaGVhZGVyX3Byb2ZpbGUgLnByb2ZpbGVfaW1nIHtcXHJcXG5cXHRcXHRjb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxuXFx0fVxcclxcblxcdFxcclxcblxcdC5ib2R5X2hlYWRlciB1bCAucm9vbV9zZWFyY2ggaSB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IFwiLi4vc2Nzcy9yZXNlcnZhdGlvbkZvcm0uc2Nzc1wiO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYWNrSWNvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLnBhdGhuYW1lLm1hdGNoKC8uKnJvb21cXC9bXFxkXSsvKVswXSk7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNlcnZhdGlvbkZvcm0uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==