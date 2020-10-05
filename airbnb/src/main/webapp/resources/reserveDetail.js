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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/reserveDetail.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/axios/index.js":
/*!**************************************!*\
  !*** ../node_modules/axios/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "../node_modules/axios/lib/axios.js");

/***/ }),

/***/ "../node_modules/axios/lib/adapters/xhr.js":
/*!*************************************************!*\
  !*** ../node_modules/axios/lib/adapters/xhr.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "../node_modules/axios/lib/core/settle.js");
var cookies = __webpack_require__(/*! ./../helpers/cookies */ "../node_modules/axios/lib/helpers/cookies.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "../node_modules/axios/lib/helpers/buildURL.js");
var buildFullPath = __webpack_require__(/*! ../core/buildFullPath */ "../node_modules/axios/lib/core/buildFullPath.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "../node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "../node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "../node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    if (
      (utils.isBlob(requestData) || utils.isFile(requestData)) &&
      requestData.type
    ) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = unescape(encodeURIComponent(config.auth.password)) || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "../node_modules/axios/lib/axios.js":
/*!******************************************!*\
  !*** ../node_modules/axios/lib/axios.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "../node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "../node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "../node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "../node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "../node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "../node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "../node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "../node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "../node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "../node_modules/axios/lib/cancel/Cancel.js":
/*!**************************************************!*\
  !*** ../node_modules/axios/lib/cancel/Cancel.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "../node_modules/axios/lib/cancel/CancelToken.js":
/*!*******************************************************!*\
  !*** ../node_modules/axios/lib/cancel/CancelToken.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "../node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "../node_modules/axios/lib/cancel/isCancel.js":
/*!****************************************************!*\
  !*** ../node_modules/axios/lib/cancel/isCancel.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "../node_modules/axios/lib/core/Axios.js":
/*!***********************************************!*\
  !*** ../node_modules/axios/lib/core/Axios.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "../node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "../node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "../node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "../node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "../node_modules/axios/lib/core/InterceptorManager.js":
/*!************************************************************!*\
  !*** ../node_modules/axios/lib/core/InterceptorManager.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "../node_modules/axios/lib/core/buildFullPath.js":
/*!*******************************************************!*\
  !*** ../node_modules/axios/lib/core/buildFullPath.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(/*! ../helpers/isAbsoluteURL */ "../node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ../helpers/combineURLs */ "../node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),

/***/ "../node_modules/axios/lib/core/createError.js":
/*!*****************************************************!*\
  !*** ../node_modules/axios/lib/core/createError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "../node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "../node_modules/axios/lib/core/dispatchRequest.js":
/*!*********************************************************!*\
  !*** ../node_modules/axios/lib/core/dispatchRequest.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "../node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "../node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "../node_modules/axios/lib/defaults.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "../node_modules/axios/lib/core/enhanceError.js":
/*!******************************************************!*\
  !*** ../node_modules/axios/lib/core/enhanceError.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "../node_modules/axios/lib/core/mergeConfig.js":
/*!*****************************************************!*\
  !*** ../node_modules/axios/lib/core/mergeConfig.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "../node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),

/***/ "../node_modules/axios/lib/core/settle.js":
/*!************************************************!*\
  !*** ../node_modules/axios/lib/core/settle.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "../node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "../node_modules/axios/lib/core/transformData.js":
/*!*******************************************************!*\
  !*** ../node_modules/axios/lib/core/transformData.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "../node_modules/axios/lib/defaults.js":
/*!*********************************************!*\
  !*** ../node_modules/axios/lib/defaults.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "../node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "../node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "../node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "../node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "../node_modules/process/browser.js")))

/***/ }),

