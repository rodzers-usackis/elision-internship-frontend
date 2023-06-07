(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 177:
/***/ ((module) => {

// Exports
module.exports = {
	"navbarItem": "DesktopNavbar_navbarItem__ZPVX0",
	"signUpButton": "DesktopNavbar_signUpButton__WA5_b",
	"signUpButtonText": "DesktopNavbar_signUpButtonText__wa8oE",
	"navbarItemButton": "DesktopNavbar_navbarItemButton__gwV_j"
};


/***/ }),

/***/ 6609:
/***/ ((module) => {

// Exports
module.exports = {
	"burgerIcon": "MobileNavbar_burgerIcon__v55Fu",
	"signUpButton": "MobileNavbar_signUpButton__7xGUO",
	"signUpButtonText": "MobileNavbar_signUpButtonText__2J5Om",
	"navbarItemButton": "MobileNavbar_navbarItemButton__UiMvA"
};


/***/ }),

/***/ 2880:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "@mui/material/AppBar"
const AppBar_namespaceObject = require("@mui/material/AppBar");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Grid"
var Grid_ = __webpack_require__(5612);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);
// EXTERNAL MODULE: external "@mui/material/Toolbar"
var Toolbar_ = __webpack_require__(1431);
var Toolbar_default = /*#__PURE__*/__webpack_require__.n(Toolbar_);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
;// CONCATENATED MODULE: ./src/components/navbar/NavbarItems.tsx
const NavbarItems = [
    {
        title: "Services",
        href: "/services",
        className: "nav-links",
        value: 1,
        children: [
            {
                title: "Service 1",
                href: "/service-1",
                className: "nav-links",
                value: 2
            },
            {
                title: "Service 2",
                href: "/service-2",
                className: "nav-links",
                value: 3
            },
            {
                title: "Service 3",
                href: "/service-3",
                className: "nav-links",
                value: 4
            }
        ]
    },
    {
        title: "Pricing",
        href: "/pricing",
        className: "nav-links",
        value: 5
    },
    {
        title: "Resources",
        href: "/resources",
        className: "nav-links",
        value: 6
    },
    {
        title: "About us",
        href: "/about-us",
        className: "nav-links",
        value: 7
    }
];

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/styles/DesktopNavbar.module.css
var DesktopNavbar_module = __webpack_require__(177);
var DesktopNavbar_module_default = /*#__PURE__*/__webpack_require__.n(DesktopNavbar_module);
;// CONCATENATED MODULE: ./src/components/navbar/desktop/DesktopNavbar.tsx












function DesktopNavbar() {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
            className: "appbar-paper",
            sx: {
                position: "sticky",
                top: 0,
                left: 0,
                right: 0,
                backgroundColor: "#fff"
            },
            elevation: 0,
            children: /*#__PURE__*/ jsx_runtime_.jsx((Toolbar_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    container: true,
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingX: 2,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            className: "logo-item",
                            alignContent: "center",
                            md: 3,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/price_spy_logo.svg",
                                    alt: "Price Spy Logo",
                                    width: 100,
                                    height: 60,
                                    priority: true
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            xl: 4,
                            md: 5,
                            sm: 6,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                sx: {
                                    display: "flex",
                                    justifyContent: "space-between"
                                },
                                children: NavbarItems.map((page)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: page.href,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                            disableRipple: true,
                                            className: (DesktopNavbar_module_default()).navbarItemButton,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                className: (DesktopNavbar_module_default()).navbarItem,
                                                children: page.title
                                            })
                                        })
                                    }, page.title))
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            md: 3,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
                                sx: {
                                    display: "flex",
                                    gap: 2,
                                    justifyContent: "end"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/register",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                            disableRipple: true,
                                            className: (DesktopNavbar_module_default()).signUpButton,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                className: (DesktopNavbar_module_default()).signUpButtonText,
                                                children: "Get free trial"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/login",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                            disableRipple: true,
                                            className: (DesktopNavbar_module_default()).navbarItemButton,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                                className: (DesktopNavbar_module_default()).navbarItem,
                                                children: "Sign in"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
}

