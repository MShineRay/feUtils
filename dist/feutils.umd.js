(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.feutils = factory());
}(this, (function () { 'use strict';

  var name = "feutils";
  var version = "0.0.1";

  /*!
   * @createDate 2021-08-23
   */
  var jsUtils = {};
  jsUtils.version = version;
  jsUtils.name = name;

  return jsUtils;

})));