/***/ "../node_modules/axios/lib/helpers/bind.js":
/*!*************************************************!*\
  !*** ../node_modules/axios/lib/helpers/bind.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "../node_modules/axios/lib/helpers/buildURL.js":
/*!*****************************************************!*\
  !*** ../node_modules/axios/lib/helpers/buildURL.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "../node_modules/axios/lib/helpers/combineURLs.js":
/*!********************************************************!*\
  !*** ../node_modules/axios/lib/helpers/combineURLs.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "../node_modules/axios/lib/helpers/cookies.js":
/*!****************************************************!*\
  !*** ../node_modules/axios/lib/helpers/cookies.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "../node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!**********************************************************!*\
  !*** ../node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "../node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!************************************************************!*\
  !*** ../node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "../node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!****************************************************************!*\
  !*** ../node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "../node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "../node_modules/axios/lib/helpers/parseHeaders.js":
/*!*********************************************************!*\
  !*** ../node_modules/axios/lib/helpers/parseHeaders.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "../node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "../node_modules/axios/lib/helpers/spread.js":
/*!***************************************************!*\
  !*** ../node_modules/axios/lib/helpers/spread.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "../node_modules/axios/lib/utils.js":
/*!******************************************!*\
  !*** ../node_modules/axios/lib/utils.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "../node_modules/axios/lib/helpers/bind.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./scss/reserveDetail.scss":
/*!****************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./scss/reserveDetail.scss ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root {\n  --wrapWidth: 1200px;\n  --gray: #7f8c8d;\n  --deepGray: #535c68;\n  --red: #ff385c;\n  --blue: lightseagreen;\n  --green: #23c382;\n  --containerHorizontalMargin: 50px;\n  --containerVerticalPadding: 30px;\n  --detailFontSize: smaller;\n  --bottomBorder: 1px solid #ecf0f1;\n  --borderRadius: 10px;\n  --calendarDaySize: 40px;\n  --boxShadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.ACCEPTED {\n  color: var(--green) !important; }\n\n.PENDING, .COMPLETED {\n  color: var(--gray) !important; }\n\n.REFUSED, .CANCLED {\n  color: var(--red) !important; }\n\nhtml {\n  scroll-behavior: smooth; }\n\n.BtnDisabled {\n  cursor: no-drop !important;\n  opacity: 0.2 !important; }\n\n.wrap {\n  max-width: var(--wrapWidth);\n  margin: 0 auto; }\n  .wrap .header {\n    margin: 0 var(--containerHorizontalMargin);\n    padding: var(--containerVerticalPadding) 0; }\n    .wrap .header i {\n      display: block;\n      cursor: pointer; }\n    .wrap .header .header_title {\n      font-weight: 700;\n      padding: var(--containerVerticalPadding) 0; }\n  .wrap .reserve {\n    display: flex;\n    justify-content: space-between; }\n    .wrap .reserve .main {\n      padding: calc(var(--containerVerticalPadding) / 2) 0;\n      margin: 0 var(--containerHorizontalMargin);\n      width: 65%; }\n      .wrap .reserve .main .room_name {\n        font-weight: 700; }\n      .wrap .reserve .main .room_address {\n        margin: 10px 0; }\n      .wrap .reserve .main .reserve_time_wrap {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin: var(--containerVerticalPadding) 0; }\n        .wrap .reserve .main .reserve_time_wrap .reserve_time .reserve_check {\n          font-weight: 700;\n          font-size: 1.25rem; }\n        .wrap .reserve .main .reserve_time_wrap .reserve_time .room_check {\n          color: var(--gray);\n          font-size: 0.9rem; }\n        .wrap .reserve .main .reserve_time_wrap .reserve_time i {\n          color: var(--gray);\n          font-size: 1.25rem; }\n        .wrap .reserve .main .reserve_time_wrap .reserve_detail .reserve_night {\n          font-weight: 700; }\n        .wrap .reserve .main .reserve_time_wrap .reserve_detail .reserve_guests {\n          color: var(--gray);\n          font-size: 0.8rem; }\n      .wrap .reserve .main .icons {\n        display: flex;\n        padding: var(--containerVerticalPadding) 0;\n        border-top: var(--bottomBorder); }\n        .wrap .reserve .main .icons .icons_item {\n          color: var(--gray); }\n          .wrap .reserve .main .icons .icons_item i,\n          .wrap .reserve .main .icons .icons_item span {\n            padding-right: 15px;\n            cursor: pointer;\n            font-size: 1rem; }\n          .wrap .reserve .main .icons .icons_item:last-of-type i {\n            padding-left: 30px; }\n          .wrap .reserve .main .icons .icons_item:hover {\n            color: black; }\n      .wrap .reserve .main .footer {\n        display: none;\n        justify-content: space-between;\n        margin-bottom: var(--containerVerticalPadding);\n        animation: slide ease 0.3s; }\n        .wrap .reserve .main .footer .reserve_change,\n        .wrap .reserve .main .footer .reserve_cancel {\n          border: 1px solid #cdcdcd;\n          border-radius: 5px;\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n          padding: 30px;\n          width: 45%;\n          display: flex;\n          flex-direction: column;\n          height: 280px; }\n          .wrap .reserve .main .footer .reserve_change i,\n          .wrap .reserve .main .footer .reserve_cancel i {\n            color: var(--blue);\n            font-size: 2rem;\n            margin-bottom: 0.5em; }\n          .wrap .reserve .main .footer .reserve_change .footer_title,\n          .wrap .reserve .main .footer .reserve_cancel .footer_title {\n            font-weight: 700; }\n          .wrap .reserve .main .footer .reserve_change .footer_body,\n          .wrap .reserve .main .footer .reserve_cancel .footer_body {\n            color: var(--gray); }\n          .wrap .reserve .main .footer .reserve_change a,\n          .wrap .reserve .main .footer .reserve_cancel a {\n            margin-top: auto; }\n            .wrap .reserve .main .footer .reserve_change a button,\n            .wrap .reserve .main .footer .reserve_cancel a button {\n              all: unset;\n              padding: 0.5em 1em;\n              color: var(--blue);\n              border: 2px solid var(--blue);\n              border-radius: 5px;\n              cursor: pointer;\n              font-weight: 700; }\n      .wrap .reserve .main .change_step-1 {\n        padding: var(--containerVerticalPadding) 0;\n        border-top: var(--bottomBorder);\n        display: none;\n        animation: slide ease .3s; }\n        .wrap .reserve .main .change_step-1 .change_step_title {\n          font-size: 2rem;\n          font-weight: 700; }\n        .wrap .reserve .main .change_step-1 .reservation_people {\n          font-size: 0.9rem;\n          height: 50px;\n          margin: 30px 0; }\n          .wrap .reserve .main .change_step-1 .reservation_people .reservation_display {\n            position: relative; }\n            .wrap .reserve .main .change_step-1 .reservation_people .reservation_display .guest_counter_box {\n              position: absolute;\n              right: 0;\n              top: -10px; }\n              .wrap .reserve .main .change_step-1 .reservation_people .reservation_display .guest_counter_box .display_btn_icon {\n                display: inline-block;\n                border: 1px solid black;\n                border-radius: 50%;\n                width: 30px;\n                height: 30px;\n                line-height: 30px;\n                text-align: center;\n                margin-left: 10px;\n                opacity: 0.5;\n                color: black;\n                cursor: pointer; }\n                .wrap .reserve .main .change_step-1 .reservation_people .reservation_display .guest_counter_box .display_btn_icon:hover {\n                  opacity: 1; }\n                .wrap .reserve .main .change_step-1 .reservation_people .reservation_display .guest_counter_box .display_btn_icon:active {\n                  transform: scale(0.95); }\n        .wrap .reserve .main .change_step-1 .reservation_main .reservation_form {\n          background-color: white;\n          width: 660px;\n          box-shadow: var(--boxShadow);\n          border-radius: var(--borderRadius);\n          padding: 20px 30px; }\n          .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_header {\n            display: flex; }\n            .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_header .header_text {\n              width: 55%; }\n              .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_header .header_text .header_title {\n                font-weight: 700;\n                font-size: 1.5rem; }\n              .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_header .header_text .header_body {\n                color: var(--gray);\n                font-weight: 300; }\n            .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_header .header_inputs {\n              width: 45%;\n              display: flex;\n              border: var(--bottomBorder);\n              border-radius: var(--borderRadius);\n              background-color: #f7f7f7; }\n              .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_header .header_inputs .input_item {\n                font-size: 0.8rem;\n                padding: 10px;\n                border-radius: var(--borderRadius);\n                width: 50%; }\n                .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_header .header_inputs .input_item .reservation_input {\n                  all: unset;\n                  font-weight: 300;\n                  cursor: text; }\n          .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_main {\n            position: relative;\n            margin-top: var(--containerHorizontalMargin);\n            margin-bottom: calc(var(--containerHorizontalMargin) / 2); }\n            .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_main .pagination_btns {\n              position: absolute;\n              top: 0;\n              width: 100%;\n              display: flex;\n              justify-content: space-between; }\n              .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_main .pagination_btns .pagination_btn {\n                all: unset;\n                cursor: pointer;\n                font-size: 1.5rem;\n                line-height: 1.5rem; }\n            .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_main .calendar_wrap {\n              width: 100%;\n              display: flex;\n              justify-content: space-between; }\n              .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_main .calendar_wrap .calendar_item {\n                width: 48%; }\n                .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_main .calendar_wrap .calendar_item .calendar_month {\n                  width: 100%;\n                  text-align: center;\n                  margin-bottom: 15px;\n                  font-weight: 700; }\n                .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row {\n                  display: flex; }\n                  .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row .calendar_day {\n                    width: var(--calendarDaySize);\n                    height: var(--calendarDaySize);\n                    text-align: center; }\n                    .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row .calendar_day.available_day {\n                      background-color: #f5f6fa; }\n                    .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row .calendar_day span {\n                      display: block;\n                      width: 100%;\n                      height: 100%;\n                      line-height: var(--calendarDaySize); }\n                      .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row .calendar_day span.invalid_day {\n                        color: var(--gray);\n                        text-decoration: line-through; }\n                      .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row .calendar_day span.valid_day:hover {\n                        border: 1px solid black;\n                        border-radius: 50%;\n                        cursor: pointer; }\n                    .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row .calendar_day.clicked.available_day {\n                      border-radius: 50% 0 0 50%; }\n                    .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row .calendar_day.clicked span {\n                      background-color: black !important;\n                      color: white;\n                      border: 0 !important;\n                      border-radius: 50%;\n                      cursor: default !important; }\n                  .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row .dayname {\n                    font-size: 0.8rem;\n                    color: var(--gray); }\n          .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_footer {\n            text-align: end; }\n            .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_footer .input_reset {\n              all: unset;\n              font-size: 0.9rem;\n              border-bottom: 1px solid black;\n              display: inline-block;\n              line-height: 0.85;\n              text-shadow: 1px 1px var(--backgroudColor), 1px -1px var(--backgroudColor), -1px 1px var(--backgroudColor), -1px -1px var(--backgroudColor);\n              cursor: pointer; }\n            .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_footer .form_update {\n              padding: 10px 15px;\n              margin: 0 15px;\n              background-color: black;\n              color: white;\n              border: 0;\n              border-radius: var(--borderRadius);\n              font-weight: 700;\n              cursor: pointer;\n              outline: none; }\n      .wrap .reserve .main .cancel_step-1 {\n        padding: var(--containerVerticalPadding) 0;\n        border-top: var(--bottomBorder);\n        display: none;\n        animation: slide ease .3s; }\n        .wrap .reserve .main .cancel_step-1 .cancel_step_title {\n          font-size: 2rem;\n          font-weight: 700; }\n        .wrap .reserve .main .cancel_step-1 .cancel_step_body {\n          margin: var(--containerHorizontalMargin) 0; }\n        .wrap .reserve .main .cancel_step-1 small {\n          display: block; }\n          .wrap .reserve .main .cancel_step-1 small span {\n            border-bottom: 1px solid black;\n            display: inline-block;\n            line-height: 0.85;\n            text-shadow: 1px 1px var(--backgroudColor), 1px -1px var(--backgroudColor), -1px 1px var(--backgroudColor), -1px -1px var(--backgroudColor);\n            color: var(--blue); }\n        .wrap .reserve .main .cancel_step-1 form {\n          display: flex; }\n          .wrap .reserve .main .cancel_step-1 form .cancel_step_btn {\n            padding: 10px 15px;\n            margin-left: auto;\n            background-color: black;\n            color: white;\n            border: 0;\n            border-radius: var(--borderRadius);\n            font-weight: 700;\n            cursor: pointer;\n            outline: none; }\n    .wrap .reserve .aside {\n      position: relative;\n      width: 30%;\n      margin: 0 var(--containerHorizontalMargin); }\n      .wrap .reserve .aside .bills {\n        position: sticky;\n        top: 100px;\n        margin-bottom: 50px; }\n        .wrap .reserve .aside .bills .room_detail {\n          display: block;\n          margin-bottom: 20px; }\n        .wrap .reserve .aside .bills .price,\n        .wrap .reserve .aside .bills .service {\n          display: flex;\n          justify-content: space-between; }\n        .wrap .reserve .aside .bills .total_price {\n          font-size: 3rem;\n          font-weight: 700; }\n        .wrap .reserve .aside .bills .status {\n          margin: var(--containerVerticalPadding) 0; }\n        .wrap .reserve .aside .bills .delete_info {\n          display: none; }\n          .wrap .reserve .aside .bills .delete_info * {\n            font-weight: 700; }\n          .wrap .reserve .aside .bills .delete_info .refund_price-value {\n            font-size: 3em;\n            color: var(--green); }\n\n@keyframes slide {\n  from {\n    transform: translateX(-100px);\n    opacity: 0; }\n  to {\n    transform: translateX(0px);\n    opacity: 1; } }\n\n.body_header ul .airbnb_icon,\n.body_header ul .header_profile .profile_img {\n  color: var(--blue); }\n\n.body_header ul .room_search i {\n  background-color: var(--blue); }\n", "",{"version":3,"sources":["webpack://scss/__base.scss","webpack://scss/reserveDetail.scss","webpack://scss/__mixins.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;700&display=swap\");\r\n:root {\r\n\t--wrapWidth: 1200px;\r\n\t--gray: #7f8c8d;\r\n\t--deepGray: #535c68;\r\n\t--red: #ff385c;\r\n\t--blue: lightseagreen;\r\n\t--green: #23c382;\r\n\t--containerHorizontalMargin: 50px;\r\n\t--containerVerticalPadding: 30px;\r\n\t--detailFontSize: smaller;\r\n\t--bottomBorder: 1px solid #ecf0f1;\r\n\t--borderRadius: 10px;\r\n\t--calendarDaySize: 40px;\r\n\t--boxShadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n}\r\n\r\n.ACCEPTED {\r\n\tcolor: var(--green) !important;\r\n}\r\n\r\n.PENDING, .COMPLETED {\r\n\tcolor: var(--gray) !important;\r\n}\r\n\r\n.REFUSED, .CANCLED {\r\n\tcolor: var(--red) !important;\r\n}\r\n","@import \"./_base\";\r\n@import \"./_mixins\";\r\n\r\nhtml {\r\n\tscroll-behavior: smooth;\r\n}\r\n\r\n.BtnDisabled {\r\n\tcursor: no-drop !important;\r\n\topacity: 0.2 !important;\r\n}\r\n\r\n.wrap {\r\n\tmax-width: var(--wrapWidth);\r\n\tmargin: 0 auto;\r\n\r\n\t.header {\r\n\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\t\tpadding: var(--containerVerticalPadding) 0;\r\n\r\n\t\ti {\r\n\t\t\tdisplay: block;\r\n\t\t\tcursor: pointer;\r\n\t\t}\r\n\r\n\t\t.header_title {\r\n\t\t\tfont-weight: 700;\r\n\t\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\t}\r\n\t}\r\n\r\n\t.reserve {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\r\n\t\t.main {\r\n\t\t\tpadding: calc(var(--containerVerticalPadding) / 2) 0;\r\n\t\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\t\t\twidth: 65%;\r\n\r\n\t\t\t.room_name {\r\n\t\t\t\tfont-weight: 700;\r\n\t\t\t}\r\n\r\n\t\t\t.room_address {\r\n\t\t\t\tmargin: 10px 0;\r\n\t\t\t}\r\n\r\n\t\t\t.reserve_time_wrap {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tjustify-content: space-between;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tmargin: var(--containerVerticalPadding) 0;\r\n\r\n\t\t\t\t.reserve_time {\r\n\t\t\t\t\t.reserve_check {\r\n\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t\tfont-size: 1.25rem;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.room_check {\r\n\t\t\t\t\t\tcolor: var(--gray);\r\n\t\t\t\t\t\tfont-size: 0.9rem;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\ti {\r\n\t\t\t\t\t\tcolor: var(--gray);\r\n\t\t\t\t\t\tfont-size: 1.25rem;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t.reserve_detail {\r\n\t\t\t\t\t.reserve_night {\r\n\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.reserve_guests {\r\n\t\t\t\t\t\tcolor: var(--gray);\r\n\t\t\t\t\t\tfont-size: 0.8rem;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t.icons {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\t\t\tborder-top: var(--bottomBorder);\r\n\r\n\t\t\t\t.icons_item {\r\n\t\t\t\t\tcolor: var(--gray);\r\n\r\n\t\t\t\t\ti,\r\n\t\t\t\t\tspan {\r\n\t\t\t\t\t\tpadding-right: 15px;\r\n\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\tfont-size: 1rem;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t&:last-of-type i {\r\n\t\t\t\t\t\tpadding-left: 30px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t&:hover {\r\n\t\t\t\t\t\tcolor: black;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t.footer {\r\n\t\t\t\tdisplay: none;\r\n\t\t\t\tjustify-content: space-between;\r\n\t\t\t\tmargin-bottom: var(--containerVerticalPadding);\r\n\t\t\t\tanimation: slide ease 0.3s;\r\n\r\n\t\t\t\t.reserve_change,\r\n\t\t\t\t.reserve_cancel {\r\n\t\t\t\t\tborder: 1px solid lighten(gray, 30%);\r\n\t\t\t\t\tborder-radius: 5px;\r\n\t\t\t\t\tbox-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n\t\t\t\t\tpadding: 30px;\r\n\t\t\t\t\twidth: 45%;\r\n\t\t\t\t    display: flex;\r\n\t\t\t\t    flex-direction: column;\r\n\t\t\t\t    height: 280px;\r\n\r\n\t\t\t\t\ti {\r\n\t\t\t\t\t\tcolor: var(--blue);\r\n\t\t\t\t\t\tfont-size: 2rem;\r\n\t\t\t\t\t\tmargin-bottom: 0.5em;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.footer_title {\r\n\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.footer_body {\r\n\t\t\t\t\t\tcolor: var(--gray);\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\ta {\r\n\t\t\t\t\t\tmargin-top: auto;\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\tbutton {\r\n\t\t\t\t\t\t\tall: unset;\r\n\t\t\t\t\t\t\tpadding: 0.5em 1em;\r\n\t\t\t\t\t\t\tcolor: var(--blue);\r\n\t\t\t\t\t\t\tborder: 2px solid var(--blue);\r\n\t\t\t\t\t\t\tborder-radius: 5px;\r\n\t\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t.change_step-1 {\r\n\t\t\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\t\t\tborder-top: var(--bottomBorder);\r\n\t\t\t\tdisplay: none;\r\n\t\t\t\tanimation: slide ease .3s;\r\n\t\r\n\t\t\t\t.change_step_title {\r\n\t\t\t\t\tfont-size: 2rem;\r\n\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t.reservation_people {\r\n\t\t\t\t\t    font-size: 0.9rem;\r\n\t\t\t\t\t    height: 50px;\r\n\t\t\t\t\t    margin: 30px 0;\r\n\r\n\t\t\t\t\t.reservation_display {\r\n\t\t\t\t\t\tposition: relative;\r\n\r\n\t\t\t\t\t\t.guest_counter_box {\r\n\t\t\t\t\t\t\tposition: absolute;\r\n\t\t\t\t\t\t\tright: 0;\r\n\t\t\t\t\t\t\ttop: -10px;\r\n\r\n\t\t\t\t\t\t\t.display_btn_icon {\r\n\t\t\t\t\t\t\t\tdisplay: inline-block;\r\n\t\t\t\t\t\t\t\tborder: 1px solid black;\r\n\t\t\t\t\t\t\t\tborder-radius: 50%;\r\n\t\t\t\t\t\t\t\twidth: 30px;\r\n\t\t\t\t\t\t\t\theight: 30px;\r\n\t\t\t\t\t\t\t\tline-height: 30px;\r\n\t\t\t\t\t\t\t\ttext-align: center;\r\n\t\t\t\t\t\t\t\tmargin-left: 10px;\r\n\t\t\t\t\t\t\t\topacity: 0.5;\r\n\t\t\t\t\t\t\t\tcolor: black;\r\n\t\t\t\t\t\t\t\tcursor: pointer;\r\n\r\n\t\t\t\t\t\t\t\t&:hover {\r\n\t\t\t\t\t\t\t\t\topacity: 1;\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t&:active {\r\n\t\t\t\t\t\t\t\t\ttransform: scale(0.95);\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\t.reservation_main {\r\n\t\r\n\t\t\t\t\t.reservation_form {\r\n\t\t\t\t\t\tbackground-color: white;\r\n\t\t\t\t\t\twidth: 660px;\r\n\t\t\t\t\t\tbox-shadow: var(--boxShadow);\r\n\t\t\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\t\t\tpadding: 20px 30px;\r\n\t\t\r\n\t\t\t\t\t\t.form_header {\r\n\t\t\t\t\t\t\tdisplay: flex;\r\n\t\t\r\n\t\t\t\t\t\t\t.header_text {\r\n\t\t\t\t\t\t\t\twidth: 55%;\r\n\t\t\r\n\t\t\t\t\t\t\t\t.header_title {\r\n\t\t\t\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t\t\t\t\tfont-size: 1.5rem;\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t.header_body {\r\n\t\t\t\t\t\t\t\t\tcolor: var(--gray);\r\n\t\t\t\t\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\r\n\t\t\t\t\t\t\t.header_inputs {\r\n\t\t\t\t\t\t\t\twidth: 45%;\r\n\t\t\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\t\t\tborder: var(--bottomBorder);\r\n\t\t\t\t\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\t\t\t\t\tbackground-color: #f7f7f7;\r\n\t\t\r\n\t\t\t\t\t\t\t\t.input_item {\r\n\t\t\t\t\t\t\t\t\tfont-size: 0.8rem;\r\n\t\t\t\t\t\t\t\t\tpadding: 10px;\r\n\t\t\t\t\t\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\t\t\t\t\t\twidth: 50%;\r\n\t\t\r\n\t\t\t\t\t\t\t\t\t.reservation_input {\r\n\t\t\t\t\t\t\t\t\t\tall: unset;\r\n\t\t\t\t\t\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\t\t\t\t\t\tcursor: text;\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\r\n\t\t\t\t\t\t.form_main {\r\n\t\t\t\t\t\t\tposition: relative;\r\n\t\t\t\t\t\t\tmargin-top: var(--containerHorizontalMargin);\r\n\t\t\t\t\t\t\tmargin-bottom: calc(var(--containerHorizontalMargin) / 2);\r\n\t\t\r\n\t\t\t\t\t\t\t.pagination_btns {\r\n\t\t\t\t\t\t\t\tposition: absolute;\r\n\t\t\t\t\t\t\t\ttop: 0;\r\n\t\t\t\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\t\t\tjustify-content: space-between;\r\n\t\t\r\n\t\t\t\t\t\t\t\t.pagination_btn {\r\n\t\t\t\t\t\t\t\t\tall: unset;\r\n\t\t\t\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\t\t\t\tfont-size: 1.5rem;\r\n\t\t\t\t\t\t\t\t\tline-height: 1.5rem;\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\r\n\t\t\t\t\t\t\t.calendar_wrap {\r\n\t\t\t\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\t\t\tjustify-content: space-between;\r\n\t\t\r\n\t\t\t\t\t\t\t\t.calendar_item {\r\n\t\t\t\t\t\t\t\t\twidth: 48%;\r\n\t\t\r\n\t\t\t\t\t\t\t\t\t.calendar_month {\r\n\t\t\t\t\t\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\t\t\t\t\t\ttext-align: center;\r\n\t\t\t\t\t\t\t\t\t\tmargin-bottom: 15px;\r\n\t\t\t\t\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\r\n\t\t\t\t\t\t\t\t\t.calendar_row {\r\n\t\t\t\t\t\t\t\t\t\tdisplay: flex;\r\n\t\t\r\n\t\t\t\t\t\t\t\t\t\t.calendar_day {\r\n\t\t\t\t\t\t\t\t\t\t\twidth: var(--calendarDaySize);\r\n\t\t\t\t\t\t\t\t\t\t\theight: var(--calendarDaySize);\r\n\t\t\t\t\t\t\t\t\t\t\ttext-align: center;\r\n\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t&.available_day {\r\n\t\t\t\t\t\t\t\t\t\t\t\tbackground-color: #f5f6fa;\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\r\n\t\t\t\t\t\t\t\t\t\t\tspan {\r\n\t\t\t\t\t\t\t\t\t\t\t\tdisplay: block;\r\n\t\t\t\t\t\t\t\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\t\t\t\t\t\t\t\theight: 100%;\r\n\t\t\t\t\t\t\t\t\t\t\t\tline-height: var(--calendarDaySize);\r\n\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t&.invalid_day {\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tcolor: var(--gray);\r\n\t\t\t\t\t\t\t\t\t\t\t\t\ttext-decoration: line-through;\r\n\t\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t&.valid_day:hover {\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tborder: 1px solid black;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tborder-radius: 50%;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t&.clicked {\r\n\t\t\t\t\t\t\t\t\t\t\t\t&.available_day {\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tborder-radius: 50% 0 0 50%;\r\n\t\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\tspan {\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tbackground-color: black !important;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tcolor: white;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tborder: 0 !important;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tborder-radius: 50%;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tcursor: default !important;\r\n\t\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\r\n\t\t\t\t\t\t\t\t\t\t.dayname {\r\n\t\t\t\t\t\t\t\t\t\t\tfont-size: 0.8rem;\r\n\t\t\t\t\t\t\t\t\t\t\tcolor: var(--gray);\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\r\n\t\t\t\t\t\t.form_footer {\r\n\t\t\t\t\t\t\ttext-align: end;\r\n\t\t\r\n\t\t\t\t\t\t\t.input_reset {\r\n\t\t\t\t\t\t\t\tall: unset;\r\n\t\t\t\t\t\t\t\tfont-size: 0.9rem;\r\n\t\t\t\t\t\t\t\t@include underline;\r\n\t\t\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\t\t}\r\n\t\t\r\n\t\t\t\t\t\t\t.form_update {\r\n\t\t\t\t\t\t\t\tpadding: 10px 15px;\r\n\t\t\t\t\t\t\t\tmargin: 0 15px;\r\n\t\t\t\t\t\t\t\tbackground-color: black;\r\n\t\t\t\t\t\t\t\tcolor: white;\r\n\t\t\t\t\t\t\t\tborder: 0;\r\n\t\t\t\t\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\t\t\toutline: none;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t.cancel_step-1 {\r\n\t\t\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\t\t\tborder-top: var(--bottomBorder);\r\n\t\t\t\tdisplay: none;\r\n\t\t\t\tanimation: slide ease .3s;\r\n\t\r\n\t\t\t\t.cancel_step_title {\r\n\t\t\t\t\tfont-size: 2rem;\r\n\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t.cancel_step_body {\r\n\t\t\t\t\tmargin: var(--containerHorizontalMargin) 0;\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\tsmall {\r\n\t\t\t\t\tdisplay: block;\r\n\t\t\t\t\t\r\n\t\t\t\t\tspan {\r\n\t\t\t\t\t\t@include underline;\r\n\t\t\t\t\t\tcolor: var(--blue);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\tform {\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\r\n\t\t\t\t\t.cancel_step_btn {\r\n\t\t\t\t\t\tpadding: 10px 15px;\r\n\t\t\t\t\t\tmargin-left: auto;\r\n\t\t\t\t\t\tbackground-color: black;\r\n\t\t\t\t\t\tcolor: white;\r\n\t\t\t\t\t\tborder: 0;\r\n\t\t\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\toutline: none;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.aside {\r\n\t\t\tposition: relative;\r\n\t\t\twidth: 30%;\r\n\t\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\t\t\t\r\n\t\t\t.bills {\r\n\t\t\t\tposition: sticky;\r\n\t\t\t\ttop: 100px;\r\n\t\t\t\tmargin-bottom: 50px;\r\n\t\t\t\t\r\n\t\t\t\t.room_detail {\r\n\t\t\t\t\tdisplay: block;\r\n\t\t\t\t\tmargin-bottom: 20px;\r\n\t\t\t\t}\r\n\t\r\n\t\t\t\t.price,\r\n\t\t\t\t.service {\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\tjustify-content: space-between;\r\n\t\t\t\t}\r\n\t\r\n\t\t\t\t.total_price {\r\n\t\t\t\t\tfont-size: 3rem;\r\n\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t}\r\n\t\r\n\t\t\t\t.status {\r\n\t\t\t\t\tmargin: var(--containerVerticalPadding) 0;\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t.delete_info {\r\n\t\t\t\t\tdisplay: none;\r\n\t\t\t\t\t\r\n\t\t\t\t\t* {\r\n\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.refund_price-value {\r\n\t\t\t\t\t    font-size: 3em;\r\n\t\t\t\t\t    color: var(--green);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t}\r\n\t}\r\n\r\n\t@keyframes slide {\r\n\t\tfrom {\r\n\t\t\ttransform: translateX(-100px);\r\n\t\t\topacity: 0;\r\n\t\t}\r\n\t\tto {\r\n\t\t\ttransform: translateX(0px);\r\n\t\t\topacity: 1;\r\n\t\t}\r\n\t}\r\n}\r\n\r\n@include changeHeaderColor;\r\n","@mixin underline {\r\n\tborder-bottom: 1px solid black;\r\n\tdisplay: inline-block;\r\n\tline-height: 0.85;\r\n\ttext-shadow: 1px 1px var(--backgroudColor), 1px -1px var(--backgroudColor),\r\n\t\t-1px 1px var(--backgroudColor), -1px -1px var(--backgroudColor);\r\n\t@content;\r\n}\r\n\r\n@mixin star($font-size) {\r\n\tcolor: var(--red);\r\n\tfont-size: $font-size;\r\n}\r\n\r\n@mixin reservation_item {\r\n\tflex: 1 1 50%;\r\n\tpadding: 5px 10px;\r\n\tfont-size: 0.9rem;\r\n\theight: 50px;\r\n\r\n\t.reservation_display {\r\n\t\tcolor: var(--gray);\r\n\t\tfont-weight: 300;\r\n\t}\r\n}\r\n\r\n@mixin facility_rule_item {\r\n\tmargin: 15px 0;\r\n}\r\n\r\n@mixin facility_rule_icon {\r\n\tfont-size: 20px;\r\n\twidth: 40px;\r\n\ttext-align: center;\r\n}\r\n\r\n@mixin facility_rule_description {\r\n\tmargin-left: 15px;\r\n\tfont-weight: 300;\r\n}\r\n\r\n@mixin changeHeaderColor {\r\n\t.body_header ul .airbnb_icon,\r\n\t.body_header ul .header_profile .profile_img {\r\n\t\tcolor: var(--blue);\r\n\t}\r\n\t\r\n\t.body_header ul .room_search i {\r\n\t\tbackground-color: var(--blue);\r\n}\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "../node_modules/process/browser.js":
/*!******************************************!*\
  !*** ../node_modules/process/browser.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


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

/***/ "./js/reserveDetail.js":
/*!*****************************!*\
  !*** ./js/reserveDetail.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_reserveDetail_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/reserveDetail.scss */ "./scss/reserveDetail.scss");
