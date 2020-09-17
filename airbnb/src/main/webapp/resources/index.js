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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./scss/style.scss":
/*!********************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./scss/style.scss ***!
  \********************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  word-break: keep-all; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-weight: 500; }\n\na {\n  text-decoration: none;\n  color: inherit; }\n\nsmall {\n  font-size: 14px; }\n\ni {\n  font-style: normal; }\n\nul {\n  list-style: none; }\n\n:root {\n  --gray: #7f8c8d;\n  --deepGray: #535c68;\n  --red: #ff385c;\n  --containerHorizontalMargin: 50px;\n  --containerVerticalPadding: 30px;\n  --detailFontSize: smaller;\n  --bottomBorder: 1px solid var(--gray);\n  --borderRadius: 10px;\n  --calendarDaySize: 40px;\n  --boxShadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\nbody {\n  font-family: \"Noto Sans KR\", sans-serif; }\n\n.BtnDisabled {\n  cursor: no-drop !important;\n  opacity: 0.2 !important; }\n\n.wrap {\n  margin: 0 auto;\n  max-width: 1200px; }\n  .wrap .nav_category {\n    padding: var(--containerVerticalPadding) 0;\n    margin: 0 var(--containerHorizontalMargin);\n    font-weight: 300; }\n    .wrap .nav_category a {\n      border-bottom: 1px solid black;\n      display: inline-block;\n      line-height: 0.85;\n      text-shadow: 1px 1px var(--backgroudColor), 1px -1px var(--backgroudColor), -1px 1px var(--backgroudColor), -1px -1px var(--backgroudColor); }\n  .wrap .room_image {\n    margin: 0 var(--containerHorizontalMargin); }\n    .wrap .room_image .room_image_grid {\n      display: grid;\n      grid: repeat(2, minmax(150px, 1fr))/repeat(4, minmax(150px, 1fr));\n      gap: 10px; }\n      .wrap .room_image .room_image_grid img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        border-radius: var(--borderRadius); }\n        .wrap .room_image .room_image_grid img:first-child {\n          grid-area: span 2 / span 2; }\n  .wrap .main_wrap {\n    display: flex; }\n    .wrap .main_wrap .main_left {\n      width: 65%;\n      padding: var(--containerVerticalPadding) 0; }\n      .wrap .main_wrap .main_left .room_header {\n        padding-bottom: var(--containerVerticalPadding);\n        margin: 0 var(--containerHorizontalMargin);\n        border-bottom: var(--bottomBorder); }\n        .wrap .main_wrap .main_left .room_header .room_title {\n          font-weight: 700; }\n        .wrap .main_wrap .main_left .room_header .room_info {\n          font-size: var(--detailFontSize); }\n          .wrap .main_wrap .main_left .room_header .room_info .star {\n            color: var(--red);\n            font-size: 20px; }\n          .wrap .main_wrap .main_left .room_header .room_info .rating_count {\n            color: var(--gray); }\n            .wrap .main_wrap .main_left .room_header .room_info .rating_count::after {\n              content: \" · \";\n              color: black; }\n          .wrap .main_wrap .main_left .room_header .room_info .address {\n            border-bottom: 1px solid black;\n            display: inline-block;\n            line-height: 0.85;\n            text-shadow: 1px 1px var(--backgroudColor), 1px -1px var(--backgroudColor), -1px 1px var(--backgroudColor), -1px -1px var(--backgroudColor);\n            line-height: 0.95;\n            color: var(--deepGray); }\n      .wrap .main_wrap .main_left .host_info {\n        padding: var(--containerVerticalPadding) 0;\n        margin: 0 var(--containerHorizontalMargin);\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        border-bottom: var(--bottomBorder); }\n        .wrap .main_wrap .main_left .host_info hgroup .username {\n          font-weight: 700; }\n        .wrap .main_wrap .main_left .host_info hgroup .room_short_spec {\n          font-size: var(--detailFontSize);\n          font-weight: 300; }\n        .wrap .main_wrap .main_left .host_info .user_profile {\n          background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n          background-position: center;\n          min-width: 80px;\n          height: 80px;\n          border-radius: 50%;\n          cursor: pointer; }\n      .wrap .main_wrap .main_left .room_detail_info {\n        padding: var(--containerVerticalPadding) 0;\n        margin: 0 var(--containerHorizontalMargin);\n        border-bottom: var(--bottomBorder); }\n        .wrap .main_wrap .main_left .room_detail_info a {\n          display: block;\n          margin: var(--containerHorizontalMargin) 0;\n          border-bottom: 1px solid black;\n          display: inline-block;\n          line-height: 0.85;\n          text-shadow: 1px 1px var(--backgroudColor), 1px -1px var(--backgroudColor), -1px 1px var(--backgroudColor), -1px -1px var(--backgroudColor);\n          font-weight: 700; }\n      .wrap .main_wrap .main_left .room_facilities {\n        padding: var(--containerVerticalPadding) 0;\n        margin: 0 var(--containerHorizontalMargin); }\n        .wrap .main_wrap .main_left .room_facilities h3 {\n          font-weight: 700;\n          padding: 15px 0; }\n        .wrap .main_wrap .main_left .room_facilities .facility_item {\n          margin: 15px 0; }\n          .wrap .main_wrap .main_left .room_facilities .facility_item .facility_icon {\n            font-size: 20px;\n            width: 40px;\n            text-align: center; }\n          .wrap .main_wrap .main_left .room_facilities .facility_item .facility_description {\n            margin-left: 15px;\n            font-weight: 300; }\n    .wrap .main_wrap .main_right {\n      width: 35%;\n      position: relative;\n      padding-top: var(--containerVerticalPadding);\n      padding-bottom: calc(var(--containerVerticalPadding) * 2);\n      margin-right: var(--containerHorizontalMargin); }\n      .wrap .main_wrap .main_right .reservation_wrap {\n        position: sticky;\n        top: 80px;\n        box-shadow: var(--boxShadow);\n        border-radius: var(--borderRadius);\n        padding: 30px; }\n        .wrap .main_wrap .main_right .reservation_wrap .reservation_header {\n          display: flex;\n          justify-content: space-between;\n          margin-bottom: 15px; }\n          .wrap .main_wrap .main_right .reservation_wrap .reservation_header .reservation_help_text {\n            font-weight: 700;\n            text-align: left;\n            line-height: 1.1;\n            max-width: 200px; }\n          .wrap .main_wrap .main_right .reservation_wrap .reservation_header small {\n            white-space: nowrap;\n            font-size: 12px; }\n            .wrap .main_wrap .main_right .reservation_wrap .reservation_header small .star {\n              color: var(--red);\n              font-size: 12px; }\n            .wrap .main_wrap .main_right .reservation_wrap .reservation_header small .rating_count {\n              color: var(--gray); }\n        .wrap .main_wrap .main_right .reservation_wrap .reservation_main {\n          border: var(--bottomBorder);\n          border-radius: var(--borderRadius); }\n          .wrap .main_wrap .main_right .reservation_wrap .reservation_main .reservation_item_box {\n            display: flex;\n            cursor: pointer; }\n            .wrap .main_wrap .main_right .reservation_wrap .reservation_main .reservation_item_box .reservation_item {\n              flex: 1 1 50%;\n              padding: 5px 10px;\n              font-size: 0.9rem;\n              height: 50px; }\n              .wrap .main_wrap .main_right .reservation_wrap .reservation_main .reservation_item_box .reservation_item .reservation_display {\n                color: var(--gray);\n                font-weight: 300; }\n              .wrap .main_wrap .main_right .reservation_wrap .reservation_main .reservation_item_box .reservation_item + .reservation_item {\n                border-left: var(--bottomBorder); }\n          .wrap .main_wrap .main_right .reservation_wrap .reservation_main .reservation_people {\n            border-top: var(--bottomBorder);\n            flex: 1 1 50%;\n            padding: 5px 10px;\n            font-size: 0.9rem;\n            height: 50px; }\n            .wrap .main_wrap .main_right .reservation_wrap .reservation_main .reservation_people .reservation_display {\n              color: var(--gray);\n              font-weight: 300; }\n            .wrap .main_wrap .main_right .reservation_wrap .reservation_main .reservation_people .reservation_display {\n              position: relative; }\n              .wrap .main_wrap .main_right .reservation_wrap .reservation_main .reservation_people .reservation_display .guest_counter_box {\n                position: absolute;\n                right: 0;\n                top: -10px; }\n                .wrap .main_wrap .main_right .reservation_wrap .reservation_main .reservation_people .reservation_display .guest_counter_box .display_btn_icon {\n                  display: inline-block;\n                  border: 1px solid black;\n                  border-radius: 50%;\n                  width: 30px;\n                  height: 30px;\n                  line-height: 30px;\n                  text-align: center;\n                  margin-left: 10px;\n                  opacity: 0.5;\n                  color: black;\n                  cursor: pointer; }\n                  .wrap .main_wrap .main_right .reservation_wrap .reservation_main .reservation_people .reservation_display .guest_counter_box .display_btn_icon:hover {\n                    opacity: 1; }\n                  .wrap .main_wrap .main_right .reservation_wrap .reservation_main .reservation_people .reservation_display .guest_counter_box .display_btn_icon:active {\n                    transform: scale(0.95); }\n        .wrap .main_wrap .main_right .reservation_wrap .reservation_btn {\n          border: 0;\n          outline: none;\n          width: 100%;\n          padding: 10px 30px;\n          background-color: var(--red);\n          color: white;\n          margin: 10px 0;\n          border-radius: var(--borderRadius);\n          text-align: center;\n          font-weight: 700;\n          cursor: pointer; }\n        .wrap .main_wrap .main_right .reservation_wrap .reservation_price {\n          text-align: center; }\n          .wrap .main_wrap .main_right .reservation_wrap .reservation_price .price_comment {\n            font-weight: 300; }\n          .wrap .main_wrap .main_right .reservation_wrap .reservation_price .price_item,\n          .wrap .main_wrap .main_right .reservation_wrap .reservation_price .total_price {\n            display: flex;\n            justify-content: space-between;\n            padding-top: calc(var(--containerVerticalPadding) / 2); }\n            .wrap .main_wrap .main_right .reservation_wrap .reservation_price .price_item .price_name,\n            .wrap .main_wrap .main_right .reservation_wrap .reservation_price .total_price .price_name {\n              text-align: left; }\n            .wrap .main_wrap .main_right .reservation_wrap .reservation_price .price_item .price_value,\n            .wrap .main_wrap .main_right .reservation_wrap .reservation_price .total_price .price_value {\n              text-align: right; }\n          .wrap .main_wrap .main_right .reservation_wrap .reservation_price .total_price {\n            font-weight: 700;\n            margin-top: calc(var(--containerHorizontalMargin) / 2);\n            border-top: var(--bottomBorder); }\n        .wrap .main_wrap .main_right .reservation_wrap .reservation_form {\n          position: absolute;\n          background-color: white;\n          top: 40%;\n          right: -10px;\n          width: 660px;\n          box-shadow: var(--boxShadow);\n          border-radius: var(--borderRadius);\n          padding: 20px 30px; }\n          .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_header {\n            display: flex; }\n            .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_header .header_text {\n              width: 55%; }\n              .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_header .header_text .header_title {\n                font-weight: 700;\n                font-size: 1.5rem; }\n              .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_header .header_text .header_body {\n                color: var(--gray);\n                font-weight: 300; }\n            .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_header .header_inputs {\n              width: 45%;\n              display: flex;\n              border: var(--bottomBorder);\n              border-radius: var(--borderRadius);\n              background-color: #f7f7f7; }\n              .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_header .header_inputs .input_item {\n                font-size: 0.8rem;\n                padding: 10px;\n                border-radius: var(--borderRadius);\n                width: 50%; }\n                .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_header .header_inputs .input_item .reservation_input {\n                  all: unset;\n                  font-weight: 300;\n                  cursor: text; }\n          .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_main {\n            position: relative;\n            margin-top: var(--containerHorizontalMargin);\n            margin-bottom: calc(var(--containerHorizontalMargin) / 2); }\n            .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_main .pagination_btns {\n              position: absolute;\n              top: 0;\n              width: 100%;\n              display: flex;\n              justify-content: space-between; }\n              .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_main .pagination_btns .pagination_btn {\n                all: unset;\n                cursor: pointer;\n                font-size: 1.5rem;\n                line-height: 1.5rem; }\n            .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_main .calendar_wrap {\n              width: 100%;\n              display: flex;\n              justify-content: space-between; }\n              .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_main .calendar_wrap .calendar_item {\n                width: 48%; }\n                .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_main .calendar_wrap .calendar_item .calendar_month {\n                  width: 100%;\n                  text-align: center;\n                  margin-bottom: 15px;\n                  font-weight: 700; }\n                .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row {\n                  display: flex; }\n                  .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row .calendar_day {\n                    width: var(--calendarDaySize);\n                    height: var(--calendarDaySize);\n                    text-align: center; }\n                    .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row .calendar_day.available_day {\n                      background-color: #f5f6fa; }\n                    .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row .calendar_day span {\n                      display: block;\n                      width: 100%;\n                      height: 100%;\n                      line-height: var(--calendarDaySize); }\n                      .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row .calendar_day span.invalid_day {\n                        color: var(--gray);\n                        text-decoration: line-through; }\n                      .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row .calendar_day span.valid_day:hover {\n                        border: 1px solid black;\n                        border-radius: 50%;\n                        cursor: pointer; }\n                    .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row .calendar_day.clicked.available_day {\n                      border-radius: 50% 0 0 50%; }\n                    .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row .calendar_day.clicked span {\n                      background-color: black !important;\n                      color: white;\n                      border: 0 !important;\n                      border-radius: 50%;\n                      cursor: default !important; }\n                  .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row .dayname {\n                    font-size: 0.8rem;\n                    color: var(--gray); }\n          .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_footer {\n            text-align: end; }\n            .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_footer .input_reset {\n              all: unset;\n              font-size: 0.9rem;\n              border-bottom: 1px solid black;\n              display: inline-block;\n              line-height: 0.85;\n              text-shadow: 1px 1px var(--backgroudColor), 1px -1px var(--backgroudColor), -1px 1px var(--backgroudColor), -1px -1px var(--backgroudColor);\n              cursor: pointer; }\n            .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_footer .form_exit {\n              padding: 10px 15px;\n              margin: 0 15px;\n              background-color: black;\n              color: white;\n              border: 0;\n              border-radius: var(--borderRadius);\n              font-weight: 700;\n              cursor: pointer;\n              outline: none; }\n  .wrap .review_wrap {\n    padding: var(--containerVerticalPadding) 0;\n    margin: 0 var(--containerHorizontalMargin);\n    border-top: var(--bottomBorder);\n    border-bottom: var(--bottomBorder); }\n    .wrap .review_wrap .review_title {\n      font-size: 1.3rem;\n      font-weight: 700; }\n      .wrap .review_wrap .review_title .star {\n        color: var(--red);\n        font-size: inherit; }\n    .wrap .review_wrap .review_item {\n      padding: calc(var(--containerVerticalPadding) / 1.5) 0; }\n      .wrap .review_wrap .review_item .review_header {\n        display: flex; }\n        .wrap .review_wrap .review_item .review_header .guest_profile_img {\n          background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n          background-size: cover;\n          background-position: center;\n          width: 50px;\n          height: 50px;\n          border-radius: 50%; }\n        .wrap .review_wrap .review_item .review_header .review_info {\n          padding-left: calc(var(--containerVerticalPadding) / 2);\n          display: flex;\n          flex-direction: column;\n          justify-content: space-evenly; }\n          .wrap .review_wrap .review_item .review_header .review_info .review_created {\n            color: var(--gray);\n            font-weight: 300;\n            font-size: 0.7rem; }\n  .wrap .room_rule {\n    padding: var(--containerVerticalPadding) 0;\n    margin: 0 var(--containerHorizontalMargin);\n    display: flex; }\n    .wrap .room_rule .rule_header {\n      font-size: 1.3rem;\n      font-weight: 700; }\n    .wrap .room_rule .rules_wrap .rule_item {\n      margin: 15px 0; }\n      .wrap .room_rule .rules_wrap .rule_item .rule_icon {\n        font-size: 20px;\n        width: 40px;\n        text-align: center; }\n      .wrap .room_rule .rules_wrap .rule_item .rule_description {\n        margin-left: 15px;\n        font-weight: 300; }\n    .wrap .room_rule .message_wrap {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: flex-start;\n      margin-left: 100px; }\n      .wrap .room_rule .message_wrap .message_btn {\n        padding: 10px 40px;\n        font-weight: 700;\n        font-family: inherit;\n        opacity: 0.5;\n        border-radius: var(--borderRadius);\n        outline: none;\n        cursor: pointer; }\n        .wrap .room_rule .message_wrap .message_btn:hover {\n          opacity: 0.8; }\n      .wrap .room_rule .message_wrap .alert {\n        margin-top: 10px;\n        width: 250px;\n        font-size: 0.8rem;\n        font-weight: 300; }\n", "",{"version":3,"sources":["webpack://scss/style.scss","webpack://scss/__reset.scss","webpack://scss/__mixins.scss"],"names":[],"mappings":"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","sourcesContent":["@import \"./_reset\";\r\n@import \"./_mixins\";\r\n@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;700&display=swap\");\r\n:root {\r\n\t--gray: #7f8c8d;\r\n\t--deepGray: #535c68;\r\n\t--red: #ff385c;\r\n\t--containerHorizontalMargin: 50px;\r\n\t--containerVerticalPadding: 30px;\r\n\t--detailFontSize: smaller;\r\n\t--bottomBorder: 1px solid var(--gray);\r\n\t--borderRadius: 10px;\r\n\t--calendarDaySize: 40px;\r\n\t--boxShadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n}\r\n\r\nbody {\r\n\tfont-family: \"Noto Sans KR\", sans-serif;\r\n}\r\n\r\n.BtnDisabled {\r\n\tcursor: no-drop !important;\r\n\topacity: 0.2 !important;\r\n}\r\n\r\n.wrap {\r\n\tmargin: 0 auto;\r\n\tmax-width: 1200px;\r\n\r\n\t.nav_category {\r\n\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\t\tfont-weight: 300;\r\n\r\n\t\ta {\r\n\t\t\t@include underline;\r\n\t\t}\r\n\t}\r\n\r\n\t.room_image {\r\n\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\r\n\t\t.room_image_grid {\r\n\t\t\tdisplay: grid;\r\n\t\t\tgrid: repeat(2, minmax(150px, 1fr)) / repeat(4, minmax(150px, 1fr));\r\n\t\t\tgap: 10px;\r\n\r\n\t\t\timg {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\tobject-fit: cover;\r\n\t\t\t\tborder-radius: var(--borderRadius);\r\n\r\n\t\t\t\t&:first-child {\r\n\t\t\t\t\tgrid-area: span 2 / span 2;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t.main_wrap {\r\n\t\tdisplay: flex;\r\n\r\n\t\t.main_left {\r\n\t\t\twidth: 65%;\r\n\t\t\tpadding: var(--containerVerticalPadding) 0;\r\n\r\n\t\t\t.room_header {\r\n\t\t\t\tpadding-bottom: var(--containerVerticalPadding);\r\n\t\t\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\t\t\t\tborder-bottom: var(--bottomBorder);\r\n\r\n\t\t\t\t.room_title {\r\n\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t}\r\n\t\t\t\t.room_info {\r\n\t\t\t\t\tfont-size: var(--detailFontSize);\r\n\r\n\t\t\t\t\t.star {\r\n\t\t\t\t\t\t@include star(20px);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.rating_count {\r\n\t\t\t\t\t\tcolor: var(--gray);\r\n\r\n\t\t\t\t\t\t&::after {\r\n\t\t\t\t\t\t\tcontent: \" · \";\r\n\t\t\t\t\t\t\tcolor: black;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.address {\r\n\t\t\t\t\t\t@include underline;\r\n\t\t\t\t\t\tline-height: 0.95;\r\n\t\t\t\t\t\tcolor: var(--deepGray);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t.host_info {\r\n\t\t\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\t\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tjustify-content: space-between;\r\n\t\t\t\tborder-bottom: var(--bottomBorder);\r\n\r\n\t\t\t\thgroup {\r\n\t\t\t\t\t.username {\r\n\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.room_short_spec {\r\n\t\t\t\t\t\tfont-size: var(--detailFontSize);\r\n\t\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.user_profile {\r\n\t\t\t\t\tbackground-image: url(\"../img/thumbnail1.jpg\");\r\n\t\t\t\t\tbackground-position: center;\r\n\t\t\t\t\tmin-width: 80px;\r\n\t\t\t\t\theight: 80px;\r\n\t\t\t\t\tborder-radius: 50%;\r\n\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t.room_detail_info {\r\n\t\t\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\t\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\t\t\t\tborder-bottom: var(--bottomBorder);\r\n\r\n\t\t\t\ta {\r\n\t\t\t\t\tdisplay: block;\r\n\t\t\t\t\tmargin: var(--containerHorizontalMargin) 0;\r\n\t\t\t\t\t@include underline;\r\n\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t.room_facilities {\r\n\t\t\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\t\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\r\n\t\t\t\th3 {\r\n\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\tpadding: 15px 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.facility_item {\r\n\t\t\t\t\t@include facility_rule_item;\r\n\r\n\t\t\t\t\t.facility_icon {\r\n\t\t\t\t\t\t@include facility_rule_icon;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.facility_description {\r\n\t\t\t\t\t\t@include facility_rule_description;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.main_right {\r\n\t\t\twidth: 35%;\r\n\t\t\tposition: relative;\r\n\t\t\tpadding-top: var(--containerVerticalPadding);\r\n\t\t\tpadding-bottom: calc(var(--containerVerticalPadding) * 2);\r\n\t\t\tmargin-right: var(--containerHorizontalMargin);\r\n\r\n\t\t\t.reservation_wrap {\r\n\t\t\t\tposition: sticky;\r\n\t\t\t\ttop: 80px;\r\n\t\t\t\tbox-shadow: var(--boxShadow);\r\n\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\tpadding: 30px;\r\n\r\n\t\t\t\t.reservation_header {\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\tjustify-content: space-between;\r\n\t\t\t\t\tmargin-bottom: 15px;\r\n\r\n\t\t\t\t\t.reservation_help_text {\r\n\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t\ttext-align: left;\r\n\t\t\t\t\t\tline-height: 1.1;\r\n\t\t\t\t\t\tmax-width: 200px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tsmall {\r\n\t\t\t\t\t\twhite-space: nowrap;\r\n\t\t\t\t\t\tfont-size: 12px;\r\n\r\n\t\t\t\t\t\t.star {\r\n\t\t\t\t\t\t\t@include star(12px);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\t.rating_count {\r\n\t\t\t\t\t\t\tcolor: var(--gray);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.reservation_main {\r\n\t\t\t\t\tborder: var(--bottomBorder);\r\n\t\t\t\t\tborder-radius: var(--borderRadius);\r\n\r\n\t\t\t\t\t.reservation_item_box {\r\n\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\tcursor: pointer;\r\n\r\n\t\t\t\t\t\t.reservation_item {\r\n\t\t\t\t\t\t\t@include reservation_item;\r\n\r\n\t\t\t\t\t\t\t& + .reservation_item {\r\n\t\t\t\t\t\t\t\tborder-left: var(--bottomBorder);\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\t.reservation_people {\r\n\t\t\t\t\t\tborder-top: var(--bottomBorder);\r\n\t\t\t\t\t\t@include reservation_item;\r\n\r\n\t\t\t\t\t\t.reservation_display {\r\n\t\t\t\t\t\t\tposition: relative;\r\n\r\n\t\t\t\t\t\t\t.guest_counter_box {\r\n\t\t\t\t\t\t\t\tposition: absolute;\r\n\t\t\t\t\t\t\t\tright: 0;\r\n\t\t\t\t\t\t\t\ttop: -10px;\r\n\r\n\t\t\t\t\t\t\t\t.display_btn_icon {\r\n\t\t\t\t\t\t\t\t\tdisplay: inline-block;\r\n\t\t\t\t\t\t\t\t\tborder: 1px solid black;\r\n\t\t\t\t\t\t\t\t\tborder-radius: 50%;\r\n\t\t\t\t\t\t\t\t\twidth: 30px;\r\n\t\t\t\t\t\t\t\t\theight: 30px;\r\n\t\t\t\t\t\t\t\t\tline-height: 30px;\r\n\t\t\t\t\t\t\t\t\ttext-align: center;\r\n\t\t\t\t\t\t\t\t\tmargin-left: 10px;\r\n\t\t\t\t\t\t\t\t\topacity: 0.5;\r\n\t\t\t\t\t\t\t\t\tcolor: black;\r\n\t\t\t\t\t\t\t\t\tcursor: pointer;\r\n\r\n\t\t\t\t\t\t\t\t\t&:hover {\r\n\t\t\t\t\t\t\t\t\t\topacity: 1;\r\n\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t&:active {\r\n\t\t\t\t\t\t\t\t\t\ttransform: scale(0.95);\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.reservation_btn {\r\n\t\t\t\t\tborder: 0;\r\n\t\t\t\t\toutline: none;\r\n\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\tpadding: 10px 30px;\r\n\t\t\t\t\tbackground-color: var(--red);\r\n\t\t\t\t\tcolor: white;\r\n\t\t\t\t\tmargin: 10px 0;\r\n\t\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\t\ttext-align: center;\r\n\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.reservation_price {\r\n\t\t\t\t\ttext-align: center;\r\n\r\n\t\t\t\t\t.price_comment {\r\n\t\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.price_item,\r\n\t\t\t\t\t.total_price {\r\n\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\tjustify-content: space-between;\r\n\t\t\t\t\t\tpadding-top: calc(var(--containerVerticalPadding) / 2);\r\n\r\n\t\t\t\t\t\t.price_name {\r\n\t\t\t\t\t\t\ttext-align: left;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.price_value {\r\n\t\t\t\t\t\t\ttext-align: right;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.total_price {\r\n\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t\tmargin-top: calc(var(--containerHorizontalMargin) / 2);\r\n\t\t\t\t\t\tborder-top: var(--bottomBorder);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.reservation_form {\r\n\t\t\t\t\tposition: absolute;\r\n\t\t\t\t\tbackground-color: white;\r\n\t\t\t\t\ttop: 40%;\r\n\t\t\t\t\tright: -10px;\r\n\t\t\t\t\twidth: 660px;\r\n\t\t\t\t\tbox-shadow: var(--boxShadow);\r\n\t\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\t\tpadding: 20px 30px;\r\n\r\n\t\t\t\t\t.form_header {\r\n\t\t\t\t\t\tdisplay: flex;\r\n\r\n\t\t\t\t\t\t.header_text {\r\n\t\t\t\t\t\t\twidth: 55%;\r\n\r\n\t\t\t\t\t\t\t.header_title {\r\n\t\t\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t\t\t\tfont-size: 1.5rem;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t.header_body {\r\n\t\t\t\t\t\t\t\tcolor: var(--gray);\r\n\t\t\t\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.header_inputs {\r\n\t\t\t\t\t\t\twidth: 45%;\r\n\t\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\t\tborder: var(--bottomBorder);\r\n\t\t\t\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\t\t\t\tbackground-color: #f7f7f7;\r\n\r\n\t\t\t\t\t\t\t.input_item {\r\n\t\t\t\t\t\t\t\tfont-size: 0.8rem;\r\n\t\t\t\t\t\t\t\tpadding: 10px;\r\n\t\t\t\t\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\t\t\t\t\twidth: 50%;\r\n\r\n\t\t\t\t\t\t\t\t.reservation_input {\r\n\t\t\t\t\t\t\t\t\tall: unset;\r\n\t\t\t\t\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\t\t\t\t\tcursor: text;\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.form_main {\r\n\t\t\t\t\t\tposition: relative;\r\n\t\t\t\t\t\tmargin-top: var(--containerHorizontalMargin);\r\n\t\t\t\t\t\tmargin-bottom: calc(var(--containerHorizontalMargin) / 2);\r\n\r\n\t\t\t\t\t\t.pagination_btns {\r\n\t\t\t\t\t\t\tposition: absolute;\r\n\t\t\t\t\t\t\ttop: 0;\r\n\t\t\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\t\tjustify-content: space-between;\r\n\r\n\t\t\t\t\t\t\t.pagination_btn {\r\n\t\t\t\t\t\t\t\tall: unset;\r\n\t\t\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\t\t\tfont-size: 1.5rem;\r\n\t\t\t\t\t\t\t\tline-height: 1.5rem;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.calendar_wrap {\r\n\t\t\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\t\tjustify-content: space-between;\r\n\r\n\t\t\t\t\t\t\t.calendar_item {\r\n\t\t\t\t\t\t\t\twidth: 48%;\r\n\r\n\t\t\t\t\t\t\t\t.calendar_month {\r\n\t\t\t\t\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\t\t\t\t\ttext-align: center;\r\n\t\t\t\t\t\t\t\t\tmargin-bottom: 15px;\r\n\t\t\t\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t.calendar_row {\r\n\t\t\t\t\t\t\t\t\tdisplay: flex;\r\n\r\n\t\t\t\t\t\t\t\t\t.calendar_day {\r\n\t\t\t\t\t\t\t\t\t\twidth: var(--calendarDaySize);\r\n\t\t\t\t\t\t\t\t\t\theight: var(--calendarDaySize);\r\n\t\t\t\t\t\t\t\t\t\ttext-align: center;\r\n\r\n\t\t\t\t\t\t\t\t\t\t&.available_day {\r\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #f5f6fa;\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\tspan {\r\n\t\t\t\t\t\t\t\t\t\t\tdisplay: block;\r\n\t\t\t\t\t\t\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\t\t\t\t\t\t\theight: 100%;\r\n\t\t\t\t\t\t\t\t\t\t\tline-height: var(--calendarDaySize);\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t&.invalid_day {\r\n\t\t\t\t\t\t\t\t\t\t\t\tcolor: var(--gray);\r\n\t\t\t\t\t\t\t\t\t\t\t\ttext-decoration: line-through;\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t&.valid_day:hover {\r\n\t\t\t\t\t\t\t\t\t\t\t\tborder: 1px solid black;\r\n\t\t\t\t\t\t\t\t\t\t\t\tborder-radius: 50%;\r\n\t\t\t\t\t\t\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\t&.clicked {\r\n\t\t\t\t\t\t\t\t\t\t\t&.available_day {\r\n\t\t\t\t\t\t\t\t\t\t\t\tborder-radius: 50% 0 0 50%;\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\t\tspan {\r\n\t\t\t\t\t\t\t\t\t\t\t\tbackground-color: black !important;\r\n\t\t\t\t\t\t\t\t\t\t\t\tcolor: white;\r\n\t\t\t\t\t\t\t\t\t\t\t\tborder: 0 !important;\r\n\t\t\t\t\t\t\t\t\t\t\t\tborder-radius: 50%;\r\n\t\t\t\t\t\t\t\t\t\t\t\tcursor: default !important;\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t.dayname {\r\n\t\t\t\t\t\t\t\t\t\tfont-size: 0.8rem;\r\n\t\t\t\t\t\t\t\t\t\tcolor: var(--gray);\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.form_footer {\r\n\t\t\t\t\t\ttext-align: end;\r\n\r\n\t\t\t\t\t\t.input_reset {\r\n\t\t\t\t\t\t\tall: unset;\r\n\t\t\t\t\t\t\tfont-size: 0.9rem;\r\n\t\t\t\t\t\t\t@include underline;\r\n\t\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.form_exit {\r\n\t\t\t\t\t\t\tpadding: 10px 15px;\r\n\t\t\t\t\t\t\tmargin: 0 15px;\r\n\t\t\t\t\t\t\tbackground-color: black;\r\n\t\t\t\t\t\t\tcolor: white;\r\n\t\t\t\t\t\t\tborder: 0;\r\n\t\t\t\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\t\toutline: none;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t.review_wrap {\r\n\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\t\tborder-top: var(--bottomBorder);\r\n\t\tborder-bottom: var(--bottomBorder);\r\n\r\n\t\t.review_title {\r\n\t\t\tfont-size: 1.3rem;\r\n\t\t\tfont-weight: 700;\r\n\r\n\t\t\t.star {\r\n\t\t\t\t@include star(inherit);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.review_item {\r\n\t\t\tpadding: calc(var(--containerVerticalPadding) / 1.5) 0;\r\n\r\n\t\t\t.review_header {\r\n\t\t\t\tdisplay: flex;\r\n\r\n\t\t\t\t.guest_profile_img {\r\n\t\t\t\t\tbackground-image: url(\"../img/thumbnail1.jpg\");\r\n\t\t\t\t\tbackground-size: cover;\r\n\t\t\t\t\tbackground-position: center;\r\n\t\t\t\t\twidth: 50px;\r\n\t\t\t\t\theight: 50px;\r\n\t\t\t\t\tborder-radius: 50%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.review_info {\r\n\t\t\t\t\tpadding-left: calc(var(--containerVerticalPadding) / 2);\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\tflex-direction: column;\r\n\t\t\t\t\tjustify-content: space-evenly;\r\n\r\n\t\t\t\t\t.guest_name {\r\n\t\t\t\t\t}\r\n\t\t\t\t\t.review_created {\r\n\t\t\t\t\t\tcolor: var(--gray);\r\n\t\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\t\tfont-size: 0.7rem;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t.review_main {\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t.room_rule {\r\n\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\t\tdisplay: flex;\r\n\r\n\t\t.rule_header {\r\n\t\t\tfont-size: 1.3rem;\r\n\t\t\tfont-weight: 700;\r\n\t\t}\r\n\r\n\t\t.rules_wrap {\r\n\t\t\t.rule_item {\r\n\t\t\t\t@include facility_rule_item;\r\n\r\n\t\t\t\t.rule_icon {\r\n\t\t\t\t\t@include facility_rule_icon;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.rule_description {\r\n\t\t\t\t\t@include facility_rule_description;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.message_wrap {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tjustify-content: center;\r\n\t\t\talign-items: flex-start;\r\n\t\t\tmargin-left: 100px;\r\n\r\n\t\t\t.message_btn {\r\n\t\t\t\tpadding: 10px 40px;\r\n\t\t\t\tfont-weight: 700;\r\n\t\t\t\tfont-family: inherit;\r\n\t\t\t\topacity: 0.5;\r\n\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\toutline: none;\r\n\t\t\t\tcursor: pointer;\r\n\r\n\t\t\t\t&:hover {\r\n\t\t\t\t\topacity: 0.8;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t.alert {\r\n\t\t\t\tmargin-top: 10px;\r\n\t\t\t\twidth: 250px;\r\n\t\t\t\tfont-size: 0.8rem;\r\n\t\t\t\tfont-weight: 300;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n","* {\r\n\tpadding: 0;\r\n\tmargin: 0;\r\n\tbox-sizing: border-box;\r\n\tword-break: keep-all;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tfont-weight: 500;\r\n}\r\n\r\na {\r\n\ttext-decoration: none;\r\n\tcolor: inherit;\r\n}\r\n\r\nsmall {\r\n\tfont-size: 14px;\r\n}\r\n\r\ni {\r\n\tfont-style: normal;\r\n}\r\n\r\nul {\r\n\tlist-style: none;\r\n}\r\n","@mixin underline {\r\n\tborder-bottom: 1px solid black;\r\n\tdisplay: inline-block;\r\n\tline-height: 0.85;\r\n\ttext-shadow: 1px 1px var(--backgroudColor), 1px -1px var(--backgroudColor),\r\n\t\t-1px 1px var(--backgroudColor), -1px -1px var(--backgroudColor);\r\n\t@content;\r\n}\r\n\r\n@mixin star($font-size) {\r\n\tcolor: var(--red);\r\n\tfont-size: $font-size;\r\n}\r\n\r\n@mixin reservation_item {\r\n\tflex: 1 1 50%;\r\n\tpadding: 5px 10px;\r\n\tfont-size: 0.9rem;\r\n\theight: 50px;\r\n\r\n\t.reservation_display {\r\n\t\tcolor: var(--gray);\r\n\t\tfont-weight: 300;\r\n\t}\r\n}\r\n\r\n@mixin facility_rule_item {\r\n\tmargin: 15px 0;\r\n}\r\n\r\n@mixin facility_rule_icon {\r\n\tfont-size: 20px;\r\n\twidth: 40px;\r\n\ttext-align: center;\r\n}\r\n\r\n@mixin facility_rule_description {\r\n\tmargin-left: 15px;\r\n\tfont-weight: 300;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/util */ "./js/util.js");



