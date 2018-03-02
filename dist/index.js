"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isArray = require("lodash/isArray");
var isBoolean = require("lodash/isBoolean");
var isEqual = require("lodash/isEqual");
var isEmpty = require("lodash/isEmpty");
var isNil = require("lodash/isNil");
var isNumber = require("lodash/isNumber");
var isObject = require("lodash/isObject");
var set = require("lodash/set");
var get = require("lodash/get");

module.exports = function () {
  function _class() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, _class);

    this.fields = {};
    this.formData = options.data || {};
    this.parsedData = options.data || {};
    this.errorData = {};
    this.changeCallback = options.onChange;
  }

  /*
  // FIELDS
  */

  _createClass(_class, [{
    key: "clearFieldErrors",
    value: function clearFieldErrors(attrName) {
      this.updateErrors(attrName, {});
    }
  }, {
    key: "focusOnField",
    value: function focusOnField(attrName) {
      if (!isNil(this.fields[attrName].refs["input"])) {
        this.fields[attrName].refs["input"].focus();
        this.fields[attrName].refs["input"].setSelectionRange(9999, 9999);
      }
    }
  }, {
    key: "getFieldErrors",
    value: function getFieldErrors(attrName) {
      return this.errorData[attrName] || [];
    }
  }, {
    key: "getFieldFormValue",
    value: function getFieldFormValue(attrName) {
      var data = get(this.formData, attrName);
      if (isEmpty(data) && !isBoolean(data) && !isNumber(data) && !isArray(data)) {
        return "";
      }
      return data;
    }
  }, {
    key: "getFieldParsedValue",
    value: function getFieldParsedValue(attrName) {
      var data = get(this.parsedData, attrName);
      if (isEmpty(data) && !isBoolean(data) && !isNumber(data) && !isArray(data)) {
        return "";
      }
      return data;
    }
  }, {
    key: "handleFieldChange",
    value: function handleFieldChange(attrName, results) {
      if (isObject(results) && results.hasOwnProperty("formatted")) {
        this.updateFormValue(attrName, results.formatted);
      } else if (isObject(results) && results.hasOwnProperty("parsed")) {
        this.updateParsedValue(attrName, results.parsed);
      } else {
        this.updateFormValue(attrName, results);
        this.updateParsedValue(attrName, results);
      }
      this.fields[attrName].handleUpdate();
      if (typeof this.changeCallback === "function") {
        this.changeCallback();
      }
    }
  }, {
    key: "handleFieldBlur",
    value: function handleFieldBlur(attrName, results) {
      this.updateFormValue(attrName, results.formatted);
      this.updateParsedValue(attrName, results.formatted);
      this.updateErrors(attrName, results.errors);
    }
  }, {
    key: "registerField",
    value: function registerField(name, input) {
      this.fields[name] = input;
    }
  }, {
    key: "setFieldErrors",
    value: function setFieldErrors(attrName, errors) {
      this.updateErrors(attrName, errors);
    }
  }, {
    key: "unregisterField",
    value: function unregisterField(name, input) {
      delete this.fields[name];
    }
  }, {
    key: "updateAllFields",
    value: function updateAllFields() {
      for (var key in this.fields) {
        this.fields[key].handleUpdate();
      }
    }

    /*
    // FORM
    */

  }, {
    key: "extractDifferences",
    value: function extractDifferences(original, fields) {
      var differences = {};
      var data = this.formData;

      if (isNil(fields)) {
        fields = Object.keys(this.fields);
      }

      fields.forEach(function (field) {
        if ((isNil(original[field]) || original[field] === "") && (isNil(data[field]) || data[field] === "")) {
          // do nothing
        } else if (!isEqual(original[field], data[field])) {
          differences[field] = data[field];
        }
      });

      return differences;
    }
  }, {
    key: "getState",
    value: function getState(stateAttr) {
      if (isNil(this.form)) {
        return {};
      } else if (isNil(this.form.state)) {
        console.error("Form must have state to use the FormLinker");
        return {};
      } else {
        return this.form.state[stateAttr];
      }
    }
  }, {
    key: "isValid",
    value: function isValid() {
      var valid = true;
      for (var key in this.fields) {
        if (!this.fields[key].formattedValue().valid) {
          valid = false;
        }
      }
      return valid;
    }
  }, {
    key: "registerForm",
    value: function registerForm(form) {
      this.form = form;

      this.setState("formData", this.formData);
      this.setState("parsedData", this.parsedData);
      this.setState("errorData", this.errorData);

      this.updateAllFields();
    }
  }, {
    key: "setFormData",
    value: function setFormData(data) {
      var _this = this;

      Object.keys(this.fields).forEach(function (attrName) {
        var attrValue = data[attrName];
        if (!isNil(attrValue)) {
          _this.handleFieldChange(attrName, { formatted: attrValue, parsed: attrValue });
        }
      });
    }
  }, {
    key: "setState",
    value: function setState(stateAttr, newState) {
      if (!isNil(this.form)) {
        this.form.setState(_defineProperty({}, stateAttr, newState));
      }
    }
  }, {
    key: "setFormErrors",
    value: function setFormErrors(errors) {
      var _this2 = this;

      Object.keys(this.fields).forEach(function (attrName) {
        var attrErrors = errors[attrName];
        if (!isNil(attrErrors)) {
          _this2.updateErrors(attrName, attrErrors);
        }
      });
    }
  }, {
    key: "triggerValidations",
    value: function triggerValidations() {
      for (var key in this.fields) {
        this.fields[key].blur();
      }
    }
  }, {
    key: "updateFormValue",
    value: function updateFormValue(attr, value) {
      set(this.formData, attr, value);
      this.setState("formData", this.formData);
    }
  }, {
    key: "updateParsedValue",
    value: function updateParsedValue(attr, value) {
      set(this.parsedData, attr, value);
      this.setState("parsedData", this.parsedData);
    }
  }, {
    key: "updateErrors",
    value: function updateErrors(attr, newErrors) {
      if (isEmpty(newErrors)) {
        delete this.errorData[attr];
      } else {
        this.errorData[attr] = newErrors;
      }
      this.setState("errorData", this.errorData);
      if (!isNil(this.fields[attr])) {
        this.fields[attr].handleUpdate();
      }
    }
  }]);

  return _class;
}();