/* harmony import */ var _scss_reserveDetail_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_reserveDetail_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./js/util.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);




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
		getReservedDays: async () => {
			const url = window.location.pathname;
			const reserveId = url.match(/(?<=reservations\/)[\d]*/)[0];
			const roomId = document.querySelector("#roomId").value;
			const {data} = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(
				`http://localhost:8080/api/room/${roomId}`
			);
			return data.filter(el => el.reserveId != reserveId).map(el => el.day);
		},
		getReservePayload: () => {
			// 1. GET DB로부터 숙소 하루당 가격
			const roomPrice = document.querySelector("#roomPriceDB").value;

			// 2. 계산
			const roomNight =
				(new Date(state.checkOutId) - new Date(state.checkInId)) /
				(1000 * 60 * 60 * 24);
			const totalPrice = roomNight * roomPrice;
			return {
				roomPrice,
				roomNight,
				totalPrice,
			};
		},
		getMaxPerson: () => {
			const maxPerson = document.querySelector("#roomMaxPersonDB").value;
			return maxPerson;
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
		reservePopupContainer: "#reservationForm",
		MonthYear: ".calendar_month",
		nextPage: "#nextPage",
		prevPage: "#prevPage",
		calendarBox: ".calendar_box",
		calendarContainer: "#calendarWrap",
		checkInInput: "#checkInInput",
		checkOutInput: "#checkOutInput",
		validDay: ".valid_day",
		guestCounterBox: "#guestCounterBox",
		guestCount: "#guestCount",
		resetInput: "#resetInput",
		guestPlusBtn: "#guestPlusBtn",
		guestMinusBtn: "#guestMinusBtn",
		roomPrice: "#roomPrice",
		roomNight: "#roomNight",
		totalPrice: "#totalPrice",
		updateBtn: "#formUpdateBtn",
		footer: "#footer",
		updateForm: "#changeStep1",
		cancelForm: "#deleteStep1",
		status: "#reserveStatus",
		deleteInfo: "#deleteInfo",
	};

	const displayMonth = (year, month) => {
		const [curMonth, nextMonth] = document.querySelectorAll(
			DOMString.MonthYear
		);
		curMonth.textContent = `${month}월 ${year}`;
		nextMonth.textContent =
			month === 12 ? `1월 ${year + 1}` : `${month + 1}월 ${year}`;
	};

	const setButtonStyle = (year, month) => {
		const prevBtnNode = document.querySelector(DOMString.prevPage);
		const CL_DISABLED = "BtnDisabled";
		if (
			year === state.today.getFullYear() &&
			month === state.today.getMonth() + 1
		) {
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
			<span class="${CL_DAY}" id="${month == 13? year+1: year}-${month == 13? "01": _util__WEBPACK_IMPORTED_MODULE_1__["setMonthCount"](month)}-${_util__WEBPACK_IMPORTED_MODULE_1__["setFixDayCount"](day)}">
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

	const addInvalidDayClass = (cleanedDays) => {
		const CL_VALID_DAY = "valid_day";
		const CL_INVALID_DAY = "invalid_day";

		cleanedDays.forEach((el) => {
			el.classList.add(CL_INVALID_DAY);
			el.classList.remove(CL_VALID_DAY);
		});
	};

	return {
		getDOMString: () => DOMString,
		closePopup: (event) => {
			if (event) event.preventDefault();
		},

		renderCalendar: (year, month) => {
			displayMonth(year, month);
			setButtonStyle(year, month);

			document
				.querySelector(DOMString.curCalendar)
				.insertAdjacentHTML(
					"beforeend",
					createCalendarHTML(year, month)
				);
			document
				.querySelector(DOMString.nextCalendar)
				.insertAdjacentHTML(
					"beforeend",
					createCalendarHTML(year, month + 1)
				);
		},

		clearCalendar: () => {
			const [curCalendar, nextCalendar] = document.querySelectorAll(
				DOMString.calendarBox
			);
			curCalendar.parentNode.removeChild(curCalendar);
			nextCalendar.parentNode.removeChild(nextCalendar);
		},

		beExceptReservedDay: (reservedDays) => {
			const calendarWrap = document.querySelector(
				DOMString.calendarContainer
			);
			const renderedDays = Array.from(
				calendarWrap.querySelectorAll("span")
			);
			const cleanedDays = renderedDays.filter((day) =>
				reservedDays.includes(day.id)
			);
			addInvalidDayClass(cleanedDays);
		},

		renderInvalidDay: (clickedId, reservedDays = null) => {
			const calendarWrap = document.querySelector(
				DOMString.calendarContainer
			);
			const days = Array.from(calendarWrap.querySelectorAll("span"));
			let cleanedDays;

			if (state.checkInId === "") {
				// 1. GET 클릭된 날짜 이후의 예약된 제일 빠른 날짜
				const latestDay = reservedDays
					.filter((daystr) => clickedId < daystr)
					.sort()[0];
				// 2. 체크아웃 불가능한 날짜 마크
				cleanedDays = days.filter(
					(day) => day.id < clickedId || latestDay < day.id
				);
				// 3. 예외) 체크인 날짜 앞뒤로 불가능한 날짜일 경우
				const clickedDate = new Date(clickedId);
				clickedDate.setDate(clickedDate.getDate() + 1);
				const onePlusDay = clickedDate.toISOString().split('T')[0];
				if (reservedDays.includes(onePlusDay)) {
					document.getElementById(onePlusDay).classList.remove("invalid_day");
					document.getElementById(onePlusDay).classList.add("valid_day");
				}
				addInvalidDayClass(cleanedDays);
			} else {
				cleanedDays = days.filter((day) => day.id > clickedId);
				addInvalidDayClass(cleanedDays);
			}
		},

		setCheckInInput: (id) =>
			(document.querySelector(
				DOMString.checkInInput
			).value = _util__WEBPACK_IMPORTED_MODULE_1__["formatDashToDot"](id)),
		setCheckOutInput: (id) =>
			(document.querySelector(
				DOMString.checkOutInput
			).value = _util__WEBPACK_IMPORTED_MODULE_1__["formatDashToDot"](id)),

		renderDayBackground: (id) => {
			const days = Array.from(
				document
					.querySelector(DOMString.calendarContainer)
					.querySelectorAll(DOMString.validDay)
			);
			const CL_AVAIL_DAY = "available_day";
			days.map((el) => {
				el.parentNode.classList.remove(CL_AVAIL_DAY);
				return el;
			})
				.filter((el) => state.checkInId <= el.id && el.id <= id)
				.forEach((el) => {
					el.parentNode.classList.add(CL_AVAIL_DAY);
				});
		},
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

		getGuestCount: () =>
			document.querySelector(DOMString.guestCount).textContent,

		renderPrice: (payload) => {
			const { roomPrice, roomNight, totalPrice } = payload;
			document.querySelector(DOMString.roomNight).textContent =
				roomNight + "박";
			document.querySelector(
				DOMString.roomPrice
			).textContent = _util__WEBPACK_IMPORTED_MODULE_1__["formatWon"](roomPrice);
			document.querySelector(
				DOMString.totalPrice
			).textContent = _util__WEBPACK_IMPORTED_MODULE_1__["formatWon"](totalPrice + 5000);
		},
		
		displayUpdateDisplayer: () => {
			const status = document.querySelector(DOMString.status).classList;
			if (status.contains("PENDING")) {
				document.querySelector(DOMString.footer).style.display = "flex";				
			} else {
				alert("예약대기중 상태가 아니면 변경할 수 없습니다.")			
			}
		},
		
		displayUpdateForm: () => {
			const updateForm = document.querySelector(DOMString.updateForm);
			const cancelForm = document.querySelector(DOMString.cancelForm);
			cancelForm.style.display = "none";
			updateForm.style.display = "block";
		},
		
		displayCancelForm: () => {
			const updateForm = document.querySelector(DOMString.updateForm);
			const cancelForm = document.querySelector(DOMString.cancelForm);
			updateForm.style.display = "none";
			cancelForm.style.display = "block";
		},
		
		displayRefundPrice: () => document.querySelector(DOMString.deleteInfo).style.display = "block",
		clearRefundPrice: () => document.querySelector(DOMString.deleteInfo).style.display = "none",
		
	};
})();

/*
 ************************** Controller
 */

const Controller = ((DataCtrl, UICtrl) => {
	const DOM = UICtrl.getDOMString();
	const setEventListeners = () => {
		// 업데이트 버튼 클릭
		document
			.querySelector(DOM.updateBtn)
			.addEventListener("click", submitReservationForm);
		// 달력 넘기기 클릭
		document
			.querySelector(DOM.prevPage)
			.addEventListener("click", onClickPageBtn);
		document
			.querySelector(DOM.nextPage)
			.addEventListener("click", onClickPageBtn);
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
		document
			.querySelector(DOM.resetInput)
			.addEventListener("click", onClickResetBtn);
		// 업데이트 아이콘 클릭
		document.querySelector("#updateDisplayer").addEventListener("click", onClickUpdateDisplayer);
		// 업데이트 다음 버튼 클릭
		document.querySelector("#updateNextBtn").addEventListener("click", onClickUpdateNextBtn);
		// 뒤로가기 버튼 클릭
		document.querySelector("#backIcon").addEventListener("click", () => location.href = location.pathname.match(/.*reservations/)[0]);
		// 예약 취소 다음 버튼 클릭
		document.querySelector("#cancelNextBtn").addEventListener("click", () => {
			UICtrl.displayCancelForm();
			UICtrl.displayRefundPrice();
		});
	};

	const clearState = () => {
		state = { ...state, checkInId: "", checkOutId: "" };
	};

	const onClickResetBtn = () => {
		// 1. staate 초기화
		clearState();
		// 2. UI 초기화 및 동기화
		UICtrl.clearCalendar();
		// 3. 날짜 폼 초기화
		setInitailCalendar();
	};

	const onClickGuestCounterBox = (event) =>
		UICtrl.renderGuestCount(event, DataCtrl.getMaxPerson());

	const onMouseoverCalContainer = (event) => {
		if (state.checkInId !== "" && state.checkOutId == "") {
			if (event.target.matches(DOM.validDay)) {
				const id = event.target.id;
				UICtrl.renderDayBackground(id);
			}
		}
	};

	const onClickCalContainer = async (event) => {
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
				
				state.checkOutId = id;
				// 3. 금액 계산
				const payload = DataCtrl.getReservePayload();
				// 4. 금액 렌더링
				UICtrl.renderPrice(payload);
			}
			//	체크인 클릭
			else if (state.checkInId === "") {
				const reservedDays = await DataCtrl.getReservedDays();
				// 1. 불가능한 날짜 마크 표시
				UICtrl.renderInvalidDay(id, reservedDays);
				// 2. 체크인 인풋에 날짜 동기화
				UICtrl.setCheckInInput(id);
				state.checkInId = id;
			}
		}
	};

	const onClickPageBtn = async (event) => {
		event.preventDefault();
		UICtrl.clearCalendar();

		const isPrevBtn = event.target.matches(DOM.prevPage);

		// prevBtn, nextBtn 분기 -> 달력 월 증감
		if (isPrevBtn) {
			state.curDate.setMonth(state.curDate.getMonth() - 1);
		} else {
			state.curDate.setMonth(state.curDate.getMonth() + 1);
		}
		// 1. 달력 렌더링
		UICtrl.renderCalendar(
			state.curDate.getFullYear(),
			state.curDate.getMonth() + 1
		);
		// 2. 예약 불가능 렌더링
		UICtrl.beExceptReservedDay(await DataCtrl.getReservedDays());
	};

	const setInitailCalendar = async () => {
		state.curDate = new Date(document.querySelector("#checkInInput").placeholder);
		UICtrl.renderCalendar(
			state.curDate.getFullYear(),
			state.curDate.getMonth() + 1
		);
		const reservedDays = await DataCtrl.getReservedDays();
		UICtrl.beExceptReservedDay(reservedDays);
	};

	const submitReservationForm = () => {
		document.querySelector(DOM.checkInInput).value = state.checkInId;
		document.querySelector(DOM.checkOutInput).value = state.checkOutId;

		const form = document.querySelector(DOM.reservePopupContainer);
		const numOfGuest = document.querySelector(DOM.guestCount).textContent;
		const guestInput = document.createElement("input");
		guestInput.setAttribute("name", "numOfGuest");
		guestInput.setAttribute("value", numOfGuest);
		form.appendChild(guestInput);
		form.submit();
	};
	
	const onClickUpdateDisplayer = () => UICtrl.displayUpdateDisplayer();
	
	const onClickUpdateNextBtn = () => {
		UICtrl.displayUpdateForm();
		UICtrl.clearRefundPrice();
		
		// 기존에 예약된 체크인 체크아웃 클릭
		const initialCheckIn = document.querySelector("#checkInInput").placeholder;
		const initialCheckOut = document.querySelector("#checkOutInput").placeholder;
		
		document.getElementById(initialCheckIn).click();
		setTimeout(()=> document.getElementById(initialCheckOut).click(), 500);
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
/*! exports provided: setFixDayCount, setMonthCount, formatDashToDot, formatDotToDash, formatWon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFixDayCount", function() { return setFixDayCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMonthCount", function() { return setMonthCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDashToDot", function() { return formatDashToDot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDotToDash", function() { return formatDotToDash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatWon", function() { return formatWon; });
const setFixDayCount = number => (number < 10 ? "0" + number : number);
const setMonthCount = number => (number < 10 ? "0" + number : number);
const formatDashToDot = str => str.replace(/-/g, ".");
const formatDotToDash = str => str.replace(/\./g, "-");
const formatWon = num =>
	new Intl.NumberFormat("ko-KR", { style: "currency", currency: "KRW" }).format(num);


/***/ }),

