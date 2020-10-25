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
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root {\n  --wrapWidth: 1200px;\n  --gray: #7f8c8d;\n  --deepGray: #535c68;\n  --red: #ff385c;\n  --blue: lightseagreen;\n  --green: #23c382;\n  --containerHorizontalMargin: 50px;\n  --containerVerticalPadding: 30px;\n  --detailFontSize: smaller;\n  --bottomBorder: 1px solid #ecf0f1;\n  --borderRadius: 10px;\n  --calendarDaySize: 40px;\n  --boxShadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.ACCEPTED {\n  color: var(--green) !important; }\n\n.PENDING, .COMPLETED {\n  color: var(--gray) !important; }\n\n.REFUSED, .CANCLED {\n  color: var(--red) !important; }\n\n:root {\n  --wrapWidth: 1200px;\n  --gray: #7f8c8d;\n  --deepGray: #535c68;\n  --red: #ff385c;\n  --blue: lightseagreen;\n  --green: #23c382;\n  --containerHorizontalMargin: 50px;\n  --containerVerticalPadding: 30px;\n  --detailFontSize: smaller;\n  --bottomBorder: 1px solid #ecf0f1;\n  --borderRadius: 10px;\n  --calendarDaySize: 40px;\n  --boxShadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.ACCEPTED {\n  color: var(--green) !important; }\n\n.PENDING, .COMPLETED {\n  color: var(--gray) !important; }\n\n.REFUSED, .CANCLED {\n  color: var(--red) !important; }\n\nhtml {\n  scroll-behavior: smooth; }\n\n.BtnDisabled {\n  cursor: no-drop !important;\n  opacity: 0.2 !important; }\n\n.wrap {\n  max-width: var(--wrapWidth);\n  margin: 0 auto; }\n  .wrap .header {\n    margin: 0 var(--containerHorizontalMargin);\n    padding: var(--containerVerticalPadding) 0; }\n    .wrap .header i {\n      display: block;\n      cursor: pointer; }\n    .wrap .header .header_title {\n      font-weight: 700;\n      padding: var(--containerVerticalPadding) 0; }\n  .wrap .reserve {\n    display: flex;\n    justify-content: space-between; }\n    .wrap .reserve .main {\n      padding: calc(var(--containerVerticalPadding) / 2) 0;\n      margin: 0 var(--containerHorizontalMargin);\n      width: 65%; }\n      .wrap .reserve .main .room_name {\n        font-weight: 700; }\n      .wrap .reserve .main .room_address {\n        margin: 10px 0; }\n      .wrap .reserve .main .reserve_time_wrap {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        margin: var(--containerVerticalPadding) 0; }\n        .wrap .reserve .main .reserve_time_wrap .reserve_time .reserve_check {\n          font-weight: 700;\n          font-size: 1.25rem; }\n        .wrap .reserve .main .reserve_time_wrap .reserve_time .room_check {\n          color: var(--gray);\n          font-size: 0.9rem; }\n        .wrap .reserve .main .reserve_time_wrap .reserve_time i {\n          color: var(--gray);\n          font-size: 1.25rem; }\n        .wrap .reserve .main .reserve_time_wrap .reserve_detail .reserve_night {\n          font-weight: 700; }\n        .wrap .reserve .main .reserve_time_wrap .reserve_detail .reserve_guests {\n          color: var(--gray);\n          font-size: 0.8rem; }\n      .wrap .reserve .main .icons {\n        display: flex;\n        padding: var(--containerVerticalPadding) 0;\n        border-top: var(--bottomBorder); }\n        .wrap .reserve .main .icons .icons_item {\n          color: var(--gray); }\n          .wrap .reserve .main .icons .icons_item i,\n          .wrap .reserve .main .icons .icons_item span {\n            padding-right: 15px;\n            cursor: pointer;\n            font-size: 1rem; }\n          .wrap .reserve .main .icons .icons_item:last-of-type i {\n            padding-left: 30px; }\n          .wrap .reserve .main .icons .icons_item:hover {\n            color: black; }\n      .wrap .reserve .main .footer {\n        display: none;\n        justify-content: space-between;\n        margin-bottom: var(--containerVerticalPadding);\n        animation: slide ease 0.3s; }\n        .wrap .reserve .main .footer .reserve_change,\n        .wrap .reserve .main .footer .reserve_cancel {\n          border: 1px solid #cdcdcd;\n          border-radius: 5px;\n          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n          padding: 30px;\n          width: 45%;\n          display: flex;\n          flex-direction: column;\n          height: 280px; }\n          .wrap .reserve .main .footer .reserve_change i,\n          .wrap .reserve .main .footer .reserve_cancel i {\n            color: var(--blue);\n            font-size: 2rem;\n            margin-bottom: 0.5em; }\n          .wrap .reserve .main .footer .reserve_change .footer_title,\n          .wrap .reserve .main .footer .reserve_cancel .footer_title {\n            font-weight: 700; }\n          .wrap .reserve .main .footer .reserve_change .footer_body,\n          .wrap .reserve .main .footer .reserve_cancel .footer_body {\n            color: var(--gray); }\n          .wrap .reserve .main .footer .reserve_change a,\n          .wrap .reserve .main .footer .reserve_cancel a {\n            margin-top: auto; }\n            .wrap .reserve .main .footer .reserve_change a button,\n            .wrap .reserve .main .footer .reserve_cancel a button {\n              all: unset;\n              padding: 0.5em 1em;\n              color: var(--blue);\n              border: 2px solid var(--blue);\n              border-radius: 5px;\n              cursor: pointer;\n              font-weight: 700; }\n      .wrap .reserve .main .change_step-1 {\n        padding: var(--containerVerticalPadding) 0;\n        border-top: var(--bottomBorder);\n        display: none;\n        animation: slide ease .3s; }\n        .wrap .reserve .main .change_step-1 .change_step_title {\n          font-size: 2rem;\n          font-weight: 700; }\n        .wrap .reserve .main .change_step-1 .reservation_people {\n          font-size: 0.9rem;\n          height: 50px;\n          margin: 30px 0; }\n          .wrap .reserve .main .change_step-1 .reservation_people .reservation_display {\n            position: relative; }\n            .wrap .reserve .main .change_step-1 .reservation_people .reservation_display .guest_counter_box {\n              position: absolute;\n              right: 0;\n              top: -10px; }\n              .wrap .reserve .main .change_step-1 .reservation_people .reservation_display .guest_counter_box .display_btn_icon {\n                display: inline-block;\n                border: 1px solid black;\n                border-radius: 50%;\n                width: 30px;\n                height: 30px;\n                line-height: 30px;\n                text-align: center;\n                margin-left: 10px;\n                opacity: 0.5;\n                color: black;\n                cursor: pointer; }\n                .wrap .reserve .main .change_step-1 .reservation_people .reservation_display .guest_counter_box .display_btn_icon:hover {\n                  opacity: 1; }\n                .wrap .reserve .main .change_step-1 .reservation_people .reservation_display .guest_counter_box .display_btn_icon:active {\n                  transform: scale(0.95); }\n        .wrap .reserve .main .change_step-1 .reservation_main .reservation_form {\n          background-color: white;\n          width: 660px;\n          box-shadow: var(--boxShadow);\n          border-radius: var(--borderRadius);\n          padding: 20px 30px; }\n          .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_header {\n            display: flex; }\n            .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_header .header_text {\n              width: 55%; }\n              .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_header .header_text .header_title {\n                font-weight: 700;\n                font-size: 1.5rem; }\n              .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_header .header_text .header_body {\n                color: var(--gray);\n                font-weight: 300; }\n            .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_header .header_inputs {\n              width: 45%;\n              display: flex;\n              border: var(--bottomBorder);\n              border-radius: var(--borderRadius);\n              background-color: #f7f7f7; }\n              .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_header .header_inputs .input_item {\n                font-size: 0.8rem;\n                padding: 10px;\n                border-radius: var(--borderRadius);\n                width: 50%; }\n                .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_header .header_inputs .input_item .reservation_input {\n                  all: unset;\n                  font-weight: 300;\n                  cursor: text; }\n          .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_main {\n            position: relative;\n            margin-top: var(--containerHorizontalMargin);\n            margin-bottom: calc(var(--containerHorizontalMargin) / 2); }\n            .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_main .pagination_btns {\n              position: absolute;\n              top: 0;\n              width: 100%;\n              display: flex;\n              justify-content: space-between; }\n              .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_main .pagination_btns .pagination_btn {\n                all: unset;\n                cursor: pointer;\n                font-size: 1.5rem;\n                line-height: 1.5rem; }\n            .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_main .calendar_wrap {\n              width: 100%;\n              display: flex;\n              justify-content: space-between; }\n              .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_main .calendar_wrap .calendar_item {\n                width: 48%; }\n                .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_main .calendar_wrap .calendar_item .calendar_month {\n                  width: 100%;\n                  text-align: center;\n                  margin-bottom: 15px;\n                  font-weight: 700; }\n                .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row {\n                  display: flex; }\n                  .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row .calendar_day {\n                    width: var(--calendarDaySize);\n                    height: var(--calendarDaySize);\n                    text-align: center; }\n                    .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row .calendar_day.available_day {\n                      background-color: #f5f6fa; }\n                    .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row .calendar_day span {\n                      display: block;\n                      width: 100%;\n                      height: 100%;\n                      line-height: var(--calendarDaySize); }\n                      .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row .calendar_day span.invalid_day {\n                        color: var(--gray);\n                        text-decoration: line-through; }\n                      .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row .calendar_day span.valid_day:hover {\n                        border: 1px solid black;\n                        border-radius: 50%;\n                        cursor: pointer; }\n                    .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row .calendar_day.clicked.available_day {\n                      border-radius: 50% 0 0 50%; }\n                    .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row .calendar_day.clicked span {\n                      background-color: black !important;\n                      color: white;\n                      border: 0 !important;\n                      border-radius: 50%;\n                      cursor: default !important; }\n                  .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row .dayname {\n                    font-size: 0.8rem;\n                    color: var(--gray); }\n          .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_footer {\n            text-align: end; }\n            .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_footer .input_reset {\n              all: unset;\n              font-size: 0.9rem;\n              border-bottom: 1px solid black;\n              display: inline-block;\n              line-height: 0.85;\n              text-shadow: 1px 1px var(--backgroudColor), 1px -1px var(--backgroudColor), -1px 1px var(--backgroudColor), -1px -1px var(--backgroudColor);\n              cursor: pointer; }\n            .wrap .reserve .main .change_step-1 .reservation_main .reservation_form .form_footer .form_update {\n              padding: 10px 15px;\n              margin: 0 15px;\n              background-color: black;\n              color: white;\n              border: 0;\n              border-radius: var(--borderRadius);\n              font-weight: 700;\n              cursor: pointer;\n              outline: none; }\n      .wrap .reserve .main .cancel_step-1 {\n        padding: var(--containerVerticalPadding) 0;\n        border-top: var(--bottomBorder);\n        display: none;\n        animation: slide ease .3s; }\n        .wrap .reserve .main .cancel_step-1 .cancel_step_title {\n          font-size: 2rem;\n          font-weight: 700; }\n        .wrap .reserve .main .cancel_step-1 .cancel_step_body {\n          margin: var(--containerHorizontalMargin) 0; }\n        .wrap .reserve .main .cancel_step-1 small {\n          display: block; }\n          .wrap .reserve .main .cancel_step-1 small span {\n            border-bottom: 1px solid black;\n            display: inline-block;\n            line-height: 0.85;\n            text-shadow: 1px 1px var(--backgroudColor), 1px -1px var(--backgroudColor), -1px 1px var(--backgroudColor), -1px -1px var(--backgroudColor);\n            color: var(--blue); }\n        .wrap .reserve .main .cancel_step-1 form {\n          display: flex; }\n          .wrap .reserve .main .cancel_step-1 form .cancel_step_btn {\n            padding: 10px 15px;\n            margin-left: auto;\n            background-color: black;\n            color: white;\n            border: 0;\n            border-radius: var(--borderRadius);\n            font-weight: 700;\n            cursor: pointer;\n            outline: none; }\n    .wrap .reserve .aside {\n      position: relative;\n      width: 30%;\n      margin: 0 var(--containerHorizontalMargin); }\n      .wrap .reserve .aside .bills {\n        position: sticky;\n        top: 100px;\n        margin-bottom: 50px; }\n        .wrap .reserve .aside .bills .room_detail {\n          display: block;\n          margin-bottom: 20px; }\n        .wrap .reserve .aside .bills .price,\n        .wrap .reserve .aside .bills .service {\n          display: flex;\n          justify-content: space-between; }\n        .wrap .reserve .aside .bills .total_price {\n          font-size: 3rem;\n          font-weight: 700; }\n        .wrap .reserve .aside .bills .status {\n          margin: var(--containerVerticalPadding) 0; }\n        .wrap .reserve .aside .bills .delete_info {\n          display: none; }\n          .wrap .reserve .aside .bills .delete_info * {\n            font-weight: 700; }\n          .wrap .reserve .aside .bills .delete_info .refund_price-value {\n            font-size: 3em;\n            color: var(--green); }\n\n@keyframes slide {\n  from {\n    transform: translateX(-100px);\n    opacity: 0; }\n  to {\n    transform: translateX(0px);\n    opacity: 1; } }\n", "",{"version":3,"sources":["webpack://scss/__base.scss","webpack://scss/reserveDetail.scss","webpack://scss/__mixins.scss"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;700&display=swap\");\r\n:root {\r\n\t--wrapWidth: 1200px;\r\n\t--gray: #7f8c8d;\r\n\t--deepGray: #535c68;\r\n\t--red: #ff385c;\r\n\t--blue: lightseagreen;\r\n\t--green: #23c382;\r\n\t--containerHorizontalMargin: 50px;\r\n\t--containerVerticalPadding: 30px;\r\n\t--detailFontSize: smaller;\r\n\t--bottomBorder: 1px solid #ecf0f1;\r\n\t--borderRadius: 10px;\r\n\t--calendarDaySize: 40px;\r\n\t--boxShadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n}\r\n\r\n// Breakpoints\r\n$breakpoint-tablet: 758px;\r\n$breakpoint-desktop: 1024px;\r\n\r\n.ACCEPTED {\r\n\tcolor: var(--green) !important;\r\n}\r\n\r\n.PENDING, .COMPLETED {\r\n\tcolor: var(--gray) !important;\r\n}\r\n\r\n.REFUSED, .CANCLED {\r\n\tcolor: var(--red) !important;\r\n}\r\n","@import \"./_base\";\r\n@import \"./_mixins\";\r\n\r\nhtml {\r\n\tscroll-behavior: smooth;\r\n}\r\n\r\n.BtnDisabled {\r\n\tcursor: no-drop !important;\r\n\topacity: 0.2 !important;\r\n}\r\n\r\n.wrap {\r\n\tmax-width: var(--wrapWidth);\r\n\tmargin: 0 auto;\r\n\r\n\t.header {\r\n\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\t\tpadding: var(--containerVerticalPadding) 0;\r\n\r\n\t\ti {\r\n\t\t\tdisplay: block;\r\n\t\t\tcursor: pointer;\r\n\t\t}\r\n\r\n\t\t.header_title {\r\n\t\t\tfont-weight: 700;\r\n\t\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\t}\r\n\t}\r\n\r\n\t.reserve {\r\n\t\tdisplay: flex;\r\n\t\tjustify-content: space-between;\r\n\r\n\t\t.main {\r\n\t\t\tpadding: calc(var(--containerVerticalPadding) / 2) 0;\r\n\t\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\t\t\twidth: 65%;\r\n\r\n\t\t\t.room_name {\r\n\t\t\t\tfont-weight: 700;\r\n\t\t\t}\r\n\r\n\t\t\t.room_address {\r\n\t\t\t\tmargin: 10px 0;\r\n\t\t\t}\r\n\r\n\t\t\t.reserve_time_wrap {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tjustify-content: space-between;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tmargin: var(--containerVerticalPadding) 0;\r\n\r\n\t\t\t\t.reserve_time {\r\n\t\t\t\t\t.reserve_check {\r\n\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t\tfont-size: 1.25rem;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.room_check {\r\n\t\t\t\t\t\tcolor: var(--gray);\r\n\t\t\t\t\t\tfont-size: 0.9rem;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\ti {\r\n\t\t\t\t\t\tcolor: var(--gray);\r\n\t\t\t\t\t\tfont-size: 1.25rem;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t.reserve_detail {\r\n\t\t\t\t\t.reserve_night {\r\n\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.reserve_guests {\r\n\t\t\t\t\t\tcolor: var(--gray);\r\n\t\t\t\t\t\tfont-size: 0.8rem;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t.icons {\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\t\t\tborder-top: var(--bottomBorder);\r\n\r\n\t\t\t\t.icons_item {\r\n\t\t\t\t\tcolor: var(--gray);\r\n\r\n\t\t\t\t\ti,\r\n\t\t\t\t\tspan {\r\n\t\t\t\t\t\tpadding-right: 15px;\r\n\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\tfont-size: 1rem;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t&:last-of-type i {\r\n\t\t\t\t\t\tpadding-left: 30px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t&:hover {\r\n\t\t\t\t\t\tcolor: black;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t.footer {\r\n\t\t\t\tdisplay: none;\r\n\t\t\t\tjustify-content: space-between;\r\n\t\t\t\tmargin-bottom: var(--containerVerticalPadding);\r\n\t\t\t\tanimation: slide ease 0.3s;\r\n\r\n\t\t\t\t.reserve_change,\r\n\t\t\t\t.reserve_cancel {\r\n\t\t\t\t\tborder: 1px solid lighten(gray, 30%);\r\n\t\t\t\t\tborder-radius: 5px;\r\n\t\t\t\t\tbox-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n\t\t\t\t\tpadding: 30px;\r\n\t\t\t\t\twidth: 45%;\r\n\t\t\t\t    display: flex;\r\n\t\t\t\t    flex-direction: column;\r\n\t\t\t\t    height: 280px;\r\n\r\n\t\t\t\t\ti {\r\n\t\t\t\t\t\tcolor: var(--blue);\r\n\t\t\t\t\t\tfont-size: 2rem;\r\n\t\t\t\t\t\tmargin-bottom: 0.5em;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.footer_title {\r\n\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.footer_body {\r\n\t\t\t\t\t\tcolor: var(--gray);\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\ta {\r\n\t\t\t\t\t\tmargin-top: auto;\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\tbutton {\r\n\t\t\t\t\t\t\tall: unset;\r\n\t\t\t\t\t\t\tpadding: 0.5em 1em;\r\n\t\t\t\t\t\t\tcolor: var(--blue);\r\n\t\t\t\t\t\t\tborder: 2px solid var(--blue);\r\n\t\t\t\t\t\t\tborder-radius: 5px;\r\n\t\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t.change_step-1 {\r\n\t\t\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\t\t\tborder-top: var(--bottomBorder);\r\n\t\t\t\tdisplay: none;\r\n\t\t\t\tanimation: slide ease .3s;\r\n\t\r\n\t\t\t\t.change_step_title {\r\n\t\t\t\t\tfont-size: 2rem;\r\n\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t.reservation_people {\r\n\t\t\t\t\t    font-size: 0.9rem;\r\n\t\t\t\t\t    height: 50px;\r\n\t\t\t\t\t    margin: 30px 0;\r\n\r\n\t\t\t\t\t.reservation_display {\r\n\t\t\t\t\t\tposition: relative;\r\n\r\n\t\t\t\t\t\t.guest_counter_box {\r\n\t\t\t\t\t\t\tposition: absolute;\r\n\t\t\t\t\t\t\tright: 0;\r\n\t\t\t\t\t\t\ttop: -10px;\r\n\r\n\t\t\t\t\t\t\t.display_btn_icon {\r\n\t\t\t\t\t\t\t\tdisplay: inline-block;\r\n\t\t\t\t\t\t\t\tborder: 1px solid black;\r\n\t\t\t\t\t\t\t\tborder-radius: 50%;\r\n\t\t\t\t\t\t\t\twidth: 30px;\r\n\t\t\t\t\t\t\t\theight: 30px;\r\n\t\t\t\t\t\t\t\tline-height: 30px;\r\n\t\t\t\t\t\t\t\ttext-align: center;\r\n\t\t\t\t\t\t\t\tmargin-left: 10px;\r\n\t\t\t\t\t\t\t\topacity: 0.5;\r\n\t\t\t\t\t\t\t\tcolor: black;\r\n\t\t\t\t\t\t\t\tcursor: pointer;\r\n\r\n\t\t\t\t\t\t\t\t&:hover {\r\n\t\t\t\t\t\t\t\t\topacity: 1;\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t&:active {\r\n\t\t\t\t\t\t\t\t\ttransform: scale(0.95);\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\t.reservation_main {\r\n\t\r\n\t\t\t\t\t.reservation_form {\r\n\t\t\t\t\t\tbackground-color: white;\r\n\t\t\t\t\t\twidth: 660px;\r\n\t\t\t\t\t\tbox-shadow: var(--boxShadow);\r\n\t\t\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\t\t\tpadding: 20px 30px;\r\n\t\t\r\n\t\t\t\t\t\t.form_header {\r\n\t\t\t\t\t\t\tdisplay: flex;\r\n\t\t\r\n\t\t\t\t\t\t\t.header_text {\r\n\t\t\t\t\t\t\t\twidth: 55%;\r\n\t\t\r\n\t\t\t\t\t\t\t\t.header_title {\r\n\t\t\t\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t\t\t\t\tfont-size: 1.5rem;\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t.header_body {\r\n\t\t\t\t\t\t\t\t\tcolor: var(--gray);\r\n\t\t\t\t\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\r\n\t\t\t\t\t\t\t.header_inputs {\r\n\t\t\t\t\t\t\t\twidth: 45%;\r\n\t\t\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\t\t\tborder: var(--bottomBorder);\r\n\t\t\t\t\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\t\t\t\t\tbackground-color: #f7f7f7;\r\n\t\t\r\n\t\t\t\t\t\t\t\t.input_item {\r\n\t\t\t\t\t\t\t\t\tfont-size: 0.8rem;\r\n\t\t\t\t\t\t\t\t\tpadding: 10px;\r\n\t\t\t\t\t\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\t\t\t\t\t\twidth: 50%;\r\n\t\t\r\n\t\t\t\t\t\t\t\t\t.reservation_input {\r\n\t\t\t\t\t\t\t\t\t\tall: unset;\r\n\t\t\t\t\t\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\t\t\t\t\t\tcursor: text;\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\r\n\t\t\t\t\t\t.form_main {\r\n\t\t\t\t\t\t\tposition: relative;\r\n\t\t\t\t\t\t\tmargin-top: var(--containerHorizontalMargin);\r\n\t\t\t\t\t\t\tmargin-bottom: calc(var(--containerHorizontalMargin) / 2);\r\n\t\t\r\n\t\t\t\t\t\t\t.pagination_btns {\r\n\t\t\t\t\t\t\t\tposition: absolute;\r\n\t\t\t\t\t\t\t\ttop: 0;\r\n\t\t\t\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\t\t\tjustify-content: space-between;\r\n\t\t\r\n\t\t\t\t\t\t\t\t.pagination_btn {\r\n\t\t\t\t\t\t\t\t\tall: unset;\r\n\t\t\t\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\t\t\t\tfont-size: 1.5rem;\r\n\t\t\t\t\t\t\t\t\tline-height: 1.5rem;\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\r\n\t\t\t\t\t\t\t.calendar_wrap {\r\n\t\t\t\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\t\t\tjustify-content: space-between;\r\n\t\t\r\n\t\t\t\t\t\t\t\t.calendar_item {\r\n\t\t\t\t\t\t\t\t\twidth: 48%;\r\n\t\t\r\n\t\t\t\t\t\t\t\t\t.calendar_month {\r\n\t\t\t\t\t\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\t\t\t\t\t\ttext-align: center;\r\n\t\t\t\t\t\t\t\t\t\tmargin-bottom: 15px;\r\n\t\t\t\t\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\r\n\t\t\t\t\t\t\t\t\t.calendar_row {\r\n\t\t\t\t\t\t\t\t\t\tdisplay: flex;\r\n\t\t\r\n\t\t\t\t\t\t\t\t\t\t.calendar_day {\r\n\t\t\t\t\t\t\t\t\t\t\twidth: var(--calendarDaySize);\r\n\t\t\t\t\t\t\t\t\t\t\theight: var(--calendarDaySize);\r\n\t\t\t\t\t\t\t\t\t\t\ttext-align: center;\r\n\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t&.available_day {\r\n\t\t\t\t\t\t\t\t\t\t\t\tbackground-color: #f5f6fa;\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\r\n\t\t\t\t\t\t\t\t\t\t\tspan {\r\n\t\t\t\t\t\t\t\t\t\t\t\tdisplay: block;\r\n\t\t\t\t\t\t\t\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\t\t\t\t\t\t\t\theight: 100%;\r\n\t\t\t\t\t\t\t\t\t\t\t\tline-height: var(--calendarDaySize);\r\n\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t&.invalid_day {\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tcolor: var(--gray);\r\n\t\t\t\t\t\t\t\t\t\t\t\t\ttext-decoration: line-through;\r\n\t\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t&.valid_day:hover {\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tborder: 1px solid black;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tborder-radius: 50%;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t&.clicked {\r\n\t\t\t\t\t\t\t\t\t\t\t\t&.available_day {\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tborder-radius: 50% 0 0 50%;\r\n\t\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\tspan {\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tbackground-color: black !important;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tcolor: white;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tborder: 0 !important;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tborder-radius: 50%;\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tcursor: default !important;\r\n\t\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\r\n\t\t\t\t\t\t\t\t\t\t.dayname {\r\n\t\t\t\t\t\t\t\t\t\t\tfont-size: 0.8rem;\r\n\t\t\t\t\t\t\t\t\t\t\tcolor: var(--gray);\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\r\n\t\t\t\t\t\t.form_footer {\r\n\t\t\t\t\t\t\ttext-align: end;\r\n\t\t\r\n\t\t\t\t\t\t\t.input_reset {\r\n\t\t\t\t\t\t\t\tall: unset;\r\n\t\t\t\t\t\t\t\tfont-size: 0.9rem;\r\n\t\t\t\t\t\t\t\t@include underline;\r\n\t\t\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\t\t}\r\n\t\t\r\n\t\t\t\t\t\t\t.form_update {\r\n\t\t\t\t\t\t\t\tpadding: 10px 15px;\r\n\t\t\t\t\t\t\t\tmargin: 0 15px;\r\n\t\t\t\t\t\t\t\tbackground-color: black;\r\n\t\t\t\t\t\t\t\tcolor: white;\r\n\t\t\t\t\t\t\t\tborder: 0;\r\n\t\t\t\t\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\t\t\toutline: none;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t\r\n\t\t\t.cancel_step-1 {\r\n\t\t\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\t\t\tborder-top: var(--bottomBorder);\r\n\t\t\t\tdisplay: none;\r\n\t\t\t\tanimation: slide ease .3s;\r\n\t\r\n\t\t\t\t.cancel_step_title {\r\n\t\t\t\t\tfont-size: 2rem;\r\n\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t.cancel_step_body {\r\n\t\t\t\t\tmargin: var(--containerHorizontalMargin) 0;\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\tsmall {\r\n\t\t\t\t\tdisplay: block;\r\n\t\t\t\t\t\r\n\t\t\t\t\tspan {\r\n\t\t\t\t\t\t@include underline;\r\n\t\t\t\t\t\tcolor: var(--blue);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\tform {\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\r\n\t\t\t\t\t.cancel_step_btn {\r\n\t\t\t\t\t\tpadding: 10px 15px;\r\n\t\t\t\t\t\tmargin-left: auto;\r\n\t\t\t\t\t\tbackground-color: black;\r\n\t\t\t\t\t\tcolor: white;\r\n\t\t\t\t\t\tborder: 0;\r\n\t\t\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\toutline: none;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.aside {\r\n\t\t\tposition: relative;\r\n\t\t\twidth: 30%;\r\n\t\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\t\t\t\r\n\t\t\t.bills {\r\n\t\t\t\tposition: sticky;\r\n\t\t\t\ttop: 100px;\r\n\t\t\t\tmargin-bottom: 50px;\r\n\t\t\t\t\r\n\t\t\t\t.room_detail {\r\n\t\t\t\t\tdisplay: block;\r\n\t\t\t\t\tmargin-bottom: 20px;\r\n\t\t\t\t}\r\n\t\r\n\t\t\t\t.price,\r\n\t\t\t\t.service {\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\tjustify-content: space-between;\r\n\t\t\t\t}\r\n\t\r\n\t\t\t\t.total_price {\r\n\t\t\t\t\tfont-size: 3rem;\r\n\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t}\r\n\t\r\n\t\t\t\t.status {\r\n\t\t\t\t\tmargin: var(--containerVerticalPadding) 0;\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\t.delete_info {\r\n\t\t\t\t\tdisplay: none;\r\n\t\t\t\t\t\r\n\t\t\t\t\t* {\r\n\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t\t.refund_price-value {\r\n\t\t\t\t\t    font-size: 3em;\r\n\t\t\t\t\t    color: var(--green);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t}\r\n\t}\r\n\r\n\t@keyframes slide {\r\n\t\tfrom {\r\n\t\t\ttransform: translateX(-100px);\r\n\t\t\topacity: 0;\r\n\t\t}\r\n\t\tto {\r\n\t\t\ttransform: translateX(0px);\r\n\t\t\topacity: 1;\r\n\t\t}\r\n\t}\r\n}\r\n","@import \"./_base\";\r\n\r\n@mixin tablet {\r\n  @media (max-width: #{$breakpoint-desktop - 1px}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin desktop {\r\n  @media (min-width: #{$breakpoint-desktop}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin underline {\r\n\tborder-bottom: 1px solid black;\r\n\tdisplay: inline-block;\r\n\tline-height: 0.85;\r\n\ttext-shadow: 1px 1px var(--backgroudColor), 1px -1px var(--backgroudColor),\r\n\t\t-1px 1px var(--backgroudColor), -1px -1px var(--backgroudColor);\r\n\t@content;\r\n}\r\n\r\n@mixin star($font-size) {\r\n\tcolor: var(--red);\r\n\tfont-size: $font-size;\r\n}\r\n\r\n@mixin reservation_item {\r\n\tflex: 1 1 50%;\r\n\tpadding: 5px 10px;\r\n\tfont-size: 0.9rem;\r\n\theight: 50px;\r\n\r\n\t.reservation_display {\r\n\t\tcolor: var(--gray);\r\n\t\tfont-weight: 300;\r\n\t}\r\n}\r\n\r\n@mixin facility_rule_item {\r\n\tmargin: 15px 0;\r\n}\r\n\r\n@mixin facility_rule_icon {\r\n\tfont-size: 20px;\r\n\twidth: 40px;\r\n\ttext-align: center;\r\n}\r\n\r\n@mixin facility_rule_description {\r\n\tmargin-left: 15px;\r\n\tfont-weight: 300;\r\n}\r\n\r\n@mixin changeHeaderColor {\r\n\t.body_header ul .airbnb_icon,\r\n\t.body_header ul .header_profile .profile_img {\r\n\t\tcolor: var(--blue);\r\n\t}\r\n\t\r\n\t.body_header ul .room_search i {\r\n\t\tbackground-color: var(--blue);\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9idWlsZEZ1bGxQYXRoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9tZXJnZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL3Jlc2VydmVEZXRhaWwuc2NzcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL2pzL3Jlc2VydmVEZXRhaWwuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL3Jlc2VydmVEZXRhaWwuc2Nzcz8zYjY5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxpQkFBaUIsbUJBQU8sQ0FBQyx1REFBYSxFOzs7Ozs7Ozs7Ozs7QUNBekI7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHNEQUFZO0FBQ2hDLGFBQWEsbUJBQU8sQ0FBQyxrRUFBa0I7QUFDdkMsY0FBYyxtQkFBTyxDQUFDLDBFQUFzQjtBQUM1QyxlQUFlLG1CQUFPLENBQUMsNEVBQXVCO0FBQzlDLG9CQUFvQixtQkFBTyxDQUFDLDhFQUF1QjtBQUNuRCxtQkFBbUIsbUJBQU8sQ0FBQyxvRkFBMkI7QUFDdEQsc0JBQXNCLG1CQUFPLENBQUMsMEZBQThCO0FBQzVELGtCQUFrQixtQkFBTyxDQUFDLDBFQUFx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O0FBQ25FO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUM3RkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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OztBQUVBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7QUM1ZUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU87QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNQLGlDQUFpQyxxQ0FBcUM7Ozs7Ozs7Ozs7OztBQ0x0RSxVQUFVLG1CQUFPLENBQUMsdUpBQTJFO0FBQzdGLDBCQUEwQixtQkFBTyxDQUFDLDROQUE2Rzs7QUFFL0k7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0MiLCJmaWxlIjoicmVzZXJ2ZURldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL3Jlc291cmNlcy9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9yZXNlcnZlRGV0YWlsLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIGJ1aWxkRnVsbFBhdGggPSByZXF1aXJlKCcuLi9jb3JlL2J1aWxkRnVsbFBhdGgnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAodXRpbHMuaXNCbG9iKHJlcXVlc3REYXRhKSB8fCB1dGlscy5pc0ZpbGUocmVxdWVzdERhdGEpKSAmJlxuICAgICAgcmVxdWVzdERhdGEudHlwZVxuICAgICkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChjb25maWcuYXV0aC5wYXNzd29yZCkpIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICB2YXIgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChmdWxsUGF0aCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBicm93c2VyIHJlcXVlc3QgY2FuY2VsbGF0aW9uIChhcyBvcHBvc2VkIHRvIGEgbWFudWFsIGNhbmNlbGxhdGlvbilcbiAgICByZXF1ZXN0Lm9uYWJvcnQgPSBmdW5jdGlvbiBoYW5kbGVBYm9ydCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignUmVxdWVzdCBhYm9ydGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJywgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICB2YXIgdGltZW91dEVycm9yTWVzc2FnZSA9ICd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCc7XG4gICAgICBpZiAoY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSA9IGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlO1xuICAgICAgfVxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKHRpbWVvdXRFcnJvck1lc3NhZ2UsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihmdWxsUGF0aCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnLndpdGhDcmVkZW50aWFscykpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gISFjb25maWcud2l0aENyZWRlbnRpYWxzO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFyZXF1ZXN0RGF0YSkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9jb3JlL21lcmdlQ29uZmlnJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGF4aW9zLmRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vbWVyZ2VDb25maWcnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcbiAgICBjb25maWcudXJsID0gYXJndW1lbnRzWzBdO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgfVxuXG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG5cbiAgLy8gU2V0IGNvbmZpZy5tZXRob2RcbiAgaWYgKGNvbmZpZy5tZXRob2QpIHtcbiAgICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2UgaWYgKHRoaXMuZGVmYXVsdHMubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IHRoaXMuZGVmYXVsdHMubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLm1ldGhvZCA9ICdnZXQnO1xuICB9XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbkF4aW9zLnByb3RvdHlwZS5nZXRVcmkgPSBmdW5jdGlvbiBnZXRVcmkoY29uZmlnKSB7XG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIHJldHVybiBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChtZXJnZUNvbmZpZyhjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgYmFzZVVSTCB3aXRoIHRoZSByZXF1ZXN0ZWRVUkwsXG4gKiBvbmx5IHdoZW4gdGhlIHJlcXVlc3RlZFVSTCBpcyBub3QgYWxyZWFkeSBhbiBhYnNvbHV0ZSBVUkwuXG4gKiBJZiB0aGUgcmVxdWVzdFVSTCBpcyBhYnNvbHV0ZSwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSByZXF1ZXN0ZWRVUkwgdW50b3VjaGVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RlZFVSTCBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgdG8gY29tYmluZVxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIGZ1bGwgcGF0aFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkRnVsbFBhdGgoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKSB7XG4gIGlmIChiYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKHJlcXVlc3RlZFVSTCkpIHtcbiAgICByZXR1cm4gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKTtcbiAgfVxuICByZXR1cm4gcmVxdWVzdGVkVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1xuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG5cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIGVycm9yLmlzQXhpb3NFcnJvciA9IHRydWU7XG5cbiAgZXJyb3IudG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY29kZTogdGhpcy5jb2RlXG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIGVycm9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIHZhciBjb25maWcgPSB7fTtcblxuICB2YXIgdmFsdWVGcm9tQ29uZmlnMktleXMgPSBbJ3VybCcsICdtZXRob2QnLCAnZGF0YSddO1xuICB2YXIgbWVyZ2VEZWVwUHJvcGVydGllc0tleXMgPSBbJ2hlYWRlcnMnLCAnYXV0aCcsICdwcm94eScsICdwYXJhbXMnXTtcbiAgdmFyIGRlZmF1bHRUb0NvbmZpZzJLZXlzID0gW1xuICAgICdiYXNlVVJMJywgJ3RyYW5zZm9ybVJlcXVlc3QnLCAndHJhbnNmb3JtUmVzcG9uc2UnLCAncGFyYW1zU2VyaWFsaXplcicsXG4gICAgJ3RpbWVvdXQnLCAndGltZW91dE1lc3NhZ2UnLCAnd2l0aENyZWRlbnRpYWxzJywgJ2FkYXB0ZXInLCAncmVzcG9uc2VUeXBlJywgJ3hzcmZDb29raWVOYW1lJyxcbiAgICAneHNyZkhlYWRlck5hbWUnLCAnb25VcGxvYWRQcm9ncmVzcycsICdvbkRvd25sb2FkUHJvZ3Jlc3MnLCAnZGVjb21wcmVzcycsXG4gICAgJ21heENvbnRlbnRMZW5ndGgnLCAnbWF4Qm9keUxlbmd0aCcsICdtYXhSZWRpcmVjdHMnLCAndHJhbnNwb3J0JywgJ2h0dHBBZ2VudCcsXG4gICAgJ2h0dHBzQWdlbnQnLCAnY2FuY2VsVG9rZW4nLCAnc29ja2V0UGF0aCcsICdyZXNwb25zZUVuY29kaW5nJ1xuICBdO1xuICB2YXIgZGlyZWN0TWVyZ2VLZXlzID0gWyd2YWxpZGF0ZVN0YXR1cyddO1xuXG4gIGZ1bmN0aW9uIGdldE1lcmdlZFZhbHVlKHRhcmdldCwgc291cmNlKSB7XG4gICAgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3QodGFyZ2V0KSAmJiB1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZSh0YXJnZXQsIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZSh7fSwgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzQXJyYXkoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHNvdXJjZS5zbGljZSgpO1xuICAgIH1cbiAgICByZXR1cm4gc291cmNlO1xuICB9XG5cbiAgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9XG5cbiAgdXRpbHMuZm9yRWFjaCh2YWx1ZUZyb21Db25maWcyS2V5cywgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcyW3Byb3BdKTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2gobWVyZ2VEZWVwUHJvcGVydGllc0tleXMsIG1lcmdlRGVlcFByb3BlcnRpZXMpO1xuXG4gIHV0aWxzLmZvckVhY2goZGVmYXVsdFRvQ29uZmlnMktleXMsIGZ1bmN0aW9uIGRlZmF1bHRUb0NvbmZpZzIocHJvcCkge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKGRpcmVjdE1lcmdlS2V5cywgZnVuY3Rpb24gbWVyZ2UocHJvcCkge1xuICAgIGlmIChwcm9wIGluIGNvbmZpZzIpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAocHJvcCBpbiBjb25maWcxKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzFbcHJvcF0pO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGF4aW9zS2V5cyA9IHZhbHVlRnJvbUNvbmZpZzJLZXlzXG4gICAgLmNvbmNhdChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cylcbiAgICAuY29uY2F0KGRlZmF1bHRUb0NvbmZpZzJLZXlzKVxuICAgIC5jb25jYXQoZGlyZWN0TWVyZ2VLZXlzKTtcblxuICB2YXIgb3RoZXJLZXlzID0gT2JqZWN0XG4gICAgLmtleXMoY29uZmlnMSlcbiAgICAuY29uY2F0KE9iamVjdC5rZXlzKGNvbmZpZzIpKVxuICAgIC5maWx0ZXIoZnVuY3Rpb24gZmlsdGVyQXhpb3NLZXlzKGtleSkge1xuICAgICAgcmV0dXJuIGF4aW9zS2V5cy5pbmRleE9mKGtleSkgPT09IC0xO1xuICAgIH0pO1xuXG4gIHV0aWxzLmZvckVhY2gob3RoZXJLZXlzLCBtZXJnZURlZXBQcm9wZXJ0aWVzKTtcblxuICByZXR1cm4gY29uZmlnO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdBY2NlcHQnKTtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG4gIG1heEJvZHlMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHZhciBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG5cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdmFyIG9yaWdpblVSTDtcblxuICAgICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsLmNvbnN0cnVjdG9yICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwuY29uc3RydWN0b3IpXG4gICAgJiYgdHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIodmFsKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBwbGFpbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbCkge1xuICBpZiAodG9TdHJpbmcuY2FsbCh2YWwpICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsKTtcbiAgcmV0dXJuIHByb3RvdHlwZSA9PT0gbnVsbCB8fCBwcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOYXRpdmVTY3JpcHQnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOUycpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QocmVzdWx0W2tleV0pICYmIGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZSh7fSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWwuc2xpY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG4vKipcbiAqIFJlbW92ZSBieXRlIG9yZGVyIG1hcmtlci4gVGhpcyBjYXRjaGVzIEVGIEJCIEJGICh0aGUgVVRGLTggQk9NKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IHdpdGggQk9NXG4gKiBAcmV0dXJuIHtzdHJpbmd9IGNvbnRlbnQgdmFsdWUgd2l0aG91dCBCT01cbiAqL1xuZnVuY3Rpb24gc3RyaXBCT00oY29udGVudCkge1xuICBpZiAoY29udGVudC5jaGFyQ29kZUF0KDApID09PSAweEZFRkYpIHtcbiAgICBjb250ZW50ID0gY29udGVudC5zbGljZSgxKTtcbiAgfVxuICByZXR1cm4gY29udGVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1BsYWluT2JqZWN0OiBpc1BsYWluT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW0sXG4gIHN0cmlwQk9NOiBzdHJpcEJPTVxufTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUjp3Z2h0QDMwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUjp3Z2h0QDMwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0td3JhcFdpZHRoOiAxMjAwcHg7XFxuICAtLWdyYXk6ICM3ZjhjOGQ7XFxuICAtLWRlZXBHcmF5OiAjNTM1YzY4O1xcbiAgLS1yZWQ6ICNmZjM4NWM7XFxuICAtLWJsdWU6IGxpZ2h0c2VhZ3JlZW47XFxuICAtLWdyZWVuOiAjMjNjMzgyO1xcbiAgLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luOiA1MHB4O1xcbiAgLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmc6IDMwcHg7XFxuICAtLWRldGFpbEZvbnRTaXplOiBzbWFsbGVyO1xcbiAgLS1ib3R0b21Cb3JkZXI6IDFweCBzb2xpZCAjZWNmMGYxO1xcbiAgLS1ib3JkZXJSYWRpdXM6IDEwcHg7XFxuICAtLWNhbGVuZGFyRGF5U2l6ZTogNDBweDtcXG4gIC0tYm94U2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7IH1cXG5cXG4uQUNDRVBURUQge1xcbiAgY29sb3I6IHZhcigtLWdyZWVuKSAhaW1wb3J0YW50OyB9XFxuXFxuLlBFTkRJTkcsIC5DT01QTEVURUQge1xcbiAgY29sb3I6IHZhcigtLWdyYXkpICFpbXBvcnRhbnQ7IH1cXG5cXG4uUkVGVVNFRCwgLkNBTkNMRUQge1xcbiAgY29sb3I6IHZhcigtLXJlZCkgIWltcG9ydGFudDsgfVxcblxcbjpyb290IHtcXG4gIC0td3JhcFdpZHRoOiAxMjAwcHg7XFxuICAtLWdyYXk6ICM3ZjhjOGQ7XFxuICAtLWRlZXBHcmF5OiAjNTM1YzY4O1xcbiAgLS1yZWQ6ICNmZjM4NWM7XFxuICAtLWJsdWU6IGxpZ2h0c2VhZ3JlZW47XFxuICAtLWdyZWVuOiAjMjNjMzgyO1xcbiAgLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luOiA1MHB4O1xcbiAgLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmc6IDMwcHg7XFxuICAtLWRldGFpbEZvbnRTaXplOiBzbWFsbGVyO1xcbiAgLS1ib3R0b21Cb3JkZXI6IDFweCBzb2xpZCAjZWNmMGYxO1xcbiAgLS1ib3JkZXJSYWRpdXM6IDEwcHg7XFxuICAtLWNhbGVuZGFyRGF5U2l6ZTogNDBweDtcXG4gIC0tYm94U2hhZG93OiAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yMyk7IH1cXG5cXG4uQUNDRVBURUQge1xcbiAgY29sb3I6IHZhcigtLWdyZWVuKSAhaW1wb3J0YW50OyB9XFxuXFxuLlBFTkRJTkcsIC5DT01QTEVURUQge1xcbiAgY29sb3I6IHZhcigtLWdyYXkpICFpbXBvcnRhbnQ7IH1cXG5cXG4uUkVGVVNFRCwgLkNBTkNMRUQge1xcbiAgY29sb3I6IHZhcigtLXJlZCkgIWltcG9ydGFudDsgfVxcblxcbmh0bWwge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7IH1cXG5cXG4uQnRuRGlzYWJsZWQge1xcbiAgY3Vyc29yOiBuby1kcm9wICFpbXBvcnRhbnQ7XFxuICBvcGFjaXR5OiAwLjIgIWltcG9ydGFudDsgfVxcblxcbi53cmFwIHtcXG4gIG1heC13aWR0aDogdmFyKC0td3JhcFdpZHRoKTtcXG4gIG1hcmdpbjogMCBhdXRvOyB9XFxuICAud3JhcCAuaGVhZGVyIHtcXG4gICAgbWFyZ2luOiAwIHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pO1xcbiAgICBwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7IH1cXG4gICAgLndyYXAgLmhlYWRlciBpIHtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLndyYXAgLmhlYWRlciAuaGVhZGVyX3RpdGxlIHtcXG4gICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgIHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgMDsgfVxcbiAgLndyYXAgLnJlc2VydmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG4gICAgLndyYXAgLnJlc2VydmUgLm1haW4ge1xcbiAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAvIDIpIDA7XFxuICAgICAgbWFyZ2luOiAwIHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pO1xcbiAgICAgIHdpZHRoOiA2NSU7IH1cXG4gICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAucm9vbV9uYW1lIHtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7IH1cXG4gICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAucm9vbV9hZGRyZXNzIHtcXG4gICAgICAgIG1hcmdpbjogMTBweCAwOyB9XFxuICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLnJlc2VydmVfdGltZV93cmFwIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7IH1cXG4gICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5yZXNlcnZlX3RpbWVfd3JhcCAucmVzZXJ2ZV90aW1lIC5yZXNlcnZlX2NoZWNrIHtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtOyB9XFxuICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAucmVzZXJ2ZV90aW1lX3dyYXAgLnJlc2VydmVfdGltZSAucm9vbV9jaGVjayB7XFxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07IH1cXG4gICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5yZXNlcnZlX3RpbWVfd3JhcCAucmVzZXJ2ZV90aW1lIGkge1xcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTsgfVxcbiAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLnJlc2VydmVfdGltZV93cmFwIC5yZXNlcnZlX2RldGFpbCAucmVzZXJ2ZV9uaWdodCB7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7IH1cXG4gICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5yZXNlcnZlX3RpbWVfd3JhcCAucmVzZXJ2ZV9kZXRhaWwgLnJlc2VydmVfZ3Vlc3RzIHtcXG4gICAgICAgICAgY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTsgfVxcbiAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5pY29ucyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAwO1xcbiAgICAgICAgYm9yZGVyLXRvcDogdmFyKC0tYm90dG9tQm9yZGVyKTsgfVxcbiAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmljb25zIC5pY29uc19pdGVtIHtcXG4gICAgICAgICAgY29sb3I6IHZhcigtLWdyYXkpOyB9XFxuICAgICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5pY29ucyAuaWNvbnNfaXRlbSBpLFxcbiAgICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuaWNvbnMgLmljb25zX2l0ZW0gc3BhbiB7XFxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtOyB9XFxuICAgICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5pY29ucyAuaWNvbnNfaXRlbTpsYXN0LW9mLXR5cGUgaSB7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4OyB9XFxuICAgICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5pY29ucyAuaWNvbnNfaXRlbTpob3ZlciB7XFxuICAgICAgICAgICAgY29sb3I6IGJsYWNrOyB9XFxuICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmZvb3RlciB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKTtcXG4gICAgICAgIGFuaW1hdGlvbjogc2xpZGUgZWFzZSAwLjNzOyB9XFxuICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuZm9vdGVyIC5yZXNlcnZlX2NoYW5nZSxcXG4gICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5mb290ZXIgLnJlc2VydmVfY2FuY2VsIHtcXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NkY2RjZDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XFxuICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgICAgICAgIHdpZHRoOiA0NSU7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGhlaWdodDogMjgwcHg7IH1cXG4gICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmZvb3RlciAucmVzZXJ2ZV9jaGFuZ2UgaSxcXG4gICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmZvb3RlciAucmVzZXJ2ZV9jYW5jZWwgaSB7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsdWUpO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTsgfVxcbiAgICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuZm9vdGVyIC5yZXNlcnZlX2NoYW5nZSAuZm9vdGVyX3RpdGxlLFxcbiAgICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuZm9vdGVyIC5yZXNlcnZlX2NhbmNlbCAuZm9vdGVyX3RpdGxlIHtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwOyB9XFxuICAgICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5mb290ZXIgLnJlc2VydmVfY2hhbmdlIC5mb290ZXJfYm9keSxcXG4gICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmZvb3RlciAucmVzZXJ2ZV9jYW5jZWwgLmZvb3Rlcl9ib2R5IHtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JheSk7IH1cXG4gICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmZvb3RlciAucmVzZXJ2ZV9jaGFuZ2UgYSxcXG4gICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmZvb3RlciAucmVzZXJ2ZV9jYW5jZWwgYSB7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogYXV0bzsgfVxcbiAgICAgICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5mb290ZXIgLnJlc2VydmVfY2hhbmdlIGEgYnV0dG9uLFxcbiAgICAgICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5mb290ZXIgLnJlc2VydmVfY2FuY2VsIGEgYnV0dG9uIHtcXG4gICAgICAgICAgICAgIGFsbDogdW5zZXQ7XFxuICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAxZW07XFxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxuICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ibHVlKTtcXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7IH1cXG4gICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuY2hhbmdlX3N0ZXAtMSB7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7XFxuICAgICAgICBib3JkZXItdG9wOiB2YXIoLS1ib3R0b21Cb3JkZXIpO1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICAgIGFuaW1hdGlvbjogc2xpZGUgZWFzZSAuM3M7IH1cXG4gICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5jaGFuZ2Vfc3RlcC0xIC5jaGFuZ2Vfc3RlcF90aXRsZSB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDsgfVxcbiAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNoYW5nZV9zdGVwLTEgLnJlc2VydmF0aW9uX3Blb3BsZSB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgIG1hcmdpbjogMzBweCAwOyB9XFxuICAgICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5jaGFuZ2Vfc3RlcC0xIC5yZXNlcnZhdGlvbl9wZW9wbGUgLnJlc2VydmF0aW9uX2Rpc3BsYXkge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgICAgICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5jaGFuZ2Vfc3RlcC0xIC5yZXNlcnZhdGlvbl9wZW9wbGUgLnJlc2VydmF0aW9uX2Rpc3BsYXkgLmd1ZXN0X2NvdW50ZXJfYm94IHtcXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgICAgICAgdG9wOiAtMTBweDsgfVxcbiAgICAgICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNoYW5nZV9zdGVwLTEgLnJlc2VydmF0aW9uX3Blb3BsZSAucmVzZXJ2YXRpb25fZGlzcGxheSAuZ3Vlc3RfY291bnRlcl9ib3ggLmRpc3BsYXlfYnRuX2ljb24ge1xcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgICAgICAgICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5jaGFuZ2Vfc3RlcC0xIC5yZXNlcnZhdGlvbl9wZW9wbGUgLnJlc2VydmF0aW9uX2Rpc3BsYXkgLmd1ZXN0X2NvdW50ZXJfYm94IC5kaXNwbGF5X2J0bl9pY29uOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxOyB9XFxuICAgICAgICAgICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5jaGFuZ2Vfc3RlcC0xIC5yZXNlcnZhdGlvbl9wZW9wbGUgLnJlc2VydmF0aW9uX2Rpc3BsYXkgLmd1ZXN0X2NvdW50ZXJfYm94IC5kaXNwbGF5X2J0bl9pY29uOmFjdGl2ZSB7XFxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTsgfVxcbiAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNoYW5nZV9zdGVwLTEgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX2Zvcm0ge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgd2lkdGg6IDY2MHB4O1xcbiAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3hTaGFkb3cpO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMpO1xcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7IH1cXG4gICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNoYW5nZV9zdGVwLTEgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1faGVhZGVyIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAgICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNoYW5nZV9zdGVwLTEgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1faGVhZGVyIC5oZWFkZXJfdGV4dCB7XFxuICAgICAgICAgICAgICB3aWR0aDogNTUlOyB9XFxuICAgICAgICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuY2hhbmdlX3N0ZXAtMSAucmVzZXJ2YXRpb25fbWFpbiAucmVzZXJ2YXRpb25fZm9ybSAuZm9ybV9oZWFkZXIgLmhlYWRlcl90ZXh0IC5oZWFkZXJfdGl0bGUge1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTsgfVxcbiAgICAgICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNoYW5nZV9zdGVwLTEgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1faGVhZGVyIC5oZWFkZXJfdGV4dCAuaGVhZGVyX2JvZHkge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7IH1cXG4gICAgICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuY2hhbmdlX3N0ZXAtMSAucmVzZXJ2YXRpb25fbWFpbiAucmVzZXJ2YXRpb25fZm9ybSAuZm9ybV9oZWFkZXIgLmhlYWRlcl9pbnB1dHMge1xcbiAgICAgICAgICAgICAgd2lkdGg6IDQ1JTtcXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICBib3JkZXI6IHZhcigtLWJvdHRvbUJvcmRlcik7XFxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMpO1xcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNzsgfVxcbiAgICAgICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNoYW5nZV9zdGVwLTEgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1faGVhZGVyIC5oZWFkZXJfaW5wdXRzIC5pbnB1dF9pdGVtIHtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7IH1cXG4gICAgICAgICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNoYW5nZV9zdGVwLTEgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1faGVhZGVyIC5oZWFkZXJfaW5wdXRzIC5pbnB1dF9pdGVtIC5yZXNlcnZhdGlvbl9pbnB1dCB7XFxuICAgICAgICAgICAgICAgICAgYWxsOiB1bnNldDtcXG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogdGV4dDsgfVxcbiAgICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuY2hhbmdlX3N0ZXAtMSAucmVzZXJ2YXRpb25fbWFpbiAucmVzZXJ2YXRpb25fZm9ybSAuZm9ybV9tYWluIHtcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogdmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbik7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKSAvIDIpOyB9XFxuICAgICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNoYW5nZV9zdGVwLTEgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1fbWFpbiAucGFnaW5hdGlvbl9idG5zIHtcXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcbiAgICAgICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNoYW5nZV9zdGVwLTEgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1fbWFpbiAucGFnaW5hdGlvbl9idG5zIC5wYWdpbmF0aW9uX2J0biB7XFxuICAgICAgICAgICAgICAgIGFsbDogdW5zZXQ7XFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07IH1cXG4gICAgICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuY2hhbmdlX3N0ZXAtMSAucmVzZXJ2YXRpb25fbWFpbiAucmVzZXJ2YXRpb25fZm9ybSAuZm9ybV9tYWluIC5jYWxlbmRhcl93cmFwIHtcXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcbiAgICAgICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNoYW5nZV9zdGVwLTEgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1fbWFpbiAuY2FsZW5kYXJfd3JhcCAuY2FsZW5kYXJfaXRlbSB7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA0OCU7IH1cXG4gICAgICAgICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNoYW5nZV9zdGVwLTEgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1fbWFpbiAuY2FsZW5kYXJfd3JhcCAuY2FsZW5kYXJfaXRlbSAuY2FsZW5kYXJfbW9udGgge1xcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7IH1cXG4gICAgICAgICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNoYW5nZV9zdGVwLTEgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1fbWFpbiAuY2FsZW5kYXJfd3JhcCAuY2FsZW5kYXJfaXRlbSAuY2FsZW5kYXJfcm93IHtcXG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAgICAgICAgICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNoYW5nZV9zdGVwLTEgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1fbWFpbiAuY2FsZW5kYXJfd3JhcCAuY2FsZW5kYXJfaXRlbSAuY2FsZW5kYXJfcm93IC5jYWxlbmRhcl9kYXkge1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHZhcigtLWNhbGVuZGFyRGF5U2l6ZSk7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHZhcigtLWNhbGVuZGFyRGF5U2l6ZSk7XFxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgICAgICAgICAgICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5jaGFuZ2Vfc3RlcC0xIC5yZXNlcnZhdGlvbl9tYWluIC5yZXNlcnZhdGlvbl9mb3JtIC5mb3JtX21haW4gLmNhbGVuZGFyX3dyYXAgLmNhbGVuZGFyX2l0ZW0gLmNhbGVuZGFyX3JvdyAuY2FsZW5kYXJfZGF5LmF2YWlsYWJsZV9kYXkge1xcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZhOyB9XFxuICAgICAgICAgICAgICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuY2hhbmdlX3N0ZXAtMSAucmVzZXJ2YXRpb25fbWFpbiAucmVzZXJ2YXRpb25fZm9ybSAuZm9ybV9tYWluIC5jYWxlbmRhcl93cmFwIC5jYWxlbmRhcl9pdGVtIC5jYWxlbmRhcl9yb3cgLmNhbGVuZGFyX2RheSBzcGFuIHtcXG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxlbmRhckRheVNpemUpOyB9XFxuICAgICAgICAgICAgICAgICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5jaGFuZ2Vfc3RlcC0xIC5yZXNlcnZhdGlvbl9tYWluIC5yZXNlcnZhdGlvbl9mb3JtIC5mb3JtX21haW4gLmNhbGVuZGFyX3dyYXAgLmNhbGVuZGFyX2l0ZW0gLmNhbGVuZGFyX3JvdyAuY2FsZW5kYXJfZGF5IHNwYW4uaW52YWxpZF9kYXkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDsgfVxcbiAgICAgICAgICAgICAgICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuY2hhbmdlX3N0ZXAtMSAucmVzZXJ2YXRpb25fbWFpbiAucmVzZXJ2YXRpb25fZm9ybSAuZm9ybV9tYWluIC5jYWxlbmRhcl93cmFwIC5jYWxlbmRhcl9pdGVtIC5jYWxlbmRhcl9yb3cgLmNhbGVuZGFyX2RheSBzcGFuLnZhbGlkX2RheTpob3ZlciB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAgICAgICAgICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNoYW5nZV9zdGVwLTEgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1fbWFpbiAuY2FsZW5kYXJfd3JhcCAuY2FsZW5kYXJfaXRlbSAuY2FsZW5kYXJfcm93IC5jYWxlbmRhcl9kYXkuY2xpY2tlZC5hdmFpbGFibGVfZGF5IHtcXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlIDAgMCA1MCU7IH1cXG4gICAgICAgICAgICAgICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5jaGFuZ2Vfc3RlcC0xIC5yZXNlcnZhdGlvbl9tYWluIC5yZXNlcnZhdGlvbl9mb3JtIC5mb3JtX21haW4gLmNhbGVuZGFyX3dyYXAgLmNhbGVuZGFyX2l0ZW0gLmNhbGVuZGFyX3JvdyAuY2FsZW5kYXJfZGF5LmNsaWNrZWQgc3BhbiB7XFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7IH1cXG4gICAgICAgICAgICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuY2hhbmdlX3N0ZXAtMSAucmVzZXJ2YXRpb25fbWFpbiAucmVzZXJ2YXRpb25fZm9ybSAuZm9ybV9tYWluIC5jYWxlbmRhcl93cmFwIC5jYWxlbmRhcl9pdGVtIC5jYWxlbmRhcl9yb3cgLmRheW5hbWUge1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JheSk7IH1cXG4gICAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNoYW5nZV9zdGVwLTEgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1fZm9vdGVyIHtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7IH1cXG4gICAgICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuY2hhbmdlX3N0ZXAtMSAucmVzZXJ2YXRpb25fbWFpbiAucmVzZXJ2YXRpb25fZm9ybSAuZm9ybV9mb290ZXIgLmlucHV0X3Jlc2V0IHtcXG4gICAgICAgICAgICAgIGFsbDogdW5zZXQ7XFxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjg1O1xcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpLCAxcHggLTFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvciksIC0xcHggMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKSwgLTFweCAtMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKTtcXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAgICAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5jaGFuZ2Vfc3RlcC0xIC5yZXNlcnZhdGlvbl9tYWluIC5yZXNlcnZhdGlvbl9mb3JtIC5mb3JtX2Zvb3RlciAuZm9ybV91cGRhdGUge1xcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDE1cHg7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICAgIGJvcmRlcjogMDtcXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XFxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAgIC53cmFwIC5yZXNlcnZlIC5tYWluIC5jYW5jZWxfc3RlcC0xIHtcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgMDtcXG4gICAgICAgIGJvcmRlci10b3A6IHZhcigtLWJvdHRvbUJvcmRlcik7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgYW5pbWF0aW9uOiBzbGlkZSBlYXNlIC4zczsgfVxcbiAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNhbmNlbF9zdGVwLTEgLmNhbmNlbF9zdGVwX3RpdGxlIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAycmVtO1xcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwOyB9XFxuICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuY2FuY2VsX3N0ZXAtMSAuY2FuY2VsX3N0ZXBfYm9keSB7XFxuICAgICAgICAgIG1hcmdpbjogdmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbikgMDsgfVxcbiAgICAgICAgLndyYXAgLnJlc2VydmUgLm1haW4gLmNhbmNlbF9zdGVwLTEgc21hbGwge1xcbiAgICAgICAgICBkaXNwbGF5OiBibG9jazsgfVxcbiAgICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuY2FuY2VsX3N0ZXAtMSBzbWFsbCBzcGFuIHtcXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjg1O1xcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAxcHggMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKSwgMXB4IC0xcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpLCAtMXB4IDFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvciksIC0xcHggLTFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvcik7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWJsdWUpOyB9XFxuICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuY2FuY2VsX3N0ZXAtMSBmb3JtIHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDsgfVxcbiAgICAgICAgICAud3JhcCAucmVzZXJ2ZSAubWFpbiAuY2FuY2VsX3N0ZXAtMSBmb3JtIC5jYW5jZWxfc3RlcF9idG4ge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgICAgYm9yZGVyOiAwO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTsgfVxcbiAgICAud3JhcCAucmVzZXJ2ZSAuYXNpZGUge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB3aWR0aDogMzAlO1xcbiAgICAgIG1hcmdpbjogMCB2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKTsgfVxcbiAgICAgIC53cmFwIC5yZXNlcnZlIC5hc2lkZSAuYmlsbHMge1xcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcXG4gICAgICAgIHRvcDogMTAwcHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4OyB9XFxuICAgICAgICAud3JhcCAucmVzZXJ2ZSAuYXNpZGUgLmJpbGxzIC5yb29tX2RldGFpbCB7XFxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XFxuICAgICAgICAud3JhcCAucmVzZXJ2ZSAuYXNpZGUgLmJpbGxzIC5wcmljZSxcXG4gICAgICAgIC53cmFwIC5yZXNlcnZlIC5hc2lkZSAuYmlsbHMgLnNlcnZpY2Uge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG4gICAgICAgIC53cmFwIC5yZXNlcnZlIC5hc2lkZSAuYmlsbHMgLnRvdGFsX3ByaWNlIHtcXG4gICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwOyB9XFxuICAgICAgICAud3JhcCAucmVzZXJ2ZSAuYXNpZGUgLmJpbGxzIC5zdGF0dXMge1xcbiAgICAgICAgICBtYXJnaW46IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgMDsgfVxcbiAgICAgICAgLndyYXAgLnJlc2VydmUgLmFzaWRlIC5iaWxscyAuZGVsZXRlX2luZm8ge1xcbiAgICAgICAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgICAgICAgIC53cmFwIC5yZXNlcnZlIC5hc2lkZSAuYmlsbHMgLmRlbGV0ZV9pbmZvICoge1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7IH1cXG4gICAgICAgICAgLndyYXAgLnJlc2VydmUgLmFzaWRlIC5iaWxscyAuZGVsZXRlX2luZm8gLnJlZnVuZF9wcmljZS12YWx1ZSB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAzZW07XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWdyZWVuKTsgfVxcblxcbkBrZXlmcmFtZXMgc2xpZGUge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpO1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc2Nzcy9fX2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovL3Njc3MvcmVzZXJ2ZURldGFpbC5zY3NzXCIsXCJ3ZWJwYWNrOi8v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SUFDZ0U7WURnWDNELGtCQUFrQixFQUFBO1FBdlh4QjtVQTRYSyxhQUFhLEVBQUE7VUE1WGxCO1lBK1hNLGtCQUFrQjtZQUNsQixpQkFBaUI7WUFDakIsdUJBQXVCO1lBQ3ZCLFlBQVk7WUFDWixTQUFTO1lBQ1Qsa0NBQWtDO1lBQ2xDLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YsYUFBYSxFQUFBO0lBdlluQjtNQStZRyxrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLDBDQUEwQyxFQUFBO01Balo3QztRQW9aSSxnQkFBZ0I7UUFDaEIsVUFBVTtRQUNWLG1CQUFtQixFQUFBO1FBdFp2QjtVQXlaSyxjQUFjO1VBQ2QsbUJBQW1CLEVBQUE7UUExWnhCOztVQStaSyxhQUFhO1VBQ2IsOEJBQThCLEVBQUE7UUFoYW5DO1VBb2FLLGVBQWU7VUFDZixnQkFBZ0IsRUFBQTtRQXJhckI7VUF5YUsseUNBQXlDLEVBQUE7UUF6YTlDO1VBNmFLLGFBQWEsRUFBQTtVQTdhbEI7WUFnYk0sZ0JBQWdCLEVBQUE7VUFoYnRCO1lBb2JTLGNBQWM7WUFDZCxtQkFBbUIsRUFBQTs7QUFRM0I7RUFDQztJQUNDLDZCQUE2QjtJQUM3QixVQUFVLEVBQUE7RUFFWDtJQUNDLDBCQUEwQjtJQUMxQixVQUFVLEVBQUEsRUFBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrS1I6d2dodEAzMDA7NTAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG46cm9vdCB7XFxyXFxuXFx0LS13cmFwV2lkdGg6IDEyMDBweDtcXHJcXG5cXHQtLWdyYXk6ICM3ZjhjOGQ7XFxyXFxuXFx0LS1kZWVwR3JheTogIzUzNWM2ODtcXHJcXG5cXHQtLXJlZDogI2ZmMzg1YztcXHJcXG5cXHQtLWJsdWU6IGxpZ2h0c2VhZ3JlZW47XFxyXFxuXFx0LS1ncmVlbjogIzIzYzM4MjtcXHJcXG5cXHQtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW46IDUwcHg7XFxyXFxuXFx0LS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmc6IDMwcHg7XFxyXFxuXFx0LS1kZXRhaWxGb250U2l6ZTogc21hbGxlcjtcXHJcXG5cXHQtLWJvdHRvbUJvcmRlcjogMXB4IHNvbGlkICNlY2YwZjE7XFxyXFxuXFx0LS1ib3JkZXJSYWRpdXM6IDEwcHg7XFxyXFxuXFx0LS1jYWxlbmRhckRheVNpemU6IDQwcHg7XFxyXFxuXFx0LS1ib3hTaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcXHJcXG59XFxyXFxuXFxyXFxuLy8gQnJlYWtwb2ludHNcXHJcXG4kYnJlYWtwb2ludC10YWJsZXQ6IDc1OHB4O1xcclxcbiRicmVha3BvaW50LWRlc2t0b3A6IDEwMjRweDtcXHJcXG5cXHJcXG4uQUNDRVBURUQge1xcclxcblxcdGNvbG9yOiB2YXIoLS1ncmVlbikgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLlBFTkRJTkcsIC5DT01QTEVURUQge1xcclxcblxcdGNvbG9yOiB2YXIoLS1ncmF5KSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uUkVGVVNFRCwgLkNBTkNMRUQge1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCBcXFwiLi9fYmFzZVxcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi9fbWl4aW5zXFxcIjtcXHJcXG5cXHJcXG5odG1sIHtcXHJcXG5cXHRzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuLkJ0bkRpc2FibGVkIHtcXHJcXG5cXHRjdXJzb3I6IG5vLWRyb3AgIWltcG9ydGFudDtcXHJcXG5cXHRvcGFjaXR5OiAwLjIgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXAge1xcclxcblxcdG1heC13aWR0aDogdmFyKC0td3JhcFdpZHRoKTtcXHJcXG5cXHRtYXJnaW46IDAgYXV0bztcXHJcXG5cXHJcXG5cXHQuaGVhZGVyIHtcXHJcXG5cXHRcXHRtYXJnaW46IDAgdmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbik7XFxyXFxuXFx0XFx0cGFkZGluZzogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAwO1xcclxcblxcclxcblxcdFxcdGkge1xcclxcblxcdFxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcclxcblxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0LmhlYWRlcl90aXRsZSB7XFxyXFxuXFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQucmVzZXJ2ZSB7XFxyXFxuXFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuXFx0XFx0Lm1haW4ge1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IGNhbGModmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAvIDIpIDA7XFxyXFxuXFx0XFx0XFx0bWFyZ2luOiAwIHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pO1xcclxcblxcdFxcdFxcdHdpZHRoOiA2NSU7XFxyXFxuXFxyXFxuXFx0XFx0XFx0LnJvb21fbmFtZSB7XFxyXFxuXFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0LnJvb21fYWRkcmVzcyB7XFxyXFxuXFx0XFx0XFx0XFx0bWFyZ2luOiAxMHB4IDA7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdC5yZXNlcnZlX3RpbWVfd3JhcCB7XFxyXFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRtYXJnaW46IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgMDtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHQucmVzZXJ2ZV90aW1lIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHQucmVzZXJ2ZV9jaGVjayB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IDEuMjVyZW07XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdC5yb29tX2NoZWNrIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogdmFyKC0tZ3JheSk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Zm9udC1zaXplOiAwLjlyZW07XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdGkge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiB2YXIoLS1ncmF5KTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IDEuMjVyZW07XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHQucmVzZXJ2ZV9kZXRhaWwge1xcclxcblxcdFxcdFxcdFxcdFxcdC5yZXNlcnZlX25pZ2h0IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHQucmVzZXJ2ZV9ndWVzdHMge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiB2YXIoLS1ncmF5KTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IDAuOHJlbTtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHQuaWNvbnMge1xcclxcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAwO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlci10b3A6IHZhcigtLWJvdHRvbUJvcmRlcik7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0Lmljb25zX2l0ZW0ge1xcclxcblxcdFxcdFxcdFxcdFxcdGNvbG9yOiB2YXIoLS1ncmF5KTtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRpLFxcclxcblxcdFxcdFxcdFxcdFxcdHNwYW4ge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdHBhZGRpbmctcmlnaHQ6IDE1cHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMXJlbTtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0JjpsYXN0LW9mLXR5cGUgaSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0cGFkZGluZy1sZWZ0OiAzMHB4O1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogYmxhY2s7XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0LmZvb3RlciB7XFxyXFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRcXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKTtcXHJcXG5cXHRcXHRcXHRcXHRhbmltYXRpb246IHNsaWRlIGVhc2UgMC4zcztcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHQucmVzZXJ2ZV9jaGFuZ2UsXFxyXFxuXFx0XFx0XFx0XFx0LnJlc2VydmVfY2FuY2VsIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRib3JkZXI6IDFweCBzb2xpZCBsaWdodGVuKGdyYXksIDMwJSk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdFxcdFxcdFxcdFxcdGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjI0KTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRwYWRkaW5nOiAzMHB4O1xcclxcblxcdFxcdFxcdFxcdFxcdHdpZHRoOiA0NSU7XFxyXFxuXFx0XFx0XFx0XFx0ICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0ICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0XFx0XFx0ICAgIGhlaWdodDogMjgwcHg7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0aSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IHZhcigtLWJsdWUpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMnJlbTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRtYXJnaW4tYm90dG9tOiAwLjVlbTtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0LmZvb3Rlcl90aXRsZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0LmZvb3Rlcl9ib2R5IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogdmFyKC0tZ3JheSk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdGEge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdG1hcmdpbi10b3A6IGF1dG87XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0YnV0dG9uIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRhbGw6IHVuc2V0O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHBhZGRpbmc6IDAuNWVtIDFlbTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0Ym9yZGVyOiAycHggc29saWQgdmFyKC0tYmx1ZSk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHQuY2hhbmdlX3N0ZXAtMSB7XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAwO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlci10b3A6IHZhcigtLWJvdHRvbUJvcmRlcik7XFxyXFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRcXHRcXHRcXHRhbmltYXRpb246IHNsaWRlIGVhc2UgLjNzO1xcclxcblxcdFxcclxcblxcdFxcdFxcdFxcdC5jaGFuZ2Vfc3RlcF90aXRsZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Zm9udC1zaXplOiAycmVtO1xcclxcblxcdFxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdC5yZXNlcnZhdGlvbl9wZW9wbGUge1xcclxcblxcdFxcdFxcdFxcdFxcdCAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgaGVpZ2h0OiA1MHB4O1xcclxcblxcdFxcdFxcdFxcdFxcdCAgICBtYXJnaW46IDMwcHggMDtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHQucmVzZXJ2YXRpb25fZGlzcGxheSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdFxcdC5ndWVzdF9jb3VudGVyX2JveCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHJpZ2h0OiAwO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHRvcDogLTEwcHg7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0LmRpc3BsYXlfYnRuX2ljb24ge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0d2lkdGg6IDMwcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0aGVpZ2h0OiAzMHB4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGxpbmUtaGVpZ2h0OiAzMHB4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRtYXJnaW4tbGVmdDogMTBweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRvcGFjaXR5OiAwLjU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRvcGFjaXR5OiAxO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQmOmFjdGl2ZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdC5yZXNlcnZhdGlvbl9tYWluIHtcXHJcXG5cXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHQucmVzZXJ2YXRpb25fZm9ybSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0d2lkdGg6IDY2MHB4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGJveC1zaGFkb3c6IHZhcigtLWJveFNoYWRvdyk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRwYWRkaW5nOiAyMHB4IDMwcHg7XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0LmZvcm1faGVhZGVyIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdC5oZWFkZXJfdGV4dCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0d2lkdGg6IDU1JTtcXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQuaGVhZGVyX3RpdGxlIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMS41cmVtO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQuaGVhZGVyX2JvZHkge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiB2YXIoLS1ncmF5KTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRmb250LXdlaWdodDogMzAwO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0LmhlYWRlcl9pbnB1dHMge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHdpZHRoOiA0NSU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRib3JkZXI6IHZhcigtLWJvdHRvbUJvcmRlcik7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xcclxcblxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdC5pbnB1dF9pdGVtIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IDAuOHJlbTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRwYWRkaW5nOiAxMHB4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0d2lkdGg6IDUwJTtcXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQucmVzZXJ2YXRpb25faW5wdXQge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGFsbDogdW5zZXQ7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRjdXJzb3I6IHRleHQ7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdC5mb3JtX21haW4ge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRtYXJnaW4tdG9wOiB2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pIC8gMik7XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0LnBhZ2luYXRpb25fYnRucyB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQucGFnaW5hdGlvbl9idG4ge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGFsbDogdW5zZXQ7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMS41cmVtO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQuY2FsZW5kYXJfd3JhcCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0LmNhbGVuZGFyX2l0ZW0ge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHdpZHRoOiA0OCU7XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0LmNhbGVuZGFyX21vbnRoIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQuY2FsZW5kYXJfcm93IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdC5jYWxlbmRhcl9kYXkge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHdpZHRoOiB2YXIoLS1jYWxlbmRhckRheVNpemUpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGhlaWdodDogdmFyKC0tY2FsZW5kYXJEYXlTaXplKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Ji5hdmFpbGFibGVfZGF5IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmZhO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRzcGFuIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0bGluZS1oZWlnaHQ6IHZhcigtLWNhbGVuZGFyRGF5U2l6ZSk7XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Ji5pbnZhbGlkX2RheSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IHZhcigtLWdyYXkpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQmLnZhbGlkX2RheTpob3ZlciB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Ym9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdCYuY2xpY2tlZCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Ji5hdmFpbGFibGVfZGF5IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiA1MCUgMCAwIDUwJTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0c3BhbiB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Ym9yZGVyOiAwICFpbXBvcnRhbnQ7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGN1cnNvcjogZGVmYXVsdCAhaW1wb3J0YW50O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdC5kYXluYW1lIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IDAuOHJlbTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogdmFyKC0tZ3JheSk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQuZm9ybV9mb290ZXIge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHRleHQtYWxpZ246IGVuZDtcXHJcXG5cXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQuaW5wdXRfcmVzZXQge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGFsbDogdW5zZXQ7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Zm9udC1zaXplOiAwLjlyZW07XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0QGluY2x1ZGUgdW5kZXJsaW5lO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0LmZvcm1fdXBkYXRlIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0bWFyZ2luOiAwIDE1cHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGJvcmRlcjogMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHQuY2FuY2VsX3N0ZXAtMSB7XFxyXFxuXFx0XFx0XFx0XFx0cGFkZGluZzogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAwO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlci10b3A6IHZhcigtLWJvdHRvbUJvcmRlcik7XFxyXFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHRcXHRcXHRcXHRhbmltYXRpb246IHNsaWRlIGVhc2UgLjNzO1xcclxcblxcdFxcclxcblxcdFxcdFxcdFxcdC5jYW5jZWxfc3RlcF90aXRsZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Zm9udC1zaXplOiAycmVtO1xcclxcblxcdFxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdC5jYW5jZWxfc3RlcF9ib2R5IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRtYXJnaW46IHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pIDA7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdHNtYWxsIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHRzcGFuIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRAaW5jbHVkZSB1bmRlcmxpbmU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IHZhcigtLWJsdWUpO1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0Zm9ybSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRcXHQuY2FuY2VsX3N0ZXBfYnRuIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0bWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGJvcmRlcjogMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC5hc2lkZSB7XFxyXFxuXFx0XFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdFxcdFxcdHdpZHRoOiAzMCU7XFxyXFxuXFx0XFx0XFx0bWFyZ2luOiAwIHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pO1xcclxcblxcdFxcdFxcdFxcclxcblxcdFxcdFxcdC5iaWxscyB7XFxyXFxuXFx0XFx0XFx0XFx0cG9zaXRpb246IHN0aWNreTtcXHJcXG5cXHRcXHRcXHRcXHR0b3A6IDEwMHB4O1xcclxcblxcdFxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDUwcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0LnJvb21fZGV0YWlsIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRkaXNwbGF5OiBibG9jaztcXHJcXG5cXHRcXHRcXHRcXHRcXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHJcXG5cXHRcXHRcXHRcXHQucHJpY2UsXFxyXFxuXFx0XFx0XFx0XFx0LnNlcnZpY2Uge1xcclxcblxcdFxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHJcXG5cXHRcXHRcXHRcXHQudG90YWxfcHJpY2Uge1xcclxcblxcdFxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogM3JlbTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHJcXG5cXHRcXHRcXHRcXHQuc3RhdHVzIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRtYXJnaW46IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgMDtcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFxyXFxuXFx0XFx0XFx0XFx0LmRlbGV0ZV9pbmZvIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRkaXNwbGF5OiBub25lO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdCoge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcclxcblxcdFxcdFxcdFxcdFxcdC5yZWZ1bmRfcHJpY2UtdmFsdWUge1xcclxcblxcdFxcdFxcdFxcdFxcdCAgICBmb250LXNpemU6IDNlbTtcXHJcXG5cXHRcXHRcXHRcXHRcXHQgICAgY29sb3I6IHZhcigtLWdyZWVuKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdEBrZXlmcmFtZXMgc2xpZGUge1xcclxcblxcdFxcdGZyb20ge1xcclxcblxcdFxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwcHgpO1xcclxcblxcdFxcdFxcdG9wYWNpdHk6IDA7XFxyXFxuXFx0XFx0fVxcclxcblxcdFxcdHRvIHtcXHJcXG5cXHRcXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXHJcXG5cXHRcXHRcXHRvcGFjaXR5OiAxO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCBcXFwiLi9fYmFzZVxcXCI7XFxyXFxuXFxyXFxuQG1peGluIHRhYmxldCB7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogI3skYnJlYWtwb2ludC1kZXNrdG9wIC0gMXB4fSkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGRlc2t0b3Age1xcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGJyZWFrcG9pbnQtZGVza3RvcH0pIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiB1bmRlcmxpbmUge1xcclxcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDAuODU7XFxyXFxuXFx0dGV4dC1zaGFkb3c6IDFweCAxcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpLCAxcHggLTFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvciksXFxyXFxuXFx0XFx0LTFweCAxcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpLCAtMXB4IC0xcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpO1xcclxcblxcdEBjb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gc3RhcigkZm9udC1zaXplKSB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLXJlZCk7XFxyXFxuXFx0Zm9udC1zaXplOiAkZm9udC1zaXplO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gcmVzZXJ2YXRpb25faXRlbSB7XFxyXFxuXFx0ZmxleDogMSAxIDUwJTtcXHJcXG5cXHRwYWRkaW5nOiA1cHggMTBweDtcXHJcXG5cXHRmb250LXNpemU6IDAuOXJlbTtcXHJcXG5cXHRoZWlnaHQ6IDUwcHg7XFxyXFxuXFxyXFxuXFx0LnJlc2VydmF0aW9uX2Rpc3BsYXkge1xcclxcblxcdFxcdGNvbG9yOiB2YXIoLS1ncmF5KTtcXHJcXG5cXHRcXHRmb250LXdlaWdodDogMzAwO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGZhY2lsaXR5X3J1bGVfaXRlbSB7XFxyXFxuXFx0bWFyZ2luOiAxNXB4IDA7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBmYWNpbGl0eV9ydWxlX2ljb24ge1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHR3aWR0aDogNDBweDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBmYWNpbGl0eV9ydWxlX2Rlc2NyaXB0aW9uIHtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMTVweDtcXHJcXG5cXHRmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gY2hhbmdlSGVhZGVyQ29sb3Ige1xcclxcblxcdC5ib2R5X2hlYWRlciB1bCAuYWlyYm5iX2ljb24sXFxyXFxuXFx0LmJvZHlfaGVhZGVyIHVsIC5oZWFkZXJfcHJvZmlsZSAucHJvZmlsZV9pbWcge1xcclxcblxcdFxcdGNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG5cXHR9XFxyXFxuXFx0XFxyXFxuXFx0LmJvZHlfaGVhZGVyIHVsIC5yb29tX3NlYXJjaCBpIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IFwiLi4vc2Nzcy9yZXNlcnZlRGV0YWlsLnNjc3NcIjtcclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tIFwiLi91dGlsXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbi8qXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKiBHbG9iYWwgU3RhdGVcclxuICovXHJcbmxldCBzdGF0ZSA9IHtcclxuXHRjdXJEYXRlOiBuZXcgRGF0ZSgpLFxyXG5cdHRvZGF5OiBuZXcgRGF0ZSgpLFxyXG5cdGNoZWNrSW5JZDogXCJcIixcclxuXHRjaGVja091dElkOiBcIlwiLFxyXG59O1xyXG4vKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKiogTW9kZWxcclxuICovXHJcbmNvbnN0IERhdGFDb250cm9sbGVyID0gKCgpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0Z2V0UmVzZXJ2ZWREYXlzOiBhc3luYyAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuXHRcdFx0Y29uc3QgcmVzZXJ2ZUlkID0gdXJsLm1hdGNoKC8oPzw9cmVzZXJ2YXRpb25zXFwvKVtcXGRdKi8pWzBdO1xyXG5cdFx0XHRjb25zdCByb29tSWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb21JZFwiKS52YWx1ZTtcclxuXHRcdFx0Y29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG5cdFx0XHRcdGBodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3Jvb20vJHtyb29tSWR9YFxyXG5cdFx0XHQpO1xyXG5cdFx0XHRyZXR1cm4gZGF0YS5maWx0ZXIoZWwgPT4gZWwucmVzZXJ2ZUlkICE9IHJlc2VydmVJZCkubWFwKGVsID0+IGVsLmRheSk7XHJcblx0XHR9LFxyXG5cdFx0Z2V0UmVzZXJ2ZVBheWxvYWQ6ICgpID0+IHtcclxuXHRcdFx0Ly8gMS4gR0VUIERC66Gc67aA7YSwIOyImeyGjCDtlZjro6jri7kg6rCA6rKpXHJcblx0XHRcdGNvbnN0IHJvb21QcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcm9vbVByaWNlREJcIikudmFsdWU7XHJcblxyXG5cdFx0XHQvLyAyLiDqs4TsgrBcclxuXHRcdFx0Y29uc3Qgcm9vbU5pZ2h0ID1cclxuXHRcdFx0XHQobmV3IERhdGUoc3RhdGUuY2hlY2tPdXRJZCkgLSBuZXcgRGF0ZShzdGF0ZS5jaGVja0luSWQpKSAvXHJcblx0XHRcdFx0KDEwMDAgKiA2MCAqIDYwICogMjQpO1xyXG5cdFx0XHRjb25zdCB0b3RhbFByaWNlID0gcm9vbU5pZ2h0ICogcm9vbVByaWNlO1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHJvb21QcmljZSxcclxuXHRcdFx0XHRyb29tTmlnaHQsXHJcblx0XHRcdFx0dG90YWxQcmljZSxcclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblx0XHRnZXRNYXhQZXJzb246ICgpID0+IHtcclxuXHRcdFx0Y29uc3QgbWF4UGVyc29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb29tTWF4UGVyc29uREJcIikudmFsdWU7XHJcblx0XHRcdHJldHVybiBtYXhQZXJzb247XHJcblx0XHR9LFxyXG5cdH07XHJcbn0pKCk7XHJcblxyXG4vKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKiogVmlld1xyXG4gKi9cclxuXHJcbmNvbnN0IFVJQ29udHJvbGxlciA9ICgoKSA9PiB7XHJcblx0Y29uc3QgRE9NU3RyaW5nID0ge1xyXG5cdFx0Y3VyQ2FsZW5kYXI6IFwiI2N1ckNhbGVuZGFyXCIsXHJcblx0XHRuZXh0Q2FsZW5kYXI6IFwiI25leHRDYWxlbmRhclwiLFxyXG5cdFx0cmVzZXJ2ZVBvcHVwQ29udGFpbmVyOiBcIiNyZXNlcnZhdGlvbkZvcm1cIixcclxuXHRcdE1vbnRoWWVhcjogXCIuY2FsZW5kYXJfbW9udGhcIixcclxuXHRcdG5leHRQYWdlOiBcIiNuZXh0UGFnZVwiLFxyXG5cdFx0cHJldlBhZ2U6IFwiI3ByZXZQYWdlXCIsXHJcblx0XHRjYWxlbmRhckJveDogXCIuY2FsZW5kYXJfYm94XCIsXHJcblx0XHRjYWxlbmRhckNvbnRhaW5lcjogXCIjY2FsZW5kYXJXcmFwXCIsXHJcblx0XHRjaGVja0luSW5wdXQ6IFwiI2NoZWNrSW5JbnB1dFwiLFxyXG5cdFx0Y2hlY2tPdXRJbnB1dDogXCIjY2hlY2tPdXRJbnB1dFwiLFxyXG5cdFx0dmFsaWREYXk6IFwiLnZhbGlkX2RheVwiLFxyXG5cdFx0Z3Vlc3RDb3VudGVyQm94OiBcIiNndWVzdENvdW50ZXJCb3hcIixcclxuXHRcdGd1ZXN0Q291bnQ6IFwiI2d1ZXN0Q291bnRcIixcclxuXHRcdHJlc2V0SW5wdXQ6IFwiI3Jlc2V0SW5wdXRcIixcclxuXHRcdGd1ZXN0UGx1c0J0bjogXCIjZ3Vlc3RQbHVzQnRuXCIsXHJcblx0XHRndWVzdE1pbnVzQnRuOiBcIiNndWVzdE1pbnVzQnRuXCIsXHJcblx0XHRyb29tUHJpY2U6IFwiI3Jvb21QcmljZVwiLFxyXG5cdFx0cm9vbU5pZ2h0OiBcIiNyb29tTmlnaHRcIixcclxuXHRcdHRvdGFsUHJpY2U6IFwiI3RvdGFsUHJpY2VcIixcclxuXHRcdHVwZGF0ZUJ0bjogXCIjZm9ybVVwZGF0ZUJ0blwiLFxyXG5cdFx0Zm9vdGVyOiBcIiNmb290ZXJcIixcclxuXHRcdHVwZGF0ZUZvcm06IFwiI2NoYW5nZVN0ZXAxXCIsXHJcblx0XHRjYW5jZWxGb3JtOiBcIiNkZWxldGVTdGVwMVwiLFxyXG5cdFx0c3RhdHVzOiBcIiNyZXNlcnZlU3RhdHVzXCIsXHJcblx0XHRkZWxldGVJbmZvOiBcIiNkZWxldGVJbmZvXCIsXHJcblx0fTtcclxuXHJcblx0Y29uc3QgZGlzcGxheU1vbnRoID0gKHllYXIsIG1vbnRoKSA9PiB7XHJcblx0XHRjb25zdCBbY3VyTW9udGgsIG5leHRNb250aF0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG5cdFx0XHRET01TdHJpbmcuTW9udGhZZWFyXHJcblx0XHQpO1xyXG5cdFx0Y3VyTW9udGgudGV4dENvbnRlbnQgPSBgJHttb250aH3sm5QgJHt5ZWFyfWA7XHJcblx0XHRuZXh0TW9udGgudGV4dENvbnRlbnQgPVxyXG5cdFx0XHRtb250aCA9PT0gMTIgPyBgMeyblCAke3llYXIgKyAxfWAgOiBgJHttb250aCArIDF97JuUICR7eWVhcn1gO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IHNldEJ1dHRvblN0eWxlID0gKHllYXIsIG1vbnRoKSA9PiB7XHJcblx0XHRjb25zdCBwcmV2QnRuTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9NU3RyaW5nLnByZXZQYWdlKTtcclxuXHRcdGNvbnN0IENMX0RJU0FCTEVEID0gXCJCdG5EaXNhYmxlZFwiO1xyXG5cdFx0aWYgKFxyXG5cdFx0XHR5ZWFyID09PSBzdGF0ZS50b2RheS5nZXRGdWxsWWVhcigpICYmXHJcblx0XHRcdG1vbnRoID09PSBzdGF0ZS50b2RheS5nZXRNb250aCgpICsgMVxyXG5cdFx0KSB7XHJcblx0XHRcdHByZXZCdG5Ob2RlLmRpc2FibGVkID0gdHJ1ZTtcclxuXHRcdFx0cHJldkJ0bk5vZGUuY2xhc3NMaXN0LmFkZChDTF9ESVNBQkxFRCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRwcmV2QnRuTm9kZS5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cdFx0XHRwcmV2QnRuTm9kZS5jbGFzc0xpc3QucmVtb3ZlKENMX0RJU0FCTEVEKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBjcmVhdGVEYXlIVE1MID0gKHllYXIsIG1vbnRoLCBkYXkpID0+IHtcclxuXHRcdGNvbnN0IHsgdG9kYXkgfSA9IHN0YXRlO1xyXG5cdFx0bGV0IENMX0RBWSA9IFwidmFsaWRfZGF5XCI7XHJcblx0XHRpZiAobW9udGggPT09IHRvZGF5LmdldE1vbnRoKCkgKyAxKSB7XHJcblx0XHRcdGlmIChkYXkgPCB0b2RheS5nZXREYXRlKCkpIENMX0RBWSA9IFwiaW52YWxpZF9kYXlcIjtcclxuXHRcdH1cclxuXHRcdHJldHVybiBgXHJcblx0XHQ8ZGl2IGNsYXNzPVwiY2FsZW5kYXJfZGF5XCI+XHJcblx0XHRcdDxzcGFuIGNsYXNzPVwiJHtDTF9EQVl9XCIgaWQ9XCIke21vbnRoID09IDEzPyB5ZWFyKzE6IHllYXJ9LSR7bW9udGggPT0gMTM/IFwiMDFcIjogdXRpbC5zZXRNb250aENvdW50KG1vbnRoKX0tJHt1dGlsLnNldEZpeERheUNvdW50KGRheSl9XCI+XHJcblx0XHRcdCR7ZGF5fVxyXG5cdFx0XHQ8L3NwYW4+XHJcblx0XHQ8L2Rpdj5gO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNyZWF0ZUNhbGVuZGFySFRNTCA9ICh5ZWFyLCBtb250aCkgPT4ge1xyXG5cdFx0Y29uc3QgZmlyc3REYXkgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIDEpO1xyXG5cdFx0Y29uc3QgbGFzdERheSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKS5nZXREYXRlKCk7XHJcblx0XHRjb25zdCBmaXJzdERheU5hbWUgPSBmaXJzdERheS5nZXREYXkoKTsgLy8gIDB+NlxyXG5cclxuXHRcdGxldCBzdGFydERheUNvdW50ID0gMTtcclxuXHRcdGxldCBtYXJrdXAgPSBcIjxkaXYgY2xhc3M9J2NhbGVuZGFyX2JveCc+XCI7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xyXG5cdFx0XHRtYXJrdXAgKz0gXCI8ZGl2IGNsYXNzPSdjYWxlbmRhcl9yb3cnPlwiO1xyXG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IDc7IGorKykge1xyXG5cdFx0XHRcdC8vICDsnbTrsogg64usIOyLnOyekSDsmpTsnbwg7J207KCE7J28IOuVjFxyXG5cdFx0XHRcdGlmIChpID09IDAgJiYgaiA8IGZpcnN0RGF5TmFtZSkge1xyXG5cdFx0XHRcdFx0bWFya3VwICs9IGA8ZGl2IGNsYXNzPVwiY2FsZW5kYXJfZGF5XCI+PHNwYW4+PC9zcGFuPjwvZGl2PmA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vICDsnbTrsogg64usIOyLnOyekSDsmpTsnbwg7J207ZuE7J28IOuVjFxyXG5cdFx0XHRcdGVsc2UgaWYgKHN0YXJ0RGF5Q291bnQgPD0gbGFzdERheSkge1xyXG5cdFx0XHRcdFx0bWFya3VwICs9IGNyZWF0ZURheUhUTUwoeWVhciwgbW9udGgsIHN0YXJ0RGF5Q291bnQrKyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdG1hcmt1cCArPSBcIjwvZGl2PlwiO1xyXG5cdFx0fVxyXG5cdFx0bWFya3VwICs9IFwiPC9kaXY+XCI7XHJcblx0XHRyZXR1cm4gbWFya3VwO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGFkZEludmFsaWREYXlDbGFzcyA9IChjbGVhbmVkRGF5cykgPT4ge1xyXG5cdFx0Y29uc3QgQ0xfVkFMSURfREFZID0gXCJ2YWxpZF9kYXlcIjtcclxuXHRcdGNvbnN0IENMX0lOVkFMSURfREFZID0gXCJpbnZhbGlkX2RheVwiO1xyXG5cclxuXHRcdGNsZWFuZWREYXlzLmZvckVhY2goKGVsKSA9PiB7XHJcblx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoQ0xfSU5WQUxJRF9EQVkpO1xyXG5cdFx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKENMX1ZBTElEX0RBWSk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0Z2V0RE9NU3RyaW5nOiAoKSA9PiBET01TdHJpbmcsXHJcblx0XHRjbG9zZVBvcHVwOiAoZXZlbnQpID0+IHtcclxuXHRcdFx0aWYgKGV2ZW50KSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRyZW5kZXJDYWxlbmRhcjogKHllYXIsIG1vbnRoKSA9PiB7XHJcblx0XHRcdGRpc3BsYXlNb250aCh5ZWFyLCBtb250aCk7XHJcblx0XHRcdHNldEJ1dHRvblN0eWxlKHllYXIsIG1vbnRoKTtcclxuXHJcblx0XHRcdGRvY3VtZW50XHJcblx0XHRcdFx0LnF1ZXJ5U2VsZWN0b3IoRE9NU3RyaW5nLmN1ckNhbGVuZGFyKVxyXG5cdFx0XHRcdC5pbnNlcnRBZGphY2VudEhUTUwoXHJcblx0XHRcdFx0XHRcImJlZm9yZWVuZFwiLFxyXG5cdFx0XHRcdFx0Y3JlYXRlQ2FsZW5kYXJIVE1MKHllYXIsIG1vbnRoKVxyXG5cdFx0XHRcdCk7XHJcblx0XHRcdGRvY3VtZW50XHJcblx0XHRcdFx0LnF1ZXJ5U2VsZWN0b3IoRE9NU3RyaW5nLm5leHRDYWxlbmRhcilcclxuXHRcdFx0XHQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG5cdFx0XHRcdFx0XCJiZWZvcmVlbmRcIixcclxuXHRcdFx0XHRcdGNyZWF0ZUNhbGVuZGFySFRNTCh5ZWFyLCBtb250aCArIDEpXHJcblx0XHRcdFx0KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Y2xlYXJDYWxlbmRhcjogKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBbY3VyQ2FsZW5kYXIsIG5leHRDYWxlbmRhcl0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxyXG5cdFx0XHRcdERPTVN0cmluZy5jYWxlbmRhckJveFxyXG5cdFx0XHQpO1xyXG5cdFx0XHRjdXJDYWxlbmRhci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGN1ckNhbGVuZGFyKTtcclxuXHRcdFx0bmV4dENhbGVuZGFyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobmV4dENhbGVuZGFyKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0YmVFeGNlcHRSZXNlcnZlZERheTogKHJlc2VydmVkRGF5cykgPT4ge1xyXG5cdFx0XHRjb25zdCBjYWxlbmRhcldyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdERPTVN0cmluZy5jYWxlbmRhckNvbnRhaW5lclxyXG5cdFx0XHQpO1xyXG5cdFx0XHRjb25zdCByZW5kZXJlZERheXMgPSBBcnJheS5mcm9tKFxyXG5cdFx0XHRcdGNhbGVuZGFyV3JhcC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhblwiKVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRjb25zdCBjbGVhbmVkRGF5cyA9IHJlbmRlcmVkRGF5cy5maWx0ZXIoKGRheSkgPT5cclxuXHRcdFx0XHRyZXNlcnZlZERheXMuaW5jbHVkZXMoZGF5LmlkKVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRhZGRJbnZhbGlkRGF5Q2xhc3MoY2xlYW5lZERheXMpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRyZW5kZXJJbnZhbGlkRGF5OiAoY2xpY2tlZElkLCByZXNlcnZlZERheXMgPSBudWxsKSA9PiB7XHJcblx0XHRcdGNvbnN0IGNhbGVuZGFyV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0RE9NU3RyaW5nLmNhbGVuZGFyQ29udGFpbmVyXHJcblx0XHRcdCk7XHJcblx0XHRcdGNvbnN0IGRheXMgPSBBcnJheS5mcm9tKGNhbGVuZGFyV3JhcC5xdWVyeVNlbGVjdG9yQWxsKFwic3BhblwiKSk7XHJcblx0XHRcdGxldCBjbGVhbmVkRGF5cztcclxuXHJcblx0XHRcdGlmIChzdGF0ZS5jaGVja0luSWQgPT09IFwiXCIpIHtcclxuXHRcdFx0XHQvLyAxLiBHRVQg7YG066at65CcIOuCoOynnCDsnbTtm4TsnZgg7JiI7JW965CcIOygnOydvCDruaDrpbgg64Kg7KecXHJcblx0XHRcdFx0Y29uc3QgbGF0ZXN0RGF5ID0gcmVzZXJ2ZWREYXlzXHJcblx0XHRcdFx0XHQuZmlsdGVyKChkYXlzdHIpID0+IGNsaWNrZWRJZCA8IGRheXN0cilcclxuXHRcdFx0XHRcdC5zb3J0KClbMF07XHJcblx0XHRcdFx0Ly8gMi4g7LK07YGs7JWE7JuDIOu2iOqwgOuKpe2VnCDrgqDsp5wg66eI7YGsXHJcblx0XHRcdFx0Y2xlYW5lZERheXMgPSBkYXlzLmZpbHRlcihcclxuXHRcdFx0XHRcdChkYXkpID0+IGRheS5pZCA8IGNsaWNrZWRJZCB8fCBsYXRlc3REYXkgPCBkYXkuaWRcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRcdC8vIDMuIOyYiOyZuCkg7LK07YGs7J24IOuCoOynnCDslZ7rkqTroZwg67aI6rCA64ql7ZWcIOuCoOynnOydvCDqsr3smrBcclxuXHRcdFx0XHRjb25zdCBjbGlja2VkRGF0ZSA9IG5ldyBEYXRlKGNsaWNrZWRJZCk7XHJcblx0XHRcdFx0Y2xpY2tlZERhdGUuc2V0RGF0ZShjbGlja2VkRGF0ZS5nZXREYXRlKCkgKyAxKTtcclxuXHRcdFx0XHRjb25zdCBvbmVQbHVzRGF5ID0gY2xpY2tlZERhdGUudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xyXG5cdFx0XHRcdGlmIChyZXNlcnZlZERheXMuaW5jbHVkZXMob25lUGx1c0RheSkpIHtcclxuXHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9uZVBsdXNEYXkpLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZhbGlkX2RheVwiKTtcclxuXHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG9uZVBsdXNEYXkpLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZF9kYXlcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGFkZEludmFsaWREYXlDbGFzcyhjbGVhbmVkRGF5cyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Y2xlYW5lZERheXMgPSBkYXlzLmZpbHRlcigoZGF5KSA9PiBkYXkuaWQgPiBjbGlja2VkSWQpO1xyXG5cdFx0XHRcdGFkZEludmFsaWREYXlDbGFzcyhjbGVhbmVkRGF5cyk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0Q2hlY2tJbklucHV0OiAoaWQpID0+XHJcblx0XHRcdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdERPTVN0cmluZy5jaGVja0luSW5wdXRcclxuXHRcdFx0KS52YWx1ZSA9IHV0aWwuZm9ybWF0RGFzaFRvRG90KGlkKSksXHJcblx0XHRzZXRDaGVja091dElucHV0OiAoaWQpID0+XHJcblx0XHRcdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdERPTVN0cmluZy5jaGVja091dElucHV0XHJcblx0XHRcdCkudmFsdWUgPSB1dGlsLmZvcm1hdERhc2hUb0RvdChpZCkpLFxyXG5cclxuXHRcdHJlbmRlckRheUJhY2tncm91bmQ6IChpZCkgPT4ge1xyXG5cdFx0XHRjb25zdCBkYXlzID0gQXJyYXkuZnJvbShcclxuXHRcdFx0XHRkb2N1bWVudFxyXG5cdFx0XHRcdFx0LnF1ZXJ5U2VsZWN0b3IoRE9NU3RyaW5nLmNhbGVuZGFyQ29udGFpbmVyKVxyXG5cdFx0XHRcdFx0LnF1ZXJ5U2VsZWN0b3JBbGwoRE9NU3RyaW5nLnZhbGlkRGF5KVxyXG5cdFx0XHQpO1xyXG5cdFx0XHRjb25zdCBDTF9BVkFJTF9EQVkgPSBcImF2YWlsYWJsZV9kYXlcIjtcclxuXHRcdFx0ZGF5cy5tYXAoKGVsKSA9PiB7XHJcblx0XHRcdFx0ZWwucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKENMX0FWQUlMX0RBWSk7XHJcblx0XHRcdFx0cmV0dXJuIGVsO1xyXG5cdFx0XHR9KVxyXG5cdFx0XHRcdC5maWx0ZXIoKGVsKSA9PiBzdGF0ZS5jaGVja0luSWQgPD0gZWwuaWQgJiYgZWwuaWQgPD0gaWQpXHJcblx0XHRcdFx0LmZvckVhY2goKGVsKSA9PiB7XHJcblx0XHRcdFx0XHRlbC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoQ0xfQVZBSUxfREFZKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRyZW5kZXJHdWVzdENvdW50OiAoZXZlbnQsIG1heFBlcnNvbiwgbWluUGVyc29uID0gMSkgPT4ge1xyXG5cdFx0XHRjb25zdCBndWVzdFZhbHVlTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9NU3RyaW5nLmd1ZXN0Q291bnQpO1xyXG5cdFx0XHRjb25zdCBwbHVzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihET01TdHJpbmcuZ3Vlc3RQbHVzQnRuKTtcclxuXHRcdFx0Y29uc3QgbWludXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKERPTVN0cmluZy5ndWVzdE1pbnVzQnRuKTtcclxuXHRcdFx0Y29uc3QgQ0xfRElTQUJMRUQgPSBcIkJ0bkRpc2FibGVkXCI7XHJcblx0XHRcdGlmIChldmVudC50YXJnZXQubWF0Y2hlcyhET01TdHJpbmcuZ3Vlc3RQbHVzQnRuKSkge1xyXG5cdFx0XHRcdGlmIChndWVzdFZhbHVlTm9kZS50ZXh0Q29udGVudCA8IG1heFBlcnNvbikge1xyXG5cdFx0XHRcdFx0Z3Vlc3RWYWx1ZU5vZGUudGV4dENvbnRlbnQgPSArK2d1ZXN0VmFsdWVOb2RlLnRleHRDb250ZW50O1xyXG5cdFx0XHRcdFx0bWludXNCdG4uY2xhc3NMaXN0LnJlbW92ZShDTF9ESVNBQkxFRCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChndWVzdFZhbHVlTm9kZS50ZXh0Q29udGVudCA9PSBtYXhQZXJzb24pIHtcclxuXHRcdFx0XHRcdHBsdXNCdG4uY2xhc3NMaXN0LmFkZChDTF9ESVNBQkxFRCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKERPTVN0cmluZy5ndWVzdE1pbnVzQnRuKSkge1xyXG5cdFx0XHRcdGlmIChndWVzdFZhbHVlTm9kZS50ZXh0Q29udGVudCA+IG1pblBlcnNvbikge1xyXG5cdFx0XHRcdFx0Z3Vlc3RWYWx1ZU5vZGUudGV4dENvbnRlbnQgPSAtLWd1ZXN0VmFsdWVOb2RlLnRleHRDb250ZW50O1xyXG5cdFx0XHRcdFx0cGx1c0J0bi5jbGFzc0xpc3QucmVtb3ZlKENMX0RJU0FCTEVEKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGd1ZXN0VmFsdWVOb2RlLnRleHRDb250ZW50ID09IG1pblBlcnNvbikge1xyXG5cdFx0XHRcdFx0bWludXNCdG4uY2xhc3NMaXN0LmFkZChDTF9ESVNBQkxFRCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdGdldEd1ZXN0Q291bnQ6ICgpID0+XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9NU3RyaW5nLmd1ZXN0Q291bnQpLnRleHRDb250ZW50LFxyXG5cclxuXHRcdHJlbmRlclByaWNlOiAocGF5bG9hZCkgPT4ge1xyXG5cdFx0XHRjb25zdCB7IHJvb21QcmljZSwgcm9vbU5pZ2h0LCB0b3RhbFByaWNlIH0gPSBwYXlsb2FkO1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKERPTVN0cmluZy5yb29tTmlnaHQpLnRleHRDb250ZW50ID1cclxuXHRcdFx0XHRyb29tTmlnaHQgKyBcIuuwlVwiO1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdERPTVN0cmluZy5yb29tUHJpY2VcclxuXHRcdFx0KS50ZXh0Q29udGVudCA9IHV0aWwuZm9ybWF0V29uKHJvb21QcmljZSk7XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0RE9NU3RyaW5nLnRvdGFsUHJpY2VcclxuXHRcdFx0KS50ZXh0Q29udGVudCA9IHV0aWwuZm9ybWF0V29uKHRvdGFsUHJpY2UgKyA1MDAwKTtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdGRpc3BsYXlVcGRhdGVEaXNwbGF5ZXI6ICgpID0+IHtcclxuXHRcdFx0Y29uc3Qgc3RhdHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihET01TdHJpbmcuc3RhdHVzKS5jbGFzc0xpc3Q7XHJcblx0XHRcdGlmIChzdGF0dXMuY29udGFpbnMoXCJQRU5ESU5HXCIpKSB7XHJcblx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihET01TdHJpbmcuZm9vdGVyKS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHRcdFx0XHRcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRhbGVydChcIuyYiOyVveuMgOq4sOykkSDsg4Htg5zqsIAg7JWE64uI66m0IOuzgOqyve2VoCDsiJgg7JeG7Iq164uI64ukLlwiKVx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRkaXNwbGF5VXBkYXRlRm9ybTogKCkgPT4ge1xyXG5cdFx0XHRjb25zdCB1cGRhdGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihET01TdHJpbmcudXBkYXRlRm9ybSk7XHJcblx0XHRcdGNvbnN0IGNhbmNlbEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKERPTVN0cmluZy5jYW5jZWxGb3JtKTtcclxuXHRcdFx0Y2FuY2VsRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHRcdHVwZGF0ZUZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdGRpc3BsYXlDYW5jZWxGb3JtOiAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHVwZGF0ZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKERPTVN0cmluZy51cGRhdGVGb3JtKTtcclxuXHRcdFx0Y29uc3QgY2FuY2VsRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9NU3RyaW5nLmNhbmNlbEZvcm0pO1xyXG5cdFx0XHR1cGRhdGVGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdFx0Y2FuY2VsRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0ZGlzcGxheVJlZnVuZFByaWNlOiAoKSA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKERPTVN0cmluZy5kZWxldGVJbmZvKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiLFxyXG5cdFx0Y2xlYXJSZWZ1bmRQcmljZTogKCkgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihET01TdHJpbmcuZGVsZXRlSW5mbykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiLFxyXG5cdFx0XHJcblx0fTtcclxufSkoKTtcclxuXHJcbi8qXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKiBDb250cm9sbGVyXHJcbiAqL1xyXG5cclxuY29uc3QgQ29udHJvbGxlciA9ICgoRGF0YUN0cmwsIFVJQ3RybCkgPT4ge1xyXG5cdGNvbnN0IERPTSA9IFVJQ3RybC5nZXRET01TdHJpbmcoKTtcclxuXHRjb25zdCBzZXRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcclxuXHRcdC8vIOyXheuNsOydtO2KuCDrsoTtirwg7YG066atXHJcblx0XHRkb2N1bWVudFxyXG5cdFx0XHQucXVlcnlTZWxlY3RvcihET00udXBkYXRlQnRuKVxyXG5cdFx0XHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdFJlc2VydmF0aW9uRm9ybSk7XHJcblx0XHQvLyDri6zroKUg64SY6riw6riwIO2BtOumrVxyXG5cdFx0ZG9jdW1lbnRcclxuXHRcdFx0LnF1ZXJ5U2VsZWN0b3IoRE9NLnByZXZQYWdlKVxyXG5cdFx0XHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQ2xpY2tQYWdlQnRuKTtcclxuXHRcdGRvY3VtZW50XHJcblx0XHRcdC5xdWVyeVNlbGVjdG9yKERPTS5uZXh0UGFnZSlcclxuXHRcdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrUGFnZUJ0bik7XHJcblx0XHQvLyDri6zroKUg64Kg7KecIO2BtOumrVxyXG5cdFx0ZG9jdW1lbnRcclxuXHRcdFx0LnF1ZXJ5U2VsZWN0b3IoRE9NLmNhbGVuZGFyQ29udGFpbmVyKVxyXG5cdFx0XHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQ2xpY2tDYWxDb250YWluZXIpO1xyXG5cdFx0Ly8g7LK07YGs7JWE7JuDIOuCoOynnCDqs6Drpbwg65WMIOuniOyasOyKpCDsmKTrsoRcclxuXHRcdGRvY3VtZW50XHJcblx0XHRcdC5xdWVyeVNlbGVjdG9yKERPTS5jYWxlbmRhckNvbnRhaW5lcilcclxuXHRcdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgb25Nb3VzZW92ZXJDYWxDb250YWluZXIpO1xyXG5cdFx0Ly8g6rKM7Iqk7Yq4IOy5tOyatO2EsFxyXG5cdFx0ZG9jdW1lbnRcclxuXHRcdFx0LnF1ZXJ5U2VsZWN0b3IoRE9NLmd1ZXN0Q291bnRlckJveClcclxuXHRcdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrR3Vlc3RDb3VudGVyQm94KTtcclxuXHRcdC8vIOuCoOynnCDtj7wg66as7IWLIO2BtOumrVxyXG5cdFx0ZG9jdW1lbnRcclxuXHRcdFx0LnF1ZXJ5U2VsZWN0b3IoRE9NLnJlc2V0SW5wdXQpXHJcblx0XHRcdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGlja1Jlc2V0QnRuKTtcclxuXHRcdC8vIOyXheuNsOydtO2KuCDslYTsnbTsvZgg7YG066atXHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VwZGF0ZURpc3BsYXllclwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGlja1VwZGF0ZURpc3BsYXllcik7XHJcblx0XHQvLyDsl4XrjbDsnbTtirgg64uk7J2MIOuyhO2KvCDtgbTrpq1cclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXBkYXRlTmV4dEJ0blwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGlja1VwZGF0ZU5leHRCdG4pO1xyXG5cdFx0Ly8g65Kk66Gc6rCA6riwIOuyhO2KvCDtgbTrpq1cclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmFja0ljb25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGxvY2F0aW9uLmhyZWYgPSBsb2NhdGlvbi5wYXRobmFtZS5tYXRjaCgvLipyZXNlcnZhdGlvbnMvKVswXSk7XHJcblx0XHQvLyDsmIjslb0g7Leo7IaMIOuLpOydjCDrsoTtirwg7YG066atXHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbE5leHRCdG5cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdFx0VUlDdHJsLmRpc3BsYXlDYW5jZWxGb3JtKCk7XHJcblx0XHRcdFVJQ3RybC5kaXNwbGF5UmVmdW5kUHJpY2UoKTtcclxuXHRcdH0pO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNsZWFyU3RhdGUgPSAoKSA9PiB7XHJcblx0XHRzdGF0ZSA9IHsgLi4uc3RhdGUsIGNoZWNrSW5JZDogXCJcIiwgY2hlY2tPdXRJZDogXCJcIiB9O1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IG9uQ2xpY2tSZXNldEJ0biA9ICgpID0+IHtcclxuXHRcdC8vIDEuIHN0YWF0ZSDstIjquLDtmZRcclxuXHRcdGNsZWFyU3RhdGUoKTtcclxuXHRcdC8vIDIuIFVJIOy0iOq4sO2ZlCDrsI8g64+Z6riw7ZmUXHJcblx0XHRVSUN0cmwuY2xlYXJDYWxlbmRhcigpO1xyXG5cdFx0Ly8gMy4g64Kg7KecIO2PvCDstIjquLDtmZRcclxuXHRcdHNldEluaXRhaWxDYWxlbmRhcigpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IG9uQ2xpY2tHdWVzdENvdW50ZXJCb3ggPSAoZXZlbnQpID0+XHJcblx0XHRVSUN0cmwucmVuZGVyR3Vlc3RDb3VudChldmVudCwgRGF0YUN0cmwuZ2V0TWF4UGVyc29uKCkpO1xyXG5cclxuXHRjb25zdCBvbk1vdXNlb3ZlckNhbENvbnRhaW5lciA9IChldmVudCkgPT4ge1xyXG5cdFx0aWYgKHN0YXRlLmNoZWNrSW5JZCAhPT0gXCJcIiAmJiBzdGF0ZS5jaGVja091dElkID09IFwiXCIpIHtcclxuXHRcdFx0aWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKERPTS52YWxpZERheSkpIHtcclxuXHRcdFx0XHRjb25zdCBpZCA9IGV2ZW50LnRhcmdldC5pZDtcclxuXHRcdFx0XHRVSUN0cmwucmVuZGVyRGF5QmFja2dyb3VuZChpZCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBvbkNsaWNrQ2FsQ29udGFpbmVyID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcblx0XHRpZiAoc3RhdGUuY2hlY2tPdXRJZCAhPT0gXCJcIikgcmV0dXJuO1xyXG5cdFx0Y29uc3QgY2xpY2tlZERheSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLmNhbGVuZGFyX2RheSBzcGFuLnZhbGlkX2RheVwiKTtcclxuXHRcdC8vXHTssrTtgazslYTsm4Mg7YG066atXHJcblx0XHRpZiAoY2xpY2tlZERheSAhPT0gbnVsbCkge1xyXG5cdFx0XHRjb25zdCBpZCA9IGNsaWNrZWREYXkuaWQ7XHJcblx0XHRcdGNsaWNrZWREYXkucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcclxuXHRcdFx0aWYgKHN0YXRlLmNoZWNrSW5JZCAhPT0gXCJcIikge1xyXG5cdFx0XHRcdC8vIDEuIO2BtOumreuQnCDrhbjrk5wgaWQg7J207ZuEIOuCoOynnCBpbnZhbGlkXHJcblx0XHRcdFx0VUlDdHJsLnJlbmRlckludmFsaWREYXkoaWQpO1xyXG5cdFx0XHRcdC8vIDIuIOyytO2BrOyVhOybgyDsnbjtkovsl5Ag64Kg7KecIOuPmeq4sO2ZlFxyXG5cdFx0XHRcdFVJQ3RybC5zZXRDaGVja091dElucHV0KGlkKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzdGF0ZS5jaGVja091dElkID0gaWQ7XHJcblx0XHRcdFx0Ly8gMy4g6riI7JWhIOqzhOyCsFxyXG5cdFx0XHRcdGNvbnN0IHBheWxvYWQgPSBEYXRhQ3RybC5nZXRSZXNlcnZlUGF5bG9hZCgpO1xyXG5cdFx0XHRcdC8vIDQuIOq4iOyVoSDroIzrjZTrp4FcclxuXHRcdFx0XHRVSUN0cmwucmVuZGVyUHJpY2UocGF5bG9hZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly9cdOyytO2BrOyduCDtgbTrpq1cclxuXHRcdFx0ZWxzZSBpZiAoc3RhdGUuY2hlY2tJbklkID09PSBcIlwiKSB7XHJcblx0XHRcdFx0Y29uc3QgcmVzZXJ2ZWREYXlzID0gYXdhaXQgRGF0YUN0cmwuZ2V0UmVzZXJ2ZWREYXlzKCk7XHJcblx0XHRcdFx0Ly8gMS4g67aI6rCA64ql7ZWcIOuCoOynnCDrp4jtgawg7ZGc7IucXHJcblx0XHRcdFx0VUlDdHJsLnJlbmRlckludmFsaWREYXkoaWQsIHJlc2VydmVkRGF5cyk7XHJcblx0XHRcdFx0Ly8gMi4g7LK07YGs7J24IOyduO2Si+yXkCDrgqDsp5wg64+Z6riw7ZmUXHJcblx0XHRcdFx0VUlDdHJsLnNldENoZWNrSW5JbnB1dChpZCk7XHJcblx0XHRcdFx0c3RhdGUuY2hlY2tJbklkID0gaWQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCBvbkNsaWNrUGFnZUJ0biA9IGFzeW5jIChldmVudCkgPT4ge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFVJQ3RybC5jbGVhckNhbGVuZGFyKCk7XHJcblxyXG5cdFx0Y29uc3QgaXNQcmV2QnRuID0gZXZlbnQudGFyZ2V0Lm1hdGNoZXMoRE9NLnByZXZQYWdlKTtcclxuXHJcblx0XHQvLyBwcmV2QnRuLCBuZXh0QnRuIOu2hOq4sCAtPiDri6zroKUg7JuUIOymneqwkFxyXG5cdFx0aWYgKGlzUHJldkJ0bikge1xyXG5cdFx0XHRzdGF0ZS5jdXJEYXRlLnNldE1vbnRoKHN0YXRlLmN1ckRhdGUuZ2V0TW9udGgoKSAtIDEpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0c3RhdGUuY3VyRGF0ZS5zZXRNb250aChzdGF0ZS5jdXJEYXRlLmdldE1vbnRoKCkgKyAxKTtcclxuXHRcdH1cclxuXHRcdC8vIDEuIOuLrOugpSDroIzrjZTrp4FcclxuXHRcdFVJQ3RybC5yZW5kZXJDYWxlbmRhcihcclxuXHRcdFx0c3RhdGUuY3VyRGF0ZS5nZXRGdWxsWWVhcigpLFxyXG5cdFx0XHRzdGF0ZS5jdXJEYXRlLmdldE1vbnRoKCkgKyAxXHJcblx0XHQpO1xyXG5cdFx0Ly8gMi4g7JiI7JW9IOu2iOqwgOuKpSDroIzrjZTrp4FcclxuXHRcdFVJQ3RybC5iZUV4Y2VwdFJlc2VydmVkRGF5KGF3YWl0IERhdGFDdHJsLmdldFJlc2VydmVkRGF5cygpKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzZXRJbml0YWlsQ2FsZW5kYXIgPSBhc3luYyAoKSA9PiB7XHJcblx0XHRzdGF0ZS5jdXJEYXRlID0gbmV3IERhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaGVja0luSW5wdXRcIikucGxhY2Vob2xkZXIpO1xyXG5cdFx0VUlDdHJsLnJlbmRlckNhbGVuZGFyKFxyXG5cdFx0XHRzdGF0ZS5jdXJEYXRlLmdldEZ1bGxZZWFyKCksXHJcblx0XHRcdHN0YXRlLmN1ckRhdGUuZ2V0TW9udGgoKSArIDFcclxuXHRcdCk7XHJcblx0XHRjb25zdCByZXNlcnZlZERheXMgPSBhd2FpdCBEYXRhQ3RybC5nZXRSZXNlcnZlZERheXMoKTtcclxuXHRcdFVJQ3RybC5iZUV4Y2VwdFJlc2VydmVkRGF5KHJlc2VydmVkRGF5cyk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc3VibWl0UmVzZXJ2YXRpb25Gb3JtID0gKCkgPT4ge1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihET00uY2hlY2tJbklucHV0KS52YWx1ZSA9IHN0YXRlLmNoZWNrSW5JZDtcclxuXHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9NLmNoZWNrT3V0SW5wdXQpLnZhbHVlID0gc3RhdGUuY2hlY2tPdXRJZDtcclxuXHJcblx0XHRjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihET00ucmVzZXJ2ZVBvcHVwQ29udGFpbmVyKTtcclxuXHRcdGNvbnN0IG51bU9mR3Vlc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKERPTS5ndWVzdENvdW50KS50ZXh0Q29udGVudDtcclxuXHRcdGNvbnN0IGd1ZXN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcblx0XHRndWVzdElucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJudW1PZkd1ZXN0XCIpO1xyXG5cdFx0Z3Vlc3RJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBudW1PZkd1ZXN0KTtcclxuXHRcdGZvcm0uYXBwZW5kQ2hpbGQoZ3Vlc3RJbnB1dCk7XHJcblx0XHRmb3JtLnN1Ym1pdCgpO1xyXG5cdH07XHJcblx0XHJcblx0Y29uc3Qgb25DbGlja1VwZGF0ZURpc3BsYXllciA9ICgpID0+IFVJQ3RybC5kaXNwbGF5VXBkYXRlRGlzcGxheWVyKCk7XHJcblx0XHJcblx0Y29uc3Qgb25DbGlja1VwZGF0ZU5leHRCdG4gPSAoKSA9PiB7XHJcblx0XHRVSUN0cmwuZGlzcGxheVVwZGF0ZUZvcm0oKTtcclxuXHRcdFVJQ3RybC5jbGVhclJlZnVuZFByaWNlKCk7XHJcblx0XHRcclxuXHRcdC8vIOq4sOyhtOyXkCDsmIjslb3rkJwg7LK07YGs7J24IOyytO2BrOyVhOybgyDtgbTrpq1cclxuXHRcdGNvbnN0IGluaXRpYWxDaGVja0luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaGVja0luSW5wdXRcIikucGxhY2Vob2xkZXI7XHJcblx0XHRjb25zdCBpbml0aWFsQ2hlY2tPdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NoZWNrT3V0SW5wdXRcIikucGxhY2Vob2xkZXI7XHJcblx0XHRcclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGluaXRpYWxDaGVja0luKS5jbGljaygpO1xyXG5cdFx0c2V0VGltZW91dCgoKT0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGluaXRpYWxDaGVja091dCkuY2xpY2soKSwgNTAwKTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0aW5pdDogKCkgPT4ge1xyXG5cdFx0XHRzZXRFdmVudExpc3RlbmVycygpO1xyXG5cdFx0XHRzZXRJbml0YWlsQ2FsZW5kYXIoKTtcclxuXHRcdH0sXHJcblx0fTtcclxufSkoRGF0YUNvbnRyb2xsZXIsIFVJQ29udHJvbGxlcik7XHJcbkNvbnRyb2xsZXIuaW5pdCgpO1xyXG5cclxuXHJcbiIsImV4cG9ydCBjb25zdCBzZXRGaXhEYXlDb3VudCA9IG51bWJlciA9PiAobnVtYmVyIDwgMTAgPyBcIjBcIiArIG51bWJlciA6IG51bWJlcik7XHJcbmV4cG9ydCBjb25zdCBzZXRNb250aENvdW50ID0gbnVtYmVyID0+IChudW1iZXIgPCAxMCA/IFwiMFwiICsgbnVtYmVyIDogbnVtYmVyKTtcclxuZXhwb3J0IGNvbnN0IGZvcm1hdERhc2hUb0RvdCA9IHN0ciA9PiBzdHIucmVwbGFjZSgvLS9nLCBcIi5cIik7XHJcbmV4cG9ydCBjb25zdCBmb3JtYXREb3RUb0Rhc2ggPSBzdHIgPT4gc3RyLnJlcGxhY2UoL1xcLi9nLCBcIi1cIik7XHJcbmV4cG9ydCBjb25zdCBmb3JtYXRXb24gPSBudW0gPT5cclxuXHRuZXcgSW50bC5OdW1iZXJGb3JtYXQoXCJrby1LUlwiLCB7IHN0eWxlOiBcImN1cnJlbmN5XCIsIGN1cnJlbmN5OiBcIktSV1wiIH0pLmZvcm1hdChudW0pO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2VydmVEZXRhaWwuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==