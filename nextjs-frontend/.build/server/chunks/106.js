"use strict";
exports.id = 106;
exports.ids = [106];
exports.modules = {

/***/ 8828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    // Company Information Form
    companyName: "",
    setCompanyName: (value)=>{},
    vatNumber: "",
    setVatNumber: (value)=>{},
    companyWebsite: "",
    setCompanyWebsite: (value)=>{},
    productCategory: [
        ""
    ],
    setProductCategory: (value)=>{},
    // Company Address Form
    streetAddress: "",
    setStreetAddress: (value)=>{},
    streetNumber: "",
    setStreetNumber: (value)=>{},
    city: "",
    setCity: (value)=>{},
    state: "",
    setState: (value)=>{},
    zipCode: "",
    setZipCode: (value)=>{},
    country: "",
    setCountry: (value)=>{},
    // User Credential Form
    firstName: "",
    setFirstName: (value)=>{},
    lastName: "",
    setLastName: (value)=>{},
    emailAddress: "",
    setEmailAddress: (value)=>{},
    password: "",
    setPassword: (value)=>{},
    companyInformationFormFieldErrors: {
        companyName: "",
        vatNumber: "",
        companyWebsite: "",
        productCategory: ""
    },
    setCompanyInformationFormFieldErrors: (value)=>{},
    companyAddressFormFieldErrors: {
        streetAddress: "",
        streetNumber: "",
        city: "",
        zipCode: "",
        country: ""
    },
    setCompanyAddressFormFieldErrors: (value)=>{},
    userCredentialFormFieldErrors: {
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: ""
    },
    setUserCredentialFormFieldErrors: (value)=>{}
}));


/***/ }),

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

/***/ 9288:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$0": () => (/* binding */ loginOnBackend),
/* harmony export */   "SL": () => (/* binding */ setAccessTokenInHttpHeader),
/* harmony export */   "z2": () => (/* binding */ register)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _constants_API__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4484);
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8463);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _API__WEBPACK_IMPORTED_MODULE_2__]);
([axios__WEBPACK_IMPORTED_MODULE_0__, _API__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



async function loginOnBackend(credentials) {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(_constants_API__WEBPACK_IMPORTED_MODULE_1__/* ["default"].LOGIN */ .ZP.LOGIN, credentials);
    return response.data;
}
//TODO: backend returns accessToken on successful registration - add it then
async function register(registrationForm) {
    try {
        const response = await _API__WEBPACK_IMPORTED_MODULE_2__/* .backendURL.post */ .y.post(_constants_API__WEBPACK_IMPORTED_MODULE_1__/* ["default"].REGISTER */ .ZP.REGISTER, registrationForm);
        return {
            accessToken: response.data.accessToken,
            status: response.status,
            message: response.data.message
        };
    } catch (error) {
        return {
            accessToken: "",
            status: error.response.status,
            message: error.response.data.message
        };
    }
}
function setAccessTokenInHttpHeader(token) {
    if (!!token) {
        axios__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers.common.Authorization = `Bearer ${token}`;
    } else delete axios__WEBPACK_IMPORTED_MODULE_0__["default"].defaults.headers.common.Authorization;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;