/*
 ************************** Global State
 */
let state = {
	curDate: new Date(),
	today: new Date(),
	checkInId: "",
	checkOutId: "",
};

/*
 ************************** Model
 */
const DataController = (() => {
	return {
		getReservedDays: () => {
			const mockup = ["2020-09-20", "2020-09-21", "2020-09-22", "2020-09-30", "2020-10-01"];
			return mockup;
		},
		getReservePayload: () => {
			// 1. GET DB로부터 숙소 하루당 가격
			const roomPrice = 100000;

			// 2. 계산
			const roomNight =
				(new Date(state.checkOutId) - new Date(state.checkInId)) / (1000 * 60 * 60 * 24);
			const totalPrice = roomNight * roomPrice;
			return {
				roomPrice,
				roomNight,
				totalPrice,
			};
		},
		getMaxPerson: () => {
			return 4;
		},
	};
})();

/*
 ************************** View
 */

const UIController = (() => {
	const DOMString = {
		curCalendar: "#curCalendar",
		nextCalendar: "#nextCalendar",
		exitBtn: "#formExitBtn",
		reserveContainer: "#reservationWrap",
		reservePopupContainer: "#reservationForm",
		reserveCheckBox: "#reservationBox",
		reserveRenderBtn: "#reservationBtn",
		MonthYear: ".calendar_month",
		nextPage: "#nextPage",
		prevPage: "#prevPage",
		calendarBox: ".calendar_box",
		calendarContainer: "#calendarWrap",
		checkInInput: "#checkInInput",
		checkOutInput: "#checkOutInput",
		validDay: ".valid_day",
		checkInDisplay: "#checkInDisplay",
		checkOutDisplay: "#checkOutDisplay",
		guestCounterBox: "#guestCounterBox",
		guestCount: "#guestCount",
		resetInput: "#resetInput",
		guestPlusBtn: "#guestPlusBtn",
		guestMinusBtn: "#guestMinusBtn",
		reservePriceContainer: "#reservePriceContainer",
		roomPrice: "#roomPrice",
		roomNight: "#roomNight",
		priceValue: "#priceValue",
		totalPrice: "#totalPrice",
		reserveHelpText: "#reserveHelpText",
	};

	const displayMonth = (year, month) => {
		const [curMonth, nextMonth] = document.querySelectorAll(DOMString.MonthYear);
		curMonth.textContent = `${month}월 ${year}`;
		nextMonth.textContent = month === 12 ? `1월 ${year + 1}` : `${month + 1}월 ${year}`;
	};

	const setButtonStyle = (year, month) => {
		const prevBtnNode = document.querySelector(DOMString.prevPage);
		const CL_DISABLED = "BtnDisabled";
		if (year === state.today.getFullYear() && month === state.today.getMonth() + 1) {
			prevBtnNode.disabled = true;
			prevBtnNode.classList.add(CL_DISABLED);
		} else {
			prevBtnNode.disabled = false;
			prevBtnNode.classList.remove(CL_DISABLED);
		}
	};

	const createDayHTML = (year, month, day) => {
		const { today } = state;
		let CL_DAY = "valid_day";
		if (month === today.getMonth() + 1) {
			if (day < today.getDate()) CL_DAY = "invalid_day";
		}
		return `
		<div class="calendar_day">
			<span class="${CL_DAY}" id="${year}-${_js_util__WEBPACK_IMPORTED_MODULE_1__["setMonthCount"](month)}-${_js_util__WEBPACK_IMPORTED_MODULE_1__["setFixDayCount"](day)}">
				${day}
			</span>
		</div>`;
	};

	const createCalendarHTML = (year, month) => {
		const firstDay = new Date(year, month - 1, 1);
		const lastDay = new Date(year, month, 0).getDate();
		const firstDayName = firstDay.getDay(); //  0~6

		let startDayCount = 1;
		let markup = "<div class='calendar_box'>";
		for (let i = 0; i < 6; i++) {
			markup += "<div class='calendar_row'>";
			for (let j = 0; j < 7; j++) {
				//  이번 달 시작 요일 이전일 때
				if (i == 0 && j < firstDayName) {
					markup += `<div class="calendar_day"><span></span></div>`;
				}
				//  이번 달 시작 요일 이후일 때
				else if (startDayCount <= lastDay) {
					markup += createDayHTML(year, month, startDayCount++);
				}
			}
			markup += "</div>";
		}
		markup += "</div>";
		return markup;
	};

	const addInvalidDayClass = cleanedDays => {
		const CL_VALID_DAY = "valid_day";
		const CL_INVALID_DAY = "invalid_day";

		cleanedDays.forEach(el => {
			el.classList.add(CL_INVALID_DAY);
			el.classList.remove(CL_VALID_DAY);
		});
	};

	return {
		getDOMString: () => DOMString,
		closePopup: event => {
			if (event) event.preventDefault();
			document.querySelector(DOMString.reservePopupContainer).style.display = "none";
		},

		openPopup: () =>
			(document.querySelector(DOMString.reservePopupContainer).style.display = "block"),

		isClickedCheckInAndOut: event => event.target.matches(`${DOMString.reserveCheckBox} *`),

		isClickedRenderBtn: event => event.target.matches(DOMString.reserveRenderBtn),

		renderCalendar: (year, month) => {
			displayMonth(year, month);
			setButtonStyle(year, month);

			document
				.querySelector(DOMString.curCalendar)
				.insertAdjacentHTML("beforeend", createCalendarHTML(year, month));
			document
				.querySelector(DOMString.nextCalendar)
				.insertAdjacentHTML("beforeend", createCalendarHTML(year, month + 1));
		},

		clearCalendar: () => {
			const [curCalendar, nextCalendar] = document.querySelectorAll(DOMString.calendarBox);
			curCalendar.parentNode.removeChild(curCalendar);
			nextCalendar.parentNode.removeChild(nextCalendar);
		},

		beExceptReservedDay: reservedDays => {
			const calendarWrap = document.querySelector(DOMString.calendarContainer);
			const renderedDays = Array.from(calendarWrap.querySelectorAll("span"));
			const cleanedDays = renderedDays.filter(day => reservedDays.includes(day.id));
			addInvalidDayClass(cleanedDays);
		},

		renderInvalidDay: (clickedId, reservedDays = null) => {
			const calendarWrap = document.querySelector(DOMString.calendarContainer);
			const days = Array.from(calendarWrap.querySelectorAll("span"));
			let cleanedDays;

			if (state.checkInId === "") {
				// 1. GET 클릭된 날짜 이후의 예약된 제일 빠른 날짜
				const latestDay = reservedDays.filter(daystr => clickedId < daystr).sort()[0];
				// 2. 체크아웃 불가능한 날짜 마크
				cleanedDays = days.filter(day => day.id < clickedId || latestDay < day.id);
			} else {
				cleanedDays = days.filter(day => day.id > clickedId);
			}
			addInvalidDayClass(cleanedDays);
		},

		setCheckInInput: id =>
			(document.querySelector(DOMString.checkInInput).value = _js_util__WEBPACK_IMPORTED_MODULE_1__["formatDashToDot"](id)),
		setCheckOutInput: id =>
			(document.querySelector(DOMString.checkOutInput).value = _js_util__WEBPACK_IMPORTED_MODULE_1__["formatDashToDot"](id)),

		renderDayBackground: id => {
			const days = Array.from(
				document
					.querySelector(DOMString.calendarContainer)
					.querySelectorAll(DOMString.validDay)
			);
			const CL_AVAIL_DAY = "available_day";
			days.map(el => {
				el.parentNode.classList.remove(CL_AVAIL_DAY);
				return el;
			})
				.filter(el => state.checkInId <= el.id && el.id <= id)
				.forEach(el => {
					el.parentNode.classList.add(CL_AVAIL_DAY);
				});
		},

		clearCheckDisplay: () => {
			document.querySelector(DOMString.checkInDisplay).textContent = "날짜선택";
			document.querySelector(DOMString.checkOutDisplay).textContent = "날짜선택";
		},

		renderCheckInDisplay: id =>
			(document.querySelector(DOMString.checkInDisplay).textContent = _js_util__WEBPACK_IMPORTED_MODULE_1__["formatDashToDot"](
				id
			)),
		renderCheckOutDisplay: id =>
			(document.querySelector(DOMString.checkOutDisplay).textContent = _js_util__WEBPACK_IMPORTED_MODULE_1__["formatDashToDot"](
				id
			)),
		renderGuestCount: (event, maxPerson, minPerson = 1) => {
			const guestValueNode = document.querySelector(DOMString.guestCount);
			const plusBtn = document.querySelector(DOMString.guestPlusBtn);
			const minusBtn = document.querySelector(DOMString.guestMinusBtn);
			const CL_DISABLED = "BtnDisabled";
			if (event.target.matches(DOMString.guestPlusBtn)) {
				if (guestValueNode.textContent < maxPerson) {
					guestValueNode.textContent = ++guestValueNode.textContent;
					minusBtn.classList.remove(CL_DISABLED);
				}
				if (guestValueNode.textContent == maxPerson) {
					plusBtn.classList.add(CL_DISABLED);
				}
			} else if (event.target.matches(DOMString.guestMinusBtn)) {
				if (guestValueNode.textContent > minPerson) {
					guestValueNode.textContent = --guestValueNode.textContent;
					plusBtn.classList.remove(CL_DISABLED);
				}
				if (guestValueNode.textContent == minPerson) {
					minusBtn.classList.add(CL_DISABLED);
				}
			}
		},

		getGuestCount: () => document.querySelector(DOMString.guestCount).textContent,

		renderPrice: payload => {
			const { roomPrice, roomNight, totalPrice } = payload;
			document.querySelector(DOMString.reservePriceContainer).style.display = "block";
			document.querySelector(DOMString.reserveRenderBtn).textContent = "예약하기";
			document.querySelector(DOMString.roomNight).textContent = roomNight + "박";
			document.querySelector(DOMString.roomPrice).textContent = _js_util__WEBPACK_IMPORTED_MODULE_1__["formatWon"](roomPrice);
			document.querySelector(DOMString.priceValue).textContent = _js_util__WEBPACK_IMPORTED_MODULE_1__["formatWon"](totalPrice);
			document.querySelector(DOMString.totalPrice).textContent = _js_util__WEBPACK_IMPORTED_MODULE_1__["formatWon"](
				totalPrice + 5000
			);
			document.querySelector(DOMString.reserveHelpText).innerHTML = `${_js_util__WEBPACK_IMPORTED_MODULE_1__["formatWon"](
				roomPrice
			)}<small>/박</small>`;
		},

		clearPriceContainer: () => {
			document.querySelector(DOMString.reservePriceContainer).style.display = "none";
			document.querySelector(DOMString.reserveHelpText).textContent =
				"요금을 확인하려면 날짜를 입력하세요.";
		},
	};
})();

/*
 ************************** Controller
 */

const Controller = ((DataCtrl, UICtrl) => {
	const DOM = UICtrl.getDOMString();
	const setEventListeners = () => {
		// 폼 닫기 클릭
		document.querySelector(DOM.exitBtn).addEventListener("click", onClickFormExitBtn);
		// 폼 열기 클릭
		document
			.querySelector(DOM.reserveContainer)
			.addEventListener("click", onClickReserveContainer);
		// 달력 넘기기 클릭
		document.querySelector(DOM.prevPage).addEventListener("click", onClickPageBtn);
		document.querySelector(DOM.nextPage).addEventListener("click", onClickPageBtn);
		// 달력 날짜 클릭
		document
			.querySelector(DOM.calendarContainer)
			.addEventListener("click", onClickCalContainer);
		// 체크아웃 날짜 고를 때 마우스 오버
		document
			.querySelector(DOM.calendarContainer)
			.addEventListener("mouseover", onMouseoverCalContainer);
		// 게스트 카운터
		document
			.querySelector(DOM.guestCounterBox)
			.addEventListener("click", onClickGuestCounterBox);
		// 날짜 폼 리셋 클릭
		document.querySelector(DOM.resetInput).addEventListener("click", onClickResetBtn);
	};

	const clearState = () => {
		state = { ...state, checkInId: "", checkOutId: "" };
	};

	const onClickResetBtn = () => {
		// 1. staate 초기화
		clearState();
		// 2. UI 초기화 및 동기화
		UICtrl.clearCalendar();
		UICtrl.clearCheckDisplay();

		// 3. 날짜 폼 초기화
		setInitailCalendar();

		// 4. 예약하기 폼 닫기
		UICtrl.clearPriceContainer();
	};

	const onClickGuestCounterBox = event => UICtrl.renderGuestCount(event, DataCtrl.getMaxPerson());

	const onMouseoverCalContainer = event => {
		if (state.checkInId !== "" && state.checkOutId == "") {
			if (event.target.matches(DOM.validDay)) {
				const id = event.target.id;
				UICtrl.renderDayBackground(id);
			}
		}
	};

	const onClickCalContainer = event => {
		if (state.checkOutId !== "") return;
		const clickedDay = event.target.closest(".calendar_day span.valid_day");
		//	체크아웃 클릭
		if (clickedDay !== null) {
			const id = clickedDay.id;
			clickedDay.parentNode.classList.add("clicked");
			if (state.checkInId !== "") {
				// 1. 클릭된 노드 id 이후 날짜 invalid
				UICtrl.renderInvalidDay(id);
				// 2. 체크아웃 인풋에 날짜 동기화
				UICtrl.setCheckOutInput(id);
				// 3. 체크아웃 디스플레이 렌더링
				UICtrl.renderCheckOutDisplay(id);
				// 4. 폼 닫기
				UICtrl.closePopup();
				state.checkOutId = id;
				// 5. 금액 계산
				const payload = DataCtrl.getReservePayload();
				// 6. 금액 렌더링
				UICtrl.renderPrice(payload);
			}
			//	체크인 클릭
			else if (state.checkInId === "") {
				const reservedDays = DataCtrl.getReservedDays();
				// 1. 불가능한 날짜 마크 표시
				UICtrl.renderInvalidDay(id, reservedDays);
				// 2. 체크인 인풋에 날짜 동기화
				UICtrl.setCheckInInput(id);
				// 3. 체크인 디스플레이 렌더링
				UICtrl.renderCheckInDisplay(id);
				state.checkInId = id;
			}
		}
	};

	const onClickPageBtn = event => {
		event.preventDefault();
		UICtrl.clearCalendar();

		const isPrevBtn = event.target.matches(DOM.prevPage);

		// prevBtn, nextBtn 분기 -> 달력 월 증감
		if (isPrevBtn) {
			state.curDate.setMonth(state.curDate.getMonth() - 1);
		} else {
			state.curDate.setMonth(state.curDate.getMonth() + 1);
		}
		UICtrl.renderCalendar(state.curDate.getFullYear(), state.curDate.getMonth() + 1);
	};

	const setInitailCalendar = () => {
		UICtrl.renderCalendar(state.curDate.getFullYear(), state.curDate.getMonth() + 1);
		UICtrl.beExceptReservedDay(DataCtrl.getReservedDays());
	};

	const onClickFormExitBtn = () => UICtrl.closePopup(event);

	const onClickReserveContainer = event => {
		// 1-1. 체크인, 체크아웃 버튼 클릭시
		if (UICtrl.isClickedCheckInAndOut(event)) UICtrl.openPopup();
		// 1-2. 예약 버튼 클릭시
		else if (UICtrl.isClickedRenderBtn(event)) {
			if (state.checkInId !== "" && state.checkOutId !== "") {
				// TODO: 예약 페이지로 이동;
			} else UICtrl.openPopup();
		}
	};

	return {
		init: () => {
			setEventListeners();
			setInitailCalendar();
		},
	};
})(DataController, UIController);
Controller.init();


