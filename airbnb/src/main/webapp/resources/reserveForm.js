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
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "../node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_thumbnail1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/thumbnail1.jpg */ "./img/thumbnail1.jpg");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_img_thumbnail1_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root {\n  --wrapWidth: 1200px;\n  --gray: #7f8c8d;\n  --deepGray: #535c68;\n  --red: #ff385c;\n  --blue: lightseagreen;\n  --green: #23c382;\n  --containerHorizontalMargin: 50px;\n  --containerVerticalPadding: 30px;\n  --detailFontSize: smaller;\n  --bottomBorder: 1px solid #ecf0f1;\n  --borderRadius: 10px;\n  --calendarDaySize: 40px;\n  --boxShadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.ACCEPTED {\n  color: var(--green) !important; }\n\n.PENDING, .COMPLETED {\n  color: var(--gray) !important; }\n\n.REFUSED, .CANCLED {\n  color: var(--red) !important; }\n\n.main_wrap {\n  margin: 0 auto;\n  max-width: var(--wrapWidth);\n  padding: var(--containerVerticalPadding) 0; }\n  .main_wrap .main_header {\n    margin: 0 var(--containerHorizontalMargin); }\n    .main_wrap .main_header i {\n      display: block;\n      cursor: pointer; }\n    .main_wrap .main_header .main_title {\n      font-weight: 700;\n      padding: var(--containerVerticalPadding) 0; }\n  .main_wrap .main_main {\n    display: flex;\n    justify-content: space-between; }\n    .main_wrap .main_main .main_left {\n      width: 50%;\n      margin: 0 var(--containerHorizontalMargin); }\n      .main_wrap .main_main .main_left .advise_wrap {\n        padding-bottom: var(--containerVerticalPadding);\n        border-bottom: var(--bottomBorder);\n        display: flex; }\n        .main_wrap .main_main .main_left .advise_wrap .advise {\n          color: var(--deepGray);\n          font-weight: 300; }\n          .main_wrap .main_main .main_left .advise_wrap .advise strong {\n            color: black; }\n        .main_wrap .main_main .main_left .advise_wrap i {\n          padding: 20px;\n          color: var(--red); }\n      .main_wrap .main_main .main_left .reservation_form .reservation_info_wrap {\n        padding: var(--containerVerticalPadding) 0;\n        border-bottom: var(--bottomBorder);\n        color: var(--deepGray); }\n        .main_wrap .main_main .main_left .reservation_form .reservation_info_wrap .reservation_info_title {\n          color: black; }\n        .main_wrap .main_main .main_left .reservation_form .reservation_info_wrap .info_name {\n          display: block;\n          margin-top: calc(var(--containerHorizontalMargin)/2);\n          margin-bottom: 10px;\n          color: black; }\n        .main_wrap .main_main .main_left .reservation_form .reservation_info_wrap .info_value {\n          all: unset;\n          font-weight: 300;\n          width: 90px; }\n          .main_wrap .main_main .main_left .reservation_form .reservation_info_wrap .info_value:last-child {\n            width: 10px; }\n      .main_wrap .main_main .main_left .reservation_form .refund_notice {\n        padding: var(--containerVerticalPadding);\n        border-bottom: var(--bottomBorder);\n        position: relative; }\n        .main_wrap .main_main .main_left .reservation_form .refund_notice::before {\n          content: \"\";\n          position: absolute;\n          top: 35px;\n          left: 0px;\n          width: 9px;\n          background-color: #FFAF0F;\n          height: 80%; }\n        .main_wrap .main_main .main_left .reservation_form .refund_notice .refund_description, .main_wrap .main_main .main_left .reservation_form .refund_notice .refund_small {\n          margin: calc(var(--containerHorizontalMargin)/2) 0;\n          color: var(--deepGray);\n          font-weight: 300; }\n          .main_wrap .main_main .main_left .reservation_form .refund_notice .refund_description strong, .main_wrap .main_main .main_left .reservation_form .refund_notice .refund_small strong {\n            color: black; }\n      .main_wrap .main_main .main_left .reservation_form .confirm_notice {\n        padding: var(--containerVerticalPadding) 0;\n        border-bottom: var(--bottomBorder);\n        display: flex;\n        justify-content: space-between; }\n        .main_wrap .main_main .main_left .reservation_form .confirm_notice i {\n          font-size: 1.5rem;\n          padding-right: 15px; }\n        .main_wrap .main_main .main_left .reservation_form .confirm_notice .confirm_description {\n          font-weight: 300;\n          color: var(-deepGray); }\n          .main_wrap .main_main .main_left .reservation_form .confirm_notice .confirm_description strong {\n            color: black; }\n      .main_wrap .main_main .main_left .reservation_form .reserve_btn_wrap {\n        padding: var(--containerVerticalPadding) 0; }\n        .main_wrap .main_main .main_left .reservation_form .reserve_btn_wrap small {\n          font-weight: 300;\n          color: var(--deepGray);\n          font-size: 12px; }\n          .main_wrap .main_main .main_left .reservation_form .reserve_btn_wrap small span {\n            font-weight: 500;\n            color: mediumslateblue;\n            border-bottom: 1px solid black;\n            display: inline-block;\n            line-height: 0.85;\n            text-shadow: 1px 1px var(--backgroudColor), 1px -1px var(--backgroudColor), -1px 1px var(--backgroudColor), -1px -1px var(--backgroudColor); }\n        .main_wrap .main_main .main_left .reservation_form .reserve_btn_wrap .reserve_btn {\n          border: 0;\n          outline: none;\n          width: 100%;\n          padding: 10px 30px;\n          background-color: var(--red);\n          color: white;\n          margin: 10px 0;\n          border-radius: var(--borderRadius);\n          text-align: center;\n          font-weight: 700;\n          cursor: pointer;\n          font-size: 16px; }\n    .main_wrap .main_main .main_right {\n      width: 50%;\n      position: relative;\n      padding-top: var(--containerVerticalPadding);\n      padding-bottom: calc(var(--containerVerticalPadding) * 2);\n      margin: 0 var(--containerHorizontalMargin); }\n      .main_wrap .main_main .main_right .reservation_wrap {\n        position: sticky;\n        top: 80px;\n        box-shadow: var(--boxShadow);\n        border-radius: var(--borderRadius);\n        padding: 20px; }\n        .main_wrap .main_main .main_right .reservation_wrap .reservation_room {\n          display: flex;\n          padding-bottom: var(--containerVerticalPadding);\n          border-bottom: var(--bottomBorder); }\n          .main_wrap .main_main .main_right .reservation_wrap .reservation_room .room_img {\n            width: 130px;\n            height: 100px;\n            border-radius: var(--borderRadius);\n            background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n            background-size: cover;\n            margin-right: 20px; }\n          .main_wrap .main_main .main_right .reservation_wrap .reservation_room .room_info {\n            font-weight: 300;\n            font-size: 12px; }\n            .main_wrap .main_main .main_right .reservation_wrap .reservation_room .room_info .room_spec {\n              color: var(--deepGray); }\n        .main_wrap .main_main .main_right .reservation_wrap .reservation_price {\n          padding-top: var(--containerVerticalPadding); }\n          .main_wrap .main_main .main_right .reservation_wrap .reservation_price .price_title {\n            font-weight: 700;\n            margin-bottom: 10px; }\n          .main_wrap .main_main .main_right .reservation_wrap .reservation_price .price_item,\n          .main_wrap .main_main .main_right .reservation_wrap .reservation_price .total_price {\n            display: flex;\n            justify-content: space-between;\n            padding-top: calc(var(--containerVerticalPadding) / 2); }\n            .main_wrap .main_main .main_right .reservation_wrap .reservation_price .price_item .price_name,\n            .main_wrap .main_main .main_right .reservation_wrap .reservation_price .total_price .price_name {\n              text-align: left; }\n            .main_wrap .main_main .main_right .reservation_wrap .reservation_price .price_item .price_value,\n            .main_wrap .main_main .main_right .reservation_wrap .reservation_price .total_price .price_value {\n              text-align: right; }\n            .main_wrap .main_main .main_right .reservation_wrap .reservation_price .price_item .underline,\n            .main_wrap .main_main .main_right .reservation_wrap .reservation_price .total_price .underline {\n              border-bottom: 1px solid black;\n              display: inline-block;\n              line-height: 0.85;\n              text-shadow: 1px 1px var(--backgroudColor), 1px -1px var(--backgroudColor), -1px 1px var(--backgroudColor), -1px -1px var(--backgroudColor); }\n          .main_wrap .main_main .main_right .reservation_wrap .reservation_price .total_price {\n            font-weight: 700; }\n", "",{"version":3,"sources":["webpack://scss/__base.scss","webpack://scss/reservationForm.scss","webpack://scss/__mixins.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;700&display=swap\");\r\n:root {\r\n\t--wrapWidth: 1200px;\r\n\t--gray: #7f8c8d;\r\n\t--deepGray: #535c68;\r\n\t--red: #ff385c;\r\n\t--blue: lightseagreen;\r\n\t--green: #23c382;\r\n\t--containerHorizontalMargin: 50px;\r\n\t--containerVerticalPadding: 30px;\r\n\t--detailFontSize: smaller;\r\n\t--bottomBorder: 1px solid #ecf0f1;\r\n\t--borderRadius: 10px;\r\n\t--calendarDaySize: 40px;\r\n\t--boxShadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n}\r\n\r\n.ACCEPTED {\r\n\tcolor: var(--green) !important;\r\n}\r\n\r\n.PENDING, .COMPLETED {\r\n\tcolor: var(--gray) !important;\r\n}\r\n\r\n.REFUSED, .CANCLED {\r\n\tcolor: var(--red) !important;\r\n}\r\n","@import \"./_base\";\r\n@import \"./_mixins\";\r\n\r\n.main_wrap {\r\n\tmargin: 0 auto;\r\n\tmax-width: var(--wrapWidth);\r\n\tpadding: var(--containerVerticalPadding) 0;\r\n\t\r\n\t.main_header {\r\n\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\t\t\r\n\t\ti {\r\n\t\t\tdisplay: block;\r\n\t\t\tcursor: pointer;\r\n\t\t}\r\n\t\t\r\n\t\t.main_title {\r\n\t\t\tfont-weight: 700;\r\n\t\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\t}\r\n\t}\r\n\t\r\n\t.main_main {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\t\r\n\t\t.main_left {\r\n\t\t\twidth: 50%;\r\n\t\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\t\t\t\r\n\t\t\t.advise_wrap {\r\n\t\t\t\tpadding-bottom: var(--containerVerticalPadding);\r\n\t\t\t\tborder-bottom: var(--bottomBorder);\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\t\r\n\t\t\t\t.advise {\r\n\t\t\t\t\tcolor: var(--deepGray);\r\n\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\t\r\n\t\t\t\t\tstrong {\r\n\t\t\t\t\t\tcolor: black;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\ti {\r\n\t\t\t\t\tpadding: 20px;\r\n\t\t\t\t\tcolor: var(--red);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t.reservation_form {\r\n\t\t\t\t\r\n\t\t\t\t.reservation_info_wrap {\r\n\t\t\t\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\t\t\t\tborder-bottom: var(--bottomBorder);\r\n\t\t\t\t\tcolor: var(--deepGray);\r\n\t\t\t\t\t\r\n\t\t\t\t\t.reservation_info_title {\r\n\t\t\t\t\t\tcolor: black;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.info_name {\r\n\t\t\t\t\t\tdisplay: block;\r\n\t\t\t\t\t\tmargin-top: calc(var(--containerHorizontalMargin)/2);\r\n\t\t\t\t\t\tmargin-bottom: 10px;\r\n\t\t\t\t\t\tcolor: black;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.info_value {\r\n\t\t\t\t\t\tall: unset;\r\n\t\t\t\t\t\tfont-weight: 300;\t\r\n\t\t\t\t\t\twidth: 90px;\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t&:last-child {\r\n\t\t\t\t\t\t\twidth: 10px;\r\n\t\t\t\t\t\t}\t\t\r\n\t\t\t\t\t}\t\t\t\t\t\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t.refund_notice {\r\n\t\t\t\t\tpadding: var(--containerVerticalPadding);\r\n\t\t\t\t\tborder-bottom: var(--bottomBorder);\r\n\t\t\t\t\tposition: relative;\r\n\t\t\t\t\t\r\n\t\t\t\t\t&::before {\r\n\t\t\t\t    \tcontent: \"\";\r\n\t\t\t\t\t    position: absolute;\r\n\t\t\t\t\t    top: 35px;\r\n\t\t\t\t\t    left: 0px;\r\n\t\t\t\t\t    width: 9px;\r\n\t\t\t\t\t    background-color: #FFAF0F;\r\n\t\t\t\t\t    height: 80%;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.refund_description, .refund_small {\r\n\t\t\t\t\t\tmargin: calc(var(--containerHorizontalMargin)/2) 0;\r\n\t\t\t\t\t\tcolor: var(--deepGray);\r\n\t\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\tstrong {\r\n\t\t\t\t\t\t\tcolor: black;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t.confirm_notice {\r\n\t\t\t\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\t\t\t\tborder-bottom: var(--bottomBorder);\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\tjustify-content: space-between;\r\n\t\t\t\t\t\r\n\t\t\t\t\ti {\r\n\t\t\t\t\t\tfont-size: 1.5rem;\r\n\t\t\t\t\t    padding-right: 15px;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.confirm_description {\r\n\t\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\t\tcolor: var(-deepGray);\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\tstrong {\r\n\t\t\t\t\t\t\tcolor: black;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t.reserve_btn_wrap {\r\n\t\t\t\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\t\t\t\t\r\n\t\t\t\t\tsmall {\r\n\t\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\t\tcolor: var(--deepGray);\r\n\t\t\t\t\t\tfont-size: 12px;\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\tspan {\r\n\t\t\t\t\t\t\tfont-weight: 500;\r\n\t\t\t\t\t\t\tcolor: mediumslateblue;\r\n\t\t\t\t\t\t\t@include underline;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.reserve_btn {\r\n\t\t\t\t\t\tborder: 0;\r\n\t\t\t\t\t\toutline: none;\r\n\t\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\t\tpadding: 10px 30px;\r\n\t\t\t\t\t\tbackground-color: var(--red);\r\n\t\t\t\t\t\tcolor: white;\r\n\t\t\t\t\t\tmargin: 10px 0;\r\n\t\t\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\t\t\ttext-align: center;\r\n\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\tfont-size: 16px;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\t.main_right {\r\n\t\t\twidth: 50%;\r\n\t\t\tposition: relative;\r\n\t\t\tpadding-top: var(--containerVerticalPadding);\r\n\t\t\tpadding-bottom: calc(var(--containerVerticalPadding) * 2);\r\n\t\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\t\t\t\r\n\t\t\t.reservation_wrap {\r\n\t\t\t\tposition: sticky;\r\n\t\t\t\ttop: 80px;\r\n\t\t\t\tbox-shadow: var(--boxShadow);\r\n\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\tpadding: 20px;\r\n\t\t\t\t\r\n\t\t\t\t.reservation_room {\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\tpadding-bottom: var(--containerVerticalPadding);\r\n\t\t\t\t\tborder-bottom: var(--bottomBorder);\r\n\t\t\t\t\t\r\n\t\t\t\t\t.room_img {\r\n\t\t\t\t\t\twidth: 130px;\r\n\t\t\t\t\t\theight: 100px;\r\n\t\t\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\t\t\tbackground-image: url(\"../img/thumbnail1.jpg\");\r\n\t\t\t\t\t\tbackground-size: cover;\r\n\t\t\t\t\t\tmargin-right: 20px;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.room_info {\r\n\t\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\t\tfont-size: 12px;\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t.room_spec {\r\n\t\t\t\t\t\t\tcolor: var(--deepGray);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t.reservation_price {\r\n\t\t\t\t\tpadding-top: var(--containerVerticalPadding);\r\n\t\t\t\t\t\r\n\t\t\t\t\t.price_title {\r\n\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t\tmargin-bottom: 10px;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.price_item,\r\n\t\t\t\t\t.total_price {\r\n\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\tjustify-content: space-between;\r\n\t\t\t\t\t\tpadding-top: calc(var(--containerVerticalPadding) / 2);\r\n\r\n\t\t\t\t\t\t.price_name {\r\n\t\t\t\t\t\t\ttext-align: left;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.price_value {\r\n\t\t\t\t\t\t\ttext-align: right;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t.underline {\r\n\t\t\t\t\t\t\t@include underline;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.total_price {\r\n\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}","@mixin underline {\r\n\tborder-bottom: 1px solid black;\r\n\tdisplay: inline-block;\r\n\tline-height: 0.85;\r\n\ttext-shadow: 1px 1px var(--backgroudColor), 1px -1px var(--backgroudColor),\r\n\t\t-1px 1px var(--backgroudColor), -1px -1px var(--backgroudColor);\r\n\t@content;\r\n}\r\n\r\n@mixin star($font-size) {\r\n\tcolor: var(--red);\r\n\tfont-size: $font-size;\r\n}\r\n\r\n@mixin reservation_item {\r\n\tflex: 1 1 50%;\r\n\tpadding: 5px 10px;\r\n\tfont-size: 0.9rem;\r\n\theight: 50px;\r\n\r\n\t.reservation_display {\r\n\t\tcolor: var(--gray);\r\n\t\tfont-weight: 300;\r\n\t}\r\n}\r\n\r\n@mixin facility_rule_item {\r\n\tmargin: 15px 0;\r\n}\r\n\r\n@mixin facility_rule_icon {\r\n\tfont-size: 20px;\r\n\twidth: 40px;\r\n\ttext-align: center;\r\n}\r\n\r\n@mixin facility_rule_description {\r\n\tmargin-left: 15px;\r\n\tfont-weight: 300;\r\n}\r\n\r\n@mixin changeHeaderColor {\r\n\t.body_header ul .airbnb_icon,\r\n\t.body_header ul .header_profile .profile_img {\r\n\t\tcolor: var(--blue);\r\n\t}\r\n\t\r\n\t.body_header ul .room_search i {\r\n\t\tbackground-color: var(--blue);\r\n}\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

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

/***/ "./img/thumbnail1.jpg":
/*!****************************!*\
  !*** ./img/thumbnail1.jpg ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4b34a55e09dca0604686351fece0ace6.jpg");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9yZXNlcnZhdGlvbkZvcm0uc2NzcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL2ltZy90aHVtYm5haWwxLmpwZyIsIndlYnBhY2s6Ly8vLi9qcy9yZXNlcnZhdGlvbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9yZXNlcnZhdGlvbkZvcm0uc2Nzcz84ZWFjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDNEY7QUFDTztBQUNqQztBQUNsRSw4QkFBOEIsbUZBQTJCO0FBQ3pELDhCQUE4QixRQUFTLDhFQUE4RSxJQUFJLGtCQUFrQjtBQUMzSSx5Q0FBeUMsc0ZBQStCLENBQUMsMkRBQTZCO0FBQ3RHO0FBQ0EsOEJBQThCLFFBQVMsVUFBVSx3QkFBd0Isb0JBQW9CLHdCQUF3QixtQkFBbUIsMEJBQTBCLHFCQUFxQixzQ0FBc0MscUNBQXFDLDhCQUE4QixzQ0FBc0MseUJBQXlCLDRCQUE0Qiw4RUFBOEUsRUFBRSxlQUFlLG1DQUFtQyxFQUFFLDBCQUEwQixrQ0FBa0MsRUFBRSx3QkFBd0IsaUNBQWlDLEVBQUUsZ0JBQWdCLG1CQUFtQixnQ0FBZ0MsK0NBQStDLEVBQUUsNkJBQTZCLGlEQUFpRCxFQUFFLGlDQUFpQyx1QkFBdUIsd0JBQXdCLEVBQUUsMkNBQTJDLHlCQUF5QixtREFBbUQsRUFBRSwyQkFBMkIsb0JBQW9CLHFDQUFxQyxFQUFFLHdDQUF3QyxtQkFBbUIsbURBQW1ELEVBQUUsdURBQXVELDBEQUEwRCw2Q0FBNkMsd0JBQXdCLEVBQUUsaUVBQWlFLG1DQUFtQyw2QkFBNkIsRUFBRSwwRUFBMEUsMkJBQTJCLEVBQUUsMkRBQTJELDBCQUEwQiw4QkFBOEIsRUFBRSxtRkFBbUYscURBQXFELDZDQUE2QyxpQ0FBaUMsRUFBRSw2R0FBNkcseUJBQXlCLEVBQUUsZ0dBQWdHLDJCQUEyQixpRUFBaUUsZ0NBQWdDLHlCQUF5QixFQUFFLGlHQUFpRyx1QkFBdUIsNkJBQTZCLHdCQUF3QixFQUFFLDhHQUE4RywwQkFBMEIsRUFBRSwyRUFBMkUsbURBQW1ELDZDQUE2Qyw2QkFBNkIsRUFBRSxxRkFBcUYsMEJBQTBCLCtCQUErQixzQkFBc0Isc0JBQXNCLHVCQUF1QixzQ0FBc0Msd0JBQXdCLEVBQUUsa0xBQWtMLCtEQUErRCxtQ0FBbUMsNkJBQTZCLEVBQUUsa01BQWtNLDJCQUEyQixFQUFFLDRFQUE0RSxxREFBcUQsNkNBQTZDLHdCQUF3Qix5Q0FBeUMsRUFBRSxnRkFBZ0YsOEJBQThCLGdDQUFnQyxFQUFFLG1HQUFtRyw2QkFBNkIsa0NBQWtDLEVBQUUsNEdBQTRHLDJCQUEyQixFQUFFLDhFQUE4RSxxREFBcUQsRUFBRSxzRkFBc0YsNkJBQTZCLG1DQUFtQyw0QkFBNEIsRUFBRSw2RkFBNkYsK0JBQStCLHFDQUFxQyw2Q0FBNkMsb0NBQW9DLGdDQUFnQywwSkFBMEosRUFBRSw2RkFBNkYsc0JBQXNCLDBCQUEwQix3QkFBd0IsK0JBQStCLHlDQUF5Qyx5QkFBeUIsMkJBQTJCLCtDQUErQywrQkFBK0IsNkJBQTZCLDRCQUE0Qiw0QkFBNEIsRUFBRSx5Q0FBeUMsbUJBQW1CLDJCQUEyQixxREFBcUQsa0VBQWtFLG1EQUFtRCxFQUFFLDZEQUE2RCwyQkFBMkIsb0JBQW9CLHVDQUF1Qyw2Q0FBNkMsd0JBQXdCLEVBQUUsaUZBQWlGLDBCQUEwQiw0REFBNEQsK0NBQStDLEVBQUUsNkZBQTZGLDJCQUEyQiw0QkFBNEIsaURBQWlELGdGQUFnRixxQ0FBcUMsaUNBQWlDLEVBQUUsOEZBQThGLCtCQUErQiw4QkFBOEIsRUFBRSwyR0FBMkcsdUNBQXVDLEVBQUUsa0ZBQWtGLHlEQUF5RCxFQUFFLGlHQUFpRywrQkFBK0Isa0NBQWtDLEVBQUUsZ01BQWdNLDRCQUE0Qiw2Q0FBNkMscUVBQXFFLEVBQUUsNE5BQTROLGlDQUFpQyxFQUFFLDhOQUE4TixrQ0FBa0MsRUFBRSwwTkFBME4sK0NBQStDLHNDQUFzQyxrQ0FBa0MsNEpBQTRKLEVBQUUsaUdBQWlHLCtCQUErQixFQUFFLFNBQVMsc0pBQXNKLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFlBQVksYUFBYSxhQUFhLFlBQVksV0FBVyxZQUFZLGtCQUFrQixLQUFLLGtCQUFrQixNQUFNLGtCQUFrQixNQUFNLGtCQUFrQixPQUFPLFVBQVUsWUFBWSxrQkFBa0IsTUFBTSxpQkFBaUIsTUFBTSxVQUFVLGVBQWUsTUFBTSxZQUFZLGtCQUFrQixNQUFNLFdBQVcsaUJBQWlCLE9BQU8sV0FBVyxpQkFBaUIsT0FBTyxhQUFhLGFBQWEsZ0JBQWdCLE9BQU8sYUFBYSxrQkFBa0IsT0FBTyxnQkFBZ0IsT0FBTyxXQUFXLGlCQUFpQixPQUFPLGFBQWEsYUFBYSxrQkFBa0IsT0FBTyxnQkFBZ0IsT0FBTyxXQUFXLFlBQVksYUFBYSxnQkFBZ0IsT0FBTyxXQUFXLFlBQVksZ0JBQWdCLE9BQU8sZ0JBQWdCLE9BQU8sYUFBYSxhQUFhLGtCQUFrQixPQUFPLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGdCQUFnQixPQUFPLGFBQWEsYUFBYSxrQkFBa0IsT0FBTyxnQkFBZ0IsT0FBTyxhQUFhLGFBQWEsV0FBVyxpQkFBaUIsT0FBTyxhQUFhLGlCQUFpQixPQUFPLGFBQWEsa0JBQWtCLE9BQU8sZ0JBQWdCLE9BQU8sa0JBQWtCLE9BQU8sYUFBYSxhQUFhLGdCQUFnQixPQUFPLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxrQkFBa0IsTUFBTSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsZUFBZSxPQUFPLFdBQVcsWUFBWSxhQUFhLGFBQWEsa0JBQWtCLE9BQU8sYUFBYSxXQUFXLFlBQVksYUFBYSxnQkFBZ0IsT0FBTyxXQUFXLFlBQVksa0JBQWtCLE9BQU8sV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGtCQUFrQixPQUFPLGFBQWEsZ0JBQWdCLE9BQU8sa0JBQWtCLE9BQU8sa0JBQWtCLE9BQU8sYUFBYSxrQkFBa0IsUUFBUSxXQUFXLFlBQVksa0JBQWtCLFFBQVEsa0JBQWtCLFFBQVEsa0JBQWtCLFFBQVEsWUFBWSxhQUFhLGFBQWEsa0JBQWtCLE1BQU0sbUhBQW1ILElBQUksb0JBQW9CLFdBQVcsMEJBQTBCLHNCQUFzQiwwQkFBMEIscUJBQXFCLDRCQUE0Qix1QkFBdUIsd0NBQXdDLHVDQUF1QyxnQ0FBZ0Msd0NBQXdDLDJCQUEyQiw4QkFBOEIsZ0ZBQWdGLEtBQUssbUJBQW1CLHFDQUFxQyxLQUFLLDhCQUE4QixvQ0FBb0MsS0FBSyw0QkFBNEIsbUNBQW1DLEtBQUssMkJBQTJCLDBCQUEwQixvQkFBb0IscUJBQXFCLGtDQUFrQyxpREFBaUQsMEJBQTBCLG1EQUFtRCxtQkFBbUIseUJBQXlCLDBCQUEwQixTQUFTLDZCQUE2QiwyQkFBMkIscURBQXFELFNBQVMsT0FBTyx3QkFBd0Isc0JBQXNCLHVDQUF1Qyw0QkFBNEIscUJBQXFCLHFEQUFxRCxrQ0FBa0MsNERBQTRELCtDQUErQywwQkFBMEIsaUNBQWlDLHFDQUFxQywrQkFBK0Isb0NBQW9DLDZCQUE2QixlQUFlLGFBQWEsMkJBQTJCLDRCQUE0QixnQ0FBZ0MsYUFBYSxXQUFXLHVDQUF1QyxnREFBZ0QseURBQXlELGlEQUFpRCxxQ0FBcUMscURBQXFELDZCQUE2QixlQUFlLHdDQUF3QywrQkFBK0IscUVBQXFFLG9DQUFvQyw2QkFBNkIsZUFBZSx5Q0FBeUMsMkJBQTJCLGlDQUFpQyw4QkFBOEIsOENBQThDLDhCQUE4QixpQkFBaUIsbUJBQW1CLHVCQUF1Qix3Q0FBd0MsdURBQXVELGlEQUFpRCxpQ0FBaUMsdUNBQXVDLGdDQUFnQyxxQ0FBcUMsNEJBQTRCLDRCQUE0Qiw2QkFBNkIsNENBQTRDLDhCQUE4QixlQUFlLGdFQUFnRSxtRUFBbUUsdUNBQXVDLGlDQUFpQyx3Q0FBd0MsK0JBQStCLGlCQUFpQixlQUFlLDJCQUEyQix5Q0FBeUMseURBQXlELGlEQUFpRCw0QkFBNEIsNkNBQTZDLCtCQUErQixrQ0FBa0Msc0NBQXNDLGVBQWUsa0RBQWtELGlDQUFpQyxzQ0FBc0Msd0NBQXdDLCtCQUErQixpQkFBaUIsZUFBZSxhQUFhLDJDQUEyQyx5REFBeUQsbUNBQW1DLGlDQUFpQyx1Q0FBdUMsZ0NBQWdDLHNDQUFzQyxtQ0FBbUMseUNBQXlDLHFDQUFxQyxpQkFBaUIsZUFBZSwwQ0FBMEMsMEJBQTBCLDhCQUE4Qiw0QkFBNEIsbUNBQW1DLDZDQUE2Qyw2QkFBNkIsK0JBQStCLG1EQUFtRCxtQ0FBbUMsaUNBQWlDLGdDQUFnQyxnQ0FBZ0MsZUFBZSxhQUFhLFdBQVcsU0FBUyw2QkFBNkIscUJBQXFCLDZCQUE2Qix1REFBdUQsb0VBQW9FLHFEQUFxRCx1Q0FBdUMsNkJBQTZCLHNCQUFzQix5Q0FBeUMsK0NBQStDLDBCQUEwQiwyQ0FBMkMsNEJBQTRCLDhEQUE4RCxpREFBaUQsdUNBQXVDLDZCQUE2Qiw4QkFBOEIsbURBQW1ELGlFQUFpRSx1Q0FBdUMsbUNBQW1DLGVBQWUsd0NBQXdDLGlDQUFpQyxnQ0FBZ0MsNENBQTRDLHlDQUF5QyxpQkFBaUIsZUFBZSxhQUFhLDRDQUE0QywyREFBMkQsMENBQTBDLGlDQUFpQyxvQ0FBb0MsZUFBZSxvRUFBb0UsOEJBQThCLCtDQUErQyx1RUFBdUUsaUNBQWlDLG1DQUFtQyxpQkFBaUIsa0NBQWtDLG9DQUFvQyxpQkFBaUIsNENBQTRDLHFDQUFxQyxpQkFBaUIsZUFBZSwwQ0FBMEMsaUNBQWlDLGVBQWUsYUFBYSxXQUFXLFNBQVMsT0FBTyxLQUFLLHFCQUFxQixxQ0FBcUMsNEJBQTRCLHdCQUF3Qix5SkFBeUosZUFBZSxLQUFLLGlDQUFpQyx3QkFBd0IsNEJBQTRCLEtBQUssaUNBQWlDLG9CQUFvQix3QkFBd0Isd0JBQXdCLG1CQUFtQixnQ0FBZ0MsMkJBQTJCLHlCQUF5QixPQUFPLEtBQUssbUNBQW1DLHFCQUFxQixLQUFLLG1DQUFtQyxzQkFBc0Isa0JBQWtCLHlCQUF5QixLQUFLLDBDQUEwQyx3QkFBd0IsdUJBQXVCLEtBQUssa0NBQWtDLHVGQUF1RiwyQkFBMkIsT0FBTyw0Q0FBNEMsc0NBQXNDLEtBQUssS0FBSyx1QkFBdUI7QUFDOW1sQjtBQUNlLHNGQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7O0FDVjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qjs7QUFFOUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsY0FBYztBQUNuRTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQzdGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsU0FBSTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUVBQXFFLHFCQUFxQixhQUFhOztBQUV2Rzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQzVRQTtBQUFlLG9GQUF1Qix5Q0FBeUMsRTs7Ozs7Ozs7Ozs7O0FDQS9FO0FBQUE7QUFBQTtBQUFzQzs7QUFFdEMsaUk7Ozs7Ozs7Ozs7O0FDRkEsVUFBVSxtQkFBTyxDQUFDLHVKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyxnT0FBK0c7O0FBRWpKOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDIiwiZmlsZSI6InJlc2VydmVGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvcmVzb3VyY2VzL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL3Jlc2VydmF0aW9uRm9ybS5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL2ltZy90aHVtYm5haWwxLmpwZ1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0tSOndnaHRAMzAwOzUwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0td3JhcFdpZHRoOiAxMjAwcHg7XFxuICAtLWdyYXk6ICM3ZjhjOGQ7XFxuICAtLWRlZXBHcmF5OiAjNTM1YzY4O1xcbiAgLS1yZWQ6ICNmZjM4NWM7XFxuICAtLWJsdWU6IGxpZ2h0c2VhZ3JlZW47XFxuICAtLWdyZWVuOiAjMjNjMzgyO1xcbiAgLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luOiA1MHB4O1xcbiAgLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmc6IDMwcHg7XFxuICAtLWRldGFpbEZvbnRTaXplOiBzbWFsbGVyO1xcbiAgLS1ib3R0b21Cb3JkZXI6IDFweCBzb2xpZCAjZWNmMGYxO1xcbiAgLS1ib3JkZXJSYWRpdXM6IDEwcHg7XFxuICAtLWNhbGVuZGFyRGF5U2l6ZTogNDBweDtcXG4gIC0tYm94U2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7IH1cXG5cXG4uQUNDRVBURUQge1xcbiAgY29sb3I6IHZhcigtLWdyZWVuKSAhaW1wb3J0YW50OyB9XFxuXFxuLlBFTkRJTkcsIC5DT01QTEVURUQge1xcbiAgY29sb3I6IHZhcigtLWdyYXkpICFpbXBvcnRhbnQ7IH1cXG5cXG4uUkVGVVNFRCwgLkNBTkNMRUQge1xcbiAgY29sb3I6IHZhcigtLXJlZCkgIWltcG9ydGFudDsgfVxcblxcbi5tYWluX3dyYXAge1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBtYXgtd2lkdGg6IHZhcigtLXdyYXBXaWR0aCk7XFxuICBwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7IH1cXG4gIC5tYWluX3dyYXAgLm1haW5faGVhZGVyIHtcXG4gICAgbWFyZ2luOiAwIHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pOyB9XFxuICAgIC5tYWluX3dyYXAgLm1haW5faGVhZGVyIGkge1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAubWFpbl93cmFwIC5tYWluX2hlYWRlciAubWFpbl90aXRsZSB7XFxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICBwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7IH1cXG4gIC5tYWluX3dyYXAgLm1haW5fbWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcbiAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fbGVmdCB7XFxuICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICBtYXJnaW46IDAgdmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbik7IH1cXG4gICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fbGVmdCAuYWR2aXNlX3dyYXAge1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZyk7XFxuICAgICAgICBib3JkZXItYm90dG9tOiB2YXIoLS1ib3R0b21Cb3JkZXIpO1xcbiAgICAgICAgZGlzcGxheTogZmxleDsgfVxcbiAgICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX2xlZnQgLmFkdmlzZV93cmFwIC5hZHZpc2Uge1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZGVlcEdyYXkpO1xcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwOyB9XFxuICAgICAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9sZWZ0IC5hZHZpc2Vfd3JhcCAuYWR2aXNlIHN0cm9uZyB7XFxuICAgICAgICAgICAgY29sb3I6IGJsYWNrOyB9XFxuICAgICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fbGVmdCAuYWR2aXNlX3dyYXAgaSB7XFxuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1yZWQpOyB9XFxuICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX2xlZnQgLnJlc2VydmF0aW9uX2Zvcm0gLnJlc2VydmF0aW9uX2luZm9fd3JhcCB7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7XFxuICAgICAgICBib3JkZXItYm90dG9tOiB2YXIoLS1ib3R0b21Cb3JkZXIpO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWRlZXBHcmF5KTsgfVxcbiAgICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX2xlZnQgLnJlc2VydmF0aW9uX2Zvcm0gLnJlc2VydmF0aW9uX2luZm9fd3JhcCAucmVzZXJ2YXRpb25faW5mb190aXRsZSB7XFxuICAgICAgICAgIGNvbG9yOiBibGFjazsgfVxcbiAgICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX2xlZnQgLnJlc2VydmF0aW9uX2Zvcm0gLnJlc2VydmF0aW9uX2luZm9fd3JhcCAuaW5mb19uYW1lIHtcXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbikvMik7XFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgICAgICAgIGNvbG9yOiBibGFjazsgfVxcbiAgICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX2xlZnQgLnJlc2VydmF0aW9uX2Zvcm0gLnJlc2VydmF0aW9uX2luZm9fd3JhcCAuaW5mb192YWx1ZSB7XFxuICAgICAgICAgIGFsbDogdW5zZXQ7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgICAgICAgIHdpZHRoOiA5MHB4OyB9XFxuICAgICAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9sZWZ0IC5yZXNlcnZhdGlvbl9mb3JtIC5yZXNlcnZhdGlvbl9pbmZvX3dyYXAgLmluZm9fdmFsdWU6bGFzdC1jaGlsZCB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwcHg7IH1cXG4gICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fbGVmdCAucmVzZXJ2YXRpb25fZm9ybSAucmVmdW5kX25vdGljZSB7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm90dG9tQm9yZGVyKTtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX2xlZnQgLnJlc2VydmF0aW9uX2Zvcm0gLnJlZnVuZF9ub3RpY2U6OmJlZm9yZSB7XFxuICAgICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgIHRvcDogMzVweDtcXG4gICAgICAgICAgbGVmdDogMHB4O1xcbiAgICAgICAgICB3aWR0aDogOXB4O1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZBRjBGO1xcbiAgICAgICAgICBoZWlnaHQ6IDgwJTsgfVxcbiAgICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX2xlZnQgLnJlc2VydmF0aW9uX2Zvcm0gLnJlZnVuZF9ub3RpY2UgLnJlZnVuZF9kZXNjcmlwdGlvbiwgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX2xlZnQgLnJlc2VydmF0aW9uX2Zvcm0gLnJlZnVuZF9ub3RpY2UgLnJlZnVuZF9zbWFsbCB7XFxuICAgICAgICAgIG1hcmdpbjogY2FsYyh2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKS8yKSAwO1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZGVlcEdyYXkpO1xcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwOyB9XFxuICAgICAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9sZWZ0IC5yZXNlcnZhdGlvbl9mb3JtIC5yZWZ1bmRfbm90aWNlIC5yZWZ1bmRfZGVzY3JpcHRpb24gc3Ryb25nLCAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fbGVmdCAucmVzZXJ2YXRpb25fZm9ybSAucmVmdW5kX25vdGljZSAucmVmdW5kX3NtYWxsIHN0cm9uZyB7XFxuICAgICAgICAgICAgY29sb3I6IGJsYWNrOyB9XFxuICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX2xlZnQgLnJlc2VydmF0aW9uX2Zvcm0gLmNvbmZpcm1fbm90aWNlIHtcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgMDtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IHZhcigtLWJvdHRvbUJvcmRlcik7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuICAgICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fbGVmdCAucmVzZXJ2YXRpb25fZm9ybSAuY29uZmlybV9ub3RpY2UgaSB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4OyB9XFxuICAgICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fbGVmdCAucmVzZXJ2YXRpb25fZm9ybSAuY29uZmlybV9ub3RpY2UgLmNvbmZpcm1fZGVzY3JpcHRpb24ge1xcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICAgICAgICBjb2xvcjogdmFyKC1kZWVwR3JheSk7IH1cXG4gICAgICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX2xlZnQgLnJlc2VydmF0aW9uX2Zvcm0gLmNvbmZpcm1fbm90aWNlIC5jb25maXJtX2Rlc2NyaXB0aW9uIHN0cm9uZyB7XFxuICAgICAgICAgICAgY29sb3I6IGJsYWNrOyB9XFxuICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX2xlZnQgLnJlc2VydmF0aW9uX2Zvcm0gLnJlc2VydmVfYnRuX3dyYXAge1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAwOyB9XFxuICAgICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fbGVmdCAucmVzZXJ2YXRpb25fZm9ybSAucmVzZXJ2ZV9idG5fd3JhcCBzbWFsbCB7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1kZWVwR3JheSk7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDsgfVxcbiAgICAgICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fbGVmdCAucmVzZXJ2YXRpb25fZm9ybSAucmVzZXJ2ZV9idG5fd3JhcCBzbWFsbCBzcGFuIHtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgICAgIGNvbG9yOiBtZWRpdW1zbGF0ZWJsdWU7XFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMC44NTtcXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvciksIDFweCAtMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKSwgLTFweCAxcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpLCAtMXB4IC0xcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpOyB9XFxuICAgICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fbGVmdCAucmVzZXJ2YXRpb25fZm9ybSAucmVzZXJ2ZV9idG5fd3JhcCAucmVzZXJ2ZV9idG4ge1xcbiAgICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7IH1cXG4gICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX3JpZ2h0IHtcXG4gICAgICB3aWR0aDogNTAlO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBwYWRkaW5nLXRvcDogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKTtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpICogMik7XFxuICAgICAgbWFyZ2luOiAwIHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pOyB9XFxuICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIHtcXG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XFxuICAgICAgICB0b3A6IDgwcHg7XFxuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3hTaGFkb3cpO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzKTtcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7IH1cXG4gICAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fcm9vbSB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpO1xcbiAgICAgICAgICBib3JkZXItYm90dG9tOiB2YXIoLS1ib3R0b21Cb3JkZXIpOyB9XFxuICAgICAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fcm9vbSAucm9vbV9pbWcge1xcbiAgICAgICAgICAgIHdpZHRoOiAxMzBweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDsgfVxcbiAgICAgICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX3Jvb20gLnJvb21faW5mbyB7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7IH1cXG4gICAgICAgICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX3Jvb20gLnJvb21faW5mbyAucm9vbV9zcGVjIHtcXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kZWVwR3JheSk7IH1cXG4gICAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fcHJpY2Uge1xcbiAgICAgICAgICBwYWRkaW5nLXRvcDogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKTsgfVxcbiAgICAgICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX3ByaWNlIC5wcmljZV90aXRsZSB7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyB9XFxuICAgICAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fcHJpY2UgLnByaWNlX2l0ZW0sXFxuICAgICAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fcHJpY2UgLnRvdGFsX3ByaWNlIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIC8gMik7IH1cXG4gICAgICAgICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX3ByaWNlIC5wcmljZV9pdGVtIC5wcmljZV9uYW1lLFxcbiAgICAgICAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fcHJpY2UgLnRvdGFsX3ByaWNlIC5wcmljZV9uYW1lIHtcXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7IH1cXG4gICAgICAgICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX3ByaWNlIC5wcmljZV9pdGVtIC5wcmljZV92YWx1ZSxcXG4gICAgICAgICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX3ByaWNlIC50b3RhbF9wcmljZSAucHJpY2VfdmFsdWUge1xcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG4gICAgICAgICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX3ByaWNlIC5wcmljZV9pdGVtIC51bmRlcmxpbmUsXFxuICAgICAgICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9wcmljZSAudG90YWxfcHJpY2UgLnVuZGVybGluZSB7XFxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMC44NTtcXG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKSwgMXB4IC0xcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpLCAtMXB4IDFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvciksIC0xcHggLTFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvcik7IH1cXG4gICAgICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9wcmljZSAudG90YWxfcHJpY2Uge1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc2Nzcy9fX2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovL3Njc3MvcmVzZXJ2YXRpb25Gb3JtLnNjc3NcIixcIndlYnBhY2s6Ly9zY3NzL19fbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDQyxtQkFBWTtFQUNaLGVBQU87RUFDUCxtQkFBVztFQUNYLGNBQU07RUFDTixxQkFBTztFQUNQLGdCQUFRO0VBQ1IsaUNBQTRCO0VBQzVCLGdDQUEyQjtFQUMzQix5QkFBaUI7RUFDakIsaUNBQWU7RUFDZixvQkFBZTtFQUNmLHVCQUFrQjtFQUNsQix5RUFBWSxFQUFBOztBQUdiO0VBQ0MsOEJBQThCLEVBQUE7O0FBRy9CO0VBQ0MsNkJBQTZCLEVBQUE7O0FBRzlCO0VBQ0MsNEJBQTRCLEVBQUE7O0FDdkI3QjtFQUNDLGNBQWM7RUFDZCwyQkFBMkI7RUFDM0IsMENBQTBDLEVBQUE7RUFIM0M7SUFNRSwwQ0FBMEMsRUFBQTtJQU41QztNQVNHLGNBQWM7TUFDZCxlQUFlLEVBQUE7SUFWbEI7TUFjRyxnQkFBZ0I7TUFDaEIsMENBQTBDLEVBQUE7RUFmN0M7SUFvQkUsYUFBYTtJQUNiLDhCQUE4QixFQUFBO0lBckJoQztNQXdCRyxVQUFVO01BQ1YsMENBQTBDLEVBQUE7TUF6QjdDO1FBNEJJLCtDQUErQztRQUMvQyxrQ0FBa0M7UUFDbEMsYUFBYSxFQUFBO1FBOUJqQjtVQWlDSyxzQkFBc0I7VUFDdEIsZ0JBQWdCLEVBQUE7VUFsQ3JCO1lBcUNNLFlBQVksRUFBQTtRQXJDbEI7VUEwQ0ssYUFBYTtVQUNiLGlCQUFpQixFQUFBO01BM0N0QjtRQWtESywwQ0FBMEM7UUFDMUMsa0NBQWtDO1FBQ2xDLHNCQUFzQixFQUFBO1FBcEQzQjtVQXVETSxZQUFZLEVBQUE7UUF2RGxCO1VBMkRNLGNBQWM7VUFDZCxvREFBb0Q7VUFDcEQsbUJBQW1CO1VBQ25CLFlBQVksRUFBQTtRQTlEbEI7VUFrRU0sVUFBVTtVQUNWLGdCQUFnQjtVQUNoQixXQUFXLEVBQUE7VUFwRWpCO1lBdUVPLFdBQVcsRUFBQTtNQXZFbEI7UUE2RUssd0NBQXdDO1FBQ3hDLGtDQUFrQztRQUNsQyxrQkFBa0IsRUFBQTtRQS9FdkI7VUFrRlMsV0FBVztVQUNYLGtCQUFrQjtVQUNsQixTQUFTO1VBQ1QsU0FBUztVQUNULFVBQVU7VUFDVix5QkFBeUI7VUFDekIsV0FBVyxFQUFBO1FBeEZwQjtVQTRGTSxrREFBa0Q7VUFDbEQsc0JBQXNCO1VBQ3RCLGdCQUFnQixFQUFBO1VBOUZ0QjtZQWlHTyxZQUFZLEVBQUE7TUFqR25CO1FBd0dLLDBDQUEwQztRQUMxQyxrQ0FBa0M7UUFDbEMsYUFBYTtRQUNiLDhCQUE4QixFQUFBO1FBM0duQztVQThHTSxpQkFBaUI7VUFDZCxtQkFBbUIsRUFBQTtRQS9HNUI7VUFtSE0sZ0JBQWdCO1VBQ2hCLHFCQUFxQixFQUFBO1VBcEgzQjtZQXVITyxZQUFZLEVBQUE7TUF2SG5CO1FBNkhLLDBDQUEwQyxFQUFBO1FBN0gvQztVQWdJTSxnQkFBZ0I7VUFDaEIsc0JBQXNCO1VBQ3RCLGVBQWUsRUFBQTtVQWxJckI7WUFxSU8sZ0JBQWdCO1lBQ2hCLHNCQUFzQjtZQ3hJNUIsOEJBQThCO1lBQzlCLHFCQUFxQjtZQUNyQixpQkFBaUI7WUFDakIsMklBQ2dFLEVBQUE7UURGakU7VUE0SU0sU0FBUztVQUNULGFBQWE7VUFDYixXQUFXO1VBQ1gsa0JBQWtCO1VBQ2xCLDRCQUE0QjtVQUM1QixZQUFZO1VBQ1osY0FBYztVQUNkLGtDQUFrQztVQUNsQyxrQkFBa0I7VUFDbEIsZ0JBQWdCO1VBQ2hCLGVBQWU7VUFDZixlQUFlLEVBQUE7SUF2SnJCO01BOEpHLFVBQVU7TUFDVixrQkFBa0I7TUFDbEIsNENBQTRDO01BQzVDLHlEQUF5RDtNQUN6RCwwQ0FBMEMsRUFBQTtNQWxLN0M7UUFxS0ksZ0JBQWdCO1FBQ2hCLFNBQVM7UUFDVCw0QkFBNEI7UUFDNUIsa0NBQWtDO1FBQ2xDLGFBQWEsRUFBQTtRQXpLakI7VUE0S0ssYUFBYTtVQUNiLCtDQUErQztVQUMvQyxrQ0FBa0MsRUFBQTtVQTlLdkM7WUFpTE0sWUFBWTtZQUNaLGFBQWE7WUFDYixrQ0FBa0M7WUFDbEMseURBQThDO1lBQzlDLHNCQUFzQjtZQUN0QixrQkFBa0IsRUFBQTtVQXRMeEI7WUEwTE0sZ0JBQWdCO1lBQ2hCLGVBQWUsRUFBQTtZQTNMckI7Y0E4TE8sc0JBQXNCLEVBQUE7UUE5TDdCO1VBb01LLDRDQUE0QyxFQUFBO1VBcE1qRDtZQXVNTSxnQkFBZ0I7WUFDaEIsbUJBQW1CLEVBQUE7VUF4TXpCOztZQTZNTSxhQUFhO1lBQ2IsOEJBQThCO1lBQzlCLHNEQUFzRCxFQUFBO1lBL001RDs7Y0FrTk8sZ0JBQWdCLEVBQUE7WUFsTnZCOztjQXNOTyxpQkFBaUIsRUFBQTtZQXROeEI7O2NDRkMsOEJBQThCO2NBQzlCLHFCQUFxQjtjQUNyQixpQkFBaUI7Y0FDakIsMklBQ2dFLEVBQUE7VURGakU7WUErTk0sZ0JBQWdCLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0tSOndnaHRAMzAwOzUwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuOnJvb3Qge1xcclxcblxcdC0td3JhcFdpZHRoOiAxMjAwcHg7XFxyXFxuXFx0LS1ncmF5OiAjN2Y4YzhkO1xcclxcblxcdC0tZGVlcEdyYXk6ICM1MzVjNjg7XFxyXFxuXFx0LS1yZWQ6ICNmZjM4NWM7XFxyXFxuXFx0LS1ibHVlOiBsaWdodHNlYWdyZWVuO1xcclxcblxcdC0tZ3JlZW46ICMyM2MzODI7XFxyXFxuXFx0LS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luOiA1MHB4O1xcclxcblxcdC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nOiAzMHB4O1xcclxcblxcdC0tZGV0YWlsRm9udFNpemU6IHNtYWxsZXI7XFxyXFxuXFx0LS1ib3R0b21Cb3JkZXI6IDFweCBzb2xpZCAjZWNmMGYxO1xcclxcblxcdC0tYm9yZGVyUmFkaXVzOiAxMHB4O1xcclxcblxcdC0tY2FsZW5kYXJEYXlTaXplOiA0MHB4O1xcclxcblxcdC0tYm94U2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XFxyXFxufVxcclxcblxcclxcbi5BQ0NFUFRFRCB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWdyZWVuKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uUEVORElORywgLkNPTVBMRVRFRCB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWdyYXkpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5SRUZVU0VELCAuQ0FOQ0xFRCB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLXJlZCkgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0IFxcXCIuL19iYXNlXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuL19taXhpbnNcXFwiO1xcclxcblxcclxcbi5tYWluX3dyYXAge1xcclxcblxcdG1hcmdpbjogMCBhdXRvO1xcclxcblxcdG1heC13aWR0aDogdmFyKC0td3JhcFdpZHRoKTtcXHJcXG5cXHRwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7XFxyXFxuXFx0XFxyXFxuXFx0Lm1haW5faGVhZGVyIHtcXHJcXG5cXHRcXHRtYXJnaW46IDAgdmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbik7XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0aSB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQubWFpbl90aXRsZSB7XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHRcXHJcXG5cXHQubWFpbl9tYWluIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQubWFpbl9sZWZ0IHtcXHJcXG5cXHRcXHRcXHR3aWR0aDogNTAlO1xcclxcblxcdFxcdFxcdG1hcmdpbjogMCB2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKTtcXHJcXG5cXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHQuYWR2aXNlX3dyYXAge1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmctYm90dG9tOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlci1ib3R0b206IHZhcigtLWJvdHRvbUJvcmRlcik7XFxyXFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHQuYWR2aXNlIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRjb2xvcjogdmFyKC0tZGVlcEdyYXkpO1xcclxcblxcdFxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0c3Ryb25nIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRpIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRwYWRkaW5nOiAyMHB4O1xcclxcblxcdFxcdFxcdFxcdFxcdGNvbG9yOiB2YXIoLS1yZWQpO1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0LnJlc2VydmF0aW9uX2Zvcm0ge1xcclxcblxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdC5yZXNlcnZhdGlvbl9pbmZvX3dyYXAge1xcclxcblxcdFxcdFxcdFxcdFxcdHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRib3JkZXItYm90dG9tOiB2YXIoLS1ib3R0b21Cb3JkZXIpO1xcclxcblxcdFxcdFxcdFxcdFxcdGNvbG9yOiB2YXIoLS1kZWVwR3JheSk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0LnJlc2VydmF0aW9uX2luZm9fdGl0bGUge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0LmluZm9fbmFtZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0bWFyZ2luLXRvcDogY2FsYyh2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKS8yKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0LmluZm9fdmFsdWUge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGFsbDogdW5zZXQ7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR3aWR0aDogOTBweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQmOmxhc3QtY2hpbGQge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHdpZHRoOiAxMHB4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdH1cXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdC5yZWZ1bmRfbm90aWNlIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpO1xcclxcblxcdFxcdFxcdFxcdFxcdGJvcmRlci1ib3R0b206IHZhcigtLWJvdHRvbUJvcmRlcik7XFxyXFxuXFx0XFx0XFx0XFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdCY6OmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0XFx0ICAgIFxcdGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcblxcdFxcdFxcdFxcdFxcdCAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgIHRvcDogMzVweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgbGVmdDogMHB4O1xcclxcblxcdFxcdFxcdFxcdFxcdCAgICB3aWR0aDogOXB4O1xcclxcblxcdFxcdFxcdFxcdFxcdCAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZBRjBGO1xcclxcblxcdFxcdFxcdFxcdFxcdCAgICBoZWlnaHQ6IDgwJTtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0LnJlZnVuZF9kZXNjcmlwdGlvbiwgLnJlZnVuZF9zbWFsbCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0bWFyZ2luOiBjYWxjKHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pLzIpIDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IHZhcigtLWRlZXBHcmF5KTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRmb250LXdlaWdodDogMzAwO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdHN0cm9uZyB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdC5jb25maXJtX25vdGljZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0cGFkZGluZzogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAwO1xcclxcblxcdFxcdFxcdFxcdFxcdGJvcmRlci1ib3R0b206IHZhcigtLWJvdHRvbUJvcmRlcik7XFxyXFxuXFx0XFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0aSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxLjVyZW07XFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdC5jb25maXJtX2Rlc2NyaXB0aW9uIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRmb250LXdlaWdodDogMzAwO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiB2YXIoLWRlZXBHcmF5KTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRzdHJvbmcge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHQucmVzZXJ2ZV9idG5fd3JhcCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0cGFkZGluZzogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAwO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdHNtYWxsIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRmb250LXdlaWdodDogMzAwO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiB2YXIoLS1kZWVwR3JheSk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxMnB4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdHNwYW4ge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IG1lZGl1bXNsYXRlYmx1ZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRAaW5jbHVkZSB1bmRlcmxpbmU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHQucmVzZXJ2ZV9idG4ge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGJvcmRlcjogMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRvdXRsaW5lOiBub25lO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdHBhZGRpbmc6IDEwcHggMzBweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRtYXJnaW46IDEwcHggMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IDE2cHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdFxcclxcblxcdFxcdC5tYWluX3JpZ2h0IHtcXHJcXG5cXHRcXHRcXHR3aWR0aDogNTAlO1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nLXRvcDogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKTtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpICogMik7XFxyXFxuXFx0XFx0XFx0bWFyZ2luOiAwIHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pO1xcclxcblxcdFxcdFxcdFxcclxcblxcdFxcdFxcdC5yZXNlcnZhdGlvbl93cmFwIHtcXHJcXG5cXHRcXHRcXHRcXHRwb3NpdGlvbjogc3RpY2t5O1xcclxcblxcdFxcdFxcdFxcdHRvcDogODBweDtcXHJcXG5cXHRcXHRcXHRcXHRib3gtc2hhZG93OiB2YXIoLS1ib3hTaGFkb3cpO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogMjBweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHQucmVzZXJ2YXRpb25fcm9vbSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRwYWRkaW5nLWJvdHRvbTogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRib3JkZXItYm90dG9tOiB2YXIoLS1ib3R0b21Cb3JkZXIpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdC5yb29tX2ltZyB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0d2lkdGg6IDEzMHB4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGhlaWdodDogMTAwcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltZy90aHVtYm5haWwxLmpwZ1xcXCIpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0bWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHQucm9vbV9pbmZvIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRmb250LXdlaWdodDogMzAwO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMTJweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQucm9vbV9zcGVjIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogdmFyKC0tZGVlcEdyYXkpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdC5yZXNlcnZhdGlvbl9wcmljZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0cGFkZGluZy10b3A6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZyk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0LnByaWNlX3RpdGxlIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdC5wcmljZV9pdGVtLFxcclxcblxcdFxcdFxcdFxcdFxcdC50b3RhbF9wcmljZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0cGFkZGluZy10b3A6IGNhbGModmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAvIDIpO1xcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdFxcdC5wcmljZV9uYW1lIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQucHJpY2VfdmFsdWUge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHRleHQtYWxpZ246IHJpZ2h0O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQudW5kZXJsaW5lIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRAaW5jbHVkZSB1bmRlcmxpbmU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHQudG90YWxfcHJpY2Uge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XCIsXCJAbWl4aW4gdW5kZXJsaW5lIHtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAwLjg1O1xcclxcblxcdHRleHQtc2hhZG93OiAxcHggMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKSwgMXB4IC0xcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpLFxcclxcblxcdFxcdC0xcHggMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKSwgLTFweCAtMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKTtcXHJcXG5cXHRAY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIHN0YXIoJGZvbnQtc2l6ZSkge1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQpO1xcclxcblxcdGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIHJlc2VydmF0aW9uX2l0ZW0ge1xcclxcblxcdGZsZXg6IDEgMSA1MCU7XFxyXFxuXFx0cGFkZGluZzogNXB4IDEwcHg7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjlyZW07XFxyXFxuXFx0aGVpZ2h0OiA1MHB4O1xcclxcblxcclxcblxcdC5yZXNlcnZhdGlvbl9kaXNwbGF5IHtcXHJcXG5cXHRcXHRjb2xvcjogdmFyKC0tZ3JheSk7XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBmYWNpbGl0eV9ydWxlX2l0ZW0ge1xcclxcblxcdG1hcmdpbjogMTVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZmFjaWxpdHlfcnVsZV9pY29uIHtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0d2lkdGg6IDQwcHg7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZmFjaWxpdHlfcnVsZV9kZXNjcmlwdGlvbiB7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGNoYW5nZUhlYWRlckNvbG9yIHtcXHJcXG5cXHQuYm9keV9oZWFkZXIgdWwgLmFpcmJuYl9pY29uLFxcclxcblxcdC5ib2R5X2hlYWRlciB1bCAuaGVhZGVyX3Byb2ZpbGUgLnByb2ZpbGVfaW1nIHtcXHJcXG5cXHRcXHRjb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxuXFx0fVxcclxcblxcdFxcclxcblxcdC5ib2R5X2hlYWRlciB1bCAucm9vbV9zZWFyY2ggaSB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxufVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjRiMzRhNTVlMDlkY2EwNjA0Njg2MzUxZmVjZTBhY2U2LmpwZ1wiOyIsImltcG9ydCBcIi4uL3Njc3MvcmVzZXJ2YXRpb25Gb3JtLnNjc3NcIjtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFja0ljb25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5wYXRobmFtZS5tYXRjaCgvLipyb29tXFwvW1xcZF0rLylbMF0pOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXJ2YXRpb25Gb3JtLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=