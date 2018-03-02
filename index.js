const isArray = require("lodash/isArray");
const isBoolean = require("lodash/isBoolean");
const isEqual = require("lodash/isEqual");
const isEmpty = require("lodash/isEmpty");
const isNil = require("lodash/isNil");
const isNumber = require("lodash/isNumber");
const isObject = require("lodash/isObject");
const set = require("lodash/set");
const get = require("lodash/get");

module.exports = class{
  constructor(options = {}) {
    this.fields = {};
    this.formData = options.data || {};
    this.parsedData = options.data || {};
    this.errorData = {};
    this.changeCallback = options.onChange;
  }

  /*
  // FIELDS
  */

  clearFieldErrors(attrName) {
    this.updateErrors(attrName, {});
  }

  focusOnField(attrName) {
    if(!isNil(this.fields[attrName].refs["input"])) {
      this.fields[attrName].refs["input"].focus();
      this.fields[attrName].refs["input"].setSelectionRange(9999, 9999);
    }
  }

  getFieldErrors(attrName) {
    return(this.errorData[attrName] || []);
  }

  getFieldFormValue(attrName) {
    let data = get(this.formData, attrName);
    if(isEmpty(data) && !isBoolean(data) && !isNumber(data) && !isArray(data)) {
      return("");
    }
    return(data);
  }

  getFieldParsedValue(attrName) {
    let data = get(this.parsedData, attrName);
    if(isEmpty(data) && !isBoolean(data) && !isNumber(data) && !isArray(data)) {
      return("");
    }
    return(data);
  }

  handleFieldChange(attrName, results) {
    if(isObject(results) && results.hasOwnProperty("formatted")) {
      this.updateFormValue(attrName, results.formatted);
    } else if(isObject(results) && results.hasOwnProperty("parsed")) {
      this.updateParsedValue(attrName, results.parsed);
    } else {
      this.updateFormValue(attrName, results);
      this.updateParsedValue(attrName, results);
    }
    this.fields[attrName].handleUpdate();
    if(typeof(this.changeCallback) === "function") {
      this.changeCallback();
    }
  }

  handleFieldBlur(attrName, results) {
    this.updateFormValue(attrName, results.formatted);
    this.updateParsedValue(attrName, results.formatted);
    this.updateErrors(attrName, results.errors);
  }

  registerField(name, input) {
    this.fields[name] = input;
  }

  setFieldErrors(attrName, errors) {
    this.updateErrors(attrName, errors);
  }

  unregisterField(name, input) {
    delete this.fields[name];
  }

  updateAllFields() {
    for(let key in this.fields) {
      this.fields[key].handleUpdate();
    }
  }

  /*
  // FORM
  */

  extractDifferences(original, fields) {
    let differences = {};
    const data = this.formData;

    if(isNil(fields)) {
      fields = Object.keys(this.fields);
    }

    fields.forEach((field) => {
      if((isNil(original[field]) || original[field] === "") && (isNil(data[field]) || data[field] === "")) {
        // do nothing
      } else if(!isEqual(original[field], data[field])) {
        differences[field] = data[field];
      }
    });

    return(differences);
  }

  getState(stateAttr) {
    if(isNil(this.form)) {
      return({});
    } else if(isNil(this.form.state)) {
      console.error("Form must have state to use the FormLinker");
      return({});
    } else {
      return(this.form.state[stateAttr]);
    }
  }

  isValid() {
    let valid = true;
    for(let key in this.fields) {
      if(!this.fields[key].formattedValue().valid) {
        valid = false;
      }
    }
    return(valid);
  }

  registerForm(form) {
    this.form = form;

    this.setState("formData", this.formData);
    this.setState("parsedData", this.parsedData);
    this.setState("errorData", this.errorData);

    this.updateAllFields();
  }

  setFormData(data) {
    Object.keys(this.fields).forEach((attrName) => {
      let attrValue = data[attrName];
      if(!isNil(attrValue)) {
        this.handleFieldChange(attrName, {formatted: attrValue, parsed: attrValue});
      }
    });
  }

  setState(stateAttr, newState) {
    if(!isNil(this.form)) {
      this.form.setState({
        [stateAttr]: newState
      });
    }
  }

  setFormErrors(errors) {
    Object.keys(this.fields).forEach((attrName) => {
      let attrErrors = errors[attrName];
      if(!isNil(attrErrors)) {
        this.updateErrors(attrName, attrErrors);
      }
    });
  }

  triggerValidations() {
    for(let key in this.fields) {
      this.fields[key].blur();
    }
  }

  updateFormValue(attr, value) {
    set(this.formData, attr, value);
    this.setState("formData", this.formData);
  }

  updateParsedValue(attr, value) {
    set(this.parsedData, attr, value);
    this.setState("parsedData", this.parsedData);
  }

  updateErrors(attr, newErrors) {
    if(isEmpty(newErrors)) {
      delete this.errorData[attr];
    } else {
      this.errorData[attr] = newErrors;
    }
    this.setState("errorData", this.errorData);
    if(!isNil(this.fields[attr])) {
      this.fields[attr].handleUpdate();
    }
  }
};
