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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/reviewForm.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./scss/reviewForm.scss":
/*!*************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./scss/reviewForm.scss ***!
  \*************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";\n:root {\n  --wrapWidth: 1200px;\n  --gray: #7f8c8d;\n  --deepGray: #535c68;\n  --red: #ff385c;\n  --blue: lightseagreen;\n  --green: #23c382;\n  --containerHorizontalMargin: 50px;\n  --containerVerticalPadding: 30px;\n  --detailFontSize: smaller;\n  --bottomBorder: 1px solid #ecf0f1;\n  --borderRadius: 10px;\n  --calendarDaySize: 40px;\n  --boxShadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.ACCEPTED {\n  color: var(--green) !important; }\n\n.PENDING, .COMPLETED {\n  color: var(--gray) !important; }\n\n.REFUSED, .CANCLED {\n  color: var(--red) !important; }\n\n:root {\n  --wrapWidth: 1200px;\n  --gray: #7f8c8d;\n  --deepGray: #535c68;\n  --red: #ff385c;\n  --blue: lightseagreen;\n  --green: #23c382;\n  --containerHorizontalMargin: 50px;\n  --containerVerticalPadding: 30px;\n  --detailFontSize: smaller;\n  --bottomBorder: 1px solid #ecf0f1;\n  --borderRadius: 10px;\n  --calendarDaySize: 40px;\n  --boxShadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.ACCEPTED {\n  color: var(--green) !important; }\n\n.PENDING, .COMPLETED {\n  color: var(--gray) !important; }\n\n.REFUSED, .CANCLED {\n  color: var(--red) !important; }\n\nfieldset, label {\n  margin: 0;\n  padding: 0; }\n\n.rating {\n  border: none; }\n\n.rating > input {\n  display: none; }\n\n.rating > label:before {\n  margin: 5px;\n  font-size: 1.25em;\n  display: inline-block;\n  content: \"★\"; }\n\n.rating > label {\n  color: #ddd;\n  float: right; }\n\n.rating > input:checked ~ label,\n.rating:not(:checked) > label:hover,\n.rating:not(:checked) > label:hover ~ label {\n  color: #FFD700; }\n\n/* hover previous stars in list */\n.rating > input:checked + label:hover,\n.rating > input:checked ~ label:hover,\n.rating > label:hover ~ input:checked ~ label,\n.rating > input:checked ~ label:hover ~ label {\n  color: #FFED85; }\n\n.aside_header {\n  padding: var(--containerVerticalPadding) 0;\n  margin: 0 var(--containerHorizontalMargin); }\n  .aside_header .aside_title {\n    font-size: 2.5em;\n    font-weight: 700; }\n\n.wrap {\n  display: flex; }\n  .wrap .aside_wrap {\n    padding: var(--containerVerticalPadding) 0;\n    margin: 0 var(--containerHorizontalMargin); }\n    .wrap .aside_wrap .img_wrap {\n      position: relative;\n      height: 40vh; }\n      .wrap .aside_wrap .img_wrap .room_photo {\n        width: 100%;\n        height: 100%;\n        object-fit: cover; }\n    .wrap .aside_wrap .room_detail {\n      margin: 15px 0;\n      font-size: 0.9em;\n      color: var(--deepGray); }\n      .wrap .aside_wrap .room_detail .room_address_wrap {\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        text-overflow: hidden; }\n  .wrap .main {\n    padding: var(--containerVerticalPadding) 0;\n    margin: 0 var(--containerHorizontalMargin); }\n    .wrap .main p {\n      font-weight: 300; }\n    .wrap .main .rating {\n      font-size: 2rem; }\n    .wrap .main .label {\n      font-size: 1.3rem;\n      font-weight: 700;\n      padding: 10px 0;\n      display: block;\n      border-top: var(--bottomBorder); }\n      .wrap .main .label .label_detail {\n        font-size: 1rem;\n        font-weight: 500;\n        color: var(--deepGray); }\n    .wrap .main .review_content {\n      width: 100%;\n      border: 1px solid #ccc;\n      background: #FFF;\n      margin: 0 0 5px;\n      padding: 10px;\n      height: 300px;\n      resize: none;\n      margin: 10px 0;\n      font-family: inherit; }\n      .wrap .main .review_content:hover {\n        -webkit-transition: border-color 0.3s ease-in-out;\n        -moz-transition: border-color 0.3s ease-in-out;\n        transition: border-color 0.3s ease-in-out;\n        border: 1px solid #aaa; }\n    .wrap .main button {\n      border: 0;\n      outline: none;\n      padding: 10px 30px;\n      background-color: var(--red);\n      color: white;\n      font-weight: 700;\n      cursor: pointer; }\n", "",{"version":3,"sources":["webpack://scss/reviewForm.scss","webpack://scss/__base.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACChB;EACC,mBAAY;EACZ,eAAO;EACP,mBAAW;EACX,cAAM;EACN,qBAAO;EACP,gBAAQ;EACR,iCAA4B;EAC5B,gCAA2B;EAC3B,yBAAiB;EACjB,iCAAe;EACf,oBAAe;EACf,uBAAkB;EAClB,yEAAY,EAAA;;AAOb;EACC,8BAA8B,EAAA;;AAG/B;EACC,6BAA6B,EAAA;;AAG9B;EACC,4BAA4B,EAAA;;AA7B7B;EACC,mBAAY;EACZ,eAAO;EACP,mBAAW;EACX,cAAM;EACN,qBAAO;EACP,gBAAQ;EACR,iCAA4B;EAC5B,gCAA2B;EAC3B,yBAAiB;EACjB,iCAAe;EACf,oBAAe;EACf,uBAAkB;EAClB,yEAAY,EAAA;;AAOb;EACC,8BAA8B,EAAA;;AAG/B;EACC,6BAA6B,EAAA;;AAG9B;EACC,4BAA4B,EAAA;;AD3B7B;EAAkB,SAAS;EAAE,UAAU,EAAA;;AAEvC;EACE,YAAY,EAAA;;AAGd;EAAkB,aAAa,EAAA;;AAC/B;EACE,WAAW;EACX,iBAAiB;EACjB,qBAAqB;EACrB,YAAS,EAAI;;AAGf;EACE,WAAW;EACZ,YAAY,EAAA;;AAGb;;;EAE8C,cAAc,EAAA;;AAAK,iCAAA;AAEjE;;;;EAGgD,cAAc,EAAA;;AAE9D;EACC,0CAA0C;EAC1C,0CAA0C,EAAA;EAF3C;IAKE,gBAAgB;IAChB,gBAAgB,EAAA;;AAKlB;EACC,aAAa,EAAA;EADd;IAIE,0CAA0C;IAC1C,0CAA0C,EAAA;IAL5C;MAQG,kBAAkB;MAClB,YAAY,EAAA;MATf;QAYI,WAAW;QACX,YAAY;QACZ,iBAAiB,EAAA;IAdrB;MAmBG,cAAc;MACd,gBAAgB;MAChB,sBAAsB,EAAA;MArBzB;QAwBI,mBAAmB;QACnB,uBAAuB;QACvB,qBAAqB,EAAA;EA1BzB;IAgCE,0CAA0C;IAC1C,0CAA0C,EAAA;IAjC5C;MAoCM,gBAAgB,EAAA;IApCtB;MAwCM,eAAe,EAAA;IAxCrB;MA4CG,iBAAiB;MACjB,gBAAgB;MACb,eAAe;MACf,cAAc;MACd,+BAA+B,EAAA;MAhDrC;QAmDI,eAAe;QACf,gBAAgB;QAChB,sBAAsB,EAAA;IArD1B;MA0DG,WAAW;MACX,sBAAsB;MACtB,gBAAgB;MAChB,eAAe;MACf,aAAa;MACb,aAAa;MACb,YAAY;MACZ,cAAc;MACd,oBAAoB,EAAA;MAlEvB;QAqEI,iDAAiD;QAC/C,8CAA8C;QAChD,yCAAyC;QACzC,sBAAsB,EAAA;IAxE1B;MA6EM,SAAS;MACT,aAAa;MACb,kBAAkB;MAClB,4BAA4B;MAC5B,YAAY;MACZ,gBAAgB;MAChB,eAAe,EAAA","sourcesContent":["@import \"./_base\";\r\n@import \"./_mixins\";\r\n\r\nfieldset, label { margin: 0; padding: 0; }\r\n\r\n.rating { \r\n  border: none;\r\n}\r\n\r\n.rating > input { display: none; } \r\n.rating > label:before { \r\n  margin: 5px;\r\n  font-size: 1.25em;\r\n  display: inline-block;\r\n  content: \"★\";\r\n}\r\n\r\n.rating > label { \r\n  color: #ddd; \r\n float: right; \r\n}\r\n\r\n.rating > input:checked ~ label, /* show gold star when clicked */\r\n.rating:not(:checked) > label:hover, /* hover current star */\r\n.rating:not(:checked) > label:hover ~ label { color: #FFD700;  } /* hover previous stars in list */\r\n\r\n.rating > input:checked + label:hover, /* hover current star when changing rating */\r\n.rating > input:checked ~ label:hover,\r\n.rating > label:hover ~ input:checked ~ label, /* lighten current selection */\r\n.rating > input:checked ~ label:hover ~ label { color: #FFED85;  }\r\n\r\n.aside_header {\r\n\tpadding: var(--containerVerticalPadding) 0;\r\n\tmargin: 0 var(--containerHorizontalMargin);\r\n\t\r\n\t.aside_title {\r\n\t\tfont-size: 2.5em;\r\n\t\tfont-weight: 700;\r\n\t}\r\n\t\r\n}\r\n\r\n.wrap {\r\n\tdisplay: flex;\r\n\t\r\n\t.aside_wrap {\r\n\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\t\t\r\n\t\t.img_wrap {\r\n\t\t\tposition: relative;\r\n\t\t\theight: 40vh;\r\n\t\t\t\r\n\t\t\t.room_photo {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\tobject-fit: cover;\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\t.room_detail {\r\n\t\t\tmargin: 15px 0;\r\n\t\t\tfont-size: 0.9em;\r\n\t\t\tcolor: var(--deepGray);\r\n\t\t\t\r\n\t\t\t.room_address_wrap {\r\n\t\t\t\twhite-space: nowrap;\r\n\t\t\t\ttext-overflow: ellipsis;\r\n\t\t\t\ttext-overflow: hidden;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t\r\n\t.main {\r\n\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\t\t\r\n\t\tp {\r\n\t\t    font-weight: 300;\r\n\t\t}\r\n\t\t\r\n\t\t.rating {\r\n    \t\tfont-size: 2rem;\r\n\t\t}\r\n\t\t\r\n\t\t.label {\r\n\t\t\tfont-size: 1.3rem;\r\n\t\t\tfont-weight: 700;\r\n\t\t    padding: 10px 0;\r\n\t\t    display: block;\r\n\t\t    border-top: var(--bottomBorder);\r\n\t\t\t\r\n\t\t\t.label_detail {\r\n\t\t\t\tfont-size: 1rem;\r\n\t\t\t\tfont-weight: 500;\r\n\t\t\t\tcolor: var(--deepGray);\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\t.review_content {\r\n\t\t\twidth: 100%;\r\n\t\t\tborder: 1px solid #ccc;\r\n\t\t\tbackground: #FFF;\r\n\t\t\tmargin: 0 0 5px;\r\n\t\t\tpadding: 10px;\r\n\t\t\theight: 300px;\r\n\t\t\tresize: none;\r\n\t\t\tmargin: 10px 0;\r\n\t\t\tfont-family: inherit;\r\n\t\t\t\r\n\t\t\t&:hover {\r\n\t\t\t\t-webkit-transition: border-color 0.3s ease-in-out;\r\n\t  \t\t\t-moz-transition: border-color 0.3s ease-in-out;\r\n\t\t\t\ttransition: border-color 0.3s ease-in-out;\r\n\t\t\t\tborder: 1px solid #aaa;\r\n\t\t\t}\r\n\t\t}\r\n\t\t\r\n\t\tbutton {\r\n\t\t    border: 0;\r\n\t\t    outline: none;\r\n\t\t    padding: 10px 30px;\r\n\t\t    background-color: var(--red);\r\n\t\t    color: white;\r\n\t\t    font-weight: 700;\r\n\t\t    cursor: pointer;\r\n\t\t}\r\n\t}\r\n}","@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;700&display=swap\");\r\n:root {\r\n\t--wrapWidth: 1200px;\r\n\t--gray: #7f8c8d;\r\n\t--deepGray: #535c68;\r\n\t--red: #ff385c;\r\n\t--blue: lightseagreen;\r\n\t--green: #23c382;\r\n\t--containerHorizontalMargin: 50px;\r\n\t--containerVerticalPadding: 30px;\r\n\t--detailFontSize: smaller;\r\n\t--bottomBorder: 1px solid #ecf0f1;\r\n\t--borderRadius: 10px;\r\n\t--calendarDaySize: 40px;\r\n\t--boxShadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n}\r\n\r\n// Breakpoints\r\n$breakpoint-tablet: 758px;\r\n$breakpoint-desktop: 1024px;\r\n\r\n.ACCEPTED {\r\n\tcolor: var(--green) !important;\r\n}\r\n\r\n.PENDING, .COMPLETED {\r\n\tcolor: var(--gray) !important;\r\n}\r\n\r\n.REFUSED, .CANCLED {\r\n\tcolor: var(--red) !important;\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./js/reviewForm.js":
/*!**************************!*\
  !*** ./js/reviewForm.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_reviewForm_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/reviewForm.scss */ "./scss/reviewForm.scss");
