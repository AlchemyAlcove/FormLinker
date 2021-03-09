(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["formLinker"] = factory(require("lodash"));
	else
		root["formLinker"] = factory(root["_"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_lodash__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var _default = function () {
  function _default() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, _default);

    this.schema = options.schema || {};
    this.fields = this.calcFields();
    this.converters = options.converters || {};
    this.formatters = options.formatters || {};
    this.masks = options.masks || {};
    this.data = {};
    this.parsedData = options.data || {};
    this.setValuesFromParsed(options.data || {});
    this.originalData = Object.assign({}, this.parsedData);
    this.errors = {};
    this.refs = {};

    this.changeCallback = options.onChange || function () {};
  }

  _createClass(_default, [{
    key: "calcFields",
    value: function calcFields() {
      var _this = this;

      var schema = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.schema;
      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var fields = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      Object.keys(schema).forEach(function (key) {
        if (_typeof(schema[key]) === "object") {
          _this.calcFields(schema[key], prefix + key + ".", fields);
        } else {
          fields.push(prefix + key);
        }
      });
      return fields;
    }
  }, {
    key: "convert",
    value: function convert(fieldName, value) {
      var _this2 = this;

      var key = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(this.schema, fieldName);

      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(key)) {
        key.split(".").forEach(function (converter) {
          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(_this2.converters[converter])) {
            value = _this2.converters[converter](value);
          }
        });
      }

      return value;
    }
  }, {
    key: "getError",
    value: function getError(fieldName) {
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(this.errors, fieldName) || [];
    }
  }, {
    key: "getErrors",
    value: function getErrors() {
      return this.errors;
    }
  }, {
    key: "setError",
    value: function setError(fieldName, errors) {
      var triggerCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var rerender = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

      if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(errors)) {
        Object(lodash__WEBPACK_IMPORTED_MODULE_0__["unset"])(this.errors, fieldName);
        var nested = fieldName.indexOf(".") > -1;

        if (nested) {
          var currentPath = fieldName.slice(0, fieldName.lastIndexOf("."));

          while (currentPath) {
            if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(this.errors, currentPath))) {
              Object(lodash__WEBPACK_IMPORTED_MODULE_0__["unset"])(this.errors, currentPath);
              currentPath = currentPath.slice(0, currentPath.lastIndexOf("."));
            } else {
              break;
            }
          }
        }
      } else {
        Object(lodash__WEBPACK_IMPORTED_MODULE_0__["set"])(this.errors, fieldName, errors);
      }

      if (rerender) {
        var fieldRef = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(this.refs, fieldName);

        if (typeof (fieldRef === null || fieldRef === void 0 ? void 0 : fieldRef.forceUpdate) === "function") {
          fieldRef.forceUpdate();
        }
      }

      if (triggerCallback) {
        this.changeCallback();
      }
    }
  }, {
    key: "setErrors",
    value: function setErrors(errors) {
      var _this3 = this;

      var triggerCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this.errors = errors;
      this.fields.forEach(function (fieldName) {
        var fieldRef = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(errors, fieldName) && Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(_this3.refs, fieldName);

        if (typeof (fieldRef === null || fieldRef === void 0 ? void 0 : fieldRef.forceUpdate) === "function") {
          fieldRef.forceUpdate();
        }
      });

      if (triggerCallback) {
        this.changeCallback();
      }
    }
  }, {
    key: "getValue",
    value: function getValue(fieldName) {
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(this.data, fieldName);
    }
  }, {
    key: "getValues",
    value: function getValues() {
      return this.data;
    }
  }, {
    key: "setValue",
    value: function setValue(fieldName, value) {
      var triggerCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var updateActionFlag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      Object(lodash__WEBPACK_IMPORTED_MODULE_0__["set"])(this.data, fieldName, this.mask(fieldName, value));
      Object(lodash__WEBPACK_IMPORTED_MODULE_0__["set"])(this.parsedData, fieldName, this.format(fieldName, value).parsed);
      var fieldRef = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(this.refs, fieldName);

      if (typeof (fieldRef === null || fieldRef === void 0 ? void 0 : fieldRef.forceUpdate) === "function") {
        fieldRef.forceUpdate(updateActionFlag);
      }

      if (triggerCallback) {
        this.changeCallback();
      }
    }
  }, {
    key: "setValues",
    value: function setValues(values) {
      var _this4 = this;

      var triggerCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      this.fields.forEach(function (fieldName) {
        var value = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(values, fieldName);

        if (typeof value !== "undefined") {
          _this4.setValue(fieldName, value, false, true);
        }
      });

      if (triggerCallback) {
        this.changeCallback();
      }
    }
  }, {
    key: "setValuesFromParsed",
    value: function setValuesFromParsed(values) {
      var _this5 = this;

      this.fields.forEach(function (fieldName) {
        var value = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(values, fieldName);

        if (typeof value !== "undefined") {
          _this5.setValue(fieldName, _this5.convert(fieldName, value), false, true);
        }
      });
    }
  }, {
    key: "format",
    value: function format(fieldName, value) {
      var _this6 = this;

      var key = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(this.schema, fieldName);
      var response = {
        errors: [],
        formatted: value,
        parsed: value,
        valid: true
      };

      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(key)) {
        key.split(".").forEach(function (formatter) {
          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(_this6.formatters[formatter])) {
            response = _this6.formatters[formatter](response);
          }
        });
      }

      return response;
    }
  }, {
    key: "mask",
    value: function mask(fieldName, value) {
      var _this7 = this;

      var key = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(this.schema, fieldName);
      var response = value;

      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(key)) {
        key.split(".").forEach(function (mask) {
          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(_this7.masks[mask])) {
            response = _this7.masks[mask].mask(value);
          }
        });
      }

      return response;
    }
  }, {
    key: "isValid",
    value: function isValid() {
      var flag = true;

      for (var i = 0; i < this.fields.length; i++) {
        var _this$format = this.format(this.fields[i], this.getValue(this.fields[i])),
            valid = _this$format.valid;

        if (valid === false) {
          flag = false;
          break;
        }
      }

      return flag;
    }
  }, {
    key: "validate",
    value: function validate(fieldName) {
      var triggerCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var serverValidation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

      var _this$format2 = this.format(fieldName, this.getValue(fieldName)),
          errors = _this$format2.errors,
          formatted = _this$format2.formatted,
          parsed = _this$format2.parsed;

      this.setError(fieldName, [].concat(_toConsumableArray(serverValidation), _toConsumableArray(errors)), false, false);
      this.setValue(fieldName, formatted, false, true);
      Object(lodash__WEBPACK_IMPORTED_MODULE_0__["set"])(this.parsedData, fieldName, parsed);

      if (triggerCallback) {
        this.changeCallback();
      }
    }
  }, {
    key: "validateAll",
    value: function validateAll(arg) {
      var _this8 = this;

      var triggerCallback = true;
      var serverValidationErrors = {};

      if (_typeof(arg) === "object") {
        serverValidationErrors = arg;
        triggerCallback = false;
      }

      this.fields.forEach(function (field) {
        var error = serverValidationErrors[field];

        _this8.validate(field, false, error);
      });

      if (triggerCallback) {
        this.changeCallback();
      }
    }
  }, {
    key: "extractDifferences",
    value: function extractDifferences(original) {
      var differences = {};
      var data = this.parsedData;
      this.fields.forEach(function (field) {
        if ((Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(original, field)) || Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(original, field) === "") && (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(data, field)) || Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(data, field) === "")) {} else if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(original, field), Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(data, field))) {
          Object(lodash__WEBPACK_IMPORTED_MODULE_0__["set"])(differences, field, Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(data, field));
        }
      });
      return differences;
    }
  }, {
    key: "setRef",
    value: function setRef(fieldName, ref) {
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(ref)) {
        Object(lodash__WEBPACK_IMPORTED_MODULE_0__["unset"])(this.refs, fieldName);
      } else {
        Object(lodash__WEBPACK_IMPORTED_MODULE_0__["set"])(this.refs, fieldName, ref);
      }
    }
  }, {
    key: "getRef",
    value: function getRef(fieldName) {
      return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(this.refs, fieldName + ".inputRef.current");
    }
  }, {
    key: "focusOnField",
    value: function focusOnField(fieldName) {
      var _ref;

      var ref;

      if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(fieldName)) {
        var _iterator = _createForOfIteratorHelper(this.fields),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var field = _step.value;
            ref = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(this.refs, field + ".inputRef.current");

            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(ref)) {
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } else {
        ref = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(this.refs, fieldName + ".inputRef.current");
      }

      if (typeof ((_ref = ref) === null || _ref === void 0 ? void 0 : _ref.focus) === "function") {
        ref.focus();
      }
    }
  }, {
    key: "scrollToError",
    value: function scrollToError() {
      var _this9 = this;

      var errors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.validateAll(errors);
      var fieldName, error, ref;

      var _iterator2 = _createForOfIteratorHelper(this.fields),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var field = _step2.value;
          error = this.getError(field);

          if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(error)) {
            ref = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(this.refs, field + ".inputRef.current");

            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(ref)) {
              fieldName = field;
              break;
            }
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"])(fieldName)) {
        return;
      }

      if (typeof ref.focus === "function") {
        ref.focus();

        if (typeof ref.blur === "function") {
          setTimeout(function () {
            ref.blur();

            _this9.setError(fieldName, error);
          });
        }
      }
    }
  }, {
    key: "updateSchema",
    value: function updateSchema(schema) {
      this.schema = schema || {};
      this.fields = this.calcFields();
      this.validateAll();
      this.errors = {};
    }
  }]);

  return _default;
}();


;

/***/ }),

/***/ "lodash":
/*!**********************************************************************!*\
  !*** external {"commonjs":"lodash","commonjs2":"lodash","root":"_"} ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map