// EXTERNAL MODULE: ./src/styles/MobileNavbar.module.css
var MobileNavbar_module = __webpack_require__(6609);
var MobileNavbar_module_default = /*#__PURE__*/__webpack_require__.n(MobileNavbar_module);
// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);
// EXTERNAL MODULE: external "@mui/material/Drawer"
var Drawer_ = __webpack_require__(7898);
var Drawer_default = /*#__PURE__*/__webpack_require__.n(Drawer_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);
;// CONCATENATED MODULE: external "@mui/icons-material/Menu"
const Menu_namespaceObject = require("@mui/icons-material/Menu");
var Menu_default = /*#__PURE__*/__webpack_require__.n(Menu_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon.js
var CloseIcon = __webpack_require__(3746);
;// CONCATENATED MODULE: external "@mui/icons-material/Person"
const Person_namespaceObject = require("@mui/icons-material/Person");
var Person_default = /*#__PURE__*/__webpack_require__.n(Person_namespaceObject);
;// CONCATENATED MODULE: ./src/components/navbar/mobile/MobileNavbar.tsx



















function MobileNavbar({ showMobile =false  }) {
    const [isDrawerOpen, setIsDrawerOpen] = (0,external_react_.useState)(false);
    const mobileClass = showMobile ? "" : "hidden";
    const toggleDrawer = ()=>{
        setIsDrawerOpen(!isDrawerOpen);
    };
    const closeDrawer = ()=>{
        setIsDrawerOpen(false);
    };
    const priceSpyLogo = /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: "/",
        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            src: "/price_spy_logo.svg",
            alt: "Price Spy Logo",
            width: 100,
            height: 60,
            priority: true
        })
    });
    const drawerContent = /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Box_default()), {
        sx: {
            width: "100vw"
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                container: true,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingLeft: 2,
                paddingRight: "5px",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        children: priceSpyLogo
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                            onClick: toggleDrawer,
                            size: "large",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(CloseIcon.CloseIcon, {})
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                container: true,
                paddingX: 2,
                children: [
                    NavbarItems.map((page)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                            item: true,
                            width: "100%",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: page.href,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                        disableRipple: true,
                                        className: (MobileNavbar_module_default()).navbarItemButton,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            className: (MobileNavbar_module_default()).navbarItem,
                                            sx: {
                                                fontSize: "20px",
                                                color: "black"
                                            },
                                            children: page.title
                                        })
                                    })
                                }, `mobile_${page.title}_link`),
                                /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {})
                            ]
                        }, `mobile_${page.title}_grid`)),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                        item: true,
                        width: "100%",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/login",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Button_default()), {
                                    disableRipple: true,
                                    className: (MobileNavbar_module_default()).navbarItemButton,
                                    onClick: closeDrawer,
                                    sx: {
                                        paddingLeft: "0px"
                                    },
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((Person_default()), {
                                            fontSize: "large",
                                            sx: {
                                                color: "black"
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                            className: (MobileNavbar_module_default()).navbarItem,
                                            sx: {
                                                fontSize: "20px",
                                                color: "black",
                                                paddingLeft: "10px"
                                            },
                                            children: "Sign in"
                                        })
                                    ]
                                })
                            }, "mobile_login_button"),
                            /*#__PURE__*/ jsx_runtime_.jsx((Divider_default()), {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                        item: true,
                        width: "100%",
                        paddingTop: 3,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/register",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                disableRipple: true,
                                className: (MobileNavbar_module_default()).signUpButton,
                                fullWidth: true,
                                onClick: closeDrawer,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                                    className: (MobileNavbar_module_default()).signUpButtonText,
                                    children: "Get free trial"
                                })
                            })
                        }, "mobile_register_button")
                    })
                ]
            })
        ]
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((AppBar_default()), {
            className: `appbar-paper ${mobileClass}`,
            sx: {
                position: "sticky",
                top: 0,
                left: 0,
                right: 0,
                backgroundColor: "#fff"
            },
            elevation: 0,
            children: /*#__PURE__*/ jsx_runtime_.jsx((Toolbar_default()), {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                    container: true,
                    justifyContent: "space-between",
                    alignItems: "center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            className: "logo-item",
                            justifyContent: "center",
                            alignContent: "center",
                            children: priceSpyLogo
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                            item: true,
                            display: "flex",
                            justifyContent: "end",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((IconButton_default()), {
                                size: "large",
                                "aria-label": "account of current user",
                                "aria-controls": "menu-appbar",
                                "aria-haspopup": "true",
                                color: "inherit",
                                onClick: toggleDrawer,
                                children: /*#__PURE__*/ jsx_runtime_.jsx((Menu_default()), {
                                    className: (MobileNavbar_module_default()).burgerIcon,
                                    fontSize: "large"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Drawer_default()), {
                            anchor: "right",
                            open: isDrawerOpen,
                            onClose: toggleDrawer,
                            transitionDuration: 0,
                            children: drawerContent
                        })
                    ]
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/components/navbar/Navbar.tsx




function Navbar() {
    const matches = (0,material_.useMediaQuery)("(min-width:1020px)");
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: matches ? /*#__PURE__*/ jsx_runtime_.jsx(DesktopNavbar, {}) : /*#__PURE__*/ jsx_runtime_.jsx(MobileNavbar, {
            showMobile: matches
        })
    });
}


/***/ }),

/***/ 3542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    isAuthenticated: ()=>false,
    loggedInUser: null,
    login: (val)=>{},
    logout: ()=>{},
    isLoading: true
}));