/***/ "./scss/reserveDetail.scss":
/*!*********************************!*\
  !*** ./scss/reserveDetail.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./reserveDetail.scss */ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./scss/reserveDetail.scss");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9idWlsZEZ1bGxQYXRoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9tZXJnZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL3Jlc2VydmVEZXRhaWwuc2NzcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL2pzL3Jlc2VydmVEZXRhaWwuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL3Jlc2VydmVEZXRhaWwuc2Nzcz8zYjY5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxpQkFBaUIsbUJBQU8sQ0FBQyx1REFBYSxFOzs7Ozs7Ozs7Ozs7QUNBekI7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHNEQUFZO0FBQ2hDLGFBQWEsbUJBQU8sQ0FBQyxrRUFBa0I7QUFDdkMsY0FBYyxtQkFBTyxDQUFDLDBFQUFzQjtBQUM1QyxlQUFlLG1CQUFPLENBQUMsNEVBQXVCO0FBQzlDLG9CQUFvQixtQkFBTyxDQUFDLDhFQUF1QjtBQUNuRCxtQkFBbUIsbUJBQU8sQ0FBQyxvRkFBMkI7QUFDdEQsc0JBQXNCLG1CQUFPLENBQUMsMEZBQThCO0FBQzVELGtCQUFrQixtQkFBTyxDQUFDLDBFQUFx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QUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsVUFBVTs7Ozs7Ozs7Ozs7OztBQ3ZMekI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7QUM1ZUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNQLGlDQUFpQyxxQ0FBcUM7Ozs7Ozs7Ozs7OztBQ0x0RSxVQUFVLG1CQUFPLENBQUMsdUpBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLDROQUE2Rzs7QUFFL0k7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0MiLCJmaWxlIjoicmVzZXJ2ZURldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3Jlc291cmNlcy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9yZXNlcnZlRGV0YWlsLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIGJ1aWxkRnVsbFBhdGggPSByZXF1aXJlKCcuLi9jb3JlL2J1aWxkRnVsbFBhdGgnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAodXRpbHMuaXNCbG9iKHJlcXVlc3REYXRhKSB8fCB1dGlscy5pc0ZpbGUocmVxdWVzdERhdGEpKSAmJlxuICAgICAgcmVxdWVzdERhdGEudHlwZVxuICAgICkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChjb25maWcuYXV0aC5wYXNzd29yZCkpIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICB2YXIgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChmdWxsUGF0aCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBicm93c2VyIHJlcXVlc3QgY2FuY2VsbGF0aW9uIChhcyBvcHBvc2VkIHRvIGEgbWFudWFsIGNhbmNlbGxhdGlvbilcbiAgICByZXF1ZXN0Lm9uYWJvcnQgPSBmdW5jdGlvbiBoYW5kbGVBYm9ydCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignUmVxdWVzdCBhYm9ydGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJywgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICB2YXIgdGltZW91dEVycm9yTWVzc2FnZSA9ICd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCc7XG4gICAgICBpZiAoY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSA9IGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlO1xuICAgICAgfVxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKHRpbWVvdXRFcnJvck1lc3NhZ2UsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihmdWxsUGF0aCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnLndpdGhDcmVkZW50aWFscykpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gISFjb25maWcud2l0aENyZWRlbnRpYWxzO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFyZXF1ZXN0RGF0YSkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9jb3JlL21lcmdlQ29uZmlnJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGF4aW9zLmRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vbWVyZ2VDb25maWcnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcbiAgICBjb25maWcudXJsID0gYXJndW1lbnRzWzBdO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgfVxuXG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG5cbiAgLy8gU2V0IGNvbmZpZy5tZXRob2RcbiAgaWYgKGNvbmZpZy5tZXRob2QpIHtcbiAgICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2UgaWYgKHRoaXMuZGVmYXVsdHMubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IHRoaXMuZGVmYXVsdHMubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLm1ldGhvZCA9ICdnZXQnO1xuICB9XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbkF4aW9zLnByb3RvdHlwZS5nZXRVcmkgPSBmdW5jdGlvbiBnZXRVcmkoY29uZmlnKSB7XG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIHJldHVybiBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChtZXJnZUNvbmZpZyhjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgYmFzZVVSTCB3aXRoIHRoZSByZXF1ZXN0ZWRVUkwsXG4gKiBvbmx5IHdoZW4gdGhlIHJlcXVlc3RlZFVSTCBpcyBub3QgYWxyZWFkeSBhbiBhYnNvbHV0ZSBVUkwuXG4gKiBJZiB0aGUgcmVxdWVzdFVSTCBpcyBhYnNvbHV0ZSwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSByZXF1ZXN0ZWRVUkwgdW50b3VjaGVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RlZFVSTCBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgdG8gY29tYmluZVxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIGZ1bGwgcGF0aFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkRnVsbFBhdGgoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKSB7XG4gIGlmIChiYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKHJlcXVlc3RlZFVSTCkpIHtcbiAgICByZXR1cm4gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKTtcbiAgfVxuICByZXR1cm4gcmVxdWVzdGVkVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1xuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG5cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIGVycm9yLmlzQXhpb3NFcnJvciA9IHRydWU7XG5cbiAgZXJyb3IudG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY29kZTogdGhpcy5jb2RlXG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIGVycm9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIHZhciBjb25maWcgPSB7fTtcblxuICB2YXIgdmFsdWVGcm9tQ29uZmlnMktleXMgPSBbJ3VybCcsICdtZXRob2QnLCAnZGF0YSddO1xuICB2YXIgbWVyZ2VEZWVwUHJvcGVydGllc0tleXMgPSBbJ2hlYWRlcnMnLCAnYXV0aCcsICdwcm94eScsICdwYXJhbXMnXTtcbiAgdmFyIGRlZmF1bHRUb0NvbmZpZzJLZXlzID0gW1xuICAgICdiYXNlVVJMJywgJ3RyYW5zZm9ybVJlcXVlc3QnLCAndHJhbnNmb3JtUmVzcG9uc2UnLCAncGFyYW1zU2VyaWFsaXplcicsXG4gICAgJ3RpbWVvdXQnLCAndGltZW91dE1lc3NhZ2UnLCAnd2l0aENyZWRlbnRpYWxzJywgJ2FkYXB0ZXInLCAncmVzcG9uc2VUeXBlJywgJ3hzcmZDb29raWVOYW1lJyxcbiAgICAneHNyZkhlYWRlck5hbWUnLCAnb25VcGxvYWRQcm9ncmVzcycsICdvbkRvd25sb2FkUHJvZ3Jlc3MnLCAnZGVjb21wcmVzcycsXG4gICAgJ21heENvbnRlbnRMZW5ndGgnLCAnbWF4Qm9keUxlbmd0aCcsICdtYXhSZWRpcmVjdHMnLCAndHJhbnNwb3J0JywgJ2h0dHBBZ2VudCcsXG4gICAgJ2h0dHBzQWdlbnQnLCAnY2FuY2VsVG9rZW4nLCAnc29ja2V0UGF0aCcsICdyZXNwb25zZUVuY29kaW5nJ1xuICBdO1xuICB2YXIgZGlyZWN0TWVyZ2VLZXlzID0gWyd2YWxpZGF0ZVN0YXR1cyddO1xuXG4gIGZ1bmN0aW9uIGdldE1lcmdlZFZhbHVlKHRhcmdldCwgc291cmNlKSB7XG4gICAgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3QodGFyZ2V0KSAmJiB1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZSh0YXJnZXQsIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZSh7fSwgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzQXJyYXkoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHNvdXJjZS5zbGljZSgpO1xuICAgIH1cbiAgICByZXR1cm4gc291cmNlO1xuICB9XG5cbiAgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9XG5cbiAgdXRpbHMuZm9yRWFjaCh2YWx1ZUZyb21Db25maWcyS2V5cywgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcyW3Byb3BdKTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2gobWVyZ2VEZWVwUHJvcGVydGllc0tleXMsIG1lcmdlRGVlcFByb3BlcnRpZXMpO1xuXG4gIHV0aWxzLmZvckVhY2goZGVmYXVsdFRvQ29uZmlnMktleXMsIGZ1bmN0aW9uIGRlZmF1bHRUb0NvbmZpZzIocHJvcCkge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKGRpcmVjdE1lcmdlS2V5cywgZnVuY3Rpb24gbWVyZ2UocHJvcCkge1xuICAgIGlmIChwcm9wIGluIGNvbmZpZzIpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAocHJvcCBpbiBjb25maWcxKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzFbcHJvcF0pO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGF4aW9zS2V5cyA9IHZhbHVlRnJvbUNvbmZpZzJLZXlzXG4gICAgLmNvbmNhdChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cylcbiAgICAuY29uY2F0KGRlZmF1bHRUb0NvbmZpZzJLZXlzKVxuICAgIC5jb25jYXQoZGlyZWN0TWVyZ2VLZXlzKTtcblxuICB2YXIgb3RoZXJLZXlzID0gT2JqZWN0XG4gICAgLmtleXMoY29uZmlnMSlcbiAgICAuY29uY2F0KE9iamVjdC5rZXlzKGNvbmZpZzIpKVxuICAgIC5maWx0ZXIoZnVuY3Rpb24gZmlsdGVyQXhpb3NLZXlzKGtleSkge1xuICAgICAgcmV0dXJuIGF4aW9zS2V5cy5pbmRleE9mKGtleSkgPT09IC0xO1xuICAgIH0pO1xuXG4gIHV0aWxzLmZvckVhY2gob3RoZXJLZXlzLCBtZXJnZURlZXBQcm9wZXJ0aWVzKTtcblxuICByZXR1cm4gY29uZmlnO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdBY2NlcHQnKTtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG4gIG1heEJvZHlMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHZhciBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG5cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdmFyIG9yaWdpblVSTDtcblxuICAgICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsLmNvbnN0cnVjdG9yICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwuY29uc3RydWN0b3IpXG4gICAgJiYgdHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIodmFsKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBwbGFpbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbCkge1xuICBpZiAodG9TdHJpbmcuY2FsbCh2YWwpICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsKTtcbiAgcmV0dXJuIHByb3RvdHlwZSA9PT0gbnVsbCB8fCBwcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOYXRpdmVTY3JpcHQnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOUycpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QocmVzdWx0W2tleV0pICYmIGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZSh7fSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWwuc2xpY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG4vKipcbiAqIFJlbW92ZSBieXRlIG9yZGVyIG1hcmtlci4gVGhpcyBjYXRjaGVzIEVGIEJCIEJGICh0aGUgVVRGLTggQk9NKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IHdpdGggQk9NXG4gKiBAcmV0dXJuIHtzdHJpbmd9IGNvbnRlbnQgdmFsdWUgd2l0aG91dCBCT01cbiAqL1xuZnVuY3Rpb24gc3RyaXBCT00oY29udGVudCkge1xuICBpZiAoY29udGVudC5jaGFyQ29kZUF0KDApID09PSAweEZFRkYpIHtcbiAgICBjb250ZW50ID0gY29udGVudC5zbGljZSgxKTtcbiAgfVxuICByZXR1cm4gY29udGVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1BsYWluT2JqZWN0OiBpc1BsYWluT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW0sXG4gIHN0cmlwQk9NOiBzdHJpcEJPTVxufTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUjp3Z2h0QDMwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0td3JhcFdpZHRoOiAxMjAwcHg7XFxuICAtLWdyYXk6ICM3ZjhjOGQ7XFxuICAtLWRlZXBHcmF5OiAjNTM1YzY4O1xcbiAgLS1yZWQ6ICNmZjM4NWM7XFxuICAtLWJsdWU6IGxpZ2h0c2VhZ3JlZW47XFxuICAtLWdyZWVuOiAjMjNjMzgyO1xcbiAgLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luOiA1MHB4O1xcbiAgLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmc6IDMwcHg7XFxuICAtLWRldGFpbEZvbnRTaXplOiBzbWFsbGVyO1xcbiAgLS1ib3R0b21Cb3JkZXI6IDFweCBzb2xpZCAjZWNmMGYxO1xcbiAgLS1ib3JkZXJSYWRpdXM6IDEwcHg7XFxuICAtLWNhbGVuZGFyRGF5U2l6ZTogNDBweDtcXG4gIC0tYm94U2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7IH1cXG5cXG4uQUNDRVBURUQge1xcbiAgY29sb3I6IHZhcigtLWdyZWVuKSAhaW1wb3J0YW50OyB9XFxuXFxuLlBFTkRJTkcsIC5DT01QTEVURUQge1xcbiAgY29sb3I6IHZhcigtLWdyYXkpICFpbXBvcnRhbnQ7IH1cXG5cXG4uUkVGVVNFRCwgLkNBTkNMRUQge1xcbiAgY29sb3I6IHZhcigtLXJlZCkgIWltcG9ydGFudDsgfVxcblxcbmh0bWwge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7IH1cXG5cXG4uQnRuRGlzYWJsZWQge1xcbiAgY3Vyc29yOiBuby1kcm9wICFpbXBvcnRhbnQ7XFxuICBvcGFjaXR5OiAwLjIgIWltcG9ydGFudDsgfVxcblxcbi53cmFwIHtcXG4gIG1heC13aWR0aDogdmFyKC0td3JhcFdpZHRoKTtcXG4gIG1hcmdpbjogMCBhdXRvOyB9XFxuICAud3JhcCAuaGVhZGVyIHtcXG4gICAgbWFyZ2luOiAwIHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pO1xcbiAgICBwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7IH1cXG4gICAgLndyYXAgLmhlYWRlciBpIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLndyYXAgLmhlYWRlciAuaGVhZGVyX3RpdGxlIHtcXG4gICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgIHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgMDsgfVxcbiAgLndyYXAgLnJlc2VydmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG4gICAgLndyYXAgLnJlc2VydmUgLm1haW4ge1xcbiAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAvIDIpIDA7XFxuICAgICAgbWFyZ2luOiAwIHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pO1xcbiAgICAgIHdpZHRoOiA2NSU7IH1cXG4gICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAucm9vbV9uYW1lIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7IH1cXG4gICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAucm9vbV9hZGRyZXNzIHtcXG4gICAgICAgIG1hcmdpbjogMTBweCAwOyB9XFxuICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLnJlc2VydmVfdGltZV93cmFwIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7IH1cXG4gICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5yZXNlcnZlX3RpbWVfd3JhcCAucmVzZXJ2ZV90aW1lIC5yZXNlcnZlX2NoZWNrIHtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtOyB9XFxuICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAucmVzZXJ2ZV90aW1lX3dyYXAgLnJlc2VydmVfdGltZSAucm9vbV9jaGVjayB7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07IH1cXG4gICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5yZXNlcnZlX3RpbWVfd3JhcCAucmVzZXJ2ZV90aW1lIGkge1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTsgfVxcbiAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLnJlc2VydmVfdGltZV93cmFwIC5yZXNlcnZlX2RldGFpbCAucmVzZXJ2ZV9uaWdodCB7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7IH1cXG4gICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5yZXNlcnZlX3RpbWVfd3JhcCAucmVzZXJ2ZV9kZXRhaWwgLnJlc2VydmVfZ3Vlc3RzIHtcXG4gICAgICAgICAgY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTsgfVxcbiAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5pY29ucyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAwO1xcbiAgICAgICAgYm9yZGVyLXRvcDogdmFyKC0tYm90dG9tQm9yZGVyKTsgfVxcbiAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmljb25zIC5pY29uc19pdGVtIHtcXG4gICAgICAgICAgY29sb3I6IHZhcigtLWdyYXkpOyB9XFxuICAgICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5pY29ucyAuaWNvbnNfaXRlbSBpLFxcbiAgICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuaWNvbnMgLmljb25zX2l0ZW0gc3BhbiB7XFxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtOyB9XFxuICAgICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5pY29ucyAuaWNvbnNfaXRlbTpsYXN0LW9mLXR5cGUgaSB7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4OyB9XFxuICAgICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5pY29ucyAuaWNvbnNfaXRlbTpob3ZlciB7XFxuICAgICAgICAgICAgY29sb3I6IGJsYWNrOyB9XFxuICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmZvb3RlciB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKTtcXG4gICAgICAgIGFuaW1hdGlvbjogc2xpZGUgZWFzZSAwLjNzOyB9XFxuICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuZm9vdGVyIC5yZXNlcnZlX2NoYW5nZSxcXG4gICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5mb290ZXIgLnJlc2VydmVfY2FuY2VsIHtcXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NkY2RjZDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XFxuICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgICAgICAgIHdpZHRoOiA0NSU7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGhlaWdodDogMjgwcHg7IH1cXG4gICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmZvb3RlciAucmVzZXJ2ZV9jaGFuZ2UgaSxcXG4gICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmZvb3RlciAucmVzZXJ2ZV9jYW5jZWwgaSB7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTsgfVxcbiAgICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuZm9vdGVyIC5yZXNlcnZlX2NoYW5nZSAuZm9vdGVyX3RpdGxlLFxcbiAgICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuZm9vdGVyIC5yZXNlcnZlX2NhbmNlbCAuZm9vdGVyX3RpdGxlIHtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwOyB9XFxuICAgICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5mb290ZXIgLnJlc2VydmVfY2hhbmdlIC5mb290ZXJfYm9keSxcXG4gICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmZvb3RlciAucmVzZXJ2ZV9jYW5jZWwgLmZvb3Rlcl9ib2R5IHtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JheSk7IH1cXG4gICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmZvb3RlciAucmVzZXJ2ZV9jaGFuZ2UgYSxcXG4gICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmZvb3RlciAucmVzZXJ2ZV9jYW5jZWwgYSB7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogYXV0bzsgfVxcbiAgICAgICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5mb290ZXIgLnJlc2VydmVfY2hhbmdlIGEgYnV0dG9uLFxcbiAgICAgICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5mb290ZXIgLnJlc2VydmVfY2FuY2VsIGEgYnV0dG9uIHtcXG4gICAgICAgICAgICAgIGFsbDogdW5zZXQ7XFxuICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAxZW07XFxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibHVlKTtcXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7IH1cXG4gICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuY2hhbmdlX3N0ZXAtMSB7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7XFxuICAgICAgICBib3JkZXItdG9wOiB2YXIoLS1ib3R0b21Cb3JkZXIpO1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIGFuaW1hdGlvbjogc2xpZGUgZWFzZSAuM3M7IH1cXG4gICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5jaGFuZ2Vfc3RlcC0xIC5jaGFuZ2Vfc3RlcF90aXRsZSB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDsgfVxcbiAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNoYW5nZV9zdGVwLTEgLnJlc2VydmF0aW9uX3Blb3BsZSB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgIG1hcmdpbjogMzBweCAwOyB9XFxuICAgICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5jaGFuZ2Vfc3RlcC0xIC5yZXNlcnZhdGlvbl9wZW9wbGUgLnJlc2VydmF0aW9uX2Rpc3BsYXkge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgICAgICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5jaGFuZ2Vfc3RlcC0xIC5yZXNlcnZhdGlvbl9wZW9wbGUgLnJlc2VydmF0aW9uX2Rpc3BsYXkgLmd1ZXN0X2NvdW50ZXJfYm94IHtcXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgICAgICAgdG9wOiAtMTBweDsgfVxcbiAgICAgICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNoYW5nZV9zdGVwLTEgLnJlc2VydmF0aW9uX3Blb3BsZSAucmVzZXJ2YXRpb25fZGlzcGxheSAuZ3Vlc3RfY291bnRlcl9ib3ggLmRpc3BsYXlfYnRuX2ljb24ge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgICAgICAgICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5jaGFuZ2Vfc3RlcC0xIC5yZXNlcnZhdGlvbl9wZW9wbGUgLnJlc2VydmF0aW9uX2Rpc3BsYXkgLmd1ZXN0X2NvdW50ZXJfYm94IC5kaXNwbGF5X2J0bl9pY29uOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxOyB9XFxuICAgICAgICAgICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5jaGFuZ2Vfc3RlcC0xIC5yZXNlcnZhdGlvbl9wZW9wbGUgLnJlc2VydmF0aW9uX2Rpc3BsYXkgLmd1ZXN0X2NvdW50ZXJfYm94IC5kaXNwbGF5X2J0bl9pY29uOmFjdGl2ZSB7XFxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTsgfVxcbiAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNoYW5nZV9zdGVwLTEgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX2Zvcm0ge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgd2lkdGg6IDY2MHB4O1xcbiAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3hTaGFkb3cpO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMpO1xcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7IH1cXG4gICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNoYW5nZV9zdGVwLTEgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1faGVhZGVyIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAgICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNoYW5nZV9zdGVwLTEgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1faGVhZGVyIC5oZWFkZXJfdGV4dCB7XFxuICAgICAgICAgICAgICB3aWR0aDogNTUlOyB9XFxuICAgICAgICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuY2hhbmdlX3N0ZXAtMSAucmVzZXJ2YXRpb25fbWFpbiAucmVzZXJ2YXRpb25fZm9ybSAuZm9ybV9oZWFkZXIgLmhlYWRlcl90ZXh0IC5oZWFkZXJfdGl0bGUge1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTsgfVxcbiAgICAgICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNoYW5nZV9zdGVwLTEgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1faGVhZGVyIC5oZWFkZXJfdGV4dCAuaGVhZGVyX2JvZHkge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7IH1cXG4gICAgICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuY2hhbmdlX3N0ZXAtMSAucmVzZXJ2YXRpb25fbWFpbiAucmVzZXJ2YXRpb25fZm9ybSAuZm9ybV9oZWFkZXIgLmhlYWRlcl9pbnB1dHMge1xcbiAgICAgICAgICAgICAgd2lkdGg6IDQ1JTtcXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICBib3JkZXI6IHZhcigtLWJvdHRvbUJvcmRlcik7XFxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMpO1xcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNzsgfVxcbiAgICAgICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNoYW5nZV9zdGVwLTEgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1faGVhZGVyIC5oZWFkZXJfaW5wdXRzIC5pbnB1dF9pdGVtIHtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7IH1cXG4gICAgICAgICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNoYW5nZV9zdGVwLTEgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1faGVhZGVyIC5oZWFkZXJfaW5wdXRzIC5pbnB1dF9pdGVtIC5yZXNlcnZhdGlvbl9pbnB1dCB7XFxuICAgICAgICAgICAgICAgICAgYWxsOiB1bnNldDtcXG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogdGV4dDsgfVxcbiAgICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuY2hhbmdlX3N0ZXAtMSAucmVzZXJ2YXRpb25fbWFpbiAucmVzZXJ2YXRpb25fZm9ybSAuZm9ybV9tYWluIHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbik7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKSAvIDIpOyB9XFxuICAgICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNoYW5nZV9zdGVwLTEgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1fbWFpbiAucGFnaW5hdGlvbl9idG5zIHtcXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcbiAgICAgICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNoYW5nZV9zdGVwLTEgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1fbWFpbiAucGFnaW5hdGlvbl9idG5zIC5wYWdpbmF0aW9uX2J0biB7XFxuICAgICAgICAgICAgICAgIGFsbDogdW5zZXQ7XFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07IH1cXG4gICAgICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuY2hhbmdlX3N0ZXAtMSAucmVzZXJ2YXRpb25fbWFpbiAucmVzZXJ2YXRpb25fZm9ybSAuZm9ybV9tYWluIC5jYWxlbmRhcl93cmFwIHtcXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcbiAgICAgICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNoYW5nZV9zdGVwLTEgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1fbWFpbiAuY2FsZW5kYXJfd3JhcCAuY2FsZW5kYXJfaXRlbSB7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA0OCU7IH1cXG4gICAgICAgICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNoYW5nZV9zdGVwLTEgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1fbWFpbiAuY2FsZW5kYXJfd3JhcCAuY2FsZW5kYXJfaXRlbSAuY2FsZW5kYXJfbW9udGgge1xcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7IH1cXG4gICAgICAgICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNoYW5nZV9zdGVwLTEgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1fbWFpbiAuY2FsZW5kYXJfd3JhcCAuY2FsZW5kYXJfaXRlbSAuY2FsZW5kYXJfcm93IHtcXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAgICAgICAgICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNoYW5nZV9zdGVwLTEgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1fbWFpbiAuY2FsZW5kYXJfd3JhcCAuY2FsZW5kYXJfaXRlbSAuY2FsZW5kYXJfcm93IC5jYWxlbmRhcl9kYXkge1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHZhcigtLWNhbGVuZGFyRGF5U2l6ZSk7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHZhcigtLWNhbGVuZGFyRGF5U2l6ZSk7XFxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgICAgICAgICAgICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5jaGFuZ2Vfc3RlcC0xIC5yZXNlcnZhdGlvbl9tYWluIC5yZXNlcnZhdGlvbl9mb3JtIC5mb3JtX21haW4gLmNhbGVuZGFyX3dyYXAgLmNhbGVuZGFyX2l0ZW0gLmNhbGVuZGFyX3JvdyAuY2FsZW5kYXJfZGF5LmF2YWlsYWJsZV9kYXkge1xcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZhOyB9XFxuICAgICAgICAgICAgICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuY2hhbmdlX3N0ZXAtMSAucmVzZXJ2YXRpb25fbWFpbiAucmVzZXJ2YXRpb25fZm9ybSAuZm9ybV9tYWluIC5jYWxlbmRhcl93cmFwIC5jYWxlbmRhcl9pdGVtIC5jYWxlbmRhcl9yb3cgLmNhbGVuZGFyX2RheSBzcGFuIHtcXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxlbmRhckRheVNpemUpOyB9XFxuICAgICAgICAgICAgICAgICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5jaGFuZ2Vfc3RlcC0xIC5yZXNlcnZhdGlvbl9tYWluIC5yZXNlcnZhdGlvbl9mb3JtIC5mb3JtX21haW4gLmNhbGVuZGFyX3dyYXAgLmNhbGVuZGFyX2l0ZW0gLmNhbGVuZGFyX3JvdyAuY2FsZW5kYXJfZGF5IHNwYW4uaW52YWxpZF9kYXkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDsgfVxcbiAgICAgICAgICAgICAgICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuY2hhbmdlX3N0ZXAtMSAucmVzZXJ2YXRpb25fbWFpbiAucmVzZXJ2YXRpb25fZm9ybSAuZm9ybV9tYWluIC5jYWxlbmRhcl93cmFwIC5jYWxlbmRhcl9pdGVtIC5jYWxlbmRhcl9yb3cgLmNhbGVuZGFyX2RheSBzcGFuLnZhbGlkX2RheTpob3ZlciB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAgICAgICAgICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNoYW5nZV9zdGVwLTEgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1fbWFpbiAuY2FsZW5kYXJfd3JhcCAuY2FsZW5kYXJfaXRlbSAuY2FsZW5kYXJfcm93IC5jYWxlbmRhcl9kYXkuY2xpY2tlZC5hdmFpbGFibGVfZGF5IHtcXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlIDAgMCA1MCU7IH1cXG4gICAgICAgICAgICAgICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5jaGFuZ2Vfc3RlcC0xIC5yZXNlcnZhdGlvbl9tYWluIC5yZXNlcnZhdGlvbl9mb3JtIC5mb3JtX21haW4gLmNhbGVuZGFyX3dyYXAgLmNhbGVuZGFyX2l0ZW0gLmNhbGVuZGFyX3JvdyAuY2FsZW5kYXJfZGF5LmNsaWNrZWQgc3BhbiB7XFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7IH1cXG4gICAgICAgICAgICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuY2hhbmdlX3N0ZXAtMSAucmVzZXJ2YXRpb25fbWFpbiAucmVzZXJ2YXRpb25fZm9ybSAuZm9ybV9tYWluIC5jYWxlbmRhcl93cmFwIC5jYWxlbmRhcl9pdGVtIC5jYWxlbmRhcl9yb3cgLmRheW5hbWUge1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JheSk7IH1cXG4gICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNoYW5nZV9zdGVwLTEgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1fZm9vdGVyIHtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7IH1cXG4gICAgICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuY2hhbmdlX3N0ZXAtMSAucmVzZXJ2YXRpb25fbWFpbiAucmVzZXJ2YXRpb25fZm9ybSAuZm9ybV9mb290ZXIgLmlucHV0X3Jlc2V0IHtcXG4gICAgICAgICAgICAgIGFsbDogdW5zZXQ7XFxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjg1O1xcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpLCAxcHggLTFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvciksIC0xcHggMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKSwgLTFweCAtMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKTtcXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAgICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5jaGFuZ2Vfc3RlcC0xIC5yZXNlcnZhdGlvbl9tYWluIC5yZXNlcnZhdGlvbl9mb3JtIC5mb3JtX2Zvb3RlciAuZm9ybV91cGRhdGUge1xcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDE1cHg7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICAgIGJvcmRlcjogMDtcXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XFxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5jYW5jZWxfc3RlcC0xIHtcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgMDtcXG4gICAgICAgIGJvcmRlci10b3A6IHZhcigtLWJvdHRvbUJvcmRlcik7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgYW5pbWF0aW9uOiBzbGlkZSBlYXNlIC4zczsgfVxcbiAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNhbmNlbF9zdGVwLTEgLmNhbmNlbF9zdGVwX3RpdGxlIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwOyB9XFxuICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuY2FuY2VsX3N0ZXAtMSAuY2FuY2VsX3N0ZXBfYm9keSB7XFxuICAgICAgICAgIG1hcmdpbjogdmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbikgMDsgfVxcbiAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNhbmNlbF9zdGVwLTEgc21hbGwge1xcbiAgICAgICAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuY2FuY2VsX3N0ZXAtMSBzbWFsbCBzcGFuIHtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjg1O1xcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKSwgMXB4IC0xcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpLCAtMXB4IDFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvciksIC0xcHggLTFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvcik7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsdWUpOyB9XFxuICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuY2FuY2VsX3N0ZXAtMSBmb3JtIHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDsgfVxcbiAgICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuY2FuY2VsX3N0ZXAtMSBmb3JtIC5jYW5jZWxfc3RlcF9idG4ge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAud3JhcCAucmVzZXJ2ZSAuYXNpZGUge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB3aWR0aDogMzAlO1xcbiAgICAgIG1hcmdpbjogMCB2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKTsgfVxcbiAgICAgIC53cmFwIC5yZXNlcnZlIC5hc2lkZSAuYmlsbHMge1xcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgICAgIHRvcDogMTAwcHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4OyB9XFxuICAgICAgICAud3JhcCAucmVzZXJ2ZSAuYXNpZGUgLmJpbGxzIC5yb29tX2RldGFpbCB7XFxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XFxuICAgICAgICAud3JhcCAucmVzZXJ2ZSAuYXNpZGUgLmJpbGxzIC5wcmljZSxcXG4gICAgICAgIC53cmFwIC5yZXNlcnZlIC5hc2lkZSAuYmlsbHMgLnNlcnZpY2Uge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG4gICAgICAgIC53cmFwIC5yZXNlcnZlIC5hc2lkZSAuYmlsbHMgLnRvdGFsX3ByaWNlIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwOyB9XFxuICAgICAgICAud3JhcCAucmVzZXJ2ZSAuYXNpZGUgLmJpbGxzIC5zdGF0dXMge1xcbiAgICAgICAgICBtYXJnaW46IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgMDsgfVxcbiAgICAgICAgLndyYXAgLnJlc2VydmUgLmFzaWRlIC5iaWxscyAuZGVsZXRlX2luZm8ge1xcbiAgICAgICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgICAgICAgIC53cmFwIC5yZXNlcnZlIC5hc2lkZSAuYmlsbHMgLmRlbGV0ZV9pbmZvICoge1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7IH1cXG4gICAgICAgICAgLndyYXAgLnJlc2VydmUgLmFzaWRlIC5iaWxscyAuZGVsZXRlX2luZm8gLnJlZnVuZF9wcmljZS12YWx1ZSB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWdyZWVuKTsgfVxcblxcbkBrZXlmcmFtZXMgc2xpZGUge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpO1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG4uYm9keV9oZWFkZXIgdWwgLmFpcmJuYl9pY29uLFxcbi5ib2R5X2hlYWRlciB1bCAuaGVhZGVyX3Byb2ZpbGUgLnByb2ZpbGVfaW1nIHtcXG4gIGNvbG9yOiB2YXIoLS1ibHVlKTsgfVxcblxcbi5ib2R5X2hlYWRlciB1bCAucm9vbV9zZWFyY2ggaSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zY3NzL19fYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc2Nzcy9yZXNlcnZlRGV0YWlsLnNjc3NcIixcIndlYnBhY2s6Ly9zY3NzL19fbWl4aW5zLnNjc3Nc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QUFtQixFQUFBO1FBdFp2QjtVQXlaSyxjQUFjO1VBQ2QsbUJBQW1CLEVBQUE7UUExWnhCOztVQStaSyxhQUFhO1VBQ2IsOEJBQThCLEVBQUE7UUFoYW5DO1VBb2FLLGVBQWU7VUFDZixnQkFBZ0IsRUFBQTtRQXJhckI7VUF5YUsseUNBQXlDLEVBQUE7UUF6YTlDO1VBNmFLLGFBQWEsRUFBQTtVQTdhbEI7WUFnYk0sZ0JBQWdCLEVBQUE7VUFoYnRCO1lBb2JTLGNBQWM7WUFDZCxtQkFBbUIsRUFBQTs7QUFRM0I7RUFDQztJQUNDLDZCQUE2QjtJQUM3QixVQUFVLEVBQUE7RUFFWDtJQUNDLDBCQUEwQjtJQUMxQixVQUFVLEVBQUEsRUFBQTs7QUN0YVo7O0VBRUMsa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0MsNkJBQTZCLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Tm90bytTYW5zK0tSOndnaHRAMzAwOzUwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuOnJvb3Qge1xcclxcblxcdC0td3JhcFdpZHRoOiAxMjAwcHg7XFxyXFxuXFx0LS1ncmF5OiAjN2Y4YzhkO1xcclxcblxcdC0tZGVlcEdyYXk6ICM1MzVjNjg7XFxyXFxuXFx0LS1yZWQ6ICNmZjM4NWM7XFxyXFxuXFx0LS1ibHVlOiBsaWdodHNlYWdyZWVuO1xcclxcblxcdC0tZ3JlZW46ICMyM2MzODI7XFxyXFxuXFx0LS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luOiA1MHB4O1xcclxcblxcdC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nOiAzMHB4O1xcclxcblxcdC0tZGV0YWlsRm9udFNpemU6IHNtYWxsZXI7XFxyXFxuXFx0LS1ib3R0b21Cb3JkZXI6IDFweCBzb2xpZCAjZWNmMGYxO1xcclxcblxcdC0tYm9yZGVyUmFkaXVzOiAxMHB4O1xcclxcblxcdC0tY2FsZW5kYXJEYXlTaXplOiA0MHB4O1xcclxcblxcdC0tYm94U2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7XFxyXFxufVxcclxcblxcclxcbi5BQ0NFUFRFRCB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWdyZWVuKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uUEVORElORywgLkNPTVBMRVRFRCB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLWdyYXkpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5SRUZVU0VELCAuQ0FOQ0xFRCB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLXJlZCkgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0IFxcXCIuL19iYXNlXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuL19taXhpbnNcXFwiO1xcclxcblxcclxcbmh0bWwge1xcclxcblxcdHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbn1cXHJcXG5cXHJcXG4uQnRuRGlzYWJsZWQge1xcclxcblxcdGN1cnNvcjogbm8tZHJvcCAhaW1wb3J0YW50O1xcclxcblxcdG9wYWNpdHk6IDAuMiAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcCB7XFxyXFxuXFx0bWF4LXdpZHRoOiB2YXIoLS13cmFwV2lkdGgpO1xcclxcblxcdG1hcmdpbjogMCBhdXRvO1xcclxcblxcclxcblxcdC5oZWFkZXIge1xcclxcblxcdFxcdG1hcmdpbjogMCB2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKTtcXHJcXG5cXHRcXHRwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7XFxyXFxuXFxyXFxuXFx0XFx0aSB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQuaGVhZGVyX3RpdGxlIHtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgMDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5yZXNlcnZlIHtcXHJcXG5cXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG5cXHRcXHQubWFpbiB7XFxyXFxuXFx0XFx0XFx0cGFkZGluZzogY2FsYyh2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIC8gMikgMDtcXHJcXG5cXHRcXHRcXHRtYXJnaW46IDAgdmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbik7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDY1JTtcXHJcXG5cXHJcXG5cXHRcXHRcXHQucm9vbV9uYW1lIHtcXHJcXG5cXHRcXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHQucm9vbV9hZGRyZXNzIHtcXHJcXG5cXHRcXHRcXHRcXHRtYXJnaW46IDEwcHggMDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0LnJlc2VydmVfdGltZV93cmFwIHtcXHJcXG5cXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRcXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcdFxcdFxcdFxcdG1hcmdpbjogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAwO1xcclxcblxcclxcblxcdFxcdFxcdFxcdC5yZXNlcnZlX3RpbWUge1xcclxcblxcdFxcdFxcdFxcdFxcdC5yZXNlcnZlX2NoZWNrIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0LnJvb21fY2hlY2sge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiB2YXIoLS1ncmF5KTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IDAuOXJlbTtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0aSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IHZhcigtLWdyYXkpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdC5yZXNlcnZlX2RldGFpbCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0LnJlc2VydmVfbmlnaHQge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdC5yZXNlcnZlX2d1ZXN0cyB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IHZhcigtLWdyYXkpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMC44cmVtO1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdC5pY29ucyB7XFxyXFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyLXRvcDogdmFyKC0tYm90dG9tQm9yZGVyKTtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHQuaWNvbnNfaXRlbSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Y29sb3I6IHZhcigtLWdyYXkpO1xcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdGksXFxyXFxuXFx0XFx0XFx0XFx0XFx0c3BhbiB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0cGFkZGluZy1yaWdodDogMTVweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxcmVtO1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHQmOmxhc3Qtb2YtdHlwZSBpIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRwYWRkaW5nLWxlZnQ6IDMwcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdCY6aG92ZXIge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHQuZm9vdGVyIHtcXHJcXG5cXHRcXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcclxcblxcdFxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRcXHRcXHRtYXJnaW4tYm90dG9tOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpO1xcclxcblxcdFxcdFxcdFxcdGFuaW1hdGlvbjogc2xpZGUgZWFzZSAwLjNzO1xcclxcblxcclxcblxcdFxcdFxcdFxcdC5yZXNlcnZlX2NoYW5nZSxcXHJcXG5cXHRcXHRcXHRcXHQucmVzZXJ2ZV9jYW5jZWwge1xcclxcblxcdFxcdFxcdFxcdFxcdGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0ZW4oZ3JheSwgMzAlKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Ym94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xcclxcblxcdFxcdFxcdFxcdFxcdHBhZGRpbmc6IDMwcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0d2lkdGg6IDQ1JTtcXHJcXG5cXHRcXHRcXHRcXHQgICAgZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRcXHQgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHRcXHRcXHRcXHQgICAgaGVpZ2h0OiAyODBweDtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRpIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Zm9udC1zaXplOiAycmVtO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDAuNWVtO1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHQuZm9vdGVyX3RpdGxlIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHQuZm9vdGVyX2JvZHkge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiB2YXIoLS1ncmF5KTtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0YSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0bWFyZ2luLXRvcDogYXV0bztcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRidXR0b24ge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdGFsbDogdW5zZXQ7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0cGFkZGluZzogMC41ZW0gMWVtO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibHVlKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcclxcblxcdFxcdFxcdC5jaGFuZ2Vfc3RlcC0xIHtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyLXRvcDogdmFyKC0tYm90dG9tQm9yZGVyKTtcXHJcXG5cXHRcXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcclxcblxcdFxcdFxcdFxcdGFuaW1hdGlvbjogc2xpZGUgZWFzZSAuM3M7XFxyXFxuXFx0XFxyXFxuXFx0XFx0XFx0XFx0LmNoYW5nZV9zdGVwX3RpdGxlIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IDJyZW07XFxyXFxuXFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0LnJlc2VydmF0aW9uX3Blb3BsZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcblxcdFxcdFxcdFxcdFxcdCAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgIG1hcmdpbjogMzBweCAwO1xcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdC5yZXNlcnZhdGlvbl9kaXNwbGF5IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Lmd1ZXN0X2NvdW50ZXJfYm94IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0cmlnaHQ6IDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0dG9wOiAtMTBweDtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQuZGlzcGxheV9idG5faWNvbiB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR3aWR0aDogMzBweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRoZWlnaHQ6IDMwcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0bGluZS1oZWlnaHQ6IDMwcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdG9wYWNpdHk6IDAuNTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdCY6aG92ZXIge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdG9wYWNpdHk6IDE7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdCY6YWN0aXZlIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0LnJlc2VydmF0aW9uX21haW4ge1xcclxcblxcdFxcclxcblxcdFxcdFxcdFxcdFxcdC5yZXNlcnZhdGlvbl9mb3JtIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR3aWR0aDogNjYwcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Ym94LXNoYWRvdzogdmFyKC0tYm94U2hhZG93KTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdHBhZGRpbmc6IDIwcHggMzBweDtcXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQuZm9ybV9oZWFkZXIge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0LmhlYWRlcl90ZXh0IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR3aWR0aDogNTUlO1xcclxcblxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdC5oZWFkZXJfdGl0bGUge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxLjVyZW07XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdC5oZWFkZXJfYm9keSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IHZhcigtLWdyYXkpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQuaGVhZGVyX2lucHV0cyB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0d2lkdGg6IDQ1JTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGJvcmRlcjogdmFyKC0tYm90dG9tQm9yZGVyKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0LmlucHV0X2l0ZW0ge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMC44cmVtO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHBhZGRpbmc6IDEwcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR3aWR0aDogNTAlO1xcclxcblxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdC5yZXNlcnZhdGlvbl9pbnB1dCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0YWxsOiB1bnNldDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRmb250LXdlaWdodDogMzAwO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGN1cnNvcjogdGV4dDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0LmZvcm1fbWFpbiB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdG1hcmdpbi10b3A6IHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbikgLyAyKTtcXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQucGFnaW5hdGlvbl9idG5zIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdC5wYWdpbmF0aW9uX2J0biB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0YWxsOiB1bnNldDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Zm9udC1zaXplOiAxLjVyZW07XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0bGluZS1oZWlnaHQ6IDEuNXJlbTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdC5jYWxlbmRhcl93cmFwIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQuY2FsZW5kYXJfaXRlbSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0d2lkdGg6IDQ4JTtcXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQuY2FsZW5kYXJfbW9udGgge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdC5jYWxlbmRhcl9yb3cge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0LmNhbGVuZGFyX2RheSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0d2lkdGg6IHZhcigtLWNhbGVuZGFyRGF5U2l6ZSk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0aGVpZ2h0OiB2YXIoLS1jYWxlbmRhckRheVNpemUpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQmLmF2YWlsYWJsZV9kYXkge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6ICNmNWY2ZmE7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHNwYW4ge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRsaW5lLWhlaWdodDogdmFyKC0tY2FsZW5kYXJEYXlTaXplKTtcXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQmLmludmFsaWRfZGF5IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogdmFyKC0tZ3JheSk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdCYudmFsaWRfZGF5OmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Ji5jbGlja2VkIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQmLmF2YWlsYWJsZV9kYXkge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDUwJSAwIDAgNTAlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRzcGFuIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRib3JkZXI6IDAgIWltcG9ydGFudDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Y3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0LmRheW5hbWUge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMC44cmVtO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiB2YXIoLS1ncmF5KTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdC5mb3JtX2Zvb3RlciB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0dGV4dC1hbGlnbjogZW5kO1xcclxcblxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdC5pbnB1dF9yZXNldCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0YWxsOiB1bnNldDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IDAuOXJlbTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRAaW5jbHVkZSB1bmRlcmxpbmU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQuZm9ybV91cGRhdGUge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRtYXJnaW46IDAgMTVweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Ym9yZGVyOiAwO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcclxcblxcdFxcdFxcdC5jYW5jZWxfc3RlcC0xIHtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyLXRvcDogdmFyKC0tYm90dG9tQm9yZGVyKTtcXHJcXG5cXHRcXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcclxcblxcdFxcdFxcdFxcdGFuaW1hdGlvbjogc2xpZGUgZWFzZSAuM3M7XFxyXFxuXFx0XFxyXFxuXFx0XFx0XFx0XFx0LmNhbmNlbF9zdGVwX3RpdGxlIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IDJyZW07XFxyXFxuXFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0LmNhbmNlbF9zdGVwX2JvZHkge1xcclxcblxcdFxcdFxcdFxcdFxcdG1hcmdpbjogdmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbikgMDtcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0c21hbGwge1xcclxcblxcdFxcdFxcdFxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdHNwYW4ge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdEBpbmNsdWRlIHVuZGVybGluZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRmb3JtIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdC5jYW5jZWxfc3RlcF9idG4ge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRtYXJnaW4tbGVmdDogYXV0bztcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Ym9yZGVyOiAwO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LmFzaWRlIHtcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDMwJTtcXHJcXG5cXHRcXHRcXHRtYXJnaW46IDAgdmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbik7XFxyXFxuXFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0LmJpbGxzIHtcXHJcXG5cXHRcXHRcXHRcXHRwb3NpdGlvbjogc3RpY2t5O1xcclxcblxcdFxcdFxcdFxcdHRvcDogMTAwcHg7XFxyXFxuXFx0XFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogNTBweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHQucm9vbV9kZXRhaWwge1xcclxcblxcdFxcdFxcdFxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdFxcdFxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcclxcblxcdFxcdFxcdFxcdC5wcmljZSxcXHJcXG5cXHRcXHRcXHRcXHQuc2VydmljZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcclxcblxcdFxcdFxcdFxcdC50b3RhbF9wcmljZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Zm9udC1zaXplOiAzcmVtO1xcclxcblxcdFxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcclxcblxcdFxcdFxcdFxcdC5zdGF0dXMge1xcclxcblxcdFxcdFxcdFxcdFxcdG1hcmdpbjogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAwO1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHQuZGVsZXRlX2luZm8ge1xcclxcblxcdFxcdFxcdFxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0KiB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0LnJlZnVuZF9wcmljZS12YWx1ZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0ICAgIGZvbnQtc2l6ZTogM2VtO1xcclxcblxcdFxcdFxcdFxcdFxcdCAgICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0QGtleWZyYW1lcyBzbGlkZSB7XFxyXFxuXFx0XFx0ZnJvbSB7XFxyXFxuXFx0XFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDBweCk7XFxyXFxuXFx0XFx0XFx0b3BhY2l0eTogMDtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0dG8ge1xcclxcblxcdFxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcclxcblxcdFxcdFxcdG9wYWNpdHk6IDE7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQGluY2x1ZGUgY2hhbmdlSGVhZGVyQ29sb3I7XFxyXFxuXCIsXCJAbWl4aW4gdW5kZXJsaW5lIHtcXHJcXG5cXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAwLjg1O1xcclxcblxcdHRleHQtc2hhZG93OiAxcHggMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKSwgMXB4IC0xcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpLFxcclxcblxcdFxcdC0xcHggMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKSwgLTFweCAtMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKTtcXHJcXG5cXHRAY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIHN0YXIoJGZvbnQtc2l6ZSkge1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQpO1xcclxcblxcdGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIHJlc2VydmF0aW9uX2l0ZW0ge1xcclxcblxcdGZsZXg6IDEgMSA1MCU7XFxyXFxuXFx0cGFkZGluZzogNXB4IDEwcHg7XFxyXFxuXFx0Zm9udC1zaXplOiAwLjlyZW07XFxyXFxuXFx0aGVpZ2h0OiA1MHB4O1xcclxcblxcclxcblxcdC5yZXNlcnZhdGlvbl9kaXNwbGF5IHtcXHJcXG5cXHRcXHRjb2xvcjogdmFyKC0tZ3JheSk7XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBmYWNpbGl0eV9ydWxlX2l0ZW0ge1xcclxcblxcdG1hcmdpbjogMTVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZmFjaWxpdHlfcnVsZV9pY29uIHtcXHJcXG5cXHRmb250LXNpemU6IDIwcHg7XFxyXFxuXFx0d2lkdGg6IDQwcHg7XFxyXFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gZmFjaWxpdHlfcnVsZV9kZXNjcmlwdGlvbiB7XFxyXFxuXFx0bWFyZ2luLWxlZnQ6IDE1cHg7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGNoYW5nZUhlYWRlckNvbG9yIHtcXHJcXG5cXHQuYm9keV9oZWFkZXIgdWwgLmFpcmJuYl9pY29uLFxcclxcblxcdC5ib2R5X2hlYWRlciB1bCAuaGVhZGVyX3Byb2ZpbGUgLnByb2ZpbGVfaW1nIHtcXHJcXG5cXHRcXHRjb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxuXFx0fVxcclxcblxcdFxcclxcblxcdC5ib2R5X2hlYWRlciB1bCAucm9vbV9zZWFyY2ggaSB7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxufVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCBcIi4uL3Njc3MvcmVzZXJ2ZURldGFpbC5zY3NzXCI7XHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSBcIi4vdXRpbFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG4vKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKiogR2xvYmFsIFN0YXRlXHJcbiAqL1xyXG5sZXQgc3RhdGUgPSB7XHJcblx0Y3VyRGF0ZTogbmV3IERhdGUoKSxcclxuXHR0b2RheTogbmV3IERhdGUoKSxcclxuXHRjaGVja0luSWQ6IFwiXCIsXHJcblx0Y2hlY2tPdXRJZDogXCJcIixcclxufTtcclxuLypcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqIE1vZGVsXHJcbiAqL1xyXG5jb25zdCBEYXRhQ29udHJvbGxlciA9ICgoKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGdldFJlc2VydmVkRGF5czogYXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRjb25zdCB1cmwgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XHJcblx0XHRcdGNvbnN0IHJlc2VydmVJZCA9IHVybC5tYXRjaCgvKD88PXJlc2VydmF0aW9uc1xcLylbXFxkXSovKVswXTtcclxuXHRcdFx0Y29uc3Qgcm9vbUlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb29tSWRcIikudmFsdWU7XHJcblx0XHRcdGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLmdldChcclxuXHRcdFx0XHRgaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9yb29tLyR7cm9vbUlkfWBcclxuXHRcdFx0KTtcclxuXHRcdFx0cmV0dXJuIGRhdGEuZmlsdGVyKGVsID0+IGVsLnJlc2VydmVJZCAhPSByZXNlcnZlSWQpLm1hcChlbCA9PiBlbC5kYXkpO1xyXG5cdFx0fSxcclxuXHRcdGdldFJlc2VydmVQYXlsb2FkOiAoKSA9PiB7XHJcblx0XHRcdC8vIDEuIEdFVCBEQuuhnOu2gO2EsCDsiJnshowg7ZWY66Oo64u5IOqwgOqyqVxyXG5cdFx0XHRjb25zdCByb29tUHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb21QcmljZURCXCIpLnZhbHVlO1xyXG5cclxuXHRcdFx0Ly8gMi4g6rOE7IKwXHJcblx0XHRcdGNvbnN0IHJvb21OaWdodCA9XHJcblx0XHRcdFx0KG5ldyBEYXRlKHN0YXRlLmNoZWNrT3V0SWQpIC0gbmV3IERhdGUoc3RhdGUuY2hlY2tJbklkKSkgL1xyXG5cdFx0XHRcdCgxMDAwICogNjAgKiA2MCAqIDI0KTtcclxuXHRcdFx0Y29uc3QgdG90YWxQcmljZSA9IHJvb21OaWdodCAqIHJvb21QcmljZTtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRyb29tUHJpY2UsXHJcblx0XHRcdFx0cm9vbU5pZ2h0LFxyXG5cdFx0XHRcdHRvdGFsUHJpY2UsXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdFx0Z2V0TWF4UGVyc29uOiAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IG1heFBlcnNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vbU1heFBlcnNvbkRCXCIpLnZhbHVlO1xyXG5cdFx0XHRyZXR1cm4gbWF4UGVyc29uO1xyXG5cdFx0fSxcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuLypcclxuICoqKioqKioqKioqKioqKioqKioqKioqKioqIFZpZXdcclxuICovXHJcblxyXG5jb25zdCBVSUNvbnRyb2xsZXIgPSAoKCkgPT4ge1xyXG5cdGNvbnN0IERPTVN0cmluZyA9IHtcclxuXHRcdGN1ckNhbGVuZGFyOiBcIiNjdXJDYWxlbmRhclwiLFxyXG5cdFx0bmV4dENhbGVuZGFyOiBcIiNuZXh0Q2FsZW5kYXJcIixcclxuXHRcdHJlc2VydmVQb3B1cENvbnRhaW5lcjogXCIjcmVzZXJ2YXRpb25Gb3JtXCIsXHJcblx0XHRNb250aFllYXI6IFwiLmNhbGVuZGFyX21vbnRoXCIsXHJcblx0XHRuZXh0UGFnZTogXCIjbmV4dFBhZ2VcIixcclxuXHRcdHByZXZQYWdlOiBcIiNwcmV2UGFnZVwiLFxyXG5cdFx0Y2FsZW5kYXJCb3g6IFwiLmNhbGVuZGFyX2JveFwiLFxyXG5cdFx0Y2FsZW5kYXJDb250YWluZXI6IFwiI2NhbGVuZGFyV3JhcFwiLFxyXG5cdFx0Y2hlY2tJbklucHV0OiBcIiNjaGVja0luSW5wdXRcIixcclxuXHRcdGNoZWNrT3V0SW5wdXQ6IFwiI2NoZWNrT3V0SW5wdXRcIixcclxuXHRcdHZhbGlkRGF5OiBcIi52YWxpZF9kYXlcIixcclxuXHRcdGd1ZXN0Q291bnRlckJveDogXCIjZ3Vlc3RDb3VudGVyQm94XCIsXHJcblx0XHRndWVzdENvdW50OiBcIiNndWVzdENvdW50XCIsXHJcblx0XHRyZXNldElucHV0OiBcIiNyZXNldElucHV0XCIsXHJcblx0XHRndWVzdFBsdXNCdG46IFwiI2d1ZXN0UGx1c0J0blwiLFxyXG5cdFx0Z3Vlc3RNaW51c0J0bjogXCIjZ3Vlc3RNaW51c0J0blwiLFxyXG5cdFx0cm9vbVByaWNlOiBcIiNyb29tUHJpY2VcIixcclxuXHRcdHJvb21OaWdodDogXCIjcm9vbU5pZ2h0XCIsXHJcblx0XHR0b3RhbFByaWNlOiBcIiN0b3RhbFByaWNlXCIsXHJcblx0XHR1cGRhdGVCdG46IFwiI2Zvcm1VcGRhdGVCdG5cIixcclxuXHRcdGZvb3RlcjogXCIjZm9vdGVyXCIsXHJcblx0XHR1cGRhdGVGb3JtOiBcIiNjaGFuZ2VTdGVwMVwiLFxyXG5cdFx0Y2FuY2VsRm9ybTogXCIjZGVsZXRlU3RlcDFcIixcclxuXHRcdHN0YXR1czogXCIjcmVzZXJ2ZVN0YXR1c1wiLFxyXG5cdFx0ZGVsZXRlSW5mbzogXCIjZGVsZXRlSW5mb1wiLFxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRpc3BsYXlNb250aCA9ICh5ZWFyLCBtb250aCkgPT4ge1xyXG5cdFx0Y29uc3QgW2N1ck1vbnRoLCBuZXh0TW9udGhdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuXHRcdFx0RE9NU3RyaW5nLk1vbnRoWWVhclxyXG5cdFx0KTtcclxuXHRcdGN1ck1vbnRoLnRleHRDb250ZW50ID0gYCR7bW9udGh97JuUICR7eWVhcn1gO1xyXG5cdFx0bmV4dE1vbnRoLnRleHRDb250ZW50ID1cclxuXHRcdFx0bW9udGggPT09IDEyID8gYDHsm5QgJHt5ZWFyICsgMX1gIDogYCR7bW9udGggKyAxfeyblCAke3llYXJ9YDtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzZXRCdXR0b25TdHlsZSA9ICh5ZWFyLCBtb250aCkgPT4ge1xyXG5cdFx0Y29uc3QgcHJldkJ0bk5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKERPTVN0cmluZy5wcmV2UGFnZSk7XHJcblx0XHRjb25zdCBDTF9ESVNBQkxFRCA9IFwiQnRuRGlzYWJsZWRcIjtcclxuXHRcdGlmIChcclxuXHRcdFx0eWVhciA9PT0gc3RhdGUudG9kYXkuZ2V0RnVsbFllYXIoKSAmJlxyXG5cdFx0XHRtb250aCA9PT0gc3RhdGUudG9kYXkuZ2V0TW9udGgoKSArIDFcclxuXHRcdCkge1xyXG5cdFx0XHRwcmV2QnRuTm9kZS5kaXNhYmxlZCA9IHRydWU7XHJcblx0XHRcdHByZXZCdG5Ob2RlLmNsYXNzTGlzdC5hZGQoQ0xfRElTQUJMRUQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cHJldkJ0bk5vZGUuZGlzYWJsZWQgPSBmYWxzZTtcclxuXHRcdFx0cHJldkJ0bk5vZGUuY2xhc3NMaXN0LnJlbW92ZShDTF9ESVNBQkxFRCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgY3JlYXRlRGF5SFRNTCA9ICh5ZWFyLCBtb250aCwgZGF5KSA9PiB7XHJcblx0XHRjb25zdCB7IHRvZGF5IH0gPSBzdGF0ZTtcclxuXHRcdGxldCBDTF9EQVkgPSBcInZhbGlkX2RheVwiO1xyXG5cdFx0aWYgKG1vbnRoID09PSB0b2RheS5nZXRNb250aCgpICsgMSkge1xyXG5cdFx0XHRpZiAoZGF5IDwgdG9kYXkuZ2V0RGF0ZSgpKSBDTF9EQVkgPSBcImludmFsaWRfZGF5XCI7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYFxyXG5cdFx0PGRpdiBjbGFzcz1cImNhbGVuZGFyX2RheVwiPlxyXG5cdFx0XHQ8c3BhbiBjbGFzcz1cIiR7Q0xfREFZfVwiIGlkPVwiJHttb250aCA9PSAxMz8geWVhcisxOiB5ZWFyfS0ke21vbnRoID09IDEzPyBcIjAxXCI6IHV0aWwuc2V0TW9udGhDb3VudChtb250aCl9LSR7dXRpbC5zZXRGaXhEYXlDb3VudChkYXkpfVwiPlxyXG5cdFx0XHQke2RheX1cclxuXHRcdFx0PC9zcGFuPlxyXG5cdFx0PC9kaXY+YDtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBjcmVhdGVDYWxlbmRhckhUTUwgPSAoeWVhciwgbW9udGgpID0+IHtcclxuXHRcdGNvbnN0IGZpcnN0RGF5ID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCAxKTtcclxuXHRcdGNvbnN0IGxhc3REYXkgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMCkuZ2V0RGF0ZSgpO1xyXG5cdFx0Y29uc3QgZmlyc3REYXlOYW1lID0gZmlyc3REYXkuZ2V0RGF5KCk7IC8vICAwfjZcclxuXHJcblx0XHRsZXQgc3RhcnREYXlDb3VudCA9IDE7XHJcblx0XHRsZXQgbWFya3VwID0gXCI8ZGl2IGNsYXNzPSdjYWxlbmRhcl9ib3gnPlwiO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcclxuXHRcdFx0bWFya3VwICs9IFwiPGRpdiBjbGFzcz0nY2FsZW5kYXJfcm93Jz5cIjtcclxuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCA3OyBqKyspIHtcclxuXHRcdFx0XHQvLyAg7J2067KIIOuLrCDsi5zsnpEg7JqU7J28IOydtOyghOydvCDrlYxcclxuXHRcdFx0XHRpZiAoaSA9PSAwICYmIGogPCBmaXJzdERheU5hbWUpIHtcclxuXHRcdFx0XHRcdG1hcmt1cCArPSBgPGRpdiBjbGFzcz1cImNhbGVuZGFyX2RheVwiPjxzcGFuPjwvc3Bhbj48L2Rpdj5gO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyAg7J2067KIIOuLrCDsi5zsnpEg7JqU7J28IOydtO2bhOydvCDrlYxcclxuXHRcdFx0XHRlbHNlIGlmIChzdGFydERheUNvdW50IDw9IGxhc3REYXkpIHtcclxuXHRcdFx0XHRcdG1hcmt1cCArPSBjcmVhdGVEYXlIVE1MKHllYXIsIG1vbnRoLCBzdGFydERheUNvdW50KyspO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRtYXJrdXAgKz0gXCI8L2Rpdj5cIjtcclxuXHRcdH1cclxuXHRcdG1hcmt1cCArPSBcIjwvZGl2PlwiO1xyXG5cdFx0cmV0dXJuIG1hcmt1cDtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBhZGRJbnZhbGlkRGF5Q2xhc3MgPSAoY2xlYW5lZERheXMpID0+IHtcclxuXHRcdGNvbnN0IENMX1ZBTElEX0RBWSA9IFwidmFsaWRfZGF5XCI7XHJcblx0XHRjb25zdCBDTF9JTlZBTElEX0RBWSA9IFwiaW52YWxpZF9kYXlcIjtcclxuXHJcblx0XHRjbGVhbmVkRGF5cy5mb3JFYWNoKChlbCkgPT4ge1xyXG5cdFx0XHRlbC5jbGFzc0xpc3QuYWRkKENMX0lOVkFMSURfREFZKTtcclxuXHRcdFx0ZWwuY2xhc3NMaXN0LnJlbW92ZShDTF9WQUxJRF9EQVkpO1xyXG5cdFx0fSk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGdldERPTVN0cmluZzogKCkgPT4gRE9NU3RyaW5nLFxyXG5cdFx0Y2xvc2VQb3B1cDogKGV2ZW50KSA9PiB7XHJcblx0XHRcdGlmIChldmVudCkgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0cmVuZGVyQ2FsZW5kYXI6ICh5ZWFyLCBtb250aCkgPT4ge1xyXG5cdFx0XHRkaXNwbGF5TW9udGgoeWVhciwgbW9udGgpO1xyXG5cdFx0XHRzZXRCdXR0b25TdHlsZSh5ZWFyLCBtb250aCk7XHJcblxyXG5cdFx0XHRkb2N1bWVudFxyXG5cdFx0XHRcdC5xdWVyeVNlbGVjdG9yKERPTVN0cmluZy5jdXJDYWxlbmRhcilcclxuXHRcdFx0XHQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG5cdFx0XHRcdFx0XCJiZWZvcmVlbmRcIixcclxuXHRcdFx0XHRcdGNyZWF0ZUNhbGVuZGFySFRNTCh5ZWFyLCBtb250aClcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRkb2N1bWVudFxyXG5cdFx0XHRcdC5xdWVyeVNlbGVjdG9yKERPTVN0cmluZy5uZXh0Q2FsZW5kYXIpXHJcblx0XHRcdFx0Lmluc2VydEFkamFjZW50SFRNTChcclxuXHRcdFx0XHRcdFwiYmVmb3JlZW5kXCIsXHJcblx0XHRcdFx0XHRjcmVhdGVDYWxlbmRhckhUTUwoeWVhciwgbW9udGggKyAxKVxyXG5cdFx0XHRcdCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGNsZWFyQ2FsZW5kYXI6ICgpID0+IHtcclxuXHRcdFx0Y29uc3QgW2N1ckNhbGVuZGFyLCBuZXh0Q2FsZW5kYXJdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuXHRcdFx0XHRET01TdHJpbmcuY2FsZW5kYXJCb3hcclxuXHRcdFx0KTtcclxuXHRcdFx0Y3VyQ2FsZW5kYXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjdXJDYWxlbmRhcik7XHJcblx0XHRcdG5leHRDYWxlbmRhci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5leHRDYWxlbmRhcik7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJlRXhjZXB0UmVzZXJ2ZWREYXk6IChyZXNlcnZlZERheXMpID0+IHtcclxuXHRcdFx0Y29uc3QgY2FsZW5kYXJXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHRET01TdHJpbmcuY2FsZW5kYXJDb250YWluZXJcclxuXHRcdFx0KTtcclxuXHRcdFx0Y29uc3QgcmVuZGVyZWREYXlzID0gQXJyYXkuZnJvbShcclxuXHRcdFx0XHRjYWxlbmRhcldyYXAucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIilcclxuXHRcdFx0KTtcclxuXHRcdFx0Y29uc3QgY2xlYW5lZERheXMgPSByZW5kZXJlZERheXMuZmlsdGVyKChkYXkpID0+XHJcblx0XHRcdFx0cmVzZXJ2ZWREYXlzLmluY2x1ZGVzKGRheS5pZClcclxuXHRcdFx0KTtcclxuXHRcdFx0YWRkSW52YWxpZERheUNsYXNzKGNsZWFuZWREYXlzKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0cmVuZGVySW52YWxpZERheTogKGNsaWNrZWRJZCwgcmVzZXJ2ZWREYXlzID0gbnVsbCkgPT4ge1xyXG5cdFx0XHRjb25zdCBjYWxlbmRhcldyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdERPTVN0cmluZy5jYWxlbmRhckNvbnRhaW5lclxyXG5cdFx0XHQpO1xyXG5cdFx0XHRjb25zdCBkYXlzID0gQXJyYXkuZnJvbShjYWxlbmRhcldyYXAucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIikpO1xyXG5cdFx0XHRsZXQgY2xlYW5lZERheXM7XHJcblxyXG5cdFx0XHRpZiAoc3RhdGUuY2hlY2tJbklkID09PSBcIlwiKSB7XHJcblx0XHRcdFx0Ly8gMS4gR0VUIO2BtOumreuQnCDrgqDsp5wg7J207ZuE7J2YIOyYiOyVveuQnCDsoJzsnbwg67mg66W4IOuCoOynnFxyXG5cdFx0XHRcdGNvbnN0IGxhdGVzdERheSA9IHJlc2VydmVkRGF5c1xyXG5cdFx0XHRcdFx0LmZpbHRlcigoZGF5c3RyKSA9PiBjbGlja2VkSWQgPCBkYXlzdHIpXHJcblx0XHRcdFx0XHQuc29ydCgpWzBdO1xyXG5cdFx0XHRcdC8vIDIuIOyytO2BrOyVhOybgyDrtojqsIDriqXtlZwg64Kg7KecIOuniO2BrFxyXG5cdFx0XHRcdGNsZWFuZWREYXlzID0gZGF5cy5maWx0ZXIoXHJcblx0XHRcdFx0XHQoZGF5KSA9PiBkYXkuaWQgPCBjbGlja2VkSWQgfHwgbGF0ZXN0RGF5IDwgZGF5LmlkXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHQvLyAzLiDsmIjsmbgpIOyytO2BrOyduCDrgqDsp5wg7JWe65Kk66GcIOu2iOqwgOuKpe2VnCDrgqDsp5zsnbwg6rK97JqwXHJcblx0XHRcdFx0Y29uc3QgY2xpY2tlZERhdGUgPSBuZXcgRGF0ZShjbGlja2VkSWQpO1xyXG5cdFx0XHRcdGNsaWNrZWREYXRlLnNldERhdGUoY2xpY2tlZERhdGUuZ2V0RGF0ZSgpICsgMSk7XHJcblx0XHRcdFx0Y29uc3Qgb25lUGx1c0RheSA9IGNsaWNrZWREYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuXHRcdFx0XHRpZiAocmVzZXJ2ZWREYXlzLmluY2x1ZGVzKG9uZVBsdXNEYXkpKSB7XHJcblx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvbmVQbHVzRGF5KS5jbGFzc0xpc3QucmVtb3ZlKFwiaW52YWxpZF9kYXlcIik7XHJcblx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvbmVQbHVzRGF5KS5jbGFzc0xpc3QuYWRkKFwidmFsaWRfZGF5XCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRhZGRJbnZhbGlkRGF5Q2xhc3MoY2xlYW5lZERheXMpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNsZWFuZWREYXlzID0gZGF5cy5maWx0ZXIoKGRheSkgPT4gZGF5LmlkID4gY2xpY2tlZElkKTtcclxuXHRcdFx0XHRhZGRJbnZhbGlkRGF5Q2xhc3MoY2xlYW5lZERheXMpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldENoZWNrSW5JbnB1dDogKGlkKSA9PlxyXG5cdFx0XHQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHRET01TdHJpbmcuY2hlY2tJbklucHV0XHJcblx0XHRcdCkudmFsdWUgPSB1dGlsLmZvcm1hdERhc2hUb0RvdChpZCkpLFxyXG5cdFx0c2V0Q2hlY2tPdXRJbnB1dDogKGlkKSA9PlxyXG5cdFx0XHQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHRET01TdHJpbmcuY2hlY2tPdXRJbnB1dFxyXG5cdFx0XHQpLnZhbHVlID0gdXRpbC5mb3JtYXREYXNoVG9Eb3QoaWQpKSxcclxuXHJcblx0XHRyZW5kZXJEYXlCYWNrZ3JvdW5kOiAoaWQpID0+IHtcclxuXHRcdFx0Y29uc3QgZGF5cyA9IEFycmF5LmZyb20oXHJcblx0XHRcdFx0ZG9jdW1lbnRcclxuXHRcdFx0XHRcdC5xdWVyeVNlbGVjdG9yKERPTVN0cmluZy5jYWxlbmRhckNvbnRhaW5lcilcclxuXHRcdFx0XHRcdC5xdWVyeVNlbGVjdG9yQWxsKERPTVN0cmluZy52YWxpZERheSlcclxuXHRcdFx0KTtcclxuXHRcdFx0Y29uc3QgQ0xfQVZBSUxfREFZID0gXCJhdmFpbGFibGVfZGF5XCI7XHJcblx0XHRcdGRheXMubWFwKChlbCkgPT4ge1xyXG5cdFx0XHRcdGVsLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShDTF9BVkFJTF9EQVkpO1xyXG5cdFx0XHRcdHJldHVybiBlbDtcclxuXHRcdFx0fSlcclxuXHRcdFx0XHQuZmlsdGVyKChlbCkgPT4gc3RhdGUuY2hlY2tJbklkIDw9IGVsLmlkICYmIGVsLmlkIDw9IGlkKVxyXG5cdFx0XHRcdC5mb3JFYWNoKChlbCkgPT4ge1xyXG5cdFx0XHRcdFx0ZWwucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKENMX0FWQUlMX0RBWSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0cmVuZGVyR3Vlc3RDb3VudDogKGV2ZW50LCBtYXhQZXJzb24sIG1pblBlcnNvbiA9IDEpID0+IHtcclxuXHRcdFx0Y29uc3QgZ3Vlc3RWYWx1ZU5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKERPTVN0cmluZy5ndWVzdENvdW50KTtcclxuXHRcdFx0Y29uc3QgcGx1c0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9NU3RyaW5nLmd1ZXN0UGx1c0J0bik7XHJcblx0XHRcdGNvbnN0IG1pbnVzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihET01TdHJpbmcuZ3Vlc3RNaW51c0J0bik7XHJcblx0XHRcdGNvbnN0IENMX0RJU0FCTEVEID0gXCJCdG5EaXNhYmxlZFwiO1xyXG5cdFx0XHRpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoRE9NU3RyaW5nLmd1ZXN0UGx1c0J0bikpIHtcclxuXHRcdFx0XHRpZiAoZ3Vlc3RWYWx1ZU5vZGUudGV4dENvbnRlbnQgPCBtYXhQZXJzb24pIHtcclxuXHRcdFx0XHRcdGd1ZXN0VmFsdWVOb2RlLnRleHRDb250ZW50ID0gKytndWVzdFZhbHVlTm9kZS50ZXh0Q29udGVudDtcclxuXHRcdFx0XHRcdG1pbnVzQnRuLmNsYXNzTGlzdC5yZW1vdmUoQ0xfRElTQUJMRUQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZ3Vlc3RWYWx1ZU5vZGUudGV4dENvbnRlbnQgPT0gbWF4UGVyc29uKSB7XHJcblx0XHRcdFx0XHRwbHVzQnRuLmNsYXNzTGlzdC5hZGQoQ0xfRElTQUJMRUQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmIChldmVudC50YXJnZXQubWF0Y2hlcyhET01TdHJpbmcuZ3Vlc3RNaW51c0J0bikpIHtcclxuXHRcdFx0XHRpZiAoZ3Vlc3RWYWx1ZU5vZGUudGV4dENvbnRlbnQgPiBtaW5QZXJzb24pIHtcclxuXHRcdFx0XHRcdGd1ZXN0VmFsdWVOb2RlLnRleHRDb250ZW50ID0gLS1ndWVzdFZhbHVlTm9kZS50ZXh0Q29udGVudDtcclxuXHRcdFx0XHRcdHBsdXNCdG4uY2xhc3NMaXN0LnJlbW92ZShDTF9ESVNBQkxFRCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChndWVzdFZhbHVlTm9kZS50ZXh0Q29udGVudCA9PSBtaW5QZXJzb24pIHtcclxuXHRcdFx0XHRcdG1pbnVzQnRuLmNsYXNzTGlzdC5hZGQoQ0xfRElTQUJMRUQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRnZXRHdWVzdENvdW50OiAoKSA9PlxyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKERPTVN0cmluZy5ndWVzdENvdW50KS50ZXh0Q29udGVudCxcclxuXHJcblx0XHRyZW5kZXJQcmljZTogKHBheWxvYWQpID0+IHtcclxuXHRcdFx0Y29uc3QgeyByb29tUHJpY2UsIHJvb21OaWdodCwgdG90YWxQcmljZSB9ID0gcGF5bG9hZDtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihET01TdHJpbmcucm9vbU5pZ2h0KS50ZXh0Q29udGVudCA9XHJcblx0XHRcdFx0cm9vbU5pZ2h0ICsgXCLrsJVcIjtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHRET01TdHJpbmcucm9vbVByaWNlXHJcblx0XHRcdCkudGV4dENvbnRlbnQgPSB1dGlsLmZvcm1hdFdvbihyb29tUHJpY2UpO1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdERPTVN0cmluZy50b3RhbFByaWNlXHJcblx0XHRcdCkudGV4dENvbnRlbnQgPSB1dGlsLmZvcm1hdFdvbih0b3RhbFByaWNlICsgNTAwMCk7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRkaXNwbGF5VXBkYXRlRGlzcGxheWVyOiAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHN0YXR1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9NU3RyaW5nLnN0YXR1cykuY2xhc3NMaXN0O1xyXG5cdFx0XHRpZiAoc3RhdHVzLmNvbnRhaW5zKFwiUEVORElOR1wiKSkge1xyXG5cdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9NU3RyaW5nLmZvb3Rlcikuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1x0XHRcdFx0XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0YWxlcnQoXCLsmIjslb3rjIDquLDspJEg7IOB7YOc6rCAIOyVhOuLiOuptCDrs4Dqsr3tlaAg7IiYIOyXhuyKteuLiOuLpC5cIilcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0ZGlzcGxheVVwZGF0ZUZvcm06ICgpID0+IHtcclxuXHRcdFx0Y29uc3QgdXBkYXRlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9NU3RyaW5nLnVwZGF0ZUZvcm0pO1xyXG5cdFx0XHRjb25zdCBjYW5jZWxGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihET01TdHJpbmcuY2FuY2VsRm9ybSk7XHJcblx0XHRcdGNhbmNlbEZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cdFx0XHR1cGRhdGVGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRkaXNwbGF5Q2FuY2VsRm9ybTogKCkgPT4ge1xyXG5cdFx0XHRjb25zdCB1cGRhdGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihET01TdHJpbmcudXBkYXRlRm9ybSk7XHJcblx0XHRcdGNvbnN0IGNhbmNlbEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKERPTVN0cmluZy5jYW5jZWxGb3JtKTtcclxuXHRcdFx0dXBkYXRlRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRcdGNhbmNlbEZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdGRpc3BsYXlSZWZ1bmRQcmljZTogKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihET01TdHJpbmcuZGVsZXRlSW5mbykuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIixcclxuXHRcdGNsZWFyUmVmdW5kUHJpY2U6ICgpID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9NU3RyaW5nLmRlbGV0ZUluZm8pLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIixcclxuXHRcdFxyXG5cdH07XHJcbn0pKCk7XHJcblxyXG4vKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29udHJvbGxlclxyXG4gKi9cclxuXHJcbmNvbnN0IENvbnRyb2xsZXIgPSAoKERhdGFDdHJsLCBVSUN0cmwpID0+IHtcclxuXHRjb25zdCBET00gPSBVSUN0cmwuZ2V0RE9NU3RyaW5nKCk7XHJcblx0Y29uc3Qgc2V0RXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcblx0XHQvLyDsl4XrjbDsnbTtirgg67KE7Yq8IO2BtOumrVxyXG5cdFx0ZG9jdW1lbnRcclxuXHRcdFx0LnF1ZXJ5U2VsZWN0b3IoRE9NLnVwZGF0ZUJ0bilcclxuXHRcdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRSZXNlcnZhdGlvbkZvcm0pO1xyXG5cdFx0Ly8g64us66ClIOuEmOq4sOq4sCDtgbTrpq1cclxuXHRcdGRvY3VtZW50XHJcblx0XHRcdC5xdWVyeVNlbGVjdG9yKERPTS5wcmV2UGFnZSlcclxuXHRcdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrUGFnZUJ0bik7XHJcblx0XHRkb2N1bWVudFxyXG5cdFx0XHQucXVlcnlTZWxlY3RvcihET00ubmV4dFBhZ2UpXHJcblx0XHRcdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGlja1BhZ2VCdG4pO1xyXG5cdFx0Ly8g64us66ClIOuCoOynnCDtgbTrpq1cclxuXHRcdGRvY3VtZW50XHJcblx0XHRcdC5xdWVyeVNlbGVjdG9yKERPTS5jYWxlbmRhckNvbnRhaW5lcilcclxuXHRcdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrQ2FsQ29udGFpbmVyKTtcclxuXHRcdC8vIOyytO2BrOyVhOybgyDrgqDsp5wg6rOg66W8IOuVjCDrp4jsmrDsiqQg7Jik67KEXHJcblx0XHRkb2N1bWVudFxyXG5cdFx0XHQucXVlcnlTZWxlY3RvcihET00uY2FsZW5kYXJDb250YWluZXIpXHJcblx0XHRcdC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIG9uTW91c2VvdmVyQ2FsQ29udGFpbmVyKTtcclxuXHRcdC8vIOqyjOyKpO2KuCDsubTsmrTthLBcclxuXHRcdGRvY3VtZW50XHJcblx0XHRcdC5xdWVyeVNlbGVjdG9yKERPTS5ndWVzdENvdW50ZXJCb3gpXHJcblx0XHRcdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGlja0d1ZXN0Q291bnRlckJveCk7XHJcblx0XHQvLyDrgqDsp5wg7Y+8IOumrOyFiyDtgbTrpq1cclxuXHRcdGRvY3VtZW50XHJcblx0XHRcdC5xdWVyeVNlbGVjdG9yKERPTS5yZXNldElucHV0KVxyXG5cdFx0XHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQ2xpY2tSZXNldEJ0bik7XHJcblx0XHQvLyDsl4XrjbDsnbTtirgg7JWE7J207L2YIO2BtOumrVxyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1cGRhdGVEaXNwbGF5ZXJcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQ2xpY2tVcGRhdGVEaXNwbGF5ZXIpO1xyXG5cdFx0Ly8g7JeF642w7J207Yq4IOuLpOydjCDrsoTtirwg7YG066atXHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VwZGF0ZU5leHRCdG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQ2xpY2tVcGRhdGVOZXh0QnRuKTtcclxuXHRcdC8vIOuSpOuhnOqwgOq4sCDrsoTtirwg7YG066atXHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2JhY2tJY29uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24ucGF0aG5hbWUubWF0Y2goLy4qcmVzZXJ2YXRpb25zLylbMF0pO1xyXG5cdFx0Ly8g7JiI7JW9IOy3qOyGjCDri6TsnYwg67KE7Yq8IO2BtOumrVxyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW5jZWxOZXh0QnRuXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcblx0XHRcdFVJQ3RybC5kaXNwbGF5Q2FuY2VsRm9ybSgpO1xyXG5cdFx0XHRVSUN0cmwuZGlzcGxheVJlZnVuZFByaWNlKCk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBjbGVhclN0YXRlID0gKCkgPT4ge1xyXG5cdFx0c3RhdGUgPSB7IC4uLnN0YXRlLCBjaGVja0luSWQ6IFwiXCIsIGNoZWNrT3V0SWQ6IFwiXCIgfTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBvbkNsaWNrUmVzZXRCdG4gPSAoKSA9PiB7XHJcblx0XHQvLyAxLiBzdGFhdGUg7LSI6riw7ZmUXHJcblx0XHRjbGVhclN0YXRlKCk7XHJcblx0XHQvLyAyLiBVSSDstIjquLDtmZQg67CPIOuPmeq4sO2ZlFxyXG5cdFx0VUlDdHJsLmNsZWFyQ2FsZW5kYXIoKTtcclxuXHRcdC8vIDMuIOuCoOynnCDtj7wg7LSI6riw7ZmUXHJcblx0XHRzZXRJbml0YWlsQ2FsZW5kYXIoKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBvbkNsaWNrR3Vlc3RDb3VudGVyQm94ID0gKGV2ZW50KSA9PlxyXG5cdFx0VUlDdHJsLnJlbmRlckd1ZXN0Q291bnQoZXZlbnQsIERhdGFDdHJsLmdldE1heFBlcnNvbigpKTtcclxuXHJcblx0Y29uc3Qgb25Nb3VzZW92ZXJDYWxDb250YWluZXIgPSAoZXZlbnQpID0+IHtcclxuXHRcdGlmIChzdGF0ZS5jaGVja0luSWQgIT09IFwiXCIgJiYgc3RhdGUuY2hlY2tPdXRJZCA9PSBcIlwiKSB7XHJcblx0XHRcdGlmIChldmVudC50YXJnZXQubWF0Y2hlcyhET00udmFsaWREYXkpKSB7XHJcblx0XHRcdFx0Y29uc3QgaWQgPSBldmVudC50YXJnZXQuaWQ7XHJcblx0XHRcdFx0VUlDdHJsLnJlbmRlckRheUJhY2tncm91bmQoaWQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb25DbGlja0NhbENvbnRhaW5lciA9IGFzeW5jIChldmVudCkgPT4ge1xyXG5cdFx0aWYgKHN0YXRlLmNoZWNrT3V0SWQgIT09IFwiXCIpIHJldHVybjtcclxuXHRcdGNvbnN0IGNsaWNrZWREYXkgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5jYWxlbmRhcl9kYXkgc3Bhbi52YWxpZF9kYXlcIik7XHJcblx0XHQvL1x07LK07YGs7JWE7JuDIO2BtOumrVxyXG5cdFx0aWYgKGNsaWNrZWREYXkgIT09IG51bGwpIHtcclxuXHRcdFx0Y29uc3QgaWQgPSBjbGlja2VkRGF5LmlkO1xyXG5cdFx0XHRjbGlja2VkRGF5LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XHJcblx0XHRcdGlmIChzdGF0ZS5jaGVja0luSWQgIT09IFwiXCIpIHtcclxuXHRcdFx0XHQvLyAxLiDtgbTrpq3rkJwg64W465OcIGlkIOydtO2bhCDrgqDsp5wgaW52YWxpZFxyXG5cdFx0XHRcdFVJQ3RybC5yZW5kZXJJbnZhbGlkRGF5KGlkKTtcclxuXHRcdFx0XHQvLyAyLiDssrTtgazslYTsm4Mg7J247ZKL7JeQIOuCoOynnCDrj5nquLDtmZRcclxuXHRcdFx0XHRVSUN0cmwuc2V0Q2hlY2tPdXRJbnB1dChpZCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c3RhdGUuY2hlY2tPdXRJZCA9IGlkO1xyXG5cdFx0XHRcdC8vIDMuIOq4iOyVoSDqs4TsgrBcclxuXHRcdFx0XHRjb25zdCBwYXlsb2FkID0gRGF0YUN0cmwuZ2V0UmVzZXJ2ZVBheWxvYWQoKTtcclxuXHRcdFx0XHQvLyA0LiDquIjslaEg66CM642U66eBXHJcblx0XHRcdFx0VUlDdHJsLnJlbmRlclByaWNlKHBheWxvYWQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vXHTssrTtgazsnbgg7YG066atXHJcblx0XHRcdGVsc2UgaWYgKHN0YXRlLmNoZWNrSW5JZCA9PT0gXCJcIikge1xyXG5cdFx0XHRcdGNvbnN0IHJlc2VydmVkRGF5cyA9IGF3YWl0IERhdGFDdHJsLmdldFJlc2VydmVkRGF5cygpO1xyXG5cdFx0XHRcdC8vIDEuIOu2iOqwgOuKpe2VnCDrgqDsp5wg66eI7YGsIO2RnOyLnFxyXG5cdFx0XHRcdFVJQ3RybC5yZW5kZXJJbnZhbGlkRGF5KGlkLCByZXNlcnZlZERheXMpO1xyXG5cdFx0XHRcdC8vIDIuIOyytO2BrOyduCDsnbjtkovsl5Ag64Kg7KecIOuPmeq4sO2ZlFxyXG5cdFx0XHRcdFVJQ3RybC5zZXRDaGVja0luSW5wdXQoaWQpO1xyXG5cdFx0XHRcdHN0YXRlLmNoZWNrSW5JZCA9IGlkO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb25DbGlja1BhZ2VCdG4gPSBhc3luYyAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRVSUN0cmwuY2xlYXJDYWxlbmRhcigpO1xyXG5cclxuXHRcdGNvbnN0IGlzUHJldkJ0biA9IGV2ZW50LnRhcmdldC5tYXRjaGVzKERPTS5wcmV2UGFnZSk7XHJcblxyXG5cdFx0Ly8gcHJldkJ0biwgbmV4dEJ0biDrtoTquLAgLT4g64us66ClIOyblCDspp3qsJBcclxuXHRcdGlmIChpc1ByZXZCdG4pIHtcclxuXHRcdFx0c3RhdGUuY3VyRGF0ZS5zZXRNb250aChzdGF0ZS5jdXJEYXRlLmdldE1vbnRoKCkgLSAxKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0YXRlLmN1ckRhdGUuc2V0TW9udGgoc3RhdGUuY3VyRGF0ZS5nZXRNb250aCgpICsgMSk7XHJcblx0XHR9XHJcblx0XHQvLyAxLiDri6zroKUg66CM642U66eBXHJcblx0XHRVSUN0cmwucmVuZGVyQ2FsZW5kYXIoXHJcblx0XHRcdHN0YXRlLmN1ckRhdGUuZ2V0RnVsbFllYXIoKSxcclxuXHRcdFx0c3RhdGUuY3VyRGF0ZS5nZXRNb250aCgpICsgMVxyXG5cdFx0KTtcclxuXHRcdC8vIDIuIOyYiOyVvSDrtojqsIDriqUg66CM642U66eBXHJcblx0XHRVSUN0cmwuYmVFeGNlcHRSZXNlcnZlZERheShhd2FpdCBEYXRhQ3RybC5nZXRSZXNlcnZlZERheXMoKSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc2V0SW5pdGFpbENhbGVuZGFyID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0c3RhdGUuY3VyRGF0ZSA9IG5ldyBEYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hlY2tJbklucHV0XCIpLnBsYWNlaG9sZGVyKTtcclxuXHRcdFVJQ3RybC5yZW5kZXJDYWxlbmRhcihcclxuXHRcdFx0c3RhdGUuY3VyRGF0ZS5nZXRGdWxsWWVhcigpLFxyXG5cdFx0XHRzdGF0ZS5jdXJEYXRlLmdldE1vbnRoKCkgKyAxXHJcblx0XHQpO1xyXG5cdFx0Y29uc3QgcmVzZXJ2ZWREYXlzID0gYXdhaXQgRGF0YUN0cmwuZ2V0UmVzZXJ2ZWREYXlzKCk7XHJcblx0XHRVSUN0cmwuYmVFeGNlcHRSZXNlcnZlZERheShyZXNlcnZlZERheXMpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHN1Ym1pdFJlc2VydmF0aW9uRm9ybSA9ICgpID0+IHtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9NLmNoZWNrSW5JbnB1dCkudmFsdWUgPSBzdGF0ZS5jaGVja0luSWQ7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKERPTS5jaGVja091dElucHV0KS52YWx1ZSA9IHN0YXRlLmNoZWNrT3V0SWQ7XHJcblxyXG5cdFx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9NLnJlc2VydmVQb3B1cENvbnRhaW5lcik7XHJcblx0XHRjb25zdCBudW1PZkd1ZXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihET00uZ3Vlc3RDb3VudCkudGV4dENvbnRlbnQ7XHJcblx0XHRjb25zdCBndWVzdElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG5cdFx0Z3Vlc3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibnVtT2ZHdWVzdFwiKTtcclxuXHRcdGd1ZXN0SW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgbnVtT2ZHdWVzdCk7XHJcblx0XHRmb3JtLmFwcGVuZENoaWxkKGd1ZXN0SW5wdXQpO1xyXG5cdFx0Zm9ybS5zdWJtaXQoKTtcclxuXHR9O1xyXG5cdFxyXG5cdGNvbnN0IG9uQ2xpY2tVcGRhdGVEaXNwbGF5ZXIgPSAoKSA9PiBVSUN0cmwuZGlzcGxheVVwZGF0ZURpc3BsYXllcigpO1xyXG5cdFxyXG5cdGNvbnN0IG9uQ2xpY2tVcGRhdGVOZXh0QnRuID0gKCkgPT4ge1xyXG5cdFx0VUlDdHJsLmRpc3BsYXlVcGRhdGVGb3JtKCk7XHJcblx0XHRVSUN0cmwuY2xlYXJSZWZ1bmRQcmljZSgpO1xyXG5cdFx0XHJcblx0XHQvLyDquLDsobTsl5Ag7JiI7JW965CcIOyytO2BrOyduCDssrTtgazslYTsm4Mg7YG066atXHJcblx0XHRjb25zdCBpbml0aWFsQ2hlY2tJbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2hlY2tJbklucHV0XCIpLnBsYWNlaG9sZGVyO1xyXG5cdFx0Y29uc3QgaW5pdGlhbENoZWNrT3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaGVja091dElucHV0XCIpLnBsYWNlaG9sZGVyO1xyXG5cdFx0XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbml0aWFsQ2hlY2tJbikuY2xpY2soKTtcclxuXHRcdHNldFRpbWVvdXQoKCk9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpbml0aWFsQ2hlY2tPdXQpLmNsaWNrKCksIDUwMCk7XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGluaXQ6ICgpID0+IHtcclxuXHRcdFx0c2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHRcdFx0c2V0SW5pdGFpbENhbGVuZGFyKCk7XHJcblx0XHR9LFxyXG5cdH07XHJcbn0pKERhdGFDb250cm9sbGVyLCBVSUNvbnRyb2xsZXIpO1xyXG5Db250cm9sbGVyLmluaXQoKTtcclxuXHJcblxyXG4iLCJleHBvcnQgY29uc3Qgc2V0Rml4RGF5Q291bnQgPSBudW1iZXIgPT4gKG51bWJlciA8IDEwID8gXCIwXCIgKyBudW1iZXIgOiBudW1iZXIpO1xyXG5leHBvcnQgY29uc3Qgc2V0TW9udGhDb3VudCA9IG51bWJlciA9PiAobnVtYmVyIDwgMTAgPyBcIjBcIiArIG51bWJlciA6IG51bWJlcik7XHJcbmV4cG9ydCBjb25zdCBmb3JtYXREYXNoVG9Eb3QgPSBzdHIgPT4gc3RyLnJlcGxhY2UoLy0vZywgXCIuXCIpO1xyXG5leHBvcnQgY29uc3QgZm9ybWF0RG90VG9EYXNoID0gc3RyID0+IHN0ci5yZXBsYWNlKC9cXC4vZywgXCItXCIpO1xyXG5leHBvcnQgY29uc3QgZm9ybWF0V29uID0gbnVtID0+XHJcblx0bmV3IEludGwuTnVtYmVyRm9ybWF0KFwia28tS1JcIiwgeyBzdHlsZTogXCJjdXJyZW5jeVwiLCBjdXJyZW5jeTogXCJLUldcIiB9KS5mb3JtYXQobnVtKTtcclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNlcnZlRGV0YWlsLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=