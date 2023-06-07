"use strict";
exports.id = 484;
exports.ids = [484];
exports.modules = {

/***/ 4484:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M7": () => (/* binding */ BACKEND_BASEURL),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export API_ROUTES */
const PORT = 8080;
const BACKEND_BASEURL = `https://pricing-as-a-service.ew.r.appspot.com`;
const API_ROUTES = {
    LOGIN: `${BACKEND_BASEURL}/api/auth/login`,
    REGISTER: `${BACKEND_BASEURL}/api/auth/register`,
    ME: `${BACKEND_BASEURL}/api/users/me`,
    TRACKED_PRODUCTS: `${BACKEND_BASEURL}/api/client-company/tracked-products`,
    ALERTS: `${BACKEND_BASEURL}/api/alerts`,
    ALERT_SETTINGS: `${BACKEND_BASEURL}/api/alert-settings`,
    ALERT_RULES: `${BACKEND_BASEURL}/api/alert-rules`,
    ALERT_COUNT: `${BACKEND_BASEURL}/api/alerts/unread/count`,
    SCRAPING_TASKS: `${BACKEND_BASEURL}/api/scraping-tasks`,
    PRODUCT_PRICE_HISTORY: `${BACKEND_BASEURL}/api/prices/products`,
    RETAILER_COMPANIES: `${BACKEND_BASEURL}/api/retailer-companies`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API_ROUTES);


/***/ })

};
;