/***/ }),

/***/ 9225:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AuthenticationContextProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9272);
/* harmony import */ var _services_api_authentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9288);
/* harmony import */ var react_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8816);
/* harmony import */ var react_jwt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jwt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9752);
/* harmony import */ var _AuthenticationContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3542);
/* harmony import */ var _services_api_users__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4346);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_api_authentication__WEBPACK_IMPORTED_MODULE_3__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__, _services_api_users__WEBPACK_IMPORTED_MODULE_7__, axios__WEBPACK_IMPORTED_MODULE_9__]);
([_services_api_authentication__WEBPACK_IMPORTED_MODULE_3__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__, _services_api_users__WEBPACK_IMPORTED_MODULE_7__, axios__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function AuthenticationContextProvider({ children  }) {
    const [accessToken, setAccessToken, removeAccessToken] = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)("accessToken");
    const { data: authenticationResponse , mutateAsync: mutateLoggingInAsync , isLoading: isLoadingAuthentication , isError: isErrorAuthentication  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useMutation)([
        "login"
    ], _services_api_authentication__WEBPACK_IMPORTED_MODULE_3__/* .loginOnBackend */ .$0);
    const { data: user , isLoading: isLoadingUser , isError: isErrorUser  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.useQuery)({
        queryKey: [
            "user"
        ],
        queryFn: _services_api_users__WEBPACK_IMPORTED_MODULE_7__/* .fetchUserInfo */ .C,
        enabled: isAuthenticated(),
        onError: (error)=>{
            // @ts-ignore
            if (!!error.config.headers.Authorization) {
                removeAccessToken();
                delete axios__WEBPACK_IMPORTED_MODULE_9__["default"].defaults.headers.common.Authorization;
            }
        }
    });
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_services_api_authentication__WEBPACK_IMPORTED_MODULE_3__/* .setAccessTokenInHttpHeader */ .SL)(accessToken);
    }, [
        accessToken
    ]);
    // if (isLoadingAuthentication || isLoadingUser) {
    //     return (<Box sx={{display: 'flex', justifyContent: 'center', alignItems:'center', minHeight:'80%'}}><CircularProgress/></Box>)
    // }
    function isAuthenticated() {
        console.log(!(0,react_jwt__WEBPACK_IMPORTED_MODULE_4__.isExpired)(accessToken), "access token", accessToken);
        return !(0,react_jwt__WEBPACK_IMPORTED_MODULE_4__.isExpired)(accessToken);
    }
    function login(credentials, onSuccess, onError) {
        return mutateLoggingInAsync(credentials).then((response)=>{
            console.log(response, "logging in response");
            setAccessToken(response.accessToken);
            onSuccess();
            return response;
        }).catch((error)=>{
            onError();
        });
    }
    function logout() {
        removeAccessToken();
        delete axios__WEBPACK_IMPORTED_MODULE_9__["default"].defaults.headers.common.Authorization;
        router.push("/?logout=true");
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AuthenticationContext__WEBPACK_IMPORTED_MODULE_6__/* ["default"].Provider */ .Z.Provider, {
        value: {
            isAuthenticated,
            loggedInUser: user || null,
            login,
            logout,
            isLoading: isLoadingAuthentication || isLoadingUser
        },
        children: children
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6688:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RouteProtector)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AuthenticationContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3542);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




const authenticatedUserRoutes = [
    "/dashboard/my-catalog",
    "/dashboard/reports",
    "/dashboard/alerts"
];
const unauthenticatedUserRoutes = [
    "/",
    "/login",
    "/register"
];
function RouteProtector({ children  }) {
    const { isAuthenticated  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_AuthenticationContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log(router.pathname);
        console.log(isAuthenticated);
        console.log(authenticatedUserRoutes.includes(router.pathname));
        // Redirect if user is not authenticated and accessing authenticated routes
        if (!isAuthenticated() && authenticatedUserRoutes.includes(router.pathname)) {
            router.replace("/login"); // Redirect to login page
        }
        // Redirect if user is authenticated and accessing unauthenticated routes
        if (isAuthenticated() && unauthenticatedUserRoutes.includes(router.pathname)) {
            router.replace("/dashboard/my-catalog"); // Redirect to dashboard
        }
    }, [
        isAuthenticated,
        router
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: children
    });
}


/***/ }),

/***/ 6101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ RegistrationFormContextProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _RegistrationFormContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8828);



