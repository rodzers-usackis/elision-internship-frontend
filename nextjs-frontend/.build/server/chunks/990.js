"use strict";
exports.id = 990;
exports.ids = [990];
exports.modules = {

/***/ 8463:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ backendURL)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _constants_API__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4484);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// Defaults
axios__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers.post["Content-Type"] = "application/json";
axios__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers.common.Accept = "application/json";
//disable cors?
// axios.defaults.withCredentials = false;
// Backend API URL
const backendURL = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: _constants_API__WEBPACK_IMPORTED_MODULE_1__/* .BACKEND_BASEURL */ .M7
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8990:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fd": () => (/* binding */ deleteTrackedProducts),
/* harmony export */   "Gx": () => (/* binding */ addTrackedProducts),
/* harmony export */   "kZ": () => (/* binding */ updateTrackedProduct),
/* harmony export */   "ye": () => (/* binding */ getTrackedProducts)
/* harmony export */ });
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8463);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var _constants_API__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4484);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_API__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__]);
([_API__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



async function getTrackedProducts() {
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(_constants_API__WEBPACK_IMPORTED_MODULE_2__/* ["default"].TRACKED_PRODUCTS */ .ZP.TRACKED_PRODUCTS);
    return response.data;
}
async function addTrackedProducts(products) {
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post(_constants_API__WEBPACK_IMPORTED_MODULE_2__/* ["default"].TRACKED_PRODUCTS */ .ZP.TRACKED_PRODUCTS, products);
    return response.data;
}
async function deleteTrackedProducts(productIds) {
    return (await axios__WEBPACK_IMPORTED_MODULE_1__["default"]["delete"](_constants_API__WEBPACK_IMPORTED_MODULE_2__/* ["default"].TRACKED_PRODUCTS */ .ZP.TRACKED_PRODUCTS, {
        data: productIds
    })).data;
}
async function updateTrackedProduct(product) {
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].patch(_constants_API__WEBPACK_IMPORTED_MODULE_2__/* ["default"].TRACKED_PRODUCTS */ .ZP.TRACKED_PRODUCTS, product);
    return response.data;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;