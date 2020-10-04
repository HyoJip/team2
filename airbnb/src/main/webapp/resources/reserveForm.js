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
___CSS_LOADER_EXPORT___.push([module.i, ":root {\n  --wrapWidth: 1200px;\n  --gray: #7f8c8d;\n  --deepGray: #535c68;\n  --red: #ff385c;\n  --blue: lightseagreen;\n  --green: #23c382;\n  --containerHorizontalMargin: 50px;\n  --containerVerticalPadding: 30px;\n  --detailFontSize: smaller;\n  --bottomBorder: 1px solid #ecf0f1;\n  --borderRadius: 10px;\n  --calendarDaySize: 40px;\n  --boxShadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.ACCEPTED {\n  color: var(--green) !important; }\n\n.PENDING, .COMPLETED {\n  color: var(--gray) !important; }\n\n.REFUSED, .CANCLED {\n  color: var(--red) !important; }\n\n.main_wrap {\n  margin: 0 auto;\n  max-width: var(--wrapWidth);\n  padding: var(--containerVerticalPadding) 0; }\n  .main_wrap .main_header {\n    margin: 0 var(--containerHorizontalMargin); }\n    .main_wrap .main_header i {\n      display: block;\n      cursor: pointer; }\n    .main_wrap .main_header .main_title {\n      font-weight: 700;\n      padding: var(--containerVerticalPadding) 0; }\n  .main_wrap .main_main {\n    display: flex;\n    justify-content: space-between; }\n    .main_wrap .main_main .main_left {\n      width: 50%;\n      margin: 0 var(--containerHorizontalMargin); }\n      .main_wrap .main_main .main_left .advise_wrap {\n        padding-bottom: var(--containerVerticalPadding);\n        border-bottom: var(--bottomBorder);\n        display: flex; }\n        .main_wrap .main_main .main_left .advise_wrap .advise {\n          color: var(--deepGray);\n          font-weight: 300; }\n          .main_wrap .main_main .main_left .advise_wrap .advise strong {\n            color: black; }\n        .main_wrap .main_main .main_left .advise_wrap i {\n          padding: 20px;\n          color: var(--red); }\n      .main_wrap .main_main .main_left .reservation_form .reservation_info_wrap {\n        padding: var(--containerVerticalPadding) 0;\n        border-bottom: var(--bottomBorder);\n        color: var(--deepGray); }\n        .main_wrap .main_main .main_left .reservation_form .reservation_info_wrap .reservation_info_title {\n          color: black; }\n        .main_wrap .main_main .main_left .reservation_form .reservation_info_wrap .info_name {\n          display: block;\n          margin-top: calc(var(--containerHorizontalMargin)/2);\n          margin-bottom: 10px;\n          color: black; }\n        .main_wrap .main_main .main_left .reservation_form .reservation_info_wrap .info_value {\n          all: unset;\n          font-weight: 300;\n          width: 90px; }\n          .main_wrap .main_main .main_left .reservation_form .reservation_info_wrap .info_value:last-child {\n            width: 10px; }\n      .main_wrap .main_main .main_left .reservation_form .refund_notice {\n        padding: var(--containerVerticalPadding);\n        border-bottom: var(--bottomBorder);\n        position: relative; }\n        .main_wrap .main_main .main_left .reservation_form .refund_notice::before {\n          content: \"\";\n          position: absolute;\n          top: 35px;\n          left: 0px;\n          width: 9px;\n          background-color: #FFAF0F;\n          height: 80%; }\n        .main_wrap .main_main .main_left .reservation_form .refund_notice .refund_description, .main_wrap .main_main .main_left .reservation_form .refund_notice .refund_small {\n          margin: calc(var(--containerHorizontalMargin)/2) 0;\n          color: var(--deepGray);\n          font-weight: 300; }\n          .main_wrap .main_main .main_left .reservation_form .refund_notice .refund_description strong, .main_wrap .main_main .main_left .reservation_form .refund_notice .refund_small strong {\n            color: black; }\n      .main_wrap .main_main .main_left .reservation_form .confirm_notice {\n        padding: var(--containerVerticalPadding) 0;\n        border-bottom: var(--bottomBorder);\n        display: flex;\n        justify-content: space-between; }\n        .main_wrap .main_main .main_left .reservation_form .confirm_notice i {\n          font-size: 1.5rem;\n          padding-right: 15px; }\n        .main_wrap .main_main .main_left .reservation_form .confirm_notice .confirm_description {\n          font-weight: 300;\n          color: var(-deepGray); }\n          .main_wrap .main_main .main_left .reservation_form .confirm_notice .confirm_description strong {\n            color: black; }\n      .main_wrap .main_main .main_left .reservation_form .reserve_btn_wrap {\n        padding: var(--containerVerticalPadding) 0; }\n        .main_wrap .main_main .main_left .reservation_form .reserve_btn_wrap small {\n          font-weight: 300;\n          color: var(--deepGray);\n          font-size: 12px; }\n          .main_wrap .main_main .main_left .reservation_form .reserve_btn_wrap small span {\n            font-weight: 500;\n            color: mediumslateblue;\n            border-bottom: 1px solid black;\n            display: inline-block;\n            line-height: 0.85;\n            text-shadow: 1px 1px var(--backgroudColor), 1px -1px var(--backgroudColor), -1px 1px var(--backgroudColor), -1px -1px var(--backgroudColor); }\n        .main_wrap .main_main .main_left .reservation_form .reserve_btn_wrap .reserve_btn {\n          border: 0;\n          outline: none;\n          width: 100%;\n          padding: 10px 30px;\n          background-color: var(--red);\n          color: white;\n          margin: 10px 0;\n          border-radius: var(--borderRadius);\n          text-align: center;\n          font-weight: 700;\n          cursor: pointer;\n          font-size: 16px; }\n    .main_wrap .main_main .main_right {\n      width: 50%;\n      position: relative;\n      padding-top: var(--containerVerticalPadding);\n      padding-bottom: calc(var(--containerVerticalPadding) * 2);\n      margin: 0 var(--containerHorizontalMargin); }\n      .main_wrap .main_main .main_right .reservation_wrap {\n        position: sticky;\n        top: 80px;\n        box-shadow: var(--boxShadow);\n        border-radius: var(--borderRadius);\n        padding: 20px; }\n        .main_wrap .main_main .main_right .reservation_wrap .reservation_room {\n          display: flex;\n          padding-bottom: var(--containerVerticalPadding);\n          border-bottom: var(--bottomBorder); }\n          .main_wrap .main_main .main_right .reservation_wrap .reservation_room .room_img {\n            width: 130px;\n            height: 100px;\n            border-radius: var(--borderRadius);\n            background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n            background-size: cover;\n            margin-right: 20px; }\n          .main_wrap .main_main .main_right .reservation_wrap .reservation_room .room_info {\n            font-weight: 300;\n            font-size: 12px; }\n            .main_wrap .main_main .main_right .reservation_wrap .reservation_room .room_info .room_spec {\n              color: var(--deepGray); }\n        .main_wrap .main_main .main_right .reservation_wrap .reservation_price {\n          padding-top: var(--containerVerticalPadding); }\n          .main_wrap .main_main .main_right .reservation_wrap .reservation_price .price_title {\n            font-weight: 700;\n            margin-bottom: 10px; }\n          .main_wrap .main_main .main_right .reservation_wrap .reservation_price .price_item,\n          .main_wrap .main_main .main_right .reservation_wrap .reservation_price .total_price {\n            display: flex;\n            justify-content: space-between;\n            padding-top: calc(var(--containerVerticalPadding) / 2); }\n            .main_wrap .main_main .main_right .reservation_wrap .reservation_price .price_item .price_name,\n            .main_wrap .main_main .main_right .reservation_wrap .reservation_price .total_price .price_name {\n              text-align: left; }\n            .main_wrap .main_main .main_right .reservation_wrap .reservation_price .price_item .price_value,\n            .main_wrap .main_main .main_right .reservation_wrap .reservation_price .total_price .price_value {\n              text-align: right; }\n            .main_wrap .main_main .main_right .reservation_wrap .reservation_price .price_item .underline,\n            .main_wrap .main_main .main_right .reservation_wrap .reservation_price .total_price .underline {\n              border-bottom: 1px solid black;\n              display: inline-block;\n              line-height: 0.85;\n              text-shadow: 1px 1px var(--backgroudColor), 1px -1px var(--backgroudColor), -1px 1px var(--backgroudColor), -1px -1px var(--backgroudColor); }\n          .main_wrap .main_main .main_right .reservation_wrap .reservation_price .total_price {\n            font-weight: 700; }\n", "",{"version":3,"sources":["webpack://scss/__base.scss","webpack://scss/reservationForm.scss","webpack://scss/__mixins.scss"],"names":[],"mappings":"AACA;EACC,mBAAY;EACZ,eAAO;EACP,mBAAW;EACX,cAAM;EACN,qBAAO;EACP,gBAAQ;EACR,iCAA4B;EAC5B,gCAA2B;EAC3B,yBAAiB;EACjB,iCAAe;EACf,oBAAe;EACf,uBAAkB;EAClB,yEAAY,EAAA;;AAGb;EACC,8BAA8B,EAAA;;AAG/B;EACC,6BAA6B,EAAA;;AAG9B;EACC,4BAA4B,EAAA;;ACvB7B;EACC,cAAc;EACd,2BAA2B;EAC3B,0CAA0C,EAAA;EAH3C;IAME,0CAA0C,EAAA;IAN5C;MASG,cAAc;MACd,eAAe,EAAA;IAVlB;MAcG,gBAAgB;MAChB,0CAA0C,EAAA;EAf7C;IAoBE,aAAa;IACb,8BAA8B,EAAA;IArBhC;MAwBG,UAAU;MACV,0CAA0C,EAAA;MAzB7C;QA4BI,+CAA+C;QAC/C,kCAAkC;QAClC,aAAa,EAAA;QA9BjB;UAiCK,sBAAsB;UACtB,gBAAgB,EAAA;UAlCrB;YAqCM,YAAY,EAAA;QArClB;UA0CK,aAAa;UACb,iBAAiB,EAAA;MA3CtB;QAkDK,0CAA0C;QAC1C,kCAAkC;QAClC,sBAAsB,EAAA;QApD3B;UAuDM,YAAY,EAAA;QAvDlB;UA2DM,cAAc;UACd,oDAAoD;UACpD,mBAAmB;UACnB,YAAY,EAAA;QA9DlB;UAkEM,UAAU;UACV,gBAAgB;UAChB,WAAW,EAAA;UApEjB;YAuEO,WAAW,EAAA;MAvElB;QA6EK,wCAAwC;QACxC,kCAAkC;QAClC,kBAAkB,EAAA;QA/EvB;UAkFS,WAAW;UACX,kBAAkB;UAClB,SAAS;UACT,SAAS;UACT,UAAU;UACV,yBAAyB;UACzB,WAAW,EAAA;QAxFpB;UA4FM,kDAAkD;UAClD,sBAAsB;UACtB,gBAAgB,EAAA;UA9FtB;YAiGO,YAAY,EAAA;MAjGnB;QAwGK,0CAA0C;QAC1C,kCAAkC;QAClC,aAAa;QACb,8BAA8B,EAAA;QA3GnC;UA8GM,iBAAiB;UACd,mBAAmB,EAAA;QA/G5B;UAmHM,gBAAgB;UAChB,qBAAqB,EAAA;UApH3B;YAuHO,YAAY,EAAA;MAvHnB;QA6HK,0CAA0C,EAAA;QA7H/C;UAgIM,gBAAgB;UAChB,sBAAsB;UACtB,eAAe,EAAA;UAlIrB;YAqIO,gBAAgB;YAChB,sBAAsB;YCxI5B,8BAA8B;YAC9B,qBAAqB;YACrB,iBAAiB;YACjB,2IACgE,EAAA;QDFjE;UA4IM,SAAS;UACT,aAAa;UACb,WAAW;UACX,kBAAkB;UAClB,4BAA4B;UAC5B,YAAY;UACZ,cAAc;UACd,kCAAkC;UAClC,kBAAkB;UAClB,gBAAgB;UAChB,eAAe;UACf,eAAe,EAAA;IAvJrB;MA8JG,UAAU;MACV,kBAAkB;MAClB,4CAA4C;MAC5C,yDAAyD;MACzD,0CAA0C,EAAA;MAlK7C;QAqKI,gBAAgB;QAChB,SAAS;QACT,4BAA4B;QAC5B,kCAAkC;QAClC,aAAa,EAAA;QAzKjB;UA4KK,aAAa;UACb,+CAA+C;UAC/C,kCAAkC,EAAA;UA9KvC;YAiLM,YAAY;YACZ,aAAa;YACb,kCAAkC;YAClC,yDAA8C;YAC9C,sBAAsB;YACtB,kBAAkB,EAAA;UAtLxB;YA0LM,gBAAgB;YAChB,eAAe,EAAA;YA3LrB;cA8LO,sBAAsB,EAAA;QA9L7B;UAoMK,4CAA4C,EAAA;UApMjD;YAuMM,gBAAgB;YAChB,mBAAmB,EAAA;UAxMzB;;YA6MM,aAAa;YACb,8BAA8B;YAC9B,sDAAsD,EAAA;YA/M5D;;cAkNO,gBAAgB,EAAA;YAlNvB;;cAsNO,iBAAiB,EAAA;YAtNxB;;cCFC,8BAA8B;cAC9B,qBAAqB;cACrB,iBAAiB;cACjB,2IACgE,EAAA;UDFjE;YA+NM,gBAAgB,EAAA","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;700&display=swap\");\r\n:root {\r\n\t--wrapWidth: 1200px;\r\n\t--gray: #7f8c8d;\r\n\t--deepGray: #535c68;\r\n\t--red: #ff385c;\r\n\t--blue: lightseagreen;\r\n\t--green: #23c382;\r\n\t--containerHorizontalMargin: 50px;\r\n\t--containerVerticalPadding: 30px;\r\n\t--detailFontSize: smaller;\r\n\t--bottomBorder: 1px solid #ecf0f1;\r\n\t--borderRadius: 10px;\r\n\t--calendarDaySize: 40px;\r\n\t--boxShadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n}\r\n\r\n.ACCEPTED {\r\n\tcolor: var(--green) !important;\r\n}\r\n\r\n.PENDING, .COMPLETED {\r\n\tcolor: var(--gray) !important;\r\n}\r\n\r\n.REFUSED, .CANCLED {\r\n\tcolor: var(--red) !important;\r\n}\r\n","@import \"./_base\";\r\n@import \"./_mixins\";\r\n\r\n.main_wrap {\r\n\tmargin: 0 auto;\r\n\tmax-width: var(--wrapWidth);\r\n\tpadding: var(--containerVerticalPadding) 0;\r\n\t\r\n\t.main_header {\r\n\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\t\t\r\n\t\ti {\r\n\t\t\tdisplay: block;\r\n\t\t\tcursor: pointer;\r\n\t\t}\r\n\t\t\r\n\t\t.main_title {\r\n\t\t\tfont-weight: 700;\r\n\t\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\t}\r\n\t}\r\n\t\r\n\t.main_main {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\t\t\r\n\t\t.main_left {\r\n\t\t\twidth: 50%;\r\n\t\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\t\t\t\r\n\t\t\t.advise_wrap {\r\n\t\t\t\tpadding-bottom: var(--containerVerticalPadding);\r\n\t\t\t\tborder-bottom: var(--bottomBorder);\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\t\r\n\t\t\t\t.advise {\r\n\t\t\t\t\tcolor: var(--deepGray);\r\n\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\t\r\n\t\t\t\t\tstrong {\r\n\t\t\t\t\t\tcolor: black;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\ti {\r\n\t\t\t\t\tpadding: 20px;\r\n\t\t\t\t\tcolor: var(--red);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t.reservation_form {\r\n\t\t\t\t\r\n\t\t\t\t.reservation_info_wrap {\r\n\t\t\t\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\t\t\t\tborder-bottom: var(--bottomBorder);\r\n\t\t\t\t\tcolor: var(--deepGray);\r\n\t\t\t\t\t\r\n\t\t\t\t\t.reservation_info_title {\r\n\t\t\t\t\t\tcolor: black;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.info_name {\r\n\t\t\t\t\t\tdisplay: block;\r\n\t\t\t\t\t\tmargin-top: calc(var(--containerHorizontalMargin)/2);\r\n\t\t\t\t\t\tmargin-bottom: 10px;\r\n\t\t\t\t\t\tcolor: black;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.info_value {\r\n\t\t\t\t\t\tall: unset;\r\n\t\t\t\t\t\tfont-weight: 300;\t\r\n\t\t\t\t\t\twidth: 90px;\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t&:last-child {\r\n\t\t\t\t\t\t\twidth: 10px;\r\n\t\t\t\t\t\t}\t\t\r\n\t\t\t\t\t}\t\t\t\t\t\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t.refund_notice {\r\n\t\t\t\t\tpadding: var(--containerVerticalPadding);\r\n\t\t\t\t\tborder-bottom: var(--bottomBorder);\r\n\t\t\t\t\tposition: relative;\r\n\t\t\t\t\t\r\n\t\t\t\t\t&::before {\r\n\t\t\t\t    \tcontent: \"\";\r\n\t\t\t\t\t    position: absolute;\r\n\t\t\t\t\t    top: 35px;\r\n\t\t\t\t\t    left: 0px;\r\n\t\t\t\t\t    width: 9px;\r\n\t\t\t\t\t    background-color: #FFAF0F;\r\n\t\t\t\t\t    height: 80%;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.refund_description, .refund_small {\r\n\t\t\t\t\t\tmargin: calc(var(--containerHorizontalMargin)/2) 0;\r\n\t\t\t\t\t\tcolor: var(--deepGray);\r\n\t\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\tstrong {\r\n\t\t\t\t\t\t\tcolor: black;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t.confirm_notice {\r\n\t\t\t\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\t\t\t\tborder-bottom: var(--bottomBorder);\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\tjustify-content: space-between;\r\n\t\t\t\t\t\r\n\t\t\t\t\ti {\r\n\t\t\t\t\t\tfont-size: 1.5rem;\r\n\t\t\t\t\t    padding-right: 15px;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.confirm_description {\r\n\t\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\t\tcolor: var(-deepGray);\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\tstrong {\r\n\t\t\t\t\t\t\tcolor: black;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t.reserve_btn_wrap {\r\n\t\t\t\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\t\t\t\t\r\n\t\t\t\t\tsmall {\r\n\t\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\t\tcolor: var(--deepGray);\r\n\t\t\t\t\t\tfont-size: 12px;\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\tspan {\r\n\t\t\t\t\t\t\tfont-weight: 500;\r\n\t\t\t\t\t\t\tcolor: mediumslateblue;\r\n\t\t\t\t\t\t\t@include underline;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.reserve_btn {\r\n\t\t\t\t\t\tborder: 0;\r\n\t\t\t\t\t\toutline: none;\r\n\t\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\t\tpadding: 10px 30px;\r\n\t\t\t\t\t\tbackground-color: var(--red);\r\n\t\t\t\t\t\tcolor: white;\r\n\t\t\t\t\t\tmargin: 10px 0;\r\n\t\t\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\t\t\ttext-align: center;\r\n\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\tfont-size: 16px;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\t.main_right {\r\n\t\t\twidth: 50%;\r\n\t\t\tposition: relative;\r\n\t\t\tpadding-top: var(--containerVerticalPadding);\r\n\t\t\tpadding-bottom: calc(var(--containerVerticalPadding) * 2);\r\n\t\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\t\t\t\r\n\t\t\t.reservation_wrap {\r\n\t\t\t\tposition: sticky;\r\n\t\t\t\ttop: 80px;\r\n\t\t\t\tbox-shadow: var(--boxShadow);\r\n\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\tpadding: 20px;\r\n\t\t\t\t\r\n\t\t\t\t.reservation_room {\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\tpadding-bottom: var(--containerVerticalPadding);\r\n\t\t\t\t\tborder-bottom: var(--bottomBorder);\r\n\t\t\t\t\t\r\n\t\t\t\t\t.room_img {\r\n\t\t\t\t\t\twidth: 130px;\r\n\t\t\t\t\t\theight: 100px;\r\n\t\t\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\t\t\tbackground-image: url(\"../img/thumbnail1.jpg\");\r\n\t\t\t\t\t\tbackground-size: cover;\r\n\t\t\t\t\t\tmargin-right: 20px;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.room_info {\r\n\t\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\t\tfont-size: 12px;\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t.room_spec {\r\n\t\t\t\t\t\t\tcolor: var(--deepGray);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t.reservation_price {\r\n\t\t\t\t\tpadding-top: var(--containerVerticalPadding);\r\n\t\t\t\t\t\r\n\t\t\t\t\t.price_title {\r\n\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t\tmargin-bottom: 10px;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.price_item,\r\n\t\t\t\t\t.total_price {\r\n\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\tjustify-content: space-between;\r\n\t\t\t\t\t\tpadding-top: calc(var(--containerVerticalPadding) / 2);\r\n\r\n\t\t\t\t\t\t.price_name {\r\n\t\t\t\t\t\t\ttext-align: left;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.price_value {\r\n\t\t\t\t\t\t\ttext-align: right;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t.underline {\r\n\t\t\t\t\t\t\t@include underline;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.total_price {\r\n\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}","@mixin underline {\r\n\tborder-bottom: 1px solid black;\r\n\tdisplay: inline-block;\r\n\tline-height: 0.85;\r\n\ttext-shadow: 1px 1px var(--backgroudColor), 1px -1px var(--backgroudColor),\r\n\t\t-1px 1px var(--backgroudColor), -1px -1px var(--backgroudColor);\r\n\t@content;\r\n}\r\n\r\n@mixin star($font-size) {\r\n\tcolor: var(--red);\r\n\tfont-size: $font-size;\r\n}\r\n\r\n@mixin reservation_item {\r\n\tflex: 1 1 50%;\r\n\tpadding: 5px 10px;\r\n\tfont-size: 0.9rem;\r\n\theight: 50px;\r\n\r\n\t.reservation_display {\r\n\t\tcolor: var(--gray);\r\n\t\tfont-weight: 300;\r\n\t}\r\n}\r\n\r\n@mixin facility_rule_item {\r\n\tmargin: 15px 0;\r\n}\r\n\r\n@mixin facility_rule_icon {\r\n\tfont-size: 20px;\r\n\twidth: 40px;\r\n\ttext-align: center;\r\n}\r\n\r\n@mixin facility_rule_description {\r\n\tmargin-left: 15px;\r\n\tfont-weight: 300;\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9yZXNlcnZhdGlvbkZvcm0uc2NzcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL2ltZy90aHVtYm5haWwxLmpwZyIsIndlYnBhY2s6Ly8vLi9qcy9yZXNlcnZhdGlvbkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9yZXNlcnZhdGlvbkZvcm0uc2Nzcz84ZWFjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FB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LEU7Ozs7Ozs7Ozs7OztBQ0EvRTtBQUFBO0FBQUE7QUFBc0M7O0FBRXRDLGlJOzs7Ozs7Ozs7OztBQ0ZBLFVBQVUsbUJBQU8sQ0FBQyx1SkFBMkU7QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMsZ09BQStHOztBQUVqSjs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJyZXNlcnZlRm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3Jlc291cmNlcy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9yZXNlcnZhdGlvbkZvcm0uanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuLi9pbWcvdGh1bWJuYWlsMS5qcGdcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUjp3Z2h0QDMwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLXdyYXBXaWR0aDogMTIwMHB4O1xcbiAgLS1ncmF5OiAjN2Y4YzhkO1xcbiAgLS1kZWVwR3JheTogIzUzNWM2ODtcXG4gIC0tcmVkOiAjZmYzODVjO1xcbiAgLS1ibHVlOiBsaWdodHNlYWdyZWVuO1xcbiAgLS1ncmVlbjogIzIzYzM4MjtcXG4gIC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbjogNTBweDtcXG4gIC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nOiAzMHB4O1xcbiAgLS1kZXRhaWxGb250U2l6ZTogc21hbGxlcjtcXG4gIC0tYm90dG9tQm9yZGVyOiAxcHggc29saWQgI2VjZjBmMTtcXG4gIC0tYm9yZGVyUmFkaXVzOiAxMHB4O1xcbiAgLS1jYWxlbmRhckRheVNpemU6IDQwcHg7XFxuICAtLWJveFNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpOyB9XFxuXFxuLkFDQ0VQVEVEIHtcXG4gIGNvbG9yOiB2YXIoLS1ncmVlbikgIWltcG9ydGFudDsgfVxcblxcbi5QRU5ESU5HLCAuQ09NUExFVEVEIHtcXG4gIGNvbG9yOiB2YXIoLS1ncmF5KSAhaW1wb3J0YW50OyB9XFxuXFxuLlJFRlVTRUQsIC5DQU5DTEVEIHtcXG4gIGNvbG9yOiB2YXIoLS1yZWQpICFpbXBvcnRhbnQ7IH1cXG5cXG4ubWFpbl93cmFwIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWF4LXdpZHRoOiB2YXIoLS13cmFwV2lkdGgpO1xcbiAgcGFkZGluZzogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAwOyB9XFxuICAubWFpbl93cmFwIC5tYWluX2hlYWRlciB7XFxuICAgIG1hcmdpbjogMCB2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKTsgfVxcbiAgICAubWFpbl93cmFwIC5tYWluX2hlYWRlciBpIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLm1haW5fd3JhcCAubWFpbl9oZWFkZXIgLm1haW5fdGl0bGUge1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgcGFkZGluZzogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAwOyB9XFxuICAubWFpbl93cmFwIC5tYWluX21haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG4gICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX2xlZnQge1xcbiAgICAgIHdpZHRoOiA1MCU7XFxuICAgICAgbWFyZ2luOiAwIHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pOyB9XFxuICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX2xlZnQgLmFkdmlzZV93cmFwIHtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm90dG9tQm9yZGVyKTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gICAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9sZWZ0IC5hZHZpc2Vfd3JhcCAuYWR2aXNlIHtcXG4gICAgICAgICAgY29sb3I6IHZhcigtLWRlZXBHcmF5KTtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDsgfVxcbiAgICAgICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fbGVmdCAuYWR2aXNlX3dyYXAgLmFkdmlzZSBzdHJvbmcge1xcbiAgICAgICAgICAgIGNvbG9yOiBibGFjazsgfVxcbiAgICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX2xlZnQgLmFkdmlzZV93cmFwIGkge1xcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcmVkKTsgfVxcbiAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9sZWZ0IC5yZXNlcnZhdGlvbl9mb3JtIC5yZXNlcnZhdGlvbl9pbmZvX3dyYXAge1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAwO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm90dG9tQm9yZGVyKTtcXG4gICAgICAgIGNvbG9yOiB2YXIoLS1kZWVwR3JheSk7IH1cXG4gICAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9sZWZ0IC5yZXNlcnZhdGlvbl9mb3JtIC5yZXNlcnZhdGlvbl9pbmZvX3dyYXAgLnJlc2VydmF0aW9uX2luZm9fdGl0bGUge1xcbiAgICAgICAgICBjb2xvcjogYmxhY2s7IH1cXG4gICAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9sZWZ0IC5yZXNlcnZhdGlvbl9mb3JtIC5yZXNlcnZhdGlvbl9pbmZvX3dyYXAgLmluZm9fbmFtZSB7XFxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pLzIpO1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICAgICAgICBjb2xvcjogYmxhY2s7IH1cXG4gICAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9sZWZ0IC5yZXNlcnZhdGlvbl9mb3JtIC5yZXNlcnZhdGlvbl9pbmZvX3dyYXAgLmluZm9fdmFsdWUge1xcbiAgICAgICAgICBhbGw6IHVuc2V0O1xcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICAgICAgICB3aWR0aDogOTBweDsgfVxcbiAgICAgICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fbGVmdCAucmVzZXJ2YXRpb25fZm9ybSAucmVzZXJ2YXRpb25faW5mb193cmFwIC5pbmZvX3ZhbHVlOmxhc3QtY2hpbGQge1xcbiAgICAgICAgICAgIHdpZHRoOiAxMHB4OyB9XFxuICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX2xlZnQgLnJlc2VydmF0aW9uX2Zvcm0gLnJlZnVuZF9ub3RpY2Uge1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IHZhcigtLWJvdHRvbUJvcmRlcik7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gICAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9sZWZ0IC5yZXNlcnZhdGlvbl9mb3JtIC5yZWZ1bmRfbm90aWNlOjpiZWZvcmUge1xcbiAgICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICB0b3A6IDM1cHg7XFxuICAgICAgICAgIGxlZnQ6IDBweDtcXG4gICAgICAgICAgd2lkdGg6IDlweDtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQUYwRjtcXG4gICAgICAgICAgaGVpZ2h0OiA4MCU7IH1cXG4gICAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9sZWZ0IC5yZXNlcnZhdGlvbl9mb3JtIC5yZWZ1bmRfbm90aWNlIC5yZWZ1bmRfZGVzY3JpcHRpb24sIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9sZWZ0IC5yZXNlcnZhdGlvbl9mb3JtIC5yZWZ1bmRfbm90aWNlIC5yZWZ1bmRfc21hbGwge1xcbiAgICAgICAgICBtYXJnaW46IGNhbGModmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbikvMikgMDtcXG4gICAgICAgICAgY29sb3I6IHZhcigtLWRlZXBHcmF5KTtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDsgfVxcbiAgICAgICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fbGVmdCAucmVzZXJ2YXRpb25fZm9ybSAucmVmdW5kX25vdGljZSAucmVmdW5kX2Rlc2NyaXB0aW9uIHN0cm9uZywgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX2xlZnQgLnJlc2VydmF0aW9uX2Zvcm0gLnJlZnVuZF9ub3RpY2UgLnJlZnVuZF9zbWFsbCBzdHJvbmcge1xcbiAgICAgICAgICAgIGNvbG9yOiBibGFjazsgfVxcbiAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9sZWZ0IC5yZXNlcnZhdGlvbl9mb3JtIC5jb25maXJtX25vdGljZSB7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7XFxuICAgICAgICBib3JkZXItYm90dG9tOiB2YXIoLS1ib3R0b21Cb3JkZXIpO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcbiAgICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX2xlZnQgLnJlc2VydmF0aW9uX2Zvcm0gLmNvbmZpcm1fbm90aWNlIGkge1xcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDsgfVxcbiAgICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX2xlZnQgLnJlc2VydmF0aW9uX2Zvcm0gLmNvbmZpcm1fbm90aWNlIC5jb25maXJtX2Rlc2NyaXB0aW9uIHtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgICAgICAgY29sb3I6IHZhcigtZGVlcEdyYXkpOyB9XFxuICAgICAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9sZWZ0IC5yZXNlcnZhdGlvbl9mb3JtIC5jb25maXJtX25vdGljZSAuY29uZmlybV9kZXNjcmlwdGlvbiBzdHJvbmcge1xcbiAgICAgICAgICAgIGNvbG9yOiBibGFjazsgfVxcbiAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9sZWZ0IC5yZXNlcnZhdGlvbl9mb3JtIC5yZXNlcnZlX2J0bl93cmFwIHtcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgMDsgfVxcbiAgICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX2xlZnQgLnJlc2VydmF0aW9uX2Zvcm0gLnJlc2VydmVfYnRuX3dyYXAgc21hbGwge1xcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZGVlcEdyYXkpO1xcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7IH1cXG4gICAgICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX2xlZnQgLnJlc2VydmF0aW9uX2Zvcm0gLnJlc2VydmVfYnRuX3dyYXAgc21hbGwgc3BhbiB7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAgICAgICBjb2xvcjogbWVkaXVtc2xhdGVibHVlO1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuODU7XFxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpLCAxcHggLTFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvciksIC0xcHggMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKSwgLTFweCAtMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKTsgfVxcbiAgICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX2xlZnQgLnJlc2VydmF0aW9uX2Zvcm0gLnJlc2VydmVfYnRuX3dyYXAgLnJlc2VydmVfYnRuIHtcXG4gICAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMpO1xcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4OyB9XFxuICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9yaWdodCB7XFxuICAgICAgd2lkdGg6IDUwJTtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgcGFkZGluZy10b3A6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZyk7XFxuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAqIDIpO1xcbiAgICAgIG1hcmdpbjogMCB2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKTsgfVxcbiAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCB7XFxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICAgICAgdG9wOiA4MHB4O1xcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94U2hhZG93KTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XFxuICAgICAgICBwYWRkaW5nOiAyMHB4OyB9XFxuICAgICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX3Jvb20ge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKTtcXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm90dG9tQm9yZGVyKTsgfVxcbiAgICAgICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX3Jvb20gLnJvb21faW1nIHtcXG4gICAgICAgICAgICB3aWR0aDogMTMwcHg7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMpO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7IH1cXG4gICAgICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9yb29tIC5yb29tX2luZm8ge1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4OyB9XFxuICAgICAgICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9yb29tIC5yb29tX2luZm8gLnJvb21fc3BlYyB7XFxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZGVlcEdyYXkpOyB9XFxuICAgICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX3ByaWNlIHtcXG4gICAgICAgICAgcGFkZGluZy10b3A6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZyk7IH1cXG4gICAgICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9wcmljZSAucHJpY2VfdGl0bGUge1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcbiAgICAgICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX3ByaWNlIC5wcmljZV9pdGVtLFxcbiAgICAgICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX3ByaWNlIC50b3RhbF9wcmljZSB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgICAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAvIDIpOyB9XFxuICAgICAgICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9wcmljZSAucHJpY2VfaXRlbSAucHJpY2VfbmFtZSxcXG4gICAgICAgICAgICAubWFpbl93cmFwIC5tYWluX21haW4gLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX3ByaWNlIC50b3RhbF9wcmljZSAucHJpY2VfbmFtZSB7XFxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuICAgICAgICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9wcmljZSAucHJpY2VfaXRlbSAucHJpY2VfdmFsdWUsXFxuICAgICAgICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9wcmljZSAudG90YWxfcHJpY2UgLnByaWNlX3ZhbHVlIHtcXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XFxuICAgICAgICAgICAgLm1haW5fd3JhcCAubWFpbl9tYWluIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9wcmljZSAucHJpY2VfaXRlbSAudW5kZXJsaW5lLFxcbiAgICAgICAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fcHJpY2UgLnRvdGFsX3ByaWNlIC51bmRlcmxpbmUge1xcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuODU7XFxuICAgICAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvciksIDFweCAtMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKSwgLTFweCAxcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpLCAtMXB4IC0xcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpOyB9XFxuICAgICAgICAgIC5tYWluX3dyYXAgLm1haW5fbWFpbiAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fcHJpY2UgLnRvdGFsX3ByaWNlIHtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3Njc3MvX19iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly9zY3NzL3Jlc2VydmF0aW9uRm9ybS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc2Nzcy9fX21peGlucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0MsbUJBQVk7RUFDWixlQUFPO0VBQ1AsbUJBQVc7RUFDWCxjQUFNO0VBQ04scUJBQU87RUFDUCxnQkFBUTtFQUNSLGlDQUE0QjtFQUM1QixnQ0FBMkI7RUFDM0IseUJBQWlCO0VBQ2pCLGlDQUFlO0VBQ2Ysb0JBQWU7RUFDZix1QkFBa0I7RUFDbEIseUVBQVksRUFBQTs7QUFHYjtFQUNDLDhCQUE4QixFQUFBOztBQUcvQjtFQUNDLDZCQUE2QixFQUFBOztBQUc5QjtFQUNDLDRCQUE0QixFQUFBOztBQ3ZCN0I7RUFDQyxjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLDBDQUEwQyxFQUFBO0VBSDNDO0lBTUUsMENBQTBDLEVBQUE7SUFONUM7TUFTRyxjQUFjO01BQ2QsZUFBZSxFQUFBO0lBVmxCO01BY0csZ0JBQWdCO01BQ2hCLDBDQUEwQyxFQUFBO0VBZjdDO0lBb0JFLGFBQWE7SUFDYiw4QkFBOEIsRUFBQTtJQXJCaEM7TUF3QkcsVUFBVTtNQUNWLDBDQUEwQyxFQUFBO01BekI3QztRQTRCSSwrQ0FBK0M7UUFDL0Msa0NBQWtDO1FBQ2xDLGFBQWEsRUFBQTtRQTlCakI7VUFpQ0ssc0JBQXNCO1VBQ3RCLGdCQUFnQixFQUFBO1VBbENyQjtZQXFDTSxZQUFZLEVBQUE7UUFyQ2xCO1VBMENLLGFBQWE7VUFDYixpQkFBaUIsRUFBQTtNQTNDdEI7UUFrREssMENBQTBDO1FBQzFDLGtDQUFrQztRQUNsQyxzQkFBc0IsRUFBQTtRQXBEM0I7VUF1RE0sWUFBWSxFQUFBO1FBdkRsQjtVQTJETSxjQUFjO1VBQ2Qsb0RBQW9EO1VBQ3BELG1CQUFtQjtVQUNuQixZQUFZLEVBQUE7UUE5RGxCO1VBa0VNLFVBQVU7VUFDVixnQkFBZ0I7VUFDaEIsV0FBVyxFQUFBO1VBcEVqQjtZQXVFTyxXQUFXLEVBQUE7TUF2RWxCO1FBNkVLLHdDQUF3QztRQUN4QyxrQ0FBa0M7UUFDbEMsa0JBQWtCLEVBQUE7UUEvRXZCO1VBa0ZTLFdBQVc7VUFDWCxrQkFBa0I7VUFDbEIsU0FBUztVQUNULFNBQVM7VUFDVCxVQUFVO1VBQ1YseUJBQXlCO1VBQ3pCLFdBQVcsRUFBQTtRQXhGcEI7VUE0Rk0sa0RBQWtEO1VBQ2xELHNCQUFzQjtVQUN0QixnQkFBZ0IsRUFBQTtVQTlGdEI7WUFpR08sWUFBWSxFQUFBO01BakduQjtRQXdHSywwQ0FBMEM7UUFDMUMsa0NBQWtDO1FBQ2xDLGFBQWE7UUFDYiw4QkFBOEIsRUFBQTtRQTNHbkM7VUE4R00saUJBQWlCO1VBQ2QsbUJBQW1CLEVBQUE7UUEvRzVCO1VBbUhNLGdCQUFnQjtVQUNoQixxQkFBcUIsRUFBQTtVQXBIM0I7WUF1SE8sWUFBWSxFQUFBO01BdkhuQjtRQTZISywwQ0FBMEMsRUFBQTtRQTdIL0M7VUFnSU0sZ0JBQWdCO1VBQ2hCLHNCQUFzQjtVQUN0QixlQUFlLEVBQUE7VUFsSXJCO1lBcUlPLGdCQUFnQjtZQUNoQixzQkFBc0I7WUN4STVCLDhCQUE4QjtZQUM5QixxQkFBcUI7WUFDckIsaUJBQWlCO1lBQ2pCLDJJQUNnRSxFQUFBO1FERmpFO1VBNElNLFNBQVM7VUFDVCxhQUFhO1VBQ2IsV0FBVztVQUNYLGtCQUFrQjtVQUNsQiw0QkFBNEI7VUFDNUIsWUFBWTtVQUNaLGNBQWM7VUFDZCxrQ0FBa0M7VUFDbEMsa0JBQWtCO1VBQ2xCLGdCQUFnQjtVQUNoQixlQUFlO1VBQ2YsZUFBZSxFQUFBO0lBdkpyQjtNQThKRyxVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLDRDQUE0QztNQUM1Qyx5REFBeUQ7TUFDekQsMENBQTBDLEVBQUE7TUFsSzdDO1FBcUtJLGdCQUFnQjtRQUNoQixTQUFTO1FBQ1QsNEJBQTRCO1FBQzVCLGtDQUFrQztRQUNsQyxhQUFhLEVBQUE7UUF6S2pCO1VBNEtLLGFBQWE7VUFDYiwrQ0FBK0M7VUFDL0Msa0NBQWtDLEVBQUE7VUE5S3ZDO1lBaUxNLFlBQVk7WUFDWixhQUFhO1lBQ2Isa0NBQWtDO1lBQ2xDLHlEQUE4QztZQUM5QyxzQkFBc0I7WUFDdEIsa0JBQWtCLEVBQUE7VUF0THhCO1lBMExNLGdCQUFnQjtZQUNoQixlQUFlLEVBQUE7WUEzTHJCO2NBOExPLHNCQUFzQixFQUFBO1FBOUw3QjtVQW9NSyw0Q0FBNEMsRUFBQTtVQXBNakQ7WUF1TU0sZ0JBQWdCO1lBQ2hCLG1CQUFtQixFQUFBO1VBeE16Qjs7WUE2TU0sYUFBYTtZQUNiLDhCQUE4QjtZQUM5QixzREFBc0QsRUFBQTtZQS9NNUQ7O2NBa05PLGdCQUFnQixFQUFBO1lBbE52Qjs7Y0FzTk8saUJBQWlCLEVBQUE7WUF0TnhCOztjQ0ZDLDhCQUE4QjtjQUM5QixxQkFBcUI7Y0FDckIsaUJBQWlCO2NBQ2pCLDJJQUNnRSxFQUFBO1VERmpFO1lBK05NLGdCQUFnQixFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUjp3Z2h0QDMwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbjpyb290IHtcXHJcXG5cXHQtLXdyYXBXaWR0aDogMTIwMHB4O1xcclxcblxcdC0tZ3JheTogIzdmOGM4ZDtcXHJcXG5cXHQtLWRlZXBHcmF5OiAjNTM1YzY4O1xcclxcblxcdC0tcmVkOiAjZmYzODVjO1xcclxcblxcdC0tYmx1ZTogbGlnaHRzZWFncmVlbjtcXHJcXG5cXHQtLWdyZWVuOiAjMjNjMzgyO1xcclxcblxcdC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbjogNTBweDtcXHJcXG5cXHQtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZzogMzBweDtcXHJcXG5cXHQtLWRldGFpbEZvbnRTaXplOiBzbWFsbGVyO1xcclxcblxcdC0tYm90dG9tQm9yZGVyOiAxcHggc29saWQgI2VjZjBmMTtcXHJcXG5cXHQtLWJvcmRlclJhZGl1czogMTBweDtcXHJcXG5cXHQtLWNhbGVuZGFyRGF5U2l6ZTogNDBweDtcXHJcXG5cXHQtLWJveFNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xcclxcbn1cXHJcXG5cXHJcXG4uQUNDRVBURUQge1xcclxcblxcdGNvbG9yOiB2YXIoLS1ncmVlbikgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLlBFTkRJTkcsIC5DT01QTEVURUQge1xcclxcblxcdGNvbG9yOiB2YXIoLS1ncmF5KSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uUkVGVVNFRCwgLkNBTkNMRUQge1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCBcXFwiLi9fYmFzZVxcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi9fbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG4ubWFpbl93cmFwIHtcXHJcXG5cXHRtYXJnaW46IDAgYXV0bztcXHJcXG5cXHRtYXgtd2lkdGg6IHZhcigtLXdyYXBXaWR0aCk7XFxyXFxuXFx0cGFkZGluZzogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAwO1xcclxcblxcdFxcclxcblxcdC5tYWluX2hlYWRlciB7XFxyXFxuXFx0XFx0bWFyZ2luOiAwIHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pO1xcclxcblxcdFxcdFxcclxcblxcdFxcdGkge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0Lm1haW5fdGl0bGUge1xcclxcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0XFx0XFx0cGFkZGluZzogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAwO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFx0XFxyXFxuXFx0Lm1haW5fbWFpbiB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0Lm1haW5fbGVmdCB7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDUwJTtcXHJcXG5cXHRcXHRcXHRtYXJnaW46IDAgdmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbik7XFxyXFxuXFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0LmFkdmlzZV93cmFwIHtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nLWJvdHRvbTogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKTtcXHJcXG5cXHRcXHRcXHRcXHRib3JkZXItYm90dG9tOiB2YXIoLS1ib3R0b21Cb3JkZXIpO1xcclxcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0LmFkdmlzZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Y29sb3I6IHZhcigtLWRlZXBHcmF5KTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRmb250LXdlaWdodDogMzAwO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdHN0cm9uZyB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0aSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0cGFkZGluZzogMjBweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRjb2xvcjogdmFyKC0tcmVkKTtcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcclxcblxcdFxcdFxcdC5yZXNlcnZhdGlvbl9mb3JtIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHQucmVzZXJ2YXRpb25faW5mb193cmFwIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Ym9yZGVyLWJvdHRvbTogdmFyKC0tYm90dG9tQm9yZGVyKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRjb2xvcjogdmFyKC0tZGVlcEdyYXkpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdC5yZXNlcnZhdGlvbl9pbmZvX3RpdGxlIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdC5pbmZvX25hbWUge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdG1hcmdpbi10b3A6IGNhbGModmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbikvMik7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdC5pbmZvX3ZhbHVlIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRhbGw6IHVuc2V0O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiAzMDA7XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0d2lkdGg6IDkwcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0JjpsYXN0LWNoaWxkIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHR3aWR0aDogMTBweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR9XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHQucmVmdW5kX25vdGljZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0cGFkZGluZzogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRib3JkZXItYm90dG9tOiB2YXIoLS1ib3R0b21Cb3JkZXIpO1xcclxcblxcdFxcdFxcdFxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHQmOjpiZWZvcmUge1xcclxcblxcdFxcdFxcdFxcdCAgICBcXHRjb250ZW50OiBcXFwiXFxcIjtcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdFxcdFxcdFxcdCAgICB0b3A6IDM1cHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgIGxlZnQ6IDBweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgd2lkdGg6IDlweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQUYwRjtcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgaGVpZ2h0OiA4MCU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdC5yZWZ1bmRfZGVzY3JpcHRpb24sIC5yZWZ1bmRfc21hbGwge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdG1hcmdpbjogY2FsYyh2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKS8yKSAwO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiB2YXIoLS1kZWVwR3JheSk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRzdHJvbmcge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHQuY29uZmlybV9ub3RpY2Uge1xcclxcblxcdFxcdFxcdFxcdFxcdHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRib3JkZXItYm90dG9tOiB2YXIoLS1ib3R0b21Cb3JkZXIpO1xcclxcblxcdFxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdGkge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMS41cmVtO1xcclxcblxcdFxcdFxcdFxcdFxcdCAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHQuY29uZmlybV9kZXNjcmlwdGlvbiB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogdmFyKC1kZWVwR3JheSk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0c3Ryb25nIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0LnJlc2VydmVfYnRuX3dyYXAge1xcclxcblxcdFxcdFxcdFxcdFxcdHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRzbWFsbCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogdmFyKC0tZGVlcEdyYXkpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMTJweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRzcGFuIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRmb250LXdlaWdodDogNTAwO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiBtZWRpdW1zbGF0ZWJsdWU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0QGluY2x1ZGUgdW5kZXJsaW5lO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0LnJlc2VydmVfYnRuIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRib3JkZXI6IDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRwYWRkaW5nOiAxMHB4IDMwcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0bWFyZ2luOiAxMHB4IDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxNnB4O1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQubWFpbl9yaWdodCB7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDUwJTtcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0XFx0cGFkZGluZy10b3A6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZyk7XFxyXFxuXFx0XFx0XFx0cGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAqIDIpO1xcclxcblxcdFxcdFxcdG1hcmdpbjogMCB2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKTtcXHJcXG5cXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHQucmVzZXJ2YXRpb25fd3JhcCB7XFxyXFxuXFx0XFx0XFx0XFx0cG9zaXRpb246IHN0aWNreTtcXHJcXG5cXHRcXHRcXHRcXHR0b3A6IDgwcHg7XFxyXFxuXFx0XFx0XFx0XFx0Ym94LXNoYWRvdzogdmFyKC0tYm94U2hhZG93KTtcXHJcXG5cXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMpO1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDIwcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0LnJlc2VydmF0aW9uX3Jvb20ge1xcclxcblxcdFxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0cGFkZGluZy1ib3R0b206IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZyk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Ym9yZGVyLWJvdHRvbTogdmFyKC0tYm90dG9tQm9yZGVyKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHQucm9vbV9pbWcge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdHdpZHRoOiAxMzBweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRoZWlnaHQ6IDEwMHB4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuLi9pbWcvdGh1bWJuYWlsMS5qcGdcXFwiKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0LnJvb21faW5mbyB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IDEycHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0LnJvb21fc3BlYyB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IHZhcigtLWRlZXBHcmF5KTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHQucmVzZXJ2YXRpb25fcHJpY2Uge1xcclxcblxcdFxcdFxcdFxcdFxcdHBhZGRpbmctdG9wOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdC5wcmljZV90aXRsZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHQucHJpY2VfaXRlbSxcXHJcXG5cXHRcXHRcXHRcXHRcXHQudG90YWxfcHJpY2Uge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgLyAyKTtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQucHJpY2VfbmFtZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0LnByaWNlX3ZhbHVlIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHR0ZXh0LWFsaWduOiByaWdodDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0LnVuZGVybGluZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0QGluY2x1ZGUgdW5kZXJsaW5lO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0LnRvdGFsX3ByaWNlIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVwiLFwiQG1peGluIHVuZGVybGluZSB7XFxyXFxuXFx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcclxcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG5cXHRsaW5lLWhlaWdodDogMC44NTtcXHJcXG5cXHR0ZXh0LXNoYWRvdzogMXB4IDFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvciksIDFweCAtMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKSxcXHJcXG5cXHRcXHQtMXB4IDFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvciksIC0xcHggLTFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvcik7XFxyXFxuXFx0QGNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBzdGFyKCRmb250LXNpemUpIHtcXHJcXG5cXHRjb2xvcjogdmFyKC0tcmVkKTtcXHJcXG5cXHRmb250LXNpemU6ICRmb250LXNpemU7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiByZXNlcnZhdGlvbl9pdGVtIHtcXHJcXG5cXHRmbGV4OiAxIDEgNTAlO1xcclxcblxcdHBhZGRpbmc6IDVweCAxMHB4O1xcclxcblxcdGZvbnQtc2l6ZTogMC45cmVtO1xcclxcblxcdGhlaWdodDogNTBweDtcXHJcXG5cXHJcXG5cXHQucmVzZXJ2YXRpb25fZGlzcGxheSB7XFxyXFxuXFx0XFx0Y29sb3I6IHZhcigtLWdyYXkpO1xcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZmFjaWxpdHlfcnVsZV9pdGVtIHtcXHJcXG5cXHRtYXJnaW46IDE1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGZhY2lsaXR5X3J1bGVfaWNvbiB7XFxyXFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcclxcblxcdHdpZHRoOiA0MHB4O1xcclxcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGZhY2lsaXR5X3J1bGVfZGVzY3JpcHRpb24ge1xcclxcblxcdG1hcmdpbi1sZWZ0OiAxNXB4O1xcclxcblxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiNGIzNGE1NWUwOWRjYTA2MDQ2ODYzNTFmZWNlMGFjZTYuanBnXCI7IiwiaW1wb3J0IFwiLi4vc2Nzcy9yZXNlcnZhdGlvbkZvcm0uc2Nzc1wiO1xyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiYWNrSWNvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbG9jYXRpb24uaHJlZiA9IGxvY2F0aW9uLnBhdGhuYW1lLm1hdGNoKC8uKnJvb21cXC9bXFxkXSsvKVswXSk7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNlcnZhdGlvbkZvcm0uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==