function RegistrationFormContextProvider({ children  }) {
    // Company Information Form
    const [companyName, setCompanyName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [vatNumber, setVatNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [companyWebsite, setCompanyWebsite] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [productCategory, setProductCategory] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        ""
    ]);
    // Company Address Form
    const [streetAddress, setStreetAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [streetNumber, setStreetNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [city, setCity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [zipCode, setZipCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [country, setCountry] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // User Credential Form
    const [firstName, setFirstName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [lastName, setLastName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [emailAddress, setEmailAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // Errors
    const [companyInformationFormFieldErrors, setCompanyInformationFormFieldErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        companyName: "",
        vatNumber: "",
        companyWebsite: "",
        productCategory: ""
    });
    const [companyAddressFormFieldErrors, setCompanyAddressFormFieldErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        streetAddress: "",
        streetNumber: "",
        city: "",
        zipCode: "",
        country: ""
    });
    const [userCredentialFormFieldErrors, setUserCredentialFormFieldErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: ""
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_RegistrationFormContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Provider */ .Z.Provider, {
        value: {
            companyName,
            setCompanyName,
            vatNumber,
            setVatNumber,
            companyWebsite,
            setCompanyWebsite,
            productCategory,
            setProductCategory,
            streetAddress,
            setStreetAddress,
            streetNumber,
            setStreetNumber,
            city,
            setCity,
            state,
            setState,
            zipCode,
            setZipCode,
            country,
            setCountry,
            firstName,
            setFirstName,
            lastName,
            setLastName,
            emailAddress,
            setEmailAddress,
            password,
            setPassword,
            companyInformationFormFieldErrors,
            setCompanyInformationFormFieldErrors,
            companyAddressFormFieldErrors,
            setCompanyAddressFormFieldErrors,
            userCredentialFormFieldErrors,
            setUserCredentialFormFieldErrors
        },
        children: children
    });
}


/***/ }),

/***/ 9272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useLocalStorage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useLocalStorage(key) {
    const [value, setValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const getValue = async ()=>{
            const storageValue = await localStorage.getItem(key);
            setValue(storageValue);
        };
        getValue();
    }, [
        key
    ]);
    const setter = (newValue)=>{
        if (newValue !== value && !!newValue) {
            localStorage.setItem(key, newValue);
            setValue(newValue);
        }
    };
    const remove = ()=>{
        setValue(null);
        localStorage.removeItem(key);
    };
    return [
        value,
        setter,
        remove
    ];
}


/***/ }),

/***/ 9212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(108);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context_authentication_AuthenticationContextProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9225);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9752);
/* harmony import */ var _components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2880);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _context_authentication_RouteProtector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6688);
/* harmony import */ var _context_register_RegistrationFormContextProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6101);
/* harmony import */ var _tawk_to_tawk_messenger_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1725);
/* harmony import */ var _tawk_to_tawk_messenger_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_tawk_to_tawk_messenger_react__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context_authentication_AuthenticationContextProvider__WEBPACK_IMPORTED_MODULE_4__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__]);
([_context_authentication_AuthenticationContextProvider__WEBPACK_IMPORTED_MODULE_4__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// import ThemeProvider from "@mui/material/styles/ThemeProvider";
// import {createTheme} from "@mui/material/styles";






// @ts-ignore

function App({ Component , pageProps  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClient();
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__.createTheme)({
        typography: {
            fontFamily: "Inter, sans-serif",
            button: {
                textTransform: "none"
            }
        }
    });
    const isDashboardPage = router.pathname.startsWith(`/dashboard`);
    const isRegisterPage = router.pathname.startsWith(`/register`);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClientProvider, {
        client: queryClient,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_authentication_AuthenticationContextProvider__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {
                theme: theme,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_tawk_to_tawk_messenger_react__WEBPACK_IMPORTED_MODULE_10___default()), {
                        propertyId: "6478a7c274285f0ec46efa44",
                        widgetId: "1h1rkuk8o"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_context_authentication_RouteProtector__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        children: [
                            !isDashboardPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_navbar_Navbar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                            isRegisterPage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_register_RegistrationFormContextProvider__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                    ...pageProps
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                ...pageProps
                            })
                        ]
                    })
                ]
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4346:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ fetchUserInfo)
/* harmony export */ });
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8463);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
/* harmony import */ var _constants_API__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4484);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_API__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__]);
([_API__WEBPACK_IMPORTED_MODULE_0__, axios__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



async function fetchUserInfo() {
    const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get(_constants_API__WEBPACK_IMPORTED_MODULE_2__/* ["default"].ME */ .ZP.ME);
    return response.data;
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 108:
/***/ (() => {



/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 19:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Button");

/***/ }),

/***/ 3646:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 7898:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Drawer");

/***/ }),

/***/ 5612:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 7934:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 1431:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ 7163:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 1725:
/***/ ((module) => {

"use strict";
module.exports = require("@tawk.to/tawk-messenger-react");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 8816:
/***/ ((module) => {

"use strict";
module.exports = require("react-jwt");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9752:
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,675,664,746,484,106], () => (__webpack_exec__(9212)));
module.exports = __webpack_exports__;

})();