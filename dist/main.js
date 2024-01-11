/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./RagnaRunesPersonalUseRegular-Rp7AV.otf */ "./src/RagnaRunesPersonalUseRegular-Rp7AV.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./9OsQHDB.jpg */ "./src/9OsQHDB.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    margin: 0;
    padding: 0;
    min-width: 0; 
    min-height: 0;
    box-sizing: border-box;
    font-family: viking;
    
}

body,html{
    height: 100%;
    background-color: #d0c7c4;
}

@font-face {
    font-family: viking;
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

#content{
    height: 100%;
    width: 100%;
}

.header{
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}



`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;AAEvB;;AAEA;IACI,YAAY;IACZ,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;IACnB,4CAAkD;AACtD;;AAEA;IACI,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,mDAAgC;AACpC","sourcesContent":["*{\r\n    margin: 0;\r\n    padding: 0;\r\n    min-width: 0; \r\n    min-height: 0;\r\n    box-sizing: border-box;\r\n    font-family: viking;\r\n    \r\n}\r\n\r\nbody,html{\r\n    height: 100%;\r\n    background-color: #d0c7c4;\r\n}\r\n\r\n@font-face {\r\n    font-family: viking;\r\n    src: url(./RagnaRunesPersonalUseRegular-Rp7AV.otf);\r\n}\r\n\r\n#content{\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.header{\r\n    background: url('./9OsQHDB.jpg');\r\n}\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/buildPage.js":
/*!**************************!*\
  !*** ./src/buildPage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildPage: () => (/* binding */ buildPage)
/* harmony export */ });
/* harmony import */ var _9OsQHDB_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./9OsQHDB.jpg */ "./src/9OsQHDB.jpg");
/* harmony import */ var _1412416_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./1412416.jpg */ "./src/1412416.jpg");




function buildPage(){

    console.log("Hereee")
    const page = document.querySelector('#content')
    const gridContainer = document.createElement('div')
    const header = document.createElement('div')
    const mainContent = document.createElement('div')
    mainContent.classList.add('main')
    const tabHolder = document.createElement('div')

    buildGrid(gridContainer)
    buildHeader(header)
    buildMainContent(mainContent)
    buildTabs(tabHolder)
    gridContainer.appendChild(header)
    gridContainer.appendChild(mainContent)
    gridContainer.appendChild(tabHolder)
    
    page.appendChild(gridContainer)


}


function buildGrid(container){
    container.style.display = 'grid'
    container.style.gridTemplateRows = '1.15fr 0.43fr 4fr'
    container.style.gridTemplateColumns = '1fr'
    container.style.height = '100%'
    container.style.width = '100%'
    
    
}

function buildHeader(header){
    const backgroundImg = new Image()
    backgroundImg.src = _9OsQHDB_jpg__WEBPACK_IMPORTED_MODULE_0__
    backgroundImg.style.position = 'absolute'

    styleImage(backgroundImg)

    header.style.gridRow = '1 / 2'
    header.style.gridColumn = '1 / 2'
    header.style.position = 'relative';

    header.style.display = 'flex'
    header.style.alignItems = 'center'
    header.style.justifyContent = 'center'

    header.appendChild(backgroundImg)

    const textHolder = document.createElement('div')

    textHolder.appendChild(document.createTextNode("~Welcome to the Valheim Restaurant~"))
    textHolder.style.fontSize = '75px'
    textHolder.style.position = 'absolute'
    textHolder.style.zIndex = '1'
    textHolder.style.color = '#ffcc33 '
    textHolder.style.borderTop = '8px solid #ffcc33 '
    textHolder.style.borderBottom = '8px solid #ffcc33'
    

    header.appendChild(textHolder)
}

function buildMainContent(mainContent){
    mainContent.style.gridRow = '3 / 4'
    mainContent.style.gridColumn = '1 / 2'
    mainContent.style.backgroundColor = '#f5deb3'
}

function buildTabs(tabHolder){
    
    tabHolder.style.display = 'grid'
    tabHolder.style.gridRow = '2 / 3'
    tabHolder.style.gridColumn = '1 / 2'
    tabHolder.style.gridTemplateColumns = '1fr 1fr 1fr'
    tabHolder.style.gridTemplateRows = '1fr'
    tabHolder.style.alignItems = 'center'
    tabHolder.style.justifyContent = 'center'
    tabHolder.style.position = 'relative'
   // tabHolder.style.backgroundColor = '#3d0c02'

   
    
    

    

    //tabHolder.appendChild(backgroundImg)
    //backgroundImg.style.position = 'absolute'

    buildTabButtons(tabHolder)
    
    
}

function styleImage(img){
    img.style.width = '100%'
    img.style.height = '100%'
    img.style.maxWidth = '100%'
    img.style.maxHeight = '100%'
    img.style.objectFit = 'cover';
}


function styleButton(bttn,img){
    /*
    const buttonHolder = document.createElement('div')
    buttonHolder.style.display = 'flex'; // Use flexbox to align items horizontally
    buttonHolder.style.alignItems = 'center';
    buttonHolder.style.justifyContent = 'center';
    bttn.style.height = '100%'
    
    img.style.position = 'absolute'
    bttn.style.position = 'absolute'
    bttn.style.zIndex = '1';

    buttonHolder.appendChild(img)

    buttonHolder.appendChild(bttn)

    tab.appendChild(buttonHolder)
    */
    bttn.style.height = '100%';
    bttn.style.backgroundImage = `url(${img.src})`;
    bttn.style.backgroundSize = 'cover';
    bttn.style.backgroundPosition = 'center';
    bttn.style.backgroundRepeat = 'no-repeat';
    bttn.style.display = 'flex'
    bttn.style.fontSize = '50px'
    bttn.style.color = '#ffcc33 '
    bttn.style.alignItems = 'center'
    bttn.style.justifyContent = 'center'

}

function buildTabButtons(tab){

    const backgroundImg = new Image()
    backgroundImg.src = _1412416_jpg__WEBPACK_IMPORTED_MODULE_1__

    styleImage(backgroundImg)


    const homeButton = document.createElement('button')
    homeButton.textContent = "~HOME~"
    homeButton.style.gridColumn = '1 / 2'
    homeButton.classList.add('homeBttn')
    styleButton(homeButton,backgroundImg)
 
    const menuButton = document.createElement('button')
    menuButton.textContent = "~MENU~"
    menuButton.style.gridColumn = '2 / 3'
    menuButton.classList.add('menuBttn')
    styleButton(menuButton,backgroundImg)
    
    const contactButton = document.createElement('button')
    contactButton.textContent = "~CONTACT~"
    contactButton.style.gridColumn = '3 / 4'
    contactButton.classList.add('contactBttn')
    styleButton(contactButton,backgroundImg)
    
    
    tab.appendChild(homeButton)
    tab.appendChild(menuButton)
    tab.appendChild(contactButton)
    
}

/***/ }),

/***/ "./src/tabs/contact.js":
/*!*****************************!*\
  !*** ./src/tabs/contact.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildContactContent: () => (/* binding */ buildContactContent)
/* harmony export */ });
function buildContactContent(){
    console.log("OI")

    const contentHolder = document.querySelector('.main')

    if(contentHolder.hasChildNodes()){
        for (let i = 0; i < contentHolder.childNodes.length; i++) {
            if(contentHolder.firstChild === null){
                continue
            }
            else{
                contentHolder.removeChild(contentHolder.firstChild);
            }
            
        }
    }
    const gridContainer = document.createElement('div')

    gridContainer.style.display = 'grid'
    gridContainer.style.gridTemplateRows = '1fr 3fr'
    gridContainer.style.gridTemplateColumns = '1fr'

    gridContainer.style.height = '100%'
    gridContainer.style.width = '100%'

    

    buildContactContentHeader(gridContainer)

    contentHolder.appendChild(gridContainer)

}


function buildContactContentHeader(container){
    const contactHeader = document.createElement('div')
    buildHeader(contactHeader);

    const contactContent = document.createElement('div')
    buildContent(contactContent)

    

    container.appendChild(contactHeader);
    container.appendChild(contactContent); 
}


function buildHeader(div){
    div.appendChild(document.createTextNode('Contact Us...'))

    div.style.color = 'black'
    div.style.fontSize = '32px'

    div.style.display = 'flex'
    div.style.alignItems = 'center'
    div.style.justifyContent = 'center'
}

function buildContent(div){
    const contactTextp = document.createElement('p')
    const contactText = "Hello there";
    contactTextp.appendChild(document.createTextNode(contactText))
    

    div.appendChild(contactTextp)

    div.style.color = 'black'
    div.style.fontSize = '16px'

    div.style.display = 'flex'
    div.style.alignItems = 'center'
    div.style.justifyContent = 'center'
}


/***/ }),

/***/ "./src/tabs/home.js":
/*!**************************!*\
  !*** ./src/tabs/home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildHomeContent: () => (/* binding */ buildHomeContent)
/* harmony export */ });
function buildHomeContent(){

    

    const contentHolder = document.querySelector('.main')

    if(contentHolder.hasChildNodes()){
        for (let i = 0; i < contentHolder.childNodes.length; i++) {
            if(contentHolder.firstChild === null){
                continue
            }
            else{
                contentHolder.removeChild(contentHolder.firstChild);
            }
            
        }
    }

    const gridContainer = document.createElement('div')

    gridContainer.style.display = 'grid'
    gridContainer.style.gridTemplateRows = '1fr 3fr'
    gridContainer.style.gridTemplateColumns = '1fr'

    gridContainer.style.height = '100%'
    gridContainer.style.width = '100%'

    

    buildHomeContentHeader(gridContainer)

    contentHolder.appendChild(gridContainer)

}


function buildHomeContentHeader(container){
    const homeHeader = document.createElement('div')
    buildHeader(homeHeader);

    const homeContent = document.createElement('div')
    buildContent(homeContent)

    

    container.appendChild(homeHeader);
    container.appendChild(homeContent); 
}


function buildHeader(div){
    div.appendChild(document.createTextNode('About...'))

    div.style.color = 'black'
    div.style.fontSize = '32px'

    div.style.display = 'flex'
    div.style.alignItems = 'center'
    div.style.justifyContent = 'center'
}

function buildContent(div){
    const aboutTextp = document.createElement('p')
    aboutTextp.style.padding = '50px'
    aboutTextp.style.maxWidth = '60%'
    aboutTextp.style.lineHeight = '2'
    aboutTextp.style.fontSize = '25px'
    const aboutText1 = "This page is intended to display the various recipes found in the game Valheim. While exploring the game world, this page will be a very handy resource to allow you to quickly decide which resources to look for. Good luck on your future travels, and be sure to watch your back in the swamps!";
    aboutTextp.innerHTML = aboutText1 

    
    

    div.appendChild(aboutTextp)

    div.style.color = 'black'
    div.style.fontSize = '16px'

    div.style.display = 'flex'
    div.style.alignItems = 'center'
    div.style.justifyContent = 'center'
}

/***/ }),

/***/ "./src/tabs/menu.js":
/*!**************************!*\
  !*** ./src/tabs/menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMenuContent: () => (/* binding */ buildMenuContent)
/* harmony export */ });
function buildMenuContent(){
    const contentHolder = document.querySelector('.main')

    if(contentHolder.hasChildNodes()){
        for (let i = 0; i < contentHolder.childNodes.length; i++) {
            if(contentHolder.firstChild === null){
                continue
            }
            else{
                contentHolder.removeChild(contentHolder.firstChild);
            }
            
        }
    }

    const gridContainer = document.createElement('div')

    gridContainer.style.display = 'flex'
    gridContainer.style.flexWrap = 'wrap'
    //gridContainer.style.gridTemplateRows = '1fr 1fr 1fr 1fr 1fr'
    //gridContainer.style.gridTemplateColumns = '1fr 1fr 1fr'

    gridContainer.style.height = '90%'
    gridContainer.style.width = '90%'

    gridContainer.style.border = '3px solid black'
    gridContainer.style.overflowY = 'scroll'
    gridContainer.style.gap = '200px'
    gridContainer.style.marginTop = '30px'

    gridContainer.style.alignItems = 'center'
    gridContainer.style.justifyContent = 'center'
    gridContainer.style.padding = '20px'

    gridContainer.style.maxHeight = '100%'

    buildMenu(gridContainer)
    contentHolder.appendChild(gridContainer)

    contentHolder.style.display = 'flex'
    contentHolder.style.alignItems = 'center'
    contentHolder.style.justifyContent = 'center'

}

function buildMenu(container){
    let row = 0
    let col = 0
    for(let i = 0;i < 14; i++){
        const menuItem = document.createElement('div')
        
        const menuImg = document.createElement('div')
        const menuText = document.createElement('div')
        menuText.appendChild(document.createTextNode('Placeholder'))

        buildMenuImg(menuImg)

        menuItem.appendChild(menuImg)
        menuItem.appendChild(menuText)
        /*
        if(i === 0){
            menuItem.style.gridArea = '1 / 1 / 2 / 2'
        }
        else if(i === 1){
            menuItem.style.gridArea = '1 / 2 / 2 / 3'
        }
        else if(i === 2){
            menuItem.style.gridArea = '1 / 3 / 2 / 4'
        }
        else if(i === 3){
            menuItem.style.gridArea = '2 / 1 / 3 / 2'
        }
        else if(i === 4){
            menuItem.style.gridArea = '2 / 2 / 3 / 3'
        }
        else if(i === 5){
            menuItem.style.gridArea = '2 / 3 / 3 / 4'
        }
        */
        
        container.appendChild(menuItem)
    }
    
    


}


function buildMenuImg(item){
    item.style.height = '150px'
    item.style.width = '150px'
    item.style.border = '5px solid black'
    item.style.marginTOp = '30px'
}

/***/ }),

/***/ "./src/1412416.jpg":
/*!*************************!*\
  !*** ./src/1412416.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da7fdbf4293e498de137.jpg";

/***/ }),

/***/ "./src/9OsQHDB.jpg":
/*!*************************!*\
  !*** ./src/9OsQHDB.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1101e55e878a955f41fe.jpg";

/***/ }),

/***/ "./src/RagnaRunesPersonalUseRegular-Rp7AV.otf":
/*!****************************************************!*\
  !*** ./src/RagnaRunesPersonalUseRegular-Rp7AV.otf ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "16fd94631f697117ae34.otf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buildPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildPage */ "./src/buildPage.js");
/* harmony import */ var _tabs_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/home.js */ "./src/tabs/home.js");
/* harmony import */ var _tabs_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/menu.js */ "./src/tabs/menu.js");
/* harmony import */ var _tabs_contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs/contact.js */ "./src/tabs/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






(0,_buildPage__WEBPACK_IMPORTED_MODULE_0__.buildPage)();

const homeButton = document.querySelector('.homeBttn');
const menuButton = document.querySelector('.menuBttn');
const contactButton = document.querySelector('.contactBttn')


homeButton.addEventListener('click',()=>{
    ;(0,_tabs_home_js__WEBPACK_IMPORTED_MODULE_1__.buildHomeContent)()
})

menuButton.addEventListener('click',()=>{
    ;(0,_tabs_menu_js__WEBPACK_IMPORTED_MODULE_2__.buildMenuContent)()
})

contactButton.addEventListener('click',()=>{
    ;(0,_tabs_contact_js__WEBPACK_IMPORTED_MODULE_3__.buildContactContent)()
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsUUFBUTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlDQUFLO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVLTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUNBQXFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6RU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUNBQXFDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDakZPO0FBQ1A7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFDQUFxQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM5RkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0F1QztBQUNVO0FBQ0E7QUFDTTtBQUNsQztBQUNyQjtBQUNBLHFEQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdFQUFnQjtBQUNwQixDQUFDO0FBQ0Q7QUFDQTtBQUNBLElBQUksZ0VBQWdCO0FBQ3BCLENBQUM7QUFDRDtBQUNBO0FBQ0EsSUFBSSxzRUFBbUI7QUFDdkIsQ0FBQztBQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2J1aWxkUGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy90YWJzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvdGFicy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3RhYnMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1JhZ25hUnVuZXNQZXJzb25hbFVzZVJlZ3VsYXItUnA3QVYub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi85T3NRSERCLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWluLXdpZHRoOiAwOyBcclxuICAgIG1pbi1oZWlnaHQ6IDA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZm9udC1mYW1pbHk6IHZpa2luZztcclxuICAgIFxyXG59XHJcblxyXG5ib2R5LGh0bWx7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDBjN2M0O1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiB2aWtpbmc7XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxufVxyXG5cclxuI2NvbnRlbnR7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhlYWRlcntcclxuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcclxufVxyXG5cclxuXHJcblxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDRDQUFrRDtBQUN0RDs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtREFBZ0M7QUFDcENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtaW4td2lkdGg6IDA7IFxcclxcbiAgICBtaW4taGVpZ2h0OiAwO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBmb250LWZhbWlseTogdmlraW5nO1xcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuYm9keSxodG1se1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMGM3YzQ7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogdmlraW5nO1xcclxcbiAgICBzcmM6IHVybCguL1JhZ25hUnVuZXNQZXJzb25hbFVzZVJlZ3VsYXItUnA3QVYub3RmKTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnR7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJ7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybCgnLi85T3NRSERCLmpwZycpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBJY29uMSBmcm9tICcuLzlPc1FIREIuanBnJztcclxuaW1wb3J0IEljb24yIGZyb20gJy4vMTQxMjQxNi5qcGcnXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUGFnZSgpe1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiSGVyZWVlXCIpXHJcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxyXG4gICAgY29uc3QgZ3JpZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbicpXHJcbiAgICBjb25zdCB0YWJIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cclxuICAgIGJ1aWxkR3JpZChncmlkQ29udGFpbmVyKVxyXG4gICAgYnVpbGRIZWFkZXIoaGVhZGVyKVxyXG4gICAgYnVpbGRNYWluQ29udGVudChtYWluQ29udGVudClcclxuICAgIGJ1aWxkVGFicyh0YWJIb2xkZXIpXHJcbiAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcilcclxuICAgIGdyaWRDb250YWluZXIuYXBwZW5kQ2hpbGQobWFpbkNvbnRlbnQpXHJcbiAgICBncmlkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhYkhvbGRlcilcclxuICAgIFxyXG4gICAgcGFnZS5hcHBlbmRDaGlsZChncmlkQ29udGFpbmVyKVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBidWlsZEdyaWQoY29udGFpbmVyKXtcclxuICAgIGNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnXHJcbiAgICBjb250YWluZXIuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9ICcxLjE1ZnIgMC40M2ZyIDRmcidcclxuICAgIGNvbnRhaW5lci5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gJzFmcidcclxuICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnMTAwJSdcclxuICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9ICcxMDAlJ1xyXG4gICAgXHJcbiAgICBcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRIZWFkZXIoaGVhZGVyKXtcclxuICAgIGNvbnN0IGJhY2tncm91bmRJbWcgPSBuZXcgSW1hZ2UoKVxyXG4gICAgYmFja2dyb3VuZEltZy5zcmMgPSBJY29uMVxyXG4gICAgYmFja2dyb3VuZEltZy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcclxuXHJcbiAgICBzdHlsZUltYWdlKGJhY2tncm91bmRJbWcpXHJcblxyXG4gICAgaGVhZGVyLnN0eWxlLmdyaWRSb3cgPSAnMSAvIDInXHJcbiAgICBoZWFkZXIuc3R5bGUuZ3JpZENvbHVtbiA9ICcxIC8gMidcclxuICAgIGhlYWRlci5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XHJcblxyXG4gICAgaGVhZGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgIGhlYWRlci5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcidcclxuICAgIGhlYWRlci5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdjZW50ZXInXHJcblxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGJhY2tncm91bmRJbWcpXHJcblxyXG4gICAgY29uc3QgdGV4dEhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblxyXG4gICAgdGV4dEhvbGRlci5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIn5XZWxjb21lIHRvIHRoZSBWYWxoZWltIFJlc3RhdXJhbnR+XCIpKVxyXG4gICAgdGV4dEhvbGRlci5zdHlsZS5mb250U2l6ZSA9ICc3NXB4J1xyXG4gICAgdGV4dEhvbGRlci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcclxuICAgIHRleHRIb2xkZXIuc3R5bGUuekluZGV4ID0gJzEnXHJcbiAgICB0ZXh0SG9sZGVyLnN0eWxlLmNvbG9yID0gJyNmZmNjMzMgJ1xyXG4gICAgdGV4dEhvbGRlci5zdHlsZS5ib3JkZXJUb3AgPSAnOHB4IHNvbGlkICNmZmNjMzMgJ1xyXG4gICAgdGV4dEhvbGRlci5zdHlsZS5ib3JkZXJCb3R0b20gPSAnOHB4IHNvbGlkICNmZmNjMzMnXHJcbiAgICBcclxuXHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGV4dEhvbGRlcilcclxufVxyXG5cclxuZnVuY3Rpb24gYnVpbGRNYWluQ29udGVudChtYWluQ29udGVudCl7XHJcbiAgICBtYWluQ29udGVudC5zdHlsZS5ncmlkUm93ID0gJzMgLyA0J1xyXG4gICAgbWFpbkNvbnRlbnQuc3R5bGUuZ3JpZENvbHVtbiA9ICcxIC8gMidcclxuICAgIG1haW5Db250ZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZjVkZWIzJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBidWlsZFRhYnModGFiSG9sZGVyKXtcclxuICAgIFxyXG4gICAgdGFiSG9sZGVyLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCdcclxuICAgIHRhYkhvbGRlci5zdHlsZS5ncmlkUm93ID0gJzIgLyAzJ1xyXG4gICAgdGFiSG9sZGVyLnN0eWxlLmdyaWRDb2x1bW4gPSAnMSAvIDInXHJcbiAgICB0YWJIb2xkZXIuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9ICcxZnIgMWZyIDFmcidcclxuICAgIHRhYkhvbGRlci5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gJzFmcidcclxuICAgIHRhYkhvbGRlci5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcidcclxuICAgIHRhYkhvbGRlci5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdjZW50ZXInXHJcbiAgICB0YWJIb2xkZXIuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnXHJcbiAgIC8vIHRhYkhvbGRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzNkMGMwMidcclxuXHJcbiAgIFxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICBcclxuXHJcbiAgICAvL3RhYkhvbGRlci5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kSW1nKVxyXG4gICAgLy9iYWNrZ3JvdW5kSW1nLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJ1xyXG5cclxuICAgIGJ1aWxkVGFiQnV0dG9ucyh0YWJIb2xkZXIpXHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBzdHlsZUltYWdlKGltZyl7XHJcbiAgICBpbWcuc3R5bGUud2lkdGggPSAnMTAwJSdcclxuICAgIGltZy5zdHlsZS5oZWlnaHQgPSAnMTAwJSdcclxuICAgIGltZy5zdHlsZS5tYXhXaWR0aCA9ICcxMDAlJ1xyXG4gICAgaW1nLnN0eWxlLm1heEhlaWdodCA9ICcxMDAlJ1xyXG4gICAgaW1nLnN0eWxlLm9iamVjdEZpdCA9ICdjb3Zlcic7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzdHlsZUJ1dHRvbihidHRuLGltZyl7XHJcbiAgICAvKlxyXG4gICAgY29uc3QgYnV0dG9uSG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGJ1dHRvbkhvbGRlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnOyAvLyBVc2UgZmxleGJveCB0byBhbGlnbiBpdGVtcyBob3Jpem9udGFsbHlcclxuICAgIGJ1dHRvbkhvbGRlci5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XHJcbiAgICBidXR0b25Ib2xkZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJztcclxuICAgIGJ0dG4uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnXHJcbiAgICBcclxuICAgIGltZy5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSdcclxuICAgIGJ0dG4uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnXHJcbiAgICBidHRuLnN0eWxlLnpJbmRleCA9ICcxJztcclxuXHJcbiAgICBidXR0b25Ib2xkZXIuYXBwZW5kQ2hpbGQoaW1nKVxyXG5cclxuICAgIGJ1dHRvbkhvbGRlci5hcHBlbmRDaGlsZChidHRuKVxyXG5cclxuICAgIHRhYi5hcHBlbmRDaGlsZChidXR0b25Ib2xkZXIpXHJcbiAgICAqL1xyXG4gICAgYnR0bi5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XHJcbiAgICBidHRuLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtpbWcuc3JjfSlgO1xyXG4gICAgYnR0bi5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XHJcbiAgICBidHRuLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICdjZW50ZXInO1xyXG4gICAgYnR0bi5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gJ25vLXJlcGVhdCc7XHJcbiAgICBidHRuLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgIGJ0dG4uc3R5bGUuZm9udFNpemUgPSAnNTBweCdcclxuICAgIGJ0dG4uc3R5bGUuY29sb3IgPSAnI2ZmY2MzMyAnXHJcbiAgICBidHRuLnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJ1xyXG4gICAgYnR0bi5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdjZW50ZXInXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBidWlsZFRhYkJ1dHRvbnModGFiKXtcclxuXHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kSW1nID0gbmV3IEltYWdlKClcclxuICAgIGJhY2tncm91bmRJbWcuc3JjID0gSWNvbjJcclxuXHJcbiAgICBzdHlsZUltYWdlKGJhY2tncm91bmRJbWcpXHJcblxyXG5cclxuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwifkhPTUV+XCJcclxuICAgIGhvbWVCdXR0b24uc3R5bGUuZ3JpZENvbHVtbiA9ICcxIC8gMidcclxuICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnaG9tZUJ0dG4nKVxyXG4gICAgc3R5bGVCdXR0b24oaG9tZUJ1dHRvbixiYWNrZ3JvdW5kSW1nKVxyXG4gXHJcbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSBcIn5NRU5VflwiXHJcbiAgICBtZW51QnV0dG9uLnN0eWxlLmdyaWRDb2x1bW4gPSAnMiAvIDMnXHJcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21lbnVCdHRuJylcclxuICAgIHN0eWxlQnV0dG9uKG1lbnVCdXR0b24sYmFja2dyb3VuZEltZylcclxuICAgIFxyXG4gICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJ+Q09OVEFDVH5cIlxyXG4gICAgY29udGFjdEJ1dHRvbi5zdHlsZS5ncmlkQ29sdW1uID0gJzMgLyA0J1xyXG4gICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjb250YWN0QnR0bicpXHJcbiAgICBzdHlsZUJ1dHRvbihjb250YWN0QnV0dG9uLGJhY2tncm91bmRJbWcpXHJcbiAgICBcclxuICAgIFxyXG4gICAgdGFiLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pXHJcbiAgICB0YWIuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbilcclxuICAgIHRhYi5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKVxyXG4gICAgXHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRDb250YWN0Q29udGVudCgpe1xyXG4gICAgY29uc29sZS5sb2coXCJPSVwiKVxyXG5cclxuICAgIGNvbnN0IGNvbnRlbnRIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpXHJcblxyXG4gICAgaWYoY29udGVudEhvbGRlci5oYXNDaGlsZE5vZGVzKCkpe1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudEhvbGRlci5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKGNvbnRlbnRIb2xkZXIuZmlyc3RDaGlsZCA9PT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50SG9sZGVyLnJlbW92ZUNoaWxkKGNvbnRlbnRIb2xkZXIuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgZ3JpZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcblxyXG4gICAgZ3JpZENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnXHJcbiAgICBncmlkQ29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSAnMWZyIDNmcidcclxuICAgIGdyaWRDb250YWluZXIuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9ICcxZnInXHJcblxyXG4gICAgZ3JpZENvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSAnMTAwJSdcclxuICAgIGdyaWRDb250YWluZXIuc3R5bGUud2lkdGggPSAnMTAwJSdcclxuXHJcbiAgICBcclxuXHJcbiAgICBidWlsZENvbnRhY3RDb250ZW50SGVhZGVyKGdyaWRDb250YWluZXIpXHJcblxyXG4gICAgY29udGVudEhvbGRlci5hcHBlbmRDaGlsZChncmlkQ29udGFpbmVyKVxyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkQ29udGFjdENvbnRlbnRIZWFkZXIoY29udGFpbmVyKXtcclxuICAgIGNvbnN0IGNvbnRhY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgYnVpbGRIZWFkZXIoY29udGFjdEhlYWRlcik7XHJcblxyXG4gICAgY29uc3QgY29udGFjdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgYnVpbGRDb250ZW50KGNvbnRhY3RDb250ZW50KVxyXG5cclxuICAgIFxyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0SGVhZGVyKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0Q29udGVudCk7IFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gYnVpbGRIZWFkZXIoZGl2KXtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnQ29udGFjdCBVcy4uLicpKVxyXG5cclxuICAgIGRpdi5zdHlsZS5jb2xvciA9ICdibGFjaydcclxuICAgIGRpdi5zdHlsZS5mb250U2l6ZSA9ICczMnB4J1xyXG5cclxuICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICBkaXYuc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInXHJcbiAgICBkaXYuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJ1xyXG59XHJcblxyXG5mdW5jdGlvbiBidWlsZENvbnRlbnQoZGl2KXtcclxuICAgIGNvbnN0IGNvbnRhY3RUZXh0cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgY29uc3QgY29udGFjdFRleHQgPSBcIkhlbGxvIHRoZXJlXCI7XHJcbiAgICBjb250YWN0VGV4dHAuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY29udGFjdFRleHQpKVxyXG4gICAgXHJcblxyXG4gICAgZGl2LmFwcGVuZENoaWxkKGNvbnRhY3RUZXh0cClcclxuXHJcbiAgICBkaXYuc3R5bGUuY29sb3IgPSAnYmxhY2snXHJcbiAgICBkaXYuc3R5bGUuZm9udFNpemUgPSAnMTZweCdcclxuXHJcbiAgICBkaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgZGl2LnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJ1xyXG4gICAgZGl2LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2NlbnRlcidcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRIb21lQ29udGVudCgpe1xyXG5cclxuICAgIFxyXG5cclxuICAgIGNvbnN0IGNvbnRlbnRIb2xkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpXHJcblxyXG4gICAgaWYoY29udGVudEhvbGRlci5oYXNDaGlsZE5vZGVzKCkpe1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGVudEhvbGRlci5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKGNvbnRlbnRIb2xkZXIuZmlyc3RDaGlsZCA9PT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50SG9sZGVyLnJlbW92ZUNoaWxkKGNvbnRlbnRIb2xkZXIuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdyaWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG5cclxuICAgIGdyaWRDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdncmlkJ1xyXG4gICAgZ3JpZENvbnRhaW5lci5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gJzFmciAzZnInXHJcbiAgICBncmlkQ29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAnMWZyJ1xyXG5cclxuICAgIGdyaWRDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnXHJcbiAgICBncmlkQ29udGFpbmVyLnN0eWxlLndpZHRoID0gJzEwMCUnXHJcblxyXG4gICAgXHJcblxyXG4gICAgYnVpbGRIb21lQ29udGVudEhlYWRlcihncmlkQ29udGFpbmVyKVxyXG5cclxuICAgIGNvbnRlbnRIb2xkZXIuYXBwZW5kQ2hpbGQoZ3JpZENvbnRhaW5lcilcclxuXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBidWlsZEhvbWVDb250ZW50SGVhZGVyKGNvbnRhaW5lcil7XHJcbiAgICBjb25zdCBob21lSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGJ1aWxkSGVhZGVyKGhvbWVIZWFkZXIpO1xyXG5cclxuICAgIGNvbnN0IGhvbWVDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGJ1aWxkQ29udGVudChob21lQ29udGVudClcclxuXHJcbiAgICBcclxuXHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZUhlYWRlcik7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZUNvbnRlbnQpOyBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkSGVhZGVyKGRpdil7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJ0Fib3V0Li4uJykpXHJcblxyXG4gICAgZGl2LnN0eWxlLmNvbG9yID0gJ2JsYWNrJ1xyXG4gICAgZGl2LnN0eWxlLmZvbnRTaXplID0gJzMycHgnXHJcblxyXG4gICAgZGl2LnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgIGRpdi5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcidcclxuICAgIGRpdi5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdjZW50ZXInXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkQ29udGVudChkaXYpe1xyXG4gICAgY29uc3QgYWJvdXRUZXh0cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgYWJvdXRUZXh0cC5zdHlsZS5wYWRkaW5nID0gJzUwcHgnXHJcbiAgICBhYm91dFRleHRwLnN0eWxlLm1heFdpZHRoID0gJzYwJSdcclxuICAgIGFib3V0VGV4dHAuc3R5bGUubGluZUhlaWdodCA9ICcyJ1xyXG4gICAgYWJvdXRUZXh0cC5zdHlsZS5mb250U2l6ZSA9ICcyNXB4J1xyXG4gICAgY29uc3QgYWJvdXRUZXh0MSA9IFwiVGhpcyBwYWdlIGlzIGludGVuZGVkIHRvIGRpc3BsYXkgdGhlIHZhcmlvdXMgcmVjaXBlcyBmb3VuZCBpbiB0aGUgZ2FtZSBWYWxoZWltLiBXaGlsZSBleHBsb3JpbmcgdGhlIGdhbWUgd29ybGQsIHRoaXMgcGFnZSB3aWxsIGJlIGEgdmVyeSBoYW5keSByZXNvdXJjZSB0byBhbGxvdyB5b3UgdG8gcXVpY2tseSBkZWNpZGUgd2hpY2ggcmVzb3VyY2VzIHRvIGxvb2sgZm9yLiBHb29kIGx1Y2sgb24geW91ciBmdXR1cmUgdHJhdmVscywgYW5kIGJlIHN1cmUgdG8gd2F0Y2ggeW91ciBiYWNrIGluIHRoZSBzd2FtcHMhXCI7XHJcbiAgICBhYm91dFRleHRwLmlubmVySFRNTCA9IGFib3V0VGV4dDEgXHJcblxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYWJvdXRUZXh0cClcclxuXHJcbiAgICBkaXYuc3R5bGUuY29sb3IgPSAnYmxhY2snXHJcbiAgICBkaXYuc3R5bGUuZm9udFNpemUgPSAnMTZweCdcclxuXHJcbiAgICBkaXYuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgZGl2LnN0eWxlLmFsaWduSXRlbXMgPSAnY2VudGVyJ1xyXG4gICAgZGl2LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2NlbnRlcidcclxufSIsImV4cG9ydCBmdW5jdGlvbiBidWlsZE1lbnVDb250ZW50KCl7XHJcbiAgICBjb25zdCBjb250ZW50SG9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKVxyXG5cclxuICAgIGlmKGNvbnRlbnRIb2xkZXIuaGFzQ2hpbGROb2RlcygpKXtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRlbnRIb2xkZXIuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZihjb250ZW50SG9sZGVyLmZpcnN0Q2hpbGQgPT09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgY29udGVudEhvbGRlci5yZW1vdmVDaGlsZChjb250ZW50SG9sZGVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBncmlkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHJcbiAgICBncmlkQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgIGdyaWRDb250YWluZXIuc3R5bGUuZmxleFdyYXAgPSAnd3JhcCdcclxuICAgIC8vZ3JpZENvbnRhaW5lci5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gJzFmciAxZnIgMWZyIDFmciAxZnInXHJcbiAgICAvL2dyaWRDb250YWluZXIuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9ICcxZnIgMWZyIDFmcidcclxuXHJcbiAgICBncmlkQ29udGFpbmVyLnN0eWxlLmhlaWdodCA9ICc5MCUnXHJcbiAgICBncmlkQ29udGFpbmVyLnN0eWxlLndpZHRoID0gJzkwJSdcclxuXHJcbiAgICBncmlkQ29udGFpbmVyLnN0eWxlLmJvcmRlciA9ICczcHggc29saWQgYmxhY2snXHJcbiAgICBncmlkQ29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnXHJcbiAgICBncmlkQ29udGFpbmVyLnN0eWxlLmdhcCA9ICcyMDBweCdcclxuICAgIGdyaWRDb250YWluZXIuc3R5bGUubWFyZ2luVG9wID0gJzMwcHgnXHJcblxyXG4gICAgZ3JpZENvbnRhaW5lci5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcidcclxuICAgIGdyaWRDb250YWluZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJ1xyXG4gICAgZ3JpZENvbnRhaW5lci5zdHlsZS5wYWRkaW5nID0gJzIwcHgnXHJcblxyXG4gICAgZ3JpZENvbnRhaW5lci5zdHlsZS5tYXhIZWlnaHQgPSAnMTAwJSdcclxuXHJcbiAgICBidWlsZE1lbnUoZ3JpZENvbnRhaW5lcilcclxuICAgIGNvbnRlbnRIb2xkZXIuYXBwZW5kQ2hpbGQoZ3JpZENvbnRhaW5lcilcclxuXHJcbiAgICBjb250ZW50SG9sZGVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgIGNvbnRlbnRIb2xkZXIuc3R5bGUuYWxpZ25JdGVtcyA9ICdjZW50ZXInXHJcbiAgICBjb250ZW50SG9sZGVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ2NlbnRlcidcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkTWVudShjb250YWluZXIpe1xyXG4gICAgbGV0IHJvdyA9IDBcclxuICAgIGxldCBjb2wgPSAwXHJcbiAgICBmb3IobGV0IGkgPSAwO2kgPCAxNDsgaSsrKXtcclxuICAgICAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgbWVudUltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgY29uc3QgbWVudVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIG1lbnVUZXh0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdQbGFjZWhvbGRlcicpKVxyXG5cclxuICAgICAgICBidWlsZE1lbnVJbWcobWVudUltZylcclxuXHJcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQobWVudUltZylcclxuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChtZW51VGV4dClcclxuICAgICAgICAvKlxyXG4gICAgICAgIGlmKGkgPT09IDApe1xyXG4gICAgICAgICAgICBtZW51SXRlbS5zdHlsZS5ncmlkQXJlYSA9ICcxIC8gMSAvIDIgLyAyJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGkgPT09IDEpe1xyXG4gICAgICAgICAgICBtZW51SXRlbS5zdHlsZS5ncmlkQXJlYSA9ICcxIC8gMiAvIDIgLyAzJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGkgPT09IDIpe1xyXG4gICAgICAgICAgICBtZW51SXRlbS5zdHlsZS5ncmlkQXJlYSA9ICcxIC8gMyAvIDIgLyA0J1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGkgPT09IDMpe1xyXG4gICAgICAgICAgICBtZW51SXRlbS5zdHlsZS5ncmlkQXJlYSA9ICcyIC8gMSAvIDMgLyAyJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGkgPT09IDQpe1xyXG4gICAgICAgICAgICBtZW51SXRlbS5zdHlsZS5ncmlkQXJlYSA9ICcyIC8gMiAvIDMgLyAzJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGkgPT09IDUpe1xyXG4gICAgICAgICAgICBtZW51SXRlbS5zdHlsZS5ncmlkQXJlYSA9ICcyIC8gMyAvIDMgLyA0J1xyXG4gICAgICAgIH1cclxuICAgICAgICAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcblxyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGJ1aWxkTWVudUltZyhpdGVtKXtcclxuICAgIGl0ZW0uc3R5bGUuaGVpZ2h0ID0gJzE1MHB4J1xyXG4gICAgaXRlbS5zdHlsZS53aWR0aCA9ICcxNTBweCdcclxuICAgIGl0ZW0uc3R5bGUuYm9yZGVyID0gJzVweCBzb2xpZCBibGFjaydcclxuICAgIGl0ZW0uc3R5bGUubWFyZ2luVE9wID0gJzMwcHgnXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGJ1aWxkUGFnZSB9IGZyb20gJy4vYnVpbGRQYWdlJ1xyXG5pbXBvcnQgeyBidWlsZEhvbWVDb250ZW50IH0gZnJvbSAnLi90YWJzL2hvbWUuanMnXHJcbmltcG9ydCB7IGJ1aWxkTWVudUNvbnRlbnQgfSBmcm9tICcuL3RhYnMvbWVudS5qcydcclxuaW1wb3J0IHsgYnVpbGRDb250YWN0Q29udGVudCB9IGZyb20gJy4vdGFicy9jb250YWN0LmpzJ1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmJ1aWxkUGFnZSgpO1xyXG5cclxuY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ob21lQnR0bicpO1xyXG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVCdHRuJyk7XHJcbmNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdEJ0dG4nKVxyXG5cclxuXHJcbmhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICBidWlsZEhvbWVDb250ZW50KClcclxufSlcclxuXHJcbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICBidWlsZE1lbnVDb250ZW50KClcclxufSlcclxuXHJcbmNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICBidWlsZENvbnRhY3RDb250ZW50KClcclxufSlcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==