/* harmony import */ var _scss_reviewForm_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_reviewForm_scss__WEBPACK_IMPORTED_MODULE_0__);


document.querySelector("#backIcon").addEventListener("click", () => location.href = "/");

/***/ }),

/***/ "./scss/reviewForm.scss":
/*!******************************!*\
  !*** ./scss/reviewForm.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./reviewForm.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./scss/reviewForm.scss");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2Nzcy9yZXZpZXdGb3JtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9yZXZpZXdGb3JtLmpzIiwid2VicGFjazovLy8uL3Njc3MvcmV2aWV3Rm9ybS5zY3NzP2IxM2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUM0RjtBQUM1Riw4QkFBOEIsbUZBQTJCO0FBQ3pELDhCQUE4QixRQUFTLDhFQUE4RSxJQUFJLGtC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QUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQzVRQTtBQUFBO0FBQUE7QUFBaUM7O0FBRWpDLHlGOzs7Ozs7Ozs7OztBQ0ZBLFVBQVUsbUJBQU8sQ0FBQyx1SkFBMkU7QUFDN0YsMEJBQTBCLG1CQUFPLENBQUMsc05BQTBHOztBQUU1STs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJyZXZpZXdGb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvcmVzb3VyY2VzL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL3Jldmlld0Zvcm0uanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrS1I6d2dodEAzMDA7NTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrS1I6d2dodEAzMDA7NTAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbjpyb290IHtcXG4gIC0td3JhcFdpZHRoOiAxMjAwcHg7XFxuICAtLWdyYXk6ICM3ZjhjOGQ7XFxuICAtLWRlZXBHcmF5OiAjNTM1YzY4O1xcbiAgLS1yZWQ6ICNmZjM4NWM7XFxuICAtLWJsdWU6IGxpZ2h0c2VhZ3JlZW47XFxuICAtLWdyZWVuOiAjMjNjMzgyO1xcbiAgLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luOiA1MHB4O1xcbiAgLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmc6IDMwcHg7XFxuICAtLWRldGFpbEZvbnRTaXplOiBzbWFsbGVyO1xcbiAgLS1ib3R0b21Cb3JkZXI6IDFweCBzb2xpZCAjZWNmMGYxO1xcbiAgLS1ib3JkZXJSYWRpdXM6IDEwcHg7XFxuICAtLWNhbGVuZGFyRGF5U2l6ZTogNDBweDtcXG4gIC0tYm94U2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7IH1cXG5cXG4uQUNDRVBURUQge1xcbiAgY29sb3I6IHZhcigtLWdyZWVuKSAhaW1wb3J0YW50OyB9XFxuXFxuLlBFTkRJTkcsIC5DT01QTEVURUQge1xcbiAgY29sb3I6IHZhcigtLWdyYXkpICFpbXBvcnRhbnQ7IH1cXG5cXG4uUkVGVVNFRCwgLkNBTkNMRUQge1xcbiAgY29sb3I6IHZhcigtLXJlZCkgIWltcG9ydGFudDsgfVxcblxcbjpyb290IHtcXG4gIC0td3JhcFdpZHRoOiAxMjAwcHg7XFxuICAtLWdyYXk6ICM3ZjhjOGQ7XFxuICAtLWRlZXBHcmF5OiAjNTM1YzY4O1xcbiAgLS1yZWQ6ICNmZjM4NWM7XFxuICAtLWJsdWU6IGxpZ2h0c2VhZ3JlZW47XFxuICAtLWdyZWVuOiAjMjNjMzgyO1xcbiAgLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luOiA1MHB4O1xcbiAgLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmc6IDMwcHg7XFxuICAtLWRldGFpbEZvbnRTaXplOiBzbWFsbGVyO1xcbiAgLS1ib3R0b21Cb3JkZXI6IDFweCBzb2xpZCAjZWNmMGYxO1xcbiAgLS1ib3JkZXJSYWRpdXM6IDEwcHg7XFxuICAtLWNhbGVuZGFyRGF5U2l6ZTogNDBweDtcXG4gIC0tYm94U2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7IH1cXG5cXG4uQUNDRVBURUQge1xcbiAgY29sb3I6IHZhcigtLWdyZWVuKSAhaW1wb3J0YW50OyB9XFxuXFxuLlBFTkRJTkcsIC5DT01QTEVURUQge1xcbiAgY29sb3I6IHZhcigtLWdyYXkpICFpbXBvcnRhbnQ7IH1cXG5cXG4uUkVGVVNFRCwgLkNBTkNMRUQge1xcbiAgY29sb3I6IHZhcigtLXJlZCkgIWltcG9ydGFudDsgfVxcblxcbmZpZWxkc2V0LCBsYWJlbCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLnJhdGluZyB7XFxuICBib3JkZXI6IG5vbmU7IH1cXG5cXG4ucmF0aW5nID4gaW5wdXQge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5yYXRpbmcgPiBsYWJlbDpiZWZvcmUge1xcbiAgbWFyZ2luOiA1cHg7XFxuICBmb250LXNpemU6IDEuMjVlbTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGNvbnRlbnQ6IFxcXCLimIVcXFwiOyB9XFxuXFxuLnJhdGluZyA+IGxhYmVsIHtcXG4gIGNvbG9yOiAjZGRkO1xcbiAgZmxvYXQ6IHJpZ2h0OyB9XFxuXFxuLnJhdGluZyA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbCxcXG4ucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbDpob3ZlcixcXG4ucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbDpob3ZlciB+IGxhYmVsIHtcXG4gIGNvbG9yOiAjRkZENzAwOyB9XFxuXFxuLyogaG92ZXIgcHJldmlvdXMgc3RhcnMgaW4gbGlzdCAqL1xcbi5yYXRpbmcgPiBpbnB1dDpjaGVja2VkICsgbGFiZWw6aG92ZXIsXFxuLnJhdGluZyA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpob3ZlcixcXG4ucmF0aW5nID4gbGFiZWw6aG92ZXIgfiBpbnB1dDpjaGVja2VkIH4gbGFiZWwsXFxuLnJhdGluZyA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpob3ZlciB+IGxhYmVsIHtcXG4gIGNvbG9yOiAjRkZFRDg1OyB9XFxuXFxuLmFzaWRlX2hlYWRlciB7XFxuICBwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7XFxuICBtYXJnaW46IDAgdmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbik7IH1cXG4gIC5hc2lkZV9oZWFkZXIgLmFzaWRlX3RpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyLjVlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDsgfVxcblxcbi53cmFwIHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG4gIC53cmFwIC5hc2lkZV93cmFwIHtcXG4gICAgcGFkZGluZzogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAwO1xcbiAgICBtYXJnaW46IDAgdmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbik7IH1cXG4gICAgLndyYXAgLmFzaWRlX3dyYXAgLmltZ193cmFwIHtcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgaGVpZ2h0OiA0MHZoOyB9XFxuICAgICAgLndyYXAgLmFzaWRlX3dyYXAgLmltZ193cmFwIC5yb29tX3Bob3RvIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7IH1cXG4gICAgLndyYXAgLmFzaWRlX3dyYXAgLnJvb21fZGV0YWlsIHtcXG4gICAgICBtYXJnaW46IDE1cHggMDtcXG4gICAgICBmb250LXNpemU6IDAuOWVtO1xcbiAgICAgIGNvbG9yOiB2YXIoLS1kZWVwR3JheSk7IH1cXG4gICAgICAud3JhcCAuYXNpZGVfd3JhcCAucm9vbV9kZXRhaWwgLnJvb21fYWRkcmVzc193cmFwIHtcXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGhpZGRlbjsgfVxcbiAgLndyYXAgLm1haW4ge1xcbiAgICBwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7XFxuICAgIG1hcmdpbjogMCB2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKTsgfVxcbiAgICAud3JhcCAubWFpbiBwIHtcXG4gICAgICBmb250LXdlaWdodDogMzAwOyB9XFxuICAgIC53cmFwIC5tYWluIC5yYXRpbmcge1xcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTsgfVxcbiAgICAud3JhcCAubWFpbiAubGFiZWwge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgcGFkZGluZzogMTBweCAwO1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIGJvcmRlci10b3A6IHZhcigtLWJvdHRvbUJvcmRlcik7IH1cXG4gICAgICAud3JhcCAubWFpbiAubGFiZWwgLmxhYmVsX2RldGFpbCB7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgY29sb3I6IHZhcigtLWRlZXBHcmF5KTsgfVxcbiAgICAud3JhcCAubWFpbiAucmV2aWV3X2NvbnRlbnQge1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICAgICAgYmFja2dyb3VuZDogI0ZGRjtcXG4gICAgICBtYXJnaW46IDAgMCA1cHg7XFxuICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDsgfVxcbiAgICAgIC53cmFwIC5tYWluIC5yZXZpZXdfY29udGVudDpob3ZlciB7XFxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlLWluLW91dDtcXG4gICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FhYTsgfVxcbiAgICAud3JhcCAubWFpbiBidXR0b24ge1xcbiAgICAgIGJvcmRlcjogMDtcXG4gICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zY3NzL3Jldmlld0Zvcm0uc2Nzc1wiLFwid2VicGFjazovL3Njc3MvX19iYXNlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0MsbUJBQVk7RUFDWixlQUFPO0VBQ1AsbUJBQVc7RUFDWCxjQUFNO0VBQ04scUJBQU87RUFDUCxnQkFBUTtFQUNSLGlDQUE0QjtFQUM1QixnQ0FBMkI7RUFDM0IseUJBQWlCO0VBQ2pCLGlDQUFlO0VBQ2Ysb0JBQWU7RUFDZix1QkFBa0I7RUFDbEIseUVBQVksRUFBQTs7QUFPYjtFQUNDLDhCQUE4QixFQUFBOztBQUcvQjtFQUNDLDZCQUE2QixFQUFBOztBQUc5QjtFQUNDLDRCQUE0QixFQUFBOztBQTdCN0I7RUFDQyxtQkFBWTtFQUNaLGVBQU87RUFDUCxtQkFBVztFQUNYLGNBQU07RUFDTixxQkFBTztFQUNQLGdCQUFRO0VBQ1IsaUNBQTRCO0VBQzVCLGdDQUEyQjtFQUMzQix5QkFBaUI7RUFDakIsaUNBQWU7RUFDZixvQkFBZTtFQUNmLHVCQUFrQjtFQUNsQix5RUFBWSxFQUFBOztBQU9iO0VBQ0MsOEJBQThCLEVBQUE7O0FBRy9CO0VBQ0MsNkJBQTZCLEVBQUE7O0FBRzlCO0VBQ0MsNEJBQTRCLEVBQUE7O0FEM0I3QjtFQUFrQixTQUFTO0VBQUUsVUFBVSxFQUFBOztBQUV2QztFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUFrQixhQUFhLEVBQUE7O0FBQy9CO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsWUFBUyxFQUFJOztBQUdmO0VBQ0UsV0FBVztFQUNaLFlBQVksRUFBQTs7QUFHYjs7O0VBRThDLGNBQWMsRUFBQTs7QUFBSyxpQ0FBQTtBQUVqRTs7OztFQUdnRCxjQUFjLEVBQUE7O0FBRTlEO0VBQ0MsMENBQTBDO0VBQzFDLDBDQUEwQyxFQUFBO0VBRjNDO0lBS0UsZ0JBQWdCO0lBQ2hCLGdCQUFnQixFQUFBOztBQUtsQjtFQUNDLGFBQWEsRUFBQTtFQURkO0lBSUUsMENBQTBDO0lBQzFDLDBDQUEwQyxFQUFBO0lBTDVDO01BUUcsa0JBQWtCO01BQ2xCLFlBQVksRUFBQTtNQVRmO1FBWUksV0FBVztRQUNYLFlBQVk7UUFDWixpQkFBaUIsRUFBQTtJQWRyQjtNQW1CRyxjQUFjO01BQ2QsZ0JBQWdCO01BQ2hCLHNCQUFzQixFQUFBO01BckJ6QjtRQXdCSSxtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLHFCQUFxQixFQUFBO0VBMUJ6QjtJQWdDRSwwQ0FBMEM7SUFDMUMsMENBQTBDLEVBQUE7SUFqQzVDO01Bb0NNLGdCQUFnQixFQUFBO0lBcEN0QjtNQXdDTSxlQUFlLEVBQUE7SUF4Q3JCO01BNENHLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDYixlQUFlO01BQ2YsY0FBYztNQUNkLCtCQUErQixFQUFBO01BaERyQztRQW1ESSxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLHNCQUFzQixFQUFBO0lBckQxQjtNQTBERyxXQUFXO01BQ1gsc0JBQXNCO01BQ3RCLGdCQUFnQjtNQUNoQixlQUFlO01BQ2YsYUFBYTtNQUNiLGFBQWE7TUFDYixZQUFZO01BQ1osY0FBYztNQUNkLG9CQUFvQixFQUFBO01BbEV2QjtRQXFFSSxpREFBaUQ7UUFDL0MsOENBQThDO1FBQ2hELHlDQUF5QztRQUN6QyxzQkFBc0IsRUFBQTtJQXhFMUI7TUE2RU0sU0FBUztNQUNULGFBQWE7TUFDYixrQkFBa0I7TUFDbEIsNEJBQTRCO01BQzVCLFlBQVk7TUFDWixnQkFBZ0I7TUFDaEIsZUFBZSxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcIi4vX2Jhc2VcXFwiO1xcclxcbkBpbXBvcnQgXFxcIi4vX21peGluc1xcXCI7XFxyXFxuXFxyXFxuZmllbGRzZXQsIGxhYmVsIHsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwOyB9XFxyXFxuXFxyXFxuLnJhdGluZyB7IFxcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucmF0aW5nID4gaW5wdXQgeyBkaXNwbGF5OiBub25lOyB9IFxcclxcbi5yYXRpbmcgPiBsYWJlbDpiZWZvcmUgeyBcXHJcXG4gIG1hcmdpbjogNXB4O1xcclxcbiAgZm9udC1zaXplOiAxLjI1ZW07XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBjb250ZW50OiBcXFwi4piFXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLnJhdGluZyA+IGxhYmVsIHsgXFxyXFxuICBjb2xvcjogI2RkZDsgXFxyXFxuIGZsb2F0OiByaWdodDsgXFxyXFxufVxcclxcblxcclxcbi5yYXRpbmcgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWwsIC8qIHNob3cgZ29sZCBzdGFyIHdoZW4gY2xpY2tlZCAqL1xcclxcbi5yYXRpbmc6bm90KDpjaGVja2VkKSA+IGxhYmVsOmhvdmVyLCAvKiBob3ZlciBjdXJyZW50IHN0YXIgKi9cXHJcXG4ucmF0aW5nOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbDpob3ZlciB+IGxhYmVsIHsgY29sb3I6ICNGRkQ3MDA7ICB9IC8qIGhvdmVyIHByZXZpb3VzIHN0YXJzIGluIGxpc3QgKi9cXHJcXG5cXHJcXG4ucmF0aW5nID4gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmhvdmVyLCAvKiBob3ZlciBjdXJyZW50IHN0YXIgd2hlbiBjaGFuZ2luZyByYXRpbmcgKi9cXHJcXG4ucmF0aW5nID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmhvdmVyLFxcclxcbi5yYXRpbmcgPiBsYWJlbDpob3ZlciB+IGlucHV0OmNoZWNrZWQgfiBsYWJlbCwgLyogbGlnaHRlbiBjdXJyZW50IHNlbGVjdGlvbiAqL1xcclxcbi5yYXRpbmcgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWw6aG92ZXIgfiBsYWJlbCB7IGNvbG9yOiAjRkZFRDg1OyAgfVxcclxcblxcclxcbi5hc2lkZV9oZWFkZXIge1xcclxcblxcdHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgMDtcXHJcXG5cXHRtYXJnaW46IDAgdmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbik7XFxyXFxuXFx0XFxyXFxuXFx0LmFzaWRlX3RpdGxlIHtcXHJcXG5cXHRcXHRmb250LXNpemU6IDIuNWVtO1xcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0fVxcclxcblxcdFxcclxcbn1cXHJcXG5cXHJcXG4ud3JhcCB7XFxyXFxuXFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHJcXG5cXHQuYXNpZGVfd3JhcCB7XFxyXFxuXFx0XFx0cGFkZGluZzogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAwO1xcclxcblxcdFxcdG1hcmdpbjogMCB2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKTtcXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHQuaW1nX3dyYXAge1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHRcXHRoZWlnaHQ6IDQwdmg7XFxyXFxuXFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0LnJvb21fcGhvdG8ge1xcclxcblxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHRvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdFxcclxcblxcdFxcdC5yb29tX2RldGFpbCB7XFxyXFxuXFx0XFx0XFx0bWFyZ2luOiAxNXB4IDA7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiAwLjllbTtcXHJcXG5cXHRcXHRcXHRjb2xvcjogdmFyKC0tZGVlcEdyYXkpO1xcclxcblxcdFxcdFxcdFxcclxcblxcdFxcdFxcdC5yb29tX2FkZHJlc3Nfd3JhcCB7XFxyXFxuXFx0XFx0XFx0XFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG5cXHRcXHRcXHRcXHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG5cXHRcXHRcXHRcXHR0ZXh0LW92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFx0XFxyXFxuXFx0Lm1haW4ge1xcclxcblxcdFxcdHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgMDtcXHJcXG5cXHRcXHRtYXJnaW46IDAgdmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbik7XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0cCB7XFxyXFxuXFx0XFx0ICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdFxcclxcblxcdFxcdC5yYXRpbmcge1xcclxcbiAgICBcXHRcXHRmb250LXNpemU6IDJyZW07XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdFxcclxcblxcdFxcdC5sYWJlbCB7XFxyXFxuXFx0XFx0XFx0Zm9udC1zaXplOiAxLjNyZW07XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHQgICAgcGFkZGluZzogMTBweCAwO1xcclxcblxcdFxcdCAgICBkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRcXHQgICAgYm9yZGVyLXRvcDogdmFyKC0tYm90dG9tQm9yZGVyKTtcXHJcXG5cXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHQubGFiZWxfZGV0YWlsIHtcXHJcXG5cXHRcXHRcXHRcXHRmb250LXNpemU6IDFyZW07XFxyXFxuXFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDUwMDtcXHJcXG5cXHRcXHRcXHRcXHRjb2xvcjogdmFyKC0tZGVlcEdyYXkpO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0LnJldmlld19jb250ZW50IHtcXHJcXG5cXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcblxcdFxcdFxcdGJhY2tncm91bmQ6ICNGRkY7XFxyXFxuXFx0XFx0XFx0bWFyZ2luOiAwIDAgNXB4O1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IDEwcHg7XFxyXFxuXFx0XFx0XFx0aGVpZ2h0OiAzMDBweDtcXHJcXG5cXHRcXHRcXHRyZXNpemU6IG5vbmU7XFxyXFxuXFx0XFx0XFx0bWFyZ2luOiAxMHB4IDA7XFxyXFxuXFx0XFx0XFx0Zm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuXFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0XFx0LXdlYmtpdC10cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4zcyBlYXNlLWluLW91dDtcXHJcXG5cXHQgIFxcdFxcdFxcdC1tb3otdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuXFx0XFx0XFx0XFx0dHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyOiAxcHggc29saWQgI2FhYTtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdFxcclxcblxcdFxcdGJ1dHRvbiB7XFxyXFxuXFx0XFx0ICAgIGJvcmRlcjogMDtcXHJcXG5cXHRcXHQgICAgb3V0bGluZTogbm9uZTtcXHJcXG5cXHRcXHQgICAgcGFkZGluZzogMTBweCAzMHB4O1xcclxcblxcdFxcdCAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcclxcblxcdFxcdCAgICBjb2xvcjogd2hpdGU7XFxyXFxuXFx0XFx0ICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0XFx0ICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcbn1cIixcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUjp3Z2h0QDMwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbjpyb290IHtcXHJcXG5cXHQtLXdyYXBXaWR0aDogMTIwMHB4O1xcclxcblxcdC0tZ3JheTogIzdmOGM4ZDtcXHJcXG5cXHQtLWRlZXBHcmF5OiAjNTM1YzY4O1xcclxcblxcdC0tcmVkOiAjZmYzODVjO1xcclxcblxcdC0tYmx1ZTogbGlnaHRzZWFncmVlbjtcXHJcXG5cXHQtLWdyZWVuOiAjMjNjMzgyO1xcclxcblxcdC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbjogNTBweDtcXHJcXG5cXHQtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZzogMzBweDtcXHJcXG5cXHQtLWRldGFpbEZvbnRTaXplOiBzbWFsbGVyO1xcclxcblxcdC0tYm90dG9tQm9yZGVyOiAxcHggc29saWQgI2VjZjBmMTtcXHJcXG5cXHQtLWJvcmRlclJhZGl1czogMTBweDtcXHJcXG5cXHQtLWNhbGVuZGFyRGF5U2l6ZTogNDBweDtcXHJcXG5cXHQtLWJveFNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjMpO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBCcmVha3BvaW50c1xcclxcbiRicmVha3BvaW50LXRhYmxldDogNzU4cHg7XFxyXFxuJGJyZWFrcG9pbnQtZGVza3RvcDogMTAyNHB4O1xcclxcblxcclxcbi5BQ0NFUFRFRCB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWdyZWVuKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uUEVORElORywgLkNPTVBMRVRFRCB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWdyYXkpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5SRUZVU0VELCAuQ0FOQ0xFRCB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLXJlZCkgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCBcIi4uL3Njc3MvcmV2aWV3Rm9ybS5zY3NzXCI7XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhY2tJY29uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBsb2NhdGlvbi5ocmVmID0gXCIvXCIpOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmV2aWV3Rm9ybS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9