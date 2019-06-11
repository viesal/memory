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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nvar urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ \"./node_modules/css-loader/dist/runtime/url-escape.js\");\nvar ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../../static/img/null.png */ \"./static/img/null.png\"));\nvar ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../../static/img/image.png */ \"./static/img/image.png\"));\n\n// Module\nexports.push([module.i, \".card {\\r\\n    position: absolute;\\r\\n    width: 110px;\\r\\n    height: 153px;\\r\\n\\r\\n    perspective: 700px;\\r\\n    transform-style: preserve-3d;\\r\\n\\r\\n    transition: transform .5s cubic-bezier(0, 0, 1, 1)\\r\\n}\\r\\n\\r\\n.card > div {\\r\\n    width: 100%;\\r\\n    height: 100%;\\r\\n    position: absolute;\\r\\n    left: 0;\\r\\n    top: 0;\\r\\n}\\r\\n\\r\\n.card__face {\\r\\n    background-image: url(\" + ___CSS_LOADER_URL___0___ + \");\\r\\n    background-position: center;\\r\\n    background-size: 100%;\\r\\n    transform: translateZ(1px) rotateY(-180deg);\\r\\n}\\r\\n\\r\\n.card__shirt {\\r\\n    background-image: url(\" + ___CSS_LOADER_URL___1___ + \");\\r\\n    background-position: center;\\r\\n    background-size: 100%;\\r\\n    transform: translateZ(2px);\\r\\n}\\r\\n\\r\\n.card_rotated {\\r\\n    transform: rotateY(-180deg);\\r\\n}\\r\\n\\r\\n.block{\\r\\n    position: absolute;\\r\\n    top: 0px;\\r\\n    left: 0px;\\r\\n    bottom: 0px;\\r\\n    right: 0px;\\r\\n\\r\\n    width: 760px;\\r\\n    height: 500px;\\r\\n    z-index: -1;\\r\\n   \\r\\n}\\r\\n\\r\\n\\r\\n\\r\\nbody{\\r\\n    background-color: #1c7230;\\r\\n    width: 100%;\\r\\n    margin: 0;\\r\\n    font-family: SansSerif, sans-serif;\\r\\n    font-size: .9em;\\r\\n    color: #ddeae0;\\r\\n}\\r\\n\\r\\n.container1, .container2, .container3{\\r\\n    position: absolute;\\r\\n    top: 0px;\\r\\n    left: 0px;\\r\\n    right: 0px;\\r\\n    width: 760px;\\r\\n    margin-left: auto;\\r\\n    margin-right: auto;\\r\\n    margin-top: 4em;\\r\\n    background-color: #1c7230;\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    align-items: center;\\r\\n    visibility: hidden;\\r\\n}\\r\\n\\r\\n.header{\\r\\n    position: absolute;\\r\\n    top: 0px;\\r\\n\\r\\n    width: 100%;\\r\\n\\r\\n    display: flex;\\r\\n    flex-direction: row;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n\\r\\n.cards{\\r\\n    position: absolute;\\r\\n    left: 0px;\\r\\n    top: 2em;\\r\\n}\\r\\n\\r\\n.mg{\\r\\n    text-transform: uppercase;\\r\\n}\\r\\n\\r\\nbutton{\\r\\n    border: 1px solid transparent;\\r\\n    border-radius: .25rem;\\r\\n    background-color: #ddeae0;\\r\\n    border-color: #ddeae0;\\r\\n    color: #1c7230;\\r\\n    padding: .5em 1em;\\r\\n    font-size: 1.2em;\\r\\n    font-weight: bold;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\nh1{\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n.startGame{\\r\\n    text-decoration: none;\\r\\n    color: #ddeae0;\\r\\n}\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function escape(url, needQuotes) {\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || needQuotes) {\n    return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"';\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/url-escape.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/classes/Card.js":
/*!*****************************!*\
  !*** ./src/classes/Card.js ***!
  \*****************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Card\", function() { return Card; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar Card =\n/*#__PURE__*/\nfunction () {\n  function Card(container) {\n    _classCallCheck(this, Card);\n\n    this.container = container;\n    this.el = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(this.container, 'div', [['class', 'card']]);\n    this.shirt = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(this.el, 'div', [['class', 'card__shirt'], ['data-tid', 'card-flipped']]);\n    this.face = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(this.el, 'div', [['class', 'card__face'], ['data-tid', 'card']]);\n  }\n\n  _createClass(Card, [{\n    key: \"rotate\",\n    value: function rotate() {\n      if (this.rotated) {\n        this.el.className = 'card';\n      } else {\n        this.el.className = 'card card_rotated';\n      }\n\n      this.rotated = !this.rotated;\n    }\n  }]);\n\n  return Card;\n}();\n;\n\n//# sourceURL=webpack:///./src/classes/Card.js?");

/***/ }),

/***/ "./src/classes/InitGame.js":
/*!*********************************!*\
  !*** ./src/classes/InitGame.js ***!
  \*********************************/
/*! exports provided: InitGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InitGame\", function() { return InitGame; });\n/* harmony import */ var _Playground__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Playground */ \"./src/classes/Playground.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n/* harmony import */ var _data_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/cards */ \"./src/data/cards.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar InitGame =\n/*#__PURE__*/\nfunction () {\n  function InitGame(container) {\n    var _this = this;\n\n    _classCallCheck(this, InitGame);\n\n    _defineProperty(this, \"startGame\", function () {\n      _this.cont1.style.visibility = 'hidden';\n      _this.cont2.style.visibility = 'visible';\n      _this.cont3.style.visibility = 'hidden';\n      new _Playground__WEBPACK_IMPORTED_MODULE_0__[\"Playground\"](_data_cards__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _this.cards, _this.finishGame);\n    });\n\n    _defineProperty(this, \"finishGame\", function () {\n      _this.cont1.style.visibility = 'hidden';\n      _this.cont2.style.visibility = 'hidden';\n      _this.cont3.style.visibility = 'visible';\n    });\n\n    this.container = container;\n    this.cont1 = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(this.container, 'div', [[\"id\", 'cont1'], ['class', 'container1'], ['data-tid', 'App']], 'visibility: visible');\n    this.cont2 = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(this.container, 'div', [[\"id\", 'cont2'], ['class', 'container2'], ['data-tid', 'Deck']], 'visibility: hidden');\n    this.cont3 = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(this.container, 'div', [[\"id\", 'cont3'], ['class', 'container3']], 'visibility: hidden');\n    this.initGame();\n    document.addEventListener('change_score', function (e) {\n      var _iteratorNormalCompletion = true;\n      var _didIteratorError = false;\n      var _iteratorError = undefined;\n\n      try {\n        for (var _iterator = document.getElementsByClassName('score')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n          var item = _step.value;\n          item.innerHTML = e.detail.score;\n        }\n      } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n      } finally {\n        try {\n          if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n            _iterator[\"return\"]();\n          }\n        } finally {\n          if (_didIteratorError) {\n            throw _iteratorError;\n          }\n        }\n      }\n    });\n  }\n\n  _createClass(InitGame, [{\n    key: \"initGame\",\n    value: function initGame() {\n      this.createCont1();\n      this.createCont2();\n      this.createCont3();\n    }\n  }, {\n    key: \"createCont1\",\n    value: function createCont1() {\n      Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(this.cont1, 'img', [['src', './static/img/StartGame.png'], ['alt', 'StartGame']]);\n      var h1 = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(this.cont1, 'h1', [['class', 'mg']]);\n      h1.innerText = 'MemoryGame';\n      var buttonStart = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(this.cont1, 'button', [['type', 'button'], ['data-tid', 'NewGame-startGame']]);\n      buttonStart.innerText = 'Начать игру';\n      buttonStart.addEventListener('click', this.startGame);\n    }\n  }, {\n    key: \"createCont2\",\n    value: function createCont2() {\n      var head = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(this.cont2, 'div', [['class', 'header']]);\n      var divHref = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(head, 'div');\n      var a = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(divHref, 'a', [['href', '#'], ['class', 'startGame'], ['data-tid', 'Menu-newGame']]);\n      a.innerText = 'Начать заного';\n      a.addEventListener('click', this.startGame);\n      var noopDiv = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(head, 'div');\n      noopDiv.innerText = 'Очки: ';\n      var span = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(noopDiv, 'span', [['class', 'score'], ['id', 'score'], ['data-tid', 'Menu-scores']]);\n      span.innerText = '0';\n      this.cards = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(this.cont2, 'div', [['id', 'cards'], ['class', 'cards']]);\n    }\n  }, {\n    key: \"createCont3\",\n    value: function createCont3() {\n      Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(this.cont3, 'img', [['src', './static/img/Group2.png'], ['alt', 'FinishGame']]);\n      var h1 = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(this.cont3, 'h1');\n      var grac = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(h1, 'div');\n      grac.innerText = 'Поздравляем!';\n      var score = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(h1, 'div');\n      score.innerText = 'Ваш итоговый счет: ';\n      var span = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(score, 'span', [['class', 'score'], ['id', 'score_end']]);\n      span.innerText = '0';\n      var button = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(this.cont3, 'button', [['type', 'button'], ['data-tid', 'EndGame-retryGame']]);\n      button.innerText = 'Еще раз';\n      button.addEventListener('click', this.startGame);\n    }\n  }]);\n\n  return InitGame;\n}();\n\n//# sourceURL=webpack:///./src/classes/InitGame.js?");

/***/ }),

/***/ "./src/classes/Playground.js":
/*!***********************************!*\
  !*** ./src/classes/Playground.js ***!
  \***********************************/
/*! exports provided: Playground */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Playground\", function() { return Playground; });\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ \"./src/classes/Card.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar Playground =\n/*#__PURE__*/\nfunction () {\n  function Playground(cards_data, container, finish_game) {\n    var _this = this;\n\n    _classCallCheck(this, Playground);\n\n    _defineProperty(this, \"rotateElement\", function (element) {\n      return function () {\n        element.rotate();\n\n        _this.block();\n\n        if (_this.select_card == null) {\n          _this.select_card = element;\n\n          _this.block();\n        } else if (_this.select_card.name == element.name && element.index != _this.select_card.index) {\n          _this.layone_cards += 2;\n          _this.score += (18 - _this.layone_cards) * 42;\n          setTimeout(function () {\n            _this.change_score.detail.score = _this.score;\n            document.dispatchEvent(_this.change_score);\n            element.el.remove();\n\n            _this.cards[_this.select_card.index].el.remove();\n\n            _this.select_card = null;\n\n            _this.block();\n\n            if (_this.layone_cards == 18) {\n              _this.finish_game();\n            }\n          }, 1500);\n        } else {\n          _this.score -= _this.layone_cards * 42;\n\n          if (_this.score < 0) {\n            _this.score = 0;\n          }\n\n          setTimeout(function () {\n            _this.change_score.detail.score = _this.score;\n            document.dispatchEvent(_this.change_score);\n            element.rotate();\n\n            _this.cards[_this.select_card.index].rotate();\n\n            _this.select_card = null;\n\n            _this.block();\n          }, 1500);\n        }\n      };\n    });\n\n    this.container = container;\n    this.finish_game = finish_game;\n\n    while (this.container.firstChild) {\n      this.container.removeChild(this.container.firstChild);\n    }\n\n    this.cards = [];\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n      for (var _iterator = this.getRandomArr()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n        var item = _step.value;\n        var card = new _Card__WEBPACK_IMPORTED_MODULE_0__[\"Card\"](this.container);\n        card.face.style.backgroundImage = \"url(\".concat(cards_data[item].img, \")\");\n        card.name = cards_data[item].name;\n        this.cards.push(card);\n      }\n    } catch (err) {\n      _didIteratorError = true;\n      _iteratorError = err;\n    } finally {\n      try {\n        if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n          _iterator[\"return\"]();\n        }\n      } finally {\n        if (_didIteratorError) {\n          throw _iteratorError;\n        }\n      }\n    }\n\n    var left = 0;\n    var top = 0;\n\n    for (var index in this.cards) {\n      if (index == 6 || index == 12) {\n        top += 173;\n        left = 0;\n      }\n\n      this.cards[index].index = index;\n      this.cards[index].el.style.top = \"\".concat(top, \"px\");\n      this.cards[index].el.style.left = \"\".concat(left, \"px\");\n      this.cards[index].el.addEventListener('click', this.rotateElement(this.cards[index]));\n      left += 130;\n    }\n\n    this.select_card = null;\n    this.select_index = -1;\n    this.score = 0;\n    this.layone_cards = 0;\n    this.block_el = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"])(this.container, 'div', [['class', 'block']]);\n    this.rotateAll();\n    this.change_score = new CustomEvent('change_score', {\n      detail: {\n        score: this.score\n      }\n    });\n    document.dispatchEvent(this.change_score);\n    this.finish_event = new Event('finish');\n  }\n\n  _createClass(Playground, [{\n    key: \"getRandomArr\",\n    value: function getRandomArr() {\n      var arr = [];\n\n      while (arr.length < 18) {\n        var rand = Math.floor(Math.random() * 36);\n\n        if (arr.indexOf(rand) == -1) {\n          arr.push(rand);\n          arr.push(rand);\n        }\n      }\n\n      var lenght = arr.length;\n\n      while (lenght != 0) {\n        lenght -= 1;\n        var randItem = Math.floor(Math.random() * (lenght + 1));\n        var tempNum = arr[lenght];\n        arr[lenght] = arr[randItem];\n        arr[randItem] = tempNum;\n      }\n\n      return arr;\n    }\n  }, {\n    key: \"block\",\n    value: function block() {\n      if (this.blocked) {\n        this.block_el.style.zIndex = -1;\n      } else {\n        this.block_el.style.zIndex = 0;\n      }\n\n      this.blocked = !this.blocked;\n    }\n  }, {\n    key: \"rotateAll\",\n    value: function rotateAll() {\n      var _this2 = this;\n\n      this.block();\n      setTimeout(function () {\n        var _iteratorNormalCompletion2 = true;\n        var _didIteratorError2 = false;\n        var _iteratorError2 = undefined;\n\n        try {\n          for (var _iterator2 = _this2.cards[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n            var item = _step2.value;\n            item.rotate();\n          }\n        } catch (err) {\n          _didIteratorError2 = true;\n          _iteratorError2 = err;\n        } finally {\n          try {\n            if (!_iteratorNormalCompletion2 && _iterator2[\"return\"] != null) {\n              _iterator2[\"return\"]();\n            }\n          } finally {\n            if (_didIteratorError2) {\n              throw _iteratorError2;\n            }\n          }\n        }\n      }, 1000);\n      setTimeout(function () {\n        var _iteratorNormalCompletion3 = true;\n        var _didIteratorError3 = false;\n        var _iteratorError3 = undefined;\n\n        try {\n          for (var _iterator3 = _this2.cards[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n            var item = _step3.value;\n            item.rotate();\n          }\n        } catch (err) {\n          _didIteratorError3 = true;\n          _iteratorError3 = err;\n        } finally {\n          try {\n            if (!_iteratorNormalCompletion3 && _iterator3[\"return\"] != null) {\n              _iterator3[\"return\"]();\n            }\n          } finally {\n            if (_didIteratorError3) {\n              throw _iteratorError3;\n            }\n          }\n        }\n\n        _this2.block();\n      }, 5000);\n    }\n  }]);\n\n  return Playground;\n}();\n;\n\n//# sourceURL=webpack:///./src/classes/Playground.js?");

/***/ }),

/***/ "./src/classes/index.js":
/*!******************************!*\
  !*** ./src/classes/index.js ***!
  \******************************/
/*! exports provided: InitGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _InitGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InitGame */ \"./src/classes/InitGame.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"InitGame\", function() { return _InitGame__WEBPACK_IMPORTED_MODULE_0__[\"InitGame\"]; });\n\n\n\n//# sourceURL=webpack:///./src/classes/index.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"sourceMap\":true,\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/data/cards.js":
/*!***************************!*\
  !*** ./src/data/cards.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  \"name\": \"6S\",\n  \"img\": \"../../../static/img/Cards/6S.png\"\n}, {\n  \"name\": \"6H\",\n  \"img\": \"../../../static/img/Cards/6H.png\"\n}, {\n  \"name\": \"6C\",\n  \"img\": \"../../../static/img/Cards/6C.png\"\n}, {\n  \"name\": \"6D\",\n  \"img\": \"../../../static/img/Cards/6D.png\"\n}, {\n  \"name\": \"7S\",\n  \"img\": \"../../../static/img/Cards/7S.png\"\n}, {\n  \"name\": \"7H\",\n  \"img\": \"../../../static/img/Cards/7H.png\"\n}, {\n  \"name\": \"7C\",\n  \"img\": \"../../../static/img/Cards/7C.png\"\n}, {\n  \"name\": \"7D\",\n  \"img\": \"../../../static/img/Cards/7D.png\"\n}, {\n  \"name\": \"8S\",\n  \"img\": \"../../../static/img/Cards/8S.png\"\n}, {\n  \"name\": \"8H\",\n  \"img\": \"../../../static/img/Cards/8H.png\"\n}, {\n  \"name\": \"8C\",\n  \"img\": \"../../../static/img/Cards/8C.png\"\n}, {\n  \"name\": \"8D\",\n  \"img\": \"../../../static/img/Cards/8D.png\"\n}, {\n  \"name\": \"9S\",\n  \"img\": \"../../../static/img/Cards/9S.png\"\n}, {\n  \"name\": \"9H\",\n  \"img\": \"../../../static/img/Cards/9H.png\"\n}, {\n  \"name\": \"9C\",\n  \"img\": \"../../../static/img/Cards/9C.png\"\n}, {\n  \"name\": \"9D\",\n  \"img\": \"../../../static/img/Cards/9D.png\"\n}, {\n  \"name\": \"0S\",\n  \"img\": \"../../../static/img/Cards/0S.png\"\n}, {\n  \"name\": \"0H\",\n  \"img\": \"../../../static/img/Cards/0H.png\"\n}, {\n  \"name\": \"0C\",\n  \"img\": \"../../../static/img/Cards/0C.png\"\n}, {\n  \"name\": \"0D\",\n  \"img\": \"../../../static/img/Cards/0D.png\"\n}, {\n  \"name\": \"JS\",\n  \"img\": \"../../../static/img/Cards/JS.png\"\n}, {\n  \"name\": \"JH\",\n  \"img\": \"../../../static/img/Cards/JH.png\"\n}, {\n  \"name\": \"JC\",\n  \"img\": \"../../../static/img/Cards/JC.png\"\n}, {\n  \"name\": \"JD\",\n  \"img\": \"../../../static/img/Cards/JD.png\"\n}, {\n  \"name\": \"QS\",\n  \"img\": \"../../../static/img/Cards/QS.png\"\n}, {\n  \"name\": \"QH\",\n  \"img\": \"../../../static/img/Cards/QH.png\"\n}, {\n  \"name\": \"QC\",\n  \"img\": \"../../../static/img/Cards/QC.png\"\n}, {\n  \"name\": \"QD\",\n  \"img\": \"../../../static/img/Cards/QD.png\"\n}, {\n  \"name\": \"KS\",\n  \"img\": \"../../../static/img/Cards/KS.png\"\n}, {\n  \"name\": \"KH\",\n  \"img\": \"../../../static/img/Cards/KH.png\"\n}, {\n  \"name\": \"KC\",\n  \"img\": \"../../../static/img/Cards/KC.png\"\n}, {\n  \"name\": \"KD\",\n  \"img\": \"../../../static/img/Cards/KD.png\"\n}, {\n  \"name\": \"AS\",\n  \"img\": \"../../../static/img/Cards/AS.png\"\n}, {\n  \"name\": \"AH\",\n  \"img\": \"../../../static/img/Cards/AH.png\"\n}, {\n  \"name\": \"AC\",\n  \"img\": \"../../../static/img/Cards/AC.png\"\n}, {\n  \"name\": \"AD\",\n  \"img\": \"../../../static/img/Cards/AD.png\"\n}]);\n\n//# sourceURL=webpack:///./src/data/cards.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ \"./src/classes/index.js\");\n\n\n\nwindow.onload = function () {\n  new _classes__WEBPACK_IMPORTED_MODULE_1__[\"InitGame\"](document.body);\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\nfunction createElement(container, htmlElement) {\n  var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];\n  var style = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};\n  var element = document.createElement(htmlElement);\n  attributes.forEach(function (attribute) {\n    return element.setAttribute(attribute[0], attribute[1]);\n  });\n  element.style.cssText = style;\n  container.appendChild(element);\n  return element;\n}\n\n//# sourceURL=webpack:///./src/utils/index.js?");

/***/ }),

/***/ "./static/img/image.png":
/*!******************************!*\
  !*** ./static/img/image.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/img/image.png\";\n\n//# sourceURL=webpack:///./static/img/image.png?");

/***/ }),

/***/ "./static/img/null.png":
/*!*****************************!*\
  !*** ./static/img/null.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"static/img/null.png\";\n\n//# sourceURL=webpack:///./static/img/null.png?");

/***/ })

/******/ });