/***/ }),

/***/ "./js/util.js":
/*!********************!*\
  !*** ./js/util.js ***!
  \********************/
/*! exports provided: setFixDayCount, setMonthCount, formatDashToDot, formatWon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFixDayCount", function() { return setFixDayCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMonthCount", function() { return setMonthCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDashToDot", function() { return formatDashToDot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatWon", function() { return formatWon; });
const setFixDayCount = number => (number < 10 ? "0" + number : number);
const setMonthCount = number => (number < 10 ? "0" + number : number);
const formatDashToDot = str => str.replace(/-/g, ".");
const formatWon = num =>
	new Intl.NumberFormat("ko-KR", { style: "currency", currency: "KRW" }).format(num);


/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./scss/style.scss");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vaW1nL3RodW1ibmFpbDEuanBnIiwid2VicGFjazovLy8uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2pzL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9zdHlsZS5zY3NzPzAwM2YiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7OztBQ3JhQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU87QUFDQTtBQUNBO0FBQ0E7QUFDUCxpQ0FBaUMscUNBQXFDOzs7Ozs7Ozs7Ozs7QUNKdEUsVUFBVSxtQkFBTyxDQUFDLHVKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQyw0TUFBcUc7O0FBRXZJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvcmVzb3VyY2VzL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi4vaW1nL3RodW1ibmFpbDEuanBnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrS1I6d2dodEAzMDA7NTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd29yZC1icmVhazoga2VlcC1hbGw7IH1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXdlaWdodDogNTAwOyB9XFxuXFxuYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDsgfVxcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogMTRweDsgfVxcblxcbmkge1xcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XFxuXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbjpyb290IHtcXG4gIC0tZ3JheTogIzdmOGM4ZDtcXG4gIC0tZGVlcEdyYXk6ICM1MzVjNjg7XFxuICAtLXJlZDogI2ZmMzg1YztcXG4gIC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbjogNTBweDtcXG4gIC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nOiAzMHB4O1xcbiAgLS1kZXRhaWxGb250U2l6ZTogc21hbGxlcjtcXG4gIC0tYm90dG9tQm9yZGVyOiAxcHggc29saWQgdmFyKC0tZ3JheSk7XFxuICAtLWJvcmRlclJhZGl1czogMTBweDtcXG4gIC0tY2FsZW5kYXJEYXlTaXplOiA0MHB4O1xcbiAgLS1ib3hTaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTsgfVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJOb3RvIFNhbnMgS1JcXFwiLCBzYW5zLXNlcmlmOyB9XFxuXFxuLkJ0bkRpc2FibGVkIHtcXG4gIGN1cnNvcjogbm8tZHJvcCAhaW1wb3J0YW50O1xcbiAgb3BhY2l0eTogMC4yICFpbXBvcnRhbnQ7IH1cXG5cXG4ud3JhcCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1heC13aWR0aDogMTIwMHB4OyB9XFxuICAud3JhcCAubmF2X2NhdGVnb3J5IHtcXG4gICAgcGFkZGluZzogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAwO1xcbiAgICBtYXJnaW46IDAgdmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbik7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7IH1cXG4gICAgLndyYXAgLm5hdl9jYXRlZ29yeSBhIHtcXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAwLjg1O1xcbiAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKSwgMXB4IC0xcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpLCAtMXB4IDFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvciksIC0xcHggLTFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvcik7IH1cXG4gIC53cmFwIC5yb29tX2ltYWdlIHtcXG4gICAgbWFyZ2luOiAwIHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pOyB9XFxuICAgIC53cmFwIC5yb29tX2ltYWdlIC5yb29tX2ltYWdlX2dyaWQge1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZDogcmVwZWF0KDIsIG1pbm1heCgxNTBweCwgMWZyKSkvcmVwZWF0KDQsIG1pbm1heCgxNTBweCwgMWZyKSk7XFxuICAgICAgZ2FwOiAxMHB4OyB9XFxuICAgICAgLndyYXAgLnJvb21faW1hZ2UgLnJvb21faW1hZ2VfZ3JpZCBpbWcge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7IH1cXG4gICAgICAgIC53cmFwIC5yb29tX2ltYWdlIC5yb29tX2ltYWdlX2dyaWQgaW1nOmZpcnN0LWNoaWxkIHtcXG4gICAgICAgICAgZ3JpZC1hcmVhOiBzcGFuIDIgLyBzcGFuIDI7IH1cXG4gIC53cmFwIC5tYWluX3dyYXAge1xcbiAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fbGVmdCB7XFxuICAgICAgd2lkdGg6IDY1JTtcXG4gICAgICBwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7IH1cXG4gICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX2xlZnQgLnJvb21faGVhZGVyIHtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpO1xcbiAgICAgICAgbWFyZ2luOiAwIHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm90dG9tQm9yZGVyKTsgfVxcbiAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9sZWZ0IC5yb29tX2hlYWRlciAucm9vbV90aXRsZSB7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7IH1cXG4gICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fbGVmdCAucm9vbV9oZWFkZXIgLnJvb21faW5mbyB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZGV0YWlsRm9udFNpemUpOyB9XFxuICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fbGVmdCAucm9vbV9oZWFkZXIgLnJvb21faW5mbyAuc3RhciB7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXJlZCk7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4OyB9XFxuICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fbGVmdCAucm9vbV9oZWFkZXIgLnJvb21faW5mbyAucmF0aW5nX2NvdW50IHtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JheSk7IH1cXG4gICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX2xlZnQgLnJvb21faGVhZGVyIC5yb29tX2luZm8gLnJhdGluZ19jb3VudDo6YWZ0ZXIge1xcbiAgICAgICAgICAgICAgY29udGVudDogXFxcIiDCtyBcXFwiO1xcbiAgICAgICAgICAgICAgY29sb3I6IGJsYWNrOyB9XFxuICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fbGVmdCAucm9vbV9oZWFkZXIgLnJvb21faW5mbyAuYWRkcmVzcyB7XFxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMC44NTtcXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvciksIDFweCAtMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKSwgLTFweCAxcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpLCAtMXB4IC0xcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpO1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjk1O1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1kZWVwR3JheSk7IH1cXG4gICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX2xlZnQgLmhvc3RfaW5mbyB7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7XFxuICAgICAgICBtYXJnaW46IDAgdmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbik7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IHZhcigtLWJvdHRvbUJvcmRlcik7IH1cXG4gICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fbGVmdCAuaG9zdF9pbmZvIGhncm91cCAudXNlcm5hbWUge1xcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwOyB9XFxuICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX2xlZnQgLmhvc3RfaW5mbyBoZ3JvdXAgLnJvb21fc2hvcnRfc3BlYyB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZGV0YWlsRm9udFNpemUpO1xcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwOyB9XFxuICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX2xlZnQgLmhvc3RfaW5mbyAudXNlcl9wcm9maWxlIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgICBtaW4td2lkdGg6IDgwcHg7XFxuICAgICAgICAgIGhlaWdodDogODBweDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX2xlZnQgLnJvb21fZGV0YWlsX2luZm8ge1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAwO1xcbiAgICAgICAgbWFyZ2luOiAwIHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm90dG9tQm9yZGVyKTsgfVxcbiAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9sZWZ0IC5yb29tX2RldGFpbF9pbmZvIGEge1xcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgbWFyZ2luOiB2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKSAwO1xcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDAuODU7XFxuICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKSwgMXB4IC0xcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpLCAtMXB4IDFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvciksIC0xcHggLTFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvcik7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7IH1cXG4gICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX2xlZnQgLnJvb21fZmFjaWxpdGllcyB7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7XFxuICAgICAgICBtYXJnaW46IDAgdmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbik7IH1cXG4gICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fbGVmdCAucm9vbV9mYWNpbGl0aWVzIGgzIHtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgICAgcGFkZGluZzogMTVweCAwOyB9XFxuICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX2xlZnQgLnJvb21fZmFjaWxpdGllcyAuZmFjaWxpdHlfaXRlbSB7XFxuICAgICAgICAgIG1hcmdpbjogMTVweCAwOyB9XFxuICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fbGVmdCAucm9vbV9mYWNpbGl0aWVzIC5mYWNpbGl0eV9pdGVtIC5mYWNpbGl0eV9pY29uIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fbGVmdCAucm9vbV9mYWNpbGl0aWVzIC5mYWNpbGl0eV9pdGVtIC5mYWNpbGl0eV9kZXNjcmlwdGlvbiB7XFxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDsgfVxcbiAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IHtcXG4gICAgICB3aWR0aDogMzUlO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBwYWRkaW5nLXRvcDogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKTtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpICogMik7XFxuICAgICAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKTsgfVxcbiAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAge1xcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgICAgIHRvcDogODBweDtcXG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveFNoYWRvdyk7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMpO1xcbiAgICAgICAgcGFkZGluZzogMzBweDsgfVxcbiAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25faGVhZGVyIHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4OyB9XFxuICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX2hlYWRlciAucmVzZXJ2YXRpb25faGVscF90ZXh0IHtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4OyB9XFxuICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX2hlYWRlciBzbWFsbCB7XFxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7IH1cXG4gICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9oZWFkZXIgc21hbGwgLnN0YXIge1xcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXJlZCk7XFxuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7IH1cXG4gICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9oZWFkZXIgc21hbGwgLnJhdGluZ19jb3VudCB7XFxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JheSk7IH1cXG4gICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX21haW4ge1xcbiAgICAgICAgICBib3JkZXI6IHZhcigtLWJvdHRvbUJvcmRlcik7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7IH1cXG4gICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fbWFpbiAucmVzZXJ2YXRpb25faXRlbV9ib3gge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fbWFpbiAucmVzZXJ2YXRpb25faXRlbV9ib3ggLnJlc2VydmF0aW9uX2l0ZW0ge1xcbiAgICAgICAgICAgICAgZmxleDogMSAxIDUwJTtcXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7IH1cXG4gICAgICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX2l0ZW1fYm94IC5yZXNlcnZhdGlvbl9pdGVtIC5yZXNlcnZhdGlvbl9kaXNwbGF5IHtcXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwOyB9XFxuICAgICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9tYWluIC5yZXNlcnZhdGlvbl9pdGVtX2JveCAucmVzZXJ2YXRpb25faXRlbSArIC5yZXNlcnZhdGlvbl9pdGVtIHtcXG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IHZhcigtLWJvdHRvbUJvcmRlcik7IH1cXG4gICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fbWFpbiAucmVzZXJ2YXRpb25fcGVvcGxlIHtcXG4gICAgICAgICAgICBib3JkZXItdG9wOiB2YXIoLS1ib3R0b21Cb3JkZXIpO1xcbiAgICAgICAgICAgIGZsZXg6IDEgMSA1MCU7XFxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4OyB9XFxuICAgICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fbWFpbiAucmVzZXJ2YXRpb25fcGVvcGxlIC5yZXNlcnZhdGlvbl9kaXNwbGF5IHtcXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7IH1cXG4gICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9tYWluIC5yZXNlcnZhdGlvbl9wZW9wbGUgLnJlc2VydmF0aW9uX2Rpc3BsYXkge1xcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICAgICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9tYWluIC5yZXNlcnZhdGlvbl9wZW9wbGUgLnJlc2VydmF0aW9uX2Rpc3BsYXkgLmd1ZXN0X2NvdW50ZXJfYm94IHtcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICAgICAgICByaWdodDogMDtcXG4gICAgICAgICAgICAgICAgdG9wOiAtMTBweDsgfVxcbiAgICAgICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9tYWluIC5yZXNlcnZhdGlvbl9wZW9wbGUgLnJlc2VydmF0aW9uX2Rpc3BsYXkgLmd1ZXN0X2NvdW50ZXJfYm94IC5kaXNwbGF5X2J0bl9pY29uIHtcXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgICAgICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9tYWluIC5yZXNlcnZhdGlvbl9wZW9wbGUgLnJlc2VydmF0aW9uX2Rpc3BsYXkgLmd1ZXN0X2NvdW50ZXJfYm94IC5kaXNwbGF5X2J0bl9pY29uOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7IH1cXG4gICAgICAgICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9tYWluIC5yZXNlcnZhdGlvbl9wZW9wbGUgLnJlc2VydmF0aW9uX2Rpc3BsYXkgLmd1ZXN0X2NvdW50ZXJfYm94IC5kaXNwbGF5X2J0bl9pY29uOmFjdGl2ZSB7XFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpOyB9XFxuICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9idG4ge1xcbiAgICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9wcmljZSB7XFxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9wcmljZSAucHJpY2VfY29tbWVudCB7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDsgfVxcbiAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9wcmljZSAucHJpY2VfaXRlbSxcXG4gICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fcHJpY2UgLnRvdGFsX3ByaWNlIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIC8gMik7IH1cXG4gICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9wcmljZSAucHJpY2VfaXRlbSAucHJpY2VfbmFtZSxcXG4gICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9wcmljZSAudG90YWxfcHJpY2UgLnByaWNlX25hbWUge1xcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDsgfVxcbiAgICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX3ByaWNlIC5wcmljZV9pdGVtIC5wcmljZV92YWx1ZSxcXG4gICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9wcmljZSAudG90YWxfcHJpY2UgLnByaWNlX3ZhbHVlIHtcXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX3ByaWNlIC50b3RhbF9wcmljZSB7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pIC8gMik7XFxuICAgICAgICAgICAgYm9yZGVyLXRvcDogdmFyKC0tYm90dG9tQm9yZGVyKTsgfVxcbiAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fZm9ybSB7XFxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICAgIHRvcDogNDAlO1xcbiAgICAgICAgICByaWdodDogLTEwcHg7XFxuICAgICAgICAgIHdpZHRoOiA2NjBweDtcXG4gICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94U2hhZG93KTtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzKTtcXG4gICAgICAgICAgcGFkZGluZzogMjBweCAzMHB4OyB9XFxuICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1faGVhZGVyIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAgICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fZm9ybSAuZm9ybV9oZWFkZXIgLmhlYWRlcl90ZXh0IHtcXG4gICAgICAgICAgICAgIHdpZHRoOiA1NSU7IH1cXG4gICAgICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1faGVhZGVyIC5oZWFkZXJfdGV4dCAuaGVhZGVyX3RpdGxlIHtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07IH1cXG4gICAgICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1faGVhZGVyIC5oZWFkZXJfdGV4dCAuaGVhZGVyX2JvZHkge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7IH1cXG4gICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9mb3JtIC5mb3JtX2hlYWRlciAuaGVhZGVyX2lucHV0cyB7XFxuICAgICAgICAgICAgICB3aWR0aDogNDUlO1xcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgIGJvcmRlcjogdmFyKC0tYm90dG9tQm9yZGVyKTtcXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3OyB9XFxuICAgICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9mb3JtIC5mb3JtX2hlYWRlciAuaGVhZGVyX2lucHV0cyAuaW5wdXRfaXRlbSB7XFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMpO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlOyB9XFxuICAgICAgICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1faGVhZGVyIC5oZWFkZXJfaW5wdXRzIC5pbnB1dF9pdGVtIC5yZXNlcnZhdGlvbl9pbnB1dCB7XFxuICAgICAgICAgICAgICAgICAgYWxsOiB1bnNldDtcXG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogdGV4dDsgfVxcbiAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9mb3JtIC5mb3JtX21haW4ge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiB2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKTtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pIC8gMik7IH1cXG4gICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9mb3JtIC5mb3JtX21haW4gLnBhZ2luYXRpb25fYnRucyB7XFxuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG4gICAgICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1fbWFpbiAucGFnaW5hdGlvbl9idG5zIC5wYWdpbmF0aW9uX2J0biB7XFxuICAgICAgICAgICAgICAgIGFsbDogdW5zZXQ7XFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07IH1cXG4gICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9mb3JtIC5mb3JtX21haW4gLmNhbGVuZGFyX3dyYXAge1xcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyB9XFxuICAgICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9mb3JtIC5mb3JtX21haW4gLmNhbGVuZGFyX3dyYXAgLmNhbGVuZGFyX2l0ZW0ge1xcbiAgICAgICAgICAgICAgICB3aWR0aDogNDglOyB9XFxuICAgICAgICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1fbWFpbiAuY2FsZW5kYXJfd3JhcCAuY2FsZW5kYXJfaXRlbSAuY2FsZW5kYXJfbW9udGgge1xcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7IH1cXG4gICAgICAgICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fZm9ybSAuZm9ybV9tYWluIC5jYWxlbmRhcl93cmFwIC5jYWxlbmRhcl9pdGVtIC5jYWxlbmRhcl9yb3cge1xcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gICAgICAgICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9mb3JtIC5mb3JtX21haW4gLmNhbGVuZGFyX3dyYXAgLmNhbGVuZGFyX2l0ZW0gLmNhbGVuZGFyX3JvdyAuY2FsZW5kYXJfZGF5IHtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB2YXIoLS1jYWxlbmRhckRheVNpemUpO1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB2YXIoLS1jYWxlbmRhckRheVNpemUpO1xcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgICAgICAgICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9mb3JtIC5mb3JtX21haW4gLmNhbGVuZGFyX3dyYXAgLmNhbGVuZGFyX2l0ZW0gLmNhbGVuZGFyX3JvdyAuY2FsZW5kYXJfZGF5LmF2YWlsYWJsZV9kYXkge1xcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZhOyB9XFxuICAgICAgICAgICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9mb3JtIC5mb3JtX21haW4gLmNhbGVuZGFyX3dyYXAgLmNhbGVuZGFyX2l0ZW0gLmNhbGVuZGFyX3JvdyAuY2FsZW5kYXJfZGF5IHNwYW4ge1xcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IHZhcigtLWNhbGVuZGFyRGF5U2l6ZSk7IH1cXG4gICAgICAgICAgICAgICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fZm9ybSAuZm9ybV9tYWluIC5jYWxlbmRhcl93cmFwIC5jYWxlbmRhcl9pdGVtIC5jYWxlbmRhcl9yb3cgLmNhbGVuZGFyX2RheSBzcGFuLmludmFsaWRfZGF5IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7IH1cXG4gICAgICAgICAgICAgICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fZm9ybSAuZm9ybV9tYWluIC5jYWxlbmRhcl93cmFwIC5jYWxlbmRhcl9pdGVtIC5jYWxlbmRhcl9yb3cgLmNhbGVuZGFyX2RheSBzcGFuLnZhbGlkX2RheTpob3ZlciB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAgICAgICAgICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fZm9ybSAuZm9ybV9tYWluIC5jYWxlbmRhcl93cmFwIC5jYWxlbmRhcl9pdGVtIC5jYWxlbmRhcl9yb3cgLmNhbGVuZGFyX2RheS5jbGlja2VkLmF2YWlsYWJsZV9kYXkge1xcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCUgMCAwIDUwJTsgfVxcbiAgICAgICAgICAgICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fZm9ybSAuZm9ybV9tYWluIC5jYWxlbmRhcl93cmFwIC5jYWxlbmRhcl9pdGVtIC5jYWxlbmRhcl9yb3cgLmNhbGVuZGFyX2RheS5jbGlja2VkIHNwYW4ge1xcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdCAhaW1wb3J0YW50OyB9XFxuICAgICAgICAgICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fZm9ybSAuZm9ybV9tYWluIC5jYWxlbmRhcl93cmFwIC5jYWxlbmRhcl9pdGVtIC5jYWxlbmRhcl9yb3cgLmRheW5hbWUge1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JheSk7IH1cXG4gICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fZm9ybSAuZm9ybV9mb290ZXIge1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDsgfVxcbiAgICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1fZm9vdGVyIC5pbnB1dF9yZXNldCB7XFxuICAgICAgICAgICAgICBhbGw6IHVuc2V0O1xcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMC44NTtcXG4gICAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKSwgMXB4IC0xcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpLCAtMXB4IDFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvciksIC0xcHggLTFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvcik7XFxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9mb3JtIC5mb3JtX2Zvb3RlciAuZm9ybV9leGl0IHtcXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gICAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4O1xcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgICBib3JkZXI6IDA7XFxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMpO1xcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gIC53cmFwIC5yZXZpZXdfd3JhcCB7XFxuICAgIHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgMDtcXG4gICAgbWFyZ2luOiAwIHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pO1xcbiAgICBib3JkZXItdG9wOiB2YXIoLS1ib3R0b21Cb3JkZXIpO1xcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1ib3R0b21Cb3JkZXIpOyB9XFxuICAgIC53cmFwIC5yZXZpZXdfd3JhcCAucmV2aWV3X3RpdGxlIHtcXG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgICBmb250LXdlaWdodDogNzAwOyB9XFxuICAgICAgLndyYXAgLnJldmlld193cmFwIC5yZXZpZXdfdGl0bGUgLnN0YXIge1xcbiAgICAgICAgY29sb3I6IHZhcigtLXJlZCk7XFxuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7IH1cXG4gICAgLndyYXAgLnJldmlld193cmFwIC5yZXZpZXdfaXRlbSB7XFxuICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIC8gMS41KSAwOyB9XFxuICAgICAgLndyYXAgLnJldmlld193cmFwIC5yZXZpZXdfaXRlbSAucmV2aWV3X2hlYWRlciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAgICAgICAud3JhcCAucmV2aWV3X3dyYXAgLnJldmlld19pdGVtIC5yZXZpZXdfaGVhZGVyIC5ndWVzdF9wcm9maWxlX2ltZyB7XFxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICAgICAgd2lkdGg6IDUwcHg7XFxuICAgICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlOyB9XFxuICAgICAgICAud3JhcCAucmV2aWV3X3dyYXAgLnJldmlld19pdGVtIC5yZXZpZXdfaGVhZGVyIC5yZXZpZXdfaW5mbyB7XFxuICAgICAgICAgIHBhZGRpbmctbGVmdDogY2FsYyh2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIC8gMik7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyB9XFxuICAgICAgICAgIC53cmFwIC5yZXZpZXdfd3JhcCAucmV2aWV3X2l0ZW0gLnJldmlld19oZWFkZXIgLnJldmlld19pbmZvIC5yZXZpZXdfY3JlYXRlZCB7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07IH1cXG4gIC53cmFwIC5yb29tX3J1bGUge1xcbiAgICBwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7XFxuICAgIG1hcmdpbjogMCB2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKTtcXG4gICAgZGlzcGxheTogZmxleDsgfVxcbiAgICAud3JhcCAucm9vbV9ydWxlIC5ydWxlX2hlYWRlciB7XFxuICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDsgfVxcbiAgICAud3JhcCAucm9vbV9ydWxlIC5ydWxlc193cmFwIC5ydWxlX2l0ZW0ge1xcbiAgICAgIG1hcmdpbjogMTVweCAwOyB9XFxuICAgICAgLndyYXAgLnJvb21fcnVsZSAucnVsZXNfd3JhcCAucnVsZV9pdGVtIC5ydWxlX2ljb24ge1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgd2lkdGg6IDQwcHg7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgICAud3JhcCAucm9vbV9ydWxlIC5ydWxlc193cmFwIC5ydWxlX2l0ZW0gLnJ1bGVfZGVzY3JpcHRpb24ge1xcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxuICAgICAgICBmb250LXdlaWdodDogMzAwOyB9XFxuICAgIC53cmFwIC5yb29tX3J1bGUgLm1lc3NhZ2Vfd3JhcCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMDBweDsgfVxcbiAgICAgIC53cmFwIC5yb29tX3J1bGUgLm1lc3NhZ2Vfd3JhcCAubWVzc2FnZV9idG4ge1xcbiAgICAgICAgcGFkZGluZzogMTBweCA0MHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICAgICAgb3BhY2l0eTogMC41O1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzKTtcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgICAgIC53cmFwIC5yb29tX3J1bGUgLm1lc3NhZ2Vfd3JhcCAubWVzc2FnZV9idG46aG92ZXIge1xcbiAgICAgICAgICBvcGFjaXR5OiAwLjg7IH1cXG4gICAgICAud3JhcCAucm9vbV9ydWxlIC5tZXNzYWdlX3dyYXAgLmFsZXJ0IHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgICAgICB3aWR0aDogMjUwcHg7XFxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc2Nzcy9zdHlsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc2Nzcy9fX3Jlc2V0LnNjc3NcIixcIndlYnBhY2s6Ly9zY3NzL19fbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0MsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsb0JBQW9CLEVBQUE7O0FBRXJCOzs7Ozs7RUFNQyxnQkFBZ0IsRUFBQTs7QUFHakI7RUFDQyxxQkFBcUI7RUFDckIsY0FBYyxFQUFBOztBQUdmO0VBQ0MsZUFBZSxFQUFBOztBQUdoQjtFQUNDLGtCQUFrQixFQUFBOztBQUduQjtFQUNDLGdCQUFnQixFQUFBOztBRDFCakI7RUFDQyxlQUFPO0VBQ1AsbUJBQVc7RUFDWCxjQUFNO0VBQ04saUNBQTRCO0VBQzVCLGdDQUEyQjtFQUMzQix5QkFBaUI7RUFDakIscUNBQWU7RUFDZixvQkFBZTtFQUNmLHVCQUFrQjtFQUNsQix5RUFBWSxFQUFBOztBQUdiO0VBQ0MsdUNBQXVDLEVBQUE7O0FBR3hDO0VBQ0MsMEJBQTBCO0VBQzFCLHVCQUF1QixFQUFBOztBQUd4QjtFQUNDLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTtFQUZsQjtJQUtFLDBDQUEwQztJQUMxQywwQ0FBMEM7SUFDMUMsZ0JBQWdCLEVBQUE7SUFQbEI7TUV4QkMsOEJBQThCO01BQzlCLHFCQUFxQjtNQUNyQixpQkFBaUI7TUFDakIsMklBQ2dFLEVBQUE7RUZvQmpFO0lBZUUsMENBQTBDLEVBQUE7SUFmNUM7TUFrQkcsYUFBYTtNQUNiLGlFQUFt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bnRcIjpbXCJAaW1wb3J0IFxcXCIuL19yZXNldFxcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi9fbWl4aW5zXFxcIjtcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrS1I6d2dodEAzMDA7NTAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG46cm9vdCB7XFxyXFxuXFx0LS1ncmF5OiAjN2Y4YzhkO1xcclxcblxcdC0tZGVlcEdyYXk6ICM1MzVjNjg7XFxyXFxuXFx0LS1yZWQ6ICNmZjM4NWM7XFxyXFxuXFx0LS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luOiA1MHB4O1xcclxcblxcdC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nOiAzMHB4O1xcclxcblxcdC0tZGV0YWlsRm9udFNpemU6IHNtYWxsZXI7XFxyXFxuXFx0LS1ib3R0b21Cb3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmF5KTtcXHJcXG5cXHQtLWJvcmRlclJhZGl1czogMTBweDtcXHJcXG5cXHQtLWNhbGVuZGFyRGF5U2l6ZTogNDBweDtcXHJcXG5cXHQtLWJveFNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG5cXHRmb250LWZhbWlseTogXFxcIk5vdG8gU2FucyBLUlxcXCIsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5CdG5EaXNhYmxlZCB7XFxyXFxuXFx0Y3Vyc29yOiBuby1kcm9wICFpbXBvcnRhbnQ7XFxyXFxuXFx0b3BhY2l0eTogMC4yICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi53cmFwIHtcXHJcXG5cXHRtYXJnaW46IDAgYXV0bztcXHJcXG5cXHRtYXgtd2lkdGg6IDEyMDBweDtcXHJcXG5cXHJcXG5cXHQubmF2X2NhdGVnb3J5IHtcXHJcXG5cXHRcXHRwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7XFxyXFxuXFx0XFx0bWFyZ2luOiAwIHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pO1xcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuXFxyXFxuXFx0XFx0YSB7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgdW5kZXJsaW5lO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LnJvb21faW1hZ2Uge1xcclxcblxcdFxcdG1hcmdpbjogMCB2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKTtcXHJcXG5cXHJcXG5cXHRcXHQucm9vbV9pbWFnZV9ncmlkIHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdFxcdFxcdGdyaWQ6IHJlcGVhdCgyLCBtaW5tYXgoMTUwcHgsIDFmcikpIC8gcmVwZWF0KDQsIG1pbm1heCgxNTBweCwgMWZyKSk7XFxyXFxuXFx0XFx0XFx0Z2FwOiAxMHB4O1xcclxcblxcclxcblxcdFxcdFxcdGltZyB7XFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdG9iamVjdC1maXQ6IGNvdmVyO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0JjpmaXJzdC1jaGlsZCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Z3JpZC1hcmVhOiBzcGFuIDIgLyBzcGFuIDI7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5tYWluX3dyYXAge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuXFx0XFx0Lm1haW5fbGVmdCB7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDY1JTtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7XFxyXFxuXFxyXFxuXFx0XFx0XFx0LnJvb21faGVhZGVyIHtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nLWJvdHRvbTogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKTtcXHJcXG5cXHRcXHRcXHRcXHRtYXJnaW46IDAgdmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbik7XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyLWJvdHRvbTogdmFyKC0tYm90dG9tQm9yZGVyKTtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHQucm9vbV90aXRsZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0LnJvb21faW5mbyB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Zm9udC1zaXplOiB2YXIoLS1kZXRhaWxGb250U2l6ZSk7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0LnN0YXIge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdEBpbmNsdWRlIHN0YXIoMjBweCk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdC5yYXRpbmdfY291bnQge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiB2YXIoLS1ncmF5KTtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQmOjphZnRlciB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0Y29udGVudDogXFxcIiDCtyBcXFwiO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdC5hZGRyZXNzIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRAaW5jbHVkZSB1bmRlcmxpbmU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0bGluZS1oZWlnaHQ6IDAuOTU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IHZhcigtLWRlZXBHcmF5KTtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHQuaG9zdF9pbmZvIHtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7XFxyXFxuXFx0XFx0XFx0XFx0bWFyZ2luOiAwIHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pO1xcclxcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyLWJvdHRvbTogdmFyKC0tYm90dG9tQm9yZGVyKTtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRoZ3JvdXAge1xcclxcblxcdFxcdFxcdFxcdFxcdC51c2VybmFtZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0LnJvb21fc2hvcnRfc3BlYyB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Zm9udC1zaXplOiB2YXIoLS1kZXRhaWxGb250U2l6ZSk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdC51c2VyX3Byb2ZpbGUge1xcclxcblxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi4vaW1nL3RodW1ibmFpbDEuanBnXFxcIik7XFxyXFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcblxcdFxcdFxcdFxcdFxcdG1pbi13aWR0aDogODBweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRoZWlnaHQ6IDgwcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdFxcdFxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdC5yb29tX2RldGFpbF9pbmZvIHtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7XFxyXFxuXFx0XFx0XFx0XFx0bWFyZ2luOiAwIHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlci1ib3R0b206IHZhcigtLWJvdHRvbUJvcmRlcik7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0YSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0XFx0XFx0XFx0XFx0bWFyZ2luOiB2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKSAwO1xcclxcblxcdFxcdFxcdFxcdFxcdEBpbmNsdWRlIHVuZGVybGluZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0LnJvb21fZmFjaWxpdGllcyB7XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAwO1xcclxcblxcdFxcdFxcdFxcdG1hcmdpbjogMCB2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKTtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRoMyB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRwYWRkaW5nOiAxNXB4IDA7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdC5mYWNpbGl0eV9pdGVtIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRAaW5jbHVkZSBmYWNpbGl0eV9ydWxlX2l0ZW07XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0LmZhY2lsaXR5X2ljb24ge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdEBpbmNsdWRlIGZhY2lsaXR5X3J1bGVfaWNvbjtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0LmZhY2lsaXR5X2Rlc2NyaXB0aW9uIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRAaW5jbHVkZSBmYWNpbGl0eV9ydWxlX2Rlc2NyaXB0aW9uO1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQubWFpbl9yaWdodCB7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDM1JTtcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0XFx0cGFkZGluZy10b3A6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZyk7XFxyXFxuXFx0XFx0XFx0cGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAqIDIpO1xcclxcblxcdFxcdFxcdG1hcmdpbi1yaWdodDogdmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbik7XFxyXFxuXFxyXFxuXFx0XFx0XFx0LnJlc2VydmF0aW9uX3dyYXAge1xcclxcblxcdFxcdFxcdFxcdHBvc2l0aW9uOiBzdGlja3k7XFxyXFxuXFx0XFx0XFx0XFx0dG9wOiA4MHB4O1xcclxcblxcdFxcdFxcdFxcdGJveC1zaGFkb3c6IHZhcigtLWJveFNoYWRvdyk7XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzKTtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAzMHB4O1xcclxcblxcclxcblxcdFxcdFxcdFxcdC5yZXNlcnZhdGlvbl9oZWFkZXIge1xcclxcblxcdFxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdFxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0LnJlc2VydmF0aW9uX2hlbHBfdGV4dCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR0ZXh0LWFsaWduOiBsZWZ0O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGxpbmUtaGVpZ2h0OiAxLjE7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0bWF4LXdpZHRoOiAyMDBweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0c21hbGwge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxMnB4O1xcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdFxcdC5zdGFyIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRAaW5jbHVkZSBzdGFyKDEycHgpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQucmF0aW5nX2NvdW50IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogdmFyKC0tZ3JheSk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0LnJlc2VydmF0aW9uX21haW4ge1xcclxcblxcdFxcdFxcdFxcdFxcdGJvcmRlcjogdmFyKC0tYm90dG9tQm9yZGVyKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMpO1xcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdC5yZXNlcnZhdGlvbl9pdGVtX2JveCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0LnJlc2VydmF0aW9uX2l0ZW0ge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdEBpbmNsdWRlIHJlc2VydmF0aW9uX2l0ZW07XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0JiArIC5yZXNlcnZhdGlvbl9pdGVtIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRib3JkZXItbGVmdDogdmFyKC0tYm90dG9tQm9yZGVyKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHQucmVzZXJ2YXRpb25fcGVvcGxlIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRib3JkZXItdG9wOiB2YXIoLS1ib3R0b21Cb3JkZXIpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdEBpbmNsdWRlIHJlc2VydmF0aW9uX2l0ZW07XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0LnJlc2VydmF0aW9uX2Rpc3BsYXkge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQuZ3Vlc3RfY291bnRlcl9ib3gge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRyaWdodDogMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR0b3A6IC0xMHB4O1xcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdC5kaXNwbGF5X2J0bl9pY29uIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHdpZHRoOiAzMHB4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGhlaWdodDogMzBweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRsaW5lLWhlaWdodDogMzBweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0bWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0b3BhY2l0eTogMC41O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0b3BhY2l0eTogMTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0JjphY3RpdmUge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0LnJlc2VydmF0aW9uX2J0biB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Ym9yZGVyOiAwO1xcclxcblxcdFxcdFxcdFxcdFxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0cGFkZGluZzogMTBweCAzMHB4O1xcclxcblxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdFxcdFxcdFxcdFxcdG1hcmdpbjogMTBweCAwO1xcclxcblxcdFxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdFxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHQucmVzZXJ2YXRpb25fcHJpY2Uge1xcclxcblxcdFxcdFxcdFxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHQucHJpY2VfY29tbWVudCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0LnByaWNlX2l0ZW0sXFxyXFxuXFx0XFx0XFx0XFx0XFx0LnRvdGFsX3ByaWNlIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIC8gMik7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0LnByaWNlX25hbWUge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdFxcdC5wcmljZV92YWx1ZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0dGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHQudG90YWxfcHJpY2Uge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0bWFyZ2luLXRvcDogY2FsYyh2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKSAvIDIpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGJvcmRlci10b3A6IHZhcigtLWJvdHRvbUJvcmRlcik7XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHQucmVzZXJ2YXRpb25fZm9ybSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcblxcdFxcdFxcdFxcdFxcdHRvcDogNDAlO1xcclxcblxcdFxcdFxcdFxcdFxcdHJpZ2h0OiAtMTBweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHR3aWR0aDogNjYwcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Ym94LXNoYWRvdzogdmFyKC0tYm94U2hhZG93KTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMpO1xcclxcblxcdFxcdFxcdFxcdFxcdHBhZGRpbmc6IDIwcHggMzBweDtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHQuZm9ybV9oZWFkZXIge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0LmhlYWRlcl90ZXh0IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHR3aWR0aDogNTUlO1xcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdC5oZWFkZXJfdGl0bGUge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxLjVyZW07XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdC5oZWFkZXJfYm9keSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IHZhcigtLWdyYXkpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQuaGVhZGVyX2lucHV0cyB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0d2lkdGg6IDQ1JTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdGJvcmRlcjogdmFyKC0tYm90dG9tQm9yZGVyKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0LmlucHV0X2l0ZW0ge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMC44cmVtO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHBhZGRpbmc6IDEwcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR3aWR0aDogNTAlO1xcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdC5yZXNlcnZhdGlvbl9pbnB1dCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0YWxsOiB1bnNldDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRmb250LXdlaWdodDogMzAwO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGN1cnNvcjogdGV4dDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0LmZvcm1fbWFpbiB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdG1hcmdpbi10b3A6IHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbikgLyAyKTtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQucGFnaW5hdGlvbl9idG5zIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdC5wYWdpbmF0aW9uX2J0biB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0YWxsOiB1bnNldDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxLjVyZW07XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0bGluZS1oZWlnaHQ6IDEuNXJlbTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdFxcdC5jYWxlbmRhcl93cmFwIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQuY2FsZW5kYXJfaXRlbSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0d2lkdGg6IDQ4JTtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQuY2FsZW5kYXJfbW9udGgge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdC5jYWxlbmRhcl9yb3cge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0LmNhbGVuZGFyX2RheSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0d2lkdGg6IHZhcigtLWNhbGVuZGFyRGF5U2l6ZSk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0aGVpZ2h0OiB2YXIoLS1jYWxlbmRhckRheVNpemUpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQmLmF2YWlsYWJsZV9kYXkge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNmNWY2ZmE7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHNwYW4ge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRsaW5lLWhlaWdodDogdmFyKC0tY2FsZW5kYXJEYXlTaXplKTtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQmLmludmFsaWRfZGF5IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogdmFyKC0tZ3JheSk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdCYudmFsaWRfZGF5OmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Ji5jbGlja2VkIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQmLmF2YWlsYWJsZV9kYXkge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDUwJSAwIDAgNTAlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRzcGFuIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRib3JkZXI6IDAgIWltcG9ydGFudDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Y3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0LmRheW5hbWUge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMC44cmVtO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiB2YXIoLS1ncmF5KTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdC5mb3JtX2Zvb3RlciB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0dGV4dC1hbGlnbjogZW5kO1xcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdFxcdC5pbnB1dF9yZXNldCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0YWxsOiB1bnNldDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IDAuOXJlbTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRAaW5jbHVkZSB1bmRlcmxpbmU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQuZm9ybV9leGl0IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0bWFyZ2luOiAwIDE1cHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdGJvcmRlcjogMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LnJldmlld193cmFwIHtcXHJcXG5cXHRcXHRwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7XFxyXFxuXFx0XFx0bWFyZ2luOiAwIHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pO1xcclxcblxcdFxcdGJvcmRlci10b3A6IHZhcigtLWJvdHRvbUJvcmRlcik7XFxyXFxuXFx0XFx0Ym9yZGVyLWJvdHRvbTogdmFyKC0tYm90dG9tQm9yZGVyKTtcXHJcXG5cXHJcXG5cXHRcXHQucmV2aWV3X3RpdGxlIHtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDEuM3JlbTtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcclxcblxcdFxcdFxcdC5zdGFyIHtcXHJcXG5cXHRcXHRcXHRcXHRAaW5jbHVkZSBzdGFyKGluaGVyaXQpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LnJldmlld19pdGVtIHtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiBjYWxjKHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgLyAxLjUpIDA7XFxyXFxuXFxyXFxuXFx0XFx0XFx0LnJldmlld19oZWFkZXIge1xcclxcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0Lmd1ZXN0X3Byb2ZpbGVfaW1nIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4uL2ltZy90aHVtYm5haWwxLmpwZ1xcXCIpO1xcclxcblxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcblxcdFxcdFxcdFxcdFxcdHdpZHRoOiA1MHB4O1xcclxcblxcdFxcdFxcdFxcdFxcdGhlaWdodDogNTBweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdC5yZXZpZXdfaW5mbyB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0cGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgLyAyKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0Lmd1ZXN0X25hbWUge1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHQucmV2aWV3X2NyZWF0ZWQge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiB2YXIoLS1ncmF5KTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRmb250LXdlaWdodDogMzAwO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMC43cmVtO1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdC5yZXZpZXdfbWFpbiB7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LnJvb21fcnVsZSB7XFxyXFxuXFx0XFx0cGFkZGluZzogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAwO1xcclxcblxcdFxcdG1hcmdpbjogMCB2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKTtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcclxcblxcdFxcdC5ydWxlX2hlYWRlciB7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiAxLjNyZW07XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LnJ1bGVzX3dyYXAge1xcclxcblxcdFxcdFxcdC5ydWxlX2l0ZW0ge1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIGZhY2lsaXR5X3J1bGVfaXRlbTtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHQucnVsZV9pY29uIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRAaW5jbHVkZSBmYWNpbGl0eV9ydWxlX2ljb247XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdC5ydWxlX2Rlc2NyaXB0aW9uIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRAaW5jbHVkZSBmYWNpbGl0eV9ydWxlX2Rlc2NyaXB0aW9uO1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC5tZXNzYWdlX3dyYXAge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG5cXHRcXHRcXHRtYXJnaW4tbGVmdDogMTAwcHg7XFxyXFxuXFxyXFxuXFx0XFx0XFx0Lm1lc3NhZ2VfYnRuIHtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiAxMHB4IDQwcHg7XFxyXFxuXFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHRcXHRcXHRmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG5cXHRcXHRcXHRcXHRvcGFjaXR5OiAwLjU7XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzKTtcXHJcXG5cXHRcXHRcXHRcXHRvdXRsaW5lOiBub25lO1xcclxcblxcdFxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRvcGFjaXR5OiAwLjg7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHQuYWxlcnQge1xcclxcblxcdFxcdFxcdFxcdG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6IDI1MHB4O1xcclxcblxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMC44cmVtO1xcclxcblxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiKiB7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHR3b3JkLWJyZWFrOiBrZWVwLWFsbDtcXHJcXG59XFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHRjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuc21hbGwge1xcclxcblxcdGZvbnQtc2l6ZTogMTRweDtcXHJcXG59XFxyXFxuXFxyXFxuaSB7XFxyXFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG51bCB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXCIsXCJAbWl4aW4gdW5kZXJsaW5lIHtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAwLjg1O1xcclxcblxcdHRleHQtc2hhZG93OiAxcHggMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKSwgMXB4IC0xcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpLFxcclxcblxcdFxcdC0xcHggMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKSwgLTFweCAtMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKTtcXHJcXG5cXHRAY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIHN0YXIoJGZvbnQtc2l6ZSkge1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQpO1xcclxcblxcdGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIHJlc2VydmF0aW9uX2l0ZW0ge1xcclxcblxcdGZsZXg6IDEgMSA1MCU7XFxyXFxuXFx0cGFkZGluZzogNXB4IDEwcHg7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjlyZW07XFxyXFxuXFx0aGVpZ2h0OiA1MHB4O1xcclxcblxcclxcblxcdC5yZXNlcnZhdGlvbl9kaXNwbGF5IHtcXHJcXG5cXHRcXHRjb2xvcjogdmFyKC0tZ3JheSk7XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBmYWNpbGl0eV9ydWxlX2l0ZW0ge1xcclxcblxcdG1hcmdpbjogMTVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZmFjaWxpdHlfcnVsZV9pY29uIHtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0d2lkdGg6IDQwcHg7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZmFjaWxpdHlfcnVsZV9kZXNjcmlwdGlvbiB7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJyksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI0YjM0YTU1ZTA5ZGNhMDYwNDY4NjM1MWZlY2UwYWNlNi5qcGdcIjsiLCJpbXBvcnQgXCIuL3Njc3Mvc3R5bGUuc2Nzc1wiO1xyXG5pbXBvcnQgKiBhcyB1dGlsIGZyb20gXCIuL2pzL3V0aWxcIjtcclxuXHJcbi8qXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKiBHbG9iYWwgU3RhdGVcclxuICovXHJcbmxldCBzdGF0ZSA9IHtcclxuXHRjdXJEYXRlOiBuZXcgRGF0ZSgpLFxyXG5cdHRvZGF5OiBuZXcgRGF0ZSgpLFxyXG5cdGNoZWNrSW5JZDogXCJcIixcclxuXHRjaGVja091dElkOiBcIlwiLFxyXG59O1xyXG5cclxuLypcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqIE1vZGVsXHJcbiAqL1xyXG5jb25zdCBEYXRhQ29udHJvbGxlciA9ICgoKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGdldFJlc2VydmVkRGF5czogKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBtb2NrdXAgPSBbXCIyMDIwLTA5LTIwXCIsIFwiMjAyMC0wOS0yMVwiLCBcIjIwMjAtMDktMjJcIiwgXCIyMDIwLTA5LTMwXCIsIFwiMjAyMC0xMC0wMVwiXTtcclxuXHRcdFx0cmV0dXJuIG1vY2t1cDtcclxuXHRcdH0sXHJcblx0XHRnZXRSZXNlcnZlUGF5bG9hZDogKCkgPT4ge1xyXG5cdFx0XHQvLyAxLiBHRVQgRELroZzrtoDthLAg7IiZ7IaMIO2VmOujqOuLuSDqsIDqsqlcclxuXHRcdFx0Y29uc3Qgcm9vbVByaWNlID0gMTAwMDAwO1xyXG5cclxuXHRcdFx0Ly8gMi4g6rOE7IKwXHJcblx0XHRcdGNvbnN0IHJvb21OaWdodCA9XHJcblx0XHRcdFx0KG5ldyBEYXRlKHN0YXRlLmNoZWNrT3V0SWQpIC0gbmV3IERhdGUoc3RhdGUuY2hlY2tJbklkKSkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCk7XHJcblx0XHRcdGNvbnN0IHRvdGFsUHJpY2UgPSByb29tTmlnaHQgKiByb29tUHJpY2U7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cm9vbVByaWNlLFxyXG5cdFx0XHRcdHJvb21OaWdodCxcclxuXHRcdFx0XHR0b3RhbFByaWNlLFxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHRcdGdldE1heFBlcnNvbjogKCkgPT4ge1xyXG5cdFx0XHRyZXR1cm4gNDtcclxuXHRcdH0sXHJcblx0fTtcclxufSkoKTtcclxuXHJcbi8qXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKiBWaWV3XHJcbiAqL1xyXG5cclxuY29uc3QgVUlDb250cm9sbGVyID0gKCgpID0+IHtcclxuXHRjb25zdCBET01TdHJpbmcgPSB7XHJcblx0XHRjdXJDYWxlbmRhcjogXCIjY3VyQ2FsZW5kYXJcIixcclxuXHRcdG5leHRDYWxlbmRhcjogXCIjbmV4dENhbGVuZGFyXCIsXHJcblx0XHRleGl0QnRuOiBcIiNmb3JtRXhpdEJ0blwiLFxyXG5cdFx0cmVzZXJ2ZUNvbnRhaW5lcjogXCIjcmVzZXJ2YXRpb25XcmFwXCIsXHJcblx0XHRyZXNlcnZlUG9wdXBDb250YWluZXI6IFwiI3Jlc2VydmF0aW9uRm9ybVwiLFxyXG5cdFx0cmVzZXJ2ZUNoZWNrQm94OiBcIiNyZXNlcnZhdGlvbkJveFwiLFxyXG5cdFx0cmVzZXJ2ZVJlbmRlckJ0bjogXCIjcmVzZXJ2YXRpb25CdG5cIixcclxuXHRcdE1vbnRoWWVhcjogXCIuY2FsZW5kYXJfbW9udGhcIixcclxuXHRcdG5leHRQYWdlOiBcIiNuZXh0UGFnZVwiLFxyXG5cdFx0cHJldlBhZ2U6IFwiI3ByZXZQYWdlXCIsXHJcblx0XHRjYWxlbmRhckJveDogXCIuY2FsZW5kYXJfYm94XCIsXHJcblx0XHRjYWxlbmRhckNvbnRhaW5lcjogXCIjY2FsZW5kYXJXcmFwXCIsXHJcblx0XHRjaGVja0luSW5wdXQ6IFwiI2NoZWNrSW5JbnB1dFwiLFxyXG5cdFx0Y2hlY2tPdXRJbnB1dDogXCIjY2hlY2tPdXRJbnB1dFwiLFxyXG5cdFx0dmFsaWREYXk6IFwiLnZhbGlkX2RheVwiLFxyXG5cdFx0Y2hlY2tJbkRpc3BsYXk6IFwiI2NoZWNrSW5EaXNwbGF5XCIsXHJcblx0XHRjaGVja091dERpc3BsYXk6IFwiI2NoZWNrT3V0RGlzcGxheVwiLFxyXG5cdFx0Z3Vlc3RDb3VudGVyQm94OiBcIiNndWVzdENvdW50ZXJCb3hcIixcclxuXHRcdGd1ZXN0Q291bnQ6IFwiI2d1ZXN0Q291bnRcIixcclxuXHRcdHJlc2V0SW5wdXQ6IFwiI3Jlc2V0SW5wdXRcIixcclxuXHRcdGd1ZXN0UGx1c0J0bjogXCIjZ3Vlc3RQbHVzQnRuXCIsXHJcblx0XHRndWVzdE1pbnVzQnRuOiBcIiNndWVzdE1pbnVzQnRuXCIsXHJcblx0XHRyZXNlcnZlUHJpY2VDb250YWluZXI6IFwiI3Jlc2VydmVQcmljZUNvbnRhaW5lclwiLFxyXG5cdFx0cm9vbVByaWNlOiBcIiNyb29tUHJpY2VcIixcclxuXHRcdHJvb21OaWdodDogXCIjcm9vbU5pZ2h0XCIsXHJcblx0XHRwcmljZVZhbHVlOiBcIiNwcmljZVZhbHVlXCIsXHJcblx0XHR0b3RhbFByaWNlOiBcIiN0b3RhbFByaWNlXCIsXHJcblx0XHRyZXNlcnZlSGVscFRleHQ6IFwiI3Jlc2VydmVIZWxwVGV4dFwiLFxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRpc3BsYXlNb250aCA9ICh5ZWFyLCBtb250aCkgPT4ge1xyXG5cdFx0Y29uc3QgW2N1ck1vbnRoLCBuZXh0TW9udGhdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChET01TdHJpbmcuTW9udGhZZWFyKTtcclxuXHRcdGN1ck1vbnRoLnRleHRDb250ZW50ID0gYCR7bW9udGh97JuUICR7eWVhcn1gO1xyXG5cdFx0bmV4dE1vbnRoLnRleHRDb250ZW50ID0gbW9udGggPT09IDEyID8gYDHsm5QgJHt5ZWFyICsgMX1gIDogYCR7bW9udGggKyAxfeyblCAke3llYXJ9YDtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzZXRCdXR0b25TdHlsZSA9ICh5ZWFyLCBtb250aCkgPT4ge1xyXG5cdFx0Y29uc3QgcHJldkJ0bk5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKERPTVN0cmluZy5wcmV2UGFnZSk7XHJcblx0XHRjb25zdCBDTF9ESVNBQkxFRCA9IFwiQnRuRGlzYWJsZWRcIjtcclxuXHRcdGlmICh5ZWFyID09PSBzdGF0ZS50b2RheS5nZXRGdWxsWWVhcigpICYmIG1vbnRoID09PSBzdGF0ZS50b2RheS5nZXRNb250aCgpICsgMSkge1xyXG5cdFx0XHRwcmV2QnRuTm9kZS5kaXNhYmxlZCA9IHRydWU7XHJcblx0XHRcdHByZXZCdG5Ob2RlLmNsYXNzTGlzdC5hZGQoQ0xfRElTQUJMRUQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cHJldkJ0bk5vZGUuZGlzYWJsZWQgPSBmYWxzZTtcclxuXHRcdFx0cHJldkJ0bk5vZGUuY2xhc3NMaXN0LnJlbW92ZShDTF9ESVNBQkxFRCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgY3JlYXRlRGF5SFRNTCA9ICh5ZWFyLCBtb250aCwgZGF5KSA9PiB7XHJcblx0XHRjb25zdCB7IHRvZGF5IH0gPSBzdGF0ZTtcclxuXHRcdGxldCBDTF9EQVkgPSBcInZhbGlkX2RheVwiO1xyXG5cdFx0aWYgKG1vbnRoID09PSB0b2RheS5nZXRNb250aCgpICsgMSkge1xyXG5cdFx0XHRpZiAoZGF5IDwgdG9kYXkuZ2V0RGF0ZSgpKSBDTF9EQVkgPSBcImludmFsaWRfZGF5XCI7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYFxyXG5cdFx0PGRpdiBjbGFzcz1cImNhbGVuZGFyX2RheVwiPlxyXG5cdFx0XHQ8c3BhbiBjbGFzcz1cIiR7Q0xfREFZfVwiIGlkPVwiJHt5ZWFyfS0ke3V0aWwuc2V0TW9udGhDb3VudChtb250aCl9LSR7dXRpbC5zZXRGaXhEYXlDb3VudChkYXkpfVwiPlxyXG5cdFx0XHRcdCR7ZGF5fVxyXG5cdFx0XHQ8L3NwYW4+XHJcblx0XHQ8L2Rpdj5gO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNyZWF0ZUNhbGVuZGFySFRNTCA9ICh5ZWFyLCBtb250aCkgPT4ge1xyXG5cdFx0Y29uc3QgZmlyc3REYXkgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIDEpO1xyXG5cdFx0Y29uc3QgbGFzdERheSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKS5nZXREYXRlKCk7XHJcblx0XHRjb25zdCBmaXJzdERheU5hbWUgPSBmaXJzdERheS5nZXREYXkoKTsgLy8gIDB+NlxyXG5cclxuXHRcdGxldCBzdGFydERheUNvdW50ID0gMTtcclxuXHRcdGxldCBtYXJrdXAgPSBcIjxkaXYgY2xhc3M9J2NhbGVuZGFyX2JveCc+XCI7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xyXG5cdFx0XHRtYXJrdXAgKz0gXCI8ZGl2IGNsYXNzPSdjYWxlbmRhcl9yb3cnPlwiO1xyXG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IDc7IGorKykge1xyXG5cdFx0XHRcdC8vICDsnbTrsogg64usIOyLnOyekSDsmpTsnbwg7J207KCE7J28IOuVjFxyXG5cdFx0XHRcdGlmIChpID09IDAgJiYgaiA8IGZpcnN0RGF5TmFtZSkge1xyXG5cdFx0XHRcdFx0bWFya3VwICs9IGA8ZGl2IGNsYXNzPVwiY2FsZW5kYXJfZGF5XCI+PHNwYW4+PC9zcGFuPjwvZGl2PmA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vICDsnbTrsogg64usIOyLnOyekSDsmpTsnbwg7J207ZuE7J28IOuVjFxyXG5cdFx0XHRcdGVsc2UgaWYgKHN0YXJ0RGF5Q291bnQgPD0gbGFzdERheSkge1xyXG5cdFx0XHRcdFx0bWFya3VwICs9IGNyZWF0ZURheUhUTUwoeWVhciwgbW9udGgsIHN0YXJ0RGF5Q291bnQrKyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdG1hcmt1cCArPSBcIjwvZGl2PlwiO1xyXG5cdFx0fVxyXG5cdFx0bWFya3VwICs9IFwiPC9kaXY+XCI7XHJcblx0XHRyZXR1cm4gbWFya3VwO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGFkZEludmFsaWREYXlDbGFzcyA9IGNsZWFuZWREYXlzID0+IHtcclxuXHRcdGNvbnN0IENMX1ZBTElEX0RBWSA9IFwidmFsaWRfZGF5XCI7XHJcblx0XHRjb25zdCBDTF9JTlZBTElEX0RBWSA9IFwiaW52YWxpZF9kYXlcIjtcclxuXHJcblx0XHRjbGVhbmVkRGF5cy5mb3JFYWNoKGVsID0+IHtcclxuXHRcdFx0ZWwuY2xhc3NMaXN0LmFkZChDTF9JTlZBTElEX0RBWSk7XHJcblx0XHRcdGVsLmNsYXNzTGlzdC5yZW1vdmUoQ0xfVkFMSURfREFZKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRnZXRET01TdHJpbmc6ICgpID0+IERPTVN0cmluZyxcclxuXHRcdGNsb3NlUG9wdXA6IGV2ZW50ID0+IHtcclxuXHRcdFx0aWYgKGV2ZW50KSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKERPTVN0cmluZy5yZXNlcnZlUG9wdXBDb250YWluZXIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdH0sXHJcblxyXG5cdFx0b3BlblBvcHVwOiAoKSA9PlxyXG5cdFx0XHQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihET01TdHJpbmcucmVzZXJ2ZVBvcHVwQ29udGFpbmVyKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiKSxcclxuXHJcblx0XHRpc0NsaWNrZWRDaGVja0luQW5kT3V0OiBldmVudCA9PiBldmVudC50YXJnZXQubWF0Y2hlcyhgJHtET01TdHJpbmcucmVzZXJ2ZUNoZWNrQm94fSAqYCksXHJcblxyXG5cdFx0aXNDbGlja2VkUmVuZGVyQnRuOiBldmVudCA9PiBldmVudC50YXJnZXQubWF0Y2hlcyhET01TdHJpbmcucmVzZXJ2ZVJlbmRlckJ0biksXHJcblxyXG5cdFx0cmVuZGVyQ2FsZW5kYXI6ICh5ZWFyLCBtb250aCkgPT4ge1xyXG5cdFx0XHRkaXNwbGF5TW9udGgoeWVhciwgbW9udGgpO1xyXG5cdFx0XHRzZXRCdXR0b25TdHlsZSh5ZWFyLCBtb250aCk7XHJcblxyXG5cdFx0XHRkb2N1bWVudFxyXG5cdFx0XHRcdC5xdWVyeVNlbGVjdG9yKERPTVN0cmluZy5jdXJDYWxlbmRhcilcclxuXHRcdFx0XHQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGNyZWF0ZUNhbGVuZGFySFRNTCh5ZWFyLCBtb250aCkpO1xyXG5cdFx0XHRkb2N1bWVudFxyXG5cdFx0XHRcdC5xdWVyeVNlbGVjdG9yKERPTVN0cmluZy5uZXh0Q2FsZW5kYXIpXHJcblx0XHRcdFx0Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBjcmVhdGVDYWxlbmRhckhUTUwoeWVhciwgbW9udGggKyAxKSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGNsZWFyQ2FsZW5kYXI6ICgpID0+IHtcclxuXHRcdFx0Y29uc3QgW2N1ckNhbGVuZGFyLCBuZXh0Q2FsZW5kYXJdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChET01TdHJpbmcuY2FsZW5kYXJCb3gpO1xyXG5cdFx0XHRjdXJDYWxlbmRhci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGN1ckNhbGVuZGFyKTtcclxuXHRcdFx0bmV4dENhbGVuZGFyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobmV4dENhbGVuZGFyKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0YmVFeGNlcHRSZXNlcnZlZERheTogcmVzZXJ2ZWREYXlzID0+IHtcclxuXHRcdFx0Y29uc3QgY2FsZW5kYXJXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihET01TdHJpbmcuY2FsZW5kYXJDb250YWluZXIpO1xyXG5cdFx0XHRjb25zdCByZW5kZXJlZERheXMgPSBBcnJheS5mcm9tKGNhbGVuZGFyV3JhcC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhblwiKSk7XHJcblx0XHRcdGNvbnN0IGNsZWFuZWREYXlzID0gcmVuZGVyZWREYXlzLmZpbHRlcihkYXkgPT4gcmVzZXJ2ZWREYXlzLmluY2x1ZGVzKGRheS5pZCkpO1xyXG5cdFx0XHRhZGRJbnZhbGlkRGF5Q2xhc3MoY2xlYW5lZERheXMpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRyZW5kZXJJbnZhbGlkRGF5OiAoY2xpY2tlZElkLCByZXNlcnZlZERheXMgPSBudWxsKSA9PiB7XHJcblx0XHRcdGNvbnN0IGNhbGVuZGFyV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9NU3RyaW5nLmNhbGVuZGFyQ29udGFpbmVyKTtcclxuXHRcdFx0Y29uc3QgZGF5cyA9IEFycmF5LmZyb20oY2FsZW5kYXJXcmFwLnF1ZXJ5U2VsZWN0b3JBbGwoXCJzcGFuXCIpKTtcclxuXHRcdFx0bGV0IGNsZWFuZWREYXlzO1xyXG5cclxuXHRcdFx0aWYgKHN0YXRlLmNoZWNrSW5JZCA9PT0gXCJcIikge1xyXG5cdFx0XHRcdC8vIDEuIEdFVCDtgbTrpq3rkJwg64Kg7KecIOydtO2bhOydmCDsmIjslb3rkJwg7KCc7J28IOu5oOuluCDrgqDsp5xcclxuXHRcdFx0XHRjb25zdCBsYXRlc3REYXkgPSByZXNlcnZlZERheXMuZmlsdGVyKGRheXN0ciA9PiBjbGlja2VkSWQgPCBkYXlzdHIpLnNvcnQoKVswXTtcclxuXHRcdFx0XHQvLyAyLiDssrTtgazslYTsm4Mg67aI6rCA64ql7ZWcIOuCoOynnCDrp4jtgaxcclxuXHRcdFx0XHRjbGVhbmVkRGF5cyA9IGRheXMuZmlsdGVyKGRheSA9PiBkYXkuaWQgPCBjbGlja2VkSWQgfHwgbGF0ZXN0RGF5IDwgZGF5LmlkKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjbGVhbmVkRGF5cyA9IGRheXMuZmlsdGVyKGRheSA9PiBkYXkuaWQgPiBjbGlja2VkSWQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGFkZEludmFsaWREYXlDbGFzcyhjbGVhbmVkRGF5cyk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldENoZWNrSW5JbnB1dDogaWQgPT5cclxuXHRcdFx0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9NU3RyaW5nLmNoZWNrSW5JbnB1dCkudmFsdWUgPSB1dGlsLmZvcm1hdERhc2hUb0RvdChpZCkpLFxyXG5cdFx0c2V0Q2hlY2tPdXRJbnB1dDogaWQgPT5cclxuXHRcdFx0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9NU3RyaW5nLmNoZWNrT3V0SW5wdXQpLnZhbHVlID0gdXRpbC5mb3JtYXREYXNoVG9Eb3QoaWQpKSxcclxuXHJcblx0XHRyZW5kZXJEYXlCYWNrZ3JvdW5kOiBpZCA9PiB7XHJcblx0XHRcdGNvbnN0IGRheXMgPSBBcnJheS5mcm9tKFxyXG5cdFx0XHRcdGRvY3VtZW50XHJcblx0XHRcdFx0XHQucXVlcnlTZWxlY3RvcihET01TdHJpbmcuY2FsZW5kYXJDb250YWluZXIpXHJcblx0XHRcdFx0XHQucXVlcnlTZWxlY3RvckFsbChET01TdHJpbmcudmFsaWREYXkpXHJcblx0XHRcdCk7XHJcblx0XHRcdGNvbnN0IENMX0FWQUlMX0RBWSA9IFwiYXZhaWxhYmxlX2RheVwiO1xyXG5cdFx0XHRkYXlzLm1hcChlbCA9PiB7XHJcblx0XHRcdFx0ZWwucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKENMX0FWQUlMX0RBWSk7XHJcblx0XHRcdFx0cmV0dXJuIGVsO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHRcdC5maWx0ZXIoZWwgPT4gc3RhdGUuY2hlY2tJbklkIDw9IGVsLmlkICYmIGVsLmlkIDw9IGlkKVxyXG5cdFx0XHRcdC5mb3JFYWNoKGVsID0+IHtcclxuXHRcdFx0XHRcdGVsLnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChDTF9BVkFJTF9EQVkpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHRjbGVhckNoZWNrRGlzcGxheTogKCkgPT4ge1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKERPTVN0cmluZy5jaGVja0luRGlzcGxheSkudGV4dENvbnRlbnQgPSBcIuuCoOynnOyEoO2DnVwiO1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKERPTVN0cmluZy5jaGVja091dERpc3BsYXkpLnRleHRDb250ZW50ID0gXCLrgqDsp5zshKDtg51cIjtcclxuXHRcdH0sXHJcblxyXG5cdFx0cmVuZGVyQ2hlY2tJbkRpc3BsYXk6IGlkID0+XHJcblx0XHRcdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKERPTVN0cmluZy5jaGVja0luRGlzcGxheSkudGV4dENvbnRlbnQgPSB1dGlsLmZvcm1hdERhc2hUb0RvdChcclxuXHRcdFx0XHRpZFxyXG5cdFx0XHQpKSxcclxuXHRcdHJlbmRlckNoZWNrT3V0RGlzcGxheTogaWQgPT5cclxuXHRcdFx0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9NU3RyaW5nLmNoZWNrT3V0RGlzcGxheSkudGV4dENvbnRlbnQgPSB1dGlsLmZvcm1hdERhc2hUb0RvdChcclxuXHRcdFx0XHRpZFxyXG5cdFx0XHQpKSxcclxuXHRcdHJlbmRlckd1ZXN0Q291bnQ6IChldmVudCwgbWF4UGVyc29uLCBtaW5QZXJzb24gPSAxKSA9PiB7XHJcblx0XHRcdGNvbnN0IGd1ZXN0VmFsdWVOb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihET01TdHJpbmcuZ3Vlc3RDb3VudCk7XHJcblx0XHRcdGNvbnN0IHBsdXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKERPTVN0cmluZy5ndWVzdFBsdXNCdG4pO1xyXG5cdFx0XHRjb25zdCBtaW51c0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9NU3RyaW5nLmd1ZXN0TWludXNCdG4pO1xyXG5cdFx0XHRjb25zdCBDTF9ESVNBQkxFRCA9IFwiQnRuRGlzYWJsZWRcIjtcclxuXHRcdFx0aWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKERPTVN0cmluZy5ndWVzdFBsdXNCdG4pKSB7XHJcblx0XHRcdFx0aWYgKGd1ZXN0VmFsdWVOb2RlLnRleHRDb250ZW50IDwgbWF4UGVyc29uKSB7XHJcblx0XHRcdFx0XHRndWVzdFZhbHVlTm9kZS50ZXh0Q29udGVudCA9ICsrZ3Vlc3RWYWx1ZU5vZGUudGV4dENvbnRlbnQ7XHJcblx0XHRcdFx0XHRtaW51c0J0bi5jbGFzc0xpc3QucmVtb3ZlKENMX0RJU0FCTEVEKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGd1ZXN0VmFsdWVOb2RlLnRleHRDb250ZW50ID09IG1heFBlcnNvbikge1xyXG5cdFx0XHRcdFx0cGx1c0J0bi5jbGFzc0xpc3QuYWRkKENMX0RJU0FCTEVEKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoRE9NU3RyaW5nLmd1ZXN0TWludXNCdG4pKSB7XHJcblx0XHRcdFx0aWYgKGd1ZXN0VmFsdWVOb2RlLnRleHRDb250ZW50ID4gbWluUGVyc29uKSB7XHJcblx0XHRcdFx0XHRndWVzdFZhbHVlTm9kZS50ZXh0Q29udGVudCA9IC0tZ3Vlc3RWYWx1ZU5vZGUudGV4dENvbnRlbnQ7XHJcblx0XHRcdFx0XHRwbHVzQnRuLmNsYXNzTGlzdC5yZW1vdmUoQ0xfRElTQUJMRUQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZ3Vlc3RWYWx1ZU5vZGUudGV4dENvbnRlbnQgPT0gbWluUGVyc29uKSB7XHJcblx0XHRcdFx0XHRtaW51c0J0bi5jbGFzc0xpc3QuYWRkKENMX0RJU0FCTEVEKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0Z2V0R3Vlc3RDb3VudDogKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihET01TdHJpbmcuZ3Vlc3RDb3VudCkudGV4dENvbnRlbnQsXHJcblxyXG5cdFx0cmVuZGVyUHJpY2U6IHBheWxvYWQgPT4ge1xyXG5cdFx0XHRjb25zdCB7IHJvb21QcmljZSwgcm9vbU5pZ2h0LCB0b3RhbFByaWNlIH0gPSBwYXlsb2FkO1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKERPTVN0cmluZy5yZXNlcnZlUHJpY2VDb250YWluZXIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9NU3RyaW5nLnJlc2VydmVSZW5kZXJCdG4pLnRleHRDb250ZW50ID0gXCLsmIjslb3tlZjquLBcIjtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihET01TdHJpbmcucm9vbU5pZ2h0KS50ZXh0Q29udGVudCA9IHJvb21OaWdodCArIFwi67CVXCI7XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9NU3RyaW5nLnJvb21QcmljZSkudGV4dENvbnRlbnQgPSB1dGlsLmZvcm1hdFdvbihyb29tUHJpY2UpO1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKERPTVN0cmluZy5wcmljZVZhbHVlKS50ZXh0Q29udGVudCA9IHV0aWwuZm9ybWF0V29uKHRvdGFsUHJpY2UpO1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKERPTVN0cmluZy50b3RhbFByaWNlKS50ZXh0Q29udGVudCA9IHV0aWwuZm9ybWF0V29uKFxyXG5cdFx0XHRcdHRvdGFsUHJpY2UgKyA1MDAwXHJcblx0XHRcdCk7XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9NU3RyaW5nLnJlc2VydmVIZWxwVGV4dCkuaW5uZXJIVE1MID0gYCR7dXRpbC5mb3JtYXRXb24oXHJcblx0XHRcdFx0cm9vbVByaWNlXHJcblx0XHRcdCl9PHNtYWxsPi/rsJU8L3NtYWxsPmA7XHJcblx0XHR9LFxyXG5cclxuXHRcdGNsZWFyUHJpY2VDb250YWluZXI6ICgpID0+IHtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihET01TdHJpbmcucmVzZXJ2ZVByaWNlQ29udGFpbmVyKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9NU3RyaW5nLnJlc2VydmVIZWxwVGV4dCkudGV4dENvbnRlbnQgPVxyXG5cdFx0XHRcdFwi7JqU6riI7J2EIO2ZleyduO2VmOugpOuptCDrgqDsp5zrpbwg7J6F66Cl7ZWY7IS47JqULlwiO1xyXG5cdFx0fSxcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuLypcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqIENvbnRyb2xsZXJcclxuICovXHJcblxyXG5jb25zdCBDb250cm9sbGVyID0gKChEYXRhQ3RybCwgVUlDdHJsKSA9PiB7XHJcblx0Y29uc3QgRE9NID0gVUlDdHJsLmdldERPTVN0cmluZygpO1xyXG5cdGNvbnN0IHNldEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xyXG5cdFx0Ly8g7Y+8IOuLq+q4sCDtgbTrpq1cclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9NLmV4aXRCdG4pLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrRm9ybUV4aXRCdG4pO1xyXG5cdFx0Ly8g7Y+8IOyXtOq4sCDtgbTrpq1cclxuXHRcdGRvY3VtZW50XHJcblx0XHRcdC5xdWVyeVNlbGVjdG9yKERPTS5yZXNlcnZlQ29udGFpbmVyKVxyXG5cdFx0XHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQ2xpY2tSZXNlcnZlQ29udGFpbmVyKTtcclxuXHRcdC8vIOuLrOugpSDrhJjquLDquLAg7YG066atXHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKERPTS5wcmV2UGFnZSkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQ2xpY2tQYWdlQnRuKTtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9NLm5leHRQYWdlKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGlja1BhZ2VCdG4pO1xyXG5cdFx0Ly8g64us66ClIOuCoOynnCDtgbTrpq1cclxuXHRcdGRvY3VtZW50XHJcblx0XHRcdC5xdWVyeVNlbGVjdG9yKERPTS5jYWxlbmRhckNvbnRhaW5lcilcclxuXHRcdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrQ2FsQ29udGFpbmVyKTtcclxuXHRcdC8vIOyytO2BrOyVhOybgyDrgqDsp5wg6rOg66W8IOuVjCDrp4jsmrDsiqQg7Jik67KEXHJcblx0XHRkb2N1bWVudFxyXG5cdFx0XHQucXVlcnlTZWxlY3RvcihET00uY2FsZW5kYXJDb250YWluZXIpXHJcblx0XHRcdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIG9uTW91c2VvdmVyQ2FsQ29udGFpbmVyKTtcclxuXHRcdC8vIOqyjOyKpO2KuCDsubTsmrTthLBcclxuXHRcdGRvY3VtZW50XHJcblx0XHRcdC5xdWVyeVNlbGVjdG9yKERPTS5ndWVzdENvdW50ZXJCb3gpXHJcblx0XHRcdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGlja0d1ZXN0Q291bnRlckJveCk7XHJcblx0XHQvLyDrgqDsp5wg7Y+8IOumrOyFiyDtgbTrpq1cclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9NLnJlc2V0SW5wdXQpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrUmVzZXRCdG4pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNsZWFyU3RhdGUgPSAoKSA9PiB7XHJcblx0XHRzdGF0ZSA9IHsgLi4uc3RhdGUsIGNoZWNrSW5JZDogXCJcIiwgY2hlY2tPdXRJZDogXCJcIiB9O1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IG9uQ2xpY2tSZXNldEJ0biA9ICgpID0+IHtcclxuXHRcdC8vIDEuIHN0YWF0ZSDstIjquLDtmZRcclxuXHRcdGNsZWFyU3RhdGUoKTtcclxuXHRcdC8vIDIuIFVJIOy0iOq4sO2ZlCDrsI8g64+Z6riw7ZmUXHJcblx0XHRVSUN0cmwuY2xlYXJDYWxlbmRhcigpO1xyXG5cdFx0VUlDdHJsLmNsZWFyQ2hlY2tEaXNwbGF5KCk7XHJcblxyXG5cdFx0Ly8gMy4g64Kg7KecIO2PvCDstIjquLDtmZRcclxuXHRcdHNldEluaXRhaWxDYWxlbmRhcigpO1xyXG5cclxuXHRcdC8vIDQuIOyYiOyVve2VmOq4sCDtj7wg64ur6riwXHJcblx0XHRVSUN0cmwuY2xlYXJQcmljZUNvbnRhaW5lcigpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IG9uQ2xpY2tHdWVzdENvdW50ZXJCb3ggPSBldmVudCA9PiBVSUN0cmwucmVuZGVyR3Vlc3RDb3VudChldmVudCwgRGF0YUN0cmwuZ2V0TWF4UGVyc29uKCkpO1xyXG5cclxuXHRjb25zdCBvbk1vdXNlb3ZlckNhbENvbnRhaW5lciA9IGV2ZW50ID0+IHtcclxuXHRcdGlmIChzdGF0ZS5jaGVja0luSWQgIT09IFwiXCIgJiYgc3RhdGUuY2hlY2tPdXRJZCA9PSBcIlwiKSB7XHJcblx0XHRcdGlmIChldmVudC50YXJnZXQubWF0Y2hlcyhET00udmFsaWREYXkpKSB7XHJcblx0XHRcdFx0Y29uc3QgaWQgPSBldmVudC50YXJnZXQuaWQ7XHJcblx0XHRcdFx0VUlDdHJsLnJlbmRlckRheUJhY2tncm91bmQoaWQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb25DbGlja0NhbENvbnRhaW5lciA9IGV2ZW50ID0+IHtcclxuXHRcdGlmIChzdGF0ZS5jaGVja091dElkICE9PSBcIlwiKSByZXR1cm47XHJcblx0XHRjb25zdCBjbGlja2VkRGF5ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIuY2FsZW5kYXJfZGF5IHNwYW4udmFsaWRfZGF5XCIpO1xyXG5cdFx0Ly9cdOyytO2BrOyVhOybgyDtgbTrpq1cclxuXHRcdGlmIChjbGlja2VkRGF5ICE9PSBudWxsKSB7XHJcblx0XHRcdGNvbnN0IGlkID0gY2xpY2tlZERheS5pZDtcclxuXHRcdFx0Y2xpY2tlZERheS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xyXG5cdFx0XHRpZiAoc3RhdGUuY2hlY2tJbklkICE9PSBcIlwiKSB7XHJcblx0XHRcdFx0Ly8gMS4g7YG066at65CcIOuFuOuTnCBpZCDsnbTtm4Qg64Kg7KecIGludmFsaWRcclxuXHRcdFx0XHRVSUN0cmwucmVuZGVySW52YWxpZERheShpZCk7XHJcblx0XHRcdFx0Ly8gMi4g7LK07YGs7JWE7JuDIOyduO2Si+yXkCDrgqDsp5wg64+Z6riw7ZmUXHJcblx0XHRcdFx0VUlDdHJsLnNldENoZWNrT3V0SW5wdXQoaWQpO1xyXG5cdFx0XHRcdC8vIDMuIOyytO2BrOyVhOybgyDrlJTsiqTtlIzroIjsnbQg66CM642U66eBXHJcblx0XHRcdFx0VUlDdHJsLnJlbmRlckNoZWNrT3V0RGlzcGxheShpZCk7XHJcblx0XHRcdFx0Ly8gNC4g7Y+8IOuLq+q4sFxyXG5cdFx0XHRcdFVJQ3RybC5jbG9zZVBvcHVwKCk7XHJcblx0XHRcdFx0c3RhdGUuY2hlY2tPdXRJZCA9IGlkO1xyXG5cdFx0XHRcdC8vIDUuIOq4iOyVoSDqs4TsgrBcclxuXHRcdFx0XHRjb25zdCBwYXlsb2FkID0gRGF0YUN0cmwuZ2V0UmVzZXJ2ZVBheWxvYWQoKTtcclxuXHRcdFx0XHQvLyA2LiDquIjslaEg66CM642U66eBXHJcblx0XHRcdFx0VUlDdHJsLnJlbmRlclByaWNlKHBheWxvYWQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vXHTssrTtgazsnbgg7YG066atXHJcblx0XHRcdGVsc2UgaWYgKHN0YXRlLmNoZWNrSW5JZCA9PT0gXCJcIikge1xyXG5cdFx0XHRcdGNvbnN0IHJlc2VydmVkRGF5cyA9IERhdGFDdHJsLmdldFJlc2VydmVkRGF5cygpO1xyXG5cdFx0XHRcdC8vIDEuIOu2iOqwgOuKpe2VnCDrgqDsp5wg66eI7YGsIO2RnOyLnFxyXG5cdFx0XHRcdFVJQ3RybC5yZW5kZXJJbnZhbGlkRGF5KGlkLCByZXNlcnZlZERheXMpO1xyXG5cdFx0XHRcdC8vIDIuIOyytO2BrOyduCDsnbjtkovsl5Ag64Kg7KecIOuPmeq4sO2ZlFxyXG5cdFx0XHRcdFVJQ3RybC5zZXRDaGVja0luSW5wdXQoaWQpO1xyXG5cdFx0XHRcdC8vIDMuIOyytO2BrOyduCDrlJTsiqTtlIzroIjsnbQg66CM642U66eBXHJcblx0XHRcdFx0VUlDdHJsLnJlbmRlckNoZWNrSW5EaXNwbGF5KGlkKTtcclxuXHRcdFx0XHRzdGF0ZS5jaGVja0luSWQgPSBpZDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdGNvbnN0IG9uQ2xpY2tQYWdlQnRuID0gZXZlbnQgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFVJQ3RybC5jbGVhckNhbGVuZGFyKCk7XHJcblxyXG5cdFx0Y29uc3QgaXNQcmV2QnRuID0gZXZlbnQudGFyZ2V0Lm1hdGNoZXMoRE9NLnByZXZQYWdlKTtcclxuXHJcblx0XHQvLyBwcmV2QnRuLCBuZXh0QnRuIOu2hOq4sCAtPiDri6zroKUg7JuUIOymneqwkFxyXG5cdFx0aWYgKGlzUHJldkJ0bikge1xyXG5cdFx0XHRzdGF0ZS5jdXJEYXRlLnNldE1vbnRoKHN0YXRlLmN1ckRhdGUuZ2V0TW9udGgoKSAtIDEpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3RhdGUuY3VyRGF0ZS5zZXRNb250aChzdGF0ZS5jdXJEYXRlLmdldE1vbnRoKCkgKyAxKTtcclxuXHRcdH1cclxuXHRcdFVJQ3RybC5yZW5kZXJDYWxlbmRhcihzdGF0ZS5jdXJEYXRlLmdldEZ1bGxZZWFyKCksIHN0YXRlLmN1ckRhdGUuZ2V0TW9udGgoKSArIDEpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHNldEluaXRhaWxDYWxlbmRhciA9ICgpID0+IHtcclxuXHRcdFVJQ3RybC5yZW5kZXJDYWxlbmRhcihzdGF0ZS5jdXJEYXRlLmdldEZ1bGxZZWFyKCksIHN0YXRlLmN1ckRhdGUuZ2V0TW9udGgoKSArIDEpO1xyXG5cdFx0VUlDdHJsLmJlRXhjZXB0UmVzZXJ2ZWREYXkoRGF0YUN0cmwuZ2V0UmVzZXJ2ZWREYXlzKCkpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IG9uQ2xpY2tGb3JtRXhpdEJ0biA9ICgpID0+IFVJQ3RybC5jbG9zZVBvcHVwKGV2ZW50KTtcclxuXHJcblx0Y29uc3Qgb25DbGlja1Jlc2VydmVDb250YWluZXIgPSBldmVudCA9PiB7XHJcblx0XHQvLyAxLTEuIOyytO2BrOyduCwg7LK07YGs7JWE7JuDIOuyhO2KvCDtgbTrpq3si5xcclxuXHRcdGlmIChVSUN0cmwuaXNDbGlja2VkQ2hlY2tJbkFuZE91dChldmVudCkpIFVJQ3RybC5vcGVuUG9wdXAoKTtcclxuXHRcdC8vIDEtMi4g7JiI7JW9IOuyhO2KvCDtgbTrpq3si5xcclxuXHRcdGVsc2UgaWYgKFVJQ3RybC5pc0NsaWNrZWRSZW5kZXJCdG4oZXZlbnQpKSB7XHJcblx0XHRcdGlmIChzdGF0ZS5jaGVja0luSWQgIT09IFwiXCIgJiYgc3RhdGUuY2hlY2tPdXRJZCAhPT0gXCJcIikge1xyXG5cdFx0XHRcdC8vIFRPRE86IOyYiOyVvSDtjpjsnbTsp4DroZwg7J2064+ZO1xyXG5cdFx0XHR9IGVsc2UgVUlDdHJsLm9wZW5Qb3B1cCgpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRpbml0OiAoKSA9PiB7XHJcblx0XHRcdHNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblx0XHRcdHNldEluaXRhaWxDYWxlbmRhcigpO1xyXG5cdFx0fSxcclxuXHR9O1xyXG59KShEYXRhQ29udHJvbGxlciwgVUlDb250cm9sbGVyKTtcclxuQ29udHJvbGxlci5pbml0KCk7XHJcbiIsImV4cG9ydCBjb25zdCBzZXRGaXhEYXlDb3VudCA9IG51bWJlciA9PiAobnVtYmVyIDwgMTAgPyBcIjBcIiArIG51bWJlciA6IG51bWJlcik7XHJcbmV4cG9ydCBjb25zdCBzZXRNb250aENvdW50ID0gbnVtYmVyID0+IChudW1iZXIgPCAxMCA/IFwiMFwiICsgbnVtYmVyIDogbnVtYmVyKTtcclxuZXhwb3J0IGNvbnN0IGZvcm1hdERhc2hUb0RvdCA9IHN0ciA9PiBzdHIucmVwbGFjZSgvLS9nLCBcIi5cIik7XHJcbmV4cG9ydCBjb25zdCBmb3JtYXRXb24gPSBudW0gPT5cclxuXHRuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJrby1LUlwiLCB7IHN0eWxlOiBcImN1cnJlbmN5XCIsIGN1cnJlbmN5OiBcIktSV1wiIH0pLmZvcm1hdChudW0pO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=