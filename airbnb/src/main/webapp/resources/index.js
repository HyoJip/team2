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
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";\n:root {\n  --wrapWidth: 1200px;\n  --gray: #7f8c8d;\n  --deepGray: #535c68;\n  --red: #ff385c;\n  --blue: lightseagreen;\n  --green: #23c382;\n  --containerHorizontalMargin: 50px;\n  --containerVerticalPadding: 30px;\n  --detailFontSize: smaller;\n  --bottomBorder: 1px solid #ecf0f1;\n  --borderRadius: 10px;\n  --calendarDaySize: 40px;\n  --boxShadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.ACCEPTED {\n  color: var(--green) !important; }\n\n.PENDING, .COMPLETED {\n  color: var(--gray) !important; }\n\n.REFUSED, .CANCLED {\n  color: var(--red) !important; }\n\n:root {\n  --wrapWidth: 1200px;\n  --gray: #7f8c8d;\n  --deepGray: #535c68;\n  --red: #ff385c;\n  --blue: lightseagreen;\n  --green: #23c382;\n  --containerHorizontalMargin: 50px;\n  --containerVerticalPadding: 30px;\n  --detailFontSize: smaller;\n  --bottomBorder: 1px solid #ecf0f1;\n  --borderRadius: 10px;\n  --calendarDaySize: 40px;\n  --boxShadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23); }\n\n.ACCEPTED {\n  color: var(--green) !important; }\n\n.PENDING, .COMPLETED {\n  color: var(--gray) !important; }\n\n.REFUSED, .CANCLED {\n  color: var(--red) !important; }\n\n.BtnDisabled {\n  cursor: no-drop !important;\n  opacity: 0.2 !important; }\n\n.wrap {\n  margin: 0 auto;\n  max-width: var(--wrapWidth); }\n  .wrap .nav_category {\n    padding: var(--containerVerticalPadding) 0;\n    margin: 0 var(--containerHorizontalMargin);\n    font-weight: 300; }\n    .wrap .nav_category a {\n      border-bottom: 1px solid black;\n      display: inline-block;\n      line-height: 0.85;\n      text-shadow: 1px 1px var(--backgroudColor), 1px -1px var(--backgroudColor), -1px 1px var(--backgroudColor), -1px -1px var(--backgroudColor); }\n  .wrap .room_image {\n    margin: 0 var(--containerHorizontalMargin); }\n    .wrap .room_image .room_image_grid {\n      display: grid;\n      grid: repeat(2, minmax(150px, 1fr))/repeat(4, minmax(150px, 1fr));\n      gap: 10px; }\n      .wrap .room_image .room_image_grid img {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        border-radius: var(--borderRadius); }\n        .wrap .room_image .room_image_grid img:first-child {\n          grid-area: span 2 / span 2; }\n  .wrap .main_wrap {\n    display: flex; }\n    .wrap .main_wrap .main_left {\n      width: 65%;\n      padding: var(--containerVerticalPadding) 0; }\n      .wrap .main_wrap .main_left .room_header {\n        padding-bottom: var(--containerVerticalPadding);\n        margin: 0 var(--containerHorizontalMargin);\n        border-bottom: var(--bottomBorder); }\n        .wrap .main_wrap .main_left .room_header .room_title {\n          font-weight: 700; }\n        .wrap .main_wrap .main_left .room_header .room_info {\n          font-size: var(--detailFontSize); }\n          .wrap .main_wrap .main_left .room_header .room_info .star {\n            color: var(--red);\n            font-size: 20px; }\n          .wrap .main_wrap .main_left .room_header .room_info .rating_count {\n            color: var(--gray); }\n            .wrap .main_wrap .main_left .room_header .room_info .rating_count::after {\n              content: \" · \";\n              color: black; }\n          .wrap .main_wrap .main_left .room_header .room_info .address {\n            border-bottom: 1px solid black;\n            display: inline-block;\n            line-height: 0.85;\n            text-shadow: 1px 1px var(--backgroudColor), 1px -1px var(--backgroudColor), -1px 1px var(--backgroudColor), -1px -1px var(--backgroudColor);\n            line-height: 0.95;\n            color: var(--deepGray); }\n      .wrap .main_wrap .main_left .host_info {\n        padding: var(--containerVerticalPadding) 0;\n        margin: 0 var(--containerHorizontalMargin);\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        border-bottom: var(--bottomBorder); }\n        .wrap .main_wrap .main_left .host_info hgroup .username {\n          font-weight: 700; }\n        .wrap .main_wrap .main_left .host_info hgroup .room_short_spec {\n          font-size: var(--detailFontSize);\n          font-weight: 300; }\n        .wrap .main_wrap .main_left .host_info .user_profile {\n          background-position: center;\n          background-size: cover;\n          min-width: 80px;\n          height: 80px;\n          border-radius: 50%;\n          cursor: pointer; }\n      .wrap .main_wrap .main_left .room_detail_info {\n        padding: var(--containerVerticalPadding) 0;\n        margin: 0 var(--containerHorizontalMargin);\n        border-bottom: var(--bottomBorder); }\n        .wrap .main_wrap .main_left .room_detail_info a {\n          display: block;\n          margin: var(--containerHorizontalMargin) 0;\n          border-bottom: 1px solid black;\n          display: inline-block;\n          line-height: 0.85;\n          text-shadow: 1px 1px var(--backgroudColor), 1px -1px var(--backgroudColor), -1px 1px var(--backgroudColor), -1px -1px var(--backgroudColor);\n          font-weight: 700; }\n        .wrap .main_wrap .main_left .room_detail_info p {\n          word-break: break-all; }\n      .wrap .main_wrap .main_left .room_facilities {\n        padding: var(--containerVerticalPadding) 0;\n        margin: 0 var(--containerHorizontalMargin); }\n        .wrap .main_wrap .main_left .room_facilities h3 {\n          font-weight: 700;\n          padding: 15px 0; }\n        .wrap .main_wrap .main_left .room_facilities .facility_item {\n          margin: 15px 0; }\n          .wrap .main_wrap .main_left .room_facilities .facility_item .facility_icon {\n            font-size: 20px;\n            width: 40px;\n            text-align: center; }\n          .wrap .main_wrap .main_left .room_facilities .facility_item .facility_description {\n            margin-left: 15px;\n            font-weight: 300; }\n    .wrap .main_wrap .main_right {\n      width: 35%;\n      position: relative;\n      padding-top: var(--containerVerticalPadding);\n      padding-bottom: calc(var(--containerVerticalPadding) * 2);\n      margin-right: var(--containerHorizontalMargin); }\n      .wrap .main_wrap .main_right .reservation_wrap {\n        position: sticky;\n        top: 80px;\n        box-shadow: var(--boxShadow);\n        border-radius: var(--borderRadius);\n        padding: 30px; }\n        .wrap .main_wrap .main_right .reservation_wrap .reservation_header {\n          display: flex;\n          justify-content: space-between;\n          margin-bottom: 15px; }\n          .wrap .main_wrap .main_right .reservation_wrap .reservation_header .reservation_help_text {\n            font-weight: 700;\n            text-align: left;\n            line-height: 1.1;\n            max-width: 200px; }\n          .wrap .main_wrap .main_right .reservation_wrap .reservation_header small {\n            white-space: nowrap;\n            font-size: 12px; }\n            .wrap .main_wrap .main_right .reservation_wrap .reservation_header small .star {\n              color: var(--red);\n              font-size: 12px; }\n            .wrap .main_wrap .main_right .reservation_wrap .reservation_header small .rating_count {\n              color: var(--gray); }\n        .wrap .main_wrap .main_right .reservation_wrap .reservation_main {\n          border: var(--bottomBorder);\n          border-radius: var(--borderRadius); }\n          .wrap .main_wrap .main_right .reservation_wrap .reservation_main .reservation_item_box {\n            display: flex;\n            cursor: pointer; }\n            .wrap .main_wrap .main_right .reservation_wrap .reservation_main .reservation_item_box .reservation_item {\n              flex: 1 1 50%;\n              padding: 5px 10px;\n              font-size: 0.9rem;\n              height: 50px; }\n              .wrap .main_wrap .main_right .reservation_wrap .reservation_main .reservation_item_box .reservation_item .reservation_display {\n                color: var(--gray);\n                font-weight: 300; }\n              .wrap .main_wrap .main_right .reservation_wrap .reservation_main .reservation_item_box .reservation_item + .reservation_item {\n                border-left: var(--bottomBorder); }\n          .wrap .main_wrap .main_right .reservation_wrap .reservation_main .reservation_people {\n            border-top: var(--bottomBorder);\n            flex: 1 1 50%;\n            padding: 5px 10px;\n            font-size: 0.9rem;\n            height: 50px; }\n            .wrap .main_wrap .main_right .reservation_wrap .reservation_main .reservation_people .reservation_display {\n              color: var(--gray);\n              font-weight: 300; }\n            .wrap .main_wrap .main_right .reservation_wrap .reservation_main .reservation_people .reservation_display {\n              position: relative; }\n              .wrap .main_wrap .main_right .reservation_wrap .reservation_main .reservation_people .reservation_display .guest_counter_box {\n                position: absolute;\n                right: 0;\n                top: -10px; }\n                .wrap .main_wrap .main_right .reservation_wrap .reservation_main .reservation_people .reservation_display .guest_counter_box .display_btn_icon {\n                  display: inline-block;\n                  border: 1px solid black;\n                  border-radius: 50%;\n                  width: 30px;\n                  height: 30px;\n                  line-height: 30px;\n                  text-align: center;\n                  margin-left: 10px;\n                  opacity: 0.5;\n                  color: black;\n                  cursor: pointer; }\n                  .wrap .main_wrap .main_right .reservation_wrap .reservation_main .reservation_people .reservation_display .guest_counter_box .display_btn_icon:hover {\n                    opacity: 1; }\n                  .wrap .main_wrap .main_right .reservation_wrap .reservation_main .reservation_people .reservation_display .guest_counter_box .display_btn_icon:active {\n                    transform: scale(0.95); }\n        .wrap .main_wrap .main_right .reservation_wrap .reservation_btn {\n          border: 0;\n          outline: none;\n          width: 100%;\n          padding: 10px 30px;\n          background-color: var(--red);\n          color: white;\n          margin: 10px 0;\n          border-radius: var(--borderRadius);\n          text-align: center;\n          font-weight: 700;\n          cursor: pointer; }\n        .wrap .main_wrap .main_right .reservation_wrap .reservation_price {\n          text-align: center; }\n          .wrap .main_wrap .main_right .reservation_wrap .reservation_price .price_comment {\n            font-weight: 300; }\n          .wrap .main_wrap .main_right .reservation_wrap .reservation_price .price_item,\n          .wrap .main_wrap .main_right .reservation_wrap .reservation_price .total_price {\n            display: flex;\n            justify-content: space-between;\n            padding-top: calc(var(--containerVerticalPadding) / 2); }\n            .wrap .main_wrap .main_right .reservation_wrap .reservation_price .price_item .price_name,\n            .wrap .main_wrap .main_right .reservation_wrap .reservation_price .total_price .price_name {\n              text-align: left; }\n            .wrap .main_wrap .main_right .reservation_wrap .reservation_price .price_item .price_value,\n            .wrap .main_wrap .main_right .reservation_wrap .reservation_price .total_price .price_value {\n              text-align: right; }\n          .wrap .main_wrap .main_right .reservation_wrap .reservation_price .total_price {\n            font-weight: 700;\n            margin-top: calc(var(--containerHorizontalMargin) / 2);\n            border-top: var(--bottomBorder); }\n        .wrap .main_wrap .main_right .reservation_wrap .reservation_form {\n          position: absolute;\n          background-color: white;\n          top: 40%;\n          right: -10px;\n          width: 660px;\n          box-shadow: var(--boxShadow);\n          border-radius: var(--borderRadius);\n          padding: 20px 30px; }\n          .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_header {\n            display: flex; }\n            .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_header .header_text {\n              width: 55%; }\n              .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_header .header_text .header_title {\n                font-weight: 700;\n                font-size: 1.5rem; }\n              .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_header .header_text .header_body {\n                color: var(--gray);\n                font-weight: 300; }\n            .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_header .header_inputs {\n              width: 45%;\n              display: flex;\n              border: var(--bottomBorder);\n              border-radius: var(--borderRadius);\n              background-color: #f7f7f7; }\n              .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_header .header_inputs .input_item {\n                font-size: 0.8rem;\n                padding: 10px;\n                border-radius: var(--borderRadius);\n                width: 50%; }\n                .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_header .header_inputs .input_item .reservation_input {\n                  all: unset;\n                  font-weight: 300;\n                  cursor: text; }\n          .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_main {\n            position: relative;\n            margin-top: var(--containerHorizontalMargin);\n            margin-bottom: calc(var(--containerHorizontalMargin) / 2); }\n            .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_main .pagination_btns {\n              position: absolute;\n              top: 0;\n              width: 100%;\n              display: flex;\n              justify-content: space-between; }\n              .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_main .pagination_btns .pagination_btn {\n                all: unset;\n                cursor: pointer;\n                font-size: 1.5rem;\n                line-height: 1.5rem; }\n            .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_main .calendar_wrap {\n              width: 100%;\n              display: flex;\n              justify-content: space-between; }\n              .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_main .calendar_wrap .calendar_item {\n                width: 48%; }\n                .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_main .calendar_wrap .calendar_item .calendar_month {\n                  width: 100%;\n                  text-align: center;\n                  margin-bottom: 15px;\n                  font-weight: 700; }\n                .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row {\n                  display: flex; }\n                  .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row .calendar_day {\n                    width: var(--calendarDaySize);\n                    height: var(--calendarDaySize);\n                    text-align: center; }\n                    .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row .calendar_day.available_day {\n                      background-color: #f5f6fa; }\n                    .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row .calendar_day span {\n                      display: block;\n                      width: 100%;\n                      height: 100%;\n                      line-height: var(--calendarDaySize); }\n                      .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row .calendar_day span.invalid_day {\n                        color: var(--gray);\n                        text-decoration: line-through; }\n                      .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row .calendar_day span.valid_day:hover {\n                        border: 1px solid black;\n                        border-radius: 50%;\n                        cursor: pointer; }\n                    .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row .calendar_day.clicked.available_day {\n                      border-radius: 50% 0 0 50%; }\n                    .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row .calendar_day.clicked span {\n                      background-color: black !important;\n                      color: white;\n                      border: 0 !important;\n                      border-radius: 50%;\n                      cursor: default !important; }\n                  .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_main .calendar_wrap .calendar_item .calendar_row .dayname {\n                    font-size: 0.8rem;\n                    color: var(--gray); }\n          .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_footer {\n            text-align: end; }\n            .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_footer .input_reset {\n              all: unset;\n              font-size: 0.9rem;\n              border-bottom: 1px solid black;\n              display: inline-block;\n              line-height: 0.85;\n              text-shadow: 1px 1px var(--backgroudColor), 1px -1px var(--backgroudColor), -1px 1px var(--backgroudColor), -1px -1px var(--backgroudColor);\n              cursor: pointer; }\n            .wrap .main_wrap .main_right .reservation_wrap .reservation_form .form_footer .form_exit {\n              padding: 10px 15px;\n              margin: 0 15px;\n              background-color: black;\n              color: white;\n              border: 0;\n              border-radius: var(--borderRadius);\n              font-weight: 700;\n              cursor: pointer;\n              outline: none; }\n  .wrap .review_wrap {\n    padding: var(--containerVerticalPadding) 0;\n    margin: 0 var(--containerHorizontalMargin);\n    border-top: var(--bottomBorder);\n    border-bottom: var(--bottomBorder); }\n    .wrap .review_wrap .review_title {\n      font-size: 1.3rem;\n      font-weight: 700; }\n      .wrap .review_wrap .review_title .star {\n        color: var(--red);\n        font-size: inherit; }\n    .wrap .review_wrap .review_item {\n      padding: calc(var(--containerVerticalPadding) / 1.5) 0; }\n      .wrap .review_wrap .review_item .review_header {\n        display: flex; }\n        .wrap .review_wrap .review_item .review_header .guest_profile_img {\n          background-size: cover;\n          background-position: center;\n          width: 50px;\n          height: 50px;\n          border-radius: 50%; }\n        .wrap .review_wrap .review_item .review_header .review_info {\n          padding-left: calc(var(--containerVerticalPadding) / 2);\n          display: flex;\n          flex-direction: column;\n          justify-content: space-evenly; }\n          .wrap .review_wrap .review_item .review_header .review_info .review_created {\n            color: var(--gray);\n            font-weight: 300;\n            font-size: 0.7rem; }\n      .wrap .review_wrap .review_item .review_main {\n        padding: 10px 0; }\n  .wrap .room_rule {\n    padding: var(--containerVerticalPadding) 0;\n    margin: 0 var(--containerHorizontalMargin);\n    display: flex; }\n    .wrap .room_rule .rule_header {\n      font-size: 1.3rem;\n      font-weight: 700; }\n    .wrap .room_rule .rules_wrap .rule_item {\n      margin: 15px 0; }\n      .wrap .room_rule .rules_wrap .rule_item .rule_icon {\n        font-size: 20px;\n        width: 40px;\n        text-align: center; }\n      .wrap .room_rule .rules_wrap .rule_item .rule_description {\n        margin-left: 15px;\n        font-weight: 300; }\n    .wrap .room_rule .message_wrap {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: flex-start;\n      margin-left: 100px; }\n      .wrap .room_rule .message_wrap .message_btn {\n        padding: 10px 40px;\n        font-weight: 700;\n        font-family: inherit;\n        opacity: 0.5;\n        border-radius: var(--borderRadius);\n        outline: none;\n        cursor: pointer; }\n        .wrap .room_rule .message_wrap .message_btn:hover {\n          opacity: 0.8; }\n      .wrap .room_rule .message_wrap .alert {\n        margin-top: 10px;\n        width: 250px;\n        font-size: 0.8rem;\n        font-weight: 300; }\n", "",{"version":3,"sources":["webpack://scss/style.scss","webpack://scss/__base.scss","webpack://scss/__mixins.scss"],"names":[],"mappings":"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","sourcesContent":["@import \"./_mixins\";\r\n@import \"./_base\";\r\n\r\n.BtnDisabled {\r\n\tcursor: no-drop !important;\r\n\topacity: 0.2 !important;\r\n}\r\n\r\n.wrap {\r\n\tmargin: 0 auto;\r\n\tmax-width: var(--wrapWidth);\r\n\r\n\t.nav_category {\r\n\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\t\tfont-weight: 300;\r\n\r\n\t\ta {\r\n\t\t\t@include underline;\r\n\t\t}\r\n\t}\r\n\r\n\t.room_image {\r\n\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\r\n\t\t.room_image_grid {\r\n\t\t\tdisplay: grid;\r\n\t\t\tgrid: repeat(2, minmax(150px, 1fr)) / repeat(4, minmax(150px, 1fr));\r\n\t\t\tgap: 10px;\r\n\r\n\t\t\timg {\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t\t\tobject-fit: cover;\r\n\t\t\t\tborder-radius: var(--borderRadius);\r\n\r\n\t\t\t\t&:first-child {\r\n\t\t\t\t\tgrid-area: span 2 / span 2;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t.main_wrap {\r\n\t\tdisplay: flex;\r\n\r\n\t\t.main_left {\r\n\t\t\twidth: 65%;\r\n\t\t\tpadding: var(--containerVerticalPadding) 0;\r\n\r\n\t\t\t.room_header {\r\n\t\t\t\tpadding-bottom: var(--containerVerticalPadding);\r\n\t\t\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\t\t\t\tborder-bottom: var(--bottomBorder);\r\n\r\n\t\t\t\t.room_title {\r\n\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t}\r\n\t\t\t\t.room_info {\r\n\t\t\t\t\tfont-size: var(--detailFontSize);\r\n\r\n\t\t\t\t\t.star {\r\n\t\t\t\t\t\t@include star(20px);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.rating_count {\r\n\t\t\t\t\t\tcolor: var(--gray);\r\n\r\n\t\t\t\t\t\t&::after {\r\n\t\t\t\t\t\t\tcontent: \" · \";\r\n\t\t\t\t\t\t\tcolor: black;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.address {\r\n\t\t\t\t\t\t@include underline;\r\n\t\t\t\t\t\tline-height: 0.95;\r\n\t\t\t\t\t\tcolor: var(--deepGray);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t.host_info {\r\n\t\t\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\t\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\t\t\t\tdisplay: flex;\r\n\t\t\t\talign-items: center;\r\n\t\t\t\tjustify-content: space-between;\r\n\t\t\t\tborder-bottom: var(--bottomBorder);\r\n\r\n\t\t\t\thgroup {\r\n\t\t\t\t\t.username {\r\n\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.room_short_spec {\r\n\t\t\t\t\t\tfont-size: var(--detailFontSize);\r\n\t\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.user_profile {\r\n\t\t\t\t\tbackground-position: center;\r\n\t\t\t\t\tbackground-size: cover;\r\n\t\t\t\t\tmin-width: 80px;\r\n\t\t\t\t\theight: 80px;\r\n\t\t\t\t\tborder-radius: 50%;\r\n\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t.room_detail_info {\r\n\t\t\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\t\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\t\t\t\tborder-bottom: var(--bottomBorder);\r\n\r\n\t\t\t\ta {\r\n\t\t\t\t\tdisplay: block;\r\n\t\t\t\t\tmargin: var(--containerHorizontalMargin) 0;\r\n\t\t\t\t\t@include underline;\r\n\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t}\r\n\t\t\t\t\r\n\t\t\t\tp {\r\n\t\t\t\t\tword-break: break-all;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t.room_facilities {\r\n\t\t\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\t\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\r\n\t\t\t\th3 {\r\n\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\tpadding: 15px 0;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.facility_item {\r\n\t\t\t\t\t@include facility_rule_item;\r\n\r\n\t\t\t\t\t.facility_icon {\r\n\t\t\t\t\t\t@include facility_rule_icon;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.facility_description {\r\n\t\t\t\t\t\t@include facility_rule_description;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.main_right {\r\n\t\t\twidth: 35%;\r\n\t\t\tposition: relative;\r\n\t\t\tpadding-top: var(--containerVerticalPadding);\r\n\t\t\tpadding-bottom: calc(var(--containerVerticalPadding) * 2);\r\n\t\t\tmargin-right: var(--containerHorizontalMargin);\r\n\r\n\t\t\t.reservation_wrap {\r\n\t\t\t\tposition: sticky;\r\n\t\t\t\ttop: 80px;\r\n\t\t\t\tbox-shadow: var(--boxShadow);\r\n\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\tpadding: 30px;\r\n\r\n\t\t\t\t.reservation_header {\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\tjustify-content: space-between;\r\n\t\t\t\t\tmargin-bottom: 15px;\r\n\r\n\t\t\t\t\t.reservation_help_text {\r\n\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t\ttext-align: left;\r\n\t\t\t\t\t\tline-height: 1.1;\r\n\t\t\t\t\t\tmax-width: 200px;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tsmall {\r\n\t\t\t\t\t\twhite-space: nowrap;\r\n\t\t\t\t\t\tfont-size: 12px;\r\n\r\n\t\t\t\t\t\t.star {\r\n\t\t\t\t\t\t\t@include star(12px);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\t.rating_count {\r\n\t\t\t\t\t\t\tcolor: var(--gray);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.reservation_main {\r\n\t\t\t\t\tborder: var(--bottomBorder);\r\n\t\t\t\t\tborder-radius: var(--borderRadius);\r\n\r\n\t\t\t\t\t.reservation_item_box {\r\n\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\tcursor: pointer;\r\n\r\n\t\t\t\t\t\t.reservation_item {\r\n\t\t\t\t\t\t\t@include reservation_item;\r\n\r\n\t\t\t\t\t\t\t& + .reservation_item {\r\n\t\t\t\t\t\t\t\tborder-left: var(--bottomBorder);\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\t.reservation_people {\r\n\t\t\t\t\t\tborder-top: var(--bottomBorder);\r\n\t\t\t\t\t\t@include reservation_item;\r\n\r\n\t\t\t\t\t\t.reservation_display {\r\n\t\t\t\t\t\t\tposition: relative;\r\n\r\n\t\t\t\t\t\t\t.guest_counter_box {\r\n\t\t\t\t\t\t\t\tposition: absolute;\r\n\t\t\t\t\t\t\t\tright: 0;\r\n\t\t\t\t\t\t\t\ttop: -10px;\r\n\r\n\t\t\t\t\t\t\t\t.display_btn_icon {\r\n\t\t\t\t\t\t\t\t\tdisplay: inline-block;\r\n\t\t\t\t\t\t\t\t\tborder: 1px solid black;\r\n\t\t\t\t\t\t\t\t\tborder-radius: 50%;\r\n\t\t\t\t\t\t\t\t\twidth: 30px;\r\n\t\t\t\t\t\t\t\t\theight: 30px;\r\n\t\t\t\t\t\t\t\t\tline-height: 30px;\r\n\t\t\t\t\t\t\t\t\ttext-align: center;\r\n\t\t\t\t\t\t\t\t\tmargin-left: 10px;\r\n\t\t\t\t\t\t\t\t\topacity: 0.5;\r\n\t\t\t\t\t\t\t\t\tcolor: black;\r\n\t\t\t\t\t\t\t\t\tcursor: pointer;\r\n\r\n\t\t\t\t\t\t\t\t\t&:hover {\r\n\t\t\t\t\t\t\t\t\t\topacity: 1;\r\n\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t&:active {\r\n\t\t\t\t\t\t\t\t\t\ttransform: scale(0.95);\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.reservation_btn {\r\n\t\t\t\t\tborder: 0;\r\n\t\t\t\t\toutline: none;\r\n\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\tpadding: 10px 30px;\r\n\t\t\t\t\tbackground-color: var(--red);\r\n\t\t\t\t\tcolor: white;\r\n\t\t\t\t\tmargin: 10px 0;\r\n\t\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\t\ttext-align: center;\r\n\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.reservation_price {\r\n\t\t\t\t\ttext-align: center;\r\n\r\n\t\t\t\t\t.price_comment {\r\n\t\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.price_item,\r\n\t\t\t\t\t.total_price {\r\n\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\tjustify-content: space-between;\r\n\t\t\t\t\t\tpadding-top: calc(var(--containerVerticalPadding) / 2);\r\n\r\n\t\t\t\t\t\t.price_name {\r\n\t\t\t\t\t\t\ttext-align: left;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.price_value {\r\n\t\t\t\t\t\t\ttext-align: right;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.total_price {\r\n\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t\tmargin-top: calc(var(--containerHorizontalMargin) / 2);\r\n\t\t\t\t\t\tborder-top: var(--bottomBorder);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.reservation_form {\r\n\t\t\t\t\tposition: absolute;\r\n\t\t\t\t\tbackground-color: white;\r\n\t\t\t\t\ttop: 40%;\r\n\t\t\t\t\tright: -10px;\r\n\t\t\t\t\twidth: 660px;\r\n\t\t\t\t\tbox-shadow: var(--boxShadow);\r\n\t\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\t\tpadding: 20px 30px;\r\n\r\n\t\t\t\t\t.form_header {\r\n\t\t\t\t\t\tdisplay: flex;\r\n\r\n\t\t\t\t\t\t.header_text {\r\n\t\t\t\t\t\t\twidth: 55%;\r\n\r\n\t\t\t\t\t\t\t.header_title {\r\n\t\t\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t\t\t\tfont-size: 1.5rem;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t.header_body {\r\n\t\t\t\t\t\t\t\tcolor: var(--gray);\r\n\t\t\t\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.header_inputs {\r\n\t\t\t\t\t\t\twidth: 45%;\r\n\t\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\t\tborder: var(--bottomBorder);\r\n\t\t\t\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\t\t\t\tbackground-color: #f7f7f7;\r\n\r\n\t\t\t\t\t\t\t.input_item {\r\n\t\t\t\t\t\t\t\tfont-size: 0.8rem;\r\n\t\t\t\t\t\t\t\tpadding: 10px;\r\n\t\t\t\t\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\t\t\t\t\twidth: 50%;\r\n\r\n\t\t\t\t\t\t\t\t.reservation_input {\r\n\t\t\t\t\t\t\t\t\tall: unset;\r\n\t\t\t\t\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\t\t\t\t\tcursor: text;\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.form_main {\r\n\t\t\t\t\t\tposition: relative;\r\n\t\t\t\t\t\tmargin-top: var(--containerHorizontalMargin);\r\n\t\t\t\t\t\tmargin-bottom: calc(var(--containerHorizontalMargin) / 2);\r\n\r\n\t\t\t\t\t\t.pagination_btns {\r\n\t\t\t\t\t\t\tposition: absolute;\r\n\t\t\t\t\t\t\ttop: 0;\r\n\t\t\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\t\tjustify-content: space-between;\r\n\r\n\t\t\t\t\t\t\t.pagination_btn {\r\n\t\t\t\t\t\t\t\tall: unset;\r\n\t\t\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\t\t\tfont-size: 1.5rem;\r\n\t\t\t\t\t\t\t\tline-height: 1.5rem;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.calendar_wrap {\r\n\t\t\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\t\t\tjustify-content: space-between;\r\n\r\n\t\t\t\t\t\t\t.calendar_item {\r\n\t\t\t\t\t\t\t\twidth: 48%;\r\n\r\n\t\t\t\t\t\t\t\t.calendar_month {\r\n\t\t\t\t\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\t\t\t\t\ttext-align: center;\r\n\t\t\t\t\t\t\t\t\tmargin-bottom: 15px;\r\n\t\t\t\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t.calendar_row {\r\n\t\t\t\t\t\t\t\t\tdisplay: flex;\r\n\r\n\t\t\t\t\t\t\t\t\t.calendar_day {\r\n\t\t\t\t\t\t\t\t\t\twidth: var(--calendarDaySize);\r\n\t\t\t\t\t\t\t\t\t\theight: var(--calendarDaySize);\r\n\t\t\t\t\t\t\t\t\t\ttext-align: center;\r\n\r\n\t\t\t\t\t\t\t\t\t\t&.available_day {\r\n\t\t\t\t\t\t\t\t\t\t\tbackground-color: #f5f6fa;\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\tspan {\r\n\t\t\t\t\t\t\t\t\t\t\tdisplay: block;\r\n\t\t\t\t\t\t\t\t\t\t\twidth: 100%;\r\n\t\t\t\t\t\t\t\t\t\t\theight: 100%;\r\n\t\t\t\t\t\t\t\t\t\t\tline-height: var(--calendarDaySize);\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t&.invalid_day {\r\n\t\t\t\t\t\t\t\t\t\t\t\tcolor: var(--gray);\r\n\t\t\t\t\t\t\t\t\t\t\t\ttext-decoration: line-through;\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t&.valid_day:hover {\r\n\t\t\t\t\t\t\t\t\t\t\t\tborder: 1px solid black;\r\n\t\t\t\t\t\t\t\t\t\t\t\tborder-radius: 50%;\r\n\t\t\t\t\t\t\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\t&.clicked {\r\n\t\t\t\t\t\t\t\t\t\t\t&.available_day {\r\n\t\t\t\t\t\t\t\t\t\t\t\tborder-radius: 50% 0 0 50%;\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\t\tspan {\r\n\t\t\t\t\t\t\t\t\t\t\t\tbackground-color: black !important;\r\n\t\t\t\t\t\t\t\t\t\t\t\tcolor: white;\r\n\t\t\t\t\t\t\t\t\t\t\t\tborder: 0 !important;\r\n\t\t\t\t\t\t\t\t\t\t\t\tborder-radius: 50%;\r\n\t\t\t\t\t\t\t\t\t\t\t\tcursor: default !important;\r\n\t\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\t\t\t.dayname {\r\n\t\t\t\t\t\t\t\t\t\tfont-size: 0.8rem;\r\n\t\t\t\t\t\t\t\t\t\tcolor: var(--gray);\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\t.form_footer {\r\n\t\t\t\t\t\ttext-align: end;\r\n\r\n\t\t\t\t\t\t.input_reset {\r\n\t\t\t\t\t\t\tall: unset;\r\n\t\t\t\t\t\t\tfont-size: 0.9rem;\r\n\t\t\t\t\t\t\t@include underline;\r\n\t\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t.form_exit {\r\n\t\t\t\t\t\t\tpadding: 10px 15px;\r\n\t\t\t\t\t\t\tmargin: 0 15px;\r\n\t\t\t\t\t\t\tbackground-color: black;\r\n\t\t\t\t\t\t\tcolor: white;\r\n\t\t\t\t\t\t\tborder: 0;\r\n\t\t\t\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\t\t\t\tfont-weight: 700;\r\n\t\t\t\t\t\t\tcursor: pointer;\r\n\t\t\t\t\t\t\toutline: none;\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t.review_wrap {\r\n\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\t\tborder-top: var(--bottomBorder);\r\n\t\tborder-bottom: var(--bottomBorder);\r\n\r\n\t\t.review_title {\r\n\t\t\tfont-size: 1.3rem;\r\n\t\t\tfont-weight: 700;\r\n\r\n\t\t\t.star {\r\n\t\t\t\t@include star(inherit);\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.review_item {\r\n\t\t\tpadding: calc(var(--containerVerticalPadding) / 1.5) 0;\r\n\r\n\t\t\t.review_header {\r\n\t\t\t\tdisplay: flex;\r\n\r\n\t\t\t\t.guest_profile_img {\r\n\t\t\t\t\tbackground-size: cover;\r\n\t\t\t\t\tbackground-position: center;\r\n\t\t\t\t\twidth: 50px;\r\n\t\t\t\t\theight: 50px;\r\n\t\t\t\t\tborder-radius: 50%;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.review_info {\r\n\t\t\t\t\tpadding-left: calc(var(--containerVerticalPadding) / 2);\r\n\t\t\t\t\tdisplay: flex;\r\n\t\t\t\t\tflex-direction: column;\r\n\t\t\t\t\tjustify-content: space-evenly;\r\n\r\n\t\t\t\t\t.guest_name {\r\n\t\t\t\t\t}\r\n\t\t\t\t\t.review_created {\r\n\t\t\t\t\t\tcolor: var(--gray);\r\n\t\t\t\t\t\tfont-weight: 300;\r\n\t\t\t\t\t\tfont-size: 0.7rem;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\t.review_main {\r\n\t\t\t    padding: 10px 0;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\t.room_rule {\r\n\t\tpadding: var(--containerVerticalPadding) 0;\r\n\t\tmargin: 0 var(--containerHorizontalMargin);\r\n\t\tdisplay: flex;\r\n\r\n\t\t.rule_header {\r\n\t\t\tfont-size: 1.3rem;\r\n\t\t\tfont-weight: 700;\r\n\t\t}\r\n\r\n\t\t.rules_wrap {\r\n\t\t\t.rule_item {\r\n\t\t\t\t@include facility_rule_item;\r\n\r\n\t\t\t\t.rule_icon {\r\n\t\t\t\t\t@include facility_rule_icon;\r\n\t\t\t\t}\r\n\r\n\t\t\t\t.rule_description {\r\n\t\t\t\t\t@include facility_rule_description;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\t.message_wrap {\r\n\t\t\tdisplay: flex;\r\n\t\t\tflex-direction: column;\r\n\t\t\tjustify-content: center;\r\n\t\t\talign-items: flex-start;\r\n\t\t\tmargin-left: 100px;\r\n\r\n\t\t\t.message_btn {\r\n\t\t\t\tpadding: 10px 40px;\r\n\t\t\t\tfont-weight: 700;\r\n\t\t\t\tfont-family: inherit;\r\n\t\t\t\topacity: 0.5;\r\n\t\t\t\tborder-radius: var(--borderRadius);\r\n\t\t\t\toutline: none;\r\n\t\t\t\tcursor: pointer;\r\n\r\n\t\t\t\t&:hover {\r\n\t\t\t\t\topacity: 0.8;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\t.alert {\r\n\t\t\t\tmargin-top: 10px;\r\n\t\t\t\twidth: 250px;\r\n\t\t\t\tfont-size: 0.8rem;\r\n\t\t\t\tfont-weight: 300;\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n}\r\n","@import url(\"https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500;700&display=swap\");\r\n:root {\r\n\t--wrapWidth: 1200px;\r\n\t--gray: #7f8c8d;\r\n\t--deepGray: #535c68;\r\n\t--red: #ff385c;\r\n\t--blue: lightseagreen;\r\n\t--green: #23c382;\r\n\t--containerHorizontalMargin: 50px;\r\n\t--containerVerticalPadding: 30px;\r\n\t--detailFontSize: smaller;\r\n\t--bottomBorder: 1px solid #ecf0f1;\r\n\t--borderRadius: 10px;\r\n\t--calendarDaySize: 40px;\r\n\t--boxShadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\r\n}\r\n\r\n// Breakpoints\r\n$breakpoint-tablet: 758px;\r\n$breakpoint-desktop: 1024px;\r\n\r\n.ACCEPTED {\r\n\tcolor: var(--green) !important;\r\n}\r\n\r\n.PENDING, .COMPLETED {\r\n\tcolor: var(--gray) !important;\r\n}\r\n\r\n.REFUSED, .CANCLED {\r\n\tcolor: var(--red) !important;\r\n}\r\n","@import \"./_base\";\r\n\r\n@mixin tablet {\r\n  @media (min-width: #{$breakpoint-tablet}) and (max-width: #{$breakpoint-desktop - 1px}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin desktop {\r\n  @media (min-width: #{$breakpoint-desktop}) {\r\n    @content;\r\n  }\r\n}\r\n\r\n@mixin underline {\r\n\tborder-bottom: 1px solid black;\r\n\tdisplay: inline-block;\r\n\tline-height: 0.85;\r\n\ttext-shadow: 1px 1px var(--backgroudColor), 1px -1px var(--backgroudColor),\r\n\t\t-1px 1px var(--backgroudColor), -1px -1px var(--backgroudColor);\r\n\t@content;\r\n}\r\n\r\n@mixin star($font-size) {\r\n\tcolor: var(--red);\r\n\tfont-size: $font-size;\r\n}\r\n\r\n@mixin reservation_item {\r\n\tflex: 1 1 50%;\r\n\tpadding: 5px 10px;\r\n\tfont-size: 0.9rem;\r\n\theight: 50px;\r\n\r\n\t.reservation_display {\r\n\t\tcolor: var(--gray);\r\n\t\tfont-weight: 300;\r\n\t}\r\n}\r\n\r\n@mixin facility_rule_item {\r\n\tmargin: 15px 0;\r\n}\r\n\r\n@mixin facility_rule_icon {\r\n\tfont-size: 20px;\r\n\twidth: 40px;\r\n\ttext-align: center;\r\n}\r\n\r\n@mixin facility_rule_description {\r\n\tmargin-left: 15px;\r\n\tfont-weight: 300;\r\n}\r\n\r\n@mixin changeHeaderColor {\r\n\t.body_header ul .airbnb_icon,\r\n\t.body_header ul .header_profile .profile_img {\r\n\t\tcolor: var(--blue);\r\n\t}\r\n\t\r\n\t.body_header ul .room_search i {\r\n\t\tbackground-color: var(--blue);\r\n\t}\r\n}\r\n"],"sourceRoot":""}]);
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
			const roomId = url.match(/(?<=room\/)[\d]*/)[0];
			const {data} = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(
				`http://localhost:8080/api/room/${roomId}`
			);
			return data.map(el => el.day);
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
			<span class="${CL_DAY}" id="${month == 13? year+1: year}-${month == 13? "01": _js_util__WEBPACK_IMPORTED_MODULE_1__["setMonthCount"](month)}-${_js_util__WEBPACK_IMPORTED_MODULE_1__["setFixDayCount"](day)}">
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
			document.querySelector(
				DOMString.reservePopupContainer
			).style.display = "none";
		},

		openPopup: () =>
			(document.querySelector(
				DOMString.reservePopupContainer
			).style.display = "block"),

		isClickedCheckInAndOut: (event) =>
			event.target.matches(`${DOMString.reserveCheckBox} *`),

		isClickedRenderBtn: (event) =>
			event.target.matches(DOMString.reserveRenderBtn),

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
			).value = _js_util__WEBPACK_IMPORTED_MODULE_1__["formatDashToDot"](id)),
		setCheckOutInput: (id) =>
			(document.querySelector(
				DOMString.checkOutInput
			).value = _js_util__WEBPACK_IMPORTED_MODULE_1__["formatDashToDot"](id)),

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

		clearCheckDisplay: () => {
			document.querySelector(DOMString.checkInDisplay).textContent =
				"날짜선택";
			document.querySelector(DOMString.checkOutDisplay).textContent =
				"날짜선택";
		},

		renderCheckInDisplay: (id) =>
			(document.querySelector(
				DOMString.checkInDisplay
			).textContent = _js_util__WEBPACK_IMPORTED_MODULE_1__["formatDashToDot"](id)),
		renderCheckOutDisplay: (id) =>
			(document.querySelector(
				DOMString.checkOutDisplay
			).textContent = _js_util__WEBPACK_IMPORTED_MODULE_1__["formatDashToDot"](id)),
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
			document.querySelector(
				DOMString.reservePriceContainer
			).style.display = "block";
			document.querySelector(DOMString.reserveRenderBtn).textContent =
				"예약하기";
			document.querySelector(DOMString.roomNight).textContent =
				roomNight + "박";
			document.querySelector(
				DOMString.roomPrice
			).textContent = _js_util__WEBPACK_IMPORTED_MODULE_1__["formatWon"](roomPrice);
			document.querySelector(
				DOMString.priceValue
			).textContent = _js_util__WEBPACK_IMPORTED_MODULE_1__["formatWon"](totalPrice);
			document.querySelector(
				DOMString.totalPrice
			).textContent = _js_util__WEBPACK_IMPORTED_MODULE_1__["formatWon"](totalPrice + 5000);
			document.querySelector(
				DOMString.reserveHelpText
			).innerHTML = `${_js_util__WEBPACK_IMPORTED_MODULE_1__["formatWon"](roomPrice)}<small>/박</small>`;
		},

		clearPriceContainer: () => {
			document.querySelector(
				DOMString.reservePriceContainer
			).style.display = "none";
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
		document
			.querySelector(DOM.exitBtn)
			.addEventListener("click", onClickFormExitBtn);
		// 폼 열기 클릭
		document
			.querySelector(DOM.reserveContainer)
			.addEventListener("click", onClickReserveContainer);
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
				const reservedDays = await DataCtrl.getReservedDays();
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
		UICtrl.renderCalendar(
			state.curDate.getFullYear(),
			state.curDate.getMonth() + 1
		);
		UICtrl.beExceptReservedDay(await DataCtrl.getReservedDays());
	};

	const onClickFormExitBtn = () => UICtrl.closePopup(event);

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

	const onClickReserveContainer = (event) => {
		// 1-1. 체크인, 체크아웃 버튼 클릭시
		if (UICtrl.isClickedCheckInAndOut(event)) UICtrl.openPopup();
		// 1-2. 예약 버튼 클릭시
		else if (UICtrl.isClickedRenderBtn(event)) {
			if (state.checkInId !== "" && state.checkOutId !== "") {
				submitReservationForm();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvQXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9idWlsZEZ1bGxQYXRoLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvY3JlYXRlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9tZXJnZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvZGVmYXVsdHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb21iaW5lVVJMcy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3NwcmVhZC5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9qcy91dGlsLmpzIiwid2VicGFjazovLy8uL3Njc3Mvc3R5bGUuc2Nzcz8wMDNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxpQkFBaUIsbUJBQU8sQ0FBQyx1REFBYSxFOzs7Ozs7Ozs7Ozs7QUNBekI7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLHNEQUFZO0FBQ2hDLGFBQWEsbUJBQU8sQ0FBQyxrRUFBa0I7QUFDdkMsY0FBYyxtQkFBTyxDQUFDLDBFQUFzQjtBQUM1QyxlQUFlLG1CQUFPLENBQUMsNEVBQXVCO0FBQzlDLG9CQUFvQixtQkFBTyxDQUFDLDhFQUF1QjtBQUNuRCxtQkFBbUIsbUJBQU8sQ0FBQyxvRkFBMkI7QUFDdEQsc0JBQXNCLG1CQUFPLENBQUMsMEZBQThCO0FBQzVELGtCQUFrQixtQkFBTyxDQUFDLDBFQUFxQjs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7O0FB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QTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FB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O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvcmVzb3VyY2VzL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIGJ1aWxkRnVsbFBhdGggPSByZXF1aXJlKCcuLi9jb3JlL2J1aWxkRnVsbFBhdGgnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICAodXRpbHMuaXNCbG9iKHJlcXVlc3REYXRhKSB8fCB1dGlscy5pc0ZpbGUocmVxdWVzdERhdGEpKSAmJlxuICAgICAgcmVxdWVzdERhdGEudHlwZVxuICAgICkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChjb25maWcuYXV0aC5wYXNzd29yZCkpIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICB2YXIgZnVsbFBhdGggPSBidWlsZEZ1bGxQYXRoKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChmdWxsUGF0aCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBicm93c2VyIHJlcXVlc3QgY2FuY2VsbGF0aW9uIChhcyBvcHBvc2VkIHRvIGEgbWFudWFsIGNhbmNlbGxhdGlvbilcbiAgICByZXF1ZXN0Lm9uYWJvcnQgPSBmdW5jdGlvbiBoYW5kbGVBYm9ydCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignUmVxdWVzdCBhYm9ydGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJywgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICB2YXIgdGltZW91dEVycm9yTWVzc2FnZSA9ICd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCc7XG4gICAgICBpZiAoY29uZmlnLnRpbWVvdXRFcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgdGltZW91dEVycm9yTWVzc2FnZSA9IGNvbmZpZy50aW1lb3V0RXJyb3JNZXNzYWdlO1xuICAgICAgfVxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKHRpbWVvdXRFcnJvck1lc3NhZ2UsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihmdWxsUGF0aCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnLndpdGhDcmVkZW50aWFscykpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gISFjb25maWcud2l0aENyZWRlbnRpYWxzO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFyZXF1ZXN0RGF0YSkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9jb3JlL21lcmdlQ29uZmlnJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGF4aW9zLmRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vbWVyZ2VDb25maWcnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcbiAgICBjb25maWcudXJsID0gYXJndW1lbnRzWzBdO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgfVxuXG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG5cbiAgLy8gU2V0IGNvbmZpZy5tZXRob2RcbiAgaWYgKGNvbmZpZy5tZXRob2QpIHtcbiAgICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2UgaWYgKHRoaXMuZGVmYXVsdHMubWV0aG9kKSB7XG4gICAgY29uZmlnLm1ldGhvZCA9IHRoaXMuZGVmYXVsdHMubWV0aG9kLnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLm1ldGhvZCA9ICdnZXQnO1xuICB9XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbkF4aW9zLnByb3RvdHlwZS5nZXRVcmkgPSBmdW5jdGlvbiBnZXRVcmkoY29uZmlnKSB7XG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIHJldHVybiBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KG1lcmdlQ29uZmlnKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChtZXJnZUNvbmZpZyhjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgYmFzZVVSTCB3aXRoIHRoZSByZXF1ZXN0ZWRVUkwsXG4gKiBvbmx5IHdoZW4gdGhlIHJlcXVlc3RlZFVSTCBpcyBub3QgYWxyZWFkeSBhbiBhYnNvbHV0ZSBVUkwuXG4gKiBJZiB0aGUgcmVxdWVzdFVSTCBpcyBhYnNvbHV0ZSwgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSByZXF1ZXN0ZWRVUkwgdW50b3VjaGVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RlZFVSTCBBYnNvbHV0ZSBvciByZWxhdGl2ZSBVUkwgdG8gY29tYmluZVxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIGZ1bGwgcGF0aFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkRnVsbFBhdGgoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKSB7XG4gIGlmIChiYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKHJlcXVlc3RlZFVSTCkpIHtcbiAgICByZXR1cm4gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVxdWVzdGVkVVJMKTtcbiAgfVxuICByZXR1cm4gcmVxdWVzdGVkVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1xuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG5cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIGVycm9yLmlzQXhpb3NFcnJvciA9IHRydWU7XG5cbiAgZXJyb3IudG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY29kZTogdGhpcy5jb2RlXG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIGVycm9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIHZhciBjb25maWcgPSB7fTtcblxuICB2YXIgdmFsdWVGcm9tQ29uZmlnMktleXMgPSBbJ3VybCcsICdtZXRob2QnLCAnZGF0YSddO1xuICB2YXIgbWVyZ2VEZWVwUHJvcGVydGllc0tleXMgPSBbJ2hlYWRlcnMnLCAnYXV0aCcsICdwcm94eScsICdwYXJhbXMnXTtcbiAgdmFyIGRlZmF1bHRUb0NvbmZpZzJLZXlzID0gW1xuICAgICdiYXNlVVJMJywgJ3RyYW5zZm9ybVJlcXVlc3QnLCAndHJhbnNmb3JtUmVzcG9uc2UnLCAncGFyYW1zU2VyaWFsaXplcicsXG4gICAgJ3RpbWVvdXQnLCAndGltZW91dE1lc3NhZ2UnLCAnd2l0aENyZWRlbnRpYWxzJywgJ2FkYXB0ZXInLCAncmVzcG9uc2VUeXBlJywgJ3hzcmZDb29raWVOYW1lJyxcbiAgICAneHNyZkhlYWRlck5hbWUnLCAnb25VcGxvYWRQcm9ncmVzcycsICdvbkRvd25sb2FkUHJvZ3Jlc3MnLCAnZGVjb21wcmVzcycsXG4gICAgJ21heENvbnRlbnRMZW5ndGgnLCAnbWF4Qm9keUxlbmd0aCcsICdtYXhSZWRpcmVjdHMnLCAndHJhbnNwb3J0JywgJ2h0dHBBZ2VudCcsXG4gICAgJ2h0dHBzQWdlbnQnLCAnY2FuY2VsVG9rZW4nLCAnc29ja2V0UGF0aCcsICdyZXNwb25zZUVuY29kaW5nJ1xuICBdO1xuICB2YXIgZGlyZWN0TWVyZ2VLZXlzID0gWyd2YWxpZGF0ZVN0YXR1cyddO1xuXG4gIGZ1bmN0aW9uIGdldE1lcmdlZFZhbHVlKHRhcmdldCwgc291cmNlKSB7XG4gICAgaWYgKHV0aWxzLmlzUGxhaW5PYmplY3QodGFyZ2V0KSAmJiB1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZSh0YXJnZXQsIHNvdXJjZSk7XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc1BsYWluT2JqZWN0KHNvdXJjZSkpIHtcbiAgICAgIHJldHVybiB1dGlscy5tZXJnZSh7fSwgc291cmNlKTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzQXJyYXkoc291cmNlKSkge1xuICAgICAgcmV0dXJuIHNvdXJjZS5zbGljZSgpO1xuICAgIH1cbiAgICByZXR1cm4gc291cmNlO1xuICB9XG5cbiAgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9XG5cbiAgdXRpbHMuZm9yRWFjaCh2YWx1ZUZyb21Db25maWcyS2V5cywgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gZ2V0TWVyZ2VkVmFsdWUodW5kZWZpbmVkLCBjb25maWcyW3Byb3BdKTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2gobWVyZ2VEZWVwUHJvcGVydGllc0tleXMsIG1lcmdlRGVlcFByb3BlcnRpZXMpO1xuXG4gIHV0aWxzLmZvckVhY2goZGVmYXVsdFRvQ29uZmlnMktleXMsIGZ1bmN0aW9uIGRlZmF1bHRUb0NvbmZpZzIocHJvcCkge1xuICAgIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICghdXRpbHMuaXNVbmRlZmluZWQoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKHVuZGVmaW5lZCwgY29uZmlnMVtwcm9wXSk7XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKGRpcmVjdE1lcmdlS2V5cywgZnVuY3Rpb24gbWVyZ2UocHJvcCkge1xuICAgIGlmIChwcm9wIGluIGNvbmZpZzIpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGdldE1lcmdlZFZhbHVlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAocHJvcCBpbiBjb25maWcxKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBnZXRNZXJnZWRWYWx1ZSh1bmRlZmluZWQsIGNvbmZpZzFbcHJvcF0pO1xuICAgIH1cbiAgfSk7XG5cbiAgdmFyIGF4aW9zS2V5cyA9IHZhbHVlRnJvbUNvbmZpZzJLZXlzXG4gICAgLmNvbmNhdChtZXJnZURlZXBQcm9wZXJ0aWVzS2V5cylcbiAgICAuY29uY2F0KGRlZmF1bHRUb0NvbmZpZzJLZXlzKVxuICAgIC5jb25jYXQoZGlyZWN0TWVyZ2VLZXlzKTtcblxuICB2YXIgb3RoZXJLZXlzID0gT2JqZWN0XG4gICAgLmtleXMoY29uZmlnMSlcbiAgICAuY29uY2F0KE9iamVjdC5rZXlzKGNvbmZpZzIpKVxuICAgIC5maWx0ZXIoZnVuY3Rpb24gZmlsdGVyQXhpb3NLZXlzKGtleSkge1xuICAgICAgcmV0dXJuIGF4aW9zS2V5cy5pbmRleE9mKGtleSkgPT09IC0xO1xuICAgIH0pO1xuXG4gIHV0aWxzLmZvckVhY2gob3RoZXJLZXlzLCBtZXJnZURlZXBQcm9wZXJ0aWVzKTtcblxuICByZXR1cm4gY29uZmlnO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCFyZXNwb25zZS5zdGF0dXMgfHwgIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdBY2NlcHQnKTtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG4gIG1heEJvZHlMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHZhciBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG5cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdmFyIG9yaWdpblVSTDtcblxuICAgICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCdWZmZXIodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgIWlzVW5kZWZpbmVkKHZhbCkgJiYgdmFsLmNvbnN0cnVjdG9yICE9PSBudWxsICYmICFpc1VuZGVmaW5lZCh2YWwuY29uc3RydWN0b3IpXG4gICAgJiYgdHlwZW9mIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiB2YWwuY29uc3RydWN0b3IuaXNCdWZmZXIodmFsKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHBsYWluIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBwbGFpbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbCkge1xuICBpZiAodG9TdHJpbmcuY2FsbCh2YWwpICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsKTtcbiAgcmV0dXJuIHByb3RvdHlwZSA9PT0gbnVsbCB8fCBwcm90b3R5cGUgPT09IE9iamVjdC5wcm90b3R5cGU7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOYXRpdmVTY3JpcHQnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOUycpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKGlzUGxhaW5PYmplY3QocmVzdWx0W2tleV0pICYmIGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZSh7fSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsKSkge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWwuc2xpY2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG4vKipcbiAqIFJlbW92ZSBieXRlIG9yZGVyIG1hcmtlci4gVGhpcyBjYXRjaGVzIEVGIEJCIEJGICh0aGUgVVRGLTggQk9NKVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb250ZW50IHdpdGggQk9NXG4gKiBAcmV0dXJuIHtzdHJpbmd9IGNvbnRlbnQgdmFsdWUgd2l0aG91dCBCT01cbiAqL1xuZnVuY3Rpb24gc3RyaXBCT00oY29udGVudCkge1xuICBpZiAoY29udGVudC5jaGFyQ29kZUF0KDApID09PSAweEZFRkYpIHtcbiAgICBjb250ZW50ID0gY29udGVudC5zbGljZSgxKTtcbiAgfVxuICByZXR1cm4gY29udGVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1BsYWluT2JqZWN0OiBpc1BsYWluT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW0sXG4gIHN0cmlwQk9NOiBzdHJpcEJPTVxufTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUjp3Z2h0QDMwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU5vdG8rU2FucytLUjp3Z2h0QDMwMDs1MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuOnJvb3Qge1xcbiAgLS13cmFwV2lkdGg6IDEyMDBweDtcXG4gIC0tZ3JheTogIzdmOGM4ZDtcXG4gIC0tZGVlcEdyYXk6ICM1MzVjNjg7XFxuICAtLXJlZDogI2ZmMzg1YztcXG4gIC0tYmx1ZTogbGlnaHRzZWFncmVlbjtcXG4gIC0tZ3JlZW46ICMyM2MzODI7XFxuICAtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW46IDUwcHg7XFxuICAtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZzogMzBweDtcXG4gIC0tZGV0YWlsRm9udFNpemU6IHNtYWxsZXI7XFxuICAtLWJvdHRvbUJvcmRlcjogMXB4IHNvbGlkICNlY2YwZjE7XFxuICAtLWJvcmRlclJhZGl1czogMTBweDtcXG4gIC0tY2FsZW5kYXJEYXlTaXplOiA0MHB4O1xcbiAgLS1ib3hTaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTsgfVxcblxcbi5BQ0NFUFRFRCB7XFxuICBjb2xvcjogdmFyKC0tZ3JlZW4pICFpbXBvcnRhbnQ7IH1cXG5cXG4uUEVORElORywgLkNPTVBMRVRFRCB7XFxuICBjb2xvcjogdmFyKC0tZ3JheSkgIWltcG9ydGFudDsgfVxcblxcbi5SRUZVU0VELCAuQ0FOQ0xFRCB7XFxuICBjb2xvcjogdmFyKC0tcmVkKSAhaW1wb3J0YW50OyB9XFxuXFxuOnJvb3Qge1xcbiAgLS13cmFwV2lkdGg6IDEyMDBweDtcXG4gIC0tZ3JheTogIzdmOGM4ZDtcXG4gIC0tZGVlcEdyYXk6ICM1MzVjNjg7XFxuICAtLXJlZDogI2ZmMzg1YztcXG4gIC0tYmx1ZTogbGlnaHRzZWFncmVlbjtcXG4gIC0tZ3JlZW46ICMyM2MzODI7XFxuICAtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW46IDUwcHg7XFxuICAtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZzogMzBweDtcXG4gIC0tZGV0YWlsRm9udFNpemU6IHNtYWxsZXI7XFxuICAtLWJvdHRvbUJvcmRlcjogMXB4IHNvbGlkICNlY2YwZjE7XFxuICAtLWJvcmRlclJhZGl1czogMTBweDtcXG4gIC0tY2FsZW5kYXJEYXlTaXplOiA0MHB4O1xcbiAgLS1ib3hTaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTsgfVxcblxcbi5BQ0NFUFRFRCB7XFxuICBjb2xvcjogdmFyKC0tZ3JlZW4pICFpbXBvcnRhbnQ7IH1cXG5cXG4uUEVORElORywgLkNPTVBMRVRFRCB7XFxuICBjb2xvcjogdmFyKC0tZ3JheSkgIWltcG9ydGFudDsgfVxcblxcbi5SRUZVU0VELCAuQ0FOQ0xFRCB7XFxuICBjb2xvcjogdmFyKC0tcmVkKSAhaW1wb3J0YW50OyB9XFxuXFxuLkJ0bkRpc2FibGVkIHtcXG4gIGN1cnNvcjogbm8tZHJvcCAhaW1wb3J0YW50O1xcbiAgb3BhY2l0eTogMC4yICFpbXBvcnRhbnQ7IH1cXG5cXG4ud3JhcCB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1heC13aWR0aDogdmFyKC0td3JhcFdpZHRoKTsgfVxcbiAgLndyYXAgLm5hdl9jYXRlZ29yeSB7XFxuICAgIHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgMDtcXG4gICAgbWFyZ2luOiAwIHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pO1xcbiAgICBmb250LXdlaWdodDogMzAwOyB9XFxuICAgIC53cmFwIC5uYXZfY2F0ZWdvcnkgYSB7XFxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBsaW5lLWhlaWdodDogMC44NTtcXG4gICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvciksIDFweCAtMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKSwgLTFweCAxcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpLCAtMXB4IC0xcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpOyB9XFxuICAud3JhcCAucm9vbV9pbWFnZSB7XFxuICAgIG1hcmdpbjogMCB2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKTsgfVxcbiAgICAud3JhcCAucm9vbV9pbWFnZSAucm9vbV9pbWFnZV9ncmlkIHtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQ6IHJlcGVhdCgyLCBtaW5tYXgoMTUwcHgsIDFmcikpL3JlcGVhdCg0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xcbiAgICAgIGdhcDogMTBweDsgfVxcbiAgICAgIC53cmFwIC5yb29tX2ltYWdlIC5yb29tX2ltYWdlX2dyaWQgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMpOyB9XFxuICAgICAgICAud3JhcCAucm9vbV9pbWFnZSAucm9vbV9pbWFnZV9ncmlkIGltZzpmaXJzdC1jaGlsZCB7XFxuICAgICAgICAgIGdyaWQtYXJlYTogc3BhbiAyIC8gc3BhbiAyOyB9XFxuICAud3JhcCAubWFpbl93cmFwIHtcXG4gICAgZGlzcGxheTogZmxleDsgfVxcbiAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX2xlZnQge1xcbiAgICAgIHdpZHRoOiA2NSU7XFxuICAgICAgcGFkZGluZzogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAwOyB9XFxuICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9sZWZ0IC5yb29tX2hlYWRlciB7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKTtcXG4gICAgICAgIG1hcmdpbjogMCB2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IHZhcigtLWJvdHRvbUJvcmRlcik7IH1cXG4gICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fbGVmdCAucm9vbV9oZWFkZXIgLnJvb21fdGl0bGUge1xcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwOyB9XFxuICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX2xlZnQgLnJvb21faGVhZGVyIC5yb29tX2luZm8ge1xcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLWRldGFpbEZvbnRTaXplKTsgfVxcbiAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX2xlZnQgLnJvb21faGVhZGVyIC5yb29tX2luZm8gLnN0YXIge1xcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDsgfVxcbiAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX2xlZnQgLnJvb21faGVhZGVyIC5yb29tX2luZm8gLnJhdGluZ19jb3VudCB7XFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWdyYXkpOyB9XFxuICAgICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9sZWZ0IC5yb29tX2hlYWRlciAucm9vbV9pbmZvIC5yYXRpbmdfY291bnQ6OmFmdGVyIHtcXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFxcXCIgwrcgXFxcIjtcXG4gICAgICAgICAgICAgIGNvbG9yOiBibGFjazsgfVxcbiAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX2xlZnQgLnJvb21faGVhZGVyIC5yb29tX2luZm8gLmFkZHJlc3Mge1xcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuODU7XFxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpLCAxcHggLTFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvciksIC0xcHggMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKSwgLTFweCAtMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKTtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMC45NTtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZGVlcEdyYXkpOyB9XFxuICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9sZWZ0IC5ob3N0X2luZm8ge1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAwO1xcbiAgICAgICAgbWFyZ2luOiAwIHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBib3JkZXItYm90dG9tOiB2YXIoLS1ib3R0b21Cb3JkZXIpOyB9XFxuICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX2xlZnQgLmhvc3RfaW5mbyBoZ3JvdXAgLnVzZXJuYW1lIHtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDsgfVxcbiAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9sZWZ0IC5ob3N0X2luZm8gaGdyb3VwIC5yb29tX3Nob3J0X3NwZWMge1xcbiAgICAgICAgICBmb250LXNpemU6IHZhcigtLWRldGFpbEZvbnRTaXplKTtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDsgfVxcbiAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9sZWZ0IC5ob3N0X2luZm8gLnVzZXJfcHJvZmlsZSB7XFxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xcbiAgICAgICAgICBoZWlnaHQ6IDgwcHg7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9sZWZ0IC5yb29tX2RldGFpbF9pbmZvIHtcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgMDtcXG4gICAgICAgIG1hcmdpbjogMCB2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKTtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IHZhcigtLWJvdHRvbUJvcmRlcik7IH1cXG4gICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fbGVmdCAucm9vbV9kZXRhaWxfaW5mbyBhIHtcXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgIG1hcmdpbjogdmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbikgMDtcXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjg1O1xcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvciksIDFweCAtMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKSwgLTFweCAxcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpLCAtMXB4IC0xcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpO1xcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwOyB9XFxuICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX2xlZnQgLnJvb21fZGV0YWlsX2luZm8gcCB7XFxuICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDsgfVxcbiAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fbGVmdCAucm9vbV9mYWNpbGl0aWVzIHtcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgMDtcXG4gICAgICAgIG1hcmdpbjogMCB2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKTsgfVxcbiAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9sZWZ0IC5yb29tX2ZhY2lsaXRpZXMgaDMge1xcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4IDA7IH1cXG4gICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fbGVmdCAucm9vbV9mYWNpbGl0aWVzIC5mYWNpbGl0eV9pdGVtIHtcXG4gICAgICAgICAgbWFyZ2luOiAxNXB4IDA7IH1cXG4gICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9sZWZ0IC5yb29tX2ZhY2lsaXRpZXMgLmZhY2lsaXR5X2l0ZW0gLmZhY2lsaXR5X2ljb24ge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9sZWZ0IC5yb29tX2ZhY2lsaXRpZXMgLmZhY2lsaXR5X2l0ZW0gLmZhY2lsaXR5X2Rlc2NyaXB0aW9uIHtcXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwOyB9XFxuICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQge1xcbiAgICAgIHdpZHRoOiAzNSU7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHBhZGRpbmctdG9wOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpO1xcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgKiAyKTtcXG4gICAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pOyB9XFxuICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCB7XFxuICAgICAgICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgICAgICAgdG9wOiA4MHB4O1xcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94U2hhZG93KTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XFxuICAgICAgICBwYWRkaW5nOiAzMHB4OyB9XFxuICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9oZWFkZXIge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7IH1cXG4gICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25faGVhZGVyIC5yZXNlcnZhdGlvbl9oZWxwX3RleHQge1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xO1xcbiAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7IH1cXG4gICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25faGVhZGVyIHNtYWxsIHtcXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDsgfVxcbiAgICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX2hlYWRlciBzbWFsbCAuc3RhciB7XFxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDsgfVxcbiAgICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX2hlYWRlciBzbWFsbCAucmF0aW5nX2NvdW50IHtcXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5KTsgfVxcbiAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fbWFpbiB7XFxuICAgICAgICAgIGJvcmRlcjogdmFyKC0tYm90dG9tQm9yZGVyKTtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzKTsgfVxcbiAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9tYWluIC5yZXNlcnZhdGlvbl9pdGVtX2JveCB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9tYWluIC5yZXNlcnZhdGlvbl9pdGVtX2JveCAucmVzZXJ2YXRpb25faXRlbSB7XFxuICAgICAgICAgICAgICBmbGV4OiAxIDEgNTAlO1xcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgICAgICAgICAgIGhlaWdodDogNTBweDsgfVxcbiAgICAgICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fbWFpbiAucmVzZXJ2YXRpb25faXRlbV9ib3ggLnJlc2VydmF0aW9uX2l0ZW0gLnJlc2VydmF0aW9uX2Rpc3BsYXkge1xcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7IH1cXG4gICAgICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX2l0ZW1fYm94IC5yZXNlcnZhdGlvbl9pdGVtICsgLnJlc2VydmF0aW9uX2l0ZW0ge1xcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogdmFyKC0tYm90dG9tQm9yZGVyKTsgfVxcbiAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9tYWluIC5yZXNlcnZhdGlvbl9wZW9wbGUge1xcbiAgICAgICAgICAgIGJvcmRlci10b3A6IHZhcigtLWJvdHRvbUJvcmRlcik7XFxuICAgICAgICAgICAgZmxleDogMSAxIDUwJTtcXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7IH1cXG4gICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9tYWluIC5yZXNlcnZhdGlvbl9wZW9wbGUgLnJlc2VydmF0aW9uX2Rpc3BsYXkge1xcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWdyYXkpO1xcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDsgfVxcbiAgICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX3Blb3BsZSAucmVzZXJ2YXRpb25fZGlzcGxheSB7XFxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG4gICAgICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX3Blb3BsZSAucmVzZXJ2YXRpb25fZGlzcGxheSAuZ3Vlc3RfY291bnRlcl9ib3gge1xcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xcbiAgICAgICAgICAgICAgICB0b3A6IC0xMHB4OyB9XFxuICAgICAgICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX3Blb3BsZSAucmVzZXJ2YXRpb25fZGlzcGxheSAuZ3Vlc3RfY291bnRlcl9ib3ggLmRpc3BsYXlfYnRuX2ljb24ge1xcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XFxuICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAgICAgICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX3Blb3BsZSAucmVzZXJ2YXRpb25fZGlzcGxheSAuZ3Vlc3RfY291bnRlcl9ib3ggLmRpc3BsYXlfYnRuX2ljb246aG92ZXIge1xcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTsgfVxcbiAgICAgICAgICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX21haW4gLnJlc2VydmF0aW9uX3Blb3BsZSAucmVzZXJ2YXRpb25fZGlzcGxheSAuZ3Vlc3RfY291bnRlcl9ib3ggLmRpc3BsYXlfYnRuX2ljb246YWN0aXZlIHtcXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7IH1cXG4gICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX2J0biB7XFxuICAgICAgICAgIGJvcmRlcjogMDtcXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICBtYXJnaW46IDEwcHggMDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzKTtcXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX3ByaWNlIHtcXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX3ByaWNlIC5wcmljZV9jb21tZW50IHtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwOyB9XFxuICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX3ByaWNlIC5wcmljZV9pdGVtLFxcbiAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9wcmljZSAudG90YWxfcHJpY2Uge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgLyAyKTsgfVxcbiAgICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX3ByaWNlIC5wcmljZV9pdGVtIC5wcmljZV9uYW1lLFxcbiAgICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX3ByaWNlIC50b3RhbF9wcmljZSAucHJpY2VfbmFtZSB7XFxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XFxuICAgICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fcHJpY2UgLnByaWNlX2l0ZW0gLnByaWNlX3ZhbHVlLFxcbiAgICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX3ByaWNlIC50b3RhbF9wcmljZSAucHJpY2VfdmFsdWUge1xcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cXG4gICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fcHJpY2UgLnRvdGFsX3ByaWNlIHtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbikgLyAyKTtcXG4gICAgICAgICAgICBib3JkZXItdG9wOiB2YXIoLS1ib3R0b21Cb3JkZXIpOyB9XFxuICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9mb3JtIHtcXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgdG9wOiA0MCU7XFxuICAgICAgICAgIHJpZ2h0OiAtMTBweDtcXG4gICAgICAgICAgd2lkdGg6IDY2MHB4O1xcbiAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3hTaGFkb3cpO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMpO1xcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7IH1cXG4gICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fZm9ybSAuZm9ybV9oZWFkZXIge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9mb3JtIC5mb3JtX2hlYWRlciAuaGVhZGVyX3RleHQge1xcbiAgICAgICAgICAgICAgd2lkdGg6IDU1JTsgfVxcbiAgICAgICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fZm9ybSAuZm9ybV9oZWFkZXIgLmhlYWRlcl90ZXh0IC5oZWFkZXJfdGl0bGUge1xcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTsgfVxcbiAgICAgICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fZm9ybSAuZm9ybV9oZWFkZXIgLmhlYWRlcl90ZXh0IC5oZWFkZXJfYm9keSB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDsgfVxcbiAgICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1faGVhZGVyIC5oZWFkZXJfaW5wdXRzIHtcXG4gICAgICAgICAgICAgIHdpZHRoOiA0NSU7XFxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgICAgYm9yZGVyOiB2YXIoLS1ib3R0b21Cb3JkZXIpO1xcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzKTtcXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7IH1cXG4gICAgICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1faGVhZGVyIC5oZWFkZXJfaW5wdXRzIC5pbnB1dF9pdGVtIHtcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7IH1cXG4gICAgICAgICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fZm9ybSAuZm9ybV9oZWFkZXIgLmhlYWRlcl9pbnB1dHMgLmlucHV0X2l0ZW0gLnJlc2VydmF0aW9uX2lucHV0IHtcXG4gICAgICAgICAgICAgICAgICBhbGw6IHVuc2V0O1xcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiB0ZXh0OyB9XFxuICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1fbWFpbiB7XFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pO1xcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbikgLyAyKTsgfVxcbiAgICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1fbWFpbiAucGFnaW5hdGlvbl9idG5zIHtcXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcbiAgICAgICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fZm9ybSAuZm9ybV9tYWluIC5wYWdpbmF0aW9uX2J0bnMgLnBhZ2luYXRpb25fYnRuIHtcXG4gICAgICAgICAgICAgICAgYWxsOiB1bnNldDtcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTsgfVxcbiAgICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1fbWFpbiAuY2FsZW5kYXJfd3JhcCB7XFxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG4gICAgICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1fbWFpbiAuY2FsZW5kYXJfd3JhcCAuY2FsZW5kYXJfaXRlbSB7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiA0OCU7IH1cXG4gICAgICAgICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fZm9ybSAuZm9ybV9tYWluIC5jYWxlbmRhcl93cmFwIC5jYWxlbmRhcl9pdGVtIC5jYWxlbmRhcl9tb250aCB7XFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDsgfVxcbiAgICAgICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9mb3JtIC5mb3JtX21haW4gLmNhbGVuZGFyX3dyYXAgLmNhbGVuZGFyX2l0ZW0gLmNhbGVuZGFyX3JvdyB7XFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDsgfVxcbiAgICAgICAgICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1fbWFpbiAuY2FsZW5kYXJfd3JhcCAuY2FsZW5kYXJfaXRlbSAuY2FsZW5kYXJfcm93IC5jYWxlbmRhcl9kYXkge1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHZhcigtLWNhbGVuZGFyRGF5U2l6ZSk7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHZhcigtLWNhbGVuZGFyRGF5U2l6ZSk7XFxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG4gICAgICAgICAgICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1fbWFpbiAuY2FsZW5kYXJfd3JhcCAuY2FsZW5kYXJfaXRlbSAuY2FsZW5kYXJfcm93IC5jYWxlbmRhcl9kYXkuYXZhaWxhYmxlX2RheSB7XFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY2ZmE7IH1cXG4gICAgICAgICAgICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1fbWFpbiAuY2FsZW5kYXJfd3JhcCAuY2FsZW5kYXJfaXRlbSAuY2FsZW5kYXJfcm93IC5jYWxlbmRhcl9kYXkgc3BhbiB7XFxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogdmFyKC0tY2FsZW5kYXJEYXlTaXplKTsgfVxcbiAgICAgICAgICAgICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9mb3JtIC5mb3JtX21haW4gLmNhbGVuZGFyX3dyYXAgLmNhbGVuZGFyX2l0ZW0gLmNhbGVuZGFyX3JvdyAuY2FsZW5kYXJfZGF5IHNwYW4uaW52YWxpZF9kYXkge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5KTtcXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDsgfVxcbiAgICAgICAgICAgICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9mb3JtIC5mb3JtX21haW4gLmNhbGVuZGFyX3dyYXAgLmNhbGVuZGFyX2l0ZW0gLmNhbGVuZGFyX3JvdyAuY2FsZW5kYXJfZGF5IHNwYW4udmFsaWRfZGF5OmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgICAgICAgICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9mb3JtIC5mb3JtX21haW4gLmNhbGVuZGFyX3dyYXAgLmNhbGVuZGFyX2l0ZW0gLmNhbGVuZGFyX3JvdyAuY2FsZW5kYXJfZGF5LmNsaWNrZWQuYXZhaWxhYmxlX2RheSB7XFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSAwIDAgNTAlOyB9XFxuICAgICAgICAgICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9mb3JtIC5mb3JtX21haW4gLmNhbGVuZGFyX3dyYXAgLmNhbGVuZGFyX2l0ZW0gLmNhbGVuZGFyX3JvdyAuY2FsZW5kYXJfZGF5LmNsaWNrZWQgc3BhbiB7XFxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7IH1cXG4gICAgICAgICAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9mb3JtIC5mb3JtX21haW4gLmNhbGVuZGFyX3dyYXAgLmNhbGVuZGFyX2l0ZW0gLmNhbGVuZGFyX3JvdyAuZGF5bmFtZSB7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1ncmF5KTsgfVxcbiAgICAgICAgICAud3JhcCAubWFpbl93cmFwIC5tYWluX3JpZ2h0IC5yZXNlcnZhdGlvbl93cmFwIC5yZXNlcnZhdGlvbl9mb3JtIC5mb3JtX2Zvb3RlciB7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kOyB9XFxuICAgICAgICAgICAgLndyYXAgLm1haW5fd3JhcCAubWFpbl9yaWdodCAucmVzZXJ2YXRpb25fd3JhcCAucmVzZXJ2YXRpb25fZm9ybSAuZm9ybV9mb290ZXIgLmlucHV0X3Jlc2V0IHtcXG4gICAgICAgICAgICAgIGFsbDogdW5zZXQ7XFxuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjg1O1xcbiAgICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpLCAxcHggLTFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvciksIC0xcHggMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKSwgLTFweCAtMXB4IHZhcigtLWJhY2tncm91ZENvbG9yKTtcXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAgICAgICAgIC53cmFwIC5tYWluX3dyYXAgLm1haW5fcmlnaHQgLnJlc2VydmF0aW9uX3dyYXAgLnJlc2VydmF0aW9uX2Zvcm0gLmZvcm1fZm9vdGVyIC5mb3JtX2V4aXQge1xcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDE1cHg7XFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgICAgIGJvcmRlcjogMDtcXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XFxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTsgfVxcbiAgLndyYXAgLnJldmlld193cmFwIHtcXG4gICAgcGFkZGluZzogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAwO1xcbiAgICBtYXJnaW46IDAgdmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbik7XFxuICAgIGJvcmRlci10b3A6IHZhcigtLWJvdHRvbUJvcmRlcik7XFxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLWJvdHRvbUJvcmRlcik7IH1cXG4gICAgLndyYXAgLnJldmlld193cmFwIC5yZXZpZXdfdGl0bGUge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7IH1cXG4gICAgICAud3JhcCAucmV2aWV3X3dyYXAgLnJldmlld190aXRsZSAuc3RhciB7XFxuICAgICAgICBjb2xvcjogdmFyKC0tcmVkKTtcXG4gICAgICAgIGZvbnQtc2l6ZTogaW5oZXJpdDsgfVxcbiAgICAud3JhcCAucmV2aWV3X3dyYXAgLnJldmlld19pdGVtIHtcXG4gICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgLyAxLjUpIDA7IH1cXG4gICAgICAud3JhcCAucmV2aWV3X3dyYXAgLnJldmlld19pdGVtIC5yZXZpZXdfaGVhZGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IH1cXG4gICAgICAgIC53cmFwIC5yZXZpZXdfd3JhcCAucmV2aWV3X2l0ZW0gLnJldmlld19oZWFkZXIgLmd1ZXN0X3Byb2ZpbGVfaW1nIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7IH1cXG4gICAgICAgIC53cmFwIC5yZXZpZXdfd3JhcCAucmV2aWV3X2l0ZW0gLnJldmlld19oZWFkZXIgLnJldmlld19pbmZvIHtcXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgLyAyKTtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7IH1cXG4gICAgICAgICAgLndyYXAgLnJldmlld193cmFwIC5yZXZpZXdfaXRlbSAucmV2aWV3X2hlYWRlciAucmV2aWV3X2luZm8gLnJldmlld19jcmVhdGVkIHtcXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tZ3JheSk7XFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTsgfVxcbiAgICAgIC53cmFwIC5yZXZpZXdfd3JhcCAucmV2aWV3X2l0ZW0gLnJldmlld19tYWluIHtcXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDsgfVxcbiAgLndyYXAgLnJvb21fcnVsZSB7XFxuICAgIHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgMDtcXG4gICAgbWFyZ2luOiAwIHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pO1xcbiAgICBkaXNwbGF5OiBmbGV4OyB9XFxuICAgIC53cmFwIC5yb29tX3J1bGUgLnJ1bGVfaGVhZGVyIHtcXG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgICBmb250LXdlaWdodDogNzAwOyB9XFxuICAgIC53cmFwIC5yb29tX3J1bGUgLnJ1bGVzX3dyYXAgLnJ1bGVfaXRlbSB7XFxuICAgICAgbWFyZ2luOiAxNXB4IDA7IH1cXG4gICAgICAud3JhcCAucm9vbV9ydWxlIC5ydWxlc193cmFwIC5ydWxlX2l0ZW0gLnJ1bGVfaWNvbiB7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICB3aWR0aDogNDBweDtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcbiAgICAgIC53cmFwIC5yb29tX3J1bGUgLnJ1bGVzX3dyYXAgLnJ1bGVfaXRlbSAucnVsZV9kZXNjcmlwdGlvbiB7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7IH1cXG4gICAgLndyYXAgLnJvb21fcnVsZSAubWVzc2FnZV93cmFwIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4OyB9XFxuICAgICAgLndyYXAgLnJvb21fcnVsZSAubWVzc2FnZV93cmFwIC5tZXNzYWdlX2J0biB7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgICAgICBvcGFjaXR5OiAwLjU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMpO1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAgICAgLndyYXAgLnJvb21fcnVsZSAubWVzc2FnZV93cmFwIC5tZXNzYWdlX2J0bjpob3ZlciB7XFxuICAgICAgICAgIG9wYWNpdHk6IDAuODsgfVxcbiAgICAgIC53cmFwIC5yb29tX3J1bGUgLm1lc3NhZ2Vfd3JhcCAuYWxlcnQge1xcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgICAgIHdpZHRoOiAyNTBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly9zY3NzL19fYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc2Nzcy9fX21peGlucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNDLG1CQUFZO0VBQ1osZUFBTztFQUNQLG1CQUFXO0VBQ1gsY0FBTTtFQUNOLHFCQUFPO0VBQ1AsZ0JBQVE7RUFDUixpQ0FBNEI7RUFDNUIsZ0NBQTJCO0VBQzNCLHlCQUFpQjtFQUNqQixpQ0FBZTtFQUNmLG9CQUFlO0VBQ2YsdUJBQWtCO0VBQ2xCLHlFQUFZLEVBQUE7O0FBT2I7RUFDQyw4QkFBOEIsRUFBQTs7QUFHL0I7RUFDQyw2QkFBNkIsRUFBQTs7QUFHOUI7RUFDQyw0QkFBNEIsRUFBQTs7QUE3QjdCO0VBQ0MsbUJBQVk7RUFDWixlQUFPO0VBQ1AsbUJBQVc7RUFDWCxjQUFNO0VBQ04scUJBQU87RUFDUCxnQkFBUTtFQUNSLGlDQUE0QjtFQUM1QixnQ0FBMkI7RUFDM0IseUJBQWlCO0VBQ2pCLGlDQUFlO0VBQ2Ysb0JBQWU7RUFDZix1QkFBa0I7RUFD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TUVpQ0MsY0FBYyxFQUFBO01GakNmO1FFcUNDLGVBQWU7UUFDZixXQUFXO1FBQ1gsa0JBQWtCLEVBQUE7TUZ2Q25CO1FFMkNDLGlCQUFpQjtRQUNqQixnQkFBZ0IsRUFBQTtJRjVDakI7TUF1Z0JHLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLHVCQUF1QjtNQUN2QixrQkFBa0IsRUFBQTtNQTNnQnJCO1FBOGdCSSxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQixZQUFZO1FBQ1osa0NBQWtDO1FBQ2xDLGFBQWE7UUFDYixlQUFlLEVBQUE7UUFwaEJuQjtVQXVoQkssWUFBWSxFQUFBO01BdmhCakI7UUEyaEJJLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGdCQUFnQixFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgXFxcIi4vX21peGluc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi9fYmFzZVxcXCI7XFxyXFxuXFxyXFxuLkJ0bkRpc2FibGVkIHtcXHJcXG5cXHRjdXJzb3I6IG5vLWRyb3AgIWltcG9ydGFudDtcXHJcXG5cXHRvcGFjaXR5OiAwLjIgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLndyYXAge1xcclxcblxcdG1hcmdpbjogMCBhdXRvO1xcclxcblxcdG1heC13aWR0aDogdmFyKC0td3JhcFdpZHRoKTtcXHJcXG5cXHJcXG5cXHQubmF2X2NhdGVnb3J5IHtcXHJcXG5cXHRcXHRwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7XFxyXFxuXFx0XFx0bWFyZ2luOiAwIHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pO1xcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuXFxyXFxuXFx0XFx0YSB7XFxyXFxuXFx0XFx0XFx0QGluY2x1ZGUgdW5kZXJsaW5lO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0LnJvb21faW1hZ2Uge1xcclxcblxcdFxcdG1hcmdpbjogMCB2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKTtcXHJcXG5cXHJcXG5cXHRcXHQucm9vbV9pbWFnZV9ncmlkIHtcXHJcXG5cXHRcXHRcXHRkaXNwbGF5OiBncmlkO1xcclxcblxcdFxcdFxcdGdyaWQ6IHJlcGVhdCgyLCBtaW5tYXgoMTUwcHgsIDFmcikpIC8gcmVwZWF0KDQsIG1pbm1heCgxNTBweCwgMWZyKSk7XFxyXFxuXFx0XFx0XFx0Z2FwOiAxMHB4O1xcclxcblxcclxcblxcdFxcdFxcdGltZyB7XFxyXFxuXFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdG9iamVjdC1maXQ6IGNvdmVyO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0JjpmaXJzdC1jaGlsZCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Z3JpZC1hcmVhOiBzcGFuIDIgLyBzcGFuIDI7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC5tYWluX3dyYXAge1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuXFx0XFx0Lm1haW5fbGVmdCB7XFxyXFxuXFx0XFx0XFx0d2lkdGg6IDY1JTtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7XFxyXFxuXFxyXFxuXFx0XFx0XFx0LnJvb21faGVhZGVyIHtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nLWJvdHRvbTogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKTtcXHJcXG5cXHRcXHRcXHRcXHRtYXJnaW46IDAgdmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbik7XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyLWJvdHRvbTogdmFyKC0tYm90dG9tQm9yZGVyKTtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHQucm9vbV90aXRsZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0LnJvb21faW5mbyB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Zm9udC1zaXplOiB2YXIoLS1kZXRhaWxGb250U2l6ZSk7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0LnN0YXIge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdEBpbmNsdWRlIHN0YXIoMjBweCk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdC5yYXRpbmdfY291bnQge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiB2YXIoLS1ncmF5KTtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQmOjphZnRlciB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0Y29udGVudDogXFxcIiDCtyBcXFwiO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiBibGFjaztcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdC5hZGRyZXNzIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRAaW5jbHVkZSB1bmRlcmxpbmU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0bGluZS1oZWlnaHQ6IDAuOTU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IHZhcigtLWRlZXBHcmF5KTtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHQuaG9zdF9pbmZvIHtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7XFxyXFxuXFx0XFx0XFx0XFx0bWFyZ2luOiAwIHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pO1xcclxcblxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0XFx0XFx0Ym9yZGVyLWJvdHRvbTogdmFyKC0tYm90dG9tQm9yZGVyKTtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRoZ3JvdXAge1xcclxcblxcdFxcdFxcdFxcdFxcdC51c2VybmFtZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0LnJvb21fc2hvcnRfc3BlYyB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Zm9udC1zaXplOiB2YXIoLS1kZXRhaWxGb250U2l6ZSk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdC51c2VyX3Byb2ZpbGUge1xcclxcblxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcblxcdFxcdFxcdFxcdFxcdG1pbi13aWR0aDogODBweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRoZWlnaHQ6IDgwcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogNTAlO1xcclxcblxcdFxcdFxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdC5yb29tX2RldGFpbF9pbmZvIHtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7XFxyXFxuXFx0XFx0XFx0XFx0bWFyZ2luOiAwIHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pO1xcclxcblxcdFxcdFxcdFxcdGJvcmRlci1ib3R0b206IHZhcigtLWJvdHRvbUJvcmRlcik7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0YSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0XFx0XFx0XFx0XFx0bWFyZ2luOiB2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKSAwO1xcclxcblxcdFxcdFxcdFxcdFxcdEBpbmNsdWRlIHVuZGVybGluZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHJcXG5cXHRcXHRcXHRcXHRwIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHR3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHQucm9vbV9mYWNpbGl0aWVzIHtcXHJcXG5cXHRcXHRcXHRcXHRwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7XFxyXFxuXFx0XFx0XFx0XFx0bWFyZ2luOiAwIHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pO1xcclxcblxcclxcblxcdFxcdFxcdFxcdGgzIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdFxcdFxcdFxcdFxcdHBhZGRpbmc6IDE1cHggMDtcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0LmZhY2lsaXR5X2l0ZW0ge1xcclxcblxcdFxcdFxcdFxcdFxcdEBpbmNsdWRlIGZhY2lsaXR5X3J1bGVfaXRlbTtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHQuZmFjaWxpdHlfaWNvbiB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0QGluY2x1ZGUgZmFjaWxpdHlfcnVsZV9pY29uO1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHQuZmFjaWxpdHlfZGVzY3JpcHRpb24ge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdEBpbmNsdWRlIGZhY2lsaXR5X3J1bGVfZGVzY3JpcHRpb247XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcclxcblxcdFxcdC5tYWluX3JpZ2h0IHtcXHJcXG5cXHRcXHRcXHR3aWR0aDogMzUlO1xcclxcblxcdFxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nLXRvcDogdmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKTtcXHJcXG5cXHRcXHRcXHRwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpICogMik7XFxyXFxuXFx0XFx0XFx0bWFyZ2luLXJpZ2h0OiB2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKTtcXHJcXG5cXHJcXG5cXHRcXHRcXHQucmVzZXJ2YXRpb25fd3JhcCB7XFxyXFxuXFx0XFx0XFx0XFx0cG9zaXRpb246IHN0aWNreTtcXHJcXG5cXHRcXHRcXHRcXHR0b3A6IDgwcHg7XFxyXFxuXFx0XFx0XFx0XFx0Ym94LXNoYWRvdzogdmFyKC0tYm94U2hhZG93KTtcXHJcXG5cXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMpO1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDMwcHg7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0LnJlc2VydmF0aW9uX2hlYWRlciB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFx0XFx0XFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHQucmVzZXJ2YXRpb25faGVscF90ZXh0IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0bGluZS1oZWlnaHQ6IDEuMTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRtYXgtd2lkdGg6IDIwMHB4O1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRzbWFsbCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IDEycHg7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0LnN0YXIge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdEBpbmNsdWRlIHN0YXIoMTJweCk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcdC5yYXRpbmdfY291bnQge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiB2YXIoLS1ncmF5KTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHQucmVzZXJ2YXRpb25fbWFpbiB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Ym9yZGVyOiB2YXIoLS1ib3R0b21Cb3JkZXIpO1xcclxcblxcdFxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0LnJlc2VydmF0aW9uX2l0ZW1fYm94IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQucmVzZXJ2YXRpb25faXRlbSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0QGluY2x1ZGUgcmVzZXJ2YXRpb25faXRlbTtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQmICsgLnJlc2VydmF0aW9uX2l0ZW0ge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGJvcmRlci1sZWZ0OiB2YXIoLS1ib3R0b21Cb3JkZXIpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdC5yZXNlcnZhdGlvbl9wZW9wbGUge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGJvcmRlci10b3A6IHZhcigtLWJvdHRvbUJvcmRlcik7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0QGluY2x1ZGUgcmVzZXJ2YXRpb25faXRlbTtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQucmVzZXJ2YXRpb25fZGlzcGxheSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdC5ndWVzdF9jb3VudGVyX2JveCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHJpZ2h0OiAwO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHRvcDogLTEwcHg7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0LmRpc3BsYXlfYnRuX2ljb24ge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0d2lkdGg6IDMwcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0aGVpZ2h0OiAzMHB4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGxpbmUtaGVpZ2h0OiAzMHB4O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRtYXJnaW4tbGVmdDogMTBweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRvcGFjaXR5OiAwLjU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IGJsYWNrO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQmOmhvdmVyIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRvcGFjaXR5OiAxO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQmOmFjdGl2ZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHQucmVzZXJ2YXRpb25fYnRuIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRib3JkZXI6IDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRwYWRkaW5nOiAxMHB4IDMwcHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0bWFyZ2luOiAxMHB4IDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyUmFkaXVzKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdC5yZXNlcnZhdGlvbl9wcmljZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdC5wcmljZV9jb21tZW50IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRmb250LXdlaWdodDogMzAwO1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHQucHJpY2VfaXRlbSxcXHJcXG5cXHRcXHRcXHRcXHRcXHQudG90YWxfcHJpY2Uge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdHBhZGRpbmctdG9wOiBjYWxjKHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgLyAyKTtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQucHJpY2VfbmFtZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0dGV4dC1hbGlnbjogbGVmdDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0LnByaWNlX3ZhbHVlIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHR0ZXh0LWFsaWduOiByaWdodDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdC50b3RhbF9wcmljZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRtYXJnaW4tdG9wOiBjYWxjKHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pIC8gMik7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0Ym9yZGVyLXRvcDogdmFyKC0tYm90dG9tQm9yZGVyKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdC5yZXNlcnZhdGlvbl9mb3JtIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0dG9wOiA0MCU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0cmlnaHQ6IC0xMHB4O1xcclxcblxcdFxcdFxcdFxcdFxcdHdpZHRoOiA2NjBweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRib3gtc2hhZG93OiB2YXIoLS1ib3hTaGFkb3cpO1xcclxcblxcdFxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0cGFkZGluZzogMjBweCAzMHB4O1xcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdC5mb3JtX2hlYWRlciB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHQuaGVhZGVyX3RleHQge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHdpZHRoOiA1NSU7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0LmhlYWRlcl90aXRsZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IDEuNXJlbTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0LmhlYWRlcl9ib2R5IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogdmFyKC0tZ3JheSk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdFxcdC5oZWFkZXJfaW5wdXRzIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHR3aWR0aDogNDUlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0Ym9yZGVyOiB2YXIoLS1ib3R0b21Cb3JkZXIpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQuaW5wdXRfaXRlbSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Zm9udC1zaXplOiAwLjhyZW07XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0cGFkZGluZzogMTBweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHdpZHRoOiA1MCU7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0LnJlc2VydmF0aW9uX2lucHV0IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRhbGw6IHVuc2V0O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Y3Vyc29yOiB0ZXh0O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHQuZm9ybV9tYWluIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0bWFyZ2luLXRvcDogdmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbik7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0bWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1jb250YWluZXJIb3Jpem9udGFsTWFyZ2luKSAvIDIpO1xcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdFxcdC5wYWdpbmF0aW9uX2J0bnMge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0LnBhZ2luYXRpb25fYnRuIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRhbGw6IHVuc2V0O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRmb250LXNpemU6IDEuNXJlbTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRsaW5lLWhlaWdodDogMS41cmVtO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0LmNhbGVuZGFyX3dyYXAge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdC5jYWxlbmRhcl9pdGVtIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR3aWR0aDogNDglO1xcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdC5jYWxlbmRhcl9tb250aCB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0LmNhbGVuZGFyX3JvdyB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQuY2FsZW5kYXJfZGF5IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR3aWR0aDogdmFyKC0tY2FsZW5kYXJEYXlTaXplKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRoZWlnaHQ6IHZhcigtLWNhbGVuZGFyRGF5U2l6ZSk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdCYuYXZhaWxhYmxlX2RheSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmYTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0c3BhbiB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0ZGlzcGxheTogYmxvY2s7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGxpbmUtaGVpZ2h0OiB2YXIoLS1jYWxlbmRhckRheVNpemUpO1xcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdCYuaW52YWxpZF9kYXkge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiB2YXIoLS1ncmF5KTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Ji52YWxpZF9kYXk6aG92ZXIge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQmLmNsaWNrZWQge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdCYuYXZhaWxhYmxlX2RheSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Ym9yZGVyLXJhZGl1czogNTAlIDAgMCA1MCU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdHNwYW4ge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IHdoaXRlO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGJvcmRlcjogMCAhaW1wb3J0YW50O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRjdXJzb3I6IGRlZmF1bHQgIWltcG9ydGFudDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQuZGF5bmFtZSB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Zm9udC1zaXplOiAwLjhyZW07XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0Y29sb3I6IHZhcigtLWdyYXkpO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0LmZvcm1fZm9vdGVyIHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR0ZXh0LWFsaWduOiBlbmQ7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0LmlucHV0X3Jlc2V0IHtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRhbGw6IHVuc2V0O1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMC45cmVtO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdEBpbmNsdWRlIHVuZGVybGluZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdFxcdFxcdC5mb3JtX2V4aXQge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRtYXJnaW46IDAgMTVweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRjb2xvcjogd2hpdGU7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0Ym9yZGVyOiAwO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlclJhZGl1cyk7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDcwMDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRjdXJzb3I6IHBvaW50ZXI7XFxyXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0b3V0bGluZTogbm9uZTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQucmV2aWV3X3dyYXAge1xcclxcblxcdFxcdHBhZGRpbmc6IHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgMDtcXHJcXG5cXHRcXHRtYXJnaW46IDAgdmFyKC0tY29udGFpbmVySG9yaXpvbnRhbE1hcmdpbik7XFxyXFxuXFx0XFx0Ym9yZGVyLXRvcDogdmFyKC0tYm90dG9tQm9yZGVyKTtcXHJcXG5cXHRcXHRib3JkZXItYm90dG9tOiB2YXIoLS1ib3R0b21Cb3JkZXIpO1xcclxcblxcclxcblxcdFxcdC5yZXZpZXdfdGl0bGUge1xcclxcblxcdFxcdFxcdGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcblxcdFxcdFxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFxyXFxuXFx0XFx0XFx0LnN0YXIge1xcclxcblxcdFxcdFxcdFxcdEBpbmNsdWRlIHN0YXIoaW5oZXJpdCk7XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQucmV2aWV3X2l0ZW0ge1xcclxcblxcdFxcdFxcdHBhZGRpbmc6IGNhbGModmFyKC0tY29udGFpbmVyVmVydGljYWxQYWRkaW5nKSAvIDEuNSkgMDtcXHJcXG5cXHJcXG5cXHRcXHRcXHQucmV2aWV3X2hlYWRlciB7XFxyXFxuXFx0XFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG5cXHRcXHRcXHRcXHQuZ3Vlc3RfcHJvZmlsZV9pbWcge1xcclxcblxcdFxcdFxcdFxcdFxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuXFx0XFx0XFx0XFx0XFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcblxcdFxcdFxcdFxcdFxcdHdpZHRoOiA1MHB4O1xcclxcblxcdFxcdFxcdFxcdFxcdGhlaWdodDogNTBweDtcXHJcXG5cXHRcXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdFxcdC5yZXZpZXdfaW5mbyB7XFxyXFxuXFx0XFx0XFx0XFx0XFx0cGFkZGluZy1sZWZ0OiBjYWxjKHZhcigtLWNvbnRhaW5lclZlcnRpY2FsUGFkZGluZykgLyAyKTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRkaXNwbGF5OiBmbGV4O1xcclxcblxcdFxcdFxcdFxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFx0XFx0XFx0XFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0XFx0Lmd1ZXN0X25hbWUge1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHRcXHQucmV2aWV3X2NyZWF0ZWQge1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGNvbG9yOiB2YXIoLS1ncmF5KTtcXHJcXG5cXHRcXHRcXHRcXHRcXHRcXHRmb250LXdlaWdodDogMzAwO1xcclxcblxcdFxcdFxcdFxcdFxcdFxcdGZvbnQtc2l6ZTogMC43cmVtO1xcclxcblxcdFxcdFxcdFxcdFxcdH1cXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcclxcblxcdFxcdFxcdC5yZXZpZXdfbWFpbiB7XFxyXFxuXFx0XFx0XFx0ICAgIHBhZGRpbmc6IDEwcHggMDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQucm9vbV9ydWxlIHtcXHJcXG5cXHRcXHRwYWRkaW5nOiB2YXIoLS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmcpIDA7XFxyXFxuXFx0XFx0bWFyZ2luOiAwIHZhcigtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW4pO1xcclxcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuXFx0XFx0LnJ1bGVfaGVhZGVyIHtcXHJcXG5cXHRcXHRcXHRmb250LXNpemU6IDEuM3JlbTtcXHJcXG5cXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdFxcdH1cXHJcXG5cXHJcXG5cXHRcXHQucnVsZXNfd3JhcCB7XFxyXFxuXFx0XFx0XFx0LnJ1bGVfaXRlbSB7XFxyXFxuXFx0XFx0XFx0XFx0QGluY2x1ZGUgZmFjaWxpdHlfcnVsZV9pdGVtO1xcclxcblxcclxcblxcdFxcdFxcdFxcdC5ydWxlX2ljb24ge1xcclxcblxcdFxcdFxcdFxcdFxcdEBpbmNsdWRlIGZhY2lsaXR5X3J1bGVfaWNvbjtcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0XFx0XFx0LnJ1bGVfZGVzY3JpcHRpb24ge1xcclxcblxcdFxcdFxcdFxcdFxcdEBpbmNsdWRlIGZhY2lsaXR5X3J1bGVfZGVzY3JpcHRpb247XFxyXFxuXFx0XFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdH1cXHJcXG5cXHRcXHR9XFxyXFxuXFxyXFxuXFx0XFx0Lm1lc3NhZ2Vfd3JhcCB7XFxyXFxuXFx0XFx0XFx0ZGlzcGxheTogZmxleDtcXHJcXG5cXHRcXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcdFxcdFxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcdFxcdFxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcblxcdFxcdFxcdG1hcmdpbi1sZWZ0OiAxMDBweDtcXHJcXG5cXHJcXG5cXHRcXHRcXHQubWVzc2FnZV9idG4ge1xcclxcblxcdFxcdFxcdFxcdHBhZGRpbmc6IDEwcHggNDBweDtcXHJcXG5cXHRcXHRcXHRcXHRmb250LXdlaWdodDogNzAwO1xcclxcblxcdFxcdFxcdFxcdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcblxcdFxcdFxcdFxcdG9wYWNpdHk6IDAuNTtcXHJcXG5cXHRcXHRcXHRcXHRib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXJSYWRpdXMpO1xcclxcblxcdFxcdFxcdFxcdG91dGxpbmU6IG5vbmU7XFxyXFxuXFx0XFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcclxcblxcdFxcdFxcdFxcdCY6aG92ZXIge1xcclxcblxcdFxcdFxcdFxcdFxcdG9wYWNpdHk6IDAuODtcXHJcXG5cXHRcXHRcXHRcXHR9XFxyXFxuXFx0XFx0XFx0fVxcclxcblxcdFxcdFxcdC5hbGVydCB7XFxyXFxuXFx0XFx0XFx0XFx0bWFyZ2luLXRvcDogMTBweDtcXHJcXG5cXHRcXHRcXHRcXHR3aWR0aDogMjUwcHg7XFxyXFxuXFx0XFx0XFx0XFx0Zm9udC1zaXplOiAwLjhyZW07XFxyXFxuXFx0XFx0XFx0XFx0Zm9udC13ZWlnaHQ6IDMwMDtcXHJcXG5cXHRcXHRcXHR9XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Ob3RvK1NhbnMrS1I6d2dodEAzMDA7NTAwOzcwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG46cm9vdCB7XFxyXFxuXFx0LS13cmFwV2lkdGg6IDEyMDBweDtcXHJcXG5cXHQtLWdyYXk6ICM3ZjhjOGQ7XFxyXFxuXFx0LS1kZWVwR3JheTogIzUzNWM2ODtcXHJcXG5cXHQtLXJlZDogI2ZmMzg1YztcXHJcXG5cXHQtLWJsdWU6IGxpZ2h0c2VhZ3JlZW47XFxyXFxuXFx0LS1ncmVlbjogIzIzYzM4MjtcXHJcXG5cXHQtLWNvbnRhaW5lckhvcml6b250YWxNYXJnaW46IDUwcHg7XFxyXFxuXFx0LS1jb250YWluZXJWZXJ0aWNhbFBhZGRpbmc6IDMwcHg7XFxyXFxuXFx0LS1kZXRhaWxGb250U2l6ZTogc21hbGxlcjtcXHJcXG5cXHQtLWJvdHRvbUJvcmRlcjogMXB4IHNvbGlkICNlY2YwZjE7XFxyXFxuXFx0LS1ib3JkZXJSYWRpdXM6IDEwcHg7XFxyXFxuXFx0LS1jYWxlbmRhckRheVNpemU6IDQwcHg7XFxyXFxuXFx0LS1ib3hTaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIzKTtcXHJcXG59XFxyXFxuXFxyXFxuLy8gQnJlYWtwb2ludHNcXHJcXG4kYnJlYWtwb2ludC10YWJsZXQ6IDc1OHB4O1xcclxcbiRicmVha3BvaW50LWRlc2t0b3A6IDEwMjRweDtcXHJcXG5cXHJcXG4uQUNDRVBURUQge1xcclxcblxcdGNvbG9yOiB2YXIoLS1ncmVlbikgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLlBFTkRJTkcsIC5DT01QTEVURUQge1xcclxcblxcdGNvbG9yOiB2YXIoLS1ncmF5KSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4uUkVGVVNFRCwgLkNBTkNMRUQge1xcclxcblxcdGNvbG9yOiB2YXIoLS1yZWQpICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblwiLFwiQGltcG9ydCBcXFwiLi9fYmFzZVxcXCI7XFxyXFxuXFxyXFxuQG1peGluIHRhYmxldCB7XFxyXFxuICBAbWVkaWEgKG1pbi13aWR0aDogI3skYnJlYWtwb2ludC10YWJsZXR9KSBhbmQgKG1heC13aWR0aDogI3skYnJlYWtwb2ludC1kZXNrdG9wIC0gMXB4fSkge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGRlc2t0b3Age1xcclxcbiAgQG1lZGlhIChtaW4td2lkdGg6ICN7JGJyZWFrcG9pbnQtZGVza3RvcH0pIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiB1bmRlcmxpbmUge1xcclxcblxcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuXFx0bGluZS1oZWlnaHQ6IDAuODU7XFxyXFxuXFx0dGV4dC1zaGFkb3c6IDFweCAxcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpLCAxcHggLTFweCB2YXIoLS1iYWNrZ3JvdWRDb2xvciksXFxyXFxuXFx0XFx0LTFweCAxcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpLCAtMXB4IC0xcHggdmFyKC0tYmFja2dyb3VkQ29sb3IpO1xcclxcblxcdEBjb250ZW50O1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gc3RhcigkZm9udC1zaXplKSB7XFxyXFxuXFx0Y29sb3I6IHZhcigtLXJlZCk7XFxyXFxuXFx0Zm9udC1zaXplOiAkZm9udC1zaXplO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gcmVzZXJ2YXRpb25faXRlbSB7XFxyXFxuXFx0ZmxleDogMSAxIDUwJTtcXHJcXG5cXHRwYWRkaW5nOiA1cHggMTBweDtcXHJcXG5cXHRmb250LXNpemU6IDAuOXJlbTtcXHJcXG5cXHRoZWlnaHQ6IDUwcHg7XFxyXFxuXFxyXFxuXFx0LnJlc2VydmF0aW9uX2Rpc3BsYXkge1xcclxcblxcdFxcdGNvbG9yOiB2YXIoLS1ncmF5KTtcXHJcXG5cXHRcXHRmb250LXdlaWdodDogMzAwO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGZhY2lsaXR5X3J1bGVfaXRlbSB7XFxyXFxuXFx0bWFyZ2luOiAxNXB4IDA7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBmYWNpbGl0eV9ydWxlX2ljb24ge1xcclxcblxcdGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHR3aWR0aDogNDBweDtcXHJcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbkBtaXhpbiBmYWNpbGl0eV9ydWxlX2Rlc2NyaXB0aW9uIHtcXHJcXG5cXHRtYXJnaW4tbGVmdDogMTVweDtcXHJcXG5cXHRmb250LXdlaWdodDogMzAwO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gY2hhbmdlSGVhZGVyQ29sb3Ige1xcclxcblxcdC5ib2R5X2hlYWRlciB1bCAuYWlyYm5iX2ljb24sXFxyXFxuXFx0LmJvZHlfaGVhZGVyIHVsIC5oZWFkZXJfcHJvZmlsZSAucHJvZmlsZV9pbWcge1xcclxcblxcdFxcdGNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG5cXHR9XFxyXFxuXFx0XFxyXFxuXFx0LmJvZHlfaGVhZGVyIHVsIC5yb29tX3NlYXJjaCBpIHtcXHJcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IFwiLi9zY3NzL3N0eWxlLnNjc3NcIjtcclxuaW1wb3J0ICogYXMgdXRpbCBmcm9tIFwiLi9qcy91dGlsXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbi8qXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKiBHbG9iYWwgU3RhdGVcclxuICovXHJcbmxldCBzdGF0ZSA9IHtcclxuXHRjdXJEYXRlOiBuZXcgRGF0ZSgpLFxyXG5cdHRvZGF5OiBuZXcgRGF0ZSgpLFxyXG5cdGNoZWNrSW5JZDogXCJcIixcclxuXHRjaGVja091dElkOiBcIlwiLFxyXG59O1xyXG4vKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKiogTW9kZWxcclxuICovXHJcbmNvbnN0IERhdGFDb250cm9sbGVyID0gKCgpID0+IHtcclxuXHRyZXR1cm4ge1xyXG5cdFx0Z2V0UmVzZXJ2ZWREYXlzOiBhc3luYyAoKSA9PiB7XHJcblx0XHRcdGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuXHRcdFx0Y29uc3Qgcm9vbUlkID0gdXJsLm1hdGNoKC8oPzw9cm9vbVxcLylbXFxkXSovKVswXTtcclxuXHRcdFx0Y29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG5cdFx0XHRcdGBodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3Jvb20vJHtyb29tSWR9YFxyXG5cdFx0XHQpO1xyXG5cdFx0XHRyZXR1cm4gZGF0YS5tYXAoZWwgPT4gZWwuZGF5KTtcclxuXHRcdH0sXHJcblx0XHRnZXRSZXNlcnZlUGF5bG9hZDogKCkgPT4ge1xyXG5cdFx0XHQvLyAxLiBHRVQgRELroZzrtoDthLAg7IiZ7IaMIO2VmOujqOuLuSDqsIDqsqlcclxuXHRcdFx0Y29uc3Qgcm9vbVByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyb29tUHJpY2VEQlwiKS52YWx1ZTtcclxuXHJcblx0XHRcdC8vIDIuIOqzhOyCsFxyXG5cdFx0XHRjb25zdCByb29tTmlnaHQgPVxyXG5cdFx0XHRcdChuZXcgRGF0ZShzdGF0ZS5jaGVja091dElkKSAtIG5ldyBEYXRlKHN0YXRlLmNoZWNrSW5JZCkpIC9cclxuXHRcdFx0XHQoMTAwMCAqIDYwICogNjAgKiAyNCk7XHJcblx0XHRcdGNvbnN0IHRvdGFsUHJpY2UgPSByb29tTmlnaHQgKiByb29tUHJpY2U7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cm9vbVByaWNlLFxyXG5cdFx0XHRcdHJvb21OaWdodCxcclxuXHRcdFx0XHR0b3RhbFByaWNlLFxyXG5cdFx0XHR9O1xyXG5cdFx0fSxcclxuXHRcdGdldE1heFBlcnNvbjogKCkgPT4ge1xyXG5cdFx0XHRjb25zdCBtYXhQZXJzb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Jvb21NYXhQZXJzb25EQlwiKS52YWx1ZTtcclxuXHRcdFx0cmV0dXJuIG1heFBlcnNvbjtcclxuXHRcdH0sXHJcblx0fTtcclxufSkoKTtcclxuXHJcbi8qXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKiBWaWV3XHJcbiAqL1xyXG5cclxuY29uc3QgVUlDb250cm9sbGVyID0gKCgpID0+IHtcclxuXHRjb25zdCBET01TdHJpbmcgPSB7XHJcblx0XHRjdXJDYWxlbmRhcjogXCIjY3VyQ2FsZW5kYXJcIixcclxuXHRcdG5leHRDYWxlbmRhcjogXCIjbmV4dENhbGVuZGFyXCIsXHJcblx0XHRleGl0QnRuOiBcIiNmb3JtRXhpdEJ0blwiLFxyXG5cdFx0cmVzZXJ2ZUNvbnRhaW5lcjogXCIjcmVzZXJ2YXRpb25XcmFwXCIsXHJcblx0XHRyZXNlcnZlUG9wdXBDb250YWluZXI6IFwiI3Jlc2VydmF0aW9uRm9ybVwiLFxyXG5cdFx0cmVzZXJ2ZUNoZWNrQm94OiBcIiNyZXNlcnZhdGlvbkJveFwiLFxyXG5cdFx0cmVzZXJ2ZVJlbmRlckJ0bjogXCIjcmVzZXJ2YXRpb25CdG5cIixcclxuXHRcdE1vbnRoWWVhcjogXCIuY2FsZW5kYXJfbW9udGhcIixcclxuXHRcdG5leHRQYWdlOiBcIiNuZXh0UGFnZVwiLFxyXG5cdFx0cHJldlBhZ2U6IFwiI3ByZXZQYWdlXCIsXHJcblx0XHRjYWxlbmRhckJveDogXCIuY2FsZW5kYXJfYm94XCIsXHJcblx0XHRjYWxlbmRhckNvbnRhaW5lcjogXCIjY2FsZW5kYXJXcmFwXCIsXHJcblx0XHRjaGVja0luSW5wdXQ6IFwiI2NoZWNrSW5JbnB1dFwiLFxyXG5cdFx0Y2hlY2tPdXRJbnB1dDogXCIjY2hlY2tPdXRJbnB1dFwiLFxyXG5cdFx0dmFsaWREYXk6IFwiLnZhbGlkX2RheVwiLFxyXG5cdFx0Y2hlY2tJbkRpc3BsYXk6IFwiI2NoZWNrSW5EaXNwbGF5XCIsXHJcblx0XHRjaGVja091dERpc3BsYXk6IFwiI2NoZWNrT3V0RGlzcGxheVwiLFxyXG5cdFx0Z3Vlc3RDb3VudGVyQm94OiBcIiNndWVzdENvdW50ZXJCb3hcIixcclxuXHRcdGd1ZXN0Q291bnQ6IFwiI2d1ZXN0Q291bnRcIixcclxuXHRcdHJlc2V0SW5wdXQ6IFwiI3Jlc2V0SW5wdXRcIixcclxuXHRcdGd1ZXN0UGx1c0J0bjogXCIjZ3Vlc3RQbHVzQnRuXCIsXHJcblx0XHRndWVzdE1pbnVzQnRuOiBcIiNndWVzdE1pbnVzQnRuXCIsXHJcblx0XHRyZXNlcnZlUHJpY2VDb250YWluZXI6IFwiI3Jlc2VydmVQcmljZUNvbnRhaW5lclwiLFxyXG5cdFx0cm9vbVByaWNlOiBcIiNyb29tUHJpY2VcIixcclxuXHRcdHJvb21OaWdodDogXCIjcm9vbU5pZ2h0XCIsXHJcblx0XHRwcmljZVZhbHVlOiBcIiNwcmljZVZhbHVlXCIsXHJcblx0XHR0b3RhbFByaWNlOiBcIiN0b3RhbFByaWNlXCIsXHJcblx0XHRyZXNlcnZlSGVscFRleHQ6IFwiI3Jlc2VydmVIZWxwVGV4dFwiLFxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGRpc3BsYXlNb250aCA9ICh5ZWFyLCBtb250aCkgPT4ge1xyXG5cdFx0Y29uc3QgW2N1ck1vbnRoLCBuZXh0TW9udGhdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuXHRcdFx0RE9NU3RyaW5nLk1vbnRoWWVhclxyXG5cdFx0KTtcclxuXHRcdGN1ck1vbnRoLnRleHRDb250ZW50ID0gYCR7bW9udGh97JuUICR7eWVhcn1gO1xyXG5cdFx0bmV4dE1vbnRoLnRleHRDb250ZW50ID1cclxuXHRcdFx0bW9udGggPT09IDEyID8gYDHsm5QgJHt5ZWFyICsgMX1gIDogYCR7bW9udGggKyAxfeyblCAke3llYXJ9YDtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBzZXRCdXR0b25TdHlsZSA9ICh5ZWFyLCBtb250aCkgPT4ge1xyXG5cdFx0Y29uc3QgcHJldkJ0bk5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKERPTVN0cmluZy5wcmV2UGFnZSk7XHJcblx0XHRjb25zdCBDTF9ESVNBQkxFRCA9IFwiQnRuRGlzYWJsZWRcIjtcclxuXHRcdGlmIChcclxuXHRcdFx0eWVhciA9PT0gc3RhdGUudG9kYXkuZ2V0RnVsbFllYXIoKSAmJlxyXG5cdFx0XHRtb250aCA9PT0gc3RhdGUudG9kYXkuZ2V0TW9udGgoKSArIDFcclxuXHRcdCkge1xyXG5cdFx0XHRwcmV2QnRuTm9kZS5kaXNhYmxlZCA9IHRydWU7XHJcblx0XHRcdHByZXZCdG5Ob2RlLmNsYXNzTGlzdC5hZGQoQ0xfRElTQUJMRUQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cHJldkJ0bk5vZGUuZGlzYWJsZWQgPSBmYWxzZTtcclxuXHRcdFx0cHJldkJ0bk5vZGUuY2xhc3NMaXN0LnJlbW92ZShDTF9ESVNBQkxFRCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3QgY3JlYXRlRGF5SFRNTCA9ICh5ZWFyLCBtb250aCwgZGF5KSA9PiB7XHJcblx0XHRjb25zdCB7IHRvZGF5IH0gPSBzdGF0ZTtcclxuXHRcdGxldCBDTF9EQVkgPSBcInZhbGlkX2RheVwiO1xyXG5cdFx0aWYgKG1vbnRoID09PSB0b2RheS5nZXRNb250aCgpICsgMSkge1xyXG5cdFx0XHRpZiAoZGF5IDwgdG9kYXkuZ2V0RGF0ZSgpKSBDTF9EQVkgPSBcImludmFsaWRfZGF5XCI7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYFxyXG5cdFx0PGRpdiBjbGFzcz1cImNhbGVuZGFyX2RheVwiPlxyXG5cdFx0XHQ8c3BhbiBjbGFzcz1cIiR7Q0xfREFZfVwiIGlkPVwiJHttb250aCA9PSAxMz8geWVhcisxOiB5ZWFyfS0ke21vbnRoID09IDEzPyBcIjAxXCI6IHV0aWwuc2V0TW9udGhDb3VudChtb250aCl9LSR7dXRpbC5zZXRGaXhEYXlDb3VudChkYXkpfVwiPlxyXG5cdFx0XHRcdCR7ZGF5fVxyXG5cdFx0XHQ8L3NwYW4+XHJcblx0XHQ8L2Rpdj5gO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGNyZWF0ZUNhbGVuZGFySFRNTCA9ICh5ZWFyLCBtb250aCkgPT4ge1xyXG5cdFx0Y29uc3QgZmlyc3REYXkgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIDEpO1xyXG5cdFx0Y29uc3QgbGFzdERheSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAwKS5nZXREYXRlKCk7XHJcblx0XHRjb25zdCBmaXJzdERheU5hbWUgPSBmaXJzdERheS5nZXREYXkoKTsgLy8gIDB+NlxyXG5cclxuXHRcdGxldCBzdGFydERheUNvdW50ID0gMTtcclxuXHRcdGxldCBtYXJrdXAgPSBcIjxkaXYgY2xhc3M9J2NhbGVuZGFyX2JveCc+XCI7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xyXG5cdFx0XHRtYXJrdXAgKz0gXCI8ZGl2IGNsYXNzPSdjYWxlbmRhcl9yb3cnPlwiO1xyXG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IDc7IGorKykge1xyXG5cdFx0XHRcdC8vICDsnbTrsogg64usIOyLnOyekSDsmpTsnbwg7J207KCE7J28IOuVjFxyXG5cdFx0XHRcdGlmIChpID09IDAgJiYgaiA8IGZpcnN0RGF5TmFtZSkge1xyXG5cdFx0XHRcdFx0bWFya3VwICs9IGA8ZGl2IGNsYXNzPVwiY2FsZW5kYXJfZGF5XCI+PHNwYW4+PC9zcGFuPjwvZGl2PmA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vICDsnbTrsogg64usIOyLnOyekSDsmpTsnbwg7J207ZuE7J28IOuVjFxyXG5cdFx0XHRcdGVsc2UgaWYgKHN0YXJ0RGF5Q291bnQgPD0gbGFzdERheSkge1xyXG5cdFx0XHRcdFx0bWFya3VwICs9IGNyZWF0ZURheUhUTUwoeWVhciwgbW9udGgsIHN0YXJ0RGF5Q291bnQrKyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdG1hcmt1cCArPSBcIjwvZGl2PlwiO1xyXG5cdFx0fVxyXG5cdFx0bWFya3VwICs9IFwiPC9kaXY+XCI7XHJcblx0XHRyZXR1cm4gbWFya3VwO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IGFkZEludmFsaWREYXlDbGFzcyA9IChjbGVhbmVkRGF5cykgPT4ge1xyXG5cdFx0Y29uc3QgQ0xfVkFMSURfREFZID0gXCJ2YWxpZF9kYXlcIjtcclxuXHRcdGNvbnN0IENMX0lOVkFMSURfREFZID0gXCJpbnZhbGlkX2RheVwiO1xyXG5cclxuXHRcdGNsZWFuZWREYXlzLmZvckVhY2goKGVsKSA9PiB7XHJcblx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoQ0xfSU5WQUxJRF9EQVkpO1xyXG5cdFx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKENMX1ZBTElEX0RBWSk7XHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0Z2V0RE9NU3RyaW5nOiAoKSA9PiBET01TdHJpbmcsXHJcblx0XHRjbG9zZVBvcHVwOiAoZXZlbnQpID0+IHtcclxuXHRcdFx0aWYgKGV2ZW50KSBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdERPTVN0cmluZy5yZXNlcnZlUG9wdXBDb250YWluZXJcclxuXHRcdFx0KS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblx0XHR9LFxyXG5cclxuXHRcdG9wZW5Qb3B1cDogKCkgPT5cclxuXHRcdFx0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0RE9NU3RyaW5nLnJlc2VydmVQb3B1cENvbnRhaW5lclxyXG5cdFx0XHQpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCIpLFxyXG5cclxuXHRcdGlzQ2xpY2tlZENoZWNrSW5BbmRPdXQ6IChldmVudCkgPT5cclxuXHRcdFx0ZXZlbnQudGFyZ2V0Lm1hdGNoZXMoYCR7RE9NU3RyaW5nLnJlc2VydmVDaGVja0JveH0gKmApLFxyXG5cclxuXHRcdGlzQ2xpY2tlZFJlbmRlckJ0bjogKGV2ZW50KSA9PlxyXG5cdFx0XHRldmVudC50YXJnZXQubWF0Y2hlcyhET01TdHJpbmcucmVzZXJ2ZVJlbmRlckJ0biksXHJcblxyXG5cdFx0cmVuZGVyQ2FsZW5kYXI6ICh5ZWFyLCBtb250aCkgPT4ge1xyXG5cdFx0XHRkaXNwbGF5TW9udGgoeWVhciwgbW9udGgpO1xyXG5cdFx0XHRzZXRCdXR0b25TdHlsZSh5ZWFyLCBtb250aCk7XHJcblxyXG5cdFx0XHRkb2N1bWVudFxyXG5cdFx0XHRcdC5xdWVyeVNlbGVjdG9yKERPTVN0cmluZy5jdXJDYWxlbmRhcilcclxuXHRcdFx0XHQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG5cdFx0XHRcdFx0XCJiZWZvcmVlbmRcIixcclxuXHRcdFx0XHRcdGNyZWF0ZUNhbGVuZGFySFRNTCh5ZWFyLCBtb250aClcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHRkb2N1bWVudFxyXG5cdFx0XHRcdC5xdWVyeVNlbGVjdG9yKERPTVN0cmluZy5uZXh0Q2FsZW5kYXIpXHJcblx0XHRcdFx0Lmluc2VydEFkamFjZW50SFRNTChcclxuXHRcdFx0XHRcdFwiYmVmb3JlZW5kXCIsXHJcblx0XHRcdFx0XHRjcmVhdGVDYWxlbmRhckhUTUwoeWVhciwgbW9udGggKyAxKVxyXG5cdFx0XHRcdCk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGNsZWFyQ2FsZW5kYXI6ICgpID0+IHtcclxuXHRcdFx0Y29uc3QgW2N1ckNhbGVuZGFyLCBuZXh0Q2FsZW5kYXJdID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuXHRcdFx0XHRET01TdHJpbmcuY2FsZW5kYXJCb3hcclxuXHRcdFx0KTtcclxuXHRcdFx0Y3VyQ2FsZW5kYXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjdXJDYWxlbmRhcik7XHJcblx0XHRcdG5leHRDYWxlbmRhci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5leHRDYWxlbmRhcik7XHJcblx0XHR9LFxyXG5cclxuXHRcdGJlRXhjZXB0UmVzZXJ2ZWREYXk6IChyZXNlcnZlZERheXMpID0+IHtcclxuXHRcdFx0Y29uc3QgY2FsZW5kYXJXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHRET01TdHJpbmcuY2FsZW5kYXJDb250YWluZXJcclxuXHRcdFx0KTtcclxuXHRcdFx0Y29uc3QgcmVuZGVyZWREYXlzID0gQXJyYXkuZnJvbShcclxuXHRcdFx0XHRjYWxlbmRhcldyYXAucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIilcclxuXHRcdFx0KTtcclxuXHRcdFx0Y29uc3QgY2xlYW5lZERheXMgPSByZW5kZXJlZERheXMuZmlsdGVyKChkYXkpID0+XHJcblx0XHRcdFx0cmVzZXJ2ZWREYXlzLmluY2x1ZGVzKGRheS5pZClcclxuXHRcdFx0KTtcclxuXHRcdFx0YWRkSW52YWxpZERheUNsYXNzKGNsZWFuZWREYXlzKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0cmVuZGVySW52YWxpZERheTogKGNsaWNrZWRJZCwgcmVzZXJ2ZWREYXlzID0gbnVsbCkgPT4ge1xyXG5cdFx0XHRjb25zdCBjYWxlbmRhcldyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdERPTVN0cmluZy5jYWxlbmRhckNvbnRhaW5lclxyXG5cdFx0XHQpO1xyXG5cdFx0XHRjb25zdCBkYXlzID0gQXJyYXkuZnJvbShjYWxlbmRhcldyYXAucXVlcnlTZWxlY3RvckFsbChcInNwYW5cIikpO1xyXG5cdFx0XHRsZXQgY2xlYW5lZERheXM7XHJcblxyXG5cdFx0XHRpZiAoc3RhdGUuY2hlY2tJbklkID09PSBcIlwiKSB7XHJcblx0XHRcdFx0Ly8gMS4gR0VUIO2BtOumreuQnCDrgqDsp5wg7J207ZuE7J2YIOyYiOyVveuQnCDsoJzsnbwg67mg66W4IOuCoOynnFxyXG5cdFx0XHRcdGNvbnN0IGxhdGVzdERheSA9IHJlc2VydmVkRGF5c1xyXG5cdFx0XHRcdFx0LmZpbHRlcigoZGF5c3RyKSA9PiBjbGlja2VkSWQgPCBkYXlzdHIpXHJcblx0XHRcdFx0XHQuc29ydCgpWzBdO1xyXG5cdFx0XHRcdC8vIDIuIOyytO2BrOyVhOybgyDrtojqsIDriqXtlZwg64Kg7KecIOuniO2BrFxyXG5cdFx0XHRcdGNsZWFuZWREYXlzID0gZGF5cy5maWx0ZXIoXHJcblx0XHRcdFx0XHQoZGF5KSA9PiBkYXkuaWQgPCBjbGlja2VkSWQgfHwgbGF0ZXN0RGF5IDwgZGF5LmlkXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0XHQvLyAzLiDsmIjsmbgpIOyytO2BrOyduCDrgqDsp5wg7JWe65Kk66GcIOu2iOqwgOuKpe2VnCDrgqDsp5zsnbwg6rK97JqwXHJcblx0XHRcdFx0Y29uc3QgY2xpY2tlZERhdGUgPSBuZXcgRGF0ZShjbGlja2VkSWQpO1xyXG5cdFx0XHRcdGNsaWNrZWREYXRlLnNldERhdGUoY2xpY2tlZERhdGUuZ2V0RGF0ZSgpICsgMSk7XHJcblx0XHRcdFx0Y29uc3Qgb25lUGx1c0RheSA9IGNsaWNrZWREYXRlLnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcclxuXHRcdFx0XHRpZiAocmVzZXJ2ZWREYXlzLmluY2x1ZGVzKG9uZVBsdXNEYXkpKSB7XHJcblx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvbmVQbHVzRGF5KS5jbGFzc0xpc3QucmVtb3ZlKFwiaW52YWxpZF9kYXlcIik7XHJcblx0XHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZChvbmVQbHVzRGF5KS5jbGFzc0xpc3QuYWRkKFwidmFsaWRfZGF5XCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRhZGRJbnZhbGlkRGF5Q2xhc3MoY2xlYW5lZERheXMpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNsZWFuZWREYXlzID0gZGF5cy5maWx0ZXIoKGRheSkgPT4gZGF5LmlkID4gY2xpY2tlZElkKTtcclxuXHRcdFx0XHRhZGRJbnZhbGlkRGF5Q2xhc3MoY2xlYW5lZERheXMpO1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdHNldENoZWNrSW5JbnB1dDogKGlkKSA9PlxyXG5cdFx0XHQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHRET01TdHJpbmcuY2hlY2tJbklucHV0XHJcblx0XHRcdCkudmFsdWUgPSB1dGlsLmZvcm1hdERhc2hUb0RvdChpZCkpLFxyXG5cdFx0c2V0Q2hlY2tPdXRJbnB1dDogKGlkKSA9PlxyXG5cdFx0XHQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHRET01TdHJpbmcuY2hlY2tPdXRJbnB1dFxyXG5cdFx0XHQpLnZhbHVlID0gdXRpbC5mb3JtYXREYXNoVG9Eb3QoaWQpKSxcclxuXHJcblx0XHRyZW5kZXJEYXlCYWNrZ3JvdW5kOiAoaWQpID0+IHtcclxuXHRcdFx0Y29uc3QgZGF5cyA9IEFycmF5LmZyb20oXHJcblx0XHRcdFx0ZG9jdW1lbnRcclxuXHRcdFx0XHRcdC5xdWVyeVNlbGVjdG9yKERPTVN0cmluZy5jYWxlbmRhckNvbnRhaW5lcilcclxuXHRcdFx0XHRcdC5xdWVyeVNlbGVjdG9yQWxsKERPTVN0cmluZy52YWxpZERheSlcclxuXHRcdFx0KTtcclxuXHRcdFx0Y29uc3QgQ0xfQVZBSUxfREFZID0gXCJhdmFpbGFibGVfZGF5XCI7XHJcblx0XHRcdGRheXMubWFwKChlbCkgPT4ge1xyXG5cdFx0XHRcdGVsLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZShDTF9BVkFJTF9EQVkpO1xyXG5cdFx0XHRcdHJldHVybiBlbDtcclxuXHRcdFx0fSlcclxuXHRcdFx0XHQuZmlsdGVyKChlbCkgPT4gc3RhdGUuY2hlY2tJbklkIDw9IGVsLmlkICYmIGVsLmlkIDw9IGlkKVxyXG5cdFx0XHRcdC5mb3JFYWNoKChlbCkgPT4ge1xyXG5cdFx0XHRcdFx0ZWwucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKENMX0FWQUlMX0RBWSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGNsZWFyQ2hlY2tEaXNwbGF5OiAoKSA9PiB7XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9NU3RyaW5nLmNoZWNrSW5EaXNwbGF5KS50ZXh0Q29udGVudCA9XHJcblx0XHRcdFx0XCLrgqDsp5zshKDtg51cIjtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihET01TdHJpbmcuY2hlY2tPdXREaXNwbGF5KS50ZXh0Q29udGVudCA9XHJcblx0XHRcdFx0XCLrgqDsp5zshKDtg51cIjtcclxuXHRcdH0sXHJcblxyXG5cdFx0cmVuZGVyQ2hlY2tJbkRpc3BsYXk6IChpZCkgPT5cclxuXHRcdFx0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0RE9NU3RyaW5nLmNoZWNrSW5EaXNwbGF5XHJcblx0XHRcdCkudGV4dENvbnRlbnQgPSB1dGlsLmZvcm1hdERhc2hUb0RvdChpZCkpLFxyXG5cdFx0cmVuZGVyQ2hlY2tPdXREaXNwbGF5OiAoaWQpID0+XHJcblx0XHRcdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdERPTVN0cmluZy5jaGVja091dERpc3BsYXlcclxuXHRcdFx0KS50ZXh0Q29udGVudCA9IHV0aWwuZm9ybWF0RGFzaFRvRG90KGlkKSksXHJcblx0XHRyZW5kZXJHdWVzdENvdW50OiAoZXZlbnQsIG1heFBlcnNvbiwgbWluUGVyc29uID0gMSkgPT4ge1xyXG5cdFx0XHRjb25zdCBndWVzdFZhbHVlTm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9NU3RyaW5nLmd1ZXN0Q291bnQpO1xyXG5cdFx0XHRjb25zdCBwbHVzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihET01TdHJpbmcuZ3Vlc3RQbHVzQnRuKTtcclxuXHRcdFx0Y29uc3QgbWludXNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKERPTVN0cmluZy5ndWVzdE1pbnVzQnRuKTtcclxuXHRcdFx0Y29uc3QgQ0xfRElTQUJMRUQgPSBcIkJ0bkRpc2FibGVkXCI7XHJcblx0XHRcdGlmIChldmVudC50YXJnZXQubWF0Y2hlcyhET01TdHJpbmcuZ3Vlc3RQbHVzQnRuKSkge1xyXG5cdFx0XHRcdGlmIChndWVzdFZhbHVlTm9kZS50ZXh0Q29udGVudCA8IG1heFBlcnNvbikge1xyXG5cdFx0XHRcdFx0Z3Vlc3RWYWx1ZU5vZGUudGV4dENvbnRlbnQgPSArK2d1ZXN0VmFsdWVOb2RlLnRleHRDb250ZW50O1xyXG5cdFx0XHRcdFx0bWludXNCdG4uY2xhc3NMaXN0LnJlbW92ZShDTF9ESVNBQkxFRCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChndWVzdFZhbHVlTm9kZS50ZXh0Q29udGVudCA9PSBtYXhQZXJzb24pIHtcclxuXHRcdFx0XHRcdHBsdXNCdG4uY2xhc3NMaXN0LmFkZChDTF9ESVNBQkxFRCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKERPTVN0cmluZy5ndWVzdE1pbnVzQnRuKSkge1xyXG5cdFx0XHRcdGlmIChndWVzdFZhbHVlTm9kZS50ZXh0Q29udGVudCA+IG1pblBlcnNvbikge1xyXG5cdFx0XHRcdFx0Z3Vlc3RWYWx1ZU5vZGUudGV4dENvbnRlbnQgPSAtLWd1ZXN0VmFsdWVOb2RlLnRleHRDb250ZW50O1xyXG5cdFx0XHRcdFx0cGx1c0J0bi5jbGFzc0xpc3QucmVtb3ZlKENMX0RJU0FCTEVEKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKGd1ZXN0VmFsdWVOb2RlLnRleHRDb250ZW50ID09IG1pblBlcnNvbikge1xyXG5cdFx0XHRcdFx0bWludXNCdG4uY2xhc3NMaXN0LmFkZChDTF9ESVNBQkxFRCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdGdldEd1ZXN0Q291bnQ6ICgpID0+XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9NU3RyaW5nLmd1ZXN0Q291bnQpLnRleHRDb250ZW50LFxyXG5cclxuXHRcdHJlbmRlclByaWNlOiAocGF5bG9hZCkgPT4ge1xyXG5cdFx0XHRjb25zdCB7IHJvb21QcmljZSwgcm9vbU5pZ2h0LCB0b3RhbFByaWNlIH0gPSBwYXlsb2FkO1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdERPTVN0cmluZy5yZXNlcnZlUHJpY2VDb250YWluZXJcclxuXHRcdFx0KS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKERPTVN0cmluZy5yZXNlcnZlUmVuZGVyQnRuKS50ZXh0Q29udGVudCA9XHJcblx0XHRcdFx0XCLsmIjslb3tlZjquLBcIjtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihET01TdHJpbmcucm9vbU5pZ2h0KS50ZXh0Q29udGVudCA9XHJcblx0XHRcdFx0cm9vbU5pZ2h0ICsgXCLrsJVcIjtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHRET01TdHJpbmcucm9vbVByaWNlXHJcblx0XHRcdCkudGV4dENvbnRlbnQgPSB1dGlsLmZvcm1hdFdvbihyb29tUHJpY2UpO1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdERPTVN0cmluZy5wcmljZVZhbHVlXHJcblx0XHRcdCkudGV4dENvbnRlbnQgPSB1dGlsLmZvcm1hdFdvbih0b3RhbFByaWNlKTtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuXHRcdFx0XHRET01TdHJpbmcudG90YWxQcmljZVxyXG5cdFx0XHQpLnRleHRDb250ZW50ID0gdXRpbC5mb3JtYXRXb24odG90YWxQcmljZSArIDUwMDApO1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG5cdFx0XHRcdERPTVN0cmluZy5yZXNlcnZlSGVscFRleHRcclxuXHRcdFx0KS5pbm5lckhUTUwgPSBgJHt1dGlsLmZvcm1hdFdvbihyb29tUHJpY2UpfTxzbWFsbD4v67CVPC9zbWFsbD5gO1xyXG5cdFx0fSxcclxuXHJcblx0XHRjbGVhclByaWNlQ29udGFpbmVyOiAoKSA9PiB7XHJcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcblx0XHRcdFx0RE9NU3RyaW5nLnJlc2VydmVQcmljZUNvbnRhaW5lclxyXG5cdFx0XHQpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihET01TdHJpbmcucmVzZXJ2ZUhlbHBUZXh0KS50ZXh0Q29udGVudCA9XHJcblx0XHRcdFx0XCLsmpTquIjsnYQg7ZmV7J247ZWY66Ck66m0IOuCoOynnOulvCDsnoXroKXtlZjshLjsmpQuXCI7XHJcblx0XHR9LFxyXG5cdH07XHJcbn0pKCk7XHJcblxyXG4vKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKiogQ29udHJvbGxlclxyXG4gKi9cclxuXHJcbmNvbnN0IENvbnRyb2xsZXIgPSAoKERhdGFDdHJsLCBVSUN0cmwpID0+IHtcclxuXHRjb25zdCBET00gPSBVSUN0cmwuZ2V0RE9NU3RyaW5nKCk7XHJcblx0Y29uc3Qgc2V0RXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XHJcblx0XHQvLyDtj7wg64ur6riwIO2BtOumrVxyXG5cdFx0ZG9jdW1lbnRcclxuXHRcdFx0LnF1ZXJ5U2VsZWN0b3IoRE9NLmV4aXRCdG4pXHJcblx0XHRcdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGlja0Zvcm1FeGl0QnRuKTtcclxuXHRcdC8vIO2PvCDsl7TquLAg7YG066atXHJcblx0XHRkb2N1bWVudFxyXG5cdFx0XHQucXVlcnlTZWxlY3RvcihET00ucmVzZXJ2ZUNvbnRhaW5lcilcclxuXHRcdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrUmVzZXJ2ZUNvbnRhaW5lcik7XHJcblx0XHQvLyDri6zroKUg64SY6riw6riwIO2BtOumrVxyXG5cdFx0ZG9jdW1lbnRcclxuXHRcdFx0LnF1ZXJ5U2VsZWN0b3IoRE9NLnByZXZQYWdlKVxyXG5cdFx0XHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQ2xpY2tQYWdlQnRuKTtcclxuXHRcdGRvY3VtZW50XHJcblx0XHRcdC5xdWVyeVNlbGVjdG9yKERPTS5uZXh0UGFnZSlcclxuXHRcdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrUGFnZUJ0bik7XHJcblx0XHQvLyDri6zroKUg64Kg7KecIO2BtOumrVxyXG5cdFx0ZG9jdW1lbnRcclxuXHRcdFx0LnF1ZXJ5U2VsZWN0b3IoRE9NLmNhbGVuZGFyQ29udGFpbmVyKVxyXG5cdFx0XHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQ2xpY2tDYWxDb250YWluZXIpO1xyXG5cdFx0Ly8g7LK07YGs7JWE7JuDIOuCoOynnCDqs6Drpbwg65WMIOuniOyasOyKpCDsmKTrsoRcclxuXHRcdGRvY3VtZW50XHJcblx0XHRcdC5xdWVyeVNlbGVjdG9yKERPTS5jYWxlbmRhckNvbnRhaW5lcilcclxuXHRcdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgb25Nb3VzZW92ZXJDYWxDb250YWluZXIpO1xyXG5cdFx0Ly8g6rKM7Iqk7Yq4IOy5tOyatO2EsFxyXG5cdFx0ZG9jdW1lbnRcclxuXHRcdFx0LnF1ZXJ5U2VsZWN0b3IoRE9NLmd1ZXN0Q291bnRlckJveClcclxuXHRcdFx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkNsaWNrR3Vlc3RDb3VudGVyQm94KTtcclxuXHRcdC8vIOuCoOynnCDtj7wg66as7IWLIO2BtOumrVxyXG5cdFx0ZG9jdW1lbnRcclxuXHRcdFx0LnF1ZXJ5U2VsZWN0b3IoRE9NLnJlc2V0SW5wdXQpXHJcblx0XHRcdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25DbGlja1Jlc2V0QnRuKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBjbGVhclN0YXRlID0gKCkgPT4ge1xyXG5cdFx0c3RhdGUgPSB7IC4uLnN0YXRlLCBjaGVja0luSWQ6IFwiXCIsIGNoZWNrT3V0SWQ6IFwiXCIgfTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBvbkNsaWNrUmVzZXRCdG4gPSAoKSA9PiB7XHJcblx0XHQvLyAxLiBzdGFhdGUg7LSI6riw7ZmUXHJcblx0XHRjbGVhclN0YXRlKCk7XHJcblx0XHQvLyAyLiBVSSDstIjquLDtmZQg67CPIOuPmeq4sO2ZlFxyXG5cdFx0VUlDdHJsLmNsZWFyQ2FsZW5kYXIoKTtcclxuXHRcdFVJQ3RybC5jbGVhckNoZWNrRGlzcGxheSgpO1xyXG5cclxuXHRcdC8vIDMuIOuCoOynnCDtj7wg7LSI6riw7ZmUXHJcblx0XHRzZXRJbml0YWlsQ2FsZW5kYXIoKTtcclxuXHJcblx0XHQvLyA0LiDsmIjslb3tlZjquLAg7Y+8IOuLq+q4sFxyXG5cdFx0VUlDdHJsLmNsZWFyUHJpY2VDb250YWluZXIoKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBvbkNsaWNrR3Vlc3RDb3VudGVyQm94ID0gKGV2ZW50KSA9PlxyXG5cdFx0VUlDdHJsLnJlbmRlckd1ZXN0Q291bnQoZXZlbnQsIERhdGFDdHJsLmdldE1heFBlcnNvbigpKTtcclxuXHJcblx0Y29uc3Qgb25Nb3VzZW92ZXJDYWxDb250YWluZXIgPSAoZXZlbnQpID0+IHtcclxuXHRcdGlmIChzdGF0ZS5jaGVja0luSWQgIT09IFwiXCIgJiYgc3RhdGUuY2hlY2tPdXRJZCA9PSBcIlwiKSB7XHJcblx0XHRcdGlmIChldmVudC50YXJnZXQubWF0Y2hlcyhET00udmFsaWREYXkpKSB7XHJcblx0XHRcdFx0Y29uc3QgaWQgPSBldmVudC50YXJnZXQuaWQ7XHJcblx0XHRcdFx0VUlDdHJsLnJlbmRlckRheUJhY2tncm91bmQoaWQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb25DbGlja0NhbENvbnRhaW5lciA9IGFzeW5jIChldmVudCkgPT4ge1xyXG5cdFx0aWYgKHN0YXRlLmNoZWNrT3V0SWQgIT09IFwiXCIpIHJldHVybjtcclxuXHRcdGNvbnN0IGNsaWNrZWREYXkgPSBldmVudC50YXJnZXQuY2xvc2VzdChcIi5jYWxlbmRhcl9kYXkgc3Bhbi52YWxpZF9kYXlcIik7XHJcblx0XHQvL1x07LK07YGs7JWE7JuDIO2BtOumrVxyXG5cdFx0aWYgKGNsaWNrZWREYXkgIT09IG51bGwpIHtcclxuXHRcdFx0Y29uc3QgaWQgPSBjbGlja2VkRGF5LmlkO1xyXG5cdFx0XHRjbGlja2VkRGF5LnBhcmVudE5vZGUuY2xhc3NMaXN0LmFkZChcImNsaWNrZWRcIik7XHJcblx0XHRcdGlmIChzdGF0ZS5jaGVja0luSWQgIT09IFwiXCIpIHtcclxuXHRcdFx0XHQvLyAxLiDtgbTrpq3rkJwg64W465OcIGlkIOydtO2bhCDrgqDsp5wgaW52YWxpZFxyXG5cdFx0XHRcdFVJQ3RybC5yZW5kZXJJbnZhbGlkRGF5KGlkKTtcclxuXHRcdFx0XHQvLyAyLiDssrTtgazslYTsm4Mg7J247ZKL7JeQIOuCoOynnCDrj5nquLDtmZRcclxuXHRcdFx0XHRVSUN0cmwuc2V0Q2hlY2tPdXRJbnB1dChpZCk7XHJcblx0XHRcdFx0Ly8gMy4g7LK07YGs7JWE7JuDIOuUlOyKpO2UjOugiOydtCDroIzrjZTrp4FcclxuXHRcdFx0XHRVSUN0cmwucmVuZGVyQ2hlY2tPdXREaXNwbGF5KGlkKTtcclxuXHRcdFx0XHQvLyA0LiDtj7wg64ur6riwXHJcblx0XHRcdFx0VUlDdHJsLmNsb3NlUG9wdXAoKTtcclxuXHRcdFx0XHRzdGF0ZS5jaGVja091dElkID0gaWQ7XHJcblx0XHRcdFx0Ly8gNS4g6riI7JWhIOqzhOyCsFxyXG5cdFx0XHRcdGNvbnN0IHBheWxvYWQgPSBEYXRhQ3RybC5nZXRSZXNlcnZlUGF5bG9hZCgpO1xyXG5cdFx0XHRcdC8vIDYuIOq4iOyVoSDroIzrjZTrp4FcclxuXHRcdFx0XHRVSUN0cmwucmVuZGVyUHJpY2UocGF5bG9hZCk7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly9cdOyytO2BrOyduCDtgbTrpq1cclxuXHRcdFx0ZWxzZSBpZiAoc3RhdGUuY2hlY2tJbklkID09PSBcIlwiKSB7XHJcblx0XHRcdFx0Y29uc3QgcmVzZXJ2ZWREYXlzID0gYXdhaXQgRGF0YUN0cmwuZ2V0UmVzZXJ2ZWREYXlzKCk7XHJcblx0XHRcdFx0Ly8gMS4g67aI6rCA64ql7ZWcIOuCoOynnCDrp4jtgawg7ZGc7IucXHJcblx0XHRcdFx0VUlDdHJsLnJlbmRlckludmFsaWREYXkoaWQsIHJlc2VydmVkRGF5cyk7XHJcblx0XHRcdFx0Ly8gMi4g7LK07YGs7J24IOyduO2Si+yXkCDrgqDsp5wg64+Z6riw7ZmUXHJcblx0XHRcdFx0VUlDdHJsLnNldENoZWNrSW5JbnB1dChpZCk7XHJcblx0XHRcdFx0Ly8gMy4g7LK07YGs7J24IOuUlOyKpO2UjOugiOydtCDroIzrjZTrp4FcclxuXHRcdFx0XHRVSUN0cmwucmVuZGVyQ2hlY2tJbkRpc3BsYXkoaWQpO1xyXG5cdFx0XHRcdHN0YXRlLmNoZWNrSW5JZCA9IGlkO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb25DbGlja1BhZ2VCdG4gPSBhc3luYyAoZXZlbnQpID0+IHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRVSUN0cmwuY2xlYXJDYWxlbmRhcigpO1xyXG5cclxuXHRcdGNvbnN0IGlzUHJldkJ0biA9IGV2ZW50LnRhcmdldC5tYXRjaGVzKERPTS5wcmV2UGFnZSk7XHJcblxyXG5cdFx0Ly8gcHJldkJ0biwgbmV4dEJ0biDrtoTquLAgLT4g64us66ClIOyblCDspp3qsJBcclxuXHRcdGlmIChpc1ByZXZCdG4pIHtcclxuXHRcdFx0c3RhdGUuY3VyRGF0ZS5zZXRNb250aChzdGF0ZS5jdXJEYXRlLmdldE1vbnRoKCkgLSAxKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHN0YXRlLmN1ckRhdGUuc2V0TW9udGgoc3RhdGUuY3VyRGF0ZS5nZXRNb250aCgpICsgMSk7XHJcblx0XHR9XHJcblx0XHQvLyAxLiDri6zroKUg66CM642U66eBXHJcblx0XHRVSUN0cmwucmVuZGVyQ2FsZW5kYXIoXHJcblx0XHRcdHN0YXRlLmN1ckRhdGUuZ2V0RnVsbFllYXIoKSxcclxuXHRcdFx0c3RhdGUuY3VyRGF0ZS5nZXRNb250aCgpICsgMVxyXG5cdFx0KTtcclxuXHRcdC8vIDIuIOyYiOyVvSDrtojqsIDriqUg66CM642U66eBXHJcblx0XHRVSUN0cmwuYmVFeGNlcHRSZXNlcnZlZERheShhd2FpdCBEYXRhQ3RybC5nZXRSZXNlcnZlZERheXMoKSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgc2V0SW5pdGFpbENhbGVuZGFyID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0VUlDdHJsLnJlbmRlckNhbGVuZGFyKFxyXG5cdFx0XHRzdGF0ZS5jdXJEYXRlLmdldEZ1bGxZZWFyKCksXHJcblx0XHRcdHN0YXRlLmN1ckRhdGUuZ2V0TW9udGgoKSArIDFcclxuXHRcdCk7XHJcblx0XHRVSUN0cmwuYmVFeGNlcHRSZXNlcnZlZERheShhd2FpdCBEYXRhQ3RybC5nZXRSZXNlcnZlZERheXMoKSk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb25DbGlja0Zvcm1FeGl0QnRuID0gKCkgPT4gVUlDdHJsLmNsb3NlUG9wdXAoZXZlbnQpO1xyXG5cclxuXHRjb25zdCBzdWJtaXRSZXNlcnZhdGlvbkZvcm0gPSAoKSA9PiB7XHJcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKERPTS5jaGVja0luSW5wdXQpLnZhbHVlID0gc3RhdGUuY2hlY2tJbklkO1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihET00uY2hlY2tPdXRJbnB1dCkudmFsdWUgPSBzdGF0ZS5jaGVja091dElkO1xyXG5cclxuXHRcdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKERPTS5yZXNlcnZlUG9wdXBDb250YWluZXIpO1xyXG5cdFx0Y29uc3QgbnVtT2ZHdWVzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRE9NLmd1ZXN0Q291bnQpLnRleHRDb250ZW50O1xyXG5cdFx0Y29uc3QgZ3Vlc3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuXHRcdGd1ZXN0SW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIm51bU9mR3Vlc3RcIik7XHJcblx0XHRndWVzdElucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIG51bU9mR3Vlc3QpO1xyXG5cdFx0Zm9ybS5hcHBlbmRDaGlsZChndWVzdElucHV0KTtcclxuXHRcdGZvcm0uc3VibWl0KCk7XHJcblx0fTtcclxuXHJcblx0Y29uc3Qgb25DbGlja1Jlc2VydmVDb250YWluZXIgPSAoZXZlbnQpID0+IHtcclxuXHRcdC8vIDEtMS4g7LK07YGs7J24LCDssrTtgazslYTsm4Mg67KE7Yq8IO2BtOumreyLnFxyXG5cdFx0aWYgKFVJQ3RybC5pc0NsaWNrZWRDaGVja0luQW5kT3V0KGV2ZW50KSkgVUlDdHJsLm9wZW5Qb3B1cCgpO1xyXG5cdFx0Ly8gMS0yLiDsmIjslb0g67KE7Yq8IO2BtOumreyLnFxyXG5cdFx0ZWxzZSBpZiAoVUlDdHJsLmlzQ2xpY2tlZFJlbmRlckJ0bihldmVudCkpIHtcclxuXHRcdFx0aWYgKHN0YXRlLmNoZWNrSW5JZCAhPT0gXCJcIiAmJiBzdGF0ZS5jaGVja091dElkICE9PSBcIlwiKSB7XHJcblx0XHRcdFx0c3VibWl0UmVzZXJ2YXRpb25Gb3JtKCk7XHJcblx0XHRcdH0gZWxzZSBVSUN0cmwub3BlblBvcHVwKCk7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdGluaXQ6ICgpID0+IHtcclxuXHRcdFx0c2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHRcdFx0c2V0SW5pdGFpbENhbGVuZGFyKCk7XHJcblx0XHR9LFxyXG5cdH07XHJcbn0pKERhdGFDb250cm9sbGVyLCBVSUNvbnRyb2xsZXIpO1xyXG5Db250cm9sbGVyLmluaXQoKTtcclxuIiwiZXhwb3J0IGNvbnN0IHNldEZpeERheUNvdW50ID0gbnVtYmVyID0+IChudW1iZXIgPCAxMCA/IFwiMFwiICsgbnVtYmVyIDogbnVtYmVyKTtcclxuZXhwb3J0IGNvbnN0IHNldE1vbnRoQ291bnQgPSBudW1iZXIgPT4gKG51bWJlciA8IDEwID8gXCIwXCIgKyBudW1iZXIgOiBudW1iZXIpO1xyXG5leHBvcnQgY29uc3QgZm9ybWF0RGFzaFRvRG90ID0gc3RyID0+IHN0ci5yZXBsYWNlKC8tL2csIFwiLlwiKTtcclxuZXhwb3J0IGNvbnN0IGZvcm1hdERvdFRvRGFzaCA9IHN0ciA9PiBzdHIucmVwbGFjZSgvXFwuL2csIFwiLVwiKTtcclxuZXhwb3J0IGNvbnN0IGZvcm1hdFdvbiA9IG51bSA9PlxyXG5cdG5ldyBJbnRsLk51bWJlckZvcm1hdChcImtvLUtSXCIsIHsgc3R5bGU6IFwiY3VycmVuY3lcIiwgY3VycmVuY3k6IFwiS1JXXCIgfSkuZm9ybWF0KG51